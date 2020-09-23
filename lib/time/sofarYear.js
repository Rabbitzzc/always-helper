import*as r from"dayjs";export default function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"YYYY-MM-DD";return[r().startOf("year"),r()].map((function(r){return r.format(t)}))}
