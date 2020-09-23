/**
 * stringify Object to Query String（包括序列化）
 * @test 1. 对象 2. 数组 3. null
 */
declare const stringifyQueryString: (obj: object, prefix?: string) => string;
export default stringifyQueryString;
