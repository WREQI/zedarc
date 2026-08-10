var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../../../../@babel/runtime/helpers/Objectvalues");
var n,
  i = require("../../../../../../../@babel/runtime/helpers/defineProperty"),
  s = require("../../../../../../../common/vendor.js"),
  a = "https://st.gtimg.com/design/f15ea1c32f0fd0254a70e99823a9e642.png",
  r = "https://st.gtimg.com/design/5a4fefb06390ab1490fe8e6182ffa435.png",
  o = "📈涨涨涨",
  l = "📉跌跌跌",
  u = "100041",
  c = {
    isFollow: !1,
    kLine: null,
    titleTime: "",
    inflow: "",
    preText: "",
    nextText: "",
    ratio: { riseRate: 50, fallRate: 50 },
    result: 0,
    prizeTime: "",
    maskShow: !1,
  },
  d = {
    GUESS_RESULT: "wdoNMUqhmI-aZXIX2ziDgW92JGMqCGUMqNUOYBVgD6Y",
    ACTIVITY_RESULT: "XkJtE2S-Kmk61e63s70zWqwO-cQ_Bmsnd_xjo6h63bg",
  },
  p = (i((n = {}), d.GUESS_RESULT, 100032), i(n, d.ACTIVITY_RESULT, 100033), n);
function f(t) {
  var e;
  return (
    !(!(null == t ? void 0 : t.contents) || t.contents.length < 2) &&
    (function (t) {
      return (
        (null == t
          ? void 0
          : t
              .replace(
                /(?:\uD83D\uDCC8)+|(?:\uD83D\uDCC9)+|(?:\uD83D\uDCCA)+/g,
                ""
              )
              .trim()) || ""
      );
    })(null == (e = t.contents[1]) ? void 0 : e.text).length >= 1
  );
}
function g(t) {
  return t < 10 ? "0".concat(t) : "".concat(t);
}
var h = "function" == typeof getApp ? getApp().globalData : {},
  m = {
    name: "MarketGuessing",
    components: {
      guessLocal: function () {
        return "./guess-card/mp.js";
      },
      clock: function () {
        return "./guess-progress.js";
      },
      bullet: function () {
        return "./guess-bullet/mp.js";
      },
    },
    props: {
      inviterGuessResult: { type: String, default: "" },
      guessLocalData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tradeDateString: { type: String, default: "" },
      stockInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      riseResults: {
        type: Array,
        default: function () {
          return [];
        },
      },
      fallResults: {
        type: Array,
        default: function () {
          return [];
        },
      },
      FTInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      clockList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      preloadedNews: { type: Object, default: null },
    },
    data: function () {
      return {
        BULLET_RISE: 1,
        BULLET_FALL: 2,
        swiperCurTips: 0,
        showTips: !1,
        remindStatus: null,
        riseBulletData: [],
        fallBulletData: [],
        activityResult: [],
        activityStart: {},
        newsTitle: "",
        newsId: "",
        isInitRemind: !0,
        isDestroyed: !1,
        pendingTimers: [],
        pendingIdleCallbacks: [],
        emptyGuessLocalData: c,
      };
    },
    computed: {
      isGuest: function () {
        var t;
        return (null == (t = this.inviterGuessResult) ? void 0 : t.length) > 0;
      },
    },
    watch: {
      guessLocalData: {
        handler: function (t) {
          var e = this;
          (null == t ? void 0 : t.length) &&
            this.$nextTick(function () {
              (e.showTips = t.length > 1),
                e.showTips &&
                  (e.swiperCurTips = (function (t) {
                    var e,
                      n,
                      i =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                    if (
                      t.length > 1 &&
                      1 === (null == (e = t[0]) ? void 0 : e.once) &&
                      1 === (null == (n = t[1]) ? void 0 : n.once)
                    ) {
                      var s = i ? 2 : 1;
                      return Math.min(s, t.length - 1);
                    }
                    return 0;
                  })(t));
            });
        },
        immediate: !0,
      },
      activityStart: {
        handler: function (t) {
          (null == t ? void 0 : t.status) &&
            (this.remindStatus = parseInt(t.status));
        },
        immediate: !1,
      },
      riseResults: {
        handler: function (t) {
          Array.isArray(t) && this.updateBulletData("riseBulletData", t, o);
        },
        immediate: !0,
      },
      fallResults: {
        handler: function (t) {
          Array.isArray(t) && this.updateBulletData("fallBulletData", t, l);
        },
        immediate: !0,
      },
      remindStatus: {
        handler: function (t) {
          t &&
            this.isInitRemind &&
            s.StockBridge.report("yy.czdupdate_openremind_exposure", {}, {});
        },
        immediate: !0,
      },
      preloadedNews: {
        handler: function (t) {
          t &&
            t.title &&
            ((this.newsTitle = t.title), (this.newsId = t.id || ""));
        },
        immediate: !0,
      },
      newsTitle: {
        handler: function (t, e) {
          t &&
            !e &&
            (this.updateBulletData("riseBulletData", this.riseResults, o),
            this.updateBulletData("fallBulletData", this.fallResults, l));
        },
      },
    },
    mounted: function () {
      var t = this;
      if (this.preloadedNews) {
        var e = setTimeout(function () {
          t.isDestroyed || t.fetchActivityMessages();
        }, 50);
        this.pendingTimers.push(e);
      } else this.scheduleNonCriticalTasks();
    },
    beforeDestroy: function () {
      (this.isDestroyed = !0),
        this.pendingTimers.forEach(function (t) {
          return clearTimeout(t);
        }),
        (this.pendingTimers = []),
        "undefined" != typeof cancelIdleCallback &&
          this.pendingIdleCallbacks.forEach(function (t) {
            return cancelIdleCallback(t);
          }),
        (this.pendingIdleCallbacks = []);
    },
    methods: {
      onShellReady: function () {
        this.$emit("shellReady");
      },
      onKlineReady: function () {
        this.$emit("klineReady");
      },
      scheduleNonCriticalTasks: function () {
        var t = this,
          e = function (e, n) {
            if ("undefined" != typeof requestIdleCallback) {
              var i = requestIdleCallback(
                function () {
                  t.isDestroyed || e();
                },
                { timeout: n + 100 }
              );
              t.pendingIdleCallbacks.push(i);
            } else {
              var s = setTimeout(function () {
                t.isDestroyed || e();
              }, n);
              t.pendingTimers.push(s);
            }
          };
        e(function () {
          return t.fetchActivityMessages();
        }, 50),
          e(function () {
            return t.getNews();
          }, 100);
      },
      fetchActivityMessages: function () {
        var t = this;
        if (!this.isDestroyed) {
          var e = {
            channel: 0,
            oper: 5,
            bids: "100032,100033,100041,100043",
            tmpl_ids:
              "wdoNMUqhmI-aZXIX2ziDgW92JGMqCGUMqNUOYBVgD6Y,XkJtE2S-Kmk61e63s70zWqwO-cQ_Bmsnd_xjo6h63bg,L1dh1ehLxwpJ0EgP4_EEDPt9eYz49a-Ccm9MmMfDJzU,ye1pTlF-svIBTaq9X2FP-qFUMZr7KgYJGIHCcDjPwSY",
          };
          s.StockBridge.request(
            "".concat(h.CGI_PREFIX, "msg_subscribe.fcgi"),
            "POST",
            e
          )
            .then(function (e) {
              if (!t.isDestroyed && (null == e ? void 0 : e.data)) {
                var n = e.data;
                Object.values(n).forEach(function (e) {
                  "100032" === e.bid || "100033" === e.bid
                    ? t.activityResult.push(e)
                    : e.bid === u
                    ? (t.activityStart = e)
                    : "100043" === e.bid && t.$emit("activityProgress", e);
                });
              }
            })
            .catch(function (t) {});
        }
      },
      updateBulletData: function (t, n, i) {
        var s =
          this.newsTitle && this.newsId
            ? { title: this.newsTitle, id: this.newsId }
            : {};
        this[t] = (function (t, n) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            s = [];
          if (Array.isArray(t) && t.length > 0) {
            var o,
              l = e(t);
            try {
              for (l.s(); !(o = l.n()).done; ) {
                var u = o.value;
                f(u) &&
                  s.push({
                    avatar: u.userImage || a,
                    content: { text: u.contents[1].text },
                  });
              }
            } catch (t) {
              l.e(t);
            } finally {
              l.f();
            }
          }
          return (
            i.title &&
              i.id &&
              s.push({ avatar: r, content: { text: i.title, newsId: i.id } }),
            0 === s.length && s.push({ avatar: a, content: { text: n } }),
            s
          );
        })(n, i, s);
      },
      getNews: function () {
        return (
          (e = this),
          null,
          (n = t().mark(function e() {
            var n, i, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.isDestroyed) {
                        t.next = 13;
                        break;
                      }
                      return (
                        (t.prev = 1),
                        (t.next = 4),
                        s.StockBridge.request(
                          "https://snp.tenpay.com/cgi/cgi-bin/snp/news/promotionBySymbol",
                          "GET",
                          { symbol: "sh000001", appid: "wzq", check: "12" }
                        )
                      );
                    case 4:
                      if (((i = t.sent), !this.isDestroyed)) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt("return");
                    case 7:
                      (a =
                        null == (n = null == i ? void 0 : i.data)
                          ? void 0
                          : n[0]) &&
                        ((this.newsTitle = a.title || ""),
                        (this.newsId = a.id || "")),
                        (t.next = 13);
                      break;
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(1));
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[1, 11]]
            );
          })),
          new Promise(function (t, i) {
            var s = function (t) {
                try {
                  r(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              a = function (t) {
                try {
                  r(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              r = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(s, a);
              };
            r((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      },
      changeEvent: function (t) {
        var e, n;
        this.swiperCurTips =
          null !=
          (n = null == (e = null == t ? void 0 : t.detail) ? void 0 : e.current)
            ? n
            : 0;
      },
      guessRemind: function () {
        var t = this,
          e = 1 === this.remindStatus ? 4 : 3;
        s.StockBridge.request(
          "".concat(h.CGI_PREFIX, "msg_subscribe.fcgi"),
          "GET",
          {
            channel: 0,
            oper: e,
            tmpl_id: "L1dh1ehLxwpJ0EgP4_EEDPt9eYz49a-Ccm9MmMfDJzU",
            bid: u,
          }
        )
          .then(function (n) {
            (t.isInitRemind = !1),
              (t.remindStatus = 4 === e ? 0 : 1),
              1 === t.remindStatus &&
                s.StockBridge.report("yy.czdupdate_openremind_click", {}, {}),
              4 === e &&
                s.index.showToast({ title: "竞猜提醒已关闭", icon: "none" });
          })
          .catch(function (t) {});
      },
      guessOpResult: function (t) {
        this.$emit("guessOpResult", t);
      },
      bulletAnchorPoint: function (t) {
        this.$emit("bulletAnchorPoint", t);
      },
      goMainPage: function () {
        s.StockBridge.report("yy.czdlanew.guest_gotoactivity_click", {}, {}),
          s.index.redirectTo({
            url: "/pages/guessRiseFall/main?stat_data=Imn58p00r5001",
          });
      },
    },
  };
Array ||
  (
    s.resolveComponent("bullet") +
    s.resolveComponent("guessLocal") +
    s.resolveComponent("clock")
  )();
var v = s._export_sfc(m, [
  [
    "render",
    function (t, e, n, i, a, r) {
      return s.e(
        {
          a: s.o(r.bulletAnchorPoint, 3848),
          b: s.p({ "list-data": a.riseBulletData, type: a.BULLET_RISE }),
          c: s.o(r.bulletAnchorPoint, 3849),
          d: s.p({ "list-data": a.fallBulletData, type: a.BULLET_FALL }),
          e: 0 === n.guessLocalData.length,
        },
        0 === n.guessLocalData.length
          ? {
              f: s.o(r.guessOpResult, 3850),
              g: s.o(r.onShellReady, 3851),
              h: s.o(r.onKlineReady, 3852),
              i: s.p({
                "guess-local-data": a.emptyGuessLocalData,
                "activity-result": a.activityResult,
                "trade-date-string": n.tradeDateString,
                "stock-info": n.stockInfo,
                FTInfo: n.FTInfo,
              }),
            }
          : 1 === n.guessLocalData.length
          ? {
              k: s.o(r.guessOpResult, 3853),
              l: s.o(r.onShellReady, 3854),
              m: s.o(r.onKlineReady, 3855),
              n: s.p({
                "guess-local-data": n.guessLocalData[0],
                "activity-result": a.activityResult,
                "trade-date-string": n.tradeDateString,
                "stock-info": n.stockInfo,
                FTInfo: n.FTInfo,
              }),
            }
          : {
              o: s.f(n.guessLocalData, function (t, e, i) {
                return {
                  a: s.o(r.guessOpResult, 3856, "guesslocal-swiper-".concat(e)),
                  b: s.o(r.onShellReady, 3857, "guesslocal-swiper-".concat(e)),
                  c: s.o(r.onKlineReady, 3858, "guesslocal-swiper-".concat(e)),
                  d: "5d022990-4-" + i,
                  e: s.p({
                    "guess-local-data": t,
                    "activity-result": a.activityResult,
                    "trade-date-string": n.tradeDateString,
                    "stock-info": n.stockInfo,
                    FTInfo: n.FTInfo,
                  }),
                  f: "guesslocal-swiper-".concat(e),
                };
              }),
              p: a.swiperCurTips,
              q: s.o(function () {
                return r.changeEvent && r.changeEvent.apply(r, arguments);
              }, 3859),
            },
        { j: 1 === n.guessLocalData.length, r: a.showTips },
        a.showTips
          ? {
              s: s.f(n.guessLocalData, function (t, e, n) {
                return {
                  a: "swipertips-".concat(e),
                  b: s.n(
                    a.swiperCurTips === e ? "guess-market__dot--active" : ""
                  ),
                };
              }),
            }
          : {},
        { t: s.p({ "date-list": n.clockList }), v: r.isGuest },
        r.isGuest
          ? {
              w: s.o(function () {
                return r.goMainPage && r.goMainPage.apply(r, arguments);
              }, 3860),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5d022990"],
]);
wx.createComponent(v);
var y = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.BID_MAP = p),
  (exports.CARD_IMAGES = {
    NOT_OPEN:
      "https://st.gtimg.com/design/bd6dba2884c958bb8da8a91ea2f549a2.png",
    SUBSCRIBE:
      "https://st.gtimg.com/design/3505cdd6da64f0b48eb2f03967b55fad.png",
  }),
  (exports.DEFAULT_STOCK = {
    MARKET: "1",
    SCODE: "000001",
    NAME: "上证指数",
    SYMBOL: "sh000001",
  }),
  (exports.GUESS_RESULT = { NONE: 0, RISE: 1, FALL: 2 }),
  (exports.GUESS_STATUS = { RISE: "1", FALL: "2" }),
  (exports.KLINE_STATUS = { TRADING: 1, NOT_OPEN: 2 }),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1ndWVzc3Jpc2VmYWxsL3NyYy9jb21wb25lbnRzL21hcmtldC1ndWVzc2luZy9tcC52dWU =
    y),
  (exports.OPERATION_IMAGES = {
    TIP: "https://st.gtimg.com/design/0ac7ad7ea988943afd575101435deea7.png",
    TRIANGLE:
      "https://st.gtimg.com/design/860bd1d01f2c08ecdacd66e447c2b46d.png",
    RISE_RESULT:
      "https://st.gtimg.com/design/6c10f47231b9339b5cc3889f7c36bc49.png",
    FALL_RESULT:
      "https://st.gtimg.com/design/94248ff4858ff9216a493ec72d6e4cf7.png",
    AI_GUIDE_TIPS:
      "https://st.gtimg.com/design/9005dd3b2d4ec252bd92e9ad9875a39f.png",
  }),
  (exports.TEMPLATE_IDS = d),
  (exports.calcCountDown = function (t) {
    var e = Math.floor(t / 3600),
      n = t - 3600 * e,
      i = Math.floor(n / 60),
      s = Math.floor(n - 60 * i);
    return { hour: g(e), min: g(i), sec: g(s) };
  }),
  (exports.getTDateString = function (t) {
    var e = null == t ? void 0 : t.T_resultts;
    if (!e) return "";
    var n = new Date(1e3 * e);
    return ""
      .concat(g(n.getMonth() + 1), "月")
      .concat(g(n.getDate()), "日")
      .concat(g(n.getHours()), ":")
      .concat(g(n.getMinutes()))
      .slice(0, -5);
  });
