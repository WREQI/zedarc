require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../config/enum.js"),
  n = require("../../cgi/trade.js"),
  o = require("../../components/Password/index.js"),
  c = require("../../service/auth/auth.js"),
  a = require("../../service/auth/auth.type.js"),
  i = require("../../config/errcode.js"),
  u = require("../../common/components/Dialog/index.js"),
  s = require("../../common/vendor.js");
require("../../service/broker.js");
var d = require("../../utils/market.js"),
  l = require("../../service/connect/index.js"),
  f = require("../../service/aegis/utils.js"),
  m = require("../../service/stat/mp-weixin.js"),
  p = require("../../utils/index.js"),
  v = require("../../config/broker/11100/index.js");
exports.useCancelOrder = function () {
  var x = s.inject("embeddedMode") || s.ref(!1);
  function k(e, t) {
    return new Promise(function (r, n) {
      u.Dialog({
        context: t,
        message: e,
        showCancelButton: !0,
        cancelButtonText: "继续撤单",
        confirmButtonText: "我知道了",
        onConfirm: function () {
          n({ retcode: "DIALOG_CANCEL" });
        },
        onCancel: function () {
          r();
        },
      });
    });
  }
  function b(e, t) {
    return n.tradeCgi.cancel({
      token: t,
      id: e.trans_id,
      no: e.contract_no,
      time: e.trade_time,
      code: e.code,
      action: e.trade_type,
      market: e.market,
    });
  }
  return {
    cancelOrder: function (u, s, C, h) {
      var A =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      return new Promise(
        (function () {
          var E = t(
            e().mark(function E(T, g) {
              var S, _, w, q, j, y, D, N, O;
              return e().wrap(
                function (E) {
                  for (;;)
                    switch ((E.prev = E.next)) {
                      case 0:
                        S = null;
                        try {
                          S = l.connector.getConnectionInfo();
                        } catch (e) {
                          S = {
                            source: "unknown",
                            status: "unknown",
                            readyState: "unknown",
                          };
                        }
                        if (d.isHKMarket(u.market)) {
                          E.next = 20;
                          break;
                        }
                        (_ = v.brokerConfig.trade || {}),
                          (w = _.canTradeMarket),
                          (q = null == w ? void 0 : w.includes(r.MARKET.BJ)),
                          (E.prev = 4),
                          (E.t0 = s[u.market]),
                          (E.next =
                            E.t0 === r.MARKET_STATE.OPEN_AUCTION_NOT_CANCEL
                              ? 8
                              : E.t0 === r.MARKET_STATE.CLOSE_AUCTION
                              ? 11
                              : 15);
                        break;
                      case 8:
                        return (
                          (E.next = 10),
                          k(
                            "根据沪深".concat(
                              q ? "京" : "",
                              "交易所规则，9:20-9:25盘前集合竞价期间不可撤单"
                            ),
                            C
                          )
                        );
                      case 10:
                        return E.abrupt("break", 15);
                      case 11:
                        if (
                          ((E.t1 =
                            (null == u ? void 0 : u.stock_type) !==
                            r.TARGET.DEBT),
                          !E.t1)
                        ) {
                          E.next = 15;
                          break;
                        }
                        return (
                          (E.next = 15),
                          k(
                            "根据沪深".concat(
                              q ? "京" : "",
                              "交易所规则，14:57-15:00收盘集合竞价期间不可撤单"
                            ),
                            C
                          )
                        );
                      case 15:
                        E.next = 20;
                        break;
                      case 17:
                        return (
                          (E.prev = 17),
                          (E.t2 = E.catch(4)),
                          E.abrupt("return", void g(E.t2))
                        );
                      case 20:
                        return (
                          (E.prev = 20),
                          (E.next = 23),
                          n.tradeCgi.shouldCheckPassword()
                        );
                      case 23:
                        if (
                          ((j = E.sent),
                          (function (e) {
                            try {
                              var t = p.getCurRouteInfo().name,
                                r = "other";
                              "AssetIndex" === t
                                ? (r = "asset")
                                : [
                                    "TradeStock",
                                    "TradeStockNew",
                                    "TradeEmbedded",
                                  ].includes(t) && (r = "trade"),
                                m.stat.click(
                                  "trade."
                                    .concat(r, ".cancel_")
                                    .concat(e ? "pwd" : "nopwd")
                                );
                            } catch (e) {}
                          })((y = j.needcheck)),
                          "1" !== y)
                        ) {
                          E.next = 30;
                          break;
                        }
                        (D = C),
                          (null == h ? void 0 : h.getGlobalWrapCtx)
                            ? (D = h.getGlobalWrapCtx())
                            : (null == C ? void 0 : C.getGlobalWrapCtx) &&
                              (D = C.getGlobalWrapCtx()),
                          c.Auth({
                            biometricsScene: a.BiometricsScene.TRADE_CANCEL,
                            context: D,
                            theme: o.THEME.TRADE,
                            isTrade: !0,
                            showErrorWithNotice: !1,
                            embeddedMode: x.value,
                            onSuccess: (function () {
                              var r = t(
                                e().mark(function t(r) {
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.prev = 0),
                                              "function" ==
                                                typeof (null == A
                                                  ? void 0
                                                  : A.onBeforeSubmit) &&
                                                A.onBeforeSubmit(),
                                              (e.next = 4),
                                              b(u, r)
                                            );
                                          case 4:
                                            T(), (e.next = 10);
                                            break;
                                          case 7:
                                            (e.prev = 7),
                                              (e.t0 = e.catch(0)),
                                              g(e.t0);
                                          case 10:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 7]]
                                  );
                                })
                              );
                              return function (e) {
                                return r.apply(this, arguments);
                              };
                            })(),
                            onCancel: function () {
                              g({
                                retcode: "PASSWORD_CANCEL",
                                retmsg: i.PASSWORD_CANCEL,
                              });
                            },
                            onHide: function () {
                              g({
                                retcode: "PASSWORD_CANCEL",
                                retmsg: i.PASSWORD_CANCEL,
                              });
                            },
                            onError: function (e) {
                              g(e);
                            },
                          }),
                          (E.next = 34);
                        break;
                      case 30:
                        return (
                          "function" ==
                            typeof (null == A ? void 0 : A.onBeforeSubmit) &&
                            A.onBeforeSubmit(),
                          (E.next = 33),
                          b(u, "")
                        );
                      case 33:
                        T();
                      case 34:
                        E.next = 39;
                        break;
                      case 36:
                        (E.prev = 36),
                          (E.t3 = E.catch(20)),
                          g(E.t3),
                          (null == E.t3 ? void 0 : E.t3.retcode) &&
                            101321104 == +E.t3.retcode &&
                            ((N = l.connector.getPacketDropInfo()),
                            (O = 0),
                            (null == N ? void 0 : N.hasDropped) &&
                              (O = Date.now() - N.timestamp <= 1e4 ? 1 : 2),
                            f.reportEventSafely(
                              "mon_cancel_delay_withdowngrade",
                              {
                                ext3: O,
                                ext4: "".concat(u.market, "_").concat(u.code),
                                ext5: S.status,
                                ext6: S.readyState,
                              }
                            ));
                      case 39:
                      case "end":
                        return E.stop();
                    }
                },
                E,
                null,
                [
                  [4, 17],
                  [20, 36],
                ]
              );
            })
          );
          return function (e, t) {
            return E.apply(this, arguments);
          };
        })()
      );
    },
  };
};
