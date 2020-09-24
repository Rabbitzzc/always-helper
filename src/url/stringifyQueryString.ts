/**
 * stringify Object to Query String（包括序列化）
 * @test 1. 对象 2. 数组 3. null
 */

const stringifyQueryString = (obj: object, prefix?: string) => {
    const str = []

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const k = prefix ? (prefix + "[" + key + "]") : key
            const v = obj[key]
            str.push(v !== null && typeof v === "object" ? stringifyQueryString(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v))
        }
    }
    return str.join("&")
}

export default stringifyQueryString
