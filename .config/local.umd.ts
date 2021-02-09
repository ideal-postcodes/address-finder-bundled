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

//import { executablePath } from "puppeteer";
//process.env.CHROME_BIN = executablePath();

import { readdirSync } from "fs";
import { resolve } from "path";

const path = "../node_modules/puppeteer/.local-chromium/";

const directories = (source:string) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

process.env.CHROME_BIN = resolve(__dirname, path, directories(resolve(__dirname, path))[0], "chrome-linux", "chrome");

const browsers = ["ChromeHeadlessSand"];
const customLaunchers = {
  ChromeHeadlessSand: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox']
  }
};

module.exports = (config: any): void =>
  config.set({
    karmaTypescriptConfig: { compilerOptions: {} },
    preprocessors,
    reporters,
    frameworks,
    plugins: ["karma-mocha", "karma-typescript", "karma-chrome-launcher"],
    singleRun,
    basePath,
    browsers,
    customLaunchers,
    files: [
      { pattern: "dist/address-finder.js" },
      { pattern: "test/umd.integration.ts" },
    ],
  });
