
/**
 * ***************************************************************
 * NPM notes
 * ***************************************************************
 * -> NPM install for the project dependencies after cloning from git(Because if the node_modules are not found in project, it won't run the project)
 * ***************************************************************
 * -> node_modules always in .gitignore
 * ***************************************************************
 * -> Also for package.json remember to npm init for package.json 
 * ***************************************************************
 * -> For dev packages installation: This will be added to the dev dependencies . - D(develop) option is actually small form for save-dev option.
 * npm i package_name -D  
 * ***************************************************************
 * -> For global packages installation: This will be added to the global dependencies in global npm folder(In Windows, there needed some fix first for npm to find it globally, using following link: https://stackoverflow.com/questions/17975999/i-can%C2%B4t-install-nodemon-globally-nodemon-not-recognized). - g option is actually small form for global
 * 
 * npm i package_name -g
 * ***************************************************************
 * -> The project starting point file will be main option in package.json file (in our case, index.js)
 * ***************************************************************
 * -> npm run dev:  Way to run project in dev mode. 
 * It used to run the corresponding script from the scripts section of your package.json file. Command is usually used to start your development server in watch mode, so that when changes to your code base are made, the server gets automatically refreshed.
 * ***************************************************************
 * -> npm rm package name -D  : Remove package from Dev dependencies
 */


//Date Function library 
const { format } = require('date-fns');

//UUID libary import
const {v4: uuid} = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());