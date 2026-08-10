var e = require("../../../../../../common/vendor.js"),
  o = {
    props: { tasklog: { type: String, default: "" } },
    setup: function (e, o) {
      var t = o.emit;
      return {
        closelog: function () {
          t("closeLog");
        },
      };
    },
  },
  t = e._export_sfc(o, [
    [
      "render",
      function (o, t, r, n, c, s) {
        return {
          a: e.t(r.tasklog),
          b: e.o(function () {
            return n.closelog && n.closelog.apply(n, arguments);
          }, 3265),
        };
      },
    ],
    ["__scopeId", "data-v-af68e6bd"],
  ]);
wx.createComponent(t);
