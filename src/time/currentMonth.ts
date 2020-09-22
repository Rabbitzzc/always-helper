/**
 * 本月的 起止时间
 */

import beforeMonth from './beforeMonth'

const currentMonth = (format = 'YYYY-MM-DD'): string[] => {
    return beforeMonth(0, format)
}

export default currentMonth
