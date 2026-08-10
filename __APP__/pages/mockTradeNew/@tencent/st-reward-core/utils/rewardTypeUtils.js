var r = require("./splitNumberAndUnit.js"),
  t = {
    exactMatch: { 微信立减金: !0, 话费券: !0, 金币: !0, 元: !0 },
    fuzzyRules: {
      微信立减金: /微信立减金$/,
      话费券: /话费券$/,
      金币: /^金币$/,
      现金类: /^元$/,
    },
  },
  e = function (r) {
    return r.replace(/\s+/g, "");
  };
function n(n, u) {
  if ("string" != typeof n) return !1;
  var i = r.splitNumberAndUnit(n).unit;
  if (!i) return !1;
  if (i) {
    var s = i.replace(/\s+/g, "");
    s && (i = s);
  }
  var a = e(u);
  if (t.exactMatch[i] && e(i) === a) return !0;
  var c = t.fuzzyRules[a];
  return !!c && c.test(i);
}
(exports.isCash = function (r) {
  return n(r, "元");
}),
  (exports.isGoldCoin = function (r) {
    return n(r, "金币");
  });
