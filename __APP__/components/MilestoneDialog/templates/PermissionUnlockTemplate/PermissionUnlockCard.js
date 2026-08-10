require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = require("../../../../stores/app/useMode.js"),
  o = e.defineComponent({
    name: "PermissionUnlockCard",
    props: {
      config: { type: Object, required: !0 },
      quote: { type: Object, default: null },
      type: { type: String, required: !0 },
    },
    emits: ["index-click"],
    setup: function () {
      var o = e.storeToRefs(n.useModeStore()).simpleMode,
        t = e.computed(function () {
          return o.value
            ? "https://st.gtimg.com/design/6de81b0ae8db6cb22de8eed4a9bfe810.png"
            : "https://st.gtimg.com/design/e70fd531fa1a8f744baf815eb1aac87f.png";
        }),
        c = e.computed(function () {
          return o.value
            ? "https://st.gtimg.com/design/74a9909cf6a86cde16d72d5c5ef04ca7.png"
            : "https://st.gtimg.com/design/e9467e948478651a758a05681f4125c5.png";
        });
      return { simpleMode: o, backgroundImage: t, cornerBadge: c };
    },
  }),
  t = e._export_sfc(o, [
    [
      "render",
      function (n, o, t, c, i, r) {
        return e.e(
          { a: "linkage" === n.type },
          "linkage" === n.type ? { b: n.cornerBadge } : {},
          { c: "linkage" === n.type },
          (n.type, {}),
          { d: n.config.tagLogo },
          n.config.tagLogo ? { e: n.config.tagLogo } : {},
          { f: e.t(n.config.tagName), g: n.quote },
          n.quote
            ? {
                h: e.t(n.quote.label),
                i: e.t(n.quote.price),
                j: e.n(
                  n.quote.isUp
                    ? "permission-unlock-card__quote-price--up"
                    : "permission-unlock-card__quote-price--down"
                ),
                k: e.t(n.quote.change),
                l: e.n(
                  n.quote.isUp
                    ? "permission-unlock-card__quote-change--up"
                    : "permission-unlock-card__quote-change--down"
                ),
                m: e.t(n.quote.changePct),
                n: e.n(
                  n.quote.isUp
                    ? "permission-unlock-card__quote-change--up"
                    : "permission-unlock-card__quote-change--down"
                ),
                o: e.o(function (e) {
                  return n.$emit("index-click");
                }),
              }
            : n.config.description
            ? { q: e.t(n.config.description) }
            : {},
          { p: n.config.description, r: n.config.tips.length },
          n.config.tips.length
            ? {
                s: e.f(n.config.tips, function (n, o, t) {
                  return { a: e.t(n), b: "".concat(n, "_").concat(o) };
                }),
              }
            : {},
          {
            t: e.n(
              n.simpleMode
                ? "permission-unlock-card--simple"
                : "permission-unlock-card--classic"
            ),
            v: "url(".concat(n.backgroundImage, ")"),
          }
        );
      },
    ],
    ["__scopeId", "data-v-8c638c87"],
  ]);
wx.createComponent(t);
