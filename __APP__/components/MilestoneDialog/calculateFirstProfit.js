require("../../app.js");
var r = require("../../common/vendor.js"),
  e = /(XR|XD|DR|UC)/i,
  a = new Set([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "g",
    "k",
    "z",
    "C",
    "c",
    "w",
    "W",
  ]);
function n(r) {
  return "--" !== r && "" !== r && null != r && !isNaN(Number(r));
}
function t(r) {
  return Number(r);
}
function _(r) {
  return n(r) ? t(r) : -1 / 0;
}
function u(r, e) {
  var a = _(e.earn_per_day) - _(r.earn_per_day);
  if (0 !== a) return a;
  var n = _(e.earn_per) - _(r.earn_per);
  if (0 !== n) return n;
  var t = _(e.earn_val_day) - _(r.earn_val_day);
  return 0 !== t ? t : _(e.earn_val) - _(r.earn_val);
}
exports.calculateFirstProfit = function (_) {
  var o = _.filter(function (r) {
    return (
      !(!r.name || !r.code) &&
      !(+r.hold_num < 0) &&
      !(!r.stock_cls || !a.has(r.stock_cls)) &&
      !e.test(r.name) &&
      (function (r) {
        return n(r.earn_per_day)
          ? t(r.earn_per_day) > 1
          : !!n(r.earn_val_day) && t(r.earn_val_day) > 100;
      })(r) &&
      (function (r) {
        return n(r.earn_per)
          ? t(r.earn_per) > 3
          : !!n(r.earn_val) && t(r.earn_val) > 300;
      })(r)
    );
  });
  if (0 === o.length) return null;
  o.sort(u);
  var l = o[0];
  return {
    stockName: l.name || "",
    stockCode: l.code || "",
    stockCls: l.stock_cls || "",
    tradeMarket: l.market || "",
    earnAmount: n(l.earn_val) ? String(l.earn_val) : "0",
    earnAmountDay: n(l.earn_val_day) ? String(l.earn_val_day) : "0",
    firstProfitTime: r.dayjs().format("YYYYMMDD"),
  };
};
