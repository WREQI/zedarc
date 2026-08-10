require("../../app.js");
var E = (function (E) {
    return (
      (E.WIP = "1"),
      (E.SUCCESS = "2"),
      (E.FAIL = "3"),
      (E.PRE_TRANSFER_SUCC = "4"),
      (E.PRE_TRANSFER_FAIL = "5"),
      (E.PRE_TRANSFER_CANCEL = "6"),
      E
    );
  })(E || {}),
  T = (function (E) {
    return (
      (E.RECHARGE = "1"),
      (E.WITHDRAW = "2"),
      (E.INTEREST = "3"),
      (E.DIVIDEND = "4"),
      (E.WITHDRAW_T1 = "5"),
      (E.WITHDRAW_T2 = "6"),
      (E.TAX = "7"),
      (E.RECHARGE_T1 = "8"),
      (E.UNDEF = "99"),
      E
    );
  })(T || {}),
  R = (function (E) {
    return (
      (E.SUCCESS = "succ"),
      (E.TIMEOUT = "timeout"),
      (E.IDEXPIRED = "idexpired"),
      (E.FAIL = "fail"),
      (E.ERROR = "error"),
      (E.PREFAIL = "prefail"),
      (E.PRETIMEOUT = "pretimeout"),
      (E.SCHEDULED = "scheduled"),
      (E.DEADLINE = "deadline"),
      (E.EMPTY = "empty"),
      E
    );
  })(R || {}),
  S = (function (E) {
    return (
      (E.All = "0"),
      (E.RECHARGE = "1"),
      (E.WITHDRAW = "2"),
      (E.BUY = "3"),
      (E.SELL = "4"),
      (E.DIVIDEND = "5"),
      (E.DEBT = "6"),
      (E.INCOME = "7"),
      E
    );
  })(S || {}),
  e = ["1", "8"],
  A = ["2", "5", "6"],
  t = [].concat(e, A),
  _ = (function (E) {
    return (
      (E.SUC = "3"),
      (E.FAIL = "4"),
      (E.PART_SUC = "11"),
      (E.ONWAY = "12"),
      (E.CANCEL = "13"),
      (E.TIMEOUT = "9"),
      E
    );
  })(_ || {});
(exports.FUNDS_RECORDS_CLASSIFY = [
  { text: "全部", value: "0" },
  { text: "转入", value: "1" },
  { text: "转出", value: "2" },
]),
  (exports.FUNDS_RECORDS_STATUS = _),
  (exports.FUNDS_RECORDS_STATUS_TEXT = {
    3: "成功",
    4: "失败",
    11: "部分成功",
    12: "在途",
    13: "取消",
  }),
  (exports.TRANSFER_CLASSIFY_TYPE = S),
  (exports.TRANSFER_IN_AND_OUT_TYPE = t),
  (exports.TRANSFER_IN_TYPE = e),
  (exports.TRANSFER_OUT_TYPE = A),
  (exports.TRANSFER_RESULT = R),
  (exports.TRANSFER_STATE = E),
  (exports.TRANSFER_TYPE = T),
  (exports.TRANSFER_TYPE_TEXT = {
    1: "资金转入",
    8: "资金转入",
    2: "资金转出",
    5: "资金转出",
    6: "资金转出",
    3: "账户利息",
    4: "股票分红",
    7: "",
    99: "",
  }),
  (exports.TRANSFER_TYPE_TEXT_NEW = {
    1: "转入",
    8: "转入",
    2: "转出",
    5: "转出",
    6: "转出",
    3: "账户利息",
    4: "股票分红",
    7: "",
    99: "",
  });
