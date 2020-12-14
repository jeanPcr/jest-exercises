import { hello } from "./HelloWorld";

test("say hello world!", () => {
  expect(hello()).toBe("Hello, World!");
});

test("say hello name!", () => {
  expect(hello("Name")).toBe("Hello, Name!");
});
