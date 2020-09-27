
import randomColor from '../../src/random/randomColor'

describe('randomColor test', () => {
    test('随机颜色 hex', () => expect(randomColor().length).toEqual(7))
})
