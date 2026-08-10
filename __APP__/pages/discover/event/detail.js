var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js"),
  r = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  n = require("../hooks/shareProtocol.js"),
  s = t.defineComponent({
    components: {
      PrivacyPolicyModal: function () {
        return "../../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      eventDetail: function () {
        return "../@tencent/wzq-lite-discovery/components/event-detail/mp/index.js";
      },
    },
    setup: function (e, s) {
      s.emit;
      var i = t.getCurrentInstance().proxy || t.getCurrentInstance();
      t.provide("stockBridge", t.StockBridge);
      var o = new t.HQBridge();
      t.provide("hqBridge", o);
      var a = t.login.getLoginInfo() || {},
        c = a.qluin,
        u = a.qlskey;
      if (c && u) {
        var h = {
          qlskey: u,
          qluin: c,
          qlappid: "wx4ffb369b6881ee5e",
          appid: "wx4ffb369b6881ee5e",
          openid: c,
          fskey: u,
        };
        t.provide("userinfo", h);
        var l = t.ref({ value: !1 }),
          v = t.computed(function () {
            try {
              return 1 == +i.options.__share_flag__;
            } catch (e) {}
            return !1;
          }),
          d = r.useUserProtocol(),
          p = d.showPrivacyPolicy,
          f = d.didAgreeUserAgreement,
          m = d.checkPrivacyAuth,
          g = d.subUserAgreementStatus,
          S = d.unsubUserAgreementStatus;
        t.provide("didAgreeUserAgreement", f),
          t.provide("onCheckUserAgreementStatus", m);
        var y = n.shareProtocol().getShareSnapshot,
          P = t.ref("");
        return {
          reportPrefix: "news.eventdetail",
          isOnShow: l,
          isSharePage: v,
          getShareSnapshot: y,
          shareSuccess: t.ref(!1),
          refreshSuccess: function (e) {
            P.value = e.share_code || "";
            try {
              i.itemDetail = e;
            } catch (e) {}
          },
          showPrivacyPolicy: p,
          subUserAgreementStatus: g,
          unsubUserAgreementStatus: S,
          shareCode: P,
        };
      }
    },
    data: function () {
      return { options: {}, eventId: "", itemDetail: null };
    },
    onLoad: function (e) {
      this.options = e;
      var r = e.event_id;
      (this.eventId = r),
        this.subUserAgreementStatus(),
        t.wx$1.hideShareMenu({ menus: ["shareTimeline"] });
    },
    unload: function () {
      this.unsubUserAgreementStatus();
    },
    onShow: function () {
      var e;
      if (((this.isOnShow = !0), this.shareSuccess)) {
        this.shareSuccess = !1;
        try {
          null == (e = this.$refs.eventDetailRef) || e.shareSuccess();
        } catch (e) {}
      }
      this.subUserAgreementStatus(),
        t.wx$1.hideShareMenu({ menus: ["shareTimeline"] });
    },
    onHide: function () {
      (this.isOnShow = !1), this.unsubUserAgreementStatus();
    },
    onShareAppMessage: function (t) {
      return (
        (r = this),
        null,
        (n = e().mark(function t() {
          var r, n, s, i, o;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!this.itemDetail) {
                      e.next = 14;
                      break;
                    }
                    return (
                      (e.prev = 1),
                      (e.next = 4),
                      this.getShareSnapshot(this.itemDetail)
                    );
                  case 4:
                    return (
                      (r = e.sent),
                      (n = (r || {}).tempFilePath),
                      (this.shareSuccess = !0),
                      (s = this.itemDetail),
                      (i = s.event_id),
                      (o = s.event_title),
                      e.abrupt("return", {
                        title: o,
                        imageUrl: n,
                        path: "/pages/discover/event/detail?event_id="
                          .concat(i, "&stat_data=Ocj00p000h153&share_code=")
                          .concat(this.shareCode),
                        mtaParams: { hotissueid: i },
                      })
                    );
                  case 12:
                    (e.prev = 12), (e.t0 = e.catch(1));
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this,
            [[1, 12]]
          );
        })),
        new Promise(function (e, t) {
          var s = function (e) {
              try {
                o(n.next(e));
              } catch (e) {
                t(e);
              }
            },
            i = function (e) {
              try {
                o(n.throw(e));
              } catch (e) {
                t(e);
              }
            },
            o = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(s, i);
            };
          o((n = n.apply(r, null)).next());
        })
      );
      var r, n;
    },
  });
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("eventDetail") +
    t.resolveComponent("PrivacyPolicyModal")
  )();
var i = t._export_sfc(s, [
  [
    "render",
    function (e, r, n, s, i, o) {
      return t.e(
        { a: e.rootFontSize, b: e.eventId },
        e.eventId
          ? {
              c: t.sr("eventDetailRef", "6efbc9c4-2"),
              d: t.o(e.refreshSuccess, 358),
              e: t.p({
                "report-prefix": e.reportPrefix,
                "is-on-show": e.isOnShow,
                "is-share-page": e.isSharePage,
                "event-id": e.eventId,
              }),
            }
          : {},
        {
          f: t.o(function (t) {
            return (e.showPrivacyPolicy = t);
          }, 359),
          g: t.p({ value: e.showPrivacyPolicy }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-6efbc9c4"],
]);
(s.__runtimeHooks = 2), wx.createPage(i);
