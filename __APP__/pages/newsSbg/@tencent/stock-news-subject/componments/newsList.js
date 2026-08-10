require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  u = function (e, n) {
    for (var o in n || (n = {})) r.call(n, o) && c(e, o, n[o]);
    if (s) {
      var i,
        u = t(s(n));
      try {
        for (u.s(); !(i = u.n()).done; ) {
          o = i.value;
          a.call(n, o) && c(e, o, n[o]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = require("../../../../../common/vendor.js"),
  d = require("../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  f = require("../../stock-news-core/utils/report.js"),
  p = require("../../stock-news-core/utils/bus.js"),
  m = require("../../stock-news-core/utils/newsParser.js"),
  h = require("../../stock-news-core/config/wuji.js"),
  v = require("../../stock-news-core/utils/request/index.js"),
  w = require("../../../@ungap/url-search-params/esm/index.js"),
  g = require("../../stock-news-core/utils/tools.js"),
  b = {
    name: "NewsList",
    options: { styleIsolation: "shared" },
    directives: { "observe-visibility": d.ObserveVisibility },
    components: {
      NewsItem: function () {
        return "./newsItem.js";
      },
      NewsEventItem: function () {
        return "./newsEventItem.js";
      },
      VideoCard: function () {
        return "./videoCard.js";
      },
      ViewportModule: function () {
        return "../../stock-news-core/components/viewportModule.js";
      },
      voteMain: null,
    },
    props: {
      subjectData: {
        type: Object,
        require: !0,
        default: function () {
          return {};
        },
      },
      theme: { type: String, default: "white" },
      wzqConfig: {
        type: Object,
        default: function () {
          return {};
        },
      },
      params: {
        type: Object,
        default: function () {
          return {};
        },
      },
      accountOpenFlag: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
    },
    data: function () {
      return {
        heightMap: {},
        isMP: !0,
        isAPP: !1,
        keyAccount: null,
        stocksAddStatus: {},
        stocksAddStatusFinish: !1,
      };
    },
    watch: {
      subjectData: {
        handler: function (e, t) {
          this.addFavGrayShow();
        },
        immediate: !0,
      },
    },
    mounted: function () {
      (this.keyAccount =
        this.subjectData.id_list &&
        this.subjectData.id_list.findIndex(function (e) {
          return 2 === e.type;
        })),
        this.$nextTick(function () {
          p.BUS.$emit("accountDom");
        });
    },
    methods: {
      stockAddStatus: function (e) {
        var t = this.getModuleInfo(e).stockId || "";
        return 1 === this.stocksAddStatus[t] ? 1 : 0;
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
      getStocksAddStatus: function (t) {
        return (
          (n = this),
          null,
          (o = e().mark(function () {
            var n, o, i, s, r, a, c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = this.getParams()),
                        (o = n.app),
                        (i = n.openId),
                        (s = n.fsKey),
                        (r = n.check),
                        (a =
                          "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd?stocks="
                            .concat(t, "&app=")
                            .concat(o, "&appid=wx9cf8c670ebd68ce4&check=")
                            .concat(r, "&openid=")
                            .concat(i, "&fskey=")
                            .concat(s)),
                        (e.prev = 1),
                        (e.next = 4),
                        v.request(a, {}, { method: "get", isShowToast: !1 })
                      );
                    case 4:
                      (c = e.sent) &&
                        0 === c.code &&
                        c.data &&
                        ((this.stocksAddStatus = c.data),
                        (this.stocksAddStatusFinish = !0)),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              s,
              this,
              [[1, 8]]
            );
          })),
          new Promise(function (e, t) {
            var i = function (e) {
                try {
                  r(o.next(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (e) {
                try {
                  r(o.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              r = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(i, s);
              };
            r((o = o.apply(n, null)).next());
          })
        );
        var n, o;
      },
      getParams: function () {
        var e, t, n;
        return (
          l.wx$1 &&
            ((e = "zxg_xcx"),
            (t = l.wx$1.getStorageSync("_qluin")),
            (n = l.wx$1.getStorageSync("_qlskey"))),
          g.isH5Lite(),
          { app: e, openId: t, fsKey: n, check: 11 }
        );
      },
      getViewportStockIds: function () {
        var e = this;
        return (
          this.subjectData &&
          this.subjectData.id_list &&
          this.subjectData.id_list
            .map(function (t) {
              if (2 !== t.type) return null;
              var n = e.getModuleInfo(t).stockId;
              return n && n.startsWith("fx") ? null : n;
            })
            .filter(function (e) {
              return !!e;
            })
            .join(",")
        );
      },
      getPlateInfo: function (e) {
        var t = e.replace("pt", ""),
          n = "200",
          o = "pt",
          i = "hs";
        return (
          e.startsWith("ph") &&
            ((n = "400"), (o = "ph"), (i = "hk"), (t = t.replace("ph", ""))),
          e.startsWith("pu") &&
            ((n = "601"), (o = "pu"), (i = "us"), (t = t.replace("pu", ""))),
          { stockCode: t, appPlate: n, plateMarket: o, market: i }
        );
      },
      getVisibleSetting: function () {
        var e = this;
        return {
          callback: function (t) {
            t &&
              e.handleDataReport({
                eventName: "news.subject.detail.vote_module_show",
              });
          },
          once: !0,
          intersection: { threshold: 0.5 },
        };
      },
      hanldePickVote: function () {
        this.handleDataReport({
          eventName: "news.subject.detail.vote_module_click",
        });
      },
      handleDataReport: function (e) {
        var t = e.eventName,
          n = e.dataObject,
          o = void 0 === n ? {} : n;
        if (t) {
          var i = u({ news_id: this.subjectData.news_id }, o);
          f.report(t, i);
        }
      },
      getModuleInfo: function (e) {
        var t,
          n,
          s,
          r,
          a,
          c,
          l = {
            0: "sz",
            1: "sh",
            2: "hk",
            3: "us",
            fu: "fu",
            bj: "bj",
            fx: "fx",
            p: "pt",
            pt: "pt",
          },
          d = (e.module_id && e.module_id.split("#")) || [];
        if (
          (d && ((t = d[2]), (n = new w.URLSearchParams(d[3]))),
          (t !== m.MODULE_TYPE_ENUM.MINS_CHART &&
            t !== m.MODULE_TYPE_ENUM.KLINE_CHART) ||
            (r =
              (void 0 === l[n.get("market")]
                ? n.get("market")
                : l[n.get("market")]) + n.get("scode")),
          t === m.MODULE_TYPE_ENUM.PLATE_TABLE)
        ) {
          var f = (s = n.get("plateId"));
          s.includes("-") && (f = s.split("-")[0]);
          var p = this.getPlateInfo(f),
            h = p.stockCode;
          r = p.plateMarket + h;
        }
        return (
          (a = u({}, e)),
          (c = { moduleInfo: d, stockId: r, id: e.module_id }),
          o(a, i(c))
        );
      },
      handleItemClick: function (e) {
        this.$emit("tapDetail", e);
      },
      createEventItem: function () {
        this.handleDataReport({
          eventName: "news.zhuantidicengye.event_item_brow",
        });
      },
      initSectionTopHeight: function () {
        var e = this;
        this.$nextTick(function () {
          e.caculateSectionTop();
        });
      },
      caculateSectionTop: function () {
        var e = this.$refs.sectionList || [];
        if (e.length) {
          var t = {},
            n = this.subjectData.id_list;
          e.forEach(function (e, o) {
            var i = "".concat(n[o].section, "_").concat(o);
            t[i] = e.getBoundingClientRect().top;
          }),
            (this.heightMap = t);
        }
      },
      goto: function () {},
      wzqKeepPos: function () {},
      allCourse: function (e) {
        var t = e.type,
          n = e.news_list;
        if (0 !== t) return !1;
        var o = !0;
        return (
          n.forEach(function (e) {
            var t = e.articletype,
              n = e.video_info;
            ((7 == +t || 8 == +t) && n && n.course_id) || (o = !1);
          }),
          o
        );
      },
      isEventItem: function (e) {
        var t = e.id,
          n = e.type;
        return "SN202307271640248473decb" === t || 26 == +n;
      },
      eventItemBrow: function (e) {
        this.handleDataReport({
          eventName: "news.subject.detail.link_item_brow",
        });
      },
      handleEventItemClick: function (e) {
        var t = this;
        this.handleDataReport({
          eventName: "news.subject.detail.link_item_click",
        }),
          setTimeout(function () {
            t.handleItemClick(e);
          }, 200);
      },
    },
  };
Array ||
  (
    l.resolveComponent("VideoCard") +
    l.resolveComponent("NewsEventItem") +
    l.resolveComponent("NewsItem") +
    l.resolveComponent("ViewportModule") +
    l.resolveComponent("voteMain")
  )();
var k = l._export_sfc(b, [
  [
    "render",
    function (e, t, n, o, i, s) {
      return {
        a: l.f(n.subjectData.id_list, function (e, t, o) {
          return l.e(
            { a: !((i.isMP && 3 === e.type) || (i.isMP && s.allCourse(e))) },
            (i.isMP && 3 === e.type) || (i.isMP && s.allCourse(e))
              ? {}
              : { b: l.t(e.section) },
            { c: e.news_list && e.news_list.length },
            e.news_list && e.news_list.length
              ? {
                  d: l.f(e.news_list, function (e, t, r) {
                    return l.e(
                      {
                        a:
                          !i.isMP &&
                          !e.charge_type &&
                          [7, 8, 14].indexOf(+e.articletype) > -1 &&
                          (e.video_info || e.extra_info) &&
                          e.theme_img &&
                          2 === Number(e.theme_img.type),
                      },
                      !i.isMP &&
                        !e.charge_type &&
                        [7, 8, 14].indexOf(+e.articletype) > -1 &&
                        (e.video_info || e.extra_info) &&
                        e.theme_img &&
                        2 === Number(e.theme_img.type)
                        ? {
                            b: l.o(s.handleItemClick, 4029, "news-item-" + t),
                            c: "11e572b2-0-" + o + "-" + r,
                            d: l.p({
                              "item-data": e,
                              theme: n.theme,
                              "wzq-config": n.wzqConfig,
                            }),
                          }
                        : e && s.isEventItem(e)
                        ? {
                            f: l.o(s.createEventItem, 4030, "news-item-" + t),
                            g: l.o(
                              s.handleEventItemClick,
                              4031,
                              "news-item-" + t
                            ),
                            h: l.o(s.eventItemBrow, 4032, "news-item-" + t),
                            i: "11e572b2-1-" + o + "-" + r,
                            j: l.p({ "item-data": e, theme: n.theme }),
                          }
                        : {
                            k: l.o(s.handleItemClick, 4033, "news-item-" + t),
                            l: "11e572b2-2-" + o + "-" + r,
                            m: l.p({ "item-data": e, theme: n.theme }),
                          },
                      { e: e && s.isEventItem(e), n: "news-item-" + t }
                    );
                  }),
                }
              : {},
            { e: 2 === e.type },
            2 === e.type
              ? {
                  f: l.sr(
                    i.keyAccount === t &&
                      s.getModuleInfo(e) &&
                      s.getModuleInfo(e).moduleInfo &&
                      s.getModuleInfo(e).moduleInfo.length > 0
                      ? "winAccount"
                      : "",
                    "11e572b2-3-" + o,
                    { f: 1 }
                  ),
                  g:
                    i.keyAccount === t &&
                    s.getModuleInfo(e) &&
                    s.getModuleInfo(e).moduleInfo &&
                    s.getModuleInfo(e).moduleInfo.length > 0
                      ? "winAccount"
                      : "",
                  h: i.isAPP ? 1 : "",
                  i:
                    i.keyAccount === t &&
                    s.getModuleInfo(e) &&
                    s.getModuleInfo(e).moduleInfo &&
                    s.getModuleInfo(e).moduleInfo.length > 0
                      ? s.getModuleInfo(e).moduleInfo &&
                        s.getModuleInfo(e).moduleInfo[2]
                      : "",
                  j: l.o(s.wzqKeepPos, 4034, t),
                  k: "11e572b2-3-" + o,
                  l: l.p({
                    name:
                      i.keyAccount === t &&
                      s.getModuleInfo(e) &&
                      s.getModuleInfo(e).moduleInfo &&
                      s.getModuleInfo(e).moduleInfo.length > 0
                        ? "winAccount"
                        : "",
                    item: s.getModuleInfo(e),
                    clickable: !0,
                    "news-id": n.subjectData.news_id,
                    "wzq-config": n.wzqConfig,
                    "stock-initail-added": s.stockAddStatus(e),
                    "stocks-add-status-finish": i.stocksAddStatusFinish,
                    theme: n.theme,
                    "account-open-flag": n.accountOpenFlag,
                    "page-type": "newsSubject",
                    "report-prefix": "news.subject",
                    "report-prefix-w-z-q": "news.subject",
                    "report-rrefix-m-p": "news.mini.subject",
                  }),
                }
              : {},
            { m: !i.isMP && 3 === e.type },
            i.isMP || 3 !== e.type
              ? {}
              : l.e(
                  { n: e.module_id },
                  e.module_id
                    ? {
                        o: l.o(s.hanldePickVote, 4035, t),
                        p: "11e572b2-4-" + o,
                        q: l.p({ "vote-id": e.module_id, "inner-window": !0 }),
                      }
                    : {},
                  { r: i.isAPP ? 1 : "" }
                ),
            { s: t }
          );
        }),
      };
    },
  ],
  ["__scopeId", "data-v-11e572b2"],
]);
wx.createComponent(k);
