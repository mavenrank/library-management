# library-management - frontend

Create a Vite application using the following commands:

This will create the vite dependencies in the same folder and no new folder is created. This is a one time set up and not required when the source is set up off github.

`npm create vite@latest . --template react-ts`

Once everything is installed, run the below command.

`npm install`

To run the application use the below command which will look for the command in the script section of package.json.

`npm run dev`

If you clone the repo from Github, run the following command from a terminal in VS Code.

`npm install`
`npm run dev`

This will run the application locally and can be accessed at
`http://localhost:5173/`

Once you install the README will be updated with the Vite steps (show below)

Pre-requisites for the application to run

a. MySQL Server with the application database and tables, with seed data running in docker. 
b. phpMyAdmin application - a web based client for managing the application database running in docker. 
c. Python Flask REST Microservices that can be consumed by any client. See the instructions for setting up and running these services in the README of `backend` folder of this project. Once the backend is set up and the application is run, the services should be available at the base URI http://localhost:5000/api/.  This URI should be configured through env file. It is now hard coded. So ensure that the service runs at the same URL.

# React + TypeScript + Vite 

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
