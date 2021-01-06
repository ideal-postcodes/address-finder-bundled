<h1 align="center">
  <img src="https://img.ideal-postcodes.co.uk/Address%20Finder%20Logo@3x.png" alt="Ideal Postcodes Adress Finder Bundle">
</h1>

> JavaScript browser bundles for the Address Finder library

![CI](https://github.com/ideal-postcodes/address-finder-bundled/workflows/CI/badge.svg)
![Cross Browser Testing](https://github.com/ideal-postcodes/address-finder-bundled/workflows/Cross%20Browser%20Testing/badge.svg?branch=saucelabs)

[![npm version](https://badge.fury.io/js/%40ideal-postcodes%2Faddress-finder-bundled.svg)](https://badge.fury.io/js/%40ideal-postcodes%2Faddress-finder-bundled)
[![jscdn](https://badgen.net/jsdelivr/v/npm/@ideal-postcodes/address-finder-bundled)](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/)
![Release](https://github.com/ideal-postcodes/address-finder-bundled/workflows/Release/badge.svg)

This package exports polyfilled, minified copies of `address-finder` in various formats available on npm and various JavaScript cdns. It can be readily [dropped in](#usage) on a page without transpilation of `address-finder`.

If you intend to incorporate the browser client in your own bundle, please use [`address-finder`](https://github.com/ideal-postcodes/address-finder) as your `package.json` dependency.

## Download

Latest and pinned versions of each bundle can be downloaded from [jsdelivr.com](https://www.jsdelivr.com).

We recommend serving your own versioned copy. If served from jsdelivr.com you must attach a version number.

### Download Latest Bundle

- [address-finder.umd.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/address-finder.umd.min.js)
- [address-finder.umd.ie11.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/address-finder.umd.ie11.min.js)
- [address-finder.esm.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/address-finder.esm.min.js)
- [address-finder.esm.modern.min.js@latest](https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled/dist/address-finder.esm.modern.min.js)

### ⚠️ Pinning Versions

It is important you pin your bundle version in production. Pulling directly from latest **will** cause your integration to fail at some point in the future.

Follow the instructions on [jsdelivr.com/address-finder-bundled](https://www.jsdelivr.com/package/npm/@ideal-postcodes/address-finder-bundled) to pin a specific version in production.

Example `<script>` pinned to version `1.0.1`

```
<script src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@1.0.1/dist/address-finder.umd.min.js"></script>
```

## Links

- [Bundles Overview](#bundles-overview)
- [Usage](#usage)
- [Documentation](https://address-finder.ideal-postcodes.dev/)
- [npm](https://www.npmjs.com/package/@ideal-postcodes/address-finder-bundled)
- [GitHub Repository](https://github.com/ideal-postcodes/address-finder-bundled)

## Other JavaScript Clients

- [Address Finder Library](https://github.com/ideal-postcodes/address-finder)

## Documentation

### Bundles Overview

`address-finder-bundled` ships 4 javascript bundles.

#### address-finder.umd.min.js

- **UMD compatible**
- Transpiles address-finder to target browsers with more than 0.25% marketshare according to [caniuse.com](https://caniuse.com/usage-table). This is a moving target and obselete browsers will lose support over time as new builds are created.
- Default export of the npm module

#### address-finder.umd.ie11.min.js

- **UMD compatible**
- Transpiles address-finder to target IE11 as minimum browser version. This will create a fixed target bundle over time. The tradeoff to this is larger script payload.

#### address-finder.esm.min.js

- **ES Module compatible**
- Targets browsers with [ES Module support](https://caniuse.com/#search=module)
- Default ES Module export

#### address-finder.esm.latest.min.js

- **ES Module compatible**
- No legacy browser transpilation or polyfills
- Smallest package size

### Usage

#### UMD

```html
<script src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@1.0.1/dist/address-finder.umd.min.js"></script>

<script>
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

#### ES Module

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@1.0.1/dist/address-finder.esm.min.js"></script>

<script type="module">
  import { AddressFinder } from "https://cdn.jsdelivr.net/npm/@ideal-postcodes/address-finder-bundled@1.0.1/dist/address-finder.esm.min.js";
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

This package is a transpiled copy of [`ideal-postcodes/address-finder`](https://github.com/ideal-postcodes/address-finder).

For a complete list of client methods, including low level resource methods, please see the [address-finder documentation](https://address-finder.ideal-postcodes.dev/#documentation)

## Run Examples

Build, and serve example pages locally:

```bash
npm run build && \ # Build JS bundles
npm start          # Start http server
```

For UMD demo visit [http://localhost:8081/example/umd.html](http://localhost:8081/example/umd.html)

For ES module demo visit [http://localhost:8081/example/esm.html](http://localhost:8081/example/esm.html)
