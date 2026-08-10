var e = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/createClass"),
  o = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var i = Object.defineProperty,
  s = function (e, r, n) {
    return (
      (function (e, r, n) {
        r in e
          ? i(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[r] = n);
      })(e, "symbol" != o(r) ? r + "" : r, n),
      n
    );
  },
  c = require("../../../common/vendor.js");
require("../../../service/broker.js");
var u = require("../../../config/enum.js");
require("../../../config/enum/trade.js");
var h = require("../../../config/broker/11100/index.js");
exports.TradeAccount = (function () {
  function o(e) {
    t(this, o),
      s(this, "stockholder_code"),
      s(this, "ggt_stockholder_code"),
      s(this, "max_buy_money"),
      s(this, "service"),
      s(this, "shareholdercards", []),
      (this.service = e);
  }
  var i, d;
  return (
    a(o, [
      {
        key: "formatMaxBuyMoney",
        value: function (e, r) {
          var n,
            t =
              (null == (n = e.fundsinfo) ? void 0 : n.hs_can_trade) ||
              e.max_buy_money;
          return (
            r.market === u.MARKET.HK &&
              e.fundsinfo &&
              (t = e.fundsinfo.ggt_can_trade),
            t
          );
        },
      },
      {
        key: "fetchAccountInfo",
        value:
          ((d = n(
            r().mark(function e(n) {
              var t;
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this.service.fetchAccountInfo(n);
                      case 2:
                        return (
                          (t = e.sent),
                          e.abrupt(
                            "return",
                            ((this.stockholder_code = t.stockholder_code),
                            (this.max_buy_money = this.formatMaxBuyMoney(t, n)),
                            t)
                          )
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function (e) {
            return d.apply(this, arguments);
          }),
      },
      {
        key: "checkAccountMoney",
        value: function (e, r) {
          var n = c.__CJS__export_reduce__(e.totalMoney, this.max_buy_money);
          return n > 0
            ? [!1, { retcode: "money-not-enough", data: { diffMoney: n } }]
            : [!0];
        },
      },
      {
        key: "getShareHolderCards",
        value:
          ((i = n(
            r().mark(function e(n) {
              var t, a, o, i, s, c, d, l, f, k, v, m, b;
              return r().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((o =
                            h.brokerConfig.trade.checkShareHolderCards || {}),
                          (i = o.realTimeQuery),
                          (s = void 0 !== i && i),
                          (c = this.service.getUserInfo()),
                          (d = c.shareholdercards),
                          (l = void 0 === d ? [] : d),
                          (this.shareholdercards = l),
                          !s)
                        ) {
                          e.next = 15;
                          break;
                        }
                        if (
                          ((f =
                            (null == (t = l.findIndex)
                              ? void 0
                              : t.call(l, function (e) {
                                  return e.market === u.MARKET.HA;
                                })) > -1),
                          (k =
                            (null == (a = l.findIndex)
                              ? void 0
                              : a.call(l, function (e) {
                                  return e.market === u.MARKET.SA;
                                })) > -1),
                          (n !== u.MARKET.HA || f) && (n !== u.MARKET.SA || k))
                        ) {
                          e.next = 15;
                          break;
                        }
                        return (
                          (e.prev = 4),
                          (e.next = 7),
                          this.service.fetchShareHolderCards()
                        );
                      case 7:
                        (v = e.sent),
                          (m = v.shareholdercards),
                          (b = void 0 === m ? [] : m),
                          (this.shareholdercards = b),
                          (e.next = 15);
                        break;
                      case 13:
                        (e.prev = 13), (e.t0 = e.catch(4));
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[4, 13]]
              );
            })
          )),
          function (e) {
            return i.apply(this, arguments);
          }),
      },
      {
        key: "skipCheckShareHolders",
        value: function () {
          var e = this.shareholdercards;
          return 0 === (void 0 === e ? [] : e).length;
        },
      },
      {
        key: "hasBJShareholderCards",
        value: function (e) {
          if (this.skipCheckShareHolders()) return [!0];
          var r = this.shareholdercards,
            n = void 0 === r ? [] : r,
            t = (h.brokerConfig.trade.checkBJAuthTips || {}).noAccountTips,
            a =
              n.findIndex(function (e) {
                return e.market === u.MARKET.SA;
              }) > -1,
            o =
              n.findIndex(function (e) {
                return e.market === u.MARKET.BJ;
              }) > -1;
          return a || o ? [!0] : [!1, { retcode: "no_bj_account", retmsg: t }];
        },
      },
      {
        key: "hasGZShareholderCards",
        value: function (e) {
          if (this.skipCheckShareHolders()) return [!0];
          var r = this.shareholdercards,
            n = void 0 === r ? [] : r,
            t = (h.brokerConfig.trade.checkNQAuthTips || {}).noAccountTips;
          return n.findIndex(function (e) {
            return e.market === u.MARKET.NQ;
          }) > -1
            ? [!0]
            : [!1, { retcode: "no_nq_account", retmsg: t }];
        },
      },
      {
        key: "hasShareholderCards",
        value: function (e) {
          var r = this.shareholdercards,
            n = void 0 === r ? [] : r,
            t = h.brokerConfig.trade.checkShareHolderCards || {},
            a = t.canBindOnline,
            o = void 0 !== a && a,
            i = t.noShareHolderCardsTips,
            s = void 0 === i ? "" : i;
          if (0 === n.length) return [!0];
          var c =
              n.findIndex(function (e) {
                return e.market === u.MARKET.HA;
              }) > -1,
            d =
              n.findIndex(function (e) {
                return e.market === u.MARKET.SA;
              }) > -1,
            l = "当前未开通"
              .concat(
                e === u.MARKET.HA ? "沪市" : "深市",
                "股东卡。如有需要，请联系"
              )
              .concat(h.brokerConfig.base.name, "：客服电话")
              .concat(h.brokerConfig.base.tel);
          o &&
            (l = "当前未绑定/开通"
              .concat(
                e === u.MARKET.HA ? "沪市" : "深市",
                "股东卡，请绑定股东卡后继续交易。如有疑问可联系"
              )
              .concat(h.brokerConfig.base.name, "：客服电话")
              .concat(h.brokerConfig.base.tel));
          var f = s || l;
          return e !== u.MARKET.HA || c
            ? e !== u.MARKET.SA || d
              ? [!0]
              : [!1, { retcode: "no_sz_market", retmsg: f }]
            : [!1, { retcode: "no_sh_market", retmsg: f }];
        },
      },
      {
        key: "checkShareHolders",
        value: function (r) {
          var n,
            t = ((n = {}),
            e(n, u.MARKET.BJ, this.hasBJShareholderCards),
            e(n, u.MARKET.NQ, this.hasGZShareholderCards),
            n)[r];
          return t ? t.call(this, r) : this.hasShareholderCards(r);
        },
      },
    ]),
    o
  );
})();
