var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../@babel/runtime/helpers/Objectentries");
var n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  u = function (e, r) {
    for (var t in r || (r = {})) c.call(r, t) && a(e, t, r[t]);
    if (o) {
      var u,
        s = n(o(r));
      try {
        for (s.s(); !(u = s.n()).done; ) {
          t = u.value;
          i.call(r, t) && a(e, t, r[t]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  s = require("../../../../../../common/vendor.js"),
  p = require("../../../stock-base/service/common/utils.js"),
  l = require("../../../stock-base/service/api/request.js"),
  d = require("../../../stock-crypto-modules-hq/src/config.js"),
  f = function (e, r) {
    return g(e) ? "pt".concat(r) : m(e) ? e + r : b(e) + r || "";
  },
  g = function (e) {
    return "p" === e || "pt" === e;
  },
  m = function (e) {
    return "bj" === e || "nq" === e;
  },
  b = function (e) {
    return { 0: "sz", 1: "sh", 2: "hk", 3: "us", p: "pt" }[e] || e;
  },
  v = ["mpwzq", "mpweapp"].includes("mpweapp");
function h() {
  return s.StockBridge.getStorage("choose/userGroups") || [];
}
var k = function () {
    var e,
      r,
      n = (
        null == (r = null == (e = s.wx$1) ? void 0 : e.getLaunchOptionsSync)
          ? void 0
          : r.call(e)
      )
        ? s.wx$1.getLaunchOptionsSync().scene
        : "";
    return {
      openid: s.StockBridge.getStorage("_qluin"),
      fskey: s.StockBridge.getStorage("_qlskey"),
      version: "1.0.1",
      scene: n,
    };
  },
  y = function (e) {
    var n = "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq";
    if (n) {
      var t,
        o,
        c = k(),
        i = {
          app: d.ORIGIN.mpweapp,
          appid: d.APPIDENUM.mpweapp,
          check: 11,
          new_opt: 1,
        },
        a = u(u(u({}, i), e), c);
      return (
        (t = n),
        (n =
          (o = a) && 0 !== Object.keys(o).length
            ? "".concat(t, "?").concat(
                Object.entries(o)
                  .map(function (e) {
                    var n = r(e, 2),
                      t = n[0],
                      o = n[1];
                    return ""
                      .concat(encodeURIComponent(t), "=")
                      .concat(encodeURIComponent(o.toString()));
                  })
                  .join("&")
              )
            : t),
        l.request({
          url: n,
          method: s.RequestTypeEnum.POST,
          data: a,
          options: { appendParamsApp: !0, forceCallback: !0 },
        })
      );
    }
  },
  w = function (e, r, n) {
    var t = [],
      o = (function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e.split(",").map(function (e) {
          var n = e.substr(0, e.indexOf(":"));
          if (!isNaN(n) || g(n)) {
            var t = f(n, e.substr(e.indexOf(":") + 1));
            return r
              ? (function (e) {
                  return [
                    "usDJI",
                    "usINX",
                    "usIXIC",
                    "usNDX",
                    "usHXC",
                    "usNBI",
                  ].includes(e)
                    ? "us.".concat(e.slice(2))
                    : e;
                })(t)
              : t;
          }
          return e.replace(/:/g, "");
        });
      })((null == e ? void 0 : e.join(",")) || "");
    return (
      r.map(function (e) {
        null == o ||
          o.map(function (r) {
            t.push({
              grpid: e,
              act: n,
              code: r,
              timestamp: new Date().getTime(),
            });
          });
      }),
      "".concat(encodeURIComponent(JSON.stringify(t)))
    );
  };
(exports.batchDelStock = function (e, r) {
  return new Promise(function (n, t) {
    var o = w(e, r, "sd");
    y({ seq: o })
      .then(function (e) {
        n(e);
      })
      .catch(function (e) {
        return t(e);
      });
  });
}),
  (exports.editGroup = function (e) {
    return new Promise(function (r, n) {
      var t = u(
          { grpid: e.id, grpname: e.name, act: "" !== e.id ? "gu" : "ga" },
          e
        ),
        o = { timestamp: new Date().getTime(), act: t.act };
      switch (t.act) {
        case "ga":
        case "gu":
          (o.grpid = t.grpid || "TEMP-".concat(new Date().getTime())),
            (o.grpname = t.grpname);
          break;
        case "gd":
          (o.grpid = t.grpid), (o.sync = t.sync ? 1 : 0);
          break;
        case "go":
          o.grplist = t.grplist;
          break;
        case "gs":
        case "gh":
          o.grpid = t.grpid;
          break;
        case "sa":
          if (!t.grpid) {
            var c = h().find(function (e) {
              return "全部" === e.name && 1 == +e.type;
            });
            t.grpid = c && void 0 !== c.id ? c.id : "1";
          }
          (o.grpid = t.grpid), (o.code = t.code);
          break;
        case "sd":
          if (!t.grpid) {
            var i = h().find(function (e) {
              return "全部" === e.name && 1 == +e.type;
            });
            t.grpid = i && void 0 !== i.id ? i.id : "1";
          }
          (o.grpid = t.grpid), (o.code = t.code);
          break;
        case "sp":
        case "st":
          (o.grpid = t.grpid), (o.code = t.code);
          break;
        case "so":
          (o.grpid = t.grpid), (o.codelist = t.codelist);
      }
      y({ seq: "".concat(encodeURIComponent(JSON.stringify([o]))) })
        .then(function (e) {
          r(e);
        })
        .catch(function (e) {
          return n(e);
        });
    });
  }),
  (exports.followBatchStock = function (e, r) {
    return new Promise(function (n, t) {
      var o = w(e, r, "sa");
      y({ seq: o })
        .then(function (e) {
          n(e);
        })
        .catch(function (e) {
          return t(e);
        });
    });
  }),
  (exports.getSymbol = f),
  (exports.queryUserStock = function (r) {
    return new Promise(function (r, n) {
      return (
        (t = exports),
        null,
        (o = e().mark(function t() {
          var o, c, i, a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (o = p.getApiFullUrl(
                        "newstock/stockapp/zixuangu/stocklist",
                        p.API_HOST_ENUM.PROXY_QQ,
                        v
                      )),
                      (c = {
                        range: "group",
                        followedVer: 0,
                        allInfoVer: 0,
                        all_groups: 1,
                        check: 11,
                        new_opt: 1,
                        appid: "wx4ffb369b6881ee5e",
                      }),
                      (i = k()),
                      (e.next = 6),
                      l.request({
                        url: o,
                        method: s.RequestTypeEnum.GET,
                        data: u(u({}, c), i),
                        options: { appendParamsApp: !0, forceCallback: !0 },
                      })
                    );
                  case 6:
                    !(a = e.sent) || (void 0 !== a.code && 0 != +a.code)
                      ? n(a)
                      : r(a),
                      (e.next = 13);
                    break;
                  case 10:
                    (e.prev = 10), (e.t0 = e.catch(0)), n(e.t0);
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 10]]
          );
        })),
        new Promise(function (e, r) {
          var n = function (e) {
              try {
                i(o.next(e));
              } catch (e) {
                r(e);
              }
            },
            c = function (e) {
              try {
                i(o.throw(e));
              } catch (e) {
                r(e);
              }
            },
            i = function (r) {
              return r.done ? e(r.value) : Promise.resolve(r.value).then(n, c);
            };
          i((o = o.apply(t, null)).next());
        })
      );
      var t, o;
    });
  });
