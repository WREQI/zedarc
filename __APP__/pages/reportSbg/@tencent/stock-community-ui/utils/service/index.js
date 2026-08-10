var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var r,
  o = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  c = Object.defineProperty,
  a = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  f = function (t, e, n) {
    return e in t
      ? c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e) {
    for (var n in e || (e = {})) s.call(e, n) && f(t, n, e[n]);
    if (u) {
      var r,
        c = o(u(e));
      try {
        for (c.s(); !(r = c.n()).done; ) {
          n = r.value;
          p.call(e, n) && f(t, n, e[n]);
        }
      } catch (t) {
        c.e(t);
      } finally {
        c.f();
      }
    }
    return t;
  },
  m = function (t, e) {
    return a(t, i(e));
  },
  w = function (t, e, n) {
    return new Promise(function (r, o) {
      var c = function (t) {
          try {
            i(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          try {
            i(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        i = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(c, a);
        };
      i((n = n.apply(t, e)).next());
    });
  },
  d = require("../../../stock-community-base/utils/knife.js"),
  g = require("../../../../axios/index.js"),
  h = require("../../../stock-community-base/utils/service/config/module.js"),
  q = require("../../../../../../common/vendor.js"),
  _ = require("../../../st-wuji-sdk/mp.js"),
  E = require("../../../stock-news-core/utils/loginHelper.js"),
  v = {},
  y = {},
  O = {};
!(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.CGI_SVR_PREFIX =
      t.CGI_BIN_PREFIX =
      t.PROXY_URL_REG =
      t.URI_REG =
      t.SQ_REG =
      t.WZQ_ACTIVITY_DOMAIN_REG =
      t.WHITE_DOMAINS =
      t.DYNAMIC_RULE_KEY =
      t.TENTREES_TEMP_DOMAIN =
      t.WZQ_DOMAIN =
      t.GU_DOMAIN =
      t.PLACEHOLDER =
        void 0),
    (t.PLACEHOLDER = "&0&"),
    (t.GU_DOMAIN = "gu.qq.com"),
    (t.WZQ_DOMAIN = "wzq.tenpay.com"),
    (t.TENTREES_TEMP_DOMAIN = "tentrees.cn"),
    (t.DYNAMIC_RULE_KEY = "DAYNAMIC_RULE_KEY"),
    (t.WHITE_DOMAINS = ["tengtrees.com", t.TENTREES_TEMP_DOMAIN]),
    (t.WZQ_ACTIVITY_DOMAIN_REG = /(zqact)(\d{0,2})?\.tenpay\.com/),
    (t.SQ_REG = /^\/group(s)?/),
    (t.URI_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?((?:[a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64})([\\/]+[\S\s]*)?/i),
    (t.PROXY_URL_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?(wzq\.tenpay\.com|www\.tentrees.cn)?(?:\/)?(cgi-bin|svr)?/i),
    (t.CGI_BIN_PREFIX = "cgi-bin"),
    (t.CGI_SVR_PREFIX = "svr");
})(O),
  Object.defineProperty(y, "__esModule", { value: !0 });
var M = O,
  x = (function () {
    function t(t) {
      void 0 === t && (t = !1),
        (this.isForceGray = !1),
        (this.isGray = !1),
        (this.isGray = t);
    }
    return (
      (t.prototype.isBrowserGrayUser = function () {
        return this.isGray
          ? this.isGray
          : location.hostname.includes(M.TENTREES_TEMP_DOMAIN);
      }),
      (t.prototype.isDefGrayUser = function () {
        return this.isGray;
      }),
      (t.prototype.setGray = function (t) {
        void 0 !== t && (this.isForceGray = t);
      }),
      (t.prototype.isGrayUser = function () {
        return (
          !!this.isForceGray ||
          ("undefined" != typeof window
            ? this.isBrowserGrayUser()
            : this.isDefGrayUser())
        );
      }),
      t
    );
  })();
y.default = x;
var D = {};
Object.defineProperty(D, "__esModule", { value: !0 }),
  (D.isWechat = D.isStockApp = D.isMiniapp = D.parseUri = void 0);
var b = O;
(D.parseUri = function (t) {
  var e = b.URI_REG.exec(t);
  return { hostname: (e && e[1]) || "", pathname: (e && e[2]) || "" };
}),
  (D.isMiniapp = function () {
    return "function" == typeof getApp && "function" == typeof getCurrentPages;
  }),
  (D.isStockApp = function () {
    return /qqstock/i.test(navigator.userAgent);
  }),
  (D.isWechat = function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  });
var U = {};
Object.defineProperty(U, "__esModule", { value: !0 }),
  (U.apiTplData = void 0),
  (U.apiTplData = {
    "proxy.finance.qq.com": "www.&0&",
    "bisheng.tenpay.com": "www.&0&/bisheng",
    "wzq.tenpay.com": "www.&0&",
    "snp.tenpay.com": "gu.qq.com",
    "gu.qq.com": "www.&0&/gu",
    "qqmac.gu.qq.com": "www.&0&/qqmac",
    "qqbrowser.gu.qq.com": "www.&0&/qqbrowser",
    "qqweb.gu.qq.com": "www.&0&/qqweb",
    "qt.gtimg.cn": "www.&0&/sqt",
    "sqt.gtimg.cn": "www.&0&/sqt",
    "appqt.gtimg.cn": "www.&0&/sqt",
    "web.sqt.gtimg.cn": "www.&0&/sqt",
    "qt.finance.qq.com": "www.&0&/sqt",
    "all.sqt.gtimg.cn": "www.&0&/sqt",
    "qt.gtimg.qq.com": "www.&0&/sqt",
    "mobileqq.qt.finance.qq.com": "www.&0&/sqt",
    "webpush.finance.qq.com": "www.&0&/webpush",
    "stockpush.finance.qq.com": "www.&0&/macpush",
    "www.zxgstock.com": "www.zxgstock.com",
    "file.finance.qq.com": "cdn.&0&/file",
    "pic.finance.qq.com": "cdn.&0&/pic",
    "liveplay.portfolio.finance.qq.com": "liveplay.portfolio.finance.qq.com",
    "livepush.portfolio.finance.qq.com": "livepush.portfolio.finance.qq.com",
    "push.finance.qq.com": "www.&0&",
    "qtdata.finance.qq.com": "www.&0&",
    "hybrid.finance.qq.com": "www.&0&",
    "proxyplus.finance.qq.com": "www.&0&",
    "stock.gtimg.cn": "www.&0&",
    "message.finance.qq.com": "www.&0&/message",
    "stockapp.finance.qq.com": "www.&0&/stockapp",
    "smartbox.gtimg.cn": "www.&0&/smartbox",
    "news.gtimg.cn": "www.&0&/newsgtimg",
    "news2.gtimg.cn": "www.&0&/newsgtimg",
    "mobileqq.finance.qq.com": "www.&0&/ifzq",
    "web.ifzq.gtimg.cn": "www.&0&/ifzq",
    "web.ifzq.finance.qq.com": "www.&0&/ifzq",
    "level2.finance.qq.com": "www.&0&/ifzq",
    "ifzq.finance.qq.com": "www.&0&/ifzq",
    "datalevel2.finance.qq.com": "www.&0&/ifzq",
    "ifzq.gtimg.cn": "www.&0&/ifzq",
    "interface.finance.qq.com": "www.&0&/ifzq",
    "webstock.finance.qq.com": "www.&0&/newstock",
    "weixin.finance.qq.com": "www.&0&/newstock",
    "newstock.finance.qq.com": "www.&0&/newstock",
    "web.group.finance.qq.com": "group.&0&",
    "group.finance.qq.com": "group.&0&",
    "data.gtimg.cn": "www.&0&/datagtimg",
    "deal.finance.qq.com": "www.&0&/deal",
    "imgnode.gtimg.cn": "www.&0&/imgnodegtimg",
    "img2.gtimg.cn": "www.&0&/imggtimg",
    "img.finance.qq.com": "www.&0&/imggtimg",
    "stockjs.finance.qq.com": "www.&0&/stockhtm",
    "stockhtm.finance.qq.com": "www.&0&/stockhtm",
    "zqact.tenpay.com": "zqact.&0&",
    "testproxy.finance.qq.com": "test.&0&",
    "preproxy.finance.qq.com": "pre.&0&",
    "openapi.finance.qq.com": "www.&0&/openapi",
    "wzq.gtimg.com": "cdn.&0&",
    "wzqcf.gtimg.com": "cdn.&0&",
    "st.gtimg.com": "cdn.&0&/cos",
    "aics.tenpay.com": "wzq.tenpay.com",
    "aics.qq.com": "gu.qq.com",
  });
var k = {};
Object.defineProperty(k, "__esModule", { value: !0 }),
  (k.reqWzqProxyToGu = k.reqTransformer = void 0);
var z = O;
k.reqTransformer = function (t) {
  return function (e) {
    var n = e.url,
      r = e.baseURL;
    return (
      t &&
        t.isGrayUser() &&
        (n && (e.url = t.getRealApiUrl(n)),
        r && (e.baseURL = t.getRealApiUrl(r))),
      e
    );
  };
};
var I = [z.WZQ_DOMAIN, z.TENTREES_TEMP_DOMAIN],
  L = [z.CGI_BIN_PREFIX, z.CGI_SVR_PREFIX],
  R = function (t) {
    return I.some(function (e) {
      return t.includes(e);
    });
  },
  S = function (t) {
    return L.some(function (e) {
      return e === t;
    });
  };
(k.reqWzqProxyToGu = function () {
  return function (t, e) {
    if ((void 0 === e && (e = !1), !e)) {
      if ("undefined" == typeof window) return t;
      if (location.hostname !== z.GU_DOMAIN) return t;
    }
    var n = t.url,
      r = t.baseURL,
      o = n.match(z.PROXY_URL_REG),
      c = r.match(z.PROXY_URL_REG),
      a = (o && o[1]) || "",
      i = (o && o[2]) || "",
      u = (c && c[1]) || "",
      s = (c && c[2]) || "";
    if (R(a) && S(i)) {
      var p =
        i === z.CGI_BIN_PREFIX
          ? "".concat(z.GU_DOMAIN, "/wzq")
          : "".concat(z.GU_DOMAIN);
      return (t.url = t.url.replace(a, p)), t;
    }
    return R(u) && S(s)
      ? ((p =
          s === z.CGI_BIN_PREFIX
            ? "".concat(z.GU_DOMAIN, "/wzq")
            : "".concat(z.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(u, p)),
        t)
      : R(u) && S(i) && !a
      ? ((p =
          i === z.CGI_BIN_PREFIX
            ? "".concat(z.GU_DOMAIN, "/wzq")
            : "".concat(z.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(u, p)),
        t)
      : t;
  };
}),
  (function (t) {
    var e =
        (q.commonjsGlobal && q.commonjsGlobal.__assign) ||
        function () {
          return (e =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        },
      n =
        (q.commonjsGlobal && q.commonjsGlobal.__createBinding) ||
        (Object.create
          ? function (t, e, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(t, r, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }
          : function (t, e, n, r) {
              void 0 === r && (r = n), (t[r] = e[n]);
            }),
      r =
        (q.commonjsGlobal && q.commonjsGlobal.__exportStar) ||
        function (t, e) {
          for (var r in t)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(e, r) ||
              n(e, t, r);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.initLocation = t.initShyRequest = void 0);
    var o,
      c = y,
      a = D,
      i = U,
      u = O;
    r(k, t),
      ((0, a.isMiniapp)() || "undefined" != typeof window) &&
        (o = _.require$$5.default);
    var s = { isGray: !1, useWuji: !1 },
      p = (function () {
        function t(t, e) {
          void 0 === t && (t = u.TENTREES_TEMP_DOMAIN),
            void 0 === e && (e = s),
            (this.apiData = {}),
            (this.domain = u.TENTREES_TEMP_DOMAIN),
            (this.sqDomain = ""),
            this.domainCheck(t),
            (this.sqDomain = "group.".concat(this.domain)),
            (this.apiData = this.getMappingData(t, i.apiTplData)),
            (this.grayTool = new c.default(e && e.isGray)),
            e && e.useWuji && (this.getCacheData(), this.getDynamicData());
        }
        return (
          (t.prototype.getCacheData = function () {
            if ("undefined" != typeof window) {
              var t = localStorage.getItem(u.DYNAMIC_RULE_KEY);
              if (!t) return;
              try {
                var n = this.getMappingData(this.domain, JSON.parse(t));
                this.apiData = e(e({}, this.apiData), n);
              } catch (t) {}
            }
          }),
          (t.prototype.getDynamicData = function () {
            var t = this;
            "undefined" != typeof window &&
              o &&
              o.get &&
              o
                .get({ appid: "news", schemaid: "api_dynamic_mapping" })
                .then(function (n) {
                  if (200 === n.code && n.data && n.data[0]) {
                    var r = n.data[0],
                      o = r.is_on,
                      c = r.mapping_json;
                    if (1 === o)
                      try {
                        var a = t.getMappingData(t.domain, JSON.parse(c));
                        localStorage.setItem(u.DYNAMIC_RULE_KEY, c),
                          (t.apiData = e(e({}, t.apiData), a));
                      } catch (t) {}
                    else 1 !== o && localStorage.removeItem(u.DYNAMIC_RULE_KEY);
                  }
                })
                .catch(function (t) {});
          }),
          (t.prototype.domainCheck = function (t) {
            if (!(t = t && t.trim && t.trim()))
              throw new Error("请提供腾树域名");
            if (t.startsWith("www")) throw new Error("请提供不带www前缀的域名");
            if (!u.WHITE_DOMAINS.includes(t))
              throw new Error("请使用白名单域名：".concat(u.WHITE_DOMAINS));
            this.domain = t;
          }),
          (t.prototype.getMappingData = function (t, e) {
            var n = {};
            return (
              Object.keys(e).forEach(function (r) {
                var o = e[r];
                o.includes(u.PLACEHOLDER)
                  ? (n[r] = o.replace(
                      new RegExp("".concat(u.PLACEHOLDER), "g"),
                      t
                    ))
                  : (n[r] = o);
              }),
              n
            );
          }),
          (t.prototype.getCommunityMappingUrl = function (t, e) {
            return t.replace(e, this.sqDomain);
          }),
          (t.prototype.getWZQActivityMappingUrl = function (t, e, n) {
            var r = e.replace(n[2], ""),
              o = this.apiData[r].replace(n[1], "".concat(n[1]).concat(n[2]));
            return t.replace(e, o);
          }),
          (t.prototype.getRealUrl = function (t, e, n) {
            var r = this.apiData[e];
            if (u.SQ_REG.test(n)) return this.getCommunityMappingUrl(t, e);
            if (r) return t.replace(e, r);
            var o = e.match(u.WZQ_ACTIVITY_DOMAIN_REG);
            return o && o[1] && o[2]
              ? this.getWZQActivityMappingUrl(t, e, o)
              : t;
          }),
          (t.prototype.getRealApiUrl = function (t, e) {
            if ((void 0 === e && (e = !1), "string" != typeof t)) return t;
            t = t && t.trim();
            var n = (0, a.parseUri)(t),
              r = n.hostname,
              o = n.pathname;
            return r && (this.grayTool.isGrayUser() || e)
              ? this.getRealUrl(t, r, o)
              : t;
          }),
          (t.prototype.setGray = function (t) {
            this.grayTool.setGray(t);
          }),
          (t.prototype.isGrayUser = function () {
            return this.grayTool.isGrayUser();
          }),
          (t.prototype.getAPIData = function () {
            return this.apiData;
          }),
          (t.prototype.updateAPIData = function (t) {
            this.domainCheck(t),
              (this.sqDomain = "group.".concat(this.domain)),
              (this.apiData = this.getMappingData(t, i.apiTplData));
          }),
          t
        );
      })();
    (t.initShyRequest = function (t) {
      if ("undefined" != typeof shy) {
        var e = shy.request;
        if (shy.isWrapped) return;
        (shy.request = function (n) {
          void 0 === n && (n = {}),
            t.isGrayUser() && (n.url = t.getRealApiUrl(n.url)),
            e.call(shy, n);
        }),
          (shy.isWrapped = !0);
      }
    }),
      (t.initLocation = function (t) {
        var e = {
          set href(e) {
            var n = e;
            t.isGrayUser() && (n = t.getRealApiUrl(n)), (location.href = n);
          },
          replace: function (e) {
            void 0 === e && (e = "");
            var n = e;
            t.isGrayUser() && (n = t.getRealApiUrl(n)), location.replace(n);
          },
        };
        window.$location = e;
      }),
      (t.default = p);
  })(v);
var T = d.sdk,
  P = T.getUserInfo,
  N = T.getZxgSystemInfo,
  C = g.Axios.create({ baseURL: "" });
(C.defaults.withCredentials = !1),
  C.interceptors.request.use(v.reqTransformer(h.apiManager));
var G = function (r) {
    var o = r.url,
      c = r.method,
      a = void 0 === c ? "POST" : c,
      i = r.header,
      u = void 0 === i ? {} : i,
      s = r.data,
      p = void 0 === s ? {} : s,
      f = r.query,
      g = void 0 === f ? {} : f,
      h = r.userinfo,
      _ = void 0 === h ? {} : h,
      E = r.autoLogin,
      v = r.keepCheck,
      y = void 0 !== v && v,
      O = r.keepApp,
      M = void 0 !== O && O,
      x = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      D = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(function (r, c) {
      return w(
        exports,
        null,
        t().mark(function i() {
          var s, f, w, h, v, O, b;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (((s = l({}, _)), (t.t0 = _.openid), t.t0)) {
                    t.next = 6;
                    break;
                  }
                  return (t.next = 5), P(E, D);
                case 5:
                  s = t.sent;
                case 6:
                  if (
                    ((s.appid = _.appid || (null == s ? void 0 : s.qlappid)),
                    (s.fskey = _.fskey || (null == s ? void 0 : s.qlskey)),
                    (f = []),
                    x ||
                      Object.keys(s).forEach(function (t) {
                        f.push("".concat(t, "=").concat(s[t]));
                      }),
                    (null == window ? void 0 : window.IS_WZQ_LIGHT) &&
                      (f.push("app=mini_h5"), f.push("check=11")),
                    x || "zxg" !== d.platform)
                  ) {
                    t.next = 14;
                    break;
                  }
                  return (t.next = 12), N();
                case 12:
                  (w = t.sent),
                    [
                      ["dev", "_dev"],
                      ["devId", "_devId"],
                      ["appVersion", "_appver"],
                      ["osVersion", "_osVer"],
                      ["os", "_appName"],
                    ].forEach(function (t) {
                      var e = n(t, 2),
                        r = e[0],
                        o = e[1];
                      f.push(
                        ""
                          .concat(o, "=")
                          .concat(
                            "os" === r ? w[r] && w[r].toLowerCase() : w[r]
                          )
                      );
                    });
                case 14:
                  (h = []),
                    g &&
                      ((v = g),
                      (null == window ? void 0 : window.IS_WZQ_LIGHT) &&
                        v.app &&
                        (v.app = "mini_h5"),
                      Object.keys(v).forEach(function (t) {
                        h.push("".concat(t, "=").concat(v[t]));
                      })),
                    (o = ""
                      .concat(
                        (o =
                          ("wzq" !== d.platform && "mini" !== d.platform) ||
                          "GET" === a
                            ? "".concat(o, "?").concat(f.join("&"))
                            : o)
                      )
                      .concat(o.indexOf("?") > 0 ? "&" : "?")
                      .concat(h.join("&"))),
                    (O = l(l({}, s), p)),
                    "qqmac" === d.platform && (O.app = "newpanel"),
                    y || (O.check = 12),
                    (O.appid = "wx9cf8c670ebd68ce4"),
                    M || (O.app = "wzqxcx"),
                    (b = {
                      url: o,
                      method: a,
                      dataType: "json",
                      data: O,
                      header: Object.assign(
                        { "Content-Type": "application/x-www-form-urlencoded" },
                        "zxg" === d.platform && {
                          referer: "https://finance.qq.com",
                        },
                        u
                      ),
                      success: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          e = t.data;
                        e && !+e.code ? r(e) : c(e);
                      },
                      fail: function (t) {
                        c(t);
                      },
                    }),
                    (function (t, n, r) {
                      var o = r.method,
                        c = r.isShowToast,
                        a = void 0 !== c && c,
                        i = r.headers,
                        u = void 0 === i ? {} : i,
                        s = (void 0 === o ? "post" : o).toUpperCase(),
                        p = l({}, n),
                        f = t;
                      return (
                        "GET" === s &&
                          "object" == e(p) &&
                          (f =
                            t +
                            (t.indexOf("?") > -1 ? "&" : "?") +
                            d.serializeObject(p)),
                        new Promise(function (t, e) {
                          var n,
                            o,
                            c = m(
                              l(
                                {
                                  url: f,
                                  header: {
                                    "Content-Type":
                                      "application/x-www-form-urlencoded",
                                  },
                                  method: s,
                                  data: p,
                                  disableAddLogin: !0,
                                  reportFrom: "community",
                                  forceCallback:
                                    null == r ? void 0 : r.forceCallback,
                                },
                                (null == r ? void 0 : r.timeout)
                                  ? { timeout: r.timeout }
                                  : {}
                              ),
                              {
                                success: function (e) {
                                  t(e);
                                },
                                fail: function (t) {
                                  var n = "系统繁忙，请稍后重试";
                                  a &&
                                    q.wx$1.showToast({
                                      title: n,
                                      icon: "error",
                                    }),
                                    e({ code: t.errno || -1003, msg: n });
                                },
                                complete: function () {},
                              }
                            );
                          u &&
                            "[object Object]" ===
                              Object.prototype.toString.call(u) &&
                            (c.header = l(l({}, c.header), u)),
                            null ==
                              (o =
                                null == (n = q.index)
                                  ? void 0
                                  : n.__UNION_BRIDGE__) || o.request(c);
                        })
                      );
                    })(o, O, b)
                      .then(function (t) {
                        r(t);
                      })
                      .catch(function (t) {
                        c(t);
                      });
                case 21:
                case "end":
                  return t.stop();
              }
          }, i);
        })
      );
    });
  },
  A = d.sdk.getUserInfo,
  j =
    (null == (r = null == window ? void 0 : window.__SystemInfo__)
      ? void 0
      : r.serverType) || "online",
  W = h.host[j],
  X = function () {
    var t,
      e =
        (null == (t = null == window ? void 0 : window.__SystemInfo__)
          ? void 0
          : t.serverType) || "online";
    return h.host[e][d.platform];
  };
(exports.blacklistUser = function (e) {
  return new Promise(function (n, r) {
    return w(
      exports,
      null,
      t().mark(function o() {
        var c;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), A();
              case 2:
                (c = t.sent),
                  G(
                    {
                      url:
                        X() +
                        h.MODULE[d.platform].MODULE_COMMENT +
                        "blacklistUser",
                      data: l({ g_openid: c.openid }, e),
                      userinfo: c,
                    },
                    "zxg" === d.platform
                  )
                    .then(function (t) {
                      return n(t);
                    })
                    .catch(function (t) {
                      return r(t);
                    });
              case 4:
              case "end":
                return t.stop();
            }
        }, o);
      })
    );
  });
}),
  (exports.changeProfile = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return w(exports, [].concat(n), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return t().mark(function n() {
        var r, o;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), A();
                case 3:
                  return (
                    (r = t.sent),
                    (o = ""
                      .concat(X())
                      .concat(
                        h.MODULE[d.platform].MODULE_GROUP_USER,
                        "changeProfile"
                      )),
                    (t.next = 7),
                    G(
                      {
                        url: o,
                        query:
                          "wzq" === d.platform
                            ? l(
                                {
                                  app: d.IS_WZQ_XCX
                                    ? "wzqxcx"
                                    : d.IS_LITE_MODE
                                    ? "mini_h5"
                                    : "wzq",
                                  check: 12,
                                },
                                e
                              )
                            : e,
                        method: "GET",
                        userinfo: r,
                      },
                      "zxg" === d.platform
                    )
                  );
                case 7:
                  return t.abrupt("return", t.sent);
                case 10:
                  (t.prev = 10), (t.t0 = t.catch(0));
                case 12:
                case "end":
                  return t.stop();
              }
          },
          n,
          null,
          [[0, 10]]
        );
      })();
    });
  }),
  (exports.checkStocksAdded = function (e) {
    return w(
      this,
      null,
      t().mark(function e() {
        var n, r;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = {}),
                  (r = {}),
                  t.abrupt(
                    "return",
                    (n && 0 === n.code && n.data && (r = n.data), r)
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, e);
      })
    );
  }),
  (exports.commentListPlatContent = function (t) {
    var e = t.subjectId,
      n = t.first,
      r = t.begin,
      o = t.order,
      c = t.num,
      a = t.userinfo,
      i = t.tlMark;
    return new Promise(function (t, u) {
      var s = {
        subjectid: e,
        subject_id: e,
        last: n ? "" : r,
        begin: n ? "" : r,
        num: c || 10,
        limit: c || 10,
        order: o || "",
        tl_mark: n ? "" : i,
      };
      "wzq" === d.platform && (s = m(l({}, s), { check: 12, app: "wzq" }));
      var p = "",
        f = "";
      24 === e.toString().length
        ? ((p = "getRssCommentListBySubjectId"),
          (f = ""
            .concat(W[d.platform])
            .concat(h.MODULE[d.platform].MODULE_RSS_SERVICE)
            .concat(p)))
        : ((p = "getNewsCommentListBySubjectId"),
          (f = ""
            .concat(W[d.platform])
            .concat(h.MODULE[d.platform].MODULE_NEWS_COMMENT)
            .concat(p))),
        G({ url: f, data: s, userinfo: a }, "zxg" === d.platform)
          .then(function (e) {
            return t(e);
          })
          .catch(function (t) {
            return u(t);
          });
    });
  }),
  (exports.complainUser = function (t) {
    return G(
      {
        url: X() + h.MODULE[d.platform].MODULE_GROUP_USER + "complainUser",
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
      },
      "zxg" === d.platform
    )
      .then(function (t) {
        return t;
      })
      .catch(function (t) {
        return null;
      });
  }),
  (exports.deleteRssSubject = function (t) {
    return G(
      {
        url: X() + h.MODULE[d.platform].COMPATIBLE_COMMENT + "deleteRssSubject",
        data:
          "wzq" === d.platform
            ? { app: "wzq", check: 12, subject_id: t }
            : { subject_id: t },
      },
      "zxg" === d.platform
    )
      .then(function (t) {
        return t;
      })
      .catch(function (t) {
        return null;
      });
  }),
  (exports.getBindList = function (t, e, n) {
    return new Promise(function (e, r) {
      G(
        {
          url: ""
            .concat(
              -1 !== ["zxg", "qqmac", "web", "mini"].indexOf(d.platform)
                ? W[d.platform]
                : "".concat(location.origin, "/")
            )
            .concat(h.MODULE[d.platform].MODULE_ACCOUNT_BIND, "getBindlist"),
          data:
            "wzq" === d.platform
              ? l({ app: "wzq", check: 11 }, t)
              : m(l({}, t), { check: 11 }),
          userinfo: n,
          method: "GET",
          keepCheck: !0,
        },
        "zxg" === d.platform
      )
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getCommentDetail = function (t) {
    var e = t.subjectId,
      n = t.newsCommentId,
      r = void 0 === n ? "" : n,
      o = t.visible,
      c = void 0 === o ? 0 : o,
      a = t.visibleRemoved,
      i = void 0 === a ? "" : a,
      u = t.userinfo;
    return new Promise(function (t, n) {
      var o = {
        subjectid: e,
        subject_id: e,
        comment_id: r && "undefined" !== r ? r : "",
        visible: c,
        content_link: 1,
      };
      (o = "wzq" === d.platform ? l({ app: "wzq", check: 12 }, o) : l({}, o)),
        i && (o.visibleRemoved = i);
      var a = "",
        s = "";
      24 === e.toString().length
        ? ((a = "getRssSubjectById"),
          (s = ""
            .concat(W[d.platform])
            .concat(h.MODULE[d.platform].MODULE_RSS_INDEX)
            .concat(a)))
        : ((a = "getNewsSubject"),
          (s = ""
            .concat(W[d.platform])
            .concat(h.MODULE[d.platform].MODULE_NEWS_COMMENT)
            .concat(a))),
        G({ url: s, data: o, userinfo: u }, "zxg" === d.platform)
          .then(function (e) {
            return t(e);
          })
          .catch(function (t) {
            return n(t);
          });
    });
  }),
  (exports.getCommonList = function (t, e, n) {
    return new Promise(function (r, o) {
      G({
        url: ""
          .concat(W[d.platform])
          .concat(h.MODULE[d.platform].MODULE_RSS_INDEX)
          .concat({ share: "squareShare" }[e]),
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
        userinfo: n,
      })
        .then(function (t) {
          return r(t);
        })
        .catch(function (t) {
          return o(t);
        });
    });
  }),
  (exports.getCustomerFeedback = function (t, e, n) {
    return new Promise(function (e, r) {
      var o = l({}, t);
      (o = l({ app: "plus" }, o)),
        G({
          url: "https://wzq.tenpay.com/group/newstockgroup/activity/customerFeedback",
          data: l({ check: 12 }, o),
          userinfo: n,
          keepApp: !0,
        })
          .then(function (t) {
            return e(t);
          })
          .catch(function (t) {
            return r(t);
          });
    });
  }),
  (exports.getFriendsList = function (t, e, n) {
    return new Promise(function (e, r) {
      G({
        url: ""
          .concat(W[d.platform])
          .concat(h.MODULE[d.platform].MODULE_RSS_INDEX, "getRssListFollow"),
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
        userinfo: n,
      })
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getGuessHome = function (t, e) {
    return new Promise(function (n, r) {
      var o = "".concat(
        "wzq" === d.platform ? location.origin : "https://wzq.tenpay.com",
        "/cgi-bin/guess_home.fcgi"
      );
      G({ url: o, query: t, userinfo: e, method: "GET" }, "zxg" === d.platform)
        .then(function (t) {
          return n(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getHqStockList = function (t, e, n) {
    return new Promise(function (e, r) {
      G(
        {
          url: "https://wzq.tenpay.com/".concat(
            h.MODULE[d.platform].MODULE_COMMENT_NEXT,
            "stockForumsPure"
          ),
          data:
            "wzq" === d.platform
              ? l({ app: "wzq", check: 12 }, t)
              : l({ interface_func: "tl_h5" }, t),
          userinfo: n,
        },
        "zxg" === d.platform
      )
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getIllegalReasons = function (t) {
    return G(
      {
        url:
          X() +
          h.MODULE[d.platform].MODULE_RSS_SERVICE +
          "getIllegalReportReasons",
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
      },
      "zxg" === d.platform
    )
      .then(function (t) {
        return t;
      })
      .catch(function (t) {
        return null;
      });
  }),
  (exports.getMainList = function (t, e, n) {
    return new Promise(function (e, r) {
      G({
        url: ""
          .concat(W[d.platform])
          .concat(h.MODULE[d.platform].COMPATIBLE_COMMENT, "commentIndex"),
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
        userinfo: n,
      })
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getMapRssList = function (t, e, n) {
    return new Promise(function (e, r) {
      G({
        url: ""
          .concat(W[d.platform])
          .concat(h.MODULE[d.platform].MODULE_COMMENT_NEXT, "mapRssList"),
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
        userinfo: n,
      })
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getPreSendInfo = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return w(exports, [].concat(n), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return t().mark(function n() {
        var r, o;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (r =
                    "https://wzq.tenpay.com/group/newstockgroup/comment/preSendInfo"),
                  (o = E.getLoginParamsObject(r)),
                  t.abrupt(
                    "return",
                    q.StockBridge.request(
                      r,
                      q.RequestTypeEnum.GET,
                      m(l({}, o), { parent_id: e.parent_id || "" })
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, n);
      })();
    });
  }),
  (exports.getQTs = function () {
    return w(this, arguments, function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return t().mark(function n() {
        var r, o, c, a, i;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (r = { hk: "s_r_", us: "t_s_" }),
                  (o = function (t) {
                    var e,
                      n = t.slice(0, 2);
                    return (
                      (null != (e = r[n]) ? e : "s_") +
                      t
                        .replace(/^us\.?/, "us")
                        .replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "")
                        .replace(/\./g, "__")
                    );
                  }),
                  (t.next = 4),
                  G(
                    {
                      url: "https://sqt.gtimg.cn/utf8/",
                      method: "GET",
                      query: {
                        fmt: "json",
                        q: e
                          .map(function (t) {
                            return o(t);
                          })
                          .join(","),
                      },
                    },
                    "zxg" === d.platform
                  )
                );
              case 4:
                return (
                  (c = t.sent),
                  (a = c.data ? c.data : c || {}),
                  (i = {}),
                  t.abrupt(
                    "return",
                    (e.forEach(function (t) {
                      var e = a[o(t)];
                      e &&
                        (i[t] = {
                          name: e[1],
                          code: e[2],
                          price: e[3],
                          updown: e[5],
                        });
                    }),
                    i)
                  )
                );
              case 8:
              case "end":
                return t.stop();
            }
        }, n);
      })();
    });
  }),
  (exports.getSendCommentTokenPlat = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new Promise(function (n, r) {
      return w(
        exports,
        null,
        t().mark(function o() {
          var c;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), A();
                case 2:
                  (c = t.sent),
                    G({
                      url:
                        W[d.platform] +
                        h.MODULE[d.platform].MODULE_COMMENT +
                        "getSendCommentTokenPlat",
                      data: { parent_id: e.parent_id || "" },
                      userinfo: c,
                    })
                      .then(function (t) {
                        return n(t);
                      })
                      .catch(function (t) {
                        return r(t);
                      });
                case 4:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.getStaticNums = function (t) {
    return new Promise(function (e, n) {
      var r = "".concat(W[d.platform], "cgi/cgi-bin/numserver/getStaticNums");
      G({
        url: r,
        query: m(l({}, t), { type: "forward", visible: 1 }),
        method: "GET",
      })
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return n(t);
        });
    });
  }),
  (exports.getStockList = function (t, e, n) {
    return new Promise(function (e, r) {
      G(
        {
          url: ""
            .concat(
              -1 !== ["zxg", "qqmac", "web", "mini"].indexOf(d.platform)
                ? W[d.platform]
                : "".concat(location.origin, "/")
            )
            .concat(h.MODULE[d.platform].MODULE_COMMENT_NEXT, "stockForums"),
          data:
            "wzq" === d.platform
              ? l(
                  {
                    app: (null == window ? void 0 : window.IS_WZQ_LIGHT)
                      ? "mini_h5"
                      : "wzq",
                    check: 12,
                  },
                  t
                )
              : t,
          userinfo: n,
        },
        "zxg" === d.platform
      )
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getTimelineCfg = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return new Promise(function (n, r) {
      return w(
        exports,
        null,
        t().mark(function o() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  "section" === e.scene && (e.scene = "stock"),
                    G(
                      {
                        url: ""
                          .concat(W[d.platform])
                          .concat(
                            h.MODULE[d.platform].MODULE_COMMENT_NEXT,
                            "timelineCfg"
                          ),
                        method: "GET",
                        query:
                          "wzq" === d.platform
                            ? l({ app: "wzq", check: 11 }, e)
                            : e,
                      },
                      "zxg" === d.platform
                    )
                      .then(function (t) {
                        return n(t);
                      })
                      .catch(function (t) {
                        return r(t);
                      });
                case 1:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.getTopicDetail = function (t, e, n) {
    return new Promise(function (e, r) {
      G(
        {
          url: ""
            .concat(W[d.platform])
            .concat(h.MODULE[d.platform].MODULE_RSS_INDEX, "topicDetail"),
          data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
          userinfo: n,
        },
        "zxg" === d.platform
      )
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.getUserSocialData = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return w(exports, [].concat(n), function () {
      return t().mark(function e() {
        var n, r;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (n = ""
                    .concat(W[d.platform])
                    .concat(
                      h.MODULE[d.platform].MODULE_COMMENT_NEXT,
                      "userSocialData"
                    )),
                  (r = E.getLoginParamsObject(n)),
                  t.abrupt(
                    "return",
                    q.StockBridge.request(
                      n,
                      q.RequestTypeEnum.GET,
                      m(l({}, r), { test: 1 })
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, e);
      })();
    });
  }),
  (exports.getUserState = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Promise(function (r, o) {
      return w(
        exports,
        null,
        t().mark(function c() {
          var a, i, u, s;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), A("fund" === n);
                case 2:
                  (a = t.sent),
                    (i =
                      h.MODULE[d.platform][
                        "zxg" === d.platform
                          ? "MODULE_MESS_APP"
                          : "MODULE_MESS_WZQ"
                      ]),
                    (u = "".concat(X()).concat(i, "treaty")),
                    (s = "zxg" === d.platform && "fund" !== n && "stgy" !== n),
                    G(
                      {
                        url: u,
                        query:
                          "wzq" === d.platform
                            ? l({ app: "wzq", check: 12 }, e)
                            : e,
                        method: "GET",
                        userinfo: a,
                      },
                      s
                    )
                      .then(function (t) {
                        return r(t);
                      })
                      .catch(function (t) {
                        return o(t);
                      });
                case 7:
                case "end":
                  return t.stop();
              }
          }, c);
        })
      );
    });
  }),
  (exports.illegalReport = function (t) {
    return G(
      {
        url: X() + h.MODULE[d.platform].COMPATIBLE_COMMENT + "illegalReport",
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
      },
      "zxg" === d.platform
    )
      .then(function (t) {
        return t;
      })
      .catch(function (t) {
        return null;
      });
  }),
  (exports.operateStock = function (e, n) {
    return w(
      this,
      null,
      t().mark(function r() {
        var o, c, a, i;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (o = {
                    timestamp: new Date().getTime(),
                    act: n ? "sa" : "sd",
                    grpid: "1",
                    code: e,
                  }),
                  (t.next = 3),
                  A()
                );
              case 3:
                return (
                  (c = t.sent),
                  (a = {
                    app: "wzq",
                    check: 11,
                    appid: "wx9cf8c670ebd68ce4",
                    fskey: c.qlskey,
                    openid: c.openid,
                  }),
                  (i = {
                    check: 11,
                    seq: encodeURIComponent(JSON.stringify([o])),
                  }),
                  (t.next = 8),
                  G(
                    {
                      url: "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
                      query: a,
                      data: i,
                      userinfo: c,
                      keepCheck: !0,
                    },
                    "zxg" === d.platform
                  )
                );
              case 8:
              case "end":
                return t.stop();
            }
        }, r);
      })
    );
  }),
  (exports.pickVote = function (e) {
    return new Promise(function (n, r) {
      return w(
        exports,
        null,
        t().mark(function o() {
          var c;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), A(!0);
                case 2:
                  (c = t.sent),
                    "wzq",
                    "zxgxcx",
                    G(
                      {
                        url:
                          X() + h.MODULE[d.platform].MODULE_RSS_INDEX + "vote",
                        data: l({ app: "zxgxcx", check: 12 }, e),
                        userinfo: c,
                        keepApp: !0,
                      },
                      "zxg" === d.platform
                    )
                      .then(function (t) {
                        return n(t);
                      })
                      .catch(function (t) {
                        return r(t);
                      });
                case 5:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.putComment = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return w(exports, [].concat(n), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return t().mark(function n() {
        var r, o;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (r =
                    "https://wzq.tenpay.com/group/newstockgroup/comment/putComment"),
                  (o = E.getLoginParamsObject(r)),
                  t.abrupt(
                    "return",
                    q.StockBridge.request(
                      r,
                      q.RequestTypeEnum.POST,
                      l(l({}, e), o)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, n);
      })();
    });
  }),
  (exports.putFollow = function (t, e, n, r) {
    G(
      {
        url: ""
          .concat(W[d.platform])
          .concat(h.MODULE[d.platform].MODULE_RSS_SERVICE)
          .concat(n ? "followuser" : "unfollowuser"),
        data: t,
        userinfo: e,
        autoLogin: r,
      },
      "zxg" === d.platform
    )
      .then(function (t) {
        return t;
      })
      .catch(function (t) {
        return null;
      });
  }),
  (exports.putGuessOp = function (t, e) {
    return new Promise(function (n, r) {
      var o = "".concat(
        "wzq" === d.platform ? location.origin : "https://wzq.tenpay.com",
        "/cgi-bin/guess_op.fcgi"
      );
      G({ url: o, data: t, userinfo: e }, "zxg" === d.platform)
        .then(function (t) {
          return n(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.putRssLike = function (t, e, n) {
    return new Promise(function (r, o) {
      G(
        {
          url: ""
            .concat(W[d.platform])
            .concat(
              h.MODULE[d.platform][
                {
                  mini: "COMPATIBLE_COMMENT",
                  wzq: "COMPATIBLE_COMMENT",
                  web: "MODULE_RSS_SERVICE",
                  zxg: "MODULE_RSS_SERVICE",
                  qqmac: "MODULE_RSS_SERVICE",
                }[d.platform]
              ]
            )
            .concat(
              "wzq" === d.platform || "mini" === d.platform
                ? "putRssLike"
                : "putRssLike2"
            ),
          data:
            "wzq" === d.platform || "mini" === d.platform
              ? l({ app: "wzq", check: 12 }, t)
              : t,
          userinfo: e,
          autoLogin: n,
        },
        "zxg" === d.platform
      )
        .then(function (t) {
          return r(t);
        })
        .catch(function (t) {
          return o(t);
        });
    });
  }),
  (exports.putSubject = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return w(exports, [].concat(n), function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return t().mark(function n() {
        var r, o;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (r =
                    "https://wzq.tenpay.com/group/newstockgroup/comment/putSubject"),
                  (o = E.getLoginParamsObject(r)),
                  t.abrupt(
                    "return",
                    q.StockBridge.request(
                      r,
                      q.RequestTypeEnum.POST,
                      l(l({}, e), o)
                    )
                  )
                );
              case 2:
              case "end":
                return t.stop();
            }
        }, n);
      })();
    });
  }),
  (exports.queryVote = function (e) {
    return new Promise(function (n, r) {
      return w(
        exports,
        null,
        t().mark(function o() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  G(
                    {
                      url:
                        X() +
                        h.MODULE[d.platform].MODULE_RSS_INDEX +
                        "queryvote",
                      data: l({ app: "wzq", check: 12 }, e),
                    },
                    "zxg" === d.platform
                  )
                    .then(function (t) {
                      return n(t);
                    })
                    .catch(function (t) {
                      return r(t);
                    });
                case 1:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  }),
  (exports.recordUserAct = function (t, e, n) {
    return new Promise(function (e, r) {
      G({
        url: "https://wzq.tenpay.com/group/newstockgroup/rssNewsService/recordUserAct",
        data: "wzq" === d.platform ? l({ app: "wzq", check: 12 }, t) : t,
        userinfo: n,
      })
        .then(function (t) {
          return e(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  }),
  (exports.subjectLevelMoreCommentList = function (t, e) {
    return new Promise(function (n, r) {
      "wzq" === d.platform && (t = m(l({}, t), { check: 12, app: "wzq" }));
      var o = ""
        .concat(W[d.platform])
        .concat(
          h.MODULE[d.platform].MODULE_COMMENT_NEXT,
          "subjectLevelMoreCommentList"
        );
      G({ url: o, data: t, userinfo: e }, "zxg" === d.platform)
        .then(function (t) {
          return n(t);
        })
        .catch(function (t) {
          return r(t);
        });
    });
  });
