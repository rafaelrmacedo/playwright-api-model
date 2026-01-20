import { APIRequestContext } from "@playwright/test";
import { HttpLogger } from "./httpLogger";
import { Users } from "../api/users/users.api";

export class HttpHandler {
  private readonly requestContext: APIRequestContext;
  private readonly httpLogger: HttpLogger;
  private readonly usersApi: Users;

  // each endpoint class must to be taked as argument of the RequestManager and added here
  constructor(requestContext: APIRequestContext, httpLogger: HttpLogger) {
    this.requestContext = requestContext;
    this.httpLogger = httpLogger;
    this.usersApi = new Users(requestContext, httpLogger);
  }

  onUsersApi() {
    return this.usersApi;
  }
}
