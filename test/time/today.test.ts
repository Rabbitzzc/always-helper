import * as dayjs from 'dayjs'
import today from '../../src/time/today'


describe('today test', () => {
    test('today', () => {
        const yes = dayjs().format('YYYY-MM-DD')
        expect(today()).toEqual(yes)
    })
})
