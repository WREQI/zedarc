var e,
  r = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var t = require("../../../config/errcode.js"),
  i = require("../../../adapter/router.js");
require("../../../service/broker.js");
var n = require("../../../common/vendor.js");
require("../../../service/sdk/lib/api.js");
var o = require("../../../service/sdk/platform/mp-weixin.js"),
  d = require("../../../config/broker/11100/index.js"),
  s =
    (r((e = {}), t.COND_NO_AUTH, {
      btnText: "立即开通",
      dictId: "debtPermission",
    }),
    r(e, t.COND_RISK_NOT_MATCH, { btnText: "重新测评", dictId: "risktest" }),
    r(e, t.COND_AGE_NOT_MATCH, { btnText: "我知道了" }),
    e),
  a = d.brokerConfig.dictionary.Enties,
  u = void 0 === a ? {} : a;
(u.debtPermission && !u.debtPermission.hidden) ||
  (s[t.COND_NO_AUTH] = { btnText: "联系券商", contactQs: !0 });
var c = n.ref(0);
exports.useConditionErrorHandle = function () {
  return {
    COND_BLOCK_ERRCODE_MAP: s,
    lastRetcode: c,
    setLastRetcode: function (e) {
      c.value = e;
    },
    getErrorBtnText: function () {
      var e;
      return (null == (e = s[c.value]) ? void 0 : e.btnText)
        ? s[c.value].btnText
        : "重新提交";
    },
    handleErrorJump: function () {
      var e = s[c.value];
      if (
        ((null == e ? void 0 : e.dictId) &&
          !!u[e.dictId] &&
          !u[e.dictId].hidden &&
          i.router().push({ name: u[e.dictId].routeName }),
        null == e ? void 0 : e.contactQs)
      ) {
        var r = "".concat(d.brokerConfig.base.tel).replace(/-/g, "");
        o.sdk.makePhoneCall(r);
      }
    },
  };
};
