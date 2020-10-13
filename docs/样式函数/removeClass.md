## removeClass

给元素移除 `class` 类。

> 兼容性：https://caniuse.com/?search=classList

### 参数

`removeClass(el, className)`

| 参数      | 作用           | 默认值 |
| --------- | -------------- | ------ |
| el        | 元素           | 无     |
| className | 需要删除的类名 | 无     |


### 使用

安装

```sh
yarn add always-helper 
```

使用

```js
import {removeClass} from 'always-helper'

removeClass(el, 'className')
```

