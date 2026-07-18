
import { APIRequestContext } from "@playwright/test";
import { BaseApi } from "./BaseApi";

export class TodoApi extends BaseApi{
    constructor(request:APIRequestContext){
        super(request)
    }
}