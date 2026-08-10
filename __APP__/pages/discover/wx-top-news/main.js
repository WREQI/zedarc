var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js"),
  n = require("../hooks/shareProtocol.js"),
  r = "news.wxtopnews",
  o = t.defineComponent({
    components: {
      wxTops: function () {
        return "../@tencent/wzq-lite-discovery/components/wx-tops/mp/index.js";
      },
    },
    setup: function (e, o) {
      o.emit;
      var i = t.getCurrentInstance().proxy || t.getCurrentInstance();
      t.provide("stockBridge", t.StockBridge);
      var s = "".concat(r, "-longpress-share-item");
      t.provide("shareEventName", s);
      var a = "news-wxtopnews-set-share-inviteCode",
        c = t.ref(""),
        u = null,
        h = function (e) {
          u = e.item;
          try {
            i.shareItem = e.item;
          } catch (e) {}
        };
      t.onMounted(function () {
        t.StockBridge.busOff(s, h),
          t.StockBridge.busOn(s, h),
          t.StockBridge.busOn(a, p);
      }),
        t.onUnmounted(function () {
          t.StockBridge.busOff(s, h), t.StockBridge.busOff(a, p);
        });
      var p = function (e) {
          c.value = e || "";
        },
        d = t.ref({ value: !1 }),
        f = t.computed(function () {
          try {
            return 1 == +i.options.__share_flag__;
          } catch (e) {}
          return !1;
        }),
        v = n.shareProtocol().getShareSnapshot,
        m = t.ref(null),
        l = t.ref(!0);
      return {
        reportPrefix: r,
        isOnShow: d,
        isSharePage: f,
        getShareSnapshot: v,
        shareItem: u,
        didFinishAbt: l,
        abtConfig: m,
        shareCode: c,
      };
    },
    data: function () {
      return { options: {} };
    },
    onLoad: function (e) {
      this.options = e;
    },
    onShow: function () {
      this.isOnShow = !0;
    },
    onHide: function () {
      this.isOnShow = !1;
    },
    onShareAppMessage: function (t) {
      return (
        (n = this),
        null,
        (r = e().mark(function n() {
          var r, o, i, s, a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!this.shareItem || "button" !== t.from) {
                      e.next = 15;
                      break;
                    }
                    return (
                      (e.prev = 1),
                      (e.next = 4),
                      this.getShareSnapshot(this.shareItem)
                    );
                  case 4:
                    return (
                      (r = e.sent),
                      (o = (r || {}).tempFilePath),
                      (i = this.shareItem),
                      (s = i.event_id),
                      (a = i.event_title),
                      e.abrupt("return", {
                        title: a || "发现了一个热点事件，快去看看",
                        imageUrl: o,
                        path: "/pages/discover/event/detail?event_id="
                          .concat(s, "&share_code=")
                          .concat(this.shareCode, "&stat_data=Ocj00p000h154"),
                        mtaParams: { hotissueid: s },
                      })
                    );
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(1));
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this,
            [[1, 13]]
          );
        })),
        new Promise(function (e, t) {
          var o = function (e) {
              try {
                s(r.next(e));
              } catch (e) {
                t(e);
              }
            },
            i = function (e) {
              try {
                s(r.throw(e));
              } catch (e) {
                t(e);
              }
            },
            s = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(o, i);
            };
          s((r = r.apply(n, null)).next());
        })
      );
      var n, r;
    },
  });
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("wxTops")
  )();
var i = t._export_sfc(o, [
  [
    "render",
    function (e, n, r, o, i, s) {
      return t.e(
        { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: e.didFinishAbt },
        e.didFinishAbt
          ? {
              d: t.p({
                "report-prefix": e.reportPrefix,
                "is-on-show": e.isOnShow,
                "is-share-page": e.isSharePage,
                "abt-config": e.abtConfig,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-2368b0fe"],
]);
(o.__runtimeHooks = 2), wx.createPage(i);
