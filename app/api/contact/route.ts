import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const isDev = process.env.NODE_ENV !== 'production' || process.env.DEBUG_EMAIL === 'true'
    const body = await request.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const subject = String(body.subject || '').trim()
    const message = String(body.message || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`

    // 1) Send via SendGrid if configured
    if (process.env.SENDGRID_API_KEY) {
      const from = process.env.SENDGRID_FROM || process.env.FROM_EMAIL || 'no-reply@example.com'
      const sgTo = process.env.CONTACT_TO || from

      console.log('SendGrid - sending email to:', sgTo)

      const payload = {
        personalizations: [
          {
            to: [{ email: sgTo }],
            subject: subject || 'New contact message',
          },
        ],
        from: { email: from },
        content: [{ type: 'text/plain', value: text }],
      }

      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errText = await res.text().catch(() => '')
        console.error('SendGrid error', errText)
        const respBody: any = { error: 'Failed to send email (SendGrid)' }
        if (isDev) respBody.details = errText
        return NextResponse.json(respBody, { status: 500 })
      }

      const respBody: any = { ok: true }
      if (isDev) respBody.to = sgTo
      return NextResponse.json(respBody)
    }

    // 2) Send via SMTP if configured (requires nodemailer installed)
    if (process.env.SMTP_HOST) {
      try {
        const nodemailer = await import('nodemailer')

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: process.env.SMTP_USER
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
        })

        const toAddress = process.env.SMTP_TO || process.env.SMTP_USER
        console.log('SMTP - sending email to:', toAddress)

        const mailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@example.com',
          to: toAddress,
          subject: subject || 'New contact message',
          text,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
        }

        const info = await transporter.sendMail(mailOptions)
        console.log('SMTP send info:', info)

        const respBody: any = { ok: true }
        if (isDev) respBody.to = toAddress
        return NextResponse.json(respBody)
      } catch (err: any) {
        console.error('SMTP send error', err)
        const respBody: any = { error: 'Failed to send email (SMTP)' }
        if (isDev) {
          respBody.details = err?.message || String(err)
          if (err?.stack) respBody.stack = err.stack
        }
        return NextResponse.json(respBody, { status: 500 })
      }
    }

    // Fallback: log submission to the server logs and accept
    console.log('Contact form submission (no mail provider configured):', { name, email, subject, message })
    return NextResponse.json({ ok: true, note: 'logged' })
  } catch (err: any) {
    console.error(err)
    const body: any = { error: 'Invalid request' }
    if (process.env.NODE_ENV !== 'production') body.details = err?.message || String(err)
    return NextResponse.json(body, { status: 400 })
  }
}
