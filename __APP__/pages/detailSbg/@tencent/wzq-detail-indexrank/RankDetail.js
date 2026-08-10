var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, i);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  u = require("../../../../common/vendor.js"),
  l = require("../stock-hq-data/index.js"),
  s = require("api/temp.js"),
  d = require("../stock-hq-core/utils/f2-fit/tool.js"),
  p = require("api/const.js"),
  f = u.defineComponent({
    components: {
      NoData: function () {
        return "./components/NoData.js";
      },
      MarketIcon: function () {
        return "./components/MarketIcon.js";
      },
      status: function () {
        return "../../../../node-modules/@tencent/st-status/mp/index.js";
      },
    },
    props: { symbol: String, skin: String, type: String },
    setup: function (r, f) {
      var m = this,
        v = f.emit,
        h = u.getCurrentInstance().proxy || u.getCurrentInstance(),
        g = ["mpwzq", "mpweapp"].includes("mpweapp"),
        y = ["mpwzq", "wzqlight"].includes("mpweapp"),
        k = u.ref(!1),
        b = u.ref(!1),
        S = u.ref(
          y
            ? ["zxj", "zdf"]
            : ["cfgHS", "cfgCS"].includes(r.type)
            ? ["zxj", "zdf", "hsl"]
            : ["cfgUS", "north", "south", "etf"].includes(r.type)
            ? ["zxj", "zdf"]
            : ["zxj", "zdf", "turnover"]
        ),
        T = u.ref([]),
        w = u.ref(1),
        x = u.ref(!0),
        _ = u.ref(p.COMMON_PAGE_STATUS.LOADING),
        q = u.ref({
          zxj: ["最新价", "price"],
          zdf: ["涨跌幅", "priceRatio"],
          hsl: ["换手率", "exchange"],
          turnover: ["成交额", "turnover"],
        }),
        M = u.ref(0),
        j = u.ref(0),
        z = l.utils.splitSymbol(r.symbol).market,
        H = u.ref(
          l.utils.isHKMarket(z) &&
            !u.StockBridge.getStorage("hideHkMarketTips") &&
            "north" !== r.type
        ),
        I = function () {
          h.interval && clearInterval(h.interval);
        },
        C = function () {
          var e = new Date().toTimeString().slice(0, 5).replace(":", "");
          (((l.utils.isHSMarket(z) ||
            l.utils.isBJMarket(z) ||
            l.utils.isCSIndex(z)) &&
            s.isHSTradeTime(e)) ||
            (l.utils.isUSMarket(z) && s.isUSTradeTime(e))) &&
            (h.interval && clearInterval(h.interval),
            (h.interval = setInterval(function () {
              c(
                m,
                null,
                t().mark(function e() {
                  var r, n, o, a, i, c, u;
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), d.getEleInfo("#cfg-rankList", h);
                        case 2:
                          return (
                            (n = e.sent),
                            (o = n.top),
                            (a = n.height),
                            h.itemHeight ||
                              (h.itemHeight = T.value.length
                                ? a / T.value.length
                                : 75),
                            (i = {
                              sort_type: q.value[S.value[w.value]][1],
                              direct: x.value ? "down" : "up",
                              offset: Math.floor(Math.abs(o) / h.itemHeight),
                              count: Math.ceil(h.screenHeight / h.itemHeight),
                            }),
                            (e.next = 9),
                            L(i)
                          );
                        case 9:
                          0 == +(null == (c = e.sent) ? void 0 : c.code) &&
                            c.data &&
                            (null == (r = c.data.rank_list)
                              ? void 0
                              : r.length) &&
                            T.value &&
                            ((u = new Map(
                              c.data.rank_list.map(function (e) {
                                return [e.code, e];
                              })
                            )),
                            (T.value = T.value.map(function (e) {
                              return u.get(e.code) || e;
                            })));
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
            }, 5e3)));
        },
        L = function (t) {
          var c = "",
            s = (function (t, r) {
              for (var c in r || (r = {})) o.call(r, c) && i(t, c, r[c]);
              if (n) {
                var u,
                  l = e(n(r));
                try {
                  for (l.s(); !(u = l.n()).done; ) {
                    c = u.value;
                    a.call(r, c) && i(t, c, r[c]);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              }
              return t;
            })({ source: y ? "mini_h5" : "wzq" }, t);
          return (
            (s = Object.keys(s)
              .map(function (e) {
                return "".concat(e, "=").concat(s[e]);
              })
              .join("&")),
            l.utils.isHSMarket(z) ||
            l.utils.isBJMarket(z) ||
            "north" === r.type ||
            "cfgHS" === r.type
              ? (c = ""
                  .concat(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/rank/hs/getBoardRankList",
                    "?board_code="
                  )
                  .concat(r.symbol, "&_appver=11.11&")
                  .concat(s))
              : l.utils.isHKMarket(z)
              ? (c = ""
                  .concat(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/rank/hk/getList",
                    "?board_type="
                  )
                  .concat(r.symbol, "&")
                  .concat(s))
              : l.utils.isUSMarket(z) && "cfgUS" === r.type
              ? (c = ""
                  .concat(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/rank/us/getList",
                    "?board_type="
                  )
                  .concat(r.symbol, "&")
                  .concat(s))
              : l.utils.isUSMarket(z) && "etf" === r.type
              ? (c = ""
                  .concat(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/rank/us/getList",
                    "?board_type="
                  )
                  .concat(r.symbol, "_ETF&sort_type=")
                  .concat(t.sortType, "&direct=")
                  .concat(t.direct))
              : l.utils.isCSIndex(z) &&
                (c = ""
                  .concat(
                    "https://proxy.finance.qq.com/cgi/cgi-bin/rank/constituent_stock/getList",
                    "?code="
                  )
                  .concat(r.symbol, "&")
                  .concat(s)),
            new Promise(function (e, t) {
              u.StockBridge.request(
                c,
                u.RequestTypeEnum.GET,
                {},
                { forceCallback: !0, timeout: 6e3 }
              )
                .then(function (t) {
                  0 === t.code &&
                    t.data &&
                    Array.isArray(t.data.rank_list) &&
                    (t.data.rank_list = t.data.rank_list.map(function (e) {
                      var t = l.utils.splitSymbol(e.code).market;
                      return (
                        (e.fontSize = D(e.name)),
                        (e.iconType = t),
                        (e.formatCode = l.utils.trimScode(e.code.slice(2))),
                        (e.formatZdf = +e.zdf > 0 ? "+".concat(e.zdf) : e.zdf),
                        (e.formatTurnover = l.utils.bigNumberToText(
                          e.turnover
                        )),
                        e
                      );
                    })),
                    e(t);
                })
                .catch(function () {
                  0 === T.value.length &&
                    ((_.value = p.COMMON_PAGE_STATUS.ERROR), I()),
                    t();
                });
            })
          );
        },
        O = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return c(
            m,
            null,
            t().mark(function r() {
              var n, o, a, i, c, u;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (k.value) {
                          t.next = 15;
                          break;
                        }
                        return (
                          (k.value = !0),
                          (t.prev = 2),
                          (n = {
                            sort_type: q.value[S.value[w.value]][1],
                            direct: x.value ? "down" : "up",
                            offset: e ? T.value.length : 0,
                          }),
                          (t.next = 6),
                          L(n)
                        );
                      case 6:
                        0 === (o = t.sent).code &&
                          o.data &&
                          ((j.value = o.data.total),
                          (a = o.data.rank_list || []),
                          (i = a.map(function (e) {
                            var t = l.utils.splitSymbol(e.code).market;
                            return (
                              l.utils.isHKMarket(t) &&
                                (e.isShowDelay =
                                  T.value.length >= 20 || a.length >= 20),
                              e
                            );
                          })),
                          e
                            ? ((c = new Set(
                                T.value.map(function (e) {
                                  return e.code;
                                })
                              )),
                              (u = i.filter(function (e) {
                                return !c.has(e.code);
                              })),
                              (T.value = T.value.concat(u)))
                            : (T.value = i),
                          T.value.length === j.value && (_.value = "")),
                          (t.next = 12);
                        break;
                      case 10:
                        (t.prev = 10), (t.t0 = t.catch(2));
                      case 12:
                        return (
                          (t.prev = 12),
                          (k.value = !1),
                          (b.value = !0),
                          t.finish(12)
                        );
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                null,
                [[2, 10, 12, 15]]
              );
            })
          );
        },
        D = function (e) {
          return g.value
            ? e.length <= 12
              ? "0.8rem"
              : e.length <= 16
              ? 0.8 - 0.06 * (e.length - 12) + "rem"
              : "0.56rem"
            : e.length <= 12
            ? "0.35rem"
            : e.length <= 16
            ? 0.4 - 0.03 * (e.length - 12) + "rem"
            : "0.28rem";
        },
        B = null;
      return (
        u.onActivated(function () {
          h.$route.query.symbol !== r.symbol && O(), C();
        }),
        u.onDeactivated(function () {
          I();
        }),
        u.onMounted(function () {
          (h.screenHeight = g
            ? (
                (u.wx$1.getWindowInfo && u.wx$1.getWindowInfo()) ||
                u.wx$1.getSystemInfoSync()
              ).screenHeight
            : document.body.clientHeight),
            (T.value = []),
            O(),
            C(),
            u.StockBridge.report("hq.detail.cfg.detail_brow");
        }),
        u.onBeforeUnmount(function () {
          I(), (T.value = []), B && (clearTimeout(B), (B = null));
        }),
        {
          isMp: g,
          isLite: y,
          firstLoaded: b,
          orderTypes: S,
          list: T,
          total: j,
          orderIndex: w,
          orderDown: x,
          error: _,
          cols: q,
          scrollTop: M,
          showHkMarketTips: H,
          changeOrder: function (e) {
            w.value === e
              ? (x.value = !x.value)
              : ((w.value = e), (x.value = !0)),
              v("changeSort"),
              O(),
              u.StockBridge.report(
                "hq.index_detail.".concat(S.value[e], "_order")
              );
          },
          retryTab: function () {
            v("refreshTab"), (_.value = ""), (b.value = !1), O(), C();
          },
          gotoDetail: function (e) {
            var t = l.utils.splitSymbol(e.code),
              r = t.market,
              n = t.scode,
              o =
                T.value &&
                T.value.find(function (t) {
                  return t.code === e.code;
                }),
              a = {
                scode: n,
                name: e.name,
                stockType: (null == o ? void 0 : o.stock_type) || "",
              };
            "wzq" === u.StockBridge.ENV ? (a.type = r) : (a.market = r),
              setTimeout(function () {
                u.StockBridge.report("hq.index_detail.jump_detail", {
                  stockid: e.code,
                }),
                  u.StockRouter.routeTo({ name: "stockdetail", query: a });
              }, 500);
          },
          pageScroll: function (e) {
            B ||
              (B = setTimeout(function () {
                (M.value = e.scrollTop), (B = null);
              }, 16));
          },
          getData: O,
          handleCloseTips: function () {
            u.StockBridge.setStorage("hideHkMarketTips", !0), (H.value = !1);
          },
        }
      );
    },
  });
Array ||
  (
    u.resolveComponent("market-icon") +
    u.resolveComponent("NoData") +
    u.resolveComponent("status")
  )();
var m = u._export_sfc(f, [
  [
    "render",
    function (e, t, r, n, o, a) {
      return u.e(
        { a: e.list.length > 0 },
        e.list.length > 0
          ? u.e(
              { b: e.showHkMarketTips },
              e.showHkMarketTips
                ? {
                    c: u.o(function () {
                      return (
                        e.handleCloseTips &&
                        e.handleCloseTips.apply(e, arguments)
                      );
                    }, 515),
                  }
                : {},
              {
                d: u.f(e.orderTypes, function (t, r, n) {
                  return {
                    a: u.t(e.cols[t][0]),
                    b: u.n(e.orderIndex !== r || e.orderDown ? "" : "active"),
                    c: u.n(e.orderIndex === r && e.orderDown ? "active" : ""),
                    d: r,
                    e: u.o(
                      function (t) {
                        return e.changeOrder(r);
                      },
                      516,
                      r
                    ),
                  };
                }),
                e: e.scrollTop > 20 ? 1 : "",
                f: u.f(e.list, function (t, r, n) {
                  return u.e(
                    e.isLite
                      ? {}
                      : {
                          a: "8877e5b1-0-" + n,
                          b: u.p({
                            "icon-type": t.iconType,
                            "stock-type": t.stock_type,
                          }),
                        },
                    { c: u.t(t.name) },
                    e.isLite
                      ? {
                          d: "8877e5b1-1-" + n,
                          e: u.p({
                            "icon-type": t.iconType,
                            "stock-type": t.stock_type,
                          }),
                        }
                      : {},
                    { f: u.t(t.formatCode), g: t.isShowDelay },
                    (t.isShowDelay, {}),
                    {
                      h: u.f(e.orderTypes, function (e, r, n) {
                        return u.e(
                          { a: "zxj" === e },
                          "zxj" === e ? { b: u.t(t.zxj) } : {},
                          { c: "zdf" === e },
                          "zdf" === e
                            ? {
                                d: u.t(t.formatZdf),
                                e: u.n(
                                  +t.zdf > 0
                                    ? "rise"
                                    : +t.zdf < 0
                                    ? "drop"
                                    : "gray"
                                ),
                              }
                            : {},
                          { f: "hsl" === e },
                          "hsl" === e ? { g: u.t(t.hsl) } : {},
                          { h: "turnover" === e },
                          "turnover" === e ? { i: u.t(t.formatTurnover) } : {},
                          { j: r }
                        );
                      }),
                      i: t.code,
                      j: u.o(
                        function (r) {
                          return e.gotoDetail(t);
                        },
                        517,
                        t.code
                      ),
                    }
                  );
                }),
                g: !e.isLite,
                h: e.isLite,
                i: u.n(e.isMp ? "code-mp" : ""),
              }
            )
          : {},
        { j: 0 === e.list.length && e.firstLoaded && !e.error },
        (0 === e.list.length && e.firstLoaded && e.error, {}),
        { k: e.error },
        e.error
          ? {
              l: u.o(function (t) {
                return e.retryTab();
              }, 518),
              m: u.p({ type: e.error }),
            }
          : {},
        {
          n: "black" === e.skin ? 1 : "",
          o: e.error ? 1 : "",
          p: e.isLite ? "" : 1,
        }
      );
    },
  ],
  ["__scopeId", "data-v-8877e5b1"],
]);
wx.createComponent(m);
