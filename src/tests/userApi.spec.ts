import { UserFactory } from "../factories/UserFactory";
import { expect, test } from "../fixtures/apiFixture";
import { User } from "../models/User";

test("TC-01 Get All Users", async ({ userApi }) => {
  const response = await userApi.getAllUsers();
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});

test("TC-02 Create User", async ({ userApi }) => {
  const user = UserFactory.createUser();

  const response = await userApi.createUser(user);

  expect(response.status()).toBe(201);
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