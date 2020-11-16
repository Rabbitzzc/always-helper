/**
 * 随机生成头像 avatar
 */
import * as sample from 'lodash.sample'

const URL = '//avataaars.io/'

const optionState = {
    protocol: ['https', 'http'],
    avatarStyle: ['Circle', 'Transparent'],
    topType: ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart'],
    accessoriesType: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
    facialHairType: ['Blank', 'BeardMedium', 'BeardLight', 'BeardMagestic', 'MoustacheFancy', 'MoustacheMagnum'],
    facialHairColor: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'Platinum', 'Red'],
    clotheType: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
    clotheColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
    graphicType: ['Bat', 'Cumbia', 'Deer', 'Diamond', 'Hola', 'Pizza', 'Resist', 'Selena', 'Bear', 'SkullOutline', 'Skull'],
    eyeType: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
    eyebrowType: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'],
    mouthType: ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
    skinColor: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'],

}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Options = {
    protocol: 'https' | 'http',  // 协议头
    avatarStyle: 'Circle' | 'Transparent', // 风格
    topType: 'NoHair' | 'Eyepatch' | 'Hat' | 'Hijab' | 'Turban' | 'WinterHat1' | 'WinterHat2' | 'WinterHat3' | 'WinterHat4' | 'LongHairBigHair' | 'LongHairBob' | 'LongHairBun' | 'LongHairCurly' | 'LongHairCurvy' | 'LongHairDreads' | 'LongHairFrida' | 'LongHairFro' | 'LongHairFroBand' | 'LongHairNotTooLong' | 'LongHairShavedSides' | 'LongHairMiaWallace' | 'LongHairStraight' | 'LongHairStraight2' | 'LongHairStraightStrand' | 'ShortHairDreads01' | 'ShortHairDreads02' | 'ShortHairFrizzle' | 'ShortHairShaggyMullet' | 'ShortHairShortCurly' | 'ShortHairShortFlat' | 'ShortHairShortRound' | 'ShortHairShortWaved' | 'ShortHairSides' | 'ShortHairTheCaesar' | 'ShortHairTheCaesarSidePart',
    accessoriesType?: 'Blank' | 'Kurt' | 'Prescription01' | 'Prescription02' | 'Round' | 'Sunglasses' | 'Wayfarers', // 眼镜风格
    facialHairType: 'Blank' | 'BeardMedium' | 'BeardLight' | 'BeardMagestic' | 'MoustacheFancy' | 'MoustacheMagnum', // 胡须样式
    facialHairColor?: 'Auburn' | 'Black' | 'Blonde' | 'BlondeGolden' | 'Brown' | 'BrownDark' | 'Platinum' | 'Red', // 胡须颜色
    clotheType: 'BlazerShirt' | 'BlazerSweater' | 'CollarSweater' | 'GraphicShirt' | 'Hoodie' | 'Overall' | 'ShirtCrewNeck' | 'ShirtScoopNeck' | 'ShirtVNeck', // 衣服风格
    clotheColor?: 'Black' | 'Blue01' | 'Blue02' | 'Blue03' | 'Gray01' | 'Gray02' | 'Heather' | 'PastelBlue' | 'PastelGreen' | 'PastelOrange' | 'PastelRed' | 'PastelYellow' | 'Pink' | 'Red' | 'White',// 衣服颜色
    graphicType?: 'Bat' | 'Cumbia' | 'Deer' | 'Diamond' | 'Hola' | 'Pizza' | 'Resist' | 'Selena' | 'Bear' | 'SkullOutline' | 'Skull', // 衣服图案
    eyeType: 'Close' | 'Cry' | 'Default' | 'Dizzy' | 'EyeRoll' | 'Happy' | 'Hearts' | 'Side' | 'Squint' | 'Surprised' | 'Wink' | 'WinkWacky',
    eyebrowType: 'Angry' | 'AngryNatural' | 'Default' | 'DefaultNatural' | 'FlatNatural' | 'RaisedExcited' | 'RaisedExcitedNatural' | 'SadConcerned' | 'SadConcernedNatural' | 'UnibrowNatural' | 'UpDown' | 'UpDownNatural',// 眉毛
    mouthType: 'Concerned' | 'Default' | 'Disbelief' | 'Eating' | 'Grimace' | 'Sad' | 'ScreamOpen' | 'Serious' | 'Smile' | 'Tongue' | 'Twinkle' | 'Vomit',// 嘴巴样式
    skinColor: 'Tanned' | 'Yellow' | 'Pale' | 'Light' | 'Brown' | 'DarkBrown' | 'Black'// 皮肤颜色
}

// 默认配置
const DEFAULT_OPTIONS: Options = {
    protocol: 'http',
    avatarStyle: 'Circle',
    topType: 'LongHairStraight',
    accessoriesType: 'Blank',
    facialHairType: 'Blank',
    clotheType: 'BlazerShirt',
    clotheColor: 'Black',
    eyeType: 'Default',
    eyebrowType: 'Default',
    mouthType: 'Default',
    skinColor: 'Light'

}

// 对象序列化为参数
const objParams = obj => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&')


const randomAvatar = (options?: Options): string => {
    // 如果不存在属性，默认表示为随机
    let req = (options?.protocol ? options.protocol + ":" : 'https:') + URL + '?'

    let opt = {}
    if (!options) {
        for (let key in optionState) {
            if ({}.hasOwnProperty.call(optionState, key)) {
                opt[key] = sample(optionState[key])
            }
        }

    } else {
        opt = Object.assign(options, DEFAULT_OPTIONS)
    }

    delete (opt as Options).protocol
    req += objParams(opt)

    return req
}

export default randomAvatar

