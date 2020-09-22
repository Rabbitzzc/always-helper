/**
 * 将 CSS 链接插入到 <head> 中
 */

const loadCss = (src: string, cb?: Function, order = 'append') => {
    const link = document.createElement('link')

    link.rel = 'stylesheet'
    link.type = 'text/css'

    if (cb) {
        link.onerror = () => cb(false)
        link.onload = () => cb(true)
    }
    link.href = src

    if (order === 'append') {
        document.head.appendChild(link)
    } else {
        document.head.insertBefore(link, document.head.childNodes[0])
    }
}

export default loadCss
