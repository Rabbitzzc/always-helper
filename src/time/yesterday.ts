import * as dayjs from 'dayjs'
import beforeDay from './beforeDay'

const yesterday = (format = 'YYYY-MM-DD') => {
    return beforeDay(dayjs(), 1, format)
}

export default yesterday
