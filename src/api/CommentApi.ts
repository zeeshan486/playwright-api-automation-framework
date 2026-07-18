import { APIRequestContext } from "@playwright/test";
import { BaseApi } from "./BaseApi";

export class CommentApi extends BaseApi{
    constructor(request:APIRequestContext){
        super(request)
    }
}