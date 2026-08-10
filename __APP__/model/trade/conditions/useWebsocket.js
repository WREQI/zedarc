var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var r = require("../../../service/connect/index.js"),
  t = require("../../../common/vendor.js"),
  c = require("../../../config/cgi.js"),
  o = require("../../../utils/index.js"),
  a = require("../../../config/enum.js"),
  s = require("../../../service/aegis/platform/not-wujie.js"),
  i = require("../../../service/connect/maps.js");
exports.useWebsocket = function () {
  var u,
    l = null == (u = t.getCurrentInstance()) ? void 0 : u.proxy,
    f = "",
    d = "";
  return {
    fetchWebsocket: function (t) {
      var u, v;
      (f = t.code),
        (d = t.market),
        r.connector({
          reportScene: "condition",
          downgradeInterval: t.downgradeInterval || 0,
          source: r.SOURCE.WEBSOCKET,
          scheme: (null == t ? void 0 : t.schema) || [
            i.SCHEME.TRADE_POSITION,
            i.SCHEME.TRADE_HQ,
          ],
          context: l,
          options: { scode: "".concat(d, ":").concat(f) },
          beforeRequest: n({}, c.API_STOCK_INFO, function () {
            return (
              !(
                !o.isTradeTime(t.stockInfo.value.isKCB) ||
                t.stockInfo.value.market_state === a.MARKET_STATE.NOT_TRADEDAY
              ) &&
              !(!d || !f) && { market: d, code: f, needquote: 1, needfive: 1 }
            );
          }),
          beforeSend: {},
          connected: function () {},
          disconnected: function () {},
          upgrade:
            ((u = {}),
            n(u, r.SOURCE.AJAX, function (e) {
              s.aegisReporter.sdk.report({
                msg: "connect:wss2ajax",
                ext2: e,
                trace: "trace",
              });
            }),
            n(u, r.SOURCE.WEBSOCKET, function () {}),
            u),
          data:
            ((v = {
              quotation: function (n) {
                var r,
                  c = n.five_trans,
                  o = n.secu_quote,
                  a = n.market_state,
                  s = n.secu_info;
                if (o.code === f && o.market === d) {
                  var i = e(
                    e({}, t.stockInfo.value.quote || {}),
                    {},
                    {
                      five_trans: c,
                      secu_quote: o,
                      market_state: a,
                      secu_info: s,
                    }
                  );
                  null == (r = t.stockCallback) || r.call(t, i, !0);
                }
              },
            }),
            n(v, c.API_STOCK_INFO, function (e) {
              var n,
                r = e.info,
                c = r.market,
                o = r.secu_code;
              o == o &&
                c == c &&
                (null == (n = t.stockCallback) || n.call(t, e, !1));
            }),
            n(v, "new_home_push", function (e) {
              var n;
              null == (n = t.assetCallback) || n.call(t, e);
            }),
            v),
        });
    },
    clearWss: function () {
      r.unsubscribe();
    },
  };
};
