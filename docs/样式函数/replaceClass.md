## replaceClass

将元素指定class替换为另外的 `class`。

> 兼容性：https://caniuse.com/?search=classList

### 参数

`replaceClass(el, oldClassName, newClassName)`

| 参数         | 作用           | 默认值 |
| ------------ | -------------- | ------ |
| el           | 元素           | 无     |
| oldClassName | 需要替换的类名 | 无     |
| newClassName | 替换的类名     | 无     |


### 使用

安装

```sh
yarn add always-helper 
```

使用

```js
import {replaceClass} from 'always-helper'

replaceClass(el, 'className', 'newClassName')
```

