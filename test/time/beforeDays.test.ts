import beforeDays from '../../src/time/beforeDays'
import * as dayjs from 'dayjs'

describe('beforeDays', () => {

    test('过去7天', () => {
        const start = dayjs(+new Date() - 7 * 24 * 60 * 60 * 1000).format('YYYY-MM-DD')
        const end = dayjs(+new Date() - 24 * 60 * 60 * 1000).format('YYYY-MM-DD')

        expect(beforeDays(7)).toEqual([start, end])
    })
})
