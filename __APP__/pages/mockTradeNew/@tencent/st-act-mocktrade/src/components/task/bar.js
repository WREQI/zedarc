var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "st-bar",
    props: {
      reward: String,
      rewardText: { type: String, default: "已获得" },
      backText: { type: String, default: "去查看" },
      iconImg: { type: String, default: "" },
    },
    data: function () {
      return { isShowBar: !0 };
    },
    components: {
      Icon: function () {
        return "./icon.js";
      },
      StButton: function () {
        return "./button.js";
      },
    },
    methods: {
      clkBtn: function () {
        this.$emit("clkBarBtn");
      },
      close: function () {
        (this.isShowBar = !1), this.$emit("closeBar");
      },
    },
  };
Array || (t.resolveComponent("Icon") + t.resolveComponent("StButton"))();
var r = t._export_sfc(e, [
  [
    "render",
    function (e, r, n, o, c, a) {
      return t.e(
        { a: c.isShowBar },
        c.isShowBar
          ? t.e(
              { b: t.p({ icon: n.iconImg }), c: n.rewardText, d: n.reward },
              n.reward ? { e: t.t(n.reward) } : {},
              {
                f: t.o(a.clkBtn, 4155),
                g: t.p({ text: n.backText }),
                h: t.o(function () {
                  return a.close && a.close.apply(a, arguments);
                }, 4156),
              }
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(r);
