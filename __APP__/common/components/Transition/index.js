require("../../../app.js");
var n = require("../hooks/transition.js"),
  r = require("../../vendor.js"),
  e = { options: { virtualHost: !0 }, mixins: [n.transition] },
  i = r._export_sfc(e, [
    [
      "render",
      function (n, e, i, t, s, o) {
        return r.e(
          { a: n.inited },
          n.inited
            ? {
                b: r.n(n.classes),
                c: r.n(n.customClass),
                d: r.s(n.curStyle),
                e: r.o(function () {
                  return (
                    n.onTransitionEnd && n.onTransitionEnd.apply(n, arguments)
                  );
                }),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(i);
