require("../../app.js");
var e = require("../../common/vendor.js"),
  r = require("../red-point/useEntryTips.js"),
  t = require("../../config/key.js");
require("../../service/broker.js");
var i = require("../../utils/index.js"),
  s = require("../../service/aegis/platform/not-wujie.js"),
  n = require("../../config/broker/11100/index.js"),
  o = e.defineStore("useNewStockEntryTip", function () {
    var o,
      u =
        (null == (o = n.brokerConfig.dictionary.Enties.ipo)
          ? void 0
          : o.routeName) || "",
      a = r.useEntryTips(),
      c = e.ref(!1);
    function d(r) {
      try {
        r > 0 && !i.getCache(t.NEWSTOCK_BUBBLE_TIP)
          ? ((c.value = !0),
            a.addBubbleTip(u, { contentText: "已中签" }),
            e.index.setStorageSync(t.NEWSTOCK_IPO_INFO, {
              value: r,
              expires: e
                .dayjs()
                .add(1, "days")
                .set("hours", 0)
                .set("minutes", 0)
                .set("second", 0)
                .valueOf(),
            }))
          : ((c.value = !1), a.deleteBubbleTip(u));
      } catch (e) {
        s.aegisReporter.reportEvent("handle_new_stock_error", { ext2: e });
      }
    }
    return (
      (function () {
        var e = i.getCache(t.NEWSTOCK_IPO_INFO);
        e && d(Number(e) || 0);
      })(),
      {
        isHasNew: c,
        newStockOnClick: function () {
          i.getCache(t.NEWSTOCK_BUBBLE_TIP) ||
            ((c.value = !1),
            e.index.setStorageSync(t.NEWSTOCK_BUBBLE_TIP, {
              value: !0,
              expires: e
                .dayjs()
                .add(1, "days")
                .set("hours", 0)
                .set("minutes", 0)
                .set("second", 0)
                .valueOf(),
            }),
            a.deleteBubbleTip(u));
        },
        isClickedNewStock: function () {
          return i.getCache(t.NEWSTOCK_BUBBLE_TIP);
        },
        handleNewStock: d,
      }
    );
  });
exports.useNewStockEntryTip = o;
