/**
 * Test runner for fixed movin UMD build
 */
import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  legacyDesktop,
  legacyMobile,
  config as sauceConfig,
} from "@ideal-postcodes/supported-browsers";
import * as defaults from "./config";

const customLaunchers = { ...legacyDesktop, ...legacyMobile };

module.exports = (config: any): void =>
  config.set({
    ...sauceConfig({ testName: "Address-Finder-Bundled", defaults }),
    browsers: Object.keys(customLaunchers),
    customLaunchers,
    files: [
      "dist/address-finder.umd.min.js",
      { pattern: "test/umd.integration.ts" },
    ],
  });
