## nextWeek

获取下周的起止日期

### 参数

`nextWeek(format)`

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
import {nextWeek} from 'always-helper'

nextWeek() // [2020-10-12, 2020-10-18]
```

