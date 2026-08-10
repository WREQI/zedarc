require("../../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../../@babel/runtime/helpers/typeof"),
  r = require("../../../st-math/dist/index.js"),
  t = require("../../../../../../common/vendor.js");
function n(e) {
  var t = e.cls,
    n = e.direction,
    i = e.isMoneyFund,
    o = e.price,
    a = e.quantity,
    c = e.market,
    s = r.mul_1(o, a),
    d =
      i ||
      (function (e) {
        return "5" === e;
      })(t),
    l = i ? 0 : r.mul_1(s, 25e-5);
  !i && l < 5 && (l = 5);
  var f = "sell" !== n || d ? 0 : r.mul_1(s, 5e-4),
    m =
      (function (e) {
        return 1 === e;
      })(c) && !d
        ? r.mul_1(s, 1e-5)
        : 0,
    y = r.add_1(r.add_1(l, f), m),
    p = "sell" === n ? r.reduce_1(s, y) : r.add_1(s, y);
  return {
    totalFee: u(y),
    commission: u(l),
    stampTax: u(f),
    transferFee: u(m),
    tradeAmount: u(s),
    settlementAmount: u(p),
  };
}
function u(e) {
  return Math.round(100 * e) / 100;
}
var i = /^(5\d{5}|1[568]\d{4})$/,
  o = {};
function a(e) {
  var r = String(e || "").match(/\d{6}/);
  return (null == r ? void 0 : r[0]) || "";
}
function c(r) {
  return (function (e) {
    var r = e.match(/="([^"]*)"/),
      t = ((null == r ? void 0 : r[1]) || "").split("~"),
      n = t[31] || "";
    return {
      fundType: n,
      fundTypeName: t[36] || "",
      isMoneyFund: "Currency" === n,
    };
  })(
    (function (r) {
      var t =
        (null == r ? void 0 : r.body) || (null == r ? void 0 : r.data) || r;
      if ("string" == typeof t) {
        var n = t.trim();
        if ("{" === n[0])
          try {
            var u = JSON.parse(n),
              i = Object.values(u)[0];
            if (Array.isArray(i)) return '="'.concat(i.join("~"), '"');
          } catch (e) {
            return n;
          }
        return n;
      }
      if (t && "object" == e(t)) {
        var o = Object.values(t)[0];
        if (Array.isArray(o)) return '="'.concat(o.join("~"), '"');
      }
      return "";
    })(r)
  );
}
(exports.calBuyableNumWithFee = function (e, t, u, i) {
  if (0 === t) return 0;
  var o = "k" === i.cls,
    a = Math.floor(e / t / u) * u;
  if (a <= 0) return 0;
  var c = n({
      cls: i.cls,
      isMoneyFund: i.isMoneyFund,
      market: i.market,
      direction: "buy",
      price: t,
      quantity: a,
    }),
    s = r.reduce_1(e, c.totalFee);
  return s <= 0
    ? 0
    : (a = Math.floor(s / t / u) * u) <= 0
    ? 0
    : o
    ? a >= 200
      ? a
      : 0
    : a || 0;
}),
  (exports.calculateFee = n),
  (exports.formatFee = function (e) {
    return e.toFixed(2);
  }),
  (exports.getFundQtInfo = function (e) {
    var r = a(e);
    return r
      ? (o[r] ||
          (o[r] = t.StockBridge.request(
            "https://sqt.gtimg.cn/",
            t.RequestTypeEnum.GET,
            { fmt: "json", q: "s_jj".concat(r) }
          )
            .then(c)
            .catch(function () {
              return { fundType: "", fundTypeName: "", isMoneyFund: !1 };
            })),
        o[r])
      : Promise.resolve({ fundType: "", fundTypeName: "", isMoneyFund: !1 });
  }),
  (exports.shouldQueryFundQt = function (e, r) {
    return "5" === e || i.test(a(r || ""));
  });
