import {
    errorMessageArgummentMissing,
    errorMessageArgumentType,
    errorMessageStringRequired,
    errorMessageNumberRequired,
    errorMessageIntegerRequired,
    errorMessagePositiveIntegerRequired,
    errorMessageArrayRequired,
    errorMessageStringArrayRequired,
    errorMessagePositiveIntegerArrayRequired,
    errorMessageNumberArrayRequired,
    errorMessageIntegerArrayRequired,
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



describe('errorArgumment_missing', () => {

    test('check error message text', () => {
        const testVariable = 'test';
        expect(errorMessageArgummentMissing({ testVariable })).toEqual(`argument 'testVariable' required`);
        expect(errorMessageArgumentType({ testVariable }, 'Y')).toEqual(`argument 'testVariable' must be of type 'Y'`);
        expect(errorMessageStringRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'string'`);
        expect(errorMessageNumberRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'number'`);
        expect(errorMessageIntegerRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'integer'`);
        expect(errorMessagePositiveIntegerRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'positive integer'`);
        expect(errorMessageArrayRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'array'`);
        expect(errorMessageStringArrayRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'string array'`);
        expect(errorMessagePositiveIntegerArrayRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'positive integer array'`);
        expect(errorMessageNumberArrayRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'number array'`);
        expect(errorMessageIntegerArrayRequired({ testVariable })).toEqual(`argument 'testVariable' must be of type 'integer array'`);
    });

    test('should throw an error when an argument is missing', () => {
        const undefinedVariable = undefined;
        expect(() => argumentRequired({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredNumberArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredIntegerArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredPositiveIntegerArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredStringArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredArrayArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredStringArrayArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredNumberArrayArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredIntegerArrayArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
        expect(() => requiredPositiveIntegerArrayArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
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
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) throws error "${errorMessageNumberRequired(testVariable)}"`, () => {
                expect(() => requiredNumberArgument(testVariable)).toThrowError(errorMessageNumberRequired(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredNumberArgument(testVariable).not.toThrowError());
            });
        }

        if (typeof testValue != 'string') {
            test(`test requiredStringArgument(${Object.entries(testVariable)[0]}) throws error "${errorMessageStringRequired(testVariable)}"`, () => {
                expect(() => requiredStringArgument(testVariable)).toThrowError(errorMessageStringRequired(testVariable));
            });
        } else {
            test(`test requiredStringArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredStringArgument(testVariable).not.toThrowError());
            });
        }

        if (typeof testValue != 'number' || testValue % 1 != 0) {
            test(`test requiredIntegerArgument(${Object.entries(testVariable)[0]}) throws error "${errorMessageIntegerRequired(testVariable)}"`, () => {
                expect(() => requiredIntegerArgument(testVariable)).toThrowError(errorMessageIntegerRequired(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredIntegerArgument(testVariable).not.toThrowError());
            });
        }

        if (typeof testValue != 'number' || testValue % 1 != 0 || testValue <= 0) {
            test(`test requiredPositiveIntegerArgument(${Object.entries(testVariable)[0]}) throws error "${errorMessagePositiveIntegerRequired(testVariable)}"`, () => {
                expect(() => requiredPositiveIntegerArgument(testVariable)).toThrowError(errorMessagePositiveIntegerRequired(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredPositiveIntegerArgument(testVariable).not.toThrowError());
            });
        }

        if (!Array.isArray(testValue)) {
            test(`test requiredArrayArgument(${Object.entries(testVariable)[0]}) throws error "${errorMessageArrayRequired(testVariable)}"`, () => {
                expect(() => requiredArrayArgument(testVariable)).toThrowError(errorMessageArrayRequired(testVariable));
            });
        } else {
            test(`test requiredNumberArgument(${Object.entries(testVariable)[0]}) does not throw error.`, () => {
                expect(() => requiredArrayArgument(testVariable).not.toThrowError());
            });
        }
    });
});