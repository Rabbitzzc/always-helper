## lastWeek

获取上周的起止日期

### 参数

`lastWeek(format)`

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
import {lastWeek} from 'always-helper'

lastWeek() // [2020-10-12, 2020-10-18]
```

