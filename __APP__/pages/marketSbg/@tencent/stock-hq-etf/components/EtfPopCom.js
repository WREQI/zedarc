require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    data: function () {
      return { showPop: !0, isLite: !1, isMp: !1 };
    },
    computed: {
      themeValue: function () {
        return "undefined" != typeof document
          ? document.body.getAttribute("data-st-theme") || "white"
          : e.wx$1.getStorageSync("user/skin") || "white";
      },
    },
    created: function () {
      (this.isLite = ["mpwzq", "wzqlight"].includes("mpweapp")),
        (this.isMp = !1);
    },
    methods: {
      gotoTeach: function () {
        var e = this,
          t =
            "https://gu.qq.com/resource/etf/index.html" +
            (this.isMp ? "?env=wzqxcx" : "");
        this.hqBridge.openExtraWebview(t),
          this.hqBridge.report("hq.etfpage.teach_guide_btn_click"),
          setTimeout(function () {
            e.showPop = !1;
          }, 500);
      },
      closePop: function () {
        (this.showPop = !1), this.$emit("closePop");
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (t, o, i, n, c, r) {
        return {
          a: e.o(function () {
            return r.closePop && r.closePop.apply(r, arguments);
          }, 3574),
          b: e.n(r.themeValue),
          c: e.o(function () {
            return r.gotoTeach && r.gotoTeach.apply(r, arguments);
          }, 3575),
          d: e.o(function () {}, 3576),
          e: c.showPop,
          f: e.o(function () {}, 3577),
          g: e.o(function () {
            return r.closePop && r.closePop.apply(r, arguments);
          }, 3578),
          h: c.isLite ? 1 : "",
        };
      },
    ],
    ["__scopeId", "data-v-681a15cd"],
  ]);
wx.createComponent(o);
