import getDateInformation, { areDatesSame } from "./getDate";

describe("Date", () => {
  it("should result in equal for same date", () => {
    expect(
      areDatesSame(
        { day: 10, month: 10, year: 10 },
        { day: 10, month: 10, year: 10 }
      )
    ).toEqual(true);
  });

  it("should parse day month and year from a given date", () => {
    const dateInfo = getDateInformation("2024-01-27T11:52:19.862Z");
    expect(dateInfo).toStrictEqual({ year: 2024, month: 1, day: 27 });
  });
});
