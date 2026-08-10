var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../@babel/runtime/helpers/objectSpread2"),
  n = require("../@babel/runtime/helpers/classCallCheck"),
  i = require("../@babel/runtime/helpers/createClass"),
  u = require("../@babel/runtime/helpers/inherits"),
  o = require("../@babel/runtime/helpers/createSuper");
require("../app.js");
var s = require("../common/vendor.js"),
  a = require("../utils/crypt/state.js"),
  c = require("../service/aegis/platform/not-wujie.js"),
  _ = require("../config/cgi.js"),
  l = new ((function (l) {
    u(k, l);
    var y,
      h,
      p = o(k);
    function k() {
      return n(this, k), p.apply(this, arguments);
    }
    return (
      i(k, [
        {
          key: "prepare",
          value: function (e) {
            return this.request(_.API_TRADEPREPARE, e, {
              retLoginInfo: this.retLoginInfo,
              noSetCookies: this.noSetCookies,
            });
          },
        },
        {
          key: "verify",
          value: function (e) {
            return this.request(_.API_TRADEPASSWD, e, {
              retLoginInfo: this.retLoginInfo,
              noSetCookies: this.noSetCookies,
            });
          },
        },
        {
          key: "stockInfo",
          value: function (e) {
            return this.request(_.API_STOCK_INFO, e);
          },
        },
        {
          key: "search",
          value: function (e) {
            return this.request(_.API_TRADE_SEARCH, e);
          },
        },
        {
          key: "queryHoldStock",
          value: function (e) {
            return this.request(_.API_HOLD_STOCK, e);
          },
        },
        {
          key: "shouldCheckPassword",
          value: function (e) {
            var t = this;
            return new Promise(function (r, n) {
              t.request(_.API_TRADEPREPARE, e, {
                retLoginInfo: t.retLoginInfo,
                noSetCookies: t.noSetCookies,
              })
                .then(function (e) {
                  a.resetkey(e), a.setSeed(e.timeseed), r(e);
                })
                .catch(function (e) {
                  n(e);
                });
            });
          },
        },
        {
          key: "init",
          value: function (e) {
            var t = e.market,
              r = e.code,
              n = e.holder,
              i = e.type,
              u = e.retry_time,
              o = void 0 === u ? 0 : u,
              s = e.query_ft,
              a = e.stock_cls,
              c = {
                market: t,
                stock_code: r,
                stockholder_code: n,
                type: i,
                retry_time: o,
                query_ft: s,
              };
            return a && (c.stock_cls = a), this.request(_.API_TRADE_INIT, c);
          },
        },
        {
          key: "submit",
          value: function (e, t) {
            var r = e.scenes,
              n = e.action,
              i = e.type,
              u = void 0 === i ? 0 : i,
              o = e.market,
              a = e.code,
              c = e.name,
              l = e.price,
              y = e.quantity,
              h = e.holder,
              p = e.matchType,
              k = e.token,
              d = e.psw,
              f = e.riskVer,
              m = e.orderid,
              q = e.specialExtend,
              A = e.specialTimeLimit,
              v = e.activity_id,
              R = e.stock_cls,
              E = {
                scenes: r,
                action: n,
                type: u,
                market: o,
                scode: a,
                name: c,
                price: l,
                quantity: y,
                psw: k || d,
                entrant_key:
                  Date.now() + Math.floor(1e4 * Math.random()).toString(),
                stockholder_code: h,
                match_type: p,
                risk_ver: f || 1,
                order_sign: s.md5(
                  encodeURIComponent(
                    "scode="
                      .concat(a, "&price=")
                      .concat(l, "&quantity=")
                      .concat(y)
                  ).toLocaleLowerCase()
                ),
                trade_order_no: m,
              };
            return (
              R && (E.stock_cls = R),
              q && ((E.special_extend = q), (E.special_time_limit = A)),
              v && (E.activity_id = v),
              this.request(_.API_TRADE_SUBMIT, E, t)
            );
          },
        },
        {
          key: "cancel",
          value: function (e) {
            var t = e.token,
              r = e.id,
              n = e.no,
              i = e.time,
              u = e.code,
              o = e.action,
              s = e.market,
              a = {
                psw: t,
                id: r,
                contract_no: n,
                trade_time: i,
                scode: u,
                action: o,
              };
            return s && (a.market = s), this.request(_.API_TRADE_CANCEL, a);
          },
        },
        {
          key: "queryHistoryData",
          value: function (e) {
            return this.request(_.API_TRADE_COUNT, {
              page_num: 0,
              page_size: 40,
              type: e,
            });
          },
        },
        {
          key: "queryHistoryDataNew",
          value: function (e) {
            return this.request(_.API_TRADE_RECORD, r({ limit: 40 }, e));
          },
        },
        {
          key: "queryHistoryByMonth",
          value: function (e, t, r) {
            return this.request(_.API_TRADE_COUNT, {
              query_month: e,
              page_num: t,
              page_size: 40,
              type: r,
            });
          },
        },
        {
          key: "queryOrderNo",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return this.request(_.API_TRADE_ORDER_NO, e);
          },
        },
        {
          key: "getPgStock",
          value: function (e) {
            return this.request(_.API_PGSTOCK_RESULT, e);
          },
        },
        {
          key: "queryHistoryByFilter",
          value: function (e, t, r, n, i, u) {
            return this.request(_.API_TRADE_COUNT, {
              page_size: 40,
              page_num: t,
              type: e,
              code: r,
              market: n,
              begin_date: i,
              end_date: u,
            });
          },
        },
        {
          key: "queryMinusChartData",
          value:
            ((h = t(
              e().mark(function t(r) {
                var n, i;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = r.code),
                            (i = r.market),
                            e.abrupt(
                              "return",
                              this.request("stock_minute.fcgi", {
                                market: i,
                                code: n,
                              }).then(function (e) {
                                return (function (e) {
                                  var t,
                                    r = [],
                                    n = 0;
                                  try {
                                    t = e.data.stock_minute;
                                    for (var i = 0; i < t.length; i++)
                                      if (t[i].indexOf(" ") > 0) {
                                        var u = t[i].split(" "),
                                          o = parseInt(u[2], 10);
                                        0 == +o && (o = n),
                                          r.push({
                                            time: u[0],
                                            price: u[1],
                                            volume: 100 * (o - n),
                                            amount: u[1] * (o - n) * 100,
                                          }),
                                          (n = u[2]);
                                      }
                                  } catch (t) {
                                    (r = null),
                                      c.aegisReporter.sdk.error({
                                        msg: "filter_minus_chart_data_error",
                                        ext3: JSON.stringify(e),
                                      });
                                  }
                                  return r;
                                })(e);
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function (e) {
              return h.apply(this, arguments);
            }),
        },
        {
          key: "qryAccountAuthorityInCounter",
          value:
            ((y = t(
              e().mark(function t() {
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            this.request(_.API_QUERYACCOUNTAUTHORITY)
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function () {
              return y.apply(this, arguments);
            }),
        },
        {
          key: "query",
          value: function (e) {
            return this.request(_.API_TRADE_QUERY, e);
          },
        },
        {
          key: "queryTag",
          value: function (e) {
            return this.request(
              _.API_TRADE_QUERY,
              r({ action: "type_desc" }, e)
            );
          },
        },
        {
          key: "fetchExchangeRate",
          value: function (e) {
            return this.request(_.API_EXCHNAGE_RATE, e);
          },
        },
      ]),
      k
    );
  })(require("./base.js").BaseAPI))();
(exports.TRADECOUNT_AMOUNT_PER_REQUEST = 40), (exports.tradeCgi = l);
