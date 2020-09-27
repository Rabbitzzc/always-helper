/**
 * 随机字符串
 * 应用场景：有时候为了 mock 字符串名称，然后随机验证的业务会用到
 */
const randomString = (options: number | { length?: number, charset?: string } = 5): string => {
    let length = 5
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    if (typeof options === "object") {
        length = options.length || 5
        charset = options.charset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    }

    let result = ''
    const charsetLen = charset.length
    for (let i = 0;i < length;++i) {
        result += charset.charAt(Math.floor(Math.random() * charsetLen))
    }

    return result
}

export default randomString
