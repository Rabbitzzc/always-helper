import sofarYear from '../../src/time/sofarYear'
import * as dayjs from 'dayjs'

describe('sofarYear test', () => {
    test('今年至今的起止日期', () => {
        const arr = [dayjs().startOf('year'), dayjs()].map(v => v.format('YYYY-MM-DD'))
        expect(sofarYear()).toEqual(arr)
    })
})
