import { APIRequestContext, APIResponse } from "@playwright/test";
import { api } from "../constants/api";
import { ApiLogger } from "../utils/ApiLogger";

export abstract class BaseApi {

    protected readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    protected get(
        endpoint: string,
         params?: Record<string, string | number>,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return this.request.get(endpoint, {
            params,
            headers
        });

    }

protected async post(
    endpoint: string,
    data: unknown,
    headers?: Record<string, string>
): Promise<APIResponse> {

    await ApiLogger.logRequest(
        "POST",
        endpoint,
        headers,
        data
    );

    const response = await this.request.post(endpoint, {
        data,
        headers
    });

    await ApiLogger.logResponse(response);

    return response;
}

    protected put(
        endpoint: string,
        data: unknown,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return this.request.put(endpoint, {
            data,
            headers
        });

    }

    protected patch(
        endpoint: string,
        data: unknown,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return this.request.patch(endpoint, {
            data,
            headers
        });

    }

    protected delete(
        endpoint: string,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return this.request.delete(endpoint, {
            headers
        });

    }

    protected authHeaders():Record<string,string>{
        return  {
                Authorization: `Bearer ${api.token}`,
            }
    }

}