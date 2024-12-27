import '@testing-library/jest-dom';

// Add any custom jest matchers if needed
expect.extend({});

// Add any global mocks or configurations here
Object.defineProperty(window, 'matchMedia', {
writable: true,
value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
})),
});

