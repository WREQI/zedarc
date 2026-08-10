var t = require("../../../../../common/vendor.js"),
  e = require("../../stock-hq-data/index.js"),
  o = require("../prefetch.js"),
  a = t.defineComponent({
    props: ["market", "stockType", "scode", "landscape"],
    setup: function (a) {
      var s = t.ref({}),
        c = e.utils.getSymbol(a.market, a.scode),
        n = function (t) {
          return 0 === t ? "color-equal" : t > 0 ? "color-rise" : "color-drop";
        },
        r = function (t) {
          if (e.utils.isHKMarket(a.market) && e.utils.isIndex(a.stockType)) {
            var s = t;
            return s >= 1e11
              ? "".concat((s / 1e8).toFixed(2), "亿元")
              : "".concat(e.utils.bigNumberToText(s), "元");
          }
          return ""
            .concat(e.utils.bigNumberToText(t))
            .concat(o.getTradeUnit(a.stockType, a.market));
        },
        i = function (t) {
          var o,
            c = t.close,
            i = t.preClose,
            l = t.open,
            u = t.high,
            d = t.low,
            f = t.volume,
            m = t.hsl,
            k = t.fixNum,
            p = t.toplval,
            x = t.bottomval,
            h = c - i,
            C = {
              time: ((o = p || x), o.length < 14 ? o : o.substr(2)),
              jkj: l.toFixed(k),
              openClass: n(l - i),
              dqj: c.toFixed(k),
              closeClass: n(h),
              zgj: u.toFixed(k),
              highClass: n(u - i),
              zdj: d.toFixed(k),
              lowClass: n(d - i),
              zde: "".concat(h > 0 ? "+" : "").concat(h.toFixed(k)),
              zdf: ""
                .concat(h > 0 ? "+" : "")
                .concat(((100 * h) / Math.abs(i)).toFixed(2), "%"),
              zdClass: n(h),
              zdfClass: n(h),
              volume: r(f),
              volumeCorner:
                e.utils.isKeChuangStock(a.stockType) ||
                e.utils.isChuangYeStock(a.stockType)
                  ? "竞"
                  : "",
              zf: "".concat(((100 * (u - d)) / i).toFixed(2), "%"),
              hsl:
                isNaN(m) ||
                (!e.utils.isHSMarket(a.market) &&
                  !e.utils.isBJMarket(a.market)) ||
                e.utils.isIndex(a.stockType)
                  ? ""
                  : "".concat(m.toFixed(2), "%"),
            };
          0 == +i &&
            ((C.zdf = "--"), (C.zdfClass = "color-equal"), (C.zf = "--")),
            (s.value = C);
        };
      return (
        t.onMounted(function () {
          t.StockBridge.busOn("stock_touch_kline_data_".concat(c), i);
        }),
        t.onBeforeUnmount(function () {
          t.StockBridge.busOff("stock_touch_kline_data_".concat(c), i);
        }),
        { formatData: s }
      );
    },
  }),
  s = t._export_sfc(a, [
    [
      "render",
      function (e, o, a, s, c, n) {
        return {
          a: t.t(e.formatData.time),
          b: t.t(e.formatData.jkj),
          c: t.t(e.formatData.dqj),
          d: t.t(e.formatData.zdf),
          e: t.n(e.formatData.zdfClass),
          f: t.n(e.landscape ? "kline-bar-mp" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-a58fb6dc"],
  ]);
wx.createComponent(s);
