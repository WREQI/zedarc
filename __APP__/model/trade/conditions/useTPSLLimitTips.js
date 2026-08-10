require("../../../app.js");
var e = require("../../../common/vendor.js");
require("./TPSLCondition.js");
var r = require("../../../config/enum/condition.js"),
  o = require("./grid-utils.js"),
  i = require("./tpsl-utils.js");
exports.useTPSLLimitTips = function (t) {
  var u = t.order,
    s = t.stockInfo,
    n = e.ref(""),
    a = e.ref(""),
    l = e.ref(""),
    c = e.ref(""),
    v = null,
    p = null;
  function d() {
    v && clearTimeout(v);
  }
  function T() {
    p && clearTimeout(p);
  }
  return {
    zyPopoverText: n,
    zsPopoverText: a,
    zyPopoverClass: l,
    zsPopoverClass: c,
    handleZyCondValueTips: function (e, t) {
      if (!e) return u.setZyCondPrice(""), (n.value = ""), void d();
      if (
        i.isNumeric(e) &&
        i.isNumeric(t) &&
        !o.isZeroNotStr(e) &&
        !o.isZeroNotStr(t)
      ) {
        if (u.zyCondType === r.LimitType.Percent) {
          var a = i.percentTypeGetAbsoluteVal(
            t,
            e,
            "zy",
            s.value.spreadAcc || 2
          );
          u.setZyCondPrice(a),
            (l.value = ""),
            (n.value = "价格".concat(u.zyCondPrice));
        } else if (u.zyCondType === r.LimitType.Absolute) {
          u.setZyCondPrice(e);
          var c = i.absoluteTypeGetPercentVal(t, e);
          "up" === c[0]
            ? ((l.value = ""), (n.value = "较当前价格上涨".concat(c[1], "%")))
            : "down" === c[0] &&
              ((l.value = "popover-error-bg"),
              (n.value = "止盈价格需大于基准价"));
        }
        d(),
          (v = setTimeout(function () {
            n.value = "";
          }, 3e3));
      }
    },
    handleZsCondValueTips: function (e, t) {
      if (!e) return u.setZsCondPrice(""), (a.value = ""), void T();
      if (
        i.isNumeric(e) &&
        i.isNumeric(t) &&
        !o.isZeroNotStr(e) &&
        !o.isZeroNotStr(t)
      ) {
        if (u.zsCondType === r.LimitType.Percent) {
          var n = i.percentTypeGetAbsoluteVal(
            t,
            e,
            "zs",
            s.value.spreadAcc || 2
          );
          u.setZsCondPrice(n),
            (c.value = ""),
            (a.value = "价格".concat(u.zsCondPrice));
        } else if (u.zsCondType === r.LimitType.Absolute) {
          u.setZsCondPrice(e);
          var l = i.absoluteTypeGetPercentVal(t, e);
          "down" === l[0]
            ? ((c.value = ""), (a.value = "较当前价格下跌".concat(l[1], "%")))
            : "up" === l[0] &&
              ((c.value = "popover-error-bg"),
              (a.value = "止损价格需小于基准价"));
        }
        T(),
          (p = setTimeout(function () {
            a.value = "";
          }, 3e3));
      }
    },
  };
};
