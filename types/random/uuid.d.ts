/**
 * 生成唯一标识符 uuid - https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
 * 碰撞率 1/2^^122
 * 开源项目比较优秀的是 uuid 库，但是本身压缩以后有 3Kb，而唯一标识一般用来生成图表元素唯一 ID 等，低频操作，没必要引入一个 3Kb 左右的仓库
 */
declare const uuid: () => string;
export default uuid;
