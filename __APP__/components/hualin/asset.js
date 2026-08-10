var e = require("../../common/vendor.js"),
  n = {
    components: {
      brokerAssetPluginPlaceHolder: function () {
        return "../brokerAssetPluginPlaceHolder.js";
      },
    },
    props: {
      isCurrentBroker: { type: Boolean, default: !1 },
      brokerCode: { type: String, default: "" },
      showMore: { type: Boolean, default: !1 },
      showBrokerBg: { type: Boolean, default: !1 },
      from: { type: String, default: "" },
      defaultTheme: { type: String, default: "" },
    },
    setup: function (n) {
      var t = e.getCurrentInstance().proxy;
      return {
        componentEle: "hualin-asset",
        handleFinish: function (e) {
          t.$emit("assetFinish", e);
        },
        handlePluginSetup: function (e) {},
        handleBtnClick: function () {
          e.Request.reportMTAData({
            eventName: "base.new_profile.gotrade_click",
          });
        },
      };
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (n, t, r, o, u, a) {
        return {
          a: e.n(o.componentEle),
          b: r.isCurrentBroker,
          c: r.showMore,
          d: r.from,
          e: r.defaultTheme,
          f: r.showBrokerBg,
          g: e.o(function () {
            return o.handleFinish && o.handleFinish.apply(o, arguments);
          }, 1640),
          h: e.o(function () {
            return (
              o.handlePluginSetup && o.handlePluginSetup.apply(o, arguments)
            );
          }, 1641),
        };
      },
    ],
  ]);
wx.createComponent(t);
