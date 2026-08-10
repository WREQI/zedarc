require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../config/enum/transfer.js"),
  R = [r.TRANSFER_TYPE.RECHARGE, r.TRANSFER_TYPE.RECHARGE_T1],
  T = [
    r.TRANSFER_TYPE.WITHDRAW,
    r.TRANSFER_TYPE.WITHDRAW_T1,
    r.TRANSFER_TYPE.WITHDRAW_T2,
  ],
  n = [
    r.TRANSFER_TYPE.RECHARGE_T1,
    r.TRANSFER_TYPE.WITHDRAW_T1,
    r.TRANSFER_TYPE.WITHDRAW_T2,
  ];
(exports.isRecharge = function (e) {
  return R.includes(e);
}),
  (exports.isSchedule = function () {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return Boolean(
      r.filter(function (r) {
        return (function (e) {
          return n.includes(e);
        })(e(r, 1)[0]);
      }).length
    );
  }),
  (exports.isWithdraw = function (e) {
    return T.includes(e);
  });
