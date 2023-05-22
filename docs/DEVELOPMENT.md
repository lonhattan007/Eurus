# Development of the Eurus

# Prerequisites

- Node v16; it is recommended to install Node with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Bootstrap

- Clone this project

- Run the following commands inside the project folder:
  ```bash
  nvm install && nvm use
  npm install
  npm run dev
  ```

# Workflow

- To work on a new feature, checkout a new branch from the `main` branch on your local machine:

  ```bash
  git checkout -b <branch-name>
  ```

  - Branches' names should be in the form of `<prefix>/<functionality>`, for example `ft/login`. See more in the `Convention` section.

- Before committing, always reformat and check linting rules:

  ```bash
  npx prettier --write .
  npm run lint

  ```

- To push changes from that new branch to the repo for the first time:

  ```bash
  git push -u origin <branch-name>
  ```

  - `<branch-name>` here is the name of the respective branch on the Github repo, and it should be similar to the local branch name.

- After that you can just push changes simply with `git push`.

- When a feature is ready for merging, create a `pull request`.

- **NEVER PUSH TO THE MAIN BRANCH**

# Tech

## Tech stacks

- `Node 16 & npm`: Runtime & package manager
- `Vite`: Module bundler
- [React](https://reactjs.org/docs/getting-started.html): Core UI library
- [Tailwind CSS](https://tailwindcss.com/docs/installation): Styling library
- [Redux](https://redux.js.org/introduction/getting-started): State management
- [React Router](https://reactrouter.com/en/main/start/tutorial): Routing library
- [Vitest](https://vitest.dev/guide/): Testing library

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
|   |__ main.tsx................... - main app entry
|   |   
|__ docs/.......................... - documentations
|__ |__ DEVELOPMENT.md ............ - Development guides and conventions
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
|__ LICENSE
|__ README.md
```

## Conventions

### Commits

- Commit messages should be in the form `<action> + <target>`, eg. _updated configs_
  - `<action>`: in past tense, eg. _added_, _updated_
  - `<target>`: files, packages, or features, eg. _side bar component_, _Bootstrap_, _assign task module_

### Naming

- Names should be in English

- Use meaningful names: they should describe what they represent, their roles, their functionalities, etc.

- Avoid arbitrary names: a, b, c, x1, x2, ...

- Names should be less than 5 words

- Careful with the use of some words representing a set of multiple objects: _list_, _set_, ...

  ```javascript
  let userList = [...] // not readable
  let users = [...] // better
  ```

- Avoid noise words: _the_, _a_, _an_, _data_, _info_, _manager_, _variable_, ...

- Variables and functions should be named in camel case, eg. _selectedStaffs_, _customHook_

- Constants should be named in snake case with all caps, eg. _API_KEY_

- Components and their respective files should be named with Pascal case, eg. _AddStaffModal_, _AddStaffModal.jsx_.

- Branches should be named in the form of `<prefix>/<functionality>`, for example `ft/login`. Some conventional prefixes:

  - ft: Working on a new feature
  - fix: Fixing errors or refactoring code
  - pkg: Adding packages
  - doc: Adding documentations

- TBA.

### Components

- The preferred way of writing components is functional components.

- It is highly recommended to use pre-installed components from libraries and UI kits rather than build one from scratch. This saves up tons of time.

- TBA.

### Other Clean Code Practices

- No hard coding

- Avoid magic numbers, assign them to constants or variables with comments instead

- No double negative conditions

- Avoid too much nesting

- TBA.

### Testing

- Unit tests should be made for each components.

- Testing can be done with

  ```bash
  npm run test
  ```

  or

  ```bash
  npm run coverage
  ```

- TBA.

## Environment Variables
