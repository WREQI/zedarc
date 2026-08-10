require("../../@babel/runtime/helpers/Objectvalues"), require("../../app.js");
var e = require("../enum.js"),
  t = require("../../common/vendor.js"),
  r = (function (e) {
    return (
      (e.BuyFive = "1"),
      (e.BuyFour = "2"),
      (e.BuyThree = "3"),
      (e.BuyTwo = "4"),
      (e.BuyOne = "5"),
      (e.DQJ = "6"),
      (e.SellOne = "7"),
      (e.SellTwo = "8"),
      (e.SellThree = "9"),
      (e.SellFour = "10"),
      (e.SellFive = "11"),
      e
    );
  })(r || {}),
  n = [
    { value: "1", text: "即时买五价" },
    { value: "2", text: "即时买四价" },
    { value: "3", text: "即时买三价" },
    { value: "4", text: "即时买二价" },
    { value: "5", text: "即时买一价" },
    { value: "6", text: "即时现价" },
    { value: "7", text: "即时卖一价" },
    { value: "8", text: "即时卖二价" },
    { value: "9", text: "即时卖三价" },
    { value: "10", text: "即时卖四价" },
    { value: "11", text: "即时卖五价" },
  ],
  o = t.keyBy(n, "value"),
  u = (function (e) {
    return (e.BasePrice = "1"), (e.DQJ = "2"), (e.Cost = "3"), e;
  })(u || {}),
  i = [
    { value: "2", text: "最新市价" },
    { value: "3", text: "成本价" },
  ],
  E = [{ value: "1", text: "最新基准价" }].concat(i),
  a = (function (e) {
    return (e.Percent = "1"), (e.Absolute = "2"), e;
  })(a || {}),
  s = (function (e) {
    return (e.Percent = "1"), (e.Absolute = "2"), e;
  })(s || {}),
  x = (function (e) {
    return (
      (e[(e.WAIT = 1)] = "WAIT"),
      (e[(e.COMPLETE = 2)] = "COMPLETE"),
      (e[(e.INVALID = 3)] = "INVALID"),
      e
    );
  })(x || {}),
  T = (function (e) {
    return (
      (e.GRID = "网格交易"),
      (e.DEBT = "理财扫单"),
      (e.IVEST = "定期定投"),
      (e.PRICE_BUY = "定价买入"),
      (e.PRICE_SELL = "定价卖出"),
      (e.TPSL = "止盈止损"),
      (e.LIMIT_UP = "涨停买入"),
      (e.OPENING_SELL = "开板卖出"),
      e
    );
  })(T || {}),
  _ = (function (e) {
    return (
      (e.NotSleep = "0"), (e.FundNotEnough = "1"), (e.StockNotEnough = "2"), e
    );
  })(_ || {}),
  p = (function (e) {
    return (
      (e[(e.Running = 0)] = "Running"),
      (e[(e.Invalid = 2)] = "Invalid"),
      (e[(e.Triggered = 1)] = "Triggered"),
      e
    );
  })(p || {}),
  I = (function (e) {
    return (
      (e.PRICE = "1"),
      (e.INVEST = "3"),
      (e.GRID = "4"),
      (e.TPSL = "5"),
      (e.LIMIT_UP = "6"),
      (e.OPENING_SELL = "7"),
      e
    );
  })(I || {}),
  l = Object.values(I),
  S = (function (e) {
    return (e.Success = "succ"), (e.Fail = "fail"), (e.UnKnow = "unknow"), e;
  })(S || {}),
  N = (function (e) {
    return (
      (e.Intro = "gridIntro"),
      (e.Params = "gridParams"),
      (e.Setting = "gridSetting"),
      (e.Sleep = "gridSleep"),
      e
    );
  })(N || {}),
  P = (function (e) {
    return (
      (e.Intro = "tpslIntro"),
      (e.Params = "tpslParams"),
      (e.Setting = "tpslSetting"),
      e
    );
  })(P || {}),
  d = { id: "validDayEnum", title: "订单有效期", range: e.ORDER_VALIDATE_DAYS },
  L = {
    id: "validDayEnum",
    title: "订单有效期",
    range: e.INVEST_ORDER_VALIDATE_DAYS,
  },
  c = { id: "buyPriceType", title: "委托价", range: n },
  O = { id: "orderPriceType", title: "委托价", range: n },
  C = (function (e) {
    return (e.upTo = "1"), (e.downTo = "2"), e;
  })(C || {}),
  A = (function (e) {
    return (e.meet = "设置参数已达到触发条件，提交可能立即触发"), e;
  })(A || {}),
  R = (function (e) {
    return (e.immediately = "1"), (e.downTo = "2"), e;
  })(R || {}),
  v = (function (e) {
    return (e.percent = "1"), (e.absolute = "2"), e;
  })(v || {});
(exports.BUY_PRICE_SELECT_CONFIG = c),
  (exports.BasePriceStrategy = u),
  (exports.COMMON_COND_MAX_AMOUNT = 1e6),
  (exports.COND_CURRENT_SCENE = {
    assetIndex: "assetIndex",
    condIndex: "condIndex",
  }),
  (exports.COND_ITEM_HEIGHT = {
    COMPLETE: 448,
    INVALID_WITH_RUN_DAY: 402,
    INVALID_DEFAULT: 244,
    NORMAL_BASE: 346,
    GRID_BASE: 414,
    GRID_SLEEP: 502,
    TPSL: 414,
    REPO_INCREASE: 147,
    SLEEP_REASON_SINGLE: 36,
    SLEEP_REASON_MULTIPLE: 72,
  }),
  (exports.COND_RUNNING_TIME_RANGE = [
    { begin: { hour: 9, minute: 30 }, end: { hour: 11, minute: 30 } },
    { begin: { hour: 13, minute: 0 }, end: { hour: 15, minute: 0 } },
  ]),
  (exports.CondOrderStatus = S),
  (exports.CondStatus = x),
  (exports.CondStatusText = { 1: "运行中", 2: "已触发", 3: "已失效" }),
  (exports.CondTags = T),
  (exports.CondTypesBackEnd = I),
  (exports.CondWeakTipsText = A),
  (exports.ConditionTabs = p),
  (exports.GridGuideType = N),
  (exports.GridType = a),
  (exports.GridTypeRange = [
    { value: "1", text: "按百分比" },
    { value: "2", text: "按差价" },
  ]),
  (exports.INDEPENDENT_PAGE_CONFIG_BACK_END = {
    1: "PriceCondition",
    3: "InvestCondition",
    4: "GridCondition",
    5: "TPSLCondition",
    6: "LimitUpCondition",
    7: "OpeningSellCondition",
  }),
  (exports.INVEST_VALIDDAY_CONFIG = L),
  (exports.LEGAL_COND_TYPES = l),
  (exports.LIMIT_UP_MAX_AMOUNT = 1e6),
  (exports.LIMIT_UP_MAX_MONEY_AMOUNT = 9999999),
  (exports.LimitType = s),
  (exports.LimitTypeRange = [
    { value: "1", text: "按百分比" },
    { value: "2", text: "按价格" },
  ]),
  (exports.OPENING_SELL_BUY_PRICE_SELECT_CONFIG = O),
  (exports.OPENING_SELL_DOWNTO_TYPE = v),
  (exports.OPENING_SELL_MAX_AMOUNT = 1e6),
  (exports.OPENING_SELL_TRIGGER_TYPE = R),
  (exports.OPENING_SELL_TRIGGER_TYPE_SELECTOR_RANGE = [
    { text: "开板即触发", value: "1" },
    { text: "开板后回落", value: "2" },
  ]),
  (exports.PRICE_VALIDDAY_CONFIG = d),
  (exports.PriceConditionRemindType = C),
  (exports.PriceStrategyRange = i),
  (exports.PriceStrategyUpdateRange = E),
  (exports.PriceType = r),
  (exports.PriceTypeObject = o),
  (exports.PriceTypeRange = n),
  (exports.PriceTypeRangeWithoutSell = [
    { value: "1", text: "即时买五价" },
    { value: "2", text: "即时买四价" },
    { value: "3", text: "即时买三价" },
    { value: "4", text: "即时买二价" },
    { value: "5", text: "即时买一价" },
    { value: "6", text: "即时现价" },
  ]),
  (exports.SleepStatus = _),
  (exports.SleepStatusText = { 0: "未休眠", 1: "资金不足", 2: "股票不足" }),
  (exports.TPSLGuideType = P);
