require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = require("./Widget.js"),
  n = require("useWidget.js"),
  i = e.defineComponent({
    name: "WidgetTrading",
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
      subscribed: { type: Boolean, default: !1 },
      maxCount: { type: Number, default: 3 },
      loaded: { type: Boolean, default: !1 },
    },
    emits: ["subscribe", "item-click", "more", "hide"],
    setup: function (i, r) {
      var u = r.emit,
        o = e.computed(function () {
          return i.list.slice(0, i.maxCount);
        }),
        a = e.computed(function () {
          return i.list.length >= i.maxCount;
        });
      e.watch(
        function () {
          return i.list;
        },
        function (e) {
          i.loaded &&
            e.length < i.maxCount &&
            u("hide", { reason: "insufficient_data", count: e.length });
        },
        { immediate: !0 }
      ),
        e.watch(
          function () {
            return i.loaded;
          },
          function (e) {
            e &&
              i.list.length < i.maxCount &&
              u("hide", { reason: "insufficient_data", count: i.list.length });
          }
        );
      var c = e.ref(e.StockBridge.ENV === e.EnvTypeEnum.MP);
      return {
        displayList: o,
        shouldShow: a,
        formatDate: n.formatDate,
        getMarketCloseText: function (e) {
          return e.includes("美股") || e.includes("美国")
            ? "美股休市"
            : e.includes("港股")
            ? "港股休市"
            : e.includes("A股") || e.includes("元旦")
            ? "A股休市"
            : e.includes("英国")
            ? "英股休市"
            : "休市";
        },
        handleSubscribe: function () {
          u("subscribe", !i.subscribed);
        },
        handleItemClick: function (e) {
          u("item-click", e);
        },
        handleMore: function () {
          u("more"),
            e.StockRouter.routeTo({
              name: "financialcalendar",
              query: {
                viewtype: "week",
                column: t.WidgetType.TRADE_NOTIFY,
                market: "all",
              },
            });
        },
        isMP: c,
      };
    },
  }),
  r = e._export_sfc(i, [
    [
      "render",
      function (t, n, i, r, u, o) {
        return e.e(
          { a: t.shouldShow },
          t.shouldShow
            ? e.e(
                { b: t.isMP },
                t.isMP
                  ? {
                      c: e.t(t.subscribed ? "已订阅" : "订阅日历"),
                      d: e.n({
                        "widget-trading__subscribe--subscribed": t.subscribed,
                      }),
                      e: e.o(function () {
                        return (
                          t.handleSubscribe &&
                          t.handleSubscribe.apply(t, arguments)
                        );
                      }, 5841),
                    }
                  : {},
                {
                  f: e.f(t.displayList, function (n, i, r) {
                    return {
                      a: e.t(n.widget_title || n.title),
                      b: e.t(t.formatDate(n.startStr)),
                      c: e.t(n.widget_content || t.getMarketCloseText(n.title)),
                      d: i,
                      e: e.o(
                        function (e) {
                          return t.handleItemClick(n);
                        },
                        5842,
                        i
                      ),
                    };
                  }),
                  g: e.o(function () {
                    return t.handleMore && t.handleMore.apply(t, arguments);
                  }, 5843),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-14914d75"],
  ]);
wx.createComponent(r);
