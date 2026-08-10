require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../useStockInfo.js"),
  u = require("../../../filters/money.js"),
  t = require("../../../filters/defaults.js");
require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  (exports.useFormAmount = function (o) {
    var r,
      a,
      i = o.order,
      c = o.stockInfo,
      m = null == (r = e.getCurrentInstance()) ? void 0 : r.proxy,
      l = e.ref(""),
      s = e.ref(""),
      v = null == i ? void 0 : i.amount,
      f = !0,
      A = !1;
    function d(e) {
      s.value = e;
    }
    function j(e) {
      (l.value = ""), +e - +i.amount != 0 && d("");
      var u,
        t = c.value.minAmount;
      if (
        ((u = c.value.isKCB
          ? "最少交易".concat(n.KC_MIN_TRADE, "股，如需交易零股请手动输入")
          : "数量需为".concat(t, "或其整倍数,如需交易零股请手动输入")),
        Number(e) <= 0 && !A)
      )
        (i.amount = e),
          null == m ||
            m.$nextTick(function () {
              return (i.amount = "".concat(t));
            }),
          (l.value = u);
      else if (c.value.isGem) {
        var o = 3e5;
        Number(e) > o
          ? ((i.amount = e),
            (l.value = "单笔买卖数量不能超过".concat(30, "万股")),
            null == m ||
              m.$nextTick(function () {
                return (i.amount = "".concat(o));
              }))
          : (i.amount = e);
      } else i.amount = e;
    }
    return (
      e.watch(
        function () {
          return i.amount;
        },
        function () {
          +i.amount != +v &&
            (f
              ? ((f = !1), (v = i.amount))
              : (("" === l.value || l.value.startsWith("约")) &&
                  (l.value = "约".concat(
                    u.formatNoUnit(t.defaults(i.totalMoney), !1, 2),
                    "元"
                  )),
                clearTimeout(a),
                (a = setTimeout(function () {
                  l.value = "";
                }, 2e3))),
            (v = i.amount));
        }
      ),
      e.watch(l, function () {
        clearTimeout(a),
          (a = setTimeout(function () {
            l.value = "";
          }, 2e3));
      }),
      {
        activeAmountLevel: s,
        amountPopoverText: l,
        setActiveAmountLevel: d,
        handleAmountInput: j,
        onAmountFocus: function () {
          A = !0;
        },
        onAmountBlur: function (e) {
          var n = e.value;
          (A = !1), j(n);
        },
      }
    );
  });
