var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  u = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  p = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  c = function (e, t) {
    for (var r in t || (t = {})) i.call(t, r) && p(e, r, t[r]);
    if (o) {
      var a,
        u = n(o(t));
      try {
        for (u.s(); !(a = u.n()).done; ) {
          r = a.value;
          s.call(t, r) && p(e, r, t[r]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = function (e, t, n) {
    return new Promise(function (r, a) {
      var u = function (e) {
          try {
            i(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            i(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(u, o);
        };
      i((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../../stock-news-core/utils/request/index.js"),
  g = require("../../../../stock-news-core/utils/newsParser.js"),
  d = require("../../../../../../../common/vendor.js"),
  f = require("../index.js"),
  h = require("../../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  b = require("../../../../stock-news-base/service/news/gray.js"),
  j = function (e) {
    var n;
    if (!e) return e;
    var r = e.code,
      o = "0" === String(r) || 0 === r,
      i = {},
      s = e.data;
    if ("string" == typeof s && s)
      try {
        i = JSON.parse(s);
      } catch (e) {
        i = {};
      }
    else s && "object" == t(s) && (i = s);
    var p,
      l,
      m = c({}, e),
      g =
        ((p = c({}, m)),
        (l = {
          code: o ? 0 : Number(null != r ? r : -1),
          msg: String(null != (n = e.msg) ? n : ""),
        }),
        a(p, u(l)));
    return (
      (null == i ? void 0 : i.turnover_dsb) &&
        (g.turnover_dsb = i.turnover_dsb),
      (null == i ? void 0 : i.rank) && (g.rank = i.rank),
      (null == i ? void 0 : i.north_bound) && (g.north_bound = i.north_bound),
      g
    );
  },
  _ = {
    name: "HqTool",
    props: {
      showBg: { type: Boolean, default: !0 },
      jumpPage: { type: Object, default: null },
      jumpPageConfig: { type: Object, default: null },
      wzqConfig: {
        type: Object,
        default: function () {
          return { Helper: { navigateTo: function () {} } };
        },
      },
      briefMode: { type: Boolean, default: !1 },
      enableClick: { type: Boolean, default: !0 },
      flucShowMode: { type: String, default: "redup" },
      theme: { type: String, default: "blue" },
      newsId: { type: String, default: "" },
    },
    data: function () {
      return { turnoverDsb: null, rank: null, northBound: null };
    },
    watch: {
      jumpPage: {
        immediate: !0,
        handler: function (e) {
          if (e && this.jumpPageConfig)
            this.parseJumpPageConfig(this.jumpPageConfig);
          else {
            var t = e.jump_desc,
              n = e.jump_desc_status;
            "" === t && "1" === n && this.loadNewsMarketInfo();
          }
        },
      },
      jumpPageConfig: {
        immediate: !0,
        handler: function (e) {
          e && this.jumpPage && this.parseJumpPageConfig(e);
        },
      },
    },
    directives: { "observe-visibility": h.ObserveVisibility },
    methods: {
      getVisibleSetting: function () {
        return {
          callback: function (e) {},
          once: !0,
          intersection: { threshold: 0.5 },
        };
      },
      loadNewsMarketInfo: function () {
        return l(
          this,
          null,
          e().mark(function t() {
            var n, r, a;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (n = this.jumpPage.jump_page),
                        (t.next = 4),
                        b.isNewsGrayUser("queryNewsMarketInfo")
                      );
                    case 4:
                      if (!t.sent) {
                        t.next = 10;
                        break;
                      }
                      return (
                        (t.next = 7),
                        (function (t) {
                          return l(
                            this,
                            null,
                            e().mark(function n() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        b.newsRequest(
                                          "/zxg/news/simple_text/query_news_market_info",
                                          t
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, n);
                            })
                          );
                        })({ type: Number(n) })
                      );
                    case 7:
                      (r = t.sent), (t.next = 14);
                      break;
                    case 10:
                      return (
                        (t.next = 12),
                        m.request(
                          "https://snp.tenpay.com/cgi/cgi-bin/snp/news/newsMarketInfo?type=".concat(
                            n
                          ),
                          {},
                          { method: "get", isShowToast: !1 }
                        )
                      );
                    case 12:
                      (a = t.sent), (r = j(a));
                    case 14:
                      this.$emit("newsJumpPage", r),
                        this.parseJumpPageConfig(r),
                        (t.next = 19);
                      break;
                    case 17:
                      (t.prev = 17), (t.t0 = t.catch(0));
                    case 19:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 17]]
            );
          })
        );
      },
      parseJumpPageConfig: function (e) {
        var t;
        if (0 === (e || {}).code) {
          var n = this.jumpPage.jump_page;
          "".concat(n) == "".concat(f.JUMP_PAGE_TYPE.MARKET_OVERVIEW)
            ? (this.turnoverDsb =
                (null == (t = e.turnover_dsb) ? void 0 : t.all) || null)
            : "".concat(n) == "".concat(f.JUMP_PAGE_TYPE.HANGQING_GANGGUTONG)
            ? (this.northBound = e.north_bound || null)
            : "".concat(n) == "".concat(f.JUMP_PAGE_TYPE.HS_FUNDFLOW) &&
              (this.rank = e.rank || null);
        }
      },
      numberFormat: function (e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          r = e < 0,
          a = {},
          u = 1e4,
          o = ["", "万", "亿", "万亿"];
        return (
          (e = Math.abs(e)) < u
            ? ((a.value = e), (a.unit = ""))
            : ((t = Math.floor(Math.log(e) / Math.log(u))),
              (a.value = (e / Math.pow(u, t)).toFixed(n)),
              (a.unit = o[t])),
          (r ? "-" : "") + a.value + a.unit
        );
      },
      clickLink: function () {
        this.enableClick && this.jumpLink();
      },
      jumpLink: function () {
        var e =
          this.jumpPage.jump_url ||
          (g.jumpMap[+this.jumpPage.jump_page]
            ? g.jumpMap[+this.jumpPage.jump_page]
            : "");
        e &&
          window.__WZQ__ &&
          (this.wzqConfig.stat.click(
            "news.detail.stock_functions_type".concat(
              this.jumpPage.jump_page,
              "_click"
            ),
            void 0,
            void 0,
            { newsId: this.newsId }
          ),
          this.wzqConfig.stat.click(
            "news.detail.stock_functions_type_click_all_bottom",
            void 0,
            void 0,
            { newsId: this.newsId }
          ),
          this.wzqConfig.Helper.navigateTo(e));
      },
      rankDesc: function (e) {
        var t = e.date.substring(4, 6),
          n = e.date.substring(6, 8);
        return ""
          .concat(parseInt(t, 10), ".")
          .concat(n, "行业主力净流入最高")
          .concat(this.numberFormat(1e4 * e.zljlr, 1));
      },
    },
    computed: {
      tagBg: function () {
        var e = parseInt(this.jumpPage.jump_page, 10);
        return f.JUMP_PAGE_CONFIG[e]
          ? {
              "background-image": "url(".concat(f.JUMP_PAGE_CONFIG[e].url, ")"),
              "background-size": "contain",
              width: "17px",
              height: "17px",
              margin: "0 4px 0 8px",
            }
          : { margin: "0 4px 0 8px" };
      },
    },
  },
  v = d._export_sfc(_, [
    [
      "render",
      function (e, t, n, r, a, u) {
        return d.e(
          { a: n.jumpPage && n.jumpPage.jump_page },
          n.jumpPage && n.jumpPage.jump_page
            ? d.e(
                {
                  b: d.s(u.tagBg),
                  c: d.t(n.jumpPage.jump_text),
                  d: !n.briefMode,
                },
                n.briefMode
                  ? {}
                  : d.e(
                      { e: 1 == n.jumpPage.jump_page && a.turnoverDsb },
                      1 == n.jumpPage.jump_page && a.turnoverDsb
                        ? {
                            f: d.t(u.numberFormat(a.turnoverDsb.amount, 1)),
                            g: d.t(
                              "较昨日" +
                                (a.turnoverDsb.amount_change < 0
                                  ? "缩量"
                                  : "放量")
                            ),
                            h: d.t(
                              u.numberFormat(a.turnoverDsb.amount_change, 1)
                            ),
                            i: d.n(
                              a.turnoverDsb.amount_change > 0
                                ? "red"
                                : a.turnoverDsb.amount_change < 0
                                ? "green"
                                : "flat"
                            ),
                          }
                        : 2 == n.jumpPage.jump_page && a.rank
                        ? { k: d.t(u.rankDesc(a.rank)) }
                        : 3 == n.jumpPage.jump_page
                        ? {}
                        : 4 == n.jumpPage.jump_page
                        ? { n: d.t(n.jumpPage.jump_desc) }
                        : 9 == n.jumpPage.jump_page && a.northBound
                        ? {
                            p: d.t(
                              ""
                                .concat(
                                  a.northBound.date.substring(6, 8),
                                  "日北向净流入"
                                )
                                .concat(
                                  u.numberFormat(
                                    1e4 * a.northBound.fund_flow_net_in,
                                    1
                                  )
                                )
                            ),
                          }
                        : { q: d.t(n.jumpPage.jump_desc) },
                      {
                        j: 2 == n.jumpPage.jump_page && a.rank,
                        l: 3 == n.jumpPage.jump_page,
                        m: 4 == n.jumpPage.jump_page,
                        o: 9 == n.jumpPage.jump_page && a.northBound,
                      }
                    ),
                {
                  r: d.n(n.briefMode ? "brief" : ""),
                  s: d.n(n.showBg ? "bg" : ""),
                  t: d.n(n.flucShowMode),
                  v: d.n(n.theme),
                  w: d.o(function () {
                    return u.clickLink && u.clickLink.apply(u, arguments);
                  }, 5360),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-736b9be6"],
  ]);
wx.createComponent(v);
