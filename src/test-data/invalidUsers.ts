export const invalidUsers = {

    missingName: {

        email: "abc@gmail.com",

        gender: "male",

        status: "active"

    },

    missingEmail: {

        name: "John",

        gender: "male",

        status: "active"

    },

    invalidEmail: {

        name: "John",

        email: "abc",

        gender: "male",

        status: "active"

    },

    invalidGender: {

        name: "John",

        email: "abc@gmail.com",

        gender: "robot",

        status: "active"

    },

    invalidStatus: {

        name: "John",

        email: "abc@gmail.com",

        gender: "male",

        status: "enabled"

    },

    emptyBody: {},

        duplicateEmail: {

        name: "John",

        email: "abc@yopmail.com",

        gender: "male",

        status: "active"

    },


};