var t = require("../../../../../../@babel/runtime/helpers/typeof");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  i = require("../../../../../../common/vendor.js"),
  a = require("../../../st-wuji-sdk/mp.js"),
  n = {};
(e = n),
  Object.defineProperty(e, "__esModule", { value: !0 }),
  (e.SIGN_KEY = void 0),
  (e.SIGN_KEY = {
    stock: "EE530E7508AB5831978E6006381898E9",
    mpweapp: "B833418A24C7EC2E5A534348665B9B0C",
    mpwzq: "98FA47ACCCEC0A3C5A4768991E1D9113",
    h5: "98FA47ACCCEC0A3C5A4768991E1D9113",
    df: "34C0A93DF3AD73D4307E468317380146",
    zxgh5: "9c8e247b438b7d0ae845f9931810a387",
    wzq_snp: "15b3a7844a6d44115f4b52c8aa3cc36e",
    wzqxcx: "68cae00479351606086e78d754042961",
    mini_h5: "cedc068249f7041d474b638038b13b8f",
    light_h5: "5b566bb10c9999cf25c8e53127c075f4",
    i_ask: "E3164D66F12E3A29A8C08530215B4FD8",
    xuanji: "cf1f3fd583d54b656f67bf2ee4e939fa",
    wzq_analyse: "01d16d0a381fbda39775faa1dff16446",
    GUOSEN: "15c752a9e8b7d04d638ad229cbe084e2",
    ZHONGXINJIANTOU: "c65bb114387a9315e9ec0cf2764884d9",
    DAFENG: "9fbf6158eca46d1fe6eeb487abf9ce6b",
    xg: "7ad247390dafce0cf9911de0f2083eba",
    xg_default: "b300e565a394ffc70d82e6c37f37b219",
  }),
  (e.default = e.SIGN_KEY),
  n.SIGN_KEY.GUOSEN,
  n.SIGN_KEY.ZHONGXINJIANTOU,
  n.SIGN_KEY.DAFENG;
var o = {},
  r = {},
  c = {};
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
})(c),
  Object.defineProperty(r, "__esModule", { value: !0 });
var s = c,
  u = (function () {
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
          : location.hostname.includes(s.TENTREES_TEMP_DOMAIN);
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
r.default = u;
var p = {};
Object.defineProperty(p, "__esModule", { value: !0 }),
  (p.isWechat = p.isStockApp = p.isMiniapp = p.parseUri = void 0);
var m = c;
(p.parseUri = function (t) {
  var e = m.URI_REG.exec(t);
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
var f = {};
Object.defineProperty(f, "__esModule", { value: !0 }),
  (f.apiTplData = void 0),
  (f.apiTplData = {
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
var l = {};
Object.defineProperty(l, "__esModule", { value: !0 }),
  (l.reqWzqProxyToGu = l.reqTransformer = void 0);
var w = c;
l.reqTransformer = function (t) {
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
var d = [w.WZQ_DOMAIN, w.TENTREES_TEMP_DOMAIN],
  g = [w.CGI_BIN_PREFIX, w.CGI_SVR_PREFIX],
  q = function (t) {
    return d.some(function (e) {
      return t.includes(e);
    });
  },
  h = function (t) {
    return g.some(function (e) {
      return e === t;
    });
  };
(l.reqWzqProxyToGu = function () {
  return function (t, e) {
    if ((void 0 === e && (e = !1), !e)) {
      if ("undefined" == typeof window) return t;
      if (location.hostname !== w.GU_DOMAIN) return t;
    }
    var i = t.url,
      a = t.baseURL,
      n = i.match(w.PROXY_URL_REG),
      o = a.match(w.PROXY_URL_REG),
      r = (n && n[1]) || "",
      c = (n && n[2]) || "",
      s = (o && o[1]) || "",
      u = (o && o[2]) || "";
    if (q(r) && h(c)) {
      var p =
        c === w.CGI_BIN_PREFIX
          ? "".concat(w.GU_DOMAIN, "/wzq")
          : "".concat(w.GU_DOMAIN);
      return (t.url = t.url.replace(r, p)), t;
    }
    return q(s) && h(u)
      ? ((p =
          u === w.CGI_BIN_PREFIX
            ? "".concat(w.GU_DOMAIN, "/wzq")
            : "".concat(w.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(s, p)),
        t)
      : q(s) && h(c) && !r
      ? ((p =
          c === w.CGI_BIN_PREFIX
            ? "".concat(w.GU_DOMAIN, "/wzq")
            : "".concat(w.GU_DOMAIN)),
        (t.baseURL = t.baseURL.replace(s, p)),
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
      o =
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
      u = r,
      m = p,
      w = f,
      d = c;
    o(l, t),
      ((0, m.isMiniapp)() || "undefined" != typeof window) &&
        (s = a.require$$5.default);
    var g = { isGray: !1, useWuji: !1 },
      q = (function () {
        function t(t, e) {
          void 0 === t && (t = d.TENTREES_TEMP_DOMAIN),
            void 0 === e && (e = g),
            (this.apiData = {}),
            (this.domain = d.TENTREES_TEMP_DOMAIN),
            (this.sqDomain = ""),
            this.domainCheck(t),
            (this.sqDomain = "group.".concat(this.domain)),
            (this.apiData = this.getMappingData(t, w.apiTplData)),
            (this.grayTool = new u.default(e && e.isGray)),
            e && e.useWuji && (this.getCacheData(), this.getDynamicData());
        }
        return (
          (t.prototype.getCacheData = function () {
            if ("undefined" != typeof window) {
              var t = localStorage.getItem(d.DYNAMIC_RULE_KEY);
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
                        localStorage.setItem(d.DYNAMIC_RULE_KEY, o),
                          (t.apiData = e(e({}, t.apiData), r));
                      } catch (t) {}
                    else 1 !== n && localStorage.removeItem(d.DYNAMIC_RULE_KEY);
                  }
                })
                .catch(function (t) {});
          }),
          (t.prototype.domainCheck = function (t) {
            if (!(t = t && t.trim && t.trim()))
              throw new Error("请提供腾树域名");
            if (t.startsWith("www")) throw new Error("请提供不带www前缀的域名");
            if (!d.WHITE_DOMAINS.includes(t))
              throw new Error("请使用白名单域名：".concat(d.WHITE_DOMAINS));
            this.domain = t;
          }),
          (t.prototype.getMappingData = function (t, e) {
            var i = {};
            return (
              Object.keys(e).forEach(function (a) {
                var n = e[a];
                n.includes(d.PLACEHOLDER)
                  ? (i[a] = n.replace(
                      new RegExp("".concat(d.PLACEHOLDER), "g"),
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
            if (d.SQ_REG.test(i)) return this.getCommunityMappingUrl(t, e);
            if (a) return t.replace(e, a);
            var n = e.match(d.WZQ_ACTIVITY_DOMAIN_REG);
            return n && n[1] && n[2]
              ? this.getWZQActivityMappingUrl(t, e, n)
              : t;
          }),
          (t.prototype.getRealApiUrl = function (t, e) {
            if ((void 0 === e && (e = !1), "string" != typeof t)) return t;
            t = t && t.trim();
            var i = (0, m.parseUri)(t),
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
              (this.apiData = this.getMappingData(t, w.apiTplData));
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
      (t.default = q);
  })(o);
var _ = new (i.getDefaultExportFromCjs(o))("tentrees.cn");
function y(t) {
  return "string" == typeof t ? t.replace(/^(http|https):/, "https:") : t;
}
o.initShyRequest(_);
var D = {
  name: "videoPlayer",
  props: {
    itemData: { type: Object, require: !0, default: function () {} },
    showSubscribe: { type: Boolean, default: !1 },
    currentIndex: { type: Number, default: 0 },
    playStatus: { type: Boolean, default: !1 },
    didAgreeUserAgreement: { type: Boolean, default: !1 },
  },
  data: function () {
    return {
      test: !1,
      isMP: !0,
      playing: !1,
      playStartTime: 0,
      playerReady: !1,
      playDuration: 0,
      innerWidth: 0,
    };
  },
  components: {},
  computed: {
    richText: function () {
      var t = [],
        e = [],
        i = [];
      try {
        t = JSON.parse(this.itemData.summary).data;
      } catch (e) {
        t = [];
      }
      try {
        e = JSON.parse(this.itemData.label).data;
      } catch (t) {
        e = [];
      }
      return (
        (t = t
          .filter(function (t) {
            return "text" === t.type;
          })
          .reduce(function (t, e) {
            return t + e.desc;
          }, "")),
        e.forEach(function (t) {
          i.push({
            type: "text",
            value: "#".concat(t.desc, " "),
            className: "video-label",
          });
        }),
        t && i.push({ type: "text", value: t }),
        i
      );
    },
    videoTime: function () {
      var e = this.itemData,
        i = e.video_info,
        a = e.playTime,
        n = void 0 === a ? 0 : a,
        o = "";
      return (
        i &&
          ("object" == t(i)
            ? (o = i.video_time)
            : "string" == typeof i && (o = i.split("|")[1])),
        o && !isNaN(n) && (o -= n),
        o
      );
    },
    processValue: function () {
      var t = this.itemData,
        e = t.video_info,
        i = t.playTime,
        a = void 0 === i ? 0 : i;
      if (!a) return 0;
      var n = +e.video_time;
      return parseInt((a / n) * 100);
    },
    isHorizontalVideo: function () {
      var t = this.itemData.video_info;
      return +(void 0 === t ? {} : t).aspect > 1;
    },
    thumbImg: function () {
      return y(this.itemData.focus_img || this.itemData.thumb_img);
    },
    srcToHttps: function () {
      return y(this.itemData.media_icon_url);
    },
  },
  created: function () {
    this.calculateImgWidth();
  },
  methods: {
    formatNum: function (t) {
      return parseFloat(t) > 1e4
        ? "".concat((parseFloat(t) / 1e4).toFixed(2), "万")
        : t;
    },
    formatDate: function (t) {
      t = isNaN(t) ? 0 : t;
      var e = parseInt(t / 60),
        i = parseInt(t % 60);
      return ""
        .concat(e < 10 ? "0" : "")
        .concat(e, ":")
        .concat(i < 10 ? "0" : "")
        .concat(i);
    },
    calculateImgWidth: function () {
      var t = this;
      this.isMP
        ? i.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#content")
            .boundingClientRect(function (e) {
              t.innerWidth = Math.round(e.width);
            })
            .exec()
        : (this.innerWidth = this.$refs.content.offsetWidth);
    },
    togglePlayStatus: function (t) {
      (this.itemData.played = !0),
        this.$emit("playVideo", { data: this.itemData, action: t });
    },
    tapDetail: function (t) {
      switch (t) {
        case "like":
          this.$emit(
            "dataReport",
            "information.videodetail.video_" +
              (this.itemData.like_flag ? "unlike" : "like")
          );
          break;
        case "comment":
          this.$emit("dataReport", "information.videodetail.video_comment");
          break;
        case "turn":
          this.$emit("dataReport", "information.videodetail.video_turn");
          break;
        case "subscribe":
          this.$emit(
            "dataReport",
            "information.videodetail.video_media_" +
              (this.itemData.is_subscribed ? "unSubscribe" : "subscribe")
          );
      }
      this.$emit("tapDetail", { action: t, data: this.itemData });
    },
    handleSliderChange: function (t) {
      isNaN(t) && (t = 0);
      var e = this.itemData.video_info;
      this.itemData.playTime = parseInt((+e.video_time * t) / 100);
    },
    handleSliderDrag: function () {
      this.$emit("seekTime", { data: this.itemData, action: "play" });
    },
  },
};
Array || i.resolveComponent("vue-slider")();
var v = i._export_sfc(D, [
  [
    "render",
    function (t, e, a, n, o, r) {
      return i.e(
        {
          a: "url(" + r.thumbImg + ")",
          b: i.o(function (t) {
            return r.togglePlayStatus("play");
          }, 3178),
          c: a.playStatus ? "none" : "block",
          d: !o.isMP,
        },
        o.isMP
          ? {}
          : {
              e: i.t(r.formatDate(a.itemData.playTime)),
              f: i.o(r.handleSliderChange, 3179),
              g: i.o(r.handleSliderDrag, 3180),
              h: i.p({ value: r.processValue, height: "2px", tooltip: "none" }),
              i: i.t(r.formatDate(r.videoTime)),
              j: !a.playStatus && a.itemData.played ? "flex" : "none",
            },
        {
          k: i.o(function (t) {
            return r.togglePlayStatus("pause");
          }, 3181),
          l: r.srcToHttps,
          m: i.t(a.itemData.media_name),
          n: a.showSubscribe,
        },
        a.showSubscribe
          ? {
              o: i.n(a.itemData.is_subscribed ? "followed" : ""),
              p: i.o(function (t) {
                return r.tapDetail("subscribe");
              }, 3182),
            }
          : {},
        { q: i.t(a.itemData.news_title), r: r.richText.length },
        r.richText.length
          ? {
              s: i.f(r.richText, function (t, e, a) {
                return { a: i.t(t.value), b: e, c: i.n(t.className) };
              }),
            }
          : {},
        {
          t: i.n(a.itemData.like_flag ? "likeed" : ""),
          v: a.itemData.like_num,
        },
        a.itemData.like_num ? { w: i.t(a.itemData.like_num) } : {},
        {
          x: i.o(function (t) {
            return r.tapDetail("like");
          }, 3183),
          y: a.itemData.comment_num,
        },
        a.itemData.comment_num
          ? { z: i.t(r.formatNum(a.itemData.comment_num)) }
          : {},
        {
          A: i.o(function (t) {
            return r.tapDetail("comment");
          }, 3184),
          B: o.isMP && !a.didAgreeUserAgreement,
        },
        o.isMP && !a.didAgreeUserAgreement
          ? {
              C: i.o(function (t) {
                return r.tapDetail("turn");
              }, 3185),
            }
          : {
              D: i.o(function (t) {
                return r.tapDetail("turn");
              }, 3186),
            },
        { E: i.n(r.isHorizontalVideo ? "" : "video-item-bg") }
      );
    },
  ],
  ["__scopeId", "data-v-e446f01d"],
]);
wx.createComponent(v);
