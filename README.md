# What is it?

Custom element `<sbks-button>` or `SBKSButton` in JS of button written on top of Google Closure Library.

# Usage

```
<html>
  ...
  <sbks-button>Click</sbks-button>
  ...
</html>
```

More in build/examples/.

# Install

- clone repository
- `npm install`

# Edit

- `gulp watch`
    - compile \*.coffee in src/ to \*.js
    - compile component in src/ and third-party JS with Closure Compiler to temp location
    - concat custom element polyfill and compiled version of component together to build/component.js
    - clean temp files
    - generate manifest

# Project structure

- src/ - component and its direct dependencies
- build/ - builded files
  - examples/ - examples in form of html samples
  - component.js - component ready to include to your document
  - manifest.json - manifest with component's information