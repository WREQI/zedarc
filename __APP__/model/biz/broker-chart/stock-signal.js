var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var s = require("../../../common/vendor.js");
require("../../../service/broker.js");
var n = require("../../../stores/user/useUserinfo.js"),
  i = require("../../../utils/getPlatform.js"),
  a = require("./band-assist.js"),
  o = require("../../../config/broker/11100/index.js");
function u(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  return a.isBandAssistSupportedStockClass(e, r);
}
exports.useStockSignalVisibility = function (c) {
  var l,
    f,
    v = c.scode,
    b = c.market,
    k = i.getPlatform().isOEM,
    d =
      "ZHONGXINJIANTOU" === (null == (l = o.brokerConfig.base) ? void 0 : l.id),
    p = (o.brokerConfig.dictionary || {}).Enties,
    m = void 0 === p ? {} : p,
    g = !!m.stockSignal && !(null == (f = m.stockSignal) ? void 0 : f.hidden),
    q = s.ref(!1),
    x = s.ref({ stockClass: "", stockType: "" }),
    S = s.computed(function () {
      var e = x.value;
      return u(e.stockClass, e.stockType);
    }),
    h = s.computed(function () {
      return !k && d && g && S.value;
    }),
    j = s.computed(function () {
      return h.value && q.value;
    }),
    y = n.useUserinfoStore(),
    C = y.getUserInfo,
    T = y.forceGetUserInfo,
    U = !1;
  function A(e) {
    q.value = "1" === e.stock_signal_status;
  }
  return (
    s.onBeforeUnmount(function () {
      U = !0;
    }),
    t(
      e().mark(function t() {
        var s, n, i, o, c;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (k || !d) {
                    e.next = 21;
                    break;
                  }
                  return (
                    (e.prev = 1),
                    (e.next = 4),
                    Promise.all([C(), a.fetchBandAssistStockQuoteMeta(v, b)])
                  );
                case 4:
                  if (
                    ((s = e.sent), (n = r(s, 2)), (i = n[0]), (o = n[1]), !U)
                  ) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return");
                case 10:
                  if (
                    ((x.value = o), A(i), !g || !u(o.stockClass, o.stockType))
                  ) {
                    e.next = 17;
                    break;
                  }
                  return (e.next = 13), T({ action: 1 });
                case 13:
                  if (((c = e.sent), !U)) {
                    e.next = 16;
                    break;
                  }
                  return e.abrupt("return");
                case 16:
                  c && A(c);
                case 17:
                  e.next = 21;
                  break;
                case 19:
                  (e.prev = 19), (e.t0 = e.catch(1));
                case 21:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[1, 19]]
        );
      })
    )(),
    { isAvailable: h, isEffective: j, isSubscribed: q }
  );
};
