import { test as base } from "@playwright/test";

import { UserApi } from "../api/UserApi";
import { PostApi } from "../api/PostApi";
import { CommentApi } from "../api/CommentApi";
import { TodoApi } from "../api/TodoApi";

type ApiFixtures = {

    userApi: UserApi;

    postApi: PostApi;

    commentApi: CommentApi;

    todoApi: TodoApi;

};

export const test = base.extend<ApiFixtures>({

    userApi: async ({ request }, use) => {

        await use(new UserApi(request));

    },

    postApi: async ({ request }, use) => {

        await use(new PostApi(request));

    },

    commentApi: async ({ request }, use) => {

        await use(new CommentApi(request));

    },

    todoApi: async ({ request }, use) => {

        await use(new TodoApi(request));

    }

});

export { expect } from "@playwright/test";