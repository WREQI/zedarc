var e = require("../../../../../../common/vendor.js"),
  t = require("./Widget.js"),
  n = require("useWidget.js"),
  i = e.defineComponent({
    name: "WidgetEarnings",
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
      var o = r.emit,
        u = e.computed(function () {
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
            o("hide", { reason: "insufficient_data", count: e.length });
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
              o("hide", { reason: "insufficient_data", count: i.list.length });
          }
        );
      var c = e.ref(e.StockBridge.ENV === e.EnvTypeEnum.MP);
      return {
        displayList: u,
        shouldShow: a,
        formatDate: n.formatDate,
        handleSubscribe: function () {
          o("subscribe", !i.subscribed);
        },
        handleItemClick: function (e) {
          o("item-click", e);
        },
        handleMore: function () {
          o("more"),
            e.StockRouter.routeTo({
              name: "financialcalendar",
              query: {
                viewtype: "week",
                column: t.WidgetType.EARNINGS,
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
      function (t, n, i, r, o, u) {
        return e.e(
          { a: t.shouldShow },
          t.shouldShow
            ? e.e(
                { b: t.isMP },
                t.isMP
                  ? {
                      c: e.t(t.subscribed ? "已订阅" : "订阅日历"),
                      d: e.n({
                        "widget-earnings__subscribe--subscribed": t.subscribed,
                      }),
                      e: e.o(function () {
                        return (
                          t.handleSubscribe &&
                          t.handleSubscribe.apply(t, arguments)
                        );
                      }, 5833),
                    }
                  : {},
                {
                  f: e.f(t.displayList, function (n, i, r) {
                    return {
                      a: e.t(n.widget_title || n.title),
                      b: e.t(t.formatDate(n.dateStr)),
                      c: e.t(n.forecast_net),
                      d: i,
                      e: e.o(
                        function (e) {
                          return t.handleItemClick(n);
                        },
                        5834,
                        i
                      ),
                    };
                  }),
                  g: e.o(function () {
                    return t.handleMore && t.handleMore.apply(t, arguments);
                  }, 5835),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-61cc44f7"],
  ]);
wx.createComponent(r);
