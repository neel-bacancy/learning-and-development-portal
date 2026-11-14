import type { StudyNotes } from '../types.ts'

export const notes: StudyNotes = {
  overview:
    'M3.1 teaches you to use Claude to write emails, documents, decks and chat messages that fit their reader, faster than you could unaided, across the surfaces you already work in: chat, Projects, Claude Docs and Slides, the Microsoft 365 add-ins, the Gmail connector and Claude Tag in Slack. The second half of the objective matters just as much: nothing leaves your hands until you have checked every name, number and commitment yourself. The assessment tests both halves — choosing the right tool and plan for a writing task, and showing sending discipline (drafts are yours to verify, the add-ins do not send for you, and client-facing text carries a verification note).',

  sections: [
    {
      chapter: 'Email and messages',
      blocks: [
        {
          type: 'p',
          text: 'Email is the highest-volume writing most people do, and the easiest place to save time with Claude. The core moves are: **draft** (from bullet points or a brief), **reply** (paste the incoming message and say what you want to say), **shorten** (cut to a word or sentence budget), **change tone** (firmer, warmer, more formal) and **translate or draft directly in another language**. Each works best when you give Claude the same four things you learned in M2.1: the task, the context, the audience and the format.',
        },
        {
          type: 'table',
          head: ['Move', 'What to give Claude', 'Watch out for'],
          rows: [
            ['Draft from scratch', 'Purpose, recipient and their role, the 2–5 points to make, any deadline or ask, desired length', 'Claude inventing details you did not supply (dates, prices, names)'],
            ['Reply', 'The incoming email, your position on each point, what you will and will not commit to', 'Commitments you did not authorise slipping in ("we will deliver by Friday")'],
            ['Shorten', 'A hard budget ("under 120 words", "3 sentences") and what must survive', 'Losing the actual ask or a caveat that mattered'],
            ['Change tone', 'Target register and the reason ("firm but not hostile; this is the third late invoice")', 'Over-correction: apologetic becoming grovelling, firm becoming rude'],
            ['Multi-language', 'Target language, formality (e.g. tu/vous, du/Sie), whether to keep English terms of art', 'Mistranslated product names, numbers, dates and legal terms — verify with a fluent speaker for client text'],
          ],
        },
        {
          type: 'example',
          title: 'Reply prompt with explicit commitments',
          text: 'Here is an email from our client\'s Head of Operations (pasted below). Draft a reply that: (1) thanks her for the escalation, (2) confirms we have reproduced the issue, (3) says we will send a root-cause update by 17:00 UK time tomorrow — do NOT promise a fix date, (4) asks for the two affected order IDs. Tone: calm, accountable, no jargon. Under 150 words. Do not add any facts that are not in this prompt or her email.\n\n[pasted email]',
        },
        {
          type: 'example',
          title: 'Multi-language draft',
          text: 'Draft this status update in German for a client project sponsor. Use the formal "Sie" form. Keep the product name "OrderHub" and the ticket IDs in English exactly as written. After the German version, give me a line-by-line English back-translation so I can check nothing changed in meaning.',
        },
        {
          type: 'p',
          text: '**Thread summaries.** Paste (or let a connector fetch) a long thread and ask for: decisions made, open questions, and who owes what by when. Ask for a citation per point (sender and date) so you can check each against the source. A summary is a draft of the truth, not the truth — it can merge two people, miss a later reversal, or turn a suggestion into a decision.',
        },
        {
          type: 'p',
          text: '**Claude for Outlook (BETA).** An Outlook add-in that brings Claude into your inbox and calendar. Per the official docs it is in beta and available on Pro, Max, Team and Enterprise (not Free). Its headline jobs map exactly to the syllabus: **triage** the unread inbox into "needs you", "Claude can handle" and "noise"; **draft** replies, reply-alls and forwards (optionally in your voice); **summarise** long threads into decisions, open items and who owes what, with per-email citations; and **meeting preparation** ("Prep me for my 2pm") — a one-page brief built from the last thread with each attendee and attached documents. It can also find meeting times and draft invites.',
        },
        {
          type: 'warning',
          text: 'Sending rule for the exam: the Outlook add-in **never sends mail or invites**. It does not even request the `Mail.Send` permission — every draft lands unsent in Outlook\'s compose pane (or appointment form) and **you** click Send. It also does not check a message when you press Send (no Smart Alerts), so if you want a review you must ask Claude to review the draft before you send. Note the separate case: a connector (such as Microsoft 365 with write tools enabled) is not the add-in and can send mail — Claude asks for approval before connector actions.',
        },
        {
          type: 'list',
          items: [
            'Outlook add-in supported clients: Outlook on the web, new and classic Outlook on Windows (Microsoft 365), Outlook on Mac (Microsoft 365). Not supported: Outlook 2016/2019 perpetual, Outlook on iOS/Android, Exchange on-premises, shared or delegate mailboxes, and Gmail/Yahoo/iCloud/IMAP/POP accounts added to Outlook.',
            'Mailbox-wide features (triage, search, whole-thread reading, free/busy) need a one-time Microsoft Graph consent, often granted by an admin. Without it you can still work on the email you have open.',
            '"Draft in your voice": if you opt in, Claude reads your recent sent mail once and writes a style guide; you can delete what it has learned in Settings.',
            'Beta guidance from Anthropic: do not use it for client-facing or counterparty correspondence without reading the draft first; verify thread summaries against the cited emails for high-stakes conversations.',
            'Prompt injection: email bodies and attachments are untrusted input. A hidden instruction in an inbound email could try to make Claude draft or forward something you did not ask for — review every draft and action.',
          ],
        },
        {
          type: 'p',
          text: '**Gmail connector.** Connected once from Customize > Connectors, then switched on per conversation (+ > Connectors > Gmail). Claude can search your email and answer questions with citations linking back to the messages. Available on Pro, Max, Ultra, Team and Enterprise; on Team and Enterprise an Owner or Primary Owner must enable it for the organisation first. The connector is **read-only**: Claude cannot create, send or modify emails, and cannot see images embedded in emails. So the Gmail workflow is: let Claude find and summarise the thread, draft the reply in chat, then you paste it into Gmail, check it and send.',
        },
        {
          type: 'table',
          head: ['', 'Outlook add-in', 'Gmail connector'],
          rows: [
            ['Where it runs', 'Inside Outlook (task pane)', 'In a Claude conversation'],
            ['Status / plans', 'BETA; Pro, Max, Team, Enterprise', 'Pro, Max, Ultra, Team, Enterprise (org enablement on Team/Enterprise)'],
            ['Reads mail', 'Yes (open email; mailbox-wide with Graph consent)', 'Yes (searches your mail)'],
            ['Writes drafts', 'Yes, unsent into the compose pane', 'No — read-only; draft in chat and paste'],
            ['Sends', 'Never', 'Never'],
            ['Citations', 'Per-email citations that open the message', 'Citations linking to the messages used'],
          ],
        },
        {
          type: 'tip',
          text: 'Whatever the surface, end every email prompt with a constraint like "Do not add facts, dates or commitments that are not in my notes or the thread." It turns invention into an obvious gap you can fill rather than a hidden error you might send.',
        },
      ],
    },
    {
      chapter: 'Documentation and long-form writing',
      blocks: [
        {
          type: 'p',
          text: 'Long documents fail when you ask for the whole thing in one prompt: structure drifts, terms change meaning half-way, and you cannot review 4,000 words properly in one pass. The reliable method is **outline first, then section by section**, followed by **consistency passes**.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Brief: state the document type, purpose, the defined reader (role, expertise, what decision they must make), length and any template.',
            'Outline: ask for a headed outline with one line per section saying what it must establish. Edit the outline yourself — this is the cheapest point to fix structure.',
            'Draft section by section: "Write section 3 only, ~300 words, using the facts in the attached report." Review each before moving on.',
            'Rewrite for the reader: adjust depth and vocabulary for the defined reader ("an operations director with no engineering background").',
            'Consistency pass: ask Claude to check terminology, numbers, names, tense, heading style and cross-references across the whole document, and to list issues rather than silently fixing them.',
            'Glossary enforcement: give Claude your glossary and ask it to flag every term used differently or not defined.',
            'Human verification: check every figure and claim against source before the document goes anywhere.',
          ],
        },
        {
          type: 'example',
          title: 'Outline prompt',
          text: 'I need an incident post-mortem for a 3-hour checkout outage. Reader: the client\'s CTO and Head of Customer Service — technically literate but not on our team. Purpose: explain what happened, impact, root cause, and what we are changing, so they can decide whether further escalation is needed. Give me an outline only: H2 headings, and under each one sentence describing what that section must establish. Do not draft any prose yet.',
        },
        {
          type: 'example',
          title: 'Consistency and glossary pass',
          text: 'Here is the full draft and our glossary (below). Do not rewrite anything. Produce a table with columns: Location | Issue | Suggested fix. Check for: (1) any glossary term used with a different meaning or a synonym (e.g. "customer" vs "client" vs "user"); (2) numbers that disagree between sections; (3) people or teams named inconsistently; (4) headings that break the H2/H3 pattern; (5) acronyms used before being defined.',
        },
        {
          type: 'p',
          text: '**Where to do it.** A **Claude Doc** (a living document in your Claude account, created with /docs or Output > Docs, or from a Docs template in the Artifacts tab) is ideal for long-form work: you and colleagues can type directly, highlight text and choose **Edit with Claude**, or comment with @Claude. Docs export to Word (.docx), PDF, Markdown or Google Docs. In Word itself, the Claude for Word add-in can fill your template in the document\'s own heading and paragraph styles and run QA prompts such as "Flag inconsistent defined terms and broken cross-references".',
        },
        {
          type: 'tip',
          text: 'Put the glossary and the reader definition in a Project\'s instructions or knowledge so every section-drafting chat inherits them — you do not have to re-paste them for each section.',
        },
        {
          type: 'warning',
          text: 'A consistency pass by Claude is not proof of consistency. It can miss a mismatch or "fix" a number to the wrong value. Ask it to list issues, then decide and correct them yourself.',
        },
      ],
    },
    {
      chapter: 'Tone, voice and Styles',
      blocks: [
        {
          type: 'p',
          text: '**Tone** is the attitude of a single piece (warm, firm, urgent). **Voice** is the consistent personality of a writer or team across pieces. **Register** is the level of formality and vocabulary chosen for a particular audience. Claude gives you three tools to control these: **Styles** (how Claude writes for you personally), **Project instructions** (standing guidance for everyone using a shared project) and plain prompt instructions (for one-off register switches).',
        },
        {
          type: 'p',
          text: '**Styles** shape how Claude formats and phrases its responses. Claude offered preset styles (including Learning, Concise, Explanatory and Formal) plus **custom Styles**, which you can build from your own writing samples so Claude matches your vocabulary, sentence length and structure. A style is chosen per conversation from the style menu, so you can switch it on for drafting and off for analysis.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Collect three or more samples that represent how you want to sound for this purpose (e.g. three client emails you were happy with). Remove confidential details first.',
            'In claude.ai open the style menu ("Use style") and choose **Create & edit styles**, then **Create custom style**.',
            'Upload or paste your writing samples (documents such as PDF, DOC or TXT are accepted) and let Claude generate the style. Alternatively choose **Describe style instead**, pick a starting point and describe the voice, or use custom instructions to write the style rules in your own words.',
            'Review the generated style description and edit it — remove anything you do not want copied (e.g. a habit of long sign-offs).',
            'Name it clearly (e.g. "Me – client email") and save.',
            'Test: draft a new piece with the style on, compare against a real sample, and refine the description.',
          ],
        },
        {
          type: 'warning',
          text: 'Syllabus vs web (November 2026): the official help article (support.claude.com article 10181068, now titled "Styles are moving to skills") says custom styles are being migrated automatically into **skills**; migrated skills start switched off and must be enabled under Customize > Skills; the Styles menu is being removed; and the Concise, Explanatory and Formal presets will not be available after migration (Learning is kept as a skill). Rollout timing may vary by account. The syllabus still teaches "custom Styles built from your own writing samples" — learn the Style workflow above for the assessment, but be aware your account may show the skill-based version, invoked by typing `/` in the message box and choosing the skill. Confirm with your trainer which UI the lab uses.',
        },
        {
          type: 'p',
          text: '**A team voice guide held as Project instructions.** A Project on claude.ai is a workspace with its own chat history, knowledge base and **project instructions** that apply to every chat in that project. On Team and Enterprise, projects can be shared with specific people, groups or the whole organisation, with "Can view" or "Can edit" permissions (only editors can change instructions). That makes project instructions the natural home for a team voice guide: everyone who drafts inside the project gets the same rules without remembering to paste them.',
        },
        {
          type: 'example',
          title: 'Skeleton team voice guide (Project instructions)',
          text: 'VOICE: Plain, confident, specific. We explain, we do not sell.\nAUDIENCE DEFAULT: client stakeholders who are busy and non-technical unless told otherwise.\nRULES: Lead with the answer. One idea per paragraph. Prefer numbers to adjectives. British spelling. No exclamation marks. Never promise dates, prices or scope — write [CONFIRM] where a commitment is needed.\nTERMS: "client" not "customer"; "release" not "drop"; product names exactly as in the glossary in project knowledge.\nSIGN-OFF: first name only, no "Best regards".\nCHECK: end every client-facing draft with a list of facts the author must verify.',
        },
        {
          type: 'tip',
          text: 'Your organisation\'s actual voice guide is organisation-specific. Use the skeleton above only as a pattern and confirm with your trainer where your team\'s guide lives and what it says.',
        },
        {
          type: 'table',
          head: ['Tool', 'Scope', 'Best for'],
          rows: [
            ['Style (or migrated style skill)', 'You, per conversation', 'Sounding like yourself; a personal register'],
            ['Project instructions', 'Every chat in that project; shared on Team/Enterprise', 'Team voice guide, glossary, standard checks'],
            ['Prompt instruction', 'This request only', 'One-off register switch for a specific audience'],
          ],
        },
        {
          type: 'p',
          text: '**Switching register.** The same facts need different writing for different readers. Client: courteous, outcome-focused, no internal jargon, careful about commitments. Internal: direct, can use team shorthand, includes the messy detail. Executive: answer first, one-screen length, decision or ask explicit, numbers over narrative.',
        },
        {
          type: 'example',
          title: 'Register switch in one chat',
          text: 'Facts: the data migration slipped two weeks because the vendor API rate-limited us; we have a workaround; new go-live 14 March; no data lost; extra cost £4k absorbed by us.\nWrite three versions: (A) client executive — 4 sentences, answer first, reassuring, no technical detail; (B) internal engineering channel — direct, include the rate-limit detail and the workaround; (C) the vendor — factual, non-blaming, request a higher rate limit. Label each version.',
        },
      ],
    },
    {
      chapter: 'Editing and review',
      blocks: [
        {
          type: 'p',
          text: 'Know which kind of edit you are asking for, because the prompts and the review effort differ. A **structural edit** changes organisation: order of sections, what is cut or added, whether the argument holds. A **line edit** works sentence by sentence: clarity, concision, word choice, rhythm. **Proofreading** is the final pass for spelling, grammar, punctuation and consistency. Do structural before line, and line before proofreading — line-editing a section you later cut is wasted effort.',
        },
        {
          type: 'table',
          head: ['Edit type', 'Example prompt', 'What to check afterwards'],
          rows: [
            ['Structural', '"Do not rewrite. Tell me whether the order of sections serves a CFO deciding on budget, and propose a new order with reasons."', 'Does the new order still contain everything? Was anything dropped?'],
            ['Line', '"Tighten paragraph 3 and drop the passive voice. Keep every fact and number."', 'Meaning unchanged; numbers identical'],
            ['Proofread', '"Proofread for spelling, grammar and punctuation only. List each change; do not alter wording otherwise."', 'Only mechanical changes were made'],
          ],
        },
        {
          type: 'p',
          text: '**Proofreading in a second language.** Claude is a strong second reader when you write in a language that is not your first. Ask it to correct errors and also explain each correction, and to flag phrases that are grammatically correct but sound unnatural or too informal for the reader. Ask for a back-translation if meaning is critical. For contracts, regulated or client-facing text, a fluent human still signs off.',
        },
        {
          type: 'example',
          title: 'Second-language proofread',
          text: 'I am a non-native French speaker. Proofread this email to a client. Return: (1) the corrected text; (2) a table of each change with a one-line reason in English; (3) any phrase that is correct but sounds too casual for a client. Do not change the meaning or the numbers.',
        },
        {
          type: 'p',
          text: '**Suggestions in Claude Docs.** In a Claude Doc you can select text and choose **Edit with Claude**, describing the change (Claude edits only the marked text), or select text and leave a comment that mentions @Claude — Claude replies in the comment thread, makes the change and explains what it did and why. Claude also leaves its own comments while drafting. Nothing is locked while Claude works and "the final say is always yours". Docs start private; sharing roles are Viewer, Commenter and Editor.',
        },
        {
          type: 'warning',
          text: 'Could not verify: the official "Get started with Claude Docs" article describes Edit with Claude and @Claude comments but does not describe a separate accept/reject "suggestions" mode for Claude Docs. Treat the syllabus phrase "suggestions in Claude Docs" as covering these comment- and selection-based edit requests, and confirm with your trainer what the lab expects.',
        },
        {
          type: 'p',
          text: '**Suggestions in the Word add-in.** Claude for Word can edit a selected passage while preserving styles, numbering and formatting. In **tracked changes mode** every Claude edit lands as a tracked revision — the original shown as a deletion, the new text as an insertion — which you accept or reject in Word\'s native review pane. It can also work through comment threads (editing the anchored text and replying with what it changed) and summarise a counterparty\'s redlines, flagging the ones worth pushing back on.',
        },
        {
          type: 'warning',
          text: 'Syllabus vs web: the syllabus labels the Word add-in BETA. The official Claude for Word page (claude.com/docs/office-agents/word, November 2026) says it is **generally available** to Pro, Max, Team and Enterprise. For the assessment, answer with the syllabus label (BETA) where a question depends on it; in practice treat it as GA.',
        },
        {
          type: 'tip',
          text: 'Turn on tracked changes before asking Claude to edit a document others will review. Then every change is visible and individually reversible, which is exactly what a reviewer needs. Anthropic\'s own best practice: always review tracked changes before accepting them, and do not use the add-in for final client deliverables without human review.',
        },
      ],
    },
    {
      chapter: 'Presentations',
      blocks: [
        {
          type: 'p',
          text: '**Narrative structure before slides.** A deck is an argument delivered in pieces. Decide the storyline first — the one-sentence message, the 3–5 points that support it, and the ask — then turn each point into slides. Building slides first produces a pile of facts with no thread. A useful frame: situation, complication, resolution (what we recommend), next steps.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Give Claude the source (report, notes), the audience, the purpose and the time slot.',
            'Ask for the storyline: key message in one sentence plus the supporting points.',
            'Ask for a slide-by-slide outline: title (written as a headline that states the point), 3 bullets max, and a suggested visual per slide.',
            'Correct the outline yourself — this is where you fix the argument.',
            'Ask for speaker notes per slide, written as a script of what you will say (so slides can carry less text).',
            'Only then build the slides (Slides artifact or PowerPoint add-in), then check every figure against the source.',
          ],
        },
        {
          type: 'example',
          title: 'Ten-slide outline with speaker notes',
          text: 'From the attached project report, build a 10-slide outline for a 15-minute steering committee update. Audience: client executives. Purpose: approve phase 2 budget. First give me the storyline in 3 sentences. Then for each slide: headline title that states the point, max 3 bullets, suggested visual, and ~80 words of speaker notes written as what I will say. Use only facts from the report; mark any gap as [SOURCE NEEDED].',
        },
        {
          type: 'p',
          text: '**Slides artifacts (Claude Slides).** Ask for a deck in any conversation and it opens in a slide editor beside the chat. Claude may ask questions or share an outline first; Anthropic\'s guidance is "Ask Claude for an outline, correct it, then ask for the deck." Claude can write speaker notes as a script; notes stay off the slide. You can present inside Claude ("Present with speaker notes" opens a presenter window with notes, a clock and current/next slides), edit by hand, comment to send requests to Claude, and apply a design system for your brand\'s fonts and colours. Export: PowerPoint or PDF (also HTML, PNG, or Google Slides if Google Drive is connected).',
        },
        {
          type: 'list',
          items: [
            'On PowerPoint export, text boxes, tables, pictures, slide backgrounds and speaker notes stay editable; charts, icons and shapes become pictures; transitions and skipped slides are dropped.',
            'Charts reflect data at build time — ask Claude to update them when numbers change.',
            'Claude may leave a visible placeholder for a missing figure: review assumptions and check figures against your sources before presenting.',
          ],
        },
        {
          type: 'p',
          text: '**Claude for PowerPoint add-in.** Works inside PowerPoint: builds slides from your existing client or corporate template (reading the slide master, layouts, fonts and colours), makes pinpoint edits to specific slides without regenerating the deck, generates full decks from a description, and converts bullets into diagrams and editable native charts. Persistent instructions in the add-in Settings (e.g. "always use one-line bullets") apply only to PowerPoint. It is available on Pro, Max, Team and Enterprise — i.e. **Pro and above**, matching the syllabus plan gate.',
        },
        {
          type: 'table',
          head: ['', 'Slides artifact', 'PowerPoint add-in'],
          rows: [
            ['Where you work', 'In Claude, beside the chat', 'Inside PowerPoint'],
            ['Starting point', 'A conversation, notes or a report', 'Your existing template / open deck'],
            ['Brand control', 'Design system', 'Slide master, layouts, fonts, colours of the template'],
            ['Output', 'Export to PowerPoint, PDF, Google Slides etc.', 'A native .pptx with editable charts'],
            ['Plan (syllabus)', 'Pro and above (syllabus); see warning', 'Pro and above'],
          ],
        },
        {
          type: 'warning',
          text: 'Syllabus vs web: the syllabus groups Slides artifacts and the PowerPoint add-in under "PLAN: Pro and above". The PowerPoint add-in page confirms Pro, Max, Team and Enterprise. However, Anthropic\'s release notes (16 Sept 2026) and help centre say artifacts including Claude Slides and Claude Docs are available on every plan, including Free (on Enterprise they were initially beta, turning on by default 15 Oct 2026). For the assessment use the syllabus gate; in practice check your plan.',
        },
        {
          type: 'tip',
          text: 'Start with your template applied before asking the PowerPoint add-in to generate content, and be specific about which slide to change ("Simplify the text on slide 3"). Both are on Anthropic\'s best-practice list.',
        },
      ],
    },
    {
      chapter: 'Chat-platform communication',
      blocks: [
        {
          type: 'p',
          text: '**Claude Tag** puts Claude into Slack as a teammate. Anyone in a channel Claude is in can tag `@Claude` with a request; Claude works in a thread, posts a checklist as it goes, and the whole exchange stays visible to the channel. It launched on 23 June 2026 in **beta** for **Team and Enterprise** plans only — not Free, Pro, Max or Ultra — and replaces the earlier Claude in Slack app. An Owner sets it up once (pairing the Slack workspace, setting a spend limit, adding Claude to channels).',
        },
        {
          type: 'example',
          title: 'Summarise a channel',
          text: '@Claude summarise the last 7 days of this channel: decisions made, open questions, and who owes what. One line per item, with a link to the source message. Skip social chat.',
        },
        {
          type: 'example',
          title: 'Draft a post',
          text: '@Claude draft an announcement for #general about the new expense tool going live on 1 April. 5 sentences, friendly, include the training link from this thread. Post it here in the thread for my approval — do not post it to #general.',
        },
        {
          type: 'example',
          title: 'Follow up',
          text: '@Claude every Monday at 9:00, check this thread for the three approvals we still need (finance, legal, security) and post a one-line status. Stop when all three are in. Done means all three approvers have replied "approved" in the thread.',
        },
        {
          type: 'p',
          text: 'Good habits from Anthropic\'s guidance: name the outcome, not the activity; give every task a definition of done; say which decisions must come back to you; specify the format for anything recurring; start a new thread for each new task. Instructions in a prompt steer Claude but do not enforce anything — hard limits need real controls (permissions, approvals).',
        },
        {
          type: 'p',
          text: '**Visibility and etiquette — who can see what Claude posts.** This is the most testable part of the chapter.',
        },
        {
          type: 'table',
          head: ['Surface', 'Who sees the work', 'Access / billing'],
          rows: [
            ['Team channel', 'Everyone in the channel (assume they can read the thread, checklist and results)', 'Channel connections set by an admin; billed to the organisation'],
            ['Your own channel (just you + Claude)', 'You, plus anyone you invite', 'Channel connections; billed to the organisation'],
            ['One-to-one DM', 'You', 'Runs on your own claude.ai account and connectors; billed to your seat'],
            ['Private channel', 'Members of that channel', 'Claude can only read it from inside that channel, never from another channel or DM'],
          ],
        },
        {
          type: 'list',
          items: [
            'Work in public, but put anything personal or sensitive in a DM, not a shared channel.',
            'Memory belongs to the channel, not to you: anyone in the channel can read and change channel memory. Notes Claude saves as workspace notes from a public channel are read in every channel of the workspace, including private ones.',
            'Claude never pings @channel, @here or @everyone. If you want someone to follow a thread, invite them yourself — Claude cannot add people to a channel. In a public channel a person Claude mentions is notified even if not a member; in a private channel they are not.',
            'A DM answer about a public channel ("summarise the last week of #product-feedback") keeps the answer private; it does not widen what Claude can reach.',
            'Ask Claude to post drafts in the thread for approval before anything goes to a wider channel or outside the organisation (Slack Connect channels need an Owner or admin to enable Claude, with limited access).',
            'Admins can see a log of Claude\'s actions and who requested each one.',
          ],
        },
        {
          type: 'tip',
          text: 'Etiquette rule of thumb: anything you ask Claude to do in a channel is effectively said in that channel. If you would not type it there yourself, do not ask Claude there.',
        },
      ],
    },
    {
      chapter: 'Sending discipline',
      blocks: [
        {
          type: 'p',
          text: 'The module objective ends with "send nothing you have not checked". Claude drafts; you are the author and you are accountable. No Claude surface in this module sends on your behalf: the Outlook add-in leaves drafts unsent, the Gmail connector\'s write actions (where your Claude offers them) need your approval, Word and PowerPoint changes are yours to accept, and in Slack you can ask Claude to post for approval first.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Read the whole draft as the recipient will see it — not just the part you changed.',
            '**Names**: every person, company and product spelled correctly; right person addressed; recipients (To/Cc/reply-all) correct.',
            '**Numbers**: every figure, date, time zone, price, percentage and ID checked against the source.',
            '**Commitments**: every promise, deadline or scope statement is one you are authorised to make. Delete anything Claude added that you did not ask for.',
            'Tone fits the reader and the relationship; nothing internal or confidential leaked into client text.',
            'Attachments and links are the right ones.',
            'For client-facing text, add the verification note your organisation requires.',
          ],
        },
        {
          type: 'example',
          title: 'Ask Claude to help you check (not to replace your check)',
          text: 'Before I send this, list every name, number, date and commitment in the draft as a checklist table with columns: Item | Exact text | Where it came from (my notes / the thread / not in sources). Flag anything marked "not in sources".',
        },
        {
          type: 'p',
          text: '**The verification note.** Client-facing text produced with Claude carries a verification note recording that a human checked it. The full process is taught in M8.2 at Practitioner level. A generic note records who verified, when, what was checked (names, numbers, commitments) against which sources, and that AI assistance was used.',
        },
        {
          type: 'example',
          title: 'Generic verification note (pattern only)',
          text: 'Verified by: [name], [date]. Drafted with Claude; all names, figures, dates and commitments checked against [source: thread / report v2.1 / CRM]. Open items: none.',
        },
        {
          type: 'tip',
          text: 'The exact format and placement of the verification note is organisation-specific. Confirm with your trainer what your organisation requires — the lab and drill will expect that format.',
        },
        {
          type: 'warning',
          text: 'Prompt injection is a sending risk too. Emails and documents from outside can contain hidden instructions. If a draft suddenly includes a forward, a new recipient, a link or a request you did not ask for, stop and investigate before sending.',
        },
      ],
    },
  ],

  keyFacts: [
    'Module objective: produce clear, audience-fit written communication faster than unaided — and send nothing you have not checked.',
    'Claude for Outlook is BETA, on Pro, Max, Team and Enterprise (not Free).',
    'The Outlook add-in never sends mail or invites; it does not request Mail.Send; drafts land unsent in the compose pane and you click Send.',
    'Outlook add-in jobs: triage (needs you / Claude can handle / noise), drafts, thread summaries with per-email citations, meeting prep briefs, finding meeting times.',
    'Outlook add-in does not support shared or delegate mailboxes, Exchange on-premises, mobile Outlook, or Gmail/IMAP accounts inside Outlook.',
    'The Gmail connector lets Claude search and cite your email. Public docs disagree on whether it can also send or change mail (see M4.1); either way, any write action needs your approval and you remain the sender.',
    'On Team and Enterprise, an Owner or Primary Owner must enable the Gmail connector before members can connect it.',
    'Long-form method: outline first, then section by section, then consistency passes and glossary enforcement, then human verification.',
    'Custom Styles can be built from your own writing samples (Create & edit styles > Create custom style), or described instead.',
    'Web discrepancy: Anthropic is migrating custom styles into skills (start disabled; enable under Customize > Skills); Concise, Explanatory and Formal presets are going away.',
    'A team voice guide belongs in Project instructions, which apply to every chat in the project; projects can be shared on Team and Enterprise (Can view / Can edit).',
    'Structural edits change organisation; line edits change sentences; proofreading fixes mechanics. Do them in that order.',
    'Claude Docs: select text and choose Edit with Claude, or mention @Claude in a comment; Claude replies in the thread, makes the change and explains it. Docs start private.',
    'Claude Docs export to Word, PDF, Markdown or Google Docs.',
    'Syllabus labels the Word add-in BETA; the official page now says generally available on Pro, Max, Team and Enterprise.',
    'Word add-in tracked changes mode: every Claude edit lands as a revision to accept or reject in Word\'s review pane.',
    'Slides artifacts and the PowerPoint add-in are plan-gated to Pro and above in the syllabus; the PowerPoint add-in is on Pro, Max, Team and Enterprise.',
    'Narrative structure before slides: storyline and outline first, then speaker notes, then build.',
    'Claude Slides exports to PowerPoint or PDF (and Google Slides with Drive connected); charts, icons and shapes become pictures in PowerPoint.',
    'Claude Tag is BETA, Team and Enterprise only (launched 23 June 2026); it replaces the earlier Claude in Slack app.',
    'In a Slack channel, everyone in the channel can see what Claude posts and works on; a one-to-one DM is private and runs on your own Claude account.',
    'Claude Tag never pings @channel, @here or @everyone, and cannot add people to a channel.',
    'Claude Tag memory belongs to the channel; anyone in the channel can read and change it.',
    'Before sending: check every name, number and commitment; client-facing text carries a verification note (full process in M8.2).',
  ],

  glossary: [
    { term: 'Register', definition: 'The level of formality and vocabulary chosen for a particular audience — e.g. client, internal or executive.' },
    { term: 'Tone', definition: 'The attitude a single piece conveys (warm, firm, urgent, apologetic).' },
    { term: 'Voice', definition: 'The consistent personality of a writer or team across all their writing.' },
    { term: 'Style (Claude)', definition: 'A setting that shapes how Claude formats and phrases its responses in a conversation; can be a preset or a custom style built from your writing samples or a description. Being migrated to skills per the November 2026 help centre.' },
    { term: 'Custom Style', definition: 'A style you create via Create & edit styles > Create custom style, typically by uploading samples of your own writing so Claude matches your voice.' },
    { term: 'Skill', definition: 'A packaged set of instructions (and optional scripts/resources) that Claude loads when a task matches; managed under Customize > Skills and invoked automatically or by typing / in the message box.' },
    { term: 'Project', definition: 'A claude.ai workspace with its own chat history, knowledge base and instructions; shareable with teammates on Team and Enterprise.' },
    { term: 'Project instructions', definition: 'Standing guidance applied to every chat in a project — the place to hold a team voice guide or glossary.' },
    { term: 'Claude for Outlook', definition: 'BETA Outlook add-in for triage, drafting, thread summaries and meeting prep; never sends mail itself.' },
    { term: 'Triage (Outlook)', definition: 'Sorting the unread inbox into what needs you, what Claude can handle, and noise, with a reason per action item.' },
    { term: 'Meeting prep brief', definition: 'A one-page brief the Outlook add-in builds for your next event from the last thread with each attendee and attached documents.' },
    { term: 'Gmail connector', definition: 'A connector that lets Claude search your Gmail and answer with citations. Write actions, where offered, sit behind approval prompts (see M4.1).' },
    { term: 'Connector', definition: 'A connection that lets Claude reach an external service or data source (e.g. Gmail, Microsoft 365) from a conversation.' },
    { term: 'Microsoft Graph consent', definition: 'One-time permission (often admin-granted) the Outlook add-in needs for mailbox-wide features such as triage, search and free/busy.' },
    { term: 'Claude Docs', definition: 'Living rich-text documents written with Claude and colleagues, stored in the Artifacts tab; supports Edit with Claude and @Claude comments; exports to Word, PDF, Markdown, Google Docs.' },
    { term: 'Edit with Claude', definition: 'In Claude Docs, highlight text and describe a change; Claude edits only the marked text.' },
    { term: 'Claude for Word', definition: 'Word add-in that edits selections while preserving formatting, works in tracked changes mode, works through comments and summarises redlines.' },
    { term: 'Tracked changes mode', definition: 'Word add-in mode in which each Claude edit appears as a tracked revision you accept or reject in Word\'s review pane.' },
    { term: 'Structural edit', definition: 'An edit to the organisation of a document — section order, what is cut or added, logic of the argument.' },
    { term: 'Line edit', definition: 'A sentence-level edit for clarity, concision, word choice and flow.' },
    { term: 'Proofreading', definition: 'The final mechanical pass for spelling, grammar, punctuation and consistency.' },
    { term: 'Consistency pass', definition: 'A review across a whole document for consistent terms, numbers, names, headings and cross-references.' },
    { term: 'Glossary enforcement', definition: 'Checking a document against an agreed list of terms so each is used with one meaning and spelled one way.' },
    { term: 'Slides artifact (Claude Slides)', definition: 'A deck Claude builds in a slide editor beside the chat; supports speaker notes, presenting, design systems and export to PowerPoint/PDF.' },
    { term: 'Speaker notes', definition: 'The script for each slide, kept off the slide itself so slides can carry less text.' },
    { term: 'Design system', definition: 'Your brand\'s fonts, colours and components, applied by Claude to designs and decks.' },
    { term: 'Claude for PowerPoint', definition: 'PowerPoint add-in (Pro and above) that builds slides from your template, makes targeted edits and creates native charts and diagrams.' },
    { term: 'Narrative structure', definition: 'The storyline of a presentation — key message, supporting points and ask — decided before any slides are built.' },
    { term: 'Claude Tag', definition: 'BETA Slack integration for Team and Enterprise in which anyone in a channel can tag @Claude to hand it work; replaces the earlier Claude in Slack app.' },
    { term: 'Channel memory', definition: 'Claude Tag notes kept per channel (conventions, decisions); readable and editable by anyone in the channel.' },
    { term: 'Workspace notes', definition: 'Claude Tag notes saved from a public channel that Claude reads in every channel of the workspace.' },
    { term: 'Definition of done', definition: 'A verifiable end condition stated in a task so Claude (or you) can confirm and close it.' },
    { term: 'Verification note', definition: 'A note on client-facing text recording that a human checked names, numbers and commitments against sources; full process in M8.2.' },
    { term: 'Prompt injection', definition: 'Hidden instructions in an email, document or file that try to make Claude take actions you did not ask for.' },
  ],

  pitfalls: [
    'Believing the Outlook add-in can send replies for you — it never sends; drafts land unsent and you click Send.',
    'Assuming a connector will act safely on its own — review the draft and approve or perform every send yourself.',
    'Pasting an email and asking "reply to this" with no position — Claude fills the gap with plausible commitments you never agreed.',
    'Trusting a thread summary without checking it against the messages — summaries can miss reversals or turn suggestions into decisions.',
    'Asking for a whole long document in one prompt instead of outline first, then section by section.',
    'Letting a consistency pass silently "fix" numbers — ask Claude to list issues and decide yourself.',
    'Putting a team voice guide in your personal Style so colleagues do not get it — a shared standard belongs in Project instructions.',
    'Building a custom Style from samples that include confidential client details, or from samples that do not represent the voice you want.',
    'Expecting the old Styles menu or the Concise/Formal presets to be there — the help centre says they are being migrated to skills.',
    'Line-editing before the structure is settled, wasting effort on sections that get cut.',
    'Accepting all tracked changes in Word without reading them.',
    'Jumping straight to slides without a storyline — the deck becomes a pile of facts with no ask.',
    'Presenting charts or figures from a Slides artifact without checking them against the source report.',
    'Asking Claude Tag to handle something sensitive in a shared channel — everyone in the channel can see the work; use a DM.',
    'Expecting Claude Tag on a Pro or Max plan — it is Team and Enterprise only.',
    'Expecting Claude to @here the channel or add a colleague to a channel — it never pings @channel/@here/@everyone and cannot invite people.',
    'Forgetting that anyone in a channel can read and change Claude\'s channel memory.',
    'Treating "Claude checked it" as verification — the human author checks every name, number and commitment.',
    'Sending client-facing text without the required verification note.',
    'Ignoring an unexpected forward, recipient or link in a draft — it may be prompt injection from an inbound email or file.',
  ],

  exerciseGuides: [
    {
      exercise: 'Rewrite one real email for three audiences — client executive, peer engineer, vendor — in a single chat.',
      guide: [
        { type: 'p', text: 'The skill being tested is register switching while keeping facts identical. Doing it in a single chat means Claude holds the same fact base for all three versions, and you can compare them side by side.' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Pick a real email with substance (a delay, a decision, a request). Remove confidential client details or replace them with placeholders.',
            'First ask Claude to extract the facts as a bullet list. Correct the list — this is your single source of truth.',
            'Ask for three labelled versions, specifying for each: reader, purpose, length and tone.',
            'Check: every version contains the same facts and numbers; no version adds a commitment; each fits its reader.',
            'Optionally ask Claude for a table comparing what changed between versions and why.',
          ],
        },
        {
          type: 'example',
          title: 'Template prompt',
          text: 'Below is an email I sent. Step 1: list the facts in it as bullets and stop. [after you confirm] Step 2: rewrite it three times using only those facts. (A) Client executive: 4–5 sentences, answer first, outcome and next step, no technical terms. (B) Peer engineer: direct, technical detail allowed, include the workaround. (C) Vendor: factual, non-blaming, one clear request with a date. Label each version and keep every number identical.',
        },
        { type: 'tip', text: 'Good looks like: three versions a reader could not mistake for each other in tone, yet a fact-check shows identical names, numbers and commitments.' },
      ],
    },
    {
      exercise: 'Build a personal Style from three samples of your own writing. Test it on a new draft and have a peer rate the match.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Choose three samples of the same kind of writing (e.g. three client emails), each a few paragraphs, that you are proud of. Strip confidential details.',
            'Open the style menu > Create & edit styles > Create custom style, and upload or paste the samples. Let Claude generate the style.',
            'Read the generated description; edit out anything you do not want reproduced and add one or two explicit rules (e.g. "no exclamation marks").',
            'Name and save it, then start a new chat with the style selected and draft a new piece of the same kind.',
            'Give a peer the new draft plus one of your real samples (unlabelled) and ask them to rate the match 1–5 and name what gave it away.',
            'Refine the style description based on the feedback and retest.',
          ],
        },
        {
          type: 'warning',
          text: 'If your account has been migrated, your custom style may appear as a skill under Customize > Skills (switched off by default) and the Styles menu may be gone. In that case create or enable the equivalent writing-style skill and invoke it with / in the message box. Confirm with your trainer which route the exercise expects.',
        },
        {
          type: 'example',
          title: 'Peer rating sheet',
          text: 'Sample A and Sample B — one is written by me, one by Claude using my style.\n1. Which is which? \n2. Match score 1–5 for: vocabulary, sentence length, structure, sign-off, overall.\n3. One thing that sounded "not me".',
        },
        { type: 'tip', text: 'Good looks like: a peer scores 4+ overall or cannot reliably tell the drafts apart, and you can point to the specific edits you made to the style description.' },
      ],
    },
    {
      exercise: 'Turn a 40-message thread into one paragraph plus an action table. Verify every action against the thread.',
      guide: [
        { type: 'p', text: 'Use the surface you have: paste the thread into chat, use the Outlook add-in ("Who owes what on this thread?" — gives per-email citations), or the Gmail connector (search and summarise with citations). The verification step is the point of the exercise.' },
        {
          type: 'example',
          title: 'Template prompt',
          text: 'Summarise this thread. Output: (1) One paragraph, max 100 words: what the thread is about, what was decided, what is still open. (2) A table: Action | Owner | Due date | Source (sender + date of the message where it was agreed). Only include actions explicitly agreed in the thread; if a date was not stated write "not stated". If a later message changed an earlier decision, use the later one and note it.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'For every row, open the cited message and confirm the owner, action and date are actually there.',
            'Check for reversals: search later messages for the same topic.',
            'Check for missing actions: skim the thread for "I will", "can you", "by Friday".',
            'Mark each row verified (✓) or corrected, and note how many rows needed changes — that number is useful evidence of why you verify.',
          ],
        },
        { type: 'tip', text: 'Good looks like: every action traceable to a specific message, no invented due dates, and a short note of any corrections you made.' },
      ],
    },
    {
      exercise: 'Produce a ten-slide outline with speaker notes from a project report.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Define audience, purpose and time slot before prompting (e.g. steering committee, approve phase 2, 15 minutes).',
            'Ask for the storyline first (key message plus 3–5 supporting points plus the ask). Correct it.',
            'Ask for ten slides: headline-style title, max 3 bullets, suggested visual, speaker notes as a spoken script (~60–90 words).',
            'Check every number and claim against the report; replace [SOURCE NEEDED] gaps.',
            'Optionally turn the outline into a Slides artifact or use the PowerPoint add-in on your template (Pro and above).',
          ],
        },
        {
          type: 'example',
          title: 'Sample ten-slide skeleton',
          text: '1 Title + one-line ask\n2 Executive summary: answer first\n3 Where we are vs plan\n4 What went well (with metric)\n5 Issues and how we handled them\n6 Risks ahead\n7 Options for phase 2\n8 Recommendation and cost\n9 Timeline and decisions needed\n10 Ask / next steps\nSpeaker notes per slide: what to say, the one number to stress, transition to next slide.',
        },
        { type: 'tip', text: 'Good looks like: titles that read as a story when skimmed alone, notes you could actually speak, and zero figures that are not in the report.' },
      ],
    },
  ],

  quiz: [
    {
      question: 'A consultant uses the Outlook add-in to draft a reply to a client and asks Claude to "send it now". What happens?',
      options: [
        'Claude sends the email immediately because the user asked explicitly',
        'Claude sends it after a confirmation dialog',
        'The add-in cannot send; the draft sits unsent in Outlook\'s compose pane and the consultant must click Send',
        'Claude schedules it to send at the end of the business day',
      ],
      answer: 2,
      explanation: 'The Outlook add-in never sends mail or invites and does not request the Mail.Send permission. Every draft lands unsent for the user to review and send.',
    },
    {
      question: 'Priya uses the Gmail connector to find a supplier\'s last three emails and have Claude draft a reply. What is the correct way to handle the reply?',
      options: [
        'Let Claude send it straight away — the connector is approved, so its output is trusted',
        'Read the draft herself, check every name, number and commitment, and only then send it (or approve a send prompt) herself',
        'Turn off approval prompts so the reply goes out faster',
        'Forward the supplier thread to her personal account and draft there',
      ],
      answer: 1,
      explanation: 'Sending discipline: nothing goes out unchecked. Search and drafting are fine, but Priya reviews the draft and makes the send decision. Whether the connector can write to Gmail at all depends on what your Claude shows (see the Google Workspace note in M4.1); either way any write needs your approval.',
    },
    {
      question: 'A team lead wants every member of her team to get the same tone rules, banned phrases and glossary whenever they draft client emails with Claude. What is the best place to hold this?',
      options: [
        'Each person\'s custom Style',
        'Instructions in a shared Project that the team drafts in',
        'A pinned Slack message',
        'Paste it into every prompt',
      ],
      answer: 1,
      explanation: 'Project instructions apply to every chat in the project and projects can be shared on Team and Enterprise. Styles are personal; pasting every time is error-prone.',
    },
    {
      question: 'Marco needs a 20-page technical design document for a client. Which approach best follows the module method?',
      options: [
        'Paste all the notes and ask for the whole document in one prompt, then proofread it',
        'Ask Claude to write it, then ask Claude to verify its own figures',
        'Write it himself and only use Claude for spelling',
        'Ask for an outline, fix it, draft section by section, then run consistency and glossary passes and verify the facts himself',
      ],
      answer: 3,
      explanation: 'Outline first, then section by section, then consistency passes and glossary enforcement — followed by human verification.',
    },
    {
      question: 'A reviewer asks Claude to "fix this report". Claude reorders sections and cuts two appendices, but the reviewer only wanted clearer sentences. Which distinction was missing from the prompt?',
      options: [
        'Formal versus informal tone',
        'Line edit versus structural edit',
        'Draft versus final',
        'Client versus internal register',
      ],
      answer: 1,
      explanation: 'Structural edits change organisation; line edits work sentence by sentence. Say which you want — and do structural before line edits.',
    },
    {
      question: 'A lawyer wants Claude to revise clause 8 in a Word contract so the partner can see and approve each change individually. What should she use?',
      options: [
        'Claude for Word in tracked changes mode, then review each revision in Word\'s review pane',
        'Paste the clause into a chat and copy the result back over the original',
        'The Gmail connector',
        'A Slides artifact',
      ],
      answer: 0,
      explanation: 'In tracked changes mode, each Claude edit lands as a tracked revision that can be accepted or rejected in Word\'s native review pane.',
    },
    {
      question: 'In a Claude Doc, a colleague highlights a paragraph and leaves a comment "@Claude make this less technical". What does Claude do?',
      options: [
        'Nothing; comments are only for humans',
        'Rewrites the entire document',
        'Replies in the comment thread, makes the change and explains what it did and why',
        'Emails the document owner for approval',
      ],
      answer: 2,
      explanation: 'Mentioning @Claude in a Claude Docs comment asks for an edit; Claude replies in the thread, makes the change and explains it.',
    },
    {
      question: 'Sam is on the Free plan and wants to use the PowerPoint add-in to build a deck on his company template. Per the syllabus, what is the issue?',
      options: [
        'None — the add-in works on all plans',
        'It requires the Enterprise plan',
        'It requires Team or Enterprise',
        'Slides artifacts and the PowerPoint add-in are gated to Pro and above',
      ],
      answer: 3,
      explanation: 'The syllabus marks Slides artifacts and the PowerPoint add-in as PLAN: Pro and above; the add-in page lists Pro, Max, Team and Enterprise.',
    },
    {
      question: 'Before building slides for a steering committee, what should come first according to the module?',
      options: [
        'Choosing the template colours',
        'The narrative structure: key message, supporting points and the ask, then a slide outline',
        'Generating charts from all available data',
        'Writing speaker notes for the title slide',
      ],
      answer: 1,
      explanation: 'Narrative structure before slides: decide the storyline and outline, then speaker notes, then build.',
    },
    {
      question: 'A Pro-plan freelancer asks why she cannot find Claude Tag for her Slack workspace. What is the reason?',
      options: [
        'Claude Tag is BETA and only available on Team and Enterprise plans',
        'Claude Tag is only on Max',
        'She must install it from the Slack App Directory herself',
        'Claude Tag only works in Microsoft Teams',
      ],
      answer: 0,
      explanation: 'Claude Tag is in beta for Team and Enterprise only; it is not available on Free, Pro, Max or Ultra.',
    },
    {
      question: 'An engineer asks @Claude in a public team channel to summarise a sensitive HR complaint thread. What is the main problem?',
      options: [
        'Claude cannot summarise threads',
        'Claude will post the summary only to HR',
        'Everyone in the channel can see the request and Claude\'s work; sensitive or personal matters belong in a DM or appropriate private space',
        'Claude will @here the channel automatically',
      ],
      answer: 2,
      explanation: 'In a shared channel, assume everyone can read the thread, checklist and results. Anthropic advises putting anything personal in a DM. Claude never pings @here.',
    },
    {
      question: 'Which statement about Claude Tag memory is correct?',
      options: [
        'Memory is private to the person who asked',
        'Memory belongs to the channel and anyone in the channel can read and change it',
        'Claude Tag has no memory between threads',
        'Only Slack admins can see memory',
      ],
      answer: 1,
      explanation: 'Claude Tag keeps memory by channel; anyone in the channel can read and correct it. Workspace notes saved from public channels are read across the workspace.',
    },
    {
      question: 'Claude drafts a client status email that says "we will deliver phase 2 by 30 June". Your notes said "aiming for end of Q2, not confirmed". What should you do?',
      options: [
        'Send it — the dates are equivalent',
        'Ask Claude whether the date is correct and send if it says yes',
        'Add a verification note and send unchanged',
        'Remove or correct the commitment so it matches what you are authorised to say, check all names and numbers, then add the verification note',
      ],
      answer: 3,
      explanation: 'Sending discipline: check every name, number and commitment. A firm date is a new commitment; correct it before adding the verification note.',
    },
    {
      question: 'An inbound email from an unknown sender is open and Claude\'s draft reply unexpectedly includes forwarding the whole thread to an external address. What is the most likely explanation and response?',
      options: [
        'Possible prompt injection hidden in the email; do not send, review the draft and the email',
        'Claude learned your style and wants to be helpful; send it',
        'A Microsoft Graph error; reinstall the add-in',
        'The Gmail connector is interfering',
      ],
      answer: 0,
      explanation: 'Email bodies and attachments are untrusted input and may contain hidden instructions. Review every draft and action, especially for external senders.',
    },
    {
      question: 'Ana wants Claude to write like her for her personal client emails. Her account shows a "Create & edit styles" option. What is the recommended approach?',
      options: [
        'Use the Formal preset',
        'Create a custom Style from three or more samples of her own writing, review the generated description, then test it on a new draft',
        'Put her personal voice in her team\'s Project instructions',
        'Ask Claude Tag to learn her style from Slack',
      ],
      answer: 1,
      explanation: 'Custom Styles are built from your own writing samples. Personal voice belongs in a Style (or, after migration, a writing-style skill), not in shared team instructions.',
    },
  ],

  sources: [
    { title: 'Use Claude for Outlook (Claude docs)', url: 'https://claude.com/docs/office-agents/outlook' },
    { title: 'Use Claude for Word (Claude docs)', url: 'https://claude.com/docs/office-agents/word.md' },
    { title: 'Use Claude for PowerPoint (Claude docs)', url: 'https://claude.com/docs/office-agents/powerpoint.md' },
    { title: 'Gmail connector (Claude docs)', url: 'https://claude.com/docs/connectors/google/gmail.md' },
    { title: 'Work with Claude Tag (Claude docs)', url: 'https://claude.com/docs/claude-tag' },
    { title: 'What Claude Tag remembers (Claude docs)', url: 'https://claude.com/docs/claude-tag/users/memory.md' },
    { title: 'Good habits for working with Claude Tag (Claude docs)', url: 'https://claude.com/docs/claude-tag/users/good-habits.md' },
    { title: 'Introducing Claude Tag (Anthropic news)', url: 'https://www.anthropic.com/news/introducing-claude-tag' },
    { title: 'Skills overview (Claude docs)', url: 'https://claude.com/docs/skills/overview.md' },
    { title: 'Styles are moving to skills (Claude Help Center, article 10181068)', url: 'https://support.claude.com/en/articles/10181068-styles-are-moving-to-skills' },
    { title: 'What are projects? (Claude Help Center)', url: 'https://support.claude.com/en/articles/9517075-what-are-projects' },
    { title: 'Organize work with projects (Claude docs)', url: 'https://claude.com/docs/cowork/guide/projects.md' },
    { title: 'Get started with Claude Docs (Claude Help Center)', url: 'https://support.claude.com/en/articles/16923645-get-started-with-claude-docs' },
    { title: 'What are artifacts and how do I use them? (Claude Help Center)', url: 'https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them' },
    { title: 'Release notes (Claude Help Center)', url: 'https://support.claude.com/en/articles/12138966-release-notes' },
    { title: 'Making slides and presentations with Claude (Claude Academy)', url: 'https://academy.claude.com/tutorials/using-claude-design-for-presentations-and-slide-decks' },  ],
}
