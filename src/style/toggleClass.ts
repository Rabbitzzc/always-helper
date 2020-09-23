/**
 * 切换元素的 class
 */

const toggleClass = (el: HTMLElement | string, className: string) => {
    if (typeof el === "string") el = document.querySelector(el) as HTMLElement
    el?.classList.toggle(className)
}

export default toggleClass
