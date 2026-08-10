var e = require("../../../../../common/vendor.js"),
  t = {
    name: "Sections",
    components: {
      StockQuery: function () {
        return "./StockQuery.js";
      },
    },
    props: {
      orderedSections: { type: Array, required: !0 },
      getIndexImageUrl: { type: Function, required: !0 },
    },
    methods: {
      reportData: function (e) {
        this.$emit("reportData", e);
      },
    },
  };
Array || e.resolveComponent("StockQuery")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, o, c, i) {
      return {
        a: e.f(r.orderedSections, function (n, o, c) {
          return e.e(
            { a: "stockQuery" === n.type },
            "stockQuery" === n.type
              ? {
                  b: e.o(i.reportData, 3311, o),
                  c: "6137b834-0-" + c,
                  d: e.p({
                    section: n,
                    stocks: n.stocks,
                    etf: n.etf,
                    sectionIndex: o,
                    getIndexImageUrl: r.getIndexImageUrl,
                  }),
                }
              : e.e(
                  { e: r.getIndexImageUrl(o) },
                  r.getIndexImageUrl(o) ? { f: r.getIndexImageUrl(o) } : {},
                  { g: "image" === n.type },
                  "image" === n.type
                    ? e.e(
                        { h: n.img, i: n.img, j: n.btnClass },
                        n.btnClass
                          ? {
                              k: e.n(n.btnClass),
                              l: e.o(
                                function (e) {
                                  return t.$emit("section-click", n);
                                },
                                3312,
                                o
                              ),
                            }
                          : {},
                        { m: n.btnText },
                        n.btnText
                          ? {
                              n: e.t(n.btnText),
                              o: e.o(
                                function (e) {
                                  return t.$emit("section-click", n);
                                },
                                3313,
                                o
                              ),
                            }
                          : {}
                      )
                    : e.e(
                        { p: n.title },
                        n.title ? { q: n.title } : {},
                        { r: n.text, s: n.tipText },
                        n.tipText ? { t: n.tipText } : {},
                        { v: n.btnText },
                        n.btnText
                          ? {
                              w: e.t(n.btnText),
                              x: e.o(
                                function (e) {
                                  return t.$emit("section-click", n);
                                },
                                3314,
                                o
                              ),
                            }
                          : {},
                        { y: o !== r.orderedSections.length - 1 },
                        (r.orderedSections.length, {})
                      ),
                  {
                    z: e.n(n.class),
                    A: n.backgroundImage
                      ? "url(".concat(n.backgroundImage, ")")
                      : "",
                  }
                ),
            { B: o }
          );
        }),
      };
    },
  ],
  ["__scopeId", "data-v-6137b834"],
]);
wx.createComponent(n);
