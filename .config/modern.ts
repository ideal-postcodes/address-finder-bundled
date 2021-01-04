/**
 * Test runner for fixed movin UMD build
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  latestDesktop,
  latestMobile,
  config as sauceConfig,
} from "@ideal-postcodes/supported-browsers";
import * as defaults from "./config";

const customLaunchers = { ...latestDesktop, ...latestMobile };

module.exports = (config: any): void =>
  config.set({
    ...sauceConfig({ testName: "Address-Finder-Bundled", defaults }),
    browsers: Object.keys(customLaunchers),
    customLaunchers,
    frameworks: ["esm", ...defaults.frameworks],
    plugins: [
      require.resolve("@open-wc/karma-esm"),
      "karma-mocha",
      "karma-typescript",
      "karma-sauce-launcher",
    ],
    esm: {
      nodeResolve: true,
      moduleDirs: ["node_modules", "dist"],
    },
    files: [
      { pattern: "dist/address-finder.esm.modern.min.js", type: "module" },
      { pattern: "test/esm.integration.js", type: "module" },
    ],
  });
