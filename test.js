
const { Hello } = require("./main.js")
it('test Hello', () => {
    console.log = jest.fn();
    Hello()
    // The first argument of the first call to the function was 'hello'
    expect(console.log.mock.calls[0][0]).toBe('HelloWord');
  });