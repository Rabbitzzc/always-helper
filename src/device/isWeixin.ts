const isWeixin = () => navigator.userAgent.toLowerCase().match(/MicroMessenger/i)[0] === "micromessenger"

export default isWeixin
