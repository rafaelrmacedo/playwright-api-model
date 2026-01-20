import { APIRequestContext } from "@playwright/test";
import { IHttpLogger } from "../../http/IHttpLogger";
import { CreateUserDto } from "./dto/createUser.dto";

export class Users {
  protected readonly requestContext: APIRequestContext;
  protected readonly httpLogger: IHttpLogger;

  constructor(requestContext: APIRequestContext, httpLogger: IHttpLogger) {
    this.requestContext = requestContext;
    this.httpLogger = httpLogger;
  }

  async createNewUser(body: CreateUserDto) {
    const response = await this.requestContext.post(
      `${process.env.BASE_URL}${process.env.USERS_API_URL}`,
      { data: body },
    );
    this.httpLogger.logApiRequest(response, body);

    const jsonResponse = await response.json();
    return { response, jsonResponse };
  }
}
