/**
 * 给元素添加 class
 * 兼容性：https://caniuse.com/?search=classList
 */

const addClass = (el: Element | string, className: string) => {
    if (typeof el === "string") el = document.querySelector(el)
    el?.classList.add(className)
}

export default addClass
