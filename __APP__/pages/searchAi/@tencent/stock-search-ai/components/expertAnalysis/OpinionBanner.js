var a = require("../../../../../../common/vendor.js"),
  e = a.defineComponent({
    name: "OpinionBanner",
    props: {
      ratingLabel: { type: String, default: "" },
      ratingClass: { type: String, default: "neutral" },
      summary: { type: String, default: "" },
      detail: { type: String, default: "" },
    },
  }),
  t = a._export_sfc(e, [
    [
      "render",
      function (e, t, n, r, i, l) {
        return a.e(
          { a: e.ratingLabel || e.summary || e.detail },
          e.ratingLabel || e.summary || e.detail
            ? a.e(
                { b: e.ratingLabel || e.summary },
                e.ratingLabel || e.summary
                  ? a.e(
                      { c: e.ratingLabel },
                      e.ratingLabel ? { d: a.t(e.ratingLabel) } : {},
                      { e: a.t(e.summary) }
                    )
                  : {},
                { f: e.detail },
                e.detail ? { g: a.t(e.detail) } : {},
                { h: a.n("opinion-banner--".concat(e.ratingClass)) }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ae2ce627"],
  ]);
wx.createComponent(t);
