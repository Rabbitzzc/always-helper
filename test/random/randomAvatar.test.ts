import randomAvatar from '../../src/random/randomAvatar'

describe('randomAvatar test', () => {
    test('随机头像类型测试',()=>{
        expect(typeof randomAvatar()).toBe('string')
    })
})
