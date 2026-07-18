import { expect } from "@playwright/test";
import { test } from "../fixtures/apiFixture";
import { api } from "../constants/api";
import { invalidUsers } from "../test-data/invalidUsers";
import { ApiRequestHelper } from "../utils/ApiRequestHelper";
import { UserFactory } from "../factories/UserFactory";

test("TC-06 Create User Without Name", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,

    "users",

    invalidUsers.missingName,
  );

  expect(response.status()).toBe(422);

  const body = await response.json();

  expect(Array.isArray(body)).toBe(true);

  expect(body).toHaveLength(1);

  expect(body[0].field).toBe("name");

  expect(body[0].message).toBe("can't be blank");
});
test("TC-07 User With Missing Email", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.missingEmail,
  );

  expect(response.status()).toBe(422);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(true);

  expect(body).toHaveLength(1);

  expect(body[0].field).toBe("email");

  expect(body[0].message).toBe("can't be blank");
});
test("TC-08 User With Invalid Email", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.invalidEmail,
  );

  expect(response.status()).toBe(422);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(true);

  expect(body).toHaveLength(1);

  expect(body[0].field).toBe("email");

  expect(body[0].message).toBe("is invalid");
});
test("TC-09 User With duplicate Email", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    UserFactory.createUser(),
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  console.log(body.email);

  const duplicatEmailUser = {
    ...body,
    email: body.email,
  };

  const duplicateUserResponse = await ApiRequestHelper.post(
    request,
    "users",
    duplicatEmailUser,
  );

  const duplicateEmailResponseBody = await duplicateUserResponse.json();

  console.log(duplicateEmailResponseBody);
  expect(duplicateEmailResponseBody).toHaveLength(1);
  expect(Array.isArray(duplicateEmailResponseBody)).toBe(true);
  expect(duplicateUserResponse.status()).toBe(422);
  expect(duplicateEmailResponseBody[0].field).toBe("email");
  expect(duplicateEmailResponseBody[0].message).toBe("has already been taken");
});

test("TC-10 User With Invalid Gender", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.invalidGender,
  );

  expect(response.status()).toBe(422);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(true);

  expect(body).toHaveLength(1);

  expect(body[0].field).toBe("gender");

  expect(body[0].message).toBe("can't be blank, can be male or female");
});

test("TC-11 User With Invalid Status", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.invalidStatus,
  );

  expect(response.status()).toBe(422);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(true);

  expect(body).toHaveLength(1);

  expect(body[0].field).toBe("status");

  expect(body[0].message).toBe("can't be blank, can be active or inactive");
});

test("TC-12 User With Empty Body", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.emptyBody,
  );

  expect(response.status()).toBe(422);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(true);

  expect(body).toHaveLength(4);

  expect(body[0].field).toBe("name");
  expect(body[0].message).toBe("can't be blank");

  expect(body[1].field).toBe("email");
  expect(body[1].message).toBe("can't be blank");

  expect(body[2].field).toBe("gender");
  expect(body[2].message).toBe("can't be blank, can be male or female");

  expect(body[3].field).toBe("status");
  expect(body[3].message).toBe("can't be blank, can be active or inactive");
});
test("TC-13 User With Without Token", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.emptyBody,
    {},
  );

  expect(response.status()).toBe(401);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(false);

  expect(body.message).toBe(
    "Authentication failed. Please provide Authorization: Bearer <token> header.",
  );
});
test("TC-14 User With Invalid Token", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.emptyBody,
    {
      Authorization: "invalid-token",
    },
  );

  expect(response.status()).toBe(401);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(false);

  expect(body.message).toBe("Authentication failed. Use Bearer token scheme.");
});

test("TC-15 User With Blocked Token", async ({ request }) => {
  const response = await ApiRequestHelper.post(
    request,
    "users",
    invalidUsers.emptyBody,
    {
      Authorization: "Bearer blocked-token",
    },
  );

  expect(response.status()).toBe(403);

  const body = await response.json();

  console.log(body);

  expect(Array.isArray(body)).toBe(false);

  expect(body.message).toBe(
    "Forbidden. This token does not have permission to access this endpoint.",
  );
});
