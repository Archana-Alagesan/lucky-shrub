# 🌿 Lucky Shrub — Gardening & Landscaping Landing Page

> **[Live Demo](https://archana-alagesan.github.io/lucky-shrub/)** 

A fully responsive, animated multi-section landing page for a fictional gardening and landscaping business. Built with pure **Vanilla JavaScript, CSS3 animations, and HTML5** — no frameworks, no dependencies.

---

## Screenshot

<img width="1508" height="848" alt="image" src="https://github.com/user-attachments/assets/4b6295ea-bee8-4351-aa8d-8333bf5ec456" />

---

##  Features

- **Sticky Navigation Header** — Smooth fixed header on scroll with shadow elevation effect
- **CSS Hover Animations** — Interactive hover effects on service cards, pricing packages, nav links, and CTAs
- **Service Filter** — Dynamic JS-powered filtering to browse services by category
- **Fully Responsive** — Mobile-first layout using CSS Flexbox and Grid
- **Multi-Section Layout** — Home, Services, About, Pricing, Blog, and Contact sections
- **Semantic HTML5** — Proper use of `<nav>`, `<section>`, `<article>`, `<footer>` for accessibility

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Animations, Flexbox, Grid, responsive design |
| Vanilla JavaScript | Scroll behaviour, filter logic, DOM manipulation |
| GitHub Pages | Hosting & deployment |

---

## CSS Animations & Interactions

This project was built specifically to demonstrate practical, production-ready CSS animation techniques:

### 1.  Hover Effects
- Service cards lift with `transform: translateY()` and `box-shadow` transitions
- Pricing cards scale smoothly on hover with `transform: scale()`
- Navigation links animate with an underline slide-in using `::after` pseudo-element
- CTA buttons transition background colour and shadow on hover

### 2. Scroll Fixed Header
- Header switches from transparent to solid with background and shadow using a JavaScript scroll event listener
- CSS `transition` ensures the change is smooth, not jarring
- Implemented with `position: fixed` and `top: 0` to keep nav visible at all times

### 3. Category Filter
- JavaScript `filter` logic shows/hides service cards by category
- Active filter button highlights with CSS class toggling
- Smooth `opacity` and `display` transitions for filtered items

---

## What I Learned

- Writing **pure CSS animations** without any animation libraries — understanding `transition`, `transform`, `keyframes`, and `animation` properties deeply
- Managing **scroll events** in Vanilla JS for performant UI behaviour
- Implementing **dynamic DOM filtering** without React or Vue state management
- Structuring a **multi-section landing page** with clean, maintainable CSS
- Understanding when **vanilla JS is the right tool** — no framework overhead for a static marketing page

---

## Getting Started

No build step needed — just open in browser!

```bash
# Clone the repository
git clone https://github.com/Archana-Alagesan/lucky-shrub.git

# Navigate into the project
cd lucky-shrub

# Open in browser
open index.html
```

Or simply visit the [live demo](https://archana-alagesan.github.io/lucky-shrub/) directly.

---

## Project Structure

```
lucky-shrub/
├── assets/
│   ├── logo.png
│   ├── leaf-icon.png
│   └── (images for services, blog, pricing...)
├── index.html
├── styles.css
└── script.js
```

---

## Author

**Archana Alagesan** — Senior Front-End Developer
[GitHub](https://github.com/Archana-Alagesan) · [LinkedIn](https://www.linkedin.com/in/archana-alagesan/)

---

## License

This project is open source and available under the [MIT License](LICENSE).
