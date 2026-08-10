var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = function (t, e, r) {
    return new Promise(function (a, o) {
      var i = function (t) {
          try {
            n(r.next(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          try {
            n(r.throw(t));
          } catch (t) {
            o(t);
          }
        },
        n = function (t) {
          return t.done ? a(t.value) : Promise.resolve(t.value).then(i, c);
        };
      n((r = r.apply(t, e)).next());
    });
  },
  r = require("../../../../common/vendor.js"),
  a = require("../stock-hq-data/index.js"),
  o = require("../stock-hq-core/utils/sign.js"),
  i = require("utils.js"),
  c = r.defineComponent({
    props: ["symbol", "scode", "market", "formattedSymbol", "stockType"],
    setup: function (c, n) {
      var u = this,
        s = n.emit,
        l = r.ref(null),
        d = r.ref(!1),
        f = r.ref(null),
        p = ["mpwzq", "wzqlight"].includes("mpweapp"),
        k = ["mpwzq", "mpweapp"].includes("mpweapp"),
        m = ["mpweapp"].includes("mpweapp"),
        g = r.computed(function () {
          return null !== f.value
            ? _(f.value)
            : l.value
            ? _(l.value.price_ratio)
            : "--";
        }),
        v = r.computed(function () {
          return S(+g.value);
        }),
        h = r.computed(function () {
          return S(+l.value.posRatio);
        }),
        S = function (t) {
          return 0 !== t && t ? (t > 0 ? "#e63535" : "#1caa3c") : "#7a8499";
        },
        _ = function (t) {
          var e = Number(t);
          if (e === isNaN) return "";
          var r = e.toFixed(2);
          return e > 0 ? "+".concat(r) : r;
        },
        b = function () {
          a.utils.isHSMarket(c.market) &&
          (a.utils.isChuangYeStock(c.stockType) ||
            a.utils.isKeChuangStock(c.stockType) ||
            a.utils.isAMarket(c.stockType))
            ? q()
            : (a.utils.isHSPlate(c.market) ||
                a.utils.isHKMarket(c.market) ||
                a.utils.isSPMarket(c.market) ||
                a.utils.isIndex(c.stockType) ||
                (a.utils.isFutures(c.market) &&
                  !a.utils.isHDFutures(c.market))) &&
              y();
        },
        q = function () {
          return e(
            u,
            null,
            t().mark(function e() {
              var a, i, n, u, f;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = {
                          url: "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/quote_bar/related_securities",
                          data: {
                            stockCode: c.formattedSymbol,
                            app: k ? "wzqxcx" : "mini_h5",
                            _appver: "11.11",
                            t: Date.now(),
                          },
                        }),
                        (n = k
                          ? r.StockBridge.getStorage("_qluin")
                          : r.StockBridge.getCookie("wzq_qluin")) &&
                          (i.data.openid = n),
                        (i.data = o.getSignV2(i.data, "GET", i.data.app)),
                        (t.next = 4),
                        r.StockBridge.request(
                          i.url,
                          r.RequestTypeEnum.GET,
                          i.data
                        )
                      );
                    case 4:
                      0 == (null == (u = t.sent) ? void 0 : u.code) &&
                      Array.isArray(
                        null == (a = u.data) ? void 0 : a.securities
                      ) &&
                      u.data.securities.length &&
                      (f = u.data.securities.find(function (t) {
                        return "etf" === t.type;
                      })) &&
                      Array.isArray(f.attributes) &&
                      f.attributes.length
                        ? ((d.value = !0),
                          (l.value = f.attributes[0]),
                          s("hasData"),
                          s("addETFPush", l.value.code),
                          r.StockBridge.report(
                            "hq.detail.rel_etf_firstscreen_brow",
                            {
                              stockid: c.formattedSymbol,
                              etf_related: l.value.code,
                            }
                          ))
                        : (d.value = !1);
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        },
        y = function () {
          return e(
            u,
            null,
            t().mark(function e() {
              var a, o, i, n, u, f, p;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a =
                          "https://proxy.finance.qq.com/cgi/cgi-bin/zxgstockcgi/quote_bar/recommended_etf?code=".concat(
                            c.formattedSymbol
                          )),
                        (a = k
                          ? ""
                              .concat(a, "&openid=")
                              .concat(r.StockBridge.getStorage("_qluin"))
                          : ""
                              .concat(a, "&openid=")
                              .concat(r.StockBridge.getCookie("wzq_qluin"))),
                        (a = "".concat(a, "&app=zxg_xcx")),
                        (t.next = 4),
                        r.StockBridge.request(a, "GET", {})
                      );
                    case 4:
                      (o = t.sent),
                        (i = (o || {}).data.list),
                        (n = void 0 === i ? [] : i),
                        (l.value = n[0] || null),
                        s("hasData"),
                        (u = l.value || {}),
                        (f = u.code),
                        (p = void 0 === f ? "" : f) &&
                          ((d.value = !0),
                          s("addETFPush", p),
                          r.StockBridge.report(
                            "hq.detail.rel_etf_firstscreen_brow",
                            { stockid: c.formattedSymbol, etf_related: p }
                          ));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              }, e);
            })
          );
        };
      return (
        r.onMounted(function () {
          b();
        }),
        {
          isLite: p,
          etfData: l,
          showEtf: d,
          etfbarPricezd: f,
          dealPriceRatio: g,
          colorRatio: v,
          colorPosRatio: h,
          getData: b,
          getEtfData: q,
          formatRatio: _,
          getColor: S,
          updateData: function (t) {
            var e = t.secu_quote.zdf;
            void 0 !== e && (f.value = +e);
          },
          goDetail: function () {
            if (l.value) {
              r.StockBridge.report("hq.detail.relative.etfbar_click", {
                stockid: c.formattedSymbol,
                related_stockid: l.value.code,
              }),
                a.utils.isChuangYeStock(c.stockType)
                  ? r.StockBridge.report(
                      "hq.stock_detail.relative.etf_cyb.etfbar_click",
                      { stockid: c.formattedSymbol }
                    )
                  : a.utils.isKeChuangStock(c.stockType)
                  ? r.StockBridge.report(
                      "hq.stock_detail.relative.etf_kcb.etfbar_click",
                      { stockid: c.formattedSymbol }
                    )
                  : r.StockBridge.report(
                      "hq.stock_detail.relative.etf_gp.etfbar_click",
                      { stockid: c.formattedSymbol }
                    );
              var t = a.utils.splitSymbol(l.value.code),
                e = t.market,
                o = t.scode;
              i.jumpStockDetail({ market: e, scode: o });
            }
          },
          getResult: y,
          gotoTeach: function () {
            r.StockBridge.report(
              "hq.stock_detail.relative.etfbar.teach_click",
              { stockid: c.formattedSymbol }
            ),
              r.StockRouter.routeTo({
                name: "informationDetail",
                query: {
                  id: "SN202205231032327b86c1df",
                  articleStyle: "fullTeach",
                },
              });
          },
          isClassic: m,
        }
      );
    },
  }),
  n = r._export_sfc(c, [
    [
      "render",
      function (t, e, a, o, i, c) {
        return r.e(
          { a: t.showEtf },
          t.showEtf
            ? {
                b: t.isClassic ? 1 : "",
                c: r.o(function () {
                  return t.gotoTeach && t.gotoTeach.apply(t, arguments);
                }, 2755),
                d: r.t(t.etfData.name),
                e: r.t(t.dealPriceRatio),
                f: t.colorRatio,
                g: r.t(t.etfData.posRatio),
                h: t.colorPosRatio,
                i: r.n(t.isClassic ? "etf-bar-container-classic" : ""),
                j: r.o(function () {
                  return t.goDetail && t.goDetail.apply(t, arguments);
                }, 2756),
                k: t.isLite ? 1 : "",
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ecd33838"],
  ]);
wx.createComponent(n);
