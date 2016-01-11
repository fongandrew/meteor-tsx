Meteor + TypeScript + React
===========================
Boilerplate for very simple TypeScript + Meteor + React combination.

Rather than use Meteor Isobuild packages directly, we just use `tsc` directly
to create concatenated bundles (`client/bundle.js` and `server/bundle.js`)
which Meteor then loads into its own build process. This lets us easily control
which version of TypeScript we're using and avoid issues like
https://github.com/meteor-typescript/meteor-typescript-compiler/issues/16
related to how Meteor handles file load order. This setup doesn't do anything
fancy with modules and assumes we're following the pre-Meteor 1.3 practice of
simply sticking things into the global space and using Meteor-wrapped modules
instead of plain NPM modules.

Getting Started
---------------
* `npm install` installs pre-requesites.
* `npm run start` starts TypeScript watcher and Meteor

Config
------
Bundles are controlled by the `tsconfig.json` files in their respective
directories. They work as they normally do with TypeScript, but there are some
caveats:
* `target: es6` - This is necessary to ensure compatability with Meteor's
`ecmascript` package. If you remove `ecmascript`, use `target: es5` 
* `inlineSourceMap: true` and `inlineSources: true` create TypeScript source
maps within the actual bundle itself. This helps Meteor find and load source
maps for development.
* `jsx: react` - This means TypeScript is compiling the JSX rather than Meteor
itself. You can try changing this by using `jsx: preserve`, but you'll have to
change the extension of the bundle file from `.js` to `.jsx`.
