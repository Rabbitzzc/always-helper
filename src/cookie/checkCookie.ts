/**
 * 浏览器是否支持 cookie
 */

const checkCookie = (): boolean => {
    if (navigator.cookieEnabled) return true
    document.cookie = "cookietest=1"
    let ret = document.cookie.indexOf("cookietest=") !== -1
    document.cookie = "cookietest=1 expires=Thu, 01-Jan-1970 00:00:01 GMT"
    return ret
}

export default checkCookie
