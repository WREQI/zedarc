var t = require("../../../../../common/vendor.js"),
  o = require("../../stock-hq-data/index.js"),
  e = require("../prefetch.js"),
  a = t.defineComponent({
    props: ["market", "stockType", "landscape", "scode"],
    setup: function (a) {
      var c = t.ref({}),
        n = o.utils.getSymbol(a.market, a.scode),
        r = function (t, o) {
          return o > t ? "red" : o < t ? "green" : "equal";
        },
        i = function (t, o, e, a, c) {
          return isNaN(t) || "" === t
            ? "" === t
              ? "--"
              : t
            : ((e = void 0 === e ? 2 : e),
              (a = void 0 === a ? 0 : a),
              (o = o || ""),
              (t =
                (t = parseFloat(t || 0)) < 1e4 * (c = void 0 === c ? 1 : c)
                  ? t.toFixed(a)
                  : t >= 1e4 * c && t < 1e8
                  ? "".concat((t / 1e4).toFixed(e), "万")
                  : t >= 1e8 && t < 1e11
                  ? "".concat((t / 1e8).toFixed(e), "亿")
                  : t >= 1e11 && t < 1e12
                  ? "".concat((t / 1e11).toFixed(e), "千亿")
                  : t >= 1e12 && t < 1e16
                  ? "".concat((t / 1e12).toFixed(e), "万亿")
                  : "".concat((t / 1e16).toFixed(e), "兆")) + (o || ""));
        },
        s = function (t) {
          return 0 === t ? "color-equal" : t > 0 ? "color-rise" : "color-drop";
        },
        u = function (t) {
          if (o.utils.isHKMarket(a.market) && o.utils.isIndex(a.stockType)) {
            var c = 1e4 * t;
            return c >= 1e11
              ? "".concat((c / 1e8).toFixed(2), "亿元")
              : "".concat(o.utils.bigNumberToText(c), "元");
          }
          return ""
            .concat(o.utils.bigNumberToText(t))
            .concat(e.getTradeUnit(a.stockType, a.market));
        },
        m = function (t) {
          var n = t.bottomval,
            m = t.price,
            d = t.preClosePrice,
            l = t.volume,
            f = t.auction,
            p = void 0 !== f && f,
            v = t.iopv,
            k = {};
          if (p) {
            var x = t.p,
              y = e.getTradeUnit(a.stockType, a.market),
              z = void 0 !== t.b1v;
            k = {
              auction: !0,
              time: t.bottomval,
              price: x,
              zdf: ""
                .concat(x > d ? "+" : "")
                .concat((((x - d) / d) * 100).toFixed(2), "%"),
              zdClass: r(+d, +x),
              volumeMatch: z ? "".concat(i(t.b1v)).concat(y) : "--",
              volumeUnmatch: z ? "".concat(i(+t.b2v + +t.s2v)).concat(y) : "--",
              yzl:
                "ETF" === a.stockType && +v
                  ? "".concat(
                      (Math.round(((+x - +v) / +v) * 1e4) / 100).toFixed(2),
                      "%"
                    )
                  : "",
            };
          } else {
            var D = +m - d;
            k = {
              time: n,
              price: m,
              zde: "".concat(D > 0 ? "+" : "").concat(D.toFixed(t.fixNum)),
              zdf: ""
                .concat(D > 0 ? "+" : "")
                .concat(+d ? ((100 * D) / d).toFixed(2) : "0.00", "%"),
              zdClass: s(D),
              volume: u(l),
              volumeCorner:
                o.utils.isKeChuangStock(a.stockType) ||
                o.utils.isChuangYeStock(a.stockType)
                  ? n > "15:00"
                    ? "固"
                    : "竞"
                  : "",
              yzl:
                "ETF" === a.stockType && +v
                  ? "".concat(
                      (Math.round(((+m - +v) / +v) * 1e4) / 100).toFixed(2),
                      "%"
                    )
                  : "",
            };
          }
          (k.yzlClass = k.yzl ? s(parseFloat(k.yzl)) : ""), (c.value = k);
        };
      return (
        t.onMounted(function () {
          t.StockBridge.busOn("stock_touch_mins_data_".concat(n), m);
        }),
        t.onBeforeUnmount(function () {
          t.StockBridge.busOff("stock_touch_mins_data_".concat(n), m);
        }),
        { formatData: c }
      );
    },
  }),
  c = t._export_sfc(a, [
    [
      "render",
      function (o, e, a, c, n, r) {
        return t.e(
          { a: o.formatData.auction },
          o.formatData.auction
            ? {
                b: t.t(o.formatData.time),
                c: t.t(o.formatData.price),
                d: t.t(o.formatData.zdf),
                e: t.n(o.formatData.zdClass),
                f: t.t(o.formatData.volumeMatch),
                g: t.t(o.formatData.volumeUnmatch),
              }
            : t.e(
                {
                  h: t.t(o.formatData.time),
                  i: t.t(o.formatData.price),
                  j: t.t(o.formatData.zdf),
                  k: t.n(o.formatData.zdClass),
                  l: !!o.formatData.yzl,
                },
                o.formatData.yzl
                  ? { m: t.t(o.formatData.yzl), n: t.n(o.formatData.yzlClass) }
                  : {}
              ),
          { o: t.n(o.landscape ? "mins-bar-mp" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-7c022e34"],
  ]);
wx.createComponent(c);
