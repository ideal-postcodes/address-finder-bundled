# [4.2.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/4.1.2...4.2.0) (2024-09-11)


### Features

* **rollup:** Add iife lib build to rollup ([78a69c4](https://github.com/ideal-postcodes/address-finder-bundled/commit/78a69c47bc73480da58b18103ee75e24ce9e31ed))

## [4.1.2](https://github.com/ideal-postcodes/address-finder-bundled/compare/4.1.1...4.1.2) (2024-09-10)


### Bug Fixes

* **AF:** Bump AF to version 4.6.2 ([1c8af59](https://github.com/ideal-postcodes/address-finder-bundled/commit/1c8af59a86ac4fc116be9ebd4235098082345698))

## [4.1.1](https://github.com/ideal-postcodes/address-finder-bundled/compare/4.1.0...4.1.1) (2024-05-02)


### Bug Fixes

* **address-finder:** Bump version to 4.5.0 ([#512](https://github.com/ideal-postcodes/address-finder-bundled/issues/512)) ([38be73b](https://github.com/ideal-postcodes/address-finder-bundled/commit/38be73be3297facb772a9c07361a41fd9e7baa5a))

# [4.1.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/4.0.1...4.1.0) (2022-08-09)


### Features

* **Address Finder 4:** Upgrade to Address Finder 4 ([#438](https://github.com/ideal-postcodes/address-finder-bundled/issues/438)) ([e477a89](https://github.com/ideal-postcodes/address-finder-bundled/commit/e477a89717df54ffae5a558a263a12f372f5cbf4))

## [4.0.1](https://github.com/ideal-postcodes/address-finder-bundled/compare/4.0.0...4.0.1) (2022-03-22)


### Bug Fixes

* **Address Finder:** Upgrade to 3.0.1 ([cfcf262](https://github.com/ideal-postcodes/address-finder-bundled/commit/cfcf2623f84cd104f1b306bb823b17abf5289ed2))

# [4.0.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/3.2.0...4.0.0) (2022-03-01)


### Features

* **Address Finder:** Upgrade to v3, adds US Address Validation ([d75a56c](https://github.com/ideal-postcodes/address-finder-bundled/commit/d75a56c088af35d987128422e20cb1c0b0d7d140))


### BREAKING CHANGES

* **Address Finder:** Enables Address Validation for USA alongside GBR
New parent element now wraps both the address finder suggestion list and toolbar
Controller no longer provides `view` attribute. References to DOM Elements are stored directly on the instance
`next()` and `previous()` only update internal state but do not advance the state machine
All exports have been namespaced to AddressFinder
Removed controller.view. View components are incorporated into main. Address Finder input instance. e.g. `controller.view.input` becomes `controller.input`
Address Finder now completes addresses using the /autocomplete/addresses/:id API
Address Finder now uses the typings found at @ideal-postcodes/openapi
Adds USA support. Underlying API Client upgraded to 3.0.0
A parent element which wraps both the address finder suggestion list and toolbar
Controller no longer provides `view` attribute. References to DOM Elements are stored directly on the instance

# [3.2.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/3.1.1...3.2.0) (2021-08-30)


### Features

* **Address Finder:** Update to 2.4.0 ([c757b4b](https://github.com/ideal-postcodes/address-finder-bundled/commit/c757b4bc1e9b47430cab5664b11bd48643225fad))

## [3.1.1](https://github.com/ideal-postcodes/address-finder-bundled/compare/3.1.0...3.1.1) (2021-07-25)


### Bug Fixes

* **deps:** bump @ideal-postcodes/address-finder from 2.2.2 to 2.3.0 ([#164](https://github.com/ideal-postcodes/address-finder-bundled/issues/164)) ([01d6ce2](https://github.com/ideal-postcodes/address-finder-bundled/commit/01d6ce29203c59311aeb146ea90aa9d18d8adba9))

# [3.1.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/3.0.0...3.1.0) (2021-07-06)


### Features

* **deps:** bump @ideal-postcodes/address-finder from 2.1.0 to 2.2.2 ([#152](https://github.com/ideal-postcodes/address-finder-bundled/issues/152)) ([3cb3120](https://github.com/ideal-postcodes/address-finder-bundled/commit/3cb31202b6a6a3158a8e509ba91be6c65781bcc1))

# [3.0.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.4.5...3.0.0) (2021-06-16)


### Features

* **Address Finder:** Upgrade to v2 ([8173c5a](https://github.com/ideal-postcodes/address-finder-bundled/commit/8173c5a870c6caf64e683d0a29cf0948deacafe4))


### BREAKING CHANGES

* **Address Finder:** - injectStyle now defaults to `true`

## [2.4.5](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.4.4...2.4.5) (2021-04-23)


### Bug Fixes

* **deps:** bump @ideal-postcodes/address-finder from 1.8.2 to 1.8.3 ([#122](https://github.com/ideal-postcodes/address-finder-bundled/issues/122)) ([74f070f](https://github.com/ideal-postcodes/address-finder-bundled/commit/74f070f5f772f2978d2ad1cde6888bdde2dc17e9))

## [2.4.4](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.4.3...2.4.4) (2021-03-15)


### Bug Fixes

* **Update:** Bump AF to 1.8.2 ([7185dc1](https://github.com/ideal-postcodes/address-finder-bundled/commit/7185dc17b1e5f3612153d727a405170ff0b5704e))

## [2.4.3](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.4.2...2.4.3) (2021-03-09)


### Bug Fixes

* **deps:** bump @ideal-postcodes/address-finder from 1.5.4 to 1.7.0 ([#78](https://github.com/ideal-postcodes/address-finder-bundled/issues/78)) ([ab82fc6](https://github.com/ideal-postcodes/address-finder-bundled/commit/ab82fc625862388db010032278409e3c32f5adf2))

## [2.4.2](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.4.1...2.4.2) (2021-02-19)


### Bug Fixes

* **deps:** Bump address-finder ([9fa775b](https://github.com/ideal-postcodes/address-finder-bundled/commit/9fa775b2afe019609737b765885e259f697ebb1d))

## [2.4.1](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.4.0...2.4.1) (2021-02-11)


### Bug Fixes

* **ESM:** Drop polyfill in ESM build ([4e3fafb](https://github.com/ideal-postcodes/address-finder-bundled/commit/4e3fafb0c7e4a323aa97c08ec61712f0624628e3))

# [2.4.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.3.0...2.4.0) (2021-02-11)


### Bug Fixes

* **Deps:** Upgrade address-finder ([a197769](https://github.com/ideal-postcodes/address-finder-bundled/commit/a19776927043279e0f0a953a86bf56c7ba5dfa09))


### Features

* **Bundle:** Scope ie11 polyfills ([cf03ae9](https://github.com/ideal-postcodes/address-finder-bundled/commit/cf03ae99ea0459bba469ff8f26aa42803b9a5efb))

# [2.3.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.2.0...2.3.0) (2021-02-08)


### Features

* **deps:** bump @ideal-postcodes/address-finder from 1.3.1 to 1.5.1 ([#31](https://github.com/ideal-postcodes/address-finder-bundled/issues/31)) ([abe37d0](https://github.com/ideal-postcodes/address-finder-bundled/commit/abe37d049a73e095ed3014371bc62a254e91ab44))

# [2.2.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.1.0...2.2.0) (2021-01-21)


### Features

* **deps:** bump @ideal-postcodes/address-finder from 1.2.1 to 1.3.1 ([#19](https://github.com/ideal-postcodes/address-finder-bundled/issues/19)) ([04c27bc](https://github.com/ideal-postcodes/address-finder-bundled/commit/04c27bc517c49a39011e2b4973bbda5ee7849317))

# [2.1.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/2.0.0...2.1.0) (2021-01-19)


### Features

* **deps:** bump @ideal-postcodes/address-finder from 1.1.1 to 1.2.1 ([#13](https://github.com/ideal-postcodes/address-finder-bundled/issues/13)) ([d7da0de](https://github.com/ideal-postcodes/address-finder-bundled/commit/d7da0de1d27b7b6f60364ea7022caf617089c2f5))

# [2.0.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/1.1.0...2.0.0) (2021-01-07)


### Features

* **Bundles:** Simplify Bundles ([b4f006f](https://github.com/ideal-postcodes/address-finder-bundled/commit/b4f006f70535a897366bceb14ec18039f3cf916c))


### BREAKING CHANGES

* **Bundles:** Latest ESM and Modern UMD bundles have been eliminated.
For better browser targeting use the upstream address-finder project

# [1.1.0](https://github.com/ideal-postcodes/address-finder-bundled/compare/1.0.1...1.1.0) (2021-01-06)


### Features

* **deps:** bump @ideal-postcodes/address-finder from 1.0.0 to 1.1.1 ([#4](https://github.com/ideal-postcodes/address-finder-bundled/issues/4)) ([dc190f0](https://github.com/ideal-postcodes/address-finder-bundled/commit/dc190f04a9bfc9eb465ed8bdb03a171298fa3673))

## [1.0.1](https://github.com/ideal-postcodes/address-finder-bundled/compare/1.0.0...1.0.1) (2021-01-04)


### Bug Fixes

* **Babel:** Fix UMD builds ([40557c9](https://github.com/ideal-postcodes/address-finder-bundled/commit/40557c92a45d36d73f8da2d3f430d82edddec344))

# 1.0.0 (2021-01-04)


### Features

* **Release:** Initial release ([aebacac](https://github.com/ideal-postcodes/address-finder-bundled/commit/aebacac6cc4742e914629573eea97a77bcfbfada))
