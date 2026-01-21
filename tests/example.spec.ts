import test, { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { HttpHandler } from "../http/httpHandler";
import { HttpLogger } from "../http/httpLogger";
const logger = new HttpLogger();

test("Create user test", async ({ request }) => {
  const http = new HttpHandler(request, logger);
  const payload = {
    nome: faker.person.firstName(),
    email: faker.number.int({ min: 1, max: 9999 }) + faker.internet.email(),
    password: "teste",
    administrador: "true",
  };

  const response = await http.onUsersApi().createNewUser(payload);

  expect(response.response.status()).toBe(201);
  expect(response.jsonResponse.message).toBe("Cadastro realizado com sucesso");
  expect(response.jsonResponse._id).toBeDefined();
});
