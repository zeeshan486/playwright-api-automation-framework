import { APIRequestContext, APIResponse } from "@playwright/test";
import { BaseApi } from "./BaseApi";
import { User } from "../models/User";
export class UserApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async getAllUsers(params?: Record<string, string | number>): Promise<APIResponse> {
    const response = await this.get("users",params);
    return response;
  }

  async getUserById(id: number): Promise<APIResponse> {
    return await this.get(`users/${id}`);
  }

  async createUser(user: User): Promise<APIResponse> {
    return this.post("users", user,
     this.authHeaders()
    );
  }

  async updateUser(id: number, user: User): Promise<APIResponse> {
    return this.put(`users/${id}`, user,
      this.authHeaders()
    );
  }

  async patchUser(
    id: number,
    updatedFields: Partial<User>,
  ): Promise<APIResponse> {
    return this.patch(`users/${id}`, updatedFields,
      this.authHeaders()
    );
  }

  async deleteUser(id: number): Promise<APIResponse> {
    return await this.delete(`users/${id}`,
      this.authHeaders()

    );
  }
}
