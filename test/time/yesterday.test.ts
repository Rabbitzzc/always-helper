import yesterday from '../../src/time/yesterday'
import * as dayjs from 'dayjs'


describe('yesterday test', () => {
    test('yesterday', () => {
        const yes = dayjs(+(new Date()) - 24 * 60 * 60 * 1000).format('YYYY-MM-DD')

        expect(yesterday()).toEqual(yes)
    })
})
