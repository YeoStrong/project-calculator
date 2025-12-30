# Calculator

This is the final project of **The Odin Project's Foundations course**. While the UI is kept simple, I focused heavily on handling various edge cases and ensuring a smooth user experience.

## [Live Demo](https://yeostrong.github.io/project-calculator/)

## Key Features

- **Operation Chaining**: Supports continuous calculations (e.g., `1 + 2 + 3`) by automatically calculating the intermediate result when an operator is pressed.
- **Robust Decimal Handling**: Prevents multiple decimal points in a single number and automatically adds a leading zero when a number starts with a dot (e.g., `.5` → `0.5`).
- **Division by Zero Protection**: Displays a snarky error message and resets the state when a user attempts to divide by zero.
- **Smart Result Display**: Results are rounded up to 7 decimal places to maintain a clean layout and prevent overflow.
- **Correction Tools**: Includes **Clear (AC)** for a full reset and **Backspace (Del)** for minor input corrections.

## Tech Stack

- Vanilla JavaScript
- HTML5 / CSS3
