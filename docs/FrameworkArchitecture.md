# Framework Architecture

## Overview
The framework is organized around a modular structure to keep HTTP requests, fixtures, and tests easy to maintain.

## Core Components
- src/api: API client classes for each resource
- src/factories: helper classes that generate test data
- src/models: TypeScript data models
- src/fixtures: reusable fixtures and setup logic
- src/tests: end-to-end API test specifications

## Design Principles
- Reusable request logic
- Clear separation of concerns
- Environment-based configuration
- Maintainable test data handling
