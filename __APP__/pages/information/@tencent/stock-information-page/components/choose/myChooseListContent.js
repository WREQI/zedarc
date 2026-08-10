var t = require("../../../stock-hq-core/utils/market.js"),
  e = require("../../../stock-news-core/utils/market.js"),
  o = require("../../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  n = require("../../../../../../common/vendor.js"),
  s = o.detect().env.IS_ZXG_XCX_ALLH5,
  r = {
    components: {
      Supporter: function () {
        return "../Supporter.js";
      },
      Empty: function () {
        return "../Empty.js";
      },
    },
    props: {
      chooseList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      dataReady: { type: Boolean, default: !1 },
      loadAll: { type: Boolean, default: !1 },
      qtData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { isInMpZxg: s };
    },
    methods: {
      open: function (t, e) {
        this.$emit("open", t, e);
      },
      stockMarketIcon: function (t) {
        return t && e.getMarketIcon(t);
      },
      symbol2qtCode: function (e) {
        return t.trimScode(null != e ? e : "").replace(".", "__");
      },
      qtZdf: function (t) {
        var e = this.qtData[this.symbol2qtCode(t)];
        return e && e[5] ? (e[5] > 0 ? "+".concat(e[5]) : e[5]) : "";
      },
      qtName: function (t, e) {
        var o = this.qtData[this.symbol2qtCode(t)];
        return o && o[1] && o[1].length > 0 ? o[1] : e;
      },
    },
  };
Array || (n.resolveComponent("Empty") + n.resolveComponent("Supporter"))();
var c = n._export_sfc(r, [
  [
    "render",
    function (t, e, o, s, r, c) {
      return n.e(
        { a: o.chooseList && o.chooseList.length },
        o.chooseList && o.chooseList.length
          ? {
              b: n.f(o.chooseList, function (t, e, o) {
                return n.e(
                  { a: t.stock },
                  t.stock
                    ? {
                        b: c.stockMarketIcon(t.stock.symbol),
                        c: n.t(c.qtName(t.stock.symbol, t.stock.name)),
                        d: n.t(
                          0 == c.qtZdf(t.stock.symbol).length
                            ? ""
                            : c.qtZdf(t.stock.symbol) + "%"
                        ),
                        e: n.n(
                          0 === c.qtZdf(t.stock.symbol)
                            ? "stop"
                            : c.qtZdf(t.stock.symbol) > 0
                            ? "red"
                            : "green"
                        ),
                        f: n.o(
                          function (e) {
                            return c.open(t, "stock");
                          },
                          3442,
                          e
                        ),
                      }
                    : {},
                  { g: n.t(t.title), h: t.stock && t.stock.logo },
                  t.stock && t.stock.logo
                    ? { i: "url(" + t.stock.logo + ")" }
                    : {},
                  {
                    j: n.o(
                      function (e) {
                        return c.open(t);
                      },
                      3443,
                      e
                    ),
                    k: t.source,
                  },
                  t.source ? { l: n.t(t.source) } : {},
                  {
                    m: n.t(t.time),
                    n: n.o(
                      function (e) {
                        return c.open(t);
                      },
                      3444,
                      e
                    ),
                    o: n.n(t.read ? "read" : ""),
                    p: e,
                  }
                );
              }),
            }
          : o.dataReady
          ? { d: n.p({ text: "添加自选后将显示所选股票的相关新闻" }) }
          : {},
        { c: o.dataReady, e: !r.isInMpZxg && o.chooseList.length },
        !r.isInMpZxg && o.chooseList.length
          ? { f: n.p({ loadAll: o.loadAll }) }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-2e21a91d"],
]);
wx.createComponent(c);
