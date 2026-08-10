require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  c = function (e, o, r) {
    return o in e
      ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[o] = r);
  },
  s = function (t, o) {
    for (var r in o || (o = {})) a.call(o, r) && c(t, r, o[r]);
    if (n) {
      var s,
        l = e(n(o));
      try {
        for (l.s(); !(s = l.n()).done; ) {
          r = s.value;
          i.call(o, r) && c(t, r, o[r]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return t;
  },
  l = function (e, t) {
    return o(e, r(t));
  },
  u = require("../../../../../common/vendor.js"),
  d = require("../../stock-hq-core/utils/market.js"),
  f = require("basketListCore.js"),
  g = require("../const/index.js"),
  p = require("../../stock-hq-data/index.js"),
  h = u.defineComponent({
    components: {
      basketFooter: function () {
        return "./basketFooter.js";
      },
    },
    props: {
      rootClass: { type: [String, Array], default: "" },
      gdId: { type: String, required: !0 },
      categoryId: { type: String, default: "" },
      rankingData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      columnNum: { type: [Number, String], default: 2 },
      rowNum: { type: Number, default: 2 },
      reportPrefix: { type: String, default: "" },
      reportExtra: {
        type: Object,
        default: function () {
          return {};
        },
      },
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      newsData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isShowFooter: { type: Boolean, default: !1 },
      isSearchAi: { type: Boolean, default: !1 },
      isToMockTrade: { type: Boolean, default: !1 },
      routeMockTradeParam: {
        type: Object,
        default: function () {
          return {};
        },
      },
      skin: { type: String, default: "white" },
    },
    emits: ["goToStockDetail", "goToMockTrade", "goToChoosePage"],
    setup: function (e, t) {
      var o = t.emit,
        r = f.getBasketComputedData(e, o),
        n = r.cFields,
        a = r.cTableData,
        i = r.toAddIndexList,
        c = r.getStockNameFontType,
        h = r.goToStockDetail,
        m = r.reportLog,
        b = r.cFooterTotalDesc,
        T = r.onTableToggleClick,
        k = r.onAllTableToggleClick,
        y = u.computed(function () {
          return "white" === e.skin
            ? g.NOT_ADDED_ICON_URL
            : g.NOT_ADDED_ICON_URL_BLACK;
        }),
        D = u.ref(null),
        S = u.ref(null),
        x = u.ref(null);
      return (
        u.watch(
          a,
          function (t, o) {
            e.isSearchAi &&
              t &&
              t.forEach(function (t, r) {
                (o &&
                  o.some(function (e) {
                    return e.symbol === t.symbol;
                  })) ||
                  m(
                    "watchlist_zixuan_brow",
                    r,
                    s(
                      {
                        stocklist: t.symbol,
                        hasaddlist: t.watched ? "1" : "0",
                        foperation_purpose: "zixuan",
                      },
                      e.reportExtra
                    )
                  );
              });
          },
          { deep: !0, immediate: !0 }
        ),
        u.watch(
          i,
          function (t, o) {
            if (
              e.isSearchAi &&
              (null == t ? void 0 : t.length) !==
                (null == o ? void 0 : o.length)
            )
              if (t.length <= 0)
                m(
                  "watchlist_route_choose_brow",
                  0,
                  l(s({}, e.reportExtra), { watchlist_id: e.gdId })
                );
              else {
                var r = [],
                  n = [],
                  a = [];
                t.forEach(function (e, t) {
                  e.watched && (r.push(e.symbol), n.push(t), a.push("1"));
                }),
                  m(
                    "watchlist_all_zixuan_brow",
                    0,
                    l(s({}, e.reportExtra), {
                      stocklist: r.join(","),
                      position: n.join(","),
                      hasaddlist: a.join(","),
                      foperation_purpose: "zixuan",
                      watchlist_id: e.gdId,
                    })
                  );
              }
          },
          { deep: !0, immediate: !0 }
        ),
        {
          cFields: n,
          cTableData: a,
          toAddIndexList: i,
          findImage: function (e, t, o) {
            return [
              "FJ",
              "FJ-CX",
              "KJ",
              "LOF",
              "ETF",
              "QDII-LOF",
              "QDII-ETF",
            ].includes(t)
              ? "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/cnjj.svg"
              : p.utils.isIndex(t) || p.utils.isCSIndex(t)
              ? 2 == +e
                ? "https://st.gtimg.com/design/1f1f39518ac98d1b1e0b2568b3bb34f3.png"
                : 3 == +e
                ? "https://st.gtimg.com/design/ea7e53a2fe55a3a38b61a7ab8d68ed4d.png"
                : "https://st.gtimg.com/design/46376ba579d819af0330e16450a2ce49.png"
              : p.utils.isDebt(t) ||
                p.utils.isNationalDebt(t) ||
                p.utils.isTransferableDebt(t)
              ? "https://st.gtimg.com/design/9f6cb82efd2fa09e584ddb8ac69bdc05.png"
              : d.transMarketIcon(e, t, o);
          },
          goToStockDetail: h,
          getStockNameFontType: c,
          reportLog: m,
          cFooterTotalDesc: b,
          onTableToggleClick: T,
          onAllTableToggleClick: k,
          onBasketFooterClick: function (e) {
            o("basketFooterClick", e);
          },
          ADDED_ICON_URL: g.ADDED_ICON_URL,
          NOT_ADDED_ICON: y,
          getStyle: function (t, o, r) {
            return e.isSearchAi
              ? { flex: t ? 4 : 3 }
              : {
                  width:
                    1 === t ? "".concat(Math.min(16 * r, 146), "px") : "auto",
                };
          },
          addIconRef: D,
          routeBtnRef: S,
          addAllBtnRef: x,
          goToChoosePage: function () {
            m(
              "watchlist_route_choose_click",
              0,
              l(s({}, e.reportExtra), { watchlist_id: e.gdId })
            ),
              o("goToChoosePage"),
              u.StockBridge.busEmit("market-goToChoosePage"),
              (e.isSearchAi &&
                0 === Object.keys(e.routeMockTradeParam).length) ||
                ("mpweapp" === u.ShellTypeEnum.SHY
                  ? shy.navigateTo({ url: "qqstock://zixuan" })
                  : u.StockRouter.routeTo({ name: "ChooseIndex" }));
          },
          goToMockTrade: function () {
            o("goToMockTrade");
          },
        }
      );
    },
  });
Array || u.resolveComponent("basket-footer")();
var m = u._export_sfc(h, [
  [
    "render",
    function (e, t, o, r, n, a) {
      return u.e(
        {
          a: u.f(e.cFields, function (t, o, r) {
            return {
              a: u.t(t.name),
              b: o,
              c: 0 === o ? 1 : "",
              d: t.name.length > 5 && t.name.length < 11 ? 1 : "",
              e: t.name.length >= 11 ? 1 : "",
              f: 0 !== o && t.maxTextLen < 6 ? 1 : "",
              g: t.maxTextLen,
              h: u.s(e.getStyle(o, e.cFields.length, t.maxTextLen)),
            };
          }),
          b: u.f(e.cTableData, function (t, o, r) {
            return u.e(
              e.isSearchAi
                ? {}
                : { a: e.findImage(t.market, t.stockType, t.symbol) },
              { b: u.t(t.cnName), c: u.n(e.getStockNameFontType(t.cnName)) },
              e.isSearchAi
                ? {
                    d: e.findImage(t.market, t.stockType, t.symbol),
                    e: u.t(t.scode),
                  }
                : {},
              {
                f: o,
                g: o,
                h: u.o(
                  function (o) {
                    return e.goToStockDetail(t);
                  },
                  2998,
                  o
                ),
              }
            );
          }),
          c: !e.isSearchAi,
          d: e.isSearchAi,
          e: u.f(e.cTableData, function (t, o, r) {
            return {
              a: u.f(e.cFields, function (o, r, n) {
                return {
                  a: u.t(t[o.key]),
                  b: r,
                  c: u.n(0 === r ? "flex-1" : ""),
                  d: u.n(
                    o.describe && "up_down" === o.describe.color
                      ? parseFloat(t[o.key]) >= 0
                        ? parseFloat(t[o.key])
                          ? "rise"
                          : "flat"
                        : "drop"
                      : ""
                  ),
                  e: u.n(0 !== r && o.maxTextLen < 6 && "add-margin-left"),
                  f: o.maxTextLen,
                  g: u.s(e.getStyle(r, e.cFields.length, o.maxTextLen)),
                };
              }),
              b: o,
              c: u.o(
                function (o) {
                  return e.goToStockDetail(t);
                },
                2999,
                o
              ),
            };
          }),
          f: e.isSearchAi,
        },
        e.isSearchAi
          ? {
              g: u.f(e.cTableData, function (t, o, r) {
                return u.e(
                  { a: t.watched },
                  t.watched ? { b: e.ADDED_ICON_URL } : { c: e.NOT_ADDED_ICON },
                  {
                    d: o,
                    e: o,
                    f: u.o(
                      function (t) {
                        return e.onTableToggleClick(o);
                      },
                      3e3,
                      o
                    ),
                  }
                );
              }),
            }
          : {},
        { h: e.isSearchAi },
        e.isSearchAi
          ? u.e(
              { i: e.toAddIndexList.length <= 0 },
              e.toAddIndexList.length <= 0
                ? {
                    j: u.o(function () {
                      return (
                        e.goToChoosePage && e.goToChoosePage.apply(e, arguments)
                      );
                    }, 3001),
                  }
                : {
                    k: u.t(e.toAddIndexList.length),
                    l: u.o(function () {
                      return (
                        e.onAllTableToggleClick &&
                        e.onAllTableToggleClick.apply(e, arguments)
                      );
                    }, 3002),
                  },
              { m: u.n(e.isShowFooter ? "" : "padding-bottom-24px") }
            )
          : {},
        { n: e.isShowFooter },
        e.isShowFooter
          ? {
              o: u.o(e.onBasketFooterClick, 3003),
              p: u.o(e.goToMockTrade, 3004),
              q: u.p({
                desc: e.cFooterTotalDesc,
                "is-to-mock-trade": e.isToMockTrade,
                "route-mock-trade-param": e.routeMockTradeParam,
                skin: e.skin,
              }),
            }
          : {},
        { r: u.n(e.rootClass), s: u.n("white" !== e.skin ? "skin-black" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-0e04e3f9"],
]);
wx.createComponent(m);
