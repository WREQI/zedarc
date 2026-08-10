var t = require("../../../common/vendor.js"),
  e = {
    data: function () {
      return { text: "", subText: [], step: "" };
    },
    mounted: function () {
      var t = this;
      this.getOpenerEventChannel().on("toDetailData", function (e) {
        var n = e.step,
          a = e.second_msg,
          o = e.second_msg_small;
        (t.step = n), (t.text = a), o && (t.subText = o);
      });
    },
    methods: {
      applyCancellation: function () {
        var e = t.wx$1.getStorageSync("account_cancellation/confirmed_step");
        e || (e = []),
          e.push(this.step),
          t.wx$1.setStorageSync("account_cancellation/confirmed_step", e),
          t.Request.reportMTAData({
            eventName: "base.accountcancellation_apply_detail.btn_click",
          }),
          setTimeout(function () {
            t.wx$1.navigateBack();
          }, 300);
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, a, o, c, s) {
      return t.e(
        {
          a: e.rootFontSize,
          b: t.p({ "no-auto": !0 }),
          c: t.t(c.text),
          d: t.f(c.subText, function (e, n, a) {
            return { a: t.t(e), b: "step" + n };
          }),
          e: "step2" !== c.step,
        },
        "step2" !== c.step
          ? {
              f: t.o(function () {
                return (
                  s.applyCancellation && s.applyCancellation.apply(s, arguments)
                );
              }, 244),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-7b293731"],
]);
wx.createPage(n);
