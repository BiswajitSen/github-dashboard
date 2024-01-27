import HashMap from "./hashMap";

describe("HashMap", () => {
  it("should not have any key on construction", () => {
    const hashMap = new HashMap();
    expect(hashMap.size()).toBe(0);
  });

  it("should insert multiple key value pairs", () => {
    const hashMap = new HashMap();
    hashMap.add(1, 1);
    hashMap.add(2, 2);
    expect(hashMap.size()).toBe(2);
  });

  it("should have only one element if all keys have same value", () => {
    const hashMap = new HashMap();
    hashMap.add(1, 1);
    hashMap.add(1, 2);
    expect(hashMap.size()).toBe(1);
    expect(hashMap.getValue(1)).toStrictEqual([1, 2]);
  });
});
