import {
  printColours,
  shoppingList,
  highestNumber,
  splitThatString,
  addressLookUp,
} from "../challenges/exercise008.js";

import {
  errorMessageArgummentMissing,
  errorMessageNumberArrayRequired,
  errorMessageStringRequired,
  errorMessageStringArrayRequired,
  errorMessageArrayRequired,
} from "../lib/arguments.js";

describe("colours", () => {
  test("returns a list of colours", () => {
    const colours = ["red", "orange", "green"];
    expect(printColours(colours)).toEqual(colours);
  });
  test("throws error if no parameter or underfined passed", () => {
    const colours = undefined;
    expect(() => printColours(colours)).toThrow(
      errorMessageArgummentMissing({ colours })
    );
    expect(() => printColours()).toThrow(
      errorMessageArgummentMissing({ colours })
    );
    expect(() => printColours(undefined)).toThrow(
      errorMessageArgummentMissing({ colours })
    );
  });
  test(`throws error if variable which isn't a string array is passed`, () => {
    const colours = undefined;
    expect(() => printColours(0)).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours("")).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours([])).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours({})).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours(/ /)).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours(null)).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
  });

  test(`throws error if an array which isn't an array of strings is passed`, () => {
    const colours = undefined;
    expect(() => printColours([0, 1, [0]])).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours([1, "", 1])).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours([1, {}])).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
    expect(() => printColours([/ /, 1])).toThrow(
      errorMessageStringArrayRequired({ colours })
    );
  });
});

describe("shoppingList", () => {
  test("returns a list with an extra item", () => {
    const list = ["one apple", "two dozen organic eggs", "cucumber", "bread"];
    const newItems = ["earl grey tea"];
    expect(shoppingList(list, newItems)).toEqual([
      "one apple",
      "two dozen organic eggs",
      "cucumber",
      "bread",
      "earl grey tea",
    ]);
  });

  test("returns a list with extra items, cases where either newItems or list are empty lists", () => {
    const list = ["jelly", "melon", "pear", "plums"];
    expect(shoppingList(list, [])).toEqual(list);
    expect(shoppingList([], [])).toEqual([]);
    expect(shoppingList([], list)).toEqual(list);
  });

  test("throws an error if no list is passed, or undefined", () => {
    const list = undefined;
    const newItems = ["x"];
    expect(() => shoppingList(undefined)).toThrow(
      errorMessageArgummentMissing({ list })
    );
    expect(() => shoppingList()).toThrow(
      errorMessageArgummentMissing({ list })
    );
    expect(() => shoppingList(list)).toThrow(
      errorMessageArgummentMissing({ list })
    );
    expect(() => shoppingList(undefined, newItems)).toThrow(
      errorMessageArgummentMissing({ list })
    );
    expect(() => shoppingList(list, newItems)).toThrow(
      errorMessageArgummentMissing({ list })
    );
  });

  test("throws an error if no new item list is passed, or undefined", () => {
    const list = [];
    const newItems = undefined;
    expect(() => shoppingList(list, undefined)).toThrow(
      errorMessageArgummentMissing({ newItems })
    );
    expect(() => shoppingList(list)).toThrow(
      errorMessageArgummentMissing({ newItems })
    );
    expect(() => shoppingList(list, newItems)).toThrow(
      errorMessageArgummentMissing({ newItems })
    );
    expect(() => shoppingList(list, newItems)).toThrow(
      errorMessageArgummentMissing({ newItems })
    );
  });

  test("throws an error if list is not an array", () => {
    const list = {};
    const newItems = ["x"];
    expect(() => shoppingList(0)).toThrow(errorMessageArrayRequired({ list }));
    expect(() => shoppingList("")).toThrow(errorMessageArrayRequired({ list }));
    expect(() => shoppingList({})).toThrow(errorMessageArrayRequired({ list }));
    expect(() => shoppingList(/ /)).toThrow(
      errorMessageArrayRequired({ list })
    );
    expect(() => shoppingList(list)).toThrow(
      errorMessageArrayRequired({ list })
    );
    expect(() => shoppingList(0, newItems)).toThrow(
      errorMessageArrayRequired({ list })
    );
    expect(() => shoppingList("", newItems)).toThrow(
      errorMessageArrayRequired({ list })
    );
    expect(() => shoppingList({}, newItems)).toThrow(
      errorMessageArrayRequired({ list })
    );
    expect(() => shoppingList(/ /, newItems)).toThrow(
      errorMessageArrayRequired({ list })
    );
    expect(() => shoppingList(list, newItems)).toThrow(
      errorMessageArrayRequired({ list })
    );
  });
  test("throws an error if newItems is not an array", () => {
    const list = ["hello", "world"];
    const newItems = {};

    expect(() => shoppingList(list, 0)).toThrow(
      errorMessageArrayRequired({ newItems })
    );
    expect(() => shoppingList(list, "")).toThrow(
      errorMessageArrayRequired({ newItems })
    );
    expect(() => shoppingList(list, {}, newItems)).toThrow(
      errorMessageArrayRequired({ newItems })
    );
    expect(() => shoppingList(list, / /, newItems)).toThrow(
      errorMessageArrayRequired({ newItems })
    );
    expect(() => shoppingList(list, newItems)).toThrow(
      errorMessageArrayRequired({ newItems })
    );
  });
});

describe("highestNumber", () => {
  test("throws error if no parameter or underfined passed", () => {
    const numbers = undefined;
    expect(() => highestNumber()).toThrow(
      errorMessageArgummentMissing({ numbers })
    );
    expect(() => highestNumber(undefined)).toThrow(
      errorMessageArgummentMissing({ numbers })
    );
    expect(() => highestNumber(numbers)).toThrow(
      errorMessageArgummentMissing({ numbers })
    );
  }); 

  test(`throws error if variable which isn't an number array is passed`, () => {
    const numbers = undefined;
    expect(() => highestNumber(0)).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
    expect(() => highestNumber([])).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );

    expect(() => highestNumber("")).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
    expect(() => highestNumber({})).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
    expect(() => highestNumber(/ /)).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
    expect(() => highestNumber(null)).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
  });

  test(`throws error if an array which isn't an array of numbers is passed`, () => {
    const numbers = undefined;
    expect(() => highestNumber([0, 1, [0]])).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
    expect(() => highestNumber([1, "", 1])).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
    expect(() => highestNumber([1, {}])).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
    expect(() => highestNumber([/ /, 1])).toThrow(
      errorMessageNumberArrayRequired({ numbers })
    );
  });

  test("returns the highest number", () => {
    const numbers = [12, 20, 18];
    expect(highestNumber(numbers)).toEqual(20);
  });
});

describe("splitThatString", () => {
  test("returns a string split up", () => {
    const string = "USA";
    expect(splitThatString(string)).toEqual(["U", "S", "A"]);
  });
  test("returns a string split up", () => {
    const string = "123";
    expect(splitThatString(string)).toEqual(["1", "2", "3"]);
  });
  test("returns a string split up", () => {
    const string = "";
    expect(splitThatString(string)).toEqual([]);
  });
  test("throws an error when string is undefined", () => {
    const string = undefined;
    expect(() => splitThatString(string)).toThrow(
      errorMessageArgummentMissing({ string })
    );
    expect(() => splitThatString()).toThrow(
      errorMessageArgummentMissing({ string })
    );
  });

  test("throws an error when non-string is passed", () => {
    const string = undefined;
    expect(() => splitThatString(0)).toThrow(
      errorMessageStringRequired({ string })
    );
    expect(() => splitThatString(/w/)).toThrow(
      errorMessageStringRequired({ string })
    );
    expect(() => splitThatString([])).toThrow(
      errorMessageStringRequired({ string })
    );
    expect(() => splitThatString({})).toThrow(
      errorMessageStringRequired({ string })
    );
  });
});

describe("addressLookUp", () => {
  test("returns a string when postcode is given", () => {
    const user = [
      {
        address: {
          postcode: "12345",
        },
      },
      {
        address: {
          postcode: "M31 4HH",
        },
      },
      {
        address: {
          postcode: "",
        },
      },
    ];

    expect(addressLookUp(user[0])).toEqual("12345");
    expect(addressLookUp(user[1])).toEqual("M31 4HH");
    expect(addressLookUp(user[2])).toEqual("");
  });

  test("returns undefined when no postcode is given", () => {
    const user = { address: {} };

    expect(addressLookUp(user)).toEqual(undefined);
  });

  test("returns undefined when no address is given", () => {
    const user = {};
    expect(addressLookUp(user)).toEqual(undefined);
  });

  test("throws error when user is undefined or omitted", () => {
    const user = undefined;
    expect(() => addressLookUp(user)).toThrow(
      errorMessageArgummentMissing({ user })
    );
  });
});
