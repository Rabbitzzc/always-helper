## isDate

判断是否为时间格式

### 参数

`isDate(date)`

| 参数 | 作用 | 默认值 |
| ---- | ---- | ------ |
| Date | 时间 | 暂无   |


### 使用

安装

```sh
yarn add always-helper dayjs
```

使用

```js
import {isDate} from 'always-helper'

isDate(1)  // false
isDate(new Date())  // true
```

