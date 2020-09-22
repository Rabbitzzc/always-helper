/**
 * 给元素移除 class
 * 兼容性：https://caniuse.com/?search=classList
 */

const removeClass = (el: HTMLElement, className: string) => {
    if (typeof el === "string") el = document.querySelector(el)
    el?.classList.remove(className)
}

export default removeClass
