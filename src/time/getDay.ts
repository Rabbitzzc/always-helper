/**
 * 获取时间的星期 默认为今天
 */

import * as dayjs from 'dayjs'

const getDay = (date: any = dayjs()) => {
    return dayjs(date).day() + 1
}

export default getDay
