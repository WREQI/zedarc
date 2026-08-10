var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js"),
  r = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  o = {
    components: {
      SettingDetail: function () {
        return "../../marketSbg/@tencent/stock-remind-setting/settingPage.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXJlbWluZC1zZXR0aW5nL3NldHRpbmdQYWdlLnZ1ZQ;
          }
        );
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    setup: function () {
      var e = r.useUserProtocol(),
        o = e.didAgreeUserAgreement,
        n = e.subUserAgreementStatus,
        s = e.unsubUserAgreementStatus;
      t.provide("didAgreeUserAgreement", o),
        t.provide("onCheckUserAgreementStatus", function () {
          var e, r;
          null ==
            (r =
              null == (e = t.StockBridge.privacyAgreement)
                ? void 0
                : e.check) || r.call(e).catch(function () {});
        }),
        n(),
        t.onUnmounted(function () {
          s();
        });
    },
    data: function () {
      return {
        hqBridge: new t.HQBridge(),
        symbol: "",
        market: "",
        scode: "",
        stockType: "",
        stockName: "",
        stockOverView: {},
        isThreshold: !1,
        isSubscribed: !!t.getAccountChatSubscribed(),
      };
    },
    onShow: function () {
      t.querySubscribedByuserinfo(),
        (this.isSubscribed = !!t.getAccountChatSubscribed()),
        t.ensureScenePrivacyPopup("stock_remind");
    },
    onLoad: function (e) {
      var t = e.symbol,
        r = e.market,
        o = e.scode,
        n = e.stockType,
        s = e.stockName,
        c = e.dqj,
        i = e.zsj,
        u = e.zdf,
        a = e.isThreshold;
      (this.symbol = t),
        (this.market = r),
        (this.scode = o),
        (this.stockType = n),
        (this.stockName = s ? decodeURIComponent(s) : ""),
        (this.stockOverView = { dqj: c, zsj: i, zdf: u }),
        (this.isThreshold = a);
    },
    methods: {
      subscribeStockRemind: function (r) {
        return (
          (o = this),
          null,
          (n = e().mark(function o() {
            var n, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.getAccountChatSubscribed()),
                        (e.prev = 1),
                        (e.t0 = t),
                        (e.next = 5),
                        t.getTemplateId("price_remind")
                      );
                    case 5:
                      return (
                        (e.t1 = e.sent),
                        (e.next = 8),
                        e.t0.subscribe.call(e.t0, "price_remind", e.t1)
                      );
                    case 8:
                      "accept" === (s = e.sent) || "reject" === s
                        ? "function" == typeof r && r(n)
                        : t.wx$1.showToast({
                            title: "订阅失败",
                            icon: "error",
                            duration: 1500,
                          }),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t2 = e.catch(1)),
                        "function" == typeof r && r(n);
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              null,
              [[1, 12]]
            );
          })),
          new Promise(function (e, t) {
            var r = function (e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              c = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, s);
              };
            c((n = n.apply(o, null)).next());
          })
        );
        var o, n;
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("SettingDetail")
  )();
var n = t._export_sfc(o, [
  [
    "render",
    function (e, r, o, n, s, c) {
      return t.e(
        { a: e.rootFontSize, b: s.scode },
        s.scode
          ? {
              c: t.o(c.subscribeStockRemind, 74),
              d: t.p({
                symbol: s.symbol,
                market: s.market,
                scode: s.scode,
                "stock-type": s.stockType,
                "stock-name": s.stockName,
                "stock-over-view": s.stockOverView,
                "is-threshold": s.isThreshold,
                "is-subscribed": s.isSubscribed,
                "follow-stat": "IfA00p000q028",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-21265751"],
]);
wx.createPage(n);
