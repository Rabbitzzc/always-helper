## getStyle

获取元素样式。

### 参数

`getStyle(el, properties)`

| 参数       | 作用                             | 默认值 |
| ---------- | -------------------------------- | ------ |
| el         | 元素                             | 无     |
| properties | 需要获取的属性（数组或者字符串） | 无     |


### 使用

安装

```sh
yarn add always-helper 
```

使用

```js
import { getStyle } from 'always-helper'

getStyle(el, 'height')
getStyle(el, ['widht', 'height'])
```

