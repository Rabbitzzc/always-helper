## loadCss

将 CSS 链接插入到 `<head>` 中。

### 参数

`loadCss(src, cb, order)`

| 参数  | 作用                                                       | 默认值   |
| ----- | ---------------------------------------------------------- | -------- |
| src   | 元素                                                       | 无       |
| cb    | callback, onerror与onload时间，分别绑定cb(false)和cb(true) | 无       |
| order | 插入的顺序`append | prepend`                               | `append` |


### 使用

安装

```sh
yarn add always-helper 
```

使用

```js
import { loadCss } from 'always-helper'
const src = 'https://cdn.bootcdn.net/ajax/libs/jquery/1.10.0/jquery.js'

const cb = (flag) => {console.log(flag)}

loadCss(src, cb)
```

