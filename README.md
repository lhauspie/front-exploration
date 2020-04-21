# Source of this project
https://www.alsacreations.com/tuto/lire/1754-debuter-avec-webpack.html

Thank's ZeFifi.

# My notes

Why do we need to install webpack *and* webpack-cli globally ???

If I add the `watch` script in `package.json`, the webpack-cli needs to be installed locally !! But why ???


## Babel

Babel is to transpile the ES6+ code to a JS code that is compatible with older version of browsers.

Well, I've this error message when I try to watch my source and using Babel:
```bash
$ npm run watch
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
```

I installed babel by using the following command:
```bash
npm install --save-dev babel-loader babel-core
```

But it seems that babel core needs to be installed by using `@babel/core` instead of `babel-core`.
What's the difference ? Is it a new standard to define project whith sub project ?
=> Just RTFM: https://docs.npmjs.com/misc/scope
```bash
npm install [<@scope>/]<name>
```


### babel-loader

This package allows transpiling JavaScript files using Babel and webpack.
https://www.npmjs.com/package/babel-loader

### @bable\polyfill

This package provides polyfills necessary for a full ES2015+ environment.

> As of Babel 7.4.0, this package has been deprecated in favor of directly including `core-js/stable` (to polyfill ECMAScript features)
> and `regenerator-runtime/runtime` (needed to use transpiled generator functions)

So I did that to try but I lost 1h30 to find that it was missing a `var` or `let` in my ES6 source code (src/index.js).

Why everything was working well by using @babel/polyfill when it's not working with core-js ?!?!?!

