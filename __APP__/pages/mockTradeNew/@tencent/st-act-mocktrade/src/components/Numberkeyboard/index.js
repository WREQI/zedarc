var n = require("../../../../../../../common/vendor.js"),
  e = {
    props: {
      visible: { type: Boolean, default: !1 },
      maxLength: { type: Number, default: 10 },
      maxDecimalPlaces: { type: Number, default: 2 },
    },
    setup: function (n, e) {
      var o = e.emit;
      return {
        onNumberClick: function (n) {
          o("input", n);
        },
        onDecimalClick: function () {
          o("input", ".");
        },
        onDelete: function () {
          o("delete");
        },
        onClear: function () {
          o("clear");
        },
        onConfirm: function () {
          o("confirm");
        },
        onClose: function () {
          o("close");
        },
      };
    },
  },
  o = n._export_sfc(e, [
    [
      "render",
      function (e, o, t, r, i, u) {
        return n.e(
          { a: t.visible },
          t.visible
            ? {
                b: n.f([1, 2, 3], function (e, o, t) {
                  return {
                    a: n.t(e),
                    b: e,
                    c: n.o(
                      function (n) {
                        return r.onNumberClick(e.toString());
                      },
                      5474,
                      e
                    ),
                  };
                }),
                c: n.o(function () {
                  return r.onDelete && r.onDelete.apply(r, arguments);
                }, 5475),
                d: n.f([4, 5, 6], function (e, o, t) {
                  return {
                    a: n.t(e),
                    b: e,
                    c: n.o(
                      function (n) {
                        return r.onNumberClick(e.toString());
                      },
                      5476,
                      e
                    ),
                  };
                }),
                e: n.o(function () {
                  return r.onClear && r.onClear.apply(r, arguments);
                }, 5477),
                f: n.f([7, 8, 9], function (e, o, t) {
                  return {
                    a: n.t(e),
                    b: e,
                    c: n.o(
                      function (n) {
                        return r.onNumberClick(e.toString());
                      },
                      5478,
                      e
                    ),
                  };
                }),
                g: n.o(function () {
                  return r.onClose && r.onClose.apply(r, arguments);
                }, 5479),
                h: n.o(function (n) {
                  return r.onNumberClick("0");
                }, 5480),
                i: n.o(function () {
                  return (
                    r.onDecimalClick && r.onDecimalClick.apply(r, arguments)
                  );
                }, 5481),
                j: n.o(function () {
                  return r.onConfirm && r.onConfirm.apply(r, arguments);
                }, 5482),
                k: n.o(function () {}, 5483),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-2ec3d313"],
  ]);
wx.createComponent(o);
