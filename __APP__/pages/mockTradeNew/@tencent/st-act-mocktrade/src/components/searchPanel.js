require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../services/BaseController.js"),
  t = require("../../../../../../common/vendor.js"),
  r = ["wzqlight", "mpwzq"],
  n = {
    props: {
      currentTab: { type: Number, default: 0 },
      searching: { type: Boolean, default: !1 },
      name: { type: String, default: "" },
      stockList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      search: { type: String, default: "" },
      emptyTip: { type: Boolean, default: !1 },
      fetchData: { type: Function, default: function () {} },
    },
    created: function () {},
    setup: function (n, o) {
      var a,
        c = o.emit,
        i = t.ref(e.MARKET_CODE),
        s = t.ref(!0),
        u = t.ref(["近期搜索", "持仓股票", "自选股票"]),
        m = t.ref(r.includes("mpweapp"));
      return (
        t.watch(
          function () {
            return n.stockList;
          },
          function (e) {
            e.length && (s.value = !1);
          }
        ),
        (null == (a = n.stockList) ? void 0 : a.length) && (s.value = !1),
        {
          onClear: function () {
            c("clear");
          },
          goStock: function (e) {
            c("goStock", e);
          },
          toggleTab: function (e) {
            c("toggleTab", e);
          },
          isLight: m,
          SEARCH_TAB_LIST: e.SEARCH_TAB_LIST,
          marketCode: i,
          isFirst: s,
          nameList: u,
        }
      );
    },
  },
  o = t._export_sfc(n, [
    [
      "render",
      function (e, r, n, o, a, c) {
        return t.e(
          { a: !n.search },
          n.search
            ? {}
            : t.e(
                {
                  b: t.f(o.nameList, function (e, r, a) {
                    return {
                      a: t.t(e),
                      b: t.o(
                        function (e) {
                          return o.toggleTab(r);
                        },
                        4157,
                        r
                      ),
                      c: t.n(
                        n.currentTab === r
                          ? "stock-header--title-actived " +
                              (o.isLight ? "light" : "classic")
                          : ""
                      ),
                      d: r,
                    };
                  }),
                  c: n.currentTab === o.SEARCH_TAB_LIST.SEARCH_HISTORY,
                },
                n.currentTab === o.SEARCH_TAB_LIST.SEARCH_HISTORY
                  ? {
                      d: t.o(function () {
                        return o.onClear && o.onClear.apply(o, arguments);
                      }, 4158),
                    }
                  : {}
              ),
          {
            e: t.f(n.stockList, function (e, r, n) {
              return t.e(
                { a: t.t(e.name), b: e.matchCode },
                e.matchCode
                  ? t.e(
                      { c: e.market === o.marketCode.sh },
                      (e.market === o.marketCode.sh ||
                        (e.market, o.marketCode.sz),
                      {}),
                      {
                        d: e.market === o.marketCode.sz,
                        e: t.t(e.preCode),
                        f: t.t(e.matchCode),
                        g: t.t(e.restCode),
                      }
                    )
                  : t.e(
                      { h: e.market === o.marketCode.sh },
                      (e.market, o.marketCode.sh, {}),
                      { i: e.market === o.marketCode.sz },
                      (e.market, o.marketCode.sz, {}),
                      { j: t.t(e.code) }
                    ),
                {
                  k: e.code,
                  l: t.o(
                    function (t) {
                      return o.goStock(e);
                    },
                    4159,
                    e.code
                  ),
                }
              );
            }),
            f: n.stockList.length,
            g: !n.stockList.length,
          },
          n.stockList.length
            ? {}
            : t.e({ h: n.emptyTip }, (n.emptyTip, {}), {
                i: t.n(n.emptyTip ? "stock-empty" : "stock-tab-empty"),
              })
        );
      },
    ],
    ["__scopeId", "data-v-5004bcc6"],
  ]);
wx.createComponent(o);
