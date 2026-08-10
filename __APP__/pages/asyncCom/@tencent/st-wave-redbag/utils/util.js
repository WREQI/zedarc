var e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../../common/vendor.js"),
  o = [
    ["1", "000001"],
    ["0", "399001"],
    ["0", "399006"],
    ["0", "399005"],
    ["1", "000300"],
    ["0", "399905"],
    ["2", "HSI"],
    ["2", "HSCEI"],
    ["2", "HSCCI"],
    ["2", "HSTECH"],
    ["2", "CES300"],
    ["2", "CES100"],
    ["3", "DJI"],
    ["3", "INX"],
    ["3", "IXIC"],
    ["3", "NDX"],
  ],
  r = function (e, t) {
    return void 0 === t
      ? /^ZS/.test(e) || "INDEX" === e
      : o
          .map(function (e) {
            return e.join("");
          })
          .includes("".concat(t).concat(e));
  },
  n = function (o) {
    var r = t.dayjs().format("YYYYMMDD"),
      n = t.StockBridge.getStorage("bodong_redbag_clicked");
    n && n[r] ? (n[r][o] = 1) : (n = e({}, r, e({}, o, 1))),
      t.StockBridge.setStorage("bodong_redbag_clicked", n),
      (t.StockBridge.store.yyRedpacketClicked = n);
  };
(exports.findAnimationStock = function (e, o) {
  var r = t.StockBridge.getSession("bodong/awardStock");
  if (r && r.length) {
    var n = r.findIndex(function (t) {
      return +t.market == +o && e === t.code;
    });
    if (n >= 0) return r[n];
  }
  return null;
}),
  (exports.isIndex = r),
  (exports.isToday = function (e) {
    return t.dayjs().format("YYYYMMDD") === e.slice(0, 8);
  }),
  (exports.sameStock = function (e, t) {
    return !(
      (+e.market != +t.type && +e.market != +t.m) ||
      (e.code !== t.scode && e.code !== t.c)
    );
  }),
  (exports.setClickedStatus = n),
  (exports.setRedbagClicked = function (e, t) {
    r(e, t) ? n("hq") : n("choose-stock");
  });
