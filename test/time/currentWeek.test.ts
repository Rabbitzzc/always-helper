import currentWeek from '../../src/time/currentWeek'
import * as dayjs from 'dayjs'

describe('currentWeek test', () => {
    test('本周测试', () => {
        let now = new Date()
        now.setHours(0, 0, 0, 0)
        let monday = new Date(now)
        monday.setDate(monday.getDate() - monday.getDay())
        let sunday = new Date(now)
        sunday.setDate(sunday.getDate() - sunday.getDay() + 6)
        const arr = [monday, sunday].map(day => dayjs(day).format('YYYY-MM-DD'))

        expect(currentWeek()).toEqual(arr)
    })
})
