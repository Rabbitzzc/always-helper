import stringifyQueryString from '../../src/url/stringifyQueryString'

describe('test stringifyQueryString', () => {
    // 基本的对象
    test('basic object', () => {
        expect(stringifyQueryString({ a: 1, b: 2 })).toBe('a=1&b=2')
    })

    // 带有数组的对象
    test('basic object', () => {
        expect(stringifyQueryString({ a: 1, b: { c: 1, d: [1, 2, 3] } })).toBe("a=1&b%5Bc%5D=1&b%5Bd%5D%5B0%5D=1&b%5Bd%5D%5B1%5D=2&b%5Bd%5D%5B2%5D=3")
    })

    // 带有对象的对象
    test('basic object', () => {
        expect(stringifyQueryString({ a: 1, b: [1, 2, 3] })).toBe("a=1&b%5B0%5D=1&b%5B1%5D=2&b%5B2%5D=3")
    })
})
