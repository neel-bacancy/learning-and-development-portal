import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { allModules, findLevel, levels } from './data/levels.ts'
import type { Block, Level, Module } from './data/types.ts'
import Rich from './Rich.tsx'
import { ExerciseGuidesView, KeyFactsView, Quiz, SourcesView, StudyNotesView } from './ModuleNotes.tsx'

/* ---------- tiny history router ---------- */

const ROUTE_EVENT = 'routechange'

const navigate = (path: string) => {
  if (path === window.location.pathname) return
  window.history.pushState(null, '', path)
  window.dispatchEvent(new Event(ROUTE_EVENT))
}

const useRoute = () => {
  const [path, setPath] = useState(() => window.location.pathname)
  useEffect(() => {
    const onChange = () => {
      setPath(window.location.pathname)
      window.scrollTo(0, 0)
    }
    // Turn clicks on internal links (e.g. "/foundational") into client-side navigation
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as Element).closest('a')
      const href = a?.getAttribute('href')
      if (!a || !href?.startsWith('/') || a.target || /\.[a-z0-9]+$/i.test(href)) return
      e.preventDefault()
      navigate(href)
    }
    window.addEventListener('popstate', onChange)
    window.addEventListener(ROUTE_EVENT, onChange)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener(ROUTE_EVENT, onChange)
      document.removeEventListener('click', onClick)
    }
  }, [])
  return path.split('/').filter(Boolean).map(decodeURIComponent)
}

/* ---------- progress (localStorage) ---------- */

const KEY = 'ldp-progress'

const useProgress = () => {
  const [done, setDone] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '[]')
    } catch {
      return []
    }
  })
  const toggle = (id: string) =>
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      try {
        localStorage.setItem(KEY, JSON.stringify(next))
      } catch {
        /* storage unavailable — keep in-memory state */
      }
      return next
    })
  return { done, toggle }
}

type Progress = ReturnType<typeof useProgress>

/* ---------- helpers ---------- */

const fmtHours = (h: number) => `${h}h`

const Badge = ({ status }: { status: Module['status'] }) => (
  <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
)

const pdfHref = (p: string) => encodeURI(p)

const blockText = (b: Block): string[] =>
  b.type === 'list' ? b.items
    : b.type === 'table' ? [...b.head, ...b.rows.flat()]
      : b.type === 'example' ? [b.title, b.text]
        : [b.text]

/** Syllabus plus study notes, lowercased once for search */
const searchIndex = allModules.map(({ level, module: m }) => ({
  level,
  module: m,
  text: [
    m.id,
    m.title,
    m.objective,
    ...m.chapters.flatMap((c) => [c.title, ...c.topics]),
    ...(m.notes
      ? [
          ...m.notes.sections.flatMap((s) => s.blocks.flatMap(blockText)),
          ...m.notes.keyFacts,
          ...m.notes.glossary.flatMap((g) => [g.term, g.definition]),
        ]
      : []),
  ]
    .join(' ')
    .toLowerCase(),
}))

/* ---------- pages ---------- */

function Home({ progress }: { progress: Progress }) {
  const [q, setQ] = useState('')
  const total = allModules.length
  const doneCount = allModules.filter((x) => progress.done.includes(x.module.id)).length
  const published = levels.filter((l) => l.published).length

  const results = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return []
    return searchIndex.filter((x) => x.text.includes(s))
  }, [q])

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Claude AI Certification Program</p>
        <h1>Learn Claude, level by level</h1>
        <p className="lead">
          Detailed syllabi, hands-on exercises and competency goals for every module
          — from first prompts to safe, agentic work.
        </p>
        <div className="stats">
          <div><strong>{published}</strong><span>of {levels.length} levels live</span></div>
          <div><strong>{total}</strong><span>modules</span></div>
          <div>
            <strong>{doneCount}/{total}</strong>
            <span>completed by you</span>
          </div>
        </div>
        <input
          className="search"
          type="search"
          placeholder="Search topics, e.g. MCP, tokens, prompt injection…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search modules"
        />
      </section>

      {q.trim() ? (
        <section>
          <h2>{results.length} result{results.length === 1 ? '' : 's'}</h2>
          <div className="list">
            {results.map(({ level, module: m }) => (
              <a key={m.id} className="row" href={`/${level.id}/${m.id}`}>
                <span className="mid">{m.id}</span>
                <span className="row-title">{m.title}</span>
                <span className="muted">{level.title}</span>
              </a>
            ))}
          </div>
        </section>
      ) : (
        <section>
          <h2>Levels</h2>
          <div className="grid">
            {levels.map((l) => (
              <LevelCard key={l.id} level={l} progress={progress} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}

function LevelCard({ level, progress }: { level: Level; progress: Progress }) {
  const done = level.modules.filter((m) => progress.done.includes(m.id)).length
  const pct = level.modules.length ? (done / level.modules.length) * 100 : 0
  const hours = level.modules.reduce((s, m) => s + m.hours, 0)

  const body = (
    <>
      <div className="card-top">
        <span className="level-no">Level {level.number}</span>
        {!level.published && <span className="badge badge-soon">Coming soon</span>}
      </div>
      <h3>{level.title}</h3>
      <p>{level.summary}</p>
      {level.published && (
        <>
          <div className="meta">
            {level.modules.length} modules · {hours}h
          </div>
          <div className="bar" aria-label={`${done} of ${level.modules.length} done`}>
            <div style={{ width: `${pct}%` }} />
          </div>
        </>
      )}
    </>
  )

  return level.published ? (
    <a className="card" href={`/${level.id}`}>{body}</a>
  ) : (
    <div className="card card-disabled">{body}</div>
  )
}

function LevelPage({ level, progress }: { level: Level; progress: Progress }) {
  const hours = level.modules.reduce((s, m) => s + m.hours, 0)
  return (
    <>
      <Crumbs items={[[level.title]]} />
      <header className="page-head">
        <p className="eyebrow">Level {level.number}</p>
        <h1>{level.title}</h1>
        <p className="meta">{level.modules.length} modules · {hours} hours</p>
        {level.pdf && (
          <a className="btn" href={pdfHref(level.pdf)} target="_blank" rel="noreferrer">
            Open syllabus PDF
          </a>
        )}
      </header>

      {level.intro?.map((p, i) => <p key={i} className="prose">{p}</p>)}

      <h2>Modules in this level</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th></th><th>#</th><th>Module</th><th>Status</th><th>Audience</th><th>Hours</th></tr>
          </thead>
          <tbody>
            {level.modules.map((m) => (
              <tr key={m.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={progress.done.includes(m.id)}
                    onChange={() => progress.toggle(m.id)}
                    aria-label={`Mark ${m.id} complete`}
                  />
                </td>
                <td>{m.id}</td>
                <td><a href={`/${level.id}/${m.id}`}>{m.title}</a></td>
                <td><Badge status={m.status} /></td>
                <td>{m.audience}</td>
                <td>{m.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {level.teachingOrder && (
        <div className="callout"><strong>Teaching order.</strong> {level.teachingOrder}</div>
      )}
      {level.assessment && (
        <div className="callout"><strong>Level assessment.</strong> {level.assessment}</div>
      )}

      {level.leadsTo && (
        <>
          <h2>Where this level leads</h2>
          <div className="table-wrap">
            <table>
              <thead><tr><th>You finished</th><th>Next, at Practitioner</th></tr></thead>
              <tbody>
                {level.leadsTo.map((r) => (
                  <tr key={r.finished}><td>{r.finished}</td><td>{r.next}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  )
}

const TABS = ['Syllabus', 'Study notes', 'Key facts', 'Exercises', 'Practice quiz', 'Sources'] as const
type Tab = (typeof TABS)[number]

function ModulePage({ level, module: m, progress }: { level: Level; module: Module; progress: Progress }) {
  const idx = level.modules.findIndex((x) => x.id === m.id)
  const prev = level.modules[idx - 1]
  const next = level.modules[idx + 1]
  const done = progress.done.includes(m.id)
  const notes = m.notes
  const [tab, setTab] = useState<Tab>(notes ? 'Study notes' : 'Syllabus')
  const tabs = TABS.filter((t) => notes || t === 'Syllabus' || t === 'Exercises')

  const pick = (t: Tab) => {
    setTab(t)
    document.querySelector('.tabs')?.scrollIntoView({ block: 'start' })
  }

  return (
    <>
      <Crumbs items={[[level.title, `/${level.id}`], [m.id]]} />
      <header className="page-head">
        <p className="eyebrow">{m.id}</p>
        <h1>{m.title}</h1>
        <div className="chips">
          <Badge status={m.status} />
          <span className="chip">{m.audience}</span>
          <span className="chip">{fmtHours(m.hours)}</span>
          <span className="chip">Prerequisite: {m.prerequisite}</span>
        </div>
        {m.note && <p className="warn">{m.note}</p>}
      </header>

      <p className="prose"><strong>Objective.</strong> {m.objective}</p>

      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            className={`tab ${tab === t ? 'tab-active' : ''}`}
            onClick={() => pick(t)}
          >
            {t}
            {t === 'Practice quiz' && notes && <span className="tab-count">{notes.quiz.length}</span>}
          </button>
        ))}
      </div>

      {tab === 'Syllabus' && (
        <>
          <h2>Chapters and subtopics</h2>
          <ol className="chapters">
            {m.chapters.map((c) => (
              <li key={c.title}>
                <h3>{c.title}</h3>
                <ul>{c.topics.map((t) => <li key={t}><Rich text={t} /></li>)}</ul>
              </li>
            ))}
          </ol>
          <p className="prose"><strong>Workplace applications.</strong> {m.workplace}</p>
          <div className="callout">
            <strong>Expected competency on completion.</strong> {m.competency}
          </div>
          <p className="prose"><strong>Next.</strong> {m.next}</p>
        </>
      )}
      {tab === 'Study notes' && notes && <StudyNotesView notes={notes} />}
      {tab === 'Key facts' && notes && <KeyFactsView notes={notes} />}
      {tab === 'Exercises' && (
        <>
          <h2>Hands-on exercises</h2>
          <ExerciseGuidesView exercises={m.exercises} notes={notes} />
        </>
      )}
      {tab === 'Practice quiz' && notes && <Quiz questions={notes.quiz} />}
      {tab === 'Sources' && notes && <SourcesView sources={notes.sources} />}

      <button className={`btn ${done ? 'btn-done' : ''}`} onClick={() => progress.toggle(m.id)}>
        {done ? '✓ Completed — click to undo' : 'Mark as complete'}
      </button>

      <nav className="pager">
        {prev ? <a href={`/${level.id}/${prev.id}`}>← {prev.id} {prev.title}</a> : <span />}
        {next ? <a href={`/${level.id}/${next.id}`}>{next.id} {next.title} →</a> : <span />}
      </nav>
    </>
  )
}

function Crumbs({ items }: { items: [string, string?][] }) {
  return (
    <nav className="crumbs">
      <a href="/">Home</a>
      {items.map(([label, href]) => (
        <span key={label}> / {href ? <a href={href}>{label}</a> : label}</span>
      ))}
    </nav>
  )
}

function NotFound() {
  return (
    <div className="page-head">
      <h1>Not found</h1>
      <p><a href="/">Back to home</a></p>
    </div>
  )
}

/* ---------- app ---------- */

export default function App() {
  const [levelId, moduleId] = useRoute()
  const progress = useProgress()
  const level = levelId ? findLevel(levelId) : undefined
  const mod = level?.modules.find((m) => m.id === moduleId)

  let page
  if (!levelId) page = <Home progress={progress} />
  else if (!level?.published) page = <NotFound />
  else if (!moduleId) page = <LevelPage level={level} progress={progress} />
  else if (mod) page = <ModulePage key={mod.id} level={level} module={mod} progress={progress} />
  else page = <NotFound />

  return (
    <>
      <header className="topbar">
        <a className="brand" href="/">Claude Certification Learning Hub</a>
        <nav>
          {levels.filter((l) => l.published).map((l) => (
            <a key={l.id} href={`/${l.id}`}>{l.title}</a>
          ))}
        </nav>
      </header>
      <main className="container">{page}</main>
      <footer className="footer">
        Feature tags (GA / PLAN / BETA) reflect Claude Feature Status — Verified November 2026.
      </footer>
    </>
  )
}
