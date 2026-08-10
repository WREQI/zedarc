var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, i) {
    return new Promise(function (n, s) {
      var o = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            s(e);
          }
        },
        r = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, r);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  i = require("../../../../../common/vendor.js"),
  n = require("../Index.js"),
  s = require("../../stock-news-sdk/index.js"),
  o = { IS_WZQ_XCX: !1 },
  r = o.IS_WZQ_XCX,
  a = o.IS_LITE_MODE,
  l = o.IS_PCWEIXIN,
  c = {
    components: {
      LiveScrollWrapper: function () {
        return "./LiveScrollWrapper.js";
      },
      RefreshList: function () {
        return "./RefreshList.js";
      },
      LiveSwiperLive: function () {
        return "./LiveSwiperLive.js";
      },
      LiveSwiperChat: function () {
        return "./LiveSwiperChat.js";
      },
      LiveSwiperNews: function () {
        return "./LiveSwiperNews.js";
      },
    },
    props: [
      "index",
      "live",
      "live_list",
      "delta_time",
      "chat_list",
      "news_list",
      "isWx",
      "onEndReached",
      "onRefresh",
      "onChatListPulling",
      "isSharePage",
      "disableSwiperRefresh",
      "qtData",
      "slist",
      "innerFundList",
      "userinfo",
      "skin",
    ],
    data: function () {
      return {
        isMP: !0,
        mpTriggered: !1,
        isAndroidMP: !1,
        isLightMode: r || a,
        isPC: l,
      };
    },
    computed: {
      openComment: function () {
        return 1 !== this.live.comment_status;
      },
      sharePageClass: function () {
        return this.isSharePage ? "sharePage" : "";
      },
    },
    created: function () {
      return t(
        this,
        null,
        e().mark(function t() {
          var n, s;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = this.isMP), !e.t0)) {
                      e.next = 9;
                      break;
                    }
                    return (
                      (this.isAndroidMP =
                        "android" === i.wx$1.getSystemInfoSync().platform),
                      (e.next = 5),
                      null ==
                      (s =
                        null == (n = getApp().globalData.detect)
                          ? void 0
                          : n.env)
                        ? void 0
                        : s.IS_PCWEIXIN
                    );
                  case 5:
                    if (((e.t1 = e.sent), e.t1)) {
                      e.next = 8;
                      break;
                    }
                    e.t1 = !1;
                  case 8:
                    this.isPC = e.t1;
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    methods: {
      getScrollRef: function () {
        var e;
        return null == (e = this.$refs.scroll) ? void 0 : e.getScrollRef();
      },
      onListScrollHandle: function (e) {
        this.$emit("onListScrollHandle", e);
      },
      onScrollHandleEnd: function (e) {
        this.$emit("onScrollHandleEnd", e);
      },
      onScrollHandleBegin: function (e) {
        this.$emit("onScrollHandleBegin", e);
      },
      onMPPulling: function (e) {
        e.detail.deltaY < 0 || (this.mpTriggered = !0);
      },
      onMPRefreshComplete: function () {
        (this._freshing = !1), (this.mpTriggered = !1);
      },
      onMPRefresh: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var i = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this._freshing ||
                        ((this._freshing = !0),
                        1 === this.index
                          ? this.onChatListPulling()
                              .then(function () {
                                i.onMPRefreshComplete();
                              })
                              .catch(function () {
                                i.onMPRefreshComplete();
                              })
                          : this.onRefresh()
                              .then(function () {
                                i.onMPRefreshComplete();
                              })
                              .catch(function () {
                                i.onMPRefreshComplete();
                              }));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      onMPRestore: function () {
        this.mpTriggered = "restore";
      },
      onMPBottomReached: function () {
        var e = this;
        this._loadMore ||
          ((this._loadMore = !0),
          this.onEndReached()
            .then(function () {
              e._loadMore = !1;
            })
            .catch(function () {
              e._loadMore = !1;
            }));
      },
      showNewsDetail: function (e) {
        var t = e.id,
          o = e.news_id,
          r = e.title,
          a = e.news_type;
        e.article_type;
        if (4 == +a)
          s.sdk.navigateToNewsSubject({
            instance: this,
            id: t || o,
            zxtype: a,
            from: "zhibo",
          });
        else if (14 == +a)
          s.sdk.navigateToLiveDetail({ instance: this, id: t || o });
        else if (this.isEventItem(e)) {
          this.$emit("onReportMatch");
          var l = {
            url: "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://zqact03.tenpay.com/activity/page/etfEnrollMatchThirdPhase/#/index?target=rank&stat_data=Iak00p000b072"
              )
            ),
          };
          i.wx$1 && i.wx$1.navigateTo(l);
        } else {
          var c = encodeURIComponent(r),
            d = n.dateUtils.date(new Date(), "yyyy-MM-dd hh:mm:ss");
          s.sdk.navigateToNewsDetail({
            instance: this,
            id: t || o,
            zxtype: a,
            columnfrom: "zhibo",
            title: c,
            date: d,
          });
        }
      },
      isEventItem: function (e) {
        var t = e.id,
          i = e.news_id;
        return (
          "SN202307271640248473decb" === t || "SN202307271640248473decb" === i
        );
      },
      manageSelfStock: function (e) {
        this.$emit("manageSelfStock", e);
      },
    },
  };
Array ||
  (
    i.resolveComponent("live-swiper-live") +
    i.resolveComponent("live-swiper-chat") +
    i.resolveComponent("live-swiper-news") +
    i.resolveComponent("st-reach-bottom") +
    i.resolveComponent("refresh-list") +
    i.resolveComponent("live-scroll-wrapper")
  )();
var d = i._export_sfc(c, [
  [
    "render",
    function (e, t, n, s, o, r) {
      return i.e(
        { a: o.isMP },
        o.isMP
          ? i.e(
              { b: 0 == n.index },
              0 == n.index
                ? {
                    c: i.o(r.showNewsDetail, 4627),
                    d: i.o(r.manageSelfStock, 4628),
                    e: i.p({
                      live: n.live,
                      live_list: n.live_list,
                      delta_time: n.delta_time,
                      "is-share-page": n.isSharePage,
                      slist: n.slist,
                      "qt-data": n.qtData,
                      "inner-fund-list": n.innerFundList,
                      userinfo: n.userinfo,
                    }),
                  }
                : 1 == n.index
                ? {
                    g: i.o(r.manageSelfStock, 4629),
                    h: i.p({
                      live: n.live,
                      chat_list: n.chat_list,
                      delta_time: n.delta_time,
                      "is-share-page": n.isSharePage,
                      slist: n.slist,
                      "qt-data": n.qtData,
                      "inner-fund-list": n.innerFundList,
                      userinfo: n.userinfo,
                      skin: n.skin,
                    }),
                  }
                : 2 == n.index
                ? {
                    j: i.o(r.showNewsDetail, 4630),
                    k: i.p({
                      news_list: n.news_list,
                      delta_time: n.delta_time,
                      "is-share-page": n.isSharePage,
                    }),
                  }
                : {},
              { f: 1 == n.index, i: 2 == n.index, l: o.isLightMode },
              (o.isLightMode, {}),
              {
                m: i.n(o.isAndroidMP ? "android" : ""),
                n: o.mpTriggered,
                o: "black" === n.skin ? "white" : "black",
                p: i.o(function () {
                  return r.onMPPulling && r.onMPPulling.apply(r, arguments);
                }, 4631),
                q: i.o(function () {
                  return r.onMPRefresh && r.onMPRefresh.apply(r, arguments);
                }, 4632),
                r: i.o(function () {
                  return r.onMPRestore && r.onMPRestore.apply(r, arguments);
                }, 4633),
                s: i.o(function () {
                  return (
                    r.onMPBottomReached &&
                    r.onMPBottomReached.apply(r, arguments)
                  );
                }, 4634),
                t: i.n(r.sharePageClass),
                v: i.n(o.isLightMode ? "light-mode" : ""),
              }
            )
          : i.e(
              { w: 0 == n.index },
              0 == n.index
                ? {
                    x: i.o(r.showNewsDetail, 4635),
                    y: i.o(r.manageSelfStock, 4636),
                    z: i.p({
                      live: n.live,
                      live_list: n.live_list,
                      delta_time: n.delta_time,
                      "is-share-page": n.isSharePage,
                      slist: n.slist,
                      "qt-data": n.qtData,
                      "inner-fund-list": n.innerFundList,
                      userinfo: n.userinfo,
                    }),
                  }
                : 1 == n.index
                ? {
                    B: i.o(r.manageSelfStock, 4637),
                    C: i.p({
                      live: n.live,
                      chat_list: n.chat_list,
                      delta_time: n.delta_time,
                      "is-share-page": n.isSharePage,
                      slist: n.slist,
                      "qt-data": n.qtData,
                      "inner-fund-list": n.innerFundList,
                      userinfo: n.userinfo,
                      skin: n.skin,
                    }),
                  }
                : {
                    D: i.o(r.showNewsDetail, 4638),
                    E: i.p({
                      news_list: n.news_list,
                      delta_time: n.delta_time,
                    }),
                  },
              { A: 1 == n.index, F: o.isLightMode },
              (o.isLightMode, {}),
              { G: o.isPC },
              (o.isPC, {}),
              {
                H: i.p({ "on-reach-bottom": n.onEndReached }),
                I: i.p({
                  "on-list-refresh": n.onRefresh,
                  disabled: n.disableSwiperRefresh,
                }),
                J: i.sr("scroll", "4d89940f-3"),
                K: i.n(o.isLightMode ? "light-mode" : ""),
                L: i.o(function (e) {
                  return r.onListScrollHandle(e);
                }, 4639),
                M: i.o(function (e) {
                  return r.onScrollHandleEnd(e);
                }, 4640),
                N: i.o(function (e) {
                  return r.onScrollHandleBegin(e);
                }, 4641),
                O: i.p({
                  options: {
                    bounce: { top: !1, left: !1, right: !1 },
                    preventDefaultException: { className: /^.*news.*$/ },
                  },
                  "scroll-events": ["scroll"],
                }),
              }
            )
      );
    },
  ],
]);
wx.createComponent(d);
