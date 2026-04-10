import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/mrcoffeex',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/kentjohngo/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:gocotano.kentjohn@example.com',
    label: 'Email',
  },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="font-bold text-xl text-foreground">
              Kent<span className="text-orange-500">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-orange-500/50 bg-card transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kent Gocotano. All rights reserved.
          </p>
            <p className="text-xs text-muted-foreground">
            Built with{' '}
            <span className="text-orange-400">Next.js</span> &{' '}
            <span className="text-orange-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
