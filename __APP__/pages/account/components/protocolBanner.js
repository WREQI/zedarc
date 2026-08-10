var o = require("../../../common/vendor.js"),
  t = {
    data: function () {
      return { showBanner: !1 };
    },
    created: function () {
      this.protocolNotifyHandle();
    },
    methods: {
      goProtocol: function () {
        var t = this;
        o.Request.reportMTAData({
          eventName: "base.account.protocolbanner.btnclick",
        }),
          setTimeout(function () {
            (t.showBanner = !1),
              o.wx$1.navigateTo({ url: "/pages/account/protocol" });
          }, 300);
      },
      in7Day: function (o, t) {
        var n = (o - t) / 86400;
        return n >= 0 && n < 7;
      },
      protocolNotifyHandle: function () {
        var t = this,
          n = o.StockBridge.store,
          e = n.protocolServerTime,
          r = n.allProtocolList;
        r &&
          r.length &&
          (r.some(function (o) {
            return o.consented_any_version;
          }) &&
            (this.showBanner = r.some(function (o) {
              return "0" === o.status && t.in7Day(+e, +o.publish_time);
            })),
          this.showBanner &&
            o.Request.reportMTAData({
              eventName: "base.account.protocolbanner.show",
            }));
      },
    },
  },
  n = o._export_sfc(t, [
    [
      "render",
      function (t, n, e, r, a, c) {
        return o.e(
          { a: a.showBanner },
          a.showBanner
            ? {
                b: o.o(function () {
                  return c.goProtocol && c.goProtocol.apply(c, arguments);
                }, 2378),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-97367778"],
  ]);
wx.createComponent(n);
