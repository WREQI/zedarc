var t = require("../../../../../common/vendor.js"),
  a = require("../../stock-hq-data/index.js"),
  e = require("../../../dayjs/plugin/customParseFormat.js");
t.dayjs.extend(e.customParseFormat);
var r = t.defineComponent({
    name: "AreaSelectbar",
    props: {
      market: { type: String, default: "" },
      stockType: { type: String, default: "" },
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (e) {
      return {
        cjl: t.computed(function () {
          if (a.utils.isHKMarket(e.market) && a.utils.isIndex(e.stockType)) {
            var t = +e.data.cjl * (e.data.isMinuteKline ? 1e4 : 1);
            return "".concat(a.utils.bigNumberToText(t), "元");
          }
          var r = e.data.cjl,
            n = e.data.unit;
          return isNaN(r)
            ? "--"
            : (parseFloat(r) < 1e4 ? r : a.utils.bigNumberToText(r)) + n;
        }),
        getColorByPrice: function (t, a) {
          return +a > +t
            ? "color-rise"
            : +a < +t
            ? "color-drop"
            : "color-equal";
        },
        formatDate: function (a) {
          return !a || a.indexOf("-") > 0
            ? a
            : t.dayjs(a, ["YYYYMMDDHHmm"], !0).format("YYYY-MM-DD");
        },
        formatTime: function (a) {
          return a
            ? t.dayjs(a, ["YYYY-MM-DD", "YYYYMMDDHHmm"], !0).format("HH:mm")
            : a;
        },
      };
    },
  }),
  n = t._export_sfc(r, [
    [
      "render",
      function (a, e, r, n, i, d) {
        return t.e(
          {
            a: t.t(a.data.rangeIncrease),
            b: t.n(a.data.rangeIncreaseClass),
            c: t.t(a.formatDate(a.data.startTime)),
            d: t.t(a.formatDate(a.data.endTime)),
            e: !a.data.isMinuteKline,
          },
          a.data.isMinuteKline
            ? {
                g: t.t(a.formatTime(a.data.startTime)),
                h: t.t(a.formatTime(a.data.endTime)),
                i: t.t(a.data.rangeText),
              }
            : { f: t.t(a.data.rangeText) },
          {
            j: t.t(a.data.startPrice),
            k: t.t(a.data.endPrice),
            l: t.n(a.getColorByPrice(a.data.startPrice, a.data.endPrice)),
            m: t.t(a.data.maxPrice),
            n: t.n(a.getColorByPrice(a.data.startPrice, a.data.maxPrice)),
            o: t.t(a.data.minPrice),
            p: t.n(a.getColorByPrice(a.data.startPrice, a.data.minPrice)),
            q: t.t(a.cjl),
            r: t.t(a.data.cje ? a.data.cje + "元" : "--"),
            s: t.t(a.data.hsl),
            t: t.t(a.data.zf),
          }
        );
      },
    ],
    ["__scopeId", "data-v-742a319d"],
  ]);
wx.createComponent(n);
