var e = require("../../../../utils/common.js"),
  r = require("../../../../../stock-hq-data/index.js"),
  o = require("../../../../../../../../common/vendor.js"),
  t = {
    components: {
      MarketIcon: function () {
        return "../../MarketIcon.js";
      },
    },
    props: {
      rows: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return {};
    },
    methods: {
      setColor: e.setColor,
      rowClick: function (e) {
        this.$emit("rowClick", e);
      },
      formateBigData: function (e) {
        return 0 === e
          ? "--"
          : e < 0
          ? "-".concat(r.utils.bigNumberToText(Math.abs(e)), "股")
          : "".concat(r.utils.bigNumberToText(e), "股");
      },
    },
  };
Array || o.resolveComponent("market-icon")();
var n = o._export_sfc(t, [
  [
    "render",
    function (e, r, t, n, a, i) {
      return {
        a: o.f(t.rows, function (e, r, t) {
          return {
            a: o.f(e, function (e, n, a) {
              return o.e(
                { a: Array.isArray(e.value) },
                Array.isArray(e.value)
                  ? { b: o.t(e.value[0]), c: o.t(e.value[1]) }
                  : {
                      d: o.t(e.isBig ? i.formateBigData(e.value) : e.value),
                      e: o.n(
                        e.isSetColor
                          ? [i.setColor(e.value), "cell-set-color"]
                          : ""
                      ),
                    },
                { f: e.isShowCode },
                e.isShowCode
                  ? {
                      g: "c7620de6-0-" + t + "-" + a,
                      h: o.p({
                        iconType: e.market,
                        stockType: e.stockType,
                        noTop: !0,
                      }),
                      i: o.t(e.scode),
                    }
                  : {},
                {
                  j: o.n(e.width),
                  k: o.n(e.isFreeze ? "cell-container-freeze" : ""),
                  l: n,
                  m: o.o(
                    function (o) {
                      return i.rowClick({ item: e, rowIndex: r });
                    },
                    4886,
                    n
                  ),
                }
              );
            }),
            b: r,
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-c7620de6"],
]);
wx.createComponent(n);
