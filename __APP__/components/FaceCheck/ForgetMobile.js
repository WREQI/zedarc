require("../../app.js");
var e = require("./utils.js"),
  c = require("../../common/vendor.js"),
  t = {
    setup: function (t, r) {
      var n = r.emit,
        a = c.getCurrentInstance().proxy;
      return {
        toFaceCheck: function () {
          a.$stat.click("trade.account.facecheck"), n("facecheck");
        },
        isFaceCheckEntry: e.isFaceCheckEntry(),
      };
    },
  },
  r = c._export_sfc(t, [
    [
      "render",
      function (e, t, r, n, a, o) {
        return c.e(
          { a: n.isFaceCheckEntry },
          n.isFaceCheckEntry
            ? {
                b: c.o(function () {
                  return n.toFaceCheck && n.toFaceCheck.apply(n, arguments);
                }),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-635d62f9"],
  ]);
wx.createComponent(r);
