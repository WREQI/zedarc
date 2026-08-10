require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../common/vendor.js"),
  o = require("../../../../st-wuji-sdk/mp.js"),
  t = {},
  n = {},
  r = {};
!(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.CGI_SVR_PREFIX =
      e.CGI_BIN_PREFIX =
      e.PROXY_URL_REG =
      e.URI_REG =
      e.SQ_REG =
      e.WZQ_ACTIVITY_DOMAIN_REG =
      e.WHITE_DOMAINS =
      e.DYNAMIC_RULE_KEY =
      e.TENTREES_TEMP_DOMAIN =
      e.WZQ_DOMAIN =
      e.GU_DOMAIN =
      e.PLACEHOLDER =
        void 0),
    (e.PLACEHOLDER = "&0&"),
    (e.GU_DOMAIN = "gu.qq.com"),
    (e.WZQ_DOMAIN = "wzq.tenpay.com"),
    (e.TENTREES_TEMP_DOMAIN = "tentrees.cn"),
    (e.DYNAMIC_RULE_KEY = "DAYNAMIC_RULE_KEY"),
    (e.WHITE_DOMAINS = ["tengtrees.com", e.TENTREES_TEMP_DOMAIN]),
    (e.WZQ_ACTIVITY_DOMAIN_REG = /(zqact)(\d{0,2})?\.tenpay\.com/),
    (e.SQ_REG = /^\/group(s)?/),
    (e.URI_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?((?:[a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64})([\\/]+[\S\s]*)?/i),
    (e.PROXY_URL_REG =
      /^(?:[a-z][a-z0-9.+-]*:)?(?:\/\/)?(wzq\.tenpay\.com|www\.tentrees.cn)?(?:\/)?(cgi-bin|svr)?/i),
    (e.CGI_BIN_PREFIX = "cgi-bin"),
    (e.CGI_SVR_PREFIX = "svr");
})(r),
  Object.defineProperty(n, "__esModule", { value: !0 });
var i = r,
  c = (function () {
    function e(e) {
      void 0 === e && (e = !1),
        (this.isForceGray = !1),
        (this.isGray = !1),
        (this.isGray = e);
    }
    return (
      (e.prototype.isBrowserGrayUser = function () {
        return this.isGray
          ? this.isGray
          : location.hostname.includes(i.TENTREES_TEMP_DOMAIN);
      }),
      (e.prototype.isDefGrayUser = function () {
        return this.isGray;
      }),
      (e.prototype.setGray = function (e) {
        void 0 !== e && (this.isForceGray = e);
      }),
      (e.prototype.isGrayUser = function () {
        return (
          !!this.isForceGray ||
          ("undefined" != typeof window
            ? this.isBrowserGrayUser()
            : this.isDefGrayUser())
        );
      }),
      e
    );
  })();
n.default = c;
var a = {};
Object.defineProperty(a, "__esModule", { value: !0 }),
  (a.isWechat = a.isStockApp = a.isMiniapp = a.parseUri = void 0);
var s = r;
(a.parseUri = function (e) {
  var o = s.URI_REG.exec(e);
  return { hostname: (o && o[1]) || "", pathname: (o && o[2]) || "" };
}),
  (a.isMiniapp = function () {
    return "function" == typeof getApp && "function" == typeof getCurrentPages;
  }),
  (a.isStockApp = function () {
    return /qqstock/i.test(navigator.userAgent);
  }),
  (a.isWechat = function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  });
var p = {};
Object.defineProperty(p, "__esModule", { value: !0 }),
  (p.apiTplData = void 0),
  (p.apiTplData = {
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
var u = {};
Object.defineProperty(u, "__esModule", { value: !0 }),
  (u.reqWzqProxyToGu = u.reqTransformer = void 0);
var g = r;
u.reqTransformer = function (e) {
  return function (o) {
    var t = o.url,
      n = o.baseURL;
    return (
      e &&
        e.isGrayUser() &&
        (t && (o.url = e.getRealApiUrl(t)),
        n && (o.baseURL = e.getRealApiUrl(n))),
      o
    );
  };
};
var w = [g.WZQ_DOMAIN, g.TENTREES_TEMP_DOMAIN],
  E = [g.CGI_BIN_PREFIX, g.CGI_SVR_PREFIX],
  _ = function (e) {
    return w.some(function (o) {
      return e.includes(o);
    });
  },
  m = function (e) {
    return E.some(function (o) {
      return o === e;
    });
  };
(u.reqWzqProxyToGu = function () {
  return function (e, o) {
    if ((void 0 === o && (o = !1), !o)) {
      if ("undefined" == typeof window) return e;
      if (location.hostname !== g.GU_DOMAIN) return e;
    }
    var t = e.url,
      n = e.baseURL,
      r = t.match(g.PROXY_URL_REG),
      i = n.match(g.PROXY_URL_REG),
      c = (r && r[1]) || "",
      a = (r && r[2]) || "",
      s = (i && i[1]) || "",
      p = (i && i[2]) || "";
    if (_(c) && m(a)) {
      var u =
        a === g.CGI_BIN_PREFIX
          ? "".concat(g.GU_DOMAIN, "/wzq")
          : "".concat(g.GU_DOMAIN);
      return (e.url = e.url.replace(c, u)), e;
    }
    return _(s) && m(p)
      ? ((u =
          p === g.CGI_BIN_PREFIX
            ? "".concat(g.GU_DOMAIN, "/wzq")
            : "".concat(g.GU_DOMAIN)),
        (e.baseURL = e.baseURL.replace(s, u)),
        e)
      : _(s) && m(a) && !c
      ? ((u =
          a === g.CGI_BIN_PREFIX
            ? "".concat(g.GU_DOMAIN, "/wzq")
            : "".concat(g.GU_DOMAIN)),
        (e.baseURL = e.baseURL.replace(s, u)),
        e)
      : e;
  };
}),
  (function (t) {
    var i =
        (e.commonjsGlobal && e.commonjsGlobal.__assign) ||
        function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var o, t = 1, n = arguments.length; t < n; t++)
                for (var r in (o = arguments[t]))
                  Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
              return e;
            }).apply(this, arguments);
        },
      c =
        (e.commonjsGlobal && e.commonjsGlobal.__createBinding) ||
        (Object.create
          ? function (e, o, t, n) {
              void 0 === n && (n = t),
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: function () {
                    return o[t];
                  },
                });
            }
          : function (e, o, t, n) {
              void 0 === n && (n = t), (e[n] = o[t]);
            }),
      s =
        (e.commonjsGlobal && e.commonjsGlobal.__exportStar) ||
        function (e, o) {
          for (var t in e)
            "default" === t ||
              Object.prototype.hasOwnProperty.call(o, t) ||
              c(o, e, t);
        };
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.initLocation = t.initShyRequest = void 0);
    var g,
      w = n,
      E = a,
      _ = p,
      m = r;
    s(u, t),
      ((0, E.isMiniapp)() || "undefined" != typeof window) &&
        (g = o.require$$5.default);
    var M = { isGray: !1, useWuji: !1 },
      q = (function () {
        function e(e, o) {
          void 0 === e && (e = m.TENTREES_TEMP_DOMAIN),
            void 0 === o && (o = M),
            (this.apiData = {}),
            (this.domain = m.TENTREES_TEMP_DOMAIN),
            (this.sqDomain = ""),
            this.domainCheck(e),
            (this.sqDomain = "group.".concat(this.domain)),
            (this.apiData = this.getMappingData(e, _.apiTplData)),
            (this.grayTool = new w.default(o && o.isGray)),
            o && o.useWuji && (this.getCacheData(), this.getDynamicData());
        }
        return (
          (e.prototype.getCacheData = function () {
            if ("undefined" != typeof window) {
              var e = localStorage.getItem(m.DYNAMIC_RULE_KEY);
              if (!e) return;
              try {
                var o = this.getMappingData(this.domain, JSON.parse(e));
                this.apiData = i(i({}, this.apiData), o);
              } catch (e) {}
            }
          }),
          (e.prototype.getDynamicData = function () {
            var e = this;
            "undefined" != typeof window &&
              g &&
              g.get &&
              g
                .get({ appid: "news", schemaid: "api_dynamic_mapping" })
                .then(function (o) {
                  if (200 === o.code && o.data && o.data[0]) {
                    var t = o.data[0],
                      n = t.is_on,
                      r = t.mapping_json;
                    if (1 === n)
                      try {
                        var c = e.getMappingData(e.domain, JSON.parse(r));
                        localStorage.setItem(m.DYNAMIC_RULE_KEY, r),
                          (e.apiData = i(i({}, e.apiData), c));
                      } catch (e) {}
                    else 1 !== n && localStorage.removeItem(m.DYNAMIC_RULE_KEY);
                  }
                })
                .catch(function (e) {});
          }),
          (e.prototype.domainCheck = function (e) {
            if (!(e = e && e.trim && e.trim()))
              throw new Error("请提供腾树域名");
            if (e.startsWith("www")) throw new Error("请提供不带www前缀的域名");
            if (!m.WHITE_DOMAINS.includes(e))
              throw new Error("请使用白名单域名：".concat(m.WHITE_DOMAINS));
            this.domain = e;
          }),
          (e.prototype.getMappingData = function (e, o) {
            var t = {};
            return (
              Object.keys(o).forEach(function (n) {
                var r = o[n];
                r.includes(m.PLACEHOLDER)
                  ? (t[n] = r.replace(
                      new RegExp("".concat(m.PLACEHOLDER), "g"),
                      e
                    ))
                  : (t[n] = r);
              }),
              t
            );
          }),
          (e.prototype.getCommunityMappingUrl = function (e, o) {
            return e.replace(o, this.sqDomain);
          }),
          (e.prototype.getWZQActivityMappingUrl = function (e, o, t) {
            var n = o.replace(t[2], ""),
              r = this.apiData[n].replace(t[1], "".concat(t[1]).concat(t[2]));
            return e.replace(o, r);
          }),
          (e.prototype.getRealUrl = function (e, o, t) {
            var n = this.apiData[o];
            if (m.SQ_REG.test(t)) return this.getCommunityMappingUrl(e, o);
            if (n) return e.replace(o, n);
            var r = o.match(m.WZQ_ACTIVITY_DOMAIN_REG);
            return r && r[1] && r[2]
              ? this.getWZQActivityMappingUrl(e, o, r)
              : e;
          }),
          (e.prototype.getRealApiUrl = function (e, o) {
            if ((void 0 === o && (o = !1), "string" != typeof e)) return e;
            e = e && e.trim();
            var t = (0, E.parseUri)(e),
              n = t.hostname,
              r = t.pathname;
            return n && (this.grayTool.isGrayUser() || o)
              ? this.getRealUrl(e, n, r)
              : e;
          }),
          (e.prototype.setGray = function (e) {
            this.grayTool.setGray(e);
          }),
          (e.prototype.isGrayUser = function () {
            return this.grayTool.isGrayUser();
          }),
          (e.prototype.getAPIData = function () {
            return this.apiData;
          }),
          (e.prototype.updateAPIData = function (e) {
            this.domainCheck(e),
              (this.sqDomain = "group.".concat(this.domain)),
              (this.apiData = this.getMappingData(e, _.apiTplData));
          }),
          e
        );
      })();
    (t.initShyRequest = function (e) {
      if ("undefined" != typeof shy) {
        var o = shy.request;
        if (shy.isWrapped) return;
        (shy.request = function (t) {
          void 0 === t && (t = {}),
            e.isGrayUser() && (t.url = e.getRealApiUrl(t.url)),
            o.call(shy, t);
        }),
          (shy.isWrapped = !0);
      }
    }),
      (t.initLocation = function (e) {
        var o = {
          set href(o) {
            var t = o;
            e.isGrayUser() && (t = e.getRealApiUrl(t)), (location.href = t);
          },
          replace: function (o) {
            void 0 === o && (o = "");
            var t = o;
            e.isGrayUser() && (t = e.getRealApiUrl(t)), location.replace(t);
          },
        };
        window.$location = o;
      }),
      (t.default = q);
  })(t);
var M = new (e.getDefaultExportFromCjs(t))("tentrees.cn"),
  q = {
    online: {
      wzq: "".concat((location && location.origin) || "", "/"),
      mini: "https://wzq.tenpay.com/",
      zxg: "https://proxy.finance.qq.com/",
      web: "https://proxy.finance.qq.com/",
      qqmac: "https://proxy.finance.qq.com/",
    },
    preRelease: {
      wzq: "".concat((location && location.origin) || "", "/"),
      mini: "https://wzq.tenpay.com/",
      zxg: "https://preproxy.finance.qq.com/",
      web: "https://preproxy.finance.qq.com/",
      qqmac: "https://proxy.finance.qq.com/",
    },
    test: {
      wzq: "".concat((location && location.origin) || "", "/"),
      mini: "https://wzq.tenpay.com/",
      zxg: "https://testproxy.woa.com/",
      web: "https://testproxy.woa.com/",
      qqmac: "https://testproxy.woa.com/",
    },
    develop: {
      wzq: "".concat((location && location.origin) || "", "/"),
      zxg: "https://devzxg.finance.qq.com/",
      web: "https://devzxg.finance.qq.com/",
      qqmac: "https://devzxg.finance.qq.com/",
    },
  };
(exports.MODULE = {
  wzq: {
    COMPATIBLE_COMMENT: "group/newstockgroup/commentPlat/",
    MODULE_COMMENT: "cgi-bin/comment_plat.fcgi?action=",
    MODULE_COMMENT_NEXT: "group/newstockgroup/comment/",
    MODULE_USERINFO: "cgi-bin/userinfo.fcgi",
    MODULE_NEWS_COMMENT: "group/newstockgroup/rssNewsService/",
    MODULE_RSS_SERVICE: "group/newstockgroup/RssService/",
    MODULE_RSS_INDEX: "group/newstockgroup/RssService2/",
    MODULE_GROUP_USER: "group/newstockgroup/user/",
    MODULE_MESS_COUNT: "cgi/cgi-bin/messagebox/",
    MODULE_MESS_SERVICE: "group/newstockgroup/rssService/",
    MODULE_MESS_USER: "group/newstockgroup/user/",
    MODULE_MESS_SERVICE_INDEX: "group/newstockgroup/rssService2/",
    MODULE_MESS_WZQ: "group/newstockgroup/wzq/",
    MODULE_MESS_APP: "group/newstockgroup/RssSubject/",
    MODULE_ZIXUANGU: "newstock/stockapp/zixuanguweb/",
    MODULE_ACCOUNT_BIND: "cgi/cgi-bin/account/bind/",
  },
  mini: {
    COMPATIBLE_COMMENT: "group/newstockgroup/commentPlat/",
    MODULE_COMMENT: "cgi-bin/comment_plat.fcgi?action=",
    MODULE_COMMENT_NEXT: "group/newstockgroup/comment/",
    MODULE_USERINFO: "cgi-bin/userinfo.fcgi",
    MODULE_NEWS_COMMENT: "group/newstockgroup/rssNewsService/",
    MODULE_RSS_SERVICE: "group/newstockgroup/RssService/",
    MODULE_RSS_INDEX: "group/newstockgroup/RssService2/",
    MODULE_GROUP_USER: "group/newstockgroup/user/",
    MODULE_MESS_COUNT: "cgi/cgi-bin/messagebox/",
    MODULE_MESS_SERVICE: "group/newstockgroup/rssService/",
    MODULE_MESS_USER: "group/newstockgroup/user/",
    MODULE_MESS_SERVICE_INDEX: "group/newstockgroup/rssService2/",
    MODULE_MESS_WZQ: "group/newstockgroup/wzq/",
    MODULE_MESS_APP: "group/newstockgroup/RssSubject/",
    MODULE_ZIXUANGU: "newstock/stockapp/zixuanguweb/",
    MODULE_ACCOUNT_BIND: "cgi/cgi-bin/account/bind/",
  },
  zxg: {
    COMPATIBLE_COMMENT: "group/newstockgroup/RssService2/",
    MODULE_COMMENT: "group/newstockgroup/comment/",
    MODULE_COMMENT_NEXT: "group/newstockgroup/comment/",
    MODULE_RSS_SERVICE: "group/newstockgroup/RssService/",
    MODULE_NEWS_COMMENT: "group/newstockgroup/rssNewsService/",
    MODULE_RSS_INDEX: "group/newstockgroup/RssService2/",
    MODULE_GROUP_USER: "group/newstockgroup/user/",
    MODULE_MESS_COUNT: "cgi/cgi-bin/messagebox/",
    MODULE_MESS_SERVICE: "group/newstockgroup/rssService/",
    MODULE_MESS_USER: "group/newstockgroup/user/",
    MODULE_MESS_SERVICE_INDEX: "group/newstockgroup/rssService2/",
    MODULE_MESS_WZQ: "group/newstockgroup/wzq/",
    MODULE_MESS_APP: "group/newstockgroup/RssSubject/",
    MODULE_ZIXUANGU: "newstock/stockapp/zixuanguweb/",
    MODULE_ACCOUNT_BIND: "cgi/cgi-bin/account/bind/",
  },
  web: {
    COMPATIBLE_COMMENT: "group/newstockgroup/RssService2/",
    MODULE_COMMENT: "group/newstockgroup/comment/",
    MODULE_COMMENT_NEXT: "group/newstockgroup/comment/",
    MODULE_RSS_SERVICE: "group/newstockgroup/RssService/",
    MODULE_NEWS_COMMENT: "group/newstockgroup/rssNewsService/",
    MODULE_RSS_INDEX: "group/newstockgroup/RssService2/",
    MODULE_GROUP_USER: "group/newstockgroup/user/",
    MODULE_MESS_COUNT: "cgi/cgi-bin/messagebox/",
    MODULE_MESS_SERVICE: "group/newstockgroup/rssService/",
    MODULE_MESS_USER: "group/newstockgroup/user/",
    MODULE_MESS_SERVICE_INDEX: "group/newstockgroup/rssService2/",
    MODULE_MESS_WZQ: "group/newstockgroup/wzq/",
    MODULE_MESS_APP: "group/newstockgroup/RssSubject/",
    MODULE_ZIXUANGU: "newstock/stockapp/zixuanguweb/",
    MODULE_ACCOUNT_BIND: "cgi/cgi-bin/account/bind/",
  },
  qqmac: {
    COMPATIBLE_COMMENT: "group/newstockgroup/commentPlat/",
    MODULE_COMMENT: "group/newstockgroup/comment/",
    MODULE_COMMENT_NEXT: "group/newstockgroup/comment/",
    MODULE_RSS_SERVICE: "group/newstockgroup/RssService/",
    MODULE_NEWS_COMMENT: "group/newstockgroup/rssNewsService/",
    MODULE_RSS_INDEX: "group/newstockgroup/RssService2/",
    MODULE_GROUP_USER: "group/newstockgroup/user/",
    MODULE_MESS_COUNT: "cgi/cgi-bin/messagebox/",
    MODULE_MESS_SERVICE: "group/newstockgroup/rssService/",
    MODULE_MESS_USER: "group/newstockgroup/user/",
    MODULE_MESS_SERVICE_INDEX: "group/newstockgroup/rssService2/",
    MODULE_MESS_WZQ: "group/newstockgroup/wzq/",
    MODULE_MESS_APP: "group/newstockgroup/RssSubject/",
    MODULE_ZIXUANGU: "newstock/stockapp/zixuanguweb/",
    MODULE_ACCOUNT_BIND: "cgi/cgi-bin/account/bind/",
  },
}),
  (exports.apiManager = M),
  (exports.host = q);
