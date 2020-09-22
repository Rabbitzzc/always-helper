/**
 * 获取上周的起止日期
 */
import beforeWeek from './beforeWeek'

const lastWeek = (format = 'YYYY-MM-DD'): string[] => {
    return beforeWeek(1, format)
}

export default lastWeek
