# Rock Paper Scissors

A browser-based Rock Paper Scissors game where you play against the computer.

## Features

- Choose Rock, Paper, or Scissors with the emoji buttons
- The computer picks a move at random
- Live score tracking for the player and the computer
- First side to reach 10 points wins
- The game announces the winner and automatically resets the scores after 2 seconds

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (`Roboto`, `BBH Bartle`)

## Getting Started

No installation or build step is required.

1. Open `index.html` in any modern web browser.
2. Or serve the folder locally, for example:

   ```bash
   npx serve .
   ```

## How to Play

1. Click one of the three buttons: 🪨 Rock, 🗒️ Paper, or ⚔️ Scissors.
2. The computer makes a random choice and the score updates.
3. The first player to score 10 points wins the game.
4. After the winner is shown, the board resets automatically for a new game.

## Project Structure

```
rock-paper-scissor/
├── index.html   # Game layout and controls
├── style.css    # Styling and button hover effects
├── scipt.js     # Game logic and score handling
└── Screenshot 2025-12-26 at 21.10.23.png
```

## Implementation Notes

- The computer's move is selected from an array using `Math.random()`.
- Score updates and winner checks run after every player move.
- `resetGame()` clears both scores and the winner message.

## Possible Improvements

- Rename `scipt.js` to `script.js`
- Show the computer's chosen move (for example, "Computer chose Paper")
- Fix the scoring conditions so each round is awarded to the correct winner
- Add a manual restart button
- Make the layout fully responsive on small screens
