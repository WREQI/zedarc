require("../../../app.js");
var e = require("../../../common/vendor.js"),
  o = require("../../../stores/subscribe/useSubscribe.js"),
  s = {
    components: {
      Popup: function () {
        return "../../../common/components/Popup/index.js";
      },
    },
    props: { value: { type: Boolean, default: !1 } },
    setup: function (s, t) {
      var r = t.emit,
        n = e.storeToRefs(o.useSubscribeStore()).subscribeApplyFlag,
        c = e.computed(function () {
          return (n.value || "").startsWith("ams");
        }),
        i = e.computed(function () {
          return c.value
            ? "https://st.gtimg.com/design/cca9e06fe50fc99606cc6a5a498e0418.png"
            : "https://st.gtimg.com/design/5fc1e57b784875ac45226cd0a2ac5b88.jpg";
        }),
        u = ["z-index: 6"];
      u.push("padding-bottom: 0");
      var a = u.join(";");
      return {
        onClose: function () {
          r("input", !1);
        },
        isAmsTraffic: c,
        qrcodeSrc: i,
        customStyle: a,
      };
    },
  };
Array || e.resolveComponent("popup")();
var t = e._export_sfc(s, [
  [
    "render",
    function (o, s, t, r, n, c) {
      return {
        a: r.isAmsTraffic ? 1 : "",
        b: e.o(function () {
          return r.onClose && r.onClose.apply(r, arguments);
        }),
        c: r.isAmsTraffic ? 1 : "",
        d: r.qrcodeSrc,
        e: r.isAmsTraffic ? 1 : "",
        f: e.o(function () {}),
        g: r.isAmsTraffic ? 1 : "",
        h: e.p({
          show: t.value,
          center: !1,
          mask: !0,
          position: "bottom",
          "mask-closable": !1,
          "layer-z-index": 5,
          "custom-style": r.customStyle,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-836ef535"],
]);
wx.createComponent(t);
