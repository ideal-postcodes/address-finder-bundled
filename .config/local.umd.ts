/**
 * Local test runner
 */
import {
  frameworks,
  reporters,
  basePath,
  singleRun,
  preprocessors,
} from "./config";

import { executablePath } from "puppeteer";
process.env.CHROME_BIN = executablePath();

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
      { pattern: "dist/address-finder.umd.min.js" },
      { pattern: "test/umd.integration.ts" },
    ],
  });
