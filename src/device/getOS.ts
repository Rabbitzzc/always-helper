/**
 * 获取操作系统
 */

const getOS = (): string => {
    let userAgent = window.navigator.userAgent
    let platform = window.navigator.platform
    let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    let windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
    let iosPlatforms = ['iPhone', 'iPad', 'iPod']
    let os = null

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS'
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS'
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows'
    } else if (/Android/.test(userAgent)) {
        os = 'Android'
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux'
    }

    return os
}


export default getOS
