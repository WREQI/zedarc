var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../../../../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../../../../@babel/runtime/helpers/inherits"),
  r = require("../../../../../../../../@babel/runtime/helpers/createSuper"),
  s = Object.defineProperty,
  o = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  p = function (e, t, n) {
    return t in e
      ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t, n) {
    return new Promise(function (i, a) {
      var r = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, s);
        };
      o((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../../../../../../common/vendor.js"),
  f = require("../../../../../stock-news-core/utils/report.js"),
  g = require("../../../../../stock-news-core/utils/shy/index.js"),
  y = require("../../../../../stock-news-sdk/index.js"),
  w = require("../../../../../stock-news-core/utils/newsParser.js"),
  k = require("../../../../../stock-news-core/utils/tools.js"),
  x = require("../../../../hooks/useNewsFeedback.js"),
  v = require("../../../../../stock-news-core/utils/share.js"),
  D = require("../../../../../stock-share-snapshot/components/CanvasImage.js"),
  b = require("../../../../../stock-news-core/utils/request/index.js"),
  C = {}.IS_ZXG,
  _ = {},
  S = (function (s) {
    a(g, s);
    var f = r(g);
    function g() {
      return n(this, g), f.apply(this, arguments);
    }
    return (
      i(g, [
        {
          key: "fetchQRCodeImage",
          value: function (n) {
            return d(
              this,
              null,
              e().mark(function i() {
                var a, r, s, d, f, g;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = 280 === this.qrWidth ? 281 : 280),
                            (r = {
                              xcx_no: 1,
                              scene: "".concat(n, ",1"),
                              page: "pages/newsCon/newsDetail/main",
                              env_version: "release",
                              width: a,
                              is_hyaline: !0,
                            }),
                            (s = (function (e, n) {
                              for (var i in n || (n = {}))
                                u.call(n, i) && p(e, i, n[i]);
                              if (l) {
                                var a,
                                  r = t(l(n));
                                try {
                                  for (r.s(); !(a = r.n()).done; ) {
                                    i = a.value;
                                    h.call(n, i) && p(e, i, n[i]);
                                  }
                                } catch (e) {
                                  r.e(e);
                                } finally {
                                  r.f();
                                }
                              }
                              return e;
                            })({}, r)),
                            (d = {
                              app: "wzqxcx",
                              appid: "wx4ffb369b6881ee5e",
                              check: 11,
                              openid: m.StockBridge.getStorage("_qluin"),
                              fskey: m.StockBridge.getStorage("_qlskey"),
                            }),
                            (r = o(s, c(d))),
                            (e.next = 5),
                            b.request(
                              "https://wzq.tenpay.com/svr/ads/ad_comm_service/get_xcx_unlimited_qrcode",
                              r,
                              { method: "GET", isShowToast: !1 }
                            )
                          );
                        case 5:
                          return (
                            (f = e.sent),
                            (g = (f || { image_data: "" }).image_data),
                            e.abrupt(
                              "return",
                              ((this.qrWidth = a),
                              "data:image/png;base64,".concat(g))
                            )
                          );
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  i,
                  this
                );
              })
            );
          },
        },
        {
          key: "renderContent",
          value: function (t) {
            return d(
              this,
              null,
              e().mark(function n() {
                var i,
                  a,
                  r,
                  s,
                  o,
                  c,
                  l,
                  u,
                  h,
                  p,
                  d,
                  m,
                  f,
                  g,
                  y,
                  w,
                  x,
                  v,
                  D,
                  b,
                  S,
                  q,
                  L,
                  T,
                  F,
                  E;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((this.initOffscreenCanvas(750, 36), t)) {
                            e.next = 2;
                            break;
                          }
                          throw new Error("参数错误");
                        case 2:
                          for (
                            i = t.id,
                              a = t.source,
                              r = t.publish_time,
                              s = t.summary,
                              o = t.title,
                              c = s.split("\n"),
                              l = [],
                              u = 0,
                              h = 0;
                            h < c.length;
                            h++
                          )
                            (p = c[h].replace(/^\d+\./, "")),
                              (d = this.formatContent(p, 615, 10, 36, 400, !1)),
                              (l[h] = d),
                              (u += d.length);
                          for (
                            m = this.formatContent(o, 628, 10, 32, 500, !1),
                              f =
                                484 +
                                58 * u +
                                24 * (l.length - 1) +
                                48 * m.length,
                              this.initOffscreenCanvas(750, f),
                              g = Date.now(),
                              y = [
                                {
                                  type: "rect",
                                  fill: "#F5F6FA",
                                  round: [16, 16, 16, 16],
                                },
                                {
                                  type: "image",
                                  url: "https://st.gtimg.com/design/1a2c9cff213f12f6fc175f1e1a7d83db.png?t=".concat(
                                    g
                                  ),
                                  width: 750,
                                  height: 745,
                                },
                              ],
                              w = 160,
                              x = 0;
                            x < l.length;
                            x++
                          ) {
                            for (
                              y.push({
                                type: "text",
                                fontSize: 36,
                                color: "#262E40",
                                text: "".concat(x + 1, "."),
                                x: 48,
                                y: w,
                              }),
                                v = l[x],
                                D = 0;
                              D < v.length;
                              D++
                            )
                              y.push({
                                type: "text",
                                fontSize: 36,
                                color: "#262E40",
                                text: v[D],
                                x: 87,
                                y: w,
                              }),
                                (w += 58);
                            w += 24;
                          }
                          for (
                            w += 15,
                              b = 48 * m.length + 38,
                              y.push({
                                type: "rect",
                                fill: "#DCDFE6",
                                width: 6,
                                height: b,
                                x: 48,
                                y: w,
                              }),
                              w += C && _ ? -1 : 3,
                              S = 0;
                            S < m.length;
                            S++
                          )
                            y.push({
                              type: "text",
                              fontSize: 32,
                              fontWeight: 500,
                              color: "#475166",
                              text: m[S],
                              x: 74,
                              y: w,
                            }),
                              (w += 48);
                          return (
                            (w += 12),
                            y.push({
                              type: "text",
                              fontSize: 24,
                              color: "#98A0B3",
                              text: a,
                              x: 74,
                              y: w,
                            }),
                            (q = this.measureText(a, 24, 400)),
                            (L = k.getFormattedTime(r)),
                            y.push({
                              type: "text",
                              fontSize: 24,
                              color: "#98A0B3",
                              text: L,
                              x: 98 + q,
                              y: w,
                            }),
                            (w += 73),
                            y.push({
                              type: "rect",
                              fill: "#DCDFE6",
                              width: 654,
                              height: 1,
                              x: 48,
                              y: w,
                            }),
                            (T = w + 24),
                            (w += 51),
                            (F =
                              "https://st.gtimg.com/design/c91dbc264689fc58c07cef135769fe68.png?t=".concat(
                                g
                              )),
                            y.push({
                              type: "image",
                              url: F,
                              width: 203,
                              height: 40,
                              x: 48,
                              y: w,
                            }),
                            (w += 64),
                            y.push({
                              type: "text",
                              fontSize: 24,
                              color: "#262E40AA",
                              text: "长按识别小程序码，即可阅读原文",
                              x: 48,
                              y: w,
                            }),
                            y.push({
                              type: "rect",
                              fill: "#FFFFFF",
                              width: 148,
                              height: 148,
                              x: 554,
                              y: T,
                              round: [74, 74, 74, 74],
                            }),
                            (e.next = 24),
                            this.fetchQRCodeImage(i)
                          );
                        case 24:
                          return (
                            (E = e.sent),
                            y.push({
                              type: "image",
                              url: E,
                              width: 128,
                              height: 128,
                              x: 564,
                              y: T + 10,
                            }),
                            (e.next = 28),
                            this.draw(y)
                          );
                        case 28:
                          return e.abrupt("return", e.sent);
                        case 29:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
        },
      ]),
      g
    );
  })(D.CanvasImage),
  q = {
    options: { styleIsolation: "shared" },
    components: {
      Disclaimers: function () {
        return "../Disclaimers.js";
      },
      RenderTemplate: function () {
        return "../../../newsTemplate/index.js";
      },
    },
    props: ["newsData", "wzqConfig", "theme", "isAiSummaryExpand"],
    setup: function (e) {
      var t = x.useNewsFeedback(e, "SUMMARY");
      return {
        isLiked: t.isLiked,
        isDisLiked: t.isDisLiked,
        fetchFeedBackStatus: t.fetchFeedBackStatus,
        toggleLike: t.toggleLike,
        toggleDislike: t.toggleDislike,
      };
    },
    data: function () {
      return {
        expand: !1,
        isExpanded: !1,
        summary: [{ desc: " ", type: "text" }],
        showDisclaimer: !1,
        timer: null,
        animating: !1,
        appVersion: "",
        isMP: !0,
      };
    },
    watch: {
      newsData: {
        handler: function (e) {
          var t = e.contentParsed,
            n = 0;
          try {
            t.forEach(function (e) {
              var t = e.content;
              t &&
                t.length > 0 &&
                t.forEach(function (e) {
                  var t = e.text;
                  t && (n += t.length);
                });
            });
          } catch (e) {
            return;
          }
          this.contentLength = n;
        },
        immediate: !0,
      },
    },
    computed: {
      contentText: function () {
        return this.expand
          ? "以下是本文摘要"
          : this.contentLength > 0
          ? this.contentLength > 1e4
            ? "全文".concat(
                (this.contentLength / 1e4).toFixed(1),
                "万字，帮你5秒看全文要点"
              )
            : "全文".concat(this.contentLength, "字，帮你5秒看全文要点")
          : "文章长？ 5 秒带你看全文要点";
      },
      isLite: function () {
        return k.envUtil.isH5Lite();
      },
      showShareSummary: function () {
        return !0;
      },
    },
    created: function () {
      var e,
        t = this,
        n = { newsid: this.newsData.id };
      f.report("news.newsdetail.ai_summary_show", n),
        g.shy.getSystemInfo(function (e) {
          var n = e.appVersion;
          t.appVersion = n;
        }),
        this.isAiSummaryExpand &&
          ((this.isExpanded = !0),
          (this.expand = !0),
          this.updateDataNoAnimation(
            null == (e = this.newsData.nlp_content) ? void 0 : e.summary
          ),
          this.fetchFeedBackStatus());
    },
    destroyed: function () {
      this.stopTimer();
    },
    methods: {
      startPrinting: function (e) {
        var t = this;
        if (e) {
          var n = 0,
            i = 0,
            a = 0,
            r = [""];
          this.stopTimer(),
            (this.animating = !0),
            (this.timer = setInterval(function () {
              var s;
              try {
                var o = e[n],
                  c = o[i][a];
                "<" === c
                  ? ((r[n] += o[i]), (i += 1), (a = 0))
                  : ((r[n] += c),
                    (a += 1) >= o[i].length && ((i += 1), (a = 0))),
                  t.updateData(r),
                  i >= o.length &&
                    ((i = 0),
                    (a = 0),
                    (n += 1) >= e.length
                      ? (t.stopTimer(),
                        m.StockBridge.busEmit("common-ai-summary-finish", {
                          index: 0,
                          searchfrom: "ai_summary",
                        }))
                      : (r[n] = ""));
              } catch (e) {
                t.stopTimer(),
                  t.updateDataNoAnimation(
                    null == (s = t.newsData.nlp_content) ? void 0 : s.summary
                  );
              }
            }, 10));
        }
      },
      stopTimer: function () {
        this.timer && (clearInterval(this.timer), (this.timer = null)),
          (this.animating = !1);
      },
      updateData: function (e) {
        for (var t = [], n = 0; n < e.length; n++)
          t.push({ desc: e[n], type: "text" });
        this.summary = t;
      },
      updateDataNoAnimation: function (e) {
        if (e) {
          var t = e.split("\n");
          this.updateData(t);
        }
      },
      handleOriginalData: function (e) {
        if (!e) return [];
        for (var t = e.split("\n"), n = [], i = 0; i < t.length; i++) {
          var a = w.splitStringWithHTMLTags(t[i]);
          n.push(a);
        }
        return n;
      },
      onClickExpand: function () {
        var e, t;
        if (((this.expand = !this.expand), this.expand))
          if (this.isExpanded)
            this.updateDataNoAnimation(
              null == (t = this.newsData.nlp_content) ? void 0 : t.summary
            );
          else {
            this.summary[0].desc = "";
            var n = this.handleOriginalData(
              null == (e = this.newsData.nlp_content) ? void 0 : e.summary
            );
            this.startPrinting(n);
          }
        var i = { newsid: this.newsData.id };
        f.report("news.newsdetail.ai_summary_expand_click", i),
          (this.isExpanded = !0),
          this.expand && this.fetchFeedBackStatus();
      },
      onClickDeclaration: function () {
        this.showDisclaimer = !this.showDisclaimer;
      },
      onDisclaimerHide: function () {
        this.showDisclaimer = !1;
      },
      showDisclaimersApp: function () {
        var e = {
          url: "qqstock://SHY?info=".concat(
            encodeURIComponent(
              JSON.stringify({
                p_key: "com.tencent.shy.disclaimers",
                p_url: "index?id=0",
              })
            )
          ),
          height: 230,
          cornerRadius: 8,
        };
        g.shy.navigateTo({
          url: "qqstock://SDModal?info=".concat(
            encodeURIComponent(JSON.stringify(e))
          ),
        });
      },
      onClickLike: function () {
        this.toggleLike();
        var e = { newsid: this.newsData.id };
        f.report("news.newsdetail.ai_summary_like_click", e);
      },
      onClickDisLike: function () {
        this.toggleDislike();
        var e = { newsid: this.newsData.id };
        f.report("news.newsdetail.ai_summary_dislike_click", e);
      },
      onClickCopy: function () {
        var e, t, n;
        f.report("news.detail.ai_summary_copy_click", {
          newsid: this.newsData.id,
        });
        var i =
          null == (t = null == (e = this.newsData) ? void 0 : e.nlp_content)
            ? void 0
            : t.summary;
        if (i) {
          var a = null == (n = this.newsData) ? void 0 : n.title,
            r = ""
              .concat(null != a ? a : "")
              .concat(a ? "\n\n" : "")
              .concat(v.replaceHTML(i));
          k.envUtil.copyToPasteboard(r, "复制成功", m.StockBridge);
        }
      },
      checkAppLogin: function () {
        return new Promise(function (e) {
          g.shy.getUserInfo(function (t) {
            e(t && "none" !== t.type);
          });
        });
      },
      onClickShare: function () {
        return d(
          this,
          null,
          e().mark(function t() {
            var n,
              i,
              a,
              r,
              s,
              o,
              c,
              l,
              u,
              h = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      f.report("news.detail.ai_summary_share_click", {
                        newsid: this.newsData.id,
                      }),
                        y.sdk.loadingBar("show"),
                        this.aiSummaryShareUtils ||
                          (this.aiSummaryShareUtils = new S()),
                        (i = this.newsData),
                        (a = i.source),
                        (r = i.publish_time),
                        (s = i.nlp_content),
                        (o = i.title),
                        (c = i.id),
                        (l =
                          null == (n = null == s ? void 0 : s.summary)
                            ? void 0
                            : n.replace(/<[^>]*>/g, "")),
                        (u = {
                          id: c,
                          source: a,
                          publish_time: r,
                          summary: l,
                          title: "「原文」".concat(o),
                        }),
                        this.aiSummaryShareUtils
                          .renderContent(u)
                          .then(function (e) {
                            y.sdk.loadingBar("hide");
                            var t = e.tempFilePath,
                              n = encodeURIComponent("".concat(c, ",1"));
                            m.wx$1.showShareImageMenu({
                              path: t,
                              entrancePath:
                                "pages/newsCon/newsDetail/main?scene="
                                  .concat(n, "&id=")
                                  .concat(c),
                            });
                          })
                          .catch(function (e) {
                            y.sdk.loadingBar("hide"),
                              h.$nextTick(function () {
                                y.sdk.showToast({
                                  title: "分享失败，请重试",
                                  instance: h,
                                  icon: "none",
                                });
                              });
                          });
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
  };
Array ||
  (m.resolveComponent("RenderTemplate") + m.resolveComponent("Disclaimers"))();
var L = m._export_sfc(q, [
  [
    "render",
    function (e, t, n, i, a, r) {
      return m.e(
        {
          a:
            "https://st.gtimg.com/design/" +
            ("black" === n.theme
              ? "283cc8c2b0a626a91da2599691354d0a.gif"
              : "e3dc1a4bf90b13d9b50c1b15468f73ac.gif"),
          b: m.t(r.contentText),
          c: m.n(a.expand ? "" : "heavy-gray"),
          d: m.t(a.expand ? "收起" : "看AI摘要"),
          e: m.o(function () {
            return r.onClickExpand && r.onClickExpand.apply(r, arguments);
          }, 4375),
          f: a.expand,
        },
        (a.expand, {}),
        { g: a.expand },
        a.expand
          ? {
              h: m.sr("renderTemplate", "fd442fc2-0"),
              i: m.p({
                newsId: n.newsData.id,
                snpContent: a.summary,
                wzqConfig: n.wzqConfig,
                theme: n.theme,
                publishTime: n.newsData.publish_time,
                speechable: !1,
              }),
            }
          : {},
        { j: a.expand && !a.animating },
        a.expand && !a.animating
          ? m.e(
              {
                k: m.o(function () {
                  return (
                    r.onClickDeclaration &&
                    r.onClickDeclaration.apply(r, arguments)
                  );
                }, 4376),
                l: m.n(i.isLiked ? "likeed" : ""),
                m: m.o(function () {
                  return r.onClickLike && r.onClickLike.apply(r, arguments);
                }, 4377),
                n: m.n(i.isDisLiked ? "likeed" : ""),
                o: m.o(function () {
                  return (
                    r.onClickDisLike && r.onClickDisLike.apply(r, arguments)
                  );
                }, 4378),
                p: m.o(function () {
                  return r.onClickCopy && r.onClickCopy.apply(r, arguments);
                }, 4379),
                q: r.showShareSummary,
              },
              r.showShareSummary
                ? {
                    r: m.o(function () {
                      return (
                        r.onClickShare && r.onClickShare.apply(r, arguments)
                      );
                    }, 4380),
                  }
                : {}
            )
          : {},
        { s: a.showDisclaimer },
        a.showDisclaimer
          ? {
              t: m.o(r.onDisclaimerHide, 4381),
              v: m.p({
                canShow: a.showDisclaimer,
                tips: "AI摘要内容总结仅供参考，不代表腾讯微证券观点，无法保证绝对的准确性或完整性。如有投资者据此操作，风险自担，腾讯微证券对此不承担任何责任。",
              }),
            }
          : {},
        { w: m.n(r.isLite ? "lite" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-fd442fc2"],
]);
wx.createComponent(L);
