# Playwright API Automation Framework - Test Cases

| ID | Test Case | Status |
|----|-----------|--------|
| TC-01 | Get All Users | ✅ Implemented |
| TC-02 | Create User | ✅ Implemented |
| TC-03 | Update User (PUT) | ✅ Implemented |
| TC-04 | Partial Update User (PATCH) | ✅ Implemented |
| TC-05 | Delete User | ✅ Implemented |
| TC-06 | Get User By ID | ⏳ Planned |
| TC-07 | Create User with Invalid Data | ⏳ Planned |
| TC-08 | Create User Without Authentication | ⏳ Planned |
| TC-09 | Update Non-Existing User | ⏳ Planned |
| TC-10 | Delete Non-Existing User | ⏳ Planned |
| TC-11 | Verify Response Headers | ⏳ Planned |
| TC-12 | Verify Pagination | ⏳ Planned |
| TC-13 | Verify Query Parameters | ⏳ Planned |
| TC-14 | JSON Schema Validation | ⏳ Planned |
| TC-15 | Response Time Validation | ⏳ Planned |
| TC-16 | Invalid Authentication Token | ⏳ Planned |
| TC-17 | Missing Required Fields | ⏳ Planned |
| TC-18 | Duplicate Email Validation | ⏳ Planned |
| TC-19 | Empty Request Body Validation | ⏳ Planned |
| TC-20 | API Chaining Scenarios | ⏳ Planned |

---

# Implemented Test Cases

---

## TC-01 Get All Users

### Objective

Verify that all users are successfully retrieved.

### Expected Result

- Status Code = 200
- Response contains users
- Response body validated

---

## TC-02 Create User

### Objective

Verify a new user can be created successfully.

### Expected Result

- Status Code = 201
- User created successfully
- Generated User ID returned
- Response body validated

---

## TC-03 Update User (PUT)

### Objective

Verify an existing user can be completely updated.

### Expected Result

- Status Code = 200
- All fields updated
- Updated response validated

---

## TC-04 Partial Update User (PATCH)

### Objective

Verify partial update works successfully.

### Expected Result

- Status Code = 200
- Only requested fields updated
- Updated response validated

---

## TC-05 Delete User

### Objective

Verify a user can be deleted successfully.

### Expected Result

- Status Code = 204
- User deleted
- GET User By ID returns 404

---

# Planned Test Cases

## Authentication

- Create user with invalid token
- Create user without token
- Expired token validation

---

## Negative Testing

- Invalid email
- Duplicate email
- Empty request body
- Invalid gender
- Invalid status

---

## API Validation

- Response headers
- Pagination
- Query parameters
- Response schema validation
- Response time validation

---

## Advanced API Testing

- Generic response validation
- Request specification
- Response specification
- API utilities
- Logging
- Retry mechanism
- CI/CD execution
- HTML reporting