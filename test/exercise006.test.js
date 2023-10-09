import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("Throws error with no or null parameter", () => {
    expect(() => sumMultiples(undefined)).toThrowError("arr is required");
    expect(() => sumMultiples()).toThrowError("arr is required");
  });

  test("returns rmpty array when passed empty array", () => {
    expect(sumMultiples([])).toEqual([]);
  });

  test("returns multiples of 3 and 5", () => {
    expect(sumMultiples([5, 10, -5, 50])).toEqual([5, 10, -5, 50]);
    expect(sumMultiples([3, 6, -63, 30])).toEqual([3, 6, -63, 30]);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toEqual([5, 3, 10]);
    expect(sumMultiples([-5, -3, -7, -8, -1, -10])).toEqual([-5, -3, -10]);
    expect(sumMultiples([-52, 32, -17, 8, -1, 101])).toEqual([]);
  });
});

describe("isValidDNA", () => {
  test("Throws error with no or null parameter", () => {
    expect(() => isValidDNA(undefined)).toThrowError("str is required");
    expect(() => isValidDNA()).toThrowError("str is required");
  });

  test("returns false when passed array is invalid DNA sequence", () => {
    expect(isValidDNA("ALSDJKLAKSJD")).toBe(false);
    expect(isValidDNA("ACGTSADKJE93asd")).toBe(false);
    expect(isValidDNA("1ACG")).toBe(false);
    expect(isValidDNA("AdCT")).toBe(false);
    expect(isValidDNA("ATfG")).toBe(false);
    expect(isValidDNA("gmCGT")).toBe(false);
    expect(isValidDNA("GTc@")).toBe(false);
    expect(isValidDNA("zAT")).toBe(false);
    expect(isValidDNA("")).toBe(false);
    "bdefhijklmnopqrsuvwxyz"
      .split("")
      .forEach((char) => expect(isValidDNA(char)).toBe(false));
    "bdefhijklmnopqrsuvwxyz"
      .toUpperCase()
      .split("")
      .forEach((char) => expect(isValidDNA(char)).toBe(false));
  });

  test("returns true for valid sequences", () => {
    expect(isValidDNA("ACGTacgt")).toBe(true);
    expect(isValidDNA("ACGT")).toBe(true);
    expect(isValidDNA("acgt")).toBe(true);
    expect(isValidDNA("A")).toBe(true);
    expect(isValidDNA("a")).toBe(true);
    expect(isValidDNA("G")).toBe(true);
    expect(isValidDNA("g")).toBe(true);
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("c")).toBe(true);
    expect(isValidDNA("T")).toBe(true);
    expect(isValidDNA("t")).toBe(true);
    expect(isValidDNA("ACACGTacgtGACGTacgtTaACGTaACGTacgtcgtcgt")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("Throws error with no or null parameter", () => {
    expect(() => getComplementaryDNA(undefined)).toThrowError(
      "str is required"
    );
    expect(() => getComplementaryDNA()).toThrowError("str is required");
  });

  test("throws error when passed array is invalid DNA sequence", () => {
    expect(() => getComplementaryDNA("ALSDJKLAKSJD")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("ACGTSADKJE93asd")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("1ACG")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("AdCT")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("ATfG")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("gmCGT")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("GTc@")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("zAT")).toThrowError(
      "str is not a valid DNA sequence"
    );
    expect(() => getComplementaryDNA("")).toThrowError(
      "str is not a valid DNA sequence"
    );
    "bdefhijklmnopqrsuvwxyz"
      .split("")
      .forEach((char) =>
        expect(() => getComplementaryDNA(char)).toThrowError(
          "str is not a valid DNA sequence"
        )
      );
    "bdefhijklmnopqrsuvwxyz"
      .toUpperCase()
      .split("")
      .forEach((char) =>
        expect(() => getComplementaryDNA(char)).toThrowError(
          "str is not a valid DNA sequence"
        )
      );
  });

  test("returns correct complementary DNA sequence", () => {
    const testValues = [
      { test: "a", expected: "T" },
      { test: "c", expected: "G" },
      { test: "g", expected: "C" },
      { test: "t", expected: "A" },
      { test: "A", expected: "T" },
      { test: "C", expected: "G" },
      { test: "G", expected: "C" },
      { test: "T", expected: "A" },
      { test: "AGCT", expected: "TCGA" },
      { test: "agct", expected: "TCGA" },
      { test: "AGG", expected: "TCC" },
      { test: "AaaaaAAaA", expected: "TTTTTTTTT" },
      { test: "GGggggGGGG", expected: "CCCCCCCCCC" },
      { test: "CCCcccCCCC", expected: "GGGGGGGGGG" },
      { test: "TTtttT", expected: "AAAAAA" },
      {
        test: "ACACGTacgtGACGTacgtTaACGTaACGTacgtcgtcgt",
        expected: "TGTGCATGCACTGCATGCAATTGCATTGCATGCAGCAGCA",
      },
    ];
    testValues.forEach((value) => {
      expect(getComplementaryDNA(value.test)).toBe(value.expected);
    });
  });
});
describe("isItPrime", () => {
  test("Throws error with no or null parameter", () => {
    expect(() => isItPrime(undefined)).toThrowError("n is required");
    expect(() => isItPrime()).toThrowError("n is required");
  });

  test("returns true for prime values", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(1129)).toBe(true);
    expect(isItPrime(7919)).toBe(true);
    expect(isItPrime(8623)).toBe(true);
    expect(isItPrime(9973)).toBe(true);
    expect(isItPrime(907567)).toBe(true);
  });

  test("returns false for non-prime values", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(20000000)).toBe(false);
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(-1129)).toBe(false);
    expect(isItPrime(85997179)).toBe(false);
    expect(isItPrime(1129.32)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("creates a matrix", () => {
    expect(createMatrix(1, "")).toEqual([[""]]);
    expect(createMatrix(2, "")).toEqual([
      ["", ""],
      ["", ""],
    ]);
    expect(createMatrix(1, "x")).toEqual([["x"]]);
    expect(createMatrix(2, "x")).toEqual([
      ["x", "x"],
      ["x", "x"],
    ]);
    expect(createMatrix(1, "longerword")).toEqual([["longerword"]]);

    expect(createMatrix(2, "longerword")).toEqual([
      ["longerword", "longerword"],
      ["longerword", "longerword"],
    ]);

    expect(createMatrix(3, "longerword")).toEqual([
      ["longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword"],
    ]);

    expect(createMatrix(4, "longerword")).toEqual([
      ["longerword", "longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword", "longerword"],
    ]);

    expect(createMatrix(5, "longerword")).toEqual([
      ["longerword", "longerword", "longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword", "longerword", "longerword"],
      ["longerword", "longerword", "longerword", "longerword", "longerword"],
    ]);

    {
      const size = 66;
      const contents = "very long sentences might be tricky";
      const bigMatrix = createMatrix(size, contents);
      expect(bigMatrix.length).toBe(size);
      expect(bigMatrix.every((row) => row.length === size)).toBe(true);
      expect(
        bigMatrix.every((row) => row.every((string) => string == contents))
      ).toBe(true);
    }

    {
      const size = 50;
      const contents = 12;
      const bigMatrix = createMatrix(size, contents);
      expect(bigMatrix.length).toBe(size);
      expect(bigMatrix.every((row) => row.length === size)).toBe(true);
      expect(
        bigMatrix.every((row) => row.every((string) => string == contents))
      ).toBe(true);
    }
  });

  test("throws error with first parameter missing", () => {
    expect(() => createMatrix()).toThrowError("n is required");
    expect(() => createMatrix(undefined, 1)).toThrowError("n is required");
  });

  test("throws error with second parameter missing", () => {
    expect(() => createMatrix(1)).toThrowError("fill is required");
    expect(() => createMatrix(1, undefined)).toThrowError("fill is required");
  });
});

describe("areWeCovered", () => {
  test("returns true if all rota are covered", () => {
    const rosta = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday",
        ],
      },
      { name: "Darmok", rota: ["Monday", "Thursday", "Sunday"] },
      { name: "Jalad", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Kahless", rota: ["Friday", "Saturday"] },
      { name: "Kirom", rota: ["Friday", "Saturday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });
  test("returns false if all rota is empty", () => {
    const rosta = [{ rota: [] }];
    expect(areWeCovered(rosta, "Monday")).toBe(false);
    expect(areWeCovered(rosta, "Tuesday")).toBe(false);
    expect(areWeCovered(rosta, "Wednesday")).toBe(false);
    expect(areWeCovered(rosta, "Thursday")).toBe(false);
    expect(areWeCovered(rosta, "Friday")).toBe(false);
    expect(areWeCovered(rosta, "Saturday")).toBe(false);
    expect(areWeCovered(rosta, "Sunday")).toBe(false);
  });
  test("returns false if all rota is incomplete", () => {
    const rosta = [
      {
        name: "Sally",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(false);
    expect(areWeCovered(rosta, "Tuesday")).toBe(false);
    expect(areWeCovered(rosta, "Wednesday")).toBe(false);
    expect(areWeCovered(rosta, "Thursday")).toBe(false);
    expect(areWeCovered(rosta, "Friday")).toBe(false);
    expect(areWeCovered(rosta, "Saturday")).toBe(false);
    expect(areWeCovered(rosta, "Sunday")).toBe(false);
  });

  test("returns true if all days are covered", () => {
    const rosta = [
      {
        name: "Molly",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      {
        name: "Henry",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      {
        name: "Wintermute",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });

  test("test if all days but Monday are covered", () => {
    const rosta = [
      { name: "Sally", rota: ["Tuesday", "Wednesday", "Thursday", "Friday"] },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday",
        ],
      },
      { name: "Darmok", rota: ["Monday", "Thursday", "Sunday"] },
      { name: "Jalad", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Kahless", rota: ["Friday"] },
      { name: "Kirom", rota: ["Friday", "Saturday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(false);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });

  test("test if all days but Tuesday are covered", () => {
    const rosta = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Pedro",
        rota: ["Monday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      },
      { name: "Darmok", rota: ["Monday", "Thursday", "Sunday"] },
      { name: "Jalad", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Kahless", rota: ["Friday"] },
      { name: "Kirom", rota: ["Friday", "Saturday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(false);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });

  test("test if all days but Wednesday are covered", () => {
    const rosta = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday",
        ],
      },
      { name: "Darmok", rota: ["Monday", "Thursday", "Sunday"] },
      { name: "Jalad", rota: ["Tuesday", "Saturday"] },
      { name: "Kahless", rota: ["Friday"] },
      { name: "Kirom", rota: ["Friday", "Saturday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(false);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });

  test("test if all days but Thursday are covered", () => {
    const rosta = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday",
        ],
      },
      { name: "Darmok", rota: ["Monday", "Sunday"] },
      { name: "Jalad", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Kahless", rota: ["Friday"] },
      { name: "Kirom", rota: ["Friday", "Saturday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(false);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });

  test("test if all days but Friday are covered", () => {
    const rosta = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday",
        ],
      },
      { name: "Darmok", rota: ["Monday", "Thursday", "Sunday"] },
      { name: "Jalad", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Kahless", rota: [] },
      { name: "Kirom", rota: ["Friday", "Saturday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(false);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });

  test("test if all dats but Saturday are covered", () => {
    const rosta = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday",
        ],
      },
      { name: "Darmok", rota: ["Monday", "Thursday", "Sunday"] },
      { name: "Jalad", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Kahless", rota: ["Friday"] },
      { name: "Kirom", rota: ["Friday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(false);
    expect(areWeCovered(rosta, "Sunday")).toBe(true);
  });

  test("test if all days but Sunday are covered", () => {
    const rosta = [
      {
        name: "Sally",
        rota: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      {
        name: "Pedro",
        rota: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Saturday",
          "Sunday",
        ],
      },
      { name: "Darmok", rota: ["Monday", "Thursday"] },
      { name: "Jalad", rota: ["Tuesday", "Wednesday", "Saturday"] },
      { name: "Kahless", rota: ["Friday"] },
      { name: "Kirom", rota: ["Friday", "Saturday", "Sunday"] },
    ];
    expect(areWeCovered(rosta, "Monday")).toBe(true);
    expect(areWeCovered(rosta, "Tuesday")).toBe(true);
    expect(areWeCovered(rosta, "Wednesday")).toBe(true);
    expect(areWeCovered(rosta, "Thursday")).toBe(true);
    expect(areWeCovered(rosta, "Friday")).toBe(true);
    expect(areWeCovered(rosta, "Saturday")).toBe(true);
    expect(areWeCovered(rosta, "Sunday")).toBe(false);
  });
});
