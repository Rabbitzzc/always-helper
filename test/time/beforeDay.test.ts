import * as dayjs from 'dayjs'

import beforeDay from '../../src/time/beforeDay'

describe('beforeDay test', () => {
    test('2020-01-01 昨天', () => {
        expect(beforeDay(dayjs('2020-01-01'))).toEqual('2019-12-31')
    })

    test('2020-01-01 前三天', () => {
        expect(beforeDay(dayjs('2020-01-01'), 3)).toEqual('2019-12-29')
    })
})
