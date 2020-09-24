/**
 * 切换至 暗黑模式
 */

import insertCss from '../style/insertCss'

const inDarkMode = () => {
    const css = `html[theme='dark-mode'] {
        filter: invert(1) hue-rotate(180deg);
    }
    html[theme='dark-mode'] img{
        filter: invert(1) hue-rotate(180deg);
    }
    html {
        transition: color 300ms, background-color 300ms;
    }
    `
    insertCss(css)

    document.documentElement.setAttribute('theme', 'dark-mode')
}

export default inDarkMode
