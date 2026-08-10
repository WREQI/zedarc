require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../utils/usePopupQueue.js"),
  t = require("../../../stores/user/useUserinfo.js"),
  u = {
    PRIVACY_PROTOCOL: "privacy-protocol",
    REGISTER_RISK: "register-risk",
    MILESTONE: "milestone",
    RISK_TEST: "risk-test",
    MONEY_TRACE: "money-trace",
    LOTTERY_REWARD: "lottery-reward",
  };
exports.useAssetPopupQueue = function (i) {
  var o = i.lottery,
    n = e.storeToRefs(t.useUserinfoStore()).userinfo,
    s = r.usePopupQueue([
      {
        id: u.PRIVACY_PROTOCOL,
        priority: 0,
        enabled: function () {
          return !1;
        },
      },
      { id: u.REGISTER_RISK, priority: 1 },
      { id: u.RISK_TEST, priority: 2 },
      {
        id: u.MONEY_TRACE,
        priority: 3,
        enabled: function () {
          var e;
          return "1" === (null == (e = n.value) ? void 0 : e.show_trace_notice);
        },
      },
      { id: u.MILESTONE, priority: 4, reevaluate: !0 },
      {
        id: u.LOTTERY_REWARD,
        priority: 5,
        enabled: function () {
          return o.items.value.length > 0 && !0;
        },
      },
    ]),
    p = s.currentId;
  return {
    POPUP_ID: u,
    popupQueue: s,
    popupCurrentId: p,
    advanceLotteryPopup: function () {
      s.next(u.LOTTERY_REWARD);
    },
  };
};
