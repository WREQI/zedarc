require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  i = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, r) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var r in t || (t = {})) s.call(t, r) && l(e, r, t[r]);
    if (a) {
      var o,
        i = n(a(t));
      try {
        for (i.s(); !(o = i.n()).done; ) {
          r = o.value;
          u.call(t, r) && l(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  d = require("../../../js-cookie/src/js.cookie.js"),
  f = require("../../stock-hq-data/index.js"),
  g = require("../../stock-hq-core/utils/storage/local.js"),
  v = require("../../../../../common/vendor.js");
function h(e, t, r) {
  var n,
    o = r || {},
    i = o.noTrailing,
    c = void 0 !== i && i,
    a = o.noLeading,
    s = void 0 !== a && a,
    u = o.debounceMode,
    l = void 0 === u ? void 0 : u,
    p = !1,
    d = 0;
  function f() {
    n && clearTimeout(n);
  }
  function g() {
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    var a = this,
      u = Date.now() - d;
    function g() {
      (d = Date.now()), t.apply(a, o);
    }
    function v() {
      n = void 0;
    }
    p ||
      (s || !l || n || g(),
      f(),
      void 0 === l && u > e
        ? s
          ? ((d = Date.now()), c || (n = setTimeout(l ? v : g, e)))
          : g()
        : !0 !== c && (n = setTimeout(l ? v : g, void 0 === l ? e - u : e)));
  }
  return (
    (g.cancel = function (e) {
      var t = (e || {}).upcomingOnly,
        r = void 0 !== t && t;
      f(), (p = !r);
    }),
    g
  );
}
var m = ["SZ", "SH", "HK", "US"],
  b = ["FJ", "FJ-CX", "KJ-HB", "KJ", "LOF", "ETF", "QDII-LOF", "QDII-ETF"];
(exports.BatchAPIService = (function () {
  function n(e) {
    t(this, n);
    var r = e.request,
      o = e.ENV;
    this.Serv = new f.ChooseApi(function (e) {
      return new Promise(function (t, n) {
        "string" == typeof e && (e = { url: e });
        var a = e,
          s = a.data,
          u = void 0 === s ? {} : s,
          l = a.method,
          f = void 0 === l ? "get" : l,
          v = a.options,
          h = void 0 === v ? {} : v,
          m = e.url,
          b = e.params,
          w = void 0 === b ? {} : b;
        m = m.replace(/(\?app|&app)=[^&]*/g, "");
        var y,
          k,
          q =
            "mp" === o
              ? {
                  app: "wzqxcx",
                  appid: "wx4ffb369b6881ee5e",
                  openid: g.sls.getItem("_qluin"),
                  fskey: g.sls.getItem("_qlskey"),
                  check: 11,
                  new_opt: 1,
                }
              : {
                  app: "wzq",
                  appid: "wx9cf8c670ebd68ce4",
                  openid: d.cookie.get("wzq_qluin"),
                  fskey: d.cookie.get("wzq_qlskey"),
                  access_token: "",
                  check: 11,
                  _devId: d.cookie.get("wzq_qlskey"),
                  buildType: "rdm",
                  new_opt: 1,
                };
        r(
          m,
          f,
          p(p({}, w), q),
          ((y = p({}, h)),
          (k = {
            params: p(p({}, w), q),
            data: u,
            headers: {
              "content-type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          }),
          i(y, c(k)))
        )
          .then(function (e) {
            !e || (void 0 !== e.code && 0 != +e.code)
              ? n({ msg: e && e.msg, retmsg: e && e.msg })
              : t(e);
          })
          .catch(function (e) {
            n(e);
          });
      });
    });
  }
  return (
    r(n, [
      {
        key: "queryUserStock",
        value: function () {
          return (
            (t = this),
            null,
            (r = e().mark(function t() {
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          this.Serv.queryUserStock({
                            range: "group",
                            followedVer: 0,
                            allInfoVer: 0,
                            all_groups: 1,
                          })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                this
              );
            })),
            new Promise(function (e, n) {
              var o = function (e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    n(e);
                  }
                },
                i = function (e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    n(e);
                  }
                },
                c = function (t) {
                  return t.done
                    ? e(t.value)
                    : Promise.resolve(t.value).then(o, i);
                };
              c((r = r.apply(t, null)).next());
            })
          );
          var t, r;
        },
      },
    ]),
    n
  );
})()),
  (exports.date2Str = function (e, t, r) {
    var n = e.getFullYear(),
      o = e.getMonth() + 1,
      i = e.getDate(),
      c = e.getHours(),
      a = e.getMinutes(),
      s = e.getSeconds();
    return (
      (o = o < 10 ? "0".concat(o) : o),
      (i = i < 10 ? "0".concat(i) : i),
      (c = c < 10 ? "0".concat(c) : c),
      (a = a < 10 ? "0".concat(a) : a),
      (s = s < 10 ? "0".concat(s) : s),
      (t = t || "%Y-%M-%d %h:%m:%s")
        .replace(/%Y/g, n)
        .replace(/%M/g, o)
        .replace(/%d/g, i)
        .replace(/%h/g, c)
        .replace(/%m/g, a)
        .replace(/%s/g, s)
    );
  }),
  (exports.debounce = function (e, t, r) {
    var n = {}.atBegin;
    return h(e, t, { debounceMode: !1 !== (void 0 !== n && n) });
  }),
  (exports.getHighlightText = function (e, t) {
    var r = Array.isArray(e) ? e.join("|") : e;
    r = r.replace(/(\*|\.|\\|\/|\(|\)|\[|\]|\?|\+)/g, "\\$1");
    var n = new RegExp("(".concat(r, ")"), "gi");
    return t.split(n);
  }),
  (exports.getIconName = function (e, t) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      n = (function (e, t) {
        return "jj" === t
          ? "cwjj"
          : b.includes(e)
          ? "cnjj"
          : f.utils.isDebt(e) ||
            f.utils.isNationalDebt(e) ||
            f.utils.isTransferableDebt(e)
          ? "zhai"
          : f.utils.isKeChuangStock(e)
          ? "kch"
          : f.utils.isChuangYeStock(e)
          ? "chy"
          : f.utils.isIndex(e) || f.utils.isCSIndex(e)
          ? "uk" === t
            ? "ukzs"
            : "ft" === t
            ? "ft"
            : "hk" === t
            ? "hkzs"
            : "us" === t
            ? "uszs"
            : "nq" === t
            ? "nqzs"
            : "hszs"
          : "";
      })(r, t);
    return "lbl-".concat(
      n ||
        (m[e] && m[e].toLowerCase()) ||
        (null == e ? void 0 : e.toLowerCase()) ||
        (null == t ? void 0 : t.toLowerCase()),
      "-market"
    );
  }),
  (exports.isInUserStock = function (e, t) {
    return (
      !!(null == t ? void 0 : t.length) && v.findIndex(t, { code: e }) >= 0
    );
  }),
  (exports.makeUrl = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = Object.keys(t);
    return r.length > 0
      ? "".concat(e, "?").concat(
          r
            .map(function (e) {
              return "".concat(e, "=").concat(encodeURIComponent(t[e]));
            })
            .join("&")
        )
      : e;
  }),
  (exports.throttle = h);
