import { rest } from 'msw';

const baseUrl = 'api';

export const handlers = [
  rest.get(`${baseUrl}/hello`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({ name: 'Lorem Ipsum' })
    )
  )
];
