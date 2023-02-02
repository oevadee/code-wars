import { spinWords } from "./index";

describe("Basic tests", () => {
  it("Basic test should work", () => {
    expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw");
    expect(spinWords("This is a test")).toEqual("This is a test");
    expect(spinWords("This is another test")).toEqual("This is rehtona test");
  });
});
