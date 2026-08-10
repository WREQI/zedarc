var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, t) {
    return new Promise(function (r, o) {
      var i = function (e) {
          try {
            l(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            l(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        l = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, u);
        };
      l((t = t.apply(e, n)).next());
    });
  },
  t = require("../../../../../../../common/vendor.js"),
  r = require("../../../utils/tools.js"),
  o = require("../../../../stock-hq-data/index.js"),
  i = {
    SEARCH: "search",
    WXHOT: "wxhot",
    NEWS: "news",
    BANKUAI: "bankuai",
    ETF: "etf",
  },
  u = !1,
  l = "android" === (getApp().globalData.systemInfo || {}).platform ? 8 : 2,
  a = t.defineComponent({
    name: "HotRankMp",
    components: {
      rankStock: function () {
        return "../../../components/rankStock.js";
      },
      rankNews: function () {
        return "../../../components/rankNews.js";
      },
      ruleModel: function () {
        return "../../../components/ruleModel.js";
      },
      ruleTip: function () {
        return "../../../components/ruleTip.js";
      },
      navTitle: function () {
        return "../../../components/navTitle.js";
      },
      backIcon: function () {
        return "../../../components/backIcon.js";
      },
      tabBar: function () {
        return "../../../components/tab-bar/mp/index.js";
      },
    },
    props: {
      queryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (a) {
      var c,
        s,
        p = this,
        d = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        f = t.ref(+(null == (c = a.queryData) ? void 0 : c.tabId) || 0),
        v = t.ref((null == (s = a.queryData) ? void 0 : s.groupId) || ""),
        k = t.ref(null),
        g = t.ref(1600),
        h = t.ref(0),
        m = t.ref(128),
        w = t.ref(!1),
        y = t.ref(0),
        T = t.ref(-1),
        b = null,
        x = null,
        C = null,
        S = (function () {
          var o = t.inject("stockBridge"),
            u = new r.BatchAPIService(o),
            l = t.ref(!1);
          return {
            showRule: l,
            rankConfig: [
              {
                name: "热搜",
                type: i.SEARCH,
                swiperHeight: 0,
                scrollTop: 0,
                rendered: !1,
              },
              {
                name: "微信热股",
                type: i.WXHOT,
                swiperHeight: 0,
                scrollTop: 0,
                rendered: !1,
              },
              {
                name: "热文",
                type: i.NEWS,
                swiperHeight: 0,
                scrollTop: 0,
                rendered: !1,
              },
              {
                name: "板块",
                type: i.BANKUAI,
                swiperHeight: 0,
                scrollTop: 0,
                rendered: !1,
              },
              {
                name: "ETF",
                type: i.ETF,
                swiperHeight: 0,
                scrollTop: 0,
                rendered: !1,
                tips: "像股票一样交易，免印花税且部分支持T+0",
                check: "1分钟了解",
                url: "https://gu.qq.com/resource/etf/index.html?env=wzqh5",
              },
            ],
            swiperOptions: {
              followFinger: !0,
              touchMoveStopPropagation: !1,
              notNextTick: !0,
              direction: "horizontal",
              grabCursor: !0,
              setWrapperSize: !0,
              mousewheelControl: !0,
              observeParents: !0,
              loop: !1,
              slidesPerView: 1,
              touchAngle: 30,
              resistanceRatio: 0,
            },
            StockBridge: o,
            toggleRule: function (e) {
              l.value = e;
            },
            queryUserStock: function () {
              return n(
                exports,
                null,
                e().mark(function n() {
                  var t, r, o, i;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0), (e.next = 3), u.queryUserStock()
                            );
                          case 3:
                            if (((e.t0 = e.sent), e.t0)) {
                              e.next = 6;
                              break;
                            }
                            e.t0 = {};
                          case 6:
                            return (
                              (i = e.t0),
                              e.abrupt(
                                "return",
                                null ==
                                  (o =
                                    null ==
                                    (r =
                                      null ==
                                      (t = null == i ? void 0 : i.grouplist)
                                        ? void 0
                                        : t.filter(function (e) {
                                            var n;
                                            return (
                                              1 ==
                                              +(null ==
                                              (n =
                                                null == e
                                                  ? void 0
                                                  : e.groupinfo)
                                                ? void 0
                                                : n.type)
                                            );
                                          }))
                                      ? void 0
                                      : r[0])
                                  ? void 0
                                  : o.stocklist
                              )
                            );
                          case 10:
                            (e.prev = 10), (e.t1 = e.catch(0));
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 10]]
                  );
                })
              );
            },
          };
        })(),
        I = S.queryUserStock,
        R = S.rankConfig,
        j = S.StockBridge,
        H = S.showRule,
        q = S.toggleRule,
        N = t.computed(function () {
          return h.value - m.value;
        }),
        E = t.computed(function () {
          var e;
          return (null == (e = R[f.value]) ? void 0 : e.type) === i.ETF;
        }),
        _ = function () {
          return n(
            p,
            null,
            e().mark(function n() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t.wx$1
                        .createSelectorQuery()
                        .in(d)
                        .select("#top-image")
                        .boundingClientRect(function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            n = e.height;
                          h.value = Math.floor(n);
                        })
                        .exec();
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        },
        A = function (e) {
          var n;
          (y.value =
            Math.floor(
              null == (n = null == e ? void 0 : e.detail) ? void 0 : n.scrollTop
            ) || 0),
            (w.value = y.value > 0 && y.value + m.value >= h.value),
            (R[f.value].scrollTop = y.value);
        },
        D = function (e) {
          t.nextTick$1(function () {
            d.createSelectorQuery()
              .select(".hot".concat(e, "-wrapper"))
              .boundingClientRect()
              .exec(function (n) {
                var t = ((null == n ? void 0 : n[0]) || {}).height;
                (R[e].swiperHeight = t || 600),
                  e === f.value && (g.value = R[e].swiperHeight);
              });
          });
        },
        M = function (e, n) {
          var t, r;
          (f.value = e),
            x && (clearTimeout(x), (x = null)),
            +R[e].swiperHeight
              ? (g.value = R[e].swiperHeight)
              : (x = setTimeout(function () {
                  D(e), (x = null);
                }, 1200)),
            w.value &&
              (T.value =
                +(null == (t = R[e]) ? void 0 : t.scrollTop) || N.value + l),
            (R[e].rendered = !0),
            n &&
              j.report(
                "base.hot.card_version_tab_".concat(
                  null == (r = R[e]) ? void 0 : r.type,
                  "_click"
                )
              );
        };
      return (
        t.onMounted(function () {
          (C = setTimeout(function () {
            D(f.value), (C = null);
          }, 1300)),
            _(),
            (R[f.value].rendered = !0),
            (b = r.debounce(0, A));
        }),
        t.onBeforeUnmount(function () {
          x && (clearTimeout(x), (x = null)),
            C && (clearTimeout(C), (C = null));
        }),
        {
          sTop: y,
          sTotop: T,
          isEtf: E,
          showRule: H,
          rankIndex: f,
          groupId: v,
          userStock: k,
          ceilingY: h,
          navHeight: m,
          rankConfig: R,
          tabCeiling: w,
          scrollHeight: N,
          currSwiperHeight: g,
          onScroll: function (e) {
            b(e);
          },
          checkTips: function (e) {
            j.openExtraWebview(e, {});
          },
          switchTab: function (e) {
            (u = !0), M(e, "click");
          },
          toggleRule: q,
          scrollEvent: A,
          swiperChange: function (e) {
            var n = (e || {}).detail,
              t = n.current;
            ("touch" === n.source || u) && (M(t), (u = !1));
          },
          handleChange: M,
          getTopheight: _,
          viewNewsDetail: function (e) {
            var n = e.new_type,
              t = e.news_id,
              o =
                1 == +n
                  ? "/pages/comment/detailView/main"
                  : "/pages/newsCon/newsDetail/main",
              i = 1 == +n ? { nid: t } : { id: t, title: "", type: 4 };
            j.routeTo({ url: r.makeUrl(o, i) });
          },
          setSwiperHeight: D,
          handleRankRendered: function (e) {
            D(e);
          },
          viewStockDetail: function () {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = n.code,
              u = n.name,
              l = o.utils.splitSymbol(r) || {},
              a = l.market,
              c = l.scode,
              s = null == (e = R[f.value]) ? void 0 : e.type,
              p = null == r ? void 0 : r.slice(0, 2);
            s !== i.BANKUAI || ("us" !== p && "hk" !== p)
              ? j.routeTo({
                  url: "/pages/quote/quote?market="
                    .concat(a, "&scode=")
                    .concat(c),
                })
              : t.StockRouter.routeTo({
                  name: "plate-list",
                  query: {
                    plate: "us" === p ? "601" : "400",
                    code: c,
                    name: u,
                  },
                });
          },
          updateUserStock: function () {
            return n(
              p,
              null,
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), I();
                      case 2:
                        k.value = e.sent;
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
  });
Array ||
  (
    t.resolveComponent("tab-bar") +
    t.resolveComponent("nav-title") +
    t.resolveComponent("back-icon") +
    t.resolveComponent("rank-news") +
    t.resolveComponent("rank-stock") +
    t.resolveComponent("rule-tip") +
    t.resolveComponent("rule-model")
  )();
var c = t._export_sfc(a, [
  [
    "render",
    function (e, n, r, o, i, u) {
      return t.e(
        {
          a: t.n(e.tabCeiling ? "ceiling" : ""),
          b: t.o(e.switchTab, 1102),
          c: t.p({ "rank-index": e.rankIndex, "rank-config": e.rankConfig }),
          d: t.p({
            "scroll-top": e.sTop,
            title: e.rankConfig[e.rankIndex].name,
            "scroll-height": e.scrollHeight,
          }),
          e: t.n(e.rankConfig[e.rankIndex].type),
          f: t.n(e.tabCeiling ? "ceiling" : ""),
          g: t.o(e.switchTab, 1103),
          h: t.p({ "rank-index": e.rankIndex, "rank-config": e.rankConfig }),
          i: t.f(e.rankConfig, function (n, r, o) {
            return t.e(
              { a: n.tips && r === e.rankIndex },
              n.tips && r === e.rankIndex
                ? t.e(
                    { b: t.t(n.tips), c: n.check },
                    n.check
                      ? {
                          d: t.t(n.check),
                          e: t.o(
                            function (t) {
                              return e.checkTips(n.url);
                            },
                            1104,
                            r
                          ),
                        }
                      : {}
                  )
                : {},
              { f: "news" === n.type && (n.rendered || r === e.rankIndex) },
              "news" !== n.type || (!n.rendered && r !== e.rankIndex)
                ? n.rendered || r === e.rankIndex
                  ? {
                      k: t.o(
                        function (n) {
                          return e.handleRankRendered(r);
                        },
                        1106,
                        r
                      ),
                      l: t.o(e.viewStockDetail, 1107, r),
                      m: "d4f66496-5-" + o,
                      n: t.p({
                        "cur-type": e.rankConfig[e.rankIndex].type,
                        "rank-type": n.type,
                        "user-stock": e.userStock,
                        "group-id": e.groupId,
                      }),
                    }
                  : {}
                : {
                    g: t.o(e.viewNewsDetail, 1105, r),
                    h: "d4f66496-4-" + o,
                    i: t.p({
                      "cur-type": e.rankConfig[e.rankIndex].type,
                      "rank-type": n.type,
                    }),
                  },
              {
                j: n.rendered || r === e.rankIndex,
                o: t.n("hot".concat(r, "-wrapper")),
                p: r,
              }
            );
          }),
          j: e.rankIndex,
          k: "".concat(e.currSwiperHeight, "px"),
          l: t.o(function () {
            return e.swiperChange && e.swiperChange.apply(e, arguments);
          }, 1108),
          m: t.o(e.toggleRule, 1109),
          n: e.sTotop,
          o: t.o(function () {
            return e.onScroll && e.onScroll.apply(e, arguments);
          }, 1110),
          p: e.showRule,
        },
        e.showRule ? { q: t.o(e.toggleRule, 1111) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-d4f66496"],
]);
wx.createComponent(c);
var s = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1zZWFyY2gtcGFnZS9wYWdlcy9ob3QtcmFuay9tcC9pbmRleC52dWU =
  s),
  (exports.TabTypeEnum = i);
