var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../common/vendor.js");
exports.checkSupportBroker = function (n) {
  return (
    (a = this),
    (u = arguments),
    (c = function (n) {
      var a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = arguments.length > 2 ? arguments[2] : void 0;
      return e().mark(function c() {
        var o, i, p, s, l, v;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!n) {
                    e.next = 22;
                    break;
                  }
                  if (n) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return");
                case 3:
                  if (((o = /broker=(\d+)/), (i = n.match(o)))) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return", !0);
                case 6:
                  if (
                    ((p = r(i, 2)),
                    (s = p[1]),
                    t.StockBridge.ENV !== t.EnvTypeEnum.MP)
                  ) {
                    e.next = 13;
                    break;
                  }
                  if (
                    !(
                      (l = a.dealerList) &&
                      l.value &&
                      l.value.length > 0 &&
                      l.value.some(function (e) {
                        return "".concat(e.code) == "".concat(s);
                      })
                    )
                  ) {
                    e.next = 11;
                    break;
                  }
                  return e.abrupt("return", !0);
                case 11:
                  e.next = 22;
                  break;
                case 13:
                  if (
                    t.StockBridge.ENV !== t.EnvTypeEnum.WZQ &&
                    t.StockBridge.ENV !== t.EnvTypeEnum.WZQ_LITE
                  ) {
                    e.next = 22;
                    break;
                  }
                  if (
                    ((e.prev = 14),
                    (v = !1),
                    ((null == u ? void 0 : u.getApplyList()) || []).forEach(
                      function (e) {
                        e.code === s && (e.canApply || e.can_apply) && (v = !0);
                      }
                    ),
                    !v)
                  ) {
                    e.next = 18;
                    break;
                  }
                  return e.abrupt("return", !0);
                case 18:
                  e.next = 22;
                  break;
                case 20:
                  (e.prev = 20), (e.t0 = e.catch(14));
                case 22:
                  return e.abrupt("return", !1);
                case 23:
                case "end":
                  return e.stop();
              }
          },
          c,
          null,
          [[14, 20]]
        );
      })();
    }),
    new Promise(function (e, r) {
      var t = function (e) {
          try {
            o(c.next(e));
          } catch (e) {
            r(e);
          }
        },
        n = function (e) {
          try {
            o(c.throw(e));
          } catch (e) {
            r(e);
          }
        },
        o = function (r) {
          return r.done ? e(r.value) : Promise.resolve(r.value).then(t, n);
        };
      o((c = c.apply(a, u)).next());
    })
  );
  var a, u, c;
};
