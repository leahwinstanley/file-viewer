import filterData from "./index";

describe("filterData", () => {
  const data = [
    { id: 1, name: "example" },
    { id: 2, name: "test" },
    { id: 3, name: "random string" },
    { id: 4, name: "random string 2" },
  ];

  it("should return a match if one is found", () => {
    const filterString = "string";

    const filteredData = filterData({ data, filterString });

    expect(filteredData).toEqual([
      { id: 3, name: "random string" },
      { id: 4, name: "random string 2" },
    ]);
  });

  it("should return an empty array if no matching data found", () => {
    const filterString = "abc";

    const filteredData = filterData({ data, filterString });

    expect(filteredData).toEqual([]);
  });
});
