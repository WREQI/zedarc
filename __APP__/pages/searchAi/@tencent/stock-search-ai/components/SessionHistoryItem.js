var e = require("../../../../../common/vendor.js"),
  s = require("../utils/StockBridgeWrapper.js"),
  t = {
    components: {
      LongPressContainer: function () {
        return "./longpress/mp.js";
      },
    },
    props: {
      active: Boolean,
      item: { type: Object, default: {} },
      itemPos: { type: String, default: "" },
      longPressPos: { type: String, default: "-1" },
      pressPos: { type: String, default: "-1" },
    },
    setup: function (t, n) {
      var r = n.emit;
      return {
        isMP: !0,
        isPress: e.computed(function () {
          return t.longPressPos === t.itemPos;
        }),
        beforeLongPress: function () {
          r("beforeLongPress", t.itemPos);
        },
        longPress: function () {
          var e;
          r("longPress", t.item, t.itemPos),
            s.StockBridge.report(
              "jichu.ai_search.history_drawer_session_long_tap",
              { session: (null == (e = t.item) ? void 0 : e.sessionid) || "" }
            );
        },
        sessionOperate: function (e) {
          r("sessionOperate", t.item, e);
        },
        preventEvent: function () {},
      };
    },
  };
Array || e.resolveComponent("long-press-container")();
var n = e._export_sfc(t, [
  [
    "render",
    function (s, t, n, r, o, i) {
      return {
        a: e.t(n.item.title),
        b: e.o(r.beforeLongPress, 5609),
        c: e.o(r.longPress, 5610),
        d: e.o(function (e) {
          return r.sessionOperate("tap");
        }, 5611),
        e: e.n(r.isMP ? "light" : ""),
        f: e.n(n.active ? "active" : ""),
        g: e.n(r.isPress ? "long-press" : ""),
        h: e.o(function () {
          return r.preventEvent && r.preventEvent.apply(r, arguments);
        }, 5612),
      };
    },
  ],
  ["__scopeId", "data-v-15fdb9e8"],
]);
wx.createComponent(n);
