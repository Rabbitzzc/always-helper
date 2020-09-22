/**
 * 过去 n 个月 起止时间
 */

import * as dayjs from 'dayjs'

const beforeMonth = (num = 1, format = 'YYYY-MM-DD'): string[] => {
    const start = dayjs().startOf('month').subtract(num, 'month')
    const end = dayjs().startOf('month').subtract(num, 'month').endOf('month')
    return [start, end].map(v => v.format(format))
}

export default beforeMonth
