import sortData from "./index";

describe("sortData", () => {
  const data = [
    { id: 1, name: "File1" },
    { id: 2, name: "Movie" },
    { id: 3, name: "Another file" },
  ];

  it("should sort data by name", () => {
    const sortBy = "name";

    const sortedData = sortData({ data, sortBy });

    expect(sortedData).toEqual([
      { id: 3, name: "Another file" },
      { id: 1, name: "File1" },
      { id: 2, name: "Movie" },
    ]);
  });

  it("should sort data by size", () => {
    const data = [
      { id: 1, size: 10 },
      { id: 2, size: 5 },
      { id: 3, size: 8 },
    ];
    const sortBy = "size";

    const sortedData = sortData({ data, sortBy });

    expect(sortedData).toEqual([
      { id: 2, size: 5 },
      { id: 3, size: 8 },
      { id: 1, size: 10 },
    ]);
  });

  it("should sort data by date", () => {
    const data = [
      { id: 1, added: new Date("2022-01-01") },
      { id: 2, added: new Date("2022-01-03") },
      { id: 3, added: new Date("2022-01-02") },
    ];
    const sortBy = "date";

    const sortedData = sortData({ data, sortBy });

    expect(sortedData).toEqual([
      { id: 1, added: new Date("2022-01-01") },
      { id: 3, added: new Date("2022-01-02") },
      { id: 2, added: new Date("2022-01-03") },
    ]);
  });
});
