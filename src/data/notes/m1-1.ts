import type { StudyNotes } from '../types.ts'

export const notes: StudyNotes = {
  overview:
    'Claude is not one chat box: it is a family of surfaces (the Claude app, Claude Code, Claude in Chrome, the Microsoft 365 add-ins, Google Workspace connectors, Claude Tag in Slack and the Developer Platform), each gated by plan and, on Team and Enterprise, by what an Owner has switched on. This module teaches you to name those surfaces, read your own seat\'s entitlements from your settings rather than from rumour, tell plain chat apart from agentic work, and route each task to the surface that fits it. It is the map every later module assumes, and most quiz items test routing decisions and plan gates rather than button locations.',

  sections: [
    {
      chapter: 'The Claude product family',
      blocks: [
        {
          type: 'p',
          text: 'Think of the family in three layers: (1) places you talk to Claude (the Claude app on web, desktop and mobile); (2) places where Claude works inside another tool (Claude Code in your terminal or IDE, Claude in Chrome, the Office add-ins, Google Workspace connectors, Claude Tag in Slack); and (3) the Developer Platform, where you build Claude into your own product. Every surface uses the same Claude models, but what each can touch, and who is allowed to use it, differs.',
        },
        {
          type: 'table',
          head: ['Surface', 'Where it runs', 'Status / plan gate (syllabus tag)', 'Typical use'],
          rows: [
            ['Claude app', 'claude.ai on the web; desktop for macOS and Windows (GA) and Linux (BETA); iOS and Android', 'GA; Free and paid', 'Conversation, files, Projects, Artifacts, Research, connectors'],
            ['Claude Code', 'Terminal CLI, VS Code extension (also Cursor), JetBrains plugin (labelled Beta), desktop app Code tab, Claude Code on the web (claude.ai/code), mobile Code tab', 'Not on Free', 'Working in a code repository: read, edit, run, commit'],
            ['Claude in Chrome', 'Browser extension side panel', 'PLAN: Pro and above; Enterprise when an admin enables it', 'Reading, clicking and navigating websites alongside you'],
            ['Claude for Microsoft 365', 'Excel, PowerPoint, Word and Outlook add-ins', 'Excel and PowerPoint PLAN (Pro and above); Word and Outlook BETA; cross-app context owner-enabled', 'Working inside an open Office file or email'],
            ['Google Workspace', 'Gmail, Calendar and Drive connectors; Docs, Sheets and Slides live-editing connectors', 'Connectors; on Team/Enterprise an Owner must enable them first', 'Searching mail and calendar, reading Drive, editing a Google file beside the chat'],
            ['Claude Tag', 'Slack (@Claude in channels)', 'BETA; Team and Enterprise; replaced "Claude in Slack" in August 2026', 'A shared team agent you hand tasks to in a channel'],
            ['Developer Platform', 'API, Console, Agent SDK', 'Named here; taught at Advanced and Expert', 'Building Claude into a product or pipeline'],
          ],
        },
        {
          type: 'p',
          text: '**The Claude app.** The same account works on claude.ai, the desktop app and the iOS/Android app. Claude Desktop installs on macOS, Windows and Linux; the Linux build is in beta (Ubuntu/Debian via Anthropic\'s apt repository) and lacks some features such as computer use and dictation. The desktop app matters beyond chat: it hosts the Code tab and lets agentic (Cowork) sessions reach local files.',
        },
        {
          type: 'p',
          text: '**Claude Code** is Anthropic\'s agentic coding tool: it reads a codebase, edits files, runs commands and works with Git. All its surfaces share one engine, so a repository\'s `CLAUDE.md`, settings and MCP servers apply everywhere. Surfaces: the terminal CLI (start it with `claude` inside a project folder); the VS Code extension, which also installs in Cursor; the JetBrains plugin for IntelliJ, PyCharm, WebStorm and others, which is still listed as "Claude Code [Beta]" and needs the CLI installed separately; the desktop app\'s **Code** tab (no separate CLI install; paid subscription required); Claude Code on the web at `claude.ai/code` for cloud sessions on GitHub repos; and the **Code** tab in the iOS/Android app, which is a client for cloud sessions and Remote Control rather than a place where code runs.',
        },
        {
          type: 'p',
          text: '**Claude in Chrome** is a browser extension that lets Claude read, click and navigate websites alongside you, launched from Chrome\'s side panel (and also usable from Cowork or Claude Code). Support lists it on Pro, Max, Ultra, Team and Enterprise; on Enterprise an Owner must enable it (Organization settings > Claude in Chrome), and admins can restrict which sites Claude may access. The side panel now runs as a Cowork session.',
        },
        {
          type: 'p',
          text: '**Claude for Microsoft 365** is a set of add-ins installed from Microsoft AppSource (or deployed by IT through the Microsoft 365 admin center). Each works on the file or email that is currently open. **Cross-app context** ("Let Claude work across apps/files") lets Claude read from one open app and write to another — for example, pull figures from an Excel model into a PowerPoint chart and a Word memo. On Team and Enterprise, owners control it in Organization settings > Office agents and the per-add-in toggle defaults to off; on Pro and Max it defaults to on. Claude cannot open, create or switch files itself — the files must already be open.',
        },
        {
          type: 'p',
          text: '**Google Workspace.** The Gmail, Google Calendar and Google Drive connectors let Claude search and read your mail, events and files while you chat (and, with your confirmation, send mail or change events). Separate **Google Docs, Sheets and Slides connectors** let Claude create and edit a file live in a pane beside the chat, with you editing the same file at the same time; the pane works on the web in Chrome and in Claude Desktop. On Team and Enterprise an Owner or Primary Owner must enable connectors at organisation level before members can authenticate, and by default Claude asks before sending, replying, forwarding, sharing, moving or trashing.',
        },
        {
          type: 'p',
          text: '**Claude Tag** is the Slack version of Claude as a team member: people tag `@Claude` in authorised channels to delegate tasks, the work stays in the channel thread so anyone can steer or pick it up, and admins control channel access, spend limits and an action log. Unlike the earlier per-user Claude in Slack, Claude Tag has one shared agent identity set up once by an Owner, with per-channel memory. Direct messages still run on each user\'s own claude.ai account.',
        },
        {
          type: 'list',
          items: [
            '**Developer Platform** — the Claude API, the Claude Console (platform.claude.com) and the Agent SDK. Named in this module so you can recognise it; you do not need to use it at Foundational level.',
            '**Claude Science (BETA)** — a desktop workbench for scientists. Named only; out of scope for training.',
            '**Claude Security (BETA, Enterprise)** — code vulnerability scanning and suggested patches. Named only; out of scope.',
            '**Dispatch and Duet** — previews (Dispatch: message a task from your phone to the Desktop app; Duet: a proactive-agent research preview). Not available on Team or Enterprise, so do not plan organisational work around them.',
          ],
        },
        {
          type: 'warning',
          text: 'Syllabus vs web: the syllabus tags the Word add-in BETA. Anthropic\'s 7 May 2026 announcement ("Collaborate with Claude across Excel, PowerPoint, Word and Outlook") states Excel, PowerPoint and Word are generally available and Outlook is in public beta. For the assessment, use the syllabus tag (Word and Outlook BETA), and re-check the status page before relying on it at work.',
        },
        {
          type: 'warning',
          text: 'Syllabus vs web: the syllabus says Claude Tag "replaced Claude in Slack in August 2026". Anthropic announced Claude Tag on 23 June 2026 with a 30-day admin opt-in window; press coverage gives 3 August 2026 as the retirement date, and the Claude Tag migration docs say that since 5 October 2026 the legacy app no longer answers in channels of paired workspaces. Keep the syllabus answer (August 2026) for the exam.',
        },
        {
          type: 'tip',
          text: 'Not every surface is switched on in every organisation. Ask your trainer or admin which of these surfaces your organisation actually uses and has enabled — that list, not this table, is what you must be able to name.',
        },
      ],
    },
    {
      chapter: 'Chat versus agentic work sessions',
      blocks: [
        {
          type: 'p',
          text: '**Plain chat**: you ask, Claude answers in the conversation, and nothing else in the world changes. Even when Claude produces a file or Artifact, it sits in the chat until you decide to use it. Your job as reviewer is to check the **answer**: is it correct, complete, sourced, appropriate?',
        },
        {
          type: 'p',
          text: '**Agentic sessions** (documented by Anthropic under the name **Cowork**): you describe an outcome, and Claude plans and carries out multi-step work on your behalf — reading and writing your local files (only in folders you connect), using connectors, driving a browser, and running scheduled tasks. Anthropic describes Cowork as "the same agentic architecture that powers Claude Code, with no terminal required".',
        },
        {
          type: 'table',
          head: ['', 'Plain chat', 'Agentic session (Cowork)'],
          rows: [
            ['Output', 'An answer in the conversation', 'Actions: files written, emails drafted or sent, forms filled, tasks scheduled'],
            ['Side effects', 'None until you act', 'Real changes to files, accounts and systems'],
            ['What you review', 'The answer', 'The plan and the actions (before and after)'],
            ['Plans', 'All plans', 'Paid plans only (Pro, Max, Ultra, Team, Enterprise)'],
            ['Surfaces', 'Web, desktop, mobile', 'Desktop GA; web and mobile BETA (syllabus)'],
          ],
        },
        {
          type: 'list',
          items: [
            'Local files: Claude reads and writes only folders you connect; it needs explicit permission before permanently deleting files.',
            'Connectors: added from the "+" menu or Customize > Connectors.',
            'Browser: Claude can open sites, read pages, click, type and fill forms (built-in browser or your Claude in Chrome set-up).',
            'Scheduled tasks: created with `/schedule` or from the sidebar. Cloud scheduled tasks run with no device online; anything needing local files needs the desktop app open on an awake computer.',
            'Approval modes: Manual (Claude asks before acting), Auto (Claude screens each action and blocks unsafe ones — not a substitute for oversight), Skip (nothing checked — only when you fully trust every file, connector and site involved).',
          ],
        },
        {
          type: 'example',
          title: 'Same request, two review jobs',
          text: 'Chat: "Draft a reply to this client email" — you check the wording before you paste and send it yourself. Agentic: "Go through my inbox and reply to the three supplier emails" — you must check which emails Claude chose, what it wrote and whether it actually sent anything. A wrong chat answer wastes a minute; a wrong agentic action has already happened.',
        },
        {
          type: 'tip',
          text: 'Before approving an agentic run, read Claude\'s plan, keep the connected folders and sites as narrow as the task needs, and stay in Manual approval on anything involving client data or irreversible actions. Anthropic\'s own guidance: "Review Claude\'s planned actions before allowing it to proceed, especially when working with sensitive files."',
        },
        {
          type: 'warning',
          text: 'Web detail beyond the syllabus: support currently lists Cowork on desktop for all paid plans (Linux in beta), and on web and mobile for Pro, Max, Ultra and Team (beta on Team), with Enterprise needing an Owner to enable it. Treat the syllabus summary (desktop GA, web and mobile BETA, paid plans) as the exam answer.',
        },
      ],
    },
    {
      chapter: 'Plans and entitlements',
      blocks: [
        {
          type: 'p',
          text: 'Claude plans split into **individual** plans, which bill one person and scale by usage — **Free, Pro, Max, Ultra** — and **organisational** plans, which bill per seat and add admin, billing and security controls — **Team** (with **Standard** and **Premium** seats) and **Enterprise**. On organisational plans, what you can use is the plan\'s feature set **minus** anything an Owner has not enabled.',
        },
        {
          type: 'table',
          head: ['Plan', 'Who it is for', 'Notable points from claude.com/pricing (Nov 2026)'],
          rows: [
            ['Free', 'Individuals trying Claude', 'Limited usage every 5 hours and every week; up to 5 Projects; no Claude Code, Research, Claude in Chrome or Microsoft 365'],
            ['Pro', 'Individual paid', 'More usage than Free; adds Claude Code, Research, Claude in Chrome and Microsoft 365, task hand-off and scheduling'],
            ['Max', 'Heavy individual use', 'Everything in Pro with 5x Pro usage; priority at peak times; early access'],
            ['Ultra', 'Heaviest individual use', 'Everything in Max; no 5-hour limit for verified accounts; 10x Pro usage every week'],
            ['Team — Standard seat', 'Organisations (2 to 150 seats)', 'All Claude features, more usage than Pro; central billing, SSO, admin controls for connectors, no model training on content by default'],
            ['Team — Premium seat', 'Heavy users inside a Team org', '5x more usage than a Standard seat'],
            ['Enterprise', 'Larger or regulated organisations', 'All Team features plus role-based access, SCIM, audit logs, Compliance API, custom data retention, IP allowlisting'],
          ],
        },
        {
          type: 'p',
          text: 'Gated features you must know (syllabus examples):',
        },
        {
          type: 'table',
          head: ['Feature', 'Gate'],
          rows: [
            ['Claude Code', 'Not on Free (any paid plan or a Console account)'],
            ['Research', 'Pro and above'],
            ['Claude in Chrome', 'Pro and above (Enterprise: an admin must enable it)'],
            ['Project sharing', 'Team and Enterprise'],
            ['Memory', 'Owner-controlled on Team and Enterprise'],
            ['Audit logs and SCIM', 'Enterprise only'],
          ],
        },
        {
          type: 'p',
          text: '**Project sharing** on Team and Enterprise: a project can be public (everyone in the org) or private (invited members), shared with "Can view" or "Can edit"; chats inside a project are not shared by default; Owners can turn sharing off for the organisation. **Memory** on Team and Enterprise is governed by Owners in Organization settings > Capabilities; if an Owner disables it, existing memory data is deleted and members cannot turn it back on themselves.',
        },
        {
          type: 'p',
          text: '**Usage windows.** Paid plans have two stacked limits: a **session limit that resets five hours** after your first message in the window, and a **weekly limit** across all models that resets at a fixed time each week assigned to your account. Room left in your session does not help once the weekly limit is hit. Some plans also have a separate weekly limit for the top model. Verified Ultra accounts have no five-hour limit. Usage across chat, Claude Code and Cowork counts toward the same limits, and agentic work consumes more than chat. Check where you stand in **Settings > Usage** (`claude.ai/settings/usage`).',
        },
        {
          type: 'p',
          text: '**Usage credits** are pay-as-you-go credits billed separately from the subscription. With them enabled, when you hit a session or weekly limit your work continues on credits instead of stopping. They do not change when limits reset. Support lists them for Pro, Max, Ultra, Team and seat-based Enterprise plans (usage-based Enterprise bills by consumption anyway).',
        },
        {
          type: 'tip',
          text: 'Trainer note: your organisation\'s actual seat types (for example Team Standard vs Premium, or Enterprise) and who holds which are organisation-specific. Confirm with your trainer or admin which seat you hold and which features your Owner has enabled — then verify it in your own Settings.',
        },
        {
          type: 'warning',
          text: 'Prices, multipliers and limits change often. Learn the gates (which plan has which feature) for the exam; treat the specific prices on claude.com/pricing as context only and re-check the live page before quoting them to anyone.',
        },
      ],
    },
    {
      chapter: 'The four modes of use',
      blocks: [
        {
          type: 'p',
          text: 'The course classifies how a person uses Claude into four modes. They are a progression in how much Claude does on its own and how much it touches outside the conversation — which also means a progression in what you must review.',
        },
        {
          type: 'table',
          head: ['Mode', 'What it looks like', 'Typical surfaces', 'What you review'],
          rows: [
            ['1 Chatbot', 'Ask a question, get an answer', 'Claude app chat', 'The answer'],
            ['2 Productivity assistant', 'Claude works on your documents, data and tools — drafting, summarising, analysing', 'Chat with files, Projects, Office add-ins, Google connectors, Claude in Chrome', 'The document or analysis it produces'],
            ['3 Engineering partner', 'Claude works in a code repository with you', 'Claude Code (CLI, IDE, desktop Code tab, web)', 'Diffs, tests and commits'],
            ['4 Agentic tool', 'Claude carries out multi-step work and actions on your behalf, sometimes on a schedule', 'Cowork sessions, scheduled tasks, Claude Tag, Skills-driven workflows', 'The plan and every action'],
          ],
        },
        {
          type: 'p',
          text: 'Which modes **your** role needs comes from the cluster table in the course master index — look up your cluster\'s row rather than guessing. As a rule of thumb, Mode 3 belongs to technical clusters (the same clusters that take the M6.1 elective), while every employee meets Modes 1 and 2 in routine work.',
        },
        {
          type: 'example',
          title: 'One analyst, three modes in a day',
          text: 'Morning: asks chat what a regulation acronym means (Mode 1). Midday: uses the Excel add-in to restructure a model and the PowerPoint add-in to build the summary slide (Mode 2). Afternoon: sets up a weekly scheduled task that compiles the status report from Drive (Mode 4). A developer colleague fixes a bug in the reporting repo with Claude Code (Mode 3).',
        },
        {
          type: 'tip',
          text: 'The four mode names come from the syllabus; the descriptions and surface examples in the table are this guide\'s illustration (no public Anthropic source defines these modes), and the cluster-to-mode table is internal to the course. Ask your trainer for your cluster\'s row if you do not have the master index.',
        },
      ],
    },
    {
      chapter: 'Choosing the surface',
      blocks: [
        {
          type: 'p',
          text: 'The objective of the module is to route a task to the right surface instead of defaulting to the chat box. Apply the syllabus decision rules in order — the first that matches usually wins:',
        },
        {
          type: 'table',
          head: ['If the task is…', 'Route it to', 'Why'],
          rows: [
            ['A quick answer', 'Chat', 'Fastest; nothing to set up'],
            ['Work on my documents', 'Chat with files, or a Project', 'A Project keeps files and instructions for repeated use (and can be shared on Team/Enterprise)'],
            ['Work inside an Office or Google file', 'The Office add-in or Google connector', 'Claude edits the real file in place, keeping formatting and formulas'],
            ['Code in a repository', 'Claude Code', 'It can read the whole repo, run tests and commit'],
            ['Repeatable or scheduled work', 'Skills and scheduled tasks', 'Write the method once, run it consistently or on a timer'],
            ['A product feature', 'The API', 'Software, not a person, calls Claude'],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Where does the input live? (in my head, in files, in an Office/Google file, in a repo, in a website, in Slack)',
            'Where must the output land? (an answer I read, an edited file, a commit, an action, a feature in a product)',
            'Is it one-off or recurring?',
            'Does my seat have that surface, and has the Owner enabled it? If not, choose the next-best permitted surface or ask — never switch to a personal account.',
          ],
        },
        {
          type: 'p',
          text: '**The common failure: doing repository work by pasting code into chat.** Chat sees only the fragment you pasted, cannot run the tests, cannot see the other files that call the function, and leaves you to copy changes back by hand — which loses edits and introduces errors. Claude Code reads the repository itself, runs commands, shows diffs and works with Git.',
        },
        {
          type: 'example',
          title: 'Routing in practice',
          text: '"Turn this 40-row Excel table into a pivot and chart it" → Excel add-in. "Summarise these five PDFs I will keep coming back to" → a Project. "Fix the failing unit test in our billing service" → Claude Code. "Every Monday, compile last week\'s tickets into a summary" → a Skill plus a scheduled task. "Add a summarise button to our customer portal" → the API (Developer Platform).',
        },
        {
          type: 'warning',
          text: 'Client work belongs on your organisation\'s seat, never a personal account — even if the personal account has a feature your work seat lacks. Personal accounts sit outside the organisation\'s data controls.',
        },
      ],
    },
    {
      chapter: 'Where to find authoritative help',
      blocks: [
        {
          type: 'table',
          head: ['Question about…', 'Authoritative source'],
          rows: [
            ['The Claude apps (web, desktop, mobile), plans, Cowork, Chrome, connectors, usage limits', 'support.claude.com (Help Center)'],
            ['Claude Code (CLI, IDE, desktop Code tab, web, mobile)', 'code.claude.com/docs'],
            ['The API, Console and Agent SDK', 'platform.claude.com/docs'],
            ['What changed recently', 'Release notes: support.claude.com release notes (apps), the Claude Code changelog and weekly "What\'s new" pages on code.claude.com/docs, Claude Platform release notes on platform.claude.com/docs'],
            ['How the organisation uses Claude', 'The internal champions channel'],
          ],
        },
        {
          type: 'p',
          text: 'Release notes matter because statuses move fast: in 2026 alone the Office add-ins moved to GA, Claude Tag replaced Claude in Slack, and Cowork spread from desktop to web and mobile. A fact learned six months ago may be wrong today.',
        },
        {
          type: 'p',
          text: '**Why a colleague\'s screenshot is not evidence a feature exists on your plan.** It may come from a different plan or seat type, a different organisation, a personal account, a feature an Owner enabled for their org but not yours, a staged rollout that has not reached you, a beta that has since changed, or an older version of the app. The only evidence for **your** entitlement is your own settings (and your admin); the only evidence that a feature exists at all is official documentation or release notes.',
        },
        {
          type: 'tip',
          text: 'Ask your trainer or admin for the name of your internal champions channel and save it. Post questions about organisation-specific settings there, not in public forums.',
        },
      ],
    },
  ],

  keyFacts: [
    'Claude desktop app: macOS and Windows GA; Linux BETA. Mobile apps on iOS and Android.',
    'Claude Code surfaces: terminal CLI, VS Code extension (also runs in Cursor), JetBrains plugin (still labelled Beta), desktop app Code tab, Claude Code on the web, mobile Code tab.',
    'Claude Code is not available on the Free plan.',
    'Claude in Chrome is a browser-extension side panel: Pro and above; on Enterprise only when an admin enables it.',
    'Microsoft 365 (syllabus): Excel and PowerPoint add-ins are PLAN (Pro and above); Word and Outlook add-ins BETA; cross-app context is owner-enabled.',
    'Google Workspace: Gmail, Calendar and Drive connectors plus Docs, Sheets and Slides live-editing connectors; on Team/Enterprise an Owner must enable connectors first.',
    'Claude Tag (Slack): BETA, Team and Enterprise only; replaced "Claude in Slack" in August 2026.',
    'Developer Platform = API, Console, Agent SDK; named at Foundational, taught at Advanced and Expert.',
    'Out of scope: Claude Science (BETA), Claude Security (BETA, Enterprise), Dispatch and Duet (previews not available on Team or Enterprise).',
    'Agentic sessions are documented as "Cowork": local files, connectors, browser and scheduled tasks; paid plans; desktop GA, web and mobile BETA.',
    'In chat you check an answer; in an agentic session you check actions.',
    'Individual plans: Free, Pro, Max, Ultra. Organisational plans: Team (Standard and Premium seats) and Enterprise.',
    'Research: Pro and above. Project sharing: Team and Enterprise. Memory: owner-controlled on Team and Enterprise.',
    'Audit logs and SCIM: Enterprise only.',
    'Usage: a 5-hour session window plus a weekly limit; they stack. Check Settings > Usage.',
    'Usage credits let work continue (pay-as-you-go) after a limit is hit; they do not change reset times.',
    'Four modes: 1 chatbot, 2 productivity assistant, 3 engineering partner, 4 agentic tool.',
    'Routing: quick answer → chat; my documents → chat with files or a Project; inside an Office/Google file → add-in or connector; repo code → Claude Code; repeatable/scheduled → Skills and scheduled tasks; product feature → the API.',
    'The common failure is doing repository work by pasting code into chat.',
    'Help: support.claude.com (apps), code.claude.com/docs (Claude Code), platform.claude.com/docs (API).',
    'A colleague\'s screenshot is not evidence a feature exists on your plan — check your own settings and the official docs.',
    'Feature tags: GA = generally available; PLAN = only on some plans or when an admin enables it; BETA = demonstrate but do not assess; DEPR = deprecated, do not teach.',
  ],

  glossary: [
    { term: 'Surface', definition: 'A place where you use Claude: the Claude app, Claude Code, Claude in Chrome, an Office add-in, a Google connector, Claude Tag in Slack, or the API.' },
    { term: 'Claude app', definition: 'Claude on the web (claude.ai), desktop (macOS, Windows, Linux beta) and mobile (iOS, Android).' },
    { term: 'Claude Code', definition: 'Anthropic\'s agentic coding tool that reads a codebase, edits files, runs commands and works with Git; available as CLI, IDE extensions, desktop Code tab, web and mobile Code tab.' },
    { term: 'CLI', definition: 'Command-line interface. Claude Code\'s terminal version, started with `claude` inside a project folder.' },
    { term: 'Claude Code on the web', definition: 'Claude Code running in cloud sessions from claude.ai/code, typically against GitHub repositories, with no local setup.' },
    { term: 'Claude in Chrome', definition: 'A browser extension that lets Claude read, click and navigate websites from Chrome\'s side panel.' },
    { term: 'Add-in', definition: 'A Claude panel inside a Microsoft 365 app (Excel, PowerPoint, Word, Outlook) that works on the currently open file or email.' },
    { term: 'Cross-app context', definition: 'Claude for Microsoft 365 capability to read from one open Office app and make changes in another within one conversation; owner-controlled on Team and Enterprise.' },
    { term: 'Connector', definition: 'A connection that gives Claude access to an external service (for example Gmail, Google Calendar, Google Drive, Google Docs/Sheets/Slides).' },
    { term: 'Live-editing connector', definition: 'The Google Docs, Sheets and Slides connectors that let Claude edit the real file in a pane beside the chat while you edit too.' },
    { term: 'Claude Tag', definition: 'Claude as a shared team agent in Slack, tagged as @Claude in authorised channels; beta on Team and Enterprise; replaced Claude in Slack.' },
    { term: 'Developer Platform', definition: 'Anthropic\'s builder offering: the Claude API, the Console and the Agent SDK.' },
    { term: 'Console', definition: 'The Claude Developer Platform web console (platform.claude.com) for API keys, usage and billing.' },
    { term: 'Agent SDK', definition: 'A software development kit for building custom agents on Claude Code\'s tools and capabilities.' },
    { term: 'Cowork', definition: 'Anthropic\'s name for agentic sessions in the Claude app: Claude plans and carries out multi-step work using local files, connectors, a browser and scheduled tasks. Paid plans only.' },
    { term: 'Agentic session', definition: 'A session where Claude takes actions on your behalf rather than only replying; you review actions, not just answers.' },
    { term: 'Scheduled task', definition: 'A task Claude runs automatically at set times (created with `/schedule` or from the sidebar); cloud tasks run with no device online.' },
    { term: 'Project', definition: 'A workspace in the Claude app that keeps files and instructions together for repeated work; sharable on Team and Enterprise.' },
    { term: 'Research', definition: 'Claude\'s multi-step research feature; Pro and above.' },
    { term: 'Memory', definition: 'Claude remembering context across conversations; owner-controlled on Team and Enterprise.' },
    { term: 'Seat', definition: 'A licensed user on an organisational plan; Team has Standard and Premium seats.' },
    { term: 'Owner / Primary Owner', definition: 'Organisation administrators on Team and Enterprise who enable features such as connectors, memory, Chrome and cross-app context.' },
    { term: 'Entitlement', definition: 'A feature your specific seat is allowed to use — the plan\'s features minus anything not enabled for you.' },
    { term: 'SCIM', definition: 'System for Cross-domain Identity Management: automated user provisioning and de-provisioning from the identity provider. Enterprise only.' },
    { term: 'Audit logs', definition: 'Records of user and admin activity for security and compliance. Enterprise only.' },
    { term: 'Session (5-hour) limit', definition: 'A usage allowance that resets five hours after the first message of the window.' },
    { term: 'Weekly limit', definition: 'A usage allowance across all models that resets at a fixed weekly time assigned to your account; stacks with the session limit.' },
    { term: 'Usage credits', definition: 'Pay-as-you-go credits, billed separately, that let work continue after a session or weekly limit is reached.' },
    { term: 'GA / PLAN / BETA / DEPR', definition: 'Course feature tags: generally available; only on some plans or admin-enabled; preview (demonstrate, do not assess); deprecated (do not teach).' },
    { term: 'Four modes of use', definition: 'Mode 1 chatbot, Mode 2 productivity assistant, Mode 3 engineering partner, Mode 4 agentic tool.' },
    { term: 'Release notes', definition: 'Official dated change logs: support.claude.com release notes, the Claude Code changelog and "What\'s new" pages, and Claude Platform release notes.' },
    { term: 'Champions channel', definition: 'The organisation\'s internal channel where Claude champions answer questions about internal use; confirm its name with your trainer.' },
  ],

  pitfalls: [
    'Defaulting to the chat box for everything, including work that belongs in an add-in, Claude Code or a scheduled task.',
    'Pasting code into chat to do repository work — Claude cannot see the rest of the repo, cannot run tests, and you must copy changes back by hand.',
    'Assuming a feature exists on your seat because a colleague showed a screenshot.',
    'Assuming Team/Enterprise members automatically get every plan feature — Owners must enable connectors, memory, Chrome (Enterprise) and cross-app context.',
    'Using a personal Claude account for client work because it has a feature the work seat lacks.',
    'Treating an agentic session like chat and only reading the final message instead of checking what Claude actually did.',
    'Using Skip/auto-approve modes on sensitive or irreversible tasks.',
    'Thinking Claude Code is available on Free, or that Research and Claude in Chrome are on Free.',
    'Confusing Claude Tag (shared team agent, Team/Enterprise, beta) with the retired per-user Claude in Slack.',
    'Expecting the mobile Code tab to run code on the phone — it is a client for cloud sessions and Remote Control.',
    'Believing that spare session allowance helps once the weekly limit is hit — the limits stack.',
    'Planning organisational work around Dispatch or Duet, which are not available on Team or Enterprise.',
    'Teaching or being assessed on BETA features as if they were stable; BETA is demonstrate-only.',
    'Trusting third-party blogs over support.claude.com, code.claude.com/docs and platform.claude.com/docs.',
  ],

  exerciseGuides: [
    {
      exercise:
        'Surface tour: complete one small real task in chat, in a Project, in an Office add-in or Google connector, and — technical clusters — in Claude Code. Record where each was fastest and why.',
      guide: [
        {
          type: 'p',
          text: 'Pick small, low-risk, non-confidential tasks that you genuinely need doing, so the comparison is honest. Time each one from start to usable result, including setup and any copy-paste.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chat: a quick question or short rewrite (for example, explain a term, tighten a paragraph).',
            'Project: create a Project, add two or three reference files and instructions, then ask for something that uses them.',
            'Add-in or connector: open a real Excel/PowerPoint file and ask the add-in to change it, or use a Google connector (Drive search, or Docs live editing).',
            'Claude Code (technical clusters): a small change in a repo you own — for example add a test or fix a lint error — and review the diff.',
            'Record surface, task, time, what made it fast or slow, and what you had to check afterwards.',
          ],
        },
        {
          type: 'example',
          title: 'Sample record template',
          text: 'Surface | Task | Time | Why fast/slow | What I reviewed\nChat | Define "SCIM" for a client email | 1 min | No setup | Accuracy of definition\nProject | Summarise three policy PDFs against our template | 6 min | Setup cost once, reusable | Coverage vs source files\nExcel add-in | Add a variance column and chart | 3 min | Edited the real file, no copy-paste | Formulas and chart range\nClaude Code | Add unit test for date parser | 8 min | Ran tests itself | Diff and test output',
        },
        {
          type: 'tip',
          text: 'Good answers explain **why** a surface was faster (context already present, edits in place, could run tests) rather than just listing times. Use only data you are allowed to use — the data rules module (M8.1) applies.',
        },
      ],
    },
    {
      exercise:
        'Entitlement check: open your own settings and list which gated features your seat actually has. Compare with a colleague on a different seat type.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Open Settings in the Claude app and note your plan/organisation and seat type.',
            'Check Settings > Usage: your current 5-hour session and weekly reset time, and whether usage credits are available.',
            'Check for each gated feature: Claude Code (Code tab), Research, Claude in Chrome, Office add-ins, Google connectors, Project sharing, memory, Claude Tag.',
            'Mark each as: available, available but not enabled by the Owner, or not on this plan.',
            'Compare with a colleague on a different seat type and note the differences and their likely cause (plan vs Owner setting).',
          ],
        },
        {
          type: 'example',
          title: 'Sample checklist',
          text: 'Feature | My seat | Colleague | Evidence\nClaude Code | Yes (Code tab visible) | Yes | Desktop app\nResearch | Yes | Yes | Chat toolbar\nProject sharing | Yes | Yes | Share button on Project\nMemory | Off (Owner-controlled) | Off | Settings\nUsage | Standard seat limit | Premium: higher | Settings > Usage\nAudit logs/SCIM | Not visible to members | — | Enterprise admin feature',
        },
        {
          type: 'tip',
          text: 'Your organisation\'s seat types and Owner settings are organisation-specific. Confirm with your trainer or admin; do not infer them from another company\'s screenshot or this example.',
        },
      ],
    },
    {
      exercise:
        'Decision drill: for twelve described tasks, name the surface and justify it in one line each. Graded against a key.',
      guide: [
        {
          type: 'p',
          text: 'Apply the syllabus decision rules in order and justify each answer with where the input lives and where the output must land. One line each — the grader wants the rule, not an essay.',
        },
        {
          type: 'example',
          title: 'Worked sample (twelve tasks)',
          text: '1. What does EBITDA stand for? → Chat: quick answer.\n2. Compare three contracts I uploaded → Chat with files: my documents, one-off.\n3. Weekly review of the same policy pack → Project: documents reused repeatedly.\n4. Rebuild a pivot in an open workbook → Excel add-in: work inside an Office file.\n5. Restyle slides in our deck → PowerPoint add-in: work inside an Office file.\n6. Edit a shared Google Doc with comments → Google Docs live-editing connector: work inside a Google file.\n7. Find last month\'s client emails about pricing → Gmail connector: data lives in Gmail.\n8. Fix a failing test in our API repo → Claude Code: code in a repository.\n9. Every Friday, produce the status summary → Skill plus scheduled task: repeatable and scheduled.\n10. Fill a form on a supplier website → Claude in Chrome (if your seat has it): the work is in the browser.\n11. Let the team hand tasks to Claude in our project channel → Claude Tag: Team/Enterprise Slack agent.\n12. Add an AI summary to our customer app → API: a product feature.',
        },
        {
          type: 'warning',
          text: 'Common grading losses: routing repo work to chat, routing an Office-file edit to chat ("paste the table in"), and naming a surface your seat does not have without saying so.',
        },
      ],
    },
  ],

  quiz: [
    {
      question:
        'A developer needs to fix a bug that spans three files in the team\'s Git repository and wants the tests run before committing. What should they use?',
      options: [
        'Paste the three files into a chat and copy the fixes back',
        'Claude Code in the repository',
        'A Project with the files uploaded',
        'Claude in Chrome on the GitHub page',
      ],
      answer: 1,
      explanation:
        'Code in a repository → Claude Code, which reads the repo, runs tests and works with Git. Pasting code into chat is the named common failure.',
    },
    {
      question:
        'A colleague on another team posts a screenshot showing Research in Claude. You do not see it. What is the best conclusion?',
      options: [
        'Your app is broken and needs reinstalling',
        'Research must have been removed from the product',
        'The screenshot shows their entitlement, not yours; check your own settings, plan and admin',
        'Switch to your personal account, which may have it',
      ],
      answer: 2,
      explanation:
        'A screenshot is not evidence a feature exists on your plan. Research is Pro and above, and on organisational plans Owners control features. Never move work to a personal account.',
    },
    {
      question: 'Which feature is available only on Enterprise among these?',
      options: ['Project sharing', 'Claude Code', 'Research', 'SCIM and audit logs'],
      answer: 3,
      explanation:
        'Audit logs and SCIM are Enterprise. Project sharing is Team and Enterprise; Claude Code and Research are available from Pro upward.',
    },
    {
      question:
        'You need to add a variance column and chart to an Excel workbook that is open on your screen. Your seat is Team Standard. Best surface?',
      options: [
        'The Claude for Excel add-in',
        'Copy the table into chat, then paste the result back',
        'Claude Code',
        'The API',
      ],
      answer: 0,
      explanation:
        'Work inside an Office file → the add-in, which edits the real file in place. Excel and PowerPoint add-ins are Pro and above, so a Team seat qualifies.',
    },
    {
      question: 'What is the key difference in what you review in plain chat versus an agentic (Cowork) session?',
      options: [
        'There is no difference; both produce an answer',
        'In chat you check the answer; in an agentic session you check the actions Claude took',
        'Agentic sessions are reviewed by Anthropic, so you need not review them',
        'In chat you check actions; in agentic sessions you check the answer',
      ],
      answer: 1,
      explanation:
        'Chat changes nothing until you act, so you check the answer. Agentic sessions change files, mail and systems, so you check the plan and the actions.',
    },
    {
      question:
        'A Free-plan user asks why they cannot find Claude Code. What is the correct explanation?',
      options: [
        'Claude Code is only on Enterprise',
        'They must install the JetBrains plugin first',
        'Claude Code is not included on the Free plan',
        'Claude Code is only available through the API',
      ],
      answer: 2,
      explanation: 'Claude Code is gated: not on Free. Pro, Max, Ultra, Team and Enterprise include it.',
    },
    {
      question:
        'Your team wants to tag Claude in a Slack channel and hand it tasks that the whole channel can follow. Which statement is correct?',
      options: [
        'Use Claude in Slack, the current per-user app',
        'Use Claude Tag, a beta for Team and Enterprise that replaced Claude in Slack',
        'This is only possible through the API',
        'Use Dispatch from the Team plan',
      ],
      answer: 1,
      explanation:
        'Claude Tag (BETA; Team and Enterprise) replaced "Claude in Slack" in August 2026. Dispatch is not available on Team or Enterprise.',
    },
    {
      question:
        'You have hit your weekly usage limit, but your current 5-hour session still shows room. What happens?',
      options: [
        'You can keep working until the session runs out',
        'The weekly limit is ignored during an active session',
        'Your plan is automatically upgraded',
        'You are blocked unless usage credits are enabled, because the limits stack',
      ],
      answer: 3,
      explanation:
        'The session and weekly limits stack; session headroom does not help once the weekly limit is hit. Usage credits let work continue at pay-as-you-go rates.',
    },
    {
      question:
        'An Enterprise employee installs the Claude in Chrome extension, but it is not available to them. Most likely reason?',
      options: [
        'An Owner has not enabled Claude in Chrome for the organisation',
        'Claude in Chrome only works on Free',
        'Chrome extensions require the API',
        'Claude in Chrome is only for Linux',
      ],
      answer: 0,
      explanation: 'Claude in Chrome is Pro and above, and on Enterprise only when an admin/Owner enables it.',
    },
    {
      question:
        'Every Monday a manager wants the same status report compiled from Drive using the team\'s fixed format. Which route fits best?',
      options: [
        'Start a new chat each Monday and re-explain the format',
        'Claude Code',
        'A Skill for the method plus a scheduled task',
        'Claude in Chrome',
      ],
      answer: 2,
      explanation: 'Repeatable or scheduled work → Skills and scheduled tasks.',
    },
    {
      question: 'Where should you look for authoritative documentation on Claude Code?',
      options: [
        'support.claude.com only',
        'code.claude.com/docs',
        'A colleague\'s screenshots in the champions channel',
        'platform.claude.com/docs only',
      ],
      answer: 1,
      explanation:
        'code.claude.com/docs is the Claude Code reference; support.claude.com covers the apps and platform.claude.com/docs covers the API.',
    },
    {
      question:
        'Your product team wants an "AI summary" button inside the company\'s customer portal. Which surface is right?',
      options: [
        'Claude Tag in Slack',
        'The Claude desktop app',
        'A shared Project',
        'The API on the Developer Platform',
      ],
      answer: 3,
      explanation: 'A product feature → the API. Software calls Claude, not a person in an app.',
    },
    {
      question:
        'A consultant\'s work seat lacks a feature that their personal Pro account has. They want to use the personal account for a client deliverable. What should they do?',
      options: [
        'Use the personal account; Pro has the feature',
        'Use the personal account but delete the chat afterwards',
        'Stay on the work seat and raise the gap with the admin or champions channel',
        'Ask a colleague on another plan to run it for them',
      ],
      answer: 2,
      explanation:
        'Avoiding personal-account use for client work is an explicit workplace application of this module; personal accounts sit outside organisational data controls.',
    },
    {
      question: 'Which of these is named in the course but out of scope for training because it is not available on Team or Enterprise?',
      options: ['Dispatch and Duet', 'Claude Code on the web', 'The Excel add-in', 'Google Drive connector'],
      answer: 0,
      explanation:
        'Dispatch and Duet are previews not available on Team or Enterprise. Claude Science and Claude Security are also named but out of scope.',
    },
    {
      question:
        'A user wants Claude to rewrite a section of a shared Google Doc while they edit other parts at the same time. Which surface?',
      options: [
        'Download as .docx and use the Word add-in',
        'The Google Docs live-editing connector',
        'Paste the section into chat',
        'Claude Code',
      ],
      answer: 1,
      explanation:
        'Work inside a Google file → the Docs, Sheets and Slides live-editing connectors, which edit the real file beside the chat. On Team/Enterprise an Owner must enable connectors first.',
    },
  ],

  sources: [
    { title: 'Claude pricing and plans', url: 'https://claude.com/pricing' },
    { title: 'Get started with Cowork (Claude Help Center)', url: 'https://support.claude.com/en/articles/13345190-get-started-with-cowork' },
    { title: 'Usage and length limits (Claude Help Center)', url: 'https://support.claude.com/en/articles/11647753-usage-and-length-limits' },
    { title: 'Introducing Claude Tag (Anthropic news)', url: 'https://www.anthropic.com/news/introducing-claude-tag' },
    { title: 'Migrate from the earlier Claude in Slack (Claude Tag docs)', url: 'https://claude.com/docs/claude-tag/admins/migrate-from-earlier' },
    { title: 'Claude Code overview', url: 'https://code.claude.com/docs/en/overview' },
    { title: 'Claude Code on mobile', url: 'https://code.claude.com/docs/en/mobile.md' },
    { title: 'Claude Code: JetBrains IDEs', url: 'https://code.claude.com/docs/en/jetbrains.md' },
    { title: 'Get started with Claude in Chrome (Claude Help Center)', url: 'https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome' },
    { title: 'Claude in Chrome admin controls (Claude Help Center)', url: 'https://support.claude.com/en/articles/13065128-claude-in-chrome-admin-controls' },
    { title: 'Collaborate with Claude across Excel, PowerPoint, Word and Outlook (Claude blog, 7 May 2026)', url: 'https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook' },
    { title: 'Work across M365 apps (Office agents docs)', url: 'https://claude.com/docs/office-agents/work-across-apps' },
    { title: 'Use Google Workspace connectors (Claude Help Center)', url: 'https://support.claude.com/en/articles/10166901-use-google-workspace-connectors' },
    { title: 'Use Claude in Google Docs, Sheets and Slides (Claude Help Center)', url: 'https://support.claude.com/en/articles/16951679-use-claude-in-google-docs-sheets-and-slides' },
    { title: 'Install Claude Desktop (Claude Help Center)', url: 'https://support.claude.com/en/articles/10065433-install-claude-desktop' },
    { title: 'Chat search and memory (Claude Help Center)', url: 'https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context' },
    { title: 'Manage project visibility and sharing (Claude Help Center)', url: 'https://support.claude.com/en/articles/9519189-manage-project-visibility-and-sharing' },
    { title: 'Claude release notes (Claude Help Center)', url: 'https://support.claude.com/en/articles/12138966-release-notes' },
    { title: 'Claude Code changelog', url: 'https://code.claude.com/docs/en/changelog.md' },
    { title: 'Claude Code what\'s new', url: 'https://code.claude.com/docs/en/whats-new.md' },
    { title: 'Claude Platform release notes', url: 'https://platform.claude.com/docs/en/release-notes/overview' },
    { title: 'Claude Security is now in public beta', url: 'https://claude.com/fr/resources/articles/claude-security-public-beta' },
  ],
}
