require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../config/enum/transfer.js"),
  n = {
    name: "TransferPendingTip",
    props: {
      pendingPreTransfers: { type: Number, default: 0 },
      is724: Boolean,
      pageStatus: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isNewFundRecordUser: Boolean,
    },
    setup: function (n) {
      var s = e.getCurrentInstance().proxy;
      return {
        showPendingTransfers: e.computed(function () {
          return (
            n.is724 &&
            ["NORMAL", "OUTTRADETIME", "NOAVAILABLE", "CLEARTIME"].includes(
              n.pageStatus.type
            ) &&
            n.pendingPreTransfers > 0
          );
        }),
        onclick: function () {
          n.isNewFundRecordUser
            ? s.$router.push({
                name: "TransferFundRecords",
                query: { state: r.FUNDS_RECORDS_STATUS.ONWAY },
              })
            : s.$router.push({ name: "TransferHistory" }),
            s.$stat.click("trade.transfer.pending_record.click");
        },
      };
    },
  },
  s = e._export_sfc(n, [
    [
      "render",
      function (r, n, s, t, u, a) {
        return e.e(
          { a: t.showPendingTransfers },
          t.showPendingTransfers
            ? {
                b: e.t(s.pendingPreTransfers),
                c: e.o(function () {
                  return t.onclick && t.onclick.apply(t, arguments);
                }),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(s);
