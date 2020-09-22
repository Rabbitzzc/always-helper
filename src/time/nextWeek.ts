import beforeWeek from './beforeWeek'

const nextWeek = (format = 'YYYY-MM-DD'): string[] => {
    return beforeWeek(-1, format)
}

export default nextWeek
