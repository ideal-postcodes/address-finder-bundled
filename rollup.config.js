import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import { version, dependencies, license } from "./package.json";

const input = "node_modules/@ideal-postcodes/address-finder/esm/index.js";

const banner = `/**
 * @license
 * Ideal Postcodes <https://ideal-postcodes.co.uk>
 * Copyright IDDQD Limited
 * Address Finder Bundled ${version}
 * Built on Address Finder ${dependencies["@ideal-postcodes/address-finder"]}
 * ${license} Licence
 */`;

// Configure terser to ignore build info banner
const terserConfig = {
  output: {
    comments: (_, { value, type }) => {
      if (type === "comment2") return /@license/i.test(value);
    },
  },
};

const sourceMap = false;

const babelHelpers = "bundled";

/**
 * Whitelist files processed by Babel
 */
const include = [
  "node_modules/@ideal-postcodes/address-finder/esm/**",
  "node_modules/@ideal-postcodes/core-axios/esm/**",
  "node_modules/@ideal-postcodes/core-interface/esm/**",
  "node_modules/@ideal-postcodes/jsutil/esm/**",
  "node_modules/capitalise-post-town/dist/**",
  "node_modules/lodash/debounce.js",
  "node_modules/core-js-pure/**/*",
];

const context = "window";

export default [
  /**
   * ESM build targeting minimum browser versions that allow [ES6 Modules](https://caniuse.com/#feat=es6-module)
   */
  {
    input,
    context,
    output: {
      file: "./dist/address-finder.esm.js",
      banner,
      format: "esm",
      exports: "named",
    },
    plugins: [
      resolve({
        preferBuiltins: true,
        dedupe: ["@ideal-postcodes/jsutil"],
        mainFields: ["browser", "module", "main"],
        browser: true,
      }),
      commonjs(),
      babel({
        babelrc: false,
        include,
        sourceMap,
        babelHelpers,
        presets: [
          ["@babel/preset-env", {}]],
      }),
      terser(terserConfig),
    ],
  },
  /**
   * UMD build that targets ie11 as base
   */
  {
    input,
    context,
    output: {
      file: "./dist/address-finder.js",
      banner,
      format: "umd",
      extend: true,
      name: "IdealPostcodes",
      exports: "named",
    },
    plugins: [
      resolve({
        preferBuiltins: true,
        dedupe: ["@ideal-postcodes/jsutil"],
        mainFields: ["browser", "module", "main"],
        browser: true,
      }),
      commonjs(),
      babel({
        babelrc: false,
        ignore: [/core-js/],
        include,
        babelHelpers,
        sourceMap,
        presets: [["@babel/preset-env", {}]],
      }),
      terser(terserConfig),
    ],
  },
  /**
   * IIFE build to have script available in global scope
   */
  {
    input,
    context,
    output: {
      file: "./dist/address-finder.iife.js",
      banner,
      format: "iife",
      extend: true,
      name: "IdealPostcodes",
      exports: "named",
    },
    plugins: [
      resolve({
        preferBuiltins: true,
        dedupe: ["@ideal-postcodes/jsutil"],
        mainFields: ["browser", "module", "main"],
        browser: true,
      }),
      commonjs(),
      babel({
        babelrc: false,
        ignore: [/core-js/],
        include,
        babelHelpers,
        sourceMap,
        presets: [["@babel/preset-env", {}]],
      }),
      terser(terserConfig),
    ],
  },
];
