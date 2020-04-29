/**
 * Mock axios library.
 */

export default {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  set: jest.fn(),
  query: jest.fn(),
  end: jest.fn(),
};
