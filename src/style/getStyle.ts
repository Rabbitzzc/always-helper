/**
 * 获取指定样式值
 */

const getAssignStyle = (el: HTMLElement | string, attr: string): string => {
    if (typeof el === "string") el = document.querySelector(el) as HTMLElement

    // 旧版的 IE 兼容
    if (el['currentStyle']) {
        return el['currentStyle'][attr]
    } else {
        return window.getComputedStyle(el, null)[attr]
    }
}

const getStyle = (el: HTMLElement | string, properties: string[] | string) => {
    if (Array.isArray(properties)) {
        properties.reduce((obj: object, prop: string) => {
            obj[prop] = getAssignStyle(el, prop)
            return obj
        }, {})
    } else {
        return getAssignStyle(el, properties)
    }

}

export default getStyle
