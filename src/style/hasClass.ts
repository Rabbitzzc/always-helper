/**
 * 检测元素是否存在某个 class
 */

const hasClass = (el: Element | string, className: string): boolean => {
    if (typeof el === "string") el = document.querySelector(el)
    return el?.classList.contains(className)
}

export default hasClass


