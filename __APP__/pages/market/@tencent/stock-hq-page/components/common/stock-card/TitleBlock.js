var t = require("../../../../../../../common/vendor.js"),
  i = {
    props: { titleOptions: { type: Object, default: function () {} } },
    data: function () {
      return {};
    },
    methods: {
      tipClick: function () {
        this.$emit("tipClick");
      },
      gotoList: function () {
        this.$emit("gotoList");
      },
    },
  },
  o = t._export_sfc(i, [
    [
      "render",
      function (i, o, e, n, s, p) {
        return t.e(
          { a: t.t(e.titleOptions.name), b: e.titleOptions.isShowTip },
          e.titleOptions.isShowTip
            ? {
                c: t.o(function () {
                  return p.tipClick && p.tipClick.apply(p, arguments);
                }, 5171),
              }
            : {},
          { d: e.titleOptions.isShowArrow },
          e.titleOptions.isShowArrow
            ? t.e(
                { e: e.titleOptions.text },
                e.titleOptions.text
                  ? t.e(
                      {
                        f: t.t(e.titleOptions.text),
                        g: e.titleOptions.isShowRedDot,
                      },
                      (e.titleOptions.isShowRedDot, {}),
                      {
                        h: t.n(
                          e.titleOptions.isShowRedDot ? "with-red-dot" : ""
                        ),
                      }
                    )
                  : {}
              )
            : {},
          {
            i: t.n(e.titleOptions.isShowDivider ? "divider" : ""),
            j: t.o(function (t) {
              return p.gotoList();
            }, 5172),
          }
        );
      },
    ],
    ["__scopeId", "data-v-b7f80d42"],
  ]);
wx.createComponent(o);
