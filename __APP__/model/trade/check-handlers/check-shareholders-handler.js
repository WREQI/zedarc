var e = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var t = require("../../../adapter/router.js");
require("../../../service/broker.js"),
  require("../../../service/sdk/lib/api.js");
var r = require("../../../service/sdk/platform/mp-weixin.js"),
  o = require("../../../service/stat/mp-weixin.js"),
  n = require("../../../domain/entities/trade-stock/errorCode.js"),
  i = require("../../../common/components/Dialog/index.js"),
  c = require("../../../common/vendor.js"),
  a = require("../../../config/broker/11100/index.js");
(exports.checkShareHoldersHandler = function (e, n) {
  return new Promise(function (s, l) {
    var u,
      d,
      f = null == (u = c.getCurrentInstance()) ? void 0 : u.proxy,
      m = (
        (null == (d = a.brokerConfig.trade)
          ? void 0
          : d.checkShareHolderCards) || {}
      ).canBindOnline,
      v = void 0 !== m && m,
      p = a.brokerConfig.trade.canContact || !1,
      x = "我知道了";
    v ? (x = "添加股东卡") : p && (x = "联系券商客服"),
      i.Dialog({
        title: "无法交易",
        context: f,
        message: "".concat(null == e ? void 0 : e.retmsg),
        messageAlign: "left",
        showCancelButton: v || p,
        cancelButtonText: "我知道了",
        confirmButtonText: x,
        onConfirm: function () {
          if (
            ((null == n ? void 0 : n.confirmStat) &&
              o.stat.click(n.confirmStat),
            v)
          )
            t.router().push({ name: "BizShareHolderBind" });
          else if (p) {
            var e = "".concat(a.brokerConfig.base.tel).replace(/-/g, "");
            r.sdk.makePhoneCall(e);
          }
        },
      }),
      (null == n ? void 0 : n.browStat) && o.stat.click(n.browStat),
      l(e);
  });
}),
  (exports.openAccountOnline = function (r, a) {
    return new Promise(function (s, l) {
      var u,
        d = null == (u = c.getCurrentInstance()) ? void 0 : u.proxy;
      i.Dialog({
        title: "无法交易",
        message: "".concat(r.retmsg),
        context: d,
        messageAlign: "left",
        showCancelButton: !0,
        showClose: !0,
        cancelButtonText: "继续交易",
        confirmButtonText: "开通",
        onConfirm: function () {
          var i = e(
            {},
            n.TradeCheckErrorCode.noGZAccount,
            "BizStockTransferIndex"
          );
          r.retcode &&
            i[r.retcode] &&
            setTimeout(function () {
              t.router().push({ name: i[r.retcode] });
            }, 100),
            (null == a ? void 0 : a.statPrefix) &&
              o.stat.click(
                "".concat(a.statPrefix, ".stop.").concat(r.retcode, "_open")
              ),
            l(r);
        },
        onCancel: function (e, t) {
          if ("close" === (null == t ? void 0 : t.from))
            return (
              (null == a ? void 0 : a.statPrefix) &&
                o.stat.click(
                  "".concat(a.statPrefix, ".stop.").concat(r.retcode, "_close")
                ),
              l(r)
            );
          (null == a ? void 0 : a.statPrefix) &&
            o.stat.click(
              "".concat(a.statPrefix, ".stop.").concat(r.retcode, "_continue")
            ),
            s(!0);
        },
      }),
        (null == a ? void 0 : a.statPrefix) &&
          o.stat.click("".concat(a.statPrefix, ".stop.").concat(r.retcode));
    });
  });
