/**
 * 时间格式化，多长时间以前等等
 */

import isDate from '../type/isDate'

const CN_RELATIVE = [
    ['刚刚', '现在'],
    ['%s 秒前', '%s 秒内'],
    ['1 分钟前', '1 分钟内'],
    ['%s 分钟前', '%s 分钟内'],
    ['1 小时前', '1 小时内'],
    ['%s 小时前', '%s 小时内'],
    ['1 天前', '1 天内'],
    ['%s 天前', '%s 天内'],
    ['1 周前', '1 周内'],
    ['%s 周前', '%s 周内'],
    ['1 个月前', '1 个月内'],
    ['%s 个月前', '%s 个月内'],
    ['1 年前', '1 年内'],
    ['%s 年前', '%s 年内']
]
const EN_RELATIVE = [
    ['just now', 'right now'],
    ['%s seconds ago', 'in %s seconds'],
    ['1 minute ago', 'in 1 minute'],
    ['%s minutes ago', 'in %s minutes'],
    ['1 hour ago', 'in 1 hour'],
    ['%s hours ago', 'in %s hours'],
    ['1 day ago', 'in 1 day'],
    ['%s days ago', 'in %s days'],
    ['1 week ago', 'in 1 week'],
    ['%s weeks ago', 'in %s weeks'],
    ['1 month ago', 'in 1 month'],
    ['%s months ago', 'in %s months'],
    ['1 year ago', 'in 1 year'],
    ['%s years ago', 'in %s years']
]

// 一分钟 一个小时 一天 一个星期  一个月 一年
const TIME_STAGE = [60, 60, 24, 7, 365 / 7 / 12, 12]

const format = (diff, i, ago, lang = 'cn') => (lang.toUpperCase() + '_RELATIVE')[i][ago ? 0 : 1].replace('%s', diff)

const timeAgo = (date: any, now?: any, lang = 'cn') => {
    if (isDate(date)) date = new Date(date)
    now = (isDate(date) ? now : new Date(now)) || new Date()

    // 毫秒转为秒
    let diff = (now - date) / 1000
    // 如果是 >0，表示为之前，如果小于 <0，表示接下来
    const ago = diff > 0


    let i = 0

    diff = Math.abs(diff)

    while (diff >= TIME_STAGE[i] && i < TIME_STAGE.length) {
        diff /= TIME_STAGE[i]
        i++
    }

    diff = Number(diff)
    i *= 2

    if (diff > (i === 0 ? 9 : 1)) i += 1

    return format(diff, i, ago)
}



export default timeAgo
