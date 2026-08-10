require("../../app.js");
var e = require("../../common/vendor.js"),
  o = require("./index.js"),
  n = require("../../model/index/usePluginNeedPwd.js"),
  r = require("../../config/event.js"),
  t = require("../../service/auth/auth.js"),
  s = require("../../service/auth/auth.type.js"),
  i = require("../../stores/app/useMode.js"),
  d = {
    name: "PluginPassword",
    components: {
      PasswordComponent: function () {
        return "./Password.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    sharedComponents: !0,
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    props: { from: { type: String, default: "" } },
    setup: function (r) {
      var d = e.getCurrentInstance().proxy,
        u = i.useModeStore();
      return {
        handlePwd: function (e) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          void 0 !== e &&
            i === r.from &&
            (e
              ? t.Auth({
                  biometricsScene: s.BiometricsScene.PluginCompLogin,
                  context: d,
                  dialogContext: d,
                  theme: o.THEME.EMBEDDED,
                  isTrade: !0,
                  showErrorWithNotice: !0,
                  needUpdateSeed: !0,
                  showCloseIcon: !0,
                  onSuccess: function () {
                    (0, n.usePluginNeedPwd().setNeedPwdVal)(!1);
                  },
                })
              : o.hidePassword({ context: d }));
        },
        simpleMode: e.storeToRefs(u).simpleMode,
      };
    },
    created: function () {
      e.index.$on(r.PLUGIN_SHOW_PWD, this.handlePwd);
    },
    unmounted: function () {
      e.index.$off(r.PLUGIN_SHOW_PWD, this.handlePwd);
    },
  };
Array ||
  (e.resolveComponent("password-component") + e.resolveComponent("MpDialog"))();
var u = e._export_sfc(d, [
  [
    "render",
    function (o, n, r, t, s, i) {
      return {
        a: e.sr("#password-component", "58e87611-0"),
        b: e.p({ id: "password-component" }),
        c: e.p({ id: "mp-dialog" }),
        d: t.simpleMode,
      };
    },
  ],
]);
wx.createComponent(u);
