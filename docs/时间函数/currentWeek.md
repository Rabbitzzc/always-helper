## currentWeek

获取本周的起止日期。

### 参数

`currentWeek(format)`

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
import {currentWeek} from 'always-helper'

currentWeek()  // [2020-10-12, 2020-10-18]
```

