var a = require("../../../../../../common/vendor.js");
Array ||
  (
    a.resolveComponent("TradeCompLS") +
    a.resolveComponent("TradeCompCO") +
    a.resolveComponent("TradeCompTECH") +
    a.resolveComponent("TradeCompDL") +
    a.resolveComponent("foldBar")
  )();
var e = a._export_sfc(
  {
    name: "MineSweeping-Trade",
    props: ["data", "mpscrollTop"],
    components: {
      foldBar: function () {
        return "../foldBar.js";
      },
      TradeCompLS: function () {
        return "./tradeCompLS.js";
      },
      TradeCompCO: function () {
        return "./tradeCompCO.js";
      },
      TradeCompDL: function () {
        return "./tradeCompDL.js";
      },
      TradeCompTECH: function () {
        return "./tradeCompTECH.js";
      },
    },
    data: function () {
      return {
        label: [
          {
            type: "限售解禁",
            data: "lift_sale",
            comp: "TradeCompLS",
            label: "tradeLS",
          },
          {
            type: "资金流出",
            data: "cash_out_flow",
            comp: "TradeCompCO",
            label: "tradeCO",
          },
          {
            type: "波动率",
            data: "hist_volatitity",
            comp: "",
            label: "tradeHV",
          },
          { type: "股价表现", data: "price_perf", comp: "", label: "tradePP" },
          {
            type: "技术指标走弱",
            data: "tech",
            comp: "TradeCompTECH",
            label: "tradeTECH",
          },
          {
            type: "成交情况",
            data: "deal",
            comp: "TradeCompDL",
            label: "tradeDL",
          },
        ],
      };
    },
  },
  [
    [
      "render",
      function (e, t, d, o, r, p) {
        return a.e(
          { a: d.data },
          d.data
            ? {
                b: a.f(r.label, function (t, o, p) {
                  return a.e(
                    { a: "TradeCompLS" === t.comp && d.data[t.data] },
                    "TradeCompLS" === t.comp && d.data[t.data]
                      ? {
                          b: "6d1e6710-1-" + p + ",6d1e6710-0-" + p,
                          c: a.p({ type: t.label, data: d.data[t.data] }),
                        }
                      : "TradeCompCO" === t.comp && d.data[t.data]
                      ? {
                          e: "6d1e6710-2-" + p + ",6d1e6710-0-" + p,
                          f: a.p({ type: t.label, data: d.data[t.data] }),
                        }
                      : "TradeCompTECH" === t.comp && d.data[t.data]
                      ? {
                          h: "6d1e6710-3-" + p + ",6d1e6710-0-" + p,
                          i: a.p({ type: t.label, data: d.data[t.data] }),
                        }
                      : "TradeCompDL" === t.comp && d.data[t.data]
                      ? {
                          k: "6d1e6710-4-" + p + ",6d1e6710-0-" + p,
                          l: a.p({ type: t.label, data: d.data[t.data] }),
                        }
                      : {},
                    {
                      d: "TradeCompCO" === t.comp && d.data[t.data],
                      g: "TradeCompTECH" === t.comp && d.data[t.data],
                      j: "TradeCompDL" === t.comp && d.data[t.data],
                      m: a.sr(
                        d.data[t.data].tag.tag_name_eng,
                        "6d1e6710-0-" + p,
                        { f: 1 }
                      ),
                      n: o,
                      o: d.data[t.data].tag.tag_name_eng,
                      p: a.n(o === r.label.length - 1 ? "last" : ""),
                      q: a.o(
                        function (a) {
                          return e.$emit("foldChange");
                        },
                        2890,
                        o
                      ),
                      r: "6d1e6710-0-" + p,
                      s: a.p({
                        title: t.type,
                        type: t.label,
                        data: d.data[t.data],
                        mpscrollTop: d.mpscrollTop,
                      }),
                    }
                  );
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6d1e6710"],
  ]
);
wx.createComponent(e);
