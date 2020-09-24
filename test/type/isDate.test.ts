import isDate from '../../src/type/isDate'

describe('isDate test', () => {
    test('is date', () => {
        expect(isDate(new Date())).toEqual(true)
    })

    test('not date', () => {
        expect(isDate(1)).toEqual(false)

    })

    test('not date', () => {
        expect(isDate('a')).toEqual(false)
    })

    test('not date', () => {
        expect(isDate(undefined)).toEqual(false)
    })

    test('not date', () => {
        expect(isDate(null)).toEqual(false)
    })

    test('not date', () => {
        expect(isDate(NaN)).toEqual(false)
    })
})
