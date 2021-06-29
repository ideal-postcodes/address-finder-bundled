/**
 * Local test runner for UMD build
 */
import {
  frameworks,
  reporters,
  basePath,
  singleRun,
  preprocessors,
} from "./config";

module.exports = (config: any): void =>
  config.set({
    karmaTypescriptConfig: { compilerOptions: {} },
    preprocessors,
    reporters,
    frameworks,
    plugins: ["karma-mocha", "karma-typescript", "karma-chrome-launcher"],
    singleRun,
    basePath,
    browsers: ["ChromeHeadless"],
    files: [
      { pattern: "dist/address-finder.js" },
      { pattern: "test/umd.integration.ts" },
    ],
  });
