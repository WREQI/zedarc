var e = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, t) {
    return new Promise(function (a, i) {
      var o = function (e) {
          try {
            s(t.next(e));
          } catch (e) {
            i(e);
          }
        },
        r = function (e) {
          try {
            s(t.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(o, r);
        };
      s((t = t.apply(e, n)).next());
    });
  },
  t = require("../../../../../../../../common/vendor.js"),
  a = require("../../../../../stock-news-core/utils/tools.js"),
  i = require("../../../../../stock-news-core/utils/shy/index.js"),
  o = require("../../../../../stock-news-sdk/index.js"),
  r = require("../../../../../stock-news-core/utils/share.js"),
  s = require("../../../../../stock-share-snapshot/components/ShareAIReadingImage.js"),
  l = require("../../../../hooks/useNewsFeedback.js"),
  u = require("../../../../../stock-news-core/utils/appHelper.js"),
  c = "news-ai-reading-feedback-change",
  d = function (e) {
    return t.md5Module(e).toUpperCase();
  },
  p = t.defineComponent({
    name: "AIReading",
    options: { styleIsolation: "shared" },
    props: {
      newsData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      theme: { type: String, default: "" },
      isAiSummaryExpand: { type: Boolean, default: !1 },
    },
    setup: function (p) {
      var m = this,
        v = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        f = t.ref(!1),
        g = t.ref(null),
        h = t.ref(0),
        w = l.useNewsFeedback(p, "AI_READING"),
        k = w.feedBackStatus,
        y = w.isLiked,
        S = w.isDisLiked,
        b = w.fetchFeedBackStatus,
        x = w.toggleLike,
        _ = w.toggleDislike,
        I = w.setFeedBackStatus,
        C = t.ref([]),
        E = t.ref([]),
        D = t.ref([]),
        T = t.ref([]),
        B = t.ref(!1),
        A = t.ref(!1),
        L = t.ref(!1),
        j = null,
        R = t.computed(function () {
          var e;
          return !!(null == (e = g.value) ? void 0 : e.summary);
        }),
        q = t.computed(function () {
          var e;
          return !!(null == (e = g.value) ? void 0 : e.event_impact);
        }),
        F = function (e, n) {
          e.value = n.map(function (e) {
            return { text: e.text, bold: e.bold };
          });
        },
        M = function () {
          var e,
            n,
            t = s.parseTitleAndFirstItem(
              null == (e = g.value) ? void 0 : e.summary
            ),
            a = s.parseTitleAndFirstItem(
              null == (n = g.value) ? void 0 : n.event_impact
            );
          F(C, t.titleSegs),
            F(E, t.itemSegs),
            F(D, a.titleSegs),
            F(T, a.itemSegs),
            (B.value = !(!a.titleSegs.length && !a.itemSegs.length)),
            (L.value = !1);
        },
        P = function () {
          j && (clearInterval(j), (j = null)), (L.value = !1);
        },
        O = t.computed(function () {
          return f.value
            ? "AI解读"
            : h.value > 0
            ? h.value > 1e4
              ? "全文".concat(
                  (h.value / 1e4).toFixed(1),
                  "万字，帮你5秒看全文要点"
                )
              : "全文".concat(h.value, "字，帮你5秒看全文要点")
            : "帮你 5 秒看懂全文要点";
        }),
        H = t.computed(function () {
          return a.envUtil.isH5Lite();
        }),
        N = t.computed(function () {
          return !0;
        }),
        U = null,
        V = function (a) {
          return n(
            m,
            null,
            e().mark(function n() {
              var i, o, r, l, c, m;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (a) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (o = (function (e) {
                            return {
                              scene: "news_basepage_analysis",
                              biz_ids: [String(e)],
                              sub_scenes: ["old"],
                            };
                          })(a)),
                          (r = (function (e) {
                            var n = u.getAppValue(),
                              t = Math.floor(Date.now() / 1e3),
                              a = d(e),
                              i = d("".concat(n, "POST"));
                            return "https://snp.tenpay.com/cgi-bin/snp/richtext/query_ai_content?".concat(
                              [
                                "x-appid=".concat(n),
                                "x-sa-v=4",
                                "x-timestamp=".concat(t),
                                "x-sa-sign=".concat(
                                  d("".concat(t).concat(a).concat(i))
                                ),
                              ].join("&")
                            );
                          })(JSON.stringify(o))),
                          (e.prev = 3),
                          (e.next = 6),
                          t.StockBridge.request(r, "POST", o, {
                            dataType: "json",
                            isShowToast: !1,
                            withoutCommonParams: !0,
                            headers: { "Content-Type": "application/json" },
                            header: { "Content-Type": "application/json" },
                          })
                        );
                      case 6:
                        (l = e.sent),
                          0 ==
                            +(null == (c = (null == l ? void 0 : l.data) || l)
                              ? void 0
                              : c.code) &&
                            Array.isArray(null == c ? void 0 : c.ai_contents) &&
                            c.ai_contents.length > 0 &&
                            ((null ==
                            (m = s.parseAiContentField(
                              null == (i = c.ai_contents[0])
                                ? void 0
                                : i.ai_content
                            ))
                              ? void 0
                              : m.summary) ||
                              (null == m ? void 0 : m.event_impact)) &&
                            ((g.value = m),
                            (function () {
                              var e;
                              p.isAiSummaryExpand &&
                                (null == (e = g.value) ? void 0 : e.summary) &&
                                ((f.value = !0), (A.value = !0), M(), b());
                            })()),
                          (e.next = 13);
                        break;
                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(3));
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                null,
                [[3, 11]]
              );
            })
          );
        };
      t.watch(
        function () {
          var e;
          return null == (e = p.newsData) ? void 0 : e.id;
        },
        function (e) {
          e && V(e);
        },
        { immediate: !0 }
      ),
        t.watch(
          function () {
            return p.newsData;
          },
          function (e) {
            if (e) {
              var n = e.contentParsed,
                t = 0;
              try {
                null == n ||
                  n.forEach(function (e) {
                    var n = e.content;
                    n &&
                      n.length > 0 &&
                      n.forEach(function (e) {
                        var n = e.text;
                        n && (t += n.length);
                      });
                  });
              } catch (e) {
                return;
              }
              h.value = t;
            }
          },
          { immediate: !0, deep: !0 }
        );
      var z = function () {
        var e,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (null == n ? void 0 : n.data) || n,
          a = t || {},
          i = a.newsId,
          o = a.feedBackStatus;
        i &&
          i === (null == (e = p.newsData) ? void 0 : e.id) &&
          null != o &&
          I(o);
      };
      return (
        t.onMounted(function () {
          var e, n;
          "mpweapp" === t.ShellTypeEnum.SHY
            ? null ==
                (n = null == (e = i.shy) ? void 0 : e.subscribeNotification) ||
              n.call(e, c, "", z, !1)
            : t.StockBridge.busOn(c, z);
        }),
        t.onBeforeUnmount(function () {
          P(), "mpweapp" !== t.ShellTypeEnum.SHY && t.StockBridge.busOff(c, z);
        }),
        {
          expand: f,
          hasSummary: R,
          hasEventImpact: q,
          displaySummaryTitle: C,
          displaySummaryItem: E,
          displayEventTitle: D,
          displayEventItem: T,
          showEventImpactSection: B,
          animating: L,
          contentText: O,
          isLite: H,
          onClickExpand: function () {
            var e, n, a;
            if (((f.value = !f.value), f.value)) {
              if (A.value) M();
              else {
                (C.value = []), (E.value = []), (D.value = []), (T.value = []);
                var i = s.parseTitleAndFirstItem(
                    null == (e = g.value) ? void 0 : e.summary
                  ),
                  o = s.parseTitleAndFirstItem(
                    null == (n = g.value) ? void 0 : n.event_impact
                  ),
                  r = [];
                (i.titleSegs.length || i.itemSegs.length) &&
                  r.push({
                    showEvent: !1,
                    subs: [
                      { targetRef: C, segs: i.titleSegs },
                      { targetRef: E, segs: i.itemSegs },
                    ],
                  }),
                  (o.titleSegs.length || o.itemSegs.length) &&
                    r.push({
                      showEvent: !0,
                      subs: [
                        { targetRef: D, segs: o.titleSegs },
                        { targetRef: T, segs: o.itemSegs },
                      ],
                    }),
                  (function (e) {
                    if (e && e.length) {
                      e.forEach(function (e) {
                        e.subs.forEach(function (e) {
                          e.targetRef.value = e.segs.map(function (e) {
                            return { text: "", bold: e.bold };
                          });
                        });
                      });
                      var n = 0,
                        a = 0,
                        i = 0,
                        o = 0,
                        r = 0,
                        s = e.map(function (e) {
                          return e.subs.map(function (e) {
                            return e.segs.map(function () {
                              return "";
                            });
                          });
                        });
                      P(), (L.value = !0), (B.value = !1);
                      var l = function () {
                        var t = e[n].subs[a],
                          i = s[n][a];
                        t.targetRef.value = t.segs.map(function (e, n) {
                          return { text: i[n], bold: e.bold };
                        });
                      };
                      j = setInterval(function () {
                        try {
                          if (n >= e.length)
                            return (
                              P(),
                              void t.StockBridge.busEmit(
                                "common-ai-summary-finish",
                                { index: 0, searchfrom: "ai_reading" }
                              )
                            );
                          var u = e[n],
                            c = u.subs[a];
                          if (!c.segs.length)
                            return (
                              l(),
                              (i = 0),
                              (o = 0),
                              void (
                                (a += 1) >= u.subs.length &&
                                ((a = 0),
                                (n += 1),
                                n < e.length &&
                                  e[n].showEvent &&
                                  (B.value = !0))
                              )
                            );
                          var d = c.segs[i],
                            p = d.text[o];
                          (s[n][a][i] += p),
                            (o += 1) >= d.text.length && ((i += 1), (o = 0)),
                            (function () {
                              var t =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0] &&
                                  arguments[0],
                                i = Date.now();
                              if (t || !(i - r < 32)) {
                                var o = e[n].subs[a],
                                  l = s[n][a];
                                (o.targetRef.value = o.segs.map(function (
                                  e,
                                  n
                                ) {
                                  return { text: l[n], bold: e.bold };
                                })),
                                  (r = i);
                              }
                            })(),
                            i >= c.segs.length &&
                              (l(),
                              (r = Date.now()),
                              (i = 0),
                              (o = 0),
                              (a += 1) >= u.subs.length &&
                                ((a = 0),
                                (n += 1) < e.length &&
                                  e[n].showEvent &&
                                  (B.value = !0)));
                        } catch (e) {
                          P(), M();
                        }
                      }, 10);
                    }
                  })(r);
              }
              (A.value = !0), b();
            } else P();
            t.StockBridge.report("news.newsdetail.ai_reading_expand_click", {
              newsid: null == (a = p.newsData) ? void 0 : a.id,
            });
          },
          isLiked: y,
          isDisLiked: S,
          showShareSummary: N,
          onClickViewMore: function () {
            var e, n, a;
            t.StockBridge.report("news.newsdetail.ai_reading_view_more_click", {
              newsid: null == (e = p.newsData) ? void 0 : e.id,
            });
            var i = p.newsData || {},
              o = i.title,
              r = i.id,
              s = i.source,
              l = i.publishTime;
            t.StockBridge.busEmit("showAiDialog", {
              contentId: r,
              aiQuestionObj: {},
              sseServeType: "newsAIReading",
              aiReadingContent: {
                summary: (null == (n = g.value) ? void 0 : n.summary) || "",
                event_impact:
                  (null == (a = g.value) ? void 0 : a.event_impact) || "",
                news_id: r,
                title: o || "",
                source: s || "",
                publishTime: l || Date.now(),
                feedBackStatus: k.value,
              },
            });
          },
          onClickLike: function () {
            var e;
            x(),
              t.StockBridge.report("news.newsdetail.ai_reading_like_click", {
                newsid: null == (e = p.newsData) ? void 0 : e.id,
              });
          },
          onClickDisLike: function () {
            var e;
            _(),
              t.StockBridge.report("news.newsdetail.ai_reading_dislike_click", {
                newsid: null == (e = p.newsData) ? void 0 : e.id,
              });
          },
          onClickCopy: function () {
            var e, n, i, o;
            t.StockBridge.report("news.newsdetail.ai_reading_copy_click", {
              newsid: null == (e = p.newsData) ? void 0 : e.id,
            });
            var s = (null == (n = g.value) ? void 0 : n.summary) || "",
              l = (null == (i = g.value) ? void 0 : i.event_impact) || "";
            if (s || l) {
              var u = null == (o = p.newsData) ? void 0 : o.title,
                c = ""
                  .concat(null != u ? u : "")
                  .concat(u ? "\n\n" : "")
                  .concat(r.stripMarkdown(r.replaceHTML(s)))
                  .concat(s && l ? "\n\n" : "")
                  .concat(r.stripMarkdown(r.replaceHTML(l)));
              a.envUtil.copyToPasteboard(c, "复制成功", t.StockBridge);
            }
          },
          onClickShare: function () {
            return n(
              m,
              null,
              e().mark(function n() {
                var a, i, r, l, u, c, d, m, f, h, w;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.StockBridge.report(
                          "news.newsdetail.ai_reading_share_click",
                          { newsid: null == (a = p.newsData) ? void 0 : a.id }
                        ),
                          o.sdk.loadingBar("show"),
                          U || (U = new s.ShareAIReadingImage()),
                          (l = p.newsData || {}),
                          (u = l.source),
                          (c = l.publish_time),
                          (d = l.title),
                          (m = l.id),
                          (f =
                            (null == (i = g.value) ? void 0 : i.summary) || ""),
                          (h =
                            (null == (r = g.value) ? void 0 : r.event_impact) ||
                            ""),
                          (w = {
                            id: m,
                            source: u,
                            publish_time: c,
                            summary: f,
                            event_impact: h,
                            title: "「原文」".concat(null != d ? d : ""),
                          }),
                          U.renderContent(w)
                            .then(function (e) {
                              o.sdk.loadingBar("hide");
                              var n = e.tempFilePath,
                                a = encodeURIComponent("".concat(m, ",2"));
                              t.wx$1.showShareImageMenu({
                                path: n,
                                entrancePath:
                                  "pages/newsCon/newsDetail/main?scene="
                                    .concat(a, "&id=")
                                    .concat(m),
                              });
                            })
                            .catch(function (e) {
                              o.sdk.loadingBar("hide"),
                                o.sdk.showToast({
                                  title: "分享失败，请重试",
                                  instance: v,
                                  icon: "none",
                                });
                            });
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            );
          },
        }
      );
    },
  }),
  m = t._export_sfc(p, [
    [
      "render",
      function (e, n, a, i, o, r) {
        return t.e(
          { a: e.hasSummary },
          e.hasSummary
            ? t.e(
                {
                  b:
                    "https://st.gtimg.com/design/" +
                    ("black" === e.theme
                      ? "283cc8c2b0a626a91da2599691354d0a.gif"
                      : "e3dc1a4bf90b13d9b50c1b15468f73ac.gif"),
                  c: t.t(e.contentText),
                  d: t.t(e.expand ? "收起" : "看AI解读"),
                  e: t.o(function () {
                    return (
                      e.onClickExpand && e.onClickExpand.apply(e, arguments)
                    );
                  }, 4383),
                  f: e.expand,
                },
                (e.expand, {}),
                { g: e.expand },
                e.expand
                  ? t.e(
                      { h: e.hasSummary },
                      e.hasSummary
                        ? t.e(
                            {
                              i: t.f(e.displaySummaryTitle, function (e, n, a) {
                                return {
                                  a: t.t(e.text),
                                  b: "s-title-".concat(n),
                                  c: t.n(e.bold ? "ai-seg--bold" : ""),
                                };
                              }),
                              j: e.displaySummaryItem.length,
                            },
                            e.displaySummaryItem.length
                              ? {
                                  k: t.f(
                                    e.displaySummaryItem,
                                    function (e, n, a) {
                                      return {
                                        a: t.t(e.text),
                                        b: "s-item-".concat(n),
                                        c: t.n(e.bold ? "ai-seg--bold" : ""),
                                      };
                                    }
                                  ),
                                }
                              : {}
                          )
                        : {},
                      { l: e.showEventImpactSection && e.hasEventImpact },
                      e.showEventImpactSection && e.hasEventImpact
                        ? t.e(
                            {
                              m: t.f(e.displayEventTitle, function (e, n, a) {
                                return {
                                  a: t.t(e.text),
                                  b: "e-title-".concat(n),
                                  c: t.n(e.bold ? "ai-seg--bold" : ""),
                                };
                              }),
                              n: e.displayEventItem.length,
                            },
                            e.displayEventItem.length
                              ? {
                                  o: t.f(
                                    e.displayEventItem,
                                    function (e, n, a) {
                                      return {
                                        a: t.t(e.text),
                                        b: "e-item-".concat(n),
                                        c: t.n(e.bold ? "ai-seg--bold" : ""),
                                      };
                                    }
                                  ),
                                }
                              : {}
                          )
                        : {}
                    )
                  : {},
                { p: e.expand && !e.animating },
                (e.expand && e.animating, {}),
                { q: e.expand && !e.animating },
                e.expand && !e.animating
                  ? t.e(
                      {
                        r: t.o(function () {
                          return (
                            e.onClickViewMore &&
                            e.onClickViewMore.apply(e, arguments)
                          );
                        }, 4384),
                        s: t.n(e.isLiked ? "likeed" : ""),
                        t: t.o(function () {
                          return (
                            e.onClickLike && e.onClickLike.apply(e, arguments)
                          );
                        }, 4385),
                        v: t.n(e.isDisLiked ? "likeed" : ""),
                        w: t.o(function () {
                          return (
                            e.onClickDisLike &&
                            e.onClickDisLike.apply(e, arguments)
                          );
                        }, 4386),
                        x: t.o(function () {
                          return (
                            e.onClickCopy && e.onClickCopy.apply(e, arguments)
                          );
                        }, 4387),
                        y: e.showShareSummary,
                      },
                      e.showShareSummary
                        ? {
                            z: t.o(function () {
                              return (
                                e.onClickShare &&
                                e.onClickShare.apply(e, arguments)
                              );
                            }, 4388),
                          }
                        : {}
                    )
                  : {},
                { A: t.n(e.isLite ? "lite" : "") }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-3478a9ec"],
  ]);
wx.createComponent(m);
