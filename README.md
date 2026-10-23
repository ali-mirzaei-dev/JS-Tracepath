# Scroll Progress Indicator | SVG Path Fill on Scroll

A responsive scroll-driven progress indicator built with HTML, Tailwind CSS, and vanilla JavaScript. The project renders an SVG path that fills progressively as the user scrolls, with a pulsing marker that travels along the path using `getPointAtLength()` — no animation libraries required.

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Author](#author)

## Demo

[Live Demo](https://ali-mirzaei-dev.github.io/JS-Tracepath/)

## Screenshots


| Desktop layout | Mobile layout |
|---|---|
| ![Empty State](assets/Images/Empty.png) | ![Filled State](assets/Images/Filled.png) |

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic markup and SVG path structure |
| Tailwind CSS | Responsive layout, glass-morphism panel, and visual styling |
| Vanilla JavaScript | Scroll tracking, `stroke-dashoffset` updates, and marker positioning via `getPointAtLength()` |

## Project Structure

```text
Scroll-Progress/
│
├── assets/
│   ├── Font/
│   │   ├── FontSocials/
│   │   └── font1/
│   │
│   ├── Images/
│   │
│   ├── JavaScript/
│   │   └── main.js
│   │
│   └── StyleSheet/
│       ├── master.css
│       └── output.css
│
└── index.html
```

## How It Works

| Step | Description |
|---|---|
| Measure the path | `track.getTotalLength()` returns the full length of the SVG path once on load |
| Hide the stroke | `stroke-dasharray` and `stroke-dashoffset` are both set to `total`, making the path invisible at scroll position 0 |
| Track scroll ratio | On each `scroll` event, `progress = scrollY / (scrollHeight - innerHeight)` is computed and clamped to `[0, 1]` |
| Fill the path | `stroke-dashoffset = total * (1 - progress)` reveals the stroke from start to current position |
| Move the marker | `track.getPointAtLength(total * progress)` returns the `(x, y)` at the tip, which is applied to the circle's `cx` / `cy` |
| Pulse the marker | A CSS keyframe animates the circle's `r` attribute for a self-centering pulse effect |

## Author

**Ali Mirzaei** – Frontend Developer

- [GitHub](https://github.com/ali-mirzaei-dev)
- [LinkedIn](https://www.linkedin.com/in/ali-mirzaei-dev/)
- [Instagram](https://instagram.com/ali.mirzaei.dev)
- [Email](mailto:ali.mirzaei.kt@gmail.com)