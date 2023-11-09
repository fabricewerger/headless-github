# UI Component Library, Design System Integration & Headless Tooling

This is a Youwe internal project to outline the styling, scripting and tooling required for the integration of a design system into a headless project.

This is a Next.js 13 instance with Typescript, Tailwind and Storybook support.

## Installation

### 1. Use the correct version of node and yarn

Please be aware NPM is not allowed, use Yarn instead. Please install [Node Version Manager](https://github.com/nvm-sh/nvm) then run in the root folder to run the correct version of Node.js:

`nvm use`

### 2. Install dependencies

Install: `yarn install`

### 3. Generate tokens

Generate tokens: `yarn run generate:tokens`

### 4. Generate types from Graphql

Generate schema: `yarn generate:schema`

### 5. Lift off :rocket:

Launch Storybook: `yarn storybook`
Start developing: `yarn dev`

## Development

### Git Commit Hooks

There are two commit hooks:

- Git commit message, by `commitlint` with JIRA-rules, see [https://github.com/Gherciu/commitlint-jira] for more information
- Lint staged files with `lint-staged`, which runs `TSC` (TypeScript Compiler) to check if everything compiles.
  `eslint` to check the javascript/typescript files code quality. And `prettier` to format the files that are being comitted.

## Figma

The Figma file linked to this project is [Youwe Design System](https://xxx)

## Figma Tokens

Export tokens from a Figma file using the plug-in "Design Tokens". The generated Json file should be copied to the [`tokens` folder](./styles/_tokens/).

Run `yarn run generate:tokens` to generate the following three sets of CSS attributes, using the [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/):

1. CSS variables
2. SCSS variables
3. Json

## Tooling

### Tailwind

The generated design tokens are imported into the [Tailwind config file](./tailwind.config.js) to extend the standard Tailwind CSS classes.

### Storybook

### GraphQL & Apollo Client

## Application Architecture

In order to keep this application fast, adaptable, and easy to work with, it's codebase is structured in a way which enforces this.

### Folder structure

- **build** | Configuration for the CI Pipeline (see the CI Pipeline chapter)
- **src** | The actual application (see the chapter 'App structure' for more information )
- **public** | Static assets which are copied to the root of the application when the app is build. It therefore contains things like the favicon, robots.txt, webmanifest etc.

### App structure

- **graphql** | All Graphql fragments, queries, mutations and generated types are contained here
- **lib** | Re-usable hooks, contexts and utility functions that are abstracted away from components
- **pages** | The pages NextJS routes to
- **styles** | Anything styling-related should be placed in this folder
- **ui** | All components that are used throughout the application are placed in these folders, with a corresponding Storybook 'story'. A short description of the type of component can be found in the index.ts file at the root of every folder

## General Principles

More information can be found [Here](https://confluence.youweagency.com/display/YHF/Component-based+development)

## Built With

- [NextJS](https://nextjs.org/) - A framework build on top of react which allows for easy SSR
- [Apollo](https://www.apollographql.com/) - A library to simplify communication over GraphQL
- [TailwindCSS](https://tailwindcss.com/) - A utility based CSS framework

## Authors

- **Nathan Clare** [<n.clare@youweagency.com>]
- **Fabrice Werger** [<f.werger@youweagency.com>]
- **Jasper Zeinsta** [<j.zeinstra@youweagency.com>]
