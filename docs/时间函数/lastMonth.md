## lastMonth

获取上个月的起止时间。

### 参数

`lastMonth(format)`

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
import {lastMonth} from 'always-helper'

lastMonth()  // [2020-10-01, 2020-10-30]
```

