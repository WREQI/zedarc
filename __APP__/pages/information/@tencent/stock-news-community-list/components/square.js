var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, o) {
    for (var s in o || (o = {})) r.call(o, s) && a(e, s, o[s]);
    if (n) {
      var p,
        c = t(n(o));
      try {
        for (c.s(); !(p = c.n()).done; ) {
          s = p.value;
          i.call(o, s) && a(e, s, o[s]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  p = require("../../../../../common/vendor.js"),
  c = require("../../stock-information-page/components/CommunityList.js"),
  u = function (e) {
    if (("string" == typeof e && (e = { sop: e }), e.sop)) {
      e.sop = e.sop.toLowerCase();
      var t = Object.assign({}, e);
      delete t.sop;
      var o = "comment.".concat(e.sop);
      p.StockBridge.report(o, t);
    }
  },
  l = null,
  d = {
    components: {
      hotSkeleton: function () {
        return "./comment/hotSubjects.js";
      },
      feedsPk: function () {
        return "../../../../newsSbg/@tencent/stock-sq/src/source/feedsPk/index.js";
      },
      feedsTopic: function () {
        return "../../../../newsSbg/@tencent/stock-sq/src/source/feedsTopic/index.js";
      },
      SquareList: function () {
        return "../../../../newsSbg/@tencent/stock-sq/src/source/SquareList/index.js";
      },
      Supporter: function () {
        return "./Supporter.js";
      },
    },
    provide: function () {
      return { hqBridge: p.StockBridge };
    },
    inject: ["Exposure"],
    props: {
      curPage: { type: String, default: "square" },
      from: { type: String, default: "" },
      isMiniApp: { type: Boolean, default: !1 },
      hotRank: { type: Number, default: 0 },
      tabsStyleType: { type: String, default: "1" },
      isUseInNews: { type: Boolean, default: !1 },
      userinfo: { type: Object, default: null },
      mpScrollHeight: { type: Number, default: 0 },
      theme: { type: String, default: "white" },
      isCurrSlide: { type: Boolean, default: !1 },
      pageType: { type: String, default: "square" },
      reportPrefix: { type: String, default: c.nextReportPrefix.GUANGCHANG },
    },
    data: function () {
      return {
        queryEditor: {},
        hideSkeleton: !1,
        ex: null,
        firstShow: !1,
        pullDisabled: !1,
        timer: null,
        riskMsg: "",
        mpRefreshTriggered: !1,
        nomore: !1,
        hasSupporter: !1,
      };
    },
    computed: {
      isMP: function () {
        return "mp" === p.StockBridge.ENV;
      },
    },
    watch: {
      isCurrSlide: {
        handler: function (e) {
          e &&
            (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = function (e) {
                  var t = p.StockBridge.getStorage(
                    "communityNextReport_".concat(e)
                  );
                  if (t) {
                    for (var o in t) {
                      var n = t[o];
                      u(s({ sop: o }, n));
                    }
                    p.StockBridge.setStorage(
                      "communityNextReport_".concat(e),
                      ""
                    );
                  }
                };
              if (e && e.length)
                e.forEach(function (e) {
                  var o = c.nextReportPrefix[e];
                  t(o);
                });
              else
                for (var o in c.nextReportPrefix) {
                  var n = c.nextReportPrefix[o];
                  t(n);
                }
            })();
        },
        immediate: !0,
      },
    },
    created: function () {
      return (
        (t = this),
        null,
        (o = e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    p.StockBridge.busOn("newSubject", this.newSubject),
                      p.StockBridge.busOn("getNoMore", this.getNoMore);
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })),
        new Promise(function (e, n) {
          var r = function (e) {
              try {
                a(o.next(e));
              } catch (e) {
                n(e);
              }
            },
            i = function (e) {
              try {
                a(o.throw(e));
              } catch (e) {
                n(e);
              }
            },
            a = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(r, i);
            };
          a((o = o.apply(t, null)).next());
        })
      );
      var t, o;
    },
    mounted: function () {
      this.memory_Staytime_Pagenum_Exposure();
    },
    beforeDestroy: function () {
      p.StockBridge.busOff("newSubject", this.newSubject),
        p.StockBridge.busOff("getNoMore", this.getNoMore),
        clearTimeout(this.timer),
        clearTimeout(l);
    },
    methods: {
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
      hotScroll: function () {
        clearTimeout(this.timer), (this.pullDisabled = !0);
      },
      hotScrollEnd: function () {
        var e = this;
        clearTimeout(this.timer),
          this.pullDisabled &&
            (this.timer = setTimeout(function () {
              e.pullDisabled = !1;
            }, 1200));
      },
      goAppStock: function (e) {},
      formatEventName: function (e) {
        if (this.reportPrefix === c.nextReportPrefix.GUANGCHANG) return e;
        var t = e;
        try {
          t = t
            .replace(
              "shequ_shouye_guangchang.comment_area.",
              "".concat(this.reportPrefix, ".comment_area_")
            )
            .replace("shequ_shouye_guangchang", this.reportPrefix)
            .replace(
              "shequ.comment.",
              "".concat(this.reportPrefix, ".comment_area_")
            )
            .replace(
              "shequ.shequ_shouye.",
              "".concat(this.reportPrefix, ".comment_area_")
            );
        } catch (e) {}
        return t || e;
      },
      commentReport: function (e) {
        if ("string" == typeof e) p.StockBridge.report(this.formatEventName(e));
        else {
          var t = e || {},
            o = t.eventName,
            n = t.data;
          p.StockBridge.report(this.formatEventName(o), n);
        }
      },
      showToast: function (e) {
        var t = e.text;
        p.wx$1.showToast({
          title: t,
          icon: "none",
          duration: 2e3,
          position: "top",
        });
      },
      onShow: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.mainList) ||
          t.onShow();
      },
      renderFinished: function (e) {
        var t = e.isFirst,
          o = e.riskMsg;
        (this.riskMsg = o),
          !this.firstShow &&
            t &&
            ((this.firstShow = !0),
            !this.isUseInNews &&
              p.StockBridge.report("shequ_shouye_guangchang.visited")),
          (this.hideSkeleton = !0);
      },
      recommendFollow: function (e) {
        var t = e || {},
          o =
            (t.toOpenid,
            t.status ? "关注成功，可在「股友圈」看Ta的动态~" : "已取消关注");
        p.wx$1.showToast({
          title: o,
          icon: "none",
          duration: 2e3,
          position: "top",
        }),
          p.StockBridge.busEmit("updateUserAsset");
      },
      onTapFollow: function (e) {
        var t = e.text;
        p.wx$1.showToast({
          title: t,
          icon: "none",
          duration: 2e3,
          position: "top",
        }),
          p.StockBridge.busEmit("updateUserAsset");
      },
      onTapDetail: function (e) {
        this.$emit("curPost", e);
      },
      onPutComment: function (e) {
        this.$emit("curPost", e);
        var t = e.id,
          o = e.showType,
          n = void 0 === o ? "" : o,
          r = e.content,
          i = void 0 === r ? "" : r;
        (this.queryEditor = {
          type: "detail",
          id: t,
          touser: null == e ? void 0 : e.user_name,
          post_scene: "squarelist",
        }),
          "turn" === n &&
            (this.queryEditor.forwardContent = encodeURIComponent(i) || ""),
          this.$emit("onPutComment", this.queryEditor);
      },
      onHandelTurn: function (e) {
        var t = e.query;
        (this.queryEditor = t), this.$emit("onPutComment", this.queryEditor);
      },
      onHide: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.mainList) ||
          t.onHide();
      },
      tapLike: function () {
        this.$emit("tapLike");
      },
      newSubject: function () {
        var e = this;
        setTimeout(function () {
          e.curPage === e.pageType && window.scrollTo(0, 0),
            e.onPullingDown(!0);
        }, 1e3);
      },
      updateTimeLine: function (e) {
        this.CU_updateTimeLine(e, "follow" !== e.type);
      },
      updateRecommendArea: function () {
        var e, t;
        null == (t = null == (e = this.$refs) ? void 0 : e.mainList) ||
          t.updateRecommendArea();
      },
      onPullingDown: function (e) {
        var t,
          o,
          n = this;
        (this.mpRefreshTriggered = !0),
          null ==
            (o =
              null == (t = this.$refs.mainList) ? void 0 : t.loadData(!0, e)) ||
            o
              .then(function () {
                n.mpRefreshTriggered = !1;
              })
              .catch(function () {
                n.mpRefreshTriggered = !1;
              });
      },
      memory_Staytime_Pagenum_Exposure: function () {
        var e = this,
          t = "".concat(this.reportPrefix, "_maxshowpage");
        this.reportPrefix;
        !(function o() {
          l = setTimeout(function () {
            var n = "communityNextReport_".concat(e.reportPrefix),
              r = {};
            (r[t] = { data: e.pageMaxNum }),
              p.StockBridge.setStorage(n, r),
              o();
          }, 2e3);
        })();
      },
      topicClick: function (e) {
        if (e) {
          var t = e.id,
            o = e.type,
            n = e.url,
            r = e.vorder,
            i = e.title;
          this.$cRequest.reportData(
            "".concat(c.nextReportPrefix.GUANGCHANG, ".feedsbanner_dianji"),
            { bannerId: t, position: r }
          );
          var a = "",
            s = {};
          switch (o) {
            case "topic":
              (s = { topicid: t }), (a = "/topic/topic"), this.commonLink(a, s);
              break;
            case "post":
              (s = { nid: t }),
                (a = "/comment/detail/detail"),
                this.commonLink(a, s);
              break;
            case "news":
              (s = { id: t, title: i, type: 4 }),
                (a = "/information/detail"),
                this.commonLink(a, s);
              break;
            case "pk":
              (a =
                "https://wzq.tenpay.com/resources/shy/topic-pk/index.html#/index?pk_id=".concat(
                  t
                )),
                p.wx$1.navigatePageTo({ url: a });
              break;
            case "atv":
              this.$cRequest.reportData(
                "".concat(c.nextReportPrefix.GUANGCHANG, ".caizhangdie_card")
              ),
                (a =
                  "https://zqact.tenpay.com/activity/page/activityForward/#/?key=guessRiseFall&channel=commu&stat=oxk39p00qb170"),
                p.wx$1.navigatePageTo({ url: a });
              break;
            default:
              this.commonLink(n);
          }
        }
      },
      commonLink: function (e, t) {
        e &&
          (/^(https|http)?:\/\//.test(e)
            ? p.wx$1.navigatePageTo({ url: e })
            : this.$router.push({ path: e, query: t }));
      },
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e);
      },
      getNoMore: function (e) {
        var t = e.nomore,
          o = e.commmentDataLength;
        (this.nomore = t), (this.hasSupporter = o > 0);
      },
      onMpReachBottom: function () {
        var e;
        if (this.nomore) return Promise.resolve(!0);
        null == (e = this.$refs.mainList) || e.loadData();
      },
    },
  };
Array ||
  (
    p.resolveComponent("hotSkeleton") +
    p.resolveComponent("feedsPk") +
    p.resolveComponent("feedsTopic") +
    p.resolveComponent("SquareList") +
    p.resolveComponent("st-pull-refresh") +
    p.resolveComponent("Supporter")
  )();
var m = p._export_sfc(d, [
  [
    "render",
    function (e, t, o, n, r, i) {
      return p.e(
        { a: !r.hideSkeleton && o.curPage === o.pageType },
        (r.hideSkeleton || (o.curPage, o.pageType), {}),
        { b: !i.isMP },
        i.isMP
          ? p.e(
              { w: i.isMP },
              i.isMP
                ? p.e(
                    { x: !o.isMiniApp },
                    o.isMiniApp
                      ? {}
                      : {
                          y: p.w(
                            function (e, t, o) {
                              var n = e.itemData,
                                r = e.index;
                              return p.e(
                                { a: "pk" === n.type },
                                "pk" === n.type
                                  ? {
                                      b: p.o(i.commentReport, 4665),
                                      c: "8a82d8ad-6-" + o + ",8a82d8ad-5",
                                      d: p.p({
                                        "report-prefix":
                                          "wzq_shequ_guangchangtl",
                                        "point-data": n,
                                      }),
                                    }
                                  : {
                                      e: p.o(i.commentReport, 4666),
                                      f: "8a82d8ad-7-" + o + ",8a82d8ad-5",
                                      g: p.p({ "topic-data": n }),
                                    },
                                {
                                  h: p.n(r ? "" : "topOne"),
                                  i: p.o(function (e) {
                                    return i.topicClick(n);
                                  }, 4667),
                                  j: o,
                                  k: t,
                                }
                              );
                            },
                            { name: "banner", path: "y", vueId: "8a82d8ad-5" }
                          ),
                        },
                    {
                      z: p.sr("mainList", "8a82d8ad-5"),
                      A: p.o(i.renderFinished, 4668),
                      B: p.o(i.onPutComment, 4669),
                      C: p.o(i.onTapDetail, 4670),
                      D: p.o(i.showToast, 4671),
                      E: p.o(i.onTapFollow, 4672),
                      F: p.o(i.hotScroll, 4673),
                      G: p.o(i.hotScrollEnd, 4674),
                      H: p.o(i.tapLike, 4675),
                      I: p.o(i.commentReport, 4676),
                      J: p.o(i.recommendFollow, 4677),
                      K: p.o(i.goAppStock, 4678),
                      L: p.o(i.onHandelTurn, 4679),
                      M: p.o(i.showProfilePop, 4680),
                      N: p.p({
                        "cur-page": o.curPage,
                        "page-type": o.pageType,
                        "p-userinfo": o.userinfo,
                        from: o.from,
                        "is-mini-app": o.isMiniApp,
                        "hot-rank": o.hotRank,
                        "report-prefix": o.reportPrefix,
                        "tabs-style-type": o.tabsStyleType,
                        theme: o.theme,
                      }),
                      O: r.hasSupporter,
                    },
                    r.hasSupporter ? { P: p.p({ "load-all": r.nomore }) } : {},
                    {
                      Q: "".concat(o.mpScrollHeight, "px"),
                      R: r.mpRefreshTriggered,
                      S: p.o(function (e) {
                        return i.onPullingDown();
                      }, 4681),
                      T: p.o(function () {
                        return i.onMpScroll && i.onMpScroll.apply(i, arguments);
                      }, 4682),
                      U: p.o(function () {
                        return (
                          i.onMpReachBottom &&
                          i.onMpReachBottom.apply(i, arguments)
                        );
                      }, 4683),
                    }
                  )
                : {}
            )
          : p.e(
              { c: !o.isMiniApp },
              o.isMiniApp
                ? {}
                : {
                    d: p.w(
                      function (e, t, o) {
                        var n = e.itemData,
                          r = e.index;
                        return p.e(
                          { a: "pk" === n.type },
                          "pk" === n.type
                            ? {
                                b: p.o(i.commentReport, 4649),
                                c: "8a82d8ad-3-" + o + ",8a82d8ad-2",
                                d: p.p({
                                  "report-prefix": "wzq_shequ_guangchangtl",
                                  "point-data": n,
                                }),
                              }
                            : {
                                e: p.o(i.commentReport, 4650),
                                f: "8a82d8ad-4-" + o + ",8a82d8ad-2",
                                g: p.p({ "topic-data": n }),
                              },
                          {
                            h: p.n(r ? "" : "topOne"),
                            i: p.o(function (e) {
                              return i.topicClick(n);
                            }, 4651),
                            j: o,
                            k: t,
                          }
                        );
                      },
                      {
                        name: "banner",
                        path: "d",
                        vueId: "8a82d8ad-2,8a82d8ad-1",
                      }
                    ),
                  },
              {
                e: p.sr("mainList", "8a82d8ad-2,8a82d8ad-1"),
                f: p.o(i.renderFinished, 4652),
                g: p.o(i.onPutComment, 4653),
                h: p.o(i.onTapDetail, 4654),
                i: p.o(i.showToast, 4655),
                j: p.o(i.onTapFollow, 4656),
                k: p.o(i.hotScroll, 4657),
                l: p.o(i.hotScrollEnd, 4658),
                m: p.o(i.tapLike, 4659),
                n: p.o(i.commentReport, 4660),
                o: p.o(i.recommendFollow, 4661),
                p: p.o(i.goAppStock, 4662),
                q: p.o(i.onHandelTurn, 4663),
                r: p.p({
                  "cur-page": o.curPage,
                  "page-type": o.pageType,
                  "p-userinfo": o.userinfo,
                  from: o.from,
                  "is-mini-app": o.isMiniApp,
                  "hot-rank": o.hotRank,
                  "report-prefix": o.reportPrefix,
                  "tabs-style-type": o.tabsStyleType,
                }),
                s: p.sr("myScroll", "8a82d8ad-1"),
                t: p.o(i.onPullingDown, 4664),
                v: p.p({ disabled: r.pullDisabled }),
              }
            ),
        { V: p.n(r.riskMsg ? "risk-msg" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-8a82d8ad"],
]);
wx.createComponent(m);
