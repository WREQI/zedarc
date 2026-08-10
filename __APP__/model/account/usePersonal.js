var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../cgi/account.js"),
  i = require("../../cgi/bind.js"),
  u = require("../../common/vendor.js");
require("../../service/broker.js"), require("../../service/sdk/lib/api.js");
var c = require("../../service/sdk/platform/mp-weixin.js"),
  a = require("../../utils/getPlatform.js"),
  s = require("../../config/broker/11100/index.js");
exports.usePersonal = function () {
  var o,
    p,
    d,
    g,
    f = u.ref({});
  return {
    getDict:
      ((g = t(
        r().mark(function e(t) {
          var i;
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), n.accountCgi.getDict(t);
                case 2:
                  return (i = e.sent), e.abrupt("return", ((f.value = i), i));
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (e) {
        return g.apply(this, arguments);
      }),
    itemShowConfig: u.computed(function () {
      return s.brokerConfig.hall.personal;
    }),
    getUserSetting:
      ((d = t(
        r().mark(function t(i) {
          var u, s, o, p, d, g;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (((u = a.getPlatform()), (s = u.isZxg), (o = {}), !s)) {
                      r.next = 14;
                      break;
                    }
                    return (r.prev = 3), (r.next = 6), c.sdk.clientinfo();
                  case 6:
                    (p = r.sent),
                      (d = p.appName),
                      (g = p.appver),
                      (o = { _appName: d, _appver: g }),
                      (r.next = 14);
                    break;
                  case 12:
                    (r.prev = 12), (r.t0 = r.catch(3));
                  case 14:
                    return r.abrupt(
                      "return",
                      n.accountCgi.getUserSetting(e(e({}, i), o))
                    );
                  case 15:
                  case "end":
                    return r.stop();
                }
            },
            t,
            null,
            [[3, 12]]
          );
        })
      )),
      function (e) {
        return d.apply(this, arguments);
      }),
    setUserSetting:
      ((p = t(
        r().mark(function t(i) {
          var u, s, o, p, d, g;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (((u = a.getPlatform()), (s = u.isZxg), (o = {}), !s)) {
                      r.next = 14;
                      break;
                    }
                    return (r.prev = 3), (r.next = 6), c.sdk.clientinfo();
                  case 6:
                    (p = r.sent),
                      (d = p.appName),
                      (g = p.appver),
                      (o = { _appName: d, _appver: g }),
                      (r.next = 14);
                    break;
                  case 12:
                    (r.prev = 12), (r.t0 = r.catch(3));
                  case 14:
                    return r.abrupt(
                      "return",
                      n.accountCgi.setUserSetting(e(e({}, i), o))
                    );
                  case 15:
                  case "end":
                    return r.stop();
                }
            },
            t,
            null,
            [[3, 12]]
          );
        })
      )),
      function (e) {
        return p.apply(this, arguments);
      }),
    sendSms: function (e) {
      return n.accountCgi.sendSms(e);
    },
    checkSms: function (e) {
      return n.accountCgi.checkIdentity(e);
    },
    getResetPwdStatus: function (e) {
      return n.accountCgi.getResetPwdStatus(e);
    },
    setRiskevaluate: function (e) {
      return n.accountCgi.setRiskevaluate(e);
    },
    setDealerUserInfo: function (e) {
      return n.accountCgi.setDealerUserInfo(e);
    },
    unBind: function (e) {
      return i.bindCgi.requestUnBind(e);
    },
    unBindZxg: function (e) {
      return i.bindCgi.requestZxgUnBind(e);
    },
    queryIdCardValidTime: function (r) {
      return n.accountCgi.queryIdCard(e(e({}, r), {}, { action: "3" }));
    },
    queryIdCardStatus: function (r) {
      return n.accountCgi.queryIdCard(e(e({}, r), {}, { action: "1" }));
    },
    submitIdCardInfo: function (r) {
      return n.accountCgi.queryIdCard(e(e({}, r), {}, { action: "2" }), {
        encodeFields: [
          "id_name",
          "id_number",
          "id_addr",
          "id_beg_date",
          "id_end_date",
          "issue_authority",
        ],
      });
    },
    checkPwdUnionType:
      ((o = t(
        r().mark(function e() {
          var t, i;
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), n.accountCgi.checkUnionType();
                case 2:
                  return (
                    (t = e.sent), (i = t.connect_status), e.abrupt("return", i)
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return o.apply(this, arguments);
      }),
    bind: function (e) {
      return i.bindCgi.requestBind(e);
    },
    zxgBind: function (e) {
      return i.bindCgi.requestZxgBind(e);
    },
    getImageProcessor: function (e) {
      return n.accountCgi.getImageProcessor(e);
    },
    checkRiskUpdateLimit: function () {
      return n.accountCgi.checkRiskUpdateLimit();
    },
    checkBizTypeLimit: function (e) {
      return n.accountCgi.checkBizTypeLimit(e);
    },
  };
};
