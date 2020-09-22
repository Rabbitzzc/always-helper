/**
 * 设置 cookie
 */
import Cookies from 'js-cookie'

const setCookie = (name: string, value: string, options?: object): void => {
    Cookies.set(name, value, options)
}

export default setCookie
