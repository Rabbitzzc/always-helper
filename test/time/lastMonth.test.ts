import * as dayjs from 'dayjs'
import lastMonth from '../../src/time/lastMonth'

describe('lastMonth test', () => {
    test('上个月', () => {
        const date = new Date()
        const firstDay = dayjs(new Date(date.getFullYear(), date.getMonth() - 1, 1)).format('YYYY-MM-DD')
        const lastDay = dayjs(new Date(date.getFullYear(), date.getMonth(), 0)).format('YYYY-MM-DD')

        expect(lastMonth()).toEqual([firstDay, lastDay])
    })
})
