var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  o = require("../../model/newstock/useNewStock.js"),
  r = require("../../config/key.js");
require("../../service/aegis/platform/not-wujie.js");
var a = require("../../model/newstock/useNewStockBooking.js"),
  s = require("./config.js"),
  i = require("../../stores/app/useNavbar.js"),
  c = require("../../stores/user/useUserinfo.js"),
  u = require("../../model/newstock/useBulletBar.js"),
  l = require("../../mixin/platforms/index.js"),
  d = require("../../utils/getPlatform.js"),
  p = {
    name: "Newstock",
    options: { styleIsolation: "shared" },
    components: {
      NewStockHeader: function () {
        return "./components/NewStockHeader.js";
      },
      Combine: function () {
        return "./components/Combine.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      SignPrivacyProtocol: function () {
        return "../../components/PrivacyProtocol/PrivacyProtocol.js";
      },
      NewStockPerformance: function () {
        return "./components/NewStockPerformance.js";
      },
      RiskTestReminder: function () {
        return "../../components/RiskTestReminder/index.js";
      },
      BookingPurchase: function () {
        return "./components/BookingPurchase.js";
      },
      BulletinBar: function () {
        return "../../components/BulletinBar/index.js";
      },
      NewStockGuideActionSheet: function () {
        return "./components/NewStockGuideActionSheet.js";
      },
    },
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    mixins: [l.pluginMixins],
    setup: function () {
      var r = n.getCurrentInstance().proxy,
        l = n.storeToRefs(i.useNavbarStore()),
        p = l.externalNavBar,
        h = l.externalNavBar4Mp,
        m = d.getPlatform(),
        k = m.isPCWeixin,
        v = m.isZxgXcx,
        f = o.useNewStock(),
        b = f.purchaseListData,
        w = f.queryPurchaseList,
        g = f.queryRecentNewStockList,
        x = f.purchaseList,
        B = f.onConfirm,
        S = f.orderList,
        P = f.errorTips,
        E = f.showKcbKzzTip,
        N = f.selectHandler,
        y = f.canTrade,
        C = f.updateTradeStatus,
        I = f.signNewstockPurchaseRiskProtocol,
        L = f.stockPerformanceData,
        R = f.getSubInfo;
      n.provide("purchaseListData", b),
        n.provide("purchaseList", x),
        n.provide("orderList", S),
        n.provide("onConfirm", B),
        n.provide("errorTips", P),
        n.provide("showKcbKzzTip", E),
        n.provide("selectHandler", N),
        n.provide("canTrade", y),
        n.provide("updateTradeStatus", C),
        n.provide("signNewstockPurchaseRiskProtocol", I);
      var T = a.useNewstockBooking();
      n.provide("newStockBookingData", T), n.provide("getSubInfo", R);
      var q = n.ref(!0),
        A = n.ref(!1),
        j = n.ref(s.tabEnum.PURCHASE),
        O = n.computed(function () {
          return (
            b.purchaseList_xg.length +
            b.purchaseList_xg_cyb.length +
            b.purchaseList_xg_kcb.length +
            b.purchaseList_xz.length +
            b.purchaseList_xz_cyb.length +
            b.purchaseList_xz_kcb.length
          );
        }),
        H = c.useUserinfoStore(),
        D = n.computed(function () {
          return "1" === H.userinfo.is_newstock_booking_gray && A.value;
        }),
        _ = n.computed(function () {
          return [
            {
              id: s.tabEnum.PURCHASE,
              name: "今日申购(".concat(O.value, ")"),
              show: !0,
              bubbleTips: {},
            },
            {
              id: s.tabEnum.BOOKING,
              name: "预约打新(".concat(
                T.newStockBookingData.canBookingList.length,
                ")"
              ),
              redpoint: T.newAddNotify.value,
              show: D.value,
              bubbleTips: {},
            },
            {
              id: s.tabEnum.PERFORMANCE,
              name: "上市表现",
              show: !0,
              bubbleTips: {},
            },
          ];
        }),
        G = n.ref(s.tabEnum.PURCHASE);
      function K(e) {
        j.value !== e &&
          ((j.value = e || s.tabEnum.PURCHASE),
          j.value === s.tabEnum.PURCHASE
            ? r.$stat.click("trade.playnew.topbar.today")
            : j.value === s.tabEnum.PERFORMANCE
            ? r.$stat.click("trade.playnew.newstock.show")
            : j.value === s.tabEnum.BOOKING &&
              (D.value && T.queryBookingData(),
              r.$stat.click("trade.playnew.topbar.booking")));
      }
      n.watch(
        D,
        (function () {
          var o = t(
            e().mark(function t(o) {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (o)
                        try {
                          null == T ||
                            T.queryBookingData({ defalutSelected: !0 }),
                            j.value !== s.tabEnum.PURCHASE ||
                              x.length ||
                              (j.value = s.tabEnum.BOOKING),
                            G.value === s.tabEnum.BOOKING &&
                              (j.value = s.tabEnum.BOOKING);
                        } catch (e) {
                          n.index.showToast({ title: e.retmsg, icon: "none" });
                        }
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          );
          return function (e) {
            return o.apply(this, arguments);
          };
        })(),
        { immediate: !0 }
      ),
        n.provide("newStockHeaderTabs", _),
        n.provide("newStockHeaderCurrentIndex", j),
        n.provide("newStockTabCickHandler", K),
        n.provide("hideBookingBubbleTips", T.hideBubbleTips);
      var U = u.useBulletBar(b),
        M = U.showBulletBar,
        z = U.showActionSheet,
        F = U.closeBulletBar;
      return {
        externalNavBar: p,
        externalNavBar4Mp: h,
        firstEnter: q,
        hasLoadedPurchaseInfo: A,
        tabs: _,
        selectedIndex: j,
        purchaseListData: b,
        onTabClick: K,
        queryPurchaseList: w,
        queryRecentNewStockList: g,
        queryBookingData: null == T ? void 0 : T.queryBookingData,
        purchaseTotalNum: O,
        tabEnum: s.tabEnum,
        hasBookingFlag: D,
        purchaseList: x(o.PURCHASE_TYPE.ALL),
        stockPerformanceData: L,
        getSubInfo: R,
        selectedIndexInQuery: G,
        showBulletBar: M,
        showActionSheet: z,
        handleBulletBarClose: function () {
          F(), r.$stat.click("trade.newstock-guide.close");
        },
        handleBulletBarClick: function () {
          (z.value = !0), r.$stat.click("trade.newstock-guide-bulletbar.click");
        },
        isPCWeixin: k,
        isZxgXcx: v,
      };
    },
    onShow: function () {
      this.handleShow();
    },
    mounted: function () {
      this.handleLoad();
    },
    methods: {
      handleLoad: function () {
        var o = this;
        return t(
          e().mark(function t() {
            var a, i, c, u, l, d;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = o.$route || {}),
                        (i = a.query),
                        (u = (c = void 0 === i ? {} : i).hasNewStock),
                        (l = c.tab),
                        (d = void 0 === l ? s.tabEnum.PURCHASE : l),
                        u &&
                          n.index.setStorageSync(r.ASSET_NEWSTOCK_REDPOINT, {
                            value: !0,
                            expires: n
                              .dayjs()
                              .add(1, "days")
                              .set("hours", 0)
                              .set("minutes", 0)
                              .set("second", 0)
                              .valueOf(),
                          }),
                        (o.selectedIndexInQuery = o.tabs.findIndex(function (
                          e
                        ) {
                          return e.id === +d;
                        })),
                        (e.prev = 2),
                        (e.next = 5),
                        o.queryPurchaseList()
                      );
                    case 5:
                      (o.hasLoadedPurchaseInfo = !0),
                        o.queryRecentNewStockList(),
                        -1 === o.selectedIndexInQuery ||
                        (o.selectedIndexInQuery === s.tabEnum.BOOKING &&
                          !o.hasBookingFlag)
                          ? (o.selectedIndex = s.tabEnum.PURCHASE)
                          : (o.selectedIndex = o.selectedIndexInQuery),
                        (e.next = 13);
                      break;
                    case 10:
                      (e.prev = 10),
                        (e.t0 = e.catch(2)),
                        n.index.showToast({ title: e.t0.retmsg, icon: "none" });
                    case 13:
                      o.firstEnter = !1;
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[2, 10]]
            );
          })
        )();
      },
      handleShow: function () {
        var o = this;
        return t(
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (o.firstEnter) {
                        e.next = 12;
                        break;
                      }
                      return (e.prev = 1), (e.next = 4), o.queryPurchaseList();
                    case 4:
                      (o.hasLoadedPurchaseInfo = !0),
                        o.queryRecentNewStockList(),
                        o.hasBookingFlag &&
                          o.queryBookingData({ defalutSelected: !0 }),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(1)),
                        n.index.showToast({ title: e.t0.retmsg, icon: "none" });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 9]]
            );
          })
        )();
      },
    },
  };
Array ||
  (
    n.resolveComponent("BulletinBar") +
    n.resolveComponent("NewStockHeader") +
    n.resolveComponent("Combine") +
    n.resolveComponent("BookingPurchase") +
    n.resolveComponent("NewStockPerformance") +
    n.resolveComponent("SignPrivacyProtocol") +
    n.resolveComponent("RiskTestReminder") +
    n.resolveComponent("mp-dialog") +
    n.resolveComponent("NewStockGuideActionSheet") +
    n.resolveComponent("GlobalWrap")
  )(),
  Math;
var h = n._export_sfc(p, [
  [
    "render",
    function (e, t, o, r, a, s) {
      return n.e(
        { a: e.rootFontSize, b: r.showBulletBar },
        r.showBulletBar
          ? {
              c: n.o(r.handleBulletBarClose),
              d: n.o(r.handleBulletBarClick),
              e: n.p({ "show-right-icon": !0, animate: !1 }),
            }
          : {},
        { f: r.selectedIndex === r.tabEnum.PURCHASE },
        r.selectedIndex === r.tabEnum.PURCHASE
          ? { g: n.p({ "stock-performance-data": r.stockPerformanceData }) }
          : (r.selectedIndex === r.tabEnum.BOOKING ||
              (r.selectedIndex, r.tabEnum.PERFORMANCE),
            {}),
        {
          h: r.selectedIndex === r.tabEnum.BOOKING,
          i: r.selectedIndex === r.tabEnum.PERFORMANCE,
          j: r.hasLoadedPurchaseInfo,
        },
        r.hasLoadedPurchaseInfo
          ? {
              k: n.sr("privacyProtocolDialog", "5362d768-6,5362d768-0"),
              l: n.p({ scene: "newstock" }),
            }
          : {},
        { m: r.hasLoadedPurchaseInfo },
        (r.hasLoadedPurchaseInfo, {}),
        {
          n: n.p({ id: "mp-dialog" }),
          o: n.o(function (e) {
            return (r.showActionSheet = !1);
          }),
          p: n.p({ visible: r.showActionSheet }),
          q: r.externalNavBar4Mp || r.externalNavBar ? 1 : "",
          r: r.showBulletBar ? 1 : "",
          s: r.isPCWeixin && r.isZxgXcx ? 1 : "",
          t: n.sr("#global-wrap", "5362d768-0"),
          v: n.p({
            id: "global-wrap",
            filePath: "/newstock/index",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(h);
