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
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) & [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page): styling and components library
- [MDB](https://mdbootstrap.com/docs/react/): UI kit
- [SASS](https://sass-lang.com/documentation/): CSS preprocessor
- [Redux](https://redux.js.org/introduction/getting-started): State management
- [React Router](https://reactrouter.com/en/main/start/tutorial): Routing library
- [Vitest](https://vitest.dev/guide/): Testing library

## Project Structure (TBA)

```markdown
Weather-Forecast-frontend/
|** src/
| |** assets/.................... - dynamic assets
| |  
| |** components/................ - shared components
| | |** componentsA/
| | | |** ComponentA.tsx
| | | |** ComponentA.test.ts
| | | |** ComponentA.scss
| | | |** SubComponentB.tsx
| | | |** ...
| | | |** index.ts........... - exporting modules
| | |** ...
| |  
| |** constants/................. - constants used throughout the project
| | |** ConstantA.ts ..........
| | |** ConstantB.ts ..........
| | |** ...
| |  
| |** hooks/..................... - custom hooks
| | |** useHookA.ts ...........
| | |** useHookB.ts ...........
| | |** ...
| |  
| |** models/.................... - types and interfaces (still working on it)
| |  
| |** routes/.................... - routes
| | |** router.ts ............. - router config
| |  
| |** scss....................... - styling
| | |** styles.scss............ - global styling
| | |** theme.scss............. - theming variables
| |  
| |** stores/.................... - state management store and slices
| | |** store.ts.............. - the whole project's store
| | |** itemASlice.ts.........
| | |** itemBSlice.ts.........
| | |** ...
| |  
| |** views/..................... - page-level components
| | |** ViewA/
| | | |** ViewA.tsx
| | | |** ViewA.test.ts
| | | |** ViewA.scss
| | | |** SubComponentB.tsx
| | | |** ...
| | | |** index.ts........... - exporting modules
| | |** ...
| |  
| |** utils/..................... - utilities/helpers
| |  
| |** main.tsx................... - main js entry
| |  
|** mocks/......................... - mock data
|** |** entityX/
|** | |** entityXData.ts
|** |** ...
|** tests/......................... - testing setup
|** public/........................ - public assets
|** index.html..................... - HTML entry
|** postcss.config.js.............. - Postcss config
|** tailwind.config.js............. - Tailwind and styling config
|** vite.config.js................. - Vite config
|** ... (other config files)
|** DEVELOPMENT.md ................ - Development guides and conventions
|** LICENSE
|** README.md
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
