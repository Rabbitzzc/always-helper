import * as dayjs from 'dayjs'

import currentMonth from '../../src/time/currentMonth'

describe('currentMonth test', () => {
    test('本月起止时间', () => {
        const date = new Date(), y = date.getFullYear(), m = date.getMonth()
        const firstDay = dayjs(new Date(y, m, 1)).format('YYYY-MM-DD')
        const lastDay = dayjs(new Date(y, m + 1, 0)).format('YYYY-MM-DD')

        expect(currentMonth()).toEqual([firstDay, lastDay])
    })
})
