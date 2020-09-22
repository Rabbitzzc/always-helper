/**
 * 获取过去第 n 周的起止日期
 */
import * as dayjs from 'dayjs'

const beforeWeek = (n = 1, format = 'YYYY-MM-DD'): string[] => {
    const day = dayjs().day()
    const start = dayjs().subtract(day + 7 * n, 'day')
    const end = dayjs().subtract(day + 7 * (n - 1) + 1, 'day')
    return [start, end].map(v => v.format(format))
}

export default beforeWeek
