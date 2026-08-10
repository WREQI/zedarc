var o = require("../../../../../../common/vendor.js"),
  e = {
    props: {
      overlay: {
        type: Object,
        default: function () {
          return { title: "", content: "" };
        },
      },
      showPopup: { type: Boolean, default: !1 },
      skin: { type: String, default: "" },
    },
    setup: function (o, e) {
      var t = e.emit;
      return {
        closePopup: function () {
          t("close");
        },
      };
    },
  },
  t = o._export_sfc(e, [
    [
      "render",
      function (e, t, n, r, p, a) {
        return {
          a: o.n(n.showPopup ? "modal-overlay" : "mask-hidden"),
          b: o.o(function () {
            return r.closePopup && r.closePopup.apply(r, arguments);
          }, 4447),
          c: o.t(n.overlay && n.overlay.title ? n.overlay.title : ""),
          d: o.o(function () {
            return r.closePopup && r.closePopup.apply(r, arguments);
          }, 4448),
          e: o.t(n.overlay && n.overlay.content ? n.overlay.content : ""),
          f: o.n(n.showPopup ? "modal-show" : ""),
          g: o.n("dark" === n.skin ? "modal-dark" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-0816e776"],
  ]);
wx.createComponent(t);
