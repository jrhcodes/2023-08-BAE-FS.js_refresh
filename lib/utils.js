const numberArg = (value, variableName) => {
    if (value === undefined) throw new Error(`argument '${variableName}' required`);
    if(typeof value!== 'number') throw new Error(`argument '${variableName}' must be a number`);
};

const stringArg = (value, variableName) => {
    if (value === undefined) throw new Error(`argument '${variableName}' required`);
    if(typeof value!== 'string') throw new Error(`argument '${variableName}' must be a string`);
};

export const floorTo2DP = (value) => {
    numberArg(value, 'value');
    return Math.floor(100*value)/100.0;
};
export const roundTo2DP = (value) => {
    numberArg(value, 'value');
    return Math.round(100*value)/100.0;
}

export const countCharOccurrences = (str, char) => {
    stringArg(str, 'str');
    stringArg(char, 'char');
    return str.split('').reduce((total, thisChar) => total + (char === thisChar ? 1 : 0), 0);
}
  