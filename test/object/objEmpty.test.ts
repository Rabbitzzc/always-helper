import objEmpty from '../../src/object/objEmpty'

describe('objEmpty test', () => {
    test('obj empty', () => {
        expect(objEmpty({})).toEqual(true)
    })
    test('obj not empty', () => {
        expect(objEmpty({a:1})).toEqual(false)
    })

    test('not obj', () => {
        expect(objEmpty(null)).toEqual(false)
    })
    test('not obj', () => {
        expect(objEmpty(undefined)).toEqual(false)
    })
    test('not obj', () => {
        expect(objEmpty(NaN)).toEqual(false)
    })
})
