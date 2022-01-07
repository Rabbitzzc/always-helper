 <div align="center">
 <img align="center" width="180" src="https://github.com/Rabbitzzc/image-hosting-service/blob/master/images/always-avator.png?raw=true" />
  <h2>always-helper</h2>
  <blockquote>前端项目开发中，经常会用到一些工具函数的合集。</blockquote>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/always-helper">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Rabbitzzc/always-helper">
  <img alt="Travis (.com)" src="https://img.shields.io/travis/com/Rabbitzzc/always-helper">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/Rabbitzzc/always-helper">
  <img alt="node-current" src="https://img.shields.io/node/v/always-helper">
  <img alt="npm" src="https://img.shields.io/npm/dm/always-helper">
  <img alt="NPM" src="https://img.shields.io/npm/l/always-helper">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Rabbitzzc/always-helper">
</div>

前端项目开发中，总会碰到这一类问题，所以为了提高前端的开发效率，减少代码重复率，所以这里统一封装了这些方法。

## ⭐️ 特性
 
- [x] 使用 typescript 编写，提供更好的代码提示和类型检查。
- [x] 测试全覆盖，代码可用性得到保证。
- [x] 不重复建设，利用现有的优秀开源库开发一些函数（大项目中经常会用到的一些库，比如 `lodash`、`dayjs`、`js-cookie` 等）。
- [x] 覆盖 `日期格式化`、`url参数转换`、`浏览器类型判断`、`节流函数`、`字符串/数组处理`、`本地缓存`、`Cookie 增删改查`、`颜色转换`、`DOM 操作`、`随机数生成`、`金额转换` 等前端常用工具函数。



## 📦 开始

### 安装
```sh
# npm 
npm install --save always-helper

# yarn
yarn add always-helper
```

### 使用

```sh
import {setCookie} from 'always-helper'
```

### 备注

* 如果使用了 `Cookie` 相关函数，需要提前安装 `js-cookie`
* 如果使用了「日期相关」函数，需要提前安装 `dayjs`

### API 文档

#### `Cookie` 相关

* `setCookie` 	设置 cookie
* `getCookie`     获取 cookie
* `removeCookie`    删除 cookie
* `checkCookie`    检查浏览器是否支持 cookie

#### 日期相关

* `today`    获取今天日期
* `yestoday`    获取昨天日期
* `beforeDay`    获取前 n 天日期
* `currentWeek` 获取本周起止时间
* `lastWeek`    获取上周起止时间
* `nextWeek`    获取下周起止时间
* `beforeWeek`   获取过去第 n 周的起止日期
* `beforeDays`    获取过去 n 天的起止时间
* `currentMonth`     获取本月起止时间
* `lastMonth`    获取上个月的起止时间
* `nextMonth`    获取下个月的起止时间
* `beforeMonth`    获取过去 n 个月起止时间
* `sofarYear`     获取今天至今的起止时间
* `getDay`    获取星期几
* `getMonth`    获取本月份
* `getCurrentWeek` 获取今年第几周
* `timeAgo`    格式化时间展示范围

#### 样式相关

* `addClass`     元素添加类
* `removeClass`    元素删除类
* `hasClass`     判断元素是否存在某个类
* `toggleClass`    元素切换类名
* `replaceClass`    替换元素某个类为另一个类
* `setStyle`    设置元素样式
* `getStyle`    获取元素样式
* `insertCss`    将 CSS 字符串插入到 `<head>` 中
* `loadCss`     将 CSS 链接插入到 `<head>` 中

#### `URL` 相关

* `parseQueryString`     解析 URL 查询字符串
* `stringifyQueryString`     对象转化为 URL 查询字符串

#### 随机数相关

* `randomInt`    随机生成一个整数
* `randomString`    随机生成一个字符串（包含大写、小写、数字）
* `randomCnChar`     随机生成中文串
* `randomColor`     随机生成颜色（16 进制）
* `uuid`     生成一个 uuid
* `randomAvatar`     随机生成头像 avatar 链接，包含 http 或者 https 协议头

#### `DOM` 相关

* `fullscreen`    进入全屏/退出全屏
* `copyElement2Clipboard`     复制 DOM 元素到剪贴板
* `copyElementImage2Clipboard`     将 DOM 元素生成图片并复制到剪贴板
* `downloadElementImage`     将 DOM 元素转化为图片并下载到本地
* `inDarkMode`     将页面切换为暗黑模式
* `inview`    判断一个 DOM 元素是否在可是区域内
* `scrollTop`    将页面滚动到顶部
* `scrollBottom`    将页面滚动到底部

#### 颜色转换相关

* `hexToRgb`  HEX 格式转化为 RGB 格式
* `rgbToHex`  RGB 格式转化为 HEX 格式

#### 数字相关

* `fileSize`  字节单位转换
* `commafy`    数字每三位增加逗号

#### 正则相关

* `verifyIdCard` 身份证验证
* `verifyEmail`  邮箱验证
* `verifyCellNumber`  手机号验证
* `verifyUrl`   网页地址验证

#### 设备相关

* `getOS`  获取操作系统
* `isAndroid`  是否为 `Android` 设备
* `isIos` 是否为 `iOS` 设备
* `isIpv4` ipv4 检测
* `isIpv6` ipv6 检测
* `isMobile`   是否为移动端
* `isWeixin`  是否为微信内置浏览器打开

#### 对象相关

* `objEmpty`  判断对象是否为空

## ⚙️ CHANGELOG

[CHANGELOG](./CHANGLOG.md)

## LICENSE

[MIT](./LICENSE)

## ✈️  TODO

[TODO](./TODO.md)

## 🚩 FAQ

* [Q] 为什么使用 `dayjs` 作为时间处理工具？
  * 大多数项目在最开始启动的时候，可能都是使用 `moment.js`。但其无法与现代的 `Tree Shanking` 算法配合使用，导致打包后的体积非常大，同时最近 `moment.js` 官方已经宣布停止更新进入维护阶段，并推荐了其他的相似库，其中就包括 `dayjs`。
  * `dayjs` 本身非常轻量（2KB），功能上也不差，语法也非常友好，支持链式操作，同时兼容性也是非常优秀的。基于上面两个原因，所以选择了 `dayjs`。
* [Q] 为什么使用 `js-cookie` 作为 cookie 处理工具？
  * `js-cookie` 在 cookie 库中一枝独秀，有着非常好的影响力。同时 `js-ccokie` 非常轻量（< 1KB），我认为我们不需要重复建设。
* [Q] 有没有更好的随机数工具库？
  * 推荐使用[chancejs](https://github.com/chancejs/chancejs)，但是仓库比较大
