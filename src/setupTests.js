// Create React App test setup
// - https://create-react-app.dev/docs/running-tests/#initializing-test-environment
// React Testing Library mock example
// - https://testing-library.com/docs/react-testing-library/example-intro#mock
// Mock Service Worker rest api
// - https://mswjs.io/docs/getting-started/mocks/rest-api

import { setupServer } from 'msw/node';

import handlers from './mockHandlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
