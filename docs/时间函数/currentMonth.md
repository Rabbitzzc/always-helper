## currentMonth

获取本月起止时间。

### 参数

`currentMonth(format)`

| 参数   | 作用       | 默认值       |
| ------ | ---------- | ------------ |
| format | 时间格式化 | `YYYY-MM-DD` |


### 使用

安装

```sh
yarn add always-helper dayjs
```

使用

```js
import {currentMonth} from 'always-helper'

currentMonth()  // [2020-10-01, 2020-10-30]
```

