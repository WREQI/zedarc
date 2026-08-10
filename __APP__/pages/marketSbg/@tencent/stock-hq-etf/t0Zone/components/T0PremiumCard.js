var e = require("../../../../../../common/vendor.js"),
  n = require("../../utils/common.js");
function r(e) {
  if (null == e || "" === e || "--" === e) return "--";
  var n = parseFloat(String(e));
  return Number.isNaN(n)
    ? "--"
    : "".concat(n > 0 ? "+" : "").concat(n.toFixed(2), "%");
}
var t = e.defineComponent({
  name: "T0PremiumCard",
  components: {
    T0PremiumRankItem: function () {
      return "./T0PremiumRankItem.js";
    },
  },
  props: {
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  emits: ["premium:explain"],
  setup: function (e, t) {
    var a = t.emit;
    return {
      normalizeFund: function (e) {
        var t = parseFloat(String(e.premiumRate));
        return {
          code: e.code,
          name: e.name,
          symbol: e.code,
          returnValue: r(e.premiumRate),
          returnClass: Number.isNaN(t) ? "equal" : n.setZdpClass(t),
          percentile: e.percentile,
          tag: "T+0",
        };
      },
      buildNoteText: function (e) {
        var n = parseFloat(String(e.premiumRate)),
          r = parseFloat(String(e.percentile));
        return Number.isNaN(n) || Number.isNaN(r)
          ? ""
          : "当前溢折率"
              .concat(n.toFixed(2), "%，最近3个月低于")
              .concat(
                Math.round(100 - r),
                "%时间，存在溢折率回归平均水平的机会。"
              );
      },
      onExplain: function (e) {
        a("premium:explain", {
          fundName: e.name,
          code: e.code,
          premiumRate: e.premiumRate,
          percentile: e.percentile,
        });
      },
    };
  },
});
Array || e.resolveComponent("T0PremiumRankItem")();
var a = e._export_sfc(t, [
  [
    "render",
    function (n, r, t, a, i, o) {
      return {
        a: e.f(n.list, function (r, t, a) {
          return {
            a: "5b84ebef-0-" + a,
            b: e.p({ fund: n.normalizeFund(r) }),
            c: e.t(n.buildNoteText(r)),
            d: e.o(
              function (e) {
                return n.onExplain(r);
              },
              4425,
              r.code || t
            ),
            e: r.code || t,
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-5b84ebef"],
]);
wx.createComponent(a);
