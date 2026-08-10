require("../../../app.js"), require("../../../service/broker.js");
var e = require("../../../config/broker/index.js"),
  r = require("../../../common/vendor.js"),
  o = require("../../../config/broker/11100/index.js"),
  n = {
    name: "Operate",
    components: {
      Xinke: function () {
        return "./operate/Xinke.js";
      },
    },
    setup: function () {
      var r;
      return {
        type: (
          (null == (r = o.brokerConfig.apply) ? void 0 : r.progressActConfig) ||
          {}
        ).type,
        EProgressTemp: e.EProgressTemp,
      };
    },
  };
Array || r.resolveComponent("xinke")();
var s = r._export_sfc(n, [
  [
    "render",
    function (e, o, n, s, t, p) {
      return r.e(
        { a: s.EProgressTemp.XINKE === s.type },
        (s.EProgressTemp.XINKE, s.type, {})
      );
    },
  ],
  ["__scopeId", "data-v-3c842b62"],
]);
wx.createComponent(s);
