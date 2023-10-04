export const floorToNDecimals = (value, n) => {
    const stringFromValue = value.toString();
    const decimalPosition = stringFromValue.indexOf('.')
    
    return decimalPosition >= 0 ? 
        Number(stringFromValue.slice(0, decimalPosition + n + 1))
        :
        value;
}

export const floorTo2DP = (value ) => Math.floor(100*value)/100.0;
export const roundTo2DP = (value ) => Math.round(100*value)/100.0;

export const countCharOccurrences = (str, char) => str.split('').reduce((total, thisChar) => total + (char === thisChar ? 1 : 0), 0);