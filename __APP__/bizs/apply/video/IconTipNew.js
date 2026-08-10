require("../../../app.js"), require("../../../service/broker.js");
var e = require("../../../stores/app/useMode.js"),
  o = require("../../../common/vendor.js"),
  r = require("../../../config/broker/11100/index.js"),
  t = {
    setup: function () {
      var t,
        n = e.useModeStore(),
        i = o.storeToRefs(n).simpleMode;
      return {
        list: [
          { icon: "light", text: "光线充足" },
          { icon: "full-face", text: "面部完整" },
          { icon: "no-hat", text: "勿戴帽子/耳机" },
          { icon: "silent", text: "环境安静" },
        ],
        brokerCode:
          null !== (t = r.brokerConfig.base.code) && void 0 !== t ? t : "",
        simpleMode: i,
      };
    },
  },
  n = o._export_sfc(t, [
    [
      "render",
      function (e, r, t, n, i, c) {
        return {
          a: o.f(n.list, function (e, r, t) {
            return {
              a: o.n("tip-icon-" + e.icon),
              b: o.n("tip-icon-".concat(e.icon, "-").concat(n.brokerCode)),
              c: o.t(e.text),
              d: r,
            };
          }),
          b: o.n(n.simpleMode ? "icon-tip-container__simple-mode" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-ff5fa4f8"],
  ]);
wx.createComponent(n);
