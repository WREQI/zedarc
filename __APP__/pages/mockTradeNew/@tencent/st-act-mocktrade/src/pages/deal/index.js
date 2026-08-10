var e = require("../../../../../../../@babel/runtime/helpers/typeof");
require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../../../@babel/runtime/helpers/createClass"),
  s = require("../../../../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  c = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  d = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  T = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  f = function (e, t) {
    for (var r in t || (t = {})) h.call(t, r) && T(e, r, t[r]);
    if (d) {
      var i,
        s = a(d(t));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          r = i.value;
          l.call(t, r) && T(e, r, t[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  m = function (e, t) {
    return c(e, u(t));
  },
  p = function (e, t, r) {
    return new Promise(function (i, s) {
      var n = function (e) {
          try {
            o(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          try {
            o(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(n, a);
        };
      o((r = r.apply(e, t)).next());
    });
  },
  k = require("../../cp-util/wuJi/index.js"),
  E = require("../../cp-util/navigator/index.js"),
  M = require("../../services/BaseController.js"),
  N = require("../../services/ActTaskController.js"),
  b = require("../../utils/tool.js"),
  I = require("../../services/fundQt.js"),
  _ = require("../../cp-util/appInfo/index.js"),
  y = require("../../utils/bridgeApi.js"),
  g = require("../../../../../../../common/vendor.js"),
  S = require("../../../../stock-utils/lib/appInfo/index.js"),
  P = (function (e) {
    s(o, e);
    var a = n(o);
    function o() {
      var e;
      return (
        r(this, o),
        ((e = a.call(this)).isSearch = !1),
        (e.searchInited = !1),
        (e.fundAvailable = "0"),
        (e.feeFeatureEnabled = !1),
        (e.tradeNumberMap = {
          buy: [
            { type: 1, id: 1, name: "全仓买入", factor: 1, number: 0 },
            { type: 1, id: 2, name: "1/2仓买入", factor: 2, number: 0 },
            { type: 1, id: 3, name: "1/4仓买入", factor: 4, number: 0 },
          ],
          sell: [
            { type: 2, id: 1, name: "全仓卖出", factor: 1, number: 0 },
            { type: 2, id: 2, name: "1/2仓卖出", factor: 2, number: 0 },
            { type: 2, id: 3, name: "1/4仓卖出", factor: 4, number: 0 },
          ],
        }),
        (e.tradePriceMap = [
          { id: 1, name: "限价" },
          { id: 2, name: "市价" },
          { id: 3, name: "跟买一" },
          { id: 4, name: "跟卖一" },
        ]),
        (e.nowTradePriceType = e.tradePriceMap[0]),
        e
      );
    }
    return (
      i(o, [
        {
          key: "tradePrice",
          get: function () {
            return this._tradePrice;
          },
          set: function (e) {
            (this._tradePrice = e), this.updateTradeNumberMap();
          },
        },
        {
          key: "tradeOpen",
          get: function () {
            switch (this.stockInfo.state) {
              case M.STOCK_STATE.DELISTED:
              case M.STOCK_STATE.SUSPENDED:
              case M.STOCK_STATE.SUSPENSION:
                return !1;
              case M.STOCK_STATE.NORMAL:
              default:
                switch (+this.marketState) {
                  case M.MARKET_STATE.BEFORE_OPEN_BID:
                  case M.MARKET_STATE.BEFORE_CLOSE_BID:
                  case M.MARKET_STATE.OPEN_MORNING:
                  case M.MARKET_STATE.OPEN_AFTERNOON:
                  case M.MARKET_STATE.AFTER_PREPARE:
                  case M.MARKET_STATE.AFTER_TRADING:
                    return !0;
                  default:
                    return !1;
                }
            }
          },
        },
        {
          key: "isKCB",
          get: function () {
            return this.stockInfo && "k" === this.stockInfo.cls;
          },
        },
        {
          key: "stockOpen",
          get: function () {
            if (!this.stockInfo) return !1;
            switch (this.stockInfo.state) {
              case M.STOCK_STATE.DELISTED:
              case M.STOCK_STATE.SUSPENDED:
              case M.STOCK_STATE.SUSPENSION:
                return !1;
              default:
                return !0;
            }
          },
        },
        {
          key: "marketStateCN",
          get: function () {
            return (
              M.STOCK_STATE_CN[this.stockInfo.state] ||
              M.MARKET_STATE_CN[M.MARKET_STATE[this.marketState]] ||
              "-"
            );
          },
        },
        {
          key: "stockBuyNumMax",
          get: function () {
            var e = this.stockInfo ? this.stockInfo.unit : 100;
            return this.calBuyableNum(+this.fundAvailable, +this.tradePrice, e);
          },
        },
        {
          key: "tradeAmount",
          get: function () {
            return (
              Math.round(100 * +this.tradePrice * +this.tradeNumber) / 100 || 0
            ).toFixed(2);
          },
        },
        {
          key: "tradeTip",
          get: function () {
            switch (this.stockInfo.state) {
              case M.STOCK_STATE.DELISTED:
              case M.STOCK_STATE.SUSPENDED:
              case M.STOCK_STATE.SUSPENSION:
                return "";
              case M.STOCK_STATE.NORMAL:
              default:
                switch (+this.marketState) {
                  case M.MARKET_STATE.NOT_TRADE:
                    return "现在发起的委托将在下一交易日开市后进行交易";
                  case M.MARKET_STATE.BEFORE_OPEN:
                    return "现在发起的委托将在 9:15 开市后进行交易";
                  case M.MARKET_STATE.NOT_OPEN_NOON:
                    return "现在发起的委托将在 13:00 开市后进行交易";
                  case M.MARKET_STATE.CLOSED:
                    return "现在发起的委托将在下一交易日开市后进行交易";
                  default:
                    return "";
                }
            }
          },
        },
        {
          key: "setStockCode",
          value: function (e) {
            var t = this;
            if (e) {
              (this.searchInited = !0), (this.isSearch = !1);
              var r = e.match(/^([A-Za-z]{2})(\d+)$/),
                i = e.match(/^(\d+)\.([A-Za-z]{2})$/),
                s = (null == r ? void 0 : r[1]) || (null == i ? void 0 : i[2]),
                n = (null == r ? void 0 : r[2]) || (null == i ? void 0 : i[1]);
              s &&
                n &&
                ((this.stockCode = n),
                (this.stockMarket = M.MARKET_CODE[s.toLowerCase()]),
                this.getStockInfo(!0).then(function () {
                  t.initTrade();
                }));
            } else this.isSearch = !0;
          },
        },
        {
          key: "calBuyableNum",
          value: function (e, t) {
            var r,
              i,
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 100;
            if (0 === t) return 0;
            if (!this.feeFeatureEnabled) {
              var n = Math.floor(e / t / s) * s;
              return this.isKCB ? (n >= this.miniTrade ? n : 0) : n || 0;
            }
            return I.calBuyableNumWithFee(e, t, s, {
              cls: null == (r = this.stockInfo) ? void 0 : r.cls,
              isMoneyFund:
                null == (i = this.stockInfo) ? void 0 : i.isMoneyFund,
              market: this.stockMarket,
            });
          },
        },
        {
          key: "isNotAllowedStock",
          value: function (e) {
            if (e && e.secu_info) {
              var t = e.secu_info,
                r = (t.secu_code, t.secu_cls);
              if ("5" == r) return !1;
              if (!(["0", "2", "3", "4", "e", "c"].indexOf(r) < 0)) return !1;
              switch (r) {
                case "6":
                  return "深市B股暂不支持模拟交易";
                case "7":
                  return "沪市B股暂不支持模拟交易";
                case "z":
                  return "可转债暂不支持模拟交易";
                case "k":
                  return !1;
                default:
                  return "该股票不支持模拟交易，请选择其它股票";
              }
            }
            return !1;
          },
        },
        {
          key: "getStockInfo",
          value: function (e) {
            var r = this;
            return this.fetch(
              M.STOCK_INFO_CGI,
              {
                scode: this.stockCode,
                markets: this.stockMarket,
                needfive: 1,
                needquote: 1,
              },
              { notNeedGameInfo: !0 }
            ).then(function (i) {
              return p(
                r,
                null,
                t().mark(function r() {
                  var s,
                    n,
                    a,
                    o,
                    c,
                    u,
                    d,
                    h = this;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((this.marketState = i.market_state),
                              (s = i.secu_info.secu_cls),
                              !this.feeFeatureEnabled ||
                                !I.shouldQueryFundQt(s, this.stockCode))
                            ) {
                              t.next = 8;
                              break;
                            }
                            return (
                              (t.next = 5), I.getFundQtInfo(this.stockCode)
                            );
                          case 5:
                            (t.t0 = t.sent), (t.next = 9);
                            break;
                          case 8:
                            t.t0 = null;
                          case 9:
                            if (
                              ((n = t.t0),
                              (this.stockInfo = {
                                code: this.stockCode,
                                market: this.stockMarket,
                                marketCN: M.MARKET_CODE[this.stockMarket],
                                name: i.secu_info.secu_name,
                                price: i.secu_quote.dqj,
                                zde: i.secu_quote.zde,
                                zdf: i.secu_quote.zdf + "%",
                                ceil: i.secu_info.price_ceiling,
                                floor: i.secu_info.price_floor,
                                unit: i.secu_info.trd_unit,
                                spread: i.secu_info.spread,
                                state: i.secu_info.status,
                                cls: s,
                                fundType:
                                  (null == n ? void 0 : n.fundType) || "",
                                fundTypeName:
                                  (null == n ? void 0 : n.fundTypeName) || "",
                                isMoneyFund: !!(null == n
                                  ? void 0
                                  : n.isMoneyFund),
                                spreadAcc: 2,
                              }),
                              this.stockInfo.spread &&
                                parseFloat(this.stockInfo.spread) > 0 &&
                                (this.stockInfo.spreadAcc =
                                  parseFloat(
                                    String(1 / this.stockInfo.spread)
                                  ).toFixed(0).length - 1),
                              e &&
                                ((this.tradePrice = this.stockInfo.price),
                                (this.miniTrade = this.isKCB
                                  ? M.FRONTEND_MIN_UNIT.KCB_MIN_UINT
                                  : +this.stockInfo.unit),
                                (this.tradeNumber = this.miniTrade)),
                              (this.fiveTrans = {
                                buy: {
                                  trans: b.times(5, function (e) {
                                    return {
                                      seq: e + 1,
                                      price: i.five_trans["mrjg".concat(e + 1)],
                                      count:
                                        +i.five_trans["mrsl".concat(e + 1)],
                                    };
                                  }),
                                },
                                sell: {
                                  trans: b.times(5, function (e) {
                                    return {
                                      seq: e + 1,
                                      price: i.five_trans["mcjg".concat(e + 1)],
                                      count:
                                        +i.five_trans["mcsl".concat(e + 1)],
                                    };
                                  }),
                                },
                              }),
                              (a = this.fiveTrans.buy.trans
                                .map(function (e) {
                                  return e.count;
                                })
                                .reduce(function (e, t) {
                                  return e + t;
                                })),
                              (o = this.fiveTrans.sell.trans
                                .map(function (e) {
                                  return e.count;
                                })
                                .reduce(function (e, t) {
                                  return e + t;
                                })),
                              (c = (a / (a + o)) * 100),
                              (this.fiveTrans.buy.percent = isNaN(c)
                                ? "--%"
                                : c.toFixed(2) + "%"),
                              (u = 100 - (a / (a + o)) * 100),
                              (this.fiveTrans.sell.percent = isNaN(u)
                                ? "--%"
                                : u.toFixed(2) + "%"),
                              this.emit(M.EVENT_NAME.GOT_STOCK_INFO, e),
                              this.setTradePriceType(this.nowTradePriceType),
                              !this.isNotAllowedStock(i))
                            ) {
                              t.next = 17;
                              break;
                            }
                            return (
                              (d = this.isNotAllowedStock(i)),
                              t.abrupt(
                                "return",
                                (this.emit(M.EVENT_NAME.NOT_ALLOW_ALERT, d),
                                Promise.reject(!1))
                              )
                            );
                          case 17:
                            return t.abrupt(
                              "return",
                              (this.tradeOpen &&
                                (clearTimeout(this.timer),
                                (this.timer = setTimeout(function () {
                                  h.getStockInfo();
                                }, 2e3))),
                              Promise.resolve(!0))
                            );
                          case 18:
                          case "end":
                            return t.stop();
                        }
                    },
                    r,
                    this
                  );
                })
              );
            });
          },
        },
        {
          key: "stopStockTimer",
          value: function () {
            clearTimeout(this.timer);
          },
        },
        {
          key: "initTrade",
          value: function () {
            var e = this;
            return this.fetch(M.TRADE_INIT_CGI, {
              market: this.stockMarket,
              stock_code: this.stockCode,
            }).then(function (t) {
              (e.assetInterval = t.asset_interval),
                (e.orderInterval = t.order_interval),
                (e.tradeToken = t.token),
                (e.stockSellableNum = +t.stock_avl_qty),
                (e.fundAvailable = t.fund_avl_bal),
                e.updateTradeNumberMap(),
                e.emit(M.EVENT_NAME.TRADE_INITED);
            });
          },
        },
        {
          key: "submitOrder",
          value: function (e) {
            var t,
              r,
              i = this;
            if (this.stockOpen)
              if (this.tradePrice <= 0)
                this.emit(M.EVENT_NAME.ERROR_ALERT, "委托价不能为 0");
              else {
                if (!(this.tradeNumber <= 0)) {
                  if (e === M.ORDER_TYPE.BUY) {
                    if (+this.tradeNumber % this.stockInfo.unit)
                      return void this.emit(
                        M.EVENT_NAME.ERROR_ALERT,
                        "根据交易规则，股票最少买入100股，买入数量需为100及其整倍数"
                      );
                    if (this.tradeNumber > this.stockBuyNumMax) {
                      if (this.feeFeatureEnabled) {
                        var s = I.calculateFee({
                            cls: null == (t = this.stockInfo) ? void 0 : t.cls,
                            isMoneyFund:
                              null == (r = this.stockInfo)
                                ? void 0
                                : r.isMoneyFund,
                            market: this.stockMarket,
                            direction: "buy",
                            price: +this.tradePrice,
                            quantity: +this.tradeNumber,
                          }),
                          n = s.settlementAmount - +this.fundAvailable;
                        this.emit(M.EVENT_NAME.ERROR_ALERT, {
                          type: "fund_insufficient",
                          diff: I.formatFee(n),
                          fee: I.formatFee(s.totalFee),
                          maxBuy: this.stockBuyNumMax,
                        });
                      } else
                        this.emit(
                          M.EVENT_NAME.ERROR_ALERT,
                          "资金不足，当前最大可买 ".concat(
                            this.stockBuyNumMax,
                            " 股"
                          )
                        );
                      return;
                    }
                  } else if (e === M.ORDER_TYPE.SELL)
                    if (this.isKCB) {
                      if (!this.stockSellableNum)
                        return void this.emit(
                          M.EVENT_NAME.ERROR_ALERT,
                          "你未持有该股票"
                        );
                      if (this.tradeNumber > this.stockSellableNum)
                        return void this.emit(
                          M.EVENT_NAME.ERROR_ALERT,
                          "卖出数量大于持有股票数量，无法卖出"
                        );
                      if (this.tradeNumber >= this.miniTrade);
                      else if (this.tradeNumber != this.stockSellableNum)
                        return this.stockSellableNum >= this.miniTrade
                          ? void this.emit(
                              M.EVENT_NAME.ERROR_ALERT,
                              "最少需卖出200股"
                            )
                          : void this.emit(
                              M.EVENT_NAME.ERROR_ALERT,
                              "碎股需一次性卖出"
                            );
                    } else {
                      if (!this.stockSellableNum)
                        return void this.emit(
                          M.EVENT_NAME.ERROR_ALERT,
                          "你未持有该股票"
                        );
                      if (this.tradeNumber > this.stockSellableNum)
                        return void this.emit(
                          M.EVENT_NAME.ERROR_ALERT,
                          "卖出数量大于持有股票数量，无法卖出"
                        );
                      if (
                        +this.tradeNumber % this.miniTrade &&
                        (this.stockSellableNum - +this.tradeNumber) %
                          this.miniTrade
                      )
                        return void this.emit(
                          M.EVENT_NAME.ERROR_ALERT,
                          "碎股需一次性卖出"
                        );
                    }
                  var a = { wzq: "GET", mp: "GET", zxg: "POST" }[
                    M.config.cfgPlatform
                  ];
                  return this.fetch(
                    M.TRADE_SUBMIT_CGI,
                    {
                      token: this.tradeToken,
                      market: this.stockMarket,
                      stock_code: this.stockCode,
                      bs_flag: e,
                      qty: this.tradeNumber,
                      price: this.tradePrice,
                    },
                    { method: a }
                  )
                    .then(function (t) {
                      0 == t.retcode
                        ? i.emit(M.EVENT_NAME.SUBMIT_ORDER_SUCCESS, {
                            tradeStatus: +t.trade_status,
                            tradeTime: 1e3 * +t.trade_time,
                            orderType: e,
                          })
                        : i.emit(M.EVENT_NAME.ERROR_ALERT, t.retmsg);
                    })
                    .catch(function (e) {
                      i.emit(M.EVENT_NAME.ERROR_ALERT, e.retmsg);
                    });
                }
                this.emit(M.EVENT_NAME.ERROR_ALERT, "委托数量不能为 0");
              }
          },
        },
        {
          key: "updateTradeNumberMap",
          value: function () {
            var e = this;
            this.stockInfo &&
              (this.tradeNumberMap = {
                buy: this.tradeNumberMap.buy.map(function (t) {
                  var r = e.calBuyableNum(
                    +e.fundAvailable / t.factor,
                    +e.tradePrice,
                    e.stockInfo.unit
                  );
                  return m(f({}, t), { number: r });
                }),
                sell: this.tradeNumberMap.sell.map(function (t) {
                  var r = 0;
                  return (
                    e.isKCB
                      ? 1 == t.factor
                        ? (r = e.stockSellableNum || 0)
                        : (r = Math.round(e.stockSellableNum / t.factor)) <
                          e.miniTrade
                        ? (r = 0)
                        : r % e.stockInfo.unit &&
                          (r =
                            Math.ceil(r / e.stockInfo.unit) * e.stockInfo.unit)
                      : (r = Math.round(e.stockSellableNum / t.factor)) &&
                        e.stockInfo &&
                        e.stockInfo.unit
                      ? r < e.stockInfo.unit
                        ? (r = e.stockInfo.unit)
                        : r % e.stockInfo.unit &&
                          (r =
                            Math.ceil(r / e.stockInfo.unit) * e.stockInfo.unit)
                      : (r = 0),
                    m(f({}, t), { number: r })
                  );
                }),
              });
          },
        },
        {
          key: "handleTradeDim",
          value: function (e, t) {
            this.stockOpen &&
              (e === M.TRADE_DIM_TYPE.NUMBER
                ? ((this.tradeNumber =
                    Math[t === M.TRADE_DIRECTION_TYPE.UP ? "floor" : "ceil"](
                      (+this.tradeNumber +
                        +this.stockInfo.unit *
                          (t === M.TRADE_DIRECTION_TYPE.UP ? 1 : -1)) /
                        this.stockInfo.unit
                    ) * this.stockInfo.unit),
                  this.isKCB
                    ? this.tradeNumber < M.FRONTEND_MIN_UNIT.KCB_MIN_UINT &&
                      ((this.tradeNumber = M.FRONTEND_MIN_UNIT.KCB_MIN_UINT),
                      t === M.TRADE_DIRECTION_TYPE.DOWN &&
                        this.emit(
                          M.EVENT_NAME.ERROR_ALERT,
                          "最少交易".concat(
                            M.FRONTEND_MIN_UNIT.KCB_MIN_UINT,
                            "股，如需交易碎股请手动输入碎股数量"
                          )
                        ))
                    : this.tradeNumber < this.stockInfo.unit &&
                      ((this.tradeNumber = this.stockInfo.unit),
                      this.emit(
                        M.EVENT_NAME.ERROR_ALERT,
                        "股数应为 100 或其整数位。如需交易零股请手动输入零股数量"
                      )))
                : e === M.TRADE_DIM_TYPE.PRICE &&
                  ((this.tradePrice = (
                    +this.tradePrice +
                    +this.stockInfo.spread *
                      (t === M.TRADE_DIRECTION_TYPE.UP ? 1 : -1)
                  ).toFixed(this.stockInfo.spreadAcc)),
                  +this.tradePrice <= 0 &&
                    ((this.tradePrice = this.stockInfo.price),
                    this.emit(M.EVENT_NAME.ERROR_ALERT, "价格不能为 0")),
                  +this.tradePrice > +this.stockInfo.ceil &&
                    this.emit(
                      M.EVENT_NAME.ERROR_ALERT,
                      "委托价高于涨停价，交易可能无效"
                    ),
                  +this.tradePrice < +this.stockInfo.floor &&
                    this.emit(
                      M.EVENT_NAME.ERROR_ALERT,
                      "委托价低于跌停价，交易可能无效"
                    ),
                  (this.nowTradePriceType = this.tradePriceMap[0]),
                  this.updateTradeNumberMap(),
                  this.emit(M.EVENT_NAME.TRADE_PRICE_SET)));
          },
        },
        {
          key: "setTradePriceType",
          value: function (e) {
            if (this.stockInfo) {
              switch (((this.nowTradePriceType = e), e.id)) {
                case 1:
                  !b.isDefined(this.tradePrice) &&
                    (this.tradePrice = this.stockInfo.price);
                  break;
                case 2:
                  this.tradePrice = this.stockInfo.price;
                  break;
                case 3:
                  this.tradePrice = this.fiveTrans.buy.trans[0].price;
                  break;
                case 4:
                  this.tradePrice = this.fiveTrans.sell.trans[0].price;
              }
              this.updateTradeNumberMap(),
                this.emit(M.EVENT_NAME.TRADE_PRICE_SET);
            }
          },
        },
        {
          key: "setTradeNumberType",
          value: function (e) {
            e &&
              e.number &&
              ((this.tradeNumber = e.number),
              this.emit(M.EVENT_NAME.TRADE_NUMBER_SET));
          },
        },
        {
          key: "addToGroup",
          value: function (e) {
            if (e) {
              var t = { wzq: "GET", mp: "GET", zxg: "POST" }[
                  M.config.cfgPlatform
                ],
                r = JSON.stringify([
                  {
                    code: e,
                    timestamp: new Date().getTime(),
                    grpid: "unlogingrp1",
                    act: "sa",
                  },
                ]);
              return this.fetch(
                M.ADD_TO_STOCK,
                { seq: r },
                { method: t, notNeedGameInfo: !0 }
              )
                .then(function () {
                  M.report("base.default.zixuan_add", {
                    fchannel_id_fm_i: "I2m00p000l078",
                    stocklist: e,
                  });
                })
                .catch(function (e) {});
            }
          },
        },
      ]),
      o
    );
  })(M.BaseController),
  R = { BUY: 1, SELL: 2 },
  A = "GOT_GAME_ID",
  O = "GOT_STOCK_INFO",
  v = "TRADE_INITED",
  w = "TRADE_NUMBER_SET",
  D = "TRADE_PRICE_SET",
  C = "SUBMIT_ORDER_SUCCESS",
  B = "ERROR_ALERT",
  x = "NOT_ALLOW_ALERT",
  L = "OFFLINE_ALERT",
  F = "IS_OLD_USER",
  U = S.appInfo.getWindowInfo().windowWidth
    ? S.appInfo.getWindowInfo().windowWidth - 8
    : 367,
  q = {
    name: "mockdeal",
    components: {
      errorModal: function () {
        return "../../components/errorModal.js";
      },
      InfoModal: function () {
        return "../../components/InfoModal.js";
      },
      Search: function () {
        return "../search/index.js";
      },
      taskLog: function () {
        return "../../components/taskLog.js";
      },
      stockRecommend: function () {
        return "../../components/stockRecommend.js";
      },
    },
    data: function () {
      return {
        isOldUser: !1,
        minsWidth: U,
        minsHeight: 266,
        showMins: !1,
        destroyMins: !0,
        isLogin: !0,
        isSearch: !1,
        searchInited: !1,
        showDialog: !1,
        showPriceType: !1,
        showNumType: !1,
        tradePrice: "",
        tradeNumber: "",
        tradeAmount: 0,
        tradePriceMap: [],
        tradeNumberMap: { buy: [], sell: [] },
        nowTradePriceType: {},
        showLog: !1,
        tasklog: "",
        stockInfo: {
          code: "--",
          market: 0,
          marketCN: "--",
          fullCode: "--",
          name: "--",
          price: "--",
          zde: "--",
          zdf: "--",
          ceil: "--",
          floor: "--",
          unit: 100,
          spread: 0,
          spreadAcc: 2,
          state: 0,
          cls: "",
          fundType: "",
          fundTypeName: "",
          isMoneyFund: !1,
        },
        fiveTrans: {
          buy: { percent: "50%", trans: [] },
          sell: { percent: "50%", trans: [] },
        },
        tradeOpen: !1,
        stockOpen: !0,
        marketStateCN: "-",
        marketState: "-",
        stockBuyNumMax: 0,
        stockSellableNum: 0,
        showTradeOpModal: !1,
        nowTradeType: R.BUY,
        tradeTip: "",
        platform: M.config.cfgPlatform,
        fiveTransLineBuyWidth: "0",
        fiveTransLineSellWidth: "0",
        errorMsg: null,
        notAllowMsg: null,
        feeFeatureEnabled: !1,
        fundInsufficientData: null,
        TRADE_DIRECTION_TYPE: M.TRADE_DIRECTION_TYPE,
        TRADE_DIM_TYPE: M.TRADE_DIM_TYPE,
        ORDER_TYPE: R,
        hasSetPrice: !1,
        fiveTransLineWidth: 0,
        supportedOrientations: [
          "portrait",
          "portrait-upside-down",
          "landscape",
          "landscape-left",
          "landscape-right",
        ],
        style: {
          up: "#e63535",
          down: "#1caa3c",
          delt: "#262e40",
          equal: "#98a0b3",
        },
        infoParams: {},
        isKCB: !1,
        stockCode: "",
        srcsite: "",
        isAddToChoose: !0,
        MT: null,
        lastInitTradeAt: 0,
      };
    },
    computed: {
      isDelisted: function () {
        return "D" === this.stockInfo.state;
      },
      isLiteShell: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isInvalidPriceHTDL: function () {
        return +this.tradePrice > +this.stockInfo.ceil;
      },
      isInvalidPriceLTLL: function () {
        return +this.tradePrice < +this.stockInfo.floor;
      },
      invalidPriceInfo: function () {
        return this.isInvalidPriceHTDL
          ? "委托价高于涨停价，交易可能无效"
          : this.isInvalidPriceLTLL
          ? "委托价低于跌停价，交易可能无效"
          : "";
      },
      isAfterTrade: function () {
        return (
          this.tradeOpen && (10 == this.marketState || 11 == this.marketState)
        );
      },
      minsArrowImg: function () {
        return this.showMins
          ? "https://st.gtimg.com/design/09c9ba85f821dae44a8bfb9bc1bf6ffc.png"
          : "https://st.gtimg.com/design/e67c4d3c67f0bc158b53f9003c10901a.png";
      },
    },
    watch: {
      showTradeOpModal: function (e) {
        this.showTradeOpModal = e;
      },
      stockCode: {
        immediate: !0,
        deep: !0,
        handler: function (e, t) {
          e &&
            e !== t &&
            ((this.tradeNumber = ""),
            (this.hasSetPrice = !1),
            this.MT.setStockCode(e));
        },
      },
    },
    methods: {
      updataTradenum: function (e) {
        (this.tradeNumber = e.target.value),
          (this.MT.tradeNumber = this.tradeNumber);
      },
      updataTradeprice: function (e) {
        (this.tradePrice = e.target.value),
          (this.MT.tradePrice = this.tradePrice);
      },
      bindListeners: function () {
        var r = this;
        this.MT.on(L, function () {
          r.notAllowMsg = "活动已下线";
        }),
          this.MT.on(A, function () {
            r.showDialog = r.MT.isFirstIn;
          }),
          this.MT.on(O, function () {
            (r.tradeOpen = r.MT.tradeOpen),
              (r.stockOpen = r.MT.stockOpen),
              (r.isKCB = r.MT.isKCB),
              (r.marketStateCN = r.MT.marketStateCN),
              (r.marketState = r.MT.marketState),
              (r.stockInfo = r.MT.stockInfo),
              (r.fiveTrans = r.MT.fiveTrans),
              (r.tradeAmount = r.MT.tradeAmount),
              r.calcuFiveTransWidth(),
              (r.tradeTip = r.MT.tradeTip),
              (r.tradeNumber = (r.tradeNumber || r.MT.tradeNumber).toString()),
              !r.hasSetPrice &&
                r.MT.tradePrice &&
                ((r.tradePrice = r.MT.tradePrice), (r.hasSetPrice = !0));
          }),
          this.MT.on(v, function () {
            (r.stockSellableNum = r.MT.stockSellableNum),
              (r.stockBuyNumMax = r.MT.stockBuyNumMax),
              (r.tradeNumberMap = r.MT.tradeNumberMap);
          }),
          this.MT.on(D, function () {
            (r.nowTradePriceType = r.MT.nowTradePriceType),
              (r.stockBuyNumMax = r.MT.stockBuyNumMax),
              (r.tradeAmount = r.MT.tradeAmount),
              1 !== r.nowTradePriceType.id && (r.tradePrice = r.MT.tradePrice),
              (r.tradeNumberMap = r.MT.tradeNumberMap);
          }),
          this.MT.on(w, function () {
            (r.tradeNumber = (r.MT.tradeNumber || r.MT.miniTrade).toString()),
              (r.tradeAmount = r.MT.tradeAmount);
          }),
          this.MT.on(C, function (e) {
            return p(r, [e], function (e) {
              var r = this,
                i = e.tradeStatus,
                s = e.tradeTime,
                n = e.orderType;
              return t().mark(function e() {
                var a, o;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r.toggleTradeOpModal(),
                          (a = {
                            title: "模拟炒股",
                            showNav: !0,
                            tradeStatus: i,
                            tradeTime: s,
                            orderType: n,
                            srcsite: r.srcsite,
                          }),
                          (a = Object.assign(a, {
                            taskInfo: JSON.stringify(r.infoParams),
                          })),
                          (e.next = 5),
                          r.handleNewCustomerTask()
                        );
                      case 5:
                        if ("mpweapp" !== g.ShellTypeEnum.SHY) {
                          e.next = 10;
                          break;
                        }
                        (o = [
                          "tradeStatus=".concat(i),
                          "tradeTime=".concat(s),
                          "orderType=".concat(n),
                          "srcsite=".concat(r.srcsite),
                          "taskInfo=".concat(
                            encodeURIComponent(JSON.stringify(r.infoParams))
                          ),
                        ]),
                          E.push(
                            "qqstock://com.tencent.shy.mock_trade/mockresult?".concat(
                              o.join("&")
                            ),
                            "shy",
                            { title: "模拟炒股", showNav: !0 }
                          ),
                          (e.next = 11);
                        break;
                      case 10:
                        E.push("mockresult", "hippy", a);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })();
            });
          }),
          this.MT.on(B, function (t) {
            t && "object" == e(t) && "fund_insufficient" === t.type
              ? (r.fundInsufficientData = t)
              : ((r.showTradeOpModal = !1), (r.errorMsg = t));
          }),
          this.MT.on(x, function (e) {
            r.notAllowMsg = e;
          });
      },
      handleNewCustomerTask: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var r, i;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), E.getUrlParam("task_id");
                  case 2:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    e.t0 = "";
                  case 5:
                    return (r = e.t0), (e.next = 8), E.getUrlParam("task_tid");
                  case 8:
                    if (((e.t1 = e.sent), e.t1)) {
                      e.next = 11;
                      break;
                    }
                    e.t1 = "";
                  case 11:
                    if (((i = e.t1), (e.t2 = r && 13 == +i), !e.t2)) {
                      e.next = 16;
                      break;
                    }
                    return (
                      (e.next = 16),
                      N.ActTaskController.doCustomerTask({ tid: i, id: r })
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
      calcuFiveTransWidth: function () {
        var e = +this.fiveTrans.buy.percent.replace("%", "");
        (this.fiveTransLineBuyWidth =
          (e * this.fiveTransLineWidth) / 100 + "px"),
          (this.fiveTransLineSellWidth =
            ((100 - e) * this.fiveTransLineWidth) / 100 + "px");
      },
      stopPropagation: function (e) {
        e.stopPropagation();
      },
      onPageClick: function () {
        this.setOldUser(), this.blurAllInput();
      },
      blurAllInput: function () {
        var e, t;
        this.isSearch ||
          (null == (e = this.$refs.tradeNumberInput) || e.blur(),
          null == (t = this.$refs.tradePriceInput) || t.blur());
      },
      onTradePriceBlur: function () {
        this.isSearch ||
          (/^\d+(\.\d+)?$/.test(this.tradePrice.toString()) ||
            (this.tradePrice = this.stockInfo.price),
          +this.tradePrice > 9999 && (this.tradePrice = 9999),
          (this.tradePrice && !isNaN(+this.tradePrice)) ||
            (this.tradePrice = 0),
          (this.tradePrice = (+this.tradePrice).toFixed(
            this.stockInfo.spreadAcc
          )),
          (this.MT.tradePrice = this.tradePrice),
          (this.tradeNumberMap = this.MT.tradeNumberMap),
          (this.tradeAmount = this.MT.tradeAmount),
          (this.stockBuyNumMax = this.MT.stockBuyNumMax),
          setTimeout(function () {
            window && window.scrollTo && window.scrollTo(0, 0);
          }, 100));
      },
      onTradeNumberBlur: function () {
        this.isSearch ||
          ((/^\d+$/.test(this.tradeNumber.toString()) &&
            "0" !== this.tradeNumber) ||
            (this.tradeNumber = this.MT.miniTrade),
          (this.tradeNumber = (this.tradeNumber || "")
            .toString()
            .replace(/\..*/, "")),
          (this.MT.tradeNumber = this.tradeNumber),
          (this.tradeAmount = this.MT.tradeAmount),
          (this.stockBuyNumMax = this.MT.stockBuyNumMax),
          setTimeout(function () {
            window && window.scrollTo && window.scrollTo(0, 0);
          }, 100));
      },
      handleTradeDim: function (e, t) {
        if (!this.isSearch) {
          switch ((this.MT.handleTradeDim(e, t), e)) {
            case M.TRADE_DIM_TYPE.NUMBER:
              (this.tradeNumber =
                void 0 !== this.MT.tradeNumber
                  ? this.MT.tradeNumber.toString()
                  : ""),
                t === M.TRADE_DIRECTION_TYPE.UP &&
                  this.MT.report("deal", "price", "plus"),
                t === M.TRADE_DIRECTION_TYPE.DOWN &&
                  this.MT.report("deal", "price", "minus");
              break;
            case M.TRADE_DIM_TYPE.PRICE:
              (this.tradePrice =
                void 0 !== this.MT.tradePrice
                  ? this.MT.tradePrice.toString()
                  : ""),
                t === M.TRADE_DIRECTION_TYPE.UP &&
                  this.MT.report("deal", "number", "plus"),
                t === M.TRADE_DIRECTION_TYPE.DOWN &&
                  this.MT.report("deal", "number", "minus");
          }
          (this.tradeAmount = this.MT.tradeAmount),
            (this.stockBuyNumMax = this.MT.stockBuyNumMax);
        }
      },
      togglePriceType: function (e) {
        this.isDelisted ||
          this.isSearch ||
          ((this.showPriceType = !this.showPriceType),
          this.showPriceType && this.MT.report("deal", "price", "type"));
      },
      toggleNumType: function (e) {
        this.isDelisted ||
          this.isSearch ||
          ((this.showNumType = !this.showNumType),
          this.MT.report("deal", "number", "type"));
      },
      onDialogHide: function () {
        this.showDialog = !1;
      },
      onDragging: function () {},
      onDropped: function (e) {},
      getNumColor: function (e) {
        try {
          if (!this.stockOpen) return this.style.equal;
          var t = +e.replace(",", "");
          return isNaN(t)
            ? this.style.delt
            : t > 0
            ? this.style.up
            : t < 0
            ? this.style.down
            : this.style.delt;
        } catch (e) {
          return this.style.equal;
        }
      },
      goDetail: function () {
        this.MT.report("deal", "stock_name", "click"),
          g.StockBridge.setStorage("IS_FROM_HOME", ""),
          g.StockRouter.routeTo({
            name: "stockdetail",
            query: {
              type: String(this.stockInfo.market),
              market: String(this.stockInfo.market),
              scode: this.stockInfo.code,
            },
          });
      },
      goStockDetail: function (e) {
        E.push("StockDetail", "qqstock", {
          code: e.fullCode,
          name: e.name,
          showNav: !0,
        });
      },
      setTradePriceType: function (e) {
        switch (e.id) {
          case 1:
            this.MT.report("deal", "price", "limit");
            break;
          case 2:
            this.MT.report("deal", "price", "market");
            break;
          case 3:
            this.MT.report("deal", "price", "buyone");
            break;
          case 4:
            this.MT.report("deal", "price", "sellone");
        }
        this.MT.setTradePriceType(e), (this.showPriceType = !1);
      },
      setTradeNumberType: function (e) {
        switch (e.id) {
          case 1:
            this.MT.report("deal", 1 === e.type ? "buy" : "sell", "all");
            break;
          case 2:
            this.MT.report("deal", 1 === e.type ? "buy" : "sell", "half");
            break;
          case 3:
            this.MT.report("deal", 1 === e.type ? "buy" : "sell", "quarter");
        }
        this.MT.setTradeNumberType(e), (this.showNumType = !1);
      },
      toggleTradeOpModal: function (e) {
        if (this.stockOpen && !this.isSearch && this.tradePrice)
          if (this.tradePrice <= 0) this.errorMsg = "委托价不能为 0";
          else if (this.tradeNumber <= 0) this.errorMsg = "委托数量不能为 0";
          else {
            if (e === R.BUY) {
              if (this.isKCB && +this.tradeNumber < 200)
                return void (this.errorMsg = "根据交易规则，股票最少买入200股");
              if (+this.tradeNumber % this.stockInfo.unit)
                return void (this.errorMsg =
                  "根据交易规则，股票最少买入100股，买入数量需为100及其整倍数");
              if (this.tradeNumber > this.stockBuyNumMax) {
                if (this.feeFeatureEnabled) {
                  var t = I.calculateFee({
                      cls: this.stockInfo.cls,
                      isMoneyFund: this.stockInfo.isMoneyFund,
                      market: this.stockInfo.market,
                      direction: "buy",
                      price: +this.tradePrice,
                      quantity: +this.tradeNumber,
                    }),
                    r = t.settlementAmount - +this.MT.fundAvailable;
                  this.fundInsufficientData = {
                    type: "fund_insufficient",
                    diff: I.formatFee(r),
                    fee: I.formatFee(t.totalFee),
                    maxBuy: this.stockBuyNumMax,
                  };
                } else
                  this.errorMsg = "资金不足，当前最大可买 ".concat(
                    this.stockBuyNumMax,
                    " 股"
                  );
                return;
              }
            } else if (e === R.SELL)
              if (this.isKCB) {
                if (!this.stockSellableNum)
                  return void (this.errorMsg = "你未持有该股票");
                if (this.tradeNumber > this.stockSellableNum)
                  return void (this.errorMsg =
                    "卖出数量大于持有股票数量，无法卖出");
                if (this.tradeNumber >= this.MT.miniTrade);
                else if (this.tradeNumber != this.stockSellableNum)
                  return this.stockSellableNum >= this.MT.miniTrade
                    ? void (this.errorMsg = "最少需卖出200股")
                    : void (this.errorMsg = "碎股需一次性卖出");
              } else {
                if (!this.stockSellableNum)
                  return void (this.errorMsg = "你未持有该股票");
                if (this.tradeNumber > this.stockSellableNum)
                  return void (this.errorMsg =
                    "卖出数量大于持有股票数量，无法卖出");
                if (
                  +this.tradeNumber % this.MT.miniTrade &&
                  (this.stockSellableNum - +this.tradeNumber) %
                    this.MT.miniTrade
                )
                  return void (this.errorMsg = "碎股需一次性卖出");
              }
            (this.nowTradeType = e),
              (this.showTradeOpModal = !this.showTradeOpModal);
          }
      },
      submitOrder: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (e.t0 = this.nowTradeType),
                        (e.next = e.t0 === R.BUY ? 3 : e.t0 === R.SELL ? 5 : 6);
                      break;
                    case 3:
                      return (
                        this.MT.report("deal", "buy", "click"),
                        e.abrupt("break", 6)
                      );
                    case 5:
                      this.MT.report("deal", "sell", "click");
                    case 6:
                      if (
                        (this.MT.submitOrder(this.nowTradeType),
                        (e.prev = 7),
                        !this.isAddToChoose)
                      ) {
                        e.next = 15;
                        break;
                      }
                      return (e.next = 11), y.getChooseStatus(this.stockCode);
                    case 11:
                      if (
                        ((e.t1 = this.stockCode),
                        (e.t2 = e.sent.data[e.t1]),
                        e.t2)
                      ) {
                        e.next = 15;
                        break;
                      }
                      this.MT.addToGroup(this.stockCode);
                    case 15:
                      e.next = 19;
                      break;
                    case 17:
                      (e.prev = 17), (e.t3 = e.catch(7));
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[7, 17]]
            );
          })
        );
      },
      hideErrorMsg: function () {
        this.errorMsg = null;
      },
      onClosePage: function () {
        (this.errorMsg = null),
          (this.notAllowMsg = null),
          setTimeout(function () {
            return k.navigator.close && k.navigator.close();
          }, 500);
      },
      onSearchInited: function () {
        (this.MT.searchInited = !0), (this.searchInited = this.MT.searchInited);
      },
      setPrice: function (e, t) {
        "string" == typeof e ? this.MT.report("deal", e, "click") : (t = e);
        var r;
        (r = "".concat(t.target.dataset.price)),
          (this.tradePrice = r),
          (this.MT.tradePrice = this.tradePrice),
          (this.tradeNumberMap = this.MT.tradeNumberMap),
          (this.tradeAmount = this.MT.tradeAmount),
          (this.stockBuyNumMax = this.MT.stockBuyNumMax);
      },
      setNumber: function (e, t) {
        this.MT.report("deal", e, "max");
        var r;
        (r = "".concat(t.currentTarget.dataset.number)),
          this.MT.setTradeNumberType({ number: r });
      },
      showTaskLog: function () {
        this.showLog = !0;
      },
      closeTaskLog: function () {
        this.showLog = !1;
      },
      tapPriceInput: function (e) {
        var t;
        e.stopPropagation(),
          this.MT.report("deal", "price", "click"),
          this.setTradePriceType(this.tradePriceMap[0]),
          null == (t = this.$refs.tradePriceInput) || t.focus();
      },
      tapTradeInput: function (e) {
        var t;
        e.stopPropagation(),
          null == (t = this.$refs.tradeNumberInput) || t.focus();
      },
      setStock: function (e) {
        var t;
        this.MT.stopStockTimer(),
          (this.MT.isSearch = !1),
          (this.isSearch = this.MT.isSearch),
          (this.stockCode =
            e.symbol ||
            ""
              .concat(null == (t = e.marketCN) ? void 0 : t.toLowerCase())
              .concat(e.code));
      },
      toggleSearch: function () {
        (this.isSearch = !0),
          (this.destroyMins = !0),
          (this.showMins = !1),
          (this.tradeAmount = 0),
          (this.tradePrice = ""),
          (this.tradeNumber = ""),
          (this.stockBuyNumMax = 0),
          this.$emit("mins-toggle", {
            showMins: !1,
            destroyMins: this.destroyMins,
          }),
          this.MT.stopStockTimer();
      },
      changeIsAddToChoose: function () {
        this.isAddToChoose = !this.isAddToChoose;
      },
      toggleMins: function () {
        this.MT.report("deal", "stock_mins_btn", "click"),
          (this.showMins = !this.showMins),
          (this.destroyMins = !1),
          this.$emit("mins-toggle", {
            showMins: this.showMins,
            destroyMins: this.destroyMins,
          }),
          this.showMins && this.MT.report("deal", "mins", "show");
      },
      setOldUser: function () {
        this.isOldUser ||
          (g.StockBridge.setStorage(F, !0), (this.isOldUser = !0));
      },
      refreshTradeTokenOnReturn: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.MT && !this.isSearch && this.stockCode) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if ((r = Date.now()) - this.lastInitTradeAt < 800) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (this.lastInitTradeAt = r),
                        (e.prev = 5),
                        (e.next = 8),
                        this.MT.initTrade()
                      );
                    case 8:
                      e.next = 12;
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(5));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[5, 10]]
            );
          })
        );
      },
    },
    created: function () {
      return p(
        this,
        null,
        t().mark(function e() {
          var r, i;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (this.MT = new P()),
                      (e.next = 3),
                      k.getMockTradeFeeFeatureEnabled()
                    );
                  case 3:
                    return (
                      (this.feeFeatureEnabled = e.sent),
                      (this.MT.feeFeatureEnabled = this.feeFeatureEnabled),
                      (this.isOldUser = g.StockBridge.getStorage(F)),
                      (e.next = 8),
                      E.getUrlParam("code")
                    );
                  case 8:
                    return (
                      (r = e.sent),
                      (this.stockCode = r),
                      (e.next = 12),
                      E.getUrlParam("srcsite")
                    );
                  case 12:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 15;
                      break;
                    }
                    e.t0 = "";
                  case 15:
                    return (
                      (this.srcsite = e.t0),
                      this.bindListeners(),
                      r || this.stockCode || this.MT.setStockCode(r),
                      (this.isSearch = !r && !this.stockCode),
                      (this.tradePriceMap = this.MT.tradePriceMap),
                      (this.tradeNumberMap = this.MT.tradeNumberMap),
                      (this.nowTradePriceType = this.MT.nowTradePriceType),
                      (e.prev = 22),
                      (e.next = 25),
                      E.getUrlParam("taskInfo")
                    );
                  case 25:
                    (i = e.sent),
                      (this.infoParams =
                        "string" == typeof i && "" !== i ? JSON.parse(i) : i),
                      (e.next = 31);
                    break;
                  case 29:
                    (e.prev = 29), (e.t1 = e.catch(22));
                  case 31:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[22, 29]]
          );
        })
      );
    },
    mounted: function () {
      var e = this;
      (this.destroyMins = !0),
        this.$emit("mins-toggle", {
          showMins: !1,
          destroyMins: this.destroyMins,
        }),
        this.$nextTick(function () {
          var t = e.$refs.tradeWrapper;
          _.measureInWindow(t).then(function (t) {
            var r = t.width;
            (e.fiveTransLineWidth = r), e.calcuFiveTransWidth();
          });
        });
    },
    activated: function () {
      this.refreshTradeTokenOnReturn();
    },
    onShow: function () {
      this.refreshTradeTokenOnReturn();
    },
    onPageShow: function () {
      this.refreshTradeTokenOnReturn();
    },
    beforeDestroy: function () {
      this.MT.off(L),
        this.MT.off(A),
        this.MT.off(O),
        this.MT.off(v),
        this.MT.off(D),
        this.MT.off(w),
        this.MT.off(C),
        this.MT.off(B),
        this.MT.off(x),
        this.MT.stopStockTimer(),
        (this.MT.tradeNumber = 0),
        (this.MT.tradePrice = ""),
        (this.MT.isSearch = !1),
        (this.MT.searchInited = !1),
        this.setOldUser();
    },
  };
Array ||
  (
    g.resolveComponent("search") +
    g.resolveComponent("stock-recommend") +
    g.resolveComponent("InfoModal") +
    g.resolveComponent("error-modal") +
    g.resolveComponent("taskLog")
  )();
var K = g._export_sfc(q, [
  [
    "render",
    function (e, t, r, i, s, n) {
      return g.e(
        {
          a: g.sr("searchRef", "d44e8f16-0"),
          b: g.o(n.onSearchInited, 2057),
          c: g.o(n.setStock, 2058),
          d: s.isSearch,
          e: g.p({
            initStock: s.stockInfo,
            infoParams: s.infoParams,
            srcsite: s.srcsite,
          }),
          f: !s.isOldUser && !s.searchInited && s.isSearch,
        },
        (s.isOldUser || s.searchInited || s.isSearch, {}),
        { g: !s.isSearch || !s.searchInited },
        s.isSearch && s.searchInited
          ? {}
          : g.e(
              { h: !s.isSearch },
              s.isSearch
                ? {}
                : {
                    i: g.t(s.stockInfo.name),
                    j: g.o(function () {
                      return n.goDetail && n.goDetail.apply(n, arguments);
                    }, 2059),
                    k: g.t(s.stockInfo.code),
                    l: g.t(
                      s.stockInfo.marketCN
                        ? s.stockInfo.marketCN.toUpperCase()
                        : ""
                    ),
                    m: g.t(s.marketStateCN),
                    n: s.tradeOpen ? "" : 1,
                    o: g.o(function () {
                      return (
                        n.toggleSearch && n.toggleSearch.apply(n, arguments)
                      );
                    }, 2060),
                  },
              { p: !s.isSearch },
              s.isSearch
                ? {}
                : g.e(
                    {
                      q: g.t(s.stockInfo.price),
                      r: n.getNumColor(s.stockInfo.zde),
                      s: s.stockInfo.price,
                      t: g.o(function (e) {
                        return n.setPrice("marketprice", e);
                      }, 2061),
                      v: g.t(s.stockInfo.zde),
                      w: n.getNumColor(s.stockInfo.zde),
                      x: g.t(s.stockInfo.zdf),
                      y: n.getNumColor(s.stockInfo.zde),
                      z: !(s.isKCB && "--" === s.stockInfo.ceil),
                    },
                    s.isKCB && "--" === s.stockInfo.ceil
                      ? {}
                      : {
                          A: g.t(s.stockInfo.ceil),
                          B: s.style.up,
                          C: s.stockInfo.ceil,
                          D: g.o(function (e) {
                            return n.setPrice("ceil", e);
                          }, 2062),
                        },
                    { E: !(s.isKCB && "--" === s.stockInfo.floor) },
                    s.isKCB && "--" === s.stockInfo.floor
                      ? {}
                      : {
                          F: g.t(s.stockInfo.floor),
                          G: s.style.down,
                          H: s.stockInfo.floor,
                          I: g.o(function (e) {
                            return n.setPrice("floor", e);
                          }, 2063),
                        },
                    {
                      J: n.minsArrowImg,
                      K: g.o(function () {
                        return n.toggleMins && n.toggleMins.apply(n, arguments);
                      }, 2064),
                      L: g.r("mins-chart", {
                        market: s.stockInfo.market,
                        scode: s.stockInfo.code,
                        width: s.minsWidth,
                        height: s.minsHeight,
                        showMins: s.showMins,
                        destroyMins: s.destroyMins,
                      }),
                    }
                  ),
              {
                M: g.t(s.nowTradePriceType.name),
                N: g.o(function (e) {
                  return n.handleTradeDim(
                    s.TRADE_DIM_TYPE.PRICE,
                    s.TRADE_DIRECTION_TYPE.DOWN
                  );
                }, 2065),
                O: g.o(function () {
                  return (
                    n.onTradePriceBlur && n.onTradePriceBlur.apply(n, arguments)
                  );
                }, 2066),
                P: !n.isDelisted,
                Q: g.o(function () {
                  return n.tapPriceInput && n.tapPriceInput.apply(n, arguments);
                }, 2067),
                R: s.tradePrice,
                S: g.o(function () {
                  return (
                    n.updataTradeprice && n.updataTradeprice.apply(n, arguments)
                  );
                }, 2068),
                T: g.o(function (e) {
                  return n.handleTradeDim(
                    s.TRADE_DIM_TYPE.PRICE,
                    s.TRADE_DIRECTION_TYPE.UP
                  );
                }, 2069),
                U: g.o(function () {
                  return (
                    n.togglePriceType && n.togglePriceType.apply(n, arguments)
                  );
                }, 2070),
                V: g.o(function (e) {
                  return n.handleTradeDim(
                    s.TRADE_DIM_TYPE.NUMBER,
                    s.TRADE_DIRECTION_TYPE.DOWN
                  );
                }, 2071),
                W: g.o(function () {
                  return (
                    n.onTradeNumberBlur &&
                    n.onTradeNumberBlur.apply(n, arguments)
                  );
                }, 2072),
                X: !n.isDelisted,
                Y: g.o(function () {
                  return n.tapTradeInput && n.tapTradeInput.apply(n, arguments);
                }, 2073),
                Z: s.tradeNumber,
                aa: g.o(function () {
                  return (
                    n.updataTradenum && n.updataTradenum.apply(n, arguments)
                  );
                }, 2074),
                ab: g.o(function (e) {
                  return n.handleTradeDim(
                    s.TRADE_DIM_TYPE.NUMBER,
                    s.TRADE_DIRECTION_TYPE.UP
                  );
                }, 2075),
                ac: g.o(function () {
                  return n.toggleNumType && n.toggleNumType.apply(n, arguments);
                }, 2076),
                ad: n.isDelisted ? 1 : "",
                ae: !n.isDelisted,
              },
              n.isDelisted
                ? {}
                : {
                    af: g.t(s.tradeAmount),
                    ag: g.t(s.stockBuyNumMax),
                    ah: s.stockBuyNumMax,
                    ai: g.o(function (e) {
                      return n.setNumber("buy", e);
                    }, 2077),
                    aj: g.t(s.stockSellableNum),
                    ak: s.stockSellableNum,
                    al: g.o(function (e) {
                      return n.setNumber("sell", e);
                    }, 2078),
                  },
              {
                am: g.o(function (e) {
                  return n.toggleTradeOpModal(s.ORDER_TYPE.BUY);
                }, 2079),
                an: g.o(function (e) {
                  return n.toggleTradeOpModal(s.ORDER_TYPE.SELL);
                }, 2080),
                ao: n.isDelisted ? 1 : "",
                ap: g.t(
                  s.feeFeatureEnabled
                    ? "模拟交易提交的委托均不构成任何真实交易委托关系，交易需收取手续费，其中佣金费率根据万分之2.5计算"
                    : "模拟交易提交的委托均不构成任何真实交易委托关系，不收取任何手续费"
                ),
              }
            ),
        { aq: s.isSearch && !s.searchInited },
        s.isSearch && !s.searchInited
          ? { ar: g.o(n.setStock, 2081), as: g.p({ platform: s.platform }) }
          : {},
        { at: s.tradeOpen && !s.isSearch },
        s.tradeOpen && !s.isSearch
          ? {
              av: s.fiveTransLineBuyWidth,
              aw: s.fiveTransLineSellWidth,
              ax: g.t(s.fiveTrans.buy.percent),
              ay: g.t(s.fiveTrans.sell.percent),
              az: g.f(s.fiveTrans.buy.trans, function (e, t, r) {
                return {
                  a: g.t(e.seq),
                  b: g.t(e.price),
                  c: e.price,
                  d: g.o(
                    function () {
                      return n.setPrice && n.setPrice.apply(n, arguments);
                    },
                    2082,
                    e.seq
                  ),
                  e: g.t(e.count || "--"),
                  f: e.seq,
                };
              }),
              aA: n.getNumColor(s.stockInfo.zde),
              aB: g.f(s.fiveTrans.sell.trans, function (e, t, r) {
                return {
                  a: g.t(e.seq),
                  b: g.t(e.price),
                  c: e.price,
                  d: g.o(
                    function () {
                      return n.setPrice && n.setPrice.apply(n, arguments);
                    },
                    2083,
                    e.seq
                  ),
                  e: g.t(e.count || "--"),
                  f: e.seq,
                };
              }),
              aC: n.getNumColor(s.stockInfo.zde),
            }
          : {},
        {
          aD: g.t(s.tradeTip),
          aE: !s.tradeOpen && s.stockOpen && !s.isSearch,
          aF: s.showPriceType,
        },
        s.showPriceType
          ? {
              aG: g.o(function () {
                return (
                  n.togglePriceType && n.togglePriceType.apply(n, arguments)
                );
              }, 2084),
              aH: g.f(s.tradePriceMap, function (e, t, r) {
                return {
                  a: g.t(e.name),
                  b: e.id,
                  c: e.id === s.nowTradePriceType.id ? 1 : "",
                  d: g.o(
                    function (t) {
                      return n.setTradePriceType(e);
                    },
                    2085,
                    e.id
                  ),
                };
              }),
              aI: g.n(s.showMins ? "show-mins" : ""),
              aJ: s.supportedOrientations,
            }
          : {},
        { aK: s.showNumType },
        s.showNumType
          ? {
              aL: g.o(function () {
                return n.toggleNumType && n.toggleNumType.apply(n, arguments);
              }, 2086),
              aM: g.f(s.tradeNumberMap, function (e, t, r) {
                return {
                  a: g.f(e, function (e, t, r) {
                    return {
                      a: g.t(e.name),
                      b: g.t(e.number || (1 == e.type ? "0" : "--")),
                      c: e.id,
                      d: g.o(
                        function (t) {
                          return n.setTradeNumberType(e);
                        },
                        2087,
                        e.id
                      ),
                    };
                  }),
                  b: g.n(t),
                  c: t,
                };
              }),
              aN: g.n(s.showMins ? "show-mins" : ""),
              aO: s.supportedOrientations,
            }
          : {},
        { aP: s.showTradeOpModal },
        s.showTradeOpModal
          ? g.e(
              {
                aQ: g.o(function () {
                  return (
                    n.toggleTradeOpModal &&
                    n.toggleTradeOpModal.apply(n, arguments)
                  );
                }, 2088),
                aR: g.t(s.nowTradeType === s.ORDER_TYPE.BUY ? "买入" : "卖出"),
                aS: g.t(s.stockInfo.name || "--"),
                aT: g.t(s.tradePrice || "--"),
                aU: g.t(s.tradeNumber || "--"),
                aV: g.t(s.tradeAmount || "--"),
                aW: n.isAfterTrade,
              },
              (n.isAfterTrade, {}),
              { aX: !!n.invalidPriceInfo },
              n.invalidPriceInfo ? { aY: g.t(n.invalidPriceInfo) } : {},
              { aZ: !s.feeFeatureEnabled },
              (s.feeFeatureEnabled, {}),
              { ba: s.isAddToChoose },
              (s.isAddToChoose, {}),
              {
                bb: g.o(function () {
                  return (
                    n.changeIsAddToChoose &&
                    n.changeIsAddToChoose.apply(n, arguments)
                  );
                }, 2089),
                bc: g.o(function () {
                  return (
                    n.toggleTradeOpModal &&
                    n.toggleTradeOpModal.apply(n, arguments)
                  );
                }, 2090),
                bd: g.t(n.invalidPriceInfo ? "仍要" : "模拟"),
                be: g.t(s.nowTradeType === s.ORDER_TYPE.BUY ? "买入" : "卖出"),
                bf: g.n(s.nowTradeType === s.ORDER_TYPE.BUY ? "blue" : "red"),
                bg: g.o(function () {
                  return n.submitOrder && n.submitOrder.apply(n, arguments);
                }, 2091),
                bh: s.supportedOrientations,
              }
            )
          : {},
        { bi: s.showDialog },
        s.showDialog
          ? {
              bj: g.o(function () {
                return n.onDialogHide && n.onDialogHide.apply(n, arguments);
              }, 2092),
              bk: s.supportedOrientations,
              bl: g.o(function () {
                return n.onDialogHide && n.onDialogHide.apply(n, arguments);
              }, 2093),
            }
          : {},
        { bm: s.feeFeatureEnabled },
        s.feeFeatureEnabled
          ? g.e(
              { bn: s.fundInsufficientData },
              s.fundInsufficientData
                ? {
                    bo: g.t(s.fundInsufficientData.diff),
                    bp: g.t(s.fundInsufficientData.fee),
                    bq: g.t(s.fundInsufficientData.maxBuy),
                  }
                : {},
              {
                br: g.o(function (e) {
                  return (s.fundInsufficientData = null);
                }, 2094),
                bs: g.p({
                  visible: !!s.fundInsufficientData,
                  isLite: n.isLiteShell,
                }),
              }
            )
          : {},
        {
          bt: g.o(n.hideErrorMsg, 2095),
          bv: g.p({ msg: s.errorMsg }),
          bw: g.o(n.onClosePage, 2096),
          bx: g.p({ msg: s.notAllowMsg }),
          by: s.showLog,
        },
        s.showLog
          ? { bz: g.o(n.closeTaskLog, 2097), bA: g.p({ tasklog: s.tasklog }) }
          : {},
        {
          bB: g.o(function () {
            return n.onPageClick && n.onPageClick.apply(n, arguments);
          }, 2098),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d44e8f16"],
]);
wx.createComponent(K);
