## parseQueryString

解析 URL 查询字符串

### 参数

`parseQueryString(url)`

| 参数 | 作用       | 默认值                       |
| ---- | ---------- | ---------------------------- |
| Url  | url 字符串 | 默认为`window.location.href` |

### 使用

```js
import {parseQueryString} from 'always-helper'

parseQueryString(url) // 返回 true 或者 false
```

