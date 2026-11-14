import type { Level } from './types.ts'
import { foundational } from './foundational.ts'

const upcoming = (number: number, title: string, summary: string): Level => ({
  id: title.toLowerCase().replace(/\s+/g, '-'),
  number,
  title,
  published: false,
  summary,
  modules: [],
})

/**
 * To publish a new level: add a file like foundational.ts with `published: true`
 * and replace its placeholder below. Drop the PDF into /public and set `pdf`.
 */
export const levels: Level[] = [
  foundational,
  upcoming(2, 'Practitioner', 'Settings, memory, Projects, Skills, verification and the agentic loop.'),
  upcoming(3, 'Advanced', 'Developer Platform, API and Agent SDK.'),
  upcoming(4, 'Expert', 'Designing how others work with Claude.'),
  upcoming(5, 'Upcoming', 'Details to be announced.'),
]

export const allModules = levels.flatMap((l) =>
  l.modules.map((m) => ({ level: l, module: m })),
)

export const findLevel = (id: string) => levels.find((l) => l.id === id)
