var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, n, i) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[n] = i);
  },
  l = function (e, t) {
    for (var i in t || (t = {})) o.call(t, i) && c(e, i, t[i]);
    if (r) {
      var a,
        l = n(r(t));
      try {
        for (l.s(); !(a = l.n()).done; ) {
          i = a.value;
          s.call(t, i) && c(e, i, t[i]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  u = function (e, n, t) {
    return new Promise(function (i, a) {
      var r = function (e) {
          try {
            s(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            s(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, o);
        };
      s((t = t.apply(e, n)).next());
    });
  },
  m = require("../../../../../../common/vendor.js"),
  p = require("../../../stock-news-core/utils/shy/index.js"),
  d = require("../../../stock-news-core/utils/tools.js"),
  h = require("../../../stock-news-sdk/index.js"),
  v = require("../../../stock-news-core/utils/share.js"),
  f = require("../../../stock-news-core/utils/request/index.js"),
  y = require("../../../stock-share-snapshot/components/ShareAIReadingImage.js"),
  w = "news-ai-reading-feedback-change",
  k =
    "AI解读内容总结仅供参考，不代表腾讯微证券观点，无法保证绝对的准确性或完整性。如有投资者据此操作，风险自担，腾讯微证券对此不承担任何责任。",
  g = m.defineComponent({
    name: "AIReadingDetailCard",
    options: { styleIsolation: "shared" },
    props: {
      content: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (n, t) {
      var r,
        o,
        s = this,
        c = t.emit,
        g = m.getCurrentInstance().proxy || m.getCurrentInstance(),
        S = null,
        _ = m.computed(function () {
          return !(!n.content || !n.content.summary);
        }),
        b = m.computed(function () {
          return !(!n.content || !n.content.event_impact);
        }),
        I = m.computed(function () {
          var e;
          return y.parseTitleAndAllItems(
            (null == (e = n.content) ? void 0 : e.summary) || ""
          );
        }),
        x = m.computed(function () {
          var e;
          return y.parseTitleAndAllItems(
            (null == (e = n.content) ? void 0 : e.event_impact) || ""
          );
        }),
        C = m.computed(function () {
          return !0;
        }),
        D = m.ref(
          null != (o = null == (r = n.content) ? void 0 : r.feedBackStatus)
            ? o
            : -1
        ),
        T = m.computed(function () {
          return 1 === D.value;
        }),
        P = m.computed(function () {
          return 0 === D.value;
        }),
        q = function () {
          var e,
            t,
            r,
            o,
            s = {
              newsId: null == (e = n.content) ? void 0 : e.news_id,
              feedBackStatus: D.value,
            };
          "mpweapp" === m.ShellTypeEnum.SHY
            ? null == (r = null == (t = p.shy) ? void 0 : t.notify) ||
              r.call(t, w, ((o = l({}, s)), i(o, a({ module: !1 }))))
            : m.StockBridge.busEmit(w, s);
        },
        j = function (e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          D.value = e;
          try {
            L(e, n);
          } catch (e) {}
        },
        L = function (e) {
          var t,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            a = l(
              {
                action: 2,
                news_id: null == (t = n.content) ? void 0 : t.news_id,
                score: e,
                detail: i,
              },
              d.md5WithTimestampWithPlatform()
            );
          return f.request(
            "https://snp.tenpay.com/cgi/cgi-bin/snp/feedback/newsFeedback",
            a,
            { method: "post", isShowToast: !1 }
          );
        };
      return (
        m.onMounted(function () {
          var t, i, a;
          (null == (t = n.content) ? void 0 : t.news_id) &&
            ((void 0 !==
              (null == (i = n.content) ? void 0 : i.feedBackStatus) &&
              null !== (null == (a = n.content) ? void 0 : a.feedBackStatus)) ||
              u(
                s,
                null,
                e().mark(function t() {
                  var i, a;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (function () {
                                var e,
                                  t = d.md5WithTimestampWithPlatform(),
                                  i =
                                    "https://snp.tenpay.com/cgi/cgi-bin/snp/feedback/queryNewsRecord?news_id=".concat(
                                      null == (e = n.content)
                                        ? void 0
                                        : e.news_id
                                    );
                                return f.request(i, t, {
                                  method: "get",
                                  isShowToast: !1,
                                });
                              })()
                            );
                          case 3:
                            (a = e.sent),
                              (D.value =
                                null == (i = null == a ? void 0 : a.newsData)
                                  ? void 0
                                  : i.analysis_score),
                              (e.next = 9);
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(0));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  );
                })
              ));
        }),
        {
          hasSummary: _,
          hasEventImpact: b,
          summaryDisplay: I,
          eventDisplay: x,
          segmentsToPlainText: function (e) {
            return (e || [])
              .map(function (e) {
                return e.text;
              })
              .join("");
          },
          isLiked: T,
          isDisLiked: P,
          showShareSummary: C,
          onClickDeclaration: function () {
            "mpweapp" === m.ShellTypeEnum.SHY
              ? p.shy.invoke("showAlert", {
                  title: "免责声明",
                  message: k,
                  leftText: "我知道了",
                })
              : c("show-disclaimer", k);
          },
          onClickLike: function () {
            var e;
            1 === D.value ? (D.value = -1) : (D.value = 1),
              j(D.value, ""),
              q(),
              m.StockBridge.report("news.newsdetail.ai_reading_like_click", {
                newsid: null == (e = n.content) ? void 0 : e.news_id,
              });
          },
          onClickDisLike: function () {
            var e;
            0 === D.value ? (D.value = -1) : (D.value = 0),
              j(D.value, ""),
              q(),
              m.StockBridge.report("news.newsdetail.ai_reading_dislike_click", {
                newsid: null == (e = n.content) ? void 0 : e.news_id,
              });
          },
          onClickCopy: function () {
            var e, t, i, a;
            m.StockBridge.report("news.newsdetail.ai_reading_copy_click", {
              newsid: null == (e = n.content) ? void 0 : e.news_id,
            });
            var r = (null == (t = n.content) ? void 0 : t.summary) || "",
              o = (null == (i = n.content) ? void 0 : i.event_impact) || "";
            if (r || o) {
              var s = null == (a = n.newsData) ? void 0 : a.title,
                c = ""
                  .concat(null != s ? s : "")
                  .concat(s ? "\n\n" : "")
                  .concat(v.stripMarkdown(v.replaceHTML(r)))
                  .concat(r && o ? "\n\n" : "")
                  .concat(v.stripMarkdown(v.replaceHTML(o)));
              d.envUtil.copyToPasteboard(c, "复制成功", m.StockBridge);
            }
          },
          onClickShare: function t() {
            return u(
              s,
              null,
              e().mark(function i() {
                var a, r, o, s, c, l, u, d, v;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (m.StockBridge.report(
                            "news.newsdetail.ai_reading_share_click",
                            {
                              newsid:
                                null == (a = n.content) ? void 0 : a.news_id,
                            }
                          ),
                          "mpweapp" !== m.ShellTypeEnum.SHY)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (
                          (e.next = 3),
                          new Promise(function (e) {
                            p.shy.getUserInfo(function (n) {
                              e(n && "none" !== n.type);
                            });
                          })
                        );
                      case 3:
                        if (e.sent) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          void p.shy.login(function (e) {
                            "success" === e.status && t();
                          })
                        );
                      case 5:
                        h.sdk.loadingBar("show"),
                          S || (S = new y.ShareAIReadingImage()),
                          (r = n.content || {}),
                          (o = r.source),
                          (s = r.publishTime),
                          (c = r.summary),
                          (l = r.event_impact),
                          (u = r.title),
                          (d = r.news_id),
                          (v = {
                            id: d,
                            source: o || "",
                            publish_time: s || Date.now(),
                            summary: c || "",
                            event_impact: l || "",
                            title: "「原文」".concat(u || "AI解读"),
                          }),
                          S.renderContent(v)
                            .then(function (e) {
                              if (
                                (h.sdk.loadingBar("hide"),
                                "mpweapp" === m.ShellTypeEnum.SHY)
                              ) {
                                var n = {
                                  to: ["wx", "pyq", "qq", "qzone"],
                                  type: "image",
                                  params: {
                                    image: e,
                                    isImageNeedPreview: !0,
                                    type: "image",
                                  },
                                  callback: function () {},
                                };
                                p.shy.openShareView(n);
                              } else {
                                var t = e.tempFilePath,
                                  i = encodeURIComponent("".concat(d, ",1"));
                                m.wx$1.showShareImageMenu({
                                  path: t,
                                  entrancePath:
                                    "pages/newsCon/newsDetail/main?scene="
                                      .concat(i, "&id=")
                                      .concat(d),
                                });
                              }
                            })
                            .catch(function (e) {
                              h.sdk.loadingBar("hide"),
                                h.sdk.showToast({
                                  title: "分享失败，请重试",
                                  instance: g,
                                  icon: "none",
                                });
                            });
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, i);
              })
            );
          },
        }
      );
    },
  }),
  S = m._export_sfc(g, [
    [
      "render",
      function (e, n, t, i, a, r) {
        return m.e(
          { a: e.hasSummary || e.hasEventImpact },
          e.hasSummary || e.hasEventImpact
            ? m.e(
                { b: e.hasSummary },
                e.hasSummary
                  ? m.e(
                      { c: e.summaryDisplay.titleSegs.length },
                      e.summaryDisplay.titleSegs.length
                        ? {
                            d: m.t(
                              e.segmentsToPlainText(e.summaryDisplay.titleSegs)
                            ),
                          }
                        : {},
                      {
                        e: m.f(
                          e.summaryDisplay.itemSegsList,
                          function (n, t, i) {
                            return {
                              a: m.t(t + 1),
                              b: m.t(e.segmentsToPlainText(n)),
                              c: "s-item-".concat(t),
                              d: m.n(
                                0 === t &&
                                  !e.summaryDisplay.titleSegs.length &&
                                  "ai-summary-text__item--section-first"
                              ),
                            };
                          }
                        ),
                      }
                    )
                  : {},
                { f: e.hasSummary && e.hasEventImpact },
                (e.hasSummary && e.hasEventImpact, {}),
                { g: e.hasEventImpact },
                e.hasEventImpact
                  ? m.e(
                      { h: e.eventDisplay.titleSegs.length },
                      e.eventDisplay.titleSegs.length
                        ? {
                            i: m.t(
                              e.segmentsToPlainText(e.eventDisplay.titleSegs)
                            ),
                          }
                        : {},
                      {
                        j: m.f(e.eventDisplay.itemSegsList, function (n, t, i) {
                          return {
                            a: m.t(t + 1),
                            b: m.t(e.segmentsToPlainText(n)),
                            c: "e-item-".concat(t),
                            d: m.n(
                              0 === t &&
                                !e.eventDisplay.titleSegs.length &&
                                "ai-summary-text__item--section-first"
                            ),
                          };
                        }),
                      }
                    )
                  : {},
                {
                  k: m.o(function () {
                    return (
                      e.onClickDeclaration &&
                      e.onClickDeclaration.apply(e, arguments)
                    );
                  }, 5051),
                  l: m.n(e.isLiked ? "likeed" : ""),
                  m: m.o(function () {
                    return e.onClickLike && e.onClickLike.apply(e, arguments);
                  }, 5052),
                  n: m.n(e.isDisLiked ? "likeed" : ""),
                  o: m.o(function () {
                    return (
                      e.onClickDisLike && e.onClickDisLike.apply(e, arguments)
                    );
                  }, 5053),
                  p: m.o(function () {
                    return e.onClickCopy && e.onClickCopy.apply(e, arguments);
                  }, 5054),
                  q: e.showShareSummary,
                },
                e.showShareSummary
                  ? {
                      r: m.o(function () {
                        return (
                          e.onClickShare && e.onClickShare.apply(e, arguments)
                        );
                      }, 5055),
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6ed22020"],
  ]);
wx.createComponent(S);
