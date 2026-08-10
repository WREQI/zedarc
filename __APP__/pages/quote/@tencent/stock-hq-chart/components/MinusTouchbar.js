require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  a = require("../../stock-hq-data/index.js"),
  e = require("../../../components/ChartWrapper.js"),
  o = {
    props: ["market", "stockType", "data", "landscape"],
    computed: {
      isMP: function () {
        return "mp" === t.StockBridge.ENV;
      },
      isBCCurrency: function () {
        return a.utils.isBCCurrency(this.market);
      },
      supportPanhou: function () {
        return (
          a.utils.isHSMarket(this.market) &&
          (a.utils.isAMarket(this.stockType) ||
            a.utils.isKeChuangStock(this.stockType) ||
            a.utils.isChuangYeStock(this.stockType) ||
            ["ETF", "QDII-ETF"].includes(this.stockType))
        );
      },
      showVolume: function () {
        return (
          !a.utils.isUKMarket(this.market) &&
          !a.utils.isFTIndex(this.market) &&
          !a.utils.isForex(this.market)
        );
      },
      formatData: function () {
        if (this.data.auction) {
          var t = this.data,
            o = t.bottomval,
            r = t.p,
            s = t.preClosePrice,
            i = t.b1v,
            c = t.b2v,
            n = t.s2v,
            u = r - s,
            m = void 0 !== i,
            l = e.getTradeUnit(this.stockType, this.market);
          return {
            time: o,
            price: r,
            zdf: ""
              .concat(u > 0 ? "+" : "")
              .concat(((100 * u) / s).toFixed(2), "%"),
            zdClass: this.getColorClass(u),
            volumeMatch: m
              ? "".concat(a.utils.bigNumberToText(i)).concat(l)
              : "--",
            volumeUnmatch: m
              ? "".concat(a.utils.bigNumberToText(+c + +n)).concat(l)
              : "--",
            volumeClass: m ? this.getColorClass(c - n) : "",
          };
        }
        var h = this.data,
          d = h.bottomval,
          f = h.price,
          p = h.preClosePrice,
          C = h.volume,
          k = f - p,
          v = (100 * k) / p;
        return {
          time: d,
          price: this.isBCCurrency ? a.utils.formatCurrency(f) : f,
          zde: "".concat(k > 0 ? "+" : "").concat(k.toFixed(this.data.fixNum)),
          zdf: ""
            .concat(k > 0 ? "+" : "")
            .concat(v.toFixed(0 !== k && Math.abs(v) < 0.01 ? 3 : 2), "%"),
          zdClass: this.getColorClass(k),
          volume: this.hackVolume(C),
          volumeCorner: this.supportPanhou ? (d > "15:00" ? "固" : "竞") : "",
        };
      },
    },
    methods: {
      getColorClass: function (t) {
        return 0 === t ? "color-equal" : t > 0 ? "color-rise" : "color-drop";
      },
      hackVolume: function (t) {
        if (
          a.utils.isHKMarket(this.market) &&
          a.utils.isIndex(this.stockType)
        ) {
          var o = 1e4 * t;
          return o >= 1e11
            ? "".concat((o / 1e8).toFixed(2), "亿元")
            : "".concat(a.utils.bigNumberToText(o), "元");
        }
        return ""
          .concat(a.utils.bigNumberToText(t))
          .concat(e.getTradeUnit(this.stockType, this.market));
      },
    },
  },
  r = t._export_sfc(o, [
    [
      "render",
      function (a, e, o, r, s, i) {
        return t.e(
          { a: o.data.auction },
          o.data.auction
            ? {
                b: t.t(i.formatData.time),
                c: t.t(i.formatData.price),
                d: t.n(i.formatData.zdClass),
                e: t.t(i.formatData.zdf),
                f: t.n(i.formatData.zdClass),
                g: t.t(i.formatData.volumeMatch),
                h: t.t(i.formatData.volumeUnmatch),
                i: t.n(i.formatData.volumeClass),
              }
            : t.e(
                {
                  j: t.t(i.formatData.time),
                  k: t.t(i.formatData.price),
                  l: t.n(i.formatData.zdClass),
                  m: t.t(i.formatData.zdf),
                  n: t.n(i.formatData.zdClass),
                  o: t.t(i.formatData.zde),
                  p: t.n(i.formatData.zdClass),
                  q: i.showVolume,
                },
                i.showVolume
                  ? t.e(
                      { r: i.formatData.volumeCorner },
                      i.formatData.volumeCorner
                        ? { s: t.t(i.formatData.volumeCorner) }
                        : {},
                      { t: t.t(i.formatData.volume) }
                    )
                  : {}
              )
        );
      },
    ],
    ["__scopeId", "data-v-e42fcac0"],
  ]);
wx.createComponent(r);
