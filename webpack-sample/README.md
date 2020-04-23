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


## SASS

The under-steroid CSS.

I understand now why I eard some trolls about the JavaScript world that is moving too fast to follow.
By following the tutorial, I h'av to install the `extract-text-webpack-plugin` dependency but I have a warning:
```bash
npm WARN deprecated extract-text-webpack-plugin@3.0.2: Deprecated. Please use https://github.com/webpack-contrib/mini-css-extract-plugin
npm WARN extract-text-webpack-plugin@3.0.2 requires a peer of webpack@^3.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN webpack-sample@1.0.0 No repository field.
```

So by searching what's going wrong, I found that since the webpack v4 this dependency is not compatible and has to be replaced by `mini-css-extract-plugin`.

OK, let's do this!

Well, by copying/pasting the console log about `extract-text-webpack-plugin` I read that:
```bash
deprecated extract-text-webpack-plugin@3.0.2: Deprecated. Please use https://github.com/webpack-contrib/mini-css-extract-plugin
```
Well, it's pretty clear, no need to search :D


## Dev Server

### Webpack Dev Server
The more I get into the tutorial, the more I ask to myself, how do we ensure compatibility of dependencies?  
Now I end up with these versions of dependencies:
```bash
├── webpack@4.43.0
├── webpack-cli@3.3.11
└── webpack-dev-server@3.10.3
```
It seems to me that the distribution of versions is very disparate, even though we're talking about webpack.  
How do I know these versions are compatible?  
It's not with the small percentage of use I have that I'll be able to realize that these versions are incompatible!


### Dev Tool

In the tuto, we're pleased to add this line in the webpack.config.js:
```JavaScript
      devtool: "eval-source-map"
```
But with this line of code, the bundle grows from 126Kb to 1.18Mb: Why?

Indeed, this configuration is made to allow a fast rebuild in defavor of the size and the duration of the first build.

As we're in developpment it's not so bad as long as this bundle doesn't go live.


### CSS Hot Loader

In the tuto, we're pleased to install the css-hot-loader as a dev dependency.  
But I tried to update my `assets/stylesheets/style.scss` and the Hot Module Reload worked without this dependency.  
May be, it's a transitive dependency of `webpack-dev-server`?

Don't know and don't find the information.  
The [documentation about HMR with stylesheets](https://webpack.js.org/guides/hot-module-replacement/#hmr-with-stylesheets)  
seems to say that we only need to install `style-loader` and `css-loader` but  this documentation is talking about `.css` files, not `.scss` files.


## Minifying the JavaScript files

This tuto asks to install an additionnal dependency:
```bash
npm install uglifyjs-webpack-plugin --save-dev
```
So I decided to make some research before doing so and I was right because I found this [documentation about Minifying](https://webpack.js.org/guides/production/#minification) where they say:
> Webpack v4+ will minify your code by default in `production` mode.


## Environment Production vs Developpment

This tuto says that we need to add a dev dependency one more time:
```bash
npm install --save-dev cross-env
```

But by searching how to minify with webpack, I found this [documentation](https://webpack.js.org/guides/production/),
so I will follow the guide of webpack because I think this latter is more up to date.

Pretty simple, nothing bad.
