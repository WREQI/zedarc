require("../../../../app.js");
var n = require("../../../../common/vendor.js"),
  e = require("../../../../model/apply/activity-stat.js");
Math || (n.unref(t) + n.unref(o))();
var t = function () {
    return "../../../../components/BankLogo/BankLogo.js";
  },
  o = function () {
    return "../../../../common/components/Dialog/Dialog.js";
  },
  r = n.defineComponent({
    __name: "BankCardSupportDialog",
    props: {
      visible: { type: Boolean, default: !1 },
      supportedBankList: {
        default: function () {
          return [];
        },
      },
    },
    emits: ["close"],
    setup: function (t, o) {
      var r = o.emit;
      function a() {
        r("close");
      }
      var i,
        u = (
          null == (i = e.getActivityChannel()) ? void 0 : i.activity_channel_id
        )
          ? "仅以下银行参与本次活动"
          : "目前支持的银行有";
      return function (e, t) {
        return {
          a: n.f(e.supportedBankList, function (e, t, o) {
            return {
              a: "f8df294b-1-" + o + ",f8df294b-0",
              b: n.p({ bank: e.bankAbbr.toLowerCase() }),
              c: n.t(e.bankName),
              d: e.bankAbbr,
            };
          }),
          b: n.o(a),
          c: n.p({
            visible: e.visible,
            title: n.unref(u),
            "confirm-button-text": "我知道了",
          }),
        };
      };
    },
  }),
  a = n._export_sfc(r, [["__scopeId", "data-v-f8df294b"]]);
wx.createComponent(a);
