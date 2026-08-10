require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  r = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, t) {
    for (var i in t || (t = {})) a.call(t, i) && r(e, i, t[i]);
    if (o) {
      var c,
        l = n(o(t));
      try {
        for (l.s(); !(c = l.n()).done; ) {
          i = c.value;
          s.call(t, i) && r(e, i, t[i]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  l = function (e, t, n) {
    return new Promise(function (i, o) {
      var a = function (e) {
          try {
            r(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            r(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        r = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(a, s);
        };
      r((n = n.apply(e, t)).next());
    });
  },
  u = require("../../../../../../common/vendor.js");
require("../../../../js-cookie/src/js.cookie.js");
var d = require("../../../../@ungap/url-search-params/esm/index.js"),
  p = require("../../../stock-news-core/utils/newsParser.js"),
  h = require("../../../stock-news-core/config/wuji.js"),
  w = require("../../../stock-news-core/utils/report.js"),
  f = require("../../../stock-news-core/utils/shy/index.js"),
  g = require("../../../stock-news-core/utils/bus.js"),
  v = require("../../../stock-news-core/utils/request/index.js"),
  m = require("../../../stock-news-core/utils/tools.js"),
  k = require("../../../stock-live-combine/api/index.js"),
  x = require("../../../stock-news-core/utils/apiMapping.js"),
  b = require("../../../stock-news-sdk/index.js"),
  y = require("../../../stock-news-base/service/news/gray.js"),
  T = require("../../../stock-news-base/service/news/apis/queryEntryList.js"),
  _ = b.sdk.hasBindBrokerAccount,
  P = "information_scroll_top",
  S = "news_detail_zwwb_subscribe_wxmsg_key",
  C = ["p", "pt", "ph", "pu"],
  I = 0,
  q = {
    options: { styleIsolation: "shared" },
    name: "NewsTemplate",
    components: {
      RenderContent: function () {
        return "./components/RenderContent.js";
      },
      RenderContentMp: function () {
        return "./components/RenderContentMp.js";
      },
      PlateTemplate: function () {
        return "./components/PlateTemplate.js";
      },
      ViewportModule: function () {
        return "../../../../../newsSbg/@tencent/stock-news-core/components/viewportModule.js";
      },
      VideoPlayer: null,
      Live: function () {
        return "./components/h5Live/index.js";
      },
      mpLive: function () {
        return "./components/mpLive.js";
      },
      voteMain: null,
      LiveCard: function () {
        return "../../../../../live/@tencent/stock-live-combine/component/LiveCard.js";
      },
      SubscribeWxMsgBar: function () {
        return "../../../../../live/@tencent/stock-live-detail/components/SubscribeWxMsgBar.js";
      },
      NewsImage: function () {
        return "./components/NewsImage.js";
      },
    },
    inject: {
      isFullTeach: { value: "isFullTeach" },
      isSharePage: { value: "isSharePage" },
      stockBridge: { value: "stockBridge", default: {} },
      isNewZxgMp: { type: Boolean, default: !1 },
      tradeFunc: {
        type: Object,
        default: function () {
          return {};
        },
      },
      mainPathReporter: { default: null },
      premoteMixin: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    props: {
      speechable: { type: Boolean, default: !0 },
      newsId: { type: String, default: "" },
      snpContent: {
        type: [Array, Object],
        default: function () {
          return [];
        },
      },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      clickable: { type: Boolean, default: !0 },
      withoutParse: { type: Boolean, default: !1 },
      theme: { type: String, default: "blue" },
      publishTime: { type: Number, default: 0 },
      copyable: { type: Boolean, default: !0 },
    },
    watch: {
      snpContent: {
        handler: function (e, t) {
          var n = this;
          if (e !== t) {
            Array.isArray(e)
              ? (this.newsContent = e.map(function (e) {
                  return n.withoutParse ? e : p.newsParser(e);
                }))
              : (this.newsContent = [this.withoutParse ? e : p.newsParser(e)]),
              (this.newsContent = this.newsContent.filter(function (e) {
                return !!e;
              }));
            var i = [];
            this.newsContent.forEach(function (e, t) {
              if (
                (((e && e.moduleInfo) || "plate" === e.type) &&
                  n.moduleKeys.push(t),
                "text" === e.type)
              ) {
                var o = e.content.filter(function (e) {
                  return e.textType === p.TEXT_TYPE_ENUM.FUNC;
                });
                (i = i.concat(o)),
                  (n.accountTextFlag =
                    n.accountTextFlag ||
                    !!e.content.find(function (e) {
                      return (
                        e.textType === p.TEXT_TYPE_ENUM.URL &&
                        e.clickParams.url.includes(
                          "https%3A%2F%2Fwzq.tenpay.com%2Fmp%2Fv2%2Findex.html%23%2Fapply%2Findex"
                        )
                      );
                    }));
              }
              14 == +e.type && n.showRMZB && (n.showLiveFlag = !0);
            }),
              this.addFavGrayShow(),
              this.$nextTick(function () {
                n.getLocation();
              }),
              i &&
                i.length &&
                w.report("news.newsdetail.nlp_recognition_functions", {
                  newsid: this.newsId,
                  count: i.length,
                });
          }
        },
        immediate: !0,
      },
      $route: function (e) {
        "informationDetail" === e.name &&
          "/information/detail" === e.path &&
          this.addFavGrayShow();
      },
    },
    computed: {
      checkWzqMP: function () {
        return !1;
      },
      isRealMP: function () {
        return !0;
      },
      accountOpeningFlag: function () {
        return !1;
      },
      showRMZB: function () {
        return !this.isMP;
      },
      getNationalDebtChannelId: function () {
        return "";
      },
      mpStyleObj: function () {
        return "width: "
          .concat(this.windowWidth - 30, "px; height: ")
          .concat((this.windowWidth - 30) / 1.78, "px");
      },
      styleObj: function () {
        return { width: 0, height: 0 };
      },
      newsVdStyleObj: function () {
        return { width: 0, height: 0 };
      },
    },
    data: function () {
      return {
        windowWidth: this.getWindowWidth(),
        newsContent: [],
        TEXT_TYPE_ENUM: p.TEXT_TYPE_ENUM,
        isMP: !0,
        isWZQ: !1,
        isAPP: !1,
        isH5Lite: m.isH5Lite(),
        stocksAddStatus: [],
        stocksAddStatusFinish: !1,
        accountOpenFlag: !1,
        moduleKeys: [],
        accountFlag: !1,
        accountTextFlag: !1,
        isTeachShow: !1,
        teachText: "",
        techId: "",
        showLiveFlag: !1,
        showSubscribeBanner: !1,
        hasSubscribed: !1,
        imageFailList: {},
        playPercent: 0,
      };
    },
    created: function () {
      return l(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), _(this);
                  case 2:
                    this.accountOpenFlag = !e.sent;
                  case 3:
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
    beforeDestroy: function () {},
    mounted: function () {
      this.$nextTick(function () {
        g.BUS.$emit("accountDom");
      });
    },
    deactivated: function () {
      this.pauseVideo();
    },
    methods: {
      getWindowWidth: function () {
        return void 0 !== u.wx$1
          ? (
              (u.wx$1.getWindowInfo && u.wx$1.getWindowInfo()) ||
              u.wx$1.getSystemInfoSync()
            ).windowWidth
          : 375;
      },
      onResize: function () {
        this.windowWidth = this.getWindowWidth();
      },
      isWebViewMp: function () {
        return m.envUtil.isMPWebView(this.stockBridge);
      },
      checkSepHeight: function (e) {
        var t,
          n = this.newsContent[e];
        if (
          (e + 1 < this.newsContent.length && (t = this.newsContent[e + 1]),
          !n || !t)
        )
          return "sep-none";
        var i = "sep-36",
          o = n.type,
          a = n.tagClass,
          s = t,
          r = s.type,
          c = s.tagClass;
        switch (o) {
          case "text":
            "news-normal" === a && "text" === r && (i = "sep-44");
            break;
          case "text-quote":
            "text" === r && "text-h1" === c && (i = "sep-44");
            break;
          case "image":
            if (n.link && this.isAccountLink(n.link)) return "sep-none";
            (("text" === r && "text-h1" === c) || "image" === r) &&
              (i = "sep-44");
            break;
          case "module":
            if (n.moduleInfo && n.moduleInfo.length > 0) {
              var l = n.moduleInfo,
                u = l[2],
                h = new d.URLSearchParams(l[5]),
                w = h && h.get("moduleStatus");
              if (
                (u === p.MODULE_TYPE_ENUM.MINS_CHART ||
                  u === p.MODULE_TYPE_ENUM.KLINE_CHART) &&
                1 === w
              )
                return "sep-none";
            }
            "text" === r && "text-h1" === c && (i = "sep-44");
            break;
          case "vote":
            i = "sep-none";
            break;
          case "live":
            i = "sep-44";
        }
        return i;
      },
      wxChannelCheckValid: function (e) {
        return !(
          void 0 === e.thumb_img ||
          null === e.thumb_img ||
          e.thumb_img.length <= 0 ||
          !(e.id && e.id.length > 0)
        );
      },
      checkAppLogin: function () {
        return new Promise(function (e) {
          f.shy.getUserInfo(function (t) {
            e(t && "none" !== t.type);
          });
        });
      },
      hanldePickVote: function () {
        w.report("news.newsdetail.vote_module_click", {});
      },
      pauseVideo: function () {
        this.$refs.liveWrap &&
          Array.isArray(this.$refs.liveWrap) &&
          this.$refs.liveWrap.forEach(function (e) {
            e && e.pauseVideo && e.pauseVideo();
          });
      },
      getUserinfoKh: function () {
        var e = this;
        f.shy.getUserInfo(function (t) {
          t &&
            "none" !== t.type &&
            f.shy.request({
              url: "https://wzq.tenpay.com/cgi-bin/zt_getbound.fcgi",
              method: "GET",
              success: function (t) {
                var n = JSON.parse(t.data);
                n &&
                  "0" === n.retcode &&
                  (n.has_bind && n.has_bind.length > 0
                    ? ((e.accountOpenFlag = !1),
                      f.shy.setStorage("image_link_status", {
                        accountOpenFlag: e.accountOpenFlag,
                        time: new Date().getTime(),
                      }))
                    : (e.accountOpenFlag = !0));
              },
            });
        });
      },
      viewReportShow: function (e) {
        var t, n, i;
        return (
          e && ((t = e[2]), (n = new d.URLSearchParams(e[3]))),
          (t !== p.MODULE_TYPE_ENUM.MINS_CHART &&
            t !== p.MODULE_TYPE_ENUM.KLINE_CHART) ||
            (i = { 0: "sz", 1: "sh", 2: "hk", 3: "us", fu: "fu", bj: "bj" }[
              n.get("market")
            ]),
          !i || "bj" !== i
        );
      },
      addFavGrayShow: function () {
        var e = this,
          t = this.getViewportStockIds();
        t &&
          h
            .getConfigGray({
              appid: "news",
              schemaid: "abtesting",
              rowid: "633148006e833e7f76846ba4",
              key: "addFav",
            })
            .then(function (n) {
              n && e.getStocksAddStatus(t);
            })
            .catch(function (e) {});
      },
      getViewportStockIds: function () {
        var e = this,
          t = {
            0: "sz",
            1: "sh",
            2: "hk",
            3: "us",
            fu: "fu",
            bj: "bj",
            fx: "fx",
            p: "pt",
            pt: "pt",
          };
        return this.newsContent
          .map(function (n) {
            var i,
              o,
              a,
              s,
              r = n.type,
              c = n.moduleInfo;
            if ("module" !== r && "plate" !== r) return null;
            if (
              (c && ((i = c[2]), (o = new d.URLSearchParams(c[3]))),
              (i !== p.MODULE_TYPE_ENUM.MINS_CHART &&
                i !== p.MODULE_TYPE_ENUM.KLINE_CHART) ||
                (s =
                  (void 0 === t[o.get("market")]
                    ? o.get("market")
                    : t[o.get("market")]) + o.get("scode")),
              i === p.MODULE_TYPE_ENUM.PLATE_TABLE || "plate" === r)
            ) {
              var l = (a = "plate" === r ? n.id : o.get("plateId"));
              a.includes("-") && (l = a.split("-")[0]);
              var u = e.getPlateInfo(l),
                h = u.stockCode;
              s = u.plateMarket + h;
            }
            return (n.stockId = s), s;
          })
          .filter(function (e) {
            return !!e;
          })
          .join(",");
      },
      getPlateInfo: function (e) {
        var t = e.replace("pt", ""),
          n = "200",
          i = "pt",
          o = "hs";
        return (
          e.startsWith("ph") &&
            ((n = "400"), (i = "ph"), (o = "hk"), (t = t.replace("ph", ""))),
          e.startsWith("pu") &&
            ((n = "601"), (i = "pu"), (o = "us"), (t = t.replace("pu", ""))),
          { stockCode: t, appPlate: n, plateMarket: i, market: o }
        );
      },
      getStocksAddStatus: function (e) {
        return l(
          this,
          null,
          t().mark(function n() {
            var i, o, a, s, r, c, l;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (i = this.getParams()),
                        (o = i.app),
                        (a = i.openId),
                        (s = i.fsKey),
                        (r = i.check),
                        (c =
                          "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd?stocks="
                            .concat(e, "&app=")
                            .concat(o, "&appid=wx9cf8c670ebd68ce4&check=")
                            .concat(r, "&openid=")
                            .concat(a, "&fskey=")
                            .concat(s)),
                        (t.prev = 1),
                        (t.next = 4),
                        v.request(c, {}, { method: "get", isShowToast: !1 })
                      );
                    case 4:
                      (l = t.sent) &&
                        0 === l.code &&
                        l.data &&
                        ((this.stocksAddStatus = l.data),
                        (this.stocksAddStatusFinish = !0)),
                        (t.next = 10);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t.catch(1));
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[1, 8]]
            );
          })
        );
      },
      getParams: function () {
        var e, t, n;
        return (
          void 0 !== u.wx$1 &&
            ((e = "zxg_xcx"),
            (t = u.wx$1.getStorageSync("_qluin")),
            (n = u.wx$1.getStorageSync("_qlskey"))),
          { app: e, openId: t, fsKey: n, check: 11 }
        );
      },
      handleTech: function (e) {
        if (this.clickable && e && e.teachId) {
          w.report("news.detail.full_teach_toast", {});
          var t = e.teachId.split("-").pop();
          this.showTeachTips(t);
        }
      },
      goToNews: function (e) {
        var t, n, i, o;
        if (this.clickable && e)
          if (this.isMP)
            if (/^ZT/.test(e.id)) {
              var a = {
                url: "/pages/newsCon/topic/main?id=".concat(
                  e.id.replace("ZT:", "")
                ),
              };
              void 0 !== u.wx$1 && u.wx$1.navigateTo
                ? u.wx$1.navigateTo(a)
                : null ==
                    (n =
                      null == (t = null == window ? void 0 : window.wx)
                        ? void 0
                        : t.miniProgram) || n.navigateTo(a);
            } else {
              var s = {
                url: "/pages/newsCon/newsDetail/main?id=".concat(e.id),
              };
              void 0 !== u.wx$1 && u.wx$1.navigateTo
                ? u.wx$1.navigateTo(s)
                : null ==
                    (o =
                      null == (i = null == window ? void 0 : window.wx)
                        ? void 0
                        : i.miniProgram) || o.navigateTo(s);
            }
          else {
            var r;
            (r = /^LV/.test(e.id)
              ? "https://gu.qq.com/resources/shy/news/live/index.html#/detail?live_news_id=".concat(
                  e.id
                )
              : /^ZT/.test(e.id)
              ? "https://gu.qq.com/resources/shy/news/subject/index.html#/index?id=".concat(
                  e.id.replace("ZT:", "")
                )
              : "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?id=".concat(
                  e.id
                )),
              f.shy.navigateTo({ url: r }),
              w.report("news_article_link_click", { newsid: this.newsId });
          }
      },
      goToFunctions: function (e) {
        this.clickable;
      },
      goToStock: function (e) {
        var t, n, i, o, a, s, r, c, l;
        if (this.clickable && e) {
          var d = e.stockId,
            p = e.stockCode,
            h = e.market,
            g = (e.isUSIndex, e.name);
          this.newsId;
          var v =
              null !=
              (t = {
                sz: 0,
                sh: 1,
                hk: 2,
                us: 3,
                bj: "bj",
                pt: "p",
                ph: "ph",
                pu: "pu",
                fu: "fu",
                ft: "ft",
                cs: "cs",
              }[h])
                ? t
                : h,
            m = "",
            k = "";
          if (e.market)
            switch (e.market) {
              case "p":
              case "pt":
                (m = "hs"), (k = "200");
                break;
              case "ph":
                (m = "hk"), (k = "400");
                break;
              case "pu":
                (m = "us"), (k = "601");
            }
          var x = null != (n = getCurrentPages()) ? n : [],
            b = x[x.length - 2];
          if (b && "pages/quote/quote" === b.route) {
            var y = null != (i = b.options) ? i : {},
              T = y.scode,
              _ = y.market;
            if (T === p && String(_) === String(v))
              return void (
                void 0 !== u.wx$1 &&
                u.wx$1.navigateBack &&
                u.wx$1.navigateBack()
              );
          }
          if (this.isMP) {
            if (k)
              if ("hs" === m) {
                var P = { url: "/pages/quote/quote?market=p&scode=".concat(p) };
                void 0 !== u.wx$1 && u.wx$1.navigateTo
                  ? u.wx$1.navigateTo(P)
                  : null ==
                      (a =
                        null == (o = null == window ? void 0 : window.wx)
                          ? void 0
                          : o.miniProgram) || a.navigateTo(P);
              } else {
                var S = {
                  url: "/pages/hq/detail/main?plate="
                    .concat(k, "&code=")
                    .concat(p),
                };
                this.isNewZxgMp &&
                  (S.url = "/pages/market/pages/PlateList?plate="
                    .concat(k, "&code=")
                    .concat(p, "&name=")
                    .concat(null != g ? g : "")),
                  void 0 !== u.wx$1 && u.wx$1.navigateTo
                    ? u.wx$1.navigateTo(S)
                    : null ==
                        (r =
                          null == (s = null == window ? void 0 : window.wx)
                            ? void 0
                            : s.miniProgram) || r.navigateTo(S);
              }
            else {
              if ("bj" === h) return;
              var C = {
                url: "/pages/quote/quote?market="
                  .concat(v, "&scode=")
                  .concat(p),
              };
              void 0 !== u.wx$1 && u.wx$1.navigateTo
                ? u.wx$1.navigateTo(C)
                : null ==
                    (l =
                      null == (c = null == window ? void 0 : window.wx)
                        ? void 0
                        : c.miniProgram) || l.navigateTo(C);
            }
            w.report("news.mini.detail.stockClick", {
              newsid: this.newsId,
              stockid: d,
            });
          } else {
            var I,
              q = null == navigator ? void 0 : navigator.userAgent;
            (I = e.market
              ? /MicroMessenger/.test(q)
                ? "https://wzq.tenpay.com/mp/v2/index.html#/plate/"
                    .concat(k, "/detail/?plateId=")
                    .concat(p)
                : "hk" === m || "us" === m
                ? "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://plateList/"
                    .concat(h.toUpperCase(), "/")
                    .concat(p, "/")
                    .concat(g)
                : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                    d,
                    "/"
                  )
              : /MicroMessenger/.test(q)
              ? "https://wzq.tenpay.com/mp/v2/index.html#/hq/stock/"
                  .concat(this.getMarket(d), "/")
                  .concat(d.substr(2))
              : "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://detailstock/".concat(
                  d,
                  "/"
                )),
              f.shy.navigateTo({ url: I }),
              this.appClickReport(e.stockId, h, g);
          }
        }
      },
      tdGoToStock: function (t) {
        var n = e(t.text, 2),
          i = n[0],
          o = n[1];
        i && i.textType === p.TEXT_TYPE_ENUM.STOCK
          ? this.goToStock(i.clickParams)
          : o &&
            o.textType === p.TEXT_TYPE_ENUM.STOCK &&
            this.goToStock(o.clickParams);
      },
      goToUrl: function (e) {
        if (this.clickable && !this.isMP && e) {
          var t = decodeURIComponent(e.url.replace("qqstock://news/", ""));
          this.isAccountLink(t),
            (t = x.apiManager.getRealApiUrl(t)),
            f.shy.navigateTo({ url: t }),
            w.report("news_article_link_click", { newsid: this.newsId });
        }
      },
      wzqKeepPos: function () {
        if (this.newsId && this.wzqConfig) {
          var e = this.wzqConfig.Helper;
          try {
            var t =
                document.documentElement.scrollTop || document.body.scrollTop,
              n = e.getStorageSync(P) || {};
            (n[this.newsId] = t), e.setStorageSync(P, n);
          } catch (e) {}
        }
      },
      appClickReport: function (e, t, n) {
        if (e) {
          var i = "";
          C.some(function (t) {
            return e.startsWith(t);
          }) && (i = "news.newsdetail.news_article_pt_click"),
            e.startsWith("jj") &&
              (i = "news.newsdetail.news_article_fund_click"),
            e.startsWith("fx") && (i = "news.newsdetail.exchange_click"),
            e.startsWith("ft") &&
              (i = "news.newsdetail.global_market_index_click"),
            e.startsWith("fu") && (i = "news.newsdetail.feature_click"),
            e.startsWith("us.") &&
              (i = "news.newsdetail.us_market_index_click"),
            e.startsWith("uk") && (i = "news.newsdetail.uk_stock_click"),
            i && w.report(i, { newsid: this.newsId, stockid: e });
        } else e = "";
        n
          ? w.report("news_article_stock_click", {
              newsid: this.newsId,
              name: n,
              stockid: e,
            })
          : w.report("news_article_stock_click", {
              newsid: this.newsId,
              stockid: e,
            });
      },
      getMarket: function (e) {
        return ["sz", "sh", "hk", "us"].indexOf(e.substr(0, 2));
      },
      wxVdClick: function (e, t) {
        var n = this;
        t.stopPropagation(),
          void 0 !== u.wx$1 &&
            u.wx$1.openChannelsActivity &&
            u.wx$1.openChannelsActivity({
              finderUserName: "sphuipa4ZTp6ycb",
              feedId: e.id,
              success: function () {
                w.report("news.newsdetail.video.wxchannels.click", {
                  newsid: n.newsId,
                });
              },
              fail: function () {
                w.report("news.newsdetail.video.wxchannels.fail", {
                  newsid: n.newsId,
                });
              },
            });
      },
      onTvpPlay: function () {
        w.report("xcx.info.detail.video.click", {});
      },
      picVideo: function () {
        this.isMP ||
          (w.report("news.newspage.video.play_tap", { newsid: this.newsId }),
          this.wzqConfig.stat.click("info.detail.video.tap"));
      },
      showMore: function () {
        f.shy.navigateTo({
          url: "https://dlied5.qq.com/zixuangu/pkg/zixuangu/jumpPage_browser.html?url=qqstock://GotoAppLocation?info=%7B%22path%22%3A%22newstab%2Fstock_video_v2%22%2C%22p_showNav%22%3Afalse%7D",
        });
      },
      showMoreLive: function (e) {
        if (
          (w.report("news.putongwenzhang_cidengye.go_live_square", {
            newsid: e,
          }),
          this.isWZQ)
        )
          return (
            this.wzqConfig.stat.click(
              "news.detail.go_live_square",
              void 0,
              void 0,
              { newsid: e }
            ),
            void this.wzqConfig.Helper.navigateTo("/information/liveList")
          );
        var t = {
          url: "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(
              "https://wzq.tenpay.com/mp/v2/index.html#/information/liveList"
            )
          ),
        };
        void 0 !== u.wx$1 && u.wx$1.navigateTo
          ? u.wx$1.navigateTo(t)
          : window &&
            window.wx &&
            window.wx.miniProgram &&
            window.wx.miniProgram.navigateTo(t);
      },
      formatImage: function (e) {
        return m.formatImage(e);
      },
      onDurationChange: function (e) {
        var t = e.process;
        this.playPercent = !t || isNaN(t) ? 0 : t.toFixed(6);
      },
      onPlayStatusChange: function (e) {
        switch (e.status) {
          case "playing":
            w.report("news.newspage.video.play_click", { newsid: this.newsId }),
              this.wzqConfig.stat.click("info.detail.video.click"),
              (I = Date.now());
            break;
          case "pause":
            w.report("news.newspage.video.playtime_click", {
              stay_time: Date.now() - I,
              newsid: this.newsId,
              playPercent: this.playPercent,
            }),
              this.wzqConfig.stat.click(
                "info.detail.video.playtime",
                void 0,
                void 0,
                { stay_time: Date.now() - I, newsid: this.newsId }
              );
        }
      },
      getLocation: function () {
        if (!this.isMP) {
          var e = location.hash,
            t = new d.URLSearchParams(e).get("anchorTitle");
          if (t) {
            var n = Array.from(document.querySelectorAll(".text-h1"));
            n &&
              n.map(function (e, i) {
                (e.innerText === t || e.innerText === decodeURIComponent(t)) &&
                  n[i].scrollIntoView(!0);
              });
          }
        }
      },
      loadImage: function (e, t) {},
      loadImageError: function (e, t) {
        var n,
          i = t.url;
        (this.imageFailList[i] = !0),
          this.$forceUpdate(),
          null == (n = this.mainPathReporter) || n.check("news-image-error", i);
      },
      reportPlayLive: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (w.report("news.putongwenzhang_cidengye.live_play_click", {
            newsid: e,
          }),
          t.isNoSource)
        ) {
          var n = 21 === t.status ? "直播即将开始，请稍后" : "回看在路上";
          f.shy.showToast("top", n, function () {});
        }
      },
      reportPauseLive: function (e) {},
      gotoLiveDetail: function (e) {},
      cancelTeachTip: function () {
        this.goTeach(), (this.isTeachShow = !1);
      },
      goTeach: function () {
        w.report("news.detail.full_teach_toast_index", {
          newsId: this.newsId,
          techId: this.techId,
        }),
          this.stockBridge.openExtraWebview(
            "https://wzq.tenpay.com/zxgweb/fullTeach/#/"
          );
      },
      showTeachTips: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return l(
          this,
          null,
          t().mark(function n() {
            var i, o, a, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.teachText = ""),
                        (this.techId = e),
                        (i = null),
                        (o = { newsId: this.newsId, techId: this.techId }),
                        (t.prev = 3),
                        (t.next = 6),
                        y.isNewsGrayUser("queryEntryList")
                      );
                    case 6:
                      if (!t.sent) {
                        t.next = 12;
                        break;
                      }
                      return (t.next = 9), T.queryEntryList({ item_ids: e });
                    case 9:
                      (i = t.sent), (t.next = 17);
                      break;
                    case 12:
                      return (
                        (a =
                          "https://snp.tenpay.com/cgi/cgi-bin/snp/investorEdu/eduEntry/getItem?itemID=".concat(
                            e
                          )),
                        (t.next = 15),
                        v.request(a, {}, { method: "get", isShowToast: !1 })
                      );
                    case 15:
                      (i = t.sent), (i = T.adaptQueryEntryListResp(i));
                    case 17:
                      t.next = 21;
                      break;
                    case 19:
                      (t.prev = 19), (t.t0 = t.catch(3));
                    case 21:
                      (s = null),
                        i &&
                          0 === i.code &&
                          i.items.map(function (e) {
                            1 === e.display && (s = e);
                          }),
                        s &&
                          ("#3077EC",
                          void 0 !== u.wx$1 &&
                            u.wx$1.showModal &&
                            u.wx$1.showModal({
                              title: s.title,
                              content: s.content,
                              showCancel: !0,
                              cancelText: "词条百科",
                              cancelColor: "#3077EC",
                              confirmText: "我知道了",
                              confirmColor: "#3077EC",
                              success: function (e) {
                                if (e.cancel) {
                                  w.report(
                                    "news.detail.full_teach_toast_index",
                                    o
                                  );
                                  u.StockBridge.openExtraWebview(
                                    "https://wzq.tenpay.com/zxgweb/fullTeach/#/"
                                  );
                                }
                              },
                            }));
                    case 24:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [[3, 19]]
            );
          })
        );
      },
      showToast: function (e) {
        f.shy.showToast("top", e, function () {});
      },
      updateBannerStatus: function () {
        this.showLiveFlag &&
          (this.updateSubscribeBannerShow(),
          this.showSubscribeBanner && this.getSubcribeStatus());
      },
      updateSubscribeBannerShow: function () {
        var e = localStorage.getItem(S);
        this.showSubscribeBanner = null == e;
      },
      closeSubscribeBar: function () {
        localStorage.setItem(S, !0),
          this.$root.$emit(S),
          (this.showSubscribeBanner = !1);
      },
      onSubscribe: function () {
        var e = this;
        if (this.hasSubscribed) {
          var t = { id: "LC2022122300000000000000", date: Date.now() };
          setTimeout(function () {
            e.$router.push({ path: "/information/liveCombine", query: t });
          }, 10);
        } else {
          k.requestUsersetting({ subscribe: "livenotice" })
            .then(function () {
              (e.hasSubscribed = !e.hasSubscribed),
                e.showToast("已开启微信通知");
            })
            .catch(function (e) {});
        }
      },
      getSubcribeStatus: function () {
        var e = this;
        k.requestUsersetting({ querysub: "livenotice" })
          .then(function (t) {
            var n = t.retcode,
              i = t.livenotice,
              o = void 0 === i ? {} : i;
            0 == +n && (e.hasSubscribed = 1 == +o.switch);
          })
          .catch(function (e) {});
      },
      handleTapLiveCard: function (e) {
        this.wzqConfig.stat.click(
          "news.detail.go_live_detail",
          void 0,
          void 0,
          { newsid: e.data.id }
        ),
          this.wzqConfig.Helper.navigateTo(
            "/information/liveDetail?id=".concat(e.data.id)
          );
      },
      onReserveOne: function (e) {
        var t,
          n,
          i,
          o,
          a = {};
        20 ===
          (null == (t = null == e ? void 0 : e.extra_info)
            ? void 0
            : t.live_status) &&
        1 ===
          (null == (n = null == e ? void 0 : e.extra_info)
            ? void 0
            : n.reserve_flag)
          ? (a = { event: "cancel_reverse", liveIds: e.id })
          : 20 ===
              (null == (i = null == e ? void 0 : e.extra_info)
                ? void 0
                : i.live_status) &&
            2 ===
              (null == (o = null == e ? void 0 : e.extra_info)
                ? void 0
                : o.reserve_flag) &&
            (a = { event: "reverse", liveIds: e.id }),
          this.doReverse(a);
      },
      doReverse: function (e) {
        return l(this, arguments, function (e) {
          var n = this,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return t().mark(function o() {
            var a, s;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((a = e.event), (s = e.liveIds), (t.t0 = a && s), !t.t0)
                    ) {
                      t.next = 12;
                      break;
                    }
                    if ("reverse" !== a) {
                      t.next = 8;
                      break;
                    }
                    return (t.next = 6), n.reserveLives(s, i);
                  case 6:
                    t.next = 12;
                    break;
                  case 8:
                    if (((t.t1 = "cancel_reverse" === a), !t.t1)) {
                      t.next = 12;
                      break;
                    }
                    return (t.next = 12), n.cancelReserveLives(s, i);
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, o);
          })();
        });
      },
      reserveLives: function (e) {
        return l(this, arguments, function (e) {
          var n = this,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return t().mark(function o() {
            var a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        k.reserveLive(c({ live_news_id: e }, i))
                      );
                    case 3:
                      if (
                        ((t.t1 = t.sent.retcode), (t.t0 = "0" === t.t1), !t.t0)
                      ) {
                        t.next = 7;
                        break;
                      }
                      t.t0 = (n.showToast("预约成功"), n.snpContent);
                    case 7:
                      if (!t.t0) {
                        t.next = 10;
                        break;
                      }
                      (a = e.split(",")),
                        n.snpContent.forEach(function (e) {
                          var t;
                          -1 !== a.indexOf(e.id) &&
                            20 ===
                              (null == (t = null == e ? void 0 : e.extra_info)
                                ? void 0
                                : t.live_status) &&
                            ((e.extra_info.reserve_flag = 1),
                            (e.extra_info.participate_num += 1));
                        });
                    case 10:
                      t.next = 14;
                      break;
                    case 12:
                      (t.prev = 12), (t.t2 = t.catch(0));
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              null,
              [[0, 12]]
            );
          })();
        });
      },
      cancelReserveLives: function (e) {
        return l(this, arguments, function (e) {
          var n = this,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return t().mark(function o() {
            var a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (t.next = 3),
                        k.cancelReserveLive(c({ live_news_id: e }, i))
                      );
                    case 3:
                      if (
                        ((t.t1 = t.sent.retcode), (t.t0 = "0" === t.t1), !t.t0)
                      ) {
                        t.next = 7;
                        break;
                      }
                      t.t0 = (n.showToast("已取消预约"), n.snpContent);
                    case 7:
                      if (!t.t0) {
                        t.next = 10;
                        break;
                      }
                      (a = e.split(",")),
                        n.snpContent.forEach(function (e) {
                          var t;
                          -1 !== a.indexOf(e.id) &&
                            20 ===
                              (null == (t = null == e ? void 0 : e.extra_info)
                                ? void 0
                                : t.live_status) &&
                            ((e.extra_info.reserve_flag = 2),
                            (e.extra_info.participate_num -= 1));
                        });
                    case 10:
                      t.next = 14;
                      break;
                    case 12:
                      (t.prev = 12), (t.t2 = t.catch(0));
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              null,
              [[0, 12]]
            );
          })();
        });
      },
      mpOnShow: function () {
        this.addFavGrayShow();
      },
      imageCheckLoadFailed: function (e) {
        return this.imageFailList[e.url];
      },
      rankData: function (e, t, n) {
        var i,
          o = { tdClass: "", tag: "", tagClass: "" };
        if (!(null == e ? void 0 : e.showTableIcon)) return o;
        var a = t - 1,
          s = null == (i = null == e ? void 0 : e.tableGroup) ? void 0 : i[t],
          r = null == s ? void 0 : s.rank;
        if (!r && (a < 1 || a > 3)) return o;
        var c = ["with-number", r ? "highlight" : ""];
        if (((o.tdClass = c), 0 !== n)) return o;
        var l = null != r ? r : a,
          u = ["order-number", "no".concat(l)];
        return (
          (o.tagClass = u),
          (o.tag = "".concat(l < 100 ? "NO." : "").concat(l)),
          o
        );
      },
      isAccountLink: function (e) {
        return e && e.includes("/mp/v2/index.html#/apply/index");
      },
    },
  };
Array ||
  (
    u.resolveComponent("RenderContent") +
    u.resolveComponent("RenderContentMp") +
    u.resolveComponent("NewsImage") +
    u.resolveComponent("video-player") +
    u.resolveComponent("mp-live") +
    u.resolveComponent("Live") +
    u.resolveComponent("LiveCard") +
    u.resolveComponent("SubscribeWxMsgBar") +
    u.resolveComponent("plate-template") +
    u.resolveComponent("ViewportModule") +
    u.resolveComponent("voteMain") +
    u.resolveComponent("st-modal")
  )();
var M = u._export_sfc(q, [
  [
    "render",
    function (e, t, n, i, o, a) {
      return u.e(
        {
          a: u.f(o.newsContent, function (e, t, i) {
            return u.e(
              { a: !a.isRealMP && "text" === e.type },
              a.isRealMP || "text" !== e.type
                ? {}
                : {
                    b: u.o(a.goToNews, 5059),
                    c: u.o(a.goToStock, 5060),
                    d: u.o(a.handleTech, 5061),
                    e: u.o(a.goToUrl, 5062),
                    f: u.o(a.goToFunctions, 5063),
                    g: "a7ebfc1d-0-" + i,
                    h: u.p({
                      newsId: n.newsId,
                      item: e,
                      itemIndex: t,
                      clickable: n.clickable,
                      isMP: o.isMP,
                      isWZQ: o.isWZQ,
                      wzqConfig: n.wzqConfig,
                      speechable: n.speechable,
                      copyable: n.copyable,
                    }),
                  },
              { i: a.isRealMP && "text" === e.type },
              a.isRealMP && "text" === e.type
                ? {
                    j: u.o(a.goToNews, 5064),
                    k: u.o(a.goToStock, 5065),
                    l: u.o(a.handleTech, 5066),
                    m: u.o(a.goToUrl, 5067),
                    n: u.o(a.goToFunctions, 5068),
                    o: "a7ebfc1d-1-" + i,
                    p: u.p({
                      newsId: n.newsId,
                      item: e,
                      itemIndex: t,
                      clickable: n.clickable,
                      isMP: o.isMP,
                      isWZQ: o.isWZQ,
                      wzqConfig: n.wzqConfig,
                      speechable: n.speechable,
                      copyable: n.copyable,
                    }),
                  }
                : "table" === e.type
                ? { r: e.desc }
                : "snptb" === e.type
                ? {
                    t: u.f(e.tableGroup, function (t, n, i) {
                      return {
                        a: u.f(t, function (t, i, s) {
                          return u.e(
                            { a: t && t.text && t.text[0] },
                            t && t.text && t.text[0]
                              ? u.e(
                                  { b: a.rankData(e, n, i).tag },
                                  a.rankData(e, n, i).tag
                                    ? {
                                        c: u.t(a.rankData(e, n, i).tag),
                                        d: u.n(a.rankData(e, n, i).tagClass),
                                      }
                                    : {},
                                  {
                                    e:
                                      t.text[0].textType ===
                                      o.TEXT_TYPE_ENUM.STOCK,
                                  },
                                  t.text[0].textType === o.TEXT_TYPE_ENUM.STOCK
                                    ? {
                                        f: u.t(t.text[0].text),
                                        g: u.o(function (e) {
                                          return a.goToStock(
                                            t.text[0].clickParams
                                          );
                                        }, 5069),
                                      }
                                    : { h: u.t(t.text[0].text) },
                                  {
                                    i:
                                      t.text[1] &&
                                      t.text[1].textType ===
                                        o.TEXT_TYPE_ENUM.STOCK,
                                  },
                                  t.text[1] &&
                                    t.text[1].textType ===
                                      o.TEXT_TYPE_ENUM.STOCK
                                    ? {
                                        j: u.t(t.text[1].text),
                                        k: u.o(function (e) {
                                          return a.goToStock(
                                            t.text[1].clickParams
                                          );
                                        }, 5070),
                                      }
                                    : t.text[1]
                                    ? { m: u.t(t.text[1].text) }
                                    : {},
                                  { l: t.text[1] }
                                )
                              : {},
                            {
                              n: t.colSpan,
                              o: u.n(a.rankData(e, n, i).tdClass),
                              p: u.o(function (e) {
                                return a.tdGoToStock(t);
                              }, 5071),
                            }
                          );
                        }),
                      };
                    }),
                  }
                : "image" === e.type
                ? {
                    w: u.o(a.loadImage, 5072),
                    x: u.o(a.loadImageError, 5073),
                    y: "a7ebfc1d-2-" + i,
                    z: u.p({
                      item: e,
                      newsId: n.newsId,
                      isMP: o.isMP,
                      isWZQ: o.isWZQ,
                      isAPP: o.isAPP,
                      theme: n.theme,
                      accountOpenFlag: o.accountOpenFlag,
                      isFullTeach: a.isFullTeach,
                      wzqConfig: n.wzqConfig,
                      imageFailList: o.imageFailList,
                      premoteMixin: a.premoteMixin,
                    }),
                  }
                : "emphasis" === e.type
                ? {
                    B: u.f(e.contentList, function (e, s, r) {
                      return a.isRealMP
                        ? {
                            c: "a7ebfc1d-4-" + i + "-" + r,
                            d: u.p({
                              newsId: n.newsId,
                              item: e,
                              itemIndex: t,
                              goToFunctions: a.goToFunctions,
                              clickable: n.clickable,
                              goToNews: a.goToNews,
                              goToStock: a.goToStock,
                              handleTech: a.handleTech,
                              goToUrl: a.goToUrl,
                              isMP: o.isMP,
                              isWZQ: o.isWZQ,
                              wzqConfig: n.wzqConfig,
                            }),
                          }
                        : {
                            a: "a7ebfc1d-3-" + i + "-" + r,
                            b: u.p({
                              newsId: n.newsId,
                              item: e,
                              itemIndex: t,
                              goToFunctions: a.goToFunctions,
                              clickable: n.clickable,
                              goToNews: a.goToNews,
                              goToStock: a.goToStock,
                              handleTech: a.handleTech,
                              goToUrl: a.goToUrl,
                              isMP: o.isMP,
                              isWZQ: o.isWZQ,
                              wzqConfig: n.wzqConfig,
                            }),
                          };
                    }),
                    C: !a.isRealMP,
                  }
                : "video" === e.type
                ? u.e(
                    { E: o.isMP },
                    o.isMP
                      ? u.e(
                          { F: a.checkWzqMP || a.isNewZxgMp },
                          a.checkWzqMP || a.isNewZxgMp
                            ? {}
                            : { G: e.vid, H: e.vid },
                          {
                            I: u.s(a.mpStyleObj),
                            J: u.o(function () {
                              return (
                                a.onTvpPlay && a.onTvpPlay.apply(a, arguments)
                              );
                            }, 5074),
                            K: e.desc,
                          },
                          e.desc ? { L: u.t(e.desc) } : {}
                        )
                      : u.e(
                          {
                            M: u.o(a.onPlayStatusChange, 5075),
                            N: u.o(a.onDurationChange, 5076),
                            O: "a7ebfc1d-5-" + i,
                            P: u.p({
                              data: {},
                              layout: a.styleObj,
                              vid: e.vid,
                            }),
                            Q: e.desc,
                          },
                          e.desc ? { R: e.desc } : {}
                        ),
                    { S: !o.isMP && !o.isH5Lite },
                    o.isMP || o.isH5Lite
                      ? {}
                      : {
                          T: u.o(function (e) {
                            return a.showMore();
                          }, 5077),
                        },
                    {
                      U: u.o(function () {
                        return a.picVideo && a.picVideo.apply(a, arguments);
                      }, 5078),
                    }
                  )
                : "live" === e.type
                ? u.e(
                    { W: o.isMP },
                    o.isMP
                      ? {
                          X: "a7ebfc1d-6-" + i,
                          Y: u.p({
                            item: e,
                            isSharePage: a.isSharePage,
                            mpStyleObj: a.mpStyleObj,
                          }),
                          Z: u.s(a.mpStyleObj),
                        }
                      : {
                          aa: u.sr("liveWrap", "a7ebfc1d-7-" + i, { f: 1 }),
                          ab: u.s(a.styleObj),
                          ac: u.o(function (t) {
                            return a.reportPlayLive(e.id, t);
                          }, 5079),
                          ad: u.o(function (t) {
                            return a.reportPauseLive(e.id, t);
                          }, 5080),
                          ae: u.o(function (t) {
                            return a.gotoLiveDetail(e);
                          }, 5081),
                          af: "a7ebfc1d-7-" + i,
                          ag: u.p({ data: e }),
                        },
                    { ah: e.desc },
                    e.desc ? { ai: e.desc } : {},
                    {
                      aj: u.o(function (t) {
                        return a.showMoreLive(e.id);
                      }, 5082),
                      ak: t,
                    }
                  )
                : "wxchannels" === e.type && (o.isWZQ || o.isMP)
                ? u.e(
                    { am: a.wxChannelCheckValid(e) },
                    a.wxChannelCheckValid(e)
                      ? u.e(
                          { an: o.isWZQ },
                          o.isWZQ
                            ? {
                                ao: a.formatImage(e.thumb_img),
                                ap: u.s(a.newsVdStyleObj),
                              }
                            : { aq: a.formatImage(e.thumb_img) },
                          { ar: e.desc },
                          e.desc ? { as: e.desc } : {},
                          {
                            at: u.o(function (t) {
                              return a.wxVdClick(e, t);
                            }, 5083),
                          }
                        )
                      : {}
                  )
                : {},
              {
                q: "table" === e.type,
                s: "snptb" === e.type,
                v: "image" === e.type,
                A: "emphasis" === e.type,
                D: "video" === e.type,
                V: "live" === e.type,
                al: "wxchannels" === e.type && (o.isWZQ || o.isMP),
                av: 14 === e.type && a.showRMZB,
              },
              14 === e.type && a.showRMZB
                ? {
                    aw: u.o(a.handleTapLiveCard, 5084),
                    ax: u.o(function (t) {
                      return a.onReserveOne(e);
                    }, 5085),
                    ay: "a7ebfc1d-8-" + i,
                    az: u.p({
                      theme: n.theme,
                      liveData: e,
                      showLinkLine: !1,
                      wzqConfig: n.wzqConfig,
                      showShare: !1,
                      showPlaybackTag: !0,
                    }),
                  }
                : {},
              { aA: 14 === e.type && a.showRMZB && o.showSubscribeBanner },
              14 === e.type && a.showRMZB && o.showSubscribeBanner
                ? {
                    aB: u.o(a.showToast, 5086),
                    aC: u.o(a.onSubscribe, 5087),
                    aD: u.o(a.closeSubscribeBar, 5088),
                    aE: "a7ebfc1d-9-" + i,
                    aF: u.p({ hasSubscribed: o.hasSubscribed }),
                  }
                : "plate" === e.type
                ? {
                    aH:
                      a.accountOpeningFlag &&
                      !o.accountTextFlag &&
                      t ===
                        (o.moduleKeys &&
                          o.moduleKeys.length > 0 &&
                          o.moduleKeys[0]) &&
                      "plate" === e.type
                        ? "9"
                        : "",
                    aI: "a7ebfc1d-10-" + i,
                    aJ: u.p({
                      plateId: e.id,
                      name:
                        a.accountOpeningFlag &&
                        !o.accountTextFlag &&
                        t ===
                          (o.moduleKeys &&
                            o.moduleKeys.length > 0 &&
                            o.moduleKeys[0])
                          ? "winAccount"
                          : "",
                      wzqConfig: n.wzqConfig,
                      stockInitailAdded: o.stocksAddStatus[e.stockId || ""],
                    }),
                  }
                : "module" === e.type &&
                  e.moduleInfo &&
                  e.moduleInfo.length > 0 &&
                  a.viewReportShow(e.moduleInfo)
                ? {
                    aL: u.sr(
                      a.accountOpeningFlag &&
                        !o.accountTextFlag &&
                        t ===
                          (o.moduleKeys &&
                            o.moduleKeys.length > 0 &&
                            o.moduleKeys[0])
                        ? "winAccount"
                        : "",
                      "a7ebfc1d-11-" + i,
                      { f: 1 }
                    ),
                    aM:
                      a.accountOpeningFlag &&
                      !o.accountTextFlag &&
                      t ===
                        (o.moduleKeys &&
                          o.moduleKeys.length > 0 &&
                          o.moduleKeys[0])
                        ? "winAccount"
                        : "",
                    aN: u.o(a.wzqKeepPos, 5089),
                    aO: "a7ebfc1d-11-" + i,
                    aP: u.p({
                      item: e,
                      theme: n.theme,
                      clickable: n.clickable,
                      wzqConfig: n.wzqConfig,
                      newsId: n.newsId,
                      stockInitailAdded: o.stocksAddStatus[e.stockId || ""],
                      accountOpenFlag: o.accountOpenFlag,
                      stocksAddStatusFinish: o.stocksAddStatusFinish,
                      nationDebtStatData: a.getNationalDebtChannelId,
                      publishTime: n.publishTime,
                      pageType: "newsDetail",
                      reportPrefix: "news.newsdetail",
                      reportPrefixWZQ: "news.detail",
                    }),
                  }
                : "vote" !== e.type || o.isMP
                ? {}
                : u.e(
                    { aR: e.module_id },
                    e.module_id
                      ? {
                          aS: u.o(a.hanldePickVote, 5090),
                          aT: "a7ebfc1d-12-" + i,
                          aU: u.p({ voteId: e.module_id, innerWindow: !0 }),
                        }
                      : {}
                  ),
              {
                aG: "plate" === e.type,
                aK:
                  "module" === e.type &&
                  e.moduleInfo &&
                  e.moduleInfo.length > 0 &&
                  a.viewReportShow(e.moduleInfo),
                aQ: "vote" === e.type && !o.isMP,
              },
              o.isMP ? { aV: u.n(a.checkSepHeight(t)) } : {}
            );
          }),
          b: o.isMP,
          c: o.isWZQ,
        },
        o.isWZQ
          ? {
              d: o.teachText,
              e: u.o(function (e) {
                return (o.isTeachShow = e);
              }, 5091),
              f: u.o(a.cancelTeachTip, 5092),
              g: u.o(function (e) {
                return (o.isTeachShow = !1);
              }, 5093),
              h: u.p({
                visible: o.isTeachShow,
                type: "confirm",
                "confirm-btn": "我知道了",
                "cancel-btn": "去词条百科看看",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a7ebfc1d"],
]);
wx.createComponent(M);
