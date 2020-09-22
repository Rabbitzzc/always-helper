/**
 * 返回今天
 */
import * as dayjs from 'dayjs'

const today = (format = 'YYYY-MM-DD') => {
    return dayjs().format(format)
}

export default today
