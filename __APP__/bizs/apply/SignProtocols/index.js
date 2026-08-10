require("../../../app.js");
var o = require("../../../common/vendor.js"),
  n = {
    name: "SignProtocol",
    components: {
      ConfigurationMode: function () {
        return "./ConfigurationMode.js";
      },
      DynamicMode: function () {
        return "./DynamicMode.js";
      },
    },
    props: {
      protocolConfig: {
        type: Object,
        default: function () {
          return {
            useWrapStyle: !1,
            hideCheckBox: !0,
            signText: "",
            allProtocolName: "",
            signTextAppendix: "",
            tilingList: [],
            mergingList: [],
          };
        },
      },
      isProtocolCheck: { type: Boolean, default: !1 },
    },
    setup: function (n, e) {
      var t = e.emit;
      return {
        onCheck: function (o) {
          t("protocolCheck", o);
        },
        noop: o.noop,
      };
    },
  };
Array ||
  (
    o.resolveComponent("dynamic-mode") +
    o.resolveComponent("configuration-mode")
  )();
var e = o._export_sfc(n, [
  [
    "render",
    function (n, e, t, c, r, i) {
      return o.e(
        { a: t.protocolConfig.newMode },
        t.protocolConfig.newMode
          ? {
              b: o.o(c.onCheck),
              c: o.o(c.noop),
              d: o.p({
                "protocol-config": t.protocolConfig,
                "is-protocol-check": t.isProtocolCheck,
              }),
            }
          : {
              e: o.o(c.onCheck),
              f: o.o(c.noop),
              g: o.p({
                "protocol-config": t.protocolConfig,
                "is-protocol-check": t.isProtocolCheck,
              }),
            },
        {
          h: o.o(function () {
            return c.noop && c.noop.apply(c, arguments);
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-1f19c11c"],
]);
wx.createComponent(e);
