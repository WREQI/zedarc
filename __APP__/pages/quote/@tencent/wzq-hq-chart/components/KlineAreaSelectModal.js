var t = require("../../../../../common/vendor.js"),
  e = require("../../stock-hq-data/index.js"),
  a = require("../../../dayjs/plugin/customParseFormat.js");
t.dayjs.extend(a.customParseFormat);
var r = t.defineComponent({
    name: "AreaSelectModal",
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
    setup: function (a, r) {
      var n = r.emit,
        i = t.ref(!0),
        o = t.computed(function () {
          if (e.utils.isHKMarket(a.market) && e.utils.isIndex(a.stockType)) {
            var t = +a.data.cjl * (a.data.isMinuteKline ? 1e4 : 1);
            return "".concat(e.utils.bigNumberToText(t), "元");
          }
          var r = a.data.cjl,
            n = a.data.unit;
          return "" !== r
            ? (r < 1e4 ? r : e.utils.bigNumberToText(r)) + n
            : "--";
        });
      return {
        isShow: i,
        cjl: o,
        handleClick: function () {
          (i.value = !1), n("close");
        },
        getColorByPrice: function (t, e) {
          return +e > +t
            ? "color-rise"
            : +e < +t
            ? "color-drop"
            : "color-equal";
        },
        getFontSize: function (t) {
          return isNaN(t) ? "" : String(t).length > 7 ? "smallFont" : "";
        },
        formatDate: function (e) {
          return !e || e.indexOf("-") > 0
            ? e
            : t.dayjs(e, ["YYYYMMDDHHmm"], !0).format("YYYY-MM-DD HH:mm");
        },
      };
    },
  }),
  n = t._export_sfc(r, [
    [
      "render",
      function (e, a, r, n, i, o) {
        return {
          a: t.t(e.data.rangeIncrease),
          b: t.n(e.data.rangeIncreaseClass),
          c: t.t(e.data.rangeText),
          d: t.o(function () {
            return e.handleClick && e.handleClick.apply(e, arguments);
          }, 4708),
          e: t.t(e.formatDate(e.data.startTime)),
          f: t.t(e.formatDate(e.data.endTime)),
          g: t.t(e.data.startPrice),
          h: t.n(e.getFontSize(e.data.startPrice)),
          i: t.t(e.data.maxPrice),
          j: t.n(e.getFontSize(e.data.maxPrice)),
          k: t.n(e.getColorByPrice(e.data.startPrice, e.data.maxPrice)),
          l: t.t(e.cjl),
          m: t.t(e.data.endPrice),
          n: t.n(e.getFontSize(e.data.endPrice)),
          o: t.n(e.getColorByPrice(e.data.startPrice, e.data.endPrice)),
          p: t.t(e.data.minPrice),
          q: t.n(e.getFontSize(e.data.minPrice)),
          r: t.n(e.getColorByPrice(e.data.startPrice, e.data.minPrice)),
          s: t.t(e.data.cje ? e.data.cje + "元" : "--"),
          t: t.t(e.data.hsl),
          v: t.t(e.data.zf),
          w: t.n(e.isShow ? "fade-in" : "fade-out"),
        };
      },
    ],
    ["__scopeId", "data-v-80c624a0"],
  ]);
wx.createComponent(n);
