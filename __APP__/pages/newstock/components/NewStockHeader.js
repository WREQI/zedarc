require("../../../app.js");
var e = require("../../../common/vendor.js"),
  t = require("../config.js"),
  n = {
    name: "NewStockHeader",
    options: { styleIsolation: "shared", virtualHost: !1 },
    setup: function () {
      var n = e.getCurrentInstance().proxy,
        o = e.inject("newStockHeaderTabs"),
        r = e.computed(function () {
          return o.value.filter(function (e) {
            return e.show;
          });
        }),
        a = e.inject("newStockHeaderCurrentIndex"),
        i = e.inject("newStockTabCickHandler"),
        c = e.inject("hideBookingBubbleTips");
      return {
        tabs: r,
        selectedIndex: a,
        onTabClick: i,
        toCalendar: function () {
          n.$router.push({ name: "NewStockCalendar" }),
            n.$stat.click("trade.playnew.calendar");
        },
        toTips: function () {
          n.$stat.click("trade.playnew.help"),
            a.value === t.tabEnum.BOOKING
              ? n.$router.push({ name: "NewStockTips", query: { tab: "2" } })
              : n.$router.push({ name: "NewStockTips", query: { tab: "0" } });
        },
        hideBookingBubbleTips: c,
      };
    },
  };
Array || e.resolveComponent("BubbleTip")(), Math;
var o = e._export_sfc(n, [
  [
    "render",
    function (t, n, o, r, a, i) {
      return {
        a: e.o(function () {
          return r.toCalendar && r.toCalendar.apply(r, arguments);
        }),
        b: e.o(function () {
          return r.toTips && r.toTips.apply(r, arguments);
        }),
        c: e.f(r.tabs, function (t, n, o) {
          return e.e(
            { a: t.show },
            t.show
              ? {
                  b: e.t(t.name),
                  c: e.n("pos-".concat(n)),
                  d: e.o(r.hideBookingBubbleTips, t.id),
                  e: "2c2d47fb-0-" + o,
                  f: e.p({
                    "is-show": t.bubbleTips.show,
                    content: t.bubbleTips.content,
                    "arrow-position": ["top-left", "top-center", "top-center"][
                      n
                    ],
                    "show-close-btn": !0,
                  }),
                }
              : {},
            {
              g: t.id,
              h: r.selectedIndex === t.id ? 1 : "",
              i: t.redpoint ? 1 : "",
              j: e.o(function (e) {
                return r.onTabClick(t.id);
              }, t.id),
            }
          );
        }),
      };
    },
  ],
  ["__scopeId", "data-v-2c2d47fb"],
]);
wx.createComponent(o);
