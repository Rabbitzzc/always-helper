/**
 * 切换元素的 class
 */

const toggleClass = (el: Element | string, className: string) => {
    if (typeof el === "string") el = document.querySelector(el)
    el?.classList.toggle(className)
}

export default toggleClass
