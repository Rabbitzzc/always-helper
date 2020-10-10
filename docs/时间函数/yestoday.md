## yestoday

获取昨天日期

### 参数

`yestoday(format)`

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
import {yestoday} from 'always-helper'

yestoday() // 2020-10-01

yestoday('YYYY/MM/DD') // 2020/10/01
```

