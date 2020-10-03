/**
 * 验证邮箱
 * http://wangwl.net/static/projects/visualRegex/#flags=&source=%5B%5Cw'.%25%2B-%5D%2B%40(%3F%3A%5Ba-zA-Z0-9-%5D%2B%5C.)%2B%5Ba-zA-Z%5D%7B2%2C4%7D&match=http%3A%2F%2Fwangwl.net%2Fstatic%2Fprojects%2FvisualRegex%2F%23flags%3Di%26source%3D%255E((%255B%255E%253A%252F%253F%2523%255D%252B)%253A)%253F(%255C%252F%255C%252F(%255B%255E%252F%253F%2523%255D*))%253F(%255B%255E%253F%2523%255D*)(%255C%253F(%255B%255E%2523%255D*))%253F(%2523(.*))%253F%26match%3Drgb(0%252C0%252C0)%26method%3Dmatch&method=match
 */
declare const verifyEmail: (email: string) => boolean;
export default verifyEmail;
