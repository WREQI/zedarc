var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../domain/entities/trade-stock/stock-order.js"),
  require("../../../domain/entities/trade-stock/condition-order.js");
var n = require("./price-utils.js");
require("../../../service/broker.js");
var o = require("../../common/useServerTime.js");
require("../../../config/enum/trade.js");
var i = require("../../../common/components/Dialog/index.js");
require("../../../service/sdk/lib/api.js");
var c = require("../../../service/sdk/platform/mp-weixin.js"),
  s = require("../../../config/broker/11100/index.js");
(exports.checkBlockTips = function (e) {
  var r,
    n = null == (r = t.getCurrentInstance()) ? void 0 : r.proxy;
  return new Promise(function (r, t) {
    e.value
      ? (i.Dialog({
          context: n,
          title: "无法交易",
          message: "".concat(e.value),
          messageAlign: "left",
          showCancelButton: !0,
          cancelButtonText: "我知道了",
          confirmButtonText: "联系券商客服",
          onConfirm: function () {
            var e = "".concat(s.brokerConfig.base.tel).replace(/-/g, "");
            c.sdk.makePhoneCall(e);
          },
        }),
        t({ retcode: "BROKER_BLOCK", retmsg: "券商拦截" }))
      : r();
  });
}),
  (exports.useCondCheck = function (t) {
    var i,
      c = t.checkService,
      s = t.stockInfo,
      a = o.useServerTime().checkTradeDay;
    return {
      checkStock: function () {
        var e, r, t;
        return s
          ? n.checkStock({
              stockCls: null == (e = s.value.quote) ? void 0 : e.stock_cls,
              isST: s.value.isST,
              market:
                null == (t = null == (r = s.value.quote) ? void 0 : r.info)
                  ? void 0
                  : t.market,
              quote: s.value.quote,
            })
          : [!0];
      },
      checkValidDay:
        ((i = r(
          e().mark(function r() {
            var t, n, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), a();
                    case 3:
                      return (
                        (t = e.sent),
                        (n = t.date),
                        (o = t.isTradeDay),
                        e.abrupt("return", c.checkValidDay(n, o))
                      );
                    case 9:
                      return (
                        (e.prev = 9),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", Promise.resolve([!0]))
                      );
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 9]]
            );
          })
        )),
        function () {
          return i.apply(this, arguments);
        }),
      checkCompositeSync: n.checkCompositeSync,
    };
  });
