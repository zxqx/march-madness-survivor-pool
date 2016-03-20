# March Madness Survivor Pool

An app for creating and managing March Madness survivor pools.

## Requirements

+ NodeJS

## Tech Stack

* [express](http://expressjs.com/) - Server HTTP framework
* [react](https://facebook.github.io/react/) - View layer
* [redux](https://github.com/reactjs/redux) - Frontend state management
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack](https://webpack.github.io/) - Module bundler
* [mocha](https://mochajs.org/) - Testing

## Setup

Install dependencies:

```sh
$ npm install
```

Start the server:

```sh
$ npm start
```

To run the server in release mode, set the environment variable `NODE_ENV=production`

## Test

Run tests:

```sh
$ npm test
```

Watch and re-run tests:

```sh
$ npm test:watch
```

## Release

Generate a release build in `dist`:

```sh
$ npm run build
```
