# Boilerplate for a react package.

# To publish to npm registery:

- `npm run build`
- Make sure to change the version in package.json
- `npm login`
- `npm publish`

# To install from git repository:

- Make sure to keep the dist folder and to not add it to gitignore. It's the most important one. It's where the code lies.
- Add the following dependency to the package.json:
  "nameOfThePackage": "git+git@github.com:FinalVossler/React-Micro-Bundle.git#master"
  or
  "nameOfThePackage": "git+https://github.com/FinalVossler/React-Micro-Bundle.git#master"
- `npm install`

# Good to know:

- I had to add this line in package.json for the types to be visible in another typescript project
  "types": "dist/index.d.ts",

# To begin testing your component with storybook:

- `npx storybook@latest init`

# Questions:

- Il se passe quoi quand on hover sur un bouton (animation ?)
- Le design des paginations des tables
- Le design d'un input lorsqu'il est disabled
- Le design d'un bouton lorsqu'il est disabled
- Le design des inputs en erreurs
- Vous n'avez pas à développer le design des dates picker et des sélecteurs
- Est ce que les colonnes seront resizables
- Ou trouver les îcones si on a besoin de plus que ce qui existe maintenant dans les maquettes
