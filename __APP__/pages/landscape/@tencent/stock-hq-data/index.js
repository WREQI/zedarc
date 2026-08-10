var e = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../../@babel/runtime/helpers/get"),
  n = require("../../../../@babel/runtime/helpers/getPrototypeOf"),
  a = require("../../../../@babel/runtime/helpers/inherits"),
  c = require("../../../../@babel/runtime/helpers/createSuper"),
  o = require("../../../../@babel/runtime/helpers/typeof"),
  i = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  s = require("../../../../@babel/runtime/helpers/classCallCheck"),
  u = require("../../../../@babel/runtime/helpers/createClass"),
  l = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  d = Object.defineProperty,
  p = Object.defineProperties,
  h = Object.getOwnPropertyDescriptors,
  f = Object.getOwnPropertySymbols,
  v = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable,
  k = function (e, t, r) {
    return t in e
      ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  g = function (e, t) {
    for (var r in t || (t = {})) v.call(t, r) && k(e, r, t[r]);
    if (f) {
      var n,
        a = l(f(t));
      try {
        for (a.s(); !(n = a.n()).done; ) {
          r = n.value;
          m.call(t, r) && k(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  y = function (e, t) {
    return p(e, h(t));
  },
  b = function (e, t, r) {
    return new Promise(function (n, a) {
      var c = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, o);
        };
      i((r = r.apply(e, t)).next());
    });
  };
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var x = require("utils.js"),
  w = require("../../../../common/vendor.js"),
  S = require("./websocket/mp.js"),
  M = require("api/hostConfig.js"),
  q = require("api/remind.js"),
  C = (function () {
    function e(t) {
      var r, n, a, c;
      s(this, e),
        (this.ajaxGet = t || this.defaultAjaxGet),
        (this.oem =
          null == (r = null == window ? void 0 : window.$broker)
            ? void 0
            : r.id),
        (this.origin = "wzq"),
        (this.host = "https://proxy.finance.qq.com"),
        (this.qtHost = "https://sqt.gtimg.cn");
      var o = !1;
      try {
        o = !0;
      } catch (e) {}
      if (this.oem) {
        this.origin =
          M.SOURCEENUM[this.oem] ||
          (null == (n = null == window ? void 0 : window.$broker)
            ? void 0
            : n.appSource) ||
          M.SOURCEENUM.DEFAULT;
        var i = M.HOSTENUM[this.oem] || M.HOSTENUM.DEFAULT;
        (this.host = i.PROXY_QQ), (this.qtHost = i.SQT);
      } else if (
        (null == window ? void 0 : window.$app) &&
        /^(h5|quick)_.*/.test(window.$app)
      )
        this.origin = window.$app;
      else if (null == window ? void 0 : window.IS_WZQ_LIGHT)
        this.origin = "mini_h5";
      else if (o) {
        var u =
          (null == (c = null == (a = getApp()) ? void 0 : a.globalData)
            ? void 0
            : c.APPNAME) || "zxg";
        "zxg" === u
          ? (this.origin = "zxg_xcx")
          : "wzq" === u && (this.origin = "wzqxcx");
      } else
        /channel=lct_app/.test(null == location ? void 0 : location.hash) &&
          (this.origin = "lct_app");
    }
    return (
      u(e, [
        {
          key: "defaultAjaxGet",
          value: function (e) {
            return b(
              this,
              null,
              i().mark(function t() {
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), fetch(e);
                        case 3:
                          return t.abrupt("return", t.sent.json());
                        case 6:
                          return (
                            (t.prev = 6),
                            (t.t0 = t.catch(0)),
                            t.abrupt("return", this.defaultErrorHandler(t.t0))
                          );
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 6]]
                );
              })
            );
          },
        },
        {
          key: "defaultErrorHandler",
          value: function () {
            return {};
          },
        },
        {
          key: "getSign",
          value: function (e) {
            for (var t = [], r = 0, n = Object.keys(e); r < n.length; r++) {
              var a = n[r];
              void 0 !== e[a] &&
                "" !== e[a] &&
                t.push("".concat(a, "=").concat(e[a]));
            }
            return (
              t.push("key=".concat(M.SIGN_KEY[this.origin])),
              {
                "x-appid": this.origin,
                "x-sa-v": 1,
                "x-sa-sign": w.md5Module(t.join("&")).toLowerCase(),
                "x-timestamp": parseInt(e.t / 1e3, 10),
              }
            );
          },
        },
        {
          key: "getSignV2",
          value: function (e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "GET",
                r = [],
                n = 0,
                a = Object.keys(e);
              n < a.length;
              n++
            ) {
              var c = a[n];
              void 0 !== e[c] &&
                "" !== e[c] &&
                r.push("".concat(c, "=").concat(e[c]));
            }
            var o = w
              .md5Module("".concat(this.origin).concat(t.toUpperCase()))
              .toUpperCase();
            return (
              r.push("key=".concat(o)),
              y(g({}, e), {
                "x-appid": this.origin,
                "x-sa-v": 2,
                "x-sa-sign": w.md5Module(r.join("&")).toLowerCase(),
                "x-timestamp": parseInt(e.t / 1e3, 10),
              })
            );
          },
        },
        {
          key: "getQTAdapter",
          value: function (e) {
            return void 0 === e
              ? S.defaultAdapter
              : "string" == typeof e
              ? "stockinfo" === e
                ? S.stockInfoAdapter
                : S.defaultAdapter
              : "object" == o(e)
              ? e
              : void 0;
          },
        },
        {
          key: "getQTs",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, d, p, h, f, v, m, k, g, y, b, w, S, M;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (a = r.getAll),
                            (c = void 0 !== a && a),
                            (o = r.encode),
                            (s = void 0 === o ? "utf8" : o),
                            (u = c ? "" : "s_"),
                            (d = []),
                            (p = l(e));
                          try {
                            for (p.s(); !(h = p.n()).done; )
                              (f = h.value),
                                (v = x.splitSymbol(f)),
                                (m = v.market),
                                (k = v.scode),
                                x.isHKMarket(m)
                                  ? d.push("".concat(u, "r_hk").concat(k))
                                  : x.isUSMarket(m)
                                  ? d.push(
                                      "t_"
                                        .concat(u, "us")
                                        .concat(
                                          x.trimScode(k).replace(".", "__")
                                        )
                                    )
                                  : d.push("".concat(u).concat(f));
                          } catch (e) {
                            p.e(e);
                          } finally {
                            p.f();
                          }
                          return (
                            (g = ""
                              .concat(t.qtHost, "/")
                              .concat(s, "/?q=")
                              .concat(d.join(","), "&fmt=json")),
                            (n.prev = 4),
                            (n.next = 7),
                            t.ajaxGet(g)
                          );
                        case 7:
                          for (
                            y = n.sent, b = {}, w = 0, S = Object.keys(y);
                            w < S.length;
                            w++
                          )
                            (M = S[w]), (b[M.replace(/s_|r_|t_/g, "")] = y[M]);
                          return n.abrupt("return", b);
                        case 13:
                          return (
                            (n.prev = 13),
                            (n.t0 = n.catch(4)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 16:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[4, 13]]
                );
              })();
            });
          },
        },
      ]),
      e
    );
  })();
function H(e, t) {
  return x.isHSMarket(e) || x.isCSIndex(e)
    ? t[61]
    : x.isHSPlate(e)
    ? t[58]
    : x.isHKMarket(e)
    ? t[63]
    : x.isUSMarket(e) ||
      x.isUKMarket(e) ||
      x.isFTIndex(e) ||
      x.isFutures(e) ||
      x.isSPMarket(e)
    ? t[56]
    : void 0;
}
function T(e, t) {
  return x.isKeChuangStock(t)
    ? 1
    : x.isTransferableDebt(t)
    ? 10
    : x.isBJMarket(e) || x.isNQMarket(e) || x.isHSMarket(e) || x.isCSIndex(e)
    ? 100
    : 1;
}
function j(e, t) {
  var r,
    n,
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    c = t.market,
    o = t.scode,
    i = x.getSymbol(c, o);
  i = x.isUSMarket(c) ? x.hackUSSymbol(i) : i;
  var s = [],
    u = 0;
  if (x.isHDFutures(c) || x.isForex(c)) {
    for (
      var l = e.data,
        d =
          (a.useNewUrl
            ? null == (r = l.fs.fsList[0])
              ? void 0
              : r.pointList
            : l.minData[0].minList) || [],
        p = [],
        h = 0,
        f = 0;
      f < d.length;
      f++
    ) {
      var v = d[f],
        m = Math.max(v.vol - h, 0),
        k = {
          time: v.tm,
          price: a.useNewUrl ? v.pix : v.px,
          volume: m,
          totalVolume: v.vol,
        };
      p.push(k), (h = v.vol);
    }
    return { chartData: p, raw: l };
  }
  if (a.useNewUrl || x.isCSIndex(c) || x.isBCCurrency(c)) {
    for (
      var g = e.data,
        y = T(c, H(c, g.qt.fields)),
        b = (null == (n = g.fs.fsList[0]) ? void 0 : n.pointList) || [],
        w = 0;
      w < b.length;
      w++
    ) {
      var S = b[w],
        M = Math.max(S.vol - u, 0),
        q = {
          time: S.tm,
          price: S.pix,
          volume: M,
          amount: S.pix * M * y,
          totalVolume: S.vol * y,
          totalAmount: x.isHSMarket(c) ? +S.amt : void 0,
          iopv: S.iopv,
        };
      s.push(q), (u = S.vol);
    }
    return { chartData: s, raw: g };
  }
  for (
    var C = e.data[i], j = T(c, H(c, C.qt[i])), _ = 0;
    _ < C.data.data.length;
    _++
  ) {
    var P = C.data.data[_];
    if (P) {
      var U = P.split(" "),
        z = Math.max(U[2] - u, 0),
        D = {
          time: U[0],
          price: U[1],
          volume: z,
          amount: U[1] * z * j,
          totalVolume: U[2] * j,
          totalAmount: U[3],
        };
      C.data.extData && (D.iopv = C.data.extData[_].iopv),
        s.push(D),
        (u = U[2]);
    }
  }
  return { chartData: s, raw: C };
}
function _(e, t) {
  var r,
    n,
    a,
    c,
    o,
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    s = t.market,
    u = t.scode;
  if (x.isFutures(s) || x.isSPMarket(s)) {
    var d,
      p = e.data,
      h = H(s, null == (r = null == p ? void 0 : p.qt) ? void 0 : r.fields),
      f = i.useNewUrl
        ? null == (n = null == p ? void 0 : p.fs)
          ? void 0
          : n.fsList
        : p.minData,
      v = f ? f.reverse() : [],
      m = {
        items: [],
        labels: [],
        preClose: null == (a = v[0]) ? void 0 : a.preClose,
      },
      k = l(v);
    try {
      for (k.s(); !(d = k.n()).done; ) {
        for (
          var g = d.value,
            y = i.useNewUrl ? g.pointList : g.minList,
            b = 0,
            w = 0;
          w < y.length;
          w++
        ) {
          var S = y[w],
            M = w % 4 == 0 || w === y.length - 1;
          if ((x.isCMELFutures(h) && (M = !0), M)) {
            var q = Math.max(S.vol - b, 0),
              C = {
                time: S.tm,
                price: i.useNewUrl ? S.pix : S.px,
                volume: q,
                totalVolume: S.vol,
              };
            m.items.push(C);
          }
          b = S.vol;
        }
        m.labels.push(
          "".concat(g.date.slice(4, 6), "/").concat(g.date.slice(6))
        );
      }
    } catch (e) {
      k.e(e);
    } finally {
      k.f();
    }
    return { chartData: m, raw: p };
  }
  if (i.useNewUrl || x.isCSIndex(s) || x.isBCCurrency(s)) {
    var j,
      _ = e.data,
      P = H(s, _.qt.fields),
      U = T(s, P),
      z = _.fs.fsList.reverse(),
      D = {
        items: [],
        labels: [],
        preClose: null == (c = z[0]) ? void 0 : c.preClose,
      },
      N = l(z);
    try {
      for (N.s(); !(j = N.n()).done; ) {
        for (
          var E = j.value, I = E.pointList, O = 0, A = 0;
          A < I.length;
          A++
        ) {
          var F = I[A],
            G = !1;
          if (
            (x.isDebt(P) || x.isDebtIndex(P) || x.isNationalDebt(P)
              ? (G =
                  (A <= 120 && A % 4 == 0) ||
                  (A > 123 && A % 4 == 0) ||
                  271 === A)
              : x.isHKMarket(s) || x.isGuoZhengHK(P)
              ? (G =
                  (A <= 150 && A % 4 == 0) ||
                  (A >= 151 && (A + 1) % 4 == 0) ||
                  330 === A)
              : x.isBJMarket(s) ||
                x.isNQMarket(s) ||
                x.isHSMarket(s) ||
                x.isHSPlate(s) ||
                x.isCSIndex(s)
              ? (G =
                  (A <= 120 && A % 4 == 0) ||
                  (A > 123 && A % 4 == 0) ||
                  241 === A)
              : x.isUSMarket(s)
              ? (G = A % 4 == 0 || 390 === A)
              : x.isUKMarket(s) || x.isGermanFTIndex(P)
              ? (G = A % 4 == 0 || 510 === A)
              : x.isSGFutures(P)
              ? (G =
                  (A <= 735 && A % 4 == 0) ||
                  735 === A ||
                  (A >= 736 && A % 4 == 0) ||
                  1186 === A)
              : x.isBCCurrency(s) && (G = A % 4 == 0),
            G)
          ) {
            var B = Math.max(F.vol - O, 0),
              K = {
                date: E.date,
                time: F.tm,
                price: F.pix,
                volume: B,
                amount: F.pix * B * U,
                totalVolume: F.vol * U,
                totalAmount: x.isHSMarket(s) ? +F.amt : void 0,
              };
            D.items.push(K);
          }
          O = F.vol;
        }
        D.labels.push(
          "".concat(E.date.slice(4, 6), "/").concat(E.date.slice(6))
        );
      }
    } catch (e) {
      N.e(e);
    } finally {
      N.f();
    }
    return { chartData: D, raw: _ };
  }
  var L = x.getSymbol(s, u);
  L = x.isUSMarket(s) ? x.hackUSSymbol(L) : L;
  var Q,
    V = e.data[L],
    W = H(s, V.qt[L]),
    R = T(s, W),
    J = V.data.reverse(),
    $ = {
      items: [],
      labels: [],
      preClose: null == (o = J[0]) ? void 0 : o.prec,
    },
    Z = l(J);
  try {
    for (Z.s(); !(Q = Z.n()).done; ) {
      for (var X = Q.value, Y = X.data, ee = 0, te = 0; te < Y.length; te++)
        if (Y[te]) {
          var re = Y[te].split(" "),
            ne = !1;
          if (
            (x.isDebt(W) || x.isDebtIndex(W) || x.isNationalDebt(W)
              ? (ne =
                  (te <= 120 && te % 4 == 0) ||
                  (te > 123 && te % 4 == 0) ||
                  271 === te)
              : x.isBJMarket(s) ||
                x.isNQMarket(s) ||
                x.isHSMarket(s) ||
                x.isHSPlate(s)
              ? (ne =
                  (te <= 120 && te % 4 == 0) ||
                  (te > 123 && te % 4 == 0) ||
                  241 === te)
              : x.isHKMarket(s)
              ? (ne =
                  (te <= 150 && te % 4 == 0) ||
                  (te >= 151 && (te + 1) % 4 == 0) ||
                  330 === te)
              : x.isUSMarket(s)
              ? (ne = te % 4 == 0 || 390 === te)
              : x.isUKMarket(s) || x.isGermanFTIndex(W)
              ? (ne = te % 4 == 0 || 510 === te)
              : x.isSGFutures(W) &&
                (ne =
                  (te <= 735 && te % 4 == 0) ||
                  735 === te ||
                  (te >= 736 && te % 4 == 0) ||
                  1186 === te),
            ne)
          ) {
            var ae = Math.max(re[2] - ee, 0);
            $.items.push({
              date: X.date,
              time: re[0],
              price: re[1],
              volume: ae,
              amount: re[1] * ae * R,
              totalVolume: re[2] * R,
              totalAmount: re[3],
            });
          }
          ee = re[2];
        }
      $.labels.push("".concat(X.date.slice(4, 6), "/").concat(X.date.slice(6)));
    }
  } catch (e) {
    Z.e(e);
  } finally {
    Z.f();
  }
  return { chartData: $, raw: V };
}
function P(e, t) {
  for (
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      n = t.market,
      a = t.type,
      c = /^m\d/.test(a),
      o = e.data,
      i = c
        ? 1
        : (function (e, t) {
            return x.isKeChuangStock(t)
              ? 1
              : x.isBJMarket(e) ||
                x.isNQMarket(e) ||
                x.isHSMarket(e) ||
                x.isHSPlate(e) ||
                x.isCSIndex(e)
              ? 100
              : 1;
          })(n, o.qt.fields[61]),
      s = o.nodes,
      u = o.opPoints,
      l = [],
      d = 0;
    d < s.length;
    d++
  ) {
    var p = s[d],
      h = s[d - 1],
      f = p.date;
    c ||
      /-/.test(f) ||
      (f = ""
        .concat(f.slice(0, 4), "-")
        .concat(f.slice(4, 6), "-")
        .concat(f.slice(6, 8)));
    var v = {
      quoteTime: f,
      time: f,
      open: +p.open,
      close: +p.last,
      high: +p.high,
      low: +p.low,
      volume: p.volume / i,
      preClose: h ? +h.last : +o.prec || +p.open,
      fh: { FHcontent: p.dividend, since_add_zdf: p.addZdf },
      hsl: +p.exchange,
      isExRight: p.isExRight,
    };
    c
      ? r.useNewUrl && (v.hsl = +p.exchange / 100)
      : ((v.cje = p.amount / 1e4), (v.oi = +p.oi)),
      p.tradeDays && !isNaN(p.tradeDays) && (v.tradeDays = +p.tradeDays),
      isNaN(p.exchangeRaw) || (v.exchangeRaw = p.exchangeRaw);
    var m = u && u[d];
    if (m) {
      var k = m.signal,
        g = m.firstKprice,
        y = m.secondKprice;
      v.opData = { signal: k, firstKprice: g, secondKprice: y };
    }
    l.push(v);
  }
  return { chartData: l, raw: o };
}
function U(e, t) {
  var r = t.market,
    n = e.data.details || [];
  return (
    x.isFutures(r) && n.reverse(),
    {
      list: n.map(function (e) {
        var t = e.split("/");
        return {
          id: t[0],
          time: t[1],
          price: t[2],
          zdf: t[3],
          amount: t[4],
          volume: t[5],
          type: t[6],
        };
      }),
      page: e.data.page,
    }
  );
}
var z,
  D,
  N,
  E = "10.0",
  I = ["fuCN", "ftDAX30"],
  O = (function (e) {
    a(i, e);
    var o = c(i);
    function i() {
      var e,
        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (
        s(this, i),
        ((e = o.call(this, r)).onNetStateChangeBind = e.onNetStateChange.bind(
          t(e)
        )),
        window.addEventListener("online", e.onNetStateChangeBind),
        window.addEventListener("offline", e.onNetStateChangeBind),
        e.open(),
        e
      );
    }
    return (
      u(i, [
        {
          key: "getUrl",
          value: function () {
            var e = this.options.auth || {},
              t = e.appName,
              r = e.openId,
              n = e.token;
            return "wzq" === t
              ? ""
                  .concat(
                    this.baseUrl,
                    "?_appName=wzq&appid=wx9cf8c670ebd68ce4&check=11&openid="
                  )
                  .concat(r, "&fskey=")
                  .concat(n)
              : "mini" === t
              ? "".concat(this.baseUrl, "?_appName=mini")
              : window.IS_WZQ_LIGHT
              ? ""
                  .concat(
                    this.baseUrl,
                    "?_appName=mini_h5&appid=wx9cf8c670ebd68ce4&check=11&openid="
                  )
                  .concat(r, "&fskey=")
                  .concat(n)
              : this.baseUrl;
          },
        },
        {
          key: "open",
          value: function () {
            var e = this;
            this.ws ||
              this.isClose ||
              ((this.ws = new WebSocket(this.getUrl())),
              (this.ws.onopen = function () {
                var t, r;
                (e.pullMode = !1),
                  (e.retryCount = 0),
                  (null == (t = e.ws) ? void 0 : t.readyState) ===
                    (null == (r = e.ws) ? void 0 : r.OPEN) &&
                    (e.sendMessage(), e.sendHeartBeat(), e.ensureData());
              }),
              (this.ws.onmessage = function (t) {
                var r = (null == t ? void 0 : t.data) && JSON.parse(t.data);
                r &&
                  r.topicDataJson &&
                  (r.topicDataJson = JSON.parse(r.topicDataJson)),
                  e.getMessage(r);
              }),
              (this.ws.onclose = function (t) {
                if (((e.ws = null), 1e3 !== t.code && e.online)) {
                  if ((clearInterval(e.heartInterval), e.isClose)) return;
                  (e.retryCount += 1),
                    e.retryCount <= 1
                      ? e.open()
                      : (clearInterval(e.ensureInterval),
                        e.options.enableFallbackPolling || e.switchToPull(),
                        t &&
                          e.handleError(
                            e.getReportParams(t, "websocket-close-event")
                          ));
                }
              }),
              (this.ws.onerror = function (t) {
                e.handleError(e.getReportParams(t, "websocket-error-event"));
              }));
          },
        },
        {
          key: "getReportParams",
          value: function (e, t) {
            var r,
              n = "websocket-close-event" === t,
              a = {
                event_type: t,
                type: null == e ? void 0 : e.type,
                url: this.baseUrl,
                ready_state: null == (r = this.ws) ? void 0 : r.readyState,
                retry_count: this.retryCount,
                online: this.online,
              };
            return n
              ? y(g({}, a), {
                  code: null == e ? void 0 : e.code,
                  reason: null == e ? void 0 : e.reason,
                  was_clean: null == e ? void 0 : e.wasClean,
                })
              : a;
          },
        },
        {
          key: "close",
          value: function (e) {
            var t;
            e ||
              (window.removeEventListener("online", this.onNetStateChangeBind),
              window.removeEventListener("offline", this.onNetStateChangeBind)),
              r(n(i.prototype), "close", this).call(this),
              null == (t = this.ws) || t.close(1e3),
              (this.ws = null);
          },
        },
        {
          key: "send",
          value: function (e) {
            var t, r, n;
            (null == (t = this.ws) ? void 0 : t.readyState) ===
              (null == (r = this.ws) ? void 0 : r.OPEN) &&
              (null == (n = this.ws) || n.send(e));
          },
        },
        {
          key: "onNetStateChange",
          value: function (e) {
            (this.online = "online" === e.type),
              this.online
                ? ((this.isClose = !1),
                  (this.retryCount = 0),
                  this.pull({ online: !0 }),
                  this.open())
                : this.close(!0);
          },
        },
      ]),
      i
    );
  })(S.BaseWebSocket);
function A(e) {
  var t = [];
  return (
    e.map(function (e) {
      var r = e.code,
        n = e.name,
        a = e.last,
        c = e.ad,
        o = e.adp,
        i = x.splitSymbol(r),
        s = i.market,
        u = i.scode;
      t.push({
        m: s,
        c: u,
        n: n,
        price: a,
        zde: +c > 0 ? "+".concat(c) : c,
        zdf: +o > 0 ? "+".concat(o) : o,
      });
    }),
    t
  );
}
function F(e, t) {
  var r = [];
  return (
    e.map(function (e) {
      var n = e.code,
        a = e.name,
        c = e.adp,
        o = e.leadStock,
        i = e.leadStocks,
        s = ("h5Industry" === t ? i && i[0] : o) || {};
      r.push({
        code: "etfBoard" === t ? n.slice(2) : "hs" !== N ? n.slice(4) : n,
        name: a,
        zdf: "etfBoard" === t ? "" : +c > 0 ? "+".concat(c) : c,
        fn: s.name,
        fzjcj: s.last,
        fzdf: +s.adp > 0 ? "+".concat(s.adp) : s.adp,
      });
    }),
    r
  );
}
function G(e, t) {
  var r = [];
  return (
    e.map(function (e) {
      var n = e.name,
        a = e.code,
        c = e.adp20,
        o = e.adpy;
      r.push({ name: n, code: a, zdf: "twentyDay" === t ? c : o });
    }),
    r
  );
}
function B(e) {
  return (
    Object.keys(e).map(function (t) {
      Object.keys(e[t]).map(function (r) {
        var n = [];
        "rank" === r && e[t][r]
          ? (n = e[t][r].data)
          : "rank" !== r && (n = e[t][r]);
        var a = [];
        n.map(function (e) {
          var t = e.code,
            r = e.name,
            n = e.last,
            c = e.type,
            o = e.ad,
            i = e.adp,
            s = e.amount,
            u = e.exchange,
            l = e.ads,
            d = e.amplitude,
            p = e.volratio,
            h = e.comment,
            f = x.splitSymbol(t),
            v = f.market,
            m = f.scode;
          a.push({
            market: v,
            code: m,
            name: r,
            zjcj: x.isHSMarket(v) ? (+n).toFixed(2) : n,
            stock_type: c,
            zde: o > 0 ? "+".concat(o) : o,
            zdf: i > 0 ? "+".concat(i) : i,
            cjje: s,
            hsl: u,
            zs: l,
            zf: d,
            lb: p,
            delay: "0",
            comment: h && h[0] ? h[0] : "",
          });
        }),
          (e[t][r] = a);
      });
    }),
    e
  );
}
function K(e, t) {
  var r = null;
  return (
    (N = e),
    "hs" === e
      ? (r = (function (e) {
          var t,
            r,
            n,
            a = [],
            c = [],
            o = [],
            i = [],
            s = [],
            u = [],
            l = [],
            d = {};
          if (e && e.index) {
            a = A(e.index);
            var p = e.index.find(function (e) {
                return "sh000001" === e.code;
              }),
              h = e.index.find(function (e) {
                return "sz399001" === e.code;
              });
            p &&
              h &&
              ((t = +p.upn + +h.upn),
              (r = +p.downn + +h.downn),
              (n = +p.equaln + +h.equaln));
          }
          return (
            (null == e ? void 0 : e.board) &&
              (c = (function (e) {
                var t = [],
                  r = ["领涨板块", "领跌板块", "资金净流入最多"];
                return (
                  e.map(function (e, n) {
                    var a = e.code,
                      c = e.name,
                      o = e.adp;
                    t.push({
                      code: a,
                      name: c,
                      zdf: +o > 0 ? "+".concat(o) : o,
                      desc: r[n],
                    });
                  }),
                  t
                );
              })(e.board)),
            e && e.industry && (o = F(e.industry)),
            e &&
              e.industryCard &&
              (i = (function (e) {
                var t = { today: {}, twentyDay: [], year: [] },
                  r = e.advance,
                  n = e.advance20day,
                  a = e.advanceThisYear;
                return (
                  (t.today.firstPlate = (function (e) {
                    var t = e.code,
                      r = e.name,
                      n = e.adp,
                      a = e.tags,
                      c = e.leadStocks,
                      o = [];
                    return (
                      c.map(function (e) {
                        var t = e.code,
                          r = e.name,
                          n = e.adp;
                        o.push({
                          code: t,
                          name: r,
                          zdf: +n > 0 ? "+".concat(n) : n,
                        });
                      }),
                      {
                        code: t,
                        name: r,
                        zdf: +n > 0 ? "+".concat(n) : n,
                        tags: a,
                        leadStock: o,
                      }
                    );
                  })(r[0])),
                  (t.today.followPlate = F(r.slice(1, 4), "h5Industry")),
                  (t.twentyDay = G(n, "twentyDay")),
                  (t.year = G(a, "year")),
                  t
                );
              })(e.industryCard)),
            e && e.concept && (s = F(e.concept)),
            e &&
              e.etf &&
              (u = (function (e) {
                var t = [];
                return (
                  e.map(function (e) {
                    var r = e.code,
                      n = e.name,
                      a = e.adp,
                      c = e.adpy,
                      o = e.last,
                      i = e.scale,
                      s = e.labels;
                    (i = i ? x.bigNumberToText(i) : "--"),
                      t.push({
                        code: r,
                        name: n,
                        zdf: +a > 0 ? "+".concat(a) : a,
                        zdfy: +c > 0 ? "+".concat(c) : c,
                        zxj: o,
                        scale: i,
                        labels: s,
                      });
                  }),
                  t
                );
              })(e.etf)),
            e && e.rankings && (l = B(e.rankings)),
            e &&
              e.rankingV2 &&
              (d = (function (e) {
                if (e && e.data) {
                  var t = e.data,
                    r = [];
                  return (
                    Array.isArray(t) &&
                      t.map(function (e) {
                        var t = e.code,
                          n = e.name,
                          a = e.last,
                          c = e.type,
                          o = e.ad,
                          i = e.adp,
                          s = e.amount,
                          u = e.exchange,
                          l = e.ads,
                          d = e.amplitude,
                          p = e.volratio,
                          h = e.comment,
                          f = e.labels,
                          v = e.netmainin,
                          m = x.splitSymbol(t),
                          k = m.market,
                          g = m.scode;
                        r.push({
                          market: k,
                          code: g,
                          name: n,
                          zjcj: x.isHSMarket(k) ? (+a).toFixed(2) : a,
                          stock_type: c,
                          zde: o > 0 ? "+".concat(o) : o,
                          zdf: i > 0 ? "+".concat(i) : i,
                          cjje: s,
                          hsl: u,
                          zs: l,
                          zf: d,
                          lb: p,
                          delay: "0",
                          comment: h && h[0] ? h[0] : "",
                          labels: f,
                          netmainin: v,
                        });
                      }),
                    { data: r, offset: e.offset, total: e.total }
                  );
                }
              })(e.rankingV2)),
            {
              mlist: a,
              raiseNum: t,
              fallNum: r,
              holdNum: n,
              hotPlate: c,
              industry: o,
              industryCard: i,
              concept: s,
              hsEtf: u,
              stock: l,
              stockPage: d,
            }
          );
        })(t))
      : "hk" === e
      ? (r = (function (e) {
          var t = [],
            r = [],
            n = [];
          return (
            e && e.index && (t = A(e.index)),
            e && e.industry && (r = F(e.industry)),
            e && e.rankings && (n = B(e.rankings)),
            { mlist: t, industry: r, stock: n }
          );
        })(t))
      : "us" === e &&
        (r = (function (e) {
          var t = [],
            r = [],
            n = [],
            a = [];
          return (
            e && e.index && (t = A(e.index)),
            e && e.etfBoard && (r = F(e.etfBoard, "etfBoard")),
            e && e.industry && (n = F(e.industry)),
            e && e.rankings && (a = B(e.rankings)),
            { mlist: t, etf: r, industry: n, stock: a }
          );
        })(t)),
    r
  );
}
var L = { "Content-Type": "application/json" },
  Q = (function (t) {
    a(n, C);
    var r = c(n);
    function n(e) {
      var t;
      return (
        s(this, n),
        ((t = r.call(this, e)).path = "".concat(
          t.host,
          "/ifzqgtimg/appstock/app"
        )),
        t
      );
    }
    return (
      u(n, [
        {
          key: "ajaxGetWithOrigin",
          value: function (e) {
            return this.ajaxGet(
              ""
                .concat(e, "&app=")
                .concat(this.origin, "&t=")
                .concat(new Date().getTime())
            );
          },
        },
        {
          key: "judgeAdded",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p, h, f;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.app),
                            (s = e.openId),
                            (u = e.fsKey),
                            (l = e.check),
                            (d = x.getSymbol(a, c)),
                            (p = "".concat(
                              t.host,
                              "/newstock/stockapp/zixuangu/stockAdd"
                            )),
                            (h = ""),
                            o && "wzq" !== o && "xcx" !== o && "mp" !== o
                              ? /^(h5|quick)_.*/.test(o) &&
                                (h = ""
                                  .concat(p, "?stocks=")
                                  .concat(d, "&app=")
                                  .concat(o, "&check=")
                                  .concat(l, "&openid=")
                                  .concat(s, "&fskey=")
                                  .concat(u))
                              : (h = ""
                                  .concat(p, "?stocks=")
                                  .concat(d, "&app=")
                                  .concat(
                                    t.origin,
                                    "&appid=wx9cf8c670ebd68ce4&check=11&openid="
                                  )
                                  .concat(s, "&fskey=")
                                  .concat(u)),
                            (n.prev = 3),
                            (n.next = 6),
                            t.ajaxGet(h)
                          );
                        case 6:
                          return (
                            (f = n.sent),
                            n.abrupt(
                              "return",
                              r.needProcess ? Boolean(+f.data[d]) : f
                            )
                          );
                        case 10:
                          return (
                            (n.prev = 10),
                            (n.t0 = n.catch(3)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[3, 10]]
                );
              })();
            });
          },
        },
        {
          key: "getQT",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p, h, f, v;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((a = e.market),
                            (c = e.scode),
                            (o = e.currency),
                            (s = e.encode),
                            (u = void 0 === s ? "" : s),
                            (l = ""),
                            (l = x.isHKMarket(a)
                              ? "r_hk".concat(c)
                              : x.isUSMarket(a)
                              ? "t_us".concat(x.trimScode(c).replace(".", "__"))
                              : x.isHDFutures(a)
                              ? "r_hd".concat(c)
                              : x.isBCCurrency(a)
                              ? "bc".concat(c, "-").concat(o)
                              : x.getSymbol(a, c)),
                            !I.includes(l))
                          ) {
                            n.next = 4;
                            break;
                          }
                          return n.abrupt("return", t.getQTFromMins(e, r, l));
                        case 4:
                          return (
                            (d = ""
                              .concat(t.qtHost, "/")
                              .concat(u, "/?q=")
                              .concat(l, "&fmt=json")),
                            (n.prev = 5),
                            (n.next = 8),
                            t.ajaxGetWithOrigin(d)
                          );
                        case 8:
                          if (((h = n.sent), (p = h[l]))) {
                            n.next = 11;
                            break;
                          }
                          throw (
                            (Array.isArray(h.pv_none_match) &&
                              1 == +h.pv_none_match[0] &&
                              t.defaultErrorHandler({
                                code: "NO_MATCH",
                                symbol: l,
                              }),
                            new Error())
                          );
                        case 11:
                          n.next = 16;
                          break;
                        case 13:
                          (n.prev = 13),
                            (n.t0 = n.catch(5)),
                            ((p = new Array(100).fill(""))[3] = "0.00"),
                            (p[31] = "0.00"),
                            (p[32] = "0.00"),
                            t.defaultErrorHandler({
                              code: "NO_DATA",
                              symbol: l,
                            });
                        case 16:
                          return (
                            (n.prev = 16),
                            (f = t.getQTAdapter(r.adapterType)),
                            (v = t.processQT({
                              market: a,
                              scode: c,
                              symbol: l,
                              adapter: f,
                              data: p,
                            })),
                            n.abrupt(
                              "return",
                              x.isBCCurrency(a)
                                ? v
                                : "stockinfo" === r.adapterType && r.needProcess
                                ? S.stockInfoFormat(v)
                                : v
                            )
                          );
                        case 21:
                          return (
                            (n.prev = 21),
                            (n.t1 = n.catch(16)),
                            n.abrupt("return", t.defaultErrorHandler(n.t1))
                          );
                        case 24:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [
                    [5, 13],
                    [16, 21],
                  ]
                );
              })();
            });
          },
        },
        {
          key: "getQTsWithProcess",
          value: function (e) {
            return b(
              this,
              null,
              i().mark(function t() {
                var r, n, a, c, o, s, u, l, d, p, h;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            this.getQTs(e, { getAll: !0, encode: "utf8" })
                          );
                        case 3:
                          for (
                            r = t.sent, n = {}, a = 0, c = Object.keys(r);
                            a < c.length;
                            a++
                          )
                            (o = c[a]),
                              (s = x.splitSymbol(o)),
                              (u = s.market),
                              (l = s.scode),
                              (d = r[o]),
                              (p = this.getQTAdapter("stockinfo")),
                              (h = this.processQT({
                                market: u,
                                scode: l,
                                symbol: o,
                                adapter: p,
                                data: d,
                              })),
                              (n[o] = S.stockInfoFormat(h));
                          return t.abrupt("return", n);
                        case 9:
                          return (
                            (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            t.abrupt("return", this.defaultErrorHandler(t.t0))
                          );
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 9]]
                );
              })
            );
          },
        },
        {
          key: "processQT",
          value: function (e) {
            var t,
              r = e.market,
              n = e.scode,
              a = e.symbol,
              c = e.adapter,
              o = e.data;
            return (
              x.isBJMarket(r) || x.isNQMarket(r)
                ? (t = c.adaptBJ(o))
                : x.isHSMarket(r) || x.isCSIndex(r)
                ? ((t = c.adaptHS(o)), x.typeMap.set(a, o[61]))
                : x.isHSPlate(r)
                ? (t = c.adaptPT(o))
                : x.isHKMarket(r)
                ? ((t = c.adaptHK(o)), x.typeMap.set("hk".concat(n), o[63]))
                : x.isUSMarket(r)
                ? (t = c.adaptUS(o))
                : x.isUKMarket(r)
                ? (t = c.adaptUK(o))
                : x.isFTIndex(r)
                ? (t = c.adaptFT(o))
                : x.isFutures(r)
                ? (t = x.isHDFutures(r) ? c.adaptHD(o) : c.adaptFU(o))
                : x.isSPMarket(r)
                ? (t = c.adaptSP(o))
                : x.isForex(r)
                ? (t = c.adaptFX(o))
                : x.isBCCurrency(r) && (t = c.adaptBC(o)),
              t
            );
          },
        },
        {
          key: "getTransDebtQT",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.encode),
                            (s = void 0 === o ? "utf8" : o),
                            (u = "z_".concat(x.getSymbol(a, c))),
                            (l = ""
                              .concat(t.qtHost, "/")
                              .concat(s, "/?q=")
                              .concat(u, "&fmt=json")),
                            (n.prev = 1),
                            (n.next = 4),
                            t.ajaxGetWithOrigin(l)
                          );
                        case 4:
                          return (
                            (d = n.sent),
                            (p = t
                              .getQTAdapter(r.adapterType)
                              .adaptTransDebt(d[u])),
                            n.abrupt(
                              "return",
                              "stockinfo" === r.adapterType && r.needProcess
                                ? S.transDebtFormat(p)
                                : p
                            )
                          );
                        case 9:
                          return (
                            (n.prev = 9),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 12:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 9]]
                );
              })();
            });
          },
        },
        {
          key: "getMarketState",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.encode),
                            (o = void 0 === c ? "utf8" : c),
                            (s =
                              x.isFutures(a) || x.isSPMarket(a)
                                ? "globalCommodityStat"
                                : "marketStat"),
                            (u = ""
                              .concat(t.qtHost, "/")
                              .concat(o, "/?q=")
                              .concat(s, "&fmt=json")),
                            (n.prev = 1),
                            (n.next = 4),
                            t.ajaxGetWithOrigin(u)
                          );
                        case 4:
                          return (
                            (l = n.sent),
                            n.abrupt("return", r.needProcess ? l[s][0] : l)
                          );
                        case 8:
                          return (
                            (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })();
            });
          },
        },
        {
          key: "getPlate",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.loginInfo),
                            (s = x.getSymbol(a, c)),
                            (u = ""),
                            x.isHSMarket(a)
                              ? (u = ""
                                  .concat(t.path, "/stockinfo/plate?code=")
                                  .concat(s, "&zdf=1"))
                              : (x.isHKMarket(a) || x.isUSMarket(a)) &&
                                (u = ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/stockminor/plate/get?code="
                                  )
                                  .concat(s)),
                            o &&
                              (u = ""
                                .concat(u, "&app=")
                                .concat(o.app, "&appid=")
                                .concat(o.appid, "&openid=")
                                .concat(o.openid, "&fskey=")
                                .concat(o.fskey, "&check=11")),
                            (n.prev = 3),
                            (n.next = 6),
                            t.ajaxGetWithOrigin(u)
                          );
                        case 6:
                          return (
                            (l = n.sent),
                            n.abrupt("return", r.needProcess ? l.data : l)
                          );
                        case 10:
                          return (
                            (n.prev = 10),
                            (n.t0 = n.catch(3)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 13:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[3, 10]]
                );
              })();
            });
          },
        },
        {
          key: "getTradeDetail",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.start),
                            (s = e.openId),
                            (u = void 0 === s ? "" : s),
                            (l = x.getSymbol(a, c)),
                            (d = ""
                              .concat(t.host, "/cgi/cgi-bin/detail/all?code=")
                              .concat(l, "&start=")
                              .concat(o, "&openId=")
                              .concat(u)),
                            (n.prev = 1),
                            (n.next = 4),
                            t.ajaxGetWithOrigin(d)
                          );
                        case 4:
                          return (
                            (p = n.sent),
                            n.abrupt("return", r.needProcess ? U(p, e) : p)
                          );
                        case 8:
                          return (
                            (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })();
            });
          },
        },
        {
          key: "getTradeDetailLevel2",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p, h, f, v, m, k;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.start),
                            (s = e.direction),
                            (u = e.count),
                            (l = void 0 === u ? 100 : u),
                            (d = e.openId),
                            (p = void 0 === d ? "" : d),
                            (h = e.fskey),
                            (f = void 0 === h ? "" : h),
                            (v = x.getSymbol(a, c)),
                            (m = ""
                              .concat(
                                t.host,
                                "/cgi/cgi-bin/lv2detail/all?code="
                              )
                              .concat(v, "&start=")
                              .concat(o)
                              .concat(s ? "&direction=".concat(s) : "")
                              .concat(l ? "&count=".concat(l) : "", "&openid=")
                              .concat(p, "&fskey=")
                              .concat(f, "&access_token=")
                              .concat(f, "&appid=wx9cf8c670ebd68ce4&check=11")),
                            (n.prev = 1),
                            (n.next = 4),
                            t.ajaxGetWithOrigin(m)
                          );
                        case 4:
                          return (
                            (k = n.sent),
                            n.abrupt("return", r.needProcess ? U(k, e) : k)
                          );
                        case 8:
                          return (
                            (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })();
            });
          },
        },
        {
          key: "getBigDeal",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p, h;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.need),
                            (s = void 0 === o ? 100 : o),
                            (u = e.start),
                            (l = void 0 === u ? "" : u),
                            (d = x.getSymbol(a, c)),
                            (p = ""
                              .concat(
                                t.host,
                                "/cgi/cgi-bin/yidong/getDadan?code="
                              )
                              .concat(d, "&need=")
                              .concat(s, "&start=")
                              .concat(l, "&_appver=")
                              .concat(E)),
                            (n.prev = 1),
                            (n.next = 4),
                            t.ajaxGetWithOrigin(p)
                          );
                        case 4:
                          return (
                            (h = n.sent),
                            n.abrupt("return", r.needProcess ? h.data : h)
                          );
                        case 8:
                          return (
                            (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })();
            });
          },
        },
        {
          key: "getMins",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p, h, f, v, m, k, g, y, b, w, S;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((c = e.market),
                            (o = e.scode),
                            (s = e.currency),
                            (u = e.needIOPV),
                            (l = e.openId),
                            (d = void 0 === l ? "" : l),
                            (p = r.skipCache),
                            (h = void 0 !== p && p),
                            (f = x.getSymbol(c, o)),
                            (v =
                              (null == (a = t.qtFromMinsRes) ? void 0 : a[f]) ||
                              ("fuCN" === f ? t.fuCNRes : null)),
                            h || !I.includes(f) || !v)
                          ) {
                            n.next = 3;
                            break;
                          }
                          return n.abrupt("return", v);
                        case 3:
                          if (
                            !(
                              r.useNewUrl ||
                              x.isCSIndex(c) ||
                              x.isBCCurrency(c)
                            )
                          ) {
                            n.next = 27;
                            break;
                          }
                          if (((n.t0 = D), n.t0)) {
                            n.next = 8;
                            break;
                          }
                          return (n.next = 8), t.getServerTime();
                        case 8:
                          if (
                            ((m = new Date().getTime() - z + D),
                            (k = "".concat(
                              t.host,
                              "/cgi/cgi-bin/stockinfoquery/fs/app/get"
                            )),
                            (g = "fs,qt"
                              .concat(x.isHSMarket(c) ? ",attribute" : "")
                              .concat(x.isHSPlate(c) ? ",introduce" : "")
                              .concat(x.isUSMarket(c) ? ",pandata" : "")),
                            (y = {
                              _appver: x.isForex(c) ? "11.33.1" : "",
                              app: t.origin,
                              code: f,
                              "fs.type": "d1",
                              needDataType: g,
                              openid: d,
                              t: m,
                            }),
                            s && (y.currency = s),
                            (n.prev = 10),
                            !r.signV2)
                          ) {
                            n.next = 17;
                            break;
                          }
                          return (
                            (n.next = 14), t.ajaxGet(k, "GET", t.getSignV2(y))
                          );
                        case 14:
                          (n.t1 = n.sent), (n.next = 20);
                          break;
                        case 17:
                          return (
                            (n.next = 19),
                            t.ajaxGet(k, "GET", y, { headers: t.getSign(y) })
                          );
                        case 19:
                          n.t1 = n.sent;
                        case 20:
                          return (
                            (b = n.t1),
                            n.abrupt("return", r.needProcess ? j(b, e, r) : b)
                          );
                        case 24:
                          return (
                            (n.prev = 24),
                            (n.t2 = n.catch(10)),
                            n.abrupt("return", t.defaultErrorHandler(n.t2))
                          );
                        case 27:
                          return (
                            (w = ""),
                            x.isBJMarket(c) || x.isNQMarket(c)
                              ? (w = ""
                                  .concat(t.path, "/minute/query?code=")
                                  .concat(f))
                              : x.isHSMarket(c) || x.isHSPlate(c)
                              ? (w = ""
                                  .concat(t.path, "/minute/query?code=")
                                  .concat(f, "&cyb=1")
                                  .concat(u ? "&extData=iopv" : "", "&_appver=")
                                  .concat(E))
                              : x.isHKMarket(c)
                              ? (w = ""
                                  .concat(t.path, "/HkMinute/query?code=")
                                  .concat(f))
                              : x.isUSMarket(c)
                              ? (w = ""
                                  .concat(t.path, "/UsMinute/query?code=")
                                  .concat(x.hackUSSymbol(f)))
                              : x.isUKMarket(c)
                              ? (w = ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/Minuteuk/query?code="
                                  )
                                  .concat(f))
                              : x.isFTIndex(c)
                              ? (w = ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/Minuteftse/query?code="
                                  )
                                  .concat(f))
                              : x.isFutures(c)
                              ? (w = x.isHDFutures(c)
                                  ? ""
                                      .concat(
                                        t.host,
                                        "/cgi/cgi-bin/generalminute/main/minute?stockCode="
                                      )
                                      .concat(
                                        f,
                                        "&minType=d1&qtKey=fields%2Cmarket"
                                      )
                                  : ""
                                      .concat(
                                        t.host,
                                        "/cgi/cgi-bin/Minutefu/query?code="
                                      )
                                      .concat(f, "&openId=")
                                      .concat(d))
                              : x.isForex(c) &&
                                (w = ""
                                  .concat(t.path, "/minute/query?code=")
                                  .concat(f)),
                            (w = "".concat(w, "&openid=").concat(d)),
                            (n.prev = 29),
                            (n.next = 32),
                            t.ajaxGetWithOrigin(w)
                          );
                        case 32:
                          return (
                            (S = n.sent),
                            n.abrupt(
                              "return",
                              0 != +S.code
                                ? t.defaultErrorHandler()
                                : r.needProcess
                                ? j(S, e)
                                : S
                            )
                          );
                        case 36:
                          return (
                            (n.prev = 36),
                            (n.t3 = n.catch(29)),
                            n.abrupt("return", t.defaultErrorHandler(n.t3))
                          );
                        case 39:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [
                    [10, 24],
                    [29, 36],
                  ]
                );
              })();
            });
          },
        },
        {
          key: "getAuctionMins",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, d, p, h, f;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.stockType),
                            (s = e.openId),
                            (u = void 0 === s ? "" : s),
                            (d = x.getSymbol(a, c)),
                            (p =
                              "GP-A" === o ||
                              x.isKeChuangStock(o) ||
                              x.isChuangYeStock(o)
                                ? "sec"
                                : "min"),
                            (h = ""
                              .concat(
                                t.host,
                                "/cgi/cgi-bin/callAuction/get?stockCode="
                              )
                              .concat(d, "&dType=")
                              .concat(p, "&openid=")
                              .concat(u)),
                            (n.prev = 1),
                            (n.next = 4),
                            t.ajaxGetWithOrigin(h)
                          );
                        case 4:
                          return (
                            (f = n.sent),
                            n.abrupt(
                              "return",
                              r.needProcess
                                ? (function (e, t) {
                                    var r,
                                      n = t.market,
                                      a = t.stockType,
                                      c = t.dType,
                                      o = T(n, a),
                                      i = e.data["".concat(c, "List")] || [],
                                      s = {
                                        dType: c,
                                        items: [],
                                        max: 0,
                                        min: Number.MAX_SAFE_INTEGER,
                                        maxVol: 0,
                                      },
                                      u = l(i);
                                    try {
                                      for (u.s(); !(r = u.n()).done; ) {
                                        var d = r.value,
                                          p = void 0;
                                        "sec" === c
                                          ? ((p =
                                              60 * (d.tm.slice(2, 4) - 15) +
                                              +d.tm.slice(4)),
                                            (d.p = d.b1p),
                                            (d.b1v = Math.round(d.b1v / o)),
                                            (d.b2v = Math.round(d.b2v / o)),
                                            (d.s2v = Math.round(d.s2v / o)),
                                            (s.maxVol = Math.max(
                                              s.maxVol,
                                              +d.b1v + +d.b2v + +d.s2v
                                            )))
                                          : "min" === c &&
                                            (p =
                                              d.tm.slice(2, 4) -
                                              (x.isHSMarket(n) ? 15 : 0)),
                                          (s.items[p] = d),
                                          (s.max = Math.max(s.max, d.p)),
                                          (s.min = Math.min(s.min, d.p));
                                      }
                                    } catch (e) {
                                      u.e(e);
                                    } finally {
                                      u.f();
                                    }
                                    return s;
                                  })(f, y(g({}, e), { dType: p }))
                                : f
                            )
                          );
                        case 8:
                          return (
                            (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })();
            });
          },
        },
        {
          key: "getHistoryMins",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, d, p, h, f;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.date),
                            (s = e.openId),
                            (u = void 0 === s ? "" : s),
                            (d = "date="
                              .concat(o, "&stockCode=")
                              .concat(x.getSymbol(a, c))),
                            (p = w.md5Module(d).toLowerCase()),
                            (h = ""
                              .concat(
                                t.host,
                                "/cgi/cgi-bin/generalminute/history/minute?"
                              )
                              .concat(d, "&openid=")
                              .concat(u, "&sign=")
                              .concat(p)),
                            (n.prev = 1),
                            (n.next = 4),
                            t.ajaxGetWithOrigin(h)
                          );
                        case 4:
                          return (
                            (f = n.sent),
                            n.abrupt(
                              "return",
                              r.needProcess
                                ? (function (e, t) {
                                    var r,
                                      n = t.market,
                                      a = t.stockType,
                                      c = t.isHKOrZsOrFundOrNhg,
                                      o = T(n, a),
                                      i = {
                                        items: [],
                                        preClose: +e.data.preClose,
                                        avgPrice: 0,
                                      },
                                      s = 0,
                                      u = 0,
                                      d = l(e.data.minList);
                                    try {
                                      for (d.s(); !(r = d.n()).done; ) {
                                        var p = r.value;
                                        if (p) {
                                          var h = p.split(" "),
                                            f = Math.max(h[2] - s, 0),
                                            v = h[1] * f * o;
                                          i.items.push({
                                            time: h[0],
                                            price: h[1],
                                            volume: f,
                                            amount: v,
                                            totalVolume: h[2] * o,
                                            totalAmount: h[3],
                                          }),
                                            (s = h[2]),
                                            (u += v);
                                        }
                                      }
                                    } catch (e) {
                                      d.e(e);
                                    } finally {
                                      d.f();
                                    }
                                    var m = i.items[i.items.length - 1];
                                    return (
                                      c || void 0 === m.totalAmount
                                        ? (i.avgPrice =
                                            0 == +s ? +m.price : u / s / o)
                                        : (i.avgPrice =
                                            0 == +m.totalVolume
                                              ? +m.price
                                              : m.totalAmount / m.totalVolume),
                                      i
                                    );
                                  })(f, e)
                                : f
                            )
                          );
                        case 8:
                          return (
                            (n.prev = 8),
                            (n.t0 = n.catch(1)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 11:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 8]]
                );
              })();
            });
          },
        },
        {
          key: "getFmins",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p, h, f, v, m, k;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((a = e.market),
                            (c = e.scode),
                            (o = e.currency),
                            (s = e.openId),
                            (u = void 0 === s ? "" : s),
                            (l = x.getSymbol(a, c)),
                            !(
                              r.useNewUrl ||
                              x.isCSIndex(a) ||
                              x.isBCCurrency(a)
                            ))
                          ) {
                            n.next = 25;
                            break;
                          }
                          if (((n.t0 = D), n.t0)) {
                            n.next = 6;
                            break;
                          }
                          return (n.next = 6), t.getServerTime();
                        case 6:
                          if (
                            ((d = new Date().getTime() - z + D),
                            (p = "".concat(
                              t.host,
                              "/cgi/cgi-bin/stockinfoquery/fs/app/get"
                            )),
                            (h = "fs,qt"
                              .concat(x.isHSMarket(a) ? ",attribute" : "")
                              .concat(x.isHSPlate(a) ? ",introduce" : "")
                              .concat(x.isUSMarket(a) ? ",pandata" : "")),
                            (f = {
                              app: t.origin,
                              code: l,
                              "fs.type": "d5",
                              needDataType: h,
                              openid: u,
                              t: d,
                            }),
                            o && (f.currency = o),
                            (n.prev = 8),
                            !r.signV2)
                          ) {
                            n.next = 15;
                            break;
                          }
                          return (
                            (n.next = 12), t.ajaxGet(p, "GET", t.getSignV2(f))
                          );
                        case 12:
                          (n.t1 = n.sent), (n.next = 18);
                          break;
                        case 15:
                          return (
                            (n.next = 17),
                            t.ajaxGet(p, "GET", f, { headers: t.getSign(f) })
                          );
                        case 17:
                          n.t1 = n.sent;
                        case 18:
                          return (
                            (v = n.t1),
                            n.abrupt("return", r.needProcess ? _(v, e, r) : v)
                          );
                        case 22:
                          return (
                            (n.prev = 22),
                            (n.t2 = n.catch(8)),
                            n.abrupt("return", t.defaultErrorHandler(n.t2))
                          );
                        case 25:
                          return (
                            (m = ""),
                            (m = x.isUSMarket(a)
                              ? ""
                                  .concat(t.path, "/dayus/query?code=")
                                  .concat(x.hackUSSymbol(l))
                              : x.isUKMarket(a)
                              ? ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/Dayuk/query?code="
                                  )
                                  .concat(l)
                              : x.isFTIndex(a)
                              ? ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/Dayftse/query?code="
                                  )
                                  .concat(l)
                              : x.isFutures(a)
                              ? x.isHDFutures(a)
                                ? ""
                                    .concat(
                                      t.host,
                                      "/cgi/cgi-bin/generalminute/main/minute?stockCode="
                                    )
                                    .concat(
                                      l,
                                      "&minType=d5&qtKey=fields%2Cmarket"
                                    )
                                : ""
                                    .concat(
                                      t.host,
                                      "/cgi/cgi-bin/Dayfu/query?code="
                                    )
                                    .concat(l)
                              : ""
                                  .concat(t.path, "/day/query?code=")
                                  .concat(l, "&_appver=")
                                  .concat(E)),
                            (m = "".concat(m, "&openid=").concat(u)),
                            (n.prev = 27),
                            (n.next = 30),
                            t.ajaxGetWithOrigin(m)
                          );
                        case 30:
                          return (
                            (k = n.sent),
                            n.abrupt(
                              "return",
                              0 != +k.code
                                ? t.defaultErrorHandler()
                                : r.needProcess
                                ? _(k, e)
                                : k
                            )
                          );
                        case 34:
                          return (
                            (n.prev = 34),
                            (n.t3 = n.catch(27)),
                            n.abrupt("return", t.defaultErrorHandler(n.t3))
                          );
                        case 37:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [
                    [8, 22],
                    [27, 34],
                  ]
                );
              })();
            });
          },
        },
        {
          key: "getKline",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a,
                  c,
                  o,
                  s,
                  u,
                  l,
                  d,
                  p,
                  h,
                  f,
                  v,
                  m,
                  k,
                  g,
                  y,
                  b,
                  w,
                  S,
                  M,
                  q,
                  C;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = e.market),
                            (c = e.scode),
                            (o = e.currency),
                            (s = e.fq),
                            (u = e.type),
                            (l = e.kline),
                            (d = e.end),
                            (p = e.added),
                            (h = e.openId),
                            (f = e.fsKey),
                            (v = e.limit),
                            (m = void 0 === v ? 370 : v),
                            (k = e.opPoints),
                            (g = x.getSymbol(a, c)),
                            (y =
                              u ||
                              ["", "day", "week", "month", "season", "year"][
                                l
                              ]),
                            (b = ["", "qfq", "hfq", ""][s]),
                            (w = ""),
                            d &&
                              (w = /^m\d/.test(u)
                                ? "&endTime=".concat(d)
                                : x.isBCCurrency(a)
                                ? "&endTime=".concat(
                                    d.replace(/-/g, ""),
                                    "000000"
                                  )
                                : "&toDate=".concat(
                                    /-/.test(d)
                                      ? d
                                      : ""
                                          .concat(d.slice(0, 4), "-")
                                          .concat(d.slice(4, 6), "-")
                                          .concat(d.slice(6, 8))
                                  )),
                            (S = ["wzq", "zxg_xcx"].includes(t.origin)
                              ? "&fskey=".concat(
                                  f,
                                  "&appid=wx9cf8c670ebd68ce4&check=11"
                                )
                              : ""),
                            (M = "?code="
                              .concat(g, "&ktype=")
                              .concat(y, "&fqtype=")
                              .concat(b)
                              .concat(w, "&limit=")
                              .concat(m, "&openid=")
                              .concat(
                                h,
                                ""
                                  .concat(o ? "&currency=".concat(o) : "")
                                  .concat(p ? "&added=true".concat(S) : "")
                                  .concat(k ? "&op_points=true" : "")
                              )),
                            (q = ""
                              .concat(
                                t.host,
                                "/cgi/cgi-bin/stockinfoquery/kline/app/get"
                              )
                              .concat(M)),
                            (n.prev = 4),
                            (n.next = 7),
                            t.ajaxGetWithOrigin(q)
                          );
                        case 7:
                          return (
                            (C = n.sent),
                            n.abrupt(
                              "return",
                              0 != +C.code
                                ? t.defaultErrorHandler()
                                : r.needProcess
                                ? P(C, e, r)
                                : C
                            )
                          );
                        case 11:
                          return (
                            (n.prev = 11),
                            (n.t0 = n.catch(4)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 14:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[4, 11]]
                );
              })();
            });
          },
        },
        {
          key: "getMinKline",
          value: function (e) {
            return b(this, arguments, function (e) {
              var t = this,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return i().mark(function n() {
                var a, c, o, s, u, l, d, p, h;
                return i().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((a = e.market),
                            (c = e.scode),
                            (o = e.type),
                            (s = e.end),
                            (u = e.limit),
                            (l = void 0 === u ? 320 : u),
                            !(
                              r.useNewUrl ||
                              x.isCSIndex(a) ||
                              x.isBCCurrency(a)
                            ))
                          ) {
                            n.next = 3;
                            break;
                          }
                          return n.abrupt("return", t.getKline(e, r));
                        case 3:
                          return (
                            (d = x.getSymbol(a, c)),
                            (p = ""),
                            x.isHSMarket(a)
                              ? (p = ""
                                  .concat(t.path, "/kline/mkline?param=")
                                  .concat(d, ",")
                                  .concat(o, ",")
                                  .concat(s, ",")
                                  .concat(l))
                              : x.isHSPlate(a)
                              ? (p = ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/kline/getPtMink?param="
                                  )
                                  .concat(d, ",")
                                  .concat(o, ",")
                                  .concat(s, ",")
                                  .concat(l))
                              : x.isHKMarket(a)
                              ? (p = ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/kline/getHkMink?param="
                                  )
                                  .concat(d, ",")
                                  .concat(o, ",")
                                  .concat(s, ",")
                                  .concat(l))
                              : x.isUSMarket(a) &&
                                (p = ""
                                  .concat(
                                    t.host,
                                    "/cgi/cgi-bin/kline/getUsMink?param="
                                  )
                                  .concat(d, ",")
                                  .concat(o, ",")
                                  .concat(s, ",")
                                  .concat(l)),
                            (n.prev = 6),
                            (n.next = 9),
                            t.ajaxGetWithOrigin(p)
                          );
                        case 9:
                          return (
                            (h = n.sent),
                            n.abrupt(
                              "return",
                              0 != +h.code
                                ? t.defaultErrorHandler()
                                : r.needProcess
                                ? (function (e, t) {
                                    var r = t.market,
                                      n = t.scode,
                                      a = t.type;
                                    if (x.isHSPlate(r) || x.isUSMarket(r)) {
                                      for (
                                        var c = e.data,
                                          o = c.kline,
                                          i = [],
                                          s = 0;
                                        s < o.length;
                                        s++
                                      ) {
                                        var u = o[s],
                                          l = o[s - 1];
                                        i.push({
                                          quoteTime: u.dt,
                                          time: u.dt,
                                          open: +u.op,
                                          close: +u.cp,
                                          high: +u.hp,
                                          low: +u.lp,
                                          volume: +u.vol,
                                          preClose: l
                                            ? +l.cp
                                            : +c.prec || +u.op,
                                          cje: +u.amt,
                                        });
                                      }
                                      return { chartData: i, raw: c };
                                    }
                                    for (
                                      var d =
                                          e.data[x.getSymbol(r, n)] || e.data,
                                        p = d[a] || d.data,
                                        h = [],
                                        f = 0;
                                      f < p.length;
                                      f++
                                    ) {
                                      var v = p[f];
                                      if (0 !== v.length) {
                                        var m = p[f - 1];
                                        h.push({
                                          quoteTime: v[0],
                                          time: v[0],
                                          open: +v[1],
                                          close: +v[2],
                                          high: +v[3],
                                          low: +v[4],
                                          volume: +v[5],
                                          preClose: m
                                            ? +m[2]
                                            : +d.prec || +v[1],
                                          fh: v[6] || {},
                                          hsl: +v[7] / 100,
                                        });
                                      }
                                    }
                                    return { chartData: h, raw: d };
                                  })(h, e)
                                : h
                            )
                          );
                        case 13:
                          return (
                            (n.prev = 13),
                            (n.t0 = n.catch(6)),
                            n.abrupt("return", t.defaultErrorHandler(n.t0))
                          );
                        case 16:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[6, 13]]
                );
              })();
            });
          },
        },
        {
          key: "hackFUCN",
          value: function (e, t) {
            return b(
              this,
              null,
              i().mark(function r() {
                return i().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return r.abrupt(
                            "return",
                            this.getQTFromMins(e, t, "fuCN")
                          );
                        case 1:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  this
                );
              })
            );
          },
        },
        {
          key: "getQTFromMins",
          value: function (t) {
            return b(this, arguments, function (t) {
              var r = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : x.getSymbol(t.market, t.scode);
              return i().mark(function c() {
                var o, s, u, l, d, p;
                return i().wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (c.prev = 0),
                            (c.next = 3),
                            r.getMins(t, {
                              needProcess: !0,
                              useNewUrl: !0,
                              signV2: !0,
                              skipCache: !0,
                            })
                          );
                        case 3:
                          return (
                            (u = c.sent),
                            (r.qtFromMinsRes = y(
                              g({}, r.qtFromMinsRes || {}),
                              e({}, a, u)
                            )),
                            "fuCN" === a && (r.fuCNRes = u),
                            (l =
                              (null ==
                              (s =
                                null == (o = null == u ? void 0 : u.raw)
                                  ? void 0
                                  : o.qt)
                                ? void 0
                                : s.fields) || []),
                            (d = r.getQTAdapter(n.adapterType)),
                            (p = r.processQT({
                              market: t.market,
                              scode: t.scode,
                              symbol: a,
                              adapter: d,
                              data: l,
                            })),
                            c.abrupt(
                              "return",
                              "stockinfo" === n.adapterType && n.needProcess
                                ? S.stockInfoFormat(p)
                                : p
                            )
                          );
                        case 9:
                          return (
                            (c.prev = 9),
                            (c.t0 = c.catch(0)),
                            c.abrupt("return", r.defaultErrorHandler(c.t0))
                          );
                        case 12:
                        case "end":
                          return c.stop();
                      }
                  },
                  c,
                  null,
                  [[0, 9]]
                );
              })();
            });
          },
        },
        {
          key: "getServerTime",
          value: function () {
            return b(
              this,
              null,
              i().mark(function e() {
                var t;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            this.getMarketState({}, { needProcess: !0 })
                          );
                        case 3:
                          (t = e.sent),
                            (z = new Date().getTime()),
                            (D = new Date(
                              t.slice(0, 19).replace(/-/g, "/")
                            ).getTime()),
                            (e.next = 10);
                          break;
                        case 7:
                          (e.prev = 7),
                            (e.t0 = e.catch(0)),
                            (z = new Date().getTime()),
                            (D = z);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 7]]
                );
              })
            );
          },
        },
      ]),
      n
    );
  })(),
  V = x.utilsPack,
  W = O,
  R = S.MPWebSocket,
  J = (function (e) {
    a(r, C);
    var t = c(r);
    function r() {
      return s(this, r), t.apply(this, arguments);
    }
    return (
      u(r, [
        {
          key: "getMarketData",
          value: function () {
            return b(this, arguments, function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return i().mark(function r() {
                var n, a, c, o, s, u, l, d, p, h, f, v;
                return i().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = t.market),
                          (a = t.rankOnly),
                          (c = t.offset),
                          (o = t.count),
                          (s = t.rank_type),
                          (u = t.level2),
                          (l = t.openid),
                          (d = t.fskey),
                          (p = n.toLowerCase()),
                          (h = ""
                            .concat(
                              e.host,
                              "/cgi/cgi-bin/stockinfoquery/quote/app/get?market="
                            )
                            .concat(p)
                            .concat(
                              u
                                ? "&level2=1&openid="
                                    .concat(l, "&fskey=")
                                    .concat(d, "&access_token=")
                                    .concat(
                                      d,
                                      "&appid=wx9cf8c670ebd68ce4&check=11"
                                    )
                                : ""
                            )),
                          (f = null),
                          "HS" !== n ||
                            e.oem ||
                            (h = s
                              ? ""
                                  .concat(h, "&comment=true&appid=zxg&offset=")
                                  .concat(c, "&count=")
                                  .concat(o, "&rank_type=")
                                  .concat(s)
                              : "".concat(h, "&comment=true&appid=zxg")),
                          a && (h = "".concat(h, "&rankOnly=true")),
                          (r.next = 5),
                          e.ajaxGet("".concat(h, "&app=").concat(e.origin))
                        );
                      case 5:
                        return (
                          (v = r.sent),
                          r.abrupt(
                            "return",
                            (v && 0 === v.code && v.data && (f = K(p, v.data)),
                            f)
                          )
                        );
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })();
            });
          },
        },
      ]),
      r
    );
  })(),
  $ = (function (e) {
    a(r, C);
    var t = c(r);
    function r() {
      return s(this, r), t.apply(this, arguments);
    }
    return (
      u(r, [
        {
          key: "batchUpdateStock",
          value: function (e) {
            return b(
              this,
              null,
              i().mark(function t() {
                var r;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = ""
                              .concat(
                                this.host,
                                "/newstock/stockapp/Updstock/operseq?app="
                              )
                              .concat(this.origin)),
                            (t.next = 3),
                            this.ajaxGet(g({ url: r, method: "post" }, e))
                          );
                        case 3:
                          return t.abrupt("return", t.sent);
                        case 4:
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
        },
        {
          key: "queryUserStock",
          value: function (e) {
            return b(
              this,
              null,
              i().mark(function t() {
                var r, n;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = ""
                              .concat(
                                this.host,
                                "/newstock/stockapp/zixuangu/stocklist?app="
                              )
                              .concat(this.origin)),
                            (t.next = 3),
                            this.ajaxGet({ url: r, params: e })
                          );
                        case 3:
                          return (
                            (n = t.sent), t.abrupt("return", this.formatList(n))
                          );
                        case 5:
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
        },
        {
          key: "queryUserBasket",
          value: function () {
            return b(
              this,
              null,
              i().mark(function e() {
                var t;
                return i().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = ""
                              .concat(
                                this.host,
                                "/newstock/stockapp/zixuangu/watchlist?app="
                              )
                              .concat(this.origin)),
                            (e.next = 3),
                            this.ajaxGet({ url: t })
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
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
          key: "getMarket",
          value: function (e) {
            return (
              { sz: "0", sh: "1", hk: "2", us: "3", pt: "p", bj: "bj" }[e] || e
            );
          },
        },
        {
          key: "mappingStock",
          value: function (e) {
            var t = e.qt,
              r = void 0 === t ? {} : t,
              n = e.market,
              a = e.star,
              c = r.name,
              o = r.isdelay,
              i = r.type,
              s = r.symbol,
              u = r.zd,
              l = r.zdf,
              d = r.zxj,
              p = r.sz,
              h = r.xssz,
              f = r.wzq_cls,
              v = r.wzq_usable,
              m = r.state,
              k = r.jnzdf,
              b = r.wf,
              x = this.getMarket(n);
            return y(g({}, r), {
              name: c,
              star: a,
              zde: +u > 0 ? "+".concat(u) : u,
              zsz: h || p,
              zdf: +l > 0 ? "+".concat(l) : l,
              zjcj: "KJ-HB" === i ? b : d,
              cls: f,
              scode:
                0 === (null == s ? void 0 : s.indexOf(".")) ? s.substr(1) : s,
              delay: o,
              type: x,
              stock_type: i,
              usable: v,
              susp_flag: "S" === m,
              status: m || "0",
              chooseSymbol: e.symbol,
              jnzdf: +k > 0 ? "+".concat(k) : k,
            });
          },
        },
        {
          key: "formatList",
          value: function (e) {
            var t = this,
              r = e.data,
              n = r.newUser,
              a = r.groups,
              c = r.grouplist,
              o = r.wzq_recommend,
              i = void 0 === o ? [] : o,
              s = r.abtInfo,
              u = r.settings,
              l = c.map(function (e) {
                var r = e.groupinfo,
                  n = e.stocklist,
                  a = e.watchList;
                return {
                  groupinfo: r,
                  stocklist:
                    a && Array.isArray(a.list)
                      ? a.list
                      : n.map(function (e) {
                          return t.mappingStock(e);
                        }),
                };
              }),
              d = i.map(function (e) {
                return t.mappingStock(e);
              });
            return {
              retcode: e.code,
              retmsg: e.msg,
              groups: a,
              new_user: n,
              grouplist: l,
              recommends: d,
              abtInfo: s,
              settings: u,
            };
          },
        },
        {
          key: "queryStockGroups",
          value: function (e) {
            return b(
              this,
              null,
              i().mark(function t() {
                var r;
                return i().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = ""
                              .concat(
                                this.host,
                                "/newstock/stockapp/zixuangu/stockGroups?app="
                              )
                              .concat(this.origin)),
                            (t.next = 3),
                            this.ajaxGet(g({ url: r }, e))
                          );
                        case 3:
                          return t.abrupt("return", t.sent);
                        case 4:
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
        },
      ]),
      r
    );
  })(),
  Z = (function (e) {
    a(r, C);
    var t = c(r);
    function r() {
      return s(this, r), t.apply(this, arguments);
    }
    return (
      u(r, [
        {
          key: "SetUserLabel",
          value: function (e, t) {
            var r = this.getUserInfo(e);
            return e.request(
              "https://wzq.tenpay.com/svr/user/user_service/set_user_label",
              "post",
              g(g({}, r), t),
              { header: L, headers: L }
            );
          },
        },
        {
          key: "QueryUserLabel",
          value: function (e, t) {
            var r = this.getUserInfo(e);
            return e.request(
              "https://wzq.tenpay.com/svr/user/user_service/query_user_label",
              "get",
              t,
              g(g({}, r), t)
            );
          },
        },
        {
          key: "getUserInfo",
          value: function (e) {
            var t = {};
            return (
              "mp" === e.ENV
                ? (t = {
                    app: "wzqxcx",
                    appid: "wx4ffb369b6881ee5e",
                    openid: w.wx$1.getStorageSync("_qluin"),
                    fskey: w.wx$1.getStorageSync("_qlskey"),
                    check: 11,
                  })
                : -1 !== ["wzq_light", "wzq"].indexOf(e.ENV) &&
                  (t = {
                    appid: "wx9cf8c670ebd68ce4",
                    openid: e.getCookie("wzq_qluin"),
                    fskey: e.getCookie("wzq_qlskey"),
                    check: 11,
                  }),
              t
            );
          },
        },
      ]),
      r
    );
  })(),
  X = q.RemindApi;
(exports.BasketApi = Z),
  (exports.ChooseApi = $),
  (exports.DetailApi = Q),
  (exports.HQWebSocket = W),
  (exports.MPWebSocket = R),
  (exports.MarketApi = J),
  (exports.RemindApi = X),
  (exports.utils = V);
