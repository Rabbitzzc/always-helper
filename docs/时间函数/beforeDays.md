## beforeDays

过去 n 天的 起止时间。比如过去 7 天，过去 30 天会有应用场景

### 参数

`beforeDays(num, format)`

| 参数   | 作用       | 默认值       |
| ------ | ---------- | ------------ |
| num    | 过去几天   | 无           |
| format | 时间格式化 | `YYYY-MM-DD` |


### 使用

安装

```sh
yarn add always-helper dayjs
```

使用

```js
import {beforeDays} from 'always-helper'

beforeDays(3)  // [2020-10-01, 2020-10-03]
```

