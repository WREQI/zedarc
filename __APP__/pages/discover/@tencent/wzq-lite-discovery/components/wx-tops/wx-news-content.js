var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && u(e, n, t[n]);
    if (i) {
      var a,
        o = r(i(t));
      try {
        for (o.s(); !(a = o.n()).done; ) {
          n = a.value;
          s.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return a(e, o(t));
  },
  p = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, i);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  d = require("../../../../../../common/vendor.js"),
  v = require("../../api/request.js"),
  h = require("../../../stock-growth-base/service/shareInvite/index.js"),
  w = require("../../../wzq-lite-basket/api/StockBasketAPI.js"),
  x =
    new (require("../../../stock-news-base/service/market/RelatedStockHelper.js").RelatedStockHelper)(),
  m = "WZQ_DISCOVER_TOP_NEWS_CACHE",
  y = {
    components: {
      wxNewsitemTop: function () {
        return "./wx-newsitem-top.js";
      },
      wxNewsitemTopLct: function () {
        return "./wx-newsitem-top-lct.js";
      },
      shareButton: function () {
        return "../shareButton.js";
      },
    },
    props: {
      reportPrefix: { type: String, default: "" },
      reportParams: {
        type: Object,
        default: function () {
          return { category_id: "wxtopnews" };
        },
      },
      limit: { type: Number, default: 35 },
      hasBand: { type: Boolean, default: !1 },
      abtConfig: { type: Object, default: null },
      showHeader: { type: Boolean, default: !1 },
      showGradient: { type: Boolean, default: !1 },
      topOffset: { type: Number, default: 0 },
      scrollTop: { type: Number, default: 0 },
      isOnShow: { type: Boolean, default: !1 },
      version: { type: String, default: "" },
    },
    setup: function (n, a) {
      var o = this,
        i = a.emit,
        c = d.inject("stockBridge"),
        s = d.ref(!1),
        u = d.ref(0),
        y = d.ref(!0),
        b = d.ref(-1),
        g = d.inject("lctChannel") || !1,
        k = d.getCurrentInstance().proxy || d.getCurrentInstance(),
        S = (function () {
          var e = d.inject("stockBridge"),
            n = new w.StockBasketAPI(e),
            a = d.ref({});
          d.provide("qtData", a);
          var o = d.ref([]),
            i = function () {
              var e = [];
              try {
                o.value.forEach(function (t) {
                  var r,
                    n,
                    a =
                      null == (n = null == (r = t.watchList) ? void 0 : r.info)
                        ? void 0
                        : n.id;
                  a && !e.includes(a) && e.push(a);
                });
              } catch (e) {}
              return e;
            },
            c = function (e) {
              var t, r;
              try {
                for (var n = 0; n < e.length; n++)
                  for (
                    var a = e[n], i = a.info.id, c = 0;
                    c < o.value.length;
                    c++
                  ) {
                    var s = o.value[c];
                    s &&
                      i ===
                        (null ==
                        (r = null == (t = s.watchList) ? void 0 : t.info)
                          ? void 0
                          : r.id) &&
                      (s.watchList = a);
                  }
              } catch (e) {}
            },
            s = function () {
              var e = [];
              return (
                o.value.forEach(function (t) {
                  var r,
                    n,
                    a = t.relate_code,
                    o = t.watchList;
                  a &&
                    a.length > 0 &&
                    ((a[0].symbol = a[0].symbol || a[0].stock_code || ""),
                    e.push(a[0]));
                  try {
                    null ==
                      (n =
                        null == (r = null == o ? void 0 : o.ranking)
                          ? void 0
                          : r.data) ||
                      n.forEach(function (t) {
                        t.data &&
                          e.push(f(l({}, t.data), { name: t.data.cnName }));
                      });
                  } catch (e) {}
                }),
                e
              );
            },
            u = function (e) {
              return p(
                exports,
                null,
                t().mark(function n() {
                  var a, o, i, c, s;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (a = []), (o = r(e));
                            try {
                              for (o.s(); !(i = o.n()).done; )
                                (c = i.value).symbol &&
                                  !a.includes(c.symbol) &&
                                  a.push(c.symbol);
                            } catch (e) {
                              o.e(e);
                            } finally {
                              o.f();
                            }
                            return (t.prev = 3), (t.next = 6), x.requestQT(a);
                          case 6:
                            return (
                              (s = t.sent),
                              t.abrupt("return", x.handleQTData(e, s))
                            );
                          case 10:
                            (t.prev = 10), (t.t0 = t.catch(3));
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    n,
                    null,
                    [[3, 10]]
                  );
                })
              );
            },
            v = function (e) {
              e &&
                (e && (a.value = e),
                e.forEach(function (e) {
                  for (var t = e.symbol, r = 0; r < o.value.length; r++) {
                    var n = o.value[r];
                    n.relate_code &&
                      n.relate_code.length > 0 &&
                      n.relate_code[0].symbol === t &&
                      (n.relate_code = [e]);
                  }
                }));
            };
          return {
            listData: o,
            stockBasketAPI: n,
            getBasketIdList: i,
            refreshBasketData: function () {
              return p(
                exports,
                null,
                t().mark(function e() {
                  var r, a, o, s;
                  return t().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), 0 !== (r = i()).length)) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              (a = { ids: r.join(","), with_zixuan: !0 }),
                              (e.next = 7),
                              n.getBasketSummary(a)
                            );
                          case 7:
                            (o = e.sent),
                              (s = o.data),
                              c(s.list),
                              (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(0));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
            },
            updateBasketData: c,
            refreshStockData: function () {
              return p(
                exports,
                null,
                t().mark(function e() {
                  var r, n;
                  return t().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (r = s()), (e.prev = 1), (e.next = 4), u(r);
                          case 4:
                            (n = e.sent), v(n), (e.next = 10);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(1));
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
            },
            stockTmpList: s,
            requestQTData: u,
            refreshContantData: v,
          };
        })();
      d.onMounted(function () {
        j();
      });
      var _ = "event_card_share_guide_v2_clicked",
        P = d.ref(!0),
        C = null,
        T = function () {
          if ((C && clearTimeout(C), !P.value)) {
            P.value = !0;
            try {
              d.wx$1.setStorageSync(_, !0);
            } catch (e) {}
          }
        };
      d.onActivated(function () {
        g && j();
      });
      var D = function () {
          i("refreshSuccess", S.listData.value.length);
          try {
            if (!d.wx$1.getStorageSync) return;
            (P.value = d.wx$1.getStorageSync(_)),
              P.value ||
                (C = setTimeout(function () {
                  T();
                }, 5e3));
          } catch (e) {}
        },
        j = function () {
          return p(
            o,
            null,
            t().mark(function e() {
              var r, a, o;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          v.requestWxNewsTopData(n.limit || 0)
                        );
                      case 3:
                        if (
                          ((a = e.sent),
                          (o =
                            null == (r = null == a ? void 0 : a.data)
                              ? void 0
                              : r.list),
                          0 == +(null == a ? void 0 : a.code) &&
                            (null == o ? void 0 : o.length) > 0)
                        ) {
                          (S.listData.value = o),
                            (y.value = 1 == +a.data.has_next),
                            (u.value = a.data.next_offset),
                            (s.value = !0);
                          try {
                            c.setStorage(m, o);
                          } catch (e) {}
                          d.nextTick$1(function () {
                            D();
                          });
                        } else i("refreshFail");
                        S.refreshStockData(), (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(0)), i("refreshFail");
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
        },
        E = d.ref(!1),
        O = d.ref(0),
        B = function () {
          (b.value = -1), (E.value = !1);
        },
        q = null;
      d.watch(
        function () {
          return n.scrollTop;
        },
        function (e) {
          B();
        },
        { immediate: !0 }
      );
      var I = d.ref(!1);
      d.watch(
        function () {
          return n.abtConfig;
        },
        function (e, t) {
          var r;
          if (e)
            try {
              var n = (
                ((null == e ? void 0 : e.data) &&
                  (null == (r = null == e ? void 0 : e.data)
                    ? void 0
                    : r[0])) ||
                {}
              ).DiscoverVersion;
              n && (I.value = "New" === n);
            } catch (e) {}
        },
        { immediate: !0, deep: !0 }
      );
      var N = d.inject("shareEventName");
      d.watch(
        function () {
          return n.isOnShow;
        },
        function (e, t) {
          e || B();
        },
        { immediate: !0, deep: !0 }
      );
      try {
        var R = c.getStorage(m);
        R && R.length > 0 && ((S.listData.value = R), D());
      } catch (e) {}
      return f(l({}, S), {
        newHeader: I,
        isDataReady: s,
        refresh: j,
        loadMore: function () {
          return p(
            o,
            null,
            t().mark(function r() {
              var a;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!y.value) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (t.prev = 1),
                          (t.next = 4),
                          v.requestWxNewsTopData(n.limit || 0)
                        );
                      case 4:
                        (a = t.sent) &&
                          0 == +a.code &&
                          ((S.listData.value = [].concat(
                            e(S.listData.value),
                            e(a.data.list)
                          )),
                          (y.value = 1 == +a.data.has_next),
                          (u.value = a.data.next_offset),
                          i("loadMoreSuccess", a)),
                          S.refreshStockData(),
                          (t.next = 11);
                        break;
                      case 8:
                        (t.prev = 8), (t.t0 = t.catch(1)), i("loadMoreFail");
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                null,
                [[1, 8]]
              );
            })
          );
        },
        showWxTopTips: function () {
          c.report("".concat(n.reportPrefix, ".show_wxtoptooltips_click")),
            i("showWxTopTips");
        },
        longPress: function (e, t) {
          B(),
            T(),
            h.ShareInvite.getInviteCode(
              {
                share_type: h.SHARETYPE.SHARE_TYPE_HOTISSUE,
                query_result: h.QUERYRESULT.UNQUERY_RESULT,
                hot_issue: { id: S.listData.value[e].event_id },
              },
              function (e) {
                "news.discovery" === n.reportPrefix
                  ? c.busEmit(
                      "news-discovery-set-share-inviteCode",
                      e.share_code
                    )
                  : "news.wxtopnews" === n.reportPrefix &&
                    c.busEmit(
                      "news-wxtopnews-set-share-inviteCode",
                      e.share_code
                    );
              }
            ),
            (b.value = e),
            (q = S.listData.value[e]);
          try {
            d.wx$1
              .createSelectorQuery()
              .in(k)
              .select("#wx-news-content")
              .boundingClientRect(function (t) {
                try {
                  var r = t.top;
                  d.wx$1
                    .createSelectorQuery()
                    .in(k)
                    .select("#wx-news-item-".concat(e))
                    .boundingClientRect(function (e) {
                      try {
                        var t = e.top;
                        (O.value = t - r - 32), (E.value = !0);
                      } catch (e) {}
                    })
                    .exec();
                } catch (e) {}
              })
              .exec();
          } catch (e) {}
        },
        longPressModule: E,
        shareBtnY: O,
        pressingIndex: b,
        onClickShare: function () {
          c.busEmit(N, { item: q }),
            c.report("".concat(n.reportPrefix, ".event_sharebutton_click"), {
              positionid: b.value,
              hotissueid: null == q ? void 0 : q.event_id,
            }),
            B();
        },
        hideShareGuide: P,
        clearShareGuide: T,
        clearPress: B,
        onContentClick: function (e) {
          B();
        },
      });
    },
  };
Array ||
  (
    d.resolveComponent("wxNewsitemTopLct") +
    d.resolveComponent("wxNewsitemTop") +
    d.resolveComponent("share-button")
  )();
var b = d._export_sfc(y, [
  [
    "render",
    function (e, t, r, n, a, o) {
      return d.e(
        { a: "".concat(r.topOffset, "px"), b: r.showHeader },
        r.showHeader
          ? {
              c: d.o(function () {
                return n.showWxTopTips && n.showWxTopTips.apply(n, arguments);
              }, 2291),
            }
          : {},
        {
          d: d.f(e.listData, function (e, t, a) {
            return d.e(
              "lct" === r.version
                ? {
                    a: d.o(
                      function (e) {
                        return n.longPress(t, e);
                      },
                      2292,
                      t
                    ),
                    b: "36abe562-0-" + a,
                    c: d.p({
                      "report-prefix": r.reportPrefix,
                      "report-params": r.reportParams,
                      "item-index": t,
                      "item-data": e,
                      "abt-config": r.abtConfig,
                      "pressing-index": n.pressingIndex,
                    }),
                  }
                : {
                    d: d.o(
                      function (e) {
                        return n.longPress(t, e);
                      },
                      2293,
                      t
                    ),
                    e: "36abe562-1-" + a,
                    f: d.p({
                      "report-prefix": r.reportPrefix,
                      "report-params": r.reportParams,
                      "item-index": t,
                      "item-data": e,
                      "abt-config": r.abtConfig,
                      "pressing-index": n.pressingIndex,
                    }),
                  },
              { g: "wx-news-item-".concat(t), h: t }
            );
          }),
          e: "lct" === r.version,
          f: n.longPressModule,
        },
        n.longPressModule
          ? { g: d.o(n.onClickShare, 2294), h: d.p({ top: n.shareBtnY }) }
          : {},
        { i: !n.hideShareGuide },
        n.hideShareGuide
          ? {}
          : {
              j: d.o(function () {
                return (
                  n.clearShareGuide && n.clearShareGuide.apply(n, arguments)
                );
              }, 2295),
            },
        {
          k: d.n(r.showGradient ? "bg-gradient" : ""),
          l: d.o(function () {
            return n.onContentClick && n.onContentClick.apply(n, arguments);
          }, 2296),
        }
      );
    },
  ],
  ["__scopeId", "data-v-36abe562"],
]);
wx.createComponent(b);
