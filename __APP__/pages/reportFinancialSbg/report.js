var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  c = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  u = function (t, e, n) {
    return new Promise(function (o, i) {
      var r = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        a = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(r, s);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  l = require("../../common/vendor.js"),
  h = require("@tencent/st-canvas-image/OffscreenCanvas.js"),
  p = require("utils/shareHelper.js"),
  m = l.Util || l.__CJS__import__0__$3,
  f = getApp().globalData,
  d = {
    components: {
      AIFinancialReport: function () {
        return "./@tencent/stock-ai-financial-report/pages/AIFinancialReport.js";
      },
      NewsComList: function () {
        return "../newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js";
      },
      replyBox: function () {
        return "../newsCon/newsDetail/replybox.js";
      },
      PrivacyPolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyModal.js";
      },
    },
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
      };
    },
    props: { param: { type: Object, default: null } },
    setup: function (t) {
      return {
        renderStockCard: function (t) {
          return u(
            this,
            null,
            e().mark(function n() {
              var o, i, r, s, a, c, u, l, m, f, d, g, y, w, x;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = []),
                        (i = 113),
                        (r = 150),
                        (s = [24, 128, 257, 356]),
                        (a = [222, 312]),
                        (c = { 要点2: "372", "": "298" }),
                        (u = 700),
                        28,
                        22,
                        20,
                        16.41,
                        24,
                        (l = { "+": "#E63535", "-": "#1CAA3C", "": "#262E40" }),
                        (m = {
                          0: "https://st.gtimg.com/design/6515371a1b5b7444fc5d386747ef950a.png",
                          1: "https://st.gtimg.com/design/4f59989c11cf2458f995f3019edf28c3.png",
                          "-1": "https://st.gtimg.com/design/89cd3a6db30d28ecbff96d2f33830ba4.png",
                        }),
                        (f = p.getRenderRows(t.stock_name, 316, 1, 28, u)),
                        (d = p.getRenderRows(t.point_1, 350, 2, 24, u)),
                        (g = p.getRenderRows(t.point_2, 350, 2, 24, u)),
                        (y = Date.parse(new Date().toString())),
                        t.point_2_title in c &&
                          o.push({
                            type: "image",
                            text: "",
                            url: "https://st.gtimg.com/design/8eaaaea940bfed25f205a35e385562b2.png?t=".concat(
                              y
                            ),
                            x: 7,
                            y: 5,
                            width: 466.5,
                            height: c[t.point_2_title],
                          }),
                        f[0] &&
                          o.push({
                            type: "text",
                            text: f[0],
                            x: s[0],
                            y: 57.5,
                            style: {
                              fontSize: 28,
                              fontWeight: u,
                              color: "#262E40",
                            },
                          }),
                        t.forcast_result in m &&
                          o.push({
                            type: "image",
                            text: "",
                            url: m[t.forcast_result],
                            x: s[3],
                            y: 30,
                            width: 100,
                            height: 35,
                          }),
                        t.income &&
                          o.push({
                            type: "text",
                            text: t.income,
                            x: s[0],
                            y: i,
                            style: {
                              fontSize: 22,
                              fontWeight: u,
                              color: t.income_ratio
                                ? l[t.income_ratio[0]]
                                : l[""],
                            },
                          }),
                        o.push({
                          type: "text",
                          text: "营收",
                          x: s[0],
                          y: r,
                          style: { fontSize: 20, color: "#7A8499" },
                        }),
                        t.income_ratio &&
                          o.push({
                            type: "text",
                            text: t.income_ratio,
                            x: s[1],
                            y: i,
                            style: {
                              fontSize: 22,
                              fontWeight: u,
                              color: l[t.income_ratio[0]],
                            },
                          }),
                        o.push({
                          type: "text",
                          text: "增长率",
                          x: s[1],
                          y: r,
                          style: { fontSize: 20, color: "#7A8499" },
                        }),
                        o.push({
                          type: "rect",
                          x: 236.5,
                          y: 93,
                          width: 1,
                          height: 64,
                          fill: "#DCDFE6",
                        }),
                        t.net &&
                          o.push({
                            type: "text",
                            text: t.net,
                            x: s[2],
                            y: i,
                            style: {
                              fontSize: 22,
                              fontWeight: u,
                              color: t.net_ratio ? l[t.net_ratio[0]] : l[""],
                            },
                          }),
                        o.push({
                          type: "text",
                          text: "利润",
                          x: s[2],
                          y: r,
                          style: { fontSize: 20, color: "#7A8499" },
                        }),
                        t.net_ratio &&
                          o.push({
                            type: "text",
                            text: t.net_ratio,
                            x: s[3],
                            y: i,
                            style: {
                              fontSize: 22,
                              fontWeight: u,
                              color: l[t.net_ratio[0]],
                            },
                          }),
                        o.push({
                          type: "text",
                          text: "增长率",
                          x: s[3],
                          y: r,
                          style: { fontSize: 20, color: "#7A8499" },
                        }),
                        o.push({
                          type: "rect",
                          x: 24,
                          y: 174,
                          width: 432,
                          height: 1,
                          fill: "#E9EBF0",
                        }),
                        t.point_1_title &&
                          (o.push({
                            type: "rect",
                            x: s[0],
                            y: 203.79,
                            width: 50.94,
                            height: 25.05,
                            round: [4, 4, 4, 4],
                            fill: "#3077EC",
                          }),
                          o.push({
                            type: "text",
                            text: t.point_1_title,
                            x: s[0] + 25.47,
                            y: a[0],
                            style: {
                              fontSize: 16.41,
                              fontWeight: u,
                              color: "#FFFFFF",
                              textAlign: "center",
                            },
                          }),
                          d && d.length > 0))
                      )
                        for (w = 0; w < d.length; w++)
                          d[w] &&
                            o.push({
                              type: "text",
                              text: d[w],
                              x: 93.6,
                              y: a[0] + 3 + 36.92 * w,
                              style: {
                                fontSize: 24,
                                fontWeight: u,
                                color: "#262E40",
                                width: 267,
                              },
                            });
                      if (
                        t.point_2_title &&
                        (o.push({
                          type: "rect",
                          x: s[0],
                          y: 293.79,
                          width: 50.94,
                          height: 25.05,
                          round: [4, 4, 4, 4],
                          fill: "#3077EC",
                        }),
                        o.push({
                          type: "text",
                          text: t.point_2_title,
                          x: s[0] + 25.47,
                          y: a[1],
                          style: {
                            fontSize: 16.41,
                            fontWeight: u,
                            color: "#FFFFFF",
                            textAlign: "center",
                          },
                        }),
                        g && g.length > 0)
                      )
                        for (x = 0; x < g.length; x++)
                          g[x] &&
                            o.push({
                              type: "text",
                              text: g[x],
                              x: 93.6,
                              y: a[1] + 3 + 36.92 * x,
                              style: {
                                fontSize: 24,
                                fontWeight: u,
                                color: "#262E40",
                                width: 267,
                              },
                            });
                      return (e.next = 5), h.OffscreenCanvasImage.draw(o);
                    case 5:
                      return e.abrupt("return", e.sent);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
        },
      };
    },
    data: function () {
      return {
        newsId: "",
        hqBridge: new l.HQBridge(),
        newsInfo: null,
        isIphoneX: !1,
        enableHandleScroll: !0,
        forwardNum: 0,
        bottomBarType: "comments",
        bottomBar: {
          type: "comments",
          title: "评论",
          praise: "0",
          praiseTitle: "很牛",
          transpondTitle: "转发",
        },
        userinfo: null,
        isSharePage: !1,
        commentNoMore: !1,
        commentLastSepLine: !1,
        showPrivacyPolicy: !1,
        didAgreeUserAgreement: l.reactive({ value: !0 }),
        firstTime: !0,
        scrollHeight: 0,
        communityTop: 0,
        shareData: {},
      };
    },
    computed: {
      enableComment: function () {
        return this.newsInfo && 1 !== this.newsInfo.comment_status;
      },
    },
    created: function () {
      var t, e;
      this.getAuth(), this.unsubUserAgreementStatus();
      var n = this.param.id;
      this.newsId = n;
      try {
        var o =
            null == (e = null == (t = getApp()) ? void 0 : t.globalData)
              ? void 0
              : e.device,
          i = null == o ? void 0 : o.safeArea;
        this.isIphoneX = o.screenHeight > i.bottom;
      } catch (t) {}
      this.subUserAgreementStatus();
    },
    destroyed: function () {
      this.unsubUserAgreementStatus();
    },
    updated: function () {
      var t = this;
      l.wx$1
        .createSelectorQuery()
        .in(this)
        .select("#aiContent")
        .boundingClientRect(function (e) {
          var n = e.height;
          t.communityTop = n;
        })
        .exec();
    },
    methods: {
      onShow: function () {
        var t;
        f.setSkin(),
          m.isFromPyq() &&
            l.wx$1.showModal({
              title: "",
              content:
                "当前模式部分功能不可用，可点击下方“前往小程序”享受完整内容",
              showCancel: !1,
              confirmText: "我知道了",
              success: function (t) {},
            }),
          this.firstTime
            ? (this.firstTime = !1)
            : this.$refs.newsCommentList &&
              (null == (t = this.$refs.newsCommentList) || t.updateComList()),
          this.subUserAgreementStatus(),
          this.browReport();
      },
      onHide: function () {
        this.unsubUserAgreementStatus();
      },
      onReachBottom: function () {
        this.newsInfo &&
          this.$refs.newsCommentList &&
          this.$refs.newsCommentList.loadData();
      },
      onPageScroll: function (t) {
        this.scrollHeight = t.scrollTop;
        var e = this.scrollHeight + f.device.windowHeight - this.communityTop;
        e >= 0 && "article" !== this.bottomBarType
          ? ((this.bottomBarType = "article"), this.initBottomBarData())
          : e < 0 &&
            "comments" !== this.bottomBarType &&
            ((this.bottomBarType = "comments"), this.initBottomBarData());
      },
      browReport: function () {
        l.Request.reportMTAData({
          eventName: "news.aifinancialreport.detail.brow",
          newsid: this.newsId,
        });
      },
      shareFinancialReport: function () {},
      formatShareData: function () {
        if (!this.newsInfo || !this.newsInfo.share_data) return {};
        var e,
          n,
          u = this.newsInfo.share_data,
          l = {
            point_1: u.points && u.points.length > 1 ? u.points[1] : "",
            point_1_title: u.points && u.points.length > 1 ? "要点1" : "",
            point_2: u.points && u.points.length > 2 ? u.points[2] : "",
            point_2_title: u.points && u.points.length > 2 ? "要点2" : "",
          };
        return (
          (e = (function (e, n) {
            for (var o in n || (n = {})) s.call(n, o) && c(e, o, n[o]);
            if (r) {
              var i,
                u = t(r(n));
              try {
                for (u.s(); !(i = u.n()).done; ) {
                  o = i.value;
                  a.call(n, o) && c(e, o, n[o]);
                }
              } catch (t) {
                u.e(t);
              } finally {
                u.f();
              }
            }
            return e;
          })(
            { stock_name: u.stock_name, forcast_result: u.forcast_result },
            l
          )),
          (n = {
            income: u.income,
            income_ratio: u.income_ratio,
            net: u.net,
            net_ratio: u.net_ratio,
          }),
          o(e, i(n))
        );
      },
      onShareAppMessage: function () {
        return u(
          this,
          null,
          e().mark(function t() {
            var n, o, i;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n =
                          (l.wx$1.getDeviceInfo && l.wx$1.getDeviceInfo()) ||
                          l.wx$1.getSystemInfoSync()),
                        (o = n.platform),
                        "mac" !== (i = void 0 === o ? "" : o) &&
                          "windows" !== i)
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return", {
                        title: "【财报速递】您的财报小助手",
                        path: "/pages/report/AIFinancial/index?id=".concat(
                          this.newsId,
                          "&from=share"
                        ),
                      });
                    case 3:
                      return (t.next = 5), this.renderStockCard(this.shareData);
                    case 5:
                      return (
                        (t.t0 = t.sent.tempFilePath),
                        (t.t1 = "/pages/report/AIFinancial/index?id=".concat(
                          this.newsId,
                          "&from=share"
                        )),
                        t.abrupt("return", {
                          title: "【财报速递】您的财报小助手",
                          imageUrl: t.t0,
                          path: t.t1,
                        })
                      );
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      onShareTimeline: function () {
        return {
          title: this.newsInfo.title || "",
          query: "id=".concat(this.newsId, "&from=share"),
        };
      },
      handleDataReady: function (t) {
        (this.newsInfo = t),
          (this.shareData = this.formatShareData()),
          this.getShareNumber();
      },
      getAuth: function () {
        var t = l.login.getLoginInfo() || {},
          e = t.qluin,
          n = t.qlskey;
        e &&
          n &&
          (this.userinfo = {
            qlskey: n,
            qluin: e,
            qlappid: "wx4eff699c2e813ab6",
            appid: "wx4eff699c2e813ab6",
            openid: e,
            fskey: n,
          });
      },
      onCheckUserAgreementStatus: function () {
        this.didAgreeUserAgreement.value || (this.showPrivacyPolicy = !0);
      },
      checkUserAgreementStatus: function () {
        var t = !0;
        try {
          var e = l.StockBridge.store.protocolStatus;
          "string" == typeof e && (t = "agree" === e);
        } catch (t) {}
        return (this.didAgreeUserAgreement.value = t), t;
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          l.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
      unsubUserAgreementStatus: function () {
        l.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      handleProtocolStatusChange: function (t) {
        this.checkUserAgreementStatus();
      },
      getCommentCount: function (t) {
        (this.commentCnt = t), this.initBottomBarData();
      },
      initBottomBarData: function () {
        "article" === this.bottomBarType
          ? (this.bottomBar = {
              type: this.bottomBarType,
              title: "回正文",
              praise: "0",
              praiseTitle: "很牛",
              transpondTitle: "转发",
            })
          : (this.bottomBar = {
              type: this.bottomBarType,
              title:
                this.commentCnt > 0 ? "".concat(this.commentCnt, "评") : "评论",
              praise: "0",
              praiseTitle: "很牛",
              transpondTitle: "转发",
            });
      },
      onPutComment: function (t) {
        var e = t.id,
          n = "/pages/comment/detailView/main?nid=".concat(
            e,
            "&source=list&listname=community"
          );
        l.wx$1.navigateTo({ url: n });
      },
      onTapMore: function (t) {
        var e = (t || {}).actionSheet;
        if (e && e.length) {
          var n = [];
          e.forEach(function (t) {
            var e = t.showName;
            n.push(e);
          }),
            l.wx$1.showActionSheet({
              itemList: n,
              success: function (t) {
                t.tapIndex >= 0 && (0, e[t.tapIndex].onTapMenu)();
              },
              fail: function (t) {},
            });
        }
      },
      onCommentSuccess: function (t) {
        var e = t.nomore,
          n = t.commentsData;
        if (e && n.length > 0) {
          this.commentNoMore = !0;
          var o = n[n.length - 1].commentsTail;
          if (!o) return;
          var i = o.cnt,
            r = o.list;
          this.commentLastSepLine = 0 === i || (r && 0 === r.length);
        }
      },
      bottomInset: function () {
        return this.isSharePage ? (this.isIphoneX ? 80 : 50) : 0;
      },
      handleScroll: function (t) {
        t &&
          this.enableHandleScroll &&
          l.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#aiContent")
            .boundingClientRect(function (e) {
              if ("comments" === t) {
                var n = e.height;
                l.wx$1.pageScrollTo({ scrollTop: n, duration: 300 });
              } else "article" === t && l.wx$1.pageScrollTo({ scrollTop: 0, duration: 300 });
            })
            .exec();
      },
      goEdit: function () {
        var t = this.newsInfo,
          e = t.id,
          n = t.title,
          o = "/pages/comment/edit/edit?type=aiFinancialReport&id="
            .concat(e, "&subContent=")
            .concat(n, "&placeholder=谈谈我的想法");
        l.wx$1.navigateTo({ url: o });
      },
      getShareNumber: function () {
        var t = this;
        f.wx.request({
          url: "https://wzq.tenpay.com/cgi/cgi-bin/numserver/getStaticNums",
          data: { ids: this.newsId, type: "forward" },
          method: "GET",
          success: function (n) {
            return u(
              t,
              null,
              e().mark(function t() {
                var o, i;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (i = n.data) &&
                            Array.isArray(i) &&
                            (this.forwardNum =
                              (null == (o = i[0]) ? void 0 : o.forward) || 0);
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
          fail: function (n) {
            return u(
              t,
              null,
              e().mark(function t() {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          },
        });
      },
    },
  };
Array ||
  (
    l.resolveComponent("AIFinancialReport") +
    l.resolveComponent("NewsComList") +
    l.resolveComponent("replyBox") +
    l.resolveComponent("PrivacyPolicyModal")
  )();
var g = l._export_sfc(d, [
  [
    "render",
    function (t, e, n, o, i, r) {
      return l.e(
        {
          a: l.o(r.shareFinancialReport, 934),
          b: l.o(r.handleDataReady, 935),
          c: l.p({ newsId: i.newsId }),
          d: i.newsInfo,
        },
        i.newsInfo
          ? l.e(
              { e: r.enableComment },
              (r.enableComment, {}),
              { f: r.enableComment },
              r.enableComment
                ? {
                    g: l.sr("newsCommentList", "6c445f0c-1"),
                    h: l.o(r.getCommentCount, 936),
                    i: l.o(r.onPutComment, 937),
                    j: l.o(r.onTapMore, 938),
                    k: l.o(r.onCommentSuccess, 939),
                    l: l.o(r.onCheckUserAgreementStatus, 940),
                    m: l.p({
                      "page-type": "news",
                      "p-userinfo": i.userinfo,
                      "news-id": i.newsId,
                      "news-info": i.newsInfo,
                      "main-app": this,
                      "did-agree-user-agreement": i.didAgreeUserAgreement,
                    }),
                  }
                : {},
              { n: i.commentNoMore },
              i.commentNoMore
                ? { o: l.n(i.commentLastSepLine ? "zxg-logo-sep" : "") }
                : {},
              {
                p: l.n(i.isIphoneX && !i.isSharePage ? "isIphoneX" : ""),
                q: l.n(i.isSharePage ? "is-share-page" : ""),
                r: l.o(r.handleScroll, 941),
                s: l.o(r.goEdit, 942),
                t: l.p({
                  "forbid-comment": !r.enableComment,
                  "is-iphone-x": i.isIphoneX,
                  isSharePage: i.isSharePage,
                  type: "newsDetail",
                  forwardNum: i.forwardNum,
                  bottomBar: i.bottomBar,
                  newsId: i.newsId,
                  bottomInset: r.bottomInset,
                }),
              }
            )
          : {},
        {
          v: l.o(function (t) {
            return (i.showPrivacyPolicy = t);
          }, 943),
          w: l.p({ value: i.showPrivacyPolicy }),
          x: l.n(i.isSharePage ? "sharePage" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-6c445f0c"],
]);
wx.createComponent(g);
