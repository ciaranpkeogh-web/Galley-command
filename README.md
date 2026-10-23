# Galley Command

A phone-first kitchen production prototype built with React, TypeScript and Vite. The Italian Station menu is transcribed from the supplied Monday 26th lunch photograph. No backend or API keys required.

## Run locally

Use Node 22.18+ (or Node 24).

```sh
npm ci
npm run dev
```

## Deploy to Netlify

Import this GitHub repository in Netlify. The included `netlify.toml` sets the build command to `npm run build` and publish directory to `dist`. No environment variables needed. Alternatively, run `npm run build` and drag the `dist` folder into Netlify Drop.

## Features

- Responsive production board with search and filters
- Dish sheets with interactive prep checklists, risks, notes and scaled ingredients
- Five prep timeline phases and an adjustable yield planner
- Covers from 50–500 and selectable contingency
- Browser-local progress and settings; reset demo control
- Keyboard-accessible modal with native focus containment and Escape support

## Structure

`src/data/menu.ts` holds the menu and explicitly illustrative operational data. `src/lib/production.ts` holds scaling logic. `src/components/` holds dish cards and detail sheets. `src/App.tsx` composes navigation, board, timeline and yield planner. `src/styles.css` contains responsive styling.

## Data assumptions

The photograph provides dish names, Monday 26th, lunch and the heading “Italian Stallion”. The app uses the requested “Italian Station” title. October 2026 and the 12:00 service schedule are demo choices. “Beef Tagliatta”, “Frito Misto” and “Vegetable Melancholy” retain source wording. The ambiguous standalone “ADDJ” is excluded until clarified. Daily soup and dessert remain unspecified.

Recipes, ingredients, weights, uptake rates, tasks, status, allergens and risks are mock data, not extracted recipe specifications. Finished yield uses estimated portions × finished grams per portion. Ingredient weights use separate recipe gram estimates. GN counts use per-dish mock kg capacities for a GN 1/1 tray; validate depth, fill and density locally. Allergens are indicative and incomplete until actual recipes and suppliers are reviewed. The vegetarian filter groups likely vegetarian choices and requires ingredient/equipment verification.

Progress is saved only in the current browser, not shared between devices or staff. Google Fonts is optional; system fonts work without it. There is no menu import, authentication, live collaboration or food-safety monitoring in this prototype.

## Validation

```sh
npm test
npm run build
```

Next steps: confirmed recipes and yields, equipment capacity planning, shared persistence and menu import.

