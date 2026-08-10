var e = require("../../../../../common/vendor.js"),
  o = {
    components: {
      semiMask: function () {
        return "../../../../asyncCom/@tencent/st-semi-modal/index.js";
      },
    },
    props: {
      showPop: { type: Boolean, default: !1 },
      title: { type: String, default: "指数过滤" },
      infoText: {
        type: String,
        default:
          "市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选“指数过滤”后，榜单内跟踪相同指数的ETF仅展示一只。",
      },
    },
    methods: {
      closePop: function () {
        var e;
        null == (e = this.$refs) || e.semimask.closeSemimask();
      },
      closeSemimask: function () {
        this.$emit("closeTeachPop");
      },
    },
  };
Array || e.resolveComponent("semiMask")();
var t = e._export_sfc(o, [
  [
    "render",
    function (o, t, s, n, i, r) {
      return e.e(
        { a: s.showPop },
        s.showPop
          ? {
              b: e.t(s.title),
              c: e.o(function () {
                return r.closePop && r.closePop.apply(r, arguments);
              }, 3161),
              d: e.t(s.infoText),
              e: e.sr("semimask", "f1f27dbf-0"),
              f: e.o(r.closeSemimask, 3162),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-f1f27dbf"],
]);
wx.createComponent(t);
