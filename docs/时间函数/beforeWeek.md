## currentWeek

获取本周的起止日期。

### 参数

`beforeWeek(num, format)`

| 参数   | 作用        | 默认值       |
| ------ | ----------- | ------------ |
| num    | 过去 num 周 | `1`          |
| format | 时间格式化  | `YYYY-MM-DD` |


### 使用

安装

```sh
yarn add always-helper dayjs
```

使用

```js
import {beforeWeek} from 'always-helper'

beforeWeek()  // [2020-10-12, 2020-10-18]
beforeWeek(2)  // [2020-10-5, 2020-10-11]
```

