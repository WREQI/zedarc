require("../../../app.js");
var e = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  require("../useStockInfo.js");
var t = { invest: "isInvestAmountMode", limitUp: "isAmountMode" };
exports.useEntrustText = function (u) {
  var n,
    i = u.order,
    o = u.stock,
    r = u.type,
    a = void 0 === r ? "invest" : r;
  null == (n = e.getCurrentInstance()) || n.proxy;
  var l,
    v,
    c,
    m = e.ref(""),
    s = e.ref(""),
    d = e.ref("");
  return (
    e.watch(m, function () {
      clearTimeout(l),
        (l = setTimeout(function () {
          m.value = "";
        }, 3e3));
    }),
    e.watch(s, function () {
      clearTimeout(v),
        (v = setTimeout(function () {
          s.value = "";
        }, 3e3));
    }),
    e.watch(d, function () {
      clearTimeout(c),
        (c = setTimeout(function () {
          d.value = "";
        }, 3e3));
    }),
    {
      condAmountPopoverText: m,
      condQuantityPopoverText: s,
      condLowerLimitPopoverText: d,
      condHandleAmountInput: function (e) {
        var u, n, r;
        (m.value = ""),
          i[t[a]]
            ? ((i.maxAmount = e),
              Number(e) <= 0 && (m.value = "委托金额不能为0"),
              (null ==
              (r =
                null ==
                (n =
                  null == (u = null == o ? void 0 : o.value) ? void 0 : u.quote)
                  ? void 0
                  : n.secu_quote)
                ? void 0
                : r.dqj) &&
                Number(e) <
                  o.value.quote.secu_quote.dqj * (o.value.minAmount || 100) &&
                (m.value = "每笔金额太低，可能因不够买一手导致失败"))
            : (i.maxAmount = "");
      },
      condHandleQuantityInputWithCheck: function (e) {
        (s.value = ""),
          i[t[a]]
            ? (i.investQuantity = "")
            : ((i.investQuantity = e), o.value.minAmount, o.value.isKCB);
      },
      condHandleQuantityInput: function (e) {
        (s.value = ""),
          i[t[a]]
            ? (i.investQuantity = "")
            : ((i.investQuantity = e),
              Number(e) <= 0 && (s.value = "委托数量不能为0"),
              Number(e) % 100 != 0 && (s.value = "委托数量需为100的整数倍"));
      },
      condHandleUpperLimitInput: function (e) {
        i.upperLimit = e;
      },
      condHandleLowerLimitInput: function (e) {
        (d.value = ""),
          (i.lowerLimit = e),
          i.upperLimit &&
            i.lowerLimit &&
            +i.lowerLimit >= +i.upperLimit &&
            (d.value = "区间下限需低于区间上限");
      },
    }
  );
};
