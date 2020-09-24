/**
 * 浏览器滚动到顶部
 */

const scrollBottom = (behavior: any = 'smooth') => document.body.scrollIntoView({ behavior, block: "end" })

export default scrollBottom
