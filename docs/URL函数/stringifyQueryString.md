## stringifyQueryString

对象转化为 URL 查询字符串

### 参数

`stringifyQueryString(obj,prefix)`

| 参数   | 作用                                  | 默认值                       |
| ------ | ------------------------------------- | ---------------------------- |
| Obj    | 对象                                  | 默认为`window.location.href` |
| prefix | key值为数组需要增加的前缀(string类型) | 无                           |

### 使用

```js
import {stringifyQueryString} from 'always-helper'

stringifyQueryString({ a: 1, b: 2 }) 
stringifyQueryString({ a: 1, b: { c: 1, d: [1, 2, 3] } }) 
```

