import { APIRequestContext,APIResponse } from "@playwright/test";
import { api } from "../constants/api";

export class ApiRequestHelper {

    static async post(request:APIRequestContext,endpoint:string,data:unknown,headers?:Record<string,string>):Promise<APIResponse>{

        return await request.post(endpoint,{
            data,
            headers:headers ??
            {
                Authorization:`Bearer ${api.token}`
            }
        })

    }


}