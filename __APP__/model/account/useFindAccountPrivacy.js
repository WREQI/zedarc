require("../../@babel/runtime/helpers/Objectentries");
var e = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var u = require("../../common/vendor.js");
require("../../service/broker.js");
var a = require("../apply/usePrivacyInfo.js"),
  c = require("../../cgi/account.js"),
  i = require("../../service/aegis/platform/not-wujie.js"),
  s = require("../apply/profile/utils/index.js"),
  o = require("../../service/stat/mp-weixin.js"),
  p = require("../../config/broker/11100/index.js");
exports.useFindAccountPrivacy = function () {
  var f = u.ref(!1),
    l = u.ref(!1);
  l.value = Boolean(p.brokerConfig.bind.findAccountPullCftInfo);
  var b,
    v,
    d = a.usePrivacyInfo(a.EScene.BIZ).getAuthStatus;
  return {
    init:
      ((v = n(
        t().mark(function e() {
          var r;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!l.value) {
                    e.next = 5;
                    break;
                  }
                  return (
                    (e.next = 3),
                    n(
                      t().mark(function e() {
                        var r;
                        return t().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r = !1),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    d({ isShowErr: !1 })
                                  );
                                case 4:
                                  (r = e.sent), (e.next = 10);
                                  break;
                                case 7:
                                  return (
                                    (e.prev = 7),
                                    (e.t0 = e.catch(1)),
                                    e.abrupt("return", !1)
                                  );
                                case 10:
                                  return e.abrupt("return", r);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[1, 7]]
                        );
                      })
                    )()
                  );
                case 3:
                  return (
                    (r = e.sent),
                    e.abrupt(
                      "return",
                      (r ||
                        ((f.value = !0),
                        o.stat.click(
                          "trade.find_account.cft_privacy_show_brow"
                        )),
                      r)
                    )
                  );
                case 5:
                  return e.abrupt("return", !1);
                case 6:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return v.apply(this, arguments);
      }),
    isFuncOn: l,
    isPopupShow: f,
    pullCftInfo:
      ((b = n(
        t().mark(function n() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.t0 = !0),
                      (t.next = 4),
                      c.accountCgi
                        .processCftUserinfo(
                          { action: c.CFT_USERINFO_ACTION.PULL },
                          { decodeFields: ["cred_id_gm", "cred_name_gm"] }
                        )
                        .then(function (t) {
                          return (function (t, n) {
                            var u = r({}, t);
                            return (
                              Object.entries({
                                cred_name_enc: "cred_name",
                                cred_id_enc: "cred_id",
                              }).forEach(function (r) {
                                var n = e(r, 2),
                                  a = n[0],
                                  c = n[1];
                                Object.prototype.hasOwnProperty.call(t, a) &&
                                  (u[c] = s.base64toUtf8(t[a]) || t[a]);
                              }),
                              u
                            );
                          })(t);
                        })
                    );
                  case 4:
                    return (
                      (t.t1 = t.sent),
                      t.abrupt("return", { success: t.t0, data: t.t1 })
                    );
                  case 8:
                    return (
                      (t.prev = 8),
                      (t.t2 = t.catch(0)),
                      t.abrupt(
                        "return",
                        (i.aegisReporter.reportEvent(
                          "MONITOR-BIZ-ERR_FIND_ACCOUNT_GET_CFT_INFO_FAIL"
                        ),
                        { success: !1, data: t.t2 })
                      )
                    );
                  case 11:
                  case "end":
                    return t.stop();
                }
            },
            n,
            null,
            [[0, 8]]
          );
        })
      )),
      function () {
        return b.apply(this, arguments);
      }),
  };
};
