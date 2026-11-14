import type { Level } from './types.ts'
import { notes as m11 } from './notes/m1-1.ts'
import { notes as m12 } from './notes/m1-2.ts'
import { notes as m21 } from './notes/m2-1.ts'
import { notes as m31 } from './notes/m3-1.ts'
import { notes as m41 } from './notes/m4-1.ts'
import { notes as m61 } from './notes/m6-1.ts'
import { notes as m81 } from './notes/m8-1.ts'

export const foundational: Level = {
  id: 'foundational',
  number: 1,
  title: 'Foundational',
  published: true,
  pdf: '/CLAUDE FRIDAY COMPLETE.pdf',
  summary:
    'Use Claude safely and competently for routine work without supervision on the basics.',
  intro: [
    'Seven modules, 7.5 hours. Six are CORE and mandatory for every employee; one (M6.1) is an elective for technical clusters. Pass this level and you can use Claude safely and competently for routine work without supervision on the basics.',
    'What Foundational means. You do the thing on routine work, following a process someone else set, with your output reviewed. You are not yet expected to design how others work, or to handle novel cases alone.',
    'Feature tags. GA = generally available · PLAN = only on some plans or when an admin enables it · BETA = preview, demonstrate but do not assess · DEPR = deprecated, do not teach. Definitions and sources are in Claude Feature Status — Verified November 2026. Re-check tags before each delivery cycle.',
  ],
  teachingOrder:
    'M1.1 → M8.1 → M1.2 → M2.1 → M3.1 → M4.1, then M6.1 for technical clusters. M8.1 comes second deliberately: people start pasting real work into Claude on day one, so the data rules must land before the capability does.',
  assessment:
    'A 25-item scenario quiz (80% to pass), one 60-minute practical lab, and a verification drill in which you must find at least 70% of the seeded errors in a provided Claude output.',
  leadsTo: [
    { finished: 'M1.1, M1.2', next: 'M1.3 settings, memory and personalisation' },
    { finished: 'M2.1', next: 'M2.2 reasoning guidance · M2.3 context engineering' },
    {
      finished: 'M3.1',
      next: 'M3.2 files and Artifacts · M3.3 Projects · M3.4 research · M3.5 data · M3.6 design',
    },
    { finished: 'M4.1', next: 'M4.2 Skills and reusable workflows' },
    { finished: 'M8.1', next: 'M8.2 verification · M8.3 IP, policy and accountability' },
    {
      finished: 'M6.1',
      next: 'M6.2 the agentic loop · M6.3 multi-file work and Git · M6.8 repo artefacts',
    },
  ],
  modules: [
    {
      id: 'M1.1',
      title: 'The Claude ecosystem: surfaces, plans and where work happens',
      status: 'CORE',
      audience: 'All clusters',
      hours: 1,
      prerequisite: 'None',
      objective:
        'Name every Claude surface the organisation uses, know which features your own seat includes, and route a task to the right surface instead of defaulting to the chat box.',
      chapters: [
        {
          title: 'The Claude product family',
          topics: [
            'The Claude app: web, desktop (macOS and Windows GA, Linux BETA), iOS and Android',
            "Claude Code: terminal CLI, VS Code extension (also runs in Cursor), JetBrains plugin (still labelled Beta), the desktop app's Code tab, Claude Code on the web, the mobile Code tab",
            "Claude in Chrome: the browser extension's side panel (PLAN: Pro and above; Enterprise when an admin enables it)",
            'Claude for Microsoft 365: Excel and PowerPoint add-ins (PLAN: Pro and above), Word and Outlook add-ins (BETA), cross-app context (owner-enabled)',
            'Google Workspace: Gmail, Calendar and Drive connectors, plus the Docs, Sheets and Slides live-editing connectors',
            'Claude Tag in Slack (BETA; Team and Enterprise; replaced "Claude in Slack" in August 2026)',
            'The Developer Platform: API, Console, Agent SDK — named here, taught in the Advanced and Expert levels',
            'Named but out of scope for training: Claude Science (BETA), Claude Security (BETA, Enterprise), Dispatch and Duet (previews not available on Team or Enterprise)',
          ],
        },
        {
          title: 'Chat versus agentic work sessions',
          topics: [
            'Plain chat: the answer arrives in the conversation and nothing else changes',
            'Agentic sessions (documented under the "Cowork" name): Claude works on local files, connectors, a browser and scheduled tasks on your behalf — paid plans; desktop GA, web and mobile BETA',
            'Why the distinction matters for review: in chat you check an answer, in an agentic session you check actions',
          ],
        },
        {
          title: 'Plans and entitlements',
          topics: [
            'Individual plans: Free, Pro, Max, Ultra · Organisational plans: Team (Standard and Premium seats), Enterprise',
            'What is gated, with examples: Claude Code (not on Free), Research (Pro and above), Chrome (Pro and above), Project sharing (Team and Enterprise), memory (owner-controlled on Team and Enterprise), audit logs and SCIM (Enterprise)',
            'Usage windows (the 5-hour and weekly limits) and usage credits',
            "Trainer note: insert the organisation's actual seat types and who holds which, before delivery",
          ],
        },
        {
          title: 'The four modes of use',
          topics: [
            'Mode 1 chatbot · Mode 2 productivity assistant · Mode 3 engineering partner · Mode 4 agentic tool',
            'Which modes your role needs, from the cluster table in the master index',
          ],
        },
        {
          title: 'Choosing the surface',
          topics: [
            'Decision rules: a quick answer → chat; work on my documents → chat with files, or a Project; work inside an Office or Google file → the add-in or connector; code in a repository → Claude Code; repeatable or scheduled work → Skills and scheduled tasks; a product feature → the API',
            'The common failure: doing repository work by pasting code into chat',
          ],
        },
        {
          title: 'Where to find authoritative help',
          topics: [
            'support.claude.com for the apps · code.claude.com/docs for Claude Code · platform.claude.com/docs for the API',
            'The release notes and "what\'s new" pages; the internal champions channel',
            "Why a colleague's screenshot is not evidence a feature exists on your plan",
          ],
        },
      ],
      workplace:
        'Picking the right tool in your first week. Explaining to a client which tools the team uses. Avoiding personal-account use for client work.',
      exercises: [
        'Surface tour: complete one small real task in chat, in a Project, in an Office add-in or Google connector, and — technical clusters — in Claude Code. Record where each was fastest and why.',
        'Entitlement check: open your own settings and list which gated features your seat actually has. Compare with a colleague on a different seat type.',
        'Decision drill: for twelve described tasks, name the surface and justify it in one line each. Graded against a key.',
      ],
      competency:
        'C1 Foundational — identifies the surfaces and your own entitlements correctly, and routes a task to the right one.',
      next: 'M8.1 in this level; M1.3 (settings, memory and personalisation) at Practitioner.',
      notes: m11,
    },
    {
      id: 'M8.1',
      title: 'Data privacy, confidentiality and secure prompting',
      status: 'CORE',
      audience: 'All clusters',
      hours: 1,
      prerequisite: 'M1.1',
      note: 'Cannot be exempted by anyone, at any level',
      objective:
        'Know exactly what may and may not be shared with Claude on your plan, and work safely by default rather than by memory.',
      chapters: [
        {
          title: 'How data is handled',
          topics: [
            'Commercial plans (Team, Enterprise, API) are not used for model training by default; consumer plans are opt-in',
            'Where data is stored; what an administrator can see; retention settings and who sets them',
            "The organisation's own contract terms override general guidance — know yours",
          ],
        },
        {
          title: 'Data classification for AI use',
          topics: [
            'Public, internal, confidential, restricted — with worked examples from your own cluster',
            'Client data under NDA; personal data under DPDP, GDPR and client-side regulation',
            'What each class permits: paste freely, paste after redaction, never paste',
          ],
        },
        {
          title: 'Secure prompt practices',
          topics: [
            'Minimisation: give the least that lets the task succeed',
            'Redaction and anonymisation; synthetic stand-ins for real records',
            'Never paste: credentials, keys, tokens, production personal data, unreleased client material outside approved plans',
          ],
        },
        {
          title: 'Connectors, files and memory as data channels',
          topics: [
            'What a connector exposes once approved; file persistence inside a Project; what memory retains',
            'Incognito chats and the memory controls; shared Project visibility',
          ],
        },
        {
          title: 'Prompt injection and untrusted content',
          topics: [
            'Instructions hidden in documents, web pages and tool results',
            'Why an agentic session raises the stakes: the hijack can act, not just answer',
            'Recognise, stop, report — and never "just try it and see"',
          ],
        },
        {
          title: 'Incident handling',
          topics: [
            'What to do in the first ten minutes after an accidental disclosure',
            'Who to notify; deletion requests; what the audit log will show',
          ],
        },
      ],
      workplace:
        'Client work under NDA. HR and finance material. Support tickets containing personal data. Vendor documents of unknown provenance.',
      exercises: [
        'Classify 20 realistic snippets — code, logs, emails, spreadsheets — as shareable, shareable after redaction, or never. Graded against a key.',
        'Redact and anonymise a support ticket and a log file, then run the real task on the redacted version and judge whether it still worked.',
        'Find the injected instruction in three documents and write the safe handling for each.',
        'Walk the disclosure-incident procedure on a scenario, out loud, against the clock.',
      ],
      competency:
        'C8 Foundational — applies the data classification correctly every time, uses redaction by habit, and finds at least 70% of seeded errors in the level verification drill.',
      next: 'M1.2 in this level; M8.2 (verification) and M8.3 (IP, policy, accountability) at Practitioner.',
      notes: m81,
    },
    {
      id: 'M1.2',
      title: 'Models, context windows, tokens and limits',
      status: 'CORE',
      audience: 'All clusters',
      hours: 1,
      prerequisite: 'M1.1',
      objective:
        'Choose a model and effort level on purpose, and work within context and usage limits instead of being surprised by them.',
      chapters: [
        {
          title: 'The current model line-up',
          topics: [
            'Haiku 5.5 — high-volume, latency-sensitive work',
            'Sonnet 5.5 — the balance of speed and intelligence',
            'Opus 5.5 — long-running agentic coding and knowledge work; the recommended default',
            'Fable 5.1 — demanding reasoning and long-horizon agentic work; billed via usage credits or a share of the weekly limit; not on Free',
            'Older models under "More models", and why you would reach for one',
          ],
        },
        {
          title: 'Models retire; plan for it',
          topics: [
            'Opus 4.1 retired August 2026; Sonnet 4.5 retires 30 November 2026',
            'Check the deprecation page before standardising a team or a script on a model',
          ],
        },
        {
          title: 'Tokens and context windows',
          topics: [
            'What a token is; rough words-to-tokens ratios for English prose and for code',
            'Context window sizes on current models (1M on the current generation); output length limits',
            'Cost and time scale with tokens — the practical consequence for long documents',
          ],
        },
        {
          title: 'Thinking and effort',
          topics: [
            'Effort levels: Low, Medium, High, xhigh, Max',
            'The thinking toggle; thinking cannot be disabled on 5.5-generation or Fable models',
            'What more thinking buys and what it costs in time and usage',
          ],
        },
        {
          title: 'Knowledge cut-off and live information',
          topics: [
            'The difference between the training cut-off and a web search',
            'How to tell a stale answer; when to force a search; Research mode (taught at Practitioner in M3.4)',
          ],
        },
        {
          title: 'Capabilities and limitations',
          topics: [
            'Strong: language, code, analysis, structured transformation, vision',
            'Weak or risky: exact arithmetic without a tool, current facts without search, invented references, consistency over very long chains',
            'Non-determinism — the same prompt can give different answers, and what that means for testing',
            'No state between chats except memory and Projects; no access to any system unless it is connected',
            'Input limits: images JPEG, PNG, GIF, WebP up to 8000 × 8000 px; files up to 500 MB each, 20 per chat; PDFs up to 1000 pages, with visual analysis up to 100 pages',
          ],
        },
        {
          title: 'Usage limits in practice',
          topics: [
            'The 5-hour and weekly windows; usage credits; planning a heavy day; what to do when you hit a limit',
          ],
        },
      ],
      workplace:
        'Choosing a model for a long contract review versus a quick rewrite. Judging whether a codebase will fit in context. Explaining to a manager why a model switch changed the output.',
      exercises: [
        'Run the same three tasks on Haiku, Sonnet and Opus. Record quality, time and usage consumed. Decide which you would use for each task and defend it.',
        'Estimate the token count of five real files, then check your estimate.',
        'Effort ladder: run one reasoning task at Low, High and Max. Identify the point where extra effort stopped helping.',
        'Write a one-page model-choice guide for your own team.',
      ],
      competency:
        'C1 Foundational — explains tokens, context and model differences accurately, and chooses model and effort deliberately rather than by default.',
      next: 'M2.1 in this level.',
      notes: m12,
    },
    {
      id: 'M2.1',
      title: 'Prompting fundamentals',
      status: 'CORE',
      audience: 'All clusters',
      hours: 1.5,
      prerequisite: 'D1 complete',
      objective:
        'Write prompts that produce usable output on the first or second attempt for routine work tasks.',
      chapters: [
        {
          title: 'Anatomy of an effective prompt',
          topics: [
            'The seven elements: task, context, constraints, output format, audience, success criteria, and the reason the work matters',
            'Why stating the "why" improves compliance with constraints',
          ],
        },
        {
          title: 'Clarity and specificity',
          topics: [
            'Replacing a vague ask with a concrete one; positive instructions in place of prohibitions; one task per prompt',
            'Supplying what Claude cannot know: project names, internal acronyms, house standards, the reader',
          ],
        },
        {
          title: 'Role and audience framing',
          topics: [
            'Assigning a role; naming the reader; setting tone and register',
          ],
        },
        {
          title: 'Structured prompting',
          topics: [
            'Separating instructions from data with headings or XML-style tags',
            'Numbered steps; putting long material before the question',
          ],
        },
        {
          title: 'Few-shot examples',
          topics: [
            'When examples help and when they constrain; one to three diverse examples',
            'Making the example format mirror the output you want; the overfitting trap',
          ],
        },
        {
          title: 'Output control',
          topics: [
            'Format (table, bullets, prose, JSON-like), length, language',
            'Asking Claude to list its assumptions and open questions alongside the answer',
          ],
        },
        {
          title: 'Iterating',
          topics: [
            'Following up versus editing the original prompt and re-running',
            'Asking Claude to ask you clarifying questions before it answers',
          ],
        },
      ],
      workplace:
        'Rewriting an unclear ticket. Drafting a status update from raw notes. Turning a long thread into a decision summary. Producing a first-pass checklist.',
      exercises: [
        'Prompt makeover: take five real prompts from your team, rewrite each against the seven elements, and compare outputs side by side.',
        "Few-shot lab: build a prompt that turns raw meeting notes into the organisation's standard action-item table.",
        'Format lab: one request, three output formats. Judge which fits the downstream use.',
        "Peer review: score a colleague's prompt against the module rubric.",
      ],
      competency:
        'C2 Foundational — writes clear, structured prompts with context and format, and recognises and fixes the five common defects: vague task, missing context, no format, no audience, mixed tasks.',
      next: 'M3.1 in this level; M2.2 and M2.3 at Practitioner.',
      notes: m21,
    },
    {
      id: 'M3.1',
      title: 'Communication and writing',
      status: 'CORE',
      audience: 'All clusters',
      hours: 1.5,
      prerequisite: 'M2.1, M8.1',
      objective:
        'Produce clear, audience-fit written communication faster than unaided — and send nothing you have not checked.',
      chapters: [
        {
          title: 'Email and messages',
          topics: [
            'Drafting, replying, shortening, changing tone; multi-language drafts',
            'Thread summaries; the Outlook add-in (BETA: triage, drafts that are never sent automatically, meeting preparation); the Gmail connector',
          ],
        },
        {
          title: 'Documentation and long-form writing',
          topics: [
            'Outline first, then section by section; rewriting for a defined reader; consistency passes; enforcing a glossary',
          ],
        },
        {
          title: 'Tone, voice and Styles',
          topics: [
            'Custom Styles built from your own writing samples',
            'A team voice guide held as Project instructions',
            'Switching register: client, internal, executive',
          ],
        },
        {
          title: 'Editing and review',
          topics: [
            'Line edits versus structural edits; proofreading in a second language',
            'Suggestions in Claude Docs and in the Word add-in (BETA)',
          ],
        },
        {
          title: 'Presentations',
          topics: [
            'Deck outlines and speaker notes; narrative structure before slides',
            'Slides artifacts and the PowerPoint add-in (PLAN: Pro and above)',
          ],
        },
        {
          title: 'Chat-platform communication',
          topics: [
            'Claude Tag in Slack (BETA; Team and Enterprise): summarising a channel, drafting a post, following up',
            'Visibility and etiquette — who can see what Claude posts',
          ],
        },
        {
          title: 'Sending discipline',
          topics: [
            'Read before you send; check every name, number and commitment',
            'The verification note required on client-facing text (the full process is M8.2 at Practitioner)',
          ],
        },
      ],
      workplace:
        'Client status emails. Incident communications. Proposal cover letters. Internal announcements. Multilingual client correspondence.',
      exercises: [
        'Rewrite one real email for three audiences — client executive, peer engineer, vendor — in a single chat.',
        'Build a personal Style from three samples of your own writing. Test it on a new draft and have a peer rate the match.',
        'Turn a 40-message thread into one paragraph plus an action table. Verify every action against the thread.',
        'Produce a ten-slide outline with speaker notes from a project report.',
      ],
      competency:
        'C3 Foundational — drafts and edits written communication to a standard needing only light human editing, and checks it before sending.',
      next: 'M4.1 in this level; M3.2 to M3.6 at Practitioner.',
      notes: m31,
    },
    {
      id: 'M4.1',
      title: 'Connectors, integrations and MCP for users',
      status: 'CORE',
      audience: 'All clusters',
      hours: 1,
      prerequisite: 'M1.1, M8.1',
      objective:
        'Use approved connectors safely, and understand enough about MCP to judge what any connector can see and do.',
      chapters: [
        {
          title: 'What a connector is',
          topics: [
            'A remote MCP server that gives Claude tools over a system',
            'The connector directory; Google Workspace; Microsoft 365 add-ins and cross-app context; Slack via Claude Tag; custom connectors for internal systems',
          ],
        },
        {
          title: 'MCP in one lesson, for non-developers',
          topics: [
            'Client, server, tools, resources, prompts — in plain terms',
            'What the model actually sees; the difference between a read tool and a write tool',
            'Approval prompts on write actions (on by default for Google Workspace)',
            'Why the same protocol turns up in claude.ai, in Claude Code and in the API',
          ],
        },
        {
          title: 'Who can add what',
          topics: [
            'Free: one custom connector · Pro and Max: self-service · Team: Owners and Primary Owners only · Enterprise: Owners, or a custom role with library management',
            'Admin controls per connector and per tool',
            'Local MCP via desktop configuration is not available in agentic sessions or claude.ai',
          ],
        },
        {
          title: 'Using connectors well',
          topics: [
            'Connector modes in an agentic session: Manual, Auto, Skip',
            'Scoping a request so the connector returns what you need and no more',
            'Reading the tool calls Claude made — the habit that makes connector use auditable',
          ],
        },
        {
          title: 'Prompt injection through connector content',
          topics: [
            'How instructions hidden in a fetched document, page or ticket can hijack a task',
            'Recognising it, stopping, and reporting it (the full treatment is M8.1)',
          ],
        },
        {
          title: 'Enterprise search',
          topics: [
            '"Ask Your Org" as a preconfigured connector-backed Project (Team and Enterprise, owner-configured; live calls, no index)',
          ],
        },
        {
          title: 'Claude in Chrome',
          topics: [
            'A side panel that reads, clicks and navigates in your own signed-in browser (PLAN: Pro and above)',
            'Admin allow and block lists; when a browser task beats a connector, and when it is the wrong tool',
          ],
        },
      ],
      workplace:
        'Pulling calendar and mail context into a weekly plan. Summarising a Drive folder. Checking ticket status through an approved connector. Working inside a signed-in portal with Chrome.',
      exercises: [
        'Connect one approved connector. Run three tasks. Inspect every tool call and classify each as read or write.',
        'Spot the injected instruction in three seeded documents fetched through a connector, and describe the safe response.',
        'Map five of your everyday tasks to connector, Chrome, or manual — with a reason for each.',
      ],
      competency:
        'C4 Foundational — uses approved connectors correctly and can state what each one is able to access.',
      next: 'M6.1 for technical clusters; M4.2 (Skills) at Practitioner.',
      notes: m41,
    },
    {
      id: 'M6.1',
      title: 'Getting started with Claude Code',
      status: 'ELECTIVE',
      audience: 'Clusters A, B, C, D, E',
      hours: 1.5,
      prerequisite: 'D1 complete, M8.1',
      note: 'Not available on Free seats',
      objective:
        'Install, authenticate and run a supervised first session, with the permission model understood before you let Claude touch a repository.',
      chapters: [
        {
          title: 'What Claude Code is',
          topics: [
            'An agent inside your repository: it reads and edits files, runs commands and uses Git',
            'Default model Opus 5.5; verified against release 2.1.312 (27 October 2026)',
            'How it differs from pasting code into chat, and why that difference matters for large codebases',
          ],
        },
        {
          title: 'Installation',
          topics: [
            'Native installer, recommended, auto-updating, with stable and latest channels: macOS, Linux, WSL, plus PowerShell and CMD installers for Windows',
            'Homebrew, WinGet, apt, dnf, apk',
            'npm as a secondary path — Node.js 22+ is needed to install, not to run; the installed binary is native',
            'OS minimums: macOS 13+, Windows 10 1809+, Ubuntu 20.04+, Debian 10+, Alpine 3.19+; 4 GB RAM',
            '`/doctor` for a health check when something is wrong',
          ],
        },
        {
          title: 'Authentication',
          topics: [
            'A Claude subscription (Pro, Max, Team, Enterprise); Console via API key or keyless sign-in',
            "Amazon Bedrock, Google Cloud's Vertex AI platform, Microsoft Foundry; an LLM gateway",
            'Trainer note: state which route the organisation uses before delivery',
          ],
        },
        {
          title: 'The surfaces, named',
          topics: [
            'Terminal CLI (the full feature set); VS Code extension, which also installs in Cursor; JetBrains plugin (labelled Beta); the desktop app\'s Code tab; Claude Code on the web and the mobile Code tab (plan-gated); GitHub Actions (GA) and GitLab CI (BETA)',
          ],
        },
        {
          title: 'Your first session',
          topics: [
            'Start in a repository and ask questions before asking for changes',
            'Watch it explore; read what it says it will do',
            'Permission modes: `default` (shown as Manual), `acceptEdits`, `plan`, `auto` (the classifier-based default in the terminal and VS Code since 2.1.283), `dontAsk`, and `bypassPermissions` — which belongs only inside a sandbox or CI, never on a working laptop',
            'Shift+Tab cycles modes',
          ],
        },
        {
          title: 'Essential commands',
          topics: [
            '`/help`, `/init`, `/clear`, `/compact`, `/context`, `/model`, `/effort`, `/usage` (with `/cost` and `/stats` as aliases), `/config`, `/doctor`, `/resume`, `/rewind`',
          ],
        },
        {
          title: 'Safety basics',
          topics: [
            'What Claude Code can reach on your machine',
            'Git as the safety net: branch first, commit early',
            'A preview of checkpoints; why you never start by granting the widest permission',
          ],
        },
      ],
      workplace:
        'Day-one setup on a client project. Understanding a repository you have never seen. Safe experimentation on a branch.',
      exercises: [
        'Install, authenticate, run `/doctor`, and open the sandbox repository for your stack.',
        'Ask five questions about the codebase. Verify two of the answers by reading the code yourself.',
        'Make one small change in Manual mode, one in `acceptEdits`, one in plan mode. Describe what each mode asked you and when you would choose it.',
        'Break something on a branch and recover with Git.',
      ],
      competency:
        'C6 Foundational — runs a supervised session confidently and can explain every permission mode and its risk.',
      next: 'M6.2 (the agentic coding workflow) and M6.3 at Practitioner.',
      notes: m61,
    },
  ],
}
