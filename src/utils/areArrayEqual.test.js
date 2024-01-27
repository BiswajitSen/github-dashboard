import areArraysEqual from "./areArraysEqual";

describe("areArrayEqual", () => {
  it("should result in equal for two empty array", () => {
    expect(areArraysEqual([], [])).toEqual(true);
  });

  it("should result in false for two array of different size", () => {
    expect(areArraysEqual([1], [])).toEqual(false);
  });

  it("should result in false for two array having same length but different elements", () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 4])).toEqual(false);
  });

  it("should result in true for two array having same length and same elements", () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toEqual(true);
  });
});
