var e = require("../../../../../../../../common/vendor.js"),
  n = {
    name: "qianjiRedPointPlaceHolder",
    components: {
      redpoint: function () {
        return "./mp.js";
      },
    },
    props: {
      name: { type: String, required: !0 },
      minaredpoint: { type: Object, default: null },
    },
    setup: function () {
      var n = e.getCurrentInstance().proxy || e.getCurrentInstance();
      return {
        redpointClick: function () {
          n.$refs.redpointref.redpointClick();
        },
      };
    },
  };
Array || e.resolveComponent("redpoint")();
var r = e._export_sfc(n, [
  [
    "render",
    function (n, r, t, o, i, p) {
      return {
        a: e.sr("redpointref", "b7c13b77-0"),
        b: e.p({ "position-name": t.name, premote: t.minaredpoint }),
        c: e.o(function () {
          return o.redpointClick && o.redpointClick.apply(o, arguments);
        }, 2186),
      };
    },
  ],
  ["__scopeId", "data-v-b7c13b77"],
]);
wx.createComponent(r);
