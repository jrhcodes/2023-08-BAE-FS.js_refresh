// import { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } from "../challenges/exercise007";

// describe("exercise007 getScreentimeAlertList tests", () => {

//     const userData = [
//         {
//             username: "beth_1234",
//             name: "Beth Smith",
//             screenTime: [
//                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
//                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
//                 { date: "2019-05-03", usage: { twitter: 12, instagram: 125, facebook: 19 } },
//                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
//             ]
//         },
//         {
//             username: "sam_j_1989",
//             name: "Sam Jones",
//             screenTime: [
//                 { date: "2019-05-04", usage: { twitter: 10, instagram: 6, facebook: 61 } },
//                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
//                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
//                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
//             ]
//         },
//         {
//             username: "jrhcodes",
//             name: "Julian Hirst",
//             screenTime: [
//                 { date: "2019-05-01", usage: { twitter: 34, instagram: 99, facebook: 40 } },
//                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
//                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
//                 { date: "2019-05-04", usage: { twitter: 10, instagram: 6, facebook: 61 } },
//             ]
//         }

//     ]

//     console.log(getScreentimeAlertList(userData, "2019-05-04"));
//     test("getScreentimeAlertList()", () => {
//         expect(getScreentimeAlertList(userData, '2019-05-01')).toEqual(["jrhcodes"]);
//         expect(getScreentimeAlertList(userData, '2019-05-02')).toEqual(['beth_1234', "jrhcodes"]);
//         expect(getScreentimeAlertList(userData, '2019-05-03')).toEqual(['beth_1234']);
//         expect(getScreentimeAlertList(userData, '2019-05-04')).toEqual(['beth_1234', "sam_j_1989", "jrhcodes"]);
//         expect(getScreentimeAlertList(userData, '2019-06-11')).toEqual(["sam_j_1989", "jrhcodes"]);
//         expect(getScreentimeAlertList(userData, '2019-06-13')).toEqual(['beth_1234',"sam_j_1989"]);
//         expect(getScreentimeAlertList(userData, '2019-06-14')).toEqual(["sam_j_1989"]);
//         expect(getScreentimeAlertList(userData, '2019-06-31')).toEqual([]);    

//     });
// });