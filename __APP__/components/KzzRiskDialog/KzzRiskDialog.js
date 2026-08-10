require("../../app.js");
var o = require("../../common/vendor.js"),
  r = require("../../model/kzz/useKzz.js"),
  e = {
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    props: { action: 0 | String },
    setup: function (e) {
      var t = r.useKzz(),
        i = t.holdRiskItem,
        n = t.tradeRiskItem;
      return {
        riskItem: o.computed(function () {
          return "hold" === e.action ? i.value : n.value;
        }),
        isHold: function () {
          return "hold" === e.action;
        },
        formatDate: function (r) {
          return o.dayjs(r).format("YYYY年MM月DD日");
        },
      };
    },
  };
Array || o.resolveComponent("MpDialog")();
var t = o._export_sfc(e, [
  [
    "render",
    function (r, e, t, i, n, a) {
      return {
        a: o.t(i.formatDate(i.riskItem.regis_date)),
        b: o.t(i.riskItem.conv_stock_name),
        c: i.isHold() ? "hold-kzz-risk-dialog" : "trade-kzz-risk-dialog",
        d: o.p({
          id: i.isHold() ? "hold-kzz-risk-dialog" : "trade-kzz-risk-dialog",
        }),
      };
    },
  ],
]);
wx.createComponent(t);
