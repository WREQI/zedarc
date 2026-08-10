require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  a = require("../../stock-hq-data/index.js"),
  s = require("../../../components/ChartWrapper.js"),
  e = {
    props: ["market", "stockType", "data", "landscape"],
    computed: {
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
      isShowNewFields: function () {
        return (
          (a.utils.isHSMarket(this.market) ||
            a.utils.isBJMarket(this.market) ||
            a.utils.isNQMarket(this.market)) &&
          !a.utils.isIndex(this.stockType) &&
          [
            "GP",
            "GP-A",
            "GP-B",
            "GP-A-CYB",
            "GP-A-KCB",
            "ZQ-KZZ",
            "ETF",
          ].indexOf(this.stockType) > -1
        );
      },
      showZJZX: function () {
        return (
          !a.utils.isDebt(this.stockType) &&
          !a.utils.isNationalDebt(this.stockType)
        );
      },
      showVolume: function () {
        return (
          !a.utils.isUKMarket(this.market) && !a.utils.isFTIndex(this.market)
        );
      },
      lastKey: function () {
        return a.utils.isFutures(this.market)
          ? "持仓"
          : this.formatData.hsl
          ? "换手"
          : "振幅";
      },
      lastValue: function () {
        return a.utils.isFutures(this.market)
          ? a.utils.bigNumberToText(this.formatData.oi)
          : this.formatData.hsl
          ? "".concat(this.formatData.hsl, "%")
          : "".concat(this.formatData.zf, "%");
      },
      formatData: function () {
        var s =
            a.utils.isHKMarket(this.market) && a.utils.isIndex(this.stockType),
          e = this.data,
          o = e.time,
          r = e.close,
          i = e.preClose,
          l = e.open,
          n = e.high,
          m = e.low,
          c = e.cje,
          u = e.volume,
          f = e.oi,
          h = e.hsl,
          d = e.fixNum,
          D = e.lastKlineClose,
          C = e.isMinuteKline,
          k = C ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD",
          p = r - i,
          z = (100 * p) / Math.abs(i),
          j = (((D - i) / i) * 100).toFixed(2);
        return {
          time: t.dayjs(o, ["YYYY-MM-DD", "YYYYMMDDHHmm"], !0).format(k),
          week: this.formatWeek(o),
          openClass: this.getColorClass(l - i),
          cje: a.utils.bigNumberToText(1e4 * c),
          jkj: this.isBCCurrency ? a.utils.formatCurrency(l) : l.toFixed(d),
          closeClass: this.getColorClass(p),
          dqj: this.isBCCurrency ? a.utils.formatCurrency(r) : r.toFixed(d),
          zgj: this.isBCCurrency ? a.utils.formatCurrency(n) : n.toFixed(d),
          highClass: this.getColorClass(n - i),
          zdj: this.isBCCurrency ? a.utils.formatCurrency(m) : m.toFixed(d),
          lowClass: this.getColorClass(m - i),
          zde: "".concat(p > 0 ? "+" : "").concat(p.toFixed(d)),
          zdf: ""
            .concat(p > 0 ? "+" : "")
            .concat(z.toFixed(0 !== p && Math.abs(z) < 0.01 ? 3 : 2)),
          zdClass: this.getColorClass(p),
          zdfClass: this.getColorClass(p),
          volIcon: this.supportPanhou,
          oi: (f || 0).toFixed(d),
          zjzf: +j > 0 ? "+".concat(j) : j,
          zjzfClass: this.getColorClass(j),
          hsl:
            h &&
            (a.utils.isHSMarket(this.market) ||
              a.utils.isBJMarket(this.market)) &&
            !a.utils.isIndex(this.stockType)
              ? h.toFixed(2)
              : "",
          zf: "".concat(((100 * (n - m)) / i).toFixed(2)),
          cjl: this.hackVolume(+u * (s && C ? 1e4 : 1)),
        };
      },
    },
    methods: {
      formatWeek: function (a) {
        if (a) {
          try {
            return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
              t.dayjs(a, ["YYYY-MM-DD", "YYYYMMDDHHmm"], !0).day()
            ];
          } catch (t) {
            return a;
          }
        }
      },
      getColorClass: function (t) {
        return 0 === t ? "" : t > 0 ? "color-rise" : "color-drop";
      },
      hackVolume: function (t) {
        if (a.utils.isForex(this.market)) return "--";
        if (
          a.utils.isHKMarket(this.market) &&
          a.utils.isIndex(this.stockType)
        ) {
          var e = t;
          return e >= 1e11
            ? "".concat((e / 1e8).toFixed(2), "亿元")
            : "".concat(a.utils.bigNumberToText(e), "元");
        }
        var o = t,
          r = s.getTradeUnit(this.stockType, this.market);
        return "" !== o ? (o < 1e4 ? o : a.utils.bigNumberToText(o)) + r : "..";
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (a, s, e, o, r, i) {
        return t.e(
          { a: e.landscape },
          e.landscape
            ? { b: t.t(i.formatData.time), c: t.t(i.formatData.week) }
            : {},
          {
            d: t.t(i.formatData.jkj ? i.formatData.jkj : "--"),
            e: t.n(i.formatData.openClass),
            f: t.t(i.formatData.dqj ? i.formatData.dqj : "--"),
            g: t.n(i.formatData.closeClass),
            h: t.t(i.formatData.zgj ? i.formatData.zgj : "--"),
            i: t.n(i.formatData.highClass),
            j: t.t(i.formatData.zdj ? i.formatData.zdj : "--"),
            k: t.n(i.formatData.lowClass),
            l: i.isShowNewFields,
          },
          i.isShowNewFields
            ? t.e(
                { m: !e.landscape },
                e.landscape
                  ? {
                      r: t.t(i.formatData.zdf ? i.formatData.zdf + "%" : "--"),
                      s: t.n(i.formatData.zdClass),
                      t: t.t(i.formatData.zde ? i.formatData.zde : "--"),
                      v: t.n(i.formatData.zdClass),
                    }
                  : {
                      n: t.t(i.formatData.zdf ? i.formatData.zdf + "%" : "--"),
                      o: t.n(i.formatData.zdClass),
                      p: t.t(i.lastKey),
                      q: t.t(i.lastValue),
                    },
                { w: e.landscape },
                e.landscape
                  ? {
                      x: t.t(
                        i.formatData.hsl ? i.formatData.hsl + "%" : "0.00%"
                      ),
                      y: t.t(i.formatData.zf ? i.formatData.zf + "%" : "--"),
                    }
                  : {},
                { z: i.formatData.volIcon },
                (i.formatData.volIcon, {}),
                {
                  A: i.formatData.volIcon ? 1 : "",
                  B: t.t(i.formatData.cjl),
                  C: i.formatData.volIcon,
                },
                (i.formatData.volIcon, {}),
                {
                  D: i.formatData.volIcon ? 1 : "",
                  E: t.t(i.formatData.cje ? i.formatData.cje : "--"),
                }
              )
            : t.e(
                {
                  F: t.t(i.formatData.zdf ? i.formatData.zdf + "%" : "--"),
                  G: t.n(i.formatData.zdClass),
                  H: t.t(i.formatData.zde ? i.formatData.zde : "--"),
                  I: t.n(i.formatData.zdClass),
                  J: i.showVolume,
                },
                i.showVolume
                  ? t.e(
                      { K: i.formatData.volIcon },
                      (i.formatData.volIcon, {}),
                      {
                        L: i.formatData.volIcon ? 1 : "",
                        M: t.t(i.formatData.cjl),
                      }
                    )
                  : {},
                {
                  N: t.t(i.lastKey),
                  O: t.t(i.lastValue),
                  P: i.showVolume ? "" : 1,
                  Q: e.landscape || i.showVolume ? "" : 1,
                  R: e.landscape && i.showZJZX ? "" : 1,
                }
              ),
          { S: e.landscape && i.showZJZX },
          e.landscape && i.showZJZX
            ? {
                T: t.t(i.formatData.zjzf ? i.formatData.zjzf + "%" : "--"),
                U: t.n(i.formatData.zjzfClass),
              }
            : {},
          { V: e.landscape ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-32186a24"],
  ]);
wx.createComponent(o);
