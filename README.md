# elly-app-frontend

> Vue + Axios front end for Elly's MVP application.

## Project Setup

If you do not have Node Package Manager (`npm`) installed, you can download it using Homebrew in the terminal: `brew install npm`. Once you have `npm` installed, run the following commands from the root directory of this repo to set up the project and start the development server.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

### Build and Test

Use the following commands to build, test, and minify the project for production.

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Editor Setup

To keep things consistent, use the Atom editor ([download here](https://atom.io/)). Once downloaded, you need to install and set up the GitHub and Vue.js plugins. The GitHub plugin will allow you to branch and merge without using the command line, and Vue plugin will give your editor the proper syntax highlighting for `.vue` files.

### Git Support

The Atom editor comes with VCS (Version Control Software) support. On the bottom righthand side of the editor, you can change your current branch. It likely says "master" when you first clone the project. And by clicking the farthest righthand button on the bottom toolbar, you can open the Git sidebar to view your changes, commit, or make Pull Requests.

### Vue Plugin

When you start up Atom for the first time, the righthand sidebar has a section for "Install a Package". Click the blue button, "Open Installer". In the installer, search for "language-vue", authored by hedefalk. Install the package.

## Notes

- Bootstrap 4 was installed and configured according to [these instructions](https://medium.com/@BjornKrols/integrating-and-customising-bootstrap-4-in-vue-js-cbc29ba7688e).
	- The Bootstrap JS and jquery is not installed as of 4/3/18. See warnings below.
```
npm WARN bootstrap@4.0.0 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
npm WARN bootstrap@4.0.0 requires a peer of popper.js@^1.12.9 but none is installed. You must install peer dependencies yourself.
```
