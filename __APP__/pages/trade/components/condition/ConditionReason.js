require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = {
    emits: ["click"],
    props: {
      reason: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (n, r) {
      var t = r.emit;
      return {
        reasonTextCls: e.computed(function () {
          var e;
          return "cond-reason-".concat(
            (null == (e = n.reason) ? void 0 : e.length) || 1
          );
        }),
        emit: t,
      };
    },
  },
  r = e._export_sfc(n, [
    [
      "render",
      function (n, r, t, o, c, u) {
        return {
          a: e.f(t.reason, function (n, r, t) {
            return e.e({ a: e.t(n), b: 0 === r }, {}, { c: r });
          }),
          b: e.n(o.reasonTextCls),
          c: e.o(function (e) {
            return o.emit("click");
          }),
        };
      },
    ],
    ["__scopeId", "data-v-e8741057"],
  ]);
wx.createComponent(r);
