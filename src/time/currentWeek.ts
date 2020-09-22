/**
 * 获取本周的起止日期
 */
import beforeWeek from './beforeWeek'
const currentWeek = (format = 'YYYY-MM-DD'): string[] => {
    return beforeWeek(0, format)
}

export default currentWeek
