var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  i = function (e, t) {
    for (var i in t || (t = {})) o.call(t, i) && u(e, i, t[i]);
    if (n) {
      var c,
        s = r(n(t));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          i = c.value;
          a.call(t, i) && u(e, i, t[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  c = require("../../../../../common/vendor.js"),
  s =
    require("../utils/util.js").isMp() && c.StockBridge && c.StockBridge.request
      ? c.StockBridge.request
      : function (r) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          return (
            (a = exports),
            (u = [r].concat(n)),
            (s = function (r) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "GET",
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
              return e().mark(function a() {
                var u, s, l;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (u = require("axios")),
                          t &&
                            "get" === t.toLowerCase() &&
                            (o.params = i(i({}, o.params), n)),
                          (null == n ? void 0 : n.addWzqSign) &&
                            (delete n.addWzqSign,
                            (s = null == n ? void 0 : n.signkey),
                            delete n.signkey,
                            (l = ""
                              .concat(
                                Object.keys(n)
                                  .sort()
                                  .map(function (e) {
                                    return "".concat(e, "=").concat(n[e]);
                                  })
                                  .join("&"),
                                "&key="
                              )
                              .concat(s || "01d16d0a381fbda39775faa1dff16446")),
                            (n.sign = c.md5Module(l))),
                          (e.next = 4),
                          u.request(i({ url: r, method: t, data: n }, o))
                        );
                      case 4:
                        return e.abrupt("return", e.sent.data);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, a);
              })();
            }),
            new Promise(function (e, r) {
              var t = function (e) {
                  try {
                    o(s.next(e));
                  } catch (e) {
                    r(e);
                  }
                },
                n = function (e) {
                  try {
                    o(s.throw(e));
                  } catch (e) {
                    r(e);
                  }
                },
                o = function (r) {
                  return r.done
                    ? e(r.value)
                    : Promise.resolve(r.value).then(t, n);
                };
              o((s = s.apply(a, u)).next());
            })
          );
          var a, u, s;
        };
exports.request = s;
