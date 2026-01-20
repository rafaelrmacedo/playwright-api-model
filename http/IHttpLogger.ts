import { APIResponse } from "@playwright/test";

export interface IHttpLogger {
  logApiRequest(response: APIResponse, payload?: any): Promise<void>;
}
