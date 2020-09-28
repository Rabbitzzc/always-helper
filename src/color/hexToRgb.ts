/**
 * 将 hex 转化为 Rgb
 */

const hexToRgb = (hex:string):string => {
    const result = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
               ,(m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16)).join(", ")

    return 'rgb(' + result + ')'
}

export default hexToRgb
