var t = require("../../../../../common/vendor.js"),
  e = {
    props: { item: { type: Object, default: function () {} } },
    setup: function (t, e) {
      var n = e.emit;
      return {
        goETFDetail: function (t) {
          n("goETFDetail");
        },
      };
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, r, i, a) {
        return {
          a: t.t(o.item.name),
          b: t.t(o.item.scode),
          c: t.f(o.item.fields, function (e, n, o) {
            return { a: t.t(e.val), b: t.n(e.color), c: t.t(e.name), d: n };
          }),
          d: t.o(function () {
            return r.goETFDetail && r.goETFDetail.apply(r, arguments);
          }, 3196),
        };
      },
    ],
    ["__scopeId", "data-v-d2f844d2"],
  ]);
wx.createComponent(n);
