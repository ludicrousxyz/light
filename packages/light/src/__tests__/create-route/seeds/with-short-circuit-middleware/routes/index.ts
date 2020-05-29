import { createRoute } from '../../../../../index';

const { route, get, useMiddleware } = createRoute();

useMiddleware(({ req }) => {
  (req as any).test = true;
});

useMiddleware(({ res, send }) => send(res, 200, 'short circuit!'));

get(({ req }: any) => ({ test: req.test }));

export default route;
