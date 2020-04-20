import { getRequestParser } from "utils";

describe("Search string parse", () => {
  test("Should return string - ''", () => {
    expect(getRequestParser({})).toBe("");
  });
  test("Should return string - '?q=string'", () => {
    expect(getRequestParser({ q: "string" })).toBe("?q=string");
  });
  test("Should return string - '?q=string+string'", () => {
    expect(getRequestParser({ q: "string string" })).toBe("?q=string+string");
  });
  test("Should return string - '?q=string+string&order=desc'", () => {
    expect(getRequestParser({ q: "string string", order: "desc" })).toBe(
      "?q=string+string&order=desc"
    );
  });
});
