# Playwright API Automation Framework

This repository contains a Playwright-based API automation framework for validating REST API endpoints with TypeScript.

## Project Goals
- Provide a reusable API test structure
- Keep test data and API logic separated
- Support maintainable and readable test cases

## Quick Start
1. Install dependencies
   ```bash
   npm install
   ```
2. Create your environment file
   ```bash
   copy .env.example .env
   ```
3. Run tests
   ```bash
   npx playwright test
   ```

## Project Structure
- src/api: API request helpers
- src/factories: data factory utilities
- src/models: TypeScript interfaces/types
- src/tests: test specifications
- docs: project documentation
