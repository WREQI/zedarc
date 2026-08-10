var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  i = require("../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../@babel/runtime/helpers/createClass"),
  o = require("../../@babel/runtime/helpers/inherits"),
  s = require("../../@babel/runtime/helpers/createSuper");
require("../../app.js");
var u = require("../../common/vendor.js"),
  a = require("../../config/cgi.js"),
  _ = require("../base.js");
require("../../config/enum.js");
var c = require("../../domain/entities/utils.js"),
  l = require("../../stores/user/useUserinfo.js");
require("../../service/broker.js"), require("../../config/enum/trade.js");
var d = require("../../service/request/cancelTokenConst.js"),
  p = require("../../config/broker/11100/index.js"),
  m = (function (_) {
    o(k, _);
    var m = s(k);
    function k() {
      return i(this, k), m.apply(this, arguments);
    }
    return (
      n(k, [
        {
          key: "getUserInfo",
          value: function () {
            return l.useUserinfoStore().userinfo;
          },
        },
        {
          key: "fetchShareHolderCards",
          value: function () {
            return this.request(a.API_QUERYACCOUNTAUTHORITY);
          },
        },
        {
          key: "fetchAccountInfo",
          value: function (e) {
            return this.request(a.API_TRADE_SHOW, e, {
              shouldNetworkDetect: !0,
              autoNetworkDetect: !0,
              cancelTokenType: d.CancelTokenType.mark,
            });
          },
        },
        {
          key: "fetchTradeAuth",
          value: function (i) {
            var n = this;
            return new Promise(
              (function () {
                var o = t(
                  e().mark(function t(o, s) {
                    var _, c, l, d, m, k;
                    return e().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (_ = u.get(
                                  p.brokerConfig,
                                  "trade.riskTips",
                                  {}
                                )),
                                (c = _.stDisable),
                                (l = void 0 !== c && c),
                                (d = _.delistingArrangementDisable),
                                (m = void 0 !== d && d),
                                (e.next = 8),
                                n.request(a.API_TRADE_CHECK, i)
                              );
                            case 8:
                              (k = e.sent),
                                o(
                                  r(
                                    r({}, k),
                                    {},
                                    {
                                      stRiskTips: l ? "0" : "1",
                                      delistingArrangementTips: m ? "0" : "1",
                                    }
                                  )
                                ),
                                (e.next = 15);
                              break;
                            case 12:
                              (e.prev = 12), (e.t0 = e.catch(0)), s(e.t0);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 12]]
                    );
                  })
                );
                return function (e, r) {
                  return o.apply(this, arguments);
                };
              })()
            );
          },
        },
        {
          key: "fetchMaxBuyQty",
          value: function (e, r, t) {
            var i,
              n,
              o,
              s,
              u = {
                scode:
                  null == (n = null == (i = e.quote) ? void 0 : i.info)
                    ? void 0
                    : n.secu_code,
                market:
                  null == (s = null == (o = e.quote) ? void 0 : o.info)
                    ? void 0
                    : s.market,
                price: r,
              };
            return (
              t && (u.stockholder_code = t), this.request(a.API_MAXBUYQTY, u)
            );
          },
        },
        {
          key: "getMaxBuyQty",
          value: function (e, r, t) {
            return new Promise(function (i) {
              var n,
                o,
                s = c.getMarketFee(
                  null == (n = e.quote) ? void 0 : n.info.market
                );
              if (null === r || !(null == (o = e.quote) ? void 0 : o.info))
                return "0";
              if ("--" === t || !t || e.skipCalcMaxBuy) return "--";
              var a = s.transferFee,
                _ = u.__CJS__export_add__(
                  1,
                  u.__CJS__export_add__(s.commission, a)
                ),
                l =
                  0 != +r
                    ? u.__CJS__export_div__(t, u.__CJS__export_mul__(r, _))
                    : 0;
              u.__CJS__export_mul__(l, u.__CJS__export_mul__(r, s.commission)) <
                s.lowestCommission &&
                (l =
                  0 != +r
                    ? u.__CJS__export_div__(
                        u.__CJS__export_reduce__(t, s.lowestCommission),
                        u.__CJS__export_mul__(r, u.__CJS__export_add__(1, a))
                      )
                    : 0),
                (l = l <= 0 ? 0 : l),
                i({ max_buy_qty: e.floorAmountByUnit(l) });
            });
          },
        },
        {
          key: "submit",
          value: function (e, r) {
            var t = e.scenes,
              i = e.action,
              n = e.type,
              o = void 0 === n ? 0 : n,
              s = e.market,
              _ = e.code,
              c = e.name,
              l = e.price,
              d = e.quantity,
              p = e.holder,
              m = e.matchType,
              k = e.token,
              f = e.psw,
              h = e.riskVer,
              v = e.orderid,
              q = e.specialExtend,
              y = e.specialTimeLimit,
              A = e.activity_id,
              C = e.stock_cls,
              b = e.highrisk_chk,
              T = {
                scenes: t,
                action: i,
                type: o,
                market: s,
                scode: _,
                name: c,
                price: l,
                quantity: d,
                psw: k || f,
                entrant_key:
                  Date.now() + Math.floor(1e4 * Math.random()).toString(),
                stockholder_code: p,
                match_type: m,
                risk_ver: h || 1,
                order_sign: u.md5(
                  encodeURIComponent(
                    "scode="
                      .concat(_, "&price=")
                      .concat(l, "&quantity=")
                      .concat(d)
                  ).toLocaleLowerCase()
                ),
                trade_order_no: v,
              };
            return (
              b && (T.highrisk_chk = b),
              C && (T.stock_cls = C),
              q && ((T.special_extend = q), (T.special_time_limit = y)),
              A && (T.activity_id = A),
              this.request(a.API_TRADE_SUBMIT, T, r)
            );
          },
        },
        {
          key: "queryOrderNo",
          value: function (e) {
            return this.request(a.API_TRADE_ORDER_NO, e);
          },
        },
        {
          key: "reloadAccountInfo",
          value: function (e) {
            return this.request(a.API_TRADE_RELOAD, e);
          },
        },
        {
          key: "fetchPositionAndOrder",
          value: function () {
            return this.request(a.API_TRADE_REFRESH, { scene: "1" });
          },
        },
      ]),
      k
    );
  })(_.BaseAPI);
exports.TradeStockService = m;
