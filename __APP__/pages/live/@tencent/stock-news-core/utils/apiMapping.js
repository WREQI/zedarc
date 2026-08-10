require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = require("../../st-wuji-sdk/mp.js"),
  i = {},
  n = {},
  a = {};
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
})(a),
  Object.defineProperty(n, "__esModule", { value: !0 });
var o = a,
  r = (function () {
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
          : location.hostname.includes(o.TENTREES_TEMP_DOMAIN);
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
n.default = r;
var c = {};
Object.defineProperty(c, "__esModule", { value: !0 }),
  (c.isWechat = c.isStockApp = c.isMiniapp = c.parseUri = void 0);
var s = a;
(c.parseUri = function (t) {
  var e = s.URI_REG.exec(t);
  return { hostname: (e && e[1]) || "", pathname: (e && e[2]) || "" };
}),
  (c.isMiniapp = function () {
    return "function" == typeof getApp && "function" == typeof getCurrentPages;
  }),
  (c.isStockApp = function () {
    return /qqstock/i.test(navigator.userAgent);
  }),
  (c.isWechat = function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  });
var w = {};
Object.defineProperty(w, "__esModule", { value: !0 }),
  (w.apiTplData = void 0),
  (w.apiTplData = {
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
var p = {};
Object.defineProperty(p, "__esModule", { value: !0 }),
  (p.reqWzqProxyToGu = p.reqTransformer = void 0);
var u = a;
p.reqTransformer = function (t) {
  return function (e) {
    var i = e.url,
      n = e.baseURL;
    return (
      t &&
        t.isGrayUser() &&
        (i && (e.url = t.getRealApiUrl(i)),
        n && (e.baseURL = t.getRealApiUrl(n))),
      e
    );
  };
};
var q = [u.WZQ_DOMAIN, u.TENTREES_TEMP_DOMAIN],
  m = [u.CGI_BIN_PREFIX, u.CGI_SVR_PREFIX],
  f = function (t) {
    return q.some(function (e) {
      return t.includes(e);
    });
  },
  g = function (t) {
    return m.some(function (e) {
      return e === t;
    });
  };
(p.reqWzqProxyToGu = function () {
  return function (t, e) {
    if ((void 0 === e && (e = !1), !e)) {
      if ("undefined" == typeof window) return t;
      if (location.hostname !== u.GU_DOMAIN) return t;
    }
    var i = t.url,
      n = t.baseURL,
      a = i.match(u.PROXY_URL_REG),
      o = n.match(u.PROXY_URL_REG),
      r = (a && a[1]) || "",
      c = (a && a[2]) || "",
      s = (o && o[1]) || "",
      w = (o && o[2]) || "";
    if (f(r) && g(c)) {
      var p =
        c === u.CGI_BIN_PREFIX
          ? "".concat(u.GU_DOMAIN, "/wzq")
          : "".concat(u.GU_DOMAIN);
      return (t.url = t.url.replace(r, p)), t;
    }
    return f(s) && g(w)
      ? ((p =
          w === u.CGI_BIN_PREFIX
            ? "".concat(u.GU_DOMAIN, "/wzq")
            : "".concat(u.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(s, p)),
        t)
      : f(s) && g(c) && !r
      ? ((p =
          c === u.CGI_BIN_PREFIX
            ? "".concat(u.GU_DOMAIN, "/wzq")
            : "".concat(u.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(s, p)),
        t)
      : t;
  };
}),
  (function (i) {
    var o =
        (t.commonjsGlobal && t.commonjsGlobal.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var a in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
              return t;
            }).apply(this, arguments);
        },
      r =
        (t.commonjsGlobal && t.commonjsGlobal.__createBinding) ||
        (Object.create
          ? function (t, e, i, n) {
              void 0 === n && (n = i),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[i];
                  },
                });
            }
          : function (t, e, i, n) {
              void 0 === n && (n = i), (t[n] = e[i]);
            }),
      s =
        (t.commonjsGlobal && t.commonjsGlobal.__exportStar) ||
        function (t, e) {
          for (var i in t)
            "default" === i ||
              Object.prototype.hasOwnProperty.call(e, i) ||
              r(e, t, i);
        };
    Object.defineProperty(i, "__esModule", { value: !0 }),
      (i.initLocation = i.initShyRequest = void 0);
    var u,
      q = n,
      m = c,
      f = w,
      g = a;
    s(p, i),
      ((0, m.isMiniapp)() || "undefined" != typeof window) &&
        (u = e.require$$5.default);
    var l = { isGray: !1, useWuji: !1 },
      _ = (function () {
        function t(t, e) {
          void 0 === t && (t = g.TENTREES_TEMP_DOMAIN),
            void 0 === e && (e = l),
            (this.apiData = {}),
            (this.domain = g.TENTREES_TEMP_DOMAIN),
            (this.sqDomain = ""),
            this.domainCheck(t),
            (this.sqDomain = "group.".concat(this.domain)),
            (this.apiData = this.getMappingData(t, f.apiTplData)),
            (this.grayTool = new q.default(e && e.isGray)),
            e && e.useWuji && (this.getCacheData(), this.getDynamicData());
        }
        return (
          (t.prototype.getCacheData = function () {
            if ("undefined" != typeof window) {
              var t = localStorage.getItem(g.DYNAMIC_RULE_KEY);
              if (!t) return;
              try {
                var e = this.getMappingData(this.domain, JSON.parse(t));
                this.apiData = o(o({}, this.apiData), e);
              } catch (t) {}
            }
          }),
          (t.prototype.getDynamicData = function () {
            var t = this;
            "undefined" != typeof window &&
              u &&
              u.get &&
              u
                .get({ appid: "news", schemaid: "api_dynamic_mapping" })
                .then(function (e) {
                  if (200 === e.code && e.data && e.data[0]) {
                    var i = e.data[0],
                      n = i.is_on,
                      a = i.mapping_json;
                    if (1 === n)
                      try {
                        var r = t.getMappingData(t.domain, JSON.parse(a));
                        localStorage.setItem(g.DYNAMIC_RULE_KEY, a),
                          (t.apiData = o(o({}, t.apiData), r));
                      } catch (t) {}
                    else 1 !== n && localStorage.removeItem(g.DYNAMIC_RULE_KEY);
                  }
                })
                .catch(function (t) {});
          }),
          (t.prototype.domainCheck = function (t) {
            if (!(t = t && t.trim && t.trim()))
              throw new Error("请提供腾树域名");
            if (t.startsWith("www")) throw new Error("请提供不带www前缀的域名");
            if (!g.WHITE_DOMAINS.includes(t))
              throw new Error("请使用白名单域名：".concat(g.WHITE_DOMAINS));
            this.domain = t;
          }),
          (t.prototype.getMappingData = function (t, e) {
            var i = {};
            return (
              Object.keys(e).forEach(function (n) {
                var a = e[n];
                a.includes(g.PLACEHOLDER)
                  ? (i[n] = a.replace(
                      new RegExp("".concat(g.PLACEHOLDER), "g"),
                      t
                    ))
                  : (i[n] = a);
              }),
              i
            );
          }),
          (t.prototype.getCommunityMappingUrl = function (t, e) {
            return t.replace(e, this.sqDomain);
          }),
          (t.prototype.getWZQActivityMappingUrl = function (t, e, i) {
            var n = e.replace(i[2], ""),
              a = this.apiData[n].replace(i[1], "".concat(i[1]).concat(i[2]));
            return t.replace(e, a);
          }),
          (t.prototype.getRealUrl = function (t, e, i) {
            var n = this.apiData[e];
            if (g.SQ_REG.test(i)) return this.getCommunityMappingUrl(t, e);
            if (n) return t.replace(e, n);
            var a = e.match(g.WZQ_ACTIVITY_DOMAIN_REG);
            return a && a[1] && a[2]
              ? this.getWZQActivityMappingUrl(t, e, a)
              : t;
          }),
          (t.prototype.getRealApiUrl = function (t, e) {
            if ((void 0 === e && (e = !1), "string" != typeof t)) return t;
            t = t && t.trim();
            var i = (0, m.parseUri)(t),
              n = i.hostname,
              a = i.pathname;
            return n && (this.grayTool.isGrayUser() || e)
              ? this.getRealUrl(t, n, a)
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
          t
        );
      })();
    (i.initShyRequest = function (t) {
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
      (i.initLocation = function (t) {
        var e = {
          set href(e) {
            var i = e;
            t.isGrayUser() && (i = t.getRealApiUrl(i)), (location.href = i);
          },
          replace: function (e) {
            void 0 === e && (e = "");
            var i = e;
            t.isGrayUser() && (i = t.getRealApiUrl(i)), location.replace(i);
          },
        };
        window.$location = e;
      }),
      (i.default = _);
  })(i);
var l = new (t.getDefaultExportFromCjs(i))("tentrees.cn");
i.initShyRequest(l), (exports.apiManager = l);
