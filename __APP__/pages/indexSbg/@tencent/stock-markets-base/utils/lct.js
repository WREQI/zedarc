require("../../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  i = function (e, t) {
    for (var n in t || (t = {})) a.call(t, n) && u(e, n, t[n]);
    if (c) {
      var i,
        s = r(c(t));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          n = i.value;
          o.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  s = function (e, t, r) {
    return new Promise(function (n, c) {
      var a = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            c(e);
          }
        },
        o = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            c(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  p = require("../../../../../common/vendor.js"),
  l = require("../../stock-base/service/common/utils.js"),
  d = require("../../stock-base/service/api/request.js"),
  f = "https://www.tencentwm.com/h5/v6/pages",
  m = "".concat(f, "/product"),
  v = function (r) {
    for (
      var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), a = 1;
      a < n;
      a++
    )
      c[a - 1] = arguments[a];
    return s(exports, [r].concat(c), function (r) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return e().mark(function c() {
        var a, o, u, i;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                try {
                  (a = r),
                    (o = n),
                    (p.StockBridge.ENV !== p.EnvTypeEnum.MP &&
                      p.dist.detect().env.IS_LCT) ||
                      (o.lctfrom = "tx_stock"),
                    (u = Object.entries(o)
                      .filter(function (e) {
                        return null != t(e, 2)[1];
                      })
                      .map(function (e) {
                        var r = t(e, 2),
                          n = r[0],
                          c = r[1];
                        return ""
                          .concat(encodeURIComponent(n), "=")
                          .concat(encodeURIComponent(String(c)));
                      })
                      .join("&")) &&
                      ((i = a.includes("?") ? "&" : "?"),
                      (a = "".concat(a).concat(i).concat(u))),
                    p.StockBridge.ENV === p.EnvTypeEnum.MP
                      ? p.wx$1.openEmbeddedMiniProgram({
                          appId: "wxcc8a51267886fec4",
                          path: "pages/webview/index2?url=".concat(
                            encodeURIComponent(a)
                          ),
                        })
                      : p.StockBridge.openExtraWebview(a, {}, {});
                } catch (e) {}
              case 1:
              case "end":
                return e.stop();
            }
        }, c);
      })();
    });
  };
(exports.openLctFundPage = function (t, r) {
  for (
    var n = arguments.length, c = new Array(n > 2 ? n - 2 : 0), a = 2;
    a < n;
    a++
  )
    c[a - 2] = arguments[a];
  return s(exports, [t, r].concat(c), function (t, r) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return e().mark(function c() {
      var a, o, u, b;
      return e().wrap(function (c) {
        for (;;)
          switch ((c.prev = c.next)) {
            case 0:
              if (
                ((a = i({ source: p.OriginTypeEnum.mpweapp }, n)),
                "FMlctW279010002" === r)
              ) {
                c.next = 3;
                break;
              }
              return c.abrupt(
                "return",
                void v(
                  "".concat(f, "/action/fund-exist-jump/index"),
                  i({ fund_code: t, stat_data_fm: r }, a)
                )
              );
            case 3:
              return (
                (c.next = 5),
                (function (t) {
                  return s(
                    exports,
                    null,
                    e().mark(function r() {
                      var n, c, a, o;
                      return e().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (t) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", "");
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (a = l.getApiFullUrl(
                                    "ifzqgtimg/appstock/fund/trade/fundInfo",
                                    l.API_HOST_ENUM.PROXY_QQ,
                                    p.StockBridge.ENV === p.EnvTypeEnum.MP
                                  )),
                                  (e.next = 6),
                                  d.request({
                                    url: a,
                                    method: p.RequestTypeEnum.GET,
                                    data: { code: "jj".concat(t) },
                                  })
                                );
                              case 6:
                                return (
                                  (o = e.sent),
                                  e.abrupt(
                                    "return",
                                    (null ==
                                    (c =
                                      null == (n = null == o ? void 0 : o.data)
                                        ? void 0
                                        : n.lct_pid)
                                      ? void 0
                                      : c.length) > 0
                                      ? o.data.lct_pid
                                      : ""
                                  )
                                );
                              case 10:
                                return (
                                  (e.prev = 10),
                                  (e.t0 = e.catch(2)),
                                  e.abrupt("return", "")
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        r,
                        null,
                        [[2, 10]]
                      );
                    })
                  );
                })(t)
              );
            case 5:
              (o = c.sent),
                (u = i({ fund_code: t, stat_data_fm: r }, a)),
                (b = "".concat(m, "/detail/index")),
                o
                  ? ((u.spid = o),
                    (b =
                      "https://www.txfund.com/h5/v6/pages/product/detail/index"))
                  : (u.online_status = 0),
                v(b, u);
            case 9:
            case "end":
              return c.stop();
          }
      }, c);
    })();
  });
}),
  (exports.openLctManagerPage = function (t, r) {
    for (
      var n = arguments.length, c = new Array(n > 2 ? n - 2 : 0), a = 2;
      a < n;
      a++
    )
      c[a - 2] = arguments[a];
    return s(exports, [t, r].concat(c), function (t, r) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return e().mark(function c() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                v(
                  "".concat(m, "/manager/index"),
                  i({ manager_code: t, stat_data_fm: r }, n)
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, c);
      })();
    });
  });
