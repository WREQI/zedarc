require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../../../../../@babel/runtime/helpers/typeof"),
  o = require("../../../../../../../../common/vendor.js"),
  r = {},
  n = {},
  a = {};
(e =
  ("undefined" != typeof process &&
    "[object process]" === {}.toString.call(process)) ||
  ("undefined" != typeof navigator && "ReactNative" === navigator.product)
    ? o.commonjsGlobal
    : self || o.commonjsGlobal) &&
  (e.Proxy ||
    ((e.Proxy = (function () {
      function e(e) {
        return !!e && ("object" == t(e) || "function" == typeof e);
      }
      var o = null,
        r = function (t, r) {
          function n() {}
          if (!e(t) || !e(r))
            throw new TypeError(
              "Cannot create proxy with a non-object as target or handler"
            );
          (o = function () {
            (t = null),
              (n = function (e) {
                throw new TypeError(
                  "Cannot perform '" + e + "' on a proxy that has been revoked"
                );
              });
          }),
            setTimeout(function () {
              o = null;
            }, 0);
          var a = r;
          for (var i in ((r = {
            get: null,
            set: null,
            apply: null,
            construct: null,
          }),
          a)) {
            if (!(i in r))
              throw new TypeError(
                "Proxy polyfill does not support trap '" + i + "'"
              );
            r[i] = a[i];
          }
          "function" == typeof a && (r.apply = a.apply.bind(a));
          var c = this,
            l = !1,
            u = !1;
          "function" == typeof t
            ? ((c = function () {
                var e = this && this.constructor === c,
                  o = Array.prototype.slice.call(arguments);
                return (
                  n(e ? "construct" : "apply"),
                  e && r.construct
                    ? r.construct.call(this, t, o)
                    : !e && r.apply
                    ? r.apply(t, this, o)
                    : e
                    ? (o.unshift(t), new (t.bind.apply(t, o))())
                    : t.apply(this, o)
                );
              }),
              (l = !0))
            : t instanceof Array && ((c = []), (u = !0));
          var s = r.get
              ? function (e) {
                  return n("get"), r.get(this, e, c);
                }
              : function (e) {
                  return n("get"), this[e];
                },
            f = r.set
              ? function (e, t) {
                  n("set"), r.set(this, e, t, c);
                }
              : function (e, t) {
                  n("set"), (this[e] = t);
                },
            p = {};
          if (
            (Object.getOwnPropertyNames(t).forEach(function (e) {
              if ((!l && !u) || !(e in c)) {
                var o = {
                  enumerable: !!Object.getOwnPropertyDescriptor(t, e)
                    .enumerable,
                  get: s.bind(t, e),
                  set: f.bind(t, e),
                };
                Object.defineProperty(c, e, o), (p[e] = !0);
              }
            }),
            (a = !0),
            Object.setPrototypeOf
              ? Object.setPrototypeOf(c, Object.getPrototypeOf(t))
              : c.__proto__
              ? (c.__proto__ = t.__proto__)
              : (a = !1),
            r.get || !a)
          )
            for (var d in t)
              p[d] || Object.defineProperty(c, d, { get: s.bind(t, d) });
          return Object.seal(t), Object.seal(c), c;
        };
      return (
        (r.revocable = function (e, t) {
          return { proxy: new r(e, t), revoke: o };
        }),
        r
      );
    })()),
    (e.Proxy.revocable = e.Proxy.revocable))),
  (function (e) {
    var t =
      (o.commonjsGlobal && o.commonjsGlobal.__assign) ||
      function () {
        return (t =
          Object.assign ||
          function (e) {
            for (var t, o = 1, r = arguments.length; o < r; o++)
              for (var n in (t = arguments[o]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.transformError = e.ERR_MAP = void 0);
    var r =
      void 0 !== r
        ? r
        : o.commonjsGlobal && o.commonjsGlobal.Proxy
        ? o.commonjsGlobal.Proxy
        : void 0;
    e.ERR_MAP = { DEFAULT: "系统繁忙 请稍后再试" };
    var n,
      a = function (e) {
        return (
          void 0 === e && (e = n.DEFAULT),
          t(t({}, e), { content: e.retmsg, message: e.retmsg })
        );
      };
    try {
      n = new r(e.ERR_MAP, {
        get: function (e, t) {
          return a({ retcode: t, retmsg: e[t] });
        },
      });
    } catch (e) {}
    (e.transformError = function (e, o) {
      return (
        void 0 === o && (o = n.DEFAULT),
        (e = (function (e) {
          return e instanceof Error;
        })((e = e || o))
          ? t(t({}, o), {
              retmsg: /[\u4e00-\u9fa5]/.test(e.message) ? e.message : o.retmsg,
            })
          : (function (e) {
              return "string" == typeof e;
            })(e)
          ? t(t({}, o), { retmsg: e })
          : t({ retcode: e.code, retmsg: e.msg }, e)),
        a(e)
      );
    }),
      (e.default = n);
  })(a);
var i =
    (o.commonjsGlobal && o.commonjsGlobal.__assign) ||
    function () {
      return (i =
        Object.assign ||
        function (e) {
          for (var t, o = 1, r = arguments.length; o < r; o++)
            for (var n in (t = arguments[o]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }).apply(this, arguments);
    },
  c =
    (o.commonjsGlobal && o.commonjsGlobal.__createBinding) ||
    (Object.create
      ? function (e, t, o, r) {
          void 0 === r && (r = o),
            Object.defineProperty(e, r, {
              enumerable: !0,
              get: function () {
                return t[o];
              },
            });
        }
      : function (e, t, o, r) {
          void 0 === r && (r = o), (e[r] = t[o]);
        }),
  l =
    (o.commonjsGlobal && o.commonjsGlobal.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  u =
    (o.commonjsGlobal && o.commonjsGlobal.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var o in e)
          "default" !== o &&
            Object.prototype.hasOwnProperty.call(e, o) &&
            c(t, e, o);
      return l(t, e), t;
    };
Object.defineProperty(n, "__esModule", { value: !0 });
var s = u(a);
n.default = function (e, t, o) {
  return (
    void 0 === e && (e = 0),
    void 0 === t && (t = s.default.DEFAULT),
    void 0 === o && (o = {}),
    (t = (0, s.transformError)(t)),
    new Promise(function (r, n) {
      e &&
        window.setTimeout(function () {
          n(i(i({}, t), { context: o }));
        }, e);
    })
  );
};
var f = {},
  p = {},
  d = {};
Object.defineProperty(d, "__esModule", { value: !0 });
d.default = function e(o, r, n) {
  if ((void 0 === r && (r = !1), void 0 === n && (n = !1), "object" == t(o)))
    for (var a in o)
      o.hasOwnProperty(a) &&
        ((null !== o[a] && void 0 !== o[a]) || (r ? delete o[a] : (o[a] = "")),
        n && "" === o[a] && delete o[a],
        "object" == t(o[a]) && (o[a] = e(o[a])));
  return o;
};
var m =
    (o.commonjsGlobal && o.commonjsGlobal.__assign) ||
    function () {
      return (m =
        Object.assign ||
        function (e) {
          for (var t, o = 1, r = arguments.length; o < r; o++)
            for (var n in (t = arguments[o]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }).apply(this, arguments);
    },
  v =
    (o.commonjsGlobal && o.commonjsGlobal.__rest) ||
    function (e, t) {
      var o = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (o[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var n = 0;
        for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
          t.indexOf(r[n]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
            (o[r[n]] = e[r[n]]);
      }
      return o;
    },
  b =
    (o.commonjsGlobal && o.commonjsGlobal.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(p, "__esModule", { value: !0 }),
  (p.removeDuplicatedSeperators = void 0);
var h = o.queryString,
  _ = b(d);
p.removeDuplicatedSeperators = function (e) {
  return e.replace(/(\w)\/{2,}/g, function (e, t) {
    return t + "/";
  });
};
var y = {
  make: function (e, t, o) {
    return (
      void 0 === e && (e = {}),
      void 0 === t && (t = !0),
      void 0 === o && (o = !1),
      (e = (0, _.default)(e, o)),
      Object.keys(e)
        .map(function (o) {
          return "".concat(o, "=").concat(
            (t
              ? encodeURIComponent
              : function (e) {
                  return e;
                })(e[o])
          );
        })
        .join("&")
    );
  },
  parse: function (e, t) {
    void 0 === t && (t = { searchSep: "?" });
    var o,
      r = t.searchSep,
      n = void 0 === r ? "?" : r,
      a = v(t, ["searchSep"]);
    if (e) o = null === n ? e : e.split(n)[1] || "";
    else {
      if (0 !== arguments.length) return {};
      o =
        location.search ||
        (location.href.split("?") && location.href.split("?")[1]) ||
        "";
    }
    return (0, h.parse)(o, m({ ignoreQueryPrefix: !0 }, a));
  },
};
(p.default = {
  make: function (e, t, o) {
    void 0 === t && (t = {}), void 0 === o && (o = {});
    var r = o.encode,
      n = void 0 === r || r,
      a = o.remove,
      i = void 0 !== a && a,
      c = o.overwrite,
      l = void 0 === c || c,
      u = e.split("?"),
      s = u
        .splice(
          0,
          1 === u.length || u[u.length - 1].indexOf("#") > -1
            ? u.length
            : u.length - 1
        )
        .join("?"),
      f = u[0];
    return [
      s,
      l
        ? y.make(m(m({}, y.parse(f, { searchSep: null })), t), n, i)
        : [f, y.make(t, n, i)].filter(Boolean).join("&"),
    ]
      .filter(Boolean)
      .join("?");
  },
  param: y,
  keep: function (e) {
    return e;
  },
}),
  (function (e) {
    var t =
        (o.commonjsGlobal && o.commonjsGlobal.__assign) ||
        function () {
          return (t =
            Object.assign ||
            function (e) {
              for (var t, o = 1, r = arguments.length; o < r; o++)
                for (var n in (t = arguments[o]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        },
      r =
        (o.commonjsGlobal && o.commonjsGlobal.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.EPLATFORM = void 0);
    var n,
      a,
      i = r(p),
      c = function () {
        var e = i.default.param.parse(location.search) || {},
          o = i.default.param.parse(location.hash) || {};
        return t(t({}, e), o) || {};
      };
    ((a = n = e.EPLATFORM || (e.EPLATFORM = {})).PCWEIXIN = "pcweixin"),
      (a.WEIXIN = "weixin"),
      (a.MQQ = "mqq"),
      (a.MINA = "mina"),
      (a.QQNEWS = "qqnews"),
      (a.ZXG = "zxg"),
      (e.default = function (e) {
        var t;
        void 0 === e && (e = navigator.userAgent);
        var o = e.match(/QQ\/([\d.]+)/i) && e.match(/QQ\/([\d.]+)/i)[1],
          r = Boolean(o),
          a =
            e.match(/MicroMessenger\/([\d.]+)/i) &&
            e
              .match(/MicroMessenger\/([\d.]+)/i)[1]
              .split(".")
              .slice(0, 3)
              .join("."),
          i = Boolean(a),
          l = e.match(/qqstock\/([\d.]+)/i) && e.match(/qqstock\/([\d.]+)/i)[1],
          u = Boolean(l),
          s = u && Boolean(e.match(/imac/)),
          f = Boolean(e.match(/container\/safecontainer/)),
          p =
            e.match(/MicroMessenger\/([\d.]+)/i) &&
            e
              .match(/MicroMessenger\/([\d.]+)/i)[1]
              .split(".")
              .slice(0, 3)
              .join("."),
          d = /(Windows|Mac)Wechat/i.test(e),
          m = i && /miniProgram/i.test(e),
          v = m && /wx4ffb369b6881ee5e/.test(e),
          b = m && /wx4eff699c2e813ab6/.test(e),
          h = m && /wxcc8a51267886fec4/.test(e),
          _ = m && /wxbb58374cdce267a6/.test(e),
          y = e.match(/qqnews\/([\d.]+)/i) && e.match(/qqnews\/([\d.]+)/i)[1],
          g = Boolean(y),
          O =
            e.match(/container\/(mainland|hk|fund)/) &&
            e.match(/container\/(mainland|hk|fund)/)[1],
          j = Boolean(O),
          P =
            e.match(/SogouMSE\/([\d.]+)/i) && e.match(/SogouMSE\/([\d.]+)/i)[1],
          S = Boolean(P),
          w =
            e.match(/MQQBrowser\/([\d.]+)/i) &&
            e.match(/MQQBrowser\/([\d.]+)/i)[1],
          E = Boolean(w) && !Boolean(P),
          M = /com.tencent.fastportfolio/.test(e),
          I = /APP2021##/.test(e),
          G = c().srcsite || c().channel || "",
          N = G && G.includes("lct"),
          k = I || N,
          x = !M && !g && !k,
          A = window.self !== window.top,
          R = /qnreading/.test(e),
          T = /mp\/lite\/index/.test(location.pathname),
          Q = "1" === (c().lite || "");
        t = {
          VER_MQQ: o,
          IS_MQQ: r,
          VER_WEIXIN: a,
          IS_WEIXIN: i,
          VER_ZXG: l,
          IS_ZXG: u,
          IS_ZXG_IMAC: s,
          IS_SAFEBOX: f,
          VER_PCWEIXIN: p,
          IS_PCWEIXIN: d,
          IS_MINA: m,
          IS_ZXG_XCX: v,
          IS_WZQ_XCX: b,
          IS_LCT_XCX: h,
          IS_CCM_XCX: _,
          VER_QQNEWS: y,
          IS_QQNEWS: g,
          IS_TRADE_CONTAINER_ZXG: j,
          VER_SOUGOU_BROW: P,
          IS_SOUGOU_BROW: S,
          VER_QQ_BROW: w,
          IS_QQ_BROW: E,
          IS_QUICK_APP: M,
          IS_LCT_APP: I,
          IS_LCT_OTHER: N,
          IS_LCT: k,
          IS_SOUGOU_ENGINE: x,
          IS_IN_IFRAME: A,
          IS_QNREADING: R,
          IS_TENPAY_LITE: T,
          IS_BROKER_LITE: Q,
          IS_LITE_MODE: T || Q,
        };
        var q = "0.0.0",
          B = "unknown",
          C = "";
        r
          ? ((B = n.MQQ), (q = o), (C = "手机QQ"))
          : d
          ? ((B = n.PCWEIXIN), (q = p), (C = "微信"))
          : m
          ? ((B = n.MINA), (C = "微信"))
          : i
          ? ((B = n.WEIXIN), (q = a), (C = "微信"))
          : g
          ? ((B = n.QQNEWS), (q = y), (C = "腾讯新闻"))
          : u && ((B = n.ZXG), (q = l), (C = "自选股"));
        var H = {},
          X = {},
          W = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
          L = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          D = !!e.match(/\(Macintosh\; Intel /),
          J = e.match(/(iPad).*OS\s([\d_]+)/),
          U = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          F = !J && e.match(/(iPhone\sOS)\s([\d_]+)/),
          V = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
          Z = e.match(/Windows Phone ([\d.]+)/),
          K = V && e.match(/TouchPad/),
          $ = e.match(/Kindle\/([\d.]+)/),
          z = e.match(/Silk\/([\d._]+)/),
          Y = e.match(/(BlackBerry).*Version\/([\d.]+)/),
          ee = e.match(/(BB10).*Version\/([\d.]+)/),
          te = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
          oe = e.match(/PlayBook/),
          re = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
          ne = e.match(/Firefox\/([\d.]+)/),
          ae = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
          ie =
            e.match(/MSIE\s([\d.]+)/) ||
            e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
          ce = !re && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
          le =
            ce ||
            e.match(
              /Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/
            );
        return (
          W && ((X.webkit = !!W), (X.version = W[1])),
          L && ((H.android = !0), (H.version = L[2])),
          F &&
            !U &&
            ((H.ios = H.iphone = !0), (H.version = F[2].replace(/_/g, "."))),
          J && ((H.ios = H.ipad = !0), (H.version = J[2].replace(/_/g, "."))),
          U &&
            ((H.ios = H.ipod = !0),
            (H.version = U[3] ? U[3].replace(/_/g, ".") : void 0)),
          Z && ((H.wp = !0), (H.version = Z[1])),
          V && ((H.webos = !0), (H.version = V[2])),
          K && (H.touchpad = !0),
          Y && ((H.blackberry = !0), (H.version = Y[2])),
          ee && ((H.bb10 = !0), (H.version = ee[2])),
          te && ((H.rimtabletos = !0), (H.version = te[2])),
          oe && (X.playbook = !0),
          $ && ((H.kindle = !0), (H.version = $[1])),
          z && ((X.silk = !0), (X.version = z[1])),
          !z && H.android && e.match(/Kindle Fire/) && (X.silk = !0),
          re && ((X.chrome = !0), (X.version = re[1])),
          ne && ((X.firefox = !0), (X.version = ne[1])),
          ae && ((H.firefoxos = !0), (H.version = ae[1])),
          ie && ((X.ie = !0), (X.version = ie[1])),
          le && (D || H.ios) && ((X.safari = !0), H.ios || (X.version = le[1])),
          ce && (X.webview = !0),
          (H.tablet = !!(
            J ||
            oe ||
            (L && !e.match(/Mobile/)) ||
            (ne && e.match(/Tablet/)) ||
            (ie && !e.match(/Phone/) && e.match(/Touch/))
          )),
          (H.phone = !(
            H.tablet ||
            H.ipod ||
            !(
              L ||
              F ||
              V ||
              Y ||
              ee ||
              (re && e.match(/Android/)) ||
              (re && e.match(/CriOS\/([\d.]+)/)) ||
              (ne && e.match(/Mobile/)) ||
              (ie && e.match(/Touch/))
            )
          )),
          {
            env: t,
            platformVersion: q,
            plarformName: C,
            platform: B,
            os: H,
            browser: X,
            IS_BTM_ADAPT_IPHONE: H.iphone && screen.height >= 812,
          }
        );
      });
  })(f);
var g = {};
Object.defineProperty(g, "__esModule", { value: !0 }),
  (g.mpParseJSON = g.parseJSON = g.JSONStringify = void 0),
  (g.parseJSON = function (e) {
    if ("string" != typeof e) return e;
    var t;
    try {
      (t = e.trim()), (t = JSON.parse(t));
    } catch (o) {
      try {
        t = new Function("return " + e)();
      } catch (e) {}
    }
    return (t && "Object" === t.constructor.name) || (t = e), t;
  }),
  (g.mpParseJSON = function (e) {
    if ("string" != typeof e) return e;
    var t;
    t = e
      .replace(/\\x([0-9A-Fa-f]{2})/g, function () {
        var e = String.fromCharCode(parseInt(arguments[1], 16));
        return '"' === e ? "“" : e;
      })
      .replace("\n", " ")
      .replace(/\\“/g, "“")
      .replace(/\\/g, " ");
    try {
      (t = t.trim()), (t = JSON.parse(t));
    } catch (e) {}
    return (t && "Object" === t.constructor.name) || (t = e), t;
  }),
  (g.JSONStringify = function (e) {
    var t = "";
    try {
      t = JSON.stringify(e);
    } catch (o) {
      t = e;
    }
    return t;
  });
var O = {};
Object.defineProperty(O, "__esModule", { value: !0 });
var j = [],
  P = function (e) {
    return (
      void 0 === e && (e = ""), e + "_" + Math.random().toString(36).slice(2)
    );
  };
O.default = function (e) {
  for (var t; !t || j.includes(t); ) t = P(e);
  return t;
};
var S = {},
  w =
    (o.commonjsGlobal && o.commonjsGlobal.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(S, "__esModule", { value: !0 }),
  (S.generateMd5Sign = void 0);
var E = w(o.md5Exports),
  M = w(p);
S.generateMd5Sign = function (e, t) {
  var o = {};
  return (
    Object.keys(t)
      .sort()
      .forEach(function (e) {
        o[e] = t[e];
      }),
    (o.key = e),
    (0, E.default)(M.default.param.make(o, !1)).toLowerCase()
  );
};
var I = {};
Object.defineProperty(I, "__esModule", { value: !0 }),
  (I.default = function (e, o) {
    var r = !1,
      n = new Set([
        NaN,
        "NaN",
        null,
        void 0,
        "null",
        "undefined",
        "NULL",
        "UNDEFINED",
      ]);
    if (
      (o instanceof Array &&
        o.forEach(function (e) {
          n.add(e);
        }),
      "object" == t(e))
    )
      for (var a in e) e.hasOwnProperty(a) && n.has(e[a]) && (r = !0);
    return r;
  });
var G = {};
!(function (e) {
  var t =
      (o.commonjsGlobal && o.commonjsGlobal.__awaiter) ||
      function (e, t, o, r) {
        return new (o || (o = Promise))(function (n, a) {
          function i(e) {
            try {
              l(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof o
                  ? t
                  : new o(function (e) {
                      e(t);
                    })).then(i, c);
          }
          l((r = r.apply(e, t || [])).next());
        });
      },
    r =
      (o.commonjsGlobal && o.commonjsGlobal.__generator) ||
      function (e, t) {
        var o,
          r,
          n,
          a,
          i = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (a = { next: c(0), throw: c(1), return: c(2) }),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function c(a) {
          return function (c) {
            return (function (a) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((o = 1),
                    r &&
                      (n =
                        2 & a[0]
                          ? r.return
                          : a[0]
                          ? r.throw || ((n = r.return) && n.call(r), 0)
                          : r.next) &&
                      !(n = n.call(r, a[1])).done)
                  )
                    return n;
                  switch (((r = 0), n && (a = [2 & a[0], n.value]), a[0])) {
                    case 0:
                    case 1:
                      n = a;
                      break;
                    case 4:
                      return i.label++, { value: a[1], done: !1 };
                    case 5:
                      i.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (n = (n = i.trys).length > 0 && n[n.length - 1]) ||
                          (6 !== a[0] && 2 !== a[0])
                        )
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === a[0] && (!n || (a[1] > n[0] && a[1] < n[3]))) {
                        i.label = a[1];
                        break;
                      }
                      if (6 === a[0] && i.label < n[1]) {
                        (i.label = n[1]), (n = a);
                        break;
                      }
                      if (n && i.label < n[2]) {
                        (i.label = n[2]), i.ops.push(a);
                        break;
                      }
                      n[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  a = t.call(e, i);
                } catch (e) {
                  (a = [6, e]), (r = 0);
                } finally {
                  o = n = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, c]);
          };
        }
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.requestHook = void 0);
  var n = function (e) {
    try {
      Object.defineProperty(o.wx$1, "request", {
        get: function () {
          return e;
        },
      });
    } catch (e) {}
  };
  e.requestHook = {
    before: function (a) {
      var i = o.wx$1.request;
      return (
        n(function (e) {
          return t(this, void 0, void 0, function () {
            return r(this, function (t) {
              switch (t.label) {
                case 0:
                  return t.trys.push([0, 2, , 3]), [4, a(e)];
                case 1:
                case 2:
                  return t.sent(), [3, 3];
                case 3:
                  return i(e), [2];
              }
            });
          });
        }),
        e.requestHook
      );
    },
    after: function (t) {
      var r = o.wx$1.request;
      return (
        n(function (e) {
          var o = e.success;
          (e.success = function (r) {
            "function" == typeof o && o(r), t(r, e);
          }),
            r(e);
        }),
        e.requestHook
      );
    },
  };
})(G);
var N = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.pageHook = e.appHook = void 0);
  var t = ["onLaunch", "onShow", "onHide", "onError", "onPageNotFound"],
    r = [
      "onLoad",
      "onShow",
      "onReady",
      "onHide",
      "onUnload",
      "onPulldownRefresh",
      "onReachBottom",
      "onShareAppMessage",
      "onPageScroll",
      "onResize",
      "onTabItemTap",
    ];
  function n(e, t) {
    void 0 !== o.commonjsGlobal && (o.commonjsGlobal[e] = t);
  }
  (e.appHook = function (e) {
    var r = void 0 !== o.commonjsGlobal ? o.commonjsGlobal.App : App;
    n("App", function (o) {
      t.forEach(function (t) {
        var r = o[t],
          n = e[t];
        o[t] = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          try {
            n && n.apply(this, e);
          } catch (e) {}
          return r ? r.apply(this, e) : null;
        };
      }),
        r(o);
    });
  }),
    (e.pageHook = function (e) {
      var t = void 0 !== o.commonjsGlobal ? o.commonjsGlobal.Page : Page;
      n("Page", function (o) {
        r.forEach(function (t) {
          var r = o[t],
            n = e[t];
          o[t] = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            try {
              n && n.apply(this, e);
            } catch (e) {}
            return r ? r.apply(this, e) : null;
          };
        }),
          t(o);
      });
    }),
    (e.default = { appHook: e.appHook, pageHook: e.pageHook });
})(N);
var k = {};
function x(e, t) {
  for (
    var o = (e || "").split("."),
      r = (t || "").split("."),
      n = Math.max(o.length, r.length);
    o.length < n;

  )
    o.push("0");
  for (; r.length < n; ) r.push("0");
  for (var a = 0; a < n; a++) {
    var i = parseInt(o[a], 10),
      c = parseInt(r[a], 10);
    if (i > c) return 1;
    if (i < c) return -1;
  }
  return 0;
}
Object.defineProperty(k, "__esModule", { value: !0 }),
  (k.lte = exports.lt = k.lt = k.gte = k.gt = void 0);
var A = function (e, t) {
  return void 0 === e && (e = ""), void 0 === t && (t = ""), x(e, t) > 0;
};
k.gt = A;
var R = function (e, t) {
  return void 0 === e && (e = ""), void 0 === t && (t = ""), x(e, t) >= 0;
};
k.gte = R;
var T = function (e, t) {
  return void 0 === e && (e = ""), void 0 === t && (t = ""), x(e, t) < 0;
};
exports.lt = k.lt = T;
var Q = function (e, t) {
  return void 0 === e && (e = ""), void 0 === t && (t = ""), x(e, t) <= 0;
};
(k.lte = Q),
  (k.default = {
    isVersionGreater: A,
    isVersionGreaterOrEqual: R,
    isVersionLower: T,
    isVersionLowerOrEqual: Q,
  }),
  (function (e) {
    var t =
        (o.commonjsGlobal && o.commonjsGlobal.__createBinding) ||
        (Object.create
          ? function (e, t, o, r) {
              void 0 === r && (r = o),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[o];
                  },
                });
            }
          : function (e, t, o, r) {
              void 0 === r && (r = o), (e[r] = t[o]);
            }),
      r =
        (o.commonjsGlobal && o.commonjsGlobal.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            }),
      i =
        (o.commonjsGlobal && o.commonjsGlobal.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var o = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                t(o, e, n);
          return r(o, e), o;
        },
      c =
        (o.commonjsGlobal && o.commonjsGlobal.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.generateMd5Sign =
        e.versionCompare =
        e.mpPageHook =
        e.mpAppHook =
        e.mpRequestHook =
        e.isExistNullUndefProperty =
        e.urltools =
        e.uniqid =
        e.safeobj =
        e.JSONStringify =
        e.mpParseJSON =
        e.parseJSON =
        e.transformError =
        e.ERR_MAP =
        e.err =
        e.detect =
        e.blackhole =
          void 0);
    var l = c(n);
    e.blackhole = l.default;
    var u = c(f);
    e.detect = u.default;
    var s = i(a);
    (e.err = s.default),
      Object.defineProperty(e, "transformError", {
        enumerable: !0,
        get: function () {
          return s.transformError;
        },
      }),
      Object.defineProperty(e, "ERR_MAP", {
        enumerable: !0,
        get: function () {
          return s.ERR_MAP;
        },
      });
    var m = g;
    Object.defineProperty(e, "parseJSON", {
      enumerable: !0,
      get: function () {
        return m.parseJSON;
      },
    }),
      Object.defineProperty(e, "mpParseJSON", {
        enumerable: !0,
        get: function () {
          return m.mpParseJSON;
        },
      }),
      Object.defineProperty(e, "JSONStringify", {
        enumerable: !0,
        get: function () {
          return m.JSONStringify;
        },
      });
    var v = c(d);
    e.safeobj = v.default;
    var b = c(O);
    e.uniqid = b.default;
    var h = S;
    Object.defineProperty(e, "generateMd5Sign", {
      enumerable: !0,
      get: function () {
        return h.generateMd5Sign;
      },
    });
    var _ = c(p);
    e.urltools = _.default;
    var y = c(I);
    e.isExistNullUndefProperty = y.default;
    var j = G;
    Object.defineProperty(e, "mpRequestHook", {
      enumerable: !0,
      get: function () {
        return j.requestHook;
      },
    });
    var P = N;
    Object.defineProperty(e, "mpAppHook", {
      enumerable: !0,
      get: function () {
        return P.appHook;
      },
    }),
      Object.defineProperty(e, "mpPageHook", {
        enumerable: !0,
        get: function () {
          return P.pageHook;
        },
      });
    var w = c(k);
    e.versionCompare = w.default;
  })(r),
  (exports.dist = r);
