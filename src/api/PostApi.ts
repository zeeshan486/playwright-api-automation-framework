import { APIRequestContext } from "@playwright/test";
import { BaseApi } from "./BaseApi";

export class PostApi extends BaseApi{
    constructor(request:APIRequestContext){
        super(request)
    }
}