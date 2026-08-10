var t = require("../../../../../../common/vendor.js");
require("../../../stock-hq-data/api/hostConfig.js");
var e = {
  name: "StockListItem",
  options: { styleIsolation: "shared" },
  props: {
    symbol: String,
    item: Object,
    type: String,
    skin: String,
    showMoreFields: Boolean,
    showStockBrief: Boolean,
  },
  components: {
    MarketIcon: function () {
      return "../../../stock-markets-base/components/MarketIcon.js";
    },
  },
  inject: ["hqBridge"],
  data: function () {
    return { m: { sz: "0", sh: "1", hk: "2", us: "3" } };
  },
  computed: {
    showData: function () {
      return "--" !== this.item.stock_name;
    },
    isMp: function () {
      return "mp" === this.hqBridge.ENV;
    },
    market: function () {
      return this.item.stock_code.slice(-2).toLowerCase();
    },
    scode: function () {
      return this.item.stock_code.slice(0, -3);
    },
  },
  methods: {
    setStyle: function (t) {
      return 0 == +t ? "gray" : /^-/.test(t) ? "green" : "red";
    },
    setData: function (t) {
      var e = +t;
      return 0 === e ? e.toFixed(2) : (/^-/.test(e) ? "" : "+") + e.toFixed(2);
    },
    dataFormat: function (t, e) {
      return (t / 1e4).toFixed(2) + ["万", "亿"][e];
    },
    setFS: function (t) {
      var e = (t / 1e4).toFixed(2).toString();
      return e.length > 8 ? "fs-28" : e.length > 7 ? "fs-30" : void 0;
    },
    goToStock: function (t) {
      if (t && "--" !== t) {
        var e = this.m[this.market],
          o = this.scode;
        !isNaN(e) &&
          o &&
          ("wzq" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              name: "HqStock",
              params: { market: e, code: o },
            }),
          "oem" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              path: "/detail",
              query: { market: e, scode: o },
            }),
          "mini" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              path: "/detail",
              query: { scode: o, type: e },
            }),
          "mp" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              url: "/pages/quote/quote?market=".concat(e, "&scode=").concat(o),
            }),
          this.hqBridge.report("hq.plate_detail.stock_detail_click", {
            stockid: this.symbol,
          }));
      }
    },
  },
};
Array || t.resolveComponent("market-icon")();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, a, i, s, r) {
      return t.e(
        { a: "freeze" === a.type },
        "freeze" === a.type
          ? t.e(
              { b: t.t(a.item.stock_name), c: r.showData },
              r.showData
                ? t.e(
                    {
                      d: t.p({
                        market: r.market,
                        scode: r.scode,
                        type: a.item.stock_type,
                      }),
                      e: t.t(
                        r.showData ? a.item.stock_code.slice(0, -3) : "--"
                      ),
                      f:
                        a.item.tags &&
                        a.item.tags.length > 0 &&
                        !a.showStockBrief,
                    },
                    a.item.tags && a.item.tags.length > 0 && !a.showStockBrief
                      ? {
                          g: t.t(r.showData ? a.item.tags[0] : ""),
                          h: t.n(
                            -1 == a.item.tags[0].indexOf("龙头")
                              ? "white-tag"
                              : ""
                          ),
                        }
                      : {},
                    { i: t.n(r.isMp ? "code-mp" : "") }
                  )
                : {}
            )
          : {},
        { j: "overflow" === a.type },
        "overflow" === a.type
          ? t.e(
              {
                k: t.t(r.showData ? a.item.price.toFixed(2) : "--"),
                l: t.t(
                  r.showData
                    ? "".concat(r.setData(a.item.change_percent), "%")
                    : "--"
                ),
                m: t.n(r.showData ? r.setStyle(a.item.change_percent) : ""),
                n: t.t(
                  r.showData ? r.dataFormat(a.item.main_net_inflow, 0) : "--"
                ),
                o: t.n(r.showData ? r.setFS(a.item.main_net_inflow) : ""),
                p: t.t(r.showData ? r.setData(a.item.price_change) : "--"),
                q: t.n(r.showData ? r.setStyle(a.item.price_change) : ""),
                r: a.showMoreFields,
              },
              a.showMoreFields
                ? {
                    s: t.t(
                      r.showData
                        ? "".concat(a.item.turnover_ratio.toFixed(2), "%")
                        : "--"
                    ),
                    t: t.t(
                      r.showData ? a.item.quantity_ratio.toFixed(2) : "--"
                    ),
                    v: t.t(
                      r.showData
                        ? "".concat(a.item.amplitude.toFixed(2), "%")
                        : "--"
                    ),
                    w: t.t(
                      r.showData
                        ? r.dataFormat(a.item.turnover_amount, 0)
                        : "--"
                    ),
                    x: t.t(
                      r.showData ? r.dataFormat(a.item.turnover_money, 1) : "--"
                    ),
                    y: t.t(r.showData ? a.item.pe_ttm.toFixed(2) : "--"),
                    z: t.t(
                      r.showData
                        ? "".concat(a.item.liutong_cap.toFixed(2), "亿")
                        : "--"
                    ),
                    A: t.t(
                      r.showData
                        ? "".concat(a.item.market_cap.toFixed(2), "亿")
                        : "--"
                    ),
                  }
                : {}
            )
          : {},
        {
          B: "black" === a.skin ? 1 : "",
          C: a.item.code,
          D: t.o(function (t) {
            return r.goToStock(a.item.stock_code);
          }, 2811),
        }
      );
    },
  ],
  ["__scopeId", "data-v-4c34bef9"],
]);
wx.createComponent(o);
