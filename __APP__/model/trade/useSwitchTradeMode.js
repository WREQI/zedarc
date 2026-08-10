var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("../../service/aegis/platform/not-wujie.js"),
  i = require("../../config/enum.js"),
  a = require("../../utils/market.js"),
  o = require("../account/usePersonal.js"),
  u = require("../../config/key.js");
require("../../service/broker.js");
var s = require("../../utils/getPlatform.js"),
  d = require("../../config/broker/11100/index.js");
exports.useSwitchTradeMode = function () {
  s.getPlatform();
  var c,
    l,
    p = t.ref(!1),
    v = t.ref(i.TRADE_MODE.STANDARD),
    D = o.usePersonal().setUserSetting;
  return {
    tradeMode: v,
    canSwitchTradeMode: p,
    initTradeMode:
      ((l = r(
        e().mark(function r() {
          var n,
            o,
            s,
            d,
            c,
            l,
            D,
            f,
            T,
            m,
            E,
            g = arguments;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (n = g.length > 0 && void 0 !== g[0] ? g[0] : {}),
                    (o = n.embeddedMode),
                    (s = void 0 !== o && o),
                    (d = n.tradeModeInitialVal),
                    (c = void 0 === d ? i.TRADE_MODE.STANDARD : d),
                    (l = n.market),
                    (D = void 0 === l ? "" : l),
                    (f = n.stockType),
                    (T = void 0 === f ? "" : f),
                    s &&
                      (a.isHSMarket(D) &&
                      (a.isFundByHQStockType(T) || a.isAMarketByHQStockType(T))
                        ? ((p.value = !0),
                          (m = t.index.getStorageSync(u.LAST_TRADE_MODE) || {}),
                          (E = m.mode),
                          (v.value = (E || c).toUpperCase()))
                        : ((p.value = !1), (v.value = i.TRADE_MODE.STANDARD)));
                case 2:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return l.apply(this, arguments);
      }),
    updateTradeMode:
      ((c = r(
        e().mark(function a(o) {
          var s, c, l, p;
          return e().wrap(function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  (v.value = o),
                    t.index.setStorageSync(u.LAST_TRADE_MODE, { mode: o });
                  try {
                    requireMiniProgram &&
                      (null ==
                        (c =
                          null == (s = requireMiniProgram())
                            ? void 0
                            : s.main2Plugin()) ||
                        c.updateBrokerUserSetting({
                          brokercode: d.brokerConfig.base.code,
                          isTradeEmbedded: !0,
                          embeddedTradeMode: o,
                        }));
                  } catch (e) {
                    null ==
                      (p =
                        null == (l = n.aegisReporter)
                          ? void 0
                          : l.reportEvent) ||
                      p.call(l, "updateBrokerUserSetting-by-trademode", {
                        ext4: JSON.stringify(e),
                      });
                  }
                  !(function () {
                    var t = r(
                      e().mark(function r(t) {
                        return e().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    D({
                                      order_mode:
                                        t === i.TRADE_MODE.STANDARD ? "0" : "1",
                                    })
                                  );
                                case 3:
                                  e.next = 8;
                                  break;
                                case 5:
                                  (e.prev = 5),
                                    (e.t0 = e.catch(0)),
                                    n.aegisReporter.reportEvent(
                                      "EMBEDDED-TRADE-UPDATE-TRADEMODE-ERROR",
                                      { ext3: JSON.stringify(e.t0) }
                                    );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          },
                          r,
                          null,
                          [[0, 5]]
                        );
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()(o);
                case 3:
                case "end":
                  return a.stop();
              }
          }, a);
        })
      )),
      function (e) {
        return c.apply(this, arguments);
      }),
  };
};
