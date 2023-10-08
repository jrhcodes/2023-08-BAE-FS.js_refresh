import {
    countCharOccurrences,
    floorTo2DP,
    roundTo2DP
} from '../lib/exlib';



describe('floorTo2DP', () => {
    test('returns value floored to 2dp', () => {
        expect(floorTo2DP(1.2356)).toBe(1.23);
        expect(floorTo2DP(1234.567)).toBe(1234.56);

        expect(floorTo2DP(0)).toBe(0);
        expect(floorTo2DP(Infinity)).toBe(Infinity);
        expect(floorTo2DP(-Infinity)).toBe(-Infinity);

        expect(floorTo2DP(10)).toBe(10);
        expect(floorTo2DP(10.004)).toBe(10);
        expect(floorTo2DP(10.005)).toBe(10);
        expect(floorTo2DP(10.009)).toBe(10);
        expect(floorTo2DP(-10.001)).toBe(-10.01);
        expect(floorTo2DP(-10.004)).toBe(-10.01);
        expect(floorTo2DP(-10.005)).toBe(-10.01);
        expect(floorTo2DP(-10.009)).toBe(-10.01);
        expect(floorTo2DP(11.0004)).toBe(11);
        expect(floorTo2DP(11.0005)).toBe(11);
        expect(floorTo2DP(11.0009)).toBe(11);
        expect(floorTo2DP(-11.0001)).toBe(-11.01);
        expect(floorTo2DP(-11.0004)).toBe(-11.01);
        expect(floorTo2DP(-11.0005)).toBe(-11.01);
        expect(floorTo2DP(-11.0009)).toBe(-11.01);
    });

    test('throws an error if value is not a number', () => {
        expect(() => roundTo2DP('123')).toThrowError(`argument 'value' must be a number`);
        expect(() => roundTo2DP({ '1': '23' })).toThrowError(`argument 'value' must be a number`);
        expect(() => roundTo2DP(['123'])).toThrowError(`argument 'value' must be a number`);
        expect(() => roundTo2DP(/123/)).toThrowError(`argument 'value' must be a number`);
        expect(() => roundTo2DP(true)).toThrowError(`argument 'value' must be a number`);
    });
});
    describe('roundTo2DP', () => {
        test('returns value floored to 2dp', () => {
            expect(roundTo2DP(1.23)).toBe(1.23);
            expect(roundTo2DP(1.235)).toBe(1.24);
            expect(roundTo2DP(0)).toBe(0);
            expect(roundTo2DP(Infinity)).toBe(Infinity);
            expect(roundTo2DP(10)).toBe(10);
            expect(roundTo2DP(10.004)).toBe(10);
            expect(roundTo2DP(10.005)).toBe(10.01);
            expect(roundTo2DP(10.009)).toBe(10.01);
            expect(roundTo2DP(-10.001)).toBe(-10.00);
            expect(roundTo2DP(-10.004)).toBe(-10.00);
            expect(roundTo2DP(-10.005)).toBe(-10.01);
            expect(roundTo2DP(-10.009)).toBe(-10.01);
            expect(roundTo2DP(11.0004)).toBe(11);
            expect(roundTo2DP(11.0005)).toBe(11);
            expect(roundTo2DP(11.0009)).toBe(11);
            expect(roundTo2DP(-11.0001)).toBe(-11);
            expect(roundTo2DP(-11.0004)).toBe(-11);
            expect(roundTo2DP(-11.0005)).toBe(-11);
            expect(roundTo2DP(-11.0009)).toBe(-11);
        });


        test('throws an error if value is not a number', () => {
            expect(() => floorTo2DP('123')).toThrowError(`argument 'value' must be a number`);
            expect(() => floorTo2DP({ '1': '23' })).toThrowError(`argument 'value' must be a number`);
            expect(() => floorTo2DP(['123'])).toThrowError(`argument 'value' must be a number`);
            expect(() => floorTo2DP(/123/)).toThrowError(`argument 'value' must be a number`);
            expect(() => floorTo2DP(true)).toThrowError(`argument 'value' must be a number`);
        })

        test('throws an error if value is not defined', () => {
            expect(() => floorTo2DP(undefined)).toThrowError(`argument 'value' required`);
        })
    });

    describe('countCharOccurrences', () => {
        test('returns the number of times the character appears in the string, case sensitive', () => {
            expect(countCharOccurrences('hello', 'l')).toBe(2);
            expect(countCharOccurrences('heLlo', 'l')).toBe(1);
            expect(countCharOccurrences('hello', 'o')).toBe(1);
            expect(countCharOccurrences('hello', 'x')).toBe(0);
            expect(countCharOccurrences('', 'x')).toBe(0);
            expect(countCharOccurrences('11111110000001111111sadfhkjshdfkjshdfkjshdfh111111', '1')).toBe(20);
        })

        test('throws an error if str is not a string', () => {
            expect(() => countCharOccurrences(123, 'c')).toThrowError(`argument 'str' must be a string`);
            expect(() => countCharOccurrences({ '1': '23' }, 'c')).toThrowError(`argument 'str' must be a string`);
            expect(() => countCharOccurrences(['123'], 'c')).toThrowError(`argument 'str' must be a string`);
            expect(() => countCharOccurrences(/123/, 'c')).toThrowError(`argument 'str' must be a string`);
            expect(() => countCharOccurrences(true, 'c')).toThrowError(`argument 'str' must be a string`);
        })
        test('throws an error if char is not a string', () => {
            expect(() => countCharOccurrences('test', 123)).toThrowError(`argument 'char' must be a string`);
            expect(() => countCharOccurrences('test', { '1': '23' })).toThrowError(`argument 'char' must be a string`);
            expect(() => countCharOccurrences('test', ['123'])).toThrowError(`argument 'char' must be a string`);
            expect(() => countCharOccurrences('test', /123/)).toThrowError(`argument 'char' must be a string`);
            expect(() => countCharOccurrences('test', true)).toThrowError(`argument 'char' must be a string`);
        })
    })


