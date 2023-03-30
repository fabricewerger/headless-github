# UI Component Library, Design System Integration & Headless Tooling

This is a Youwe internal project to test various techniques and tools for the integration of a design system into a headless project.

This is a Nextjs 13 instance with Typescript, Tailwind and Storybook support.

## Installation

### 1. Use the correct version of node and npm

Please be aware NPM is not allowed <br />use npm Please install [NVM](https://github.com/nvm-sh/nvm) then run in the root folder<br /> Get right Yarn version:
nvm use

### 2. Install dependencies

Install: yarn install

### 3. Generate tokens

Generate tokens: yarn run generate:tokens

### 4. Generate types from Graphql

Generate schema: yarn

### 5. Lift off :rocket:

Run Storybook: yarn storybook
Begin developing: yarn dev

## Figma

The Figma file associated with this project is [Youwe Design System](https://xxx)

## Figma Tokens

Export tokens from a Figma file using the plug-in "Design Tokens". The generated Json file should be copied to the [`tokens` folder](./styles/_tokens/).

Run `yarn run generate:tokens` to generate the following three sets of CSS attributes, using the [Amazon style dictionary](https://amzn.github.io/style-dictionary/#/):

1. CSS variables
2. SCSS variables
3. Json

## Tailwind

The generated design tokens are imported into the [Tailwind config file](./tailwind.config.js) to extend the standard Tailwind CSS classes.

## UI Component Library

## Storybook

## GraphQL & Apollo Client

## General Principles

- Figma is the Source of Truth.
- xxx
