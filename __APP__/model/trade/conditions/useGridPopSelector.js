require("../../../app.js"), require("./GridCondition.js");
var e = require("../../common/useVisibleControl.js"),
  r = require("../../../components/PopupSelect/usePopupSelect.js"),
  i = require("../../../common/vendor.js"),
  t = require("../../../config/enum/condition.js");
require("../../../config/enum.js"),
  require("../../../config/enum/trade.js"),
  require("../../../service/broker.js"),
  (exports.useGridPopSelector = function (s, o) {
    var u = e.useVisibleControl(),
      a = u.visible,
      n = u.hide,
      c = u.show,
      l = r.usePopupSelect(),
      p = l.handleDisplayClick,
      d = l.positionStyle,
      g = l.direction,
      v = i.ref(""),
      S = i.computed(function () {
        return s[v.value];
      }),
      P = i.ref([]);
    return {
      popupSelectVal: S,
      popupSelectState: a,
      positionStyle: d,
      direction: g,
      popupSelectList: P,
      handlePopupTrigger: function (e, r) {
        p(e);
        var o = {
          basePriceStrategy: { ranges: s.getStrategyRange() },
          gridType: { ranges: t.GridTypeRange },
        }[r];
        o &&
          ((v.value = r),
          (P.value = o.ranges),
          i.nextTick$1(function () {
            c();
          }));
      },
      handlePopupSelect: function (e) {
        var r,
          i,
          u = "";
        switch (v.value) {
          case "basePriceStrategy":
            e.value === t.BasePriceStrategy.DQJ &&
              (u =
                (null == (i = null == (r = o.value) ? void 0 : r.secu_quote)
                  ? void 0
                  : i.dqj) || "0"),
              e.value === t.BasePriceStrategy.BasePrice &&
                (u = s.lastestBasePrice),
              e.value === t.BasePriceStrategy.Cost && (u = s.costPrice),
              s.setBasePriceStrategy(e.value),
              s.setBasePrice(u);
            break;
          case "gridType":
            s.setGridType(e.value);
        }
        n();
      },
      hidePopupSelect: n,
    };
  });
