esbuild-demo
====

https://esbuild.github.io

### Goals

- [x] Use latest ES features
- [x] Separated into module files
- [x] Bundled for browser
- [x] Compiles to older ES version targets
- [x] Tree shaking
- [x] Minification
- [x] Sourcemap creation
- [ ] Does not import library dependencies - TODO
- [x] Can use in "watch" mode
- [ ] Support Typescript - TODO
- [x] Support JSX / React


[ECMAScript versions to browser targets](https://github.com/evanw/esbuild/issues/121#issuecomment-646956379)

> The iife format will automatically be enabled when no output format is specified, bundling is enabled, and platform is set to browser (which it is by default)

```
npx esbuild area.js --bundle --outfile=area.min.js --target=es2018 --global-name=charts

npx esbuild area.js --bundle --minify --sourcemap --outfile=area.min.js --target=es2018 --global-name=charts
```

#### Watch

https://esbuild.github.io/api/#watch
