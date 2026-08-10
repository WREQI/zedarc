var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  o = require("../utils/const.js"),
  n = require("../utils/utils.js"),
  r = require("../utils/bridgeApi.js"),
  a = {
    props: {
      platform: { type: String, default: "" },
      skin: { type: String, default: "" },
    },
    components: {
      descModal: function () {
        return "./descModal.js";
      },
    },
    setup: function (a, l) {
      var u = this,
        c = l.emit,
        i = t.inject("stockBridge"),
        s = t.ref(0),
        f = t.ref([]),
        p = t.ref([]),
        k = t.ref(o.rankTypeConfig[3] || {}),
        v = t.ref(null),
        d = t.ref(!1),
        m = t.ref(null);
      return (
        t.onMounted(function () {
          !(function t() {
            return (
              (o = u),
              null,
              (a = e().mark(function o() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            v.value &&
                              (clearTimeout(v.value), (v.value = null)),
                            (e.t0 = function (e) {
                              var t;
                              (p.value = e),
                                p.value.forEach(function (e) {
                                  (e.marketIcon = n.getMarketIcon(
                                    e.stock_code
                                  )),
                                    (e.name = e.stock_name),
                                    (e.symbol = e.stock_code);
                                }),
                                (f.value = p.value.slice(s.value, s.value + 3));
                              var o =
                                ((null == (t = p.value) ? void 0 : t.length) &&
                                  p.value[0].modify_time) ||
                                "";
                              o && (k.value.updateTime = "更新于".concat(o)),
                                i.report(
                                  "trade.mocktrade.asset.hot_stock.show"
                                );
                            }),
                            (e.next = 5),
                            r.getStockRank("mn_buy")
                          );
                        case 5:
                          if (((e.t1 = e.sent.stocks_rank), e.t1)) {
                            e.next = 8;
                            break;
                          }
                          e.t1 = [];
                        case 8:
                          (e.t2 = e.t1),
                            (0, e.t0)(e.t2),
                            (v.value = setTimeout(function () {
                              t();
                            }, 9e5)),
                            (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t3 = e.catch(0)), (f.value = []);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  o,
                  null,
                  [[0, 13]]
                );
              })),
              new Promise(function (e, t) {
                var n = function (e) {
                    try {
                      l(a.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  r = function (e) {
                    try {
                      l(a.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  l = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(n, r);
                  };
                l((a = a.apply(o, null)).next());
              })
            );
            var o, a;
          })();
        }),
        t.onBeforeUnmount(function () {
          v.value && (clearTimeout(v.value), (v.value = null));
        }),
        {
          stockOrder: s,
          list: f,
          stockList: p,
          abtTypeConfig: k,
          getNumColor: n.getNumColor,
          handleStockClick: function (e) {
            i.report("trade.mocktrade.asset.hot_stock_item.click", {
              stock_code: e.symbol,
              stock_name: e.name,
            }),
              c("stockClick", e);
          },
          handleTitleIconClick: function () {
            var e;
            (m.value =
              (null == (e = o.rankTypeConfig[3]) ? void 0 : e.overlay) || {}),
              (d.value = !0);
          },
          refreshStock: function () {
            t.StockBridge.report(
              "trade.mocktrade.asset.hot_stock_refresh.click"
            ),
              (s.value = s.value + 3),
              s.value >= p.value.length && (s.value = 0),
              (f.value = p.value.slice(s.value, s.value + 3));
          },
          closePopup: function () {
            d.value = !1;
          },
          showPopup: d,
          modalOverlay: m,
        }
      );
    },
  };
Array || t.resolveComponent("descModal")();
var l = t._export_sfc(a, [
  [
    "render",
    function (e, o, n, r, a, l) {
      return t.e(
        { a: r.list.length },
        r.list.length
          ? t.e(
              {
                b: t.t(r.abtTypeConfig.homeTitle),
                c: t.o(function () {
                  return (
                    r.handleTitleIconClick &&
                    r.handleTitleIconClick.apply(r, arguments)
                  );
                }, 4510),
                d: r.abtTypeConfig.updateTime,
              },
              r.abtTypeConfig.updateTime
                ? { e: t.t(r.abtTypeConfig.updateTime) }
                : { f: t.t(r.abtTypeConfig.titleTip) },
              {
                g: t.f(r.list, function (e, o, n) {
                  return {
                    a: e.marketIcon,
                    b: t.t(e.name),
                    c: t.t(e.stock_info),
                    d: r.getNumColor(e.stock_info),
                    e: t.t(e.pop_value),
                    f: o,
                    g: t.o(
                      function (t) {
                        return r.handleStockClick(e);
                      },
                      4511,
                      o
                    ),
                  };
                }),
                h: t.t(r.abtTypeConfig.profitDesc),
                i: t.t(r.abtTypeConfig.holders),
                j: r.stockList.length > 3,
              },
              r.stockList.length > 3
                ? {
                    k: t.o(function () {
                      return (
                        r.refreshStock && r.refreshStock.apply(r, arguments)
                      );
                    }, 4512),
                    l: t.o(function () {
                      return (
                        r.refreshStock && r.refreshStock.apply(r, arguments)
                      );
                    }, 4513),
                  }
                : {},
              {
                m: t.o(r.closePopup, 4514),
                n: t.p({
                  skin: n.skin,
                  showPopup: r.showPopup,
                  overlay: r.modalOverlay,
                }),
                o: "dark" === n.skin ? 1 : "",
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7f9f114d"],
]);
wx.createComponent(l);
