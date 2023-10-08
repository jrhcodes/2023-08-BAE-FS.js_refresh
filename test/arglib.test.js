import {
    error_argumment_missing,
    error_argument_type,
    error_string_required,
    error_number_required,
    error_integer_required,
    error_positive_integer_required,
    error_array_required,
    error_string_array_required,
    error_positive_integer_array_required,
    error_number_array_required,
    error_integer_array_required,
    argumentRequired,
    requiredNumberArgument,
    requiredIntegerArgument,
    requiredPositiveIntegerArgument,
    requiredStringArgument,
    requiredArrayArgument,
    requiredStringArrayArgument,
    requiredNumberArrayArgument,
    requiredIntegerArrayArgument,
    requiredPositiveIntegerArrayArgument
} from '../lib/arglib';



describe('error_argumment_missing', () => {

    test('should throw an error when an argument is missing', () => {
        const undefinedVariable = undefined;
        expect(() => argumentRequired({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredNumberArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredIntegerArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredPositiveIntegerArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredStringArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredArrayArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredStringArrayArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredNumberArrayArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredIntegerArrayArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
        expect(() => requiredPositiveIntegerArrayArgument({ undefinedVariable })).toThrowError(error_argumment_missing({ undefinedVariable }));
    });

    const str = 'this is a string';
    const regex = /this is a regex/;
    const integer = 0;
    const positiveInteger = 1;
    const nonIntegerNumber = 1.1;
    const negativeInteger = -1;
    const array = [];
    const stringArray = ['this is a string', 'so is this'];
    const numberArray = [1.1, -2, 212.3];
    const integerArray = [1, -2, 3];
    const positiveIntegerArray = [1, 2, 3];
    const mixedArray = [str, regex, integer, positiveInteger, nonIntegerNumber, negativeInteger, stringArray, array, numberArray, integerArray, positiveIntegerArray];

    const testVariableArray = [
        { str }, { regex }, { integer }, { positiveInteger }, { nonIntegerNumber }, { negativeInteger },
        { stringArray }, { array }, { numberArray }, { integerArray }, { positiveIntegerArray }, { mixedArray }];

    testVariableArray.forEach(testVariable => {

        const testValue = Object.values(testVariable)[0];

        if (typeof testValue != 'number') {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) throws error "${error_number_required(testVariable)}"`, () => {
                expect(() => requiredNumberArgument(testVariable)).toThrowError(error_number_required(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredNumberArgument(testVariable).not.toThrowError());
            });
        }

        if (typeof testValue != 'string') {
            test(`test requiredStringArgument(${Object.entries(testVariable)[0]}) throws error "${error_string_required(testVariable)}"`, () => {
                expect(() => requiredStringArgument(testVariable)).toThrowError(error_string_required(testVariable));
            });
        } else {
            test(`test requiredStringArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredStringArgument(testVariable).not.toThrowError());
            });
        }

        if (typeof testValue != 'number' || testValue % 1 != 0) {
            test(`test requiredIntegerArgument(${Object.entries(testVariable)[0]}) throws error "${error_integer_required(testVariable)}"`, () => {
                expect(() => requiredIntegerArgument(testVariable)).toThrowError(error_integer_required(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredIntegerArgument(testVariable).not.toThrowError());
            });
        }

        if (typeof testValue != 'number' || testValue % 1 != 0 || testValue <= 0) {
            test(`test requiredPositiveIntegerArgument(${Object.entries(testVariable)[0]}) throws error "${error_positive_integer_required(testVariable)}"`, () => {
                expect(() => requiredPositiveIntegerArgument(testVariable)).toThrowError(error_positive_integer_required(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredPositiveIntegerArgument(testVariable).not.toThrowError());
            });
        }

        if (!Array.isArray(testValue)) {
            test(`test requiredArrayArgument(${Object.entries(testVariable)[0]}) throws error "${error_array_required(testVariable)}"`, () => {
                expect(() => requiredArrayArgument(testVariable)).toThrowError(error_array_required(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredArrayArgument(testVariable).not.toThrowError());
            });
        }
    });
});