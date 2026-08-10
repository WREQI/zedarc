var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../common/vendor.js"),
  t = require("@tencent/stock-news-core/hooks/useUserProtocol.js"),
  r = {
    name: "GuessRiseFallMain",
    components: {
      MainPage: function () {
        return "./@tencent/st-act-guessrisefall/src/pages/home/mp.js";
      },
    },
    setup: function () {
      var e = t.useUserProtocol(),
        r = e.didAgreeUserAgreement,
        a = e.subUserAgreementStatus,
        s = e.unsubUserAgreementStatus;
      n.provide("didAgreeUserAgreement", r),
        n.provide("onCheckUserAgreementStatus", function () {
          var e, t;
          null ==
            (t =
              null == (e = n.StockBridge.privacyAgreement)
                ? void 0
                : e.check) || t.call(e).catch(function () {});
        }),
        a(),
        n.onUnmounted(function () {
          s();
        });
    },
    data: function () {
      return { pageOptions: {} };
    },
    onLoad: function (e) {
      (this.pageOptions = e),
        n.wx$1.showShareMenu({ menus: ["shareAppMessage", "shareTimeline"] });
    },
    onShow: function () {
      var e = this;
      this.$nextTick(function () {
        var t, r;
        null == (r = null == (t = e.$refs.mainPage) ? void 0 : t.onPageShow) ||
          r.call(t),
          n.ensureScenePrivacyPopup("guess_rise_fall");
      });
    },
    onHide: function () {
      var e, n;
      null == (n = null == (e = this.$refs.mainPage) ? void 0 : e.onPageHide) ||
        n.call(e);
    },
    onShareAppMessage: function (n) {
      return (
        (t = this),
        null,
        (r = e().mark(function t() {
          var r;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      !(null == (r = this.$refs.mainPage)
                        ? void 0
                        : r.getShareConfig)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 3), this.$refs.mainPage.getShareConfig(n);
                  case 3:
                    (e.t0 = e.sent), (e.next = 7);
                    break;
                  case 6:
                    e.t0 = {
                      title: "【全民猜涨跌】大盘猜猜猜：涨还是跌？来参与竞猜",
                      imageUrl:
                        "https://st.gtimg.com/design/5190cd22002b9660dbc73cda74f72289.png",
                      path: "/pages/guessRiseFall/main?stat_data=FMxcx2M06PG00100",
                    };
                  case 7:
                    return e.abrupt("return", e.t0);
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })),
        new Promise(function (e, n) {
          var a = function (e) {
              try {
                i(r.next(e));
              } catch (e) {
                n(e);
              }
            },
            s = function (e) {
              try {
                i(r.throw(e));
              } catch (e) {
                n(e);
              }
            },
            i = function (n) {
              return n.done ? e(n.value) : Promise.resolve(n.value).then(a, s);
            };
          i((r = r.apply(t, null)).next());
        })
      );
      var t, r;
    },
    onCopyUrl: function () {
      var e;
      return (null == (e = this.$refs.mainPage) ? void 0 : e.getCopyUrlConfig)
        ? this.$refs.mainPage.getCopyUrlConfig()
        : {
            title: "【全民猜涨跌】大盘猜猜猜：涨还是跌？来参与竞猜",
            imageUrl:
              "https://wzq.gtimg.com/image/activity/guessRiseFall/right.png",
            path: "/pages/guessRiseFall/guest/main?stat_data=FMxcx4M06PG00100",
          };
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("MainPage")
  )();
var a = n._export_sfc(r, [
  [
    "render",
    function (e, t, r, a, s, i) {
      return {
        a: e.rootFontSize,
        b: n.sr("mainPage", "399f5a83-2"),
        c: n.p({ "page-options": s.pageOptions }),
      };
    },
  ],
  ["__scopeId", "data-v-399f5a83"],
]);
(r.__runtimeHooks = 2), wx.createPage(a);
