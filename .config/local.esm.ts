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
    frameworks: ["esm", ...frameworks],
    plugins: [
      require.resolve("@open-wc/karma-esm"),
      "karma-mocha",
      "karma-typescript",
      "karma-chrome-launcher",
    ],
    singleRun,
    basePath,
    esm: {
      nodeResolve: true,
      moduleDirs: ["node_modules", "dist"],
    },
    browsers: ["ChromeHeadless"],
    files: [
      { pattern: "test/esm.integration.js", type: "module" },
      { pattern: "test/umd.integration.js" },
      { pattern: "dist/address-finder.esm.min.js", type: "module" },
    ],
  });
