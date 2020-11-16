

## randomAvatar

给元素添加类。

### 参数

`randomAvatar(options)`

| 参数            | 作用                                   | 默认值 |
| --------------- | -------------------------------------- | ------ |
| options:Options | 头像配置参数，可选（不传则为随机头像） | 无     |

`Options` 配置

```ts
type Options = {
    protocol: 'https' | 'http',  // 协议头
    avatarStyle: 'Circle' | 'Transparent', // 背景风格，分别是圆圈和透明
    topType: 'NoHair' | 'Eyepatch' | 'Hat' | 'Hijab' | 'Turban' | 'WinterHat1' | 'WinterHat2' | 'WinterHat3' | 'WinterHat4' | 'LongHairBigHair' | 'LongHairBob' | 'LongHairBun' | 'LongHairCurly' | 'LongHairCurvy' | 'LongHairDreads' | 'LongHairFrida' | 'LongHairFro' | 'LongHairFroBand' | 'LongHairNotTooLong' | 'LongHairShavedSides' | 'LongHairMiaWallace' | 'LongHairStraight' | 'LongHairStraight2' | 'LongHairStraightStrand' | 'ShortHairDreads01' | 'ShortHairDreads02' | 'ShortHairFrizzle' | 'ShortHairShaggyMullet' | 'ShortHairShortCurly' | 'ShortHairShortFlat' | 'ShortHairShortRound' | 'ShortHairShortWaved' | 'ShortHairSides' | 'ShortHairTheCaesar' | 'ShortHairTheCaesarSidePart', // 头部样式
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

```



### 使用

安装

```sh
yarn add always-helper 
```

使用

```js
import {randomAvatar} from 'always-helper'

randomAvatar()
// https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Blank&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=Gray01&graphicType=Selena&eyeType=Cry&eyebrowType=FlatNatural&mouthType=Sad&skinColor=Pale
```

