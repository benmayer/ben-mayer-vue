# ben-mayer-app

> Places I've been. Things I've learnt

## Basics

This repository contains 3 parts for 3 different tasks:

- root
- src
- functions


### root

Responsible for the Firebase configuration, the CI/CD config (in this case GitLab), 
the Nuxt.js configuration and some file generation.

- `firebase.json` contains the hosting config and paths to the functions.
- `.firebaserc` contains the names of your Firebase projects to have multiple environments (dev, staging, prod).
- `.gitlab-ci.yml` contains the CI/CD config for GitLab.
- `npm-install.js` creates a package.json in the `functions` folder and runs the command `npm i` there.
- `npm-generate-functions-package-json.js` is used to set all needed packages in the `functions/package.json`.
- `nuxt.config.js` contains the Nuxt.js configuration used for development and production.
- `.env-template` template contains all environment variables which are needed for the development.


### src

- `src` contains the Nuxt.js app.


### functions

Contains the functions which will be deployed on Firebase Functions. This contains at least one 
function: The `ssrapp` function which is the "Nuxt server". The configuration for an express server 
using Nuxt.js as middleware are in `functions/nuxtServer.js`.

 
## Local development

1. set your local node version to 8 (use [n](https://www.npmjs.com/package/n) or [nvm](https://github.com/creationix/nvm)).
1. copy the file `.env-template` to `.env` and set your Firebase variables in the `.env` file.
1. set your Firebase project names in `.firebaserc`.
1. run `npm install` in the root folder to install all needed packages.

My goal is to have the frontend and backend running locally while development. The frontend is 
started by Nuxt and the backend is started by the `firebase-tools`. The reason for this is to be able
to develop the backend functions inside `functions/api` along with the Nuxt.js app in `src`.

⚠️ _If you only want to use Firebase Functions to host your Nuxt.js app, there is no need to have the Firebase Functions 
running locally - since all you backend calls will go to other services._


### Start Nuxt locally

To start the Nuxt app, execute in the root folder:
```$bash
npm run dev
```

It will run this command: `HOST=0.0.0.0 DEBUG=nuxt:* NODE_ENV=development nuxt`
- `HOST=0.0.0.0` enables other (mobile) devices to access the locally running app via the IP in the local network.  
- `DEBUG=nuxt:*` enables more debug output.
- `NODE_ENV=development` explicitly use dev environment.
- `nuxt` start the app in development mode

The app is running on `localhost:3000` (also accessible via the IP in the local network - Nuxt.js will print 
the IP when it starts).


### Start Firebase Functions locally

To start the Firebase Functions, execute in the root folder:
```$bash
npm run serve:build
```

This will build the Nuxt app into the folder `functions/.nuxt` and start the Firebase services
`hosting` and `functions`. Now your backend is running on `localhost:5000` and has 
also hot-reloading for changes inside the `functions` folder.

Since Nuxt.js is running in `universal` mode, the server side rendering is already active when 
accessing the backend server on `localhost:5000` - but for the local development the reason to
run Firebase Functions locally are the backend functions.

Still use `localhost:3000` to access the app while developing.


## Test SSR app locally

Start only the Firebase Functions.

Execute in the root folder:
```$bash
npm run serve:build
```

This will build the Nuxt app, copy it to the right places and start Firebase hosting and 
functions on your local machine. Now you should be able to open `localhost:5000` and see
the SSR app.


## Deployment

In this project I tried to have a real world example. There are 3 environments: 
`develop`, `staging` and `production`. Since all the hosting is done by Firebase, only 
the different projects need to be setup on https://console.firebase.google.com/ and 
the project names set in `.firebaserc`. 

The deployment is done by GitLabs CI/CD, so those 3 environments need to be setup in `.gitlab-ci.yml`.

The deployment process is very simple:
- checkout the project
- set the needed env variables
- npm install
- npm run build
- npm run deploy

  

### Set the needed env variables

By using a CI/CD runner, the env variables needed for the `build` and `deploy` process
can be set in the CI tool. Set all variables from the `.env` file for each 
environment as well as `FIREBASE_DEPLOY_KEY` for the deployment (it's the same for all environments).

The env variables used while building the app are copied to the generated Nuxt app. This means there
is no need to provide the Firebase Functions with that variables - they are already set.


### npm run build

This task instructs Nuxt to build it's app into the folder `functions/.nuxt`. When done, the content 
of the folder `./functions/.nuxt/dist/` is copied to `./public/assets`. Finally all static assets 
(`./src/static/`) are also copied in the folder `./public`.   
  
  
### npm run deploy

Deploys the build environment to the corresponding Firebase project.

