> 工具函数：lodash
>
> 时间处理：dayJs
>
> 图表工具：G2
>
> 网络请求：axios
>
> 浮点计算：decimal.js/big.js
>
> 模糊搜索：fuzzysort
>
> DOM下载：dom-to-image/html2canvas
>
> 本地缓存：local-storage
>
> UR解析：query-string/qs



- 时间相关
  - 昨天 ✅
  - 本周 起止时间 ✅
  - 上周 起止时间 ✅
  - 下周 起止时间 ✅
  - 过去几周 起止时间 ✅
  - 过去 n 天 ✅
  - 本月 ✅
  - 上个月 起止时间 ✅
  - 下个月 起止时间 ✅
  - 今年至今 ✅
  - 当前月份 ✅
  - 当前星期 ✅ 
  - 时间格式化为多久之前 ✅ 
- 样式相关
  - 添加 Class  ✅ 
  - 移除 Class ✅ 
  - 切换 Class ✅  
  - 查询 Class ✅ 
  - 替换 Class ✅ 
  - 设置 CSS 样式 ✅ 
  - 获取指定 CSS 样式 ✅ 
  - 插入 CSS 链接到页面中 ✅ 
  - 插入 CSS 到页面中 ✅ 
- DOM 操作
  - 添加 DOM 元素
  - 删除 DOM 元素
  - 滚动到顶部
  - 滚动到底部
  - 将 DOM 转化为图片，并下载 (dom2imge)
  - 复制 DOM 到剪贴板
  - 复制 Table 到剪贴板
  - 进入全屏/退出全屏（https://github.com/liriliri/licia/blob/master/src/f/fullscreen.js）
  - DOM 是否在可视区域（SCA 中有用到）
  - 切换暗黑模式（三行代码）
  - 设置为首页
  - 添加到收藏
  - 打开弹窗
- 数组相关
  - 数组求和
  - 数组相等
  - 数组去重
  - 数组扁平化
  - 数组交集（https://github.com/sisterAn/JavaScript-Algorithms/issues/6） - 通常要看两个商家是否有重复的数据
  - 生成栈/队列/链表
  - 数组长度默认填充（https://juejin.im/post/6844903801082609677#heading-3）
- 对象相关
  - 深拷贝
  - 对象是否为空
  - 对象是否本身存在某个属性（https://github.com/liriliri/licia/blob/master/src/h/has.js）
- 函数相关
  - 柯里化
  - 公共区间（https://github.com/liriliri/licia/blob/master/src/i/intersectRange.js）
  - Sleep 函数（Promise 实现）
  - 节流
  - 防抖
  - 
- 字符串相关
  - 字符串长度限制添加省略号
  - 字符串相似度计算
  - 子串查询
  - 最长公共子串
- 类型判断
  - 是否为数组（https://github.com/liriliri/licia/blob/master/src/i/isArr.js）
  - 是否为字符串
  - 是否为 Null
  - 是否为 NaN
  - 是否为 Undefined
  - 是否为 Nil（null/undefined）https://github.com/liriliri/licia/blob/master/src/i/isNil.js
  - 是否为正则
  - 是否为数字
  - 是否为整数（https://github.com/liriliri/licia/blob/master/src/i/isInt.js）
  - 是否为 JSON
  - 是否为函数
- Cookie
  - 添加 Cookie
  - 删除 Cookie
  - 获取 Cookie
- 本地存储（https://github.com/ustbhuangyi/storage）
  - 增加
  - 删除
  - 修改
- 设备相关
  - 当前浏览器类型
  - 是否为移动端（https://github.com/liriliri/licia/blob/master/src/i/isMobile.js）
  - 当前电脑型号/当前操作系统
  - 是否为 IP，IP4 还是 IP6（https://github.com/liriliri/licia/blob/master/src/i/isIp.js）
  - 是否存在 iframe 中
- 图表相关
  - G2 下载图片
  - G2 ...
- 金额相关
  - 繁体字转化为简体字
  - 数字转为中文（https://github.com/Ailln/cn2an）
  - 数字转为人民币，添加单位
- 数字相关
  - 字节转换，将字节转化为 Kb、M、T 等（https://github.com/liriliri/licia/blob/master/src/f/fileSize.js）
  - 数字每三位分离个逗号
  - 小数转化为分数（https://github.com/liriliri/licia/blob/master/src/f/fraction.js）
  - 
- 随机数
  - 随机整数产生（产生随机整数，包含下限值，包括上限值）
  - 随机小数
  - 随机颜色
  - 随机唯一的 Hash 值生成（uuid/v4）
  - 根据 key/value 配置生成随机对象数组（用户快速 Mock 数据）
  - 根据函数调用，返回一个随机的图片
  - 随机生成中文名称
  - 随机生成英文名称
  - 随机生成中英文混合名称
- 颜色相关
  - Hex 转化为 RGBA
  - RGBA 转化为 Hex
  - Hsl 之间的转化（https://github.com/liriliri/licia/blob/master/src/h/hslToRgb.js）
- 查询相关
  - 对象数组模糊查询
- 网络相关
  - URL 序列化
  - URL 乱码
- 正则相关
  - 手机号校验
  - 身份证校验
  - 邮箱校验（https://github.com/liriliri/licia/blob/master/src/i/isEmail.js）
  - 路由 URL 校验
  - 是否全是中文
  - `是否全是英文`
  - 是否包含特殊符号
- 事件监听
  - 监听键盘按键（https://github.com/liriliri/licia/blob/master/src/h/hotkey.js）
  - 横屏竖屏监听
  - DOM 宽高变化（size）监听
