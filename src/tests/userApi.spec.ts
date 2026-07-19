import { UserFactory } from "../factories/UserFactory";
import { expect, test } from "../fixtures/apiFixture";
import { User } from "../models/User";
import { userResponseSchema } from "../schemas/userResponseSchema";
import { JsonSchemaValidator } from "../utils/JsonSchemaValidator";

test("TC-01 Get All Users", async ({ userApi }) => {
  const response = await userApi.getAllUsers();
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
  console.log(response.headers());
  expect(response.headers()["content-type"])
    .toContain("application/json");

expect(response.headers()["x-pagination-page"])
    .toBe("1");

expect(response.headers()["x-pagination-limit"])
    .toBe("10");
});

test("TC-02 Create User", async ({ userApi }) => {
  const user = UserFactory.createUser();
  const response = await userApi.createUser(user);
  expect(response.status()).toBe(201);
  const body = await response.json();
  JsonSchemaValidator.validate(
    userResponseSchema,
    body
);
expect(body.name).toBe(user.name);
expect(body.email).toBe(user.email);
});

test("TC-03 Update User", async ({ userApi }) => {
  const user = UserFactory.createUser();

  const createResponse = await userApi.createUser(user);

  expect(createResponse.status()).toBe(201);

  const createdUser = await createResponse.json();

  const updatedUserData = {
    ...createdUser,

    status: "inactive",
  };

  const updateResponse = await userApi.updateUser(
    createdUser.id,
    updatedUserData,
  );

  expect(updateResponse.status()).toBe(200);

  const updatedUser = await updateResponse.json();

  expect(updatedUser.id).toBe(createdUser.id);
  expect(updatedUser.name).toBe(updatedUserData.name);
  expect(updatedUser.email).toBe(updatedUserData.email);
  expect(updatedUser.gender).toBe(updatedUserData.gender);
  expect(updatedUser.status).toBe(updatedUserData.status);
});

test("TC-04 Update Partial User Data", async ({ userApi }) => {
  const user = UserFactory.createUser();

  const createResponse = await userApi.createUser(user);

  expect(createResponse.status()).toBe(201);

  const createdUser = await createResponse.json();

  

  const updatedUserData: Partial<User> = {
    status: "inactive",
  };

  const partialUpdateResponse = await userApi.patchUser(
    createdUser.id,
    updatedUserData,
  );

  expect(partialUpdateResponse.status()).toBe(200);

  const updatedUser = await partialUpdateResponse.json();

  expect(updatedUser.id).toBe(createdUser.id);
  expect(updatedUser.status).toBe(updatedUserData.status);
});

test("TC-05 Delete User", async ({ userApi }) => {

    const user = UserFactory.createUser();

    const createResponse = await userApi.createUser(user);

    expect(createResponse.status()).toBe(201);

    const createdUser = await createResponse.json();

    const deleteResponse = await userApi.deleteUser(createdUser.id);

    expect(deleteResponse.status()).toBe(204);

    const verifyResponse = await userApi.getUserById(createdUser.id);

    expect(verifyResponse.status()).toBe(404);

});

test("TC-15 Get Users - Page 2", async ({ userApi }) => {

    const response = await userApi.getAllUsers({
        page: 2
          });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBe(true);

    expect(body.length).toBeGreaterThan(0);

    expect(response.headers()["x-pagination-page"]).toBe("2");

});

test("TC-16 Get Users - Custom Page Size", async ({ userApi }) => {

    const response = await userApi.getAllUsers({
        page: 2,
        per_page: 5
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(Array.isArray(body)).toBe(true);

    expect(body.length).toBeGreaterThan(0);
    
    expect(body.length).toBeLessThanOrEqual(5);

    expect(response.headers()["x-pagination-limit"]).toBe("5");

    expect(response.headers()["x-pagination-page"]).toBe("2");

});

test("TC-17 — Get Active Users",async({userApi})=>{
  const response = await userApi.getAllUsers({status: "active"});
  
  expect(response.status()).toBe(200);

const body = await response.json();

for (const user of body) {

    expect(user.status).toBe("active");

}

expect(Array.isArray(body)).toBe(true);

expect(body.length).toBeGreaterThan(0); 

})

test("TC-18 — Get Male Users",async({userApi})=>{
  const response = await userApi.getAllUsers({gender: "male"});
  
  expect(response.status()).toBe(200);

const body = await response.json();

for (const user of body) {

    expect(user.gender).toBe("male");

}

expect(Array.isArray(body)).toBe(true);

expect(body.length).toBeGreaterThan(0); 

})

test("TC-19 — Multiple Filters",async({userApi})=>{
  const response = await userApi.getAllUsers({ status: "active",gender: "female"});
  
  expect(response.status()).toBe(200);

const body = await response.json();

for (const user of body) {

    expect(user.status).toBe("active");

    expect(user.gender).toBe("female");
}
expect(Array.isArray(body)).toBe(true);

expect(body.length).toBeGreaterThan(0); 

})