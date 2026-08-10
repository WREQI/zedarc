var a = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../config/enum.js"),
  e = require("../../service/aegis/platform/not-wujie.js"),
  r = require("../../service/aegis/utils.js");
function n(a, t, e) {
  var r = [];
  void 0 !== t.mcjg1 &&
    "" !== t.mcjg1 &&
    isNaN(Number(t.mcjg1)) &&
    r.push("mcjg1_NaN=".concat(t.mcjg1)),
    void 0 !== t.mrjg1 &&
      "" !== t.mrjg1 &&
      isNaN(Number(t.mrjg1)) &&
      r.push("mrjg1_NaN=".concat(t.mrjg1)),
    void 0 !== a.dqj &&
      "" !== a.dqj &&
      isNaN(Number(a.dqj)) &&
      r.push("dqj_NaN=".concat(a.dqj)),
    a.dqj ||
      0 === a.dqj ||
      ("0" === (e.status || "") && r.push("dqj_empty=".concat(a.dqj)));
  var n = e.trd_unit;
  return (
    void 0 !== n &&
      "" !== n &&
      isNaN(Number(n)) &&
      r.push("trd_unit_NaN=".concat(n)),
    e.name || r.push("name_empty"),
    r
  );
}
var i = require("../../common/vendor.js").debounce(function (t, e, i) {
  try {
    var o = t || {},
      c = i || {},
      u = n(
        o,
        e || {},
        a(
          a({}, c),
          {},
          { name: c.name || c.secu_name, status: c.status || c.secu_status }
        )
      );
    u.length > 0 &&
      r.reportEventSafely("mon_trade_push_data_invalid", {
        ext4: u.join(","),
        ext3: o.code || "",
      });
  } catch (o) {}
}, 5e3);
(exports.validateHoldStockData = function (a, t, e) {
  try {
    var n = a.can_use,
      i = a.hold_num,
      o = [];
    void 0 !== n &&
      "" !== n &&
      (isNaN(Number(n))
        ? o.push("can_use_NaN=".concat(n))
        : Number(n) < 0 && o.push("can_use_negative=".concat(n))),
      void 0 !== i &&
        "" !== i &&
        (isNaN(Number(i))
          ? o.push("hold_num_NaN=".concat(i))
          : Number(i) < 0 && o.push("hold_num_negative=".concat(i))),
      o.length > 0 &&
        r.reportEventSafely("mon_trade_holdstock_data_invalid", {
          ext4: o.join(","),
          ext3: t || "",
        });
  } catch (a) {}
}),
  (exports.validatePushData = i),
  (exports.validateQueryParams = function (a, t, e) {
    try {
      var n = [];
      if (void 0 !== a && "" !== a) {
        var i = Number(a);
        isNaN(i)
          ? n.push("query_price_NaN=".concat(a))
          : 0 === i && n.push("query_price_zero=".concat(a));
      }
      if (void 0 !== t && "" !== t) {
        var o = Number(t);
        isNaN(o)
          ? n.push("query_amount_NaN=".concat(t))
          : 0 === o && n.push("query_amount_zero=".concat(t));
      }
      n.length > 0 &&
        r.reportEventSafely("mon_trade_query_params_invalid", {
          ext4: n.join(","),
          ext3: e || "",
        });
    } catch (a) {}
  }),
  (exports.validateStockInfoData = function (a, t) {
    try {
      var e = a.five_trans || {},
        i = n(a.quote || {}, e, a.info || {});
      i.length > 0 &&
        r.reportEventSafely("mon_trade_stockinfo_data_invalid", {
          ext4: i.join(","),
          ext3: t || "",
        });
    } catch (a) {}
  }),
  (exports.validateSubmitParams = function (a) {
    try {
      for (
        var r = [],
          n = 0,
          i = ["code", "market", "action", "name", "price", "quantity"];
        n < i.length;
        n++
      ) {
        var o = i[n];
        a[o] || r.push("".concat(o, "_empty=").concat(a[o]));
      }
      if (
        (String(a.market) !== t.MARKET.HK ||
          a.holder ||
          r.push("holder_empty=".concat(a.holder)),
        a.name &&
          /[\uFFFD\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(a.name) &&
          r.push("name_garbled=".concat(a.name)),
        void 0 !== a.price && "" !== a.price)
      ) {
        var c = Number(a.price);
        isNaN(c)
          ? r.push("price_NaN=".concat(a.price))
          : c <= 0 && r.push("price_lte0=".concat(a.price));
      }
      if (void 0 !== a.quantity && "" !== a.quantity) {
        var u = Number(a.quantity);
        isNaN(u)
          ? r.push("quantity_NaN=".concat(a.quantity))
          : u <= 0 && r.push("quantity_lte0=".concat(a.quantity));
      }
      r.length > 0 &&
        e.aegisReporter.reportEvent("mon_trade_submitparams_invalid", {
          ext4: r.join(","),
        });
    } catch (a) {}
  }),
  (exports.validateTradeShowData = function (a, t) {
    try {
      var e = [];
      void 0 !== a.max_sell_qty &&
        "" !== a.max_sell_qty &&
        isNaN(Number(a.max_sell_qty)) &&
        e.push("max_sell_qty_NaN=".concat(a.max_sell_qty)),
        e.length > 0 &&
          r.reportEventSafely("mon_trade_tradeshow_data_invalid", {
            ext4: e.join(","),
            ext3: t || "",
          });
    } catch (a) {}
  });
