require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t,
  e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../../../@babel/runtime/helpers/inherits"),
  a = require("../../../../../../../@babel/runtime/helpers/createSuper"),
  l = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  u = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  f = function (t, e, n) {
    return e in t
      ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  p = function (t, e) {
    for (var n in e || (e = {})) h.call(e, n) && f(t, n, e[n]);
    if (c) {
      var i,
        o = l(c(e));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          n = i.value;
          d.call(e, n) && f(t, n, e[n]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  g = function (t, e, n) {
    return new Promise(function (i, o) {
      var s = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        r = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(s, r);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  m = require("../../../../../../../common/vendor.js"),
  T = require("../../../../stock-utils/lib/appInfo/index.js"),
  b = require("../../cp-util/wuJi/index.js"),
  k = require("../../utils/tool.js"),
  w = require("../../services/BaseController.js"),
  y = require("../../cp-util/appInfo/index.js"),
  _ = require("../../services/ActTaskController.js"),
  v = require("../../cp-util/navigator/index.js"),
  S = {},
  E = {};
Object.defineProperty(E, "__esModule", { value: !0 }),
  (E.getUserInfo = function () {}),
  (E.login = function () {
    return new Promise(function (t, e) {
      m.wx$1.login({
        success: function (e) {
          t(e);
        },
        fail: function (t) {
          e(t);
        },
      });
    });
  }),
  (E.logout = function () {}),
  (E.refreshUserInfo = function () {}),
  (function (t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = E;
    Object.keys(e).forEach(function (n) {
      "default" !== n &&
        "__esModule" !== n &&
        ((n in t && t[n] === e[n]) ||
          Object.defineProperty(t, n, {
            enumerable: !0,
            get: function () {
              return e[n];
            },
          }));
    });
  })(S);
var M = (function (t) {
    r(l, t);
    var e = a(l);
    function l() {
      var t;
      return (
        o(this, l),
        ((t = e.call(this)).userInfo = {}),
        (t.mockTradeSwitch = !1),
        (t.feeFeatureEnabled = !1),
        (t.orderListCancelStatusDummy = {}),
        (t.assetInfo = {
          earnToday: "--",
          earnTotal: "--",
          fundAvailable: "--",
          fundFreeze: "--",
          stockMarketValue: "--",
          total: "--",
          entrustTodayTotal: 0,
          entrustTodayPending: 0,
          earnYield: "--",
          bestStockLastWeek: "",
          bestStockRatioLastWekk: "",
        }),
        (t.positionList = []),
        (t.entrustList = []),
        (t.historyMonthList = []),
        (t.historyList = {}),
        (t.historyPageSeq = 0),
        (t.historyLoadComplete = !1),
        (t.historyLoading = !1),
        (t.urank = {}),
        (t.rankHome = {}),
        (t.rewardData = {}),
        (t.showPrizeModal = !1),
        (t.isLimitActHasChance = !1),
        (t.openAccountQueryRes = {}),
        (t.isHasUserSetting = !1),
        (t.vtoolsCfg = {}),
        (t.h5userinfo = {}),
        (t.canReset = !1),
        (t.resetEndTime = ""),
        (t.resetNum = 0),
        (t.hotStock = []),
        (t.stockRank = []),
        (t.recommendId = ""),
        (t.recommendData = null),
        t
      );
    }
    return (
      s(l, [
        {
          key: "initAssetData",
          value: function () {
            (this.assetInfo = {
              earnToday: "--",
              earnTotal: "--",
              fundAvailable: "--",
              fundFreeze: "--",
              stockMarketValue: "--",
              total: "--",
              entrustTodayTotal: 0,
              entrustTodayPending: 0,
              earnYield: "--",
              bestStockLastWeek: "",
              bestStockRatioLastWekk: "",
            }),
              (this.positionList = []),
              (this.entrustList = []),
              (this.historyMonthList = []),
              (this.historyList = {}),
              this.emit(w.EVENT_NAME.GOT_ASSET_OVERVIEW),
              this.emit(w.EVENT_NAME.GOT_ENTRUST_LIST),
              this.emit(w.EVENT_NAME.GOT_HISTORY_LIST);
          },
        },
        {
          key: "bindListeners",
          value: function () {
            var t = this;
            m.Vue._App &&
              (m.Vue._App.$on(w.HIPPY_EVENT.ON_LOGIN, function () {
                return g(
                  t,
                  null,
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getUserInfo();
                            case 2:
                              return (t.next = 4), this.getGameId();
                            case 4:
                              this.updateAssetData();
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              }),
              m.Vue._App.$on(w.HIPPY_EVENT.ON_LOGOUT, function () {
                return g(
                  t,
                  null,
                  i().mark(function t() {
                    return i().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                this.stopAssetTimer(),
                                this.initAssetData(),
                                (t.next = 4),
                                this.getUserInfo()
                              );
                            case 4:
                              return (t.next = 6), this.getGameId();
                            case 6:
                              this.updateAssetData();
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              }),
              m.Vue._App.$on(
                w.HIPPY_EVENT.ON_REMOTE_CONTROL_DATA_CHANGE,
                function () {
                  return g(
                    t,
                    null,
                    i().mark(function t() {
                      return i().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.getMDSwitch();
                              case 2:
                                if (
                                  ((t.t0 = t.sent),
                                  (t.t1 = this.mockTradeSwitch),
                                  (t.t2 = t.t0 !== t.t1),
                                  !t.t2)
                                ) {
                                  t.next = 7;
                                  break;
                                }
                                this.updateAssetData();
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                }
              ));
          },
        },
        {
          key: "updateAssetData",
          value: function () {
            return g(
              this,
              null,
              i().mark(function t() {
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!this.isLogin) {
                            t.next = 13;
                            break;
                          }
                          return (
                            m.StockBridge.aegisReportEvent("MOCKTRADE-ISLOGIN"),
                            (t.next = 4),
                            this.getGameId()
                          );
                        case 4:
                          if (
                            (m.StockBridge.aegisReportEvent(
                              "MOCKTRADE-hasSignAgreement",
                              { ext4: this.hasSignAgreement }
                            ),
                            (t.t0 = this.hasSignAgreement),
                            !t.t0)
                          ) {
                            t.next = 11;
                            break;
                          }
                          return (
                            m.StockBridge.aegisReportEvent(
                              "MOCKTRADE-BEFORE-GETASSET"
                            ),
                            (t.next = 10),
                            Promise.all([
                              this.getAssetData(),
                              this.getEntrustList(),
                              this.getHistoryList(),
                              this.fetchRecommendData(),
                            ])
                          );
                        case 10:
                          clearTimeout(this.timer);
                        case 11:
                          t.next = 14;
                          break;
                        case 13:
                          (this.assetInfo = {
                            earnToday: "--",
                            earnTotal: "--",
                            fundAvailable: "--",
                            fundFreeze: "--",
                            stockMarketValue: "--",
                            total: "--",
                            entrustTodayTotal: 0,
                            entrustTodayPending: 0,
                            earnYield: "--",
                            bestStockLastWeek: "",
                            bestStockRatioLastWekk: "",
                          }),
                            (this.positionList = []),
                            (this.entrustList = []),
                            this.emit(w.EVENT_NAME.GOT_GAME_ID),
                            this.emit(w.EVENT_NAME.GOT_ASSET_OVERVIEW),
                            this.emit(w.EVENT_NAME.GOT_ENTRUST_LIST);
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "stopAssetTimer",
          value: function () {
            clearTimeout(this.timer);
          },
        },
        {
          key: "getMDSwitch",
          value: function () {
            return y.getRemoteControlData("tradetab").then(function (t) {
              var e = t.tabList.filter(function (t) {
                return "mock" === t.key;
              });
              return Promise.resolve(!!e.length);
            });
          },
        },
        {
          key: "loadFeatureFlags",
          value: function () {
            return g(
              this,
              null,
              i().mark(function t() {
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), b.getMockTradeFeeFeatureEnabled()
                          );
                        case 2:
                          this.feeFeatureEnabled = t.sent;
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "isNumber",
          value: function (t) {
            return "number" == typeof t && !isNaN(t);
          },
        },
        {
          key: "stringToNumber",
          value: function (t) {
            return parseFloat(t.replace(/,/g, ""));
          },
        },
        {
          key: "getAssetData",
          value: function () {
            var t = this;
            return (
              m.StockBridge.aegisReportEvent("MOCKTRADE-START-GETASSET"),
              this.fetch(w.MN_HOME_CGI)
                .then(function (e) {
                  var n = e.asset_overview,
                    i = e.stock_asset || [],
                    o = e.today_order_stat,
                    s = e.account_info || {};
                  (t.assetInterval = +e.asset_interval),
                    (t.orderInterval = +e.order_interval),
                    (t.canReset = "1" === s.can_reset),
                    (t.resetEndTime = s.reset_end_time || ""),
                    (t.resetNum = parseInt(s.reset_num, 10) || 0);
                  var r = 0;
                  return (
                    t.isNumber(t.stringToNumber(n.earn_val)) &&
                      t.isNumber(t.stringToNumber(n.total_val)) &&
                      t.stringToNumber(n.total_val) -
                        t.stringToNumber(n.earn_val) >
                        0 &&
                      (r =
                        (r =
                          (t.stringToNumber(n.earn_val) /
                            (t.stringToNumber(n.total_val) -
                              t.stringToNumber(n.earn_val))) *
                          100) > 1e3
                          ? "+1000"
                          : r < -1e3
                          ? "-1000"
                          : r.toFixed(2)),
                    (t.assetInfo = {
                      earnTotal: n.earn_val || "--",
                      earnTotalCN: n.earn_val || "--",
                      earnToday: n.earn_val_today || "--",
                      earnTodayCN: n.earn_val_today || "--",
                      fundAvailable: n.fund_avl_bal || "--",
                      fundFreeze: n.fund_frz_bal || "--",
                      stockMarketValue: n.stock_mkt_val || "--",
                      total: n.total_val || "--",
                      entrustTodayTotal: o.total_num || 0,
                      entrustTodayPending: o.undone_num || 0,
                      earnYield: r,
                      bestStockLastWeek: n.best_stock_last_week || "",
                      bestStockRatioLastWekk:
                        n.best_stock_ratio_last_week || "",
                    }),
                    (t.positionList = i.map(function (t) {
                      return {
                        holdNum: t.hld_qty,
                        putableNum: t.avl_qty,
                        code: t.code,
                        fullCode: w.MARKET_CODE[+t.market] + t.code,
                        cost: t.cost_val,
                        price: t.price,
                        name: t.name,
                        marketValue: t.mkt_val,
                        earnToday: t.earn_val_today,
                        earnTodayCN: t.earn_val_today,
                        earnTotal: t.earn_val,
                        earnTotalCN: t.earn_val,
                        earnTodayPercent: t.earn_per_today,
                        earnTotalPercent: t.earn_per,
                        market: t.market,
                        soldOut: !+t.mkt_val.replace(/\,/g, ""),
                        small: t.name.replace(/\s*/g, "").length > 4,
                      };
                    })),
                    t.emit(w.EVENT_NAME.GOT_ASSET_OVERVIEW),
                    e
                  );
                })
                .catch(function (e) {
                  e && e.retmsg && t.emit(w.EVENT_NAME.ERROR_ALERT, e.retmsg);
                })
            );
          },
        },
        {
          key: "moneyText",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "--",
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!t) return e;
            var i = t.toString().replace(/,/g, "");
            if (Math.abs(+i) < 1e4) return t.toString();
            var o = (function (t, e, n, i) {
              var o = +t;
              if (isNaN(o)) return t;
              var s = Math.abs(o);
              return (
                (i = i || 1e4),
                (e = void 0 === e ? 2 : e),
                (n = n || ""),
                s < Math.pow(10, 4) || s < i
                  ? (o = o.toFixed(e))
                  : s >= Math.pow(10, 4) && s < Math.pow(10, 8)
                  ? (o = (o / 1e4).toFixed(e) + "万")
                  : s >= Math.pow(10, 8) &&
                    s < Math.pow(10, 11) &&
                    (o = (o / 1e8).toFixed(e) + "亿"),
                o + n
              );
            })(i).toString();
            return +i > 0 ? "".concat(n ? "+" : "").concat(o) : o;
          },
        },
        {
          key: "getMoneyNumber",
          value: function (t) {
            if (null == t || "" === t) return null;
            var e = String(t).replace(/,/g, "");
            if ("--" === e) return null;
            var n = Number(e);
            return Number.isFinite(n) ? n : null;
          },
        },
        {
          key: "getMoneyText",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "--";
            return null == t || "" === t ? e : String(t);
          },
        },
        {
          key: "getFormattedMoney",
          value: function (t) {
            return (function (t, e) {
              (t = String(t) || ""), (e = void 0 === e ? 2 : e);
              var n = /^(\-?)(\d+)(\.\d+)?$/.exec(t);
              if (null === n) return t;
              var i = (null != n && RegExp.$1) || "",
                o = (null != n && RegExp.$2) || "0",
                s = (null != n && RegExp.$3) || ".00",
                r = o.length,
                a = r > 3 ? r % 3 : 0,
                l = "",
                u = 0 == a ? "" : o.substr(0, a) + ",",
                c = 0;
              s =
                0 == e
                  ? ""
                  : s.length >= e + 1
                  ? s.substr(0, e + 1)
                  : (s + new Array(e + 1 - s.length + 1).join("0")).substr(
                      0,
                      e + 1
                    );
              for (var h = a; h < r; h++)
                (l += o.charAt(h)),
                  ++c % 3 == 0 && h < r - 1 && ((l += ","), (c = 0));
              return i + u + l + s;
            })(t.toFixed(2));
          },
        },
        {
          key: "getOrderMarket",
          value: function (t) {
            return +t === w.MARKET_CODE.sh
              ? w.MARKET_CODE.sh
              : w.MARKET_CODE.sz;
          },
        },
        {
          key: "getOrderMarketCN",
          value: function (t) {
            return w.MARKET_CODE[this.getOrderMarket(t)];
          },
        },
        {
          key: "handleOrderItemLegacy",
          value: function (t) {
            var e,
              i = t.order_time.match(/^\d{4}-(\d{2}-\d{2})/i);
            return (
              (i =
                [
                  w.ORDER_STATUS.MATCHED,
                  w.ORDER_STATUS.WITHDRAW,
                  w.ORDER_STATUS.SYS_WITHDRAW,
                  w.ORDER_STATUS.FAIL,
                ].indexOf(+t.status) > -1
                  ? i && i[1]
                    ? i[1]
                    : "--"
                  : "待成交"),
              {
                id: t.orderid,
                type: +t.bs_flag,
                typeCN: ((e = {}),
                n(e, w.ORDER_TYPE.BUY, "买入"),
                n(e, w.ORDER_TYPE.SELL, "卖出"),
                e)[+t.bs_flag],
                channel: +t.channel,
                market: +t.market,
                marketCN: w.MARKET_CODE[+t.market],
                status: +t.status,
                statusCN: w.ORDER_STATUS_CN[w.ORDER_STATUS[+t.status]],
                canChange:
                  [w.ORDER_STATUS.INIT, w.ORDER_STATUS.OFFERED].indexOf(
                    +t.status
                  ) > -1,
                canceling: !1,
                orderPrice: t.order_price,
                number: +t.order_qty,
                soldNum:
                  +t.status === w.ORDER_STATUS.MATCHED ? +t.order_qty : 0,
                price: t.price,
                name: t.stock_name,
                code: t.stock_code,
                fullCode: w.MARKET_CODE[+t.market] + t.stock_code,
                time: t.tnvr_time.split(" ")[1] || "",
                small: t.stock_name.replace(/\s*/g, "").length > 8,
                date: i,
              }
            );
          },
        },
        {
          key: "handleOrderItem",
          value: function (t) {
            var e,
              i = this;
            if (!this.feeFeatureEnabled) return this.handleOrderItemLegacy(t);
            var o = t.order_time.match(/^\d{4}-(\d{2}-\d{2})/i),
              s = o && o[1] ? o[1] : "--",
              r = +t.status === w.ORDER_STATUS.MATCHED,
              a = this.getMoneyText(t.tnvr_amt, this.getMoneyText(t.order_amt)),
              l = this.getMoneyText(
                t.tnvr_price,
                this.getMoneyText(t.order_price)
              ),
              u = this.getMoneyNumber(t.tnvr_amt),
              c = [
                this.getMoneyNumber(t.fee_commission),
                this.getMoneyNumber(t.fee_stamp_duty),
                this.getMoneyNumber(t.fee_transfer),
                this.getMoneyNumber(t.dividend_tax),
              ],
              h = c.some(function (t) {
                return null !== t;
              }),
              d = null;
            if (h) {
              var f = c.reduce(function (t, e) {
                return t + (null != e ? e : 0);
              }, 0);
              d = f >= 0 ? f : null;
            }
            var p = (function () {
                if (!r)
                  return [w.ORDER_STATUS.INIT, w.ORDER_STATUS.OFFERED].indexOf(
                    +t.status
                  ) > -1
                    ? "待成交"
                    : "未成交";
                if (null === u) return "--";
                if (null !== d && Number.isFinite(d) && d >= 0) {
                  var e = +t.bs_flag === w.ORDER_TYPE.BUY;
                  if (!e && d > u) return i.getFormattedMoney(u);
                  var n = e ? u + d : u - d;
                  return i.getFormattedMoney(n);
                }
                return i.getFormattedMoney(u);
              })(),
              g = r && h && null !== d && d > 0;
            return {
              id: t.orderid,
              type: +t.bs_flag,
              typeCN: ((e = {}),
              n(e, w.ORDER_TYPE.BUY, "买入"),
              n(e, w.ORDER_TYPE.SELL, "卖出"),
              e)[+t.bs_flag],
              channel: +t.channel,
              market: this.getOrderMarket(t.market),
              marketCN: this.getOrderMarketCN(t.market),
              status: +t.status,
              statusCN: w.ORDER_STATUS_CN[w.ORDER_STATUS[+t.status]],
              canChange:
                [w.ORDER_STATUS.INIT, w.ORDER_STATUS.OFFERED].indexOf(
                  +t.status
                ) > -1,
              canceling: !1,
              orderPrice: t.order_price,
              number: +t.order_qty,
              soldNum: +t.status === w.ORDER_STATUS.MATCHED ? +t.order_qty : 0,
              price: t.price,
              name: t.stock_name,
              code: t.stock_code,
              fullCode: this.getOrderMarketCN(t.market) + t.stock_code,
              time: (t.tnvr_time || "").split(" ")[1] || "",
              small: t.stock_name.replace(/\s*/g, "").length > 8,
              date: s,
              tradeAmount: a,
              tradePrice: l,
              fee: null !== d ? this.getFormattedMoney(d) : void 0,
              settlementAmount: p,
              hasFeeDetail: g,
            };
          },
        },
        {
          key: "getEntrustList",
          value: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 50;
            return this.fetch(w.ORDER_LIST_CGI, {
              action: w.QUERY_ORDER_TYPE.TODAY,
              offset: e,
              limit: n,
            }).then(function (e) {
              var n = e.orderlist || [];
              return (
                (t.entrustList = n
                  .map(function (e) {
                    return t.handleOrderItem(e);
                  })
                  .sort(function (t, e) {
                    return +t.status - +e.status;
                  })),
                t.emit(w.EVENT_NAME.GOT_ENTRUST_LIST),
                e
              );
            });
          },
        },
        {
          key: "getHistoryListByMonth",
          value: function (t) {
            var e = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 200;
            if (!this.historyLoading && !this.historyLoadComplete) {
              !this.historyPageSeq &&
                this.historyMonthList.length > 0 &&
                t === this.historyMonthList[0].period &&
                (this.historyPageSeq = 1);
              var i = this.historyPageSeq * n;
              return (
                (this.historyLoading = !0),
                this.fetch(w.ORDER_LIST_CGI, {
                  action: w.QUERY_ORDER_TYPE.MONTH,
                  offset: i,
                  limit: n,
                  month: t,
                })
                  .then(function (i) {
                    if (((e.historyLoading = !1), i.orderlist)) {
                      i.orderlist.length < n && (e.historyLoadComplete = !0);
                      var o = i.orderlist || [];
                      (e.historyList[t] = (
                        e.historyPageSeq ? e.historyList[t] : []
                      ).concat(
                        o.map(function (t) {
                          return e.handleOrderItem(t);
                        })
                      )),
                        e.emit(w.EVENT_NAME.GOT_HISTORY_LIST),
                        (e.historyPageSeq += 1);
                    } else e.historyLoadComplete = !0;
                  })
                  .catch(function (t) {
                    e.historyLoading = !1;
                  })
              );
            }
          },
        },
        {
          key: "getHistoryList",
          value: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 50;
            return this.fetch(w.ORDER_LIST_CGI, {
              action: w.QUERY_ORDER_TYPE.COUNT,
              count_offset: 0,
              count_limit: 12,
              first_month_data: 1,
              offset: e,
              limit: n,
            }).then(function (e) {
              (t.historyPageSeq = 0), (t.historyLoadComplete = !1);
              var n = e.countlist,
                i = e.orderlist;
              t.historyMonthList = (n || []).map(function (t) {
                var e = t.period.match(/^(\d{4})(\d{2})/i);
                return {
                  period: t.period,
                  periodCN: "".concat(e[1], "年").concat(e[2], "月"),
                  count: +t.count,
                };
              });
              var o = t.historyMonthList[0];
              o &&
                (t.historyList[o.period] = o
                  ? i
                      .filter(function (t) {
                        return (
                          t.order_time.replace(
                            /^(\d{4})-(\d{2}).*/,
                            function (t, e, n) {
                              return "".concat(e).concat(n);
                            }
                          ) === o.period
                        );
                      })
                      .map(function (e) {
                        return t.handleOrderItem(e);
                      })
                  : []),
                t.emit(w.EVENT_NAME.GOT_HISTORY_LIST);
            });
          },
        },
        {
          key: "cancelOrder",
          value: function (t) {
            for (var e, n = this, i = 0; i < this.entrustList.length; i++)
              if (this.entrustList[i].id === t) {
                e = i;
                break;
              }
            return (
              (this.orderListCancelStatusDummy[t] = !0),
              (this.entrustList[e].canceling = !0),
              (this.entrustList[e].statusCN = "撤单中"),
              this.emit(w.EVENT_NAME.ORDER_CHANGE, e),
              this.fetch(w.ORDER_CANCEL_CGI, { orderid: t })
                .then(function () {
                  delete n.orderListCancelStatusDummy[t],
                    (n.entrustList[e].canceling = !1),
                    n.updateAssetData();
                })
                .catch(function (i) {
                  delete n.orderListCancelStatusDummy[t],
                    (n.entrustList[e].canceling = !1),
                    n.emit(w.EVENT_NAME.ORDER_CHANGE, e),
                    n.emit(w.EVENT_NAME.ERROR_ALERT, i.retmsg);
                })
            );
          },
        },
        {
          key: "getRankData",
          value: function () {
            var t = this;
            return this.fetch(
              w.ACTIVITY_RANK_CGI,
              {
                action: "home",
                rank_name: w.config.rank_name,
                channel: w.config.channel,
              },
              { notNeedGameInfo: !0 }
            ).then(function (e) {
              return g(
                t,
                null,
                i().mark(function t() {
                  var n;
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            e &&
                              ((null == (n = e.urank)
                                ? void 0
                                : n.headimgurl) &&
                                (e.urank.headimgurl =
                                  e.urank.headimgurl.replace(
                                    "http://",
                                    "https://"
                                  )),
                              e.rank_list &&
                                Array.isArray(e.rank_list) &&
                                e.rank_list.forEach(function (t) {
                                  (null == t ? void 0 : t.headimgurl) &&
                                    (t.headimgurl = t.headimgurl.replace(
                                      "http://",
                                      "https://"
                                    ));
                                }),
                              (this.urank = e.urank),
                              (this.rankHome = e),
                              0 == +e.status &&
                                1 == +e.can_regist &&
                                this.registerRank(this.rankHome.rank_id),
                              e.reward_ticket && (this.showPrizeModal = !0),
                              this.emit(w.EVENT_NAME.RANK_HOME));
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            });
          },
        },
        {
          key: "getRewardData",
          value: function (t, e) {
            var n = this;
            return this.fetch(w.ACTIVITY_RANK_CGI, {
              action: "award",
              rank_id: t,
              reward_ticket: e,
              channel: w.config.channel,
            })
              .then(function (t) {
                (n.rewardData = t), n.emit(w.EVENT_NAME.RANK_AWARD);
              })
              .catch(function (t) {
                n.report("asset", "award", "show"),
                  n.emit(w.EVENT_NAME.ERROR_ALERT, t.retmsg);
              });
          },
        },
        {
          key: "registerRank",
          value: function (t) {
            var e = this;
            return this.fetch(w.ACTIVITY_RANK_CGI, {
              action: "regist",
              rank_id: t,
              channel: w.config.channel,
            })
              .then(function (t) {})
              .catch(function (t) {
                e.report("asset", "register", "show");
              });
          },
        },
        {
          key: "getVtoolsCfg",
          value: function (t) {
            var e = this;
            return this.fetch(
              "https://wzq.tenpay.com/resources/vtools/mocktrade_eighth_utf8.json"
            ).then(function (t) {
              (e.vtoolsCfg = t), e.emit(w.EVENT_NAME.VTOOLS_CFG);
            });
          },
        },
        {
          key: "getVtoolsConfig",
          value: function (t) {
            var e = t;
            return this.fetch(
              "https://wzq.tenpay.com/resources/vtools/".concat(e, "_utf8.json")
            );
          },
        },
        {
          key: "getH5Userinfo",
          value: function () {
            var t = this;
            return this.fetch(w.USERINFO_CGI, { dealer: 1, detail: 1 })
              .then(function (e) {
                (t.h5userinfo = e), t.emit(w.EVENT_NAME.H5USERINFO);
              })
              .catch(function (e) {
                t.report("asset", "userinfo", "show");
              });
          },
        },
        {
          key: "getHotStock",
          value: function () {
            var t = this;
            return this.fetch(w.API_HOT_STOCK, {
              no_sort: 1,
              action: 2,
              type: 1,
              card_type: "home",
              kind: "news",
            }).then(function (e) {
              (t.hotStock = (null == e ? void 0 : e.hot_stocks) || []),
                t.emit(w.EVENT_NAME.GOT_HOT_STOCK);
            });
          },
        },
        {
          key: "getStockRank",
          value: function (t) {
            var e = this;
            return this.fetch(w.API_STOCK_RANK, { rank_type: t })
              .then(function (t) {
                (e.stockRank = (null == t ? void 0 : t.stocks_rank) || []),
                  e.emit(w.EVENT_NAME.GOT_STOCK_RANK);
              })
              .catch(function (t) {
                (e.stockRank = []), e.emit(w.EVENT_NAME.GOT_STOCK_RANK);
              });
          },
        },
        {
          key: "queryGuideOpenaccountHome",
          value: function () {
            var t = this;
            return this.fetch(w.LIMIT_ACTIVITY_QUERY_CGI, {
              channel_provider: "mnstock",
            })
              .then(function (e) {
                (t.isLimitActHasChance = "wzq" === w.config.cfgPlatform),
                  (t.openAccountQueryRes = e),
                  t.emit(w.EVENT_NAME.QUERY_USER_OPENACCOUNT);
              })
              .catch(function (t) {});
          },
        },
        {
          key: "fetchRecommendData",
          value: function () {
            return g(
              this,
              null,
              i().mark(function t() {
                var e, n, o, s, r, a;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            (n =
                              (null == (e = m.StockBridge.getCurRouteInfo())
                                ? void 0
                                : e.query) || {}),
                            (this.recommendId =
                              (null == n ? void 0 : n.recommend_id) || ""),
                            this.recommendId)
                          ) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void this.emit(w.EVENT_NAME.GET_RECOMMEND_DATA)
                          );
                        case 4:
                          return (
                            (t.next = 6),
                            this.fetch(w.GET_NEW_USER_RECOMMEND_CGI, {
                              id: this.recommendId,
                            })
                          );
                        case 6:
                          (o = t.sent),
                            (r = (s = o || {}).related_news),
                            (a = s.related_stocks),
                            (null == r ? void 0 : r.length) > 0 &&
                              (null == a ? void 0 : a.length) > 0 &&
                              (this.recommendData = o),
                            this.emit(w.EVENT_NAME.GET_RECOMMEND_DATA),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(0)),
                            m.StockBridge.aegisReportEvent(
                              "NEW_USER_RECOMMEND_FETCH_ERROR"
                            ),
                            this.emit(w.EVENT_NAME.GET_RECOMMEND_DATA);
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 13]]
                );
              })
            );
          },
        },
        {
          key: "queryUserSetting",
          value: function () {
            var t = this;
            return this.fetch(w.USERSETTING_CGI, {
              querysub: "mnstock_openaccount_notice",
            })
              .then(function (e) {
                var n;
                (t.isHasUserSetting =
                  1 ==
                  (null ==
                  (n = null == e ? void 0 : e.mnstock_openaccount_notice)
                    ? void 0
                    : n.switch)),
                  t.emit(w.EVENT_NAME.QUERY_USER_SETTING);
              })
              .catch(function (t) {});
          },
        },
        {
          key: "setUserSetting",
          value: function () {
            var t = this;
            return this.fetch(w.USERSETTING_CGI, {
              subscribe: "mnstock_openaccount_notice",
            })
              .then(function (e) {
                0 == e.retcode && t.emit(w.EVENT_NAME.SET_USER_SETTING, !0);
              })
              .catch(function (t) {});
          },
        },
        {
          key: "unsetUserSetting",
          value: function () {
            var t = this;
            return this.fetch(w.USERSETTING_CGI, {
              unsubscribe: "mnstock_openaccount_notice",
            })
              .then(function (e) {
                0 == e.retcode && t.emit(w.EVENT_NAME.SET_USER_SETTING, !1);
              })
              .catch(function (t) {});
          },
        },
        {
          key: "resetAccount",
          value: function () {
            return g(
              this,
              null,
              i().mark(function t() {
                var e;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            this.fetch(w.MN_ACCOUNT_OPERATE_CGI, {
                              action: "reset",
                            })
                          );
                        case 3:
                          if ("0" !== (e = t.sent).retcode && 0 !== e.retcode) {
                            t.next = 14;
                            break;
                          }
                          return (
                            (this.canReset = !1),
                            (t.next = 8),
                            this.updateAssetData()
                          );
                        case 8:
                          return (t.next = 10), this.getRankData();
                        case 10:
                          this.emit(w.EVENT_NAME.RESET_ACCOUNT_SUCCESS),
                            (t.t0 = !0),
                            (t.next = 15);
                          break;
                        case 14:
                          t.t0 =
                            (this.emit(
                              w.EVENT_NAME.RESET_ACCOUNT_FAIL,
                              e.retmsg || "重置失败"
                            ),
                            !1);
                        case 15:
                          return t.abrupt("return", t.t0);
                        case 18:
                          return (
                            (t.prev = 18),
                            (t.t1 = t.catch(0)),
                            t.abrupt(
                              "return",
                              (this.emit(
                                w.EVENT_NAME.RESET_ACCOUNT_FAIL,
                                (null == t.t1 ? void 0 : t.t1.retmsg) ||
                                  "重置失败，请稍后重试"
                              ),
                              !1)
                            )
                          );
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 18]]
                );
              })
            );
          },
        },
        {
          key: "getResetEndTimeText",
          value: function () {
            if (!this.resetEndTime) return "";
            var t = 1e3 * parseInt(this.resetEndTime, 10),
              e = new Date(t);
            return ""
              .concat(e.getFullYear(), ".")
              .concat(String(e.getMonth() + 1).padStart(2, "0"), ".")
              .concat(String(e.getDate()).padStart(2, "0"));
          },
        },
        {
          key: "queryResetRedDot",
          value: function () {
            return this.fetch(
              w.FREQ_QUERY_CGI,
              { app: "wzq", appid: "mncg_account_reset" },
              {
                method: "POST",
                notNeedGameInfo: !0,
                notString: !0,
                header: { "Content-Type": "application/json" },
              }
            )
              .then(function (t) {
                return (0 === t.retcode || "0" === t.retcode) && !0 === t.show;
              })
              .catch(function (t) {
                return !1;
              });
          },
        },
        {
          key: "reportResetRedDotClick",
          value: function () {
            return this.fetch(
              w.FREQ_REPORT_CGI,
              { app: "wzq", appid: "mncg_account_reset", oper: "show" },
              {
                method: "POST",
                notNeedGameInfo: !0,
                notString: !0,
                header: { "Content-Type": "application/json" },
              }
            )
              .then(function (t) {
                return 0 === t.retcode || "0" === t.retcode;
              })
              .catch(function (t) {
                return !1;
              });
          },
        },
      ]),
      l
    );
  })(w.BaseController),
  R = new ((function (t) {
    r(n, t);
    var e = a(n);
    function n() {
      return o(this, n), e.call(this);
    }
    return (
      s(n, [
        {
          key: "adQueryByTypeName",
          value: function (t) {
            return this.fetch(
              w.AD_QUERY_BY_TYPENAME,
              { typename: t },
              { method: "POST", notNeedGameInfo: !0, notString: !0 }
            );
          },
        },
        {
          key: "adReport",
          value: function (t) {
            return this.fetch(
              w.AD_REPORT,
              { typename: t },
              { method: "POST", notNeedGameInfo: !0, notString: !0 }
            );
          },
        },
      ]),
      n
    );
  })(w.BaseController))();
function C() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    i = "";
  try {
    if ("" !== t) {
      var o = t.replace(/,/g, "");
      n.forEach(function (t) {
        var n = t.split(":"),
          s = e(n, 2),
          r = s[0],
          a = s[1];
        Math.abs(+o) > r && a && (i = "font-".concat(a));
      });
    }
  } catch (t) {}
  return i;
}
function L(t) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e8,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "--",
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
  try {
    if (!t) return n;
    var o = t.toString().replace(/,/g, ""),
      s = +o;
    if (s < e) return t;
    if (isNaN(s)) return o;
    if (Math.abs(s) <= 1e4) return t.toString();
    var r = (s / 1e4).toFixed(i) + "万";
    return s > 0 ? "+".concat(r) : r;
  } catch (e) {
    return t;
  }
}
var A = "#e63535",
  N = "当前暂无榜单",
  D = T.appInfo.getWindowInfo().windowWidth / 750,
  O = (null == navigator ? void 0 : navigator.userAgent) || "";
O && /(Windows|Mac)Wechat/i.test(O) && (D = 0.58);
var I = { BUY: 1, SELL: 2 },
  x = "GOT_USERINFO",
  H = "GOT_GAME_ID",
  B = "GOT_ASSET_OVERVIEW",
  P = "GOT_ENTRUST_LIST",
  F = "ORDER_CHANGE",
  V = "GOT_HISTORY_LIST",
  U = "ERROR_ALERT",
  q = "OFFLINE_ALERT",
  G = "RANK_HOME",
  j = "RANK_AWARD",
  Y = "VTOOLS_CFG",
  z = "H5USERINFO",
  W = "GET_RECOMMEND_DATA",
  K = "RESET_ACCOUNT_SUCCESS",
  $ = "RESET_ACCOUNT_FAIL",
  Q = 388 * D + "px",
  J = 330 * D + "px",
  X = ["wzqlight", "mpwzq"],
  Z = { name: 8, volume: 9, amount: 13, amountWithFee: 10 },
  tt =
    (n(
      (t = {
        components: {
          TabNav: function () {
            return "../../cp-component/TabNav/mp.js";
          },
          errorModal: function () {
            return "../../components/errorModal.js";
          },
          InfoModal: function () {
            return "../../components/InfoModal.js";
          },
          rankList: function () {
            return "../../components/rankList.js";
          },
          emptyTips: function () {
            return "../../components/emptyTips.js";
          },
          prizeModal: function () {
            return "../../components/prizeModal.js";
          },
          CanvasView: function () {
            return "../../cp-component/CanvasView/mp.js";
          },
          Bubble: function () {
            return "../../cp-component/Bubble/mp.js";
          },
          weekRank: function () {
            return "../../components/weekRank.js";
          },
          taskLog: function () {
            return "../../components/taskLog.js";
          },
          SnackBar: function () {
            return "../../components/task/bar.js";
          },
          tabSlider: function () {
            return "../../cp-component/tabSlider/mp.js";
          },
          weekRewardModal: function () {
            return "../../components/weekRewardModal.js";
          },
          NewUserStock: function () {
            return "../../components/newUserStock.js";
          },
          NewUserRecommend: function () {
            return "../../components/newUserRecommend.js";
          },
          TabView: function () {
            return "../../cp-component/TabView.js";
          },
          TabHost: function () {
            return "../../cp-component/TabHost.js";
          },
          MiniApply: function () {
            return "../../components/miniApply/index.js";
          },
          AiRecommend: function () {
            return "../../components/aiRecommend/index.js";
          },
          AiRecommendSemiList: function () {
            return "../../components/aiRecommend/semiList.js";
          },
          ResetCardEntry: function () {
            return "../../components/resetCard/ResetCardEntry.js";
          },
          ResetCardModal: function () {
            return "../../components/resetCard/ResetCardModal.js";
          },
          ResetCardConfirm: function () {
            return "../../components/resetCard/ResetCardConfirm.js";
          },
          BulletinBar: function () {
            return "../../components/BulletinBar.js";
          },
        },
        inject: ["stockBridge"],
        options: { styleIsolation: "shared" },
        data: function () {
          return {
            isSwiperShow: !0,
            isLogin: !0,
            hasNoHistory: !1,
            hasUsedReset: !1,
            recommendId: "",
            recommendData: null,
            recommendDataLoaded: !1,
            boardShow: !1,
            mockTradeSwitch: !0,
            feeFeatureEnabled: !1,
            currentTab: w.TAB_LIST.POSITION,
            showDialog: !1,
            assetInfo: { earnTotalCN: "--", earnTodayCN: "--" },
            positionList: [],
            positionFold: !0,
            entrusFold: !0,
            entrustList: [],
            orderType: I,
            orderStatus: w.ORDER_STATUS,
            historyMonthList: [],
            historyList: {},
            nowHistoryMonth: null,
            errorMsg: "",
            errorBtnText: "我知道了",
            feeDetailVisible: !1,
            feeDetailData: { fee: "0.00", settlementAmount: "0.00" },
            bulletinVisible: !1,
            bulletinText: "",
            bulletinDetailVisible: !1,
            bulletinDetailText: "",
            bulletinConfigData: null,
            modalConfigData: null,
            bulletinConfigs: [],
            shownBulletinIds: { bulletin: [], modal: [] },
            navs: [],
            platform: w.config.cfgPlatform,
            hasSignAgreement: !0,
            isOffline: !1,
            showBubble: !1,
            screenType: "",
            supportedOrientations: [
              "portrait",
              "portrait-upside-down",
              "landscape",
              "landscape-left",
              "landscape-right",
            ],
            style: { up: A, down: "#1caa3d", delt: "#7a8499" },
            safeArea: 0,
            historyContainerHeight: 0,
            measureViewText: "",
            historyOverflowMap: {},
            info: {},
            srcsite: {},
            testData: "",
            loaded: !1,
            assetEmpty: !0,
            styleObj: { height: "660px" },
            styleContainerObj: { height: "660px" },
            tabNavHeight: 0,
            listHeaderHeight: 0,
            dropDownHeight: 0,
            liHeight: 0,
            urank: { headimgurl: "", nickname: "", rank: "", score: "" },
            canvasShow: !1,
            rankHome: {},
            rankList: [],
            rewardData: {},
            showPrizeModal: !1,
            pendingShowPrizeModal: !1,
            rewardModalType: "",
            showWeekRewardModal: !1,
            amount: 0,
            vtoolsCfg: {},
            baseConfig: {},
            h5userinfo: {},
            fold: !0,
            loopActions: {
              transform: {
                rotate: {
                  startValue: 0,
                  toValue: 90,
                  duration: 1e3,
                  repeatCount: 1,
                },
              },
            },
            snapShot: !1,
            isAct: !1,
            inAct: !1,
            scrollFlashBottom: 0,
            newsToShare: null,
            showShare: !1,
            eightActClass: "",
            cardTitleArr: [],
            shareConfig: {},
            bubbleNode: "",
            bubble: {},
            taskBasicConfig: {},
            popupConfig: {},
            rewardDesc: "",
            showLog: !1,
            tasklog: "",
            isVersionPass970: !1,
            profitStatus: "",
            guideToApplyText: "",
            guidePriority: 0,
            swiperHeight: Q,
            marketCode: w.MARKET_CODE,
            tabNavActivedWidth: [0],
            tablineStyle: {},
            tabNavActivedmarginleft: 0,
            shareTextFlag: !1,
            showCustomNavbar: !1,
            MT: null,
            skin: ["black", "dark"].includes(
              m.StockBridge.getStorage("user/skin")
            )
              ? "dark"
              : "light",
            TAB_LIST: w.TAB_LIST,
            boardLoading: !0,
            boardTimer: null,
            fromScene: { scene: "", type: "", id: "" },
            showResetModal: !1,
            showResetConfirm: !1,
            canReset: !1,
            resetEndTimeText: "",
            showResetRedDot: !1,
            resetLoading: !1,
            showResetEntry: !1,
          };
        },
        onPageShow: function () {
          (this.skin = ["black", "dark"].includes(
            m.StockBridge.getStorage("user/skin")
          )
            ? "dark"
            : "light"),
            this.pageShowHandler();
        },
      }),
      "options",
      { styleIsolation: "shared" }
    ),
    n(t, "computed", {
      isNewuser: function () {
        return this.hasNoHistory && !this.hasUsedReset;
      },
      isLight: function () {
        var t;
        return X.includes(null == (t = this.stockBridge) ? void 0 : t.SHELL);
      },
      buttonColor: function () {
        var t;
        return X.includes(null == (t = this.stockBridge) ? void 0 : t.SHELL)
          ? A
          : "#3077EC";
      },
      substrPointDate: function () {
        return function (t) {
          if (t) {
            var e = t;
            return "".concat(e.substr(4, 2), ".").concat(e.substr(6, 2));
          }
          return "";
        };
      },
      substrDate: function () {
        return function (t) {
          return t ? t.substring(4) : "";
        };
      },
      cutString: function () {
        return function (t, e) {
          return k.cutStr(t, e);
        };
      },
      guideToApplyBarClass: function () {
        return "guide-to-apply-hippy";
      },
      isAndroid: function () {
        return "android" === T.appInfo.getWindowInfo().os.toLowerCase();
      },
      infoParams: function () {
        return (
          (this.info =
            "string" == typeof this.info ? JSON.parse(this.info) : this.info),
          this.info.taskInfo
        );
      },
      tabSwiperHeight: function () {
        return (
          27.5 +
          65 * Math.max(this.positionList.length, this.entrustList.length)
        );
      },
      showFooterTips: function () {
        return (
          !this.isLogin ||
          !this.mockTradeSwitch ||
          !this.hasSignAgreement ||
          this.isOffline
        );
      },
      historyMonthLength: function () {
        return Object.keys(this.historyMonthList).length;
      },
      androidPositionContainerHeight: function () {
        return 60 * this.positionList.length + 26;
      },
      isFromAI: function () {
        return "fromai" === this.fromScene.scene;
      },
      emptyText: function () {
        return this.isLogin
          ? this.showDialog
            ? void 0
            : N
          : this.showDialog
          ? N
          : "榜单生成中";
      },
      cardText: function () {
        var t = {};
        return (
          this.isLogin
            ? this.showDialog &&
              ((t.btnText = "立即领取"), (t.tips = "恭喜获取"))
            : this.showDialog
            ? ((t.btnText = "登录已领取"), (t.tips = "QQ/微信登录后，即可获得"))
            : ((t.btnText = "立即登录"), (t.tips = "QQ/微信登录后，即可参加")),
          t
        );
      },
      bugiOS: function () {
        return !1;
      },
      urankStatus: function () {
        return { urank: this.urank, positionList: this.positionList };
      },
      showRecommend: function () {
        var t, e, n, i;
        return (
          this.recommendId &&
          (null ==
          (e = null == (t = this.recommendData) ? void 0 : t.related_stocks)
            ? void 0
            : e.length) &&
          (null ==
          (i = null == (n = this.recommendData) ? void 0 : n.related_stocks)
            ? void 0
            : i.length)
        );
      },
    }),
    n(t, "watch", {
      currentTab: function (t, e) {
        switch (t) {
          case w.TAB_LIST.POSITION:
            this.MT.report("asset", "position", "click"),
              (this.entrusFold = !0),
              (this.positionFold = !0),
              this.positionList.length > 2 && this.positionFold
                ? (this.swiperHeight = Q)
                : 0 === this.positionList.length
                ? (this.swiperHeight = J)
                : (this.swiperHeight =
                    D * (125 * this.positionList.length + 80) + "px");
            break;
          case w.TAB_LIST.ENTRUST:
            this.MT.report("asset", "entrust", "click"),
              (this.entrusFold = !0),
              (this.positionFold = !0),
              this.entrustList.length > 2 && this.entrusFold
                ? (this.swiperHeight = Q)
                : 0 === this.entrustList.length && this.entrusFold
                ? (this.swiperHeight = J)
                : (this.swiperHeight =
                    D * (125 * this.entrustList.length + 80) + "px");
            break;
          case w.TAB_LIST.HISTORY:
            (this.entrusFold = !0),
              (this.positionFold = !0),
              this.MT.report("asset", "history", "click");
            var n = this.nowHistoryMonth
              ? this.historyList[this.nowHistoryMonth].length
              : 0;
            this.historyMonthLength
              ? (this.swiperHeight =
                  D * (90 * this.historyMonthLength + 125 * n) + "px")
              : (this.swiperHeight = J),
              this.measureHistoryOverflow();
        }
        this.isLogin &&
          this.mockTradeSwitch &&
          this.hasSignAgreement &&
          ((this.MT.currentTab = t), this.MT.updateAssetData());
      },
      urankStatus: function (t, e) {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n, o, s, r;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ("",
                        (o =
                          this.positionList.length > 0
                            ? +(null == (e = this.urank) ? void 0 : e.score) >=
                              0
                              ? w.PROFIT_STATUS.PROFIT
                              : w.PROFIT_STATUS.LOSS
                            : +(null == (n = this.urank) ? void 0 : n.score) > 0
                            ? w.PROFIT_STATUS.PROFIT
                            : +this.urank.score < 0
                            ? w.PROFIT_STATUS.LOSS
                            : w.PROFIT_STATUS.EMPTY),
                        (this.profitStatus = o),
                        (s = ""),
                        (s =
                          +this.profitStatus > 0
                            ? "shareconfig_win"
                            : +this.profitStatus < 0
                            ? "shareconfig_los"
                            : "shareconfig_blc"),
                        (t.t0 = m.isEmpty(this.baseConfig)),
                        !t.t0)
                      ) {
                        t.next = 8;
                        break;
                      }
                      return (t.next = 8), this.getActConfig();
                    case 8:
                      (r = m.sample(this.baseConfig[s])),
                        (this.shareConfig = r),
                        (this.cardTitleArr =
                          r && r.card_title && r.card_title.split("\\n"));
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      showPrizeModal: function (t, e) {
        this.MT.showPrizeModal = t;
      },
      isLogin: function (t, e) {
        this.isLogin = t;
      },
    }),
    n(t, "methods", {
      clearRecommendData: function () {
        (this.recommendId = ""),
          (this.recommendData = null),
          (this.recommendDataLoaded = !1);
      },
      airecommendData: function (t) {
        this.$refs.aiRecommendRef &&
          (t.length > 0
            ? this.$refs.aiRecommendRef.setStockList(t)
            : this.$refs.aiRecommendRef.setSingleStock(t)),
          this.checkPendingShowPrizeModal();
      },
      finishOrder: function () {
        this.init(), this.checkPendingShowPrizeModal();
      },
      checkPendingShowPrizeModal: function () {
        this.pendingShowPrizeModal &&
          ((this.pendingShowPrizeModal = !1),
          (this.showPrizeModal = !0),
          (this.MT.showPrizeModal = !0));
      },
      showMoreAiRecommend: function () {
        this.$refs.aisemiList && this.$refs.aisemiList.showMoreAiRecommend();
      },
      reInit: function () {
        this.stockBridge.aegisReportEvent("MOCKTRADE-REINIT"),
          (this.boardLoading = !0),
          this.init();
      },
      getActConfig: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      },
      init: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e = this;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), this.MT.loadFeatureFlags();
                    case 2:
                      return (
                        (this.feeFeatureEnabled = this.MT.feeFeatureEnabled),
                        this.boardTimer && clearTimeout(this.boardTimer),
                        (this.boardTimer = setTimeout(function () {
                          e.boardLoading = !1;
                        }, 3e3)),
                        this.stockBridge.aegisReportEvent(
                          "MOCKTRADE-BEFORE-GETUSERINFO"
                        ),
                        (t.next = 8),
                        this.MT.getUserInfo()
                      );
                    case 8:
                      return (
                        this.stockBridge.aegisReportEvent(
                          "MOCKTRADE-AFTER-GETUSERINFO"
                        ),
                        this.bindListeners(),
                        this.MT.updateAssetData(),
                        (this.isLogin = this.MT.isLogin),
                        (t.next = 14),
                        this.getBulletinConfig()
                      );
                    case 14:
                      this.setScreenType(), this.MT.getRankData();
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      setSwiperindex: function (t) {
        this.$refs.homeSwiper.setSwiperindex(t);
      },
      isShowActTask: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n, o;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e = !1),
                        (n = ""),
                        !(
                          this.info &&
                          this.info.taskInfo &&
                          this.info.taskInfo.act_actid &&
                          this.info.taskInfo.act_tid &&
                          this.info.taskInfo.act_id
                        ))
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (
                        (t.next = 4),
                        _.ActTaskController.isTaskDone(this.info.taskInfo)
                      );
                    case 4:
                      (o = t.sent) &&
                        o.done &&
                        ((e = !parseInt(o.done, 10)),
                        (n = o.reward_desc),
                        (this.rewardDesc = n));
                    case 6:
                      return t.abrupt("return", { status: e, reward_desc: n });
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      closeBubble: function () {
        this.showBubble = !1;
      },
      bindHook: function () {
        this.pageShowHandler();
      },
      pageShowHandler: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e,
              n = this;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      this.isLogin &&
                        this.mockTradeSwitch &&
                        this.MT.updateAssetData(),
                        (this.showBubble = !1),
                        (e = this.isAndroid ? 2e3 : 600),
                        setTimeout(function () {
                          n.doAct();
                        }, e);
                    case 3:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      doAct: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n, o, s;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        !(
                          this.info &&
                          this.info.taskInfo &&
                          this.info.taskInfo.act_actid
                        )
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 3), this.isShowActTask();
                    case 3:
                      (e = t.sent),
                        (n = e.status),
                        (o = e.reward_desc),
                        n
                          ? ((s = this.popupConfig.text || ""),
                            this.popupConfig &&
                              s &&
                              (this.popupConfig.text = s.replace(
                                "reward_desc",
                                o || ""
                              )),
                            (this.showBubble = !0))
                          : (this.showBubble = !1);
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      onHide: function () {
        this.MT.stopAssetTimer();
      },
      bindListeners: function () {
        var t = this;
        this.MT.on(z, function () {
          t.h5userinfo = t.MT.h5userinfo;
        }),
          this.MT.on(q, function () {
            t.isOffline = t.MT.isOffline;
          }),
          this.MT.on(x, function () {
            t.stockBridge.aegisReportEvent("MOCKTADE-MT-ISLOGIN", {
              ext4: t.MT.isLogin,
            }),
              (t.isLogin = t.MT.isLogin);
          }),
          this.MT.on(H, function () {
            t.showDialog = t.MT.isFirstIn;
          }),
          this.MT.on(B, function () {
            (t.assetInfo = p({}, t.MT.assetInfo)),
              (t.positionList = t.MT.positionList),
              t.currentTab === w.TAB_LIST.POSITION &&
                (t.positionList.length > 2 && t.positionFold
                  ? (t.swiperHeight = Q)
                  : 0 === t.positionList.length
                  ? (t.swiperHeight = J)
                  : (t.swiperHeight =
                      D * (125 * t.positionList.length + 80) + "px")),
              (function (t) {
                try {
                  (t.earnTodayCls = C(t.earnToday, ["10000:52", "100000:48"])),
                    (t.earnTotalCls = C(t.earnTotal, ["100000000:22"])),
                    (t.earnTodayCN = L(t.earnToday, 1e6)),
                    (t.earnTotalCN = L(t.earnTotal));
                } catch (t) {}
              })(t.assetInfo),
              t.positionList.forEach(function (t) {
                !(function (t) {
                  try {
                    var e = ["10000:28", "100000:24", "10000000:22"];
                    (t.priceCls = C(t.price, e)),
                      (t.holdNumCls = C(t.holdNum, e)),
                      (t.earnTodayCls = C(t.earnToday, e)),
                      (t.earnTotalCls = C(t.earnTotal, e)),
                      (t.holdNum = L(t.holdNum)),
                      (t.earnTodayCN = L(t.earnToday)),
                      (t.earnTotalCN = L(t.earnTotal));
                  } catch (t) {}
                })(t);
              }),
              t.setNavs(),
              t.updateResetCardStatus(),
              (t.hasUsedReset = t.MT.resetNum > 0);
          }),
          this.MT.on(P, function () {
            (t.entrustList = t.MT.entrustList),
              t.entrustList.length && (t.hasNoHistory = !1),
              t.currentTab === w.TAB_LIST.ENTRUST &&
                (t.entrustList.length > 2 && t.entrusFold
                  ? (t.swiperHeight = Q)
                  : 0 === t.entrustList.length && t.entrusFold
                  ? (t.swiperHeight = J)
                  : (t.swiperHeight =
                      D * (125 * t.entrustList.length + 80) + "px")),
              t.setNavs();
          }),
          this.MT.on(F, function (e) {
            t.$set(t.entrustList, e, t.MT.entrustList[e]);
          }),
          this.MT.on(V, function () {
            if (
              ((t.historyMonthList = t.MT.historyMonthList),
              (t.historyList = JSON.parse(JSON.stringify(t.MT.historyList))),
              t.currentTab === w.TAB_LIST.HISTORY)
            ) {
              var e = t.nowHistoryMonth
                ? t.historyList[t.nowHistoryMonth].length
                : 0;
              t.historyMonthLength
                ? (t.swiperHeight =
                    D * (90 * t.historyMonthLength + 125 * e) + "px")
                : (t.swiperHeight = J);
            }
            t.historyMonthList.length &&
              null === t.nowHistoryMonth &&
              (t.nowHistoryMonth = t.historyMonthList[0].period),
              (t.hasNoHistory = !t.historyMonthList.length),
              (t.boardShow = !0),
              t.measureHistoryOverflow();
          }),
          this.MT.on(W, function () {
            (t.recommendId = t.MT.recommendId),
              (t.recommendData = t.MT.recommendData),
              (t.recommendDataLoaded = !0);
          }),
          this.MT.on(U, function (e) {
            "string" == typeof e &&
              ((t.errorMsg = e),
              -1 !== w.config.fitPhoneDialogMsg.indexOf(t.errorMsg) &&
                "zxg" === w.config.cfgPlatform &&
                t.isVersionPass970 &&
                (t.MT.report("asset", "fit_phone_popup", "show", {
                  yy_public_str1: t.errorMsg || "",
                }),
                (t.errorBtnText = "前往福利中心")));
          }),
          this.MT.on(G, function () {
            var e;
            (t.canvasShow = !0),
              (t.urank =
                (null == (e = t.MT.rankHome) ? void 0 : e.urank) || t.urank),
              (t.rankHome = t.MT.rankHome || {}),
              (t.rankList =
                t.MT.rankHome.rank_list && t.MT.rankHome.rank_list.length > 5
                  ? t.MT.rankHome.rank_list.splice(0, 5)
                  : t.MT.rankHome.rank_list || []),
              t.MT.showPrizeModal && t.isFromAI
                ? (t.pendingShowPrizeModal = !0)
                : (t.showPrizeModal = t.MT.showPrizeModal);
          }),
          this.MT.on(j, function () {
            t.rewardData = t.MT.rewardData;
            var e = t.rewardData;
            e && e.reward_desc && (t.showWeekRewardModal = !0);
          }),
          this.MT.on(Y, function () {
            if (
              t.MT.vtoolsCfg &&
              t.MT.vtoolsCfg.mocktrade_eighth &&
              t.MT.vtoolsCfg.mocktrade_eighth[w.config.cfgPlatform]
            ) {
              t.vtoolsCfg =
                t.MT.vtoolsCfg.mocktrade_eighth[w.config.cfgPlatform];
              var e = new Date().getTime();
              e >= t.vtoolsCfg.startTime && e <= t.vtoolsCfg.endTime
                ? (t.isAct = !0)
                : (t.isAct = !1);
            } else t.isAct = !1;
          }),
          this.MT.on(K, function () {
            (t.showResetConfirm = !1),
              t.stockBridge.toast("重置成功", "success"),
              (t.canReset = !1),
              (t.showResetRedDot = !1),
              (t.resetLoading = !1);
          }),
          this.MT.on($, function (e) {
            (t.resetLoading = !1), (t.errorMsg = e || "重置失败，请稍后重试");
          });
      },
      goCampusChaogu: function () {
        var t = this;
        this.MT.report("asset", "banner", "click"),
          this.vtoolsCfg &&
            this.vtoolsCfg.bannerLink &&
            setTimeout(function () {
              location.href = t.vtoolsCfg.bannerLink;
            }, 100);
      },
      setNavs: function () {
        (this.navs = [
          "持仓" +
            (this.positionList.length
              ? "(".concat(this.positionList.length, ")")
              : ""),
          "今日委托("
            .concat(this.assetInfo.entrustTodayPending, "/")
            .concat(this.assetInfo.entrustTodayTotal, ")"),
          "交易记录",
        ]),
          0 === this.positionList.length
            ? ((this.tablineStyle = { "margin-left": (32 * D) / 2 + "px" }),
              (this.tabNavActivedmarginleft = (32 * D) / 2))
            : this.positionList.length > 0 && this.positionList.length < 10
            ? ((this.tablineStyle = { "margin-left": (68 * D) / 2 + "px" }),
              (this.tabNavActivedmarginleft = (68 * D) / 2))
            : this.positionList.length >= 10 && this.positionList.length < 100
            ? ((this.tablineStyle = { "margin-left": (85 * D) / 2 + "px" }),
              (this.tabNavActivedmarginleft = (85 * D) / 2))
            : this.positionList.length >= 100 && this.positionList.length < 1e3
            ? ((this.tablineStyle = { "margin-left": (102 * D) / 2 + "px" }),
              (this.tabNavActivedmarginleft = (102 * D) / 2))
            : this.positionList.length >= 1e3 &&
              ((this.tablineStyle = { "margin-left": (118 * D) / 2 + "px" }),
              (this.tabNavActivedmarginleft = (118 * D) / 2));
      },
      toggleMonthGroup: function (t) {
        var e;
        if (this.nowHistoryMonth === t)
          this.MT.report("asset", "historymonth.fold", "click"),
            (this.nowHistoryMonth = ""),
            (this.swiperHeight = D * (90 * this.historyMonthLength) + "px");
        else {
          this.MT.report("asset", "historymonth.unfold", "click"),
            (this.nowHistoryMonth = t);
          var n =
            (null ==
            (e = this.historyMonthList.find(function (e) {
              return e.period === t;
            }))
              ? void 0
              : e.count) || 0;
          (this.swiperHeight =
            D * (90 * this.historyMonthLength + 125 * n) + "px"),
            (this.historyList[t] && this.historyList[t].length) ||
              ((this.MT.historyPageSeq = 0),
              (this.MT.historyLoadComplete = !1),
              this.MT.getHistoryListByMonth(t));
        }
      },
      changepositionFold: function () {
        (this.positionFold = !this.positionFold),
          (this.swiperHeight = this.positionFold
            ? Q
            : D * (125 * this.positionList.length + 56 + 82) + "px");
      },
      changeentrusFold: function () {
        (this.entrusFold = !this.entrusFold),
          (this.swiperHeight = this.entrusFold
            ? Q
            : D * (125 * this.entrustList.length + 56 + 82) + "px");
      },
      onHistoryContainerScroll: function (t) {
        var e = t.offsetY;
        this.historyContainerHeight &&
          Math.abs(e - this.historyContainerHeight) < 50 &&
          k
            .throttle(function () {
              this.MT.stopAssetTimer(),
                this.MT.getHistoryListByMonth(this.nowHistoryMonth);
            }, 1e3)
            .call(this);
      },
      getTextDisplayLength: function (t) {
        return Array.from(String(t || "")).reduce(function (t, e) {
          return e.charCodeAt(0) > 255 ? t + 2 : t + 1;
        }, 0);
      },
      getHistoryOverflowText: function (t, e) {
        if (!t) return "";
        switch (e) {
          case "name":
            return t.name || "";
          case "volume":
            return "".concat(t.number || "", "股");
          case "amount":
            return t.settlementAmount || "--";
          default:
            return "";
        }
      },
      isHistoryTextOverflow: function (t, e) {
        var n = Z[e];
        return (
          "amount" === e && (n = Z.amountWithFee),
          !!n &&
            this.getTextDisplayLength(this.getHistoryOverflowText(t, e)) > n
        );
      },
      getHistoryOverflowClass: function (t, e) {
        return this.feeFeatureEnabled
          ? { "is-overflow": this.isHistoryFieldOverflow(t, e) }
          : "";
      },
      isHistoryFieldOverflow: function (t, e) {
        if (this.isHistoryTextOverflow(t, e)) return !0;
        var n = this.historyOverflowMap[null == t ? void 0 : t.id];
        return !(!n || !n[e]);
      },
      measureHistoryOverflow: function () {
        var t = this;
        this.feeFeatureEnabled &&
          ("undefined" != typeof document && document.body
            ? this.$nextTick(function () {
                t.measureHistoryOverflowH5();
              })
            : this.measureHistoryOverflowMp());
      },
      measureHistoryOverflowH5: function () {
        var t = this,
          e = document.querySelectorAll(".position-container--row-history");
        if (e.length) {
          (this._measureTmp && this._measureTmp.isConnected) ||
            ((this._measureTmp = document.createElement("span")),
            (this._measureTmp.style.cssText =
              "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;"),
            document.body.appendChild(this._measureTmp));
          var n = this._measureTmp,
            i = function (t, e, i) {
              return (
                (n.style.fontSize = e),
                (n.style.fontFamily = i || "sans-serif"),
                (n.textContent = t || ""),
                n.getBoundingClientRect().width
              );
            };
          e.forEach(function (e) {
            var n = e.querySelector(".history-stock__name");
            if (n) {
              var o = (n.textContent || "").trim(),
                s = window.getComputedStyle(n).fontFamily,
                r = i(o, "28px", s) > 122 || t.getTextDisplayLength(o) > Z.name;
              n.classList.toggle("is-overflow", r);
            }
            var a = e.querySelector(".history-volume__number");
            if (a) {
              var l = (a.textContent || "").trim(),
                u = window.getComputedStyle(a).fontFamily,
                c =
                  i(l, "28px", u) > 128 || t.getTextDisplayLength(l) > Z.volume;
              a.classList.toggle("is-overflow", c);
            }
            var h = e.querySelector(".history-amount__value");
            if (h) {
              var d = h.querySelector(".settlement-amount__text");
              if (d) {
                var f = Z.amountWithFee,
                  p = (d.textContent || "").trim(),
                  g = window.getComputedStyle(d).fontFamily,
                  m = i(p, "28px", g) > 152 || t.getTextDisplayLength(p) > f;
                h.classList.toggle("is-overflow", m);
              }
            }
          });
        }
      },
      measureHistoryOverflowMp: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n, o, s, r, a, l, u, c, h, d, f;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e = this.nowHistoryMonth),
                        (n =
                          (e && this.historyList && this.historyList[e]) ||
                          []) && n.length)
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      if (
                        ((o = []),
                        (s = new Set()),
                        (r = {}),
                        n.forEach(function (t) {
                          if (t && t.id) {
                            r[t.id] = t;
                            var e = t.name || "",
                              n = "".concat(t.id, "|name|").concat(e);
                            s.has(n) ||
                              (s.add(n),
                              o.push({
                                orderId: t.id,
                                field: "name",
                                text: e,
                              }));
                            var i = "".concat(t.number || "", "股"),
                              a = "".concat(t.id, "|volume|").concat(i);
                            s.has(a) ||
                              (s.add(a),
                              o.push({
                                orderId: t.id,
                                field: "volume",
                                text: i,
                              }));
                            var l = t.settlementAmount || "--",
                              u = "".concat(t.id, "|amount|").concat(l);
                            s.has(u) ||
                              (s.add(u),
                              o.push({
                                orderId: t.id,
                                field: "amount",
                                text: l,
                              }));
                          }
                        }),
                        o.length)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      (a = {}), (l = 0);
                    case 8:
                      if (!(l < o.length)) {
                        t.next = 33;
                        break;
                      }
                      return (
                        (u = o[l]),
                        (this.measureViewText = u.text),
                        (t.next = 13),
                        this.$nextTick()
                      );
                    case 13:
                      return (t.next = 15), this.getMeasureViewWidth();
                    case 15:
                      if (null !== (c = t.sent) && 0 !== c) {
                        t.next = 18;
                        break;
                      }
                      return t.abrupt("continue", 30);
                    case 18:
                      (h = this.getTextDisplayLength(u.text)),
                        (d = !1),
                        (t.t0 = u.field),
                        (t.next =
                          "name" === t.t0
                            ? 23
                            : "volume" === t.t0
                            ? 25
                            : "amount" === t.t0
                            ? 27
                            : 29);
                      break;
                    case 23:
                      return (d = c > 122 || h > Z.name), t.abrupt("break", 29);
                    case 25:
                      return (
                        (d = c > 128 || h > Z.volume), t.abrupt("break", 29)
                      );
                    case 27:
                      return (
                        (d = c > 152 || h > Z.amountWithFee),
                        t.abrupt("break", 29)
                      );
                    case 29:
                      d &&
                        (a[u.orderId] || (a[u.orderId] = {}),
                        (a[u.orderId][u.field] = !0));
                    case 30:
                      l++, (t.next = 8);
                      break;
                    case 33:
                      (this.measureViewText = ""),
                        (f = p({}, this.historyOverflowMap)),
                        Object.keys(a).forEach(function (t) {
                          f[t] = p(p({}, f[t] || {}), a[t]);
                        }),
                        (this.historyOverflowMap = f);
                    case 36:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      getMeasureViewWidth: function () {
        var t = this;
        return new Promise(function (e) {
          try {
            m.index
              .createSelectorQuery()
              .in(t)
              .select(".measure-view")
              .boundingClientRect(function (t) {
                e(t && "number" == typeof t.width ? t.width : 0);
              })
              .exec();
          } catch (t) {
            e(null);
          }
        });
      },
      onDialogHide: function () {
        this.showDialog = !1;
      },
      onTapTab: function (t) {
        this.currentTab = t;
      },
      onDragging: function () {},
      onDropped: function (t) {
        this.currentTab = t.currentSlide;
      },
      onSwiperChange: function (t) {
        var e,
          n = t.detail && (null == (e = t.detail) ? void 0 : e.current);
        this.currentTab = n;
      },
      onTabnavChange: function (t) {
        this.currentTab = t;
      },
      getNumColor: function (t) {
        try {
          if (!t) return this.style.delt;
          var e = +t.replace(/,/g, "");
          return isNaN(e)
            ? this.style.delt
            : e > 0
            ? this.style.up
            : e < 0
            ? this.style.down
            : this.style.delt;
        } catch (t) {
          return this.style.delt;
        }
      },
      cancelOrder: function (t) {
        this.MT.report("asset", "entrustitem", "cancel"),
          this.MT.cancelOrder(t);
      },
      getDateText: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Date(),
          e = "".concat(t.getMonth() + 1).padStart(2, "0"),
          n = "".concat(t.getDate()).padStart(2, "0");
        return "".concat(t.getFullYear(), "-").concat(e, "-").concat(n);
      },
      getBulletinConfigText: function (t, e) {
        return ((null == t ? void 0 : t[e]) || "").replace(/\/n/g, "\n");
      },
      isValidBulletinTime: function (t) {
        var e = new Date();
        if (t.begin_time && e < new Date(t.begin_time)) return !1;
        if (t.end_time && e > new Date(t.end_time)) return !1;
        if (!t.show_loop || !t.detail_day || "day" === t.show_loop) return !0;
        var n = String(t.detail_day)
          .split(",")
          .map(function (t) {
            return +t;
          });
        return "month" === t.show_loop
          ? n.includes(e.getDate())
          : "week" !== t.show_loop || n.includes(e.getDay());
      },
      getBulletinLockKey: function (t) {
        return "mocktrade_bulletin_".concat(
          t._id || t.id || t.act_id || t.bulletin_type
        );
      },
      isBulletinLocked: function (t) {
        var e = m.StockBridge.getStorage(this.getBulletinLockKey(t));
        return "never" === t.day_frequency
          ? "1" === e
          : "only" === t.day_frequency && e === this.getDateText();
      },
      lockBulletinConfig: function (t) {
        "never" !== (null == t ? void 0 : t.day_frequency)
          ? "only" === (null == t ? void 0 : t.day_frequency) &&
            m.StockBridge.setStorage(
              this.getBulletinLockKey(t),
              this.getDateText()
            )
          : m.StockBridge.setStorage(this.getBulletinLockKey(t), "1");
      },
      getPriorityBulletin: function (t, e) {
        var n = this,
          i = this.shownBulletinIds[e] || [];
        return t
          .filter(function (t) {
            return (
              t.bulletin_type === e &&
              n.isValidBulletinTime(t) &&
              !n.isBulletinLocked(t) &&
              !i.includes(t._id || t.id)
            );
          })
          .sort(function (t, e) {
            return (+t.priority || 0) - (+e.priority || 0);
          })[0];
      },
      markBulletinShown: function (t) {
        var e = (null == t ? void 0 : t._id) || (null == t ? void 0 : t.id);
        if (e) {
          var n = t.bulletin_type;
          this.shownBulletinIds[n] || this.$set(this.shownBulletinIds, n, []),
            this.shownBulletinIds[n].includes(e) ||
              this.shownBulletinIds[n].push(e);
        }
      },
      getNextBulletin: function (t) {
        var e = this,
          n = this.shownBulletinIds[t] || [];
        return this.bulletinConfigs
          .filter(function (i) {
            return (
              i.bulletin_type === t &&
              e.isValidBulletinTime(i) &&
              !e.isBulletinLocked(i) &&
              !n.includes(i._id || i.id)
            );
          })
          .sort(function (t, e) {
            return (+t.priority || 0) - (+e.priority || 0);
          })[0];
      },
      getBulletinConfig: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n, o;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        m.Wuji.get({
                          appid: "act",
                          schemaid: "bulletin_config",
                          filter: encodeURIComponent(
                            " act_id = 'mocktrade' & act_router = 'mocktrade/home' & switch = 1 "
                          ),
                        }).then(function (t) {
                          return t.data || t || [];
                        })
                      );
                    case 3:
                      (e = t.sent),
                        (this.bulletinConfigs = e),
                        (n = this.getPriorityBulletin(e, "bulletin")),
                        (o = this.getPriorityBulletin(e, "modal")),
                        (this.bulletinConfigData = n),
                        (this.modalConfigData = o),
                        (this.bulletinVisible = !!(null == n
                          ? void 0
                          : n.bulletin_theme)),
                        (this.bulletinText = this.getBulletinConfigText(
                          n,
                          "bulletin_theme"
                        )),
                        (this.bulletinDetailText =
                          this.getBulletinConfigText(o, "bulletin_content") ||
                          this.getBulletinConfigText(n, "bulletin_content")),
                        (null == o ? void 0 : o.bulletin_content) &&
                          (this.bulletinDetailVisible = !0),
                        (t.next = 12);
                      break;
                    case 9:
                      (t.prev = 9),
                        (t.t0 = t.catch(0)),
                        (this.bulletinVisible = !1);
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 9]]
            );
          })
        );
      },
      showBulletinDetail: function () {
        var t = this.getBulletinConfigText(
          this.bulletinConfigData,
          "bulletin_content"
        );
        t && ((this.bulletinDetailText = t), (this.bulletinDetailVisible = !0));
      },
      closeBulletin: function () {
        this.lockBulletinConfig(this.bulletinConfigData),
          this.markBulletinShown(this.bulletinConfigData);
        var t = this.getNextBulletin("bulletin");
        (null == t ? void 0 : t.bulletin_theme)
          ? ((this.bulletinConfigData = t),
            (this.bulletinText = this.getBulletinConfigText(
              t,
              "bulletin_theme"
            )),
            this.bulletinDetailVisible ||
              (this.bulletinDetailText = this.getBulletinConfigText(
                t,
                "bulletin_content"
              )))
          : ((this.bulletinVisible = !1),
            (this.bulletinConfigData = null),
            this.bulletinDetailVisible || (this.bulletinDetailText = ""));
      },
      closeBulletinDetail: function () {
        if (this.modalConfigData) {
          this.lockBulletinConfig(this.modalConfigData),
            this.markBulletinShown(this.modalConfigData);
          var t = this.getNextBulletin("modal");
          if (null == t ? void 0 : t.bulletin_content)
            return (
              (this.modalConfigData = t),
              void (this.bulletinDetailText = this.getBulletinConfigText(
                t,
                "bulletin_content"
              ))
            );
          this.modalConfigData = null;
        }
        (this.bulletinDetailVisible = !1),
          (this.bulletinDetailText = this.getBulletinConfigText(
            this.bulletinConfigData,
            "bulletin_content"
          ));
      },
      showFeeDetail: function (t) {
        var e = this;
        this.feeFeatureEnabled &&
          (this.bulletinDetailVisible && this.closeBulletinDetail(),
          setTimeout(function () {
            (e.feeDetailData = {
              fee: t.fee || "0.00",
              settlementAmount: t.settlementAmount || "0.00",
            }),
              (e.feeDetailVisible = !0);
          }, 100));
      },
      closeFeeDetail: function () {
        this.feeDetailVisible = !1;
      },
      hideErrorMsg: function () {
        if (
          -1 !== w.config.fitPhoneDialogMsg.indexOf(this.errorMsg) &&
          "zxg" === w.config.cfgPlatform &&
          this.isVersionPass970
        ) {
          this.MT.report("asset", "fit_phone_popup", "click", {
            yy_public_str1: this.errorMsg || "",
          });
          v.push(
            "https://wzq.tenpay.com/activity/page/welwareCenter/#/index",
            "h5",
            { showNav: !0, StockWebviewJSBridgeEnabled: !0 }
          );
        }
        this.errorMsg = "";
      },
      goStockDetail: function (t) {
        switch (this.currentTab) {
          case w.TAB_LIST.POSITION:
            this.MT.report("asset", "positionitem", "click");
            break;
          case w.TAB_LIST.ENTRUST:
            this.MT.report("asset", "entrustitem", "click");
            break;
          case w.TAB_LIST.HISTORY:
            this.MT.report("asset", "historyitem", "click");
        }
        if ("mpweapp" === m.ShellTypeEnum.SHY) {
          var e = t.fullCode || t.symbol;
          v.push(
            "qqstock://com.tencent.shy.mock_trade/mockdeal?code="
              .concat(e, "&srcsite=")
              .concat(this.srcsite),
            "shy",
            { showNav: !0, title: "模拟炒股" }
          );
        } else
          v.push("mockdeal", "hippy", {
            showNav: !0,
            code: t.fullCode || t.symbol,
            srcsite: this.srcsite,
          });
      },
      goSearch: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n, o, s;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), v.getUrlParam("task_id");
                    case 2:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 5;
                        break;
                      }
                      t.t0 = "";
                    case 5:
                      return (
                        (e = t.t0), (t.next = 8), v.getUrlParam("task_tid")
                      );
                    case 8:
                      if (((t.t1 = t.sent), t.t1)) {
                        t.next = 11;
                        break;
                      }
                      t.t1 = "";
                    case 11:
                      (n = t.t1),
                        this.MT.report("asset", "search", "click"),
                        (o = {
                          showNav: !0,
                          title: "模拟炒股",
                          srcsite: this.srcsite,
                        }),
                        e &&
                          n &&
                          (o = Object.assign(o, { task_id: e, task_tid: n })),
                        this.infoParams &&
                          this.infoParams.act_actid &&
                          this.infoParams.act_actid &&
                          this.infoParams.act_tid &&
                          this.infoParams.act_id &&
                          (o = Object.assign(o, {
                            taskInfo: JSON.stringify(this.infoParams),
                          })),
                        "mpweapp" === m.ShellTypeEnum.SHY
                          ? ((s = ["srcsite=".concat(this.srcsite)]),
                            o.task_id && s.push("task_id=".concat(o.task_id)),
                            o.task_tid &&
                              s.push("task_tid=".concat(o.task_tid)),
                            o.taskInfo &&
                              s.push(
                                "taskInfo=".concat(
                                  encodeURIComponent(o.taskInfo)
                                )
                              ),
                            v.push(
                              "qqstock://com.tencent.shy.mock_trade/mockdeal?".concat(
                                s.join("&")
                              ),
                              "shy",
                              { showNav: !0, title: "模拟炒股" }
                            ))
                          : v.push("mockdeal", "hippy", o);
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      goXG: function () {
        v.push("GotoAppLocation", "qqstock", {
          showNav: !0,
          path: "hangqing/xuangu",
        });
      },
      onLogin: function () {
        var t = this;
        this.MT.report("asset", "login", "click"),
          S.login()
            .then(function (e) {
              return g(
                t,
                null,
                i().mark(function t() {
                  return i().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), this.MT.getUserInfo(!0);
                          case 2:
                            (this.isLogin = !0), this.init();
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            })
            .catch(function (t) {});
      },
      onClosePage: function () {
        b.navigator.close();
      },
      goWzqRule: function () {
        this.MT.report("asset", "rule", "open"),
          v.push("mockrule", "hippy", {
            title: "模拟炒股",
            showNav: !0,
            ruleid: encodeURIComponent("mock_trade_rules"),
          });
      },
      showTaskLog: function () {
        this.showLog = !0;
      },
      closeTaskLog: function () {
        this.showLog = !1;
      },
      setScreenType: function () {
        var t = T.appInfo.getWindowInfo(),
          e = t.os,
          n = t.windowWidth;
        "ios" === e && n >= 414 && (this.screenType = "large");
      },
      onItemLayout: function (t, e, n) {
        if (this.positionList && this.positionList.length > 0 && n.height > 0) {
          var i = this.positionList.length * n.height;
          this.styleContainerObj = { height: "".concat(i, "px") };
        }
      },
      layoutTabNav: function (t) {
        this.tabNavHeight = t.height;
      },
      layoutListHeader: function (t) {
        this.listHeaderHeight = t.height;
      },
      layoutDropDown: function (t) {
        this.dropDownHeight = t.height;
      },
      toggleList: function () {
        this.fold = !this.fold;
        var t = 3;
        t = this.fold ? t : this.positionList.length;
      },
      takeSnapshotAndShare: function (t, e, n) {
        var i = { to: e, type: "image", params: { fromView: t } };
        _.bridgeInit
          .bridgeCall("SdSnapshotModule", "takeSnapshotAndShare", i)
          .then(function (t) {
            n();
          })
          .catch(function (t) {});
      },
      share: function () {
        _.bridgeInit
          .bridgeCall("SdShareModule", "shareTo", {
            to: ["wx", "pyq"],
            type: "link",
            params: {
              title: "Hippy 分享链接测试",
              summary: "这是来自高山的祝福",
              url: "http://www.qq.com",
              iconUrl: "",
            },
          })
          .then(function (t) {})
          .catch(function (t) {});
      },
      onShowShare: function () {
        this.resetLoading
          ? this.stockBridge.toast("数据更新中，请稍后分享")
          : (this.showWeekRewardModal ||
              this.MT.report("asset", "share", "click"),
            (this.showShare = !0),
            (this.snapShot = !0),
            (this.showWeekRewardModal = !1));
      },
      onShare: function (t) {
        var e = this.$refs.boxitem.nodeId;
        this.takeSnapshotAndShare(e, t, this.shareCb);
      },
      onHideShare: function () {
        (this.showShare = !1), (this.snapShot = !1);
      },
      shareCb: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ((this.onHideShare(), (t.t0 = this.inAct), !t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (
                        (t.next = 5), _.ActTaskController.do8thznqShareTask()
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      openPrizeModal: function () {
        (this.showPrizeModal = !1),
          (this.MT.showPrizeModal = this.showPrizeModal),
          this.rankHome.reward_ticket &&
            (this.MT.getRewardData(
              this.rankHome.reward_rank_id,
              this.rankHome.reward_ticket,
              this.isVersionPass970
            ),
            this.$emit(j)),
          this.MT.report("asset", "prizemodal", "click");
      },
      closePrizeModal: function () {
        (this.showPrizeModal = !1),
          (this.MT.showPrizeModal = this.showPrizeModal);
      },
      closeRewardModal: function () {
        this.showWeekRewardModal = !1;
      },
      init2: function () {
        var t = this;
        (this.info =
          "string" == typeof this.info ? JSON.parse(this.info) : this.info),
          this.stockBridge.busOn("growth-additionalArguments", function (e) {
            (t.testData = e.transmitInfo),
              (e = "string" == typeof e ? JSON.parse(e) : e) &&
                (t.info = e.transmitInfo);
          });
      },
      holdingTouchstart: function () {
        var t;
        (null == (t = this.$refs.homeSwiper) ? void 0 : t.disable) &&
          this.$refs.homeSwiper.disable();
      },
      holdingTouchend: function () {
        var t;
        (null == (t = this.$refs.homeSwiper) ? void 0 : t.enable) &&
          this.$refs.homeSwiper.enable();
      },
      pageInit: function () {
        this.init();
      },
      goRealAsset: function () {
        var t = this,
          e = "Iug21p007s035";
        "mp" === this.stockBridge.ENV && this.stockBridge.setChannel(e),
          this.MT.report("asset.list", "gotrade", "click", {
            fchannel_id_fm_i: e,
          }),
          setTimeout(function () {
            k.judgeGoAsset(t.h5userinfo, { stat_data: e, srcsite: t.srcsite });
          }, 300);
      },
      clkApplySnakeBar: function () {
        var t = this;
        R.report("guide", "mn_stocks_tips", "click", {
          yy_public_str1: { priority: this.guidePriority },
        }),
          (this.guideToApplyText = ""),
          setTimeout(function () {
            t.goRealAsset();
          }, 300);
      },
      showShareText: function () {
        this.shareTextFlag = !0;
      },
      handleShowMiniApply: function (t) {
        var e;
        t &&
          t.symbol &&
          (null == (e = this.$refs.miniApplyRef) ? void 0 : e.showStockTrade) &&
          this.$refs.miniApplyRef.showStockTrade(t.symbol);
      },
      handleResetEntryExpose: function () {
        this.stockBridge.report("yy.mocktrade.reset_btn_brow");
      },
      handleResetEntryClick: function () {
        this.stockBridge.report("yy.mocktrade.reset_btn_click"),
          (this.showResetModal = !0),
          this.showResetRedDot &&
            ((this.showResetRedDot = !1), this.MT.reportResetRedDotClick());
      },
      handleResetModalExpose: function () {
        this.stockBridge.report("yy.mocktrade.reset_pop_brow");
      },
      closeResetModal: function () {
        this.showResetModal = !1;
      },
      handleResetUse: function () {
        this.stockBridge.report("yy.mocktrade.reset_pop_use_click"),
          (this.showResetModal = !1),
          (this.showResetConfirm = !0);
      },
      handleResetConfirmExpose: function () {
        this.stockBridge.report("yy.mocktrade.reset_confirm_pop_brow");
      },
      handleResetConfirmCancel: function () {
        this.stockBridge.report("yy.mocktrade.reset_confirm_pop_cancel_click"),
          (this.showResetConfirm = !1);
      },
      confirmReset: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.stockBridge.report(
                          "yy.mocktrade.reset_confirm_pop_ok_click"
                        ),
                        (this.resetLoading = !0),
                        (t.next = 3),
                        this.MT.resetAccount()
                      );
                    case 3:
                      (e = t.sent),
                        (this.resetLoading = !1),
                        e &&
                          ((this.showResetConfirm = !1),
                          this.stockBridge.toast("重置成功", "success"),
                          (this.canReset = !1),
                          (this.showResetRedDot = !1),
                          this.MT.updateAssetData(),
                          this.MT.getRankData(),
                          this.MT.report("asset", "reset_card", "success"));
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      updateResetCardStatus: function () {
        return g(
          this,
          null,
          i().mark(function t() {
            var e, n;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((e = Math.floor(Date.now() / 1e3)),
                        !((n = parseInt(this.MT.resetEndTime, 10)) && e < n))
                      ) {
                        t.next = 14;
                        break;
                      }
                      if (
                        ((this.showResetEntry = !0),
                        (this.canReset = this.MT.canReset),
                        (this.resetEndTimeText = this.MT.getResetEndTimeText()),
                        !this.canReset)
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (t.next = 8), this.MT.queryResetRedDot();
                    case 8:
                      (this.showResetRedDot = t.sent), (t.next = 12);
                      break;
                    case 11:
                      this.showResetRedDot = !1;
                    case 12:
                      t.next = 15;
                      break;
                    case 14:
                      this.showResetEntry = !1;
                    case 15:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    }),
    n(t, "created", function () {
      return g(
        this,
        null,
        i().mark(function t() {
          var e,
            n,
            o,
            s,
            r,
            a,
            l = this;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (this.MT = new M()),
                      this.stockBridge.aegisReportEvent(
                        "MOCKTRADE-HOME-CREATED"
                      ),
                      (t.next = 4),
                      v.getUrlParam("transmitInfo")
                    );
                  case 4:
                    if (((t.t0 = t.sent), t.t0)) {
                      t.next = 7;
                      break;
                    }
                    t.t0 = {};
                  case 7:
                    return (
                      (this.info = t.t0),
                      (t.next = 10),
                      v.getUrlParam("srcsite")
                    );
                  case 10:
                    if (((t.t1 = t.sent), t.t1)) {
                      t.next = 13;
                      break;
                    }
                    t.t1 = "";
                  case 13:
                    if (((this.srcsite = t.t1), !this.isAndroid)) {
                      t.next = 18;
                      break;
                    }
                    (t.t2 = 0), (t.next = 22);
                    break;
                  case 18:
                    return (t.next = 20), T.appInfo.getSystemInfo();
                  case 20:
                    (t.t3 = t.sent.tabBarHeight), (t.t2 = t.t3 + 10);
                  case 22:
                    if (((this.safeArea = t.t2), "mp" !== m.StockBridge.ENV)) {
                      t.next = 28;
                      break;
                    }
                    (r = getCurrentPages()),
                      (a = r[r.length - 1]) &&
                        a.options &&
                        (this.fromScene = {
                          scene: a.options.scene,
                          type: a.options.type,
                          id: a.options.id,
                        }),
                      (t.next = 29);
                    break;
                  case 28:
                    this.fromScene = {
                      scene: this.$route.query.scene,
                      type: this.$route.query.type,
                      id: this.$route.query.id,
                    };
                  case 29:
                    return (
                      (this.showCustomNavbar =
                        null ==
                        (n = null == (e = getApp()) ? void 0 : e.globalData)
                          ? void 0
                          : n.ShowCustomNavbar),
                      null ==
                        (s = null == (o = getApp()) ? void 0 : o.globalData) ||
                        s.Event.on("ShowCustomNavbar", this, function (t) {
                          l.showCustomNavbar = t;
                        }),
                      this.stockBridge.aegisReportEvent(
                        "MOCKTRADE-HOME-BEFORE-INIT"
                      ),
                      (this.initPromise = this.init()),
                      this.stockBridge.aegisReportEvent(
                        "MOCKTRADE-HOME-AFTER-INIT"
                      ),
                      (t.next = 36),
                      this.getActConfig()
                    );
                  case 36:
                    this.$nextTick(function () {
                      l.bubbleNode = l.$refs.assetFooter;
                    }),
                      this.stockBridge.busOn("growth-onLogin", function (t) {
                        l.MT.getUserInfo(!0), (l.isLogin = !0), l.init();
                      }),
                      this.stockBridge.busOn("growth-onLogout", function (t) {
                        (l.isLogin = !1),
                          (l.rankList = []),
                          l.MT.initAssetData();
                      });
                  case 39:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    }),
    n(t, "mounted", function () {
      this.bindHook();
    }),
    n(t, "activated", function () {
      this.pageShowHandler();
    }),
    n(t, "deactivated", function () {
      this.onHide(), this.clearRecommendData();
    }),
    n(t, "beforeDestroy", function () {
      var t, e;
      this.MT.off(z),
        this.MT.off(q),
        this.MT.off(x),
        this.MT.off(H),
        this.MT.off(B),
        this.MT.off(P),
        this.MT.off(F),
        this.MT.off(V),
        this.MT.off(W),
        this.MT.off(U),
        this.MT.off(G),
        this.MT.off(j),
        this.MT.off(Y),
        this.MT.off(K),
        this.MT.off($),
        this.boardTimer && clearTimeout(this.boardTimer),
        this.MT.stopAssetTimer(),
        this._measureTmp &&
          this._measureTmp.parentNode &&
          this._measureTmp.parentNode.removeChild(this._measureTmp),
        (this._measureTmp = null),
        (this.historyOverflowMap = {}),
        (this.measureViewText = ""),
        null == (e = null == (t = getApp()) ? void 0 : t.globalData) ||
          e.Event.remove("ShowCustomNavbar", this),
        (this.MT.currentTab = void 0),
        (this.MT.showPrizeModal = !1),
        this.clearRecommendData(),
        this.stockBridge.busOff("growth-onLogin"),
        this.stockBridge.busOff("growth-onLogout"),
        this.stockBridge.busOff("growth-additionalArguments");
    }),
    t);
Array ||
  (
    m.resolveComponent("bulletin-bar") +
    m.resolveComponent("NewUserStock") +
    m.resolveComponent("ResetCardEntry") +
    m.resolveComponent("AiRecommend") +
    m.resolveComponent("NewUserRecommend") +
    m.resolveComponent("tab-slider") +
    m.resolveComponent("tab-view") +
    m.resolveComponent("empty-tips") +
    m.resolveComponent("tab-host") +
    m.resolveComponent("week-rank") +
    m.resolveComponent("MiniApply") +
    m.resolveComponent("AiRecommendSemiList") +
    m.resolveComponent("bubble") +
    m.resolveComponent("canvas-view") +
    m.resolveComponent("prize-modal") +
    m.resolveComponent("error-modal") +
    m.resolveComponent("InfoModal") +
    m.resolveComponent("weekRewardModal") +
    m.resolveComponent("taskLog") +
    m.resolveComponent("SnackBar") +
    m.resolveComponent("ResetCardModal") +
    m.resolveComponent("ResetCardConfirm")
  )();
var et = m._export_sfc(tt, [
  [
    "render",
    function (t, e, n, i, o, s) {
      return m.e(
        { a: "dark" === o.skin },
        (o.skin, {}),
        {
          b: m.o(function () {
            return s.goRealAsset && s.goRealAsset.apply(s, arguments);
          }, 1154),
          c: o.bulletinVisible,
        },
        o.bulletinVisible
          ? {
              d:
                o.bulletinConfigData &&
                (o.bulletinConfigData._id || o.bulletinConfigData.id),
              e: m.o(s.closeBulletin, 1155),
              f: m.o(s.showBulletinDetail, 1156),
              g: m.p({ text: o.bulletinText }),
            }
          : {},
        {
          h: !o.hasSignAgreement || (o.boardShow && s.isNewuser) || !o.isLogin,
        },
        !o.hasSignAgreement || (o.boardShow && s.isNewuser) || !o.isLogin
          ? m.e(
              { i: "dark" === o.skin },
              (o.skin, {}),
              { j: !o.isLogin },
              o.isLogin
                ? {}
                : {
                    k: m.o(function () {
                      return s.onLogin && s.onLogin.apply(s, arguments);
                    }, 1157),
                  },
              { l: m.n(o.isLogin ? "" : "asset-desc-unlogin") }
            )
          : {},
        { m: o.boardShow },
        o.boardShow
          ? m.e(
              { n: s.isNewuser && !s.showRecommend && o.recommendDataLoaded },
              s.isNewuser && !s.showRecommend && o.recommendDataLoaded
                ? {
                    o: m.o(s.goStockDetail, 1158),
                    p: m.p({ skin: o.skin, platform: o.platform }),
                  }
                : {},
              {
                q:
                  (o.isLogin || o.showDialog) &&
                  !s.isNewuser &&
                  o.hasSignAgreement,
              },
              (o.isLogin || o.showDialog) && !s.isNewuser && o.hasSignAgreement
                ? m.e(
                    { r: o.showResetEntry },
                    o.showResetEntry
                      ? {
                          s: m.o(s.handleResetEntryExpose, 1159),
                          t: m.o(s.handleResetEntryClick, 1160),
                          v: m.p({
                            canReset: o.canReset,
                            showRedDot: o.showResetRedDot,
                            skin: o.skin,
                          }),
                        }
                      : {},
                    { w: o.shareTextFlag },
                    o.shareTextFlag
                      ? {
                          x: m.n({ "share-dark": "dark" === o.skin }),
                          y: m.o(function () {
                            return (
                              s.onShowShare && s.onShowShare.apply(s, arguments)
                            );
                          }, 1161),
                        }
                      : {},
                    {
                      z: m.t(o.assetInfo.earnTodayCN),
                      A: m.n(o.assetInfo.earnTodayCls),
                      B: s.getNumColor(o.assetInfo.earnToday),
                      C: m.t(o.assetInfo.earnTotalCN),
                      D: m.n(o.assetInfo.earnTotalCls),
                      E: s.getNumColor(o.assetInfo.earnTotal),
                      F: m.t(o.assetInfo.earnYield),
                      G: s.getNumColor(o.assetInfo.earnTotal),
                      H: o.isLogin,
                    },
                    o.isLogin
                      ? {
                          I: m.t(o.assetInfo.fundAvailable),
                          J: m.t(o.assetInfo.total),
                        }
                      : {},
                    {
                      K: m.n(
                        o.profitStatus > 0
                          ? "asset-overview-up"
                          : 0 == o.profitStatus
                          ? "asset-overview-blc"
                          : "asset-overview-drop"
                      ),
                    }
                  )
                : {}
            )
          : {},
        { L: o.hasSignAgreement && o.boardShow && !s.showRecommend },
        o.hasSignAgreement && o.boardShow && !s.showRecommend
          ? {
              M: m.sr("aiRecommendRef", "bf5b9ce6-3"),
              N: m.o(s.showMoreAiRecommend, 1162),
            }
          : {},
        {
          O:
            o.hasSignAgreement &&
            o.boardShow &&
            s.showRecommend &&
            o.recommendDataLoaded,
        },
        o.hasSignAgreement &&
          o.boardShow &&
          s.showRecommend &&
          o.recommendDataLoaded
          ? {
              P: m.o(s.handleShowMiniApply, 1163),
              Q: m.p({
                recommendId: o.recommendId,
                recommendData: o.recommendData,
              }),
            }
          : {},
        { R: !s.isNewuser && o.boardShow && o.isLogin && o.hasSignAgreement },
        !s.isNewuser && o.boardShow && o.isLogin && o.hasSignAgreement
          ? m.e(
              {
                S: m.o(s.onTabnavChange, 1164),
                T: m.p({
                  navs: o.navs,
                  current: o.currentTab,
                  tabNavActivedmarginleft: o.tabNavActivedmarginleft,
                  tabNavActivedWidth: o.tabNavActivedWidth,
                  tablineStyle: o.tablineStyle,
                }),
                U: m.p({
                  tabInfo: {
                    textColor: "#7a8499",
                    textSelectColor: "#3077ec",
                    tabScrollBarEnable: !0,
                    tabScrollBarHeight: 3,
                    tabScrollBarWidth: 29,
                    tabScrollBarColor: "#4489ff",
                    backgroundColor: "#ffffff",
                    tabSwitchAnimationEnabled: !0,
                    tapScrollCenterEnable: !0,
                  },
                }),
                V: o.positionList.length,
              },
              o.positionList.length
                ? m.e(
                    {
                      W: m.f(
                        o.positionFold
                          ? o.positionList.slice(0, 2)
                          : o.positionList,
                        function (t, e, n) {
                          return {
                            a: m.t(t && t.name),
                            b: m.n(t && t.small ? "small-font" : ""),
                            c: m.t(
                              t && t.soldOut ? "已清仓" : t && t.marketValue
                            ),
                            d: e,
                            e: m.o(
                              function (e) {
                                return s.goStockDetail(t);
                              },
                              1165,
                              e
                            ),
                          };
                        }
                      ),
                      X: -2,
                      Y:
                        "mp" === s.stockBridge.ENV &&
                        o.positionFold &&
                        o.currentTab === o.TAB_LIST.POSITION
                          ? 1
                          : "",
                      Z:
                        "mp" !== s.stockBridge.ENV ||
                        o.positionFold ||
                        o.currentTab !== o.TAB_LIST.POSITION
                          ? ""
                          : 1,
                      aa: "mp" !== s.stockBridge.ENV || !o.positionFold,
                    },
                    "mp" === s.stockBridge.ENV && o.positionFold
                      ? {
                          ae: m.f(
                            o.positionFold
                              ? o.positionList.slice(0, 2)
                              : o.positionList,
                            function (t, e, n) {
                              return {
                                a: m.t(t.price),
                                b: m.n(t.priceCls),
                                c: m.t(t.cost),
                                d: m.t(t.holdNum),
                                e: m.n(t.holdNumCls),
                                f: m.t(t.putableNum),
                                g: m.t(t.earnTodayCN),
                                h: m.n(t.earnTodayCls),
                                i: s.getNumColor(t.earnToday),
                                j: m.t(t.earnTodayPercent),
                                k: s.getNumColor(t.earnToday),
                                l: m.t(t.earnTotalCN),
                                m: m.n(t.earnTotalCls),
                                n: s.getNumColor(t.earnTotal),
                                o: m.t(t.earnTotalPercent),
                                p: s.getNumColor(t.earnTotal),
                                q: e,
                                r: m.o(
                                  function (e) {
                                    return s.goStockDetail(t);
                                  },
                                  1169,
                                  e
                                ),
                              };
                            }
                          ),
                          af: m.o(function () {
                            return (
                              s.holdingTouchstart &&
                              s.holdingTouchstart.apply(s, arguments)
                            );
                          }, 1170),
                          ag: m.o(function () {
                            return (
                              s.holdingTouchend &&
                              s.holdingTouchend.apply(s, arguments)
                            );
                          }, 1171),
                        }
                      : {
                          ab: m.f(
                            o.positionFold
                              ? o.positionList.slice(0, 2)
                              : o.positionList,
                            function (t, e, n) {
                              return {
                                a: m.t(t.price),
                                b: m.n(t.priceCls),
                                c: m.t(t.cost),
                                d: m.t(t.holdNum),
                                e: m.n(t.holdNumCls),
                                f: m.t(t.putableNum),
                                g: m.t(t.earnTodayCN),
                                h: m.n(t.earnTodayCls),
                                i: s.getNumColor(t.earnToday),
                                j: m.t(t.earnTodayPercent),
                                k: s.getNumColor(t.earnToday),
                                l: m.t(t.earnTotalCN),
                                m: m.n(t.earnTotalCls),
                                n: s.getNumColor(t.earnTotal),
                                o: m.t(t.earnTotalPercent),
                                p: s.getNumColor(t.earnTotal),
                                q: e,
                                r: m.o(
                                  function (e) {
                                    return s.goStockDetail(t);
                                  },
                                  1166,
                                  e
                                ),
                              };
                            }
                          ),
                          ac: m.o(function () {
                            return (
                              s.holdingTouchstart &&
                              s.holdingTouchstart.apply(s, arguments)
                            );
                          }, 1167),
                          ad: m.o(function () {
                            return (
                              s.holdingTouchend &&
                              s.holdingTouchend.apply(s, arguments)
                            );
                          }, 1168),
                        }
                  )
                : {},
              { ah: o.positionList.length > 2 },
              o.positionList.length > 2
                ? {
                    ai: m.t(o.positionFold ? "查看更多" : "折叠"),
                    aj: m.n("dark" === o.skin ? "fold-icon-dark" : "fold-icon"),
                    ak: m.n(o.positionFold ? "" : "up"),
                    al: m.o(function () {
                      return (
                        s.changepositionFold &&
                        s.changepositionFold.apply(s, arguments)
                      );
                    }, 1172),
                  }
                : {},
              { am: !o.positionList.length },
              o.positionList.length
                ? {}
                : {
                    an: o.isSwiperShow && !o.positionList.length,
                    ao: m.p({ text: "当前暂无持仓", showIcon: !0 }),
                  },
              { ap: o.isSwiperShow && o.entrustList.length },
              o.isSwiperShow && o.entrustList.length
                ? {
                    aq: m.f(
                      o.entrusFold ? o.entrustList.slice(0, 2) : o.entrustList,
                      function (t, e, n) {
                        return m.e(
                          {
                            a: m.t(t.typeCN),
                            b: t.type === o.orderType.SELL ? 1 : "",
                            c: t.type === o.orderType.BUY ? 1 : "",
                            d: m.o(
                              function (e) {
                                return s.goStockDetail(t);
                              },
                              1173,
                              t.id
                            ),
                            e: m.t(t.name),
                            f: m.n(t.name && t.small ? "small-font" : ""),
                            g: m.t(t.code),
                            h: m.t(t.orderPrice),
                            i: m.t(t.price),
                            j: m.t(t.number),
                            k: m.t(t.soldNum),
                            l: m.o(
                              function (e) {
                                return s.goStockDetail(t);
                              },
                              1174,
                              t.id
                            ),
                            m: t.canChange,
                          },
                          t.canChange
                            ? {
                                n: m.t(t.canceling ? "撤单中" : "撤单"),
                                o: t.canceling ? 1 : "",
                                p: m.o(
                                  function (e) {
                                    return s.cancelOrder(t.id);
                                  },
                                  1175,
                                  t.id
                                ),
                              }
                            : {
                                q: m.t(t.statusCN),
                                r: m.t(t.time),
                                s: m.o(
                                  function (e) {
                                    return s.goStockDetail(t);
                                  },
                                  1176,
                                  t.id
                                ),
                              },
                          { t: t.id }
                        );
                      }
                    ),
                    ar: s.isLight ? 1 : "",
                  }
                : {},
              { as: o.isSwiperShow && o.entrustList.length > 2 },
              o.isSwiperShow && o.entrustList.length > 2
                ? {
                    at: m.t(o.entrusFold ? "查看更多" : "折叠"),
                    av: m.n("dark" === o.skin ? "fold-icon-dark" : "fold-icon"),
                    aw: m.n(o.entrusFold ? "" : "up"),
                    ax: m.o(function () {
                      return (
                        s.changeentrusFold &&
                        s.changeentrusFold.apply(s, arguments)
                      );
                    }, 1177),
                  }
                : {},
              { ay: !(o.isSwiperShow && o.entrustList.length) },
              o.isSwiperShow && o.entrustList.length
                ? {}
                : { az: m.p({ text: "当前暂无委托", showIcon: !0 }) },
              { aA: o.isSwiperShow && s.historyMonthLength },
              o.isSwiperShow && s.historyMonthLength
                ? {
                    aB: m.f(o.historyMonthList, function (t, e, n) {
                      return m.e(
                        {
                          a: m.t(t.periodCN),
                          b: m.t(t.count),
                          c: o.nowHistoryMonth === t.period,
                        },
                        (o.nowHistoryMonth, t.period, {}),
                        {
                          d: m.o(
                            function (e) {
                              return s.toggleMonthGroup(t.period);
                            },
                            1178,
                            t.period
                          ),
                          e: o.nowHistoryMonth === t.period,
                        },
                        o.nowHistoryMonth === t.period
                          ? m.e(
                              { f: o.feeFeatureEnabled },
                              o.feeFeatureEnabled
                                ? {
                                    g: m.f(
                                      o.historyList[t.period],
                                      function (t, e, n) {
                                        return m.e(
                                          {
                                            a: m.t(t.typeCN),
                                            b:
                                              t.type === o.orderType.SELL
                                                ? 1
                                                : "",
                                            c:
                                              t.type === o.orderType.BUY
                                                ? 1
                                                : "",
                                            d: m.t(t.date),
                                            e: m.t(t.name),
                                            f: m.n(
                                              s.getHistoryOverflowClass(
                                                t,
                                                "name"
                                              )
                                            ),
                                            g: m.t(t.code),
                                            h: m.t(t.marketCN.toUpperCase()),
                                            i: m.t(t.number),
                                            j: m.n(
                                              s.getHistoryOverflowClass(
                                                t,
                                                "volume"
                                              )
                                            ),
                                            k: m.t(t.tradePrice || "--"),
                                            l: m.t(t.settlementAmount || "--"),
                                            m: m.n(
                                              s.getHistoryOverflowClass(
                                                t,
                                                "amount"
                                              )
                                            ),
                                            n:
                                              t.status !==
                                                o.orderStatus.SYS_WITHDRAW &&
                                              t.status !== o.orderStatus.FAIL,
                                          },
                                          t.status !==
                                            o.orderStatus.SYS_WITHDRAW &&
                                            t.status !== o.orderStatus.FAIL
                                            ? { o: m.t(t.statusCN) }
                                            : {},
                                          { p: t.hasFeeDetail },
                                          (t.hasFeeDetail, {}),
                                          {
                                            q: t.hasFeeDetail ? "" : 1,
                                            r: m.o(
                                              function (e) {
                                                return (
                                                  t.hasFeeDetail &&
                                                  s.showFeeDetail(t)
                                                );
                                              },
                                              1179,
                                              e
                                            ),
                                            s: e,
                                            t: m.o(
                                              function (e) {
                                                return s.goStockDetail(t);
                                              },
                                              1180,
                                              e
                                            ),
                                          }
                                        );
                                      }
                                    ),
                                    h: s.isLight ? 1 : "",
                                  }
                                : {
                                    i: m.f(
                                      o.historyList[t.period],
                                      function (t, e, n) {
                                        return {
                                          a: m.t(t.typeCN),
                                          b:
                                            t.type === o.orderType.SELL
                                              ? 1
                                              : "",
                                          c:
                                            t.type === o.orderType.BUY ? 1 : "",
                                          d: m.t(t.name),
                                          e: m.n(
                                            t.name.length > 8
                                              ? "small-font"
                                              : ""
                                          ),
                                          f: m.t(t.code),
                                          g: m.t(t.marketCN.toUpperCase()),
                                          h: m.t(t.number),
                                          i: m.t(t.orderPrice),
                                          j: m.t(t.date),
                                          k: m.t(t.statusCN),
                                          l: e,
                                          m: m.o(
                                            function (e) {
                                              return s.goStockDetail(t);
                                            },
                                            1181,
                                            e
                                          ),
                                        };
                                      }
                                    ),
                                  }
                            )
                          : {},
                        { j: t.period }
                      );
                    }),
                  }
                : { aC: m.p({ text: "当前暂无记录", showIcon: !0 }) },
              {
                aD: m.o(function () {
                  return (
                    s.onHistoryContainerScroll &&
                    s.onHistoryContainerScroll.apply(s, arguments)
                  );
                }, 1182),
                aE: o.currentTab,
                aF: o.swiperHeight,
                aG: m.o(function () {
                  return (
                    s.onSwiperChange && s.onSwiperChange.apply(s, arguments)
                  );
                }, 1183),
                aH: m.o(function () {
                  return s.onDragging && s.onDragging.apply(s, arguments);
                }, 1184),
                aI: m.o(function () {
                  return s.onDropped && s.onDropped.apply(s, arguments);
                }, 1185),
                aJ: o.isLogin ? 0 : o.safeArea,
                aK: m.o(s.setSwiperindex, 1186),
                aL: o.showDialog || !o.isLogin ? 1 : "",
              }
            )
          : {},
        { aM: o.boardShow },
        o.boardShow
          ? {
              aN: m.o(s.pageInit, 1187),
              aO: m.p({
                rankList: o.rankList,
                rankHome: o.rankHome,
                urank: o.urank,
                showDialog: o.showDialog,
                isLogin: o.isLogin,
              }),
            }
          : {},
        { aP: m.t(o.measureViewText), aQ: o.boardShow },
        o.boardShow
          ? {
              aR: m.n(
                o.isLogin &&
                  o.mockTradeSwitch &&
                  o.hasSignAgreement &&
                  !o.isOffline
                  ? "under-block-mnjy"
                  : ""
              ),
              aS: m.n(o.hasSignAgreement ? "" : "under-block-qsxy"),
              aT: m.n(o.showCustomNavbar ? "under-block-hasnav" : ""),
              aU: m.o(function () {
                return s.goWzqRule && s.goWzqRule.apply(s, arguments);
              }, 1188),
            }
          : {},
        { aV: !o.boardShow },
        o.boardShow
          ? {}
          : m.e(
              { aW: o.boardLoading },
              o.boardLoading
                ? {}
                : {
                    aX: m.o(function () {
                      return s.reInit && s.reInit.apply(s, arguments);
                    }, 1189),
                  }
            ),
        {
          aY: s.isNewuser ? 1 : "",
          aZ:
            !o.isLogin ||
            !o.mockTradeSwitch ||
            !o.hasSignAgreement ||
            o.isOffline,
        },
        o.isLogin && o.mockTradeSwitch && o.hasSignAgreement && !o.isOffline
          ? {}
          : m.e(
              { ba: !o.isOffline && !o.isLogin && !1 },
              (!o.isOffline && o.isLogin, {})
            ),
        { bc: o.hasSignAgreement && o.boardShow && o.MT.gameId },
        o.hasSignAgreement && o.boardShow && o.MT.gameId
          ? {
              bd: m.sr("miniApplyRef", "bf5b9ce6-12"),
              be: m.o(s.airecommendData, 1191),
              bf: m.o(s.finishOrder, 1192),
              bg: m.p({
                gameId: o.MT.gameId,
                isNewuser: s.isNewuser,
                feeFeatureEnabled: o.feeFeatureEnabled,
              }),
            }
          : {},
        { bh: o.hasSignAgreement && o.boardShow },
        o.hasSignAgreement && o.boardShow
          ? {
              bi: m.sr("aisemiList", "bf5b9ce6-13"),
              bj: m.o(s.airecommendData, 1193),
              bk: m.p({ isNewuser: s.isNewuser }),
            }
          : {},
        {
          bl:
            o.isLogin &&
            o.mockTradeSwitch &&
            o.hasSignAgreement &&
            !o.isOffline,
        },
        o.isLogin && o.mockTradeSwitch && o.hasSignAgreement && !o.isOffline
          ? m.e(
              { bm: s.infoParams && s.infoParams.act_actid && o.showBubble },
              s.infoParams && s.infoParams.act_actid && o.showBubble
                ? {
                    bn: m.o(s.closeBubble, 1194),
                    bo: m.p({
                      bubbleNode: o.bubbleNode,
                      cunrrentIndex: "mocktrade",
                      rewardDesc: o.rewardDesc,
                      infoParams: s.infoParams,
                      direction: "bubble-center-arrow-center",
                      popupConfig: o.popupConfig,
                    }),
                  }
                : {},
              {
                bp: s.buttonColor,
                bq: m.o(function () {
                  return s.goSearch && s.goSearch.apply(s, arguments);
                }, 1195),
                br: m.n(s.showFooterTips ? "flex-1" : ""),
                bs: m.n(o.showCustomNavbar ? "asset-footer-hasnavbar" : ""),
                bt: o.safeArea || 20,
              }
            )
          : {},
        { bv: o.canvasShow },
        o.canvasShow
          ? {
              bw: m.o(s.onHideShare, 1196),
              bx: m.o(s.shareCb, 1197),
              by: m.o(s.showShareText, 1198),
              bz: m.p({
                earnYield: o.assetInfo.earnYield,
                snapShot: o.snapShot,
                showShare: o.showShare,
                profitStatus: o.profitStatus,
                urank: o.urank,
                isAct: o.inAct,
                baseConfig: o.baseConfig,
                cardTitleArr: o.cardTitleArr,
                shareConfig: o.shareConfig,
                srcsite: o.srcsite,
              }),
            }
          : {},
        { bA: o.showPrizeModal },
        o.showPrizeModal
          ? {
              bB: m.o(s.openPrizeModal, 1199),
              bC: m.o(s.closePrizeModal, 1200),
            }
          : {},
        { bD: o.isLogin && o.showDialog },
        o.isLogin && o.showDialog
          ? {
              bE: m.o(function () {
                return s.onDialogHide && s.onDialogHide.apply(s, arguments);
              }, 1201),
              bF: o.supportedOrientations,
              bG: m.o(function () {
                return s.onDialogHide && s.onDialogHide.apply(s, arguments);
              }, 1202),
            }
          : {},
        {
          bH: m.o(s.hideErrorMsg, 1203),
          bI: m.p({ msg: o.errorMsg, btnText: o.errorBtnText }),
          bJ: m.t(o.bulletinDetailText),
          bK: m.o(s.closeBulletinDetail, 1204),
          bL: m.p({ visible: o.bulletinDetailVisible, isLite: s.isLight }),
          bM: o.feeFeatureEnabled,
        },
        o.feeFeatureEnabled
          ? {
              bN: m.t(o.feeDetailData.settlementAmount),
              bO: m.t(o.feeDetailData.fee),
              bP: m.o(s.closeFeeDetail, 1205),
              bQ: m.p({ visible: o.feeDetailVisible, isLite: s.isLight }),
            }
          : {},
        { bR: o.showWeekRewardModal },
        o.showWeekRewardModal
          ? {
              bS: m.o(s.closeRewardModal, 1206),
              bT: m.o(s.onShowShare, 1207),
              bU: m.p({
                h5userinfo: o.h5userinfo,
                rewardData: o.rewardData,
                platform: o.platform,
                rankHome: o.rankHome,
                assetInfo: o.assetInfo,
                srcsite: o.srcsite,
              }),
            }
          : {},
        { bV: o.showLog },
        o.showLog
          ? { bW: m.o(s.closeTaskLog, 1208), bX: m.p({ tasklog: o.tasklog }) }
          : {},
        { bY: o.guideToApplyText },
        o.guideToApplyText
          ? {
              bZ: m.n(s.guideToApplyBarClass),
              ca: m.o(s.clkApplySnakeBar, 1209),
              cb: m.p({ rewardText: o.guideToApplyText, backText: "去实战" }),
            }
          : {},
        {
          cc: m.o(s.handleResetModalExpose, 1210),
          cd: m.o(s.closeResetModal, 1211),
          ce: m.o(s.handleResetUse, 1212),
          cf: m.p({
            visible: o.showResetModal,
            canReset: o.canReset,
            expireTimeText: o.resetEndTimeText,
            skin: o.skin,
            isLight: s.isLight,
          }),
          cg: m.o(s.handleResetConfirmExpose, 1213),
          ch: m.o(s.handleResetConfirmCancel, 1214),
          ci: m.o(s.confirmReset, 1215),
          cj: m.p({
            visible: o.showResetConfirm,
            loading: o.resetLoading,
            skin: o.skin,
            isLight: s.isLight,
          }),
          ck: m.n(o.screenType),
          cl: m.n(o.inAct ? "asset-act" : ""),
          cm: m.n(s.bugiOS ? "bugiOS" : ""),
          cn: m.n(o.bulletinVisible ? "has-bulletin" : ""),
          co: o.skin,
        }
      );
    },
  ],
  ["__scopeId", "data-v-bf5b9ce6"],
]);
wx.createComponent(et);
