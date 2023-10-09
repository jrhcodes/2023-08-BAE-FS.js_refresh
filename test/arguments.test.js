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
    requiredArgument,
    requiredNumberArgument,
    requiredIntegerArgument,
    requiredPositiveIntegerArgument,
    requiredStringArgument,
    requiredArrayArgument,
    requiredStringArrayArgument,
    requiredNumberArrayArgument,
    requiredIntegerArrayArgument,
    requiredPositiveIntegerArrayArgument
} from '../lib/arguments.js';




describe('errorArgumment_missing', () => {

    test('check error message text for all functions', () => {
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

    test('should throw an error when an argument is missing for all functions', () => {
        const undefinedVariable = undefined;
        expect(() => requiredArgument({ undefinedVariable })).toThrowError(errorMessageArgummentMissing({ undefinedVariable }));
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

    const argument = undefined;
    const string = 'this is a string';
    const regex = /this is a regex/;
    const integer = 0;
    const positiveInteger = 1;
    const nonIntegerNumber = 1.1;
    const negativeInteger = -1;
    const emptyArray = [];
    const stringArray = ['this is a string', 'so is this'];
    const numberArray = [1.1, -2, 212.3];
    const integerArray = [1, -2, 3];
    const positiveIntegerArray = [1, 2, 3];
    const mixedArray = [string, regex, integer, positiveInteger, nonIntegerNumber, negativeInteger];
    const nullObject = null;
    const boolean = false;
    const object = {};

    test(`test requiredNumberArgument throws error "${errorMessageNumberRequired({argument})}" when argument is not a number`, () => {
        expect(() => requiredNumberArgument({ string })).toThrowError(errorMessageNumberRequired({string}));
        expect(() => requiredNumberArgument({ regex })).toThrowError(errorMessageNumberRequired({regex}));
        expect(() => requiredNumberArgument({ emptyArray })).toThrowError(errorMessageNumberRequired({emptyArray}));
        expect(() => requiredNumberArgument({ object })).toThrowError(errorMessageNumberRequired({object}));
        expect(() => requiredNumberArgument({ nullObject })).toThrowError(errorMessageNumberRequired({nullObject}));
        expect(() => requiredNumberArgument({ boolean })).toThrowError(errorMessageNumberRequired({boolean}));
        expect(() => requiredNumberArgument({ stringArray })).toThrowError(errorMessageNumberRequired({stringArray}));
        expect(() => requiredNumberArgument({ numberArray })).toThrowError(errorMessageNumberRequired({numberArray}));
        expect(() => requiredNumberArgument({ integerArray })).toThrowError(errorMessageNumberRequired({integerArray}));
        expect(() => requiredNumberArgument({ positiveIntegerArray })).toThrowError(errorMessageNumberRequired({positiveIntegerArray}));
        expect(() => requiredNumberArgument({ mixedArray })).toThrowError(errorMessageNumberRequired({mixedArray}));
    });

    test(`test requiredNumberArgument doesn't throw error when argument is a number`, () => {
        expect(() => requiredNumberArgument({ integer })).not.toThrowError();
        expect(() => requiredNumberArgument({ positiveInteger })).not.toThrowError();
        expect(() => requiredNumberArgument({ nonIntegerNumber })).not.toThrowError();
        expect(() => requiredNumberArgument({ negativeInteger })).not.toThrowError();

    });

    test(`test requiredStringArgument throws error "${errorMessageStringRequired({argument})}" when argument is not a string`, () => {
        expect(() => requiredStringArgument({ regex })).toThrowError(errorMessageStringRequired({regex}));
        expect(() => requiredStringArgument({ emptyArray })).toThrowError(errorMessageStringRequired({emptyArray}));
        expect(() => requiredStringArgument({ object })).toThrowError(errorMessageStringRequired({object}));
        expect(() => requiredStringArgument({ nullObject })).toThrowError(errorMessageStringRequired({nullObject}));
        expect(() => requiredStringArgument({ boolean })).toThrowError(errorMessageStringRequired({boolean}));
        expect(() => requiredStringArgument({ stringArray })).toThrowError(errorMessageStringRequired({stringArray}));
        expect(() => requiredStringArgument({ numberArray })).toThrowError(errorMessageStringRequired({numberArray}));
        expect(() => requiredStringArgument({ integerArray })).toThrowError(errorMessageStringRequired({integerArray}));
        expect(() => requiredStringArgument({ positiveIntegerArray })).toThrowError(errorMessageStringRequired({positiveIntegerArray}));
        expect(() => requiredStringArgument({ mixedArray })).toThrowError(errorMessageStringRequired({mixedArray}));
        expect(() => requiredStringArgument({ integer })).toThrowError(errorMessageStringRequired({integer}));
        expect(() => requiredStringArgument({ positiveInteger })).toThrowError(errorMessageStringRequired({positiveInteger}));
        expect(() => requiredStringArgument({ nonIntegerNumber })).toThrowError(errorMessageStringRequired({nonIntegerNumber}));
        expect(() => requiredStringArgument({ negativeInteger })).toThrowError(errorMessageStringRequired({negativeInteger}));
    });

    test(`test requiredStringArgument doesn't throw error when argument is a string`, () => {
        expect(() => requiredStringArgument({ string })).not.toThrowError();
    });

    test(`test requiredIntegerArgument({ throws error "${errorMessageIntegerRequired({argument})}" when argument is not an integer`, () => {
        expect(() => requiredIntegerArgument({ string })).toThrowError(errorMessageIntegerRequired({string}));
        expect(() => requiredIntegerArgument({ regex })).toThrowError(errorMessageIntegerRequired({regex}));
        expect(() => requiredIntegerArgument({ emptyArray })).toThrowError(errorMessageIntegerRequired({emptyArray}));
        expect(() => requiredIntegerArgument({ object })).toThrowError(errorMessageIntegerRequired({object}));
        expect(() => requiredIntegerArgument({ nullObject })).toThrowError(errorMessageIntegerRequired({nullObject}));
        expect(() => requiredIntegerArgument({ boolean })).toThrowError(errorMessageIntegerRequired({boolean}));
        expect(() => requiredIntegerArgument({ stringArray })).toThrowError(errorMessageIntegerRequired({stringArray}));
        expect(() => requiredIntegerArgument({ numberArray })).toThrowError(errorMessageIntegerRequired({numberArray}));
        expect(() => requiredIntegerArgument({ integerArray })).toThrowError(errorMessageIntegerRequired({integerArray}));
        expect(() => requiredIntegerArgument({ positiveIntegerArray })).toThrowError(errorMessageIntegerRequired({positiveIntegerArray}));
        expect(() => requiredIntegerArgument({ mixedArray })).toThrowError(errorMessageIntegerRequired({mixedArray}));
        expect(() => requiredIntegerArgument({ nonIntegerNumber })).toThrowError(errorMessageIntegerRequired({nonIntegerNumber}));
     });

    test(`test requiredIntegerArgument({ doesn't throw error when argument is an integer`, () => {
        expect(() => requiredIntegerArgument({ integer })).not.toThrowError();
        expect(() => requiredIntegerArgument({ positiveInteger })).not.toThrowError();
        expect(() => requiredIntegerArgument({ negativeInteger })).not.toThrowError();
    });

    test(`test requiredPositiveIntegerArgument({ throws error "${errorMessagePositiveIntegerRequired({argument})}" when argument is not a positive integer`, () => {
        expect(() => requiredPositiveIntegerArgument({ string })).toThrowError(errorMessagePositiveIntegerRequired({string}));
        expect(() => requiredPositiveIntegerArgument({ regex })).toThrowError(errorMessagePositiveIntegerRequired({regex}));
        expect(() => requiredPositiveIntegerArgument({ emptyArray })).toThrowError(errorMessagePositiveIntegerRequired({emptyArray}));
        expect(() => requiredPositiveIntegerArgument({ object })).toThrowError(errorMessagePositiveIntegerRequired({object}));
        expect(() => requiredPositiveIntegerArgument({ nullObject })).toThrowError(errorMessagePositiveIntegerRequired({nullObject}));
        expect(() => requiredPositiveIntegerArgument({ boolean })).toThrowError(errorMessagePositiveIntegerRequired({boolean}));
        expect(() => requiredPositiveIntegerArgument({ stringArray })).toThrowError(errorMessagePositiveIntegerRequired({stringArray}));
        expect(() => requiredPositiveIntegerArgument({ numberArray })).toThrowError(errorMessagePositiveIntegerRequired({numberArray}));
        expect(() => requiredPositiveIntegerArgument({ integerArray })).toThrowError(errorMessagePositiveIntegerRequired({integerArray}));
        expect(() => requiredPositiveIntegerArgument({ positiveIntegerArray })).toThrowError(errorMessagePositiveIntegerRequired({positiveIntegerArray}));
        expect(() => requiredPositiveIntegerArgument({ mixedArray })).toThrowError(errorMessagePositiveIntegerRequired({mixedArray}));
        expect(() => requiredPositiveIntegerArgument({ nonIntegerNumber })).toThrowError(errorMessagePositiveIntegerRequired({nonIntegerNumber}));
        expect(() => requiredPositiveIntegerArgument({ negativeInteger })).toThrowError(errorMessagePositiveIntegerRequired({negativeInteger}));
     });

    test(`test requiredPositiveIntegerArgument({ doesn't throw error when argument is a positive integer`, () => {
        expect(() => requiredPositiveIntegerArgument({ positiveInteger })).not.toThrowError();
    });

    test(`test requiredArrayArgument({ throws error "${errorMessageArrayRequired({argument})}" when argument is not an array`, () => {
        expect(() => requiredArrayArgument({ string })).toThrowError(errorMessageArrayRequired({string}));
        expect(() => requiredArrayArgument({ regex })).toThrowError(errorMessageArrayRequired({regex}));
        expect(() => requiredArrayArgument({ object })).toThrowError(errorMessageArrayRequired({object}));
        expect(() => requiredArrayArgument({ nullObject })).toThrowError(errorMessageArrayRequired({nullObject}));
        expect(() => requiredArrayArgument({ boolean })).toThrowError(errorMessageArrayRequired({boolean}));
        expect(() => requiredArrayArgument({ integer })).toThrowError(errorMessageArrayRequired({integer}));
        expect(() => requiredArrayArgument({ nonIntegerNumber })).toThrowError(errorMessageArrayRequired({nonIntegerNumber}));
        expect(() => requiredArrayArgument({ negativeInteger })).toThrowError(errorMessageArrayRequired({negativeInteger}));
        expect(() => requiredArrayArgument({ positiveInteger })).toThrowError(errorMessageArrayRequired({positiveInteger}));
     });

    test(`test requiredArrayArgument({ doesn't throw error when argument is an array`, () => {
        expect(() => requiredArrayArgument({ stringArray })).not.toThrowError();
        expect(() => requiredArrayArgument({ numberArray })).not.toThrowError();
        expect(() => requiredArrayArgument({ integerArray })).not.toThrowError();
        expect(() => requiredArrayArgument({ positiveIntegerArray })).not.toThrowError();
        expect(() => requiredArrayArgument({ mixedArray })).not.toThrowError();
        expect(() => requiredArrayArgument({ emptyArray })).not.toThrowError();
    });

    test(`test requiredStringArrayArgument({ throws error "${errorMessageStringArrayRequired({argument})}" when argument is not a string array`, () => {
        expect(() => requiredStringArrayArgument({ string })).toThrowError(errorMessageStringArrayRequired({string}));
        expect(() => requiredStringArrayArgument({ regex })).toThrowError(errorMessageStringArrayRequired({regex}));
        expect(() => requiredStringArrayArgument({ object })).toThrowError(errorMessageStringArrayRequired({object}));
        expect(() => requiredStringArrayArgument({ nullObject })).toThrowError(errorMessageStringArrayRequired({nullObject}));
        expect(() => requiredStringArrayArgument({ boolean })).toThrowError(errorMessageStringArrayRequired({boolean}));
        expect(() => requiredStringArrayArgument({ nonIntegerNumber })).toThrowError(errorMessageStringArrayRequired({nonIntegerNumber}));
        expect(() => requiredStringArrayArgument({ integer })).toThrowError(errorMessageStringArrayRequired({integer}));
        expect(() => requiredStringArrayArgument({ negativeInteger })).toThrowError(errorMessageStringArrayRequired({negativeInteger}));
        expect(() => requiredStringArrayArgument({ positiveInteger })).toThrowError(errorMessageStringArrayRequired({positiveInteger}));
        expect(() => requiredStringArrayArgument({ numberArray })).toThrowError(errorMessageStringArrayRequired({numberArray}));
        expect(() => requiredStringArrayArgument({ integerArray })).toThrowError(errorMessageStringArrayRequired({integerArray}));
        expect(() => requiredStringArrayArgument({ positiveIntegerArray })).toThrowError(errorMessageStringArrayRequired({positiveIntegerArray}));
        expect(() => requiredStringArrayArgument({ mixedArray })).toThrowError(errorMessageStringArrayRequired({mixedArray}));
        expect(() => requiredStringArrayArgument({ emptyArray })).toThrowError(errorMessageStringArrayRequired({emptyArray}));
     });

    test(`test requiredArrayArgument({ doesn't throw error when argument is a string array`, () => {
        expect(() => requiredStringArrayArgument({ stringArray })).not.toThrowError();
    });

    test(`test requiredNumberArrayArgument({ throws error "${errorMessageNumberArrayRequired({argument})}" when argument is not a number array`, () => {
      expect(() => requiredNumberArrayArgument({ string })).toThrowError(errorMessageNumberArrayRequired({string}));
      expect(() => requiredNumberArrayArgument({ regex })).toThrowError(errorMessageNumberArrayRequired({regex}));
      expect(() => requiredNumberArrayArgument({ object })).toThrowError(errorMessageNumberArrayRequired({object}));
      expect(() => requiredNumberArrayArgument({ nullObject })).toThrowError(errorMessageNumberArrayRequired({nullObject}));
      expect(() => requiredNumberArrayArgument({ boolean })).toThrowError(errorMessageNumberArrayRequired({boolean}));
      expect(() => requiredNumberArrayArgument({ nonIntegerNumber })).toThrowError(errorMessageNumberArrayRequired({nonIntegerNumber}));
      expect(() => requiredNumberArrayArgument({ integer })).toThrowError(errorMessageNumberArrayRequired({integer}));
      expect(() => requiredNumberArrayArgument({ negativeInteger })).toThrowError(errorMessageNumberArrayRequired({negativeInteger}));
      expect(() => requiredNumberArrayArgument({ positiveInteger })).toThrowError(errorMessageNumberArrayRequired({positiveInteger}));
      expect(() => requiredNumberArrayArgument({ stringArray })).toThrowError(errorMessageNumberArrayRequired({stringArray}));
      expect(() => requiredNumberArrayArgument({ mixedArray })).toThrowError(errorMessageNumberArrayRequired({mixedArray}));
      expect(() => requiredNumberArrayArgument({ emptyArray })).toThrowError(errorMessageNumberArrayRequired({emptyArray}));
   });

  test(`test requiredArrayArgument({ doesn't throw error when argument is a number array`, () => {
      expect(() => requiredNumberArrayArgument({ numberArray })).not.toThrowError();
      expect(() => requiredNumberArrayArgument({ integerArray })).not.toThrowError();
      expect(() => requiredNumberArrayArgument({ positiveIntegerArray })).not.toThrowError();
  });

  test(`test requiredIntegerArrayArgument({ throws error "${errorMessageIntegerArrayRequired({argument})}" when argument is not an integer array`, () => {
    expect(() => requiredIntegerArrayArgument({ string })).toThrowError(errorMessageIntegerArrayRequired({string}));
    expect(() => requiredIntegerArrayArgument({ regex })).toThrowError(errorMessageIntegerArrayRequired({regex}));
    expect(() => requiredIntegerArrayArgument({ object })).toThrowError(errorMessageIntegerArrayRequired({object}));
    expect(() => requiredIntegerArrayArgument({ nullObject })).toThrowError(errorMessageIntegerArrayRequired({nullObject}));
    expect(() => requiredIntegerArrayArgument({ boolean })).toThrowError(errorMessageIntegerArrayRequired({boolean}));
    expect(() => requiredIntegerArrayArgument({ nonIntegerNumber })).toThrowError(errorMessageIntegerArrayRequired({nonIntegerNumber}));
    expect(() => requiredIntegerArrayArgument({ integer })).toThrowError(errorMessageIntegerArrayRequired({integer}));
    expect(() => requiredIntegerArrayArgument({ negativeInteger })).toThrowError(errorMessageIntegerArrayRequired({negativeInteger}));
    expect(() => requiredIntegerArrayArgument({ stringArray })).toThrowError(errorMessageIntegerArrayRequired({stringArray}));
    expect(() => requiredIntegerArrayArgument({ numberArray })).toThrowError(errorMessageIntegerArrayRequired({numberArray}));
    expect(() => requiredIntegerArrayArgument({ mixedArray })).toThrowError(errorMessageIntegerArrayRequired({mixedArray}));
    expect(() => requiredIntegerArrayArgument({ emptyArray })).toThrowError(errorMessageIntegerArrayRequired({emptyArray}));
 });

test(`test requiredArrayArgument({ doesn't throw error when argument is a integer array`, () => {
    expect(() => requiredIntegerArrayArgument({ integerArray })).not.toThrowError();
    expect(() => requiredIntegerArrayArgument({ positiveIntegerArray })).not.toThrowError();
});
 
test(`test requiredPositiveIntegerArrayArgument({ throws error "${errorMessagePositiveIntegerArrayRequired({argument})}" when argument is not a positive integer array`, () => {
  expect(() => requiredPositiveIntegerArrayArgument({ string })).toThrowError(errorMessagePositiveIntegerArrayRequired({string}));
  expect(() => requiredPositiveIntegerArrayArgument({ regex })).toThrowError(errorMessagePositiveIntegerArrayRequired({regex}));
  expect(() => requiredPositiveIntegerArrayArgument({ object })).toThrowError(errorMessagePositiveIntegerArrayRequired({object}));
  expect(() => requiredPositiveIntegerArrayArgument({ nullObject })).toThrowError(errorMessagePositiveIntegerArrayRequired({nullObject}));
  expect(() => requiredPositiveIntegerArrayArgument({ boolean })).toThrowError(errorMessagePositiveIntegerArrayRequired({boolean}));
  expect(() => requiredPositiveIntegerArrayArgument({ nonIntegerNumber })).toThrowError(errorMessagePositiveIntegerArrayRequired({nonIntegerNumber}));
  expect(() => requiredPositiveIntegerArrayArgument({ integer })).toThrowError(errorMessagePositiveIntegerArrayRequired({integer}));
  expect(() => requiredPositiveIntegerArrayArgument({ negativeInteger })).toThrowError(errorMessagePositiveIntegerArrayRequired({negativeInteger}));
  expect(() => requiredPositiveIntegerArrayArgument({ positiveInteger })).toThrowError(errorMessagePositiveIntegerArrayRequired({positiveInteger}));
  expect(() => requiredPositiveIntegerArrayArgument({ stringArray })).toThrowError(errorMessagePositiveIntegerArrayRequired({stringArray}));
  expect(() => requiredPositiveIntegerArrayArgument({ integerArray })).toThrowError(errorMessagePositiveIntegerArrayRequired({integerArray}));
  expect(() => requiredPositiveIntegerArrayArgument({ numberArray })).toThrowError(errorMessagePositiveIntegerArrayRequired({numberArray}));
  expect(() => requiredPositiveIntegerArrayArgument({ mixedArray })).toThrowError(errorMessagePositiveIntegerArrayRequired({mixedArray}));
  expect(() => requiredPositiveIntegerArrayArgument({ emptyArray })).toThrowError(errorMessagePositiveIntegerArrayRequired({emptyArray}));
});

test(`test requiredArrayArgument({ doesn't throw error when argument is a string array`, () => {
  expect(() => requiredPositiveIntegerArrayArgument({ positiveIntegerArray })).not.toThrowError();
});


});

