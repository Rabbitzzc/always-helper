import commafy from '../../src/number/commafy'

describe('commafy test', () => {
    test('0', () => {
        expect(commafy(0)).toEqual('0')
    })
    test('12', () => {
        expect(commafy(12)).toEqual('12')
    })
    test('123', () => {
        expect(commafy(123)).toEqual('123')
    })
    test('1234', () => {
        expect(commafy(1234)).toEqual('1,234')
    })
    test('12345', () => {
        expect(commafy(12345)).toEqual('12,345')
    })
    test('123456', () => {
        expect(commafy(123456)).toEqual('123,456')
    })
    test('1234567', () => {
        expect(commafy(1234567)).toEqual('1,234,567')
    })
    test('12345.55', () => {
        expect(commafy(12345.55)).toEqual('12,345.55')
    })
})
