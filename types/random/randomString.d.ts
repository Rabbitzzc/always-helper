/**
 * 随机字符串
 * 应用场景：有时候为了 mock 字符串名称，然后随机验证的业务会用到
 */
declare const randomString: (options?: number | {
    length: number;
    charset: string;
}) => string;
export default randomString;
