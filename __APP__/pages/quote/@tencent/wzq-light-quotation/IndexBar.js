var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = function (t, e, r) {
    return new Promise(function (n, a) {
      var i = function (t) {
          try {
            c(r.next(t));
          } catch (t) {
            a(t);
          }
        },
        o = function (t) {
          try {
            c(r.throw(t));
          } catch (t) {
            a(t);
          }
        },
        c = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(i, o);
        };
      c((r = r.apply(t, e)).next());
    });
  },
  r = require("../../../../common/vendor.js"),
  n = require("../stock-hq-data/index.js"),
  a = require("utils.js"),
  i = r.defineComponent({
    props: ["symbol"],
    setup: function (i, o) {
      var c = this,
        s = o.emit,
        u = r.getCurrentInstance().proxy || r.getCurrentInstance(),
        l = ["mpwzq", "wzqlight"].includes("mpweapp"),
        d = ["mpwzq", "mpweapp"].includes("mpweapp"),
        p = r.ref({}),
        f = r.ref(!1),
        v = r.ref(!0),
        k = new n.DetailApi(function () {
          for (var t, e = arguments.length, n = new Array(e), a = 0; a < e; a++)
            n[a] = arguments[a];
          return 1 === n.length
            ? r.StockBridge.request(
                n[0],
                r.RequestTypeEnum.GET,
                {},
                { forceCallback: !0 }
              )
            : (n[3] && (n[3].forceCallback = !0),
              (t = r.StockBridge).request.apply(t, n));
        }),
        h = function (r, n) {
          u.tradeInterval && clearInterval(u.tradeInterval),
            (u.tradeInterval = setInterval(function () {
              return e(
                c,
                null,
                t().mark(function e() {
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          m(r, n);
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, e);
                })
              );
            }, 3e4));
        },
        m = function (r, a) {
          return e(
            c,
            null,
            t().mark(function e() {
              var i, o, c;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        k.getMarketState({ market: r }, { needProcess: !0 })
                      );
                    case 2:
                      if (
                        ((i = t.sent),
                        (o = (function (t, e) {
                          return n.utils.isHKMarket(t)
                            ? "NEWHK"
                            : n.utils.isBJMarket(t) ||
                              n.utils.isHSMarket(t) ||
                              n.utils.isHSPlate(t)
                            ? "NEWSH"
                            : n.utils.isUSMarket(t)
                            ? "NEWUS"
                            : "DAX30" === e
                            ? "EU"
                            : "NEWSH";
                        })(r, a)),
                        "string" == typeof i)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      (c = (i.split("|") || [])
                        .map(function (t) {
                          return t.split("_");
                        })
                        .filter(function (t) {
                          return t[0] === o;
                        })).length && (f.value = "open" === c[0][1]);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        },
        x = function () {
          return e(
            c,
            null,
            t().mark(function e() {
              var a, o, c, l, f, v, k, x;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a =
                          "https://proxy.finance.qq.com/ifzqgtimg/appstock/fund/etf/gzzs?code="
                            .concat(i.symbol, "&app=")
                            .concat(d ? "wzqxcx" : "mini_h5")),
                        (t.next = 3),
                        r.StockBridge.request(
                          a,
                          r.RequestTypeEnum.GET,
                          {}
                        ).catch(function (t) {})
                      );
                    case 3:
                      if (!(o = t.sent) || 0 != +o.code || !o.data) {
                        t.next = 19;
                        break;
                      }
                      if (
                        ((p.value = o.data.tracking_index || {}),
                        (c = p.value || {}),
                        (l = c.code),
                        s("addIndexPush", (f = void 0 === l ? "" : l)),
                        (v = n.utils.splitSymbol(f)),
                        (k = v.market),
                        (x = v.scode),
                        _(f),
                        (t.t0 =
                          n.utils.isUSMarket(k) ||
                          n.utils.isHSMarket(k) ||
                          n.utils.isHKMarket(k) ||
                          n.utils.isBJMarket(k)),
                        t.t0)
                      ) {
                        t.next = 17;
                        break;
                      }
                      return m(k, x), (t.next = 15), q(f);
                    case 15:
                      h(k, x), g(f);
                    case 17:
                      p.value.code &&
                        p.value.history_ratio &&
                        (r.StockBridge.report(
                          "hq.stock_detail.etf_index_tracking_view_show"
                        ),
                        s("hasData")),
                        u.heightChanged ||
                          (u.$parent.$emit("heightChange"),
                          (u.heightChanged = !0));
                    case 19:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        },
        _ = function (t) {
          var e = n.utils.splitSymbol(t).market;
          n.utils.isHSMarket(e) ||
          n.utils.isBJMarket(e) ||
          n.utils.isHKMarket(e) ||
          n.utils.isUSMarket(e) ||
          n.utils.isCSIndex(e) ||
          n.utils.isSPMarket(e) ||
          "ftDAX30" === p.value.code
            ? (v.value = !0)
            : (v.value = !1);
        },
        g = function (r) {
          u.qtInterval && clearInterval(u.qtInterval),
            (u.qtInterval = setInterval(function () {
              return e(
                c,
                null,
                t().mark(function e() {
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          f.value && q(r);
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, e);
                })
              );
            }, 5e3));
        },
        q = function (a) {
          return e(
            c,
            null,
            t().mark(function e() {
              var i, o, c, s, u, l;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = d
                          ? r.StockBridge.getStorage("_qluin")
                          : r.StockBridge.getCookie("wzq_qluin")),
                        (c = n.utils.splitSymbol(a)),
                        (s = c.market),
                        (u = c.scode),
                        (t.next = 6),
                        k.getQT(
                          { market: s, scode: u, openId: o, encode: "utf8" },
                          { adapterType: "stockinfo", needProcess: !0 }
                        )
                      );
                    case 6:
                      (l = t.sent),
                        (null == (i = null == l ? void 0 : l.secu_quote)
                          ? void 0
                          : i.zdf) &&
                          (p.value.price_ratio =
                            l && l.secu_quote && l.secu_quote.zdf);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        };
      return (
        r.onMounted(function () {
          x();
        }),
        r.onUnmounted(function () {
          u.qtInterval && clearInterval(u.qtInterval),
            u.tradeInterval && clearInterval(u.tradeInterval);
        }),
        r.onDeactivated(function () {
          u.qtInterval && clearInterval(u.qtInterval),
            u.tradeInterval && clearInterval(u.tradeInterval);
        }),
        {
          isLite: l,
          indexData: p,
          isTrading: f,
          showJump: v,
          colorFilter: function (t) {
            var e = +t;
            return e < 0 ? "color-drop" : e > 0 ? "color-rise" : "color-equal";
          },
          textFormat: function (t) {
            return t && "--" !== t
              ? /^\+/.test(t)
                ? "".concat(t, "%")
                : "".concat(+t > 0 ? "+" : "").concat(t, "%")
              : "--";
          },
          showTip: function () {
            l ||
              (s("showModal", {
                title: "跟踪指数",
                content: [
                  {
                    type: "text",
                    text: "ETF是用股票账号交易的场内基金。ETF都有跟踪指数，比如沪深300ETF跟踪的是沪深300指数。一般情况下，年跟踪误差在4％以内。",
                  },
                  {
                    type: "text",
                    text: "行业类的ETF跟踪指数比ETF发行早半年以上，查看跟踪指数能够了解当前ETF所处的高低位。ETF所跟踪指数的历史年化收益率反应该指数的历史表现。",
                  },
                ],
              }),
              r.StockBridge.report(
                "hq.stock_detail.etf_index_tracking_info_click",
                { stockid: i.symbol }
              ));
          },
          gotoDetail: function (t) {
            var e = n.utils.splitSymbol(t.replace(".", "")),
              o = e.market,
              c = e.scode;
            v.value && a.jumpStockDetail({ market: o, scode: c }),
              r.StockBridge.report(
                "hq.stock_detail.etf_index_tracking_view_click",
                { stockid: i.symbol }
              );
          },
          updateData: function (t) {
            var e = t.secu_quote.zdf;
            isNaN(e) || (p.value.price_ratio = e);
          },
          getIndexData: x,
        }
      );
    },
    methods: {},
  }),
  o = r._export_sfc(i, [
    [
      "render",
      function (t, e, n, a, i, o) {
        return r.e(
          { a: t.indexData && t.indexData.code && t.indexData.history_ratio },
          t.indexData && t.indexData.code && t.indexData.history_ratio
            ? r.e(
                { b: t.isLite },
                (t.isLite, {}),
                { c: !t.isLite },
                (t.isLite, {}),
                {
                  d: r.o(function (e) {
                    return t.showTip();
                  }, 2757),
                  e: r.t(t.indexData.name),
                  f: r.t(t.textFormat(t.indexData.price_ratio)),
                  g: r.n(t.colorFilter(t.indexData.price_ratio)),
                  h: t.indexData.history_ratio,
                },
                t.indexData.history_ratio
                  ? { i: r.t(t.indexData.history_ratio.desc) }
                  : {},
                { j: t.indexData.history_ratio },
                t.indexData.history_ratio
                  ? {
                      k: r.t(t.textFormat(t.indexData.history_ratio.val)),
                      l: r.n(t.colorFilter(t.indexData.history_ratio.val)),
                    }
                  : {},
                { m: t.showJump },
                (t.showJump, {}),
                {
                  n: r.o(function (e) {
                    return t.gotoDetail(t.indexData.code);
                  }, 2758),
                  o: t.isLite ? 1 : "",
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-d1c6b3a9"],
  ]);
wx.createComponent(o);
