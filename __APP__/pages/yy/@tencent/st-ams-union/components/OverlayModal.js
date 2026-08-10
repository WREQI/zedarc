var e = require("../../../../../common/vendor.js"),
  o = {
    name: "OverlayModal",
    props: {
      showPopup: { type: Boolean, default: !1 },
      overlay: { type: Object, default: null },
      brokerName: { type: String, default: "" },
    },
  },
  r = e._export_sfc(o, [
    [
      "render",
      function (o, r, t, a, l, n) {
        return e.e(
          { a: t.overlay },
          t.overlay
            ? e.e(
                {
                  b: e.n(t.showPopup ? "ams-modal-overlay" : "ams-mask-hidden"),
                  c: e.o(function (e) {
                    return o.$emit("close");
                  }, 3315),
                  d: e.t(t.overlay.title || "订阅成功"),
                  e: e.o(function (e) {
                    return o.$emit("close");
                  }, 3316),
                  f: t.overlay.text,
                },
                t.overlay.text ? { g: t.overlay.text } : {},
                {
                  h: t.overlay.img,
                  i: e.t(t.overlay.btnText || "我知道了"),
                  j: e.o(function (e) {
                    return o.$emit("close", t.overlay.clickEvent);
                  }, 3317),
                  k: t.overlay.showGif,
                },
                t.overlay.showGif
                  ? {
                      l: e.o(function (e) {
                        return o.$emit("close", t.overlay.clickEvent);
                      }, 3318),
                    }
                  : {},
                { m: t.overlay.showBrandText },
                t.overlay.showBrandText ? { n: e.t(t.brokerName) } : {},
                { o: t.overlay.footer },
                t.overlay.footer
                  ? {
                      p: e.o(function (e) {
                        return o.$emit("import-link-click");
                      }, 3319),
                    }
                  : {},
                { q: e.n(t.showPopup ? "ams-modal-show" : "") }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-a8f70200"],
  ]);
wx.createComponent(r);
