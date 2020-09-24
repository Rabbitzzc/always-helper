import * as dayjs from 'dayjs'
import beforeWeek from '../../src/time/beforeWeek'

describe('lastMonth test', () => {
    test('上周', () => {
        const day = dayjs().day()
        const start = dayjs().subtract(day + 7, 'day')
        const end = dayjs().subtract(day + 1, 'day')
        const arr = [start, end].map(v => v.format('YYYY-MM-DD'))

        expect(beforeWeek()).toEqual(arr)
    })

    test('上上周', () => {
        const day = dayjs().day()
        const start = dayjs().subtract(day + 14, 'day')
        const end = dayjs().subtract(day + 8, 'day')
        const arr = [start, end].map(v => v.format('YYYY-MM-DD'))

        expect(beforeWeek(2)).toEqual(arr)
    })
})
