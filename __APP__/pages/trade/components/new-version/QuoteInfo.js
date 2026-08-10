var e = require("../../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../app.js");
var o = require("../../../../common/vendor.js"),
  n = require("../../../../config/enum.js"),
  r = require("../../../../model/trade/useSearch.js"),
  i = require("../../../../bizs/hq/constants.js"),
  a = require("../../../../utils/getPlatform.js"),
  s = require("../../../../service/stat/mp-weixin.js"),
  c = require("../../../../adapter/router.js"),
  u = require("../../../../model/trade/useStockInfo.js"),
  l = require("../../../../config/key.js"),
  f = require("../../../../bizs/hq/helper.js"),
  d = require("../../../../common/utils/colorHelper.js"),
  p = {
    components: {
      TransInfo: function () {
        return "./TransInfo.js";
      },
      mins: function () {
        return "../../../../node-modules/@tencent/stock-kline/mins.js";
      },
      Handicap: function () {
        return "./Handicap.js";
      },
      BubbleTip: function () {
        return "../../../../components/BubbleTip/BubbleTip.js";
      },
    },
    props: {
      showInput: Boolean,
      searching: Boolean,
      loading: Boolean,
      isAfterTradeStock: Boolean,
      stockCode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      stockMarket: { type: String, default: "" },
      showSafeSetting: { type: Boolean, default: !0 },
      showSearchEntry: { type: Boolean, default: !0 },
      simpleMode: { type: Boolean, default: !1 },
      label: { type: String, default: "" },
      transInfo: {
        type: Object,
        required: !0,
        default: function () {
          return {};
        },
      },
    },
    setup: function (p, h) {
      var k,
        m = h.emit,
        S = null == (k = o.getCurrentInstance()) ? void 0 : k.proxy,
        v = r.useSearch(),
        T = v.holdStockCache,
        C = v.searchCode,
        g = v.search,
        I = v.fetchHoldStock,
        _ = v.searchData,
        q = o.inject("trade"),
        w = q.isKCB,
        y = q.isGem,
        b = q.stock,
        M = o.inject("minChart"),
        E = M.showMinChart,
        j = M.queryMinsChartData,
        x = M.minChartData,
        A = M.beforeShowInputMinChartState,
        G = o.computed(function () {
          return b.value.isGGT;
        }),
        N = o.computed(function () {
          return !o.isEmpty(b.value.secu_quote);
        }),
        P = o.computed(function () {
          var e;
          return (
            (b.value.secu_info &&
              ((e = {}),
              t(e, n.STOCK_STATE.DELISTED, "退市"),
              t(e, n.STOCK_STATE.SUSPENDED, "暂停上市"),
              t(e, n.STOCK_STATE.SUSPENSION, "停牌"),
              t(e, n.STOCK_STATE.PURCHASE, "申购日"),
              t(e, n.STOCK_STATE.UNLIST, "待上市"),
              t(e, n.STOCK_STATE.UNISSUED, "待发行"),
              t(e, n.STOCK_STATE.NORMAL, ""),
              e)[b.value.secu_info.status]) ||
            ""
          );
        }),
        O = o.computed(function () {
          return (
            (b.value.secu_info && n.MARKET_STATE_LABEL[b.value.market_state]) ||
            ""
          );
        }),
        R = o.ref(null),
        D = o.computed(function () {
          return b.value.spreadAcc;
        }),
        B = o.ref(),
        H = o.ref(),
        F = o.ref(!1);
      function z() {
        var t,
          o,
          n,
          r,
          a,
          s = global.getVm().globalData;
        a = "dark" === (void 0 === s ? {} : s).theme ? "dark" : "plain";
        var c = 242;
        G.value ? (c = 332) : p.isAfterTradeStock && (c = 267),
          (R.value = {
            options: {
              useClassicColor: !p.simpleMode,
              skin: a,
              stockUnit: w.value ? "股" : "手",
              layout: "mins-portrait",
              count: c,
              type: "mins",
              labels: G.value
                ? f.getChartScale(
                    null == (o = null == (t = b.value) ? void 0 : t.secu_info)
                      ? void 0
                      : o.stocktype,
                    null == (r = null == (n = b.value) ? void 0 : n.secu_info)
                      ? void 0
                      : r.market
                  )
                : p.isAfterTradeStock
                ? ["09:30", "11:30/13:00", "15:30"]
                : ["09:30", "11:30/13:00", "15:00"],
              panhouRange: p.isAfterTradeStock ? [242, 267] : null,
              market: p.market,
              scode: p.stockCode,
              fixNum: D.value,
              setting: e(
                e({}, i.DEFAULT_SETTING),
                {},
                {
                  vlineCount: 0,
                  hlineCount: 1,
                  yAixsCount: 2,
                  crossLabel: { hideYlabel: !0 },
                  trendline: !1,
                  supportPressureLine: !1,
                  magicNine: !1,
                  macdPattern: !1,
                  gap: !1,
                  ds: !1,
                  zjzf: !1,
                  indicatorCount: 1,
                }
              ),
              hideIndicator: !0,
              isWzqMiniProgram: !0,
              hideAxisY: !0,
              hidePriceLine: !1,
              fontType: "stockFont",
              paddingTop: 10,
              paddingBottom: 10,
              isFreeMiddleLine: !0,
            },
            data: { preClose: 0, items: [] },
            themeSkin: (function () {
              var e = d.getRiseDropColors();
              return {
                plain: { rise: e.rise, drop: e.drop },
                dark: { rise: e.rise, drop: e.drop },
              };
            })(),
          });
      }
      o.watch(
        function () {
          return x.value;
        },
        function (t) {
          R.value = {
            isTrading: b.value.isTradingHour,
            options: e(e({}, R.value.options), {}, { fixNum: D.value }),
            data: { items: t, preClose: +b.value.secu_quote.zsj },
            ready: !0,
          };
        }
      ),
        o.watchEffect(function () {
          if (E.value) {
            var e = o.index.createSelectorQuery().in(S);
            o.nextTick$1(function () {
              e.select(".mins-wrapper")
                .boundingClientRect(function (e) {
                  (B.value = e.width), (H.value = e.height);
                })
                .exec();
            });
          }
        }),
        (C.value = ""),
        (_.value = []);
      var K = o.debounce(function (e) {
        var t = e.detail.value.replace(/\s/g, "");
        g({ keyword: t });
      }, 500);
      function L(e) {
        u.isZeroValue(e) || m("setPrice", e);
      }
      var U = null,
        V = o.watch(
          function () {
            return N.value;
          },
          function (e) {
            if (e)
              try {
                o.index.getStorageSync(l.FIVE_TRANSINFO_ENTRY_TIP) ||
                  ((F.value = !0),
                  o.index.setStorageSync(l.FIVE_TRANSINFO_ENTRY_TIP, !0)),
                  F.value &&
                    (U = setTimeout(function () {
                      F.value = !1;
                    }, 2e3)),
                  V && V();
              } catch (e) {}
          },
          { immediate: !0 }
        );
      return (
        o.onBeforeUnmount(function () {
          U && clearTimeout(U);
        }),
        {
          chartWidth: B,
          chartHeight: H,
          stockInfo: b,
          showMinChart: E,
          isKCB: w,
          isGem: y,
          minChartData: x,
          beforeShowInputMinChartState: A,
          holdStockCache: T,
          searchCode: C,
          fetchHoldStock: I,
          queryMinsChartData: j,
          fixNum: D,
          minsOptions: R,
          stockInfoReady: N,
          statusText: P,
          marketStatusText: O,
          onSearchStock: K,
          showEntryTip: F,
          setPrice: L,
          onClickDqj: function () {
            L(this.stockInfo.secu_quote.dqj), s.stat.click("trade.trade.price");
          },
          onClickPriceCeiling: function () {
            var e,
              t,
              o =
                null == (t = null == (e = b.value) ? void 0 : e.secu_info)
                  ? void 0
                  : t.price_ceiling;
            "--" !== o &&
              "" !== o &&
              (L(o), s.stat.click("trade.trade.harden"));
          },
          onClickPriceFloor: function () {
            var e,
              t,
              o =
                null == (t = null == (e = b.value) ? void 0 : e.secu_info)
                  ? void 0
                  : t.price_floor;
            "--" !== o &&
              "" !== o &&
              (L(o), s.stat.click("trade.trade.limitdown"));
          },
          forceRefresh: function () {
            m("forceRefresh");
          },
          toSafeSetting: function () {
            var e;
            null == (e = c.router()) || e.push({ name: "AccountSafeSetting" });
          },
          toHq: function () {
            s.stat.click("trade.quote-info.tohq.click"),
              o.index.navToQuote({
                market: p.stockMarket,
                code: p.stockCode,
                name: p.stockName,
              });
          },
          handleToggleShowInput: function (e) {
            if (e) {
              if (p.searching) return;
              s.stat.click("trade.trade.change"),
                (A.value = E.value),
                m("searchStateChange", !0),
                (E.value = !1);
            } else
              (C.value = ""),
                g({ keyword: "" }),
                setTimeout(function () {
                  m("searchStateChange", !1), (E.value = A.value);
                }, 100);
          },
          getStockNameClass: function (e) {
            if (a.getPlatform().isZxgMac) return "";
            var t = (null == e ? void 0 : e.length) || 0;
            return t > 7 ? "fs-24" : t > 6 ? "fs-28" : "";
          },
          touchMoveFminus: function () {
            s.stat.click("trade.quote-info.touch.chart");
          },
          onShowMinChart: function () {
            (F.value = !1),
              z(),
              (E.value = !E.value),
              E.value && j(),
              s.stat.click("trade.quote-info.min-chart.".concat(E.value));
          },
          firstInitMinChart: function () {
            var e, t;
            z(),
              (E.value =
                A.value ||
                (null == (t = null == (e = c.route()) ? void 0 : e.query)
                  ? void 0
                  : t.minChart)),
              E.value && j();
          },
          handleError: function (e) {},
        }
      );
    },
  };
Array ||
  (
    o.resolveComponent("ValueColor") +
    o.resolveComponent("TransInfo") +
    o.resolveComponent("mins") +
    o.resolveComponent("Handicap") +
    o.resolveComponent("bubble-tip")
  )(),
  Math;
var h = o._export_sfc(p, [
  [
    "render",
    function (e, t, n, r, i, a) {
      return o.e(
        { a: n.showInput },
        n.showInput
          ? o.e(
              {
                b: r.searchCode,
                c: o.o(function () {
                  return r.onSearchStock && r.onSearchStock.apply(r, arguments);
                }),
                d: o.o(function (e) {
                  return r.handleToggleShowInput(!0);
                }),
                e: n.searching,
              },
              n.searching
                ? {
                    f: o.o(function (e) {
                      return r.handleToggleShowInput(!1);
                    }),
                  }
                : {}
            )
          : o.e(
              {
                g: o.t(n.stockName),
                h: o.n(r.getStockNameClass(n.stockName)),
                i: o.t(n.stockCode),
                j: o.t(e.$filters.marketName(n.stockMarket, ".")),
                k: r.statusText,
              },
              r.statusText
                ? {
                    l: o.t(r.statusText),
                    m: o.n(n.simpleMode ? "" : "border--surround"),
                  }
                : !r.statusText && r.marketStatusText
                ? {
                    o: o.t(r.marketStatusText),
                    p: o.n(n.simpleMode ? "" : "border--surround"),
                    q: o.n(
                      ["交易中", "集合竞价", "盘后交易"].indexOf(
                        r.marketStatusText
                      ) > -1
                        ? "active"
                        : ""
                    ),
                  }
                : {},
              {
                n: !r.statusText && r.marketStatusText,
                r: o.o(function () {
                  return r.toHq && r.toHq.apply(r, arguments);
                }),
                s: o.o(function (e) {
                  return r.handleToggleShowInput(!0);
                }),
                t: n.loading,
              },
              n.loading
                ? {}
                : {
                    v: o.o(function () {
                      return (
                        r.forceRefresh && r.forceRefresh.apply(r, arguments)
                      );
                    }),
                  },
              { w: n.showSafeSetting },
              n.showSafeSetting
                ? {
                    x: o.o(function () {
                      return (
                        r.toSafeSetting && r.toSafeSetting.apply(r, arguments)
                      );
                    }),
                  }
                : {},
              { y: r.stockInfoReady },
              r.stockInfoReady
                ? o.e(
                    {
                      z: o.t(
                        r.stockInfo.secu_quote.dqj ||
                          ("" + r.stockInfo.secu_info.spread).replace(
                            /\d/g,
                            "0"
                          )
                      ),
                      A: o.o(function () {
                        return r.onClickDqj && r.onClickDqj.apply(r, arguments);
                      }),
                      B: o.n(
                        r.stockInfo.secu_quote.dqj &&
                          r.stockInfo.secu_quote.dqj.length > 5
                          ? "fs-32"
                          : ""
                      ),
                      C: o.p({ value: r.stockInfo.secu_quote.zde }),
                      D: o.t(r.stockInfo.secu_quote.zde),
                      E: o.p({ value: r.stockInfo.secu_quote.zde }),
                      F: o.t(r.stockInfo.secu_quote.zdf),
                      G: o.p({ value: r.stockInfo.secu_quote.zdf }),
                      H: o.p({ value: r.stockInfo.secu_quote.dqj }),
                      I: !r.stockInfo.isGGT,
                    },
                    r.stockInfo.isGGT
                      ? {}
                      : {
                          J: o.t(
                            "--" === r.stockInfo.secu_info.price_ceiling &&
                              n.isAfterTradeStock
                              ? "无限制"
                              : r.stockInfo.secu_info.price_ceiling
                          ),
                          K: o.o(function () {
                            return (
                              r.onClickPriceCeiling &&
                              r.onClickPriceCeiling.apply(r, arguments)
                            );
                          }),
                          L: o.t(
                            "--" === r.stockInfo.secu_info.price_floor &&
                              n.isAfterTradeStock
                              ? "无限制"
                              : r.stockInfo.secu_info.price_floor
                          ),
                          M: o.o(function () {
                            return (
                              r.onClickPriceFloor &&
                              r.onClickPriceFloor.apply(r, arguments)
                            );
                          }),
                        }
                  )
                : {},
              {
                N: !r.showMinChart && !r.stockInfo.isGGT,
                O: o.o(r.setPrice),
                P: o.p({
                  "simple-mode": n.simpleMode,
                  "trans-info": n.transInfo,
                }),
                Q: r.showMinChart,
              },
              r.showMinChart
                ? o.e(
                    { R: r.minsOptions && r.minsOptions.ready },
                    r.minsOptions && r.minsOptions.ready
                      ? {
                          S: o.sr("chart", "81ecbd79-5"),
                          T: o.o(r.touchMoveFminus),
                          U: o.o(r.handleError),
                          V: o.p({
                            width: r.chartWidth,
                            height: r.chartHeight,
                            options: r.minsOptions,
                            type: "mins",
                          }),
                        }
                      : {},
                    { W: !r.stockInfo.isGGT },
                    r.stockInfo.isGGT
                      ? {}
                      : {
                          X: o.o(r.setPrice),
                          Y: o.p({
                            market: e.market,
                            scode: e.scode,
                            quote: n.transInfo,
                          }),
                        }
                  )
                : {},
              { Z: r.stockInfo.isGGT },
              r.stockInfo.isGGT
                ? {
                    aa: o.t(r.showMinChart ? "收起" : "展开"),
                    ab: o.n(
                      r.showMinChart ? "icon-arrow-up" : "icon-arrow-down"
                    ),
                  }
                : {
                    ac: o.t(r.showMinChart ? "收起" : "展开"),
                    ad: o.n(
                      r.showMinChart ? "icon-arrow-up" : "icon-arrow-down"
                    ),
                  },
              { ae: r.showEntryTip && !r.stockInfo.isGGT },
              r.showEntryTip && !r.stockInfo.isGGT
                ? {
                    af: o.o(function (e) {
                      return (r.showEntryTip = !1);
                    }),
                    ag: o.p({
                      "is-show": !0,
                      "show-close-btn": !0,
                      "arrow-position": "top-center",
                      content: "五档和分时图移到这里啦",
                    }),
                  }
                : {},
              {
                ah: o.n(r.stockInfo.isGGT ? "switch-bar-ggt" : ""),
                ai: o.o(function () {
                  return (
                    r.onShowMinChart && r.onShowMinChart.apply(r, arguments)
                  );
                }),
              }
            ),
        { aj: o.n(n.simpleMode ? "trade-stock-quote__simple-mode" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-81ecbd79"],
]);
wx.createComponent(h);
