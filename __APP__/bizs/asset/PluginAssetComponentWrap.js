require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../service/mpIntercept.js"),
  n = require("../../model/index/usePluginNeedPwd.js"),
  r = require("../../config/event.js"),
  i = require("../../service/connect/index.js"),
  u = require("../../service/stat/mp-weixin.js"),
  a = require("../../stores/user/useUserinfo.js"),
  o = {
    name: "PluginAssetCompontWrap",
    props: { defaultTheme: { type: String, default: "" } },
    setup: function (o) {
      var s = e.ref(o.defaultTheme ? o.defaultTheme : t.getTheme()),
        d = n.usePluginNeedPwd().setNeedPwdVal;
      return (
        t.initMpPlugin(),
        e.onPageShow(function () {
          var e;
          s.value = o.defaultTheme ? o.defaultTheme : t.getTheme();
          var n = a.useUserinfoStore();
          null == (e = null == n ? void 0 : n.forceGetUserInfo()) ||
            e.then(function () {}),
            t.updateStatData();
        }),
        e.onPageHide(function () {
          i.disconnect();
        }),
        e.onUnmounted(function () {
          e.index.$off(r.PLUGIN_NEED_PWD, d), i.disconnect();
        }),
        {
          theme: s,
          setNeedPwdVal: d,
          reportPage: function () {
            var e = getCurrentPages();
            if ((null == e ? void 0 : e.length) >= 1) {
              t.updateStatData();
              var n = u.stat.getRetPath("", e[e.length - 1]);
              u.stat.page(n || "");
            }
          },
        }
      );
    },
    created: function () {
      e.index.$on(r.PLUGIN_NEED_PWD, this.setNeedPwdVal);
    },
  },
  s = e._export_sfc(o, [
    [
      "render",
      function (e, t, n, r, i, u) {
        return { a: r.theme };
      },
    ],
  ]);
wx.createComponent(s);
