import "core-js";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import { version, devDependencies, license } from "./package.json";

const input = "node_modules/@ideal-postcodes/address-finder/esm/index.js";

const banner = `/**
 * @license 
 * Ideal Postcodes <https://ideal-postcodes.co.uk>
 * Copyright IDDQD Limited
 * Address Finder Bundled ${version}
 * Built on Addres Finder ${devDependencies["@ideal-postcodes/address-finder"]}
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
  "node_modules/lodash-es/debounce.js",
];

const context = "window";

export default [
  /**
   * UMD build targeting 99.75% browser share
   */
  {
    input,
    context,
    output: {
      file: "./dist/address-finder.umd.min.js",
      banner,
      format: "umd",
      extend: true,
      name: "IdealPostcodes",
      exports: "named", // Disable warning for default imports
    },
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      babel({
        babelrc: false,
        ignore: [/core-js/], // Prevent core-js from transforming itself https://github.com/rollup/rollup-plugin-babel/issues/254
        include,
        babelHelpers,
        sourceMap,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, not dead",
              modules: false,
              spec: true,
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
      }),
      terser(terserConfig),
    ],
  },

  /**
   * ESM build targeting minimum browser versions that allow [ES6 Modules](https://caniuse.com/#feat=es6-module)
   */
  {
    input,
    context,
    output: {
      file: "./dist/address-finder.esm.min.js",
      banner,
      format: "esm",
      exports: "named",
    },
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      babel({
        babelrc: false,
        ignore: [/core-js/],
        include,
        sourceMap,
        babelHelpers,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                edge: "16",
                firefox: "60",
                chrome: "61",
                safari: "11",
              },
              modules: false,
              spec: true,
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
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
      file: "./dist/address-finder.umd.ie11.min.js",
      banner,
      format: "umd",
      extend: true,
      name: "IdealPostcodes",
      exports: "named",
    },
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      babel({
        babelrc: false,
        ignore: [/core-js/],
        include,
        babelHelpers,
        sourceMap,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                ie: "11",
              },
              modules: false,
              spec: true,
              useBuiltIns: "usage",
              corejs: 3,
            },
          ],
        ],
      }),
      terser(terserConfig),
    ],
  },
  /**
   * ESM build that targets latest browsers (no transpilation step)
   */
  {
    input,
    context,
    output: {
      file: "./dist/address-finder.esm.modern.min.js",
      banner,
      format: "esm",
      exports: "named",
    },
    plugins: [resolve({ browser: true }), commonjs(), terser(terserConfig)],
  },
];
