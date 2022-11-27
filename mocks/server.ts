// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import { handlers } from './serverHandlers';

export const server = setupServer(...handlers);
