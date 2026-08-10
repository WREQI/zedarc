require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../config/enum/account.js"),
  o = require("../../../stores/user/useUserinfo.js"),
  r = {
    name: "LoginInfo",
    setup: function () {
      var r = o.useUserinfoStore(),
        t = e.storeToRefs(r).userinfo,
        i = e.computed(function () {
          var e = r.userinfo.login_type;
          return e ? n.LOGIN_TYPE[e] || n.LOGIN_TYPE.DEFAULT : "";
        }),
        u = e.computed(function () {
          var n = r.userinfo,
            o = n.login_date,
            t = n.login_time;
          if (!o || !t) return "";
          try {
            return e
              .dayjs("".concat(o, " ").concat(t))
              .format("YYYY年M月D日 HH:mm:ss");
          } catch (e) {
            return "";
          }
        }),
        s = e.computed(function () {
          var e;
          return [
            i.value,
            u.value,
            null == (e = r.userinfo) ? void 0 : e.login_ip,
          ].every(function (e) {
            return e;
          });
        });
      return { userinfo: t, loginType: i, loginTime: u, isInfoComplete: s };
    },
  },
  t = e._export_sfc(r, [
    [
      "render",
      function (n, o, r, t, i, u) {
        return e.e(
          { a: t.isInfoComplete },
          t.isInfoComplete
            ? {
                b: e.t(t.loginType),
                c: e.t(t.loginTime),
                d: e.t(t.userinfo.login_ip),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-2a26beb4"],
  ]);
wx.createComponent(t);
