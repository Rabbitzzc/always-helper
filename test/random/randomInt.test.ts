
import randomInt from '../../src/random/randomInt'

describe('randomInt test', () => {
    test('0.8~1.2', () => expect(randomInt(0.8, 1.2)).toEqual(1))

    test('1~5', () => {
        expect(randomInt(1, 5)).toBeGreaterThanOrEqual(0)
        expect(randomInt(1, 5)).toBeLessThan(6)
        expect(Number.isInteger(randomInt(1, 5))).toEqual(true)
    })

})
