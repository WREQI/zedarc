var e = require("../../../../../../../common/vendor.js"),
  r = e.defineComponent({
    name: "BaseImage",
    props: {
      src: { type: String, required: !0 },
      mode: { type: String, default: "widthFix" },
      alt: { type: String, default: "" },
      borderRadius: { type: Boolean, default: !1 },
      preview: { type: Boolean, default: !1 },
      customClass: { type: String, default: "" },
      width: { type: [String, Number], default: null },
    },
    emits: ["load", "error"],
    setup: function (r, t) {
      var a = t.emit,
        n = e.ref(!1),
        o = e.ref(null),
        u = e.computed(function () {
          var e = [];
          return (
            r.borderRadius && e.push("img-border-radius"),
            r.customClass && e.push(r.customClass),
            e.join(" ")
          );
        }),
        i = e.computed(function () {
          var e = {};
          if (null !== r.width && void 0 !== r.width) {
            var t = Number(r.width);
            if (!Number.isNaN(t) && t > 0) {
              var a = t / 750;
              if (a >= 0.8) e.width = "100%";
              else {
                var n = Math.round(100 * a);
                e.width = "".concat(n, "%");
              }
            }
          }
          return o.value && (e.aspectRatio = o.value), e;
        }),
        d = e.computed(function () {
          return r.preview ? "1" : null;
        });
      return {
        hasError: n,
        imageClass: u,
        imageStyle: i,
        dataPreview: d,
        handleLoad: function (e) {
          var r;
          n.value = !1;
          var t = e.target || (null == (r = e.detail) ? void 0 : r.target);
          t &&
            t.naturalWidth &&
            t.naturalHeight &&
            (o.value = ""
              .concat(t.naturalWidth, " / ")
              .concat(t.naturalHeight)),
            a("load", e);
        },
        handleError: function (e) {
          (n.value = !0), a("error", e);
        },
      };
    },
  }),
  t = e._export_sfc(r, [
    [
      "render",
      function (r, t, a, n, o, u) {
        return {
          a: !r.hasError,
          b: e.n(r.imageClass),
          c: r.src,
          d: r.mode,
          e: r.alt,
          f: e.s(r.imageStyle),
          g: r.dataPreview,
          h: e.o(function () {
            return r.handleLoad && r.handleLoad.apply(r, arguments);
          }, 5615),
          i: e.o(function () {
            return r.handleError && r.handleError.apply(r, arguments);
          }, 5616),
        };
      },
    ],
    ["__scopeId", "data-v-c084493f"],
  ]);
wx.createComponent(t);
