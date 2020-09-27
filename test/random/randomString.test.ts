
import randomString from '../../src/random/randomString'

describe('randomString test', () => {
    test('只有一个字符串 a', () => expect(randomString({ charset: 'a' })).toEqual('aaaaa'))

})
