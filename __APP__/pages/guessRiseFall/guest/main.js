var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js"),
  n = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  r = {
    name: "GuessRiseFallGuest",
    components: {
      GuestPage: function () {
        return "../@tencent/st-act-guessrisefall/src/pages/share/mp.js";
      },
    },
    setup: function () {
      var e = n.useUserProtocol(),
        r = e.didAgreeUserAgreement,
        s = e.subUserAgreementStatus,
        o = e.unsubUserAgreementStatus;
      t.provide("didAgreeUserAgreement", r),
        t.provide("onCheckUserAgreementStatus", function () {
          var e, n;
          null ==
            (n =
              null == (e = t.StockBridge.privacyAgreement)
                ? void 0
                : e.check) || n.call(e).catch(function () {});
        }),
        s(),
        t.onUnmounted(function () {
          o();
        });
    },
    data: function () {
      return { pageOptions: {} };
    },
    onLoad: function (e) {
      this.pageOptions = e;
    },
    onShow: function () {
      this.$nextTick(function () {
        t.ensureScenePrivacyPopup("guess_rise_fall");
      });
    },
    onShareAppMessage: function () {
      return (
        (t = this),
        null,
        (n = e().mark(function t() {
          var n;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      !(null == (n = this.$refs.guestPage)
                        ? void 0
                        : n.getShareConfig)
                    ) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 3), this.$refs.guestPage.getShareConfig();
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
        new Promise(function (e, r) {
          var s = function (e) {
              try {
                a(n.next(e));
              } catch (e) {
                r(e);
              }
            },
            o = function (e) {
              try {
                a(n.throw(e));
              } catch (e) {
                r(e);
              }
            },
            a = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(s, o);
            };
          a((n = n.apply(t, null)).next());
        })
      );
      var t, n;
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("GuestPage")
  )();
var s = t._export_sfc(r, [
  [
    "render",
    function (e, n, r, s, o, a) {
      return {
        a: e.rootFontSize,
        b: t.sr("guestPage", "60ed7b5e-2"),
        c: t.p({ "page-options": o.pageOptions }),
      };
    },
  ],
  ["__scopeId", "data-v-60ed7b5e"],
]);
(r.__runtimeHooks = 2), wx.createPage(s);
