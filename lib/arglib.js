export const error_argumment_missing = (variableInfo) => _error_argumment_missing(Object.keys(variableInfo)[0]);
export const error_argument_type = (variableInfo, type) => _error_argument_type(Object.keys(variableInfo)[0], type);
export const error_string_required = (variableInfo) => _error_string_required(Object.keys(variableInfo)[0]);
export const error_number_required = (variableInfo) => _error_number_required(Object.keys(variableInfo)[0]);
export const error_integer_required = (variableInfo) => _error_integer_required(Object.keys(variableInfo)[0]);
export const error_positive_integer_required = (variableInfo) => _error_positive_integer_required(Object.keys(variableInfo)[0]);
export const error_array_required = (variableInfo) => _error_array_required(Object.keys(variableInfo)[0]);
export const error_string_array_required = (variableInfo) => _error_string_array_required(Object.keys(variableInfo)[0]);
export const error_positive_integer_array_required = (variableInfo) => _error_positive_integer_array_required(Object.keys(variableInfo)[0]);
export const error_number_array_required = (variableInfo) => _error_number_array_required(Object.keys(variableInfo)[0]);
export const error_integer_array_required = (variableInfo) => _error_integer_array_required(Object.keys(variableInfo)[0]);

const _error_argumment_missing = (variableName) => `argument '${variableName}' required`;
const _error_argument_type = (variableName, type) => `argument '${variableName}' must be of type: '${type}'`;
const _error_string_required = (variableName) => _error_argument_type(variableName, 'string');
const _error_number_required = (variableName) => _error_argument_type(variableName, 'number');
const _error_integer_required = (variableName) => _error_argument_type(variableName, 'integer');
const _error_positive_integer_required = (variableName) => _error_argument_type(variableName, 'positive integer');
const _error_array_required = (variableName) => _error_argument_type(variableName, 'array');
const _error_string_array_required = (variableName) => _error_argument_type(variableName, 'string array');
const _error_positive_integer_array_required = (variableName) => _error_argument_type(variableName, 'positive integer array');
const _error_number_array_required = (variableName) => _error_argument_type(variableName, 'number array');
const _error_integer_array_required = (variableName) => _error_argument_type(variableName, 'integer array');


const baseArgumentRequired = (value, variableName) => {
    if (value === undefined) throw new Error(_error_argumment_missing(variableName));
};

export const argumentRequired = (variableInfo) => {
    console.log(variableInfo);
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
};

export const requiredNumberArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'number') throw new Error(_error_number_required(variableName));
};

export const requiredIntegerArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'number' || value % 1 != 0) throw new Error(_error_integer_required(variableName));
};

export const requiredPositiveIntegerArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'number' || value <= 0 || value % 1 != 0) throw new Error(_error_positive_integer_required(variableName));
};

export const requiredStringArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (typeof value !== 'string') throw new Error(_error_string_required(variableName));
};

export const requiredArrayArgument = (variableInfo) => {
    const [variableName, value] = Object.entries(variableInfo)[0];
    baseArgumentRequired(value, variableName);
    if (!Array.isArray(value)) throw new Error(_error_array_required(variableName));
};

export const requiredStringArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'string') throw new Error(_error_string_array_required(variableName));
};

export const requiredNumberArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'number') throw new Error(_error_number_array_required(variableName));
};

export const requiredIntegerArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'number' || array.some(value => value % 1 != 0)) throw new Error(_error_integer_array_required(variableName));
};

export const requiredPositiveIntegerArrayArgument = (variableInfo) => {
    const [variableName, array] = Object.entries(variableInfo)[0];
    baseArgumentRequired(array, variableName);
    if (!Array.isArray(array) || typeof array[0] !== 'number' || array.some(value => value <= 0 || value % 1 != 0)) throw new Error(_error_positive_integer_array_required(variableName));
};
