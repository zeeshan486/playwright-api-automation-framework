import { faker } from "@faker-js/faker";
import { User } from "../models/User";
export class UserFactory {

    static createUser():User {

        return {
            name: faker.person.fullName(),

            email: faker.internet.email().toLowerCase(),

            gender: "male",

            status: "active"
        }

    }
} 