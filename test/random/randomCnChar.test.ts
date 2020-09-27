
import randomCnChar from '../../src/random/randomCnChar'

describe('randomCnChar test', () => {
    test('随机中文测试', () => {
        expect(randomCnChar(5).length).toEqual(5)
    })
})
