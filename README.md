# JavaScript Mini Projects

A collection of small, browser-based projects built while learning and practicing JavaScript, HTML, and CSS. Each project lives in its own folder and runs directly in the browser — no build tools or dependencies required.

## Projects

| Project | Description | Tech |
| --- | --- | --- |
| [Calculator](./calculator/) | A clickable calculator that evaluates basic arithmetic expressions. | HTML, CSS, JavaScript |
| [Rock Paper Scissors](./rock-paper-scissor/) | Play Rock Paper Scissors against the computer; first to 10 points wins. | HTML, CSS, JavaScript |
| [Tic Tac Toe](./tic-tac-toe/) | A two-player Tic Tac Toe game with win detection and score tracking. | HTML, CSS, JavaScript |

## Repository Structure

```
js project/
├── calculator/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── rock-paper-scissor/
│   ├── index.html
│   ├── style.css
│   ├── scipt.js
│   ├── Screenshot 2025-12-26 at 21.10.23.png
│   └── README.md
├── tic-tac-toe/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
└── README.md
```

## Getting Started

Each project is fully static, so there is nothing to install.

**Option 1 — Open directly**

Open the project's `index.html` file in any modern browser:

```bash
open calculator/index.html
open rock-paper-scissor/index.html
open tic-tac-toe/index.html
```

**Option 2 — Serve locally**

Run a local static server from the repository root, then visit the project folders:

```bash
npx serve .
```

## What Each Project Covers

- **Calculator** — DOM selection, button event listeners, building an expression string, and evaluating it.
- **Rock Paper Scissors** — random computer choices, score state, conditional logic, and timed resets with `setTimeout`.
- **Tic Tac Toe** — grid interaction, alternating turns, win-pattern checking, and score tracking.

## Common Improvements

Ideas that apply across the projects:

- Replace `eval()` in the calculator with a safer expression parser
- Make all layouts fully responsive on mobile
- Add keyboard support and accessible labels/ARIA attributes
- Persist scores with `localStorage`
- Add automated tests for the game logic
- Refactor shared logic into reusable functions

## License

This repository is for learning purposes. Feel free to use and modify the code.
