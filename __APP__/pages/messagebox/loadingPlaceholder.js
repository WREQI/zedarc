var e = require("../../common/vendor.js"),
  r = require("./brokerMessagePlugin.js"),
  t = {
    setup: function () {
      return { height: r.usePlaceholderHeight().height };
    },
    data: function () {
      return { COMMON_PAGE_STATUS: e.COMMON_PAGE_STATUS };
    },
  };
Array || e.resolveComponent("st-status")();
var n = e._export_sfc(t, [
  [
    "render",
    function (r, t, n, o, s, u) {
      return { a: o.height, b: e.p({ type: s.COMMON_PAGE_STATUS.LOADING }) };
    },
  ],
  ["__scopeId", "data-v-912d013c"],
]);
wx.createComponent(n);
