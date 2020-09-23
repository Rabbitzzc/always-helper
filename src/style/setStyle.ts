/**
 * 给元素设置样式
 */

const setStyle = (el: HTMLElement | string, styles: object) => {
    if (typeof el === "string") el = document.querySelector(el) as HTMLElement

    for (let k in styles) {
        if (styles.hasOwnProperty(k)) el.style[k] = styles[k]
    }
}

export default setStyle
