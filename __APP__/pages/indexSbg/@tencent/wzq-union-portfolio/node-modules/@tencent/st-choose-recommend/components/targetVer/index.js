require("../../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../../../common/vendor.js"),
  e = require("../../../../../../stock-mini-mins/api/StockMiniChartApi.js"),
  o = require("../recommend/index.js"),
  n = t.ref({}),
  r = {},
  a = {
    name: "targetVer",
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
      realId: { type: String, default: "" },
    },
    components: {
      StockItemChart: function () {
        return "../../../../../../../../asyncCom/@tencent/stock-mini-mins/component/StockItemChart.js";
      },
    },
    setup: function (a, c) {
      return (function (a, c) {
        var i = c.emit,
          d = null,
          u = t.computed(function () {
            return n.value[a.data.type] || [];
          });
        return (
          t.onMounted(function () {
            var c = a.data.type;
            if (!r[c] && ((r[c] = !0), a.data.list.length)) {
              var i = [];
              a.data.list.forEach(function (t) {
                var e = t.symbol,
                  o = t.type,
                  n = t.zdf,
                  r = +n;
                i.push({
                  chooseSymbol: e,
                  riseDropVal: n,
                  riseDropStyle:
                    0 === r ? "bg-peace" : r > 0 ? "bg-rise" : "bg-drop",
                  stock_type: o,
                });
              }),
                t.set(n.value, c, i),
                (d = setTimeout(function () {
                  e.StockMiniChartApi.batchGetMiniMins(n.value[c], c),
                    e.StockMiniChartApi.drawStocksMins(n.value[c], c);
                }, o.renderDelayMs));
            }
          }),
          t.onBeforeUnmount(function () {
            d && clearTimeout(d), (r = {});
          }),
          {
            hotStock: n,
            curHotStock: u,
            getColor: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return t.includes("-");
            },
            handleStock: function (t) {
              i("viewStock", t, a.data.type);
            },
            handleAdd: function (t) {
              i("addStock", t, a.data.type);
            },
            handleAll: function (t) {
              i("addAllStock", t);
            },
          }
        );
      })(a, { emit: c.emit });
    },
  };
Array || t.resolveComponent("StockItemChart")();
var c = t._export_sfc(a, [
  [
    "render",
    function (e, o, n, r, a, c) {
      return t.e(
        { a: n.data.list && n.data.list.length && n.data.type },
        n.data.list && n.data.list.length && n.data.type
          ? {
              b: t.f(n.data.list, function (o, r, a) {
                return t.e(
                  { a: e.curHotStock && e.curHotStock[r] },
                  e.curHotStock && e.curHotStock[r]
                    ? {
                        b: "80c3db1f-0-" + a,
                        c: t.p({
                          "cell-style": e.curHotStock[r].riseDropStyle,
                          "choose-symbol": e.curHotStock[r].chooseSymbol,
                          "rise-drop-val": e.curHotStock[r].riseDropVal,
                          "tab-id": n.data.type,
                        }),
                      }
                    : {},
                  { d: t.t(o.name), e: o.zdf },
                  o.zdf ? { f: t.t(o.zdf), g: e.getColor(o.zdf) ? 1 : "" } : {},
                  { h: o.dqj },
                  o.dqj ? { i: t.t(o.dqj) } : {},
                  {
                    j: t.o(
                      function (t) {
                        return e.handleStock(o);
                      },
                      4353,
                      r
                    ),
                    k: o.add
                      ? "https://st.gtimg.com/design/d1c5b6897e2f5edf4b8c6b80831a1102.png"
                      : "https://st.gtimg.com/design/bdaf719d2ba81346b0d9b84ff451a64b.png",
                    l: t.o(
                      function (t) {
                        return e.handleAdd(o, r);
                      },
                      4354,
                      r
                    ),
                    m: r,
                  }
                );
              }),
              c: e.isHotcompanies ? 1 : "",
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-80c3db1f"],
]);
wx.createComponent(c);
