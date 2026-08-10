require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  r = require("../../hooks/useScroll.js"),
  n = require("../../hooks/useHome.js"),
  t = require("../../utils/dealData.js"),
  i = {
    components: {
      messageClear: function () {
        return "../clear/index.js";
      },
      messageClearMp: function () {
        return "../clear/mp.js";
      },
      redPointNum: function () {
        return "../redPointNum/index.js";
      },
    },
    props: {
      renderList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      currentIndex: { type: Number, default: 0 },
      currentValue: { type: String, default: "" },
    },
    setup: function (i, o) {
      var l,
        c = o.emit,
        u = e.inject("skin"),
        a = r.useScroll(),
        s = a.hoverRemind,
        d = a.hoverTrade,
        p = a.hoverInterAction,
        m = a.isHasHover,
        S = n.useHome().tabBrokerList,
        _ = e.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        }),
        E = (null == (l = S.value) ? void 0 : l.length) > 1,
        g = e.computed(function () {
          return (
            (e.StockBridge.getPlatform && e.StockBridge.getPlatform().isPC) ||
            !1
          );
        });
      return {
        clickEntry: function (e) {
          c("clickEntry", e);
        },
        clearAll: function () {
          c("clearAll");
        },
        isMultBroker: E,
        bridgeShell: "mpweapp",
        isHasHover: m,
        hoverTrade: d,
        hoverRemind: s,
        hoverInterAction: p,
        BACK_END_MESSAGE_ID: t.BACK_END_MESSAGE_ID,
        isSimpleMode: _,
        skin: u,
        isMpPc: g,
      };
    },
  };
Array ||
  (
    e.resolveComponent("messageClear") +
    e.resolveComponent("messageClearMp") +
    e.resolveComponent("redPointNum")
  )();
var o = e._export_sfc(i, [
  [
    "render",
    function (r, n, t, i, o, l) {
      return e.e(
        {
          a:
            "wzqlight" === i.bridgeShell ||
            (i.isMpPc && "mpweapp" === i.bridgeShell),
        },
        "wzqlight" === i.bridgeShell ||
          (i.isMpPc && "mpweapp" === i.bridgeShell)
          ? { b: e.o(i.clearAll, 2339) }
          : "mpwzq" === i.bridgeShell || "mpweapp" === i.bridgeShell
          ? { d: e.o(i.clearAll, 2340) }
          : {},
        {
          c: "mpwzq" === i.bridgeShell || "mpweapp" === i.bridgeShell,
          e: e.f(t.renderList, function (r, n, o) {
            return {
              a: [
                t.currentIndex === n
                  ? i.isSimpleMode
                    ? r.iconSelected
                    : r.iconSelectedPro
                  : "dark" === i.skin
                  ? r.iconBlack
                  : r.icon,
              ],
              b: e.n(t.currentIndex === n ? "item-selected" : ""),
              c: e.n(
                t.currentIndex === n
                  ? "icon-icon-bg-selected" + (i.isSimpleMode ? "" : "-pro")
                  : "icon-icon-bg"
              ),
              d: e.t(r.title),
              e: e.n(t.currentIndex === n ? "icon-text-selected" : ""),
              f: e.n(
                t.currentIndex === n
                  ? "icon-bline" + (i.isSimpleMode ? "" : "-pro")
                  : "icon-bline-op"
              ),
              g: "d94a9963-2-" + o,
              h: e.p({ showType: r.show_type, unreadNum: r.unread_num }),
              i: n,
              j: e.o(
                function (e) {
                  return i.clickEntry(r);
                },
                2341,
                n
              ),
            };
          }),
          f: e.n(
            t.currentValue !== i.BACK_END_MESSAGE_ID.interaction ||
              i.hoverInterAction
              ? ""
              : "message-entry-container-mb-32"
          ),
          g: e.n(
            t.currentValue === i.BACK_END_MESSAGE_ID.trade && i.isMultBroker
              ? "message-entry-container-mb-24"
              : ""
          ),
          h: e.n(
            t.currentValue !== i.BACK_END_MESSAGE_ID.trade || i.isMultBroker
              ? ""
              : "message-entry-container-mb-20"
          ),
          i: t.currentValue === i.BACK_END_MESSAGE_ID.trade,
        },
        (t.currentValue, i.BACK_END_MESSAGE_ID.trade, {}),
        {
          j: e.n(
            (t.currentValue === i.BACK_END_MESSAGE_ID.trade && i.hoverTrade) ||
              (t.currentValue === i.BACK_END_MESSAGE_ID.chooseRemind &&
                i.hoverRemind) ||
              (t.currentValue === i.BACK_END_MESSAGE_ID.interaction &&
                i.hoverInterAction)
              ? "message-entry-container-bgfff"
              : ""
          ),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d94a9963"],
]);
wx.createComponent(o);
