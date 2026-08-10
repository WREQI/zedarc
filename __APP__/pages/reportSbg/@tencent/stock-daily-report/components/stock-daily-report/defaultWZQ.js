var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../../@babel/runtime/helpers/inherits"),
  i = require("../../../../../../@babel/runtime/helpers/createSuper"),
  r = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  s = require("../../../../../../@babel/runtime/helpers/createClass"),
  a = require("../../../../../../@babel/runtime/helpers/typeof"),
  l = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  c = Object.defineProperty,
  u = Object.defineProperties,
  d = Object.getOwnPropertyDescriptors,
  p = Object.getOwnPropertySymbols,
  f = Object.prototype.hasOwnProperty,
  h = Object.prototype.propertyIsEnumerable,
  v = function (t, e, n) {
    return e in t
      ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  g = function (t, e) {
    for (var n in e || (e = {})) f.call(e, n) && v(t, n, e[n]);
    if (p) {
      var i,
        r = l(p(e));
      try {
        for (r.s(); !(i = r.n()).done; ) {
          n = i.value;
          h.call(e, n) && v(t, n, e[n]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  b = function (t, e) {
    return u(t, d(e));
  },
  m = function (t, e, n) {
    return new Promise(function (i, r) {
      var o = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        a = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(o, s);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  y = require("../../../../../../common/vendor.js"),
  _ = require("../../../../js-cookie/src/js.cookie.js"),
  k = require("../../../stock-news-core/utils/request/index.js"),
  S = require("../../../stock-news-base/service/news/gray.js"),
  x = require("../../../stock-crypto-modules-config/dist/index.js"),
  w = require("../../../stock-halfscreen-editor/hooks/outter/useHalfEditor.js"),
  q = require("../../../stock-base/visibilityObserver/index.js"),
  T = require("../../../stock-community-ui/utils/mixins/securityCheck/index.js"),
  j = function (t) {
    var e, n, i, r, o, s, l, c, u, d, p, f;
    if (null === t || "object" != a(t))
      return { desc: String(null != t ? t : "") };
    var h = g({}, t);
    return b(g({}, h), {
      type: String(null != (e = null == t ? void 0 : t.type) ? e : ""),
      desc: String(null != (n = null == t ? void 0 : t.desc) ? n : ""),
      tag: String(null != (i = null == t ? void 0 : t.tag) ? i : ""),
      height: String(null != (r = null == t ? void 0 : t.height) ? r : ""),
      width: String(null != (o = null == t ? void 0 : t.width) ? o : ""),
      url: String(null != (s = null == t ? void 0 : t.url) ? s : ""),
      vid: String(null != (l = null == t ? void 0 : t.vid) ? l : ""),
      duration: String(null != (c = null == t ? void 0 : t.duration) ? c : ""),
      link: String(null != (u = null == t ? void 0 : t.link) ? u : ""),
      id: String(null != (d = null == t ? void 0 : t.id) ? d : ""),
      comment: String(null != (p = null == t ? void 0 : t.comment) ? p : ""),
      module_id: String(
        null != (f = null == t ? void 0 : t.module_id) ? f : ""
      ),
    });
  },
  C = function (t) {
    var e, n, i;
    if (t && "object" == a(t)) {
      var r = g({}, t),
        o = Array.isArray(t.content) ? t.content : [];
      return b(g({}, r), {
        title: String(null != (e = null == t ? void 0 : t.title) ? e : ""),
        tab_title: String(
          null != (n = null == t ? void 0 : t.tab_title) ? n : ""
        ),
        contents: o.map(j),
        sub_title: String(
          null != (i = null == t ? void 0 : t.sub_title) ? i : ""
        ),
      });
    }
  },
  z = function (t) {
    var e,
      n,
      i = g({}, t);
    return b(g({}, i), {
      stock_code: String(null != (e = null == t ? void 0 : t.symbol) ? e : ""),
      stock_name: String(null != (n = null == t ? void 0 : t.name) ? n : ""),
    });
  };
function O(t, e, n) {
  var i,
    r = {},
    o = r.noTrailing,
    s = void 0 !== o && o,
    a = r.noLeading,
    l = void 0 !== a && a,
    c = r.debounceMode,
    u = void 0 === c ? void 0 : c,
    d = !1,
    p = 0;
  function f() {
    i && clearTimeout(i);
  }
  function h() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    var a = this,
      c = Date.now() - p;
    function h() {
      (p = Date.now()), e.apply(a, r);
    }
    function v() {
      i = void 0;
    }
    d ||
      (l || !u || i || h(),
      f(),
      void 0 === u && c > t
        ? l
          ? ((p = Date.now()), s || (i = setTimeout(u ? v : h, t)))
          : h()
        : !0 !== s && (i = setTimeout(u ? v : h, void 0 === u ? t - c : t)));
  }
  return (
    (h.cancel = function (t) {
      var e = (t || {}).upcomingOnly,
        n = void 0 !== e && e;
      f(), (d = !n);
    }),
    h
  );
}
var R = {},
  A = function (t, e) {
    var n,
      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    t && e && ((e.once = i), (R[(n = t)] = R[n] || []), R[t].push(e));
  },
  N = function t(e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if ("object" == a(e))
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          (y.isNil(e[r]) && (n ? delete e[r] : (e[r] = "")),
          i && "" === e[r] && delete e[r],
          "object" == a(e[r]) && (e[r] = t(e[r])));
    return e;
  },
  D = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
      (t = N(t, n)),
      Object.keys(t)
        .map(function (n) {
          return "".concat(n, "=").concat(
            (e
              ? encodeURIComponent
              : function (t) {
                  return t;
                })(t[n])
          );
        })
        .join("&")
    );
  },
  B = function (t) {
    var e,
      n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { searchSep: "?" },
      i = n,
      r = i.searchSep,
      o = void 0 === r ? "?" : r,
      s = (function (t, e) {
        var n = {};
        for (var i in t) f.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
        if (null != t && p) {
          var r,
            o = l(p(t));
          try {
            for (o.s(); !(r = o.n()).done; ) {
              i = r.value;
              e.indexOf(i) < 0 && h.call(t, i) && (n[i] = t[i]);
            }
          } catch (t) {
            o.e(t);
          } finally {
            o.f();
          }
        }
        return n;
      })(i, ["searchSep"]);
    if (t) e = null === o ? t : t.split(o)[1] || "";
    else if (0 !== arguments.length) return {};
    return y.parse_1(e, g({ ignoreQueryPrefix: !0 }, s));
  },
  E = (function (t) {
    return (
      (t.DOMAIN = "domain"), (t.TENPAY = "tenpay"), (t.BROKER = "broker"), t
    );
  })(E || {}),
  I = function (t) {
    return t;
  },
  P = function (t) {
    throw t;
  },
  F = ["appid", "openid", "fskey", "check", "access_token"],
  L = new Promise(function (t) {
    A("APPLOGININFO_GRANTED", function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(
        y.pickBy(
          b(g({}, y.pick(e, F)), {
            qluin: e.openid,
            qlskey: e.fskey,
            token: e.access_token,
            login_type: e.type,
          })
        )
      );
    });
  }),
  H = new Promise(function (t) {
    A("APPCLIENTINFO_GRANTED", function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(
        y.pickBy({
          appver: e.appver,
          _appver: e.appver,
          _appName: e.appName,
          client_ip: e.ip,
          deviceid: e.devid,
          device_id: e.devid,
          _devId: e.devid,
        })
      );
    });
  }),
  Z = new Promise(function (t) {
    A("APPREPORTINFO_GRANTED", function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(
        y.pickBy({
          client_ip: e.ip,
          deviceid: e.device_id,
          device_id: e.device_id,
          _devId: e.device_id,
        })
      );
    });
  }),
  X = new Promise(function (t) {
    A("CLIENT_REMAINS_GRANTED", function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(
        y.pickBy({
          _appver: e.appVersion,
          _osVer: e.os + e.osVersion,
          _local_ip: e.ip,
          _devId: e.devId,
          _mac: e.mac,
          _feature_code: e.idfv,
        })
      );
    });
  }),
  $ = (function () {
    function t(e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      o(this, t),
        (this.url = void 0),
        (this.options = void 0),
        "object" == a(e) && (n = e);
      var i = n,
        r = i.usingDefaultFilters,
        s = void 0 !== r && r,
        l = i.usingAutoAppInfoAppending,
        c = void 0 !== l && l;
      (this.url = e),
        (this.options = {
          usingDefaultFilters: s,
          usingAutoAppInfoAppending: c,
        });
    }
    return (
      s(t, [
        {
          key: "MODE",
          get: function () {
            return E;
          },
        },
        {
          key: "$request",
          value: function (t, e) {
            return m(this, arguments, function (t, e) {
              var n = this,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              return r().mark(function o() {
                var s, a, l, c, u, d, p, f, h, v, m, _, S, x, w, q;
                return r().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (s = i.usingDefaultFilters),
                          (a =
                            void 0 === s ? n.options.usingDefaultFilters : s),
                          (l = i.usingAutoAppInfoAppending),
                          (c =
                            void 0 === l
                              ? n.options.usingAutoAppInfoAppending
                              : l),
                          (u = i.appendAppLoginInfo),
                          (d = void 0 !== u && u),
                          (p = i.appendAppClientInfo),
                          (f = void 0 !== p && p),
                          (h = i.appendRemains),
                          (v = void 0 !== h && h),
                          (m = i.signLoginInfoInQuery),
                          (_ = void 0 !== m && m),
                          (S = []),
                          d && S.push(L),
                          f && S.push(H, Z),
                          v && S.push(X),
                          (S = y.uniq(S)),
                          (r.next = 5),
                          Promise.all(S)
                        );
                      case 5:
                        return (
                          (x = r.sent),
                          (w = { t: Date.now() }),
                          (q = g(
                            g(
                              { _h5ver: "" },
                              x.reduce(function (t, e) {
                                return g(g({}, t), e);
                              }, {})
                            ),
                            e
                          )),
                          r.abrupt(
                            "return",
                            (_ &&
                              c &&
                              ((w = g(
                                { t: Date.now() },
                                x.reduce(function (t, e) {
                                  return g(g({}, t), e);
                                }, {})
                              )),
                              (q = g({ _h5ver: "" }, e))),
                            k
                              .request(
                                (function (t) {
                                  var e =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {},
                                    n =
                                      arguments.length > 2 &&
                                      void 0 !== arguments[2]
                                        ? arguments[2]
                                        : {},
                                    i = n.encode,
                                    r = void 0 === i || i,
                                    o = n.remove,
                                    s = void 0 !== o && o,
                                    a = n.overwrite,
                                    l = void 0 === a || a;
                                  if (void 0 === t) return "";
                                  var c = t.split("?"),
                                    u = c
                                      .splice(
                                        0,
                                        1 === c.length ||
                                          c[c.length - 1].indexOf("#") > -1
                                          ? c.length
                                          : c.length - 1
                                      )
                                      .join("?"),
                                    d = c[0];
                                  return [
                                    u,
                                    l
                                      ? D(
                                          g(
                                            g({}, B(d, { searchSep: null })),
                                            e
                                          ),
                                          r,
                                          s
                                        )
                                      : [d, D(e, r, s)]
                                          .filter(Boolean)
                                          .join("&"),
                                  ]
                                    .filter(Boolean)
                                    .join("?");
                                })(t, w),
                                q,
                                b(g({}, i), { sigBaseAPI: 1 })
                              )
                              .then(a ? n.$dataFilter : I)
                              .catch(a ? n.$errFilter : P))
                          )
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, o);
              })();
            });
          },
        },
        {
          key: "$tradeRequest",
          value: function (t, e) {
            return m(this, arguments, function (t, e) {
              var n = this,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              return r().mark(function o() {
                return r().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return r.abrupt(
                          "return",
                          ((i.appendRemains = !0), n.$request(t, e, i))
                        );
                      case 1:
                      case "end":
                        return r.stop();
                    }
                }, o);
              })();
            });
          },
        },
        {
          key: "$get",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return this.$request(this.url, b(g({}, t), { appver: "" }), e);
          },
        },
        {
          key: "get",
          value: function () {
            return this.$get.apply(this, arguments);
          },
        },
        {
          key: "$dataFilter",
          value: function (t) {
            return t.data
              ? y.pickBy(t.data, function (t) {
                  return "" !== t;
                })
              : t.data;
          },
        },
        {
          key: "$errFilter",
          value: function (t) {
            return m(
              this,
              null,
              r().mark(function e() {
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (function () {
                            var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0;
                            return new Promise(function (e) {
                              return setTimeout(e, t);
                            });
                          })(0)
                        );
                      case 2:
                        throw b(
                          g(
                            {
                              retcode: "ERESP",
                              retmsg: "系统繁忙，请稍后再试",
                            },
                            t.data
                          ),
                          {
                            status: t.status,
                            statusText: t.statusText,
                            exinfo: t.message,
                          }
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          },
        },
      ]),
      t
    );
  })();
$.MODE = E;
var U = $,
  G = new ((function (t) {
    n(l, U);
    var e = i(l);
    function l() {
      return o(this, l), e.apply(this, arguments);
    }
    return (
      s(l, [
        {
          key: "queryDailyDetail",
          value: function (t) {
            return m(
              this,
              null,
              r().mark(function e() {
                var n,
                  i,
                  o,
                  s,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  v,
                  y,
                  _,
                  k,
                  x,
                  w,
                  q,
                  T,
                  O,
                  R,
                  A,
                  N,
                  D,
                  B,
                  E,
                  I,
                  P,
                  F,
                  L,
                  H,
                  Z,
                  X,
                  $,
                  U,
                  G,
                  M,
                  Q,
                  W,
                  V,
                  J,
                  Y;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (E = t.id),
                            (I = t.openid),
                            (P = t.fskey),
                            (e.next = 3),
                            S.isNewsGrayUser("queryPushDailyReport")
                          );
                        case 3:
                          if (!e.sent) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (e.next = 6),
                            (function (t) {
                              return m(
                                this,
                                null,
                                r().mark(function e() {
                                  return r().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return e.abrupt(
                                            "return",
                                            S.newsRequest(
                                              "/zxg/news/daily_report/query_push_daily_report",
                                              t
                                            )
                                          );
                                        case 1:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                            })({ id: E })
                          );
                        case 6:
                          (F = e.sent), (e.next = 14);
                          break;
                        case 9:
                          return (
                            (e.t0 = function (t) {
                              var e,
                                n,
                                i,
                                r,
                                o,
                                s,
                                l,
                                c,
                                u,
                                d,
                                p,
                                f,
                                h,
                                v,
                                m,
                                y,
                                _,
                                k,
                                S,
                                x,
                                w,
                                q,
                                T,
                                O,
                                R,
                                A,
                                N,
                                D,
                                B,
                                E,
                                I,
                                P,
                                F,
                                L,
                                H;
                              if (!t) return t;
                              var Z = g({}, t),
                                X =
                                  (null == t ? void 0 : t.data) &&
                                  "object" == a(t.data) &&
                                  !Array.isArray(t.data)
                                    ? t.data
                                    : null;
                              if (!X)
                                return b(g({}, Z), {
                                  code: Number(null != (e = t.code) ? e : -1),
                                  msg: String(null != (n = t.msg) ? n : ""),
                                  daily_report: void 0,
                                });
                              var $,
                                U,
                                G,
                                M,
                                Q,
                                W,
                                V = g({}, X),
                                J = (Array.isArray(X.tab) ? X.tab : []).map(
                                  function (t) {
                                    var e, n;
                                    return b(g({}, t), {
                                      tab_id: String(
                                        null !=
                                          (e = null == t ? void 0 : t.tab_id)
                                          ? e
                                          : ""
                                      ),
                                      tab_title: String(
                                        null !=
                                          (n = null == t ? void 0 : t.tab_title)
                                          ? n
                                          : ""
                                      ),
                                    });
                                  }
                                );
                              if (X.zjdx && "object" == a(X.zjdx)) {
                                var Y,
                                  K = X.zjdx,
                                  tt = g({}, K),
                                  et = Array.isArray(K.content)
                                    ? K.content
                                    : [];
                                if (K.zjrd && "object" == a(K.zjrd)) {
                                  var nt = K.zjrd,
                                    it = g({}, nt),
                                    rt = Array.isArray(nt.hot_funds_plates)
                                      ? nt.hot_funds_plates
                                      : [];
                                  Y = b(g({}, it), {
                                    title: String(
                                      null !=
                                        (i = null == nt ? void 0 : nt.title)
                                        ? i
                                        : ""
                                    ),
                                    hot_funds_plates: rt.map(function (t) {
                                      var e,
                                        n,
                                        i,
                                        r,
                                        o,
                                        s,
                                        l,
                                        c,
                                        u,
                                        d,
                                        p,
                                        f,
                                        h,
                                        v,
                                        m,
                                        y = g({}, t),
                                        _ = Array.isArray(
                                          null == t ? void 0 : t.top_stocks
                                        )
                                          ? t.top_stocks
                                          : [];
                                      if (
                                        (null == t
                                          ? void 0
                                          : t.hot_funds_etf) &&
                                        "object" == a(t.hot_funds_etf)
                                      ) {
                                        var k = g({}, t.hot_funds_etf);
                                        m = b(g({}, k), {
                                          code: String(
                                            null !=
                                              (n =
                                                null == (e = t.hot_funds_etf)
                                                  ? void 0
                                                  : e.code)
                                              ? n
                                              : ""
                                          ),
                                          name: String(
                                            null !=
                                              (r =
                                                null == (i = t.hot_funds_etf)
                                                  ? void 0
                                                  : i.name)
                                              ? r
                                              : ""
                                          ),
                                          label_name: String(
                                            null !=
                                              (s =
                                                null == (o = t.hot_funds_etf)
                                                  ? void 0
                                                  : o.label_name)
                                              ? s
                                              : ""
                                          ),
                                          price_fluctuation: String(
                                            null !=
                                              (c =
                                                null == (l = t.hot_funds_etf)
                                                  ? void 0
                                                  : l.price_fluctuation)
                                              ? c
                                              : ""
                                          ),
                                        });
                                      }
                                      return b(g({}, y), {
                                        plate_code: String(
                                          null !=
                                            (u =
                                              null == t ? void 0 : t.plate_code)
                                            ? u
                                            : ""
                                        ),
                                        plate_name: String(
                                          null !=
                                            (d =
                                              null == t ? void 0 : t.plate_name)
                                            ? d
                                            : ""
                                        ),
                                        change_percent: Number(
                                          null !=
                                            (p =
                                              null == t
                                                ? void 0
                                                : t.change_percent)
                                            ? p
                                            : 0
                                        ),
                                        net_main_inflow: Number(
                                          null !=
                                            (f =
                                              null == t
                                                ? void 0
                                                : t.net_main_inflow)
                                            ? f
                                            : 0
                                        ),
                                        funds_flow: Array.isArray(
                                          null == t ? void 0 : t.funds_flow
                                        )
                                          ? t.funds_flow
                                          : [],
                                        tags: Array.isArray(
                                          null == t ? void 0 : t.tags
                                        )
                                          ? t.tags.map(function (t) {
                                              return String(null != t ? t : "");
                                            })
                                          : [],
                                        rank_change: Number(
                                          null !=
                                            (h =
                                              null == t
                                                ? void 0
                                                : t.rank_change)
                                            ? h
                                            : 0
                                        ),
                                        pick_time: String(
                                          null !=
                                            (v =
                                              null == t ? void 0 : t.pick_time)
                                            ? v
                                            : ""
                                        ),
                                        top_stocks: _.map(function (t) {
                                          var e, n, i, r, o;
                                          return b(g({}, t), {
                                            change_percent: Number(
                                              null !=
                                                (e =
                                                  null == t
                                                    ? void 0
                                                    : t.change_percent)
                                                ? e
                                                : 0
                                            ),
                                            stock_name: String(
                                              null !=
                                                (n =
                                                  null == t
                                                    ? void 0
                                                    : t.stock_name)
                                                ? n
                                                : ""
                                            ),
                                            tag: String(
                                              null !=
                                                (i = null == t ? void 0 : t.tag)
                                                ? i
                                                : ""
                                            ),
                                            stock_code: String(
                                              null !=
                                                (r =
                                                  null == t
                                                    ? void 0
                                                    : t.stock_code)
                                                ? r
                                                : ""
                                            ),
                                            price: Number(
                                              null !=
                                                (o =
                                                  null == t ? void 0 : t.price)
                                                ? o
                                                : 0
                                            ),
                                          });
                                        }),
                                        hot_funds_etf: m,
                                      });
                                    }),
                                    update_at: String(
                                      null !=
                                        (r = null == nt ? void 0 : nt.update_at)
                                        ? r
                                        : ""
                                    ),
                                  });
                                }
                                $ = b(g({}, tt), {
                                  title: String(
                                    null != (o = null == K ? void 0 : K.title)
                                      ? o
                                      : ""
                                  ),
                                  tab_title: String(
                                    null !=
                                      (s = null == K ? void 0 : K.tab_title)
                                      ? s
                                      : ""
                                  ),
                                  contents: et.map(j),
                                  fund_hotspot: Y,
                                });
                              }
                              if (X.zxfx && "object" == a(X.zxfx)) {
                                var ot,
                                  st,
                                  at = X.zxfx,
                                  lt = g({}, at);
                                if (at.risk && "object" == a(at.risk)) {
                                  var ct = at.risk,
                                    ut = g({}, ct),
                                    dt =
                                      (null == ct ? void 0 : ct.content) &&
                                      "object" == a(ct.content)
                                        ? ct.content
                                        : {},
                                    pt = g({}, dt),
                                    ft = Array.isArray(dt.stocks)
                                      ? dt.stocks
                                      : [],
                                    ht =
                                      (null == dt ? void 0 : dt.summary) &&
                                      "object" == a(dt.summary)
                                        ? dt.summary
                                        : {},
                                    vt = g({}, ht);
                                  ot = b(g({}, ut), {
                                    tab_title: String(
                                      null !=
                                        (l = null == ct ? void 0 : ct.tab_title)
                                        ? l
                                        : ""
                                    ),
                                    content: b(g({}, pt), {
                                      summary: b(g({}, vt), {
                                        risk_perf_detail: String(
                                          null !=
                                            (c =
                                              null == ht
                                                ? void 0
                                                : ht.risk_perf_detail)
                                            ? c
                                            : ""
                                        ),
                                        risk_perf_level: String(
                                          null !=
                                            (u =
                                              null == ht
                                                ? void 0
                                                : ht.risk_perf_level)
                                            ? u
                                            : ""
                                        ),
                                        user_stock_cnt: Number(
                                          null !=
                                            (d =
                                              null == ht
                                                ? void 0
                                                : ht.user_stock_cnt)
                                            ? d
                                            : 0
                                        ),
                                        risk_stock_cnt: Number(
                                          null !=
                                            (p =
                                              null == ht
                                                ? void 0
                                                : ht.risk_stock_cnt)
                                            ? p
                                            : 0
                                        ),
                                        risk_stock_ratio: Number(
                                          null !=
                                            (f =
                                              null == ht
                                                ? void 0
                                                : ht.risk_stock_ratio)
                                            ? f
                                            : 0
                                        ),
                                        update_time: String(
                                          null !=
                                            (h =
                                              null == ht
                                                ? void 0
                                                : ht.update_time)
                                            ? h
                                            : ""
                                        ),
                                      }),
                                      stocks: ft.map(function (t) {
                                        var e,
                                          n,
                                          i,
                                          r,
                                          o,
                                          s,
                                          a,
                                          l,
                                          c = g({}, t),
                                          u = Array.isArray(
                                            null == t ? void 0 : t.risk_item
                                          )
                                            ? t.risk_item
                                            : [],
                                          d = Array.isArray(
                                            null == t ? void 0 : t.risk_item_cnt
                                          )
                                            ? t.risk_item_cnt
                                            : [];
                                        return b(g({}, c), {
                                          status: String(
                                            null !=
                                              (e =
                                                null == t ? void 0 : t.status)
                                              ? e
                                              : ""
                                          ),
                                          stock_code: String(
                                            null !=
                                              (n =
                                                null == t
                                                  ? void 0
                                                  : t.stock_code)
                                              ? n
                                              : ""
                                          ),
                                          stock_name: String(
                                            null !=
                                              (i =
                                                null == t
                                                  ? void 0
                                                  : t.stock_name)
                                              ? i
                                              : ""
                                          ),
                                          change_percent: Number(
                                            null !=
                                              (r =
                                                null == t
                                                  ? void 0
                                                  : t.change_percent)
                                              ? r
                                              : 0
                                          ),
                                          price: Number(
                                            null !=
                                              (o = null == t ? void 0 : t.price)
                                              ? o
                                              : 0
                                          ),
                                          risk_item: u.map(function (t) {
                                            var e, n, i, r;
                                            return b(g({}, t), {
                                              risk_tag: String(
                                                null !=
                                                  (e =
                                                    null == t
                                                      ? void 0
                                                      : t.risk_tag)
                                                  ? e
                                                  : ""
                                              ),
                                              risk_level: Number(
                                                null !=
                                                  (n =
                                                    null == t
                                                      ? void 0
                                                      : t.risk_level)
                                                  ? n
                                                  : 0
                                              ),
                                              level_higher: Number(
                                                null !=
                                                  (i =
                                                    null == t
                                                      ? void 0
                                                      : t.level_higher)
                                                  ? i
                                                  : 0
                                              ),
                                              is_new: Number(
                                                null !=
                                                  (r =
                                                    null == t
                                                      ? void 0
                                                      : t.is_new)
                                                  ? r
                                                  : 0
                                              ),
                                            });
                                          }),
                                          is_new: Number(
                                            null !=
                                              (s =
                                                null == t ? void 0 : t.is_new)
                                              ? s
                                              : 0
                                          ),
                                          risk_item_cnt: d.map(function (t) {
                                            return String(null != t ? t : "");
                                          }),
                                          risk_cnt: Number(
                                            null !=
                                              (a =
                                                null == t ? void 0 : t.risk_cnt)
                                              ? a
                                              : 0
                                          ),
                                          offset: Number(
                                            null !=
                                              (l =
                                                null == t ? void 0 : t.offset)
                                              ? l
                                              : 0
                                          ),
                                        });
                                      }),
                                    }),
                                  });
                                }
                                if (at.rank && "object" == a(at.rank)) {
                                  var gt = g({}, at.rank),
                                    bt = at.rank;
                                  st = b(g({}, gt), {
                                    rank: String(
                                      null !=
                                        (v = null == bt ? void 0 : bt.rank)
                                        ? v
                                        : ""
                                    ),
                                    total_number: String(
                                      null !=
                                        (y =
                                          null !=
                                          (m =
                                            null == bt
                                              ? void 0
                                              : bt.totalNumber)
                                            ? m
                                            : null == bt
                                            ? void 0
                                            : bt.total_number)
                                        ? y
                                        : ""
                                    ),
                                    rise_number: String(
                                      null !=
                                        (k =
                                          null !=
                                          (_ =
                                            null == bt ? void 0 : bt.riseNumber)
                                            ? _
                                            : null == bt
                                            ? void 0
                                            : bt.rise_number)
                                        ? k
                                        : ""
                                    ),
                                    fall_number: String(
                                      null !=
                                        (x =
                                          null !=
                                          (S =
                                            null == bt ? void 0 : bt.fallNumber)
                                            ? S
                                            : null == bt
                                            ? void 0
                                            : bt.fall_number)
                                        ? x
                                        : ""
                                    ),
                                  });
                                }
                                U = b(g({}, lt), {
                                  has_stock: Number(
                                    null !=
                                      (w = null == at ? void 0 : at.has_stock)
                                      ? w
                                      : 0
                                  ),
                                  is_history: Number(
                                    null !=
                                      (q = null == at ? void 0 : at.is_history)
                                      ? q
                                      : 0
                                  ),
                                  risk: ot,
                                  rank: st,
                                });
                              }
                              if (X.sshq && "object" == a(X.sshq)) {
                                var mt = X.sshq,
                                  yt = g({}, mt),
                                  _t = Array.isArray(mt.content)
                                    ? mt.content
                                    : [];
                                G = b(g({}, yt), {
                                  tab_title: String(
                                    null !=
                                      (T = null == mt ? void 0 : mt.tab_title)
                                      ? T
                                      : ""
                                  ),
                                  quotes: _t.map(function (t) {
                                    var e, n, i, r, o;
                                    return b(g({}, t), {
                                      stock_code: String(
                                        null !=
                                          (e = null == t ? void 0 : t.stockcode)
                                          ? e
                                          : ""
                                      ),
                                      stock_name: String(
                                        null !=
                                          (n = null == t ? void 0 : t.stockname)
                                          ? n
                                          : ""
                                      ),
                                      price: String(
                                        null !=
                                          (i = null == t ? void 0 : t.price)
                                          ? i
                                          : ""
                                      ),
                                      zde: String(
                                        null != (r = null == t ? void 0 : t.zde)
                                          ? r
                                          : ""
                                      ),
                                      zdf: String(
                                        null != (o = null == t ? void 0 : t.zdf)
                                          ? o
                                          : ""
                                      ),
                                    });
                                  }),
                                  update_at: String(
                                    null !=
                                      (O = null == mt ? void 0 : mt.update_at)
                                      ? O
                                      : ""
                                  ),
                                });
                              }
                              if (X.tcrd && "object" == a(X.tcrd)) {
                                var kt = X.tcrd,
                                  St = g({}, kt),
                                  xt = Array.isArray(kt.content)
                                    ? kt.content
                                    : [];
                                M = b(g({}, St), {
                                  tab_title: String(
                                    null !=
                                      (R = null == kt ? void 0 : kt.tab_title)
                                      ? R
                                      : ""
                                  ),
                                  concepts: xt.map(function (t) {
                                    var e,
                                      n,
                                      i,
                                      r,
                                      o,
                                      s,
                                      l,
                                      c,
                                      u = g({}, t),
                                      d = Array.isArray(
                                        null == t ? void 0 : t.top2_stocks
                                      )
                                        ? t.top2_stocks
                                        : Array.isArray(
                                            null == t ? void 0 : t.top_stocks
                                          )
                                        ? t.top_stocks
                                        : [],
                                      p =
                                        (null == t ? void 0 : t.hot_spot) &&
                                        "object" == a(t.hot_spot)
                                          ? t.hot_spot
                                          : {},
                                      f = Array.isArray(p.hot_reason)
                                        ? p.hot_reason
                                        : [],
                                      h = function (t) {
                                        var e, n, i;
                                        return b(g({}, t), {
                                          stock_code: String(
                                            null !=
                                              (e =
                                                null == t
                                                  ? void 0
                                                  : t.stock_code)
                                              ? e
                                              : ""
                                          ),
                                          stock_name: String(
                                            null !=
                                              (n =
                                                null == t
                                                  ? void 0
                                                  : t.stock_name)
                                              ? n
                                              : ""
                                          ),
                                          stock_zdf: String(
                                            null !=
                                              (i =
                                                null == t
                                                  ? void 0
                                                  : t.stock_zdf)
                                              ? i
                                              : ""
                                          ),
                                        });
                                      };
                                    return b(g({}, u), {
                                      concept_code: String(
                                        null !=
                                          (e =
                                            null == t ? void 0 : t.concept_code)
                                          ? e
                                          : ""
                                      ),
                                      concept_name: String(
                                        null !=
                                          (n =
                                            null == t ? void 0 : t.concept_name)
                                          ? n
                                          : ""
                                      ),
                                      concept_zdf: String(
                                        null !=
                                          (i =
                                            null == t ? void 0 : t.concept_zdf)
                                          ? i
                                          : ""
                                      ),
                                      hot_spot: {
                                        hot_reason: f.map(function (t) {
                                          return String(null != t ? t : "");
                                        }),
                                        hot_time: String(
                                          null !=
                                            (r =
                                              null == p ? void 0 : p.hot_time)
                                            ? r
                                            : ""
                                        ),
                                      },
                                      hot_rank: Number(
                                        null !=
                                          (o = null == t ? void 0 : t.hot_rank)
                                          ? o
                                          : 0
                                      ),
                                      concept_code_zxg: String(
                                        null !=
                                          (s =
                                            null == t
                                              ? void 0
                                              : t.concept_code_zxg)
                                          ? s
                                          : ""
                                      ),
                                      status: Number(
                                        null !=
                                          (l = null == t ? void 0 : t.status)
                                          ? l
                                          : 0
                                      ),
                                      top2_stocks: d.map(h),
                                      top_etf_funds:
                                        (null == t
                                          ? void 0
                                          : t.top_etf_funds) &&
                                        "object" == a(t.top_etf_funds)
                                          ? h(t.top_etf_funds)
                                          : void 0,
                                      update_time: String(
                                        null !=
                                          (c =
                                            null == t ? void 0 : t.update_time)
                                          ? c
                                          : ""
                                      ),
                                    });
                                  }),
                                });
                              }
                              if (X.sqry && "object" == a(X.sqry)) {
                                var wt = X.sqry,
                                  qt = g({}, wt),
                                  Tt =
                                    wt.content && "object" == a(wt.content)
                                      ? wt.content
                                      : {},
                                  jt = Array.isArray(Tt.hot_stock)
                                    ? Tt.hot_stock
                                    : [],
                                  Ct = Array.isArray(Tt.hot_topic)
                                    ? Tt.hot_topic
                                    : [];
                                Q = b(g({}, qt), {
                                  tab_title: String(
                                    null !=
                                      (A = null == wt ? void 0 : wt.tab_title)
                                      ? A
                                      : ""
                                  ),
                                  hot_stocks: jt.map(function (t) {
                                    var e, n, i, r, o;
                                    return b(g({}, t), {
                                      stock_code: String(
                                        null !=
                                          (e = null == t ? void 0 : t.symbol)
                                          ? e
                                          : ""
                                      ),
                                      stock_name: String(
                                        null !=
                                          (n = null == t ? void 0 : t.name)
                                          ? n
                                          : ""
                                      ),
                                      cnt: Number(
                                        null != (i = null == t ? void 0 : t.cnt)
                                          ? i
                                          : 0
                                      ),
                                      is_add: Number(
                                        null !=
                                          (r = null == t ? void 0 : t.is_add)
                                          ? r
                                          : 0
                                      ),
                                      zdf: String(
                                        null != (o = null == t ? void 0 : t.zdf)
                                          ? o
                                          : ""
                                      ),
                                    });
                                  }),
                                  hot_topics: Ct.map(function (t) {
                                    var e, n, i, r;
                                    return b(g({}, t), {
                                      topic_id: String(
                                        null !=
                                          (e = null == t ? void 0 : t.topic_id)
                                          ? e
                                          : ""
                                      ),
                                      topic: String(
                                        null !=
                                          (n = null == t ? void 0 : t.topic)
                                          ? n
                                          : ""
                                      ),
                                      count: Number(
                                        null !=
                                          (i = null == t ? void 0 : t.count)
                                          ? i
                                          : 0
                                      ),
                                      default_timeline: String(
                                        null !=
                                          (r =
                                            null == t
                                              ? void 0
                                              : t.default_timeline)
                                          ? r
                                          : ""
                                      ),
                                    });
                                  }),
                                });
                              }
                              if (X.gznhg && "object" == a(X.gznhg)) {
                                var zt = X.gznhg,
                                  Ot = g({}, zt),
                                  Rt =
                                    zt.content && "object" == a(zt.content)
                                      ? zt.content
                                      : {};
                                W = b(g({}, Ot), {
                                  tab_title: String(
                                    null !=
                                      (N = null == zt ? void 0 : zt.tab_title)
                                      ? N
                                      : ""
                                  ),
                                  desc: String(
                                    null != (D = null == Rt ? void 0 : Rt.desc)
                                      ? D
                                      : ""
                                  ),
                                  button_text: String(
                                    null != (B = null == Rt ? void 0 : Rt.css)
                                      ? B
                                      : ""
                                  ),
                                });
                              }
                              var At = Array.isArray(X.relate_stocks)
                                  ? X.relate_stocks
                                  : [],
                                Nt = Array.isArray(X.mention_stocks)
                                  ? X.mention_stocks
                                  : [],
                                Dt = Array.isArray(X.footernote)
                                  ? X.footernote.map(function (t) {
                                      return String(null != t ? t : "");
                                    })
                                  : [],
                                Bt = b(g({}, V), {
                                  id: String(
                                    null !=
                                      (I =
                                        null != (E = null == X ? void 0 : X.id)
                                          ? E
                                          : null == t
                                          ? void 0
                                          : t.id)
                                      ? I
                                      : ""
                                  ),
                                  type: String(
                                    null != (P = null == X ? void 0 : X.type)
                                      ? P
                                      : ""
                                  ),
                                  date: Number(
                                    null != (F = null == X ? void 0 : X.date)
                                      ? F
                                      : 0
                                  ),
                                  tabs: J,
                                  jryw: C(X.jryw),
                                  hsyp: C(X.hsyp),
                                  zjdx: $,
                                  zxfx: U,
                                  sshq: G,
                                  tcrd: M,
                                  sqry: Q,
                                  gznhg: W,
                                  agwp: C(X.agwp),
                                  agsp: C(X.agsp),
                                  relate_stocks: At.map(z),
                                  mention_stocks: Nt.map(z),
                                  footernote: Dt,
                                });
                              return b(g({}, Z), {
                                code: Number(null != (L = t.code) ? L : -1),
                                msg: String(null != (H = t.msg) ? H : ""),
                                daily_report: Bt,
                              });
                            }),
                            (e.next = 12),
                            this.$request(
                              "https://snp.tenpay.com/cgi/cgi-bin/snp/newsDailyInfo/getPushDailyDetail?id=".concat(
                                E
                              ),
                              {
                                fskey: P,
                                openid: I,
                                appid: "wx9cf8c670ebd68ce4",
                                check: "11",
                              },
                              {}
                            )
                          );
                        case 12:
                          (e.t1 = e.sent), (F = (0, e.t0)(e.t1));
                        case 14:
                          if (0 === (null == F ? void 0 : F.code)) {
                            e.next = 16;
                            break;
                          }
                          throw new Error(F.msg);
                        case 16:
                          if (
                            ((L = {}),
                            (H =
                              F.daily_report &&
                              "object" == a(F.daily_report) &&
                              !Array.isArray(F.daily_report)
                                ? F.daily_report
                                : null))
                          ) {
                            if (
                              ((L = g({}, H)),
                              (Z = Array.isArray(H.tabs) ? H.tabs : []),
                              (X = Z.length) > 0)
                            )
                              for ($ = 0; $ < X; $++)
                                if (-1 !== (U = Z[$].tab_id).indexOf("sshq"))
                                  (Z[$] = Object.assign(Z[$], {
                                    isCorrect: !0,
                                  })),
                                    (L = Object.assign(L, {
                                      isHashq: !0,
                                      front_sshq: H[U],
                                    }));
                                else if (-1 !== U.indexOf("ag"))
                                  (Z[$] = Object.assign(Z[$], {
                                    tab_id: "agsp",
                                    isCorrect: !0,
                                  })),
                                    (L = Object.assign(L, {
                                      isHasag: !0,
                                      front_agxp: H[U],
                                    }));
                                else if (-1 !== U.indexOf("zj"))
                                  (Z[$] = Object.assign(Z[$], {
                                    isCorrect: !0,
                                  })),
                                    (L = Object.assign(L, {
                                      isHaszj: !0,
                                      isZjrdContentOk:
                                        (null ==
                                        (o =
                                          null ==
                                          (i =
                                            null == (n = H[U])
                                              ? void 0
                                              : n.fund_hotspot)
                                            ? void 0
                                            : i.hot_funds_plates)
                                          ? void 0
                                          : o.length) > 0,
                                      front_zjdx: H[U],
                                    }));
                                else if (-1 !== U.indexOf("yw"))
                                  (Z[$] = Object.assign(Z[$], {
                                    isCorrect: !0,
                                  })),
                                    (L = Object.assign(L, {
                                      isHasyw: !0,
                                      isJrywContentOk:
                                        (null ==
                                        (l =
                                          null == (s = H[U])
                                            ? void 0
                                            : s.contents)
                                          ? void 0
                                          : l.length) > 0,
                                      front_jryw: H[U],
                                    }));
                                else if (-1 !== U.indexOf("yp"))
                                  (Z[$] = Object.assign(Z[$], {
                                    isCorrect: !0,
                                  })),
                                    (L = Object.assign(L, {
                                      isHasyp: !0,
                                      isHsypContentOk:
                                        (null ==
                                        (u =
                                          null == (c = H[U])
                                            ? void 0
                                            : c.contents)
                                          ? void 0
                                          : u.length) > 0,
                                      front_hsyp: H[U],
                                    }));
                                else if (-1 !== U.indexOf("fx")) {
                                  if (
                                    ((G =
                                      (null ==
                                      (h =
                                        null ==
                                        (f =
                                          null ==
                                          (p =
                                            null == (d = H[U])
                                              ? void 0
                                              : d.risk)
                                            ? void 0
                                            : p.content)
                                          ? void 0
                                          : f.stocks)
                                        ? void 0
                                        : h.length) > 0),
                                    (M =
                                      (null ==
                                      (_ =
                                        null ==
                                        (y =
                                          null == (v = H[U]) ? void 0 : v.gpdt)
                                          ? void 0
                                          : y.content)
                                        ? void 0
                                        : _.length) > 0),
                                    G)
                                  )
                                    for (
                                      Q = 0;
                                      Q < H[U].risk.content.stocks.length;
                                      Q++
                                    )
                                      (W =
                                        H[U].risk.content.stocks[
                                          Q
                                        ]).isFolderRisk =
                                        W.risk_item && W.risk_item.length > 2;
                                  (Z[$] = Object.assign(Z[$], {
                                    isCorrect: !0,
                                  })),
                                    (L = Object.assign(L, {
                                      isHaszxfx: !0,
                                      isZXFXFXContentOk: G,
                                      isZXGPDTContentOk: M,
                                      front_zxfx: H[U],
                                      isZXFXFXSummaryOK: !!(null ==
                                      (q =
                                        null ==
                                        (w =
                                          null ==
                                          (x =
                                            null == (k = H[U])
                                              ? void 0
                                              : k.risk)
                                            ? void 0
                                            : x.content)
                                          ? void 0
                                          : w.summary)
                                        ? void 0
                                        : q.risk_perf_detail),
                                    }));
                                } else
                                  -1 !== U.indexOf("tcrd")
                                    ? ((V =
                                        null ==
                                        (O =
                                          null == (T = H[U])
                                            ? void 0
                                            : T.concepts)
                                          ? void 0
                                          : O.length),
                                      (Z[$] = Object.assign(Z[$], {
                                        isCorrect: V,
                                      })),
                                      (L = Object.assign(L, {
                                        isTcrdContentOk: V,
                                        front_tcrd: H[U],
                                      })))
                                    : -1 !== U.indexOf("sqry")
                                    ? ((J =
                                        (null ==
                                        (A =
                                          null == (R = H[U])
                                            ? void 0
                                            : R.hot_stocks)
                                          ? void 0
                                          : A.length) ||
                                        (null ==
                                        (D =
                                          null == (N = H[U])
                                            ? void 0
                                            : N.hot_topics)
                                          ? void 0
                                          : D.length)),
                                      (Z[$] = Object.assign(Z[$], {
                                        isCorrect: J,
                                      })),
                                      (L = Object.assign(L, {
                                        isSqryContentOk: J,
                                        front_sqry: H[U],
                                      })))
                                    : -1 !== U.indexOf("rmzb")
                                    ? ((Y =
                                        H[U] &&
                                        (null == (B = H[U])
                                          ? void 0
                                          : B.content) &&
                                        !0),
                                      (Z[$] = Object.assign(Z[$], {
                                        isCorrect: Y,
                                      })),
                                      (L = Object.assign(L, {
                                        isRmzbContentOk: Y,
                                        front_rmzb: H[U],
                                      })))
                                    : -1 !== U.indexOf("sqpl")
                                    ? ((Z[$] = Object.assign(Z[$], {
                                        isCorrect: !0,
                                      })),
                                      (L = Object.assign(L, { isSqpl: !0 })))
                                    : -1 !== U.indexOf("gznhg") &&
                                      ((Z[$] = Object.assign(Z[$], {
                                        isCorrect: !0,
                                      })),
                                      (L = Object.assign(L, {
                                        isGznhg: !0,
                                        front_gznhg: H[U],
                                      })));
                            L.tab =
                              Z.filter(function (t) {
                                return t.isCorrect;
                              }) || [];
                          }
                          return e.abrupt("return", g({}, L));
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
        },
        {
          key: "getInformation",
          value: function () {
            var t = _.js_cookieExports.get("wzq_qluin"),
              e = {
                type: 13,
                ids: "",
                columnId: "tzbd",
                openid: t,
                device_id: t,
                wx_openid: t,
                wx_access_token: _.js_cookieExports.get("wzq_qlskey"),
              };
            return this.$request("information.fcgi", e).then(function (t) {
              var e, n, i;
              return (
                ("0" ===
                  (null == (e = null == t ? void 0 : t.data)
                    ? void 0
                    : e.retcode) &&
                  (null ==
                  (i =
                    null == (n = null == t ? void 0 : t.data) ? void 0 : n.tzbd)
                    ? void 0
                    : i.length) > 0 &&
                  t.data.tzbd.splice(0, 3)) ||
                []
              );
            });
          },
        },
        {
          key: "queryStockInfo",
          value: function (t, e) {
            return this.$request("stockinfo.fcgi", {
              scode: t,
              markets: e,
            }).then(function (t) {
              return t.data;
            });
          },
        },
        {
          key: "getSubscribeNum",
          value: function (t) {
            var e = g({}, t || {});
            return this.$request(
              "https://wzq.tenpay.com/svr/user/user_service/user_subscribe_num",
              e,
              { method: "get", isShowToast: !1 }
            );
          },
        },
      ]),
      l
    );
  })())(),
  M = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi?t=".concat(
        Date.now()
      );
    return k.request(e, t, { method: "post", isShowToast: !1 });
  },
  Q = function (t) {
    var e,
      n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      i = (null == navigator ? void 0 : navigator.userAgent) || "",
      r = /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(i),
      o =
        (null == (e = null == i ? void 0 : i.toLowerCase())
          ? void 0
          : e.indexOf("micromessenger")) > -1,
      s = g({ platform: r ? 1 : 2, zappid: "zxg", check: 11 }, t);
    if (y.wx$1) {
      var a = y.wx$1.getStorageSync("_qluin"),
        l = y.wx$1.getStorageSync("_qlskey"),
        c = "plus";
      s = b(g({}, s), {
        app: c,
        qluin: a,
        qlskey: l,
        openid: a,
        fskey: l,
        platform: y.wx$1.getSystemInfoSync().system.indexOf("iOS") >= 0 ? 1 : 2,
        check: 12,
      });
    } else if (o) {
      var u = {
        app: "wzq",
        device_id: 1,
        appid: _.cookie.get("wzq_qlappid") || _.cookie.get("qlappid"),
        openid: _.cookie.get("wzq_qluin"),
        fskey: _.cookie.get("wzq_qlskey") || _.cookie.get("qlskey"),
        qluin: _.cookie.get("wzq_qluin") || _.cookie.get("qluin"),
        qlskey: _.cookie.get("wzq_qlskey") || _.cookie.get("qlskey"),
        check: 12,
      };
      s = g(g({}, s), u);
    }
    return (
      n &&
        (s.sign = (function (t) {
          var e = Object.keys(t)
              .sort()
              .filter(function (e) {
                return "" !== t[e] && void 0 !== t[e];
              })
              .map(function (e) {
                return "".concat(e, "=").concat(t[e]);
              }),
            n = x.dist.SIGN_KEY.mini_h5;
          return y.md5Module("".concat(e.join("&"), "&key=").concat(n));
        })(s)),
      s
    );
  },
  W = (function () {
    function t(e) {
      o(this, t), (this.stockCodes = e);
    }
    return (
      s(t, [
        {
          key: "isArrayEmpty",
          value: function (t) {
            return !Array.isArray(t) || t.length <= 0;
          },
        },
        {
          key: "handleQTData",
          value: function (t, e) {
            if (this.isArrayEmpty(t)) return [];
            var n,
              i = { hk: "r_", us: "t_" },
              r = e,
              o = [];
            return (
              null == t ||
                t.forEach(function (t) {
                  var e = t.stock_code.slice(0, 2),
                    s = i[e] || "";
                  (n = t.stock_code
                    .replace(/^us\.?/, "us")
                    .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                    .replace(/\./g, "__")),
                    (r[n] = r[s + n] || {});
                  var a = "jj" === e,
                    l = a
                      ? r[n][7] && Number.parseFloat(r[n][7]).toFixed(2)
                      : r[n][32] || "";
                  o.push({
                    name: t.stock_name.split(".")[0],
                    symbol: a ? n : n.substr(0, 2) + r[n][2],
                    marketTag: n.substr(0, 2).toUpperCase(),
                    updown: l,
                    state: r[n][40] || "",
                    price: r[n][3] || "",
                    kcbFlag: "kcb" === t["data-bktype"],
                  });
                }),
              o
            );
          },
        },
        {
          key: "requestQT",
          value: function (t) {
            return m(
              this,
              null,
              r().mark(function e() {
                var n, i, o;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!this.isArrayEmpty(t)) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", {});
                        case 2:
                          return (
                            (n = []),
                            (o = { hk: "r_", us: "t_" }),
                            null == t ||
                              t.forEach(function (t) {
                                var e = t.slice(0, 2);
                                (i =
                                  (o[e] || "") +
                                  t
                                    .replace(/^us\.?/, "us")
                                    .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                                    .replace(/\./g, "__")),
                                  n.push(i);
                              }),
                            (e.next = 7),
                            k.request(
                              "https://qt.gtimg.cn/utf8/?fmt=json&q="
                                .concat(n.join(","), "&r=")
                                .concat(Math.random()),
                              {},
                              { method: "get", isShowToast: !1 }
                            )
                          );
                        case 7:
                          return e.abrupt("return", e.sent);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
          },
        },
        {
          key: "isExistInZixuan",
          value: function (t) {
            return m(
              this,
              null,
              r().mark(function e() {
                var n, i, o, s, a, l, c, u;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((n = {}), !this.isArrayEmpty(t))) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", n);
                        case 3:
                          return (
                            (i = this.getParams()),
                            (o = i.app),
                            (s = i.openId),
                            (a = i.fsKey),
                            (l = i.check),
                            (c =
                              "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd?stocks="
                                .concat(t.join(","), "&app=")
                                .concat(o, "&appid=wx9cf8c670ebd68ce4&check=")
                                .concat(l, "&openid=")
                                .concat(s, "&fskey=")
                                .concat(a)),
                            (e.prev = 4),
                            (e.next = 7),
                            k.request(c, {}, { method: "get", isShowToast: !1 })
                          );
                        case 7:
                          (u = e.sent) &&
                            0 === u.code &&
                            u.data &&
                            (n = u.data),
                            (e.next = 13);
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(4));
                        case 13:
                          return e.abrupt("return", n);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[4, 11]]
                );
              })
            );
          },
        },
        {
          key: "addStockToZixuan",
          value: function (t, e) {
            return m(
              this,
              null,
              r().mark(function n() {
                var i, o, s, a, l, c, u, d, p;
                return r().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (i = {
                              timestamp: new Date().getTime(),
                              act: t ? "sa" : "sd",
                              grpid: "1",
                              code: e,
                            }),
                            (o = this.getParams()),
                            (s = o.app),
                            (a = o.openId),
                            (l = o.fsKey),
                            (c = o.check),
                            (u =
                              "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?app="
                                .concat(s, "&appid=wx9cf8c670ebd68ce4&openid=")
                                .concat(a, "&fskey=")
                                .concat(l, "&check=")
                                .concat(c)),
                            (n.prev = 1),
                            (d = {
                              seq: encodeURIComponent(JSON.stringify([i])),
                            }),
                            (n.next = 5),
                            k.request(u, d, { method: "post", isShowToast: !1 })
                          );
                        case 5:
                          if (!(p = n.sent) || 0 === p.code) {
                            n.next = 8;
                            break;
                          }
                          return n.abrupt("return", !1);
                        case 8:
                          n.next = 13;
                          break;
                        case 10:
                          return (
                            (n.prev = 10),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", !1)
                          );
                        case 13:
                          return n.abrupt("return", !0);
                        case 14:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  this,
                  [[1, 10]]
                );
              })
            );
          },
        },
        {
          key: "getParams",
          value: function () {
            var t, e, n;
            return (
              y.wx$1 &&
                ((t = "zxg_xcx"),
                (e = y.wx$1.getStorageSync("_qluin")),
                (n = y.wx$1.getStorageSync("_qlskey"))),
              { app: t, openId: e, fsKey: n, check: 11 }
            );
          },
        },
        {
          key: "handleStockCodeList",
          value: function (t) {
            var e = [];
            return (
              this.isArrayEmpty(t) ||
                null == t ||
                t.forEach(function (t) {
                  e.push(t.stock_code);
                }),
              e
            );
          },
        },
        {
          key: "splitSymbol",
          value: function (t) {
            var e = t.slice(0, 2),
              n = ["sz", "sh", "hk", "us"].indexOf(e);
            return { market: -1 === n ? e : "".concat(n), scode: t.slice(2) };
          },
        },
        {
          key: "isHSPlate",
          value: function (t) {
            return "p" === t || "pt" === t;
          },
        },
        {
          key: "isHKPlate",
          value: function (t) {
            return "ph" === t;
          },
        },
        {
          key: "isUSPlate",
          value: function (t) {
            return "pu" === t;
          },
        },
        {
          key: "delExceedData",
          value: function (t) {
            var e = this;
            return this.isArrayEmpty(t)
              ? []
              : (t.sort(function (t, n) {
                  var i = Math.abs(n.updown) - Math.abs(t.updown);
                  if (0 !== i) return i;
                  var r = e.splitSymbol(n.symbol).market;
                  return e.isHSPlate(r) || e.isHKPlate(r) || e.isUSPlate(r)
                    ? -1
                    : 1;
                }),
                t.length > 4 && t.splice(4, t.length - 4),
                t);
          },
        },
        {
          key: "handleTag",
          value: function (t, e) {
            return this.isArrayEmpty(t)
              ? []
              : (null == t ||
                  t.forEach(function (t) {
                    null == e ||
                      e.forEach(function (e) {
                        (null == e ? void 0 : e.stock_code) ===
                          (null == t ? void 0 : t.symbol) &&
                          (t.character_tag = e.character_tag);
                      });
                  }),
                t);
          },
        },
        {
          key: "getStyle",
          value: function (t) {
            return t > 0 ? "up" : t < 0 ? "down" : "flat";
          },
        },
        {
          key: "handleUpdown",
          value: function (t) {
            var e = this;
            return this.isArrayEmpty(t)
              ? []
              : t.map(function (t) {
                  return b(g({}, t), {
                    stColor: isNaN(+t.updown)
                      ? e.getStyle(0)
                      : e.getStyle(+t.updown),
                  });
                });
          },
        },
        {
          key: "handleUsStockCode",
          value: function (t) {
            var e,
              n = {};
            return (
              null == (e = Object.keys(t)) ||
                e.forEach(function (e) {
                  var i = e;
                  e.toUpperCase() === "usIXIC".toUpperCase()
                    ? (i = "us.IXIC")
                    : e.toUpperCase() === "usDJI".toUpperCase()
                    ? (i = "us.DJI")
                    : e.toUpperCase() === "usINX".toUpperCase()
                    ? (i = "us.INX")
                    : e.toUpperCase() === "usNDX".toUpperCase()
                    ? (i = "us.NDX")
                    : e.toUpperCase() === "usVIX".toUpperCase()
                    ? (i = "us.VIX")
                    : e.toUpperCase() === "usHXC".toUpperCase() &&
                      (i = "us.HXC"),
                    (n[i] = t[e]);
                }),
              n
            );
          },
        },
        {
          key: "getXGSign",
          value: function (t) {
            var e = [];
            for (var n in t) n && e.push("".concat(n, "=").concat(t[n]));
            return (
              e.push("key=".concat(x.dist.SIGN_KEY.wzq_analyse)),
              y.md5Module(e.join("&"))
            );
          },
        },
        {
          key: "requestStockTag",
          value: function (t) {
            return m(
              this,
              null,
              r().mark(function e() {
                var n, i, o, s;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((n = []), !this.isArrayEmpty(t))) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", n);
                        case 3:
                          return (
                            ((i = {
                              _appver: "10.8.0",
                              source: "wzq",
                              stock_code: t.join(","),
                            }).sign = this.getXGSign(i)),
                            (e.prev = 5),
                            (o =
                              "https://bisheng.tenpay.com/fcgi-bin/zg_stock_profile.fcgi?_appver="
                                .concat(i._appver, "&sign=")
                                .concat(i.sign, "&source=")
                                .concat(i.source, "&stock_code=")
                                .concat(i.stock_code)),
                            (e.next = 9),
                            k.request(o, {}, { method: "get", dropCookie: !0 })
                          );
                        case 9:
                          (s = e.sent),
                            (n = "0" === s.retcode ? s.data : []),
                            (e.next = 15);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(5));
                        case 15:
                          return e.abrupt("return", n);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[5, 13]]
                );
              })
            );
          },
        },
      ]),
      t
    );
  })(),
  V = y.mitt(),
  J = {
    $on: function (t, e) {
      V.on(t, e);
    },
    $off: function (t, e) {
      V.off(t, e);
    },
    $once: function (t, e) {
      V.on(t, function n(i) {
        e(i), V.off(t, n);
      });
    },
    $emit: function (t, e) {
      V.emit(t, e);
    },
  },
  Y = ["sz", "sh", "hk", "us", "pt"];
getApp().globalData;
var K = "news_detail_zwwb_subscribe_wxmsg_key",
  tt = {
    name: "report-daily",
    components: {
      Tab: function () {
        return "./components/tab.js";
      },
      BaseDate: function () {
        return "./components/BaseDate.js";
      },
      SubscribeBtn: function () {
        return "./components/SubscribeBtn.js";
      },
      Sshq: function () {
        return "./components/Sshq.js";
      },
      GuessRiseFallMod: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/GuessRiseFallMod/index.js";
      },
      noonReport: function () {
        return "./components/noonReport.js";
      },
      RelatedStock: function () {
        return "../../../../../newsCon/@tencent/stock-news-detail/components/NewsBody/components/NewsCompContent/components/NewsContentNormal/related-stock.js";
      },
      BaseTitle: function () {
        return "./components/BaseTitle.js";
      },
      ZxfxpmList: function () {
        return "./components/ZxfxpmList.js";
      },
      ZxgpdtList: function () {
        return "./components/ZxgpdtList.js";
      },
      ZxfxfxList: function () {
        return "./components/ZxfxfxList.js";
      },
      zjrd: function () {
        return "./components/Zjrd.js";
      },
      TcrdList: function () {
        return "./components/TcrdList.js";
      },
      LiveCard: function () {
        return "../../../../../live/@tencent/stock-live-combine/component/LiveCard.js";
      },
      SubscribeWxMsgBar: function () {
        return "../../../../../live/@tencent/stock-live-detail/components/SubscribeWxMsgBar.js";
      },
      SqryList: function () {
        return "./components/SqryList.js";
      },
      GuoZhai: function () {
        return "./components/NationalDebt.js";
      },
      NormalContent: function () {
        return "./components/NormalContent.js";
      },
      StockList: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/StockList/index.js";
      },
      FollowGuide: function () {
        return "../../../stock-morning-report/morning-report-card/component/followGuide.js";
      },
      HalfEditor: function () {
        return "../../../../../halfScreenEditor/@tencent/stock-halfscreen-editor/components/halfscreen-editor.js".then(
          function (t) {
            return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhhbGZzY3JlZW4tZWRpdG9yL2NvbXBvbmVudHMvaGFsZnNjcmVlbi1lZGl0b3IudnVl;
          }
        );
      },
    },
    inject: {
      stockBridge: { default: {} },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
    },
    mixins: [T.securityCheck],
    beforeRouteEnter: function (t, e, n) {
      n();
    },
    beforeRouteLeave: function (t, e, n) {
      this.calcuteTabTime(), n();
    },
    props: {
      pUserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      dailyid: { type: String, default: "" },
      scrollTop: { type: Number, default: 0 },
      reportInfo: { type: String, default: "" },
      theme: { type: String, default: "blue" },
    },
    setup: function (t, n) {
      var i = y.getCurrentInstance().proxy || y.getCurrentInstance(),
        o = "dailyStock",
        s = (function () {
          var t = this,
            n = y.ref(!1),
            i = y.ref(!1),
            o = function () {
              var t = "https://wzq.tenpay.com/cgi-bin/userinfo.fcgi?&t=".concat(
                  Date.now()
                ),
                e = { dealer: 1, detail: 1 };
              return (
                y.wx$1 &&
                  (e = b(g({}, e), {
                    qluin: y.wx$1.getStorageSync("_qluin"),
                    qlskey: y.wx$1.getStorageSync("_qlskey"),
                  })),
                y.StockBridge.request(t, "GET", e)
              );
            },
            s = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return y.StockBridge.request(
                y.API_REMIND,
                "GET",
                g(g({}, t), {})
              );
            },
            a = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return m(
                t,
                null,
                r().mark(function t() {
                  var a;
                  return r().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), o();
                          case 3:
                            if (((t.t0 = +t.sent.subscribe), 1 == t.t0)) {
                              t.next = 6;
                              break;
                            }
                            return t.abrupt("return", void (i.value = !0));
                          case 6:
                            return (
                              (t.next = 8), s({ subscribe: "marketnotice" })
                            );
                          case 8:
                            0 == +(null == (a = t.sent) ? void 0 : a.retcode) &&
                              ((n.value = !0),
                              e &&
                                y.StockBridge.toast("已开启微信通知", "none", {
                                  duration: 3e3,
                                })),
                              (t.next = 14);
                            break;
                          case 12:
                            (t.prev = 12), (t.t1 = t.catch(0));
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 12]]
                  );
                })
              );
            };
          return {
            hasSubscribed: n,
            showFollowGuide: i,
            queryReportSubscribe: function () {
              return m(
                t,
                null,
                r().mark(function t() {
                  var e, i, l, c, u;
                  return r().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), o();
                          case 3:
                            if (((t.t0 = +t.sent.subscribe), 1 == t.t0)) {
                              t.next = 6;
                              break;
                            }
                            return t.abrupt("return");
                          case 6:
                            return (
                              (t.next = 8), s({ querysub: "marketnotice" })
                            );
                          case 8:
                            if (
                              null == (e = t.sent) ? void 0 : e.marketnotice
                            ) {
                              t.next = 11;
                              break;
                            }
                            return t.abrupt("return");
                          case 11:
                            if (
                              ((i = e.marketnotice),
                              (l = i.after),
                              (c = i.morningnotice),
                              (u = i.noon),
                              (n.value = 1 == +l && 1 == +u),
                              (t.t1 = n.value && 0 == +c),
                              !t.t1)
                            ) {
                              t.next = 17;
                              break;
                            }
                            return (t.next = 17), a(!1);
                          case 17:
                            t.next = 21;
                            break;
                          case 19:
                            (t.prev = 19), (t.t2 = t.catch(0));
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 19]]
                  );
                })
              );
            },
            onSubscribe: a,
            onUnSubscribe: function () {
              var i =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return m(
                t,
                null,
                r().mark(function t() {
                  var o, a, l, c;
                  return r().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              Promise.all([
                                s({ unsubscribe: "marketnotice.noon" }),
                                s({ unsubscribe: "marketnotice.after" }),
                              ])
                            );
                          case 3:
                            (o = t.sent),
                              (a = e(o, 2)),
                              (l = a[0]),
                              (c = a[1]),
                              0 == +(null == l ? void 0 : l.retcode) &&
                                0 == +(null == c ? void 0 : c.retcode) &&
                                ((n.value = !1),
                                i &&
                                  y.StockBridge.toast(
                                    "已关闭微信通知",
                                    "none",
                                    { duration: 3e3 }
                                  )),
                              (t.next = 12);
                            break;
                          case 10:
                            (t.prev = 10), (t.t0 = t.catch(0));
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 10]]
                  );
                })
              );
            },
            reportZxfxVisibility: function (t) {
              var e,
                n,
                i,
                r,
                o,
                s,
                a = null == t ? void 0 : t.zxfx;
              if (a) {
                var l =
                    -1 !==
                    (null == (e = null == t ? void 0 : t.type)
                      ? void 0
                      : e.indexOf("晚"))
                      ? "wjfp"
                      : "wjsp",
                  c =
                    (null ==
                    (r =
                      null ==
                      (i =
                        null == (n = null == a ? void 0 : a.risk)
                          ? void 0
                          : n.content)
                        ? void 0
                        : i.stocks)
                      ? void 0
                      : r.length) > 0,
                  u =
                    (null ==
                    (s =
                      null == (o = null == a ? void 0 : a.gpdt)
                        ? void 0
                        : o.content)
                      ? void 0
                      : s.length) > 0,
                  d = 1 === (null == a ? void 0 : a.has_stock),
                  p = 1 === (null == a ? void 0 : a.is_history);
                d
                  ? p
                    ? y.StockBridge.report(
                        "base.daily.".concat(l, "_zxfx_history_baoguang")
                      )
                    : (y.StockBridge.report(
                        "base.daily.".concat(l, "_zxfx_baoguang")
                      ),
                      u &&
                        y.StockBridge.report(
                          "base.daily.".concat(l, "_zxfx_zxdt_baoguang")
                        ),
                      c &&
                        y.StockBridge.report(
                          "base.daily.".concat(l, "_zxfx_zxsl_baoguang")
                        ))
                  : y.StockBridge.report(
                      "base.daily.".concat(l, "_zxfx_addstock_baoguang")
                    );
              }
            },
          };
        })(),
        a = s.hasSubscribed,
        l = s.showFollowGuide,
        c = s.queryReportSubscribe,
        u = s.onSubscribe,
        d = s.onUnSubscribe,
        p = s.reportZxfxVisibility,
        f = w.useHalfEditor(i, t, n, o, {
          postSuccessFunc: function () {
            var t, e;
            (null == (e = null == (t = i.$refs) ? void 0 : t.comment)
              ? void 0
              : e.loadData) && i.$refs.comment.loadData(!0);
          },
        });
      return b(
        g(
          {
            pageType: o,
            hasSubscribed: a,
            showFollowGuide: l,
            queryReportSubscribe: c,
            onSubscribe: u,
            onUnSubscribe: d,
            reportZxfxVisibility: p,
          },
          f
        ),
        {
          onOpenEditor: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e = g({ type: o, id: i.dailyid }, t);
            f.openEditor(e);
          },
        }
      );
    },
    data: function () {
      return {
        isSticky: !1,
        currentIndex: 0,
        detail: {},
        bannerHeight: 0,
        showFixedTabs: !0,
        loading: !1,
        tabtime: {
          wzq_daily_agsp_time: 0,
          wzq_daily_zjdx_time: 0,
          wzq_daily_jryw_time: 0,
          wzq_daily_hsyp_time: 0,
          wzq_daily_jrhw_time: 0,
          id: this.dailyid,
        },
        startTime: +new Date(),
        endTime: +new Date(),
        isShowBriefTips: !1,
        allFold: !1,
        isShowAgspDetail: !0,
        isShowJrywDetail: !0,
        isShowHsypDetail: !0,
        trigge: !0,
        showSubscribeBanner: !1,
        liveNoticeSubscribed: !1,
        mRelatedStockList: ["sh688318", "sz300033"],
        subscribedCount: "",
        curPost: {},
        iCommentsData: [],
        tabid: "",
        reportData: {
          prefix: "yy.daily_default",
          fchannel_id_fm_i: "I8900p000l041",
        },
        isWZQinMP: !1,
        userinfo: {},
        visibilityObjZxfx: null,
      };
    },
    computed: {
      wzqConfig: function () {
        return {
          openStock: function (t) {
            t.m, t.c, t.queryData;
          },
          userinfo: this.userinfo,
        };
      },
      allowPlatform: function () {
        return !0;
      },
      dailyType: function () {
        var t,
          e,
          n =
            -1 !==
            (null == (e = null == (t = this.detail) ? void 0 : t.type)
              ? void 0
              : e.indexOf("晚"))
              ? "wjfp"
              : "wjsp";
        return y.StockBridge.setStorage("WZQ_DAILY_TYPE", n), n;
      },
      subTitle: function () {
        var t,
          e,
          n = "".multi_title_index,
          i =
            null == (e = null == (t = this.detail) ? void 0 : t.front_agxp)
              ? void 0
              : e.multi_title;
        return i && !isNaN(n) ? i[parseInt(n, 10) - 1] : "";
      },
      time: function () {
        var t = new Date();
        return { month: t.getMonth() + 1, date: t.getDate() };
      },
    },
    watch: {
      tab: function (t, e) {
        if (
          ((this.endTime = +new Date()),
          (e = !e || ("agsp" !== e && "agwp" !== e) ? e : "agsp"))
        ) {
          var n = "wzq_daily_".concat(e, "_time");
          this.tabtime[n] = this.tabtime[n] + (this.endTime - this.startTime);
        }
        this.startTime = this.endTime;
      },
      $route: function (t) {
        var e, n, i, r;
        "/daily/index" === t.path &&
          (null == (e = null == t ? void 0 : t.query) ? void 0 : e.tab) &&
          (null == (i = null == (n = this.detail) ? void 0 : n.tab)
            ? void 0
            : i.findIndex(function (e) {
                var n;
                return (
                  e.tab_id ===
                  (null == (n = null == t ? void 0 : t.query) ? void 0 : n.tab)
                );
              })) &&
          this.switchTab(
            null == (r = null == t ? void 0 : t.query) ? void 0 : r.tab
          );
      },
    },
    mounted: function () {
      return m(
        this,
        null,
        r().mark(function t() {
          return r().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    this.initBriefTips(),
                      (this.beforeunloadHandler = O(
                        100,
                        this.beforeunloadEventHander
                      )),
                      this.isWZQinMP &&
                        (null == document ||
                          document.addEventListener(
                            "visibilitychange",
                            this.onVisibilitychange
                          ));
                  case 1:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    created: function () {
      return m(
        this,
        null,
        r().mark(function t() {
          var e,
            n,
            i,
            o,
            s = this;
          return r().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (this.userinfo = this.pUserinfo),
                      (this.tabid = "sshq"),
                      this.queryServiceSubscribeStatus(),
                      (t.next = 5),
                      this.loadData()
                    );
                  case 5:
                    (i =
                      null == (n = null == (e = this.detail) ? void 0 : e.tab)
                        ? void 0
                        : n.findIndex(function (t) {
                            return t.tab_id === s.tabid;
                          })) >= 0 &&
                      setTimeout(function () {
                        s.switchTab(i);
                      }, 1e3),
                      (o = y.StockBridge.getSession("daily_out_mark")),
                      this.$nextTick(function () {
                        o &&
                          (o.allFold && s.triggerFold(),
                          null == window || window.scroll(0, +o.scrolled || 0),
                          y.StockBridge.setSession("daily_out_mark", {}));
                      });
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    destroyed: function () {
      null == window ||
        window.removeEventListener("beforeunload", this.beforeunloadHandler),
        this.isWZQinMP &&
          (null == document ||
            document.removeEventListener(
              "visibilitychange",
              this.onVisibilitychange
            ));
    },
    beforeDestroy: function () {
      var t, e, n;
      try {
        shy.unsubscribe("updateTimeline", this.updateTimeLine),
          shy.unsubscribe("newComment", this.addNewSubject),
          shy.unsubscribe("newSubject", this.addNewSubject),
          this.visibilityObjZxfx &&
            (null ==
              (n =
                null ==
                (e = null == (t = this.visibilityObjZxfx) ? void 0 : t.observer)
                  ? void 0
                  : e.disconnect) || n.call(e),
            (this.visibilityObjZxfx = null));
      } catch (t) {}
    },
    methods: {
      onGuideCancel: function () {
        this.showFollowGuide = !1;
      },
      onGuideConfirm: function () {
        this.showFollowGuide = !1;
      },
      mpOnShow: function () {
        var t, e, n;
        try {
          this.queryServiceSubscribeStatus(),
            this.updateBannerStatus(),
            (null == (t = this.curPost) ? void 0 : t.id) &&
              (this.CU_updateTimeLine(this.curPost, !0), (this.curPost = "")),
            this.handleRelatedStock();
          try {
            null == (n = null == (e = this.$refs) ? void 0 : e.comment) ||
              n.loadData(!0);
          } catch (t) {}
          J.$emit("RelatedStockAddedRefresh"), this.onShowHalfEditor(this);
        } catch (t) {
          y.StockBridge.aegisReportEvent("DAILY-REPORT-ONMPSHOW-ERROR", {
            ext4: JSON.stringify({ error: (t && t.toString()) || "" }),
          });
        }
      },
      mpOnHide: function () {
        this.reportBrowEvent(this.wzqConfig), this.onHideHalfEditor(this);
      },
      handleRelatedStock: function () {
        return m(
          this,
          null,
          r().mark(function e() {
            var n, i, o, s, a, l, c, u, d, p, f, h;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (a = new W()),
                        (l = [].concat(
                          t(
                            null !=
                              (i =
                                null == (n = this.detail)
                                  ? void 0
                                  : n.relate_stocks)
                              ? i
                              : []
                          ),
                          t(
                            null !=
                              (s =
                                null == (o = this.detail)
                                  ? void 0
                                  : o.mention_stocks)
                              ? s
                              : []
                          )
                        )),
                        !a.isArrayEmpty(l))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (
                        (c = a.handleStockCodeList(l)),
                        (e.next = 7),
                        a.requestQT(c)
                      );
                    case 7:
                      return (u = e.sent), (e.next = 10), a.requestStockTag(c);
                    case 10:
                      return (
                        (d = e.sent),
                        (p = a.handleQTData(l, u)),
                        (p = a.delExceedData(p)),
                        (f = a.handleTag(p, d)),
                        (f = a.handleUpdown(f)),
                        (e.next = 17),
                        a.isExistInZixuan(c)
                      );
                    case 17:
                      (h = e.sent),
                        (h = a.handleUsStockCode(h)),
                        (f.newsid = this.dailyid),
                        this.$refs.relatedStockRef &&
                          ((this.$refs.relatedStockRef.stockList = f),
                          (this.$refs.relatedStockRef.goto = this.goto),
                          (this.$refs.relatedStockRef.stocksAddedStatusInObgect =
                            h)),
                        (e.next = 24);
                      break;
                    case 21:
                      (e.prev = 21),
                        (e.t0 = e.catch(0)),
                        y.StockBridge.aegisReportEvent(
                          "DAILY-REPORT-ONRELATESTOCKQUEST-ERROR",
                          {
                            ext4: JSON.stringify({
                              error: (e.t0 && e.t0.toString()) || "",
                            }),
                          }
                        );
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 21]]
            );
          })
        );
      },
      xcxNavigate: function (t) {
        var e, n;
        y.wx$1 && y.wx$1.navigateTo
          ? y.wx$1.navigateTo(t)
          : null ==
              (n =
                null == (e = null == window ? void 0 : window.wx)
                  ? void 0
                  : e.miniProgram) || n.navigateTo(t);
      },
      goto: function (t, e, n) {
        if (!t.startsWith("jj")) {
          t = t.replace(/^us\.?/, "us");
          var i = "";
          /^[a-zA-Z]+/.test(t) && (i = t.substring(0, 2));
          var r = t.replace(i, "");
          if ("bj" === i) return;
          y.StockBridge.report("news.mini.detail.relatedStock", {}, this);
          var o = {
            url: "/pages/quote/quote?market="
              .concat(
                {
                  sz: 0,
                  sh: 1,
                  hk: 2,
                  us: 3,
                  pt: "p",
                  ph: "ph",
                  pu: "pu",
                  cs: "cs",
                }[i],
                "&scode="
              )
              .concat(r),
          };
          this.xcxNavigate(o);
        }
      },
      showToast: function (t) {
        this.$toast(t);
      },
      updateBannerStatus: function () {
        this.detail.rmzb &&
          (this.updateSubscribeBannerShow(),
          this.showSubscribeBanner && this.getSubcribeStatus());
      },
      updateSubscribeBannerShow: function () {
        var t = y.StockBridge.getStorage(K);
        this.showSubscribeBanner = null == t;
      },
      closeSubscribeBar: function () {
        y.StockBridge.getStorage(K, !0),
          this.$root.$emit(K),
          (this.showSubscribeBanner = !1);
      },
      onSubscribeLiveNotive: function () {
        var t = this;
        if (this.liveNoticeSubscribed) {
          var e = { id: "LC2022122300000000000000", date: Date.now() };
          setTimeout(function () {
            t.$router.push({ path: "/information/liveCombine", query: e });
          }, 10);
        } else {
          M({ subscribe: "livenotice" })
            .then(function () {
              (t.liveNoticeSubscribed = !t.liveNoticeSubscribed),
                t.showToast("已开启微信通知");
            })
            .catch(function (t) {});
        }
      },
      getSubcribeStatus: function () {
        var t = this;
        M({ querysub: "livenotice" })
          .then(function (e) {
            var n = e.retcode,
              i = e.livenotice,
              r = void 0 === i ? {} : i;
            0 == +n && (t.liveNoticeSubscribed = 1 == +r.switch);
          })
          .catch(function (t) {});
      },
      handleTapLiveCard: function (t) {
        var e;
        y.StockBridge.report("news.detail.go_live_detail", {
          newsid: t.data.id,
        });
        try {
          var n = null == (e = null == t ? void 0 : t.data) ? void 0 : e.id;
          n &&
            y.StockRouter.routeTo({
              name: "information_liveDetail",
              query: { id: n },
            });
        } catch (n) {}
      },
      onReserveOne: function (t) {
        var e,
          n,
          i,
          r,
          o = {};
        20 ===
          (null == (e = null == t ? void 0 : t.extra_info)
            ? void 0
            : e.live_status) &&
        1 ===
          (null == (n = null == t ? void 0 : t.extra_info)
            ? void 0
            : n.reserve_flag)
          ? (o = { event: "cancel_reverse", liveIds: t.id })
          : 20 ===
              (null == (i = null == t ? void 0 : t.extra_info)
                ? void 0
                : i.live_status) &&
            2 ===
              (null == (r = null == t ? void 0 : t.extra_info)
                ? void 0
                : r.reserve_flag) &&
            (o = { event: "reverse", liveIds: t.id }),
          this.doReverse(o);
      },
      doReverse: function (t) {
        return m(this, arguments, function (t) {
          var e = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return r().mark(function i() {
            var o, s;
            return r().wrap(function (i) {
              for (;;)
                switch ((i.prev = i.next)) {
                  case 0:
                    (o = t.event),
                      (s = t.liveIds),
                      o &&
                        s &&
                        ("reverse" === o
                          ? e.reserveLives(s, n)
                          : "cancel_reverse" === o &&
                            e.cancelReserveLives(s, n));
                  case 2:
                  case "end":
                    return i.stop();
                }
            }, i);
          })();
        });
      },
      reserveLives: function (t) {
        return m(this, arguments, function (t) {
          var e = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return r().mark(function i() {
            var o, s, a, l;
            return r().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (
                        (i.prev = 0),
                        (i.next = 3),
                        (function (t) {
                          var e = Q(t);
                          return k.request(
                            "https://snp.tenpay.com/cgi-bin/snpgw_reserve_live.fcgi",
                            g({}, e),
                            { method: "post", dropCookie: !0 }
                          );
                        })(g({ live_news_id: t }, n))
                      );
                    case 3:
                      if (((i.t0 = i.sent.retcode), "0" !== i.t0)) {
                        i.next = 8;
                        break;
                      }
                      e.showToast("预约成功"),
                        (s = t.split(",")),
                        (a = e.detail.rmzb),
                        (l = a.content),
                        -1 !== (null == s ? void 0 : s.indexOf(l.id)) &&
                          20 ===
                            (null == (o = null == l ? void 0 : l.extra_info)
                              ? void 0
                              : o.live_status) &&
                          ((l.extra_info.reserve_flag = 1),
                          (l.extra_info.participate_num += 1),
                          (a.content = Object.assign({}, l)),
                          e.$forceUpdate());
                    case 8:
                      i.next = 12;
                      break;
                    case 10:
                      (i.prev = 10), (i.t1 = i.catch(0));
                    case 12:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              null,
              [[0, 10]]
            );
          })();
        });
      },
      cancelReserveLives: function (t) {
        return m(this, arguments, function (t) {
          var e = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return r().mark(function i() {
            var o, s, a, l;
            return r().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (
                        (i.prev = 0),
                        (i.next = 3),
                        (function (t) {
                          var e = Q(t);
                          return k.request(
                            "https://snp.tenpay.com/cgi-bin/snpgw_cancel_reserve_live.fcgi",
                            g({}, e),
                            { method: "post", dropCookie: !0 }
                          );
                        })(g({ live_news_id: t }, n))
                      );
                    case 3:
                      if (((i.t0 = i.sent.retcode), "0" !== i.t0)) {
                        i.next = 8;
                        break;
                      }
                      e.showToast("已取消预约"),
                        (s = t.split(",")),
                        (a = e.detail.rmzb),
                        (l = a.content),
                        -1 !== (null == s ? void 0 : s.indexOf(l.id)) &&
                          20 ===
                            (null == (o = null == l ? void 0 : l.extra_info)
                              ? void 0
                              : o.live_status) &&
                          ((l.extra_info.reserve_flag = 2),
                          (l.extra_info.participate_num -= 1),
                          (a.content = Object.assign({}, l)),
                          e.$forceUpdate());
                    case 8:
                      i.next = 12;
                      break;
                    case 10:
                      (i.prev = 10), (i.t1 = i.catch(0));
                    case 12:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              null,
              [[0, 10]]
            );
          })();
        });
      },
      onSubscribeHandle: function () {
        this.hasSubscribed
          ? (this.onUnSubscribe(!0),
            y.StockBridge.report(
              "base.daily.".concat(
                this.dailyType,
                "_brief_wechat_subscribe_close"
              ),
              { newsid: this.dailyid }
            ))
          : (this.onSubscribe(!0),
            y.StockBridge.report(
              "base.daily.".concat(
                this.dailyType,
                "_brief_wechat_subscribe_open"
              ),
              { newsid: this.dailyid }
            ));
      },
      changeZXFXItemRisk: function (t) {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_zxsl_folder_tap")
        ),
          (this.detail.front_zxfx.risk.content.stocks[t].isFolderRisk = !1);
      },
      isWebViewMp: function () {
        return !1;
      },
      viewStockDetail: function (t, e, n) {
        var i,
          r =
            ((i = e),
            (Number.isInteger(i) && i >= 0 && i < Y.length ? Y[i] : i) +
              (null != n ? n : ""));
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_").concat(t, "_stock_tap"),
          { stockid: r }
        ),
          y.StockRouter.routeTo({
            name: "stockdetail",
            query: { market: e, scode: n },
          });
      },
      viewCommentDetail: function (t, e) {
        var n = t,
          i = e;
        this.xcxNavigate({
          url: "/pages/comment/topicDetail?topicId="
            .concat(n, "&topic=")
            .concat(i),
        });
      },
      delayRoute: function (t) {
        var e = t.path,
          n = t.query,
          i = "";
        n &&
          (i =
            n &&
            Object.keys(n)
              .map(function (t) {
                return "".concat(t, "=").concat(n[t]);
              })
              .join("&"));
        var r = "https://wzq.tenpay.com/mp/v2/index.html#"
          .concat(e, "?")
          .concat(i);
        y.StockBridge.routeTo({
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(r)
          ),
        });
      },
      gotoJRHWDetail: function (t) {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_jrhw_article_tap")
        ),
          setTimeout(function () {
            y.StockBridge.locationTo(
              "https://gu.qq.com/community/comment/index.html#/comment-detail-detail?inApp=0&nid=".concat(
                t.id,
                "&isMp=lct"
              )
            );
          }, 10);
      },
      gotoHq: function (t) {
        if (
          (y.StockBridge.report(
            "base.daily.".concat(this.dailyType, "_sshq_index_tap")
          ),
          t.stock_code)
        ) {
          var e,
            n = t.stock_code.substr(2, t.stock_code.length),
            i = t.stock_code.substr(0, 2);
          t.stock_code && (i = ["", "sh", "sz", "hk"].indexOf(i)),
            void 0 !== i && (e = { 1: 1, 2: 0, 3: 2 }[i]),
            y.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: e, scode: n },
            });
        }
      },
      onFundPlateClick: function (t) {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_zjrd_plate_tap")
        ),
          this.delayRoute({
            path: "/strategy/fund/detail",
            query: { code: t.plate_code },
          });
      },
      gotoNews: function (t) {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_tzbd_article_tap")
        );
        var e = {
          id: t.id,
          type: t.type,
          date: t.time,
          title: encodeURIComponent(t.title),
        };
        this.delayRoute({ path: "/information/detail", query: e });
      },
      gotoInformation: function () {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_jryw_more_tap")
        ),
          y.wx$1.switchTab({ url: "/pages/index/information/main" });
      },
      gotoStrategy: function () {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_zjrd_more_tap")
        ),
          this.delayRoute({ path: "/strategy/index" });
      },
      gotoStrategyRisk: function () {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_zxsl_more_tap")
        ),
          this.delayRoute({ path: "/strategy/risk/index" });
      },
      gotoSettingCenter: function () {
        y.StockBridge.report(
          "base.daily.".concat(this.dailyType, "_settting_tap")
        ),
          this.userinfo.subscribe;
      },
      gotoAddStock: function () {
        this.delayRoute({ path: "/search", query: { scene: 2 } });
      },
      switchTab: function (t) {
        return m(
          this,
          null,
          r().mark(function e() {
            var n, i, o, s, a, l, c;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.currentIndex === t) {
                        e.next = 28;
                        break;
                      }
                      if (this.tabsHeight) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        this.getQueryDomRect("#tabs").then(function (t) {
                          return t.height;
                        })
                      );
                    case 5:
                      (this.tabsHeight = e.sent), (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(2));
                    case 10:
                      if (0 !== t) {
                        e.next = 14;
                        break;
                      }
                      this.$emit("scrollInto", 0), (e.next = 28);
                      break;
                    case 14:
                      if (
                        ((e.prev = 14),
                        (s =
                          null ==
                          (o =
                            null ==
                            (i = null == (n = this.detail) ? void 0 : n.tab)
                              ? void 0
                              : i[t])
                            ? void 0
                            : o.tab_id))
                      ) {
                        e.next = 18;
                        break;
                      }
                      return e.abrupt("return");
                    case 18:
                      return (e.next = 20), this.getQueryDomRect("#".concat(s));
                    case 20:
                      (a = e.sent),
                        (l = a.top),
                        (c = this.scrollTop + l),
                        this.$emit("scrollInto", c),
                        (e.next = 28);
                      break;
                    case 26:
                      (e.prev = 26), (e.t1 = e.catch(14));
                    case 28:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [
                [2, 8],
                [14, 26],
              ]
            );
          })
        );
      },
      getQueryDomRect: function (t) {
        var e = this;
        return new Promise(function (n) {
          y.wx$1
            .createSelectorQuery()
            .in(e)
            .select(t)
            .boundingClientRect()
            .exec(function (t) {
              n((null == t ? void 0 : t[0]) || {});
            });
        });
      },
      onScroll: function (t) {
        return m(
          this,
          null,
          r().mark(function e() {
            var n, i, o, s, a, l, c;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = this.detail.tab),
                        y.StockBridge.setSession("daily_out_mark", {
                          scrollTop: t,
                          allFold: this.allFold,
                        }),
                        (this.showFixedTabs = t >= this.bannerHeight),
                        this.tabsHeight)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        this.getQueryDomRect("#tabs").then(function (t) {
                          return t.height;
                        })
                      );
                    case 5:
                      (this.tabsHeight = e.sent), (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(2));
                    case 10:
                      return (
                        (e.prev = 10),
                        (e.next = 13),
                        this.getQueryDomRect("#headerGuide")
                      );
                    case 13:
                      (i = e.sent),
                        (o = i.bottom),
                        (this.isSticky = t > o),
                        (e.next = 20);
                      break;
                    case 18:
                      (e.prev = 18), (e.t1 = e.catch(10));
                    case 20:
                      (s = n.length), (a = 0);
                    case 22:
                      if (!(a < n.length)) {
                        e.next = 41;
                        break;
                      }
                      return (
                        (l = n[a]),
                        (e.prev = 24),
                        (e.next = 27),
                        this.getQueryDomRect("#".concat(l.tab_id))
                      );
                    case 27:
                      if (
                        ((c = e.sent),
                        c.top,
                        c.height,
                        !(c.bottom > this.tabsHeight))
                      ) {
                        e.next = 34;
                        break;
                      }
                      return (s = a), e.abrupt("break", 41);
                    case 34:
                      e.next = 38;
                      break;
                    case 36:
                      (e.prev = 36), (e.t2 = e.catch(24));
                    case 38:
                      a++, (e.next = 22);
                      break;
                    case 41:
                      (this.currentIndex = s), (this.isShowBriefTips = !1);
                    case 42:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [
                [2, 8],
                [10, 18],
                [24, 36],
              ]
            );
          })
        );
      },
      initTabScroll: function () {
        var t = this;
        this.$nextTick(function () {
          return m(
            t,
            null,
            r().mark(function t() {
              var e, n;
              return r().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (this.bannerHeight = 0),
                          (t.next = 3),
                          this.getQueryDomRect("#tabs")
                        );
                      case 3:
                        (e = t.sent),
                          (n = e.height),
                          (this.tabsHeight = n),
                          (this.scrollEventHandler = O(100, this.onScroll)),
                          this.$parent.$nextTick(function () {});
                      case 6:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
        });
      },
      loadData: function () {
        return m(
          this,
          null,
          r().mark(function t() {
            var e,
              n,
              i,
              o = this;
            return r().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        1,
                        (t.next = 4),
                        G.queryDailyDetail({
                          id: this.dailyid,
                          isgray: 1,
                          openid: this.userinfo.openid,
                          fskey: this.userinfo.fskey,
                        })
                      );
                    case 4:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 7;
                        break;
                      }
                      t.t0 = {};
                    case 7:
                      (this.detail = t.t0),
                        this.$emit("loadSuccess", this.detail),
                        (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t1 = t.catch(0)),
                        y.StockBridge.aegisReportEvent(
                          "DAILY-REPORT-ONDAILYREQUEST-ERROR",
                          {
                            ext4: JSON.stringify({
                              error: (t.t1 && t.t1.toString()) || "",
                            }),
                          }
                        ),
                        this.$emit("loadFailed");
                    case 14:
                      if (!this.detail) {
                        t.next = 31;
                        break;
                      }
                      return (
                        (t.prev = 15),
                        this.$nextTick(function () {
                          o.addZxfxVisibilityObj();
                        }),
                        (i =
                          this.detail.isHaszxfx &&
                          this.detail.front_zxfx &&
                          0 !== this.detail.front_zxfx.has_stock &&
                          (this.detail.isZXFXFXSummaryOK ||
                            this.detail.isZXFXFXContentOk ||
                            this.detail.isZXGPDTContentOk)),
                        (this.detail.isHaszxfx = i),
                        i ||
                          null ==
                            (n = null == (e = this.detail) ? void 0 : e.tab) ||
                          n.splice(
                            this.detail.tab.findIndex(function (t) {
                              return "zxfx" === t.tab_id;
                            }),
                            1
                          ),
                        (this.loading = !0),
                        this.initTabScroll(),
                        this.updateBannerStatus(),
                        this.getSubscribedCount(),
                        (t.next = 26),
                        this.handleRelatedStock()
                      );
                    case 26:
                      t.next = 31;
                      break;
                    case 28:
                      (t.prev = 28),
                        (t.t2 = t.catch(15)),
                        y.StockBridge.aegisReportEvent(
                          "DAILY-REPORT-ONOTHEREQUEST-ERROR",
                          {
                            ext4: JSON.stringify({
                              error: (t.t2 && t.t2.toString()) || "",
                            }),
                          }
                        );
                    case 31:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [
                [0, 11],
                [15, 28],
              ]
            );
          })
        );
      },
      addZxfxVisibilityObj: function () {
        var t,
          e,
          n,
          i = this;
        this.visibilityObjZxfx &&
          (null ==
            (n =
              null ==
              (e = null == (t = this.visibilityObjZxfx) ? void 0 : t.observer)
                ? void 0
                : e.disconnect) || n.call(e),
          (this.visibilityObjZxfx = null)),
          (this.visibilityObjZxfx = new q.VisibilityObserver(
            ".zxfx",
            {
              once: !0,
              callback: function (t, e) {
                t && i.reportZxfxVisibility(i.detail);
              },
              intersection: { threshold: 0 },
            },
            this
          ));
      },
      beforeunloadEventHander: function () {
        this.calcuteTabTime();
      },
      calcuteTabTime: function () {
        this.endTime = +new Date();
        try {
          if (this.startTime === this.endTime)
            this.tabtime.wzq_daily_agsp_time =
              this.tabtime.wzq_daily_agsp_time +
              (this.endTime - this.startTime);
          else {
            var t = "wzq_daily_".concat(this.tab, "_time");
            this.tabtime[t] = this.tabtime[t] + (this.endTime - this.startTime);
          }
        } catch (t) {}
        y.StockBridge.report(
          "base.daily.tab_time_analysis",
          g({}, this.tabtime)
        );
      },
      handlePageClick: function (t) {
        "brief-tips-box" !== t.target.className && (this.isShowBriefTips = !1);
      },
      initBriefTips: function () {
        var t = this,
          e = "DAILY_INDEX_BRIEF_TIPS";
        y.StockBridge.getStorage(e) ||
          (y.StockBridge.setStorage(e, 1),
          (this.isShowBriefTips = !0),
          setTimeout(function () {
            t.isShowBriefTips = !1;
          }, 3e3));
      },
      triggerFold: function () {
        (this.allFold = !this.allFold),
          (this.isShowAgspDetail = !this.allFold),
          (this.isShowJrywDetail = !this.allFold),
          (this.isShowHsypDetail = !this.allFold),
          this.handleStatReport("outline_click");
      },
      handleTriggerAgspDetail: function () {
        (this.isShowAgspDetail = !this.isShowAgspDetail),
          this.handleStatReport("ag_detail_click");
      },
      handleTriggerJrywDetail: function () {
        (this.isShowJrywDetail = !this.isShowJrywDetail),
          this.handleStatReport("jryw_detail_click");
      },
      handleTriggeHsypDetail: function () {
        (this.isShowHsypDetail = !this.isShowHsypDetail),
          this.handleStatReport("hsyp_detail_click");
      },
      handleJrywContentClick: function () {
        this.handleStatReport("jryw_item_click");
      },
      handleHsypContentClick: function () {
        this.handleStatReport("hsyp_item_click");
      },
      handleStatReport: function (t, e) {
        y.StockBridge.report(
          "yy.news_report_new.".concat(this.dailyType, "_").concat(t),
          e
        );
      },
      handleSqrBrowStatReport: function (t, e) {
        this.addOneItem(
          "yy.news_report_new.".concat(this.dailyType, "_").concat(t),
          e
        );
      },
      handleCzdReport: function (t) {
        this.handleStatReport("czd_click", {
          status: -1 !== (null == t ? void 0 : t.indexOf("fall")) ? 0 : 1,
        });
      },
      handelshowMyToast: function (t) {},
      queryServiceSubscribeStatus: function () {
        this.queryReportSubscribe();
      },
      getSubscribedCount: function () {
        return m(
          this,
          null,
          r().mark(function t() {
            var e, n;
            return r().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        G.getSubscribeNum({
                          type: "wjfp" === this.dailyType ? 3 : 2,
                        })
                      );
                    case 3:
                      (e = t.sent),
                        (n = e.subscribe_num) && (this.subscribedCount = n),
                        (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8),
                        (t.t0 = t.catch(0)),
                        (this.subscribedCount = "260");
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 8]]
            );
          })
        );
      },
      onPutComment: function () {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (
          (null == (t = this.didAgreeUserAgreement) ? void 0 : t.value) ||
          "function" != typeof this.onCheckUserAgreementStatus
        ) {
          var n = e.id,
            i = e.user_name;
          this.onOpenEditor({
            type: "detail",
            post_scene: "stocklist",
            id: n,
            touser: i,
          });
        } else this.onCheckUserAgreementStatus();
      },
      commentReport: function (t) {
        if ("string" == typeof t)
          y.StockBridge.report(t, { tagName: this.activeTabKey });
        else {
          var e = t || {},
            n = e.eventName,
            i = e.data;
          y.StockBridge.report(n, g({ tagName: this.activeTabKey }, i || {}));
        }
      },
      updateTimeLine: function (t) {
        this.CU_updateTimeLine(t, "follow" !== t.type);
      },
      addNewSubject: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = (t.post && g({}, t.post)) || {};
        e.subject_id && this.updateCardItem(e.subject_id);
      },
      updateCardItem: function (t) {
        var e = this;
        this.CU_updateCardItem({
          itemId: t,
          cb: function (t) {
            var n;
            "turn" !== t.showType &&
              (null == (n = e.iCommentsData) || n.splice(0, 0, t));
          },
        });
      },
      goEdit: function () {
        var t,
          e = this;
        (null == (t = this.didAgreeUserAgreement) ? void 0 : t.value) ||
        "function" != typeof this.onCheckUserAgreementStatus
          ? this.securityCheck({ eventName: "putSubject" })
              .then(function () {
                e.onOpenEditor({
                  type: "timeline",
                  symbol: "sh000001",
                  name: "上证指数",
                });
              })
              .catch(function () {})
          : this.onCheckUserAgreementStatus();
      },
      tapListBar: function () {
        this.xcxNavigate({
          url: "/pages/comment/comment?symbol=sh000001&name=上证指数&market=1",
        });
      },
      onVisibilitychange: function () {
        this.handleRelatedStock();
      },
      showProfilePop: function (t) {
        this.$emit("showProfilePop", t);
      },
    },
  };
Array ||
  (
    y.resolveComponent("tab") +
    y.resolveComponent("BaseDate") +
    y.resolveComponent("SubscribeBtn") +
    y.resolveComponent("Sshq") +
    y.resolveComponent("GuessRiseFallMod") +
    y.resolveComponent("noonReport") +
    y.resolveComponent("RelatedStock") +
    y.resolveComponent("BaseTitle") +
    y.resolveComponent("ZxfxpmList") +
    y.resolveComponent("ZxgpdtList") +
    y.resolveComponent("ZxfxfxList") +
    y.resolveComponent("zjrd") +
    y.resolveComponent("TcrdList") +
    y.resolveComponent("LiveCard") +
    y.resolveComponent("SubscribeWxMsgBar") +
    y.resolveComponent("SqryList") +
    y.resolveComponent("GuoZhai") +
    y.resolveComponent("normal-content") +
    y.resolveComponent("NormalContent") +
    y.resolveComponent("StockList") +
    y.resolveComponent("HalfEditor") +
    y.resolveComponent("FollowGuide")
  )();
var et = y._export_sfc(tt, [
  [
    "render",
    function (t, e, n, i, r, o) {
      return y.e(
        { a: r.showFixedTabs },
        r.showFixedTabs
          ? {
              b: y.o(o.handleStatReport, 892),
              c: y.o(o.triggerFold, 893),
              d: y.o(o.onSubscribeHandle, 894),
              e: y.p({
                "has-subscribed": i.hasSubscribed,
                "publish-time":
                  r.detail && r.detail.sshq && r.detail.sshq.update_at,
                "is-sticky": r.isSticky,
                tabs: r.detail.tab,
                "text-field": "tab_title",
                "current-index": r.currentIndex,
                triggeable: r.trigge,
                "on-tab-click": o.switchTab,
                "is-show-brief-tips": r.isShowBriefTips,
                "all-fold": r.allFold,
                "after-report": "wjfp" === o.dailyType,
              }),
              f: y.n(
                r.isSticky ? ("wjfp" === o.dailyType ? "dark" : "red") : ""
              ),
              g: n.theme,
            }
          : {},
        { h: r.loading },
        r.loading
          ? y.e(
              {
                i: y.o(o.handleStatReport, 895),
                j: y.o(o.triggerFold, 896),
                k: y.o(o.onSubscribeHandle, 897),
                l: y.p({
                  "has-subscribed": i.hasSubscribed,
                  "publish-time":
                    r.detail && r.detail.sshq && r.detail.sshq.update_at,
                  tabs: r.detail.tab,
                  "text-field": "tab_title",
                  "current-index": r.currentIndex,
                  triggeable: r.trigge,
                  "on-tab-click": o.switchTab,
                  "is-show-brief-tips": r.isShowBriefTips,
                  "all-fold": r.allFold,
                  "after-report": "wjfp" === o.dailyType,
                }),
                m: r.detail.isHashq,
              },
              r.detail.isHashq
                ? y.e(
                    {
                      n: y.p({
                        "after-report": "wjfp" == o.dailyType,
                        "publish-time":
                          r.detail && r.detail.sshq && r.detail.sshq.update_at,
                      }),
                      o: y.t("wjfp" === o.dailyType ? "A股收评" : "午间收评"),
                      p: y.sr("subscribeBtn", "45405124-3"),
                      q: y.o(o.onSubscribeHandle, 898),
                      r: y.p({ "has-subscribed": i.hasSubscribed }),
                      s: y.t(r.subscribedCount),
                      t:
                        r.detail.sshq &&
                        r.detail.sshq.quotes &&
                        r.detail.sshq.quotes.length > 0,
                    },
                    r.detail.sshq &&
                      r.detail.sshq.quotes &&
                      r.detail.sshq.quotes.length > 0
                      ? {
                          v: y.o(o.gotoHq, 899),
                          w: y.p({ detail: r.detail }),
                          x: y.o(o.handleCzdReport, 900),
                          y: y.o(o.handelshowMyToast, 901),
                          z: y.p({
                            symbol: r.detail.sshq.quotes[0].stock_code,
                            "stock-name": r.detail.sshq.quotes[0].stock_name,
                          }),
                        }
                      : {},
                    { A: y.n("wjfp" === o.dailyType ? "after" : "") }
                  )
                : {},
              { B: r.detail.isHasag },
              r.detail.isHasag
                ? {
                    C: y.sr("agspContent", "45405124-6"),
                    D: y.o(o.handleTriggerAgspDetail, 902),
                    E: y.p({
                      detail: r.detail,
                      "sub-title": o.subTitle,
                      "daily-type": o.dailyType,
                      "is-show-agsp-detail": r.isShowAgspDetail,
                      "wzq-config": o.wzqConfig,
                      dailyid: n.dailyid,
                    }),
                    F: y.sr("relatedStockRef", "45405124-7"),
                    G: y.p({
                      "news-id": n.dailyid,
                      "wzq-config": o.wzqConfig,
                      "report-data": r.reportData,
                    }),
                  }
                : {},
              { H: r.detail.isHaszxfx },
              r.detail.isHaszxfx
                ? y.e(
                    {
                      I: y.p({ title: "我的自选股票动态" }),
                      J:
                        r.detail.front_zxfx &&
                        0 == r.detail.front_zxfx.has_stock,
                    },
                    r.detail.front_zxfx && 0 == r.detail.front_zxfx.has_stock
                      ? {
                          K: y.o(function () {
                            return (
                              o.gotoAddStock &&
                              o.gotoAddStock.apply(o, arguments)
                            );
                          }, 903),
                        }
                      : r.detail.isZXGPDTContentOk
                      ? y.e(
                          {
                            M: r.detail.front_zxfx && r.detail.front_zxfx.rank,
                          },
                          r.detail.front_zxfx && r.detail.front_zxfx.rank
                            ? {
                                N: y.o(o.handleStatReport, 904),
                                O: y.p({
                                  content: r.detail.front_zxfx.rank,
                                  "is-w-z-qin-m-p": r.isWZQinMP,
                                }),
                              }
                            : {},
                          {
                            P: y.o(o.viewStockDetail, 905),
                            Q: y.p({
                              "daily-type": o.dailyType,
                              content: r.detail.front_zxfx.gpdt,
                            }),
                          }
                        )
                      : {},
                    {
                      L: r.detail.isZXGPDTContentOk,
                      R: 1 !== r.detail.front_zxfx.is_history,
                    },
                    1 !== r.detail.front_zxfx.is_history
                      ? y.e(
                          {
                            S:
                              r.detail.isZXFXFXSummaryOK ||
                              r.detail.isZXFXFXContentOk,
                          },
                          r.detail.isZXFXFXSummaryOK ||
                            r.detail.isZXFXFXContentOk
                            ? y.e(
                                {
                                  T: y.o(function () {
                                    return (
                                      o.gotoStrategyRisk &&
                                      o.gotoStrategyRisk.apply(o, arguments)
                                    );
                                  }, 906),
                                  U: r.detail.isZXFXFXSummaryOK,
                                },
                                r.detail.isZXFXFXSummaryOK
                                  ? {
                                      V: y.t(
                                        r.detail.front_zxfx.risk.content.summary
                                          .risk_perf_detail
                                      ),
                                    }
                                  : {},
                                { W: r.detail.isZXFXFXContentOk },
                                r.detail.isZXFXFXContentOk
                                  ? {
                                      X: y.o(o.changeZXFXItemRisk, 907),
                                      Y: y.o(o.viewStockDetail, 908),
                                      Z: y.p({
                                        content:
                                          r.detail.front_zxfx.risk.content
                                            .stocks,
                                      }),
                                    }
                                  : {}
                              )
                            : {}
                        )
                      : {}
                  )
                : {},
              { aa: r.detail.isHaszj },
              r.detail.isHaszj
                ? {
                    ab: y.o(o.onFundPlateClick, 909),
                    ac: y.o(o.viewStockDetail, 910),
                    ad: y.o(o.gotoStrategy, 911),
                    ae: y.o(o.handleStatReport, 912),
                    af: y.p({
                      detail: r.detail,
                      "wzq-config": o.wzqConfig,
                      dailyid: n.dailyid,
                      more: !r.isWZQinMP,
                    }),
                  }
                : {},
              { ag: r.detail.isTcrdContentOk },
              r.detail.isTcrdContentOk
                ? {
                    ah: y.o(o.viewStockDetail, 913),
                    ai: y.o(o.handleStatReport, 914),
                    aj: y.p({ content: r.detail.front_tcrd.concepts }),
                  }
                : {},
              { ak: r.detail.isRmzbContentOk && !r.isWZQinMP && !t.isH5Lite },
              !r.detail.isRmzbContentOk || r.isWZQinMP || t.isH5Lite
                ? {}
                : y.e(
                    {
                      al: y.p({ title: "热门直播" }),
                      am: y.o(o.handleTapLiveCard, 915),
                      an: y.o(function (t) {
                        return o.onReserveOne(r.detail.rmzb.content);
                      }, 916),
                      ao: y.p({
                        "live-data": r.detail.rmzb.content,
                        "show-link-line": !1,
                        "show-playback-tag": !0,
                        "wzq-config": o.wzqConfig,
                        "show-share": !1,
                        theme: n.theme,
                      }),
                      ap: r.showSubscribeBanner,
                    },
                    r.showSubscribeBanner
                      ? {
                          aq: y.o(o.onSubscribeLiveNotive, 917),
                          ar: y.o(o.closeSubscribeBar, 918),
                          as: y.p({ "has-subscribed": r.liveNoticeSubscribed }),
                        }
                      : {}
                  ),
              { at: r.detail.isSqryContentOk },
              r.detail.isSqryContentOk
                ? {
                    av: y.o(o.viewStockDetail, 919),
                    aw: y.o(o.viewCommentDetail, 920),
                    ax: y.o(o.handleStatReport, 921),
                    ay: y.o(o.handleSqrBrowStatReport, 922),
                    az: y.p({ content: r.detail.front_sqry }),
                  }
                : {},
              { aA: "wjsp" === o.dailyType && r.detail.isGznhg },
              "wjsp" === o.dailyType && r.detail.isGznhg
                ? {
                    aB: y.p({
                      detail: r.detail.front_gznhg,
                      "wzq-config": o.wzqConfig,
                      userinfo: r.userinfo,
                    }),
                  }
                : {},
              { aC: r.detail.isHasyw },
              r.detail.isHasyw
                ? y.e(
                    { aD: r.detail.isJrywContentOk },
                    r.detail.isJrywContentOk
                      ? {
                          aE: y.sr("jrywContent", "45405124-19"),
                          aF: y.o(o.handleJrywContentClick, 923),
                          aG: y.p({
                            content: r.detail.front_jryw.contents,
                            "show-all-detail": r.isShowJrywDetail,
                            dailyid: n.dailyid,
                            "wzq-config": o.wzqConfig,
                            title: "今日要闻",
                          }),
                        }
                      : {},
                    { aH: !r.isWZQinMP && !t.isH5Lite },
                    r.isWZQinMP || t.isH5Lite
                      ? {}
                      : {
                          aI: y.o(function () {
                            return (
                              o.gotoInformation &&
                              o.gotoInformation.apply(o, arguments)
                            );
                          }, 924),
                        }
                  )
                : {},
              { aJ: r.detail.isHasyp },
              r.detail.isHasyp
                ? y.e(
                    { aK: r.detail.isHsypContentOk },
                    r.detail.isHsypContentOk
                      ? {
                          aL: y.sr("hsypContent", "45405124-20"),
                          aM: y.o(o.handleHsypContentClick, 925),
                          aN: y.p({
                            "wzq-config": o.wzqConfig,
                            content: r.detail.front_hsyp.contents,
                            "show-all-detail": r.isShowHsypDetail,
                            dailyid: n.dailyid,
                            title: "后市研判",
                          }),
                        }
                      : {}
                  )
                : {},
              { aO: r.detail.isSqpl },
              r.detail.isSqpl
                ? {
                    aP: y.o(function () {
                      return o.goEdit && o.goEdit.apply(o, arguments);
                    }, 926),
                    aQ: y.sr("comment", "45405124-21"),
                    aR: y.o(o.onPutComment, 927),
                    aS: y.o(o.showProfilePop, 928),
                    aT: y.p({
                      "page-id": "sh000001",
                      "page-type": i.pageType,
                      "current-type": "latest",
                      "p-userinfo": r.userinfo,
                    }),
                    aU: y.o(function () {
                      return o.tapListBar && o.tapListBar.apply(o, arguments);
                    }, 929),
                  }
                : {},
              { aV: t.isShowHalfEditor },
              t.isShowHalfEditor
                ? {
                    aW: y.sr("halfEditor", "45405124-22"),
                    aX: y.o(t.hideHalfEditor, 930),
                    aY: y.p({ "query-editor": t.queryHalfEditor }),
                  }
                : {},
              {
                aZ: y.f(r.detail.footernote, function (t, e, n) {
                  return { a: y.t(t), b: e };
                }),
              }
            )
          : {},
        {
          ba: y.o(o.onGuideCancel, 931),
          bb: y.o(o.onGuideConfirm, 932),
          bc: y.p({
            show: i.showFollowGuide,
            stat: "IOg00p000q012",
            "wzq-config": o.wzqConfig,
          }),
          bd: y.n(t.noScroll ? "no-scroll" : ""),
          be: y.o(function (t) {
            return o.handlePageClick(t);
          }, 933),
        }
      );
    },
  ],
  ["__scopeId", "data-v-45405124"],
]);
wx.createComponent(et);
var nt = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.BUS = J),
  (exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRhaWx5LXJlcG9ydC9jb21wb25lbnRzL3N0b2NrLWRhaWx5LXJlcG9ydC9kZWZhdWx0V1pRLnZ1ZQ =
    nt),
  (exports.clearSpecialTag = function (t) {
    if (t) {
      var e = t.desc || "";
      return "text" === t.type && e
        ? (e =
            (e =
              (e =
                e.replace(
                  /<span\s+class\s?=\s?"[^>]+"\s+data-id\s?=\s?"[^>]+">([^<]+)<\/span>/g,
                  function (t, e) {
                    return e;
                  }
                ) || e).replace(
                /<a\s+class\s?=\s?"[^>]+"\s+href\s?=\s?"stock:\/\/([^>]+)\/([^>]+)">([^<]*)<\/a>/g,
                function (t, e, n, i) {
                  return i;
                }
              ) || e).replace(/<strong>([^<]+)<\/strong>/g, function (t, e) {
              return e;
            }) || e)
        : "";
    }
    return "";
  }),
  (exports.getMarket = function (t) {
    return Y.indexOf(t);
  }),
  (exports.hgFlucColor = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = "hq-green";
    return t >= 0 && (n = "hq-red"), "".concat(e).concat(n, "]");
  }),
  (exports.replaceSpecialTag = function (t) {
    var e = /<a([^>]*)>([^<]+)<\/a>/g;
    if (t) {
      var n = t.desc || "",
        i = t.list || [];
      if ("text" === t.type && n)
        return n
          ? n.replace(
              /<a\s+class\s?=\s?"[^>]+"\s+href\s?=\s?"stock:\/\/([^>]+)\/([^>]+)">([^<]*)<\/a>/g,
              function (t, e, n, i) {
                return '<span class="">'.concat(i, "</span>");
              }
            )
          : "";
      if ("emphasis" === t.type && i && i.length > 0)
        for (var r = 0, o = i.length; r < o; r++) {
          var s = i[r];
          return s ? s.replace(e, "$2") : "";
        }
      return "";
    }
    return "";
  }),
  (exports.replaceSpecialTagZX = function (t) {
    return t && t.desc
      ? t.desc.replace(
          /<a\s+plate_code\s?=\s?"([^>]*)"\s+dttype\s?=\s?"([^>]+)"\s+dtcolor\s?=\s?"([^>]+)">([^<]*)<\/a>/g,
          function (t, e, n, i, r) {
            return '<a class="_a" data-plate-code="'
              .concat(e, '">&nbsp;')
              .concat(r, "</a>");
          }
        )
      : "";
  });
