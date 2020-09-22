/**
 * 获取今年第几周
 */

const getCurrentWeek = (date = new Date()): number => {
    let target = new Date(date.valueOf())

    let dayNr = (date.getDay() + 6) % 7

    target.setDate(target.getDate() - dayNr + 3)

    let jan4 = new Date(target.getFullYear(), 0, 4)

    let dayDiff = (Number(target) - Number(jan4)) / 86400000

    if (new Date(target.getFullYear(), 0, 1).getDay() < 5) {
        return 1 + Math.ceil(dayDiff / 7)
    }
    else {
        return Math.ceil(dayDiff / 7)
    }
}

export default getCurrentWeek
