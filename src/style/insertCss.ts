/**
 * 将 CSS 插入到 <head> 中
 */
enum Order {
    'append',
    'prepend'
}
const insertCss = (css: string, order = 'append') => {
    const style = document.createElement('style')
    style.setAttribute('type', 'text/css')

    style.innerHTML = css

    if (order === 'append') {
        document.head.appendChild(style)
    } else {
        document.head.insertBefore(style, document.head.childNodes[0])
    }
}

export default insertCss
