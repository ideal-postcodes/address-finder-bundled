<h1 align="center">
  <img src="https://img.ideal-postcodes.co.uk/Address%20Finder%20Logo@3x.png" alt="Ideal Postcodes Address Finder Bundle">
</h1>

> JavaScript browser bundles for the Address Finder library

![CI](https://github.com/ideal-postcodes/address-finder-bundled/workflows/CI/badge.svg)
![Cross Browser Testing](https://github.com/ideal-postcodes/address-finder-bundled/workflows/Cross%20Browser%20Testing/badge.svg)
![Release](https://github.com/ideal-postcodes/address-finder-bundled/workflows/Release/badge.svg)

[![npm version](https://badge.fury.io/js/%40ideal-postcodes%2Faddress-finder-bundled.svg)](https://badge.fury.io/js/%40ideal-postcodes%2Faddress-finder-bundled)
[![jscdn](https://badgen.net/jsdelivr/v/npm/@ideal-postcodes/address-finder-bundled)](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@ideal-postcodes/address-finder-bundled)](https://bundlephobia.com/result?p=@ideal-postcodes/address-finder-bundled)

This package exports polyfilled, minified copies of `address-finder` in various formats available on npm and various JavaScript CDNs. It can be readily [dropped in](#usage) on a page without transpilation of `address-finder`.

If you intend to incorporate the browser client in your own bundle, please use [`core-browser`](https://github.com/ideal-postcodes/core-browser) in your `package.json`.

## Download

### Download Latest Bundle

- [address-finder.js](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/address-finder.js)

Serving your own versioned copy is recommended. If a JavaScript CDN is used (e.g. jsDelivr, cdnjs), be sure to pin the version.

Use [address-finder.esm.js](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/address-finder.esm.js) if you need a ES Module compatible build.

### ⚠️ Pinning Versions

It is important you pin your bundle version in production. Pulling directly from latest **will** cause your integration to fail at some point in the future.

For instance, follow the instructions on [jsdelivr.com/address-finder-bundled](https://www.jsdelivr.com/package/npm/@ideal-postcodes/address-finder-bundled) to pin a major version in production.  E.g.

```html
<script src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@4"></script>
```

## Links

- [Bundles Overview](#bundles-overview)
- [Usage](#usage)
- [Documentation](https://address-finder.ideal-postcodes.dev/)
- [npm](https://www.npmjs.com/package/@ideal-postcodes/address-finder-bundled)
- [GitHub Repository](https://github.com/ideal-postcodes/address-finder-bundled)

## Documentation

### Bundles Overview

#### address-finder.js

- **UMD compatible**
- Transpiles address-finder to target Internet Explorer 11 as minimum browser version
- Default export of the npm module

#### address-finder.esm.js

- **ES Module compatible**
- Targets browsers with [ES Module support](https://caniuse.com/#search=module)
- Default ES Module export

### Usage

#### UMD

```html
<script src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@4"></script>

<script>
  IdealPostcodes.AddressFinder.setup({
    apiKey: "iddqd",
    inputField: "#line_1",
    outputFields: {
      line_1: "#line_1",
      line_2: "#line_2",
      line_3: "#line_3",
      post_town: "#post_town",
      postcode: "#postcode",
    },
  });
</script>
```

#### ES Module

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@4/dist/address-finder.esm.js"></script>

<script type="module">
  import { AddressFinder } from "https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@2/dist/address-finder.esm.js";
  AddressFinder.setup({
    apiKey: "iddqd",
    inputField: "#line_1",
    outputFields: {
      line_1: "#line_1",
      line_2: "#line_2",
      line_3: "#line_3",
      post_town: "#post_town",
      postcode: "#postcode",
    },
  });
</script>
```

### Client Documentation

This package is a transpiled copy of [`ideal-postcodes/address-finder`](https://www.npmjs.com/package/@ideal-postcodes/address-finder).

For a complete list of client methods, including low level resource methods, please see the [address-finder documentation](https://address-finder.ideal-postcodes.dev/#documentation)

## Run Examples

Build, and serve example pages locally:

```bash
npm run build && \ # Build JS bundles
npm start          # Start http server
```

For UMD demo visit [http://localhost:8081/example/umd.html](http://localhost:8081/example/umd.html)

For ES module demo visit [http://localhost:8081/example/esm.html](http://localhost:8081/example/esm.html)
