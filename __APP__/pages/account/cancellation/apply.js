var e = require("../../../common/vendor.js"),
  o = {
    data: function () {
      return { hasApplyAgreed: !1 };
    },
    watch: {
      hasApplyAgreed: function () {
        e.Request.reportMTAData({
          eventName: "base.accountcancellation_apply.checkbox_click",
        });
      },
    },
    mounted: function () {
      e.wx$1.setStorageSync("account_cancellation/confirmed_step", ""),
        (this.hasApplyAgreed = !!e.wx$1.getStorageSync(
          "account_cancellation/apply_protocol_agree"
        ));
    },
    methods: {
      handleChange: function () {
        (this.hasApplyAgreed = !this.hasApplyAgreed),
          e.wx$1.setStorageSync(
            "account_cancellation/apply_protocol_agree",
            "1"
          );
      },
      applyCancellation: function () {
        e.Request.reportMTAData({
          eventName: "base.accountcancellation_apply.btn_click",
        }),
          setTimeout(function () {
            e.wx$1.navigateTo({ url: "/pages/account/cancellation/query" });
          }, 300);
      },
      goProtocol: function () {
        e.wx$1.navigateTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(
              "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=35"
            )
          ),
        });
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var a = e._export_sfc(o, [
  [
    "render",
    function (o, a, n, t, c, p) {
      return {
        a: o.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: !c.hasApplyAgreed,
        d: e.o(function () {
          return p.applyCancellation && p.applyCancellation.apply(p, arguments);
        }, 238),
        e: c.hasApplyAgreed,
        f: e.o(function () {
          return p.handleChange && p.handleChange.apply(p, arguments);
        }, 239),
        g: e.o(function () {
          return p.goProtocol && p.goProtocol.apply(p, arguments);
        }, 240),
      };
    },
  ],
  ["__scopeId", "data-v-1b0a5def"],
]);
wx.createPage(a);
