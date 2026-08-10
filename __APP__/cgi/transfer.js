var e = require("../@babel/runtime/helpers/objectSpread2"),
  r = require("../@babel/runtime/helpers/classCallCheck"),
  t = require("../@babel/runtime/helpers/createClass"),
  n = require("../@babel/runtime/helpers/inherits"),
  u = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s = require("./base.js"),
  i = require("../config/cgi.js"),
  a = (function (e) {
    return (e.BANK = "1"), (e.WXPAY = "2"), e;
  })(a || {}),
  A = (function (e) {
    return (e.WXPAY = "0"), (e.TRADE = "1"), (e.FUND = "2"), e;
  })(A || {}),
  E = (function (e) {
    return (
      (e.REALTIME = "0"),
      (e.PRETIME = "1"),
      (e.CLEARTIME = "4"),
      (e.DISABLED = "5"),
      e
    );
  })(E || {}),
  R = (function (e) {
    return (e.INIT = "init"), (e.CREATE = ""), (e.CREATE_X724 = "alltime"), e;
  })(R || {}),
  o = (function (e) {
    return (e.WXPAY = "0"), (e.TRADE_PWD = "1"), (e.FUND_PWD = "2"), e;
  })(o || {}),
  c = (function (e) {
    return (
      (e.NORMAL = "0"),
      (e.JXB = "1"),
      (e.TRANSFER = "2"),
      (e.SEARCHCARDMONEY = "8"),
      e
    );
  })(c || {}),
  T = new ((function (s) {
    n(A, s);
    var a = u(A);
    function A() {
      return r(this, A), a.apply(this, arguments);
    }
    return (
      t(A, [
        {
          key: "init",
          value: function (r) {
            var t = e({ action: "init", scenes: "0" }, r ? { type: r } : {});
            return this.request(i.API_GETORDERPACKAGE, t);
          },
        },
        {
          key: "qryPendingPreTransfers",
          value: function () {
            return this.request(i.API_QRY_PRETRANSFER, { action: "1" });
          },
        },
        {
          key: "create",
          value: function (e) {
            return this.request(i.API_GETORDERPACKAGE, e);
          },
        },
        {
          key: "transfer",
          value: function (e) {
            return this.request(i.API_TRANSFER, e);
          },
        },
        {
          key: "qryTransferResult",
          value: function (e) {
            return this.request(i.API_TRANSFE_RRESULT, e);
          },
        },
        {
          key: "updatePreTransferStatus",
          value: function (e) {
            return this.request(i.API_QRY_PRETRANSFER, {
              action: "2",
              contract_no: e,
            });
          },
        },
        {
          key: "cancel",
          value: function (e) {
            return this.request(i.API_PRETRANSFER_CANCEL, e);
          },
        },
        {
          key: "qryFundInfo",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "0";
            return this.request(i.API_FUNDINFO, { qry_type: e });
          },
        },
        {
          key: "qryTransferFundInfo",
          value: function () {
            return this.request(i.API_FUNDINFO, { qry_type: "2" });
          },
        },
        {
          key: "queryTransfer",
          value: function () {
            return this.request(i.API_QUERYTRANSFER);
          },
        },
        {
          key: "queryFundsCount",
          value: function (e) {
            return this.request(i.API_FUNDS_COUNT, e);
          },
        },
        {
          key: "queryTransferDetail",
          value: function (e) {
            return this.request(i.API_QUERY_SINGLE_TRANSFER, e);
          },
        },
        {
          key: "postBankDepository",
          value: function (e) {
            return this.request(i.BANK_DEPOSITORY, e, {
              encodeFields: ["bank_account"],
            });
          },
        },
        {
          key: "getBankcards",
          value: function (e) {
            return this.request(i.BANKCARDS, e);
          },
        },
        {
          key: "queryTransferList",
          value: function (e) {
            return this.request(i.API_QUERY_TRANSFER_TOTAL, e);
          },
        },
        {
          key: "queryDeduction",
          value: function (e) {
            return this.request(i.API_DEDUCTION_COUNT, e);
          },
        },
      ]),
      A
    );
  })(s.BaseAPI))();
(exports.FUNDINFO_QRY_TYPE = c),
  (exports.GETORDERPKG_ACTION = R),
  (exports.PAYMODE = a),
  (exports.PreTranStatus = E),
  (exports.TOKEN_TYPE = o),
  (exports.TRANSFER_PWDCHECK_TYPE = A),
  (exports.transferCgi = T);
