## removeCookie

删除某个 Cookie 信息

### 使用

```js
import {removeCookie} from 'always-helper'

// removeCookie(name, options)

setCookie('name', 'rabbitzzc')

getCookie('name') // 打印 rabbitzzc

removeCookie('name')

getCookie('name') // undefined

```

### 备注

该方法与 `js-cookie` 中的 `remove` 方法相同
