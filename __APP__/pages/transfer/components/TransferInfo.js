require("../../../app.js");
var r = require("../../../common/vendor.js"),
  e = require("../../../stores/user/useUserinfo.js"),
  n = require("../../../stores/app/useMode.js"),
  o = {
    name: "TransferInfo",
    components: {
      BankLogo: function () {
        return "../../../components/BankLogo/BankLogo.js";
      },
      BrokerLogo: function () {
        return "../../../components/BrokerLogo/BrokerLogo.js";
      },
    },
    props: { transferType: { type: Number, default: 0 } },
    setup: function () {
      var o,
        a = null == (o = r.getCurrentInstance()) ? void 0 : o.proxy,
        s = r.storeToRefs(n.useModeStore()).simpleMode,
        t = r.inject("transferData");
      return {
        userinfo: r.storeToRefs(e.useUserinfoStore()).userinfo,
        transferData: t,
        isMarginTransfer: "MarginFundTransfer" === a.$route.name,
        simpleMode: s,
      };
    },
  };
Array || (r.resolveComponent("BankLogo") + r.resolveComponent("BrokerLogo"))(),
  Math ||
    (
      function () {
        return "../../../components/BankLogo/BankLogo.js";
      } +
      function () {
        return "../../../components/BrokerLogo/BrokerLogo.js";
      }
    )();
var a = r._export_sfc(o, [
  [
    "render",
    function (e, n, o, a, s, t) {
      return r.e(
        {
          a: r.p({ bank: a.transferData.bankAbbr }),
          b: r.t(a.transferData.bankName),
          c: r.t(
            a.transferData.cardTail
              ? "**".concat(a.transferData.cardTail)
              : "资金安全卡"
          ),
          d: r.n(1 === o.transferType ? "flex-end" : "flex-start"),
          e: r.n(a.simpleMode ? "arrow-red" : "arrow-blue"),
          f: a.userinfo.headimgurl && !a.isMarginTransfer,
        },
        a.userinfo.headimgurl && !a.isMarginTransfer
          ? { g: a.userinfo.headimgurl }
          : {},
        { h: !a.isMarginTransfer },
        (a.isMarginTransfer, {}),
        {
          i: r.t((a.userinfo.fundaccount || "").slice(-4)),
          j: r.n(1 === o.transferType ? "flex-start" : "flex-end"),
          k: r.n(1 === o.transferType ? "reverse" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-a22a1c5d"],
]);
wx.createComponent(a);
