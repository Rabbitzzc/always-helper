import getCurrentWeek from '../../src/time/getCurrentWeek'

describe('getCurrentWeek test', () => {
    test('本月', () => {
        let d = new Date()
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
        let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
        const weekNo = Math.ceil((((+d - +yearStart) / 86400000) + 1) / 7)

        expect(getCurrentWeek()).toEqual(weekNo)
    })
})
