# SauceDemo Login Automation — Playwright

Automated UI test suite for the SauceDemo login flow, built with Playwright.

## Why this exists

The login scenarios here were first tested manually and documented in the main
[QA portfolio](https://github.com/dimuthguna/dimuth-qa-portfolio) under `test-cases/`.
This suite automates those same scenarios so they can be re-run on demand instead of
re-tested by hand every time.

## What's covered

| Test | Scenario |
|---|---|
| TC-LOGIN-01 | Empty username and password |
| TC-LOGIN-02 | Unrecognized username |
| TC-LOGIN-03 | Valid username, incorrect password |
| TC-LOGIN-04 | Locked-out user |
| TC-LOGIN-05 | Valid, active user — successful login |

Each test runs against three browser engines (Chromium, Firefox, WebKit) via Playwright's
default project configuration — 5 scenarios × 3 browsers = 15 total test runs.

## Running locally

npm install
npx playwright test

## Continuous Integration

A GitHub Actions workflow (`.github/workflows/playwright.yml`) runs the full suite
automatically on every push to `main`. See the **Actions** tab for run history.
