var e = require("../../../../../../common/vendor.js"),
  r = {
    props: {
      curBrokerCode: { type: [String, Number], default: "" },
      curBrokerItem: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showStatus: {
        type: Object,
        default: function () {
          return {};
        },
      },
      applyBrokerList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (r, t) {
      var o = t.emit;
      return {
        clickEvent: function () {
          o("click");
        },
        stockBridge: e.inject("stockBridge", {}),
        isLite: !1,
        isMpZxg: e.computed(function () {
          return !0;
        }),
        isMpWzq: e.computed(function () {
          return !1;
        }),
      };
    },
  },
  t = e._export_sfc(r, [
    [
      "render",
      function (r, t, o, n, c, i) {
        return e.e(
          {
            a: "https://st.gtimg.com/image/mp-broker/trade/broker-logo/".concat(
              o.curBrokerCode,
              ".svg"
            ),
            b: e.n(n.isMpZxg ? "broker-logo-icon-zxg" : ""),
            c: e.n(n.isMpWzq ? "broker-logo-icon-wzq" : ""),
            d: e.n("mp" === n.stockBridge.ENV ? "mp-broker-logo" : ""),
            e: e.t(o.curBrokerItem.name),
            f: o.curBrokerItem.maintain,
          },
          (o.curBrokerItem.maintain, {}),
          {
            g: e.t(o.curBrokerItem.desc),
            h: !o.curBrokerItem.disableSwitch && o.applyBrokerList.length > 1,
          },
          !o.curBrokerItem.disableSwitch && o.applyBrokerList.length > 1
            ? {
                i: e.n(o.showStatus.actionSheet ? "up" : ""),
                j: e.n(n.isLite ? "arrow-pic-lite" : ""),
              }
            : {},
          {
            k: e.o(function () {
              return n.clickEvent && n.clickEvent.apply(n, arguments);
            }, 2397),
          }
        );
      },
    ],
    ["__scopeId", "data-v-aa40f2b7"],
  ]);
wx.createComponent(t);
