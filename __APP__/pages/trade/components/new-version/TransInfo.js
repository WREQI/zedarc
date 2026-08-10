require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  t = require("../../../../model/trade/useStockInfo.js"),
  e = require("../../../../config/key.js"),
  r = require("../../../../utils/market.js"),
  a = {
    props: {
      transInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      simpleMode: { type: Boolean, default: !1 },
    },
    setup: function () {
      return { stockInfo: n.inject("trade").stock };
    },
    data: function () {
      return { infoNum: 5 };
    },
    computed: {
      infoNumArr: function () {
        return Array.from({ length: 1 }, function (n, t) {
          return t + 1;
        });
      },
    },
    mounted: function () {
      var t = n.index.getStorageSync(e.TRADE_TRANS_INFO_NUM);
      this.infoNum = t || 5;
    },
    methods: {
      changeTransInfo: function () {
        5 === this.infoNum
          ? ((this.infoNum = 1),
            n.index.setStorageSync(e.TRADE_TRANS_INFO_NUM, 1),
            this.$stat.click("trade.trade.transinfo.num5"))
          : 1 === this.infoNum &&
            ((this.infoNum = 5),
            n.index.setStorageSync(e.TRADE_TRANS_INFO_NUM, 5),
            this.$stat.click("trade.trade.transinfo.num1"));
      },
      handleMoney: function (n, e) {
        var a = "";
        "buy" === n
          ? ((a = this.transInfo.fiveTrans["mrjg".concat(e)]),
            this.$stat.click(
              "trade.trade.bid.buy".concat(e),
              void 0,
              void 0,
              r.getStatStockId(this.stockInfo)
            ))
          : "sell" === n &&
            ((a = this.transInfo.fiveTrans["mcjg".concat(e)]),
            this.$stat.click(
              "trade.trade.ask.sell".concat(e),
              void 0,
              void 0,
              r.getStatStockId(this.stockInfo)
            )),
          t.isZeroValue(a) || this.$emit("setPrice", a);
      },
      handleNum: function (e, r) {
        var a = n.get(this.stockInfo, "secu_info.trd_unit", 0),
          s = "";
        "buy" === e
          ? ((s = this.transInfo.fiveTrans["mrsl".concat(r)]),
            this.$stat.click("trade.trade.num.buy".concat(r)))
          : "sell" === e &&
            ((s = this.transInfo.fiveTrans["mcsl".concat(r)]),
            this.$stat.click("trade.trade.num.sell".concat(r))),
          t.isZeroValue(s) || this.$emit("setAmount", s * a);
      },
      isZeroValue: t.isZeroValue,
    },
  };
Array || n.resolveComponent("ValueColor")(), Math;
var s = n._export_sfc(a, [
  [
    "render",
    function (t, e, r, a, s, o) {
      return n.e(
        { a: 0 == r.transInfo.percent.buy && 0 == r.transInfo.percent.sell },
        0 == r.transInfo.percent.buy && 0 == r.transInfo.percent.sell
          ? {}
          : {
              b:
                "--" === r.transInfo.percent.buy
                  ? "50%"
                  : r.transInfo.percent.buy + "%",
              c:
                "--" === r.transInfo.percent.sell
                  ? "50%"
                  : r.transInfo.percent.sell + "%",
            },
        {
          d: n.f(o.infoNumArr, function (t, e, a) {
            return n.e(
              {
                a: n.t(t),
                b: n.t(r.transInfo.fiveTrans["mrjg" + t] || "--"),
                c: "b1ea49aa-1-" + a + ",b1ea49aa-0-" + a,
                d: n.p({
                  value:
                    r.transInfo.fiveTrans["mrjg" + t] -
                      r.transInfo.yestodayPrice || 0,
                }),
                e: o.isZeroValue(r.transInfo.fiveTrans["mrsl" + t]),
              },
              o.isZeroValue(r.transInfo.fiveTrans["mrsl" + t])
                ? {}
                : { f: n.t(r.transInfo.fiveTrans["mrsl" + t]) },
              {
                g: n.o(function (n) {
                  return o.handleMoney("buy", t);
                }, t),
                h: t,
                i: "b1ea49aa-0-" + a,
                j: n.p({
                  animate: !0,
                  value: r.transInfo.fiveTrans["mrsl" + t] || 0,
                }),
              }
            );
          }),
          e: n.f(o.infoNumArr, function (t, e, a) {
            return n.e(
              { a: o.isZeroValue(r.transInfo.fiveTrans["mcsl" + t]) },
              o.isZeroValue(r.transInfo.fiveTrans["mcsl" + t])
                ? {}
                : { b: n.t(r.transInfo.fiveTrans["mcsl" + t]) },
              {
                c: n.t(r.transInfo.fiveTrans["mcjg" + t] || "--"),
                d: "b1ea49aa-3-" + a + ",b1ea49aa-2-" + a,
                e: n.p({
                  value:
                    r.transInfo.fiveTrans["mcjg" + t] -
                      r.transInfo.yestodayPrice || 0,
                }),
                f: n.t(t),
                g: n.o(function (n) {
                  return o.handleMoney("sell", t);
                }, t),
                h: t,
                i: "b1ea49aa-2-" + a,
                j: n.p({
                  animate: !0,
                  value: r.transInfo.fiveTrans["mcsl" + t] || 0,
                }),
              }
            );
          }),
          f: n.n(r.simpleMode ? "trans-info__simple-mode" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b1ea49aa"],
]);
wx.createComponent(s);
