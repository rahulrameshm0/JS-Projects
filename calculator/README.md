# Calculator

A simple browser-based calculator built with plain HTML, CSS, and JavaScript.

## Features

- Clickable number and operator buttons (`+`, `-`, `*`, `/`, `%`)
- Decimal and double-zero (`00`) input
- `AC` clears the current expression
- `=` evaluates the expression and shows the result

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Getting Started

No installation or build step is required.

1. Open `index.html` in any modern web browser.
2. Or serve the folder locally, for example:

   ```bash
   npx serve .
   ```

## How to Use

1. Enter a calculation using the on-screen buttons (for example `12 + 8`).
2. Press `=` to see the result.
3. Press `AC` to reset the display.

## Project Structure

```
calculator/
├── index.html   # Calculator layout and buttons
├── style.css    # Styling for the calculator
└── script.js    # Button handling and expression evaluation
```

## Implementation Notes

- Button clicks are handled with a single event listener attached to every `<button>`.
- The current expression is stored in the display input and evaluated with `eval()` when `=` is pressed.

## Possible Improvements

- Replace `eval()` with a safer expression parser
- Add keyboard input support
- Handle invalid expressions and division by zero gracefully
- Add a backspace button (the `->` button is currently only appended as text)
- Finish the styling in `style.css`
