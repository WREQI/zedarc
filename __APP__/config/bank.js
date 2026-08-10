var e = require("../@babel/runtime/helpers/slicedToArray");
require("../@babel/runtime/helpers/Objectentries"), require("../app.js");
var t = {
    ICBC: { name: "工商", code: "1001", tel: "95588" },
    ABC: { name: "农业", code: "1002", tel: "95599" },
    BOC: { name: "中国", code: "1003", tel: "95566" },
    CCB: { name: "建设", code: "1004", tel: "95533" },
    COMM: { name: "交通", code: "1005", tel: "95559" },
    CMB: { name: "招商", code: "1006", tel: "95555" },
    CIB: { name: "兴业", code: "1007", tel: "95561" },
    CMBC: { name: "民生", code: "1008", tel: "95568" },
    PAB: { name: "平安", code: "1009", tel: "95511" },
    SPDB: { name: "浦发", code: "1010", tel: "95528" },
    CEB: { name: "光大", code: "1012", tel: "95595" },
    HXB: { name: "华夏", code: "1013", tel: "95577" },
    PSBC: { name: "邮储", code: "1014", tel: "95580" },
    GDB: { name: "广发", code: "1015", tel: "400-830-8003" },
    NBCB: { name: "宁波", code: "1016", tel: "95574" },
    CITIC: { name: "中信", code: "1017", tel: "95558" },
    CBHB: { name: "渤海", code: "1018", tel: "95541" },
    BJBANK: { name: "北京", code: "1020", tel: "95526" },
    BOB: { name: "北京", code: "1020", tel: "95526" },
    BOSH: { name: "上海", code: "1021", tel: "95594" },
    DGCB: { name: "东莞", code: "1023", tel: "956033" },
    NJCB: { name: "南京", code: "1024", tel: "95302" },
    BOG: { name: "广州", code: "1025", tel: "400-83-96699" },
    BOJ: { name: "江苏", code: "1026", tel: "95319" },
    TJB: { name: "天津", code: "1027", tel: "956056" },
  },
  o = { bjbank: "bob", bosc: "bosh", gcb: "bog", tccb: "tjb" };
Object.entries(t).forEach(function (o) {
  var a = e(o, 2),
    n = a[0],
    c = a[1];
  t[n.toLowerCase()] = c;
});
var a = t;
(exports.BANKS = a),
  (exports.normalizeBankAbbr = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = String(e).toLowerCase();
    return o[t] || t;
  });
