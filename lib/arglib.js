export const errorMessageArgummentMissing = (variableInfo) => _errorArgummentMissing(Object.keys(variableInfo)[0]);
export const errorMessageArgumentType = (variableInfo, type) => _errorMessageArgumenttype(Object.keys(variableInfo)[0], type);
export const errorMessageStringRequired = (variableInfo) => _errorMessageStringRequired(Object.keys(variableInfo)[0]);
export const errorMessageNumberRequired = (variableInfo) => _errorMessageNumberRequired(Object.keys(variableInfo)[0]);
export const errorMessageIntegerRequired = (variableInfo) => _errorMessageIntegerRequired(Object.keys(variableInfo)[0]);
export const errorMessagePositiveIntegerRequired = (variableInfo) => _errorMessagePositiveIntegerRequired(Object.keys(variableInfo)[0]);
export const errorMessageArrayRequired = (variableInfo) => _errorMessageArrayRequired(Object.keys(variableInfo)[0]);
export const errorMessageStringArrayRequired = (variableInfo) => _errorMessageStringArrayRequired(Object.keys(variableInfo)[0]);
export const errorMessagePositiveIntegerArrayRequired = (variableInfo) => _errorMessagePositiveIntegerArrayRequired(Object.keys(variableInfo)[0]);
export const errorMessageNumberArrayRequired = (variableInfo) => _errorMessageNumberArrayRequired(Object.keys(variableInfo)[0]);
export const errorMessageIntegerArrayRequired = (variableInfo) => _errorMessageIntegerArrayRequired(Object.keys(variableInfo)[0]);

const _errorArgummentMissing = (variableName) => `argument '${variableName}' required`;
const _errorMessageArgumenttype = (variableName, type) => `argument '${variableName}' must be of type '${type}'`;
const _errorMessageStringRequired = (variableName) => _errorMessageArgumenttype(variableName, 'string');
const _errorMessageNumberRequired = (variableName) => _errorMessageArgumenttype(variableName, 'number');
const _errorMessageIntegerRequired = (variableName) => _errorMessageArgumenttype(variableName, 'integer');
const _errorMessagePositiveIntegerRequired = (variableName) => _errorMessageArgumenttype(variableName, 'positive integer');
const _errorMessageArrayRequired = (variableName) => _errorMessageArgumenttype(variableName, 'array');
const _errorMessageStringArrayRequired = (variableName) => _errorMessageArgumenttype(variableName, 'string array');
const _errorMessagePositiveIntegerArrayRequired = (variableName) => _errorMessageArgumenttype(variableName, 'positive integer array');
const _errorMessageNumberArrayRequired = (variableName) => _errorMessageArgumenttype(variableName, 'number array');
const _errorMessageIntegerArrayRequired = (variableName) => _errorMessageArgumenttype(variableName, 'integer array');


const baseArgumentRequired = (value, variableName) => {
    if (value === undefined) throw new Error(_errorArgummentMissing(variableName));
};

export const argumentRequired = (variableInfo) => {
    console.log(variableInfo);
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
};

export const requiredNumberArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'number') throw new Error(_errorMessageNumberRequired(variableName));
};

export const requiredIntegerArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'number' || value % 1 != 0) throw new Error(_errorMessageIntegerRequired(variableName));
};

export const requiredPositiveIntegerArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'number' || value <= 0 || value % 1 != 0) throw new Error(_errorMessagePositiveIntegerRequired(variableName));
};

export const requiredStringArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'string') throw new Error(_errorMessageStringRequired(variableName));
};

export const requiredArrayArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (!Array.isArray(value)) throw new Error(_errorMessageArrayRequired(variableName));
};

export const requiredStringArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'string') throw new Error(_errorMessageStringArrayRequired(variableName));
};

export const requiredNumberArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'number') throw new Error(_errorMessageNumberArrayRequired(variableName));
};

export const requiredIntegerArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'number' || array.some(value => value % 1 != 0)) throw new Error(_errorMessageIntegerArrayRequired(variableName));
};

export const requiredPositiveIntegerArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'number' || array.some(value => value <= 0 || value % 1 != 0)) throw new Error(_errorMessagePositiveIntegerArrayRequired(variableName));
};
