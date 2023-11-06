import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.post("https://api.novaposhta.ua/v2.0/json/", (req, res, ctx) => {
    return res(ctx.json("20450745191462"));
  }),
  // rest.post('https://api.novaposhta.ua/v2.0/json/', (req, res, ctx) => {
  // 	return res(ctx.status(200));
  // }),
];

export const server = setupServer(...handlers);
