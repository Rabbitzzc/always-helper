import t from"dom-to-image";export default function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;"string"==typeof e&&(e=document.querySelector(e));var r={width:e.clientWidth*n,height:e.clientHeight*n,style:{transform:"scale(".concat(n,")"),transformOrigin:"top left"}};return new Promise((function(n,o){t.toBlob(e,r).then((function(t){try{var e=new ClipboardItem({"image/png":t});navigator.clipboard.write([e]).then((function(){return n()})).catch((function(t){return o(t.message||"暂不支持复制")}))}catch(t){o(t.message||"暂不支持复制")}})).catch((function(t){return o(t)}))}))}