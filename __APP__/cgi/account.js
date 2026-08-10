var e = require("../@babel/runtime/helpers/objectSpread2"),
  t = require("../@babel/runtime/helpers/classCallCheck"),
  r = require("../@babel/runtime/helpers/createClass"),
  n = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js"), require("../config/enum.js");
var i = require("./base.js"),
  s = require("../config/cgi.js");
require("../service/broker.js");
var c = require("../config/broker/11100/index.js"),
  a = (function (e) {
    return (e.QUERY = "0"), (e.SIGN = "1"), (e.PULL = "2"), e;
  })(a || {}),
  o = new ((function (i) {
    n(o, i);
    var a = u(o);
    function o() {
      return t(this, o), a.apply(this, arguments);
    }
    return (
      r(o, [
        {
          key: "getDict",
          value: function (e) {
            return this.request(s.API_DICTIONARY, e);
          },
        },
        {
          key: "getUserSetting",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return this.request(
              s.API_USERSETTING,
              e(e({}, t), {}, { query: 1 })
            );
          },
        },
        {
          key: "setUserSetting",
          value: function (e) {
            return this.request(s.API_USERSETTING, e);
          },
        },
        {
          key: "setDealerUserInfo",
          value: function (e) {
            return this.request(s.API_DEALER_USERINFO, e, {
              encodeFields: ["tel", "contact_addr"],
            });
          },
        },
        {
          key: "sendSms",
          value: function (e) {
            return this.request(s.API_SEND_SMS, e, {
              encodeFields: ["tel", "id_number"],
            });
          },
        },
        {
          key: "checkIdentity",
          value: function (e) {
            return this.request(s.API_CHECKIDENTITY, e, {
              encodeFields: ["tel", "id_number"],
            });
          },
        },
        {
          key: "getResetPwdStatus",
          value: function (e) {
            return this.request(s.API_PASSWD, e, {
              encodeFields: ["tel", "id_number"],
            });
          },
        },
        {
          key: "checkFace",
          value: function (t) {
            return this.request(s.API_PASSWD, e(e({}, t), {}, { action: 8 }), {
              encodeFields: ["tel", "id_number", "id_name"],
            });
          },
        },
        {
          key: "saveInfo",
          value: function (t) {
            return this.request(s.API_PASSWD, e(e({}, t), {}, { action: 8 }), {
              encodeFields: ["tel", "id_number", "id_name"],
            });
          },
        },
        {
          key: "setRiskevaluate",
          value: function (e) {
            return this.request(s.API_RISKEVALUATE, e);
          },
        },
        {
          key: "queryIdCard",
          value: function (e, t) {
            return this.request(s.API_IDENTITY_CARD, e, t);
          },
        },
        {
          key: "checkUnionType",
          value: function () {
            return this.request(s.API_DEALER_SPECIAL, {
              qry_item: "connect_status",
            });
          },
        },
        {
          key: "getImageProcessor",
          value: function (e) {
            return this.request(s.API_IMAGE_PROCESSOR, e);
          },
        },
        {
          key: "checkRiskUpdateLimit",
          value: function () {
            return this.request(s.API_DEALER_USERINFO, { action: "8" });
          },
        },
        {
          key: "checkBizTypeLimit",
          value: function (e) {
            return this.request(s.API_DEALER_USERINFO, {
              action: "9",
              biz_type: e,
            });
          },
        },
        {
          key: "queryUserAccountList",
          value: function () {
            return this.request(
              "/tradesvr/qry_all_account",
              {},
              {
                headers: { "Content-Type": "application/json" },
                baseURL: "https://".concat(c.brokerConfig.base.domain),
              }
            );
          },
        },
        {
          key: "checkBankCardChangeCondition",
          value: function (e) {
            return this.request(s.API_BANKCARDS, {
              action: "7",
              check_type: e,
            });
          },
        },
        {
          key: "processCftUserinfo",
          value: function (e, t) {
            return this.request(s.API_CFT_USERINFO, e, t);
          },
        },
      ]),
      o
    );
  })(i.BaseAPI))();
(exports.CFT_USERINFO_ACTION = a), (exports.accountCgi = o);
