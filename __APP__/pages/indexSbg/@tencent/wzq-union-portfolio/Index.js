require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../@babel/runtime/helpers/Objectvalues");
var o = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, o) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  p = function (e, t) {
    for (var o in t || (t = {})) s.call(t, o) && l(e, o, t[o]);
    if (c) {
      var r,
        i = n(c(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          o = r.value;
          u.call(t, o) && l(e, o, t[o]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = function (e, t, o) {
    return new Promise(function (n, r) {
      var i = function (e) {
          try {
            c(o.next(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          try {
            c(o.throw(e));
          } catch (e) {
            r(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
        };
      c((o = o.apply(e, t)).next());
    });
  },
  f = require("../../../../common/vendor.js"),
  h = require("../stock-hq-data/index.js"),
  v = require("../stock-hq-core/utils/market.js"),
  g = require("../stock-markets-base/utils/share.js"),
  m = require("../stock-markets-base/utils/market.js"),
  S = require("utils/util.js"),
  k = require("store/useStocksStore.js"),
  b = require("../stock-mini-mins/api/StockMiniChartApiV2.js"),
  y = require("./service/index.js"),
  w = require("../stock-monitoring-remind/hooks/useMonitoringRemindSwitch.js"),
  x = [0, -1, 1],
  P = f.defineStore("useCaptionStore", function () {
    var e = f.ref({}),
      t = f.ref({}),
      o = f.ref({}),
      n = f.ref(S.SORT_CAPTIONS),
      r = function (t, o) {
        var n = e.value;
        (n[t] = Object.assign({}, p({}, o))), (e.value = Object.assign({}, n));
      },
      c = function (e, o) {
        var n = t.value;
        (n[e] = Object.assign({}, p({}, o))), (t.value = Object.assign({}, n));
      },
      s = function (t) {
        if (t) return e.value[t] || r(t, n.value[0]), e.value[t];
      },
      u = function (e) {
        if (e) return t.value[e] || c(e, n.value[1]), t.value[e];
      },
      l = function (e) {
        var t = x.indexOf(e);
        return x[(t + 1) % x.length];
      },
      d = function (e) {
        c(e, n.value[1]);
      },
      h = function (e) {
        r(e, n.value[0]);
      },
      v = function (e) {
        o.value = Object.assign({}, e);
      };
    return {
      currentPriceConfig: e,
      currentZDFConfig: t,
      sortInfo: o,
      getCurPriceConfig: s,
      getCurZDFConfig: u,
      switchMode: function (e) {
        var o = u(e).orderBy,
          r = n.value.slice(1),
          i =
            (r.findIndex(function (e) {
              return e.orderBy === o;
            }) +
              1) %
            r.length,
          a = n.value[i + 1];
        if (a) {
          var c = t.value;
          (c[e] = Object.assign(p({}, t.value[e]), {
            text: a.text,
            orderBy: a.orderBy,
          })),
            (t.value = Object.assign({}, c));
        }
      },
      resetZDFConfig: d,
      resetPriceConfig: h,
      resetAll: function (e) {
        d(e), h(e);
      },
      sortZDF: function (e) {
        var o = u(e).order,
          n = l(o),
          r = t.value;
        (r[e] = Object.assign(p({}, r[e]), { order: n })),
          (t.value = Object.assign({}, r)),
          h(e),
          v(r[e]);
      },
      sortPrice: function (o) {
        var n,
          r = s(o).order,
          u = l(r),
          d = e.value;
        (d[o] = Object.assign(p({}, d[o]), { order: u })),
          (e.value = Object.assign({}, d)),
          c(o, ((n = p({}, t.value[o])), i(n, a({ order: 0 })))),
          v(d[o]);
      },
      setSortCaptions: function (e) {
        e && e.length > 0 && (n.value = e);
      },
      isSortStatus: function (e) {
        var t = s(e),
          o = u(e);
        return (
          0 !== (null == t ? void 0 : t.order) ||
          0 !== (null == o ? void 0 : o.order)
        );
      },
    };
  }),
  O = 0,
  I = f.ref(0),
  T = f.ref(0),
  C = f.ref(0),
  B = f.ref(0),
  M = f.ref(0);
function R() {
  var e = b.useViewStore(),
    t = k.useStocksStore(),
    o = f.computed(function () {
      return f.StockBridge.ENV === f.EnvTypeEnum.MP
        ? getApp().globalData.rpxToPx(e.showPrivacyPolicyBar.value ? 204 : 140)
        : 70;
    }),
    n = function (n) {
      f.StockBridge.ENV === f.EnvTypeEnum.MP
        ? (function (n) {
            f.wx$1
              .createSelectorQuery()
              .in(n)
              .select(".stock-scroll-list-".concat(t.curGroupId))
              .scrollOffset()
              .exec(function (t) {
                if (t && t[0]) {
                  var n = t[0],
                    r = n.scrollTop,
                    i = n.scrollHeight,
                    a = e.swiperHeight - e.sortBarHeight,
                    c = o.value + (e.mpHideTitle ? 0 : M.value) - (i - r - a);
                  e.setSwiperItemHeight(a - c);
                }
              });
          })(n)
        : (function () {
            var n = document.querySelector(
              ".stock-scroll-list-".concat(
                t.curGroupId,
                " .scroll-view-content"
              )
            );
            if (n) {
              var r = n.getBoundingClientRect(),
                i = r.y,
                a = r.height - (Math.abs(i) - O - e.sortBarHeight);
              e.setSwiperItemHeight(a - o.value);
            }
          })();
    },
    r = function (t, o, n) {
      var r =
        (f.wx$1.getWindowInfo && f.wx$1.getWindowInfo()) ||
        f.wx$1.getSystemInfoSync();
      (B.value = r.windowHeight), o && (B.value = o);
      try {
        f.wx$1
          .createSelectorQuery()
          .in(t)
          .select(".slide-header")
          .boundingClientRect()
          .exec(function (t) {
            var o = 0;
            (null == t ? void 0 : t[0]) &&
              ((O = t[0].bottom),
              e.setChooseTopToHeaderBottom(O),
              (o = t[0].height));
            var r = B.value - e.topBarHeight - o + e.titleHeight;
            e.setSwiperHeight(r),
              n("setSwiperHeight", e.swiperHeight - e.sortBarHeight),
              !e.topBarHeight || e.titleHeight;
          });
      } catch (t) {
        e.setSwiperHeight(B.value - O);
      }
    };
  return {
    placeHolderHeight: o,
    initHeight: function () {
      var t;
      if (f.StockBridge.ENV === f.EnvTypeEnum.MP) {
        var o = getApp().globalData;
        (O = o.rpxToPx(182)),
          e.setChooseTopToHeaderBottom(O),
          e.setSortBarHeight(o.rpxToPx(64)),
          e.setStockItemHeight(
            (90 *
              Math.min(
                430,
                (null == (t = null == o ? void 0 : o.systemInfo)
                  ? void 0
                  : t.windowWidth) || 375
              )) /
              375 /
              2
          ),
          (M.value = o.rpxToPx(80)),
          (I.value = o.rpxToPx(364));
      }
    },
    setSwiperHeight: function (t, o, n) {
      f.StockBridge.ENV === f.EnvTypeEnum.MP
        ? r(t, n, o)
        : (function (t) {
            var o,
              n,
              r,
              i,
              a = null == (o = f.dist.detect().os) ? void 0 : o.ios;
            if (!T.value || a) {
              var c = document.querySelectorAll("#app-nav");
              T.value =
                (null != (i = null == (n = c[1]) ? void 0 : n.offsetHeight)
                  ? i
                  : null == (r = c[0])
                  ? void 0
                  : r.offsetHeight) || 0;
            }
            if (!O) {
              var s = document.querySelector("#app .slide-header");
              (O =
                (null == s ? void 0 : s.getBoundingClientRect().bottom) || 100),
                e.setChooseTopToHeaderBottom(O);
            }
            if (!e.sortBarHeight) {
              var u = document.querySelector("#app .sortable-captions");
              e.setSortBarHeight((null == u ? void 0 : u.offsetHeight) || 0);
            }
            (C.value && !a) || (C.value = document.body.offsetHeight);
            var l = C.value - T.value - O;
            l < C.value / 2 && (l = C.value - 49 - 86),
              e.setSwiperHeight(l),
              t("setSwiperHeight", e.swiperHeight - e.sortBarHeight);
          })(o);
    },
    mpSetSwiperHeight: r,
    setCalculateCardHeight: n,
    setContentHeight: function (r, i, a, c) {
      f.StockBridge.ENV === f.EnvTypeEnum.MP
        ? (function (t, r, i, a) {
            if (r) e.setSwiperItemHeight(I.value - e.sortBarHeight);
            else {
              var c = e.swiperHeight - e.sortBarHeight;
              f.wx$1
                .createSelectorQuery()
                .in(t)
                .select(".scroll-view-content")
                .boundingClientRect()
                .exec(function (r) {
                  if (r && r[0])
                    if (r[0].height < c) {
                      var s = o.value + (e.mpHideTitle ? 0 : M.value);
                      e.setSwiperItemHeight(r[0].height - s);
                    } else a ? n(t) : i("calculate-card-height");
                });
            }
          })(r, i, a, c)
        : (function (r, i, a, c) {
            if (!I.value) {
              var s = document.querySelector("#app .empty-wrap");
              I.value =
                (null == s ? void 0 : s.getBoundingClientRect().height) || 364;
            }
            if (i) e.setSwiperItemHeight(I.value - e.sortBarHeight);
            else {
              var u = e.swiperHeight - e.sortBarHeight,
                l = document.querySelector(
                  ".stock-scroll-list-".concat(
                    t.curGroupId,
                    " .scroll-view-content"
                  )
                );
              if (l) {
                var p = l.getBoundingClientRect().height;
                if (p < u) {
                  var d = o.value + (e.mpHideTitle ? 0 : M.value);
                  e.setSwiperItemHeight(p - d);
                } else c ? n(r) : a("calculate-card-height");
              }
            }
          })(r, i, a, c);
    },
  };
}
function H(e) {
  return {
    gotoStockDetail: function (e) {
      var t,
        o = e || {},
        n = o.scode,
        r = o.market,
        i = e || {},
        a = i.chooseSymbol;
      i.type;
      (n && r) || !a || ((n = (t = m.splitSymbol(a)).scode), (r = t.market)),
        f.StockRouter.routeTo({
          name: "stockdetail",
          query: { market: r, scode: n },
        });
    },
    gotoBatchPage: function (e) {
      var t = e.showPosition,
        o = e.curGroupIndex,
        n = e.groups,
        r = e.allGroupId,
        i = e.xcxversion,
        a = t ? o - 1 : o,
        c = "https://wzq.tenpay.com/mp/v2/#/choose/newbatch?group=0&tabIndex="
          .concat((a = -1 === a ? 0 : a), "&groupid=")
          .concat(
            (null == n ? void 0 : n[a]) && "position" !== n[a].id ? n[a].id : r,
            "&xcxversion="
          )
          .concat(i);
      f.StockBridge.routeTo({
        url: "/pages/additional/webview/index?url=".concat(
          encodeURIComponent(c)
        ),
      });
    },
    gotoSearchPage: function (e) {
      var t = e.groupType,
        o = e.groupId,
        n = {};
      3 == +t && (n.groupId = o),
        f.StockBridge.routeTo({
          url: S.buildUrl("/pages/additional/search/main", n),
        });
    },
    gotoHotPage: function () {
      f.StockBridge.routeTo({
        url: "/pages/additional/webview/index?url=".concat(
          encodeURIComponent(
            "https://wzq.tenpay.com/mp/v2/index.html#/hot?tab=0"
          )
        ),
      });
    },
  };
}
var _ = [],
  E = [],
  G = ["ftDAX30", "spAU9999"],
  j = null,
  L = !1,
  N = null,
  A = "pages/index/index",
  U = { level1: null, level2: null },
  q = {},
  D = !1;
function z(e, t) {
  var n,
    r,
    i = this,
    a = k.useStocksStore(),
    c = b.useViewStore(),
    s = f.computed(function () {
      return c.pageShow;
    }),
    u = f.inject("hqWSHelper");
  f.StockBridge.ENV === f.EnvTypeEnum.MP &&
    (D =
      (null == (r = null == (n = getApp().globalData.detect) ? void 0 : n.env)
        ? void 0
        : r.IS_PCWEIXIN) || !1);
  var l = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return d(
        i,
        null,
        o().mark(function n() {
          var r;
          return o().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (e) {
                    o.next = 2;
                    break;
                  }
                  return o.abrupt("return");
                case 2:
                  return (o.next = 4), y.fetchQTData(e);
                case 4:
                  (r = o.sent) &&
                    Object.keys(r).forEach(function (e) {
                      var o = k.formatQTData(r[e], t);
                      o && a.updateStockListItem(o);
                    });
                case 6:
                case "end":
                  return o.stop();
              }
          }, n);
        })
      );
    },
    p = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        o = e
          .map(function (e) {
            var o = e.chooseSymbol
                ? m.splitSymbol(e.chooseSymbol)
                : { market: e.type, scode: e.scode },
              n = o.market,
              r = o.scode;
            return m.isUSMarket(n)
              ? "t_us".concat(
                  r
                    .replace(/(\.N|\.OQ|\.AM|\.PS|\.OTC)/g, "")
                    .replace(".", "__")
                )
              : m.isHKMarket(n)
              ? m.isIndex(e.stock_type) || a.hkVIP
                ? "r_hk".concat(r)
                : t
                ? 1 == +e.delay
                  ? "hk".concat(r)
                  : "r_hk".concat(r)
                : ""
              : "".concat(m.getSymbol(n, r));
          })
          .filter(function (e) {
            return e;
          })
          .join(",");
      l(o, !0);
    },
    h = function () {
      var e = Object.values(q);
      Array.isArray(e) &&
        (e.map(function (e) {
          var t = e.symbol,
            o = e.data,
            n = m.splitSymbol(t).market,
            r = { chooseSymbol: t },
            i = {
              0: "type",
              1: "name",
              2: "scode",
              3: "price",
              31: "rise",
              32: "rise_per",
              40: "status",
              45: "zsz",
            };
          m.isUSMarket(n)
            ? ((i[54] = "jnzdf"), (i[68] = "xssz"))
            : m.isHKMarket(n)
            ? (i[61] = "jnzdf")
            : m.isHSPlate(n)
            ? (i[50] = "jnzdf")
            : m.isSPMarket(n)
            ? (i[54] = "jnzdf")
            : (i[62] = "jnzdf"),
            Object.keys(o).forEach(function (e) {
              var t = i[e];
              t &&
                ((r[t] = o[e]),
                ("rise_per" === t || "jnzdf" === t) &&
                  !isNaN(r[t]) &&
                  parseFloat(r[t]) > 0 &&
                  (r[t] = "+".concat(r[t])),
                "xssz" === t && r[t] && (r.zsz = r[t]));
            }),
            1 !== Object.keys(r).length && a.updateStockListItem(r);
        }),
        (q = {}),
        f.StockBridge.busEmit(S.HS_WS_RESULT_BUS_KEY, { list: e }));
    },
    v = function (e) {
      return d(
        i,
        null,
        o().mark(function n() {
          var r, i, c, l, p, d, f, v;
          return o().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  if (
                    ((c = []),
                    (l = []),
                    (p = []),
                    e.concat(E).forEach(function (e) {
                      var t = e.chooseSymbol;
                      return c.includes(t)
                        ? null
                        : (c.push(t),
                          "usDJI" !== t
                            ? /^p/.test(t)
                              ? null
                              : m.isUSMarket(e.type)
                              ? ((t = t.replace(
                                  /(\.N|\.OQ|\.AM|\.PS|\.OTC)/g,
                                  ""
                                )),
                                void l.push(
                                  m.isIndex(null == e ? void 0 : e.stock_type)
                                    ? "us.".concat(t.slice(2))
                                    : t
                                ))
                              : void (m.isHKMarket(e.type)
                                  ? a.hkVIP
                                    ? p.push(t)
                                    : m.isIndex(
                                        null == e ? void 0 : e.stock_type
                                      ) && l.push(t)
                                  : l.push(t))
                            : void l.push(m.hackUSSymbol(t)));
                    }),
                    !s.value)
                  ) {
                    o.next = 21;
                    break;
                  }
                  if (!L) {
                    o.next = 6;
                    break;
                  }
                  ((null == l ? void 0 : l.length) ||
                    (null == p ? void 0 : p.length)) &&
                    (null == (r = U.level1) ||
                      r.changeStockList(l, D ? N : null),
                    null == (i = U.level2) ||
                      i.changeStockList(p, D ? N : null, !0)),
                    (o.next = 21);
                  break;
                case 6:
                  return (
                    (L = !0),
                    (f = {
                      topic: "quote_qt",
                      tag: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "30",
                        "31",
                        "32",
                        "40",
                        "45",
                        "68",
                        "50",
                        "54",
                        "61",
                        "62",
                      ],
                      stockList: l,
                      host: (d = void 0),
                    }),
                    N && D && (u.addToGlobalWS(A, N), (N = null)),
                    (o.next = 11),
                    u.getInstance(f, !D)
                  );
                case 11:
                  if (
                    ((U.level1 = o.sent),
                    (U.level1.handleData = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                      Array.isArray(e) &&
                        h &&
                        (e.forEach(function (e) {
                          "quote_qt" === e.topic && (q[e.symbol] = e);
                        }),
                        h());
                    }),
                    (U.level1.pull = function () {
                      D && u.delayToClearWSByPageId(A);
                      var e = getCurrentPages();
                      e &&
                        e.length > 0 &&
                        "pages/index/index" === e[e.length - 1].route &&
                        (null == t || t());
                    }),
                    !a.hkVIP)
                  ) {
                    o.next = 21;
                    break;
                  }
                  return (
                    (v = {
                      topic: "quote_lv2_qt_detail",
                      tag: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "31",
                        "32",
                        "40",
                        "45",
                        "50",
                        "68",
                        "54",
                        "61",
                        "62",
                      ],
                      stockList: p,
                      host: d,
                    }),
                    (o.next = 18),
                    u.getInstance(v, !D, !0)
                  );
                case 18:
                  (U.level2 = o.sent),
                    (U.level2.handleData = function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [];
                      Array.isArray(e) &&
                        h &&
                        (e.forEach(function (e) {
                          q[e.symbol] = e;
                        }),
                        h());
                    }),
                    (U.level2.pull = function () {
                      D && u.delayToClearWSByPageId(A), null == t || t();
                    });
                case 21:
                case "end":
                  return o.stop();
              }
          }, n);
        })
      );
    };
  return {
    subscribe: function (t, o) {
      if (!t) {
        var n = c.visibleIndexRange[a.curGroupId];
        n || (n = c.setVisibleIndexRange(a.curGroupId)),
          (t = a.getFilterList(a.curGroupId).slice(n.start, n.end));
      }
      (_ = t), o && (E = o);
      var r = [],
        i = [];
      t.forEach(function (t) {
        var o = m.splitSymbol(t.chooseSymbol || "").market;
        G.includes(t.chooseSymbol) || (e.isGrayUser && m.isHSPlate(o))
          ? r.push(t)
          : i.push(t);
      });
      try {
        !(function (e, t) {
          clearInterval(j),
            t.length &&
              (function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 3e3;
                clearInterval(j),
                  e &&
                    (j = setInterval(function () {
                      var t = new Date()
                          .toTimeString()
                          .slice(0, 5)
                          .replace(":", ""),
                        o = e
                          .map(function (e) {
                            var o = e.symbol
                                ? m.splitSymbol(e.symbol)
                                : { market: e.type, scode: e.scode },
                              n = o.market,
                              r = o.scode;
                            return m.isUSHQTime(t)
                              ? m.isUSMarket(n)
                                ? "t_us".concat(
                                    r
                                      .replace(
                                        /(\.N|\.OQ|\.AM|\.PS|\.OTC)/g,
                                        ""
                                      )
                                      .replace(".", "__")
                                  )
                                : ""
                              : m.isHKMarket(n)
                              ? m.isIndex(e.stock_type)
                                ? "r_hk".concat(r)
                                : 1 === e.delay
                                ? "hk".concat(r)
                                : ""
                              : m.isUSMarket(n)
                              ? ""
                              : "".concat(m.getSymbol(n, r));
                          })
                          .filter(function (e) {
                            return e;
                          })
                          .join(",");
                      l(o, !0);
                    }, t));
              })(t, 5e3);
        })(0, r);
      } catch (e) {}
      v(i);
    },
    refreshBackData: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _;
      p(e, !0);
    },
    stop: function () {
      (L = !1),
        clearInterval(j),
        D || (u.stop(null, !1), u.stop(null, !0)),
        D &&
          N &&
          (u.addToGlobalWS(A, N), u.delayToClearWSByPageId(A), (N = null));
    },
    refreshSubscribe: function () {
      (L = !1), v(_);
    },
    queryQTData: p,
  };
}
var V = {},
  W = "market-choose-list-refresh",
  Q = "market-choose-hqws-update-stock",
  F = "market-choose-recommend-empty",
  Z = {
    components: {
      Tabbar: function () {
        return "./components/Tabbar.js";
      },
      BasketList: function () {
        return "./components/BasketList.js";
      },
      PortfolioList: function () {
        return "./components/PortfolioList/mp.js";
      },
      GroupPop: function () {
        return "../../../asyncCom/@tencent/wzq-portfolio-sbg/components/batch/GroupPop.js";
      },
      ChooseRecommend: function () {
        return "./node-modules/@tencent/st-choose-recommend/components/recommend/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS11bmlvbi1wb3J0Zm9saW8vbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWNob29zZS1yZWNvbW1lbmQvY29tcG9uZW50cy9yZWNvbW1lbmQvaW5kZXgudnVl;
          }
        );
      },
      MonitoringRemindPop: function () {
        return "../../../asyncCom/@tencent/stock-monitoring-remind/components/MonitoringRemindPop.js";
      },
      CloseMonitoringPop: function () {
        return "../../../asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.js";
      },
    },
    props: {
      premote: {
        type: Object,
        default: function () {
          return null;
        },
      },
      skin: { type: String, default: "white" },
      showPosition: { type: Boolean, default: !1 },
      preload: { type: Object, default: null },
      protocolStatus: { type: String, default: "" },
      titleHeight: { type: Number, default: 44 },
      barHeight: { type: Number, default: 0 },
      showPrivacyPolicyBar: { type: Boolean, default: !1 },
      hkVIP: { type: Boolean, default: !1 },
      redpockets: {
        type: Array,
        default: function () {
          return [];
        },
      },
      searchBarHeight: { type: Number, default: 44 },
      isGrayUser: { type: Boolean, default: !1 },
      isMiniChartHide: { type: Boolean, default: void 0 },
    },
    emits: [
      "show-policy-modal",
      "refreshTabStatusForTrade",
      "afterSwitchTab",
      "setSwiperHeight",
      "reportQianjiGo",
      "dataReady",
      "destroyResource",
      "updateData",
      "switchTab",
      "share-stock",
      "updateHasDefaultChooseAdded",
      "checkUserSubscribe",
    ],
    setup: function (n, r) {
      var i,
        a,
        c,
        s = this,
        u = r.emit;
      u("portfolio-package-ready");
      var l = f.ref(!0),
        p = k.useStocksStore();
      p.initWithLocalData(),
        f.computed(function () {
          var e, t;
          return null ==
            (t = null == (e = p.stockList) ? void 0 : e[p.allGroupId])
            ? void 0
            : t.len;
        }).value && (l.value = !1);
      var x =
          (null == (i = f.getCurrentInstance()) ? void 0 : i.proxy) ||
          f.getCurrentInstance(),
        O = H(n.preload).gotoBatchPage,
        I = (function () {
          var e = k.useStocksStore(),
            t = null,
            o = f.ref({});
          return {
            getPortfolioListShow: function (t, n) {
              return t === e.allGroupId || t === e.curGroupId || o.value[t];
            },
            showLazyTabsChange: function () {
              var n = Object.keys(o.value);
              n.length !== e.groups.length &&
                ((function () {
                  if (e.groups && 0 !== e.groups.length) {
                    var t = {};
                    e.groups.forEach(function (e) {
                      t[e.id] = !1;
                    }),
                      (o.value = t);
                  }
                })(),
                (n = Object.keys(o.value)));
              var r = 0,
                i = Math.ceil(n.length / 2);
              !(function e() {
                if ((t && clearTimeout(t), r < i)) {
                  for (
                    var a = 2 * r, c = Math.min(a + 2, n.length), s = {}, u = a;
                    u < c;
                    u++
                  )
                    s[n[u]] = !0;
                  (o.value = Object.assign({}, o.value, s)),
                    (r += 1),
                    (t = setTimeout(e, 50));
                }
              })();
            },
          };
        })(),
        T = I.getPortfolioListShow,
        C = I.showLazyTabsChange,
        B = (function (e) {
          var t = this,
            n = b.useViewStore(),
            r = w.useMonitoringRemindSwitch(),
            i = r.getSwitchState,
            a = r.updateSwitchState,
            c = f.ref(!1),
            s = f.ref(!1),
            u = f.ref(!1),
            l = null;
          f.watchEffect(function () {
            c.value && f.StockBridge.report("hq.portfolio.monitoring_pop_brow");
          }),
            f.watchEffect(function () {
              s.value &&
                f.StockBridge.report("hq.portfolio.close_monitor_pop_brow");
            });
          var p = function (e) {
              f.StockBridge.ENV === f.EnvTypeEnum.MP
                ? f.wx$1.showToast({ title: e, icon: "none" })
                : f.StockBridge.toast(e, "none");
            },
            h = function (e) {
              return d(
                t,
                null,
                o().mark(function t() {
                  return o().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), a(e);
                          case 3:
                            if (((t.t0 = !!t.sent), !t.t0)) {
                              t.next = 6;
                              break;
                            }
                            t.t0 = (n.setIsMonitoringRemindOpen(e), !0);
                          case 6:
                            return t.abrupt("return", t.t0);
                          case 9:
                            return (
                              (t.prev = 9),
                              (t.t1 = t.catch(0)),
                              t.abrupt("return", !1)
                            );
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 9]]
                  );
                })
              );
            };
          return (
            f.onUnmounted(function () {
              null !== l && (clearTimeout(l), (l = null));
            }),
            {
              getMonitoringRemindOpen: function () {
                return d(
                  t,
                  null,
                  o().mark(function e() {
                    var t;
                    return o().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), i();
                            case 3:
                              return (
                                (t = e.sent),
                                e.abrupt(
                                  "return",
                                  t
                                    ? (n.setIsMonitorRemindGrayUser(
                                        t.isGrayUser
                                      ),
                                      n.setIsMonitoringRemindOpen(t.isOpen),
                                      t.isOpen)
                                    : (n.setIsMonitorRemindGrayUser(!1),
                                      n.setIsMonitoringRemindOpen(!1),
                                      !1)
                                )
                              );
                            case 7:
                              return (
                                (e.prev = 7),
                                (e.t0 = e.catch(0)),
                                e.abrupt(
                                  "return",
                                  (n.setIsMonitorRemindGrayUser(!1),
                                  n.setIsMonitoringRemindOpen(!1),
                                  !1)
                                )
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                );
              },
              changeMonitoringRemindOpen: h,
              isShowMonitorRemindPop: c,
              isShowCloseMonitoringPop: s,
              handleMonitorRemindConfirm: function () {
                return d(
                  t,
                  null,
                  o().mark(function t() {
                    var r;
                    return o().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (u.value) {
                                t.next = 21;
                                break;
                              }
                              return (
                                (t.prev = 1),
                                (u.value = !0),
                                (r = !n.isMonitoringRemindOpen),
                                !1,
                                c.value
                                  ? f.StockBridge.report(
                                      "hq.portfolio.monitoring_pop_open_click"
                                    )
                                  : s.value &&
                                    f.StockBridge.report(
                                      "hq.portfolio.close_monitor_pop_comfirm_click"
                                    ),
                                (t.next = 8),
                                h(r)
                              );
                            case 8:
                              if (!t.sent) {
                                t.next = 12;
                                break;
                              }
                              r &&
                                e &&
                                e("checkUserSubscribe", function (e) {
                                  (u.value = !1), e && p("自选智能盯盘已开启");
                                }),
                                r || ((u.value = !1), p("自选智能盯盘已关闭")),
                                (c.value = !1),
                                (s.value = !1),
                                (t.next = 13);
                              break;
                            case 12:
                              (c.value = !1), (s.value = !1), (u.value = !1);
                            case 13:
                              t.next = 18;
                              break;
                            case 15:
                              (t.prev = 15),
                                (t.t0 = t.catch(1)),
                                (c.value = !1),
                                (s.value = !1),
                                (u.value = !1);
                            case 18:
                              return (
                                (t.prev = 18),
                                null !== l && (clearTimeout(l), (l = null)),
                                (l = setTimeout(function () {
                                  (u.value = !1), (l = null);
                                }, 5e3)),
                                t.finish(18)
                              );
                            case 21:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 15, 18, 21]]
                    );
                  })
                );
              },
              handleMonitoringRemindClick: function () {
                c.value ||
                  s.value ||
                  u.value ||
                  (n.isMonitoringRemindOpen ? (s.value = !0) : (c.value = !0));
              },
              handleMonitorRemindPopClose: function () {
                f.StockBridge.report("hq.portfolio.monitoring_pop_close_click"),
                  (c.value = !1),
                  null !== l && (clearTimeout(l), (l = null)),
                  (u.value = !1);
              },
              handleCloseMonitoringPopCancel: function () {
                f.StockBridge.report(
                  "hq.portfolio.close_monitor_pop_close_click"
                ),
                  (s.value = !1),
                  null !== l && (clearTimeout(l), (l = null)),
                  (u.value = !1);
              },
            }
          );
        })(u),
        M = B.getMonitoringRemindOpen,
        _ = B.isShowMonitorRemindPop,
        E = B.isShowCloseMonitoringPop,
        G = B.handleMonitorRemindConfirm,
        j = B.handleMonitoringRemindClick,
        L = B.handleMonitorRemindPopClose,
        N = B.handleCloseMonitoringPopCancel,
        A = f.ref(null),
        U = f.StockBridge.ENV === f.EnvTypeEnum.MP,
        q = !1,
        D = S.STOCKBASKET_GROUPID,
        V = null,
        Z = !1,
        K = [],
        $ = null,
        Y = null,
        X = null,
        J = null,
        ee = p.curGroupId,
        te = f.ref(!0),
        oe = b.useViewStore(),
        ne = P(),
        re = f.computed(function () {
          return oe.swiperHeight;
        }),
        ie = f.computed(function () {
          return oe.pageShow;
        }),
        ae = f.computed(function () {
          var e, t, o, n;
          return (
            (null == (t = null == (e = p.stockList) ? void 0 : e[p.allGroupId])
              ? void 0
              : t.len) ||
            (null ==
            (n = null == (o = p.stockList) ? void 0 : o[S.STOCKBASKET_GROUPID])
              ? void 0
              : n.len) ||
            te.value ||
            A.value
          );
        }),
        ce = f.computed(function () {
          return p.groups;
        }),
        se = f.computed(function () {
          return p.curGroupIndex;
        }),
        ue = f.computed(function () {
          return p.curGroupId;
        }),
        le = f.computed(function () {
          return p.stockList;
        }),
        pe = f.computed(function () {
          return p.allGroupId;
        }),
        de = f.computed(function () {
          return p.chooseSymbolList;
        });
      oe.setPrivacyPolicyBar(n.showPrivacyPolicyBar),
        oe.setProtocolStatus(n.protocolStatus),
        ne.setSortCaptions(S.SORT_CAPTIONS_PRO);
      var fe = R();
      fe.initHeight();
      var he = function () {
        (Z = !0), q && we();
      };
      f.StockBridge.busOn("common-toggleAdded", he),
        f.watch(
          function () {
            return ue.value;
          },
          function (e) {
            f.nextTick$1(function () {
              Se(e);
            });
          }
        ),
        f.watch(
          function () {
            return se.value;
          },
          function (e) {},
          { immediate: !0 }
        ),
        (A.value = ae.value ? null : S.COMMON_PAGE_STATUS.LOADING),
        f.watch(
          function () {
            return n.showPosition;
          },
          function (e) {
            p.setGroups(void 0, e), p.setCurGroup();
          }
        ),
        f.watch(
          function () {
            return [n.barHeight, n.titleHeight];
          },
          function (e) {
            var o = t(e, 2),
              n = o[0],
              r = o[1],
              i = !1;
            r && ((i = r !== oe.titleHeight), oe.setTitleHeight(r)),
              n && ((i = i || n !== oe.topBarHeight), oe.setTopBarHeight(n)),
              i && fe.setSwiperHeight(x, u);
          },
          { immediate: !0 }
        ),
        f.watch(
          function () {
            return n.hkVIP;
          },
          function (e, t) {
            e && e !== t && (p.setHKVIP(e), e && xe.refreshSubscribe());
          },
          { immediate: !0 }
        ),
        f.watch(
          function () {
            return n.isMiniChartHide;
          },
          function (e, t) {
            void 0 !== e && e !== t && p.setIsMiniChartHide(e);
          },
          { immediate: !0 }
        );
      var ve = function (e) {
          if (!n.isMiniChartHide) {
            var t = p.getFilterList(ue.value),
              o = [];
            if (e) {
              var r = oe.visibleIndexRange[p.curGroupId];
              r || (r = oe.setVisibleIndexRange(p.curGroupId)),
                (o = t.slice(
                  (null == r ? void 0 : r.start) || 0,
                  (null == r ? void 0 : r.end) || 20
                ));
            } else o = t.slice(0, 20);
            o.length &&
              (b.StockMiniChartApi.batchGetMiniMins(o, ue.value),
              f.nextTick$1(function () {
                b.StockMiniChartApi.drawStocksMins(o, ue.value);
              }));
          }
        },
        ge = function (e, t) {
          var r = U
            ? (function (e, t) {
                var o,
                  r = getApp().globalData.prePages || [],
                  i =
                    "pages/quote/quote" ===
                    r[(null == r ? void 0 : r.length) - 1];
                return (
                  e
                    ? (o =
                        V && V.prefetchedStockInfo
                          ? y.queryUserStock(V.prefetchedStockInfo)
                          : n.preload && n.preload.getUserStock
                          ? n.preload.getUserStock
                          : y.queryUserStock())
                    : t || Z || !i
                    ? ((Z = !1), (o = y.queryUserStock()))
                    : (xe.refreshBackData(),
                      xe.subscribe(),
                      ve(!0),
                      u("dataReady")),
                  o
                );
              })(e, t)
            : y.queryUserStock();
          r &&
            r
              .then(function (t) {
                if (0 != +t.code && A.value)
                  A.value = S.COMMON_PAGE_STATUS.ERROR;
                else {
                  var n = e && V && V.prefetchedStockInfo;
                  me(t, e, n),
                    n &&
                      setTimeout(function () {
                        return d(
                          s,
                          null,
                          o().mark(function t() {
                            var r, i;
                            return o().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (
                                        !(null == (r = V.prefetchedStockInfo)
                                          ? void 0
                                          : r.totalFlag)
                                      ) {
                                        t.next = 16;
                                        break;
                                      }
                                      if (!Object.keys(p.symbolMap).length) {
                                        t.next = 14;
                                        break;
                                      }
                                      return (
                                        (t.prev = 2),
                                        (t.next = 5),
                                        y.queryStocksQtData(
                                          Object.keys(p.symbolMap),
                                          Object.keys(p.hkDelaySymbolMap),
                                          V.prefetchedStockInfo
                                        )
                                      );
                                    case 5:
                                      if (0 == +(i = t.sent).code) {
                                        t.next = 8;
                                        break;
                                      }
                                      return t.abrupt(
                                        "return",
                                        ((V.prefetchedStockInfo = null),
                                        void ye({
                                          log: "MONITOR-CHOOSE-INDEX-INIT-FETCHQT-ERROR",
                                          code: null == i ? void 0 : i.code,
                                          msg: "code is not 0",
                                        }))
                                      );
                                    case 8:
                                      me(i, !1, !0),
                                        (V.prefetchedStockInfo = null),
                                        (t.next = 14);
                                      break;
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(2)),
                                        (V.prefetchedStockInfo = null),
                                        ye({
                                          log: "MONITOR-CHOOSE-INDEX-INIT-FETCHQT-ERROR",
                                          code:
                                            null == t.t0 ? void 0 : t.t0.code,
                                          msg:
                                            (null == t.t0
                                              ? void 0
                                              : t.t0.retmsg) ||
                                            (null == t.t0 ? void 0 : t.t0.msg),
                                        });
                                    case 14:
                                      t.next = 17;
                                      break;
                                    case 16:
                                      y.queryUserStock()
                                        .then(function (t) {
                                          if (0 != +t.code)
                                            return (
                                              (V.prefetchedStockInfo = null),
                                              void ye({
                                                log: "MONITOR-CHOOSE-INDEX-INIT-QUERYSTOCK-ERROR",
                                                code:
                                                  null == t ? void 0 : t.code,
                                                msg: "code is not 0",
                                              })
                                            );
                                          me(t, e, n);
                                        })
                                        .catch(function (e) {
                                          (V.prefetchedStockInfo = null),
                                            ye({
                                              log: "MONITOR-CHOOSE-INDEX-INIT-QUERYSTOCK-ERROR",
                                              code: null == e ? void 0 : e.code,
                                              msg:
                                                (null == e
                                                  ? void 0
                                                  : e.retmsg) ||
                                                (null == e ? void 0 : e.msg),
                                            });
                                        });
                                    case 17:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[2, 11]]
                            );
                          })
                        );
                      }, 300);
                }
              })
              .catch(function (o) {
                e && A.value && (A.value = S.COMMON_PAGE_STATUS.ERROR),
                  setTimeout(function () {
                    C(!0);
                  }, 1e3),
                  ye({
                    log: t ? "portfolio_refresh_error" : "portfolio_init_error",
                    isFirst: e,
                    code: null == o ? void 0 : o.code,
                    msg:
                      (null == o ? void 0 : o.retmsg) ||
                      (null == o ? void 0 : o.msg),
                  });
              })
              .finally(function () {
                (l.value = !1),
                  (r = null),
                  f.StockBridge.ENV === f.EnvTypeEnum.MP &&
                    (n.preload.getUserStock = null);
              }),
            f.StockBridge.busEmit("common-updateData");
        },
        me = function (t, o, r) {
          var i;
          if (t) {
            A.value = null;
            var a = k.formatNewUserData(t);
            o && M().catch(function (e) {}),
              a && a.needReauth,
              a &&
                a.recommends &&
                a.recommends.length &&
                a.newUser &&
                ((i = a.grouplist[0].stocklist).push.apply(
                  i,
                  e(a.wzq_recommend)
                ),
                (J = a.recommends),
                ze(!0)),
              p.initOrRefresh({
                res: t,
                needSort: !0,
                fromPreload: r,
                isRefresh: !o,
                showPosition: n.showPosition,
              }),
              o || (je(), b.StockMiniChartApi.refreshCache(ue.value)),
              f.nextTick$1(function () {
                ke(), xe.subscribe(), ve(), qe(p.curGroupId, !1, !0);
              }),
              setTimeout(function () {
                C();
              }, 1e3),
              u("dataReady"),
              y.queryExchangeRate().then(function (e) {
                p.updateRateConfig(e), p.updateAllListRate();
              });
          }
        };
      f.StockBridge.ENV === f.EnvTypeEnum.MP
        ? ((V = getApp().globalData),
          (q =
            (null ==
            (c = null == (a = getApp().globalData.detect) ? void 0 : a.env)
              ? void 0
              : c.IS_PCWEIXIN) || !1),
          V.init(function () {
            ge(!0);
          }))
        : ge(!0);
      var Se = function (e) {
          var t = e;
          if (
            ((t !== S.POSITION_GROUPINFO.id &&
              ee !== S.POSITION_GROUPINFO.id) ||
              u("refreshTabStatusForTrade", { currTabId: t }),
            (ee = t),
            u("afterSwitchTab", t),
            t !== S.POSITION_GROUPINFO.id && t !== S.STOCKBASKET_GROUPID)
          ) {
            be(t), ke(), ve(), xe.subscribe();
            try {
              n.isGrayUser && xe.queryQTData();
            } catch (e) {}
          }
        },
        ke = function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 3e4;
          return d(
            s,
            null,
            o().mark(function n() {
              var r, i, a;
              return o().wrap(
                function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (
                          ((r = ue.value),
                          $ && clearTimeout($),
                          !(i = (p.getCurStockList(r) || [])
                            .map(function (e) {
                              return null == e ? void 0 : e.chooseSymbol;
                            })
                            .join(",")))
                        ) {
                          o.next = 17;
                          break;
                        }
                        return (o.prev = 4), (o.next = 7), y.fetchLabelsData(i);
                      case 7:
                        if ((a = o.sent)) {
                          o.next = 10;
                          break;
                        }
                        return o.abrupt("return");
                      case 10:
                        !1,
                          (!p.allLabelList[r] ||
                            a.length !== p.allLabelList[r].length ||
                            a.some(function (e, t) {
                              var o = p.allLabelList[r][t];
                              return (
                                e.symbol !== o.symbol ||
                                e.abbr_label !== o.abbr_label
                              );
                            })) &&
                            (p.setLabelData(a, r),
                            p.updateStockLabel(a, r),
                            f.nextTick$1(function () {
                              p.setRenderListSections(r, p.getFilterList(r));
                            })),
                          (o.next = 16);
                        break;
                      case 14:
                        (o.prev = 14), (o.t0 = o.catch(4));
                      case 16:
                        ie.value &&
                          ($ = setTimeout(function () {
                            e(t);
                          }, t));
                      case 17:
                      case "end":
                        return o.stop();
                    }
                },
                n,
                null,
                [[4, 14]]
              );
            })
          );
        },
        be = function (e) {
          var t, n, r;
          if (
            e !== S.POSITION_GROUPINFO.id &&
            e !== p.allGroupId &&
            (null == (n = null == (t = p.stockList) ? void 0 : t[e])
              ? void 0
              : n.len) > 0
          ) {
            var i = ((null == (r = p.stockList[e]) ? void 0 : r.list) || [])
              .filter(function (e) {
                return 2 == e.type;
              })
              .map(function (e) {
                return 1 === e.delay
                  ? "hk".concat(e.scode)
                  : "r_hk".concat(e.scode);
              })
              .join(",");
            i.length &&
              f.nextTick$1(function () {
                setTimeout(function () {
                  return d(
                    s,
                    null,
                    o().mark(function e() {
                      var t;
                      return o().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), y.fetchQTData(i);
                            case 2:
                              (t = e.sent) &&
                                Object.keys(t).forEach(function (e) {
                                  var t = k.formatQTData(e, !0);
                                  t && p.updateStockListItem(t);
                                });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                }, 0);
              });
          }
        },
        ye = function (e) {
          var t = e.log,
            o = void 0 === t ? "" : t,
            n = e.code,
            r = e.msg;
          V &&
            V.mpReporter.reportEvent(o, {
              ext3: JSON.stringify({ code: n, msg: r }),
            });
        },
        we = function () {
          ie.value && ge(!1, !0);
        },
        xe = z(n, we);
      f.onMounted(function () {
        f.StockBridge.ENV === f.EnvTypeEnum.MP &&
          setTimeout(function () {
            fe.setSwiperHeight(x, u), oe.showChartChange(!0);
          }, 1e3);
      }),
        f.onBeforeUnmount(function () {
          $ && clearTimeout($),
            Y && clearTimeout(Y),
            f.StockBridge.busOff("common-toggleAdded", he);
        });
      var Pe = f.ref(!1),
        Oe = f.ref(!1),
        Ie = f.ref(!1),
        Te = f.ref(!1),
        Ce = f.ref([]),
        Be = f.computed(function () {
          var e = [];
          return Ce.value && Ce.value.length && ce.value && ce.value.length
            ? (Ce.value.forEach(function (t) {
                ce.value.forEach(function (o) {
                  if (o && "position" !== o.id) {
                    var n = (le.value[o.id] || {}).list,
                      r = void 0 === n ? [] : n;
                    r &&
                      r.length &&
                      r.find(function (e) {
                        return "".concat(e.type, ":").concat(e.scode) === t;
                      }) &&
                      e.push(o.id);
                  }
                });
              }),
              e)
            : e;
        }),
        Me = function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e);
          });
        },
        Re = function (e) {
          return new Promise(function (t, n) {
            return d(
              s,
              null,
              o().mark(function r() {
                var i, a;
                return o().wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          i = 0;
                        case 1:
                          if (!(i < 4)) {
                            o.next = 15;
                            break;
                          }
                          if (((o.prev = 2), !(a = x.$refs[e]))) {
                            o.next = 6;
                            break;
                          }
                          return o.abrupt("return", void t(a));
                        case 6:
                          o.next = 10;
                          break;
                        case 8:
                          (o.prev = 8), (o.t0 = o.catch(2));
                        case 10:
                          return (o.next = 12), Me(100);
                        case 12:
                          i++, (o.next = 1);
                          break;
                        case 15:
                          n(null);
                        case 16:
                        case "end":
                          return o.stop();
                      }
                  },
                  r,
                  null,
                  [[2, 8]]
                );
              })
            );
          });
        },
        He = function (e) {
          e &&
            e.length &&
            ((Ce.value = e),
            (Pe.value = !0),
            Re("groupListPop").then(function (e) {
              e.showMoveStocks("add");
            }));
        },
        _e = function (e) {
          if (e && e.length) {
            var t = ce.value[se.value] || {};
            (Pe.value = !0),
              Re("groupListPop").then(function (o) {
                o.showDelStocks(1 == +t.type || 2 == +t.type, e);
              });
          }
        },
        Ee = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = e.map(function (e) {
              var t = m.splitSymbol(e.symbol).market;
              return { chooseSymbol: e.symbol, type: t };
            });
          (K.length && t.length && K.join(",") === t.join(",")) ||
            ((K = t), xe.subscribe("", K));
        },
        Ge = function (e) {
          var t = e.empty;
          (te.value = t), je();
        },
        je = function () {
          var e, t;
          if (!te.value) {
            var o =
              (null == (t = null == (e = le.value) ? void 0 : e[S.ALL_GROUP_ID])
                ? void 0
                : t.list) || [];
            o.length &&
              f.StockBridge.busEmit(S.HS_WS_RESULT_BUS_KEY, {
                list: o,
                isInit: !0,
              });
          }
        },
        Le = function (e) {
          var t = e || {},
            o = t.name,
            n = t.zdf,
            r = +(n && n.replace("+", "").replace("%", "")),
            i = Math.abs(r),
            a = n.includes("%") ? "" : "%";
          return i <= 2
            ? "「".concat(o, "」涨跌幅：").concat(n).concat(a)
            : i <= 5
            ? "「"
                .concat(o, "」")
                .concat(parseFloat(r) > 0 ? "大涨" : "大跌", "：")
                .concat(n)
                .concat(a)
            : "「"
                .concat(o, "」")
                .concat(parseFloat(r) > 0 ? "暴涨" : "暴跌", "：")
                .concat(n)
                .concat(a);
        },
        Ne = function () {
          oe.setLongPressIndexConf(ue.value, -1);
        };
      f.StockBridge.busOn("market-batch-stock", He),
        f.StockBridge.busOn("market-delete-stock", _e),
        f.StockBridge.busOff(W, we),
        f.StockBridge.busOn(W, we),
        f.StockBridge.busOff(Q, Ee),
        f.StockBridge.busOn(Q, Ee),
        f.StockBridge.busOff(F, Ge),
        f.StockBridge.busOn(F, Ge);
      var Ae = !1,
        Ue = null,
        qe = function (e, t, o) {
          var n = p.groups.filter(function (t) {
              return t.id === e;
            })[0],
            r = "self";
          1 == n.type
            ? (r = "all")
            : 2 == n.type
            ? ("沪深" == n.name && (r = "ashare"),
              "港股" == n.name && (r = "hkshare"),
              "美股" == n.name && (r = "usshare"),
              "ETF" == n.name && (r = "etf"),
              "场外基金" == n.name && (r = "cwjj"),
              "持仓" == n.name && (r = "position"))
            : e === D
            ? (r = "basket")
            : "position" === e && (r = "position"),
            X !== r &&
              ((X = r),
              f.StockBridge.report(
                "base.choose-list.".concat(r, "_group_brow")
              ),
              o ||
                (t
                  ? f.StockBridge.report(
                      "base.choose-list.".concat(r, "_group_scroll")
                    )
                  : f.StockBridge.report(
                      "base.choose-list.".concat(r, "_group_click")
                    )));
        },
        De = f.ref(!1),
        ze = function (e) {
          if (e && J) {
            var t = J.map(function (e) {
              return "".concat(e.type, ":").concat(e.scode);
            });
            f.StockBridge.report("hq.portfolio.empty_recomend_stocks_add", {
              fchannel_id_fm_i: "Ii300p000l139",
              stocklist: t.join(),
            }),
              y.followBatchStock(t, "1", "saa").then(function () {
                we();
              });
          }
        };
      return {
        isMpLite: !1,
        isH5Pro: !1,
        isMPPro: !0,
        tabStatus: A,
        groups: ce,
        curGroupId: ue,
        curGroupIndex: se,
        chooseSymbolList: de,
        pageShow: ie,
        isAllStock: ae,
        swiperHeight: re,
        stockBasketId: D,
        allGroupId: pe,
        handleActivated: function (e) {
          oe.setPageShow(!0),
            f.StockBridge.busOn("market-batch-stock", He),
            f.StockBridge.busOn("market-delete-stock", _e),
            f.StockBridge.busOn(W, we),
            f.StockBridge.busOn(Q, Ee),
            f.StockBridge.busOn(F, Ge),
            ge(e),
            e || M().catch(function (e) {}),
            f.nextTick$1(function () {
              fe.setSwiperHeight(x, u);
            });
        },
        beforeRouteLeave: function () {
          oe.setPageShow(!1),
            f.StockBridge.busOff("market-batch-stock", He),
            f.StockBridge.busOff("market-delete-stock", _e),
            f.StockBridge.busOff(W, we),
            f.StockBridge.busOff(Q, Ee),
            f.StockBridge.busOff(F, Ge),
            f.StockBridge.busOff("market-choose-new-user-add-stock", ze),
            Ne(),
            xe.stop(),
            b.StockMiniChartApi.stopAutoUpdate(),
            u("destroyResource");
        },
        gotoBatch: function () {
          f.StockBridge.report("choose.batch.toprightbtn"),
            (Z = !0),
            O({
              showPosition: n.showPosition,
              curGroupIndex: se.value,
              groups: p.groups,
              allGroupId: p.allGroupId,
              xcxversion: (null == V ? void 0 : V.XCXVERSION) || "",
            });
        },
        handleSwiperChange: function (e) {
          var t,
            o = e.detail.current,
            n = void 0 === o ? 0 : o;
          p.curGroupId !== (null == (t = ce.value[n]) ? void 0 : t.id) &&
            "touch" === e.detail.source &&
            (p.setCurTabIndex(n),
            f.nextTick$1(function () {
              Y && clearTimeout(Y),
                (Y = setTimeout(function () {
                  p.setCurGroup(void 0, n), qe(p.curGroupId, !0);
                }, 0));
            }));
        },
        onSwiperAnimationFinish: function () {
          return d(
            s,
            null,
            o().mark(function e() {
              var t;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((Ae = !1), "position" !== p.curGroupId)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), Re("stocklist".concat(Ue));
                    case 4:
                      (t = e.sent) &&
                        ((t = t[0] || t),
                        setTimeout(function () {
                          t.refresherEnabled = !0;
                        }, 0));
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        },
        onSwiperTransition: function () {
          return d(
            s,
            null,
            o().mark(function e() {
              var t;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!Ae) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (Ae = !0),
                        (Ue = p.curGroupId),
                        (e.next = 5),
                        Re("stocklist".concat(Ue))
                      );
                    case 5:
                      (t = e.sent) &&
                        (t = t[0] || t).pullEnd &&
                        (t.pullEnd(),
                        setTimeout(function () {
                          t.refresherEnabled = !1;
                        }, 0));
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        },
        isGroupPopShow: Pe,
        containGroups: Be,
        addStockToGroup: function (e) {
          return d(
            s,
            null,
            o().mark(function t() {
              var n;
              return o().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e) {
                          t.next = 16;
                          break;
                        }
                        if (Oe.value) {
                          t.next = 14;
                          break;
                        }
                        return (
                          (Oe.value = !0),
                          (t.prev = 3),
                          (t.next = 6),
                          y.followBatchStock(Ce.value, e, "sa")
                        );
                      case 6:
                        (n = t.sent) && 0 == +n.code
                          ? (f.StockBridge.toast("添加成功", "success", 1e3),
                            (Ce.value = null),
                            we(),
                            f.StockBridge.report("base.choose-list.addtogroup"))
                          : f.StockBridge.toast(
                              (n && n.retmsg) || "添加失败",
                              "none"
                            ),
                          (t.next = 13);
                        break;
                      case 10:
                        (t.prev = 10),
                          (t.t0 = t.catch(3)),
                          f.StockBridge.toast("添加失败", "none");
                      case 13:
                        Oe.value = !1;
                      case 14:
                        t.next = 17;
                        break;
                      case 16:
                        f.StockBridge.toast("添加成功", "success", 1e3);
                      case 17:
                        Ne(),
                          Re("groupListPop").then(function (e) {
                            e.close("move");
                          });
                      case 18:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[3, 10]]
              );
            })
          );
        },
        addGroup: function (e, t) {
          return d(
            s,
            null,
            o().mark(function n() {
              var r;
              return o().wrap(
                function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (Ie.value) {
                          o.next = 13;
                          break;
                        }
                        return (
                          (Ie.value = !0),
                          (o.prev = 2),
                          (o.next = 5),
                          y.editGroup({ id: (t && t.id) || "", name: e })
                        );
                      case 5:
                        (r = o.sent) && 0 == +r.code
                          ? (f.StockBridge.toast(
                              t ? "修改成功" : "添加成功",
                              "success",
                              1e3
                            ),
                            we(),
                            f.StockBridge.report(
                              t
                                ? "base.choose-batch.group.modify"
                                : "base.choose-batch.group.add"
                            ))
                          : f.StockBridge.toast(
                              (r && r.retmsg) || (t ? "修改失败" : "添加失败"),
                              "none"
                            ),
                          (o.next = 12);
                        break;
                      case 9:
                        (o.prev = 9),
                          (o.t0 = o.catch(2)),
                          f.StockBridge.toast(
                            t ? "修改失败" : "添加失败",
                            "none"
                          );
                      case 12:
                        Ne(),
                          (Ie.value = !1),
                          Re("groupListPop").then(function (e) {
                            e.close("add");
                          });
                      case 13:
                      case "end":
                        return o.stop();
                    }
                },
                n,
                null,
                [[2, 9]]
              );
            })
          );
        },
        closeGroupPop: function () {
          Ne();
        },
        delUserStock: function (e, t) {
          return d(
            s,
            null,
            o().mark(function n() {
              var r, i;
              return o().wrap(
                function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (!Te.value) {
                          o.next = 2;
                          break;
                        }
                        return o.abrupt("return");
                      case 2:
                        if (
                          ((r = ue.value),
                          e && (r = p.allGroupId),
                          !(r && t && t.length))
                        ) {
                          o.next = 16;
                          break;
                        }
                        return (
                          (Te.value = !0),
                          (o.prev = 5),
                          (o.next = 8),
                          y.batchDelStock(t.join(","), r)
                        );
                      case 8:
                        (i = o.sent) && 0 == +i.code
                          ? (we(),
                            f.StockBridge.toast("删除成功", "success", 1e3))
                          : f.StockBridge.toast(
                              (i && i.retmsg) || "删除失败",
                              "none"
                            ),
                          (o.next = 15);
                        break;
                      case 12:
                        (o.prev = 12),
                          (o.t0 = o.catch(5)),
                          f.StockBridge.toast("删除失败", "none");
                      case 15:
                        Ne(),
                          (Te.value = !1),
                          Re("groupListPop").then(function (e) {
                            e.close("delstock");
                          });
                      case 16:
                      case "end":
                        return o.stop();
                    }
                },
                n,
                null,
                [[5, 12]]
              );
            })
          );
        },
        refresh: we,
        showPrivacyPolicyModal: function () {
          u("show-policy-modal");
        },
        goLandscape: function () {
          var e = "/pages/landscape/landscape?groupId=".concat(
              "1000" === ue.value ? p.allGroupId : ue.value
            ),
            t = P().sortInfo,
            o = void 0 === t ? {} : t,
            n = o.order,
            r = o.orderBy;
          void 0 !== n &&
            r &&
            (e = "".concat(e, "&order=").concat(n, "&orderBy=").concat(r)),
            f.wx$1.navigateTo({ url: e, complete: function () {} });
        },
        getPortfolioListShow: T,
        retryData: function () {
          ge(!0);
        },
        handleReportQianjiGo: function () {
          for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
            t[o] = arguments[o];
          u.apply(void 0, ["reportQianjiGo"].concat(t)), qe(p.curGroupId);
        },
        mpTouchstartView: function () {
          Ne();
        },
        handleShareStock: function (e) {
          return d(
            s,
            null,
            o().mark(function t() {
              var n, r, i, a, c;
              return o().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = m.splitSymbol(e.symbol)),
                        (r = n.market),
                        (i = n.scode),
                        (a = (function (e) {
                          var t,
                            o = function (e) {
                              return isNaN(e)
                                ? e
                                : parseFloat(e) >= 1e5
                                ? "10万+"
                                : "".concat(h.utils.bigNumberToText(e, "", 1));
                            },
                            n = h.utils.splitSymbol(e.symbol),
                            r = n.market,
                            i = n.scode,
                            a = e.zde && parseFloat(e.zde.replace("+", ""));
                          return (
                            (t =
                              a > 0
                                ? "#e63535"
                                : a < 0
                                ? "#1CAA3C"
                                : "#7a8499"),
                            [
                              {
                                type: "image",
                                url: "https://st.gtimg.com/design/51dc7442ef4d401f0bc296c20f6272fc.png",
                                x: 0,
                                y: 0,
                              },
                              {
                                type: "image",
                                url: "".concat(
                                  v
                                    .transMarketIcon(r, e.stocktype, i)
                                    .replace(".svg", ".png")
                                ),
                                x: 24,
                                y: 38,
                                width: 28,
                                height: 20,
                              },
                              {
                                type: "text",
                                text: "".concat(
                                  g.ShareUtil.shortString(e.name, 20)
                                ),
                                fontSize: "34",
                                color: "#262E40",
                                fontWeight: 500,
                                x: 64,
                                y: 34,
                              },
                              {
                                type: "text",
                                text: "".concat(e.price),
                                fontSize: "72",
                                color: t,
                                x: 24,
                                y: 115,
                              },
                              {
                                type: "text",
                                text: ""
                                  .concat(e.zde, "   ")
                                  .concat(e.zdf, "%"),
                                fontSize: "32",
                                color: t,
                                x: 24,
                                y: 210,
                              },
                              {
                                type: "text",
                                text: "评论",
                                fontSize: "24",
                                color: "rgba(38, 46, 64, .6)",
                                fontWeight: 400,
                                x: 24,
                                y: 285,
                              },
                              {
                                type: "text",
                                text: "加自选",
                                fontSize: "24",
                                color: "rgba(38, 46, 64, .6)",
                                fontWeight: 400,
                                x: 212,
                                y: 285,
                              },
                              {
                                type: "text",
                                text: "".concat(o(e.comment)),
                                fontSize: "28",
                                color: "#262E40",
                                x: 24,
                                y: 330,
                              },
                              {
                                type: "text",
                                text: "".concat(o(e.zixuan)),
                                fontSize: "28",
                                color: "#262E40",
                                x: 212,
                                y: 330,
                              },
                            ]
                          );
                        })(e)),
                        (t.next = 6),
                        g.ShareUtil.renderToImage(a)
                      );
                    case 6:
                      return (
                        (c = t.sent),
                        t.abrupt("return", {
                          title: Le(e),
                          path: "/pages/quote/quote?market="
                            .concat(r, "&scode=")
                            .concat(i, "&stockType=")
                            .concat(e.stocktype, "&stat=OiW00p000h028"),
                          imageUrl: c,
                        })
                      );
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
        },
        setSwiperHeight: fe.setSwiperHeight,
        isLoadingShow: l,
        mpSetSwiperHeight: function (e) {
          fe.setSwiperHeight(x, u, e);
        },
        reportSwitchTab: qe,
        isMP: U,
        isPc: q,
        isRefreshLoadingShow: De,
        pcRefresh: function () {
          De.value = !0;
          var e = setTimeout(function () {
            (De.value = !1), clearTimeout(e);
          }, 200);
          we();
        },
        recommendEmpty: te,
        isShowMonitorRemindPop: _,
        isShowCloseMonitoringPop: E,
        handleMonitorRemindConfirm: G,
        handleMonitoringRemindClick: j,
        handleMonitorRemindPopClose: L,
        handleCloseMonitoringPopCancel: N,
      };
    },
  };
Array ||
  (
    f.resolveComponent("tabbar") +
    f.resolveComponent("st-status") +
    f.resolveComponent("BasketList") +
    f.resolveComponent("PortfolioList") +
    f.resolveComponent("choose-recommend") +
    f.resolveComponent("group-pop") +
    f.resolveComponent("MonitoringRemindPop") +
    f.resolveComponent("CloseMonitoringPop")
  )(),
  "function" == typeof V && V(Z);
var K = f._export_sfc(Z, [
  [
    "render",
    function (e, t, o, n, r, i) {
      return f.e(
        { a: n.isAllStock },
        n.isAllStock
          ? f.e(
              {
                b: f.o(n.reportSwitchTab, 1389),
                c: f.o(n.handleReportQianjiGo, 1390),
                d: f.p({
                  "page-show": n.pageShow,
                  "basket-red-point": o.premote,
                }),
                e: f.o(function () {
                  return n.gotoBatch && n.gotoBatch.apply(n, arguments);
                }, 1391),
                f: n.isMPPro && n.isPc,
              },
              n.isMPPro && n.isPc
                ? {
                    g: n.isRefreshLoadingShow ? 1 : "",
                    h: f.o(function () {
                      return n.pcRefresh && n.pcRefresh.apply(n, arguments);
                    }, 1392),
                  }
                : {}
            )
          : {},
        { i: n.isAllStock },
        n.isAllStock
          ? {
              j: f.f(n.groups, function (e, t, r) {
                return f.e(
                  n.tabStatus && n.isMP
                    ? {
                        a: f.o(n.retryData, 1393, e.id + t),
                        b: "54e20fad-1-" + r,
                        c: f.p({ type: n.tabStatus }),
                      }
                    : {},
                  { d: "position" === e.id },
                  "position" === e.id
                    ? {}
                    : e.id === n.stockBasketId &&
                      n.getPortfolioListShow(n.stockBasketId, t)
                    ? {
                        f: "54e20fad-2-" + r,
                        g: f.p({
                          "tab-show": n.curGroupId === n.stockBasketId,
                          "page-show": n.pageShow,
                          "show-privacy-policy-bar": o.showPrivacyPolicyBar,
                          "group-index": t,
                          skin: o.skin,
                        }),
                      }
                    : n.getPortfolioListShow(e.id, t)
                    ? f.e(
                        {
                          i: n.isMPPro && (o.showPosition ? 1 === t : 0 === t),
                        },
                        n.isMPPro && (o.showPosition ? 1 === t : 0 === t)
                          ? {
                              j: f.w(
                                function (e, t, o) {
                                  var n = e.tab,
                                    i = e.isCurrent,
                                    a = e.len,
                                    c = e.slideIndex;
                                  return {
                                    a: f.r(
                                      "yy-portrait-guideapply-card",
                                      {
                                        tab: n,
                                        isCurrent: i,
                                        len: a,
                                        slideIndex: c,
                                      },
                                      r
                                    ),
                                    b: o,
                                    c: t,
                                  };
                                },
                                {
                                  name: "after-stock-list",
                                  path: "j[" + r + "].j",
                                  vueId: "54e20fad-3-" + r,
                                }
                              ),
                              k: "yy-portrait-guideapply-card-" + r,
                            }
                          : {},
                        {
                          l: f.sr("stocklist" + e.id, "54e20fad-3-" + r, {
                            f: 1,
                          }),
                          m: "stocklist" + e.id,
                          n: f.o(n.refresh, 1394, e.id + t),
                          o: f.o(n.showPrivacyPolicyModal, 1395, e.id + t),
                          p: f.o(n.handleMonitoringRemindClick, 1396, e.id + t),
                          q: "54e20fad-3-" + r,
                          r: f.p({
                            "group-id": e.id,
                            "group-index": t,
                            "protocol-status": o.protocolStatus,
                            "show-privacy-policy-bar": o.showPrivacyPolicyBar,
                            "group-type": e.type,
                            redpockets: o.redpockets,
                            "show-position": o.showPosition,
                            skin: o.skin,
                            recommendEmpty: n.recommendEmpty,
                            "is-loading-show": n.isLoadingShow,
                            "is-all-stock": n.isAllStock,
                            isGrayUser: o.isGrayUser,
                          }),
                        }
                      )
                    : {},
                  {
                    e:
                      e.id === n.stockBasketId &&
                      n.getPortfolioListShow(n.stockBasketId, t),
                    h: n.getPortfolioListShow(e.id, t),
                    s: e.id + t,
                    t: e.id === n.groups[0].id,
                    v: e.id === n.groups[n.groups.length - 1].id,
                  }
                );
              }),
              k: n.tabStatus && n.isMP,
              l: "".concat(n.swiperHeight, "px"),
              m: n.curGroupIndex,
              n: f.o(function () {
                return (
                  n.handleSwiperChange &&
                  n.handleSwiperChange.apply(n, arguments)
                );
              }, 1397),
              o: f.o(function () {
                return (
                  n.mpTouchstartView && n.mpTouchstartView.apply(n, arguments)
                );
              }, 1398),
              p: f.o(function () {
                return (
                  n.onSwiperTransition &&
                  n.onSwiperTransition.apply(n, arguments)
                );
              }, 1399),
              q: f.o(function () {
                return (
                  n.onSwiperAnimationFinish &&
                  n.onSwiperAnimationFinish.apply(n, arguments)
                );
              }, 1400),
            }
          : n.chooseSymbolList
          ? {
              s: f.p({
                realId: "1",
                isCurrent: !0,
                scodeList: n.chooseSymbolList,
                protocolStatus: o.protocolStatus,
              }),
              t: "".concat(n.swiperHeight, "px"),
            }
          : {},
        { r: n.chooseSymbolList, v: n.isGroupPopShow },
        n.isGroupPopShow
          ? {
              w: f.sr("groupListPop", "54e20fad-5"),
              x: f.o(n.addStockToGroup, 1401),
              y: f.o(n.addGroup, 1402),
              z: f.o(n.delUserStock, 1403),
              A: f.o(n.closeGroupPop, 1404),
              B: f.p({
                "contain-stocks-group-id": n.containGroups,
                groups: n.groups,
              }),
            }
          : {},
        { C: n.isShowMonitorRemindPop },
        n.isShowMonitorRemindPop
          ? {
              D: f.o(n.handleMonitorRemindPopClose, 1405),
              E: f.o(n.handleMonitorRemindConfirm, 1406),
              F: f.p({ enableTheme: !0 }),
            }
          : {},
        { G: n.isShowCloseMonitoringPop },
        n.isShowCloseMonitoringPop
          ? {
              H: f.sr("closeMonitoringPop", "54e20fad-7"),
              I: f.o(n.handleMonitorRemindConfirm, 1407),
              J: f.o(n.handleCloseMonitoringPopCancel, 1408),
              K: f.p({ enableTheme: !0 }),
            }
          : {},
        { L: f.n({ "h5-pro": n.isH5Pro, "mp-pro": n.isMPPro }) }
      );
    },
  ],
  ["__scopeId", "data-v-54e20fad"],
]);
wx.createComponent(K);
var $ = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.CHOOSE_BATCH = { key: "choose.batch" }),
  (exports.CHOOSE_BOTTOM = { key: "base.choose-list.set-bottom" }),
  (exports.CHOOSE_CANCEL_TOP = { key: "choose.cancel_top" }),
  (exports.CHOOSE_CLICK_STOCK = { key: "choose.click_stock" }),
  (exports.CHOOSE_GROUP = { key: "base.choose-list.choose.group" }),
  (exports.CHOOSE_LONG_TAP = { key: "choose.long_tap" }),
  (exports.CHOOSE_TOP = { key: "choose.top" }),
  (exports.CHOOSE_TRIGGER_TOP_SEARCH = { key: "choose.trigger_top_search" }),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS11bmlvbi1wb3J0Zm9saW8vSW5kZXgudnVl =
    $),
  (exports.useCaptionStore = P),
  (exports.useJumpPagesHook = H),
  (exports.usePortfolioViewHook = R),
  (exports.useSubscribeHook = z);
