var e = require("../../../../@babel/runtime/helpers/objectSpread2");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  o = require("../../../../@babel/runtime/helpers/inherits"),
  a = require("../../../../@babel/runtime/helpers/createSuper"),
  u = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var c = Object.defineProperty,
  l = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? c(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != u(r) ? r + "" : r, t),
      t
    );
  },
  p = require("../../../../common/vendor.js"),
  m = require("../../../../cgi/biometrics.js"),
  h = require("./utils.js"),
  b = require("../../../../common/components/Dialog/index.js"),
  d = require("../../../../service/stat/mp-weixin.js"),
  v = require("./BiometricsBase.js"),
  f = require("../../../../service/auth/auth.type.js"),
  g = require("../../../../stores/user/useUserinfo.js"),
  q = (function (u) {
    o(x, u);
    var c,
      v,
      q = a(x);
    function x(e) {
      var r;
      return (
        i(this, x),
        (r = q.call(this)),
        l(n(r), "settingFrom"),
        (r.settingFrom = e.settingFrom),
        r
      );
    }
    return (
      s(x, [
        { key: "openComplete", value: function (e, r) {} },
        {
          key: "openBiometrics",
          value:
            ((v = t(
              r().mark(function e(t, i) {
                var s, n, o, a;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.verifyPassword(t, i)
                          );
                        case 3:
                          return (
                            (o = e.sent), (e.next = 6), this.verifyBiometrics(t)
                          );
                        case 6:
                          return (
                            (a = e.sent.bioResult),
                            p.index.showLoading({ title: "验证中" }),
                            (e.next = 10),
                            m.biometricsAPI.openBiometrics({
                              biometric_type: h.transferBioModeToParams(
                                a.authMode
                              ),
                              json_string: a.resultJSON,
                              json_signature: a.resultJSONSignature,
                              biometric_device_id: a.deviceId,
                              psw: o,
                            })
                          );
                        case 10:
                          this.updateBiometricsStatus(t),
                            d.stat.click(
                              "trade.setting.bio_open.succ".concat(
                                this.settingFrom
                              )
                            ),
                            (e.next = 19);
                          break;
                        case 14:
                          if (
                            ((e.prev = 14),
                            (e.t0 = e.catch(0)),
                            !(null ==
                            (n =
                              null == (s = null == e.t0 ? void 0 : e.t0.retcode)
                                ? void 0
                                : s.includes)
                              ? void 0
                              : n.call(s, "CANCEL")))
                          ) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return");
                        case 18:
                          throw (
                            (b.Dialog({
                              context: null == t ? void 0 : t.dialogContext,
                              message:
                                (null == e.t0 ? void 0 : e.t0.message) ||
                                "开启失败",
                            }),
                            e.t0)
                          );
                        case 19:
                          return (
                            (e.prev = 19),
                            p.index.hideLoading(),
                            a
                              ? this.openComplete(
                                  {
                                    authType: f.LoginType.Biometrics,
                                    bioResult: a,
                                  },
                                  t
                                )
                              : o &&
                                this.openComplete(
                                  {
                                    authType: f.LoginType.Password,
                                    encodePwd: o,
                                  },
                                  t
                                ),
                            e.finish(19)
                          );
                        case 22:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 14, 19, 22]]
                );
              })
            )),
            function (e, r) {
              return v.apply(this, arguments);
            }),
        },
        {
          key: "updateBiometricsStatus",
          value:
            ((c = t(
              r().mark(function t(i) {
                var s, n;
                return r().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            (s = g.useUserinfoStore()),
                            (r.next = 4),
                            s.forceGetUserInfo()
                          );
                        case 4:
                          return (
                            (n = h.getBiometricFlags(s.userinfo || {})),
                            (r.next = 7),
                            this.setRemoteBiometrics(e({}, n))
                          );
                        case 7:
                          r.next = 12;
                          break;
                        case 9:
                          (r.prev = 9),
                            (r.t0 = r.catch(0)),
                            b.Dialog({
                              context: null == i ? void 0 : i.dialogContext,
                              message: "查询设置结果失败",
                            });
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 9]]
                );
              })
            )),
            function (e) {
              return c.apply(this, arguments);
            }),
        },
      ]),
      x
    );
  })(v.BiometricsBase);
exports.BiometricsSettingBase = q;
