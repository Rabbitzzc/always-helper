import babel from "rollup-plugin-babel"
import resove from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'

// 多入口文件
import multiInput from 'rollup-plugin-multi-input'

// 压缩
import {
    terser
} from "rollup-plugin-terser"

// 输出文件夹清除
import clear from "rollup-plugin-clear"
const path = require('path')

const resolve = function (filePath) {
    return path.join(__dirname, filePath)
}

const extensions = [".ts", ".js"]

/** 文件遍历   */
const glob = require('glob')
const files = glob.sync(__dirname + '/src/**/*.ts');
let filesArr = []
files.map(file => {
    const name = path.basename(file, path.extname(file))
    filesArr.push({
        input: file,
        output: [{
                // file: resolve(`lib/${name}.umd.min.js`),
                format: 'cjs',
                dir: 'lib'
            },
            {
                // file: resolve(`lib/${name}.esm.min.js`),
                format: 'esm',
                dir: 'lib'
            },
        ],
        plugins: [
            clear({
                targets: ["lib", 'dist', 'types']
            }),
            resove({
                extensions: ['.ts', '.js', '.json'],
            }),
            multiInput(),
            babel({
                exclude: 'node_modules/**',
                extensions
            }),
            terser(),
            filesize()
        ],
        external: ['dayjs', 'js-cookie', 'lodash']
    })
})

/** -------------------------------------------------------- */

export default filesArr
