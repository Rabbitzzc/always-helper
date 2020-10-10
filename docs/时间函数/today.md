## today

获取今天日期

### 参数

`today(format)`

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
import {today} from 'always-helper'

today() // 2020-10-01

today('YYYY/MM/DD') // 2020/10/01
```

