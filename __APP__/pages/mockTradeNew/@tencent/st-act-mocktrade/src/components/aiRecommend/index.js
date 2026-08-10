require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../common/vendor.js"),
  r = require("api.js"),
  n = require("../../services/BaseController.js"),
  o = ["mockdeal", "mockhot", "mockresult", "mockrank"],
  c = {
    components: {},
    setup: function (c, a) {
      var s,
        i = a.emit,
        u = ["mpwzq", "wzqlight"].includes("mpweapp"),
        m =
          (null == (s = t.getCurrentInstance()) ? void 0 : s.proxy) ||
          t.getCurrentInstance(),
        k = t.ref([]),
        l = null;
      return (
        m.$route &&
          (l = t.watch(
            function () {
              return { path: m.$route.path, name: m.$route.name };
            },
            function (e, t) {
              (t && e.path === t.path) ||
                "mocktrade" !== e.name ||
                o.includes(t.name) ||
                (k.value = []);
            },
            { immediate: !1 }
          )),
        t.onUnmounted(function () {
          l && l();
        }),
        {
          stockList: k,
          handleMore: function () {
            t.StockBridge.report("trade.mocktrade.aimodel.clickmore"),
              i("loadMore");
          },
          setSingleStock: function (o) {
            return (
              (c = this),
              null,
              (a = e().mark(function c() {
                var a;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), r.getStockInfo(o);
                      case 2:
                        (a = e.sent),
                          (k.value = [
                            {
                              name: a.secu_info.secu_name,
                              price: a.secu_quote.dqj,
                              code: a.secu_info.secu_code,
                              zdf: a.secu_quote.zdf + "%",
                              market: a.secu_info.market,
                              marketCN: n.MARKET_CODE[a.secu_info.market],
                              isCanMocktrade: !0,
                              symbol: a.secu_info.symbol,
                              isUp: "-" !== a.secu_quote.zdf[0],
                            },
                          ]),
                          t.StockBridge.report("trade.mocktrade.aimodel.brow");
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, c);
              })),
              new Promise(function (e, t) {
                var r = function e(r) {
                    try {
                      o(a.next(r));
                    } catch (e) {
                      t(e);
                    }
                  },
                  n = function (e) {
                    try {
                      o(a.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  o = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(r, n);
                  };
                o((a = a.apply(c, null)).next());
              })
            );
            var c, a;
          },
          setStockList: function (e) {
            k.value = e;
          },
          handleStockClick: function (e) {
            t.StockBridge.report("trade.mocktrade.aimodel.click", {
              stockid: e.symbol,
            }),
              e.isCanMocktrade
                ? t.StockRouter.routeTo({
                    name: "mockdeal",
                    query: { code: e.symbol },
                  })
                : t.StockBridge.toast("该标的暂未支持模拟交易", "none");
          },
          isLite: u,
          formatZdfDisplay: function (e, t) {
            return ["-", "+"].includes(e[0]) ? e : "+".concat(e);
          },
          formatStockName: function (e) {
            return e ? (e.length > 4 ? e.slice(0, 4) + "..." : e) : "";
          },
        }
      );
    },
  },
  a = t._export_sfc(c, [
    [
      "render",
      function (e, r, n, o, c, a) {
        return t.e(
          { a: o.stockList.length },
          o.stockList.length
            ? t.e(
                { b: o.stockList.length <= 2 },
                o.stockList.length <= 2
                  ? {
                      c: t.f(o.stockList, function (e, r, n) {
                        return t.e(
                          {
                            a: t.t(o.formatStockName(e.name)),
                            b: "sh" === e.marketCN,
                          },
                          ("sh" === e.marketCN ||
                            "sz" === e.marketCN ||
                            "us" === e.marketCN ||
                            e.marketCN,
                          {}),
                          {
                            c: "sz" === e.marketCN,
                            d: "us" === e.marketCN,
                            e: "hk" === e.marketCN,
                            f: t.t(e.code),
                            g: t.t(e.price),
                            h: t.t(e.zdf),
                            i: t.n(e.isUp ? "up" : "down"),
                            j: t.t(e.isCanMocktrade ? "模拟交易" : "暂未支持"),
                            k: e.isCanMocktrade ? "" : 1,
                            l: t.o(
                              function (t) {
                                return o.handleStockClick(e);
                              },
                              4535,
                              e.code
                            ),
                            m: e.code,
                          }
                        );
                      }),
                      d: o.isLite ? 1 : "",
                    }
                  : t.e(
                      {
                        e: t.f(o.stockList.slice(0, 3), function (e, r, n) {
                          return t.e(
                            { a: "sh" === e.marketCN },
                            ("sh" === e.marketCN ||
                              "sz" === e.marketCN ||
                              "us" === e.marketCN ||
                              e.marketCN,
                            {}),
                            {
                              b: "sz" === e.marketCN,
                              c: "us" === e.marketCN,
                              d: "hk" === e.marketCN,
                              e: t.t(o.formatStockName(e.name)),
                              f: t.t(o.formatZdfDisplay(e.zdf, e.isUp)),
                              g: e.isUp ? 1 : "",
                              h: e.code,
                              i: t.o(
                                function (t) {
                                  return o.handleStockClick(e);
                                },
                                4536,
                                e.code
                              ),
                            }
                          );
                        }),
                        f: o.stockList.length > 3,
                      },
                      o.stockList.length > 3
                        ? {
                            g: t.t(o.stockList.length),
                            h: t.o(function () {
                              return (
                                o.handleMore && o.handleMore.apply(o, arguments)
                              );
                            }, 4537),
                          }
                        : {}
                    )
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-9bee33d2"],
  ]);
wx.createComponent(a);
