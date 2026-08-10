var e = require("../../../../../../common/vendor.js"),
  n = require("../services/BaseController.js"),
  c = {
    setup: function (c, r) {
      var t = r.emit;
      return {
        cancel: function () {
          t("close");
        },
        goAct: function () {},
        isZxg: e.computed(function () {
          return "zxg" == n.config.cfgPlatform;
        }),
      };
    },
  },
  r = e._export_sfc(c, [
    [
      "render",
      function (n, c, r, t, o, u) {
        return e.e({ a: t.isZxg }, (t.isZxg, {}), {
          b: e.o(function () {
            return t.goAct && t.goAct.apply(t, arguments);
          }, 3261),
          c: e.o(function () {
            return t.cancel && t.cancel.apply(t, arguments);
          }, 3262),
        });
      },
    ],
    ["__scopeId", "data-v-6e03e355"],
  ]);
wx.createComponent(r);
