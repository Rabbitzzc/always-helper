/**
 * 正则匹配 URL
 * http://wangwl.net/static/projects/visualRegex/#flags=i&source=%5E((%5B%5E%3A%2F%3F%23%5D%2B)%3A)%3F(%5C%2F%5C%2F(%5B%5E%2F%3F%23%5D*))%3F(%5B%5E%3F%23%5D*)(%5C%3F(%5B%5E%23%5D*))%3F(%23(.*))%3F&match=http%3A%2F%2Fwangwl.net%2Fstatic%2Fprojects%2FvisualRegex%2F%23flags%3Di%26source%3D%255E((%255B%255E%253A%252F%253F%2523%255D%252B)%253A)%253F(%255C%252F%255C%252F(%255B%255E%252F%253F%2523%255D*))%253F(%255B%255E%253F%2523%255D*)(%255C%253F(%255B%255E%2523%255D*))%253F(%2523(.*))%253F%26match%3Drgb(0%252C0%252C0)%26method%3Dmatch&method=match
 */
declare const verifyUrl: (url: string) => boolean;
export default verifyUrl;
