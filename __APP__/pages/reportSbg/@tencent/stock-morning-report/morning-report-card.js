var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../@babel/runtime/helpers/Objectentries");
var t = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../@babel/runtime/helpers/Objectvalues");
var n = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/slicedToArray"),
  o = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  s = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && l(e, n, t[n]);
    if (c) {
      var r,
        s = o(c(t));
      try {
        for (s.s(); !(r = s.n()).done; ) {
          n = r.value;
          p.call(t, n) && l(e, n, t[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return i(e, a(t));
  },
  f = function (e, t, n) {
    return new Promise(function (r, o) {
      var s = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(s, i);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  b = require("../../../../common/vendor.js"),
  m = require("../stock-news-core/utils/newsParser.js"),
  g = require("../stock-news-base/service/market/RelatedStockUtils.js"),
  v = require("../stock-news-core/utils/appHelper.js"),
  w = require("../stock-news-sdk/index.js"),
  S = require("../stock-crypto-modules-config/dist/index.js"),
  k = require("../../js-cookie/src/js.cookie.js"),
  y = require("../stock-news-base/service/news/gray.js"),
  x = require("../wzq-lite-basket/api/StockBasketAPI.js"),
  _ = w.sdk,
  q = _.navigateToNewsDetail,
  A = _.navigateToLiveDetail,
  I = _.navigateToNewsSubject;
function P(e) {
  var t;
  return (
    e.content.forEach(function (e) {
      e.clickParams && e.clickParams.id && (t = e.clickParams.id);
    }),
    t
  );
}
var T = Object.freeze({ voices: "0&1", type: 0, speed: 1 }),
  C = !1,
  D = !1,
  R = "podcast_setting",
  E = "GLOBAL",
  j = function () {
    return f(
      exports,
      null,
      n().mark(function e() {
        var t, o, s, i, a;
        return n().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), v.getUserInfo();
              case 2:
                return (
                  (t = e.sent),
                  (o = t.openid),
                  (s = t.fskey),
                  (i = t.check),
                  (a = {
                    openid: o,
                    fskey: s,
                    check: i,
                    app: v.getAppValue(),
                    appid: v.getAppId(),
                  }),
                  e.abrupt(
                    "return",
                    Object.entries(a)
                      .filter(function (e) {
                        var t = r(e, 2)[1];
                        return null != t && "" !== t;
                      })
                      .map(function (e) {
                        var t = r(e, 2),
                          n = t[0],
                          o = t[1];
                        return ""
                          .concat(n, "=")
                          .concat(encodeURIComponent(String(o)));
                      })
                      .join("&")
                  )
                );
              case 8:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  },
  N = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = {};
    return (
      C ? (t.scene = "lite_web") : D && (t.scene = "wzq_xcx"),
      b.StockBridge.request(b.API_REMIND, "GET", d(d({}, e), t))
    );
  },
  O = { IS_ZXG: !1 },
  G = {
    name: "MorningReportCard",
    components: {
      HoverWrapper: function () {
        return "./morning-report-card/component/HoverWrapper.js";
      },
      FollowGuide: function () {
        return "./morning-report-card/component/followGuide.js";
      },
      SpeechControlPanel: function () {
        return "./morning-report-card/speech/SpeechControlPanel.js";
      },
      NewsBriefContent: function () {
        return "./morning-report-card/content.js";
      },
      NewsBriefHeader: function () {
        return "./morning-report-card/header.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
    },
    provide: function () {
      var e = this,
        t = {
          env: O,
          interceptNavigate: function (t) {
            return !!e.interceptLeave && (e.$emit("beforeLeave", t), !0);
          },
        };
      return t;
    },
    inject: {
      hqBridge: { default: null },
      getUserInfo: {
        default: function () {
          return function () {
            return { subscribe: 1 };
          };
        },
      },
    },
    props: [
      "data",
      "rmzb",
      "mediaInfo",
      "theme",
      "pathname",
      "openApp",
      "speechInfo",
      "speech_ids",
      "flucShowMode",
      "wzqConfig",
      "xgInfo",
      "translateStatus",
      "mediaInfoAll",
      "isBrief",
      "newsId",
      "anchorTitle",
      "isAutoSubscribe",
      "interceptLeave",
    ],
    data: function () {
      return {
        isWeb: !0,
        isWZQ: !1,
        newsData: {},
        allFold: 0,
        subscribedCount: "",
        topHeightObj: {},
        morningPopupReadyDisplay: !1,
        gdList: {},
        isOnShow: !1,
        hasSubscribed: null,
        showFollowGuide: !1,
        isMP: !0,
        translucentBar: !0,
        showAiDialog: !1,
        showAiParams: null,
        aiXiaobaoSymbol: "",
      };
    },
    computed: {
      containerStyle: function () {
        var e, t;
        if (
          null ==
          (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
            ? void 0
            : t.IS_PCWEIXIN
        )
          return "padding-top: 0px";
        try {
          if (b.wx$1.getMenuButtonBoundingClientRect) {
            var n = b.wx$1.getMenuButtonBoundingClientRect().bottom;
            return "padding-top: ".concat(n, "px");
          }
        } catch (e) {}
        return "";
      },
    },
    watch: {
      data: function (e) {
        (this.newsData = e),
          this.requestStockIsInPortfolio(),
          this.initBriefContent(),
          this.queryGdInfo();
      },
    },
    mounted: function () {
      return f(
        this,
        null,
        n().mark(function e() {
          return n().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((this.browsTime = Date.now()),
                      (this.newsData = this.data),
                      this.requestStockIsInPortfolio(),
                      this.initBriefContent(),
                      this.getSubscribedCount(),
                      this.queryGdInfo(),
                      O.IS_ZXG)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (
                      (e.prev = 1), (e.next = 4), this.queryReportSubscribe()
                    );
                  case 4:
                    this.checkAutoSubscribe(),
                      this.registerSubscribeEvent(),
                      (e.next = 10);
                    break;
                  case 8:
                    (e.prev = 8), (e.t0 = e.catch(1));
                  case 10:
                    b.StockBridge.setTitle("微证券早报"),
                      this.$emit("dataReady");
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[1, 8]]
          );
        })
      );
    },
    beforeDestroy: function () {
      this.unregisterSubscribeEvent();
    },
    methods: {
      mpOnShow: function () {
        (this.isOnShow = !0),
          this.queryGdInfo(),
          this.needRefreshSubscribeStatus && this.queryReportSubscribe();
      },
      mpOnHide: function () {
        this.isOnShow = !1;
      },
      imgLoadSuccess: function () {
        this.morningPopupReadyDisplay = !0;
      },
      wzqKeepPos: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this.newsId;
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      onGuideCancel: function () {
        this.showFollowGuide = !1;
      },
      onGuideConfirm: function () {
        (this.showFollowGuide = !1), (this.needRefreshSubscribeStatus = !0);
      },
      wzqVisibiliyChanged: function () {
        "visible" === document.visibilityState &&
          this.needRefreshSubscribeStatus &&
          this.queryReportSubscribe();
      },
      registerSubscribeEvent: function () {},
      unregisterSubscribeEvent: function () {},
      onSubscribe: function (e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return f(
          this,
          null,
          n().mark(function r() {
            var o, s, i, a;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (!e) {
                        n.next = 20;
                        break;
                      }
                      return (n.next = 3), this.getUserInfo();
                    case 3:
                      if (((n.t0 = +n.sent.subscribe), 1 != n.t0)) {
                        n.next = 17;
                        break;
                      }
                      return (
                        (o = {
                          subscribe: "marketnotice",
                          morning_report_ver: "classic",
                        }),
                        (n.prev = 6),
                        (n.next = 9),
                        N(o)
                      );
                    case 9:
                      (s = n.sent) &&
                        0 == +s.retcode &&
                        ((this.hasSubscribed = !0),
                        "将在每个交易日盘前于“微证券公众号”提醒您",
                        t &&
                          b.StockBridge.toast(
                            "将在每个交易日盘前于“微证券公众号”提醒您",
                            "none",
                            { duration: 3e3 }
                          )),
                        (n.next = 15);
                      break;
                    case 13:
                      (n.prev = 13), (n.t1 = n.catch(6));
                    case 15:
                      n.next = 18;
                      break;
                    case 17:
                      this.$emit("subscribeRetention");
                    case 18:
                      n.next = 30;
                      break;
                    case 20:
                      return (
                        (i = {
                          unsubscribe: "morningnotice",
                          morning_report_ver: "classic",
                        }),
                        (n.prev = 21),
                        (n.next = 24),
                        N(i)
                      );
                    case 24:
                      (a = n.sent) &&
                        0 == +a.retcode &&
                        ((this.hasSubscribed = !1),
                        t &&
                          b.StockBridge.toast("已关闭微信通知", "none", {
                            duration: 3e3,
                          })),
                        (n.next = 30);
                      break;
                    case 28:
                      (n.prev = 28), (n.t2 = n.catch(21));
                    case 30:
                    case "end":
                      return n.stop();
                  }
              },
              r,
              this,
              [
                [6, 13],
                [21, 28],
              ]
            );
          })
        );
      },
      queryReportSubscribe: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r, o, s, i, a;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.getUserInfo();
                    case 2:
                      return (
                        (t = e.sent),
                        (e.prev = 3),
                        (e.next = 6),
                        N({
                          querysub: "marketnotice",
                          morning_report_ver: "classic",
                        })
                      );
                    case 6:
                      (r = e.sent) &&
                        r.marketnotice &&
                        ((o = r.marketnotice),
                        (s = o.after),
                        (i = o.morningnotice),
                        (a = o.noon),
                        (this.hasSubscribed = 1 == +i && 1 == +t.subscribe),
                        !this.hasSubscribed ||
                          (0 != +s && 0 != +a) ||
                          this.onSubscribe(!0, !1)),
                        (e.next = 12);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(3));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[3, 10]]
            );
          })
        );
      },
      checkAutoSubscribe: function () {
        this.isAutoSubscribe && !this.hasSubscribed && this.onSubscribe(!0);
      },
      initBriefContent: function () {
        if (
          this.newsData &&
          this.newsData.content &&
          this.newsData.content.data
        ) {
          var e = [],
            t = 0,
            n = 0;
          this.newsData.content.data.forEach(function (r, o, s) {
            e[t] || e.push({ groupName: "", secondaryDir: [] }),
              e[t].secondaryDir[n] ||
                e[t].secondaryDir.push({
                  secondaryTitle: [],
                  secondaryLink: "",
                  contentArr: [],
                });
            var i = "h1" === r.tag,
              a = r && "text" === r.type && "h2" === r.tag;
            i || a || e[t].secondaryDir[n].contentArr.push(m.newsParser(r));
            if (r && "text" === r.type && "h2" === r.tag) {
              var c = e[t].secondaryDir[n].secondaryTitle;
              if (
                (c.push(m.newsParser(r)),
                c && c.length && c[0] && c[0].content && c[0].content.length)
              ) {
                var u = c[0].content;
                if (
                  -1 !==
                  u.findIndex(function (e) {
                    return e.clickParams && e.clickParams.id;
                  })
                ) {
                  var p = c[0].content.find(function (e) {
                    return e.clickParams && e.clickParams.id;
                  });
                  e[t].secondaryDir[n].secondaryLink = p.clickParams;
                }
                for (
                  var l = /^(\d+、)$/, d = /^(\d+、)/, h = 0;
                  h < u.length;
                  h++
                ) {
                  var f = u[h];
                  if (f.text && l.test(f.text)) {
                    (f.text = f.text.replace(l, "".concat(n, "."))),
                      (f.styles = ["title-index-box"]);
                    break;
                  }
                  if (f.text && d.test(f.text)) {
                    (f.text = f.text.replace(d, "")),
                      u.unshift({
                        clickParams: null,
                        styles: ["title-index-box"],
                        text: "".concat(n, "."),
                        textType: "raw",
                      });
                    break;
                  }
                }
              }
            }
            r && "h1" === r.tag && (e[t].groupName = r.desc),
              s[o + 1] && "h1" === s[o + 1].tag && ((t += 1), (n = 0)),
              s[o + 1] && "h2" === s[o + 1].tag && (n += 1);
          }),
            (this.newsData.briefContent = e);
        }
      },
      queryGdInfo: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r, o, s, i, a, c, u, p, l;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((t = this.newsData || {}), (r = t.stock_orders))) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      if ((o = Object.values(r)) && o.length) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      return (
                        (s = { ids: o.join(",") }),
                        (e.prev = 7),
                        this.stockBasketAPI ||
                          (this.stockBasketAPI = new x.StockBasketAPI(
                            this.hqBridge
                          )),
                        (e.next = 11),
                        this.stockBasketAPI.getBasketSummary(s)
                      );
                    case 11:
                      for (
                        i = e.sent, a = i.data, c = a.list, u = {}, p = 0;
                        p < c.length;
                        p++
                      )
                        (l = c[p]), (u[l.info.id] = l);
                      (this.gdList = u), (e.next = 21);
                      break;
                    case 19:
                      (e.prev = 19), (e.t0 = e.catch(7));
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[7, 19]]
            );
          })
        );
      },
      getStockCodeList: function () {
        var e,
          t,
          n = [],
          r = +(null == (t = null == (e = this.data) ? void 0 : e.news_stocks)
            ? void 0
            : t.length);
        if (r > 0)
          for (var o = 0; o < r; o++)
            for (
              var s = this.data.news_stocks[o].relate_stocks, i = 0;
              i < s.length;
              i++
            ) {
              var a = s[i];
              n.push(a.stock_code);
            }
        return n;
      },
      requestStockIsInPortfolio: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      g.RelatedStockUtils.getInstance().requestStockIsInPortfolio(
                        this.getStockCodeList()
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      handleContent: function (e, t) {
        if ("text" === t.type) {
          var n = t.desc;
          e.push({
            type: t.type,
            tag: t.tag || "",
            tagClass: t.tag ? "text-".concat(t.tag) : "news-normal",
            content: m.mpReplaceSpecialTags(n),
          });
        } else if ("snptb" === t.type) {
          var r = t.desc;
          (t.tableGroup = r.split("#").map(function (e) {
            var t = e.split("|");
            t.shift(), t.pop();
            var n = [];
            return (
              t.reduce(function (e, r, o) {
                return e && r
                  ? (n.push({
                      text: m.mpReplaceSpecialTags(e.text || e),
                      colSpan: e.colSpan || 1,
                    }),
                    o === t.length - 1 &&
                      n.push({ text: m.mpReplaceSpecialTags(r), colSpan: 1 }),
                    { text: r, colSpan: 1 })
                  : r
                  ? void 0
                  : (o === t.length - 1 &&
                      n.push({
                        text: m.mpReplaceSpecialTags(e.text || e),
                        colSpan: (e.colSpan || 1) + 1,
                      }),
                    { text: e.text || e, colSpan: (e.colSpan || 1) + 1 });
              }),
              n
            );
          })),
            (t.showTableIcon = t.tableGroup.every(function (e, t) {
              return (
                t < 2 ||
                (!(e.length > 2) &&
                  e.every(function (e, t) {
                    return (
                      0 !== t ||
                      (0 === t &&
                        e.text &&
                        e.text[0] &&
                        e.text[0].text.length <= 4)
                    );
                  }))
              );
            })),
            e.push(t);
        } else
          "emphasis" === t.type
            ? ((t.contentList = t.list.map(function (e) {
                return {
                  type: "text",
                  tag: "",
                  tagClass: "news-normal emphasis-content",
                  content: m.mpReplaceSpecialTags(e),
                };
              })),
              e.push(t))
            : "module" === t.type
            ? ((t.moduleInfo = (t.id && t.id.split("#")) || []), e.push(t))
            : e.push(t);
      },
      getSubscribedCount: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t, r;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = d({}, e || {});
                          return b.StockBridge.request(
                            "https://wzq.tenpay.com/svr/user/user_service/user_subscribe_num",
                            "GET",
                            t
                          );
                        })({ type: 1 })
                      );
                    case 3:
                      (t = e.sent),
                        (r = t.subscribe_num) && (this.subscribedCount = r),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        (this.subscribedCount = "260");
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 8]]
            );
          })
        );
      },
      onShare: function (e) {
        this.$emit("share", e);
      },
      mpScrollTop: function (e) {
        this.$emit("mpScrollTop", e);
      },
      mpScroll: function (e) {
        var t;
        null == (t = this.$refs.briefContent) || t.mpScroll(e);
      },
      handleShowHalfAi: function (e) {
        var t;
        if (e) {
          var n = e.stockCode,
            r = void 0 === n ? "" : n,
            o = e.aiXiaobaoObj,
            s = void 0 === o ? {} : o;
          if (((this.aiXiaobaoSymbol = r), "mpweapp" === b.ShellTypeEnum.SHY)) {
            var i = s.title,
              a = void 0 === i ? "" : i,
              c = s.prompt,
              u = void 0 === c ? "" : c,
              p = s.scene,
              l = void 0 === p ? "" : p,
              d = encodeURIComponent(a),
              h = encodeURIComponent(u),
              f = {
                url: "qqstock://SHY?info=".concat(
                  encodeURIComponent(
                    JSON.stringify({
                      p_key: "com.tencent.shy.search_ai",
                      p_url: "semiAi?stockCode="
                        .concat(r, "&sourceFrom=")
                        .concat(l, "&aiDialogQuestion=")
                        .concat(d, "&aiQuestionQuery=")
                        .concat(h, "&serverObj=")
                        .concat(encodeURIComponent(JSON.stringify(s))),
                      showNav: !1,
                    })
                  )
                ),
                height:
                  0.8 *
                  ((null == (t = window.screen) ? void 0 : t.height) ||
                    window.innerHeight),
                coverColor: "#66000000",
                cornerRadius: 8,
              };
            b.StockBridge.routeTo({
              url: "qqstock://SDModal?info=".concat(
                encodeURIComponent(JSON.stringify(f))
              ),
            });
          } else (this.showAiParams = s), (this.showAiDialog = !0);
        }
      },
      onCloseAiDialog: function () {
        (this.showAiDialog = !1), this.$emit("closeAiDialog");
      },
      onAiShareHandler: function (e) {
        this.$emit("shareAiAnswer", e);
      },
    },
  };
Array ||
  (
    b.resolveComponent("NewsBriefHeader") +
    b.resolveComponent("NewsBriefContent") +
    b.resolveComponent("FollowGuide") +
    b.resolveComponent("HoverWrapper") +
    b.resolveComponent("half-screen-ai-entry") +
    b.resolveComponent("SpeechControlPanel")
  )();
var B = b._export_sfc(G, [
  [
    "render",
    function (e, t, n, r, o, s) {
      return b.e(
        {
          a:
            o.newsData &&
            o.newsData.content &&
            o.newsData.content.data &&
            o.newsData.content.data.length,
        },
        o.newsData &&
          o.newsData.content &&
          o.newsData.content.data &&
          o.newsData.content.data.length
          ? b.e(
              { b: o.isMP },
              (o.isMP, {}),
              {
                c: b.o(s.onSubscribe, 1424),
                d: b.o(s.wzqKeepPos, 1425),
                e: b.p({
                  "has-subscribed": o.hasSubscribed,
                  "subscribed-count": o.subscribedCount,
                  "wzq-config": n.wzqConfig,
                  "speech-info": n.speechInfo,
                  speech_ids: n.speech_ids,
                  theme: n.theme,
                  "news-data": o.newsData,
                  "news-id": n.newsId,
                  "ai-podcast": !!o.newsData.ai_podcast,
                }),
                f: b.sr("briefContent", "357473b1-2,357473b1-0"),
                g: b.o(s.wzqKeepPos, 1426),
                h: b.o(function (t) {
                  return e.$emit("recommend-to-subscribe");
                }, 1427),
                i: b.o(function (t) {
                  return e.$emit("go-to-activity");
                }, 1428),
                j: b.o(s.onShare, 1429),
                k: b.o(s.mpScrollTop, 1430),
                l: b.o(s.handleShowHalfAi, 1431),
                m: b.o(function (t) {
                  return e.$emit("pqywSecondArticleFullyVisible");
                }, 1432),
                n: b.p({
                  data: o.newsData,
                  "wzq-config": n.wzqConfig,
                  "all-fold": o.allFold,
                  "news-id": n.newsId,
                  "anchor-title": n.anchorTitle,
                  "gd-list": o.gdList,
                  "is-on-show": o.isOnShow,
                }),
                o: b.o(s.onGuideCancel, 1433),
                p: b.o(s.onGuideConfirm, 1434),
                q: b.p({
                  show: o.showFollowGuide,
                  stat: "IOg00p000q012",
                  "wzq-config": n.wzqConfig,
                }),
                r: o.showAiDialog && o.showAiParams,
              },
              o.showAiDialog && o.showAiParams
                ? {
                    s: b.o(s.onCloseAiDialog, 1435),
                    t: b.o(s.onAiShareHandler, 1436),
                    v: b.p({
                      theme: n.theme,
                      "show-ai-dialog": o.showAiDialog,
                      "ai-dialog-question": o.showAiParams.title,
                      "ai-question-query": o.showAiParams.prompt,
                      "server-obj": o.showAiParams,
                      "source-from": o.showAiParams.scene,
                      "stock-code": o.aiXiaobaoSymbol,
                    }),
                  }
                : {},
              {
                w: b.p({ "news-data": o.newsData, theme: n.theme }),
                x: b.n(o.translucentBar ? "translucent-bar" : ""),
                y: b.s(s.containerStyle),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-357473b1"],
]);
wx.createComponent(B);
var z = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.DEFAULT_PODCAST_SETTING = T),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLW1vcm5pbmctcmVwb3J0L21vcm5pbmctcmVwb3J0LWNhcmQudnVl =
    z),
  (exports.MORNING_REPORT_SPEECH_PLAY_EVENT =
    "news-morning-report-speech-play"),
  (exports.MORNING_REPORT_SPEECH_STATUS_EVENT =
    "news-morning-report-speech-status"),
  (exports.PLAYBACK_RATE = [
    0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2,
  ]),
  (exports.PLAYBACK_RATE_KEY = "speech_player_playbackRate"),
  (exports.PODCAST_SETTING_STORAGE_KEY = "morning_report_podcast_setting"),
  (exports.SPEECH_LIKE_STATUS_KEY = "morning_report_speech_like_status"),
  (exports.SPEECH_PLAYING_STATUS = {
    READY: 0,
    PLAYING: 1,
    PAUSE: 2,
    ERROR: 3,
    STOPPED: 4,
  }),
  (exports.VOICE_LIST_STORAGE_KEY = "morning_report_voice_list"),
  (exports.getContentId = P),
  (exports.getInstitutionData = function () {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return f(exports, [].concat(r), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return n().mark(function r() {
        var o, s;
        return n().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (r.next = 2), y.isNewsGrayUser("queryInstitutionalAccount")
                );
              case 2:
                if (!r.sent) {
                  r.next = 4;
                  break;
                }
                return r.abrupt(
                  "return",
                  (function (e) {
                    return f(
                      this,
                      null,
                      n().mark(function t() {
                        return n().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  y.newsRequest(
                                    "/zxg/news/daily_report/query_institutional_account",
                                    e
                                  )
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                  })({
                    institutions: e
                      .map(function (e) {
                        return e.name;
                      })
                      .join(","),
                  })
                );
              case 4:
                return (
                  (o =
                    "https://snp.tenpay.com/snpapi/marketReportService/getInstitutionalAccount".concat(
                      "?institutions=",
                      encodeURIComponent(JSON.stringify(e))
                    )),
                  (s = {}),
                  (r.t0 = function (e) {
                    var n, r;
                    if (!e) return e;
                    var o = e.code,
                      s = null != (n = e.data) ? n : {},
                      i = s.institution,
                      a = d({}, e),
                      c = d({}, s);
                    return h(d({}, a), {
                      code: Number(null != o ? o : -1),
                      msg: String(null != (r = e.msg) ? r : ""),
                      data: h(d({}, c), {
                        institution: i && "object" == t(i) ? d({}, i) : {},
                      }),
                    });
                  }),
                  (r.next = 8),
                  b.StockBridge.request(o, "GET", s)
                );
              case 8:
                return (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1));
              case 10:
              case "end":
                return r.stop();
            }
        }, r);
      })();
    });
  }),
  (exports.getMoreGszfm = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return f(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return n().mark(function t() {
        var r;
        return n().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2),
                  y.isNewsGrayUser("queryPreMarketAnnouncementSub")
                );
              case 2:
                if (!t.sent) {
                  t.next = 4;
                  break;
                }
                return t.abrupt(
                  "return",
                  (function () {
                    return f(this, arguments, function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return n().mark(function t() {
                        return n().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  y.newsRequest(
                                    "/zxg/news/daily_report/query_pre_market_announcement_sub",
                                    e
                                  )
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })();
                    });
                  })({})
                );
              case 4:
                return (
                  "https://snp.tenpay.com/snpapi/marketReportService/preMarketAnnouncementSub",
                  (r = d({}, e || {})),
                  (t.t0 = function (e) {
                    var t, n, r;
                    if (!e) return e;
                    var o = e.code,
                      s = null != (t = e.data) ? t : {},
                      i = d({}, e),
                      a = d({}, s);
                    return h(d({}, i), {
                      code: Number(null != o ? o : -1),
                      msg: String(null != (n = e.msg) ? n : ""),
                      data: h(d({}, a), {
                        news_id: String(null != (r = s.news_id) ? r : ""),
                      }),
                    });
                  }),
                  (t.next = 8),
                  b.StockBridge.request(
                    "https://snp.tenpay.com/snpapi/marketReportService/preMarketAnnouncementSub",
                    "GET",
                    r
                  )
                );
              case 8:
                return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
              case 10:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.getPodcast = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return b.StockBridge.request(
      "https://snp.tenpay.com/snpapi/marketReportService/podcast",
      "POST",
      e,
      {
        dataType: "json",
        header: { "Content-Type": "application/json" },
        headers: { "Content-Type": "application/json" },
      }
    );
  }),
  (exports.getPodcastSetting = function () {
    return f(
      exports,
      null,
      n().mark(function e() {
        var o, s, i, a, c, u, p;
        return n().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.t0 =
                    "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/usersettings/batchget?"),
                  (e.next = 3),
                  j()
                );
              case 3:
                return (
                  (e.t1 = e.sent),
                  (s = e.t0.concat.call(e.t0, e.t1, "&").concat(
                    Object.entries({ subIndex: E, settingKeys: R })
                      .map(function (e) {
                        var t = r(e, 2),
                          n = t[0],
                          o = t[1];
                        return ""
                          .concat(n, "=")
                          .concat(encodeURIComponent(String(o)));
                      })
                      .join("&")
                  )),
                  (e.next = 7),
                  b.StockBridge.request(s, "GET", {})
                );
              case 7:
                if (
                  0 === (null == (i = e.sent) ? void 0 : i.code) ||
                  void 0 === (null == i ? void 0 : i.code)
                ) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return", {
                  code: i.code,
                  msg: i.message || i.msg,
                });
              case 10:
                if (
                  (a = (function (e) {
                    if (!e || "string" != typeof e) return null;
                    try {
                      var n = JSON.parse(e);
                      return n && "object" == t(n) ? n : null;
                    } catch (e) {
                      return null;
                    }
                  })(
                    null == (o = null == i ? void 0 : i.settings)
                      ? void 0
                      : o[R]
                  ))
                ) {
                  e.next = 13;
                  break;
                }
                return e.abrupt("return", { code: 0, data: d({}, T) });
              case 13:
                return (
                  (c =
                    "string" == typeof a.voices && "" !== a.voices
                      ? a.voices
                      : T.voices),
                  (u = Number(a.type)),
                  (p = Number(a.speed)),
                  e.abrupt("return", {
                    code: 0,
                    data: {
                      voices: c,
                      type: Number.isFinite(u) ? u : T.type,
                      speed: p > 0 ? p : T.speed,
                    },
                  })
                );
              case 15:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  }),
  (exports.getVoiceList = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = d({}, e || {});
    return b.StockBridge.request(
      "https://snp.tenpay.com/snpapi/marketReportService/getVoiceList",
      "GET",
      t
    );
  }),
  (exports.getZxtxData = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return f(exports, [].concat(t), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return n().mark(function t() {
        var r, o, s, i, a;
        return n().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (t.next = 2), y.isNewsGrayUser("queryPreMarketSelectStock")
                );
              case 2:
                if (!t.sent) {
                  t.next = 4;
                  break;
                }
                return t.abrupt(
                  "return",
                  (function () {
                    return f(this, arguments, function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return n().mark(function t() {
                        return n().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  y.newsRequest(
                                    "/zxg/news/daily_report/query_pre_market_select_stock",
                                    e
                                  )
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })();
                    });
                  })({})
                );
              case 4:
                return (
                  (r = (function () {
                    var e = "zxg_h5",
                      t = S.dist.SIGN_KEY.zxgh5;
                    window &&
                      window.__WZQ__ &&
                      ((e = "wzq"),
                      (t = S.dist.SIGN_KEY.wzq_snp),
                      window.IS_WZQ_LIGHT &&
                        ((e = "mini_h5"), (t = S.dist.SIGN_KEY.light_h5))),
                      (e = "xcx"),
                      (t = S.dist.SIGN_KEY.wzq_snp);
                    var n = Math.floor(Math.random() * Math.floor(1e4)),
                      r = b.md5Module(e + t + n);
                    return {
                      zappid: e,
                      sign: r,
                      nonce: n,
                      queryStr: "zappid="
                        .concat(e, "&sign=")
                        .concat(r, "&nonce=")
                        .concat(n),
                    };
                  })()),
                  (o = r.zappid),
                  (s = r.sign),
                  (i = r.nonce),
                  "https://snp.tenpay.com/snpapi/marketReportService/getPreMarketSelectStock",
                  (a = d({ zappid: o, sign: s, nonce: i }, e)),
                  (a = b.wx$1
                    ? h(d({}, a), {
                        openId: b.wx$1.getStorageSync("_qluin"),
                        fsKey: b.wx$1.getStorageSync("_qlskey"),
                      })
                    : h(d({}, a), {
                        openId: k.cookie.get("wzq_qluin"),
                        fsKey: k.cookie.get("wzq_qlskey"),
                      })),
                  (t.t0 = function (e) {
                    var t;
                    if (!e) return e;
                    var n = e.code,
                      r = Array.isArray(e.stocks) ? e.stocks : [],
                      o = d({}, e),
                      s = r.map(function (e) {
                        var t,
                          n,
                          r,
                          o,
                          s,
                          i,
                          a,
                          c,
                          u,
                          p,
                          l = d({}, e),
                          f = null == e ? void 0 : e.news_desc,
                          b = null == e ? void 0 : e.risk_desc;
                        if (f) {
                          var m = d({}, f);
                          u = h(d({}, m), {
                            id: String(null != (t = f.id) ? t : ""),
                            title: String(null != (n = f.title) ? n : ""),
                            is_important: Number(
                              null != (r = f.is_important) ? r : 0
                            ),
                          });
                        }
                        if (b) {
                          var g = d({}, b);
                          p = h(d({}, g), {
                            tag_value: String(
                              null != (o = b.tag_value) ? o : ""
                            ),
                            content: String(null != (s = b.content) ? s : ""),
                            desc: String(null != (i = b.desc) ? i : ""),
                          });
                        }
                        return h(d({}, l), {
                          stock_code: String(
                            null != (a = null == e ? void 0 : e.symbol) ? a : ""
                          ),
                          stock_name: String(
                            null != (c = null == e ? void 0 : e.name) ? c : ""
                          ),
                          news_desc: u,
                          risk_desc: p,
                        });
                      });
                    return h(d({}, o), {
                      code: Number(null != n ? n : -1),
                      msg: String(null != (t = e.msg) ? t : ""),
                      stocks: s,
                    });
                  }),
                  (t.next = 10),
                  b.StockBridge.request(
                    "https://snp.tenpay.com/snpapi/marketReportService/getPreMarketSelectStock",
                    "GET",
                    a
                  )
                );
              case 10:
                return (t.t1 = t.sent), t.abrupt("return", (0, t.t0)(t.t1));
              case 12:
              case "end":
                return t.stop();
            }
        }, t);
      })();
    });
  }),
  (exports.itemContent = function (e) {
    try {
      return e.content
        .map(function (e) {
          return e.text;
        })
        .join("");
    } catch (e) {}
    return "";
  }),
  (exports.jumpToDetail = function (e, t) {
    var n = P(e);
    n &&
      (n.startsWith("SN")
        ? q({ instance: t, id: n, scrollToTop: !0 })
        : n.startsWith("LV")
        ? A({ instance: t, id: n, scrollToTop: !0 })
        : n.startsWith("TN") && I({ instance: t, id: n, scrollToTop: !0 }));
  }),
  (exports.savePodcastSetting = function () {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return f(exports, [].concat(r), function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return n().mark(function r() {
        var o, s, i;
        return n().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (n.t0 =
                    "https://proxy.finance.qq.com/cgi/cgi-bin/zxgapi/usersettings/batchset?"),
                  (n.next = 3),
                  j()
                );
              case 3:
                return (
                  (n.t1 = n.sent),
                  (o = n.t0.concat.call(n.t0, n.t1)),
                  (s = JSON.stringify({
                    voices: "string" == typeof t.voices ? t.voices : "",
                    type: Number(t.type) || 0,
                    speed: Number(t.speed) || 1,
                  })),
                  (i = { subIndex: E, settings: e({}, R, s) }),
                  n.abrupt(
                    "return",
                    b.StockBridge.request(o, "POST", i, {
                      dataType: "json",
                      header: { "Content-Type": "application/json" },
                      headers: { "Content-Type": "application/json" },
                    })
                  )
                );
              case 8:
              case "end":
                return n.stop();
            }
        }, r);
      })();
    });
  });
