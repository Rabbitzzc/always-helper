export default function(e){var o=/[?&]([^=#]+)=([^&#]*)/g;e=e||window.location.href;for(var n,r={};null!==(n=o.exec(e));)r[decodeURIComponent(n[1])]=decodeURIComponent(n[2]);return r}
