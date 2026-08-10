require("../../../app.js"), require("./TPSLCondition.js");
var e = require("../../common/useVisibleControl.js"),
  i = require("../../../components/PopupSelect/usePopupSelect.js"),
  o = require("../../../common/vendor.js"),
  n = require("../../../config/enum/condition.js"),
  t = require("./tpsl-utils.js");
exports.useTPSLPopSelector = function (r) {
  var s = e.useVisibleControl(),
    u = s.visible,
    p = s.hide,
    a = s.show,
    l = i.usePopupSelect({ offset: { top: -10 } }),
    c = l.handleDisplayClick,
    d = l.positionStyle,
    y = l.direction,
    P = o.ref(""),
    C = o.computed(function () {
      return r[P.value];
    }),
    v = o.ref([]);
  return {
    popupSelectVal: C,
    popupSelectState: u,
    positionStyle: d,
    direction: y,
    popupSelectList: v,
    handlePopupTrigger: function (e, i) {
      c(e);
      var t = {
        zyCondType: { ranges: n.LimitTypeRange },
        zsCondType: { ranges: n.LimitTypeRange },
      }[i];
      t &&
        ((P.value = i),
        (v.value = t.ranges),
        o.nextTick$1(function () {
          a();
        }));
    },
    handlePopupSelect: function (e) {
      switch (P.value) {
        case "zyCondType":
          var i = r.zyCondType !== e.value;
          if ((r.setZyCondType(e.value), !i)) break;
          if (r.zyCondPrice && e.value === n.LimitType.Absolute)
            r.setZyCondValue(r.zyCondPrice);
          else if (
            r.zyCondPrice &&
            e.value === n.LimitType.Percent &&
            +r.zyCondPrice > +r.basePrice
          ) {
            var o = t.absoluteTypeGetPercentVal(r.basePrice, r.zyCondPrice);
            "up" === o[0] && r.setZyCondValue(o[1]);
          }
          break;
        case "zsCondType":
          var s = r.zsCondType !== e.value;
          if ((r.setZsCondType(e.value), !s)) break;
          if (r.zsCondPrice && e.value === n.LimitType.Absolute)
            r.setZsCondValue(r.zsCondPrice);
          else if (
            r.zsCondPrice &&
            e.value === n.LimitType.Percent &&
            +r.zsCondPrice < +r.basePrice
          ) {
            var u = t.absoluteTypeGetPercentVal(r.basePrice, r.zsCondPrice);
            "down" === u[0] && r.setZsCondValue(u[1]);
          }
      }
      p();
    },
    hidePopupSelect: p,
  };
};
