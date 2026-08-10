var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var n = require("../../../../../../common/vendor.js"),
  r = require("../../../stock-base/visibilityObserver/index.js"),
  t = require("../../morning-report-card.js"),
  o = null,
  i = !1,
  a = null,
  c = !1,
  l = {
    name: "MorningReportTzrl",
    components: {
      cardHeader: function () {
        return "../card-header.js";
      },
      ShareButtonWrapper: function () {
        return "../component/ShareButtonWrapper.js";
      },
      ImageLinkItem: function () {
        return "../component/ImageLinkItem.js";
      },
    },
    props: {
      newsData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      newsId: { type: String, default: "" },
    },
    setup: function (l, u) {
      var s = this,
        d = u.emit,
        p = n.getCurrentInstance().proxy || n.getCurrentInstance(),
        f = n.ref({}),
        m = n.ref(""),
        v = n.ref(""),
        g = n.ref(""),
        w = n.ref(""),
        b = n.ref(""),
        h = n.ref(""),
        z = n.ref(!1);
      return (
        n.watch(
          function () {
            return l.newsData;
          },
          function (e) {
            !(function (e) {
              if (e) {
                var n = e.briefContent,
                  r = n.find(function (e) {
                    return "投资日历" === e.groupName;
                  });
                if (r)
                  try {
                    (f.value = r.secondaryDir[0].contentArr[0]),
                      (v.value = t.itemContent(f.value)),
                      (m.value = t.getContentId(f.value));
                  } catch (e) {}
                var o = n.find(function (e) {
                  return ["投资锦囊"].includes(e.groupName);
                });
                if (o)
                  try {
                    var i = o.secondaryDir[0].contentArr[0],
                      a = t.itemContent(i),
                      c = a.indexOf("：");
                    if (
                      (c > 0 && c < 8
                        ? ((g.value = a.substr(0, c)),
                          (w.value = a.substr(c + 1)))
                        : (w.value = a),
                      o.secondaryDir[0].contentArr.length > 1 &&
                        (b.value = t.itemContent(
                          o.secondaryDir[0].contentArr[1]
                        )),
                      o.secondaryDir[0].contentArr.length > 2)
                    ) {
                      var l = o.secondaryDir[0].contentArr[2];
                      h.value = l && "image" === l.type ? l : null;
                    }
                  } catch (e) {}
              }
            })(e);
          },
          { immediate: !0 }
        ),
        n.onMounted(function () {
          return (
            (t = s),
            null,
            (u = e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = new r.VisibilityObserver(
                            ".tzrl-wrapper",
                            {
                              once: !0,
                              callback: function (e, r) {
                                e &&
                                  !i &&
                                  (n.StockBridge.report(
                                    "news.detail.tzrl_visited",
                                    { newsid: l.newsId }
                                  ),
                                  (i = !0));
                              },
                              intersection: { threshold: 0 },
                            },
                            { context: p }
                          )),
                          (a = new r.VisibilityObserver(
                            ".share-banner",
                            {
                              once: !0,
                              callback: function (e, r) {
                                e &&
                                  !c &&
                                  (n.StockBridge.report(
                                    "news.detail.tzrl_share_banner_expose",
                                    { newsid: l.newsId }
                                  ),
                                  (c = !0));
                              },
                              intersection: { threshold: 0 },
                            },
                            { context: p }
                          )),
                          (e.prev = 1),
                          e.abrupt("return", void (z.value = !1))
                        );
                      case 5:
                        (e.prev = 5), (e.t0 = e.catch(1));
                      case 7:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[1, 5]]
              );
            })),
            new Promise(function (e, n) {
              var r = function (e) {
                  try {
                    i(u.next(e));
                  } catch (e) {
                    n(e);
                  }
                },
                o = function (e) {
                  try {
                    i(u.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                i = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(r, o);
                };
              i((u = u.apply(t, null)).next());
            })
          );
          var t, u;
        }),
        n.onUnmounted(function () {
          var e, n, r, t;
          null ==
            (n =
              null == (e = null == o ? void 0 : o.observer)
                ? void 0
                : e.disconnect) || n.call(e),
            null ==
              (t =
                null == (r = null == a ? void 0 : a.observer)
                  ? void 0
                  : r.disconnect) || t.call(r);
        }),
        {
          tzrlContent: f,
          tzrlId: m,
          tzrlText: v,
          zbgdTitle: g,
          zbgdText: w,
          zbgdTail: b,
          zbgdImgLinkItem: h,
          showViewMore: z,
          goToNews: function (e) {
            d("wzqKeepPos"),
              n.StockBridge.report("news.detail.tzrl_title_click", {
                newsid: l.newsId,
              }),
              t.jumpToDetail(e, this);
          },
          wzqKeepPos: function () {
            d("wzqKeepPos");
          },
          onShareClick: function () {
            n.StockBridge.report("news.detail.tzrl_share_click", {
              newsid: l.newsId,
            }),
              d("share", "friend");
          },
          onViewMoreClick: function () {
            n.StockBridge.report("news.detail.tzrl_more_click", {
              newsid: l.newsId,
            }),
              n.StockRouter.routeTo({ name: "financialcalendar" });
          },
        }
      );
    },
  };
Array ||
  (
    n.resolveComponent("cardHeader") +
    n.resolveComponent("ShareButtonWrapper") +
    n.resolveComponent("image-link-item")
  )();
var u = n._export_sfc(l, [
  [
    "render",
    function (e, r, t, o, i, a) {
      return n.e(
        { a: n.p({ title: "投资日历精选" }), b: o.showViewMore },
        o.showViewMore
          ? {
              c: n.o(function () {
                return (
                  o.onViewMoreClick && o.onViewMoreClick.apply(o, arguments)
                );
              }, 4176),
            }
          : {},
        {
          d: n.t(o.tzrlText || "暂无大事发布，看早报放松下"),
          e: n.o(function (e) {
            return o.goToNews(o.tzrlContent);
          }, 4177),
          f: o.zbgdText,
        },
        o.zbgdText
          ? n.e(
              { g: o.zbgdTitle },
              o.zbgdTitle ? { h: n.t(o.zbgdTitle) } : {},
              { i: n.t(o.zbgdText), j: o.zbgdTail },
              o.zbgdTail ? { k: n.t(o.zbgdTail) } : {}
            )
          : {},
        {
          l: n.o(function () {
            return o.onShareClick && o.onShareClick.apply(o, arguments);
          }, 4178),
          m: o.zbgdImgLinkItem,
        },
        o.zbgdImgLinkItem
          ? {
              n: n.p({
                item: o.zbgdImgLinkItem,
                "news-id": t.newsId,
                "module-name": "zbgd",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-9d6ec5c2"],
]);
wx.createComponent(u);
