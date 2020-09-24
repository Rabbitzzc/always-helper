/**
 * 浏览器滚动到顶部
 */

const scrollTop = (behavior: any = 'smooth') => document.body.scrollIntoView({ behavior, block: "start" })

export default scrollTop
