var e = require("../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../@babel/runtime/helpers/Objectvalues");
var r,
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../../../service/aegis/platform/not-wujie.js"),
  c = require("../../../../service/static-resource.js"),
  s = require("../../../../common/vendor.js"),
  u = { fetchFail: "0", splitFail: "1" },
  i = {},
  o = !1,
  l = [];
function d() {
  return new Promise(
    (function () {
      var e = n(
        t().mark(function e(n, d) {
          var p;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (i && !s.isEmpty(i)) {
                      e.next = 18;
                      break;
                    }
                    if (!o) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      l.push({ resolve: n, reject: d })
                    );
                  case 3:
                    return (
                      (e.prev = 3),
                      (o = !0),
                      (e.next = 7),
                      c.requestStatic("/address-data/province.json")
                    );
                  case 7:
                    for (p = e.sent, o = !1; (r = l.shift()); ) r.resolve(p);
                    (i = p), n(p), (e.next = 16);
                    break;
                  case 12:
                    for (
                      e.prev = 12, e.t0 = e.catch(3), o = !1;
                      (r = l.shift());

                    )
                      r.reject({
                        retcode: u.fetchFail,
                        retmsg: "网络繁忙 请重试[-1]",
                      });
                    (i = {}),
                      a.aegisReporter.reportEvent("FETCH_ADDRESS_DATA_ERR", {
                        ext2: "province-data",
                      }),
                      d({
                        retcode: u.fetchFail,
                        retmsg: "网络繁忙 请重试[-1]",
                      });
                  case 16:
                    e.next = 19;
                    break;
                  case 18:
                    n(i);
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[3, 12]]
          );
        })
      );
      return function (r, t) {
        return e.apply(this, arguments);
      };
    })()
  );
}
var p = {};
function v(e) {
  return new Promise(
    (function () {
      var r = n(
        t().mark(function r(n, s) {
          var i;
          return t().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (!p[e]) {
                      r.next = 2;
                      break;
                    }
                    return r.abrupt("return", n(p[e]));
                  case 2:
                    return (
                      (r.prev = 2),
                      (r.next = 5),
                      c.requestStatic(
                        "/address-data/cities/".concat(e, ".json")
                      )
                    );
                  case 5:
                    (i = r.sent), (p[e] = i), n(i), (r.next = 12);
                    break;
                  case 9:
                    (r.prev = 9),
                      (r.t0 = r.catch(2)),
                      a.aegisReporter.reportEvent("FETCH_ADDRESS_DATA_ERR", {
                        ext2: "province-".concat(e),
                      }),
                      s({
                        retcode: u.fetchFail,
                        retmsg: "网络繁忙 请重试[-2]",
                      });
                  case 12:
                  case "end":
                    return r.stop();
                }
            },
            r,
            null,
            [[2, 9]]
          );
        })
      );
      return function (e, t) {
        return r.apply(this, arguments);
      };
    })()
  );
}
function f(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    if (e.startsWith(n.name)) return { item: n, i: t };
  }
  throw "does not matched";
}
function h() {
  var r,
    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return null == (r = Object.values(t))
    ? void 0
    : r.reduce(function (r, t) {
        return [].concat(e(r), e(t));
      }, []);
}
var b,
  x,
  m = {
    splitAddress:
      ((x = n(
        t().mark(function e(r) {
          var n,
            a,
            c,
            i,
            o,
            l,
            p,
            b,
            x,
            m,
            k,
            g,
            w,
            y = arguments;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = y.length > 1 && void 0 !== y[1] ? y[1] : {}),
                      (a = n.ignoreFail),
                      (c = void 0 !== a && a),
                      (i = null),
                      (o = null),
                      (l = null),
                      (p = 0),
                      (b = r),
                      r)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", ["", "", "", ""]);
                  case 5:
                    return (e.prev = 5), (e.next = 8), d();
                  case 8:
                    return (
                      (x = e.sent),
                      (m = f(r, h(x))),
                      (i = m.item),
                      (b = b.slice(i.name.length)),
                      (e.next = 13),
                      v(i.code)
                    );
                  case 13:
                    if (((k = e.sent), !s.isEmpty(k))) {
                      e.next = 16;
                      break;
                    }
                    throw { retcode: u.splitFail, retmsg: "has not city data" };
                  case 16:
                    return (
                      (g = h(k)),
                      (m = f(b, g)),
                      (o = m.item),
                      (p = m.i),
                      (w = g[p].children),
                      (b = b.slice(o.name.length)),
                      w &&
                        ((m = f(b, h(w))),
                        (l = m.item),
                        (b = b.slice(l.name.length))),
                      e.abrupt("return", [
                        null == i ? void 0 : i.name,
                        null == o ? void 0 : o.name,
                        null == l ? void 0 : l.name,
                        b,
                      ])
                    );
                  case 23:
                    if (
                      ((e.prev = 23),
                      (e.t0 = e.catch(5)),
                      !c && e.t0.retcode === u.fetchFail)
                    ) {
                      e.next = 27;
                      break;
                    }
                    return e.abrupt("return", [
                      null == i ? void 0 : i.name,
                      null == o ? void 0 : o.name,
                      null == l ? void 0 : l.name,
                      b,
                    ]);
                  case 27:
                    throw e.t0;
                  case 28:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[5, 23]]
          );
        })
      )),
      function (e) {
        return x.apply(this, arguments);
      }),
    getSelected:
      ((b = n(
        t().mark(function e(r) {
          var n,
            a,
            c,
            s,
            u,
            o,
            l,
            p,
            f,
            b,
            x = arguments;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = x.length > 1 && void 0 !== x[1] ? x[1] : {}),
                      (a = n.ignoreFail),
                      (c = void 0 !== a && a),
                      (e.prev = 2),
                      (e.next = 5),
                      d()
                    );
                  case 5:
                    e.next = 11;
                    break;
                  case 7:
                    if (((e.prev = 7), (e.t0 = e.catch(2)), c)) {
                      e.next = 11;
                      break;
                    }
                    throw e.t0;
                  case 11:
                    if (
                      ((s = {
                        idxs: [null, null, null],
                        datas: [i, null, null],
                        codes: [null, null, null],
                      }),
                      (f = !1),
                      r[0])
                    ) {
                      e.next = 17;
                      break;
                    }
                    return (e.next = 16), d();
                  case 16:
                    return e.abrupt("return", s);
                  case 17:
                    if (
                      ((e.prev = 17),
                      (o = h(i)),
                      (u =
                        null == o
                          ? void 0
                          : o.findIndex(function (e) {
                              return e.name === r[0];
                            })),
                      o && -1 !== u)
                    ) {
                      e.next = 20;
                      break;
                    }
                    throw "no current province's data";
                  case 20:
                    (s.idxs[0] = u),
                      (l = o[u]),
                      (f = l.direct),
                      (p = l.code),
                      (s.codes[0] = p),
                      f && (s.codes[1] = p),
                      (e.next = 26);
                    break;
                  case 23:
                    return (
                      (e.prev = 23), (e.t1 = e.catch(17)), e.abrupt("return", s)
                    );
                  case 26:
                    return (b = {}), (e.prev = 27), (e.next = 30), v(p);
                  case 30:
                    if (
                      ((b = e.sent),
                      (s.datas[1] = Object.keys(b).length ? b : null),
                      r[1])
                    ) {
                      e.next = 34;
                      break;
                    }
                    return e.abrupt("return", s);
                  case 34:
                    e.next = 40;
                    break;
                  case 36:
                    if (((e.prev = 36), (e.t2 = e.catch(27)), c)) {
                      e.next = 40;
                      break;
                    }
                    throw e.t2;
                  case 40:
                    if (
                      ((e.prev = 40),
                      (o = h(s.datas[1])),
                      (u =
                        null == o
                          ? void 0
                          : o.findIndex(function (e) {
                              return e.name === r[1];
                            })),
                      o && -1 !== u)
                    ) {
                      e.next = 43;
                      break;
                    }
                    throw "no current city's data";
                  case 43:
                    if (((s.idxs[1] = u), (l = o[u]), !f)) {
                      e.next = 45;
                      break;
                    }
                    return e.abrupt("return", ((s.codes[2] = l.code), s));
                  case 45:
                    if (
                      ((s.codes[1] = l.code),
                      l.children && Object.keys(l.children).length)
                    ) {
                      e.next = 47;
                      break;
                    }
                    return e.abrupt("return", ((s.codes[2] = o[u].code), s));
                  case 47:
                    if (((s.datas[2] = o[u].children), r[2])) {
                      e.next = 49;
                      break;
                    }
                    return e.abrupt("return", s);
                  case 49:
                    if (
                      ((o = h(s.datas[2])),
                      (u =
                        null == o
                          ? void 0
                          : o.findIndex(function (e) {
                              return e.name === r[2];
                            })),
                      o && -1 !== u)
                    ) {
                      e.next = 51;
                      break;
                    }
                    throw "no current city's data";
                  case 51:
                    return e.abrupt(
                      "return",
                      ((s.idxs[2] = u), (s.codes[2] = o[u].code), s)
                    );
                  case 54:
                    return (
                      (e.prev = 54), (e.t3 = e.catch(40)), e.abrupt("return", s)
                    );
                  case 57:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [
              [2, 7],
              [17, 23],
              [27, 36],
              [40, 54],
            ]
          );
        })
      )),
      function (e) {
        return b.apply(this, arguments);
      }),
    getChildrenList: h,
    MUNICIAPLITY: ["北京市", "天津市", "上海市", "重庆市"],
  };
(exports.addressUtil = m), (exports.errType = u);
