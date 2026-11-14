export type ModuleStatus = 'CORE' | 'ELECTIVE'

export interface Chapter {
  title: string
  topics: string[]
}

export interface Module {
  id: string
  title: string
  status: ModuleStatus
  audience: string
  hours: number
  prerequisite: string
  note?: string
  objective: string
  chapters: Chapter[]
  workplace: string
  exercises: string[]
  competency: string
  next: string
  /** In-depth study material, researched beyond the syllabus PDF */
  notes?: StudyNotes
}

/** Text fields may use `backticks` for inline code and **double asterisks** for bold. */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'example'; title: string; text: string }
  | { type: 'tip'; text: string }
  | { type: 'warning'; text: string }

export interface NoteSection {
  /** Matches a Chapter.title in the syllabus */
  chapter: string
  blocks: Block[]
}

export interface QuizQuestion {
  question: string
  options: string[]
  /** index into options */
  answer: number
  explanation: string
}

export interface StudyNotes {
  overview: string
  sections: NoteSection[]
  keyFacts: string[]
  glossary: { term: string; definition: string }[]
  pitfalls: string[]
  exerciseGuides: { exercise: string; guide: Block[] }[]
  quiz: QuizQuestion[]
  sources: { title: string; url: string }[]
}

export interface Level {
  id: string
  number: number
  title: string
  /** false → rendered as a "coming soon" placeholder */
  published: boolean
  pdf?: string
  summary: string
  intro?: string[]
  teachingOrder?: string
  assessment?: string
  modules: Module[]
  leadsTo?: { finished: string; next: string }[]
}
