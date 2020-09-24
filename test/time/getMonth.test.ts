import * as dayjs from 'dayjs'
import getMonth from '../../src/time/getMonth'

describe('getMonth test', () => {
    test('获取月份', () => {
        const d = new Date()
        const n = d.getMonth()
        expect(getMonth()).toEqual(n + 1)
    })
})
