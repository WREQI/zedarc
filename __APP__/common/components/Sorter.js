require("../../app.js");
var e = require("../../stores/app/useMode.js"),
  r = require("../vendor.js"),
  t = {
    props: { active: { type: Number, default: 0 } },
    setup: function () {
      return { simpleMode: r.storeToRefs(e.useModeStore()).simpleMode };
    },
  },
  o = r._export_sfc(t, [
    [
      "render",
      function (e, t, o, s, i, p) {
        return {
          a: r.n(2 === o.active ? "u-arrow-light" : ""),
          b: r.n(1 === o.active ? "d-arrow-light" : ""),
          c: r.n(s.simpleMode ? "component-list-sorter__simple-mode" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-3c332f6f"],
  ]);
wx.createComponent(o);
