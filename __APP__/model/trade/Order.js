require("../../app.js");
var e = require("../../config/enum.js"),
  t = require("./utils.js"),
  a = require("../../filters/money.js");
exports.genOrder = function (r) {
  return {
    estimate_fee: r.estimate_fee,
    can_cancel: r.can_cancel,
    cancel_num: r.cancel_num,
    cancel_time: r.cancel_time,
    cashin_amount: r.cashin_amount,
    cashin_time: r.cashin_time,
    code: r.code,
    contract_no: r.contract_no,
    commis_fee: a.removeThousandSeparator(r.commis_fee),
    dqj: r.dqj,
    end_time: r.end_time,
    expect_income: r.expect_income,
    has_cashin: r.has_cashin,
    market: r.market,
    match_num: r.match_num,
    match_price: r.match_price,
    matched_amount: r.matched_amount,
    name: r.name,
    not_cancel_num: r.not_cancel_num,
    not_trade_num: r.not_trade_num,
    order_amount: r.order_amount,
    order_num: r.order_num,
    order_price: r.order_price,
    pgcode: r.pgcode,
    pgname: r.pgname,
    stock_type: r.stock_type,
    total_agree: r.total_agree,
    total_avg_price: r.total_avg_price,
    trade_avg_price: r.trade_avg_price,
    trade_brokerage: r.trade_brokerage,
    trade_cost: r.trade_cost,
    trade_income: r.trade_income,
    trade_money: r.trade_money,
    trade_num: r.trade_num,
    trade_rate: r.trade_rate,
    trade_state: r.trade_state,
    trade_tax: r.trade_tax,
    trade_time: r.trade_time,
    trade_total_amount: r.trade_total_amount,
    trade_total_fee: r.trade_total_fee,
    trade_type: r.trade_type,
    trans_id: r.trans_id,
    frontOrderType: r.frontOrderType,
    cancelSubmited: r.cancelSubmited,
    submitTip: r.submitTip,
    marketState: r.marketState,
    marketStateKcAfter: r.marketStateKcAfter,
    marketStateAfterTrade: r.marketStateAfterTrade,
    time_type: r.time_type,
    unit: r.unit,
    balance_time_limit: r.balance_time_limit,
    balance_status: r.balance_status,
    trade_sett_rate: r.trade_sett_rate,
    trade_today_rate: r.trade_today_rate,
    trade_today_buy_rate: r.trade_today_buy_rate,
    trade_today_sell_rate: r.trade_today_sell_rate,
    stockholder_code: r.stockholder_code,
    get uniqueKey() {
      return t.getOnlyKey(this);
    },
    get isBuyAction() {
      return t.isBuyAction(this.trade_type);
    },
    get isSellAction() {
      return t.isSellAction(this.trade_type);
    },
    get isAfterTrade() {
      return t.isAfterTrade(this.trade_type);
    },
    get isNormalTrade() {
      return t.isNormalTrade(this.trade_type);
    },
    get isMarginTrade() {
      return t.isMarginTrade(this.trade_type);
    },
    get isRevokable() {
      return t.isRevokable({ can_cancel: this.can_cancel });
    },
    get isAutoRevoking() {
      return t.isAutoRevoking({ can_cancel: this.can_cancel });
    },
    get isRevoking() {
      return t.isRevoking(this);
    },
    get isUndone() {
      return t.isOrderUndone(this);
    },
    get hasAllocateDebtTips() {
      return (
        [
          e.ALLOCATE_DEBT_STATE.COMMITED,
          e.ALLOCATE_DEBT_STATE.COMMITED_NOT_DRAWN,
        ].indexOf(this.trade_state) > -1 &&
        this.stock_type === e.TARGET.ALLOCATE_DEBT
      );
    },
  };
};
