import { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } from "../challenges/exercise007";

describe("exercise007 sumDigits tests", () => {
    test("sumDigits() missing parameter throws error", () => {
        expect(() => sumDigits(undefined)).toThrow('n is required');
        expect(() => sumDigits()).toThrow('n is required');
    });

    test("sumDigits() value tests", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(-123)).toBe(6);
        expect(sumDigits("123")).toBe(6);
        expect(sumDigits("-123")).toBe(6);
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits("0")).toBe(0);
        expect(sumDigits(null)).toBe(0);
        expect(sumDigits("")).toBe(0);
        expect(sumDigits("1234567890")).toBe(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0);
        expect(sumDigits("-1234567890")).toBe(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0);
    });

});

describe("exercise007 createRange tests", () => {
    test("createRange() missing/invalid parameter throws error", () => {
        expect(() => createRange(undefined)).toThrow('start is required');
        expect(() => createRange()).toThrow('start is required');
        expect(() => createRange(1, undefined)).toThrow('end is required');
        expect(() => createRange(1)).toThrow('end is required');
        expect(() => createRange(1, 2, -1)).toThrow('step value will not increment/decrement from start to end');
        expect(() => createRange(-1, -2, 1)).toThrow('step value will not increment/decrement from start to end');
        expect(() => createRange(-1, -2, 0)).toThrow('step value will not increment/decrement from start to end');
        expect(() => createRange(1, 2, 0)).toThrow('step value will not increment/decrement from start to end');
        expect(() => createRange(2, 3, 2)).toThrow('step value will not increment/decrement from start to end');
        expect(() => createRange(-2, -3, -2)).toThrow('step value will not increment/decrement from start to end');
    });

    test("createRange() value tests", () => {
        expect(createRange(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(createRange(10, 1)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
        expect(createRange(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
        expect(createRange(10, 0, -2)).toEqual([10, 8, 6, 4, 2, 0]);
        expect(createRange(10, 10, 0)).toEqual([10]);
        expect(createRange(-10, -10, 0)).toEqual([-10]);
        expect(createRange(0, 0, 0)).toEqual([0]);
    })
});

describe("exercise007 getScreentimeAlertList tests", () => {

    test("getScreentimeAlertList()", () => {
        const userData = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 75, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-06-13", usage: { mapMyRun: 50, MORGOTH: 20, facebook: 40, safari: 16 } }
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-05-04", usage: { twitter: 40, instagram: 6, facebook: 61 } },
                    { date: "2019-06-11", usage: { mapMyRun: 10, whatsApp: 10, facebook: 80, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 30, whatsApp: 50, facebook: 20, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 99, facebook: 0, safari: 31 } },
                    { date: "2019-06-30", usage: { mapMyRun: 33, whatsApp: 0, facebook: 33, safari: 33 } }
                ]
            },
            {
                username: "jrhcodes",
                name: "Julian Hirst",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 99, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 76, facebook: 61 } },
                    { date: "2019-06-11", usage: { meepu: 1, mapMyRun: 0, whatsApp: 11, moonbang: 90, facebook: 6, safari: 1 } }
                ]
            }

        ];

        expect(getScreentimeAlertList(userData, '2019-05-01')).toEqual(["jrhcodes"]);
        expect(getScreentimeAlertList(userData, '2019-05-02')).toEqual(['beth_1234', "jrhcodes"]);
        expect(getScreentimeAlertList(userData, '2019-05-03')).toEqual(['beth_1234']);
        expect(getScreentimeAlertList(userData, '2019-05-04')).toEqual(['beth_1234', "sam_j_1989", "jrhcodes"]);
        expect(getScreentimeAlertList(userData, '2019-06-11')).toEqual(["sam_j_1989", "jrhcodes"]);
        expect(getScreentimeAlertList(userData, '2019-06-13')).toEqual(['beth_1234', "sam_j_1989"]);
        expect(getScreentimeAlertList(userData, '2019-06-14')).toEqual(["sam_j_1989"]);
        expect(getScreentimeAlertList(userData, '2019-06-30')).toEqual([]);
        expect(getScreentimeAlertList(userData, '2019-06-31')).toEqual([]);
    });

    test("getScreentimeAlertList() missing parameters", () => {
        expect(() => getScreentimeAlertList(undefined, '')).toThrow('users is required');
        expect(() => getScreentimeAlertList("users", undefined)).toThrow('date is required');
    });
});

describe("exercise007 hexToRGB tests", () => {
});

describe("exercise007 findWinner tests", () => {
    test("findWinner() invalid parameters", () => {
        expect(() => findWinner(undefined)).toThrow('board is required');
    });

    test("findWinner() row 0 X", () => {
        const board = [
            ["X", "X", "X"],
            ["X", "0", "0"],
            ["0", "0", "X"]
        ];
        expect(findWinner(board)).toBe("X");
    });
    test("findWinner() row 1 X", () => {
        const board = [
            ["X", "0", "0"],
            ["X", "X", "X"],
            ["0", "X", "0"]
        ];
        expect(findWinner(board)).toBe("X");
    });
    test("findWinner() row 2 X", () => {
        const board = [
            ["X", "0", "0"],
            ["0", "0", "X"],
            ["X", "X", "X"]
        ];
        expect(findWinner(board)).toBe("X");
    });

    test("findWinner() col 0 X", () => {
        const board = [
            ["X", "X", "0"],
            ["X", "0", "X"],
            ["X", "0", "X"]
        ];
        expect(findWinner(board)).toBe("X");
    });

    test("findWinner() col 1 X", () => {
        const board = [
            ["0", "X", "0"],
            ["X", "X", "0"],
            ["0", "X", "X"]
        ];
        expect(findWinner(board)).toBe("X");
    });

    test("findWinner() col 2 X", () => {
        const board = [
            ["0", "X", "X"],
            ["X", "0", "X"],
            ["0", "X", "X"]
        ];
        expect(findWinner(board)).toBe("X");
    });
    test("findWinner() diagonal 1 X", () => {
        const board = [
            ["X", "0", "X"],
            ["X", "X", "0"],
            ["0", "X", "X"]
        ];
        expect(findWinner(board)).toBe("X");
    });
    test("findWinner() diagonal 2 X", () => {
        const board = [
            ["0", "0", "X"],
            ["X", "X", "0"],
            ["X", "X", "X"]
        ];
        expect(findWinner(board)).toBe("X");
    });
    test("findWinner() row 0 0", () => {
        const board = [
            ["0", "0", "0"],
            ["0", "X", "X"],
            ["X", "X", "0"]
        ];
        expect(findWinner(board)).toBe("0");
    });
    test("findWinner() row 1 0", () => {
        const board = [
            ["0", "X", "X"],
            ["0", "0", "0"],
            ["X", "0", "X"]
        ];
        expect(findWinner(board)).toBe("0");
    });
    test("findWinner() row 2 0", () => {
        const board = [
            ["0", "X", "X"],
            ["X", "X", "0"],
            ["0", "0", "0"]
        ];
        expect(findWinner(board)).toBe("0");
    });

    test("findWinner() col 0 0", () => {
        const board = [
            ["0", "0", "X"],
            ["0", "X", "0"],
            ["0", "X", "0"]
        ];
        expect(findWinner(board)).toBe("0");
    });

    test("findWinner() col 1 0", () => {
        const board = [
            ["X", "0", "X"],
            ["0", "0", "X"],
            ["X", "0", "0"]
        ];
        expect(findWinner(board)).toBe("0");
    });

    test("findWinner() col 2 0", () => {
        const board = [
            ["X", "0", "0"],
            ["0", "X", "0"],
            ["X", "0", "0"]
        ];
        expect(findWinner(board)).toBe("0");
    });
    test("findWinner() diagonal 1 0", () => {
        const board = [
            ["0", "X", "0"],
            ["0", "0", "X"],
            ["X", "0", "0"]
        ];
        expect(findWinner(board)).toBe("0");
    });
    test("findWinner() diagonal 2 0", () => {
        const board = [
            ["X", "X", "0"],
            ["0", "0", "X"],
            ["0", "0", "0"]
        ];
        expect(findWinner(board)).toBe("0");
    });
});