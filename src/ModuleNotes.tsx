import { useState } from 'react'
import Rich from './Rich.tsx'
import type { Block, QuizQuestion, StudyNotes } from './data/types.ts'

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/** Multi-line text (code samples, prompts) keeps its line breaks. */
const Text = ({ text }: { text: string }) =>
  text.includes('\n') ? <pre className="pre">{text}</pre> : <Rich text={text} />

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i} className="prose"><Rich text={b.text} /></p>
          case 'list': {
            const items = b.items.map((t, j) => <li key={j}><Rich text={t} /></li>)
            return b.ordered ? <ol key={i} className="blist">{items}</ol> : <ul key={i} className="blist">{items}</ul>
          }
          case 'table':
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead><tr>{b.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>{r.map((c, k) => <td key={k}><Rich text={c} /></td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'example':
            return (
              <div key={i} className="note note-example">
                <div className="note-label">Example — {b.title}</div>
                <Text text={b.text} />
              </div>
            )
          case 'tip':
            return <div key={i} className="note note-tip"><span className="note-label">Tip</span> <Rich text={b.text} /></div>
          case 'warning':
            return <div key={i} className="note note-warn"><span className="note-label">Watch out</span> <Rich text={b.text} /></div>
        }
      })}
    </>
  )
}

export function StudyNotesView({ notes }: { notes: StudyNotes }) {
  return (
    <>
      <p className="prose lead-sm">{notes.overview}</p>
      <nav className="toc">
        <strong>In this module</strong>
        <ol>
          {notes.sections.map((s) => (
            <li key={s.chapter}><a href={`#${slug(s.chapter)}`} onClick={(e) => {
              e.preventDefault()
              document.getElementById(slug(s.chapter))?.scrollIntoView({ behavior: 'smooth' })
            }}>{s.chapter}</a></li>
          ))}
        </ol>
      </nav>
      {notes.sections.map((s, i) => (
        <section key={s.chapter} id={slug(s.chapter)} className="note-section">
          <h2><span className="sec-no">{i + 1}</span>{s.chapter}</h2>
          <Blocks blocks={s.blocks} />
        </section>
      ))}
    </>
  )
}

export function KeyFactsView({ notes }: { notes: StudyNotes }) {
  return (
    <>
      <h2>Key facts to remember</h2>
      <ol className="facts">
        {notes.keyFacts.map((f, i) => <li key={i}><Rich text={f} /></li>)}
      </ol>

      <h2>Common pitfalls</h2>
      <ul className="blist pitfalls">
        {notes.pitfalls.map((p, i) => <li key={i}><Rich text={p} /></li>)}
      </ul>

      <h2>Glossary</h2>
      <dl className="glossary">
        {notes.glossary.map((g) => (
          <div key={g.term}>
            <dt>{g.term}</dt>
            <dd><Rich text={g.definition} /></dd>
          </div>
        ))}
      </dl>
    </>
  )
}

export function ExerciseGuidesView({ exercises, notes }: { exercises: string[]; notes?: StudyNotes }) {
  return (
    <ol className="exercise-guides">
      {exercises.map((e, i) => {
        const guide = notes?.exerciseGuides.find((g) => g.exercise === e) ?? notes?.exerciseGuides[i]
        return (
          <li key={e}>
            <h3><Rich text={e} /></h3>
            {guide && <Blocks blocks={guide.guide} />}
          </li>
        )
      })}
    </ol>
  )
}

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null))
  const answered = picked.filter((p) => p !== null).length
  const correct = picked.filter((p, i) => p === questions[i].answer).length
  const pct = Math.round((correct / questions.length) * 100)

  return (
    <>
      <p className="prose">
        Scenario questions in the style of the level assessment. The real quiz needs 80% to pass.
        Pick an answer to see the explanation.
      </p>
      <ol className="quiz">
        {questions.map((q, i) => {
          const p = picked[i]
          return (
            <li key={i} className="quiz-q">
              <p className="quiz-question"><Rich text={q.question} /></p>
              <div className="quiz-options">
                {q.options.map((o, j) => {
                  const state =
                    p === null ? '' : j === q.answer ? 'is-correct' : j === p ? 'is-wrong' : 'is-dim'
                  return (
                    <button
                      key={j}
                      className={`quiz-opt ${state}`}
                      disabled={p !== null}
                      onClick={() => setPicked((prev) => prev.map((x, k) => (k === i ? j : x)))}
                    >
                      <span className="opt-letter">{String.fromCharCode(65 + j)}</span>
                      <Rich text={o} />
                    </button>
                  )
                })}
              </div>
              {p !== null && (
                <div className={`note ${p === q.answer ? 'note-tip' : 'note-warn'}`}>
                  <span className="note-label">{p === q.answer ? 'Correct' : `Answer: ${String.fromCharCode(65 + q.answer)}`}</span>{' '}
                  <Rich text={q.explanation} />
                </div>
              )}
            </li>
          )
        })}
      </ol>
      <div className="quiz-score">
        <div>
          <strong>{correct}/{questions.length}</strong> correct · {answered} answered
          {answered === questions.length && (
            <span className={pct >= 80 ? 'pass' : 'fail'}> — {pct}% {pct >= 80 ? 'pass' : 'below 80%'}</span>
          )}
        </div>
        <button className="btn btn-quiet" onClick={() => setPicked(questions.map(() => null))}>Reset</button>
      </div>
    </>
  )
}

export function SourcesView({ sources }: { sources: StudyNotes['sources'] }) {
  return (
    <>
      <p className="prose">
        Study notes were researched from these sources. Features change often — where a source
        and the syllabus disagree, the syllabus is what you are assessed on.
      </p>
      <ul className="blist sources">
        {sources.map((s) => (
          <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a> <span className="muted">{new URL(s.url).hostname}</span></li>
        ))}
      </ul>
    </>
  )
}
