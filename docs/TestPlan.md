# Playwright API Automation Framework - Test Plan

## 1. Objective

The objective of this project is to validate the REST APIs provided by GoRest using Playwright and TypeScript by implementing a scalable, maintainable, and enterprise-level API automation framework.

---

## 2. Application Under Test

- Application: GoRest API
- Base URL: https://gorest.in/public/v2
- API Type: REST API
- Authentication: Bearer Token

---

## 3. Testing Scope

### In Scope

- User CRUD Operations
- HTTP Status Code Validation
- Request & Response Validation
- Authentication
- API Chaining
- Dynamic Test Data
- Positive Scenarios
- Negative Scenarios
- Response Schema Validation
- Headers Validation
- Query Parameters
- Pagination
- Reporting

### Out of Scope

- Performance Testing
- Load Testing
- Security Testing
- Penetration Testing
- Database Validation

---

## 4. Framework Technology

| Component | Technology |
|-----------|------------|
| Automation Tool | Playwright |
| Language | TypeScript |
| Runtime | Node.js |
| Test Runner | Playwright Test |
| API | GoRest |
| Test Data | Faker |
| Version Control | Git |

---

## 5. Framework Design Principles

- Resource-based API classes
- Strong TypeScript typing
- Business actions inside API classes
- Assertions inside test files only
- Independent test execution
- Dynamic test data generation
- API chaining
- Reusable fixtures
- Clean Architecture
- Single Responsibility Principle

---

## 6. Test Strategy

The framework validates APIs using:

- Positive Testing
- Negative Testing
- CRUD Validation
- API Chaining
- Contract Validation
- Response Validation

---

## 7. Entry Criteria

- Playwright installed
- Dependencies installed
- Bearer token configured
- API available

---

## 8. Exit Criteria

- All implemented test cases pass
- No Critical defects
- HTML report generated successfully

---

## 9. Risks

- API downtime
- Authentication failure
- Network instability
- Third-party API changes

---

## 10. Deliverables

- API Automation Framework
- HTML Report
- Test Plan
- Test Cases
- Source Code
- GitHub Repository