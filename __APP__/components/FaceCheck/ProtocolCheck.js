require("../../app.js");
var o = require("../../common/vendor.js"),
  e = require("../../stores/app/useMode.js");
require("../../service/broker.js");
var r = require("./utils.js"),
  t = require("../../config/broker/11100/index.js"),
  c = {
    setup: function () {
      var c = o.getCurrentInstance().proxy,
        n = o.ref(!0),
        i = e.useModeStore(),
        s = o.storeToRefs(i).simpleMode,
        u = t.brokerConfig.bind.faceCheckProtocol,
        l = (null == u ? void 0 : u[0]) || {};
      return {
        protocol: l,
        isProtocolHide: !r.needSign(),
        needSign: r.needSign,
        toProtocol: function () {
          var o = l.key;
          c.$router.push({ name: "VProtocol", query: { key: o } });
        },
        simpleMode: s,
        isProtocolCheck: n,
        isCheck: function () {
          return n.value;
        },
      };
    },
  },
  n = o._export_sfc(c, [
    [
      "render",
      function (e, r, t, c, n, i) {
        return o.e(
          { a: !c.isProtocolHide },
          c.isProtocolHide
            ? {}
            : {
                b: c.simpleMode ? "#e63535" : "#3077ec",
                c: c.isProtocolCheck,
                d: o.o(function (o) {
                  return (c.isProtocolCheck = !c.isProtocolCheck);
                }),
                e: o.t(c.protocol.name),
                f: o.o(function () {
                  return c.toProtocol && c.toProtocol.apply(c, arguments);
                }),
                g: o.o(function (o) {
                  return (c.isProtocolCheck = !c.isProtocolCheck);
                }),
              }
        );
      },
    ],
    ["__scopeId", "data-v-2eb393b5"],
  ]);
wx.createComponent(n);
