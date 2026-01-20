import { APIResponse } from "@playwright/test";
import { IHttpLogger } from "./IHttpLogger";

export class HttpLogger implements IHttpLogger {
  constructor() {}

  async logApiRequest(response: APIResponse, payload?: any): Promise<void> {
    console.log(`Endpoint: ${response.url()}`);

    if (!payload) {
      console.log(`Payload: No body requested`);
      return; // early return to remove else
    }

    console.log(`Payload: ${JSON.stringify(payload)}`);
    console.log(`Response status: ${response.status()}`);
    console.log(`Response body: \n ${await response.text()}`);
  }
}
