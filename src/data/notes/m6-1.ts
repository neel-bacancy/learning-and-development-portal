import type { StudyNotes } from '../types.ts'

export const notes: StudyNotes = {
  overview:
    'Claude Code is Anthropic\'s agentic coding tool: instead of you pasting snippets into a chat window, it runs inside your repository, reads files on demand, edits them, runs commands and uses Git. This module takes you from zero to a supervised first session: installing the native binary, signing in with the route your organisation uses, knowing which surface to open, and, above all, understanding the permission model before Claude touches real code. The competency you are assessed on is being able to run a session confidently and explain every permission mode and its risk, so the permission-mode table, the essential commands and the Git safety net are the core of the exam.',
  sections: [
    {
      chapter: 'What Claude Code is',
      blocks: [
        {
          type: 'p',
          text: 'Claude Code is described in the official docs as **an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools**. "Agentic" means it works in a loop: it decides which files to open, reads them, proposes or makes an edit, runs a command (tests, a build, `git status`), looks at the result and decides on the next step, asking your permission wherever the current permission mode requires it.',
        },
        {
          type: 'list',
          items: [
            '**Reads files** in your project as needed. You do not have to paste or attach context; the quickstart says "Claude Code reads your project files as needed. You don\'t have to manually add context."',
            '**Edits files** across many files in one task (feature work, refactors, test writing).',
            '**Runs commands** in your shell (Bash, Zsh, PowerShell or CMD), for example the test suite, linters or build scripts.',
            '**Uses Git** conversationally: "what files have I changed?", "commit my changes with a descriptive message", "create a new branch called feature/quickstart".',
          ],
        },
        {
          type: 'table',
          head: ['Fact', 'Value (syllabus)'],
          rows: [
            ['Default model', 'Opus 5.5 (the docs confirm Opus 5.5 is the default for Pro, Max, Ultra, Team, Enterprise and the Anthropic API)'],
            ['Release the syllabus was verified against', '2.1.312, published 27 October 2026'],
            ['Seat restriction', 'Not available on Free seats (the free claude.ai plan does not include Claude Code)'],
          ],
        },
        {
          type: 'p',
          text: '**Why this differs from pasting code into chat.** In a chat window, Claude only sees what you chose to paste, so on a large codebase it is guessing about everything else: other callers of a function, configuration, tests, conventions. You also have to copy its answer back by hand and run the tests yourself. Claude Code can search the whole repository, follow imports, read the tests, run them, and verify its own change. That is what makes it useful on large codebases, and it is also exactly why the permission model matters: a tool that can edit files and run commands can also do damage.',
        },
        {
          type: 'example',
          title: 'Chat vs Claude Code on the same task',
          text: 'Task: "rename `getUser` to `fetchUser` everywhere". In chat you paste one file, get one edited file back, and miss the 14 other call sites. In Claude Code you ask once; it searches the repo, edits every call site, runs the tests and reports which ones passed, and you review the diff before committing.',
        },
        {
          type: 'tip',
          text: 'Claude Code also reads a project instruction file, `CLAUDE.md`, at the start of every session (build commands, conventions, rules). You will generate one with `/init` in the Essential commands chapter.',
        },
        {
          type: 'warning',
          text: 'Model names and defaults change between releases. The docs show some providers with different defaults (for example, Microsoft Foundry defaults to Sonnet 4.5). For the assessment, use the syllabus answer: default model **Opus 5.5**, verified against **2.1.312 (27 October 2026)**. Run `/status` or `/model` in your own session to see what you are actually using.',
        },
      ],
    },
    {
      chapter: 'Installation',
      blocks: [
        {
          type: 'p',
          text: 'The **native installer** is the recommended method. It installs a native binary, needs no Node.js, and **auto-updates in the background**. It supports two release channels: `latest` (the default, new features as soon as they ship) and `stable` (typically about one week old, skipping releases with major regressions).',
        },
        {
          type: 'table',
          head: ['Platform / shell', 'Native install command'],
          rows: [
            ['macOS, Linux, WSL', '`curl -fsSL https://claude.ai/install.sh | bash`'],
            ['Windows PowerShell (prompt shows `PS C:\\`)', '`irm https://claude.ai/install.ps1 | iex`'],
            ['Windows CMD (prompt shows `C:\\` without `PS`)', '`curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`'],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Open a terminal (in WSL, open the Linux distribution itself, not PowerShell).',
            'Run the command for your platform. It shows no progress while it downloads; wait for it to finish. You do not need to run as Administrator on Windows.',
            'Open a **new** terminal window so your PATH is refreshed.',
            'Run `claude --version`. A working install prints something like `2.1.312 (Claude Code)`.',
            'If the shell says `claude` is not found, the install directory is not on your PATH yet (see "Fix your PATH" in the troubleshooting docs).',
            'Run `claude doctor` in the shell (or `/doctor` inside a session) for a fuller health check.',
            '`cd` into your project and run `claude` to start the first session.',
          ],
        },
        {
          type: 'example',
          title: 'Choosing a channel or version at install time',
          text: 'Stable channel: `curl -fsSL https://claude.ai/install.sh | bash -s stable` (macOS/Linux/WSL), `& ([scriptblock]::Create((irm https://claude.ai/install.ps1))) stable` (PowerShell), `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd stable && del install.cmd` (CMD). A specific version works the same way, e.g. `bash -s 2.1.89`. Later you can switch with `/config` -> Auto-update channel, or `"autoUpdatesChannel": "stable"` in settings.json. Run `claude update` to update immediately.',
        },
        {
          type: 'table',
          head: ['Package manager', 'Install', 'Updates'],
          rows: [
            ['Homebrew (macOS/Linux)', '`brew install --cask claude-code` (stable) or `claude-code@latest` (latest)', 'No auto-update: `brew upgrade claude-code`'],
            ['WinGet (Windows)', '`winget install Anthropic.ClaudeCode`', 'No auto-update: `winget upgrade Anthropic.ClaudeCode`'],
            ['apt (Debian/Ubuntu)', 'Add the signed repo under `https://downloads.claude.ai/claude-code/apt/stable`, then `sudo apt install claude-code`', '`sudo apt update && sudo apt upgrade claude-code`'],
            ['dnf (Fedora/RHEL)', 'Add `/etc/yum.repos.d/claude-code.repo` pointing at `https://downloads.claude.ai/claude-code/rpm/stable`, then `sudo dnf install claude-code`', '`sudo dnf upgrade claude-code`'],
            ['apk (Alpine)', 'Add the key and `https://downloads.claude.ai/claude-code/apk/stable` repo, then `apk add bash claude-code`', '`apk update && apk upgrade claude-code`'],
            ['npm (secondary path)', '`npm install -g @anthropic-ai/claude-code`', '`npm install -g @anthropic-ai/claude-code@latest`'],
          ],
        },
        {
          type: 'p',
          text: '**npm is a secondary path.** The npm package needs **Node.js 22 or later to install**, but the package pulls in a per-platform native binary, and the installed `claude` binary does not itself invoke Node. So Node is needed to install, not to run. Never use `sudo npm install -g`: it causes permission problems and security risks, and Claude Code cannot update itself if the install needed sudo.',
        },
        {
          type: 'table',
          head: ['Requirement', 'Minimum'],
          rows: [
            ['macOS', '13.0+'],
            ['Windows', '10 1809+ (or Windows Server 2019+)'],
            ['Ubuntu', '20.04+'],
            ['Debian', '10+'],
            ['Alpine Linux', '3.19+ (needs `bash` and `curl`: `apk add bash curl`)'],
            ['RAM', '4 GB+ (x64 or ARM64)'],
            ['Network', 'Internet connection required'],
            ['Shell', 'Bash, Zsh, PowerShell or CMD'],
          ],
        },
        {
          type: 'tip',
          text: 'On native Windows, Git for Windows is recommended (optional): it provides Git Bash for the Bash tool. Without it, Claude Code uses PowerShell as its shell tool. WSL does not need Git for Windows. Sandboxing is supported on WSL 2 but not on native Windows or WSL 1.',
        },
        {
          type: 'p',
          text: '**`/doctor` when something is wrong.** Two forms exist: `claude doctor` in your shell prints read-only installation and settings diagnostics without starting a session (install health, settings-file validation errors, auto-update status, warnings with suggested fixes). Inside a session, `/doctor` (alias `/checkup`) runs a setup checkup covering installation, settings, extensions and `CLAUDE.md`, and proposes fixes that Claude applies only after you confirm.',
        },
        {
          type: 'warning',
          text: 'Common install errors: `The token \'&&\' is not a valid statement separator` means you ran the CMD command in PowerShell; `\'irm\' is not recognized` means you ran the PowerShell command in CMD. Homebrew, WinGet, apt, dnf and apk installs do **not** auto-update by default; only the native installer does.',
        },
      ],
    },
    {
      chapter: 'Authentication',
      blocks: [
        {
          type: 'p',
          text: 'On first run, `claude` opens a browser to log in (press `c` to copy the URL if the browser does not open). When it finishes the terminal shows `Login successful`. Credentials are stored for you: the macOS Keychain on macOS, `~/.claude/.credentials.json` (mode 0600) on Linux, `%USERPROFILE%\\.claude\\.credentials.json` on Windows. Use `/login` to switch accounts, `/logout` to sign out, and `/status` to see which credential is active.',
        },
        {
          type: 'table',
          head: ['Route', 'How you sign in', 'Typical use'],
          rows: [
            ['Claude subscription (Pro, Max, Team, Enterprise)', 'Browser login with your claude.ai account (Team/Enterprise: the account your admin invited)', 'Individuals and most organisations; Team/Enterprise give central billing and admin'],
            ['Claude Console, with an API key', 'Log in with Console credentials; Claude Code creates and stores a Console API key (labelled "legacy"), or set `ANTHROPIC_API_KEY`', 'API-based (pay-as-you-go) billing'],
            ['Claude Console, keyless sign-in', 'At `/login` choose the Console account, then "Sign in with your Console account" (recommended); stores an OAuth profile, creates no API key (v2.1.242+)', 'Organisations that do not let developers create API keys'],
            ['Amazon Bedrock', 'Set `CLAUDE_CODE_USE_BEDROCK` plus AWS credentials, or choose **3rd-party platform** at the login prompt', 'Organisations buying Claude through AWS'],
            ['Google Cloud (Vertex AI)', 'Set `CLAUDE_CODE_USE_VERTEX` plus GCP credentials, or the 3rd-party platform wizard', 'Organisations buying through Google Cloud'],
            ['Microsoft Foundry', 'Set `CLAUDE_CODE_USE_FOUNDRY` plus Azure credentials', 'Organisations buying through Azure'],
            ['LLM gateway', 'Route through a gateway/proxy, e.g. `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN`, or a self-hosted Claude apps gateway with corporate SSO via `/login`', 'Central logging, spend control and policy'],
          ],
        },
        {
          type: 'p',
          text: '**Precedence matters when several credentials exist.** The docs order is: cloud provider variables (`CLAUDE_CODE_USE_BEDROCK` / `_VERTEX` / `_FOUNDRY`) -> `ANTHROPIC_AUTH_TOKEN` -> `ANTHROPIC_API_KEY` -> `apiKeyHelper` -> `CLAUDE_CODE_OAUTH_TOKEN` -> Anthropic profile/federation -> subscription login from `/login`. A classic trap: you have a subscription but an old `ANTHROPIC_API_KEY` is set in your shell; once approved, the key wins and requests bill to (or fail on) that key. Fix: `unset ANTHROPIC_API_KEY`, then check `/status`.',
        },
        {
          type: 'example',
          title: 'Headless / CI authentication',
          text: 'For CI where no browser exists, `claude setup-token` generates a one-year OAuth token tied to your subscription; store it as the secret `CLAUDE_CODE_OAUTH_TOKEN`. For shared org-wide CI, the docs recommend a Console API key (`ANTHROPIC_API_KEY`) instead, because an OAuth token is tied to the person who generated it.',
        },
        {
          type: 'warning',
          text: 'Naming discrepancy: the syllabus says "Google Cloud\'s Vertex AI platform". The current docs (code.claude.com/docs/en/authentication) call it **Google Cloud\'s Agent Platform**; the environment variable is still `CLAUDE_CODE_USE_VERTEX`. Treat them as the same route. The docs also list an **Ultra** plan alongside Pro, Max, Team and Enterprise; the syllabus list does not mention it.',
        },
        {
          type: 'tip',
          text: 'Which route your organisation uses (subscription seat, Console, a cloud provider or a gateway) is set by your organisation, and admins can enforce it with managed settings such as `forceLoginMethod` and `forceLoginOrgUUID`. **Confirm the approved route with your trainer before you log in**, and never sign in to a client repository with a personal account.',
        },
      ],
    },
    {
      chapter: 'The surfaces, named',
      blocks: [
        {
          type: 'p',
          text: 'Every surface connects to the same underlying Claude Code engine, so a repository\'s `CLAUDE.md`, settings and MCP servers work across them. What differs is the interface, where the code runs (your machine or a cloud VM) and the plan you need.',
        },
        {
          type: 'table',
          head: ['Surface', 'Status / gating', 'Key facts'],
          rows: [
            ['Terminal CLI', 'GA; the full feature set', 'Run `claude` in a project directory. Everything else is measured against it.'],
            ['VS Code extension', 'GA; **also installs in Cursor** (and other forks via Open VSX)', 'Needs VS Code 1.94.0+. Inline diffs, @-mentions, plan review. Bundles its own CLI for the panel but does not put `claude` on your PATH. Switch modes via the mode indicator under the prompt box.'],
            ['JetBrains plugin', '**Beta** (listed as "Claude Code [Beta]")', 'IntelliJ, PyCharm, WebStorm, GoLand, etc. Requires the CLI installed separately. `Cmd+Esc` / `Ctrl+Esc` to launch; diffs open in the IDE viewer.'],
            ['Desktop app, Code tab', 'Paid subscription required', 'Includes Claude Code, so no separate CLI install. Visual diffs, parallel sessions, can start cloud sessions.'],
            ['Claude Code on the web (claude.ai/code) and the mobile Code tab', '**Plan-gated**: Pro, Max, Ultra, Team, and Enterprise premium / Chat + Claude Code seats', 'Runs in an isolated Anthropic-managed cloud VM; clones from GitHub; keeps running after you close the laptop.'],
            ['GitHub Actions', '**GA** (`anthropics/claude-code-action@v1`)', 'Mention `@claude` in a PR or issue; quick setup with `/install-github-app`; secrets `ANTHROPIC_API_KEY` or `CLAUDE_CODE_OAUTH_TOKEN`.'],
            ['GitLab CI/CD', '**Beta**, maintained by GitLab', 'A job in `.gitlab-ci.yml` plus a masked `ANTHROPIC_API_KEY` variable; changes flow through merge requests.'],
          ],
        },
        {
          type: 'example',
          title: 'Picking a surface',
          text: 'First session on a client repo: Terminal CLI or VS Code, locally, supervised. A long task on a repo you do not have locally: the web. Automating "@claude please fix this" on PRs: GitHub Actions. Your team uses IntelliJ: the JetBrains plugin, remembering it is Beta and needs the CLI installed too.',
        },
        {
          type: 'warning',
          text: 'JetBrains docs warn that in `acceptEdits` (and auto) mode Claude may modify IDE configuration files that the IDE can execute automatically, which can sidestep Bash permission prompts. In an IDE, prefer Manual mode for edits until you trust the setup.',
        },
      ],
    },
    {
      chapter: 'Your first session',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            '**Branch first**: `git switch -c claude/first-session` (or `git checkout -b ...`) and make sure `git status` is clean.',
            '**Start in the repository root**: `cd path/to/repo` then `claude`. Claude Code shows a workspace trust dialog the first time you open a folder; only trust folders you expect.',
            '**Check where you are**: the header shows the version, model and working directory. Run `/status` to confirm the account/credential.',
            '**Set the mode deliberately**: for a first session start in plan or Manual, e.g. `claude --permission-mode plan`, or press `Shift+Tab` until the status bar shows the mode you want.',
            '**Ask questions before asking for changes**: "what does this project do?", "where is the main entry point?", "explain the folder structure", "how are tests run?".',
            '**Watch it explore**: it lists the files it reads and the commands it wants to run. Read what it says it will do before approving anything.',
            '**Make one small change**, review the diff, run the tests, and commit only when you are satisfied.',
          ],
        },
        {
          type: 'table',
          head: ['Mode (config value)', 'Display name', 'What runs without asking', 'Risk', 'When to use'],
          rows: [
            ['`default`', '**Manual**', 'Reads only (plus built-in read-only commands such as `ls`, `cat`, `git status`)', 'Lowest; you approve every edit and command', 'First sessions, sensitive or unfamiliar code, learning what Claude does'],
            ['`acceptEdits`', 'Accept edits ("Edit automatically" in VS Code)', 'Reads, file edits, and common filesystem commands (`mkdir`, `touch`, `mv`, `cp`, `rm`, `rmdir`, `sed`) inside the working directory', 'Medium; edits land without a prompt, so you must review the diff afterwards', 'Iterating on code you are actively reviewing'],
            ['`plan`', 'Plan', 'Reads and exploration; Claude writes a plan but **does not edit your source**', 'Low; read-only exploration', 'Understanding a codebase, agreeing an approach before any change'],
            ['`auto`', 'Auto', '"Everything, with background safety checks": a separate classifier model reviews each action and blocks risky ones', 'Medium; reduces prompts but "does not guarantee safety"', 'Long tasks where you trust the direction; the built-in default in terminal and VS Code since 2.1.283'],
            ['`dontAsk`', 'Don\'t ask', 'Only reads inside working directories and pre-approved tools; anything that would prompt is **denied**', 'Low blast radius but tasks may fail', 'Locked-down CI and scripts'],
            ['`bypassPermissions`', 'Bypass permissions', '"Everything"; no prompts, no protection against prompt injection', '**Highest**', '**Only inside a sandbox, container, VM or CI, never on a working laptop**'],
          ],
        },
        {
          type: 'p',
          text: '**Shift+Tab cycles modes** in the CLI. From `auto`, the first press goes to `default` (Manual), then the cycle runs `default` -> `acceptEdits` -> `plan`, with any enabled optional modes after plan (`bypassPermissions` first, `auto` last). `bypassPermissions` only appears if you started with a bypass flag or setting; `dontAsk` never appears in the cycle (start it with `--permission-mode dontAsk`). The status bar confirms the mode, e.g. `⏸ manual mode on`, `⏵⏵ accept edits on`, `⏸ plan mode on`, `⏵⏵ auto mode on`. In VS Code, click the mode indicator under the prompt box instead.',
        },
        {
          type: 'example',
          title: 'Starting in a mode',
          text: '`claude --permission-mode plan` / `claude --permission-mode acceptEdits` / `claude --permission-mode manual` (alias for `default`). A machine-wide default goes in `~/.claude/settings.json` as `{ "permissions": { "defaultMode": "default" } }`. Precedence: the flag beats `permissions.defaultMode` in settings, which beats the built-in default. You can also enter plan mode for one task with `/plan fix the auth bug`.',
        },
        {
          type: 'warning',
          text: 'In plan mode, when the plan-approval prompt is open, pressing `Shift+Tab` **approves the plan**. Press `Esc` first if you only want to leave plan mode. Also note: `claude -p` (non-interactive) and Agent SDK runs start in Manual, not auto.',
        },
        {
          type: 'tip',
          text: 'Auto mode is now the starting mode in an interactive terminal or VS Code session unless your settings say otherwise. For this module\'s supervised first session, deliberately switch to plan or Manual. Your organisation may also set a default mode or disable auto/bypass through managed settings; ask your trainer what is configured.',
        },
      ],
    },
    {
      chapter: 'Essential commands',
      blocks: [
        {
          type: 'p',
          text: 'Slash commands are typed at the start of a message inside a session. Type `/` to see the menu and filter it. These twelve are the ones the syllabus requires you to know.',
        },
        {
          type: 'table',
          head: ['Command', 'What it does'],
          rows: [
            ['`/help`', 'Show help and available commands'],
            ['`/init`', 'Initialise the project with a `CLAUDE.md` guide: Claude analyses the codebase and writes build commands, test instructions and conventions. If a `CLAUDE.md` exists it suggests improvements rather than overwriting.'],
            ['`/clear`', 'Start a new conversation with empty context (aliases `/reset`, `/new`). The old conversation can be reopened with `/resume`.'],
            ['`/compact [instructions]`', 'Free up context by summarising the conversation so far, optionally with focus instructions (e.g. `/compact keep the test output`)'],
            ['`/context`', 'Visualise current context usage as a coloured grid, with optimisation suggestions and capacity warnings'],
            ['`/model [model]`', 'Switch the model and save it as your default for new sessions (e.g. `/model sonnet`); with no argument opens a picker'],
            ['`/effort [level]`', 'Set effort: `low`, `medium`, `high`, `xhigh`, `max` (session-only) or `auto`; `/effort status` prints it'],
            ['`/usage`', 'Show session cost, plan usage limits and activity stats. **`/cost` and `/stats` are aliases** (`/stats` opens on the Stats tab)'],
            ['`/config`', 'Open the Settings interface (theme, model, output style, auto-update channel, etc.); `/config key=value` sets directly. Alias `/settings`'],
            ['`/doctor`', 'Setup checkup: diagnoses installation, settings, extension and `CLAUDE.md` problems and proposes fixes that Claude applies after you confirm. Alias `/checkup`'],
            ['`/resume [session]`', 'Resume a conversation by ID or name, or open the session picker. Alias `/continue` (shell equivalents: `claude -c`, `claude -r`)'],
            ['`/rewind`', 'Rewind the conversation and/or code to a previous checkpoint, or summarise from a selected message. Aliases `/checkpoint`, `/undo`; also opened by pressing `Esc` twice on an empty prompt'],
          ],
        },
        {
          type: 'example',
          title: '`/clear` vs `/compact` vs `/rewind`',
          text: 'Switching to an unrelated task: `/clear` (fresh, empty context). Same task but the context is filling up: `/compact` (summarise and continue). Claude went down a wrong path and edited files: `/rewind` and choose Restore code (and conversation).',
        },
        {
          type: 'p',
          text: '**`/init` and CLAUDE.md.** `CLAUDE.md` is a markdown file Claude reads at the start of every session. Project instructions live in `./CLAUDE.md` or `./.claude/CLAUDE.md` and are shared via Git; personal preferences go in `~/.claude/CLAUDE.md` (all projects) or `./CLAUDE.local.md` (this project, add to `.gitignore`). Keep each file under about 200 lines. Run `/init` early, then edit the result to add what Claude could not discover (for example "never run the migration script locally"). Use `/memory` to edit these files later. If the repo only has an `AGENTS.md`, Claude Code can read that instead.',
        },
        {
          type: 'list',
          items: [
            'Useful neighbours (not on the syllabus list but you will meet them): `/status` (version, model, account), `/permissions` (allow/ask/deny rules), `/plan`, `/memory`, `/login`, `/logout`, `/exit`.',
            'Shell-side commands: `claude` (interactive), `claude "task"`, `claude -p "query"` (one-off, then exit), `claude -c` (continue last conversation here), `claude -r` (resume), `claude update`, `claude doctor`, `claude --version`.',
          ],
        },
        {
          type: 'tip',
          text: 'Check `/context` before a long task and `/usage` at the end of the day. Context bloat is the usual reason quality drops late in a session; `/compact` or `/clear` usually fixes it.',
        },
      ],
    },
    {
      chapter: 'Safety basics',
      blocks: [
        {
          type: 'p',
          text: '**What Claude Code can reach on your machine.** Claude Code runs as **your user account**. Its file tools work within the folder you started it in and its subfolders; in Manual mode it asks before reading or writing outside that boundary. But the boundary is a permission prompt, not an OS jail: a Bash command you approve "can still write anywhere your user account can". That includes your home directory, SSH keys, cloud credentials, `.env` files, other repositories and the network. Approving a command is approving everything that command can do.',
        },
        {
          type: 'list',
          items: [
            'In Manual mode, network commands like `curl` and `wget` are not auto-approved; unmatched commands require approval (fail-closed).',
            'Writes to protected paths such as `.git`, `.claude`, `.bashrc` and `.mcp.json` prompt in Manual and acceptEdits, are denied in dontAsk and are **allowed** in bypassPermissions.',
            'Prompt injection: text Claude reads (a README, a web page, an issue) may contain instructions aimed at it. Review commands before approving, avoid piping untrusted content to Claude, and use VMs/containers for risky work.',
            'Sandboxing (`/sandbox`) adds OS-level filesystem and network isolation for Bash commands (macOS, Linux, WSL 2; not native Windows).',
            'You remain responsible for reviewing proposed code and commands before approving them.',
          ],
        },
        {
          type: 'p',
          text: '**Git as the safety net: branch first, commit early.** Before Claude edits anything, create a branch and make sure the working tree is clean. Commit each good step, so any bad step can be thrown away with `git restore` or `git reset --hard` on your own branch without touching anyone else\'s work. Small commits also make Claude\'s changes easy to review.',
        },
        {
          type: 'p',
          text: '**A preview of checkpoints.** Claude Code automatically captures the state of the code before each prompt you send. Open the rewind menu with `/rewind` or `Esc` `Esc` (empty prompt) and choose: Restore code and conversation, Restore conversation, Restore code, Summarize from here, Summarize up to here, or Never mind. Snapshots are kept for the 100 most recent checkpoints in a session and are cleaned up after about 30 days by default.',
        },
        {
          type: 'warning',
          text: 'Checkpoints are **not** a replacement for Git. They do not restore files changed only by Bash commands (e.g. `rm`, a formatter, a migration), edits by most subagents, manual edits you make outside Claude Code, or symlinked/hard-linked files. They cannot undo side effects outside your files (a database write, a push, an API call). Git is the real safety net; checkpoints are a quick session-level undo.',
        },
        {
          type: 'p',
          text: '**Why you never start with the widest permission.** Permission is how you supervise an agent you have not yet calibrated. Starting in `bypassPermissions` (or `--dangerously-skip-permissions`) on a working laptop means any mistaken command or injected instruction runs with your full user rights and no prompt, against a machine full of credentials. Start narrow (plan or Manual), widen to `acceptEdits` or auto only once you understand what Claude is doing, and keep `bypassPermissions` for isolated containers, VMs or CI. Claude Code itself refuses to start in bypass mode as root/sudo on Linux and macOS.',
        },
        {
          type: 'tip',
          text: 'The sandbox repository for your stack is provided by your organisation. Do all exercises there, on a branch, never on a live client repository. Confirm the repository URL and any settings policy with your trainer.',
        },
      ],
    },
  ],
  keyFacts: [
    'Claude Code is an agent inside your repository: it reads and edits files, runs commands and uses Git.',
    'Default model: Opus 5.5. The syllabus was verified against release 2.1.312, published 27 October 2026.',
    'Claude Code is not available on Free seats; it needs Pro, Max, Team, Enterprise (the docs also list Ultra) or a Console account, or a cloud provider/gateway.',
    'Native installer is recommended and auto-updates: `curl -fsSL https://claude.ai/install.sh | bash` (macOS/Linux/WSL), `irm https://claude.ai/install.ps1 | iex` (PowerShell).',
    'Windows CMD installer: `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`.',
    'Release channels: `latest` (default, immediate) and `stable` (about a week old, skips releases with major regressions).',
    'Homebrew `brew install --cask claude-code`, WinGet `winget install Anthropic.ClaudeCode`; package-manager installs (Homebrew, WinGet, apt, dnf, apk) do not auto-update by default.',
    'npm (`npm install -g @anthropic-ai/claude-code`) is secondary: Node.js 22+ is needed to install, not to run; the installed binary is native. Never use sudo.',
    'Minimums: macOS 13+, Windows 10 1809+, Ubuntu 20.04+, Debian 10+, Alpine 3.19+, 4 GB RAM.',
    'Verify with `claude --version`; diagnose with `claude doctor` (shell) or `/doctor` (in session).',
    'Auth routes: Claude subscription; Console via API key or keyless sign-in; Amazon Bedrock; Google Cloud Vertex AI (now named Agent Platform); Microsoft Foundry; an LLM gateway.',
    'An `ANTHROPIC_API_KEY` in your environment outranks your subscription login once approved; check `/status`.',
    'Surfaces: Terminal CLI (full feature set), VS Code (also Cursor), JetBrains (Beta), Desktop Code tab, web + mobile Code tab (plan-gated), GitHub Actions (GA), GitLab CI (Beta).',
    'Six permission modes: `default` (Manual), `acceptEdits`, `plan`, `auto`, `dontAsk`, `bypassPermissions`.',
    'Manual auto-approves only reads; acceptEdits adds file edits and basic filesystem commands in the working directory; plan explores and plans but never edits source.',
    '`auto` uses a separate classifier model to review actions; it is the built-in default for interactive terminal and VS Code sessions since 2.1.283.',
    '`dontAsk` denies anything that would prompt; it never appears in the Shift+Tab cycle.',
    '`bypassPermissions` runs everything without prompts and belongs only in a sandbox, container, VM or CI, never on a working laptop.',
    'Shift+Tab cycles permission modes (Manual -> acceptEdits -> plan, then optional modes); in plan approval, Esc first, because Shift+Tab approves the plan.',
    '`/usage` shows cost and limits; `/cost` and `/stats` are its aliases.',
    '`/init` generates a starting `CLAUDE.md`; `/clear` empties context; `/compact` summarises it; `/context` visualises it.',
    '`/rewind` (or Esc Esc) restores code and/or conversation to a checkpoint taken before each prompt.',
    'Checkpoints do not track Bash-made file changes and are not a replacement for Git: branch first, commit early.',
  ],
  glossary: [
    { term: 'Claude Code', definition: 'Anthropic\'s agentic coding tool that reads your codebase, edits files, runs commands and integrates with development tools, available in the terminal, IDEs, desktop app, web and CI.' },
    { term: 'Agentic', definition: 'Working in a loop of deciding, acting (reading, editing, running commands), observing the result and deciding again, rather than producing a single reply.' },
    { term: 'Native installer', definition: 'The recommended install method (install.sh / install.ps1 / install.cmd). Installs a native binary that auto-updates in the background.' },
    { term: 'Release channel', definition: '`latest` (default; every release as it ships) or `stable` (about one week old, skipping releases with major regressions). Set at install time or with `autoUpdatesChannel`.' },
    { term: 'claude doctor / /doctor', definition: 'Health checks. `claude doctor` prints read-only install and settings diagnostics from the shell; `/doctor` (alias `/checkup`) runs an in-session checkup and proposes fixes you confirm.' },
    { term: 'Claude Console', definition: 'Anthropic\'s developer platform (platform.claude.com) for API-billed access; sign in with an API key or keyless OAuth sign-in.' },
    { term: 'Keyless sign-in', definition: 'Signing in to a Console account without creating an API key; Claude Code stores an OAuth profile instead (v2.1.242+).' },
    { term: 'Amazon Bedrock / Vertex AI (Agent Platform) / Microsoft Foundry', definition: 'Cloud providers through which organisations can run Claude models; enabled with `CLAUDE_CODE_USE_BEDROCK`, `CLAUDE_CODE_USE_VERTEX` or `CLAUDE_CODE_USE_FOUNDRY`.' },
    { term: 'LLM gateway', definition: 'A proxy between Claude Code and the model provider used for central authentication, logging, policy and spend tracking.' },
    { term: 'Surface', definition: 'An interface to the same Claude Code engine: terminal CLI, VS Code, JetBrains, desktop app, web/mobile, GitHub Actions, GitLab CI.' },
    { term: 'Permission mode', definition: 'Session setting that decides which actions Claude can take without asking: default (Manual), acceptEdits, plan, auto, dontAsk, bypassPermissions.' },
    { term: 'Manual mode (`default`)', definition: 'Only reads run without asking; every edit and non-read-only command needs your approval.' },
    { term: 'acceptEdits', definition: 'Auto-approves file edits and common filesystem commands inside the working directory; other commands still prompt.' },
    { term: 'Plan mode', definition: 'Claude reads and explores, then proposes a plan without editing your source. Enter with Shift+Tab, `/plan` or `--permission-mode plan`.' },
    { term: 'Auto mode', definition: 'A separate classifier model reviews each action and blocks ones that go beyond your request or look unsafe. Reduces prompts; does not guarantee safety.' },
    { term: 'dontAsk', definition: 'Anything that would prompt is denied; only pre-approved tools and reads run. For locked-down CI and scripts.' },
    { term: 'bypassPermissions', definition: 'Everything runs with no prompts and no prompt-injection protection. Isolated containers, VMs or CI only. Started with `--dangerously-skip-permissions` or `--permission-mode bypassPermissions`.' },
    { term: 'Classifier', definition: 'The separate model used in auto mode to approve or block actions before they run.' },
    { term: 'Prompt injection', definition: 'Malicious instructions hidden in content Claude reads (files, web pages, issues) that try to make it act against your intent.' },
    { term: 'Working directory boundary', definition: 'In Manual mode file tools ask before reading or writing outside the start folder; approved Bash commands can still reach anything your user account can.' },
    { term: 'Protected paths', definition: 'Sensitive locations such as `.git`, `.claude`, `.bashrc` and `.mcp.json` whose writes prompt in most modes.' },
    { term: 'Checkpoint', definition: 'Automatic snapshot of files Claude edited, taken before each prompt you send; restored through `/rewind`.' },
    { term: '/rewind', definition: 'Opens the rewind menu (also Esc Esc) to restore code, conversation or both to a checkpoint, or summarise part of the conversation.' },
    { term: 'CLAUDE.md', definition: 'Markdown instruction file Claude reads at the start of every session; project (`./CLAUDE.md`), user (`~/.claude/CLAUDE.md`), local (`CLAUDE.local.md`) or managed scope.' },
    { term: '/init', definition: 'Generates a starting `CLAUDE.md` by analysing the codebase; suggests improvements if one already exists.' },
    { term: 'Context window', definition: 'The working memory of a session; inspected with `/context`, reduced with `/compact`, reset with `/clear`.' },
    { term: 'Effort', definition: 'How much reasoning Claude spends per task (`low` to `xhigh`, `max`, or `auto`), set with `/effort`.' },
    { term: 'Sandbox repository', definition: 'An organisation-provided practice repository for exercises, where mistakes cannot affect client or production code.' },
  ],
  pitfalls: [
    'Treating `bypassPermissions` (or `--dangerously-skip-permissions`) as a convenience setting on a working laptop. It belongs only in a sandbox, container, VM or CI.',
    'Assuming auto mode means "safe". The classifier reduces prompts but does not guarantee safety, and it is now the default in the terminal and VS Code, so switch to Manual or plan deliberately for a first session.',
    'Starting Claude on `main` with uncommitted work. Branch first and commit early so you can throw changes away cleanly.',
    'Believing `/rewind` undoes everything. It does not restore files changed only by Bash commands, most subagent edits, external edits, or side effects such as pushes and database writes.',
    'Pressing Shift+Tab at the plan-approval prompt to "leave plan mode": it approves the plan. Press Esc first.',
    'Expecting `dontAsk` to show up in the Shift+Tab cycle; it never does, and it denies rather than allows anything that would prompt.',
    'Running the CMD install line in PowerShell (or vice versa), or using `sudo npm install -g`.',
    'Assuming Node.js is needed to run Claude Code. Node 22+ is needed only for the npm install path; the binary is native.',
    'Expecting Homebrew or WinGet installs to auto-update like the native installer.',
    'Leaving an old `ANTHROPIC_API_KEY` exported while logged in with a subscription, then being billed to (or blocked by) the key. Check `/status`.',
    'Asking for changes before asking questions. Explore first, ideally in plan mode, so you can judge whether Claude understood the codebase.',
    'Trusting answers about the codebase without checking. Verify a sample of answers by reading the code yourself.',
    'Approving a command without reading it: an approved Bash command runs with your full user rights, outside the working directory if it says so.',
    'Assuming the JetBrains plugin includes the CLI (it does not) or that the VS Code extension puts `claude` on your PATH (it does not).',
    'Using `/clear` when you meant `/compact`, losing the task context you still needed.',
    'Signing in with a personal account on a client project instead of the route your organisation approved.',
  ],
  exerciseGuides: [
    {
      exercise: 'Install, authenticate, run `/doctor`, and open the sandbox repository for your stack.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Confirm with your trainer which auth route the organisation uses and the URL of the sandbox repository for your stack.',
            'Install with the native installer for your platform: `curl -fsSL https://claude.ai/install.sh | bash` (macOS/Linux/WSL), `irm https://claude.ai/install.ps1 | iex` (PowerShell) or `curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd` (CMD).',
            'Open a new terminal and run `claude --version`.',
            'Run `claude doctor` in the shell and fix anything it flags (PATH, settings errors).',
            'Clone the sandbox: `git clone <sandbox-url>` then `cd <sandbox-dir>` and `git switch -c m6-1/<your-name>`.',
            'Start `claude`, accept the workspace trust dialog for this folder, and log in using the approved route.',
            'Inside the session run `/status` (confirm account and model) and `/doctor` (review the checkup; do not accept fixes you do not understand).',
            'Optionally run `/init` to generate a `CLAUDE.md`, and read what it wrote.',
          ],
        },
        {
          type: 'example',
          title: 'What good looks like',
          text: '`claude --version` prints a version; `claude doctor` shows no errors; `/status` shows the organisation-approved login and Opus 5.5 (or the model your org sets); you are on your own branch in the sandbox repository, not on `main`.',
        },
        {
          type: 'tip',
          text: 'If login offers a choice, pick the method your trainer named. If `claude` is "not found", open a fresh terminal first; most PATH problems are just an old shell.',
        },
      ],
    },
    {
      exercise: 'Ask five questions about the codebase. Verify two of the answers by reading the code yourself.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Switch to plan mode (`Shift+Tab` until `⏸ plan mode on`, or start with `claude --permission-mode plan`) so nothing can be edited.',
            'Ask five specific questions, e.g. "what does this project do?", "where is the main entry point?", "how are tests run, and what is the command?", "which module handles authentication and how is a request validated?", "what happens when X fails?".',
            'Watch which files Claude opens; note the file paths and line numbers it cites.',
            'Pick two answers that make concrete claims. Open the cited files yourself (editor, `git grep <symbol>`) and check them line by line.',
            'Record for each: the question, Claude\'s answer, how you verified it, and whether it was correct, partly correct or wrong.',
          ],
        },
        {
          type: 'example',
          title: 'What good looks like',
          text: 'Q: "How are tests run?" Claude: "`npm test`, which runs vitest via package.json scripts." Verification: opened `package.json`, confirmed `"test": "vitest run"`, ran `npm test` and saw the suite execute. Verdict: correct. A good write-up also records any answer that was vague or wrong, and why.',
        },
        {
          type: 'tip',
          text: 'Ask Claude to cite file paths in its answer ("answer with file and line references"). It makes verification fast and shows you where it might be guessing.',
        },
      ],
    },
    {
      exercise: 'Make one small change in Manual mode, one in `acceptEdits`, one in plan mode. Describe what each mode asked you and when you would choose it.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Make sure you are on your branch with a clean tree: `git status`.',
            '**Manual**: Shift+Tab until `⏸ manual mode on` (or `claude --permission-mode manual`). Ask for a tiny change, e.g. "add a docstring to the `parseConfig` function". Note that it asks before the edit and before any command such as running tests. Approve once. Commit: `git commit -am "docs: parseConfig docstring"`.',
            '**acceptEdits**: Shift+Tab to `⏵⏵ accept edits on`. Ask for a second small change, e.g. "rename the variable `tmp` to `rawConfig` in parseConfig". Note that the edit lands without a prompt but running tests still asks. Review with `git diff`, then commit.',
            '**Plan**: Shift+Tab to `⏸ plan mode on`. Ask "plan how you would add input validation to parseConfig". Note that it explores and writes a plan but edits nothing. At the approval prompt choose how to proceed (approve to start implementing, or press Esc to stay in control).',
            'Write a short comparison: what each mode prompted for, what it did without asking, and when you would choose it.',
          ],
        },
        {
          type: 'table',
          head: ['Mode', 'What it asked you', 'When you would choose it'],
          rows: [
            ['Manual', 'Approval for every file edit and every non-read-only command', 'First look at an unfamiliar or sensitive repo; when you want to see every action'],
            ['acceptEdits', 'Only for commands beyond basic filesystem ones (e.g. running tests) and anything outside the working directory', 'Iterating quickly on code you will review with `git diff` before committing'],
            ['Plan', 'Approval of the plan itself; no edit prompts because it does not edit source', 'Before any non-trivial change, to agree the approach first'],
          ],
        },
        {
          type: 'warning',
          text: 'At the plan-approval prompt, Shift+Tab approves the plan. Use Esc if you only want to leave.',
        },
      ],
    },
    {
      exercise: 'Break something on a branch and recover with Git.',
      guide: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Start clean and on a throwaway branch: `git status` then `git switch -c m6-1/break-and-recover` (or `git checkout -b m6-1/break-and-recover`).',
            'Record a known-good state: run the tests (e.g. `npm test`, `pytest`) and note they pass. `git log --oneline -1` shows the commit you can return to.',
            'Break something deliberately with Claude, in Manual mode so you see each step: "delete the `validateEmail` function and its import" or "change the return value of X to null".',
            'Run the tests and watch them fail. Inspect the damage: `git status` and `git diff`.',
            '**Recover uncommitted changes**: `git restore <file>` for one file, or `git restore .` for everything tracked (older Git: `git checkout -- <file>`). Remove new untracked files with `git clean -n` (preview) then `git clean -f`.',
            '**If the breakage was committed**: `git log --oneline` to find the bad commit, then `git revert <sha>` (safe, adds an undo commit) or, on your own unpushed branch only, `git reset --hard <good-sha>`.',
            'Re-run the tests to prove they pass again, then `git switch main` and `git branch -D m6-1/break-and-recover` if you no longer need it.',
            'Compare with `/rewind`: break something again and use `/rewind` -> Restore code. Note that files changed only by Bash commands are not restored by checkpoints, which is why Git is the safety net.',
          ],
        },
        {
          type: 'example',
          title: 'Sample command sequence',
          text: '`git switch -c m6-1/break-and-recover` -> (Claude deletes a function) -> `npm test` (fails) -> `git diff` -> `git restore .` -> `npm test` (passes) -> `git switch main` -> `git branch -D m6-1/break-and-recover`.',
        },
        {
          type: 'warning',
          text: 'Never use `git reset --hard` or `git push --force` on a shared branch. `git reset --hard` and `git clean -f` permanently discard uncommitted work, so check `git status` first.',
        },
      ],
    },
  ],
  quiz: [
    {
      question: 'A colleague on a Free claude.ai seat asks why `claude` will not let them start working after login. What is the most likely reason?',
      options: [
        'They installed with npm instead of the native installer',
        'Claude Code is not available on Free seats; they need a paid plan, a Console account or an approved cloud/gateway route',
        'They need to run `/init` before Claude Code will authenticate',
        'Their default permission mode is set to `dontAsk`',
      ],
      answer: 1,
      explanation: 'The free claude.ai plan does not include Claude Code. Install method, `/init` and permission modes have nothing to do with account eligibility.',
    },
    {
      question: 'You are on Windows and your prompt reads `C:\\Users\\you>` (no `PS`). Which install command is correct?',
      options: [
        '`irm https://claude.ai/install.ps1 | iex`',
        '`curl -fsSL https://claude.ai/install.sh | bash`',
        '`curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd`',
        '`sudo npm install -g @anthropic-ai/claude-code`',
      ],
      answer: 2,
      explanation: 'A prompt without `PS` is CMD, which uses the install.cmd line. The `irm` line is for PowerShell, install.sh is for macOS/Linux/WSL, and sudo npm is explicitly discouraged.',
    },
    {
      question: 'A developer says "I cannot use Claude Code because our build machines only have Node 18." What is the accurate response?',
      options: [
        'Correct: Claude Code runs on Node.js and needs 22+ at runtime',
        'Node.js 22+ is only needed for the npm install path; the native installer needs no Node and the installed binary is native',
        'Node 18 is fine for every install method',
        'They must use WinGet, which bundles Node 22',
      ],
      answer: 1,
      explanation: 'Per the syllabus and docs, Node 22+ is needed to install via npm, not to run. The native installer is recommended and needs no Node.',
    },
    {
      question: 'Your team installed Claude Code with Homebrew three months ago. Some features from the latest release are missing. Why?',
      options: [
        'Homebrew installs do not auto-update; run `brew upgrade claude-code` (or `claude-code@latest`)',
        'Homebrew only installs the JetBrains plugin',
        'They are on plan mode, which hides new features',
        'The stable channel never receives new features',
      ],
      answer: 0,
      explanation: 'Only the native installer auto-updates. Homebrew, WinGet, apt, dnf and apk need manual upgrades by default. The stable channel lags about a week, not three months.',
    },
    {
      question: 'Claude Code starts but fails with odd settings errors and you suspect a broken install. What should you run first?',
      options: ['`/compact`', '`/rewind`', '`/clear`', '`/doctor` (or `claude doctor` from the shell)'],
      answer: 3,
      explanation: '`/doctor` is the health check for installation, settings and configuration problems; `claude doctor` gives read-only diagnostics without starting a session.',
    },
    {
      question: 'You are logged in with your company Team seat, but usage is being billed to an old personal API key. What is the likely cause and fix?',
      options: [
        'The Team plan does not support Claude Code; switch to Console',
        'An `ANTHROPIC_API_KEY` in your environment outranks the subscription login once approved; unset it and confirm with `/status`',
        'You are in auto mode, which uses API billing',
        'Run `/init` to reset billing',
      ],
      answer: 1,
      explanation: 'In authentication precedence, `ANTHROPIC_API_KEY` sits above the subscription OAuth login. Unset it and check `/status` to see the active credential.',
    },
    {
      question: 'Your team uses IntelliJ IDEA and wants Claude Code in the IDE. Which statement is accurate?',
      options: [
        'Use the VS Code extension; it installs in all JetBrains IDEs',
        'JetBrains is not a supported surface',
        'Install the JetBrains plugin (labelled Beta) and also install the Claude Code CLI, which the plugin runs',
        'The JetBrains plugin is GA and bundles its own CLI',
      ],
      answer: 2,
      explanation: 'The JetBrains plugin is Beta and does not bundle the CLI; it runs `claude` in the IDE terminal. The VS Code extension installs in Cursor and other VS Code forks, not JetBrains.',
    },
    {
      question: 'You open Claude Code for the first time on a client repository you have never seen. Which approach best matches the module guidance?',
      options: [
        'Start with `--dangerously-skip-permissions` so exploration is faster',
        'Ask Claude to refactor the worst module straight away to see what it can do',
        'Create a branch, start in plan or Manual mode, and ask questions about the codebase before asking for any change',
        'Use `acceptEdits` and ask for a full test suite rewrite',
      ],
      answer: 2,
      explanation: 'Branch first, start narrow, ask before changing, and read what Claude says it will do. Widest permissions and large changes come later, if at all.',
    },
    {
      question: 'Which permission mode lets Claude edit files in the working directory without asking, but still prompts before running something like the test suite?',
      options: ['`plan`', '`dontAsk`', '`default` (Manual)', '`acceptEdits`'],
      answer: 3,
      explanation: '`acceptEdits` auto-approves file edits and basic filesystem commands (`mkdir`, `mv`, `cp`, etc.) in the working directory; other Bash commands still prompt. Manual asks for edits too; plan does not edit source; dontAsk denies anything that would prompt.',
    },
    {
      question: 'A teammate wants to put `bypassPermissions` in their user settings "to stop all the prompts" on their work laptop. What is the correct guidance?',
      options: [
        'Fine, as long as they review the diff afterwards',
        'Fine, because auto mode would be riskier',
        'No: `bypassPermissions` runs everything without prompts and offers no prompt-injection protection; it belongs only inside a sandbox, container, VM or CI. Use acceptEdits or auto with care instead',
        'No: `bypassPermissions` only works on Linux',
      ],
      answer: 2,
      explanation: 'The syllabus is explicit: bypassPermissions belongs only in a sandbox or CI, never on a working laptop. Reviewing diffs afterwards cannot undo a destructive command or a leaked secret.',
    },
    {
      question: 'You are in auto mode and press Shift+Tab once. Which mode are you in now?',
      options: ['`plan`', '`acceptEdits`', '`default` (Manual)', '`dontAsk`'],
      answer: 2,
      explanation: 'From auto, the first Shift+Tab goes to default (Manual); the cycle then runs default -> acceptEdits -> plan. dontAsk never appears in the cycle.',
    },
    {
      question: 'Claude has spent an hour on one feature and answers are getting worse because the context is nearly full. You want to keep working on the same feature. Which command fits best?',
      options: ['`/clear`', '`/compact`', '`/resume`', '`/model`'],
      answer: 1,
      explanation: '`/compact` summarises the conversation to free context while continuing the same task. `/clear` would throw the task context away; `/resume` reopens an earlier conversation; `/model` changes the model.',
    },
    {
      question: 'Your manager asks how much the last session cost and how close you are to plan limits. Which command do you run?',
      options: ['`/usage` (`/cost` and `/stats` are aliases)', '`/context`', '`/config`', '`/effort`'],
      answer: 0,
      explanation: '`/usage` shows session cost, plan usage limits and activity stats; `/cost` and `/stats` are aliases. `/context` shows context-window usage, not cost.',
    },
    {
      question: 'Claude ran a Bash script that deleted and regenerated several files, and the result is wrong. You try `/rewind` -> Restore code, but some files are not restored. What should you have relied on?',
      options: [
        'A higher effort level',
        'Git: branch first and commit early, then `git restore` / `git reset` on your branch, because checkpoints do not track files changed only by Bash commands',
        '`/compact`, which restores files',
        '`dontAsk` mode, which makes all changes reversible',
      ],
      answer: 1,
      explanation: 'Checkpoints only track Claude\'s file-editing tools (and later Bash changes to files those tools already edited). Files changed only by Bash are not restored. Git is the safety net; checkpoints are not a replacement for version control.',
    },
    {
      question: 'A new project has no `CLAUDE.md`. What is the quickest correct way to create a useful starting one?',
      options: [
        'Run `/init`, then edit the generated file to add rules Claude could not discover',
        'Run `/doctor`, which writes CLAUDE.md automatically',
        'Run `/config` and enable memory',
        'Copy your personal `~/.claude/CLAUDE.md` into the repo unchanged',
      ],
      answer: 0,
      explanation: '`/init` analyses the codebase and generates a starting `CLAUDE.md` with build commands, tests and conventions. You then refine it. Personal preferences belong in `~/.claude/CLAUDE.md` or `CLAUDE.local.md`, not the shared project file.',
    },
  ],
  sources: [
    { title: 'Claude Code overview', url: 'https://code.claude.com/docs/en/overview' },
    { title: 'Advanced setup (install, requirements, channels, npm, uninstall)', url: 'https://code.claude.com/docs/en/setup' },
    { title: 'Quickstart', url: 'https://code.claude.com/docs/en/quickstart' },
    { title: 'Authentication', url: 'https://code.claude.com/docs/en/authentication' },
    { title: 'Permission modes', url: 'https://code.claude.com/docs/en/permission-modes' },
    { title: 'Commands reference', url: 'https://code.claude.com/docs/en/commands' },
    { title: 'Checkpointing', url: 'https://code.claude.com/docs/en/checkpointing' },
    { title: 'How Claude remembers your project (CLAUDE.md)', url: 'https://code.claude.com/docs/en/memory' },
    { title: 'Model configuration', url: 'https://code.claude.com/docs/en/model-config' },
    { title: 'Security', url: 'https://code.claude.com/docs/en/security' },
    { title: 'VS Code extension', url: 'https://code.claude.com/docs/en/vs-code' },
    { title: 'JetBrains IDEs', url: 'https://code.claude.com/docs/en/jetbrains' },
    { title: 'Use Claude Code in the cloud (web and mobile)', url: 'https://code.claude.com/docs/en/claude-code-on-the-web' },
    { title: 'Claude Code GitHub Actions', url: 'https://code.claude.com/docs/en/github-actions' },
    { title: 'Claude Code GitLab CI/CD', url: 'https://code.claude.com/docs/en/gitlab-ci-cd' },
    { title: 'Claude Code CHANGELOG', url: 'https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md' },
    { title: 'Claude Code release v2.1.312', url: 'https://github.com/anthropics/claude-code/releases/tag/v2.1.312' },
  ],
}
