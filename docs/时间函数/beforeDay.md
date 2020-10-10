## beforeDay

获取前 n 天日期。默认返回从今天开始，过去1天的时间，即默认返回昨天日期。

### 参数

`beforeDay(date, num, format)`

| 参数   | 作用       | 默认值       |
| ------ | ---------- | ------------ |
| Date   | 相对时间   | `new Date()` |
| num    | 过去几天   | 1            |
| format | 时间格式化 | `YYYY-MM-DD` |


### 使用

安装

```sh
yarn add always-helper dayjs
```

使用

```js
import {beforeDay} from 'always-helper'

beforeDay()
beforeDay('2020-10-01') // 2020-09-30
beforeDay('2020-10-01',2) // 2020-09-29
beforeDay('2020-10-01',2, 'YYYY/MM/DD') // 2020/09/29
```

