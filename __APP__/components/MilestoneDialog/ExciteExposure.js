require("../../app.js");
var e = require("../../common/vendor.js");
require("../../service/sdk/lib/api.js");
var r = require("../../service/sdk/platform/mp-weixin.js"),
  t = require("../../utils/getPlatform.js"),
  o = require("../../adapter/router.js"),
  n = t.getPlatform().isZxg,
  s = e.defineComponent({
    name: "ExciteExposure",
    emits: ["exposed"],
    setup: function (t, s) {
      var i = s.emit,
        a = !1;
      return (
        e.onMounted(function () {
          var t;
          try {
            n && "AssetIndex" === (null == (t = o.route()) ? void 0 : t.name)
              ? r.sdk
                  .pageWillAppear(function () {
                    a || ((a = !0), i("exposed"));
                  })
                  .catch(e.noop)
              : i("exposed");
          } catch (e) {
            i("exposed");
          }
        }),
        {}
      );
    },
  }),
  i = e._export_sfc(s, [
    [
      "render",
      function (e, r, t, o, n, s) {
        return {};
      },
    ],
    ["__scopeId", "data-v-1b0da704"],
  ]);
wx.createComponent(i);
