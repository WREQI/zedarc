var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, t) {
    return new Promise(function (r, o) {
      var a = function (e) {
          try {
            u(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          try {
            u(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, c);
        };
      u((t = t.apply(e, n)).next());
    });
  },
  t = require("../../../../../../../common/vendor.js"),
  r = require("../../services/BaseController.js"),
  o = require("../../cp-util/navigator/index.js"),
  a = require("../../services/SearchController.js"),
  c = {
    components: {
      TabNav: function () {
        return "../../cp-component/TabNav/mp.js";
      },
      HotSearches: function () {
        return "../../components/hotSearches.js";
      },
      errorModal: function () {
        return "../../components/errorModal.js";
      },
      TabView: function () {
        return "../../cp-component/TabView.js";
      },
      TabHost: function () {
        return "../../cp-component/TabHost.js";
      },
    },
    setup: function (c, u) {
      var i = this,
        s = (u.emit, t.ref(["5分钟热股", "今日热股"])),
        l = t.ref(0),
        p = t.ref({ 0: { loaded: !1, list: [] }, 1: { loaded: !1, list: [] } }),
        f = t.ref(""),
        v = t.ref(null),
        d = a.createSearchController(),
        h = function () {
          return n(
            i,
            null,
            e().mark(function n() {
              var t;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!p.value[l.value].loaded) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (e.next = 4),
                        d.getHotSearchedStocks(0 == l.value ? 0 : 2)
                      );
                    case 4:
                      (t = e.sent),
                        (p.value[l.value] = { list: t, loaded: !0 });
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        };
      t.watch(
        function () {
          return l.value;
        },
        function () {
          h();
        }
      ),
        h(),
        t.onBeforeMount(function () {
          return n(
            i,
            null,
            e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), o.getUrlParam("srcsite");
                    case 2:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = "";
                    case 5:
                      f.value = e.t0;
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        }),
        t.onDeactivated(function () {
          t.StockBridge.busEmit("growth-mocktrade-update-searchhistorylist");
        });
      var b = function (e) {
        var n = ""
          .concat(r.MARKET_CODE[+e.market].toLowerCase())
          .concat(e.code);
        "mpweapp" === t.ShellTypeEnum.SHY
          ? o.push(
              "qqstock://com.tencent.shy.mock_trade/mockdeal?code="
                .concat(n, "&srcsite=")
                .concat(f.value),
              "shy",
              { showNav: !0, title: "模拟炒股" }
            )
          : o.push("mockdeal", "hippy", {
              showNav: !0,
              title: "模拟炒股",
              code: n,
              srcsite: f.value,
            }),
          d.addHistory(e);
      };
      return {
        onMinuteStockTap: function (e) {
          b(e);
        },
        onDailyStockTap: function (e) {
          b(e);
        },
        onTapTab: function (e) {
          l.value = e;
        },
        onSwiperChange: function (e) {
          var n,
            t = e.detail && (null == (n = e.detail) ? void 0 : n.current);
          l.value = t;
        },
        onTabnavChange: function (e) {
          l.value = e;
        },
        onDragging: function () {},
        onDropped: function (e) {
          l.value = e.currentSlide;
        },
        layoutTabNav: function () {},
        setSwiperindex: function (e) {
          v.value && v.value.setSwiperindex(e);
        },
        swiperref: v,
        navs: s,
        currentTab: l,
        hotSearches: p,
      };
    },
  };
Array ||
  (
    t.resolveComponent("tab-nav") +
    t.resolveComponent("tab-view") +
    t.resolveComponent("hot-searches") +
    t.resolveComponent("tab-host")
  )();
var u = t._export_sfc(c, [
  [
    "render",
    function (e, n, r, o, a, c) {
      return {
        a: t.o(o.layoutTabNav, 1219),
        b: t.o(o.onTapTab, 1220),
        c: t.o(o.onTabnavChange, 1221),
        d: t.p({ navs: o.navs, current: o.currentTab }),
        e: t.p({
          "tab-info": {
            textColor: "#353535",
            textSelectColor: "#3077ec",
            tabScrollBarEnable: !0,
            tabScrollBarHeight: 3,
            tabScrollBarWidth: 40,
            tabScrollBarColor: "#3077EE",
            backgroundColor: "#ffffff",
            tabSwitchAnimationEnabled: !0,
            tapScrollCenterEnable: !0,
          },
        }),
        f: t.o(o.onMinuteStockTap, 1222),
        g: t.p({ list: o.hotSearches[0].list }),
        h: t.o(o.onDailyStockTap, 1223),
        i: t.p({ list: o.hotSearches[1].list }),
        j: o.currentTab,
        k: t.o(function () {
          return o.onSwiperChange && o.onSwiperChange.apply(o, arguments);
        }, 1224),
        l: t.o(function () {
          return o.onDragging && o.onDragging.apply(o, arguments);
        }, 1225),
        m: t.o(function () {
          return o.onDropped && o.onDropped.apply(o, arguments);
        }, 1226),
        n: t.o(o.setSwiperindex, 1227),
      };
    },
  ],
  ["__scopeId", "data-v-78674bdf"],
]);
wx.createComponent(u);
