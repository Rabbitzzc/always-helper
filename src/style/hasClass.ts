/**
 * 检测元素是否存在某个 class
 */

const hasClass = (el: HTMLElement | string, className: string): boolean => {
    if (typeof el === "string") el = document.querySelector(el) as HTMLElement
    return el?.classList.contains(className)
}

export default hasClass


