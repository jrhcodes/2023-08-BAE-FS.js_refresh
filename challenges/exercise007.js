/* 
	👉 These exercises are a great extra challenge to push your JavaScript skills. Go for it!
*/

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");
  return [...String(Math.abs(n))]
    .filter((digit) => "0" <= digit && "9" >= digit)
    .map(Number)
    .reduce((total, i) => total + i, 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = Math.sign(end - start)) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  const arrayLength = Math.abs(end - start) / Math.max(1, Math.abs(step)) + 1;

  if (
    (step === 0 && start != end) ||
    start * step > end * step ||
    arrayLength % 1 != 0
  )
    throw new Error(
      "step value will not increment/decrement from start to end"
    );

  return Array.from(
    { length: arrayLength },
    (_, index) => start + index * step
  );
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  return users
    .filter((user) => {
      const screenTimeEntry = user.screenTime.find(
        (screenTime) => screenTime.date === date
      );
      const totalUsage = screenTimeEntry
        ? Object.values(screenTimeEntry.usage).reduce(
            (total, item) => total + item,
            0
          )
        : 0;
      return totalUsage > 100;
    })
    .map((user) => user.username);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  if (!/^#[0-9A-Fa-f]{6}$/.test(hexStr)) {
    throw new Error("Invalid hex color code");
  }

  const red = parseInt(hexStr.slice(1, 3), 16);
  const green = parseInt(hexStr.slice(3, 5), 16);
  const blue = parseInt(hexStr.slice(5, 7), 16);

  return `rgb(${red},${green},${blue})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

  if (board.some((row) => row.some((cell) => cell === null))) return null;

  const checkRowWinner = () => {
    const winningRow = board.find(
      (row) => row[0] === row[1] && row[0] === row[2]
    );
    return winningRow ? winningRow[0] : null;
  };

  const checkColumnWinner = () => {
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return board[0][col];
      }
    }
    return null;
  };

  const checkDiagonalWinner = () => {
    if (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0])
    ) {
      return board[1][1];
    }
    return null;
  };

  return checkRowWinner() || checkColumnWinner() || checkDiagonalWinner();
};
