require("../../../app.js");
var e = require("../../../utils/getPlatform.js"),
  r = require("../../../service/aegis/platform/not-wujie.js"),
  t = require("../../../common/vendor.js"),
  a = require("../../../stores/app/useMode.js"),
  i = {
    props: {
      enabled: { type: Boolean, default: !0 },
      path: { type: String, default: "" },
      appid: { type: String, default: "" },
      username: { type: String, default: "" },
      envVersion: { type: String, default: "release" },
    },
    setup: function (i, o) {
      var n = o.emit,
        s = e.getPlatform(),
        u = s.bizPlatform,
        p = s.isOEM,
        l = t.storeToRefs(a.useModeStore()).simpleMode,
        d = t.computed(function () {
          var e = i.path.split("&");
          return (
            e.some(function (e) {
              return e.startsWith("_from=h5");
            }) || e.push("_from=h5"),
            p && e.push("oem=1"),
            e.join(e[0].includes("?") ? "&" : "?")
          );
        }),
        c = t.computed(function () {
          return "h5-weixin" === u && (i.username || i.appid) && d.value;
        }),
        f = "";
      "h5-weixin" === u &&
        (f = (t.dist.urltools.param.parse(location.search) || {})._buildh5ver);
      var m = JSON.stringify({ simpleMode: l.value, buildH5Ver: f });
      return {
        mpPath: d,
        isEnvValid: c,
        extraData: m,
        errorCb: function (e) {
          n("error", e),
            r.aegisReporter.sdk.error({
              msg: "launch-weapp-error",
              ext2: JSON.stringify(e || {}),
              trace: "trace",
            });
        },
        launchCb: function () {
          n("launch");
        },
      };
    },
  },
  o = t._export_sfc(i, [
    [
      "render",
      function (e, r, t, a, i, o) {
        return {};
      },
    ],
    ["__scopeId", "data-v-41eb05cd"],
  ]);
wx.createComponent(o);
