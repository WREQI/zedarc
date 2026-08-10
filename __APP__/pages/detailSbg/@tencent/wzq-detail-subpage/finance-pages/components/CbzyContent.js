var e = require("../../../../../../common/vendor.js"),
  t = require("../pages/mp/Cbzy.js"),
  n = e.defineComponent({
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
        required: !0,
      },
    },
    setup: function (n) {
      return {
        content: e.computed(function () {
          return t.cbzyUtil.handleData(n.data);
        }),
      };
    },
  }),
  r = e._export_sfc(n, [
    [
      "render",
      function (t, n, r, o, a, c) {
        return {
          a: e.f(t.content, function (t, n, r) {
            return {
              a: e.t(t.title),
              b: e.n("detail-value-".concat(t.color)),
              c: e.t(t.value),
              d: n,
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-83f3546e"],
  ]);
wx.createComponent(r);
