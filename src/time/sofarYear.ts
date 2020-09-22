/**
 * 今年至今的 起止时间
 */

import * as dayjs from 'dayjs'

const sofarYear = (format = 'YYYY-MM-DD'): string[] => {
    return [dayjs().startOf('year'), dayjs()].map(v => v.format(format))
}

export default sofarYear
