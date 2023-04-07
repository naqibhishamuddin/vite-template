import { rest } from "msw";

const restApi = (path: string) => {
  return `https://api.test.com/${path}`;
};

export const handlers = [
  rest.get(restApi("todo"), (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tasks: ["Clean the house", "Walk the dog"],
      })
    );
  }),
];
