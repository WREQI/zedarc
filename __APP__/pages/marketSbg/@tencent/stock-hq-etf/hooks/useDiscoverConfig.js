var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, t, r) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, u);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  f = require("../../../../../common/vendor.js"),
  d = require("../../stock-hq-data/index.js"),
  p = (function (e) {
    return (e.HOT = "hot"), (e.INDEX = "index"), (e.GLOBAL = "global"), e;
  })(p || {}),
  v = {
    appid: "hq",
    schemaid: "new_eft_discover_block",
    sort: "launch_date",
    order: "desc",
  },
  h = null;
(exports.DiscoverType = p),
  (exports.useDiscoverConfig = function (n) {
    h ||
      (h = new d.DetailApi(function (e) {
        return n.request(e);
      }));
    var p = f.ref({}),
      m = f.ref({});
    function b(e) {
      return (
        new Date().getTime() >
        new Date(null == e ? void 0 : e.launch_date).getTime()
      );
    }
    function y() {
      return l(this, arguments, function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return t().mark(function n() {
          var o, a;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (o = Array.isArray(e) ? r(e) : [e]),
                    (a = []),
                    o.forEach(function (e) {
                      var t;
                      (Array.isArray(
                        null == (t = null == e ? void 0 : e.stock_info)
                          ? void 0
                          : t.list
                      )
                        ? e.stock_info.list
                        : []
                      ).forEach(function (e) {
                        a.push(e.id);
                      });
                    }),
                    (t.next = 5),
                    h.getQTs(a, { getAll: !0, encode: "utf8" })
                  );
                case 5:
                  return t.abrupt("return", t.sent);
                case 6:
                case "end":
                  return t.stop();
              }
          }, n);
        })();
      });
    }
    function g(e) {
      return e && "--" !== e ? (d.utils.splitSymbol(e) || {}).scode : "";
    }
    function w(e) {
      return e > 0 ? "rise" : e < 0 ? "drop" : "equal";
    }
    function x(e) {
      return e && "--" !== e
        ? +e > 0
          ? "+".concat(e, "%")
          : "".concat(e, "%")
        : "--";
    }
    function D(t, r) {
      var n,
        l = Array.isArray(
          null == (n = null == t ? void 0 : t.stock_info) ? void 0 : n.list
        )
          ? t.stock_info.list
          : [];
      return (
        l.length > 0 &&
          (t.stockList = l.map(function (t) {
            var n,
              l,
              f = r[t.id] || {};
            return (
              (n = (function (t, r) {
                for (var n in r || (r = {})) i.call(r, n) && s(t, n, r[n]);
                if (u) {
                  var o,
                    a = e(u(r));
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      n = o.value;
                      c.call(r, n) && s(t, n, r[n]);
                    }
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                }
                return t;
              })({}, t)),
              (l = {
                codeformat: g(t.id),
                zdfclass: w(f[32] || 0),
                zdfformat: x(f[32]),
                weekzdfclass: w(f[63] || 0),
                weekzdfformat: x(f[63]),
                monthzdfclass: w(f[70] || 0),
                monthzdfformat: x(f[70]),
              }),
              o(n, a(l))
            );
          })),
        t
      );
    }
    return {
      tabPageData: m,
      getTabPageData: function () {
        return l(
          this,
          null,
          t().mark(function e() {
            var r, n, o, a, u, i;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), f.Wuji.get(v);
                  case 2:
                    return (
                      (r = e.sent),
                      (n = (null == r ? void 0 : r.data) || []),
                      (o = n.filter(function (e) {
                        return "hot" === e.module_id && b(e);
                      })[0]),
                      (a = n.filter(function (e) {
                        return "index" === e.module_id && b(e);
                      })[0]),
                      (u = n.filter(function (e) {
                        return "global" === e.module_id && b(e);
                      })[0]),
                      (e.next = 9),
                      y([o, a, u])
                    );
                  case 9:
                    (i = e.sent),
                      (m.value = {
                        hot: D(o, i),
                        index: D(a, i),
                        global: D(u, i),
                      });
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
      discoverDetailData: p,
      getDiscoverDetailData: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : "hot";
        return l(
          this,
          null,
          t().mark(function r() {
            var n, o, a, u;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), f.Wuji.get(v);
                  case 2:
                    return (
                      (n = t.sent),
                      (o = ((null == n ? void 0 : n.data) || []).filter(
                        function (t) {
                          return t.module_id === e && b(t);
                        }
                      )),
                      (t.next = 6),
                      y(o)
                    );
                  case 6:
                    (a = t.sent),
                      (u = o.map(function (e) {
                        return D(e, a);
                      })),
                      (p.value = (function (e) {
                        var t = {},
                          r = f.dayjs().subtract(1, "month");
                        return (
                          e
                            .filter(function (e) {
                              return f.dayjs(e.launch_date).unix() > r.unix();
                            })
                            .forEach(function (e) {
                              var r = f.dayjs(e.launch_date).format("MM月DD日");
                              t[r] ? t[r].push(e) : (t[r] = [e]);
                            }),
                          t
                        );
                      })(u));
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        );
      },
    };
  });
