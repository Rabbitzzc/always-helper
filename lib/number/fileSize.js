var t=["","K","M","G","T"];export default function(r){if(r<=0)return"0";var o=Math.floor(Math.log(r)/Math.log(1024)),a=r/Math.pow(2,10*o);return Number(a.toFixed(2))+t[o]}
