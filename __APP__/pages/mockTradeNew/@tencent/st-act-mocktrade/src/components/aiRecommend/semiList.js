require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../../../common/vendor.js"),
  a = require("api.js"),
  n = require("../../../../stock-hq-data/index.js"),
  o = ["mockdeal", "mockhot", "mockresult", "mockrank"],
  i = {
    components: {
      semiMask: function () {
        return "../../../../../../asyncCom/@tencent/st-semi-modal/index.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: { isNewuser: { type: Boolean, default: !1 } },
    setup: function (i, s) {
      var l,
        u = s.emit,
        c = ["mpwzq", "wzqlight"].includes("mpweapp"),
        d = r.ref({}),
        m =
          (null == (l = r.getCurrentInstance()) ? void 0 : l.proxy) ||
          r.getCurrentInstance(),
        p = r.ref(!1),
        v = r.ref([]),
        f = r.ref([]),
        k = r.ref(""),
        h = r.ref("desc"),
        y = null;
      function g() {
        y && (clearTimeout(y), (y = null));
      }
      function S() {
        return (
          (o = this),
          null,
          (i = e().mark(function o() {
            var i, s, l;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (function () {
                          if ("mp" === r.StockBridge.ENV) {
                            var e = getCurrentPages(),
                              t = e[e.length - 1];
                            t &&
                              t.options &&
                              (d.value = {
                                scene: t.options.scene,
                                type: t.options.type,
                                id: t.options.id,
                              });
                          } else
                            d.value = {
                              scene: m.$route.query.scene,
                              type: m.$route.query.type,
                              id: m.$route.query.id,
                            };
                        })(),
                        (i = function (e) {
                          var a =
                            "mp" !== r.StockBridge.ENV &&
                            r.StockBridge.getSession("click-rule-4ai");
                          a && sessionStorage.removeItem("click-rule-4ai"),
                            (v.value = e),
                            (f.value = t(v.value)),
                            (k.value = ""),
                            (h.value = "desc"),
                            v.value.length > 0 &&
                              (a
                                ? w()
                                : (r.StockBridge.report(
                                    "trade.mocktrade.aisemimodal.brow"
                                  ),
                                  (p.value = !0)));
                        }),
                        "fromai" !== d.value.scene ||
                          "gd" !== d.value.type ||
                          !d.value.id)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (e.t0 = function (e) {
                          var t = [];
                          if (
                            e.data &&
                            e.data.detail &&
                            e.data.detail.ranking &&
                            e.data.detail.ranking.data.length > 0
                          ) {
                            var r = e.data.detail.ranking.data;
                            r &&
                              Array.isArray(r) &&
                              r.forEach(function (e) {
                                var r;
                                if (e.data) {
                                  var a = e.data,
                                    o = a.symbol ? a.symbol.slice(0, 2) : "",
                                    i = String(
                                      null !=
                                        (r = null == a ? void 0 : a.changePct)
                                        ? r
                                        : "0"
                                    );
                                  t.push({
                                    name: a.cnName,
                                    code: a.symbol ? a.symbol.slice(2) : "",
                                    symbol: a.symbol,
                                    market: o,
                                    marketCN: o,
                                    price: a.new,
                                    zdf: i.includes("%")
                                      ? i
                                      : "".concat(i, "%"),
                                    isUp: !i.startsWith("-"),
                                    isCanMocktrade:
                                      n.utils.isAMarket(a.stockType) ||
                                      n.utils.isChuangYeStock(a.stockType) ||
                                      n.utils.isKeChuangStock(a.stockType) ||
                                      "ETF" === a.stockType,
                                  });
                                }
                              });
                          }
                          return t;
                        }),
                        (e.next = 7),
                        a.getBasketDetail(d.value.id)
                      );
                    case 7:
                      return (
                        (e.t1 = e.sent),
                        (s = (0, e.t0)(e.t1)),
                        e.abrupt("return", void i(s))
                      );
                    case 10:
                      if (
                        "fromai" !== d.value.scene ||
                        "jq" !== d.value.type ||
                        !d.value.id
                      ) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (e.t2 = function (e) {
                          var t = [];
                          if (!(e && e.data && e.data.stocks && e.data.columns))
                            return t;
                          var r = e.data,
                            a = r.stocks,
                            o = r.columns,
                            i = -1,
                            s = -1;
                          return (
                            o.forEach(function (e, t) {
                              "最新价" === e.display_name
                                ? (i = t)
                                : "最新涨跌幅" === e.display_name && (s = t);
                            }),
                            -1 === i ||
                              -1 === s ||
                              a.forEach(function (e) {
                                var r, a, o, l;
                                if (
                                  e.condition_values &&
                                  0 !== e.condition_values.length
                                ) {
                                  var u =
                                      null !=
                                      (a =
                                        null == (r = e.condition_values[i])
                                          ? void 0
                                          : r.raw)
                                        ? a
                                        : "0",
                                    c =
                                      null !=
                                      (l =
                                        null == (o = e.condition_values[s])
                                          ? void 0
                                          : o.raw)
                                        ? l
                                        : "0",
                                    d = String(null != c ? c : "0"),
                                    m = e.code || "",
                                    p = m.slice(0, 2),
                                    v = m.slice(2),
                                    f = e.secu_type || "",
                                    k =
                                      n.utils.isAMarket(f) ||
                                      n.utils.isChuangYeStock(f) ||
                                      n.utils.isKeChuangStock(f) ||
                                      "ETF" === f ||
                                      f.includes("GP-A");
                                  t.push({
                                    name: e.name || "",
                                    code: v,
                                    symbol: m,
                                    market: p,
                                    marketCN: p,
                                    price: u,
                                    zdf: d.includes("%")
                                      ? d
                                      : "".concat(d, "%"),
                                    isUp: !d.startsWith("-"),
                                    isCanMocktrade: k,
                                  });
                                }
                              }),
                            t
                          );
                        }),
                        (e.next = 14),
                        a.queryCustomStrategyStocksV2(d.value.id)
                      );
                    case 14:
                      return (
                        (e.t3 = e.sent),
                        (l = (0, e.t2)(e.t3)),
                        e.abrupt("return", void i(l))
                      );
                    case 17:
                      e.next = 22;
                      break;
                    case 19:
                      (e.prev = 19), (e.t4 = e.catch(0)), (p.value = !1);
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              null,
              [[0, 19]]
            );
          })),
          new Promise(function (e, t) {
            var r = function e(r) {
                try {
                  n(i.next(r));
                } catch (e) {
                  t(e);
                }
              },
              a = function (e) {
                try {
                  n(i.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              n = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, a);
              };
            n((i = i.apply(o, null)).next());
          })
        );
        var o, i;
      }
      function b(e) {
        v.value = t(v.value).sort(function (t, r) {
          var a, n, o, i;
          return (
            "price" === e
              ? ((o = parseFloat(null == t ? void 0 : t.price) || 0),
                (i = parseFloat(null == r ? void 0 : r.price) || 0))
              : "zdf" === e &&
                ((o =
                  parseFloat(
                    (null == (a = null == t ? void 0 : t.zdf)
                      ? void 0
                      : a.replace("%", "")) || 0
                  ) || 0),
                (i =
                  parseFloat(
                    (null == (n = null == r ? void 0 : r.zdf)
                      ? void 0
                      : n.replace("%", "")) || 0
                  ) || 0)),
            "desc" === h.value ? i - o : o - i
          );
        });
      }
      var C = null;
      function w() {
        u("airecommendData", v.value),
          g(),
          (y = setTimeout(function () {
            (p.value = !1), (y = null);
          }, 300));
      }
      return (
        m.$route &&
          (C = r.watch(
            function () {
              return { path: m.$route.path, name: m.$route.name };
            },
            function (e, t) {
              var r;
              (t && e.path === t.path) ||
                "mocktrade" !== e.name ||
                o.includes(t.name) ||
                (p.value &&
                  (null == (r = null == m ? void 0 : m.$refs) ||
                    r.semimask.closeSemimask(),
                  (p.value = !1),
                  g()),
                S());
            },
            { immediate: !1 }
          )),
        r.onBeforeMount(function () {
          S();
        }),
        r.onUnmounted(function () {
          C && C(), g();
        }),
        {
          showMiniApply: p,
          closeSemimask: w,
          closeCurrentSemi: function () {
            var e;
            null == (e = null == m ? void 0 : m.$refs) ||
              e.semimask.closeSemimask();
          },
          stockList: v,
          showMoreAiRecommend: function () {
            p.value = !0;
          },
          handleActionBtn: function (e) {
            var t;
            e.isCanMocktrade &&
              (r.StockBridge.report("trade.mocktrade.aisemimodal.click", {
                stockid: e.symbol,
              }),
              null == (t = null == m ? void 0 : m.$refs) ||
                t.semimask.closeSemimask(),
              r.StockRouter.routeTo({
                name: "mockdeal",
                query: { code: e.symbol },
              }));
          },
          sortField: k,
          sortOrder: h,
          handleSortByPrice: function () {
            "price" === k.value
              ? (h.value = "desc" === h.value ? "asc" : "desc")
              : ((k.value = "price"), (h.value = "desc")),
              r.StockBridge.report("trade.mocktrade.aisemimodal.sort", {
                fieldname: "currentprice",
                sortorder: h.value,
              }),
              b("price");
          },
          handleSortByZdf: function () {
            "zdf" === k.value
              ? (h.value = "desc" === h.value ? "asc" : "desc")
              : ((k.value = "zdf"), (h.value = "desc")),
              r.StockBridge.report("trade.mocktrade.aisemimodal.sort", {
                fieldname: "chgratio",
                sortorder: h.value,
              }),
              b("zdf");
          },
          formatZdfDisplay: function (e, t) {
            return t && "+" !== e[0] ? "+" + e : e;
          },
          truncateStockName: function (e) {
            return e ? (e.length > 4 ? e.substring(0, 4) + "..." : e) : "";
          },
          isLite: c,
        }
      );
    },
  };
Array || r.resolveComponent("semi-mask")();
var s = r._export_sfc(i, [
  [
    "render",
    function (e, t, a, n, o, i) {
      return r.e(
        { a: n.showMiniApply },
        n.showMiniApply
          ? r.e(
              {
                b: r.o(function () {
                  return (
                    n.closeCurrentSemi && n.closeCurrentSemi.apply(n, arguments)
                  );
                }, 4538),
                c: "price" === n.sortField ? 1 : "",
                d: "price" === n.sortField && "asc" === n.sortOrder ? 1 : "",
                e: "price" === n.sortField && "desc" === n.sortOrder ? 1 : "",
                f: r.o(function () {
                  return (
                    n.handleSortByPrice &&
                    n.handleSortByPrice.apply(n, arguments)
                  );
                }, 4539),
                g: "zdf" === n.sortField ? 1 : "",
                h: "zdf" === n.sortField && "asc" === n.sortOrder ? 1 : "",
                i: "zdf" === n.sortField && "desc" === n.sortOrder ? 1 : "",
                j: r.o(function () {
                  return (
                    n.handleSortByZdf && n.handleSortByZdf.apply(n, arguments)
                  );
                }, 4540),
                k: r.f(n.stockList, function (e, t, a) {
                  return r.e(
                    {
                      a: r.t(n.truncateStockName(e.name)),
                      b: "sh" === e.market,
                    },
                    ("sh" === e.market ||
                      "sz" === e.market ||
                      "us" === e.market ||
                      e.market,
                    {}),
                    {
                      c: "sz" === e.market,
                      d: "us" === e.market,
                      e: "hk" === e.market,
                      f: r.t(e.code),
                      g: r.t(e.price),
                      h: r.t(n.formatZdfDisplay(e.zdf, e.isUp)),
                      i: r.n(e.isUp ? "up" : "down"),
                      j: r.t(e.isCanMocktrade ? "模拟交易" : "暂未支持"),
                      k: e.isCanMocktrade ? "" : 1,
                      l: r.o(
                        function (t) {
                          return n.handleActionBtn(e);
                        },
                        4541,
                        e.code
                      ),
                      m: e.code,
                    }
                  );
                }),
                l: n.isLite ? 1 : "",
                m: a.isNewuser,
              },
              (a.isNewuser, {}),
              {
                n: r.sr("semimask", "d2347389-0"),
                o: r.o(n.closeSemimask, 4542),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-d2347389"],
]);
wx.createComponent(s);
