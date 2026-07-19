import "dotenv/config";
import { defineConfig, devices } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

    testDir: "./src/tests",

    fullyParallel: false,

    reporter: [
        [
            "html",
            {
                outputFolder: "playwright-report",
                open: "never"
            }
        ]
    ],
    workers:1,
    use: {

        baseURL: "https://gorest.in/public/v2/"
        
    }

});
