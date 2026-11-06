# Tic Tac Toe

A two-player Tic Tac Toe game for the browser, built with plain HTML, CSS, and JavaScript.

## Features

- 3×3 clickable game board
- Two players alternate between `0` and `x`
- Win detection across all rows, columns, and diagonals
- Live score tracking for both players
- Winning boards reset automatically after 0.8 seconds
- Prevents moves on occupied cells or after a game has ended

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

## How to Play

1. Player 1 uses `0` and Player 2 uses `x`.
2. Click an empty cell to place your mark.
3. Players alternate turns automatically.
4. Get three marks in a row — horizontally, vertically, or diagonally — to win the round.
5. The board clears automatically for the next round, and the winning player's score increases.

## Project Structure

```
tic-tac-toe/
├── index.html   # Board layout and score inputs
├── style.css    # Dark theme and board styling
└── script.js    # Turn handling, win detection, and scoring
```

## Implementation Notes

- Each cell is a `<td>` element with a click listener.
- Winning combinations are stored in the `winPattern` array and checked after every move.
- `resetBoard()` clears all cells and sets the starting player back to `0`.

## Possible Improvements

- Add a draw (tie) message and detection
- Add a manual restart button
- Display whose turn it is
- Use `X` and `O` instead of `x` and `0` for clearer marks
- Add an optional computer opponent
