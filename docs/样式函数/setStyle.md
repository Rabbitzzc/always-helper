## setStyle

给元素设置样式。

### 参数

`setStyle(el, properties)`

| 参数   | 作用           | 默认值 |
| ------ | -------------- | ------ |
| el     | 元素           | 无     |
| styles | 设置的样式对象 | 无     |


### 使用

安装

```sh
yarn add always-helper 
```

使用

```js
import { setStyle } from 'always-helper'

setStyle(el, {
  widht: '100px',
  height: '200px'
})
```

