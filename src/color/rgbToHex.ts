/**
 * rgb 转化为 hex
 */

const componentToHex = (c: number) => {
    const hex = c.toString(16)
    return hex.length === 1 ? "0" + hex : hex;
}

const rgbToHex = (str: string) => {
    const regex = /rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)/
    const match = regex.exec(str)

    if(match !== null) {
        return "#" + match.slice(1).map(v=>componentToHex(Number(v))).join("")
    }
    return null
}

export default rgbToHex
