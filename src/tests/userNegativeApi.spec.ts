import { expect } from "@playwright/test";
import { test } from "../fixtures/apiFixture";
import { api } from "../constants/api";
import { invalidUsers } from "../test-data/invalidUsers";

test("TC-06 Create User Without Name", async ({ request }) => {

    const invalidUser = {

        email: "abc@gmail.com",
        gender: "male",
        status: "active"

    };

    const response = await request.post("users", {

        headers: {

            Authorization: `Bearer ${api.token}`

        },

        data: invalidUsers.missingName

    });

    expect(response.status()).toBe(422);

    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();

    expect(body).toHaveLength(1);

    expect(body[0].field).toBe("name");

    expect(body[0].message).toBe("can't be blank");

});