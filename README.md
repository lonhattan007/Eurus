# Eurus - Weather Forecast Web Application

`Eurus` is the continuation of a private Bootcamp Capstone project. It aims to be a user-friendly weather forecast web application.

This is a personal and educational project to self-taught new technologies and apply better practices to the owner's software development workflow.

---

## TODOs:

- Migrate from `MDB React` to `TailwindCSS`
- Fetch APIs from third-party providers, currently `AccuWeather`
	- Better and more concise data
- Add some enhancements on UI/UX:
	- Localization
	- Icons and tooltips
	- Rearrangement of some components
- Apply CI/CDs and deploy the app
- Convert the web app to a PWA

---

## Bootstrap

### Prerequisites

- Node v16; it is recommended to install Node with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Run the project

- Clone this project

- Run the following commands inside the project folder:
  ```bash
  nvm install && nvm use
  npm install
  npm run dev
  ```

---

## Tech stacks

- `Node 16 & npm`: Runtime & package manager
- `Vite`: Module bundler
- [React](https://reactjs.org/docs/getting-started.html): Core UI library
- [Tailwind CSS](https://tailwindcss.com/docs/installation): Styling library
- [Redux](https://redux.js.org/introduction/getting-started): State management
- [React Router](https://reactrouter.com/en/main/start/tutorial): Routing library
- [Vitest](https://vitest.dev/guide/): Testing library

---

## Project Structure (TBA)

```markdown
Weather-Forecast-frontend/
|__ src/
|   |__ assets/.................... - dynamic assets
|   |   
|   |__ components/................ - shared components
|   |   |__ componentsA/
|   |   |   |__ ComponentA.tsx
|   |   |   |__ ComponentA.test.ts
|   |   |   |__ SubComponentB.tsx
|   |   |   |__ ...
|   |   |   |__ index.ts........... - exporting modules
|   |   |__ ...
|   |   
|   |__ constants/................. - constants used throughout the project
|   |   |__ ConstantA.ts ..........
|   |   |__ ConstantB.ts ..........
|   |   |__ ...
|   |   
|   |__ hooks/..................... - custom hooks
|   |   |__ useHookA.ts ...........
|   |   |__ useHookB.ts ...........
|   |   |__ ...
|   |   
|   |__ models/.................... - types and interfaces (still working on it)
|   |   
|   |__ routes/.................... - routes
|   |   |__ router.ts ............. - router config
|   |   
|   |__ stores/.................... - state management store and slices
|   |   |__  store.ts.............. - the whole project's store
|   |   |__  itemASlice.ts.........
|   |   |__  itemBSlice.ts.........
|   |   |__  ...
|   |   
|   |__ views/..................... - page-level components
|   |   |__ ViewA/
|   |   |   |__ ViewA.tsx
|   |   |   |__ ViewA.test.ts
|   |   |   |__ SubComponentB.tsx
|   |   |   |__ ...
|   |   |   |__ index.ts........... - exporting modules
|   |   |__ ...
|   |   
|   |__ utils/..................... - utilities/helpers
|   |   
|   |__ main.tsx................... - main js entry
|   |   
|__ mocks/......................... - mock data
|__ |__ entityX/
|__ |   |__ entityXData.ts
|__ |__ ...
|__ tests/......................... - testing setup
|__ public/........................ - public assets
|__ index.html..................... - HTML entry
|__ postcss.config.js.............. - Postcss config
|__ tailwind.config.js............. - Tailwind and styling config
|__ vite.config.js................. - Vite config
|__ ... (other config files)
|__ DEVELOPMENT.md ................ - Development guides and conventions
|__ LICENSE
|__ README.md
```

---

## Development

See [DEVELOPMENT.md](./docs/DEVELOPMENT.md)

---

## License

This project is [MIT Licensed](./LICENSE).
