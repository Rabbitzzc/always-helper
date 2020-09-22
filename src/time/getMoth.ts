/**
 * 获取时间的月份 默认为当月
 */

import * as dayjs from 'dayjs'

const getMonth = (date: any = dayjs()) => {
    return dayjs(date).month() + 1
}

export default getMonth
