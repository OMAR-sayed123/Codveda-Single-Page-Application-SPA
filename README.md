# Northstar Studio

Level 2 Task 1: Single Page Application for the Codveda Front-End Development internship.

Northstar is a modern digital agency website built with React, JavaScript, React Router, React Context API, and CSS. It is a real client-side SPA: navigation between Home, About, Services, and Contact happens through React Router without full browser reloads.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/       Shared Navbar, Footer, Button, headings, cards, and transitions
├── context/          AppContext for menu, theme, and contact submission state
├── pages/            Home, About, Services, and Contact route views
├── App.jsx           Router and shared application shell
├── main.jsx          React entrypoint and provider setup
└── index.css         Responsive visual system and component styles
public/
└── favicon.svg
```

## Routes

- `/` Home: hero, introduction, services preview, point of view, and CTA
- `/about` About: story, mission/values, vision, and statistics
- `/services` Services: four service areas, details, and process
- `/contact` Contact: validated form with global success state

## Implementation notes

- `BrowserRouter`, `Routes`, `Route`, `NavLink`, and `Link` provide SPA navigation.
- `AppContext` manages the responsive menu, light/dark theme toggle, and submitted contact state. The contact success state remains available while navigating.
- The contact form validates name, email, and message on the client and exposes accessible invalid states and errors.
- Layouts use a mobile-first responsive CSS system with keyboard-visible focus states, semantic headings, labels, reduced-motion support, and no horizontal overflow.
- Page titles and the global description are included in the HTML shell; semantic page headings support basic SEO.

## Codveda requirements checklist

- [x] React SPA implemented
- [x] At least 3 pages implemented
- [x] React Router implemented
- [x] Navigation without full page reload
- [x] State management implemented using React Context
- [x] Fast navigation
- [x] Smooth transitions
- [x] Responsive design
- [x] Production-quality UI
- [x] Project tested with a production build and browser flow checks
- [x] README created
- [x] Ready for deployment to Vercel or Netlify
