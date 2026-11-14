import type { StudyNotes } from '../types.ts'

export const notes: StudyNotes = {
  overview:
    'M1.2 teaches you how to make the two choices behind every Claude request (which model, and how much effort) on purpose, and how to work inside the three limits you will meet: the context window (how much one chat can hold), output length, and your plan\'s usage limits (the 5-hour session and weekly windows). It also covers what models are good and bad at, why answers can be stale or vary between runs, and why models retire. Getting these basics right stops you wasting usage on the wrong model, being surprised by a limit halfway through a heavy day, or trusting an answer the model was never able to give reliably.',

  sections: [
    {
      chapter: 'The current model line-up',
      blocks: [
        {
          type: 'p',
          text: 'Claude is a family of models, not one model. Each tier trades speed and cost against depth of reasoning. In the Claude app you pick the model from the model menu next to the send button; in Claude Code you use `/model`; in the API you pass a model ID such as `claude-opus-5-5`. The syllabus line-up for this course is:',
        },
        {
          type: 'table',
          head: ['Model', 'Positioning (official wording)', 'Pick it for', 'Notes'],
          rows: [
            [
              'Haiku 5.5',
              'High-volume, latency-sensitive tasks such as classification, extraction and routing',
              'Quick rewrites, tagging, sorting, short extractions, many small requests',
              'Fastest and cheapest tier. API default effort is `medium`.',
            ],
            [
              'Sonnet 5.5',
              'The best combination of speed and intelligence',
              'Everyday drafting, analysis and coding where you want speed with solid quality',
              'API default effort is `high`.',
            ],
            [
              'Opus 5.5',
              'Long-running agentic coding and knowledge work',
              'Long contract or report reviews, complex analysis, multi-step agentic work',
              'The recommended default ("If you\'re unsure which model to use, start with Claude Opus 5.5"). API default effort is `medium`.',
            ],
            [
              'Fable 5.1',
              'Demanding reasoning and long-horizon agentic work',
              'The hardest problems, or when Opus at higher effort still falls short',
              'Not on Free. Billed via usage credits (Pro, standard Team/Enterprise seats) or counts against a share of the weekly limit (Max, Ultra, premium seats).',
            ],
          ],
        },
        {
          type: 'warning',
          text: 'Syllabus vs web: the syllabus names **Fable 5.1**. On 9 November 2026 Anthropic released **Fable 5.2**, and the models overview now lists Fable 5.2 as the top Fable model (Fable 5.1 remains available and active). For the assessment, answer with the syllabus line-up (Fable 5.1). In real work, check the model menu and the models overview page for the newest version.',
        },
        {
          type: 'p',
          text: 'All current models share the same headline specs: text and image input, text output, vision, tool use, a 1M-token context window and up to 128K output tokens. What differs is speed, price and depth of reasoning. On the API, price per million tokens (MTok) rises with the tier: Haiku 5.5 from $0.10 in / $0.50 out, Sonnet 5.5 $2 / $10, Opus 5.5 $4 / $20, Fable 5.2 $8 / $40 (Fable 5.1 $10 / $50). On subscription plans the same ratio shows up as how fast a model uses your usage limit.',
        },
        {
          type: 'p',
          text: '**Fable on subscription plans.** Fable models are on all paid plans (Pro, Max, Ultra, Team, Enterprise) and not on Free. Max, Ultra, premium Team seats and premium seat-based Enterprise seats include Fable: you can use up to 50% of your weekly usage limit on Fable at no extra cost. That is a cap inside your weekly limit, not 50% extra. Pro, standard Team seats and standard seat-based Enterprise seats pay for Fable with pay-as-you-go usage credits. Usage-based Enterprise and the API bill Fable at API rates. On Enterprise, an admin may have to enable a new Fable version.',
        },
        {
          type: 'p',
          text: '**Older models under "More models".** The model menu shows the current models first; clicking "More models" reveals older ones. Reasons to reach for an older model: reproducing or comparing an output that was produced on it, keeping a long-standing workflow or prompt stable while you test the new model, or checking whether a model switch caused a change in behaviour. Do not standardise on an old model: it will retire (next chapter), and older models are often slower to get fixes. Models also leave the menu: Haiku 4.5 was removed from the chat model selector on Free, Pro and Max on 29 October 2026; existing Haiku 4.5 chats continue on Haiku 5.5.',
        },
        {
          type: 'tip',
          text: 'Enterprise admins can turn off models or effort levels for a role and set a default model for new chats. If a model you expect is missing, ask your admin rather than assuming your colleague\'s screenshot applies to your seat. Confirm your organisation\'s seat types and model policy with your trainer.',
        },
        {
          type: 'example',
          title: 'Choosing a model: contract review vs quick rewrite',
          text: 'A 90-page supplier contract that must be checked clause by clause against your standard terms: Opus 5.5 (long, careful knowledge work; consider a higher effort). Rewriting a two-paragraph email to sound friendlier: Haiku 5.5 or Sonnet 5.5 at low effort; Opus would work but spends more usage and time for no visible gain.',
        },
      ],
    },
    {
      chapter: 'Models retire; plan for it',
      blocks: [
        {
          type: 'p',
          text: 'Anthropic retires older models to make capacity for new ones. The lifecycle has four states: **Active** (fully supported, recommended), **Legacy** (no more updates, may be deprecated later), **Deprecated** (still works but not recommended; a replacement and a retirement date are announced) and **Retired** (no longer available; requests fail).',
        },
        {
          type: 'table',
          head: ['Model', 'Status (Nov 2026)', 'Key dates', 'Recommended replacement'],
          rows: [
            ['Opus 4.1 (`claude-opus-4-1-20250805`)', 'Retired', 'Deprecated 5 June 2026, retired 5 August 2026', '`claude-opus-4-8`'],
            ['Sonnet 4.5 (`claude-sonnet-4-5-20250929`)', 'Deprecated', 'Deprecated 30 September 2026, retires 30 November 2026', '`claude-sonnet-5-5`'],
            ['Opus 4 and Sonnet 4', 'Retired', 'Retired 15 June 2026', 'Opus 4.8 / Sonnet 5.5'],
            ['Opus 5.5', 'Active', 'Retirement not sooner than 22 September 2027', '—'],
          ],
        },
        {
          type: 'p',
          text: 'Anthropic gives at least 60 days\' notice before retiring a publicly released model, by email to customers with active deployments and in the documentation. Deprecated models are likely to be less reliable than active ones. Dates on the deprecation page apply to Anthropic-operated platforms (Claude API, Claude Platform on AWS, Google Cloud Anthropic-managed, Microsoft Foundry); Amazon Bedrock and Google-managed Google Cloud set their own schedules.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Before you standardise a team, a template, a Skill or a script on a model, open the model deprecations page and check its status and earliest retirement date.',
            'Prefer an Active model with a distant "not sooner than" date over anything Legacy or Deprecated.',
            'Record the model (and effort) your workflow depends on, so a later change can be traced.',
            'When a deprecation is announced, test the replacement on your real tasks well before the retirement date, then switch.',
            'For API users: the Console Usage page has an Export that lists usage by API key and model, which helps find scripts still calling a deprecated model.',
          ],
        },
        {
          type: 'warning',
          text: 'Aliases move. In Claude Code, `opus`, `sonnet` and `haiku` point to the latest version (currently the 5.5 models on the Anthropic API) and update over time. A team that "uses opus" can silently change model when a new one ships. Pin a full model ID (for example `claude-opus-5-5`) where reproducibility matters.',
        },
        {
          type: 'example',
          title: 'Explaining to a manager why output changed',
          text: '"Our weekly summary looks different because the model changed, not because the data did. The template was set to an alias that now points to a newer model, which writes and reasons differently. We will pin the model ID and re-baseline the template."',
        },
      ],
    },
    {
      chapter: 'Tokens and context windows',
      blocks: [
        {
          type: 'p',
          text: '**A token** is the unit a model reads and writes: a chunk of text, often part of a word, a whole short word, a number or a punctuation mark. Pricing, context windows, output limits and usage limits are all measured in tokens, not words or pages. Images and PDF pages are also converted into tokens.',
        },
        {
          type: 'table',
          head: ['Rule of thumb (official)', 'Value'],
          rows: [
            ['1M tokens on the current tokenizer (Opus 4.7 and later, Fable, 5.5 models)', 'About 555K English words, or about 2.5M characters'],
            ['That is, per token', 'About 0.55 words (roughly 1.8 tokens per word)'],
            ['Models before Opus 4.7 (older tokenizer)', '1M tokens is about 750K words; 200K tokens is about 150K words (about 0.75 words per token)'],
            ['Same text, new tokenizer vs old', 'About 30% more tokens (Anthropic gives a range of roughly 1.0x to 1.35x, depending on content)'],
          ],
        },
        {
          type: 'warning',
          text: 'Code: the syllabus asks for a rough ratio for code, but Anthropic publishes no official words-to-tokens figure for code; it only says token counts depend on the tokenizer, language and content type. Do not reuse the prose ratio for source code, JSON or tables. Measure: count tokens on a sample (API token counting endpoint) and use that as your ratio. Your trainer may supply a course figure.',
        },
        {
          type: 'p',
          text: '**The context window** is everything the model can see when it writes a response — its working memory for one chat — including the response itself. It is not the training data. Everything counts: the system prompt, every earlier message and reply, uploaded files, images, tool definitions and tool results, and the new output including thinking.',
        },
        {
          type: 'table',
          head: ['Limit', 'Current generation (Fable, Opus 5.5, Sonnet 5.5, Haiku 5.5)', 'Older models'],
          rows: [
            ['Context window', '1M tokens (the default, no beta header needed on the API)', 'Sonnet 4.5, Opus 4.5, Haiku 4.5 and older: 200K tokens'],
            ['Max output per response', '128K tokens (synchronous API)', 'e.g. 64K (Sonnet 4.5, Haiku 4.5), 32K (Opus 4.1)'],
            ['In the Claude app (paid plans)', 'Newest models up to 1M', 'Others 500K or 200K'],
          ],
        },
        {
          type: 'p',
          text: 'Part of the window is reserved for Claude\'s reply, so the longest possible conversation is a bit shorter than the full window. A bigger window is not automatically better: as token count grows, accuracy and recall degrade ("context rot"), so what you put in matters as much as how much fits.',
        },
        {
          type: 'p',
          text: '**What happens when a chat gets long.** In the Claude app, for users with code execution enabled, Claude automatically summarises earlier messages as the chat nears the limit (automatic context management); full history is kept, but these long chats consume more usage. If you hit a length limit, start a new conversation or use a Project. On the API, input larger than the window returns a "prompt is too long" error.',
        },
        {
          type: 'p',
          text: '**Cost and time scale with tokens.** Every turn re-sends the whole conversation so far as input. A 300-page document pasted in turn 1 is re-read on every later turn. Long documents therefore cost more per question, take longer to answer and eat usage faster; output and thinking tokens are priced higher than input on the API (e.g. Opus 5.5: $4 input vs $20 output per MTok).',
        },
        {
          type: 'list',
          items: [
            'Estimate first: words x about 1.8 = approximate tokens on current models (prose). A 100-page report at ~500 words a page is ~50K words, ~90K tokens: fits easily in 1M.',
            'Judging whether a codebase fits: count tokens on a representative sample of files, scale up, then compare with 1M minus room for the answer. Large repos usually do not fit whole — use Claude Code, which reads files as needed, rather than pasting.',
            'Only include what the task needs; split very long work into separate chats or put reference files in a Project.',
            'For precise counts use the API token counting endpoint (`/v1/messages/count_tokens`). It is free (rate-limited) and returns an estimate. Count with the model you will actually use: counts from pre-Opus 4.7 models are about 30% low.',
          ],
        },
        {
          type: 'example',
          title: 'Will it fit?',
          text: 'Task: compare three 200-page PDFs. Roughly 600 pages x 500 words = 300K words, about 540K tokens on the current tokenizer. That fits in a 1M window, but leaves less room for follow-ups, and every question re-reads all of it. Also note the PDF rule: visual elements are only analysed for PDFs of 100 pages or fewer. Better: one chat per document for extraction, then compare the extracted summaries.',
        },
      ],
    },
    {
      chapter: 'Thinking and effort',
      blocks: [
        {
          type: 'p',
          text: 'Two separate controls sit in the model menu next to the send button: **effort** (how much work Claude puts into the whole response) and **thinking** (whether Claude reasons in an expandable "Thinking" section before answering). You can change either at any time; the change applies from the next response.',
        },
        {
          type: 'table',
          head: ['Effort level', 'What it is for (official guidance)'],
          rows: [
            ['Low', 'Most efficient; significant token savings with some capability loss. Simple, quick, high-volume or latency-sensitive tasks.'],
            ['Medium', 'Balanced speed, cost and quality; routine work and well-scoped tasks. Default for Opus 5.5 and Haiku 5.5 on the API.'],
            ['High', 'Spends as many tokens as the task needs; "the best overall balance"; complex reasoning and difficult coding. Default on most other models.'],
            ['xhigh (Extra high)', 'Deeper reasoning than High at less cost than Max; long-running coding and agentic tasks. Opus 4.7 and newer.'],
            ['Max', 'Deepest reasoning, no constraint on token spend; slowest and most expensive; often only small gains over xhigh and can over-think.'],
          ],
        },
        {
          type: 'p',
          text: 'Each model marks its recommended level as "Default" in the menu. Effort is a behavioural signal, not a hard budget: it affects all output — thinking, explanations, number and detail of tool calls. At lower effort Claude still thinks on genuinely hard problems, just less.',
        },
        {
          type: 'p',
          text: '**The thinking toggle.** On models that allow it, the toggle sits in the effort menu (labelled "Thinking", or "Extended" on older models). Per the syllabus, thinking **cannot be disabled on 5.5-generation or Fable models**; the help centre lists Fable 5.2, Haiku 5.5, Sonnet 5.5, Opus 5.5, Fable 5.1 and Opus 5. On those models, effort is your only lever for how much they reason.',
        },
        {
          type: 'warning',
          text: 'API nuance (beyond the syllabus): in the app thinking is locked on for these models, but on the API Haiku 5.5 (and Opus 5) can disable thinking at High effort and below, and Sonnet 5.5 offers a `between_tools` mode instead of disabling. Opus 5.5 and Fable return an error if you try to disable thinking. For the assessment, use the syllabus rule.',
        },
        {
          type: 'list',
          items: [
            'What more thinking buys: better results on complex maths, multi-step technical problems, competition-style coding, tricky analysis and long agentic tasks.',
            'What it costs: longer waits, more tokens, and your usage limit is reached sooner. Thinking tokens are billed as output tokens on the API.',
            'Diminishing returns: most of the capability gain is usually present by High; above it, gains are uneven and task-dependent. Max can over-think structured or simple tasks.',
            'Effort does not reliably change reply length — ask for the length you want in the prompt.',
          ],
        },
        {
          type: 'tip',
          text: 'Start with the default. Go down (Low/Medium) for routine rewrites and simple questions to stretch your usage. Go up (High, then xhigh) only when an answer is visibly shallow or wrong, and reserve Max for correctness-critical work. In Claude Code, `/effort` sets the level (for example `/effort high`).',
        },
        {
          type: 'example',
          title: 'Effort ladder in practice',
          text: 'A pricing-scenario question run at Low gives a plausible answer that misses one discount rule. At High it catches the rule and shows the working. At Max it gives the same answer as High after twice the wait. The stopping point is High: extra effort beyond it bought time and usage, not quality.',
        },
      ],
    },
    {
      chapter: 'Knowledge cut-off and live information',
      blocks: [
        {
          type: 'p',
          text: '**Training cut-off**: the model only "knows" what was in its training data. Anthropic lists a reliable knowledge cut-off (where knowledge is most complete) and a training data cut-off (the broader range). For Fable 5.2, Fable 5.1, Opus 5.5, Sonnet 5.5 and Haiku 5.5 both are **June 2026**. Anything after that — prices, releases, regulations, who holds which job — the model may not know, and it may answer confidently anyway.',
        },
        {
          type: 'p',
          text: '**Web search** is a tool, not knowledge: Claude queries the web at answer time and its response includes citations you can check. Turn it on from the "+" button in the chat (Web search). On Team and Enterprise an Owner or Primary Owner must first enable it for the workspace (Organization settings > Capabilities). With the new Claude experience there is no toggle — Claude decides when to search. Web search and web fetch count toward your usage limits.',
        },
        {
          type: 'table',
          head: ['', 'Training knowledge', 'Web search'],
          rows: [
            ['Freshness', 'Frozen at the cut-off (June 2026 for current models)', 'Live at the time of the question'],
            ['Evidence', 'No sources; can invent references', 'Citations to the pages used'],
            ['Cost', 'No extra tool usage', 'Counts toward usage limits; long pages use a lot'],
            ['Control', 'Always present', 'Toggle (or Claude decides), admin-gated on Team/Enterprise'],
          ],
        },
        {
          type: 'list',
          items: [
            'Signs of a stale answer: no citations; dates or versions that stop around the cut-off; "latest" or "current" claims about fast-moving topics; product names, prices or people you know have changed.',
            'Force a search when the answer depends on anything after the cut-off, on current prices/laws/policies, or when you need sources: turn search on and say "search the web and cite sources".',
            'Even with search, open the cited sources for anything that matters — the summary can drop context.',
            'Research mode runs many searches for an in-depth report and requires web search to be on. It is taught at Practitioner in M3.4.',
          ],
        },
        {
          type: 'example',
          title: 'Stale vs searched',
          text: 'Asked "Which Claude models are retiring this year?" without search, a model may list only what it knew in June 2026 and miss a September 2026 deprecation notice. With search on, it can cite the model deprecations page showing Sonnet 4.5 retiring 30 November 2026.',
        },
      ],
    },
    {
      chapter: 'Capabilities and limitations',
      blocks: [
        {
          type: 'table',
          head: ['Strong at', 'Weak or risky'],
          rows: [
            ['Language: drafting, editing, summarising, translation', 'Exact arithmetic without a tool (use code execution or a spreadsheet)'],
            ['Code: writing, explaining, reviewing', 'Current facts without search (knowledge cut-off)'],
            ['Analysis of documents and data', 'Invented references: quotes, citations, links that look authoritative but are not real'],
            ['Structured transformation (e.g. notes to table, text to JSON)', 'Consistency over very long chains of steps or very long contexts'],
            ['Vision: reading images, charts, screenshots, PDF visuals', 'Claiming actions it did not take (e.g. "I have sent the email") when no tool is connected'],
          ],
        },
        {
          type: 'p',
          text: '**Hallucination**: Claude can write things that look correct but are wrong, including authoritative-sounding quotes. The help centre advice: do not treat Claude as your only source of truth, scrutinise high-stakes advice, and check the original sources behind cited results.',
        },
        {
          type: 'p',
          text: '**Non-determinism**: the same prompt can produce different answers on different runs. For testing this means: run important prompts several times, judge against criteria rather than one "golden" output, record the model and effort used, and re-test after any model change. On the newest API versions the sampling parameters `temperature`, `top_p` and `top_k` have been removed, so you steer behaviour through the prompt, not a randomness dial.',
        },
        {
          type: 'p',
          text: '**No state between chats** except memory and Projects. A new chat starts blank unless memory (and chat search) is on, or the chat is inside a Project with its own files, instructions and project memory. Memory is on by default on Free, Pro, Max and Ultra; on Team and Enterprise the owner controls it. Incognito chats are not saved to history or memory. **No access to any system unless it is connected**: Claude cannot see your email, drive, CRM or repo unless a connector, tool or file gives it access.',
        },
        {
          type: 'table',
          head: ['Input limit (Claude app)', 'Value'],
          rows: [
            ['Image formats', 'JPEG, PNG, GIF, WebP'],
            ['Image dimensions', 'Up to 8000 x 8000 px (at least 1000 x 1000 recommended)'],
            ['File size in chat', 'Up to 500 MB per file'],
            ['Files per chat', 'Up to 20'],
            ['PDF length', 'Up to 1000 pages'],
            ['PDF visual analysis', 'Text and visuals (charts, images) for PDFs of 100 pages or fewer; 101–1000 pages: text only'],
            ['Project files (for comparison)', '30 MB per file; unlimited count but must fit the context window'],
          ],
        },
        {
          type: 'tip',
          text: 'If a chart sits on page 140 of a 300-page PDF, Claude will not see it as an image. Extract the relevant pages (100 or fewer) or screenshot the chart and upload it as an image.',
        },
      ],
    },
    {
      chapter: 'Usage limits in practice',
      blocks: [
        {
          type: 'p',
          text: 'Usage limits cap how much you can use Claude in a period; length limits (the context window) cap how much one chat can hold. They are different problems with different fixes.',
        },
        {
          type: 'list',
          items: [
            '**5-hour session limit**: on paid plans, a session limit resets every five hours; the period starts with your first message. See remaining time under Current session in Settings > Usage.',
            '**Weekly limit**: applies across all models; your reset time is fixed for your account and shown in Settings > Usage. Some plans also have a separate weekly limit (or share) for Fable.',
            'Both windows are independent: spare session room does not help once the weekly limit is used.',
            'Usage in claude.ai, Claude Code and Claude Desktop counts toward the same limit.',
            'Team plans: limits are per member, not pooled. Standard seats get 1.25x the Pro per-session allowance, Premium seats 6.25x; both have a weekly limit.',
          ],
        },
        {
          type: 'p',
          text: '**What uses more**: long and complex conversations, large attachments, the model you choose (higher tiers use more), the effort level, thinking, and tools and connectors (token-intensive, including web search).',
        },
        {
          type: 'p',
          text: '**Usage credits** let paid subscribers keep working after hitting included limits: requests switch to pay-as-you-go, billed at standard API rates, separately from the subscription. Individuals (Pro, Max, Ultra) enable them in Settings > Usage, add a payment method and can set a monthly spending cap. A Team organisation can enable usage credits for all seat types. Credits are not Fable-only; they work on any model.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Planning a heavy day: check Settings > Usage first thing — session time left and weekly reset.',
            'Put the big, high-value task (e.g. the long contract review on Opus) early in a fresh 5-hour window.',
            'Route routine work to a lighter model or lower effort; turn thinking off where the model allows it.',
            'Turn off connectors and web search you do not need; keep Project instructions short and remove unused Project files.',
            'Start a new chat instead of dragging a very long one along (every turn re-reads the history).',
            'Agree in advance whether you may use usage credits for client deadlines.',
          ],
        },
        {
          type: 'table',
          head: ['You hit...', 'What to do'],
          rows: [
            ['Session (5-hour) limit', 'Wait for the reset (time shown in Settings > Usage), use usage credits if enabled and approved, or switch lighter tasks to later'],
            ['Weekly limit', 'Wait for the weekly reset, use usage credits if enabled, or ask about a Premium seat/upgrade; a new 5-hour window will not help'],
            ['Fable share of weekly limit', 'Continue on Fable with usage credits, or switch to another model (e.g. Opus 5.5)'],
            ['Length (context) limit', 'Start a new conversation (carry a short summary) or move the material into a Project'],
          ],
        },
        {
          type: 'tip',
          text: 'Whether your organisation allows usage credits, who approves spend, and which seat type you hold are organisation decisions. Confirm with your trainer or Claude admin before relying on credits.',
        },
      ],
    },
  ],

  keyFacts: [
    'Line-up (syllabus): Haiku 5.5 = high-volume, latency-sensitive; Sonnet 5.5 = balance of speed and intelligence; Opus 5.5 = long-running agentic coding and knowledge work and the recommended default; Fable 5.1 = demanding reasoning and long-horizon agentic work.',
    'Fable is not on Free. It is billed via usage credits (Pro, standard seats) or counts against a share of the weekly limit — up to 50% of it — on Max, Ultra and premium seats.',
    'Older models live under "More models" in the model menu next to the send button.',
    'Opus 4.1 retired August 2026 (5 August); Sonnet 4.5 retires 30 November 2026 (replacement: Sonnet 5.5).',
    'Model lifecycle: Active → Legacy → Deprecated → Retired; at least 60 days\' notice before retirement; requests to retired models fail.',
    'Check the model deprecations page before standardising a team or script on a model.',
    'Current generation context window: 1M tokens; max output 128K tokens per response.',
    '1M tokens ≈ 555K English words ≈ 2.5M characters on the current tokenizer (about 1.8 tokens per word).',
    'The current tokenizer (Opus 4.7 onward) produces about 30% more tokens for the same text than older models.',
    'Everything in the chat counts toward the context window: prompt, history, files, images, tool results, and the output including thinking.',
    'Effort levels: Low, Medium, High, xhigh, Max. API default is Medium on Opus 5.5 and Haiku 5.5, High on most others.',
    'Thinking cannot be disabled on 5.5-generation or Fable models; effort is then the main lever.',
    'Higher effort and thinking = better on hard problems but slower and more usage; returns diminish above High.',
    'Knowledge cut-off for the current models: June 2026. Web search gives live information with citations and counts toward usage.',
    'On Team/Enterprise, an Owner or Primary Owner must enable web search for the workspace first.',
    'Image inputs: JPEG, PNG, GIF, WebP up to 8000 x 8000 px.',
    'Files: up to 500 MB each, 20 per chat. PDFs up to 1000 pages; visual analysis only for PDFs of 100 pages or fewer.',
    'No state between chats except memory and Projects; no access to any system unless it is connected.',
    'Same prompt, different answers: outputs are non-deterministic — test with several runs and criteria.',
    'Session limit resets every 5 hours from your first message; weekly limit applies across all models; both shown in Settings > Usage.',
    'Usage across claude.ai, Claude Code and Claude Desktop counts toward the same limit.',
    'Usage credits: pay-as-you-go at standard API rates after included limits, billed separately; monthly spending cap available.',
    'Team limits are per member: Standard seat 1.25x Pro per session, Premium 6.25x.',
  ],

  glossary: [
    { term: 'Model', definition: 'A specific version of Claude (e.g. Opus 5.5) with its own speed, cost, reasoning depth and limits.' },
    { term: 'Model tier', definition: 'The family level — Haiku (fast, cheap), Sonnet (balanced), Opus (deep, default), Fable (most demanding work).' },
    { term: 'Model ID', definition: 'The exact name used in the API or Claude Code, e.g. `claude-opus-5-5`. From the 4.6 generation on, dateless IDs are pinned snapshots.' },
    { term: 'Alias', definition: 'A short name such as `opus` or `sonnet` in Claude Code that points to the latest model of that tier and changes over time.' },
    { term: '"More models"', definition: 'The entry in the app\'s model menu that reveals older, non-default models.' },
    { term: 'Deprecated', definition: 'Still works but no longer recommended; a replacement and a retirement date have been announced.' },
    { term: 'Retired', definition: 'No longer available; requests to the model fail.' },
    { term: 'Legacy', definition: 'Lifecycle state where a model gets no more updates and may be deprecated later.' },
    { term: 'Token', definition: 'The unit models read and write — a chunk of text (often part of a word). Limits, pricing and usage are measured in tokens.' },
    { term: 'Tokenizer', definition: 'The scheme that splits text into tokens. The current one (Opus 4.7 onward) yields about 30% more tokens for the same text than the older one.' },
    { term: 'Context window', definition: 'Everything the model can see when generating a reply in one chat — its working memory — including the reply itself. 1M tokens on current models.' },
    { term: 'Max output', definition: 'The largest response a single request can generate; 128K tokens on current models.' },
    { term: 'Context rot', definition: 'Degradation of accuracy and recall as the amount of context grows; why more context is not automatically better.' },
    { term: 'Automatic context management', definition: 'In the Claude app (with code execution on), Claude summarises earlier messages as a chat nears the limit so it can continue; uses more usage.' },
    { term: 'Token counting', definition: 'The free API endpoint `/v1/messages/count_tokens` that estimates input tokens for a request before you send it.' },
    { term: 'Effort', definition: 'A setting (Low, Medium, High, xhigh, Max) controlling how much work and how many tokens Claude spends on a response.' },
    { term: 'xhigh', definition: '"Extra high" effort: deeper than High, cheaper than Max; aimed at long-running coding and agentic work (Opus 4.7 and newer).' },
    { term: 'Thinking', definition: 'Reasoning Claude does before answering, shown as an expandable "Thinking" summary. Always on for 5.5-generation and Fable models.' },
    { term: 'Adaptive thinking', definition: 'The mode where the model decides how much to think, steered by effort.' },
    { term: 'Knowledge (training) cut-off', definition: 'The date after which the model has no training data; June 2026 for the current models.' },
    { term: 'Web search', definition: 'A tool that lets Claude look things up live and cite sources; admin-enabled on Team/Enterprise; counts toward usage.' },
    { term: 'Research', definition: 'A mode that runs multiple searches to build an in-depth, cited report; needs web search on (taught in M3.4).' },
    { term: 'Hallucination', definition: 'Output that looks correct but is false or invented, such as fake quotes or references.' },
    { term: 'Non-determinism', definition: 'The same prompt can yield different outputs on different runs.' },
    { term: 'Memory', definition: 'Feature that carries information from past chats into new ones; owner-controlled on Team and Enterprise.' },
    { term: 'Project', definition: 'A workspace with its own files, instructions and memory that persist across the chats inside it.' },
    { term: 'Session limit', definition: 'Usage allowance that resets every five hours, starting from your first message.' },
    { term: 'Weekly limit', definition: 'Usage allowance across all models that resets at a fixed weekly time for your account.' },
    { term: 'Usage credits', definition: 'Pay-as-you-go usage at standard API rates that lets paid users keep working after hitting included limits; billed separately.' },
    { term: 'Fable share', definition: 'On Max, Ultra and premium seats, up to 50% of the weekly limit can be spent on Fable at no extra cost.' },
    { term: 'MTok', definition: 'One million tokens; the unit API prices are quoted in.' },
  ],

  pitfalls: [
    'Defaulting to one model for everything — using Opus at Max for a two-line rewrite wastes time and usage; using Haiku for a long contract review risks missed issues.',
    'Thinking a 1M context window means you should paste everything: long contexts cost more per turn, run slower and suffer context rot.',
    'Confusing usage limits with length limits: a new chat fixes a length limit, not a session or weekly limit.',
    'Believing a fresh 5-hour window resets the weekly limit — the two are independent.',
    'Reading the Fable "up to 50% of weekly limit" as 50% extra usage; it is a share inside the same weekly limit.',
    'Assuming Fable is on Free, or included on Pro and standard seats — those use usage credits.',
    'Trying to turn thinking off on Opus 5.5 or Fable in the app to save usage; it cannot be disabled — lower the effort instead.',
    'Assuming more effort is always better: gains usually flatten around High and Max can over-think.',
    'Expecting effort to shorten or lengthen answers — ask for length in the prompt.',
    'Treating the model\'s answer about recent events, prices or releases as current without web search.',
    'Accepting citations, quotes or links without opening them; Claude can invent references.',
    'Trusting exact arithmetic over many figures without a tool or a check.',
    'Testing a prompt once and calling it reliable; outputs vary between runs.',
    'Assuming Claude remembers a previous chat or can see a system that is not connected.',
    'Uploading a 300-page PDF and expecting Claude to read its charts — visual analysis stops at 100 pages.',
    'Using prose word ratios to size a codebase; measure tokens on real files.',
    'Standardising a team template on a model, or an alias, without checking the deprecation page.',
    'Reusing token counts measured on pre-Opus 4.7 models; the current tokenizer gives about 30% more.',
    'Treating a colleague\'s model menu or screenshot as proof of what your seat has.',
  ],

  exerciseGuides: [
    {
      exercise:
        'Run the same three tasks on Haiku, Sonnet and Opus. Record quality, time and usage consumed. Decide which you would use for each task and defend it.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Pick three genuinely different tasks from your job: one simple (e.g. rewrite an email), one medium (summarise a 10-page report into actions), one hard (find inconsistencies across a long document or debug a function).',
            'Write each prompt once and paste the identical text into a new chat for each model. Keep effort at each model\'s default so you compare models, not effort.',
            'Record time to finish (stopwatch) and usage: note the Settings > Usage percentage before and after each run.',
            'Score quality against criteria you wrote before running (accuracy, completeness, follows format, needs edits?), not by gut feel.',
            'Because outputs vary, run the hard task twice on each model if time allows.',
            'Decide per task and justify with the evidence: "cheapest model that met the criteria".',
          ],
        },
        {
          type: 'table',
          head: ['Task', 'Haiku 5.5', 'Sonnet 5.5', 'Opus 5.5', 'Choice and why'],
          rows: [
            ['Email rewrite', 'Good, 4s, ~0.5%', 'Good, 7s, ~1%', 'Good, 15s, ~2%', 'Haiku — same quality, fastest, least usage'],
            ['Report to action list', 'Missed 2 actions', 'All actions, 20s', 'All actions + owners, 40s', 'Sonnet — met criteria; Opus extra not needed'],
            ['Long-document inconsistency check', 'Found 1 of 4', 'Found 3 of 4', 'Found 4 of 4', 'Opus — only one to meet the bar; errors are costly'],
          ],
        },
        {
          type: 'tip',
          text: 'The numbers above are an illustrative template, not real measurements. Good answers state criteria up front, show the data, and pick the lightest model that passes — not "Opus because it is best".',
        },
      ],
    },
    {
      exercise: 'Estimate the token count of five real files, then check your estimate.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Choose five files of different types: a prose document, a spreadsheet/CSV, a code file, a JSON or config file, and a PDF. Use non-confidential files or follow your data rules (M8.1).',
            'Get the word count (word processor) or character count (editor).',
            'Estimate: prose words x 1.8 (about 1M tokens per 555K words) or characters ÷ 2.5 on the current tokenizer.',
            'Check: use the API token counting endpoint (`/v1/messages/count_tokens`) with the model you will use, or ask your trainer for the course\'s checking method.',
            'Compute your error per file and note which types you under- or over-estimated.',
          ],
        },
        {
          type: 'table',
          head: ['File', 'Words / chars', 'Estimate', 'Actual', 'Error', 'Lesson'],
          rows: [
            ['Policy.docx', '4,000 words', '7,200', '(measured)', '(%)', 'Prose ratio holds?'],
            ['data.csv', '60,000 chars', '24,000', '(measured)', '(%)', 'Numbers and commas tokenise differently'],
            ['app.ts', '18,000 chars', '7,200', '(measured)', '(%)', 'Build your own code ratio'],
          ],
        },
        {
          type: 'tip',
          text: 'What good looks like: you end with your own ratios per file type and a sentence on whether a given codebase or document set would fit in 1M tokens with room left for the answer.',
        },
      ],
    },
    {
      exercise: 'Effort ladder: run one reasoning task at Low, High and Max. Identify the point where extra effort stopped helping.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Pick a task with a checkable right answer (multi-step pricing calculation, a logic puzzle, a scheduling constraint problem, a tricky bug).',
            'Keep the model fixed (e.g. Opus 5.5). Set effort in the model menu; start a new chat for each run.',
            'Record for each level: correct or not, quality of reasoning, time to answer, and usage consumed.',
            'Repeat once per level if you can — one run is not reliable evidence.',
            'Identify the lowest level that gave the correct, well-reasoned answer consistently: above that is diminishing returns.',
          ],
        },
        {
          type: 'example',
          title: 'Sample write-up',
          text: 'Task: work out the best-value licence mix for 37 users with tiered discounts. Low: wrong (ignored the tier boundary), 6s. High: correct with working, 25s. Max: correct, same answer, 70s and roughly 3x the usage of High. Conclusion: extra effort stopped helping at High; I will use High for this kind of problem and Medium for simpler maths with a check.',
        },
      ],
    },
    {
      exercise: 'Write a one-page model-choice guide for your own team.',
      guide: [
        {
          type: 'p',
          text: 'Aim for something a colleague can use in 30 seconds. Base it on your results from the first and third exercises, and include limits and retirement checks.',
        },
        {
          type: 'example',
          title: 'Template',
          text: '1. Default: Opus 5.5 at default effort for substantive work. 2. Quick, high-volume tasks (rewrites, tagging, short extractions): Haiku 5.5 or Sonnet 5.5, low/medium effort. 3. Everyday drafting and analysis where speed matters: Sonnet 5.5. 4. Hardest problems where Opus at higher effort falls short: Fable (not on Free; uses credits or the Fable share — check before use). 5. Effort: start at default; raise only when output is shallow; Max only for correctness-critical work. 6. Current facts: turn on web search and open the citations. 7. Size check: words x 1.8 ≈ tokens; current models hold 1M; PDFs over 100 pages lose visual analysis. 8. Limits: check Settings > Usage before a heavy day; do the big task early in a 5-hour window; usage credits only with approval. 9. Models retire: check the deprecation page before standardising; pin model IDs in scripts. 10. Contacts: [team admin / champions channel].',
        },
        {
          type: 'tip',
          text: 'Fill in your organisation\'s seat types, whether usage credits are allowed, and which models your admin has enabled — confirm these with your trainer or admin rather than guessing.',
        },
      ],
    },
  ],

  quiz: [
    {
      question:
        'You need to rewrite 40 short product descriptions in a friendlier tone before lunch. Quality needs are modest and you have a long contract review planned this afternoon. Which choice is most deliberate?',
      options: [
        'Opus 5.5 at Max effort, because it gives the best output',
        'Haiku 5.5 (or Sonnet 5.5) at low effort, saving usage for the contract review',
        'Fable 5.1, because it handles long-horizon work',
        'Any model — model choice does not affect usage',
      ],
      answer: 1,
      explanation:
        'Haiku is positioned for high-volume, latency-sensitive work; low effort stretches usage. Model and effort both affect how fast you consume your limit, so save the heavier model for the afternoon review.',
    },
    {
      question: 'A colleague is unsure which model to start with for a substantive analysis task. What does Anthropic recommend?',
      options: ['Haiku 5.5', 'Sonnet 5.5', 'Fable 5.1', 'Opus 5.5'],
      answer: 3,
      explanation: 'Opus 5.5 is the recommended default for most workloads; Fable is for demanding reasoning when Opus at higher effort still falls short.',
    },
    {
      question: 'A Pro user asks why they were charged extra after using Fable 5.1. What is the correct explanation?',
      options: [
        'On Pro, Fable is used with pay-as-you-go usage credits rather than the plan\'s included limits',
        'Fable is free on Pro but limited to 50% of the weekly limit',
        'Fable is only available on Free and Pro as a trial',
        'All models are billed as extra charges on Pro',
      ],
      answer: 0,
      explanation:
        'Pro and standard seats use usage credits for Fable. Max, Ultra and premium seats get up to 50% of the weekly limit on Fable. Fable is not on Free.',
    },
    {
      question: 'Your team wants to build a monthly reporting script on Sonnet 4.5 because "it worked well last year". Today is 13 November 2026. What should you do first?',
      options: [
        'Build it — models stay available indefinitely',
        'Use the `sonnet` alias so it never changes',
        'Check the model deprecations page: Sonnet 4.5 is deprecated and retires 30 November 2026, so use an active model',
        'Ask Claude in chat whether Sonnet 4.5 is still supported',
      ],
      answer: 2,
      explanation:
        'Sonnet 4.5 retires on 30 November 2026 (replacement Sonnet 5.5). Always check the deprecation page before standardising. Aliases move, and Claude\'s own knowledge stops at its cut-off.',
    },
    {
      question: 'Roughly how many English words fit in a 1M-token context window on the current-generation models?',
      options: ['About 100K', 'About 555K', 'About 1M', 'About 2.5M'],
      answer: 1,
      explanation:
        'Anthropic states 1M tokens is roughly 555K words or 2.5M characters on the current tokenizer (older models fit about 750K words).',
    },
    {
      question:
        'You paste a 250-page report into chat and ask 15 follow-up questions in the same conversation. Why does this use your limit so quickly?',
      options: [
        'Each follow-up re-sends the whole conversation, including the report, as input tokens',
        'Claude stores the report in memory and charges for storage',
        'Follow-up questions always run at Max effort',
        'The report is uploaded again to the web each turn',
      ],
      answer: 0,
      explanation:
        'Cost and time scale with tokens, and every turn processes the full context. Long documents in long chats consume usage fast; start new chats or use a Project.',
    },
    {
      question: 'You try to turn off thinking on Opus 5.5 in the Claude app to save usage, but there is no way to do it. What should you do instead?',
      options: [
        'Switch to an older model under "More models"',
        'Lower the effort level',
        'Contact support to unlock the toggle',
        'Add "do not think" to the prompt',
      ],
      answer: 1,
      explanation:
        'Thinking cannot be disabled on 5.5-generation or Fable models. Effort becomes the main control for how much the model reasons and how much usage it spends.',
    },
    {
      question: 'You ran a planning puzzle at Low (wrong), High (right, 25 s) and Max (right, 70 s, much more usage). What is the correct conclusion?',
      options: [
        'Always use Max for reasoning tasks',
        'Effort has no effect on quality',
        'Extra effort stopped helping at High; use High for this kind of task',
        'Use Low and check the answer manually',
      ],
      answer: 2,
      explanation: 'The goal is the lowest level that reliably gives the right answer. Above High, gains are often small while time and usage rise.',
    },
    {
      question: 'Claude confidently tells you the "latest" pricing for a vendor\'s product, with no citations. Your current model\'s cut-off is June 2026. What is the best response?',
      options: [
        'Accept it — Claude\'s knowledge is updated daily',
        'Ask the same question again and use the answer if it matches',
        'Switch to Fable, which has live knowledge',
        'Treat it as possibly stale; turn on web search, ask for cited sources and open them',
      ],
      answer: 3,
      explanation:
        'Training knowledge is frozen at the cut-off and uncited answers about fast-changing facts are a stale-answer signal. Web search gives live, cited information; check the sources.',
    },
    {
      question: 'On your Team plan the "Web search" option does not appear in the + menu. What is the most likely reason?',
      options: [
        'An Owner or Primary Owner has not enabled web search for the workspace',
        'Web search is only available on Free',
        'Your model\'s knowledge cut-off is too recent',
        'You must enable Research first',
      ],
      answer: 0,
      explanation: 'On Team and Enterprise, an Owner or Primary Owner must first enable web search in the organisation\'s capabilities settings.',
    },
    {
      question: 'You run the same prompt twice for a client template and get two different (both reasonable) outputs. A colleague says the tool is broken. What is the accurate explanation?',
      options: [
        'The model was swapped between runs',
        'Model outputs are non-deterministic; test with several runs and judge against criteria',
        'The second run used the cache incorrectly',
        'Your usage limit changed the answer',
      ],
      answer: 1,
      explanation: 'The same prompt can give different answers. Testing should use multiple runs and clear acceptance criteria, recording the model and effort used.',
    },
    {
      question: 'You upload a 300-page annual report and ask Claude to interpret a chart on page 210. It answers only from the surrounding text. Why?',
      options: [
        'The file exceeds the 20-file limit',
        'Images in PDFs are never analysed',
        'Visual analysis applies only to PDFs of 100 pages or fewer; longer PDFs are processed as text only',
        'PDFs over 200 pages are rejected',
      ],
      answer: 2,
      explanation: 'PDFs up to 1000 pages are accepted, but charts and images are only analysed for PDFs of 100 pages or fewer. Extract the pages or upload the chart as an image.',
    },
    {
      question: 'At 3 pm you hit your weekly limit. You still had time left in your current 5-hour session. Which statement is true?',
      options: [
        'Waiting for the next 5-hour window will restore access',
        'Starting a new chat will restore access',
        'Switching to Haiku bypasses the weekly limit',
        'You must wait for the weekly reset, use usage credits if enabled and approved, or change plan/seat',
      ],
      answer: 3,
      explanation:
        'The weekly limit applies across all models and is independent of the session window. A new chat fixes a length limit, not a usage limit.',
    },
    {
      question: 'A new hire says: "I told Claude about our project yesterday, so it already knows the context in today\'s new chat." When is that true?',
      options: [
        'Only if memory is on (and allowed by the owner) or the chats are in the same Project',
        'Always — Claude remembers every chat',
        'Never — Claude cannot use earlier context in any way',
        'Only if the chat used Opus',
      ],
      answer: 0,
      explanation: 'There is no state between chats except memory and Projects. On Team and Enterprise, memory is owner-controlled.',
    },
    {
      question: 'Which image upload would the Claude app reject?',
      options: [
        'A 4000 x 3000 px PNG',
        'A WebP screenshot at 1920 x 1080 px',
        'A 12000 x 9000 px JPEG',
        'A 1000 x 1000 px GIF',
      ],
      answer: 2,
      explanation: 'Images can be JPEG, PNG, GIF or WebP up to 8000 x 8000 px. 12000 x 9000 exceeds the dimension limit.',
    },
  ],

  sources: [
    { title: 'Models overview (Claude Platform Docs)', url: 'https://platform.claude.com/docs/en/about-claude/models/overview' },
    { title: 'Model deprecations (Claude Platform Docs)', url: 'https://platform.claude.com/docs/en/about-claude/model-deprecations' },
    { title: 'Context windows (Claude Platform Docs)', url: 'https://platform.claude.com/docs/en/build-with-claude/context-windows' },
    { title: 'Effort (Claude Platform Docs)', url: 'https://platform.claude.com/docs/en/build-with-claude/effort' },
    { title: 'Token counting (Claude Platform Docs)', url: 'https://platform.claude.com/docs/en/build-with-claude/token-counting' },
    { title: 'Model configuration (Claude Code Docs)', url: 'https://code.claude.com/docs/en/model-config' },
    { title: 'Change the model, effort, and thinking settings', url: 'https://support.claude.com/en/articles/8664678' },
    { title: 'Claude Fable models on your plan', url: 'https://support.claude.com/en/articles/15424964' },
    { title: 'Usage and length limits', url: 'https://support.claude.com/en/articles/11647753' },
    { title: 'Usage credits', url: 'https://support.claude.com/en/articles/12429409' },
    { title: 'What is the Team plan?', url: 'https://support.claude.com/en/articles/9266767-what-is-the-team-plan' },
    { title: 'Upload files to Claude', url: 'https://support.claude.com/en/articles/8241126-upload-files-to-claude' },
    { title: 'Enable and use web search', url: 'https://support.claude.com/en/articles/10684626-enable-and-use-web-search' },
    { title: 'How up-to-date is Claude\'s training data?', url: 'https://support.claude.com/en/articles/8114494-how-up-to-date-is-claude-s-training-data' },
    { title: 'Claude is providing incorrect or misleading responses', url: 'https://support.claude.com/en/articles/8525154-claude-is-providing-incorrect-or-misleading-responses-what-s-going-on' },
    { title: 'Claude is producing links that don\'t work and falsely claiming it has sent emails', url: 'https://support.claude.com/en/articles/8241188-claude-is-producing-links-that-don-t-work-and-falsely-claiming-that-it-has-sent-emails-or-produced-external-documents-what-s-going-on' },
    { title: 'Use Claude\'s chat search and memory', url: 'https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context' },
    { title: 'Claude Haiku 4.5 was removed from the model selector', url: 'https://support.claude.com/en/articles/17444146-claude-haiku-4-5-was-removed-from-the-model-selector' },
    { title: 'Introducing Claude Fable 5.2 and Claude Mythos 5.2', url: 'https://www.anthropic.com/claude-fable-and-mythos-5-2' },
  ],
}
