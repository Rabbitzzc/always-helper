/**
 * 随机生成颜色
 * 参考：https://www.paulirish.com/2009/random-hex-color-code-snippets/
 * 16777215 为 0xffffff，即最大为 16777215
 */

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

export default randomColor
