'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface ContributionDay {
  contributionCount: number
  date: string
  color: string
}

interface Week {
  contributionDays: ContributionDay[]
}

interface ContributionData {
  totalContributions: number
  totalCommits: number
  totalPRs: number
  totalIssues: number
  weeks: Week[]
}

// Map GitHub's green palette to theme-aware indigo/purple palette
function getColor(count: number, isDark: boolean): string {
  if (count === 0) return isDark ? '#1a1a2e' : '#eef0f5'
  if (count <= 2)  return isDark ? '#3730a3' : '#c7d2fe'
  if (count <= 5)  return isDark ? '#4f46e5' : '#818cf8'
  if (count <= 10) return isDark ? '#6366f1' : '#6366f1'
  return isDark ? '#a78bfa' : '#4f46e5'
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionData | null>(null)
  const [error, setError] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    fetch('/api/github/contributions')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(setData)
      .catch(() => setError(true))
  }, [])

  if (error) {
    return (
      <p className="text-sm text-muted-foreground font-mono">
        GitHub activity unavailable — set <span className="text-indigo-400">GITHUB_TOKEN</span> to enable.
      </p>
    )
  }

  if (!data) {
    return (
      <div className="space-y-3 animate-pulse">
        <div className="h-3 w-48 rounded bg-muted" />
        <div className="h-24 rounded bg-muted" />
        <div className="flex gap-3">
          <div className="h-8 flex-1 rounded bg-muted" />
          <div className="h-8 flex-1 rounded bg-muted" />
          <div className="h-8 flex-1 rounded bg-muted" />
        </div>
      </div>
    )
  }

  const CELL = 12
  const GAP = 3
  const STEP = CELL + GAP

  // Build month labels from the weeks
  const monthLabels: { label: string; x: number }[] = []
  data.weeks.forEach((week, wi) => {
    const firstDay = week.contributionDays[0]
    if (!firstDay) return
    const d = new Date(firstDay.date)
    if (d.getDate() <= 7) {
      // avoid duplicate months
      const month = MONTHS[d.getMonth()]
      if (!monthLabels.length || monthLabels[monthLabels.length - 1].label !== month) {
        monthLabels.push({ label: month, x: wi * STEP })
      }
    }
  })

  const DAY_LABEL_W = 28
  const GRID_OFFSET = DAY_LABEL_W + 4
  const svgWidth = data.weeks.length * STEP
  const totalW = GRID_OFFSET + svgWidth
  const SVG_H = 7 * STEP + 20 // 7 rows + room for month labels

  return (
    <div className="space-y-5">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Contributions', value: data.totalContributions.toLocaleString() },
          { label: 'Commits', value: data.totalCommits.toLocaleString() },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg border border-border bg-background px-4 py-3">
            <p className="text-lg font-bold text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Contribution heatmap — single full-width SVG */}
      <svg
        width="100%"
        viewBox={`0 0 ${totalW} ${SVG_H}`}
        preserveAspectRatio="xMidYMid meet"
        className="select-none w-full"
      >
        {/* Day-of-week labels */}
        {DAYS.map((day, i) =>
          day ? (
            <text
              key={i}
              x={DAY_LABEL_W}
              y={i * STEP + CELL + 14}
              fontSize={9}
              textAnchor="end"
              fill={isDark ? '#6b7280' : '#9ca3af'}
            >
              {day}
            </text>
          ) : null
        )}

        {/* Month labels */}
        {monthLabels.map(({ label, x }) => (
          <text
            key={`${label}-${x}`}
            x={GRID_OFFSET + x}
            y={9}
            fontSize={9}
            fill={isDark ? '#6b7280' : '#9ca3af'}
          >
            {label}
          </text>
        ))}

        {/* Cells */}
        {data.weeks.map((week, wi) =>
          week.contributionDays.map((day, di) => (
            <rect
              key={day.date}
              x={GRID_OFFSET + wi * STEP}
              y={di * STEP + 14}
              width={CELL}
              height={CELL}
              rx={2}
              ry={2}
              fill={getColor(day.contributionCount, isDark)}
              className="transition-colors duration-200"
            >
              <title>{`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''}`}</title>
            </rect>
          ))
        )}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground justify-end">
        <span>Less</span>
        {[0, 2, 5, 8, 12].map(count => (
          <svg key={count} width={CELL} height={CELL}>
            <rect width={CELL} height={CELL} rx={2} fill={getColor(count, isDark)} />
          </svg>
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
