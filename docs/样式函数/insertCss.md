## insertCss

将 CSS 插入到 `<head>` 中。

### 参数

`insertCss(css, order)`

| 参数  | 作用                         | 默认值   |
| ----- | ---------------------------- | -------- |
| css   | 元素                         | 无       |
| order | 插入的顺序`append | prepend` | `append` |


### 使用

安装

```sh
yarn add always-helper 
```

使用

```js
import { insertCss } from 'always-helper'
const css = `.el {width:400px; height: 200px;}`

insertCss(css, 'className')
insertCss(css, 'prepend')
```

