/**
 * 过去第 n 天的日期时间
 */
import * as dayjs from 'dayjs'

const beforeDay = (date: any = dayjs(), num = 1, format = 'YYYY-MM-DD'): string => {
    return dayjs(date).add(num * -1, 'day').format(format)
}

export default beforeDay
