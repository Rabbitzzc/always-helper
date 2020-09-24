import nextWeek from '../../src/time/nextWeek'
import * as dayjs from 'dayjs'

describe('nextWeek test', () => {
    test('下周测试', () => {
        let now = new Date()
        now.setHours(0, 0, 0, 0)
        let monday = new Date(now)
        monday.setDate(monday.getDate() - monday.getDay() + 7)
        let sunday = new Date(now)
        sunday.setDate(sunday.getDate() - sunday.getDay() + 13)
        const arr = [monday, sunday].map(day => dayjs(day).format('YYYY-MM-DD'))

        expect(nextWeek()).toEqual(arr)
    })
})
