import nextMonth from '../../src/time/nextMonth'
import * as dayjs from 'dayjs'

describe('nextMonth test', () => {
    test('下个月的起止时间', () => {
        let start = dayjs().add(1, 'month').startOf('month').format('YYYY-MM-DD')
        let end = dayjs().add(1, 'month').endOf('month').format("YYYY-MM-DD")
        expect(nextMonth()).toEqual([start, end])
    })
})
