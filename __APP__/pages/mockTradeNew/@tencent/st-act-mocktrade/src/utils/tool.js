var t;
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../cp-util/navigator/index.js"),
  i = require("../../../../../../common/vendor.js"),
  a = require("../../../st-wuji-sdk/mp.js"),
  n = {},
  o = {},
  r = {};
!(function (t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.CGI_SVR_PREFIX =
      t.CGI_BIN_PREFIX =
      t.PROXY_URL_REG =
      t.URI_REG =
      t.SQ_REG =
      t.WZQ_ACTIVITY_DOMAIN_REG =
      t.LITE_PATH_REPLACE_WHITE_DOMAINS =
      t.LITE_WZQ_PATH_PREFIX =
      t.WZQ_PATH_PREFIX =
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
    (t.WZQ_PATH_PREFIX = "/mp/v2/"),
    (t.LITE_WZQ_PATH_PREFIX = "/mp/lite/"),
    (t.LITE_PATH_REPLACE_WHITE_DOMAINS = [
      t.WZQ_DOMAIN,
      t.TENTREES_TEMP_DOMAIN,
    ]),
    (t.WZQ_ACTIVITY_DOMAIN_REG = /(zqact)(\d{0,2})?\.tenpay\.com/),
    (t.SQ_REG = /^\/group(s)?/),
    (t.URI_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?((?:[a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64})([\\/]+[\S\s]*)?/i),
    (t.PROXY_URL_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?(wzq\.tenpay\.com|www\.tentrees.cn)?(?:\/)?(cgi-bin|svr)?/i),
    (t.CGI_BIN_PREFIX = "cgi-bin"),
    (t.CGI_SVR_PREFIX = "svr");
})(r),
  Object.defineProperty(o, "__esModule", { value: !0 });
var c = r,
  s = (function () {
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
          : location.hostname.includes(c.TENTREES_TEMP_DOMAIN);
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
o.default = s;
var p = {};
Object.defineProperty(p, "__esModule", { value: !0 }),
  (p.isWechat = p.isStockApp = p.isMiniapp = p.parseUri = void 0);
var u = r;
(p.parseUri = function (t) {
  var e = u.URI_REG.exec(t);
  return { hostname: (e && e[1]) || "", pathname: (e && e[2]) || "" };
}),
  (p.isMiniapp = function () {
    return "function" == typeof getApp && "function" == typeof getCurrentPages;
  }),
  (p.isStockApp = function () {
    return /qqstock/i.test(navigator.userAgent);
  }),
  (p.isWechat = function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  });
var w,
  l = {};
Object.defineProperty(l, "__esModule", { value: !0 }),
  (l.urlMappingData = l.apiTplData = void 0);
var f = r;
(l.apiTplData = {
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
}),
  (l.urlMappingData =
    (((w = {})[f.WZQ_PATH_PREFIX] = f.LITE_WZQ_PATH_PREFIX), w));
var m = {};
Object.defineProperty(m, "__esModule", { value: !0 }),
  (m.reqWzqProxyToGu = m.reqTransformer = void 0);
var q = r;
m.reqTransformer = function (t) {
  return function (e) {
    var i = e.url,
      a = e.baseURL;
    return (
      t &&
        t.isGrayUser() &&
        (i && (e.url = t.getRealApiUrl(i)),
        a && (e.baseURL = t.getRealApiUrl(a))),
      e
    );
  };
};
var g = [q.WZQ_DOMAIN, q.TENTREES_TEMP_DOMAIN],
  _ = [q.CGI_BIN_PREFIX, q.CGI_SVR_PREFIX],
  h = function (t) {
    return g.some(function (e) {
      return t.includes(e);
    });
  },
  d = function (t) {
    return _.some(function (e) {
      return e === t;
    });
  };
(m.reqWzqProxyToGu = function () {
  return function (t, e) {
    if ((void 0 === e && (e = !1), !e)) {
      if ("undefined" == typeof window) return t;
      if (location.hostname !== q.GU_DOMAIN) return t;
    }
    var i = t.url,
      a = t.baseURL,
      n = i.match(q.PROXY_URL_REG),
      o = a.match(q.PROXY_URL_REG),
      r = (n && n[1]) || "",
      c = (n && n[2]) || "",
      s = (o && o[1]) || "",
      p = (o && o[2]) || "";
    if (h(r) && d(c)) {
      var u =
        c === q.CGI_BIN_PREFIX
          ? "".concat(q.GU_DOMAIN, "/wzq")
          : "".concat(q.GU_DOMAIN);
      return (t.url = t.url.replace(r, u)), t;
    }
    return h(s) && d(p)
      ? ((u =
          p === q.CGI_BIN_PREFIX
            ? "".concat(q.GU_DOMAIN, "/wzq")
            : "".concat(q.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(s, u)),
        t)
      : h(s) && d(c) && !r
      ? ((u =
          c === q.CGI_BIN_PREFIX
            ? "".concat(q.GU_DOMAIN, "/wzq")
            : "".concat(q.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(s, u)),
        t)
      : t;
  };
}),
  (function (t) {
    var e =
        (i.commonjsGlobal && i.commonjsGlobal.__assign) ||
        function () {
          return (e =
            Object.assign ||
            function (t) {
              for (var e, i = 1, a = arguments.length; i < a; i++)
                for (var n in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              return t;
            }).apply(this, arguments);
        },
      n =
        (i.commonjsGlobal && i.commonjsGlobal.__createBinding) ||
        (Object.create
          ? function (t, e, i, a) {
              void 0 === a && (a = i),
                Object.defineProperty(t, a, {
                  enumerable: !0,
                  get: function () {
                    return e[i];
                  },
                });
            }
          : function (t, e, i, a) {
              void 0 === a && (a = i), (t[a] = e[i]);
            }),
      c =
        (i.commonjsGlobal && i.commonjsGlobal.__exportStar) ||
        function (t, e) {
          for (var i in t)
            "default" === i ||
              Object.prototype.hasOwnProperty.call(e, i) ||
              n(e, t, i);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.initLocation = t.initShyRequest = void 0);
    var s,
      u = o,
      w = p,
      f = l,
      q = r,
      g = i.dist;
    c(m, t),
      ((0, w.isMiniapp)() || "undefined" != typeof window) &&
        (s = a.require$$5.default);
    var _ = {
        isGray: !1,
        useWuji: !1,
        useLiteMode: !1,
        useLitePathReplace: !1,
      },
      h = (function () {
        function t(t, e) {
          void 0 === t && (t = q.TENTREES_TEMP_DOMAIN),
            void 0 === e && (e = _),
            (this.apiData = {}),
            (this.domain = q.TENTREES_TEMP_DOMAIN),
            (this.sqDomain = ""),
            (this.urlMappingData = {}),
            (this.useLitePathReplace = !1),
            (this.litePathReplacePattern = q.WZQ_PATH_PREFIX),
            (this.allowlitePathReplaceDomain =
              q.LITE_PATH_REPLACE_WHITE_DOMAINS),
            (this.isLiteMode = !1),
            this.domainCheck(t),
            (this.sqDomain = "group.".concat(this.domain)),
            (this.apiData = this.getMappingData(t, f.apiTplData)),
            (this.grayTool = new u.default(e && e.isGray)),
            (this.urlMappingData = f.urlMappingData),
            (this.isLiteMode = Boolean(e && e.useLiteMode)),
            (this.useLitePathReplace = Boolean(e && e.useLitePathReplace)),
            e && e.useWuji && (this.getCacheData(), this.getDynamicData());
        }
        return (
          (t.prototype.getCacheData = function () {
            if ("undefined" != typeof window) {
              var t = localStorage.getItem(q.DYNAMIC_RULE_KEY);
              if (!t) return;
              try {
                var i = this.getMappingData(this.domain, JSON.parse(t));
                this.apiData = e(e({}, this.apiData), i);
              } catch (t) {}
            }
          }),
          (t.prototype.getDynamicData = function () {
            var t = this;
            "undefined" != typeof window &&
              s &&
              s.get &&
              s
                .get({ appid: "news", schemaid: "api_dynamic_mapping" })
                .then(function (i) {
                  if (200 === i.code && i.data && i.data[0]) {
                    var a = i.data[0],
                      n = a.is_on,
                      o = a.mapping_json;
                    if (1 === n)
                      try {
                        var r = t.getMappingData(t.domain, JSON.parse(o));
                        localStorage.setItem(q.DYNAMIC_RULE_KEY, o),
                          (t.apiData = e(e({}, t.apiData), r));
                      } catch (t) {}
                    else 1 !== n && localStorage.removeItem(q.DYNAMIC_RULE_KEY);
                  }
                })
                .catch(function (t) {});
          }),
          (t.prototype.domainCheck = function (t) {
            if (!(t = t && t.trim && t.trim()))
              throw new Error("请提供腾树域名");
            if (t.startsWith("www")) throw new Error("请提供不带www前缀的域名");
            if (!q.WHITE_DOMAINS.includes(t))
              throw new Error("请使用白名单域名：".concat(q.WHITE_DOMAINS));
            this.domain = t;
          }),
          (t.prototype.getMappingData = function (t, e) {
            var i = {};
            return (
              Object.keys(e).forEach(function (a) {
                var n = e[a];
                n.includes(q.PLACEHOLDER)
                  ? (i[a] = n.replace(
                      new RegExp("".concat(q.PLACEHOLDER), "g"),
                      t
                    ))
                  : (i[a] = n);
              }),
              i
            );
          }),
          (t.prototype.getCommunityMappingUrl = function (t, e) {
            return t.replace(e, this.sqDomain);
          }),
          (t.prototype.getWZQActivityMappingUrl = function (t, e, i) {
            var a = e.replace(i[2], ""),
              n = this.apiData[a].replace(i[1], "".concat(i[1]).concat(i[2]));
            return t.replace(e, n);
          }),
          (t.prototype.getRealUrl = function (t, e, i) {
            var a = this.apiData[e];
            if (q.SQ_REG.test(i)) return this.getCommunityMappingUrl(t, e);
            if (a) return t.replace(e, a);
            var n = e.match(q.WZQ_ACTIVITY_DOMAIN_REG);
            return n && n[1] && n[2]
              ? this.getWZQActivityMappingUrl(t, e, n)
              : t;
          }),
          (t.prototype.getPathAfterReplaced = function (t, e, i) {
            void 0 === i && (i = !1);
            var a = (0, w.parseUri)(t),
              n = a.hostname,
              o = a.pathname,
              r = this.urlMappingData[e];
            return i ||
              (r &&
                o.includes(e) &&
                this.allowlitePathReplaceDomain.includes(n))
              ? t.replace(e, r)
              : t;
          }),
          (t.prototype.getRealApiUrl = function (t, e) {
            if ((void 0 === e && (e = !1), "string" != typeof t)) return t;
            t = t && t.trim();
            var i = (0, w.parseUri)(t),
              a = i.hostname,
              n = i.pathname;
            return a && (this.grayTool.isGrayUser() || e)
              ? this.getRealUrl(t, a, n)
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
              (this.apiData = this.getMappingData(t, f.apiTplData));
          }),
          (t.prototype.getLiteModeUrl = function (t, e) {
            void 0 === e && (e = !1);
            try {
              if ("string" != typeof t) return t;
              if (!this.isLiteMode) return t;
              var i = (t = t && t.trim()).split("#"),
                a = i[0],
                n = i[1];
              (t = [g.urltools.make(a, { lite: 1 }, { remove: !0 }), n].join(
                "#"
              )),
                (this.useLitePathReplace || e) &&
                  (t = this.getPathAfterReplaced(
                    t,
                    this.litePathReplacePattern,
                    e
                  ));
            } catch (t) {}
            return t;
          }),
          t
        );
      })();
    (t.initShyRequest = function (t) {
      if ("undefined" != typeof shy) {
        var e = shy.request;
        if (shy.isWrapped) return;
        (shy.request = function (i) {
          void 0 === i && (i = {}),
            t.isGrayUser() && (i.url = t.getRealApiUrl(i.url)),
            e.call(shy, i);
        }),
          (shy.isWrapped = !0);
      }
    }),
      (t.initLocation = function (t) {
        var e = {
          set href(e) {
            var i = e;
            try {
              t.isGrayUser() && (i = t.getRealApiUrl(i)),
                t.isLiteMode && (i = t.getLiteModeUrl(i));
            } catch (t) {}
            location.href = i;
          },
          replace: function (e) {
            void 0 === e && (e = "");
            var i = e;
            try {
              t.isGrayUser() && (i = t.getRealApiUrl(i)),
                t.isLiteMode && (i = t.getLiteModeUrl(i));
            } catch (t) {}
            location.replace(i);
          },
        };
        window.$location = e;
      }),
      (t.default = h);
  })(n);
var y = i.getDefaultExportFromCjs(n),
  E = !1,
  I =
    null == (t = null == window ? void 0 : window.navigator)
      ? void 0
      : t.userAgent;
I && (E = i.dist.detect(I).env.IS_LITE_MODE);
new y("tentrees.cn", { useLiteMode: E, useLitePathReplace: !0 }),
  (exports.cutStr = function (t, e, i) {
    if (t.replace(/[\u4e00-\u9fa5]/g, "**").length <= e) return t;
    for (
      var a = 0, n = "", o = 0;
      o < t.length &&
      (/[\u4e00-\u9fa5]/.test(t[o]) ? (a += 2) : (a += 1), !(a > e));
      o++
    )
      n += t[o];
    return 1 === i ? n : n + " ...";
  }),
  (exports.debounce = function (t, e) {
    var i;
    return function () {
      for (
        var a = this, n = arguments.length, o = new Array(n), r = 0;
        r < n;
        r++
      )
        o[r] = arguments[r];
      clearTimeout(i),
        (i = setTimeout(function () {
          t.apply(a, o);
        }, e));
    };
  }),
  (exports.isDefined = function (t) {
    return void 0 !== t;
  }),
  (exports.judgeGoAsset = function () {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = t && t.stat_data;
    e.push("GotoTradeTab", "qqstock", {
      report_channel: i ? t.stat_data : "",
      index: "0",
    });
  }),
  (exports.throttle = function (t, e) {
    var i, a;
    return function () {
      for (
        var n = this, o = arguments.length, r = new Array(o), c = 0;
        c < o;
        c++
      )
        r[c] = arguments[c];
      var s = Date.now();
      i && s < i + e
        ? (clearTimeout(a),
          (a = setTimeout(function () {
            (i = s), t.apply(n, r);
          }, e)))
        : ((i = s), t.apply(this, arguments));
    };
  }),
  (exports.times = function (t, e) {
    for (var i = Array(Math.max(0, t)), a = 0; a < t; a++)
      i[a] = e.call(null, a);
    return i;
  });
