import { rest } from "msw";

export const handlers = [
  rest.get("/todo", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tasks: ["Clean the house", "Walk the dog"],
      })
    );
  }),
];
