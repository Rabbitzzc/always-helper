/**
 * 下个月的 起止时间
 */

import beforeMonth from './beforeMonth'

const nextMonth = (format = 'YYYY-MM-DD'): string[] => {
    return beforeMonth(-1, format)
}

export default nextMonth
