/**
 * 判断是否为时间格式
*/

const isDate = (date): boolean => date instanceof Date && !isNaN(date.valueOf())

export default isDate
