// cookie 相关 4 个
import checkCookie from './cookie/checkCookie'
import getCookie from './cookie/getCookie'
import removeCookie from './cookie/removeCookie'
import setCookie from './cookie/setCookie'

// 时间相关 17 个
import today from './time/today'
import yesterday from './time/yesterday'
import beforeMonth from './time/beforeMonth'
import beforeWeek from './time/beforeWeek'
import beforeDay from './time/beforeDay'
import beforeDays from './time/beforeDays'
import lastMonth from './time/lastMonth'
import lastWeek from './time/lastWeek'
import currentMonth from './time/currentMonth'
import currentWeek from './time/currentWeek'
import nextMonth from './time/nextMonth'
import nextWeek from './time/nextWeek'
import getDay from './time/getDay'
import getCurrentWeek from './time/getCurrentWeek'
import sofarYear from './time/sofarYear'
import getMonth from './time/getMonth'
import timeAgo from './time/timeAgo'

// 样式相关 9 个
import addClass from './style/addClass'
import removeClass from './style/removeClass'
import hasClass from './style/hasClass'
import getStyle from './style/getStyle'
import insertCss from './style/insertCss'
import setStyle from './style/setStyle'
import loadCss from './style/loadCss'
import toggleClass from './style/toggleClass'
import replaceClass from './style/replaceClass'

// URL 相关 2 个
import parseQueryString from './url/parseQueryString'
import stringifyQueryString from './url/stringifyQueryString'

// 随机数相关 5 个
import randomCnChar from './random/randomCnChar'
import randomColor from './random/randomColor'
import randomInt from './random/randomInt'
import randomString from './random/randomString'
import uuid from './random/uuid'

// DOM 相关 8 个
import fullscreen from './dom/fullscreen'
import copyElement2Clipboard from './dom/copyElement2Clipboard'
import copyElementImage2Clipboard from './dom/copyElementImage2Clipboard'
import downloadElementImage from './dom/downloadElementImage'
import inDarkMode from './dom/inDarkMode'
import inview from './dom/inview'
import scrollTop from './dom/scrollTop'
import scrollBottom from './dom/scrollBottom'


export {
    checkCookie,
    getCookie,
    removeCookie,
    setCookie,
    today,
    yesterday,
    beforeMonth,
    beforeWeek,
    beforeDay,
    beforeDays,
    lastMonth,
    lastWeek,
    currentMonth,
    currentWeek,
    nextMonth,
    nextWeek,
    getDay,
    getCurrentWeek,
    sofarYear,
    timeAgo,
    getMonth,
    addClass,
    removeClass,
    hasClass,
    getStyle,
    insertCss,
    setStyle,
    loadCss,
    toggleClass,
    replaceClass,
    parseQueryString,
    stringifyQueryString,
    randomCnChar,
    randomColor,
    randomInt,
    randomString,
    uuid,
    fullscreen,
    copyElement2Clipboard,
    copyElementImage2Clipboard,
    downloadElementImage,
    inDarkMode,
    inview,
    scrollTop,
    scrollBottom
}
