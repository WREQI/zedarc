require("../../app.js");
var e = require("../../config/enum.js"),
  t = require("../../filters/date.js"),
  T = require("../../common/vendor.js"),
  c = function (e) {
    return function (t) {
      return t.can_cancel === e;
    };
  },
  n = c("1"),
  a = c("2"),
  A = function (t) {
    switch (t.stock_type) {
      case e.TARGET.ALLOT:
      case e.TARGET.ALLOCATE_DEBT:
        return (
          t.trade_state === e.TRADE_STATE[e.TARGET.ALLOT].WITHDRAW_COMMITTING
        );
      case e.TARGET.STOCK:
      case e.TARGET.DEBT:
      default:
        return (
          t.trade_state === e.TRADE_STATE[e.TARGET.STOCK].REVOKING ||
          t.trade_state === e.TRADE_STATE[e.TARGET.STOCK].REVOKINGPARTLY
        );
    }
  };
function o(t) {
  var T =
    arguments.length > 1 && void 0 !== arguments[1]
      ? arguments[1]
      : e.TRADE_STATE[e.TARGET.STOCK];
  if (!a(t)) return t.trade_state;
  switch (t.stock_type) {
    case e.TARGET.DEBT:
      return Number(t.matched_amount || t.match_num) ? T.PARTLY : T.NOTTRADEED;
    case e.TARGET.STOCK:
    default:
      return Number(t.match_num) ? T.PARTLY : T.NOTTRADEED;
  }
}
var r = function (t) {
    return (
      [
        e.ACTION.BUY,
        e.ACTION.AFTER_BUY,
        e.ACTION.COLLATERAL_BUY,
        e.ACTION.MARGIN_BUY,
        e.ACTION.BUY_AND_COVER,
        e.ACTION.COLLATERAL_TRANSFER_IN,
        e.ACTION.AFTER_COLLATERAL_BUY,
        e.ACTION.AUO_BUY,
        e.ACTION.ODD_LOT_ELO_BUY,
      ].indexOf(t) > -1
    );
  },
  E = function (t) {
    return (
      [
        e.ACTION.AFTER_BUY,
        e.ACTION.AFTER_SELL,
        e.ACTION.AFTER_COLLATERAL_BUY,
        e.ACTION.AFTER_COLLATERAL_SELL,
      ].indexOf(t) > -1
    );
  },
  s = function (t) {
    return [e.ACTION.BUY, e.ACTION.SELL].indexOf(t) > -1;
  },
  _ = function (t) {
    return (
      [
        e.ACTION.COLLATERAL_BUY,
        e.ACTION.MARGIN_BUY,
        e.ACTION.BUY_AND_COVER,
        e.ACTION.COLLATERAL_SELL,
        e.ACTION.SHORT_SELL,
        e.ACTION.REPURCHASE_AGREEMENT,
        e.ACTION.COLLATERAL_TRANSFER_IN,
        e.ACTION.COLLATERAL_TRANSFER_OUT,
        e.ACTION.REPURCHASE,
      ].indexOf(t) > -1
    );
  };
(exports.convertGGTStockHolderMarket = function (e) {
  return e ? (/^A\d+$/.test(e) ? "1" : /^0\d+$/.test(e) ? "0" : "") : "";
}),
  (exports.formatConditionExpireTime = function (e) {
    return "".concat(T.dayjs(1e3 * e).format("YYYY-MM-DD"), " 15:00");
  }),
  (exports.formatGGTStockHolderCode = function (e) {
    return e ? e.replace(/^(.)\d+(\d{3})$/, "$1**$2") : "";
  }),
  (exports.formatGGTStockHolderMarket = function (e) {
    return /^A\d+$/.test(e) ? "沪港通" : /^0\d+$/.test(e) ? "深港通" : "";
  }),
  (exports.getFinalTradeState = o),
  (exports.getNotifyMessage = function (t) {
    var c =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.noop,
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      a =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : e.E_ACCOUNT_MODE.NORMAL,
      A = (null == t ? void 0 : t.unit) || e.TARGET_UNIT[t.stock_type],
      E = e.ACTION_TEXT[t.stock_type][t.trade_type],
      s = _(t.trade_type);
    s &&
      a === e.E_ACCOUNT_MODE.MARGIN &&
      (E = e.MARGIN_ACTION_DESC[t.trade_type]);
    var i = r(t.trade_type),
      O = {
        title: "",
        message: "",
        status: "success",
        duration: 3600,
        customIconClass: "",
        onClick: function () {
          c(t);
        },
      };
    switch (o(t)) {
      case e.TRADE_BASE_STATE.PARTLY:
        (O.title = "部分".concat(E, "成功")),
          (O.message = "成功"
            .concat(E)
            .concat(t.match_num)
            .concat(A, "「")
            .concat(t.name, "」,剩余")
            .concat(t.not_trade_num)
            .concat(A, "继续")
            .concat(E)),
          n &&
            (O.customIconClass = i
              ? "simple-order-notify-success-red"
              : "simple-order-notify-success-green");
        break;
      case e.TRADE_BASE_STATE.PROCESSED:
        (O.title = "全部".concat(E, "成功")),
          (O.message = "成功"
            .concat(E)
            .concat(t.order_num)
            .concat(A, "「")
            .concat(t.name, "」,已全部成交")),
          n &&
            (O.customIconClass = i
              ? "simple-order-notify-success-red"
              : "simple-order-notify-success-green");
        break;
      case e.TRADE_BASE_STATE.NOTTRADEED:
        (O.title = "未成交通知"),
          (O.message = "「"
            .concat(t.name, "」")
            .concat(t.order_num)
            .concat(
              A,
              "未成交，系统自动撤单，锁定资金/股票将在结算后（当天24:00前）退还"
            )),
          (O.status = "warning"),
          n && (O.customIconClass = "simple-order-notify-warning");
        break;
      case e.TRADE_BASE_STATE.REVOKEDPARTLY:
        (O.title = "部分撤单成功"),
          (O.message = "成功撤销"
            .concat(E)
            .concat(t.cancel_num)
            .concat(A, "「")
            .concat(t.name, "」,其余")
            .concat(t.match_num)
            .concat(A, "已成交")),
          n && (O.customIconClass = "simple-order-notify-success-green");
        break;
      case e.TRADE_BASE_STATE.REVOKED:
        (O.title = "全部撤单成功"),
          (O.message = ""
            .concat(t.cancel_num)
            .concat(A, "「")
            .concat(t.name, "」撤单成功")),
          n && (O.customIconClass = "simple-order-notify-success-green");
        break;
      case e.TRADE_BASE_STATE.FAILED:
        (O.title = "未成交通知"),
          (O.message = "「".concat(t.name, "」委托无效")),
          (O.status = "warning"),
          n && (O.customIconClass = "simple-order-notify-warning");
        break;
      case e.TRADE_BASE_STATE.WATITING:
        (O.title = "".concat(E, "委托已提交")),
          (O.message = ""
            .concat(E)
            .concat(t.order_num)
            .concat(A, "「")
            .concat(t.name, "」的委托已提交,")
            .concat(t.isAfterTrade ? "待盘后交易" : "等待开市后", "处理")),
          s &&
            (O.message = ""
              .concat(t.order_num)
              .concat(A, "「")
              .concat(t.name, "」")
              .concat(E, "委托已提交,")
              .concat(t.isAfterTrade ? "待盘后交易" : "等待开市后", "处理")),
          n &&
            (O.customIconClass = i
              ? "simple-order-notify-buy"
              : "simple-order-notify-sell");
        break;
      case e.TRADE_BASE_STATE.WIP:
        (O.title = "".concat(E, "委托已提交")),
          (O.message = ""
            .concat(E)
            .concat(t.trade_num)
            .concat(A, "「")
            .concat(t.name, "」的委托已提交")),
          s &&
            (O.message = ""
              .concat(t.trade_num)
              .concat(A, "「")
              .concat(t.name, "」")
              .concat(E, "委托已提交")),
          n &&
            (O.customIconClass = i
              ? "simple-order-notify-buy"
              : "simple-order-notify-sell");
    }
    return O;
  }),
  (exports.getOnlyKey = function (e) {
    var T = t.format(e.trade_time, "YYYY-MM-DD");
    return "".concat(e.trade_type, ":").concat(e.contract_no, ":").concat(T);
  }),
  (exports.getSubmitResultTip = function (t, T) {
    var c = "下一个交易日";
    t.next_date && (c = "".concat(t.next_date.replace("-", "月"), "日"));
    var n,
      a = r(T),
      A = _(T),
      o = a ? "买入" : "卖出";
    if ((A && (o = e.ACTION_TEXT[e.TARGET.STOCK][T]), s(T) || A))
      switch (+t.time_type) {
        case 1:
          n = "".concat(o, "委托已提交，等待开市交易(9:30)");
          break;
        case 2:
          n = "".concat(o, "委托已提交，等待交易");
          break;
        case 3:
          n = "".concat(o, "委托已提交，等待开市交易(13:00)");
          break;
        case 4:
        case 5:
          n = "".concat(o, "委托已提交，等待开市交易(").concat(c, "9:30)");
          break;
        default:
          n = "".concat(o, "委托已提交");
      }
    else if (E(T))
      switch (+t.time_type) {
        case 1:
        case 2:
        case 3:
          n = "".concat(o, "委托已提交，等待盘后交易(15:05-15:30)");
          break;
        case 4:
        case 5:
          n = ""
            .concat(o, "委托已提交，等待盘后交易(")
            .concat(c, "15:05-15:30)");
          break;
        case 6:
          n = "".concat(o, "委托已提交，等待交易");
          break;
        default:
          n = "".concat(o, "委托已提交");
      }
    return { title: n, desc: void 0, isBuy: a };
  }),
  (exports.getTimeTypeByMarketState = function (t) {
    for (
      var T = [
          [e.MARKET_STATE.NOT_OPEN, e.MARKET_STATE.OPEN_AUCTION],
          [
            e.MARKET_STATE.MORNING_OPENED,
            e.MARKET_STATE.AFTERNOON_OPENED,
            e.MARKET_STATE.CLOSE_AUCTION,
            e.MARKET_STATE.ALL_DAY_AUCTION,
          ],
          [e.MARKET_STATE.SIESTA],
          [e.MARKET_STATE.CLOSED],
          [e.MARKET_STATE.NOT_TRADEDAY],
          [e.MARKET_STATE.AFTER_PREPARE, e.MARKET_STATE.AFTER_TRADING],
        ],
        c = -1,
        n = 0;
      n < T.length;
      n++
    )
      if (T[n].includes(t)) {
        c = n;
        break;
      }
    return c + 1;
  }),
  (exports.isAfterTrade = E),
  (exports.isAutoRevoking = a),
  (exports.isBuyAction = r),
  (exports.isMarginTrade = _),
  (exports.isNormalTrade = s),
  (exports.isOrderUndone = function (t) {
    var T, c, o;
    return (
      n(t) ||
      A(t) ||
      (t.stock_type === e.TARGET.ALLOCATE_DEBT &&
        [
          e.ALLOCATE_DEBT_STATE.COMMIT,
          e.ALLOCATE_DEBT_STATE.COMMITED,
          e.ALLOCATE_DEBT_STATE.COMMITED_NOT_DRAWN,
          e.ALLOCATE_DEBT_STATE.WITHDRAW_COMMITTING,
        ].indexOf(t.trade_state) > -1) ||
      (a(t) &&
        t.trade_state ===
          (null == (T = e.TRADE_STATE[t.stock_type]) ? void 0 : T.WIP)) ||
      t.trade_state ===
        (null == (c = e.TRADE_STATE[t.stock_type]) ? void 0 : c.PARTLY) ||
      (t.stock_type === e.TARGET.DUOTIANQI &&
        t.trade_state ===
          (null == (o = e.TRADE_STATE[t.stock_type]) ? void 0 : o.WIP))
    );
  }),
  (exports.isRevokable = n),
  (exports.isRevoking = A),
  (exports.isSellAction = function (t) {
    return (
      [
        e.ACTION.SELL,
        e.ACTION.AFTER_SELL,
        e.ACTION.COLLATERAL_SELL,
        e.ACTION.SHORT_SELL,
        e.ACTION.REPURCHASE_AGREEMENT,
        e.ACTION.COLLATERAL_TRANSFER_OUT,
        e.ACTION.REPURCHASE,
        e.ACTION.AFTER_COLLATERAL_SELL,
        e.ACTION.AUO_SELL,
        e.ACTION.ODD_LOT_ELO_SELL,
      ].indexOf(t) > -1
    );
  });
