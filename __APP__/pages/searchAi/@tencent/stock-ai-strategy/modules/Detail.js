var e = require("../../../../../common/vendor.js"),
  t = {
    components: {
      DetailV1: function () {
        return "./v1/Detail.js";
      },
      DetailV2: function () {
        return "./v2/Detail.js";
      },
    },
    props: { version: String, filter: String, context: Object },
    setup: function (e, t) {
      var r = t.emit;
      return {
        onDetailClick: function (e) {
          r("click", e);
        },
        onDetailError: function (e) {
          r("error", e);
        },
      };
    },
  };
Array || (e.resolveComponent("DetailV1") + e.resolveComponent("DetailV2"))();
var r = e._export_sfc(t, [
  [
    "render",
    function (t, r, n, o, i, c) {
      return e.e(
        { a: "v2" !== n.version },
        "v2" !== n.version
          ? {
              b: e.o(o.onDetailClick, 876),
              c: e.o(o.onDetailError, 877),
              d: e.p({ filter: n.filter, context: n.context }),
            }
          : {
              e: e.o(o.onDetailClick, 878),
              f: e.o(o.onDetailError, 879),
              g: e.p({ filter: n.filter, context: n.context }),
            }
      );
    },
  ],
]);
wx.createComponent(r);
