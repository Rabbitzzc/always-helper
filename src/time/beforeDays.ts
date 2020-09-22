/**
 * 过去 n 天的 起止时间，比如过去 7 天，过去 30 天会有应用场景
 */
import * as dayjs from 'dayjs'
import beforeDay from './beforeDay'

const beforeDays = (num: number, format: string): string[] => {
    return [beforeDay(dayjs(), num, format), beforeDay(dayjs(), 1, format)]
}

export default beforeDays
