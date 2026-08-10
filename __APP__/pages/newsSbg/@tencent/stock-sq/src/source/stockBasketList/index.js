var t,
  e,
  n = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  a = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable,
  f = function (t, e, n) {
    return e in t
      ? r(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  l = function (t, e) {
    for (var n in e || (e = {})) u.call(e, n) && f(t, n, e[n]);
    if (c) {
      var i,
        r = o(c(e));
      try {
        for (r.s(); !(i = r.n()).done; ) {
          n = i.value;
          m.call(e, n) && f(t, n, e[n]);
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }
    return t;
  },
  p = function (t, e) {
    return a(t, s(e));
  },
  d = function (t, e, n) {
    return new Promise(function (i, o) {
      var r = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            o(t);
          }
        },
        a = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            o(t);
          }
        },
        s = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(r, a);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  h = require("../../../../stock-community-base/utils/knife.js"),
  g = require("../../utils/mixins/securityCheck/index.js"),
  w = require("../../../../../../../common/vendor.js"),
  k = require("../../../../stock-community-base/utils/commentFilter.js"),
  v = require("../../utils/mixins/store.js"),
  b = require("../../utils/service/index.js"),
  x = require("../../../../stock-community-base/utils/constant.js"),
  _ = h.sdk,
  D = _.getUserInfo,
  I = _.reportAnalytics,
  y = {},
  C = { userinfo: {}, page: 0 };
Object.keys(C).forEach(function (t) {
  y[t] = function () {
    return C[t];
  };
});
var T = p(l({}, v.store), {
    clearCommentsData: function () {
      this.commentsData.length = 0;
    },
    deleteItem: function (t) {
      for (var e = 0; e < this.commentsData.length; e++) {
        var n = this.commentsData[e];
        n.id && n.id === t && this.commentsData.splice(e, 1);
      }
    },
    userInit: function () {
      "{}" === JSON.stringify(C.userinfo) &&
        D().then(function (t) {
          C.userinfo = t;
        });
    },
    onPageInit: function (n) {
      return d(this, arguments, function (n) {
        var o = this,
          r = n.params,
          a = n.type,
          s = n.info,
          c = void 0 === s ? {} : s,
          u = n.scb,
          m = n.fcb;
        return i().mark(function n() {
          return i().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (
                    ((t = a),
                    (e = c),
                    (n.t0 = "{}" === JSON.stringify(C.userinfo)),
                    !n.t0)
                  ) {
                    n.next = 7;
                    break;
                  }
                  return (n.next = 6), D();
                case 6:
                  C.userinfo = n.sent;
                case 7:
                  return (
                    (C.userinfo = e), n.abrupt("return", o.getList(r, !0, u, m))
                  );
                case 9:
                case "end":
                  return n.stop();
              }
          }, n);
        })();
      });
    },
    updateTimeLine: function (t) {
      var e = this,
        i = t.comment_id,
        o = void 0 === i ? "" : i,
        r = t.like_num,
        a = void 0 === r ? "" : r,
        s = t.like_id,
        c = void 0 === s ? "" : s,
        u = n(this.commentsData);
      (this.commentsData.length = 0),
        u.forEach(function (t) {
          var n = l({}, t);
          t.id === o && ((n.like_num = a), (n.likeNum = a), (n.like_id = c)),
            e.commentsData.push(n);
        });
    },
    getList: function (e, n, o, r) {
      return d(
        this,
        null,
        i().mark(function a() {
          var s = this;
          return i().wrap(function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return a.abrupt(
                    "return",
                    new Promise(function (a, c) {
                      b.getMapRssList(e)
                        .then(function () {
                          for (
                            var t = arguments.length, e = new Array(t), c = 0;
                            c < t;
                            c++
                          )
                            e[c] = arguments[c];
                          return d(s, [].concat(e), function () {
                            var t = this,
                              e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                            return i().mark(function s() {
                              var c, u, m;
                              return i().wrap(function (i) {
                                for (;;)
                                  switch ((i.prev = i.next)) {
                                    case 0:
                                      if (0 === e.code) {
                                        i.next = 3;
                                        break;
                                      }
                                      return i.abrupt("return", void r());
                                    case 3:
                                      return (
                                        n && (t.commentsData.length = 0),
                                        (c = e.data || {}),
                                        (i.next = 7),
                                        k.CommentFilter(c, !0, !1, C.userinfo)
                                      );
                                    case 7:
                                      (u = i.sent),
                                        (m = u.commentsData) &&
                                          m.length &&
                                          m.map(function (e) {
                                            t.commentsData.push(e);
                                          }),
                                        (c.min_id = c.begin),
                                        o && o(n, c),
                                        a(!0);
                                    case 10:
                                    case "end":
                                      return i.stop();
                                  }
                              }, s);
                            })();
                          });
                        })
                        .catch(function (e) {
                          n && (s.commentsData.length = 0), r && r(n);
                          var i = ""
                            .concat(x.prefix[t], "_")
                            .concat(x.modules[t], ".getdata.error");
                          I({ eventName: i }), c(e);
                        });
                    })
                  );
                case 1:
                case "end":
                  return a.stop();
              }
          }, a);
        })
      );
    },
    onPutLike: function (n, o) {
      return d(
        this,
        null,
        i().mark(function n() {
          var r, a, s, c;
          return i().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (((n.t0 = "{}" === JSON.stringify(C.userinfo)), !n.t0)) {
                      n.next = 5;
                      break;
                    }
                    return (n.next = 4), D(!0);
                  case 4:
                    C.userinfo = n.sent;
                  case 5:
                    (r = this.commentsData[o]).like_id
                      ? ((r.like_id = ""), (r.like_num -= 1))
                      : ((r.like_id = r.id), (r.like_num += 1)),
                      (a = { attitude: r.like_id ? -1 : 0, publish_id: r.id }),
                      b.putRssLike(
                        -1 !== ["wzq", "mini"].indexOf(h.platform)
                          ? l(
                              {
                                nickname: null == e ? void 0 : e.nickname,
                                avatar_url: null == e ? void 0 : e.headimgurl,
                              },
                              a
                            )
                          : a,
                        C.userinfo,
                        !1
                      ),
                      (s = r.like_id ? "like" : "unlike"),
                      (c = ""
                        .concat(x.prefix[t], "_")
                        .concat(x.modules[t], "_duantie_dianzan_")
                        .concat(s)),
                      this.$emit("commentReport", c),
                      I({ eventName: c });
                  case 11:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this
          );
        })
      );
    },
    onTapFollow: function (t, e) {
      return d(
        this,
        null,
        i().mark(function t() {
          var n, o, r, a, s, c;
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((t.t0 = C.userinfo.openid), t.t0)) {
                      t.next = 5;
                      break;
                    }
                    return (t.next = 4), D(!0);
                  case 4:
                    C.userinfo = t.sent;
                  case 5:
                    (r = this.commentsData[e]),
                      (a = r.isFollow
                        ? "已取消关注"
                        : "关注成功，可在「股友圈」看Ta的动态~"),
                      (r.isFollow = !r.isFollow),
                      (s = {
                        g_openid: C.userinfo.openid,
                        to_openid: r.user_id,
                      }),
                      b.putFollow(
                        "wzq" === h.platform
                          ? l(
                              {
                                app: "wzq",
                                check: 12,
                                nickname:
                                  null == (n = this.pUserinfo)
                                    ? void 0
                                    : n.nickname,
                                avatar_url:
                                  (null == (o = this.pUserinfo)
                                    ? void 0
                                    : o.headimgurl) || x.headimgurl,
                              },
                              s
                            )
                          : s,
                        C.userinfo,
                        r.isFollow,
                        !1
                      ),
                      (c = ""
                        .concat(x.prefix[this.pageType], ".")
                        .concat(x.moduleName, ".guanzhu_tap")),
                      this.$emit("commentReport", c),
                      this.$emit("onTapFollow", { text: a, itemData: r }),
                      I({ eventName: c });
                  case 11:
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
  }),
  L = {
    name: "StockBasketList",
    mixins: [g.securityCheck],
    components: {
      ComItem: function () {
        return "./ComItem/index.js";
      },
      loadMore: function () {
        return "../loadMore/index.js";
      },
      noData: function () {
        return "../noData/index.js";
      },
      noNetwork: function () {
        return "../noNetwork/index.js";
      },
    },
    props: {
      pageType: { type: String, default: "stockbasket" },
      pUserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      configInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isVIP: { type: Boolean, default: !1 },
      BUS: {
        type: Object,
        default: function () {
          return {};
        },
      },
      didAgreeUserAgreement: { type: Boolean, default: !0 },
    },
    provide: function () {
      return {
        newsCommentId: this.newsCommentId,
        platformType: this.platformType(),
      };
    },
    data: function () {
      return {
        gdId: null,
        pageInit: !1,
        platform: h.platform,
        showLabels: ["hot", "24h", "best", "1000", "100", "10"],
        firstLoading: !0,
        nomore: !1,
        noNetwork: !1,
        isLoading: !1,
        pageNum: 0,
        pageMaxNum: 0,
        min_id: "",
        news_min_id: "",
        commentCnt: 0,
        commentsData: [],
      };
    },
    computed: p(l({}, y), {
      itemTopHandle: function () {
        return (
          { wzq: [], zxg: [], mini: ["follow"], web: [] }[h.platform] || []
        );
      },
      itemBottomHandle: function () {
        return (
          {
            web: [],
            wzq: ["turn", "comment", "like"],
            mini: ["comment", "like"],
            zxg: ["turn", "comment", "like"],
          }[h.platform] || []
        );
      },
      noMoreText: function () {
        return (
          {
            web: "评论服务由腾讯自选股提供",
            wzq: "评论服务由腾讯自选股提供",
            mini: "评论服务由腾讯自选股提供",
            zxg: "已经到底了，触底反弹否极泰来",
          }[h.platform] || ""
        );
      },
      newsCommentId: function () {
        return this.configInfo.commentid || "";
      },
    }),
    watch: {
      configInfo: {
        deep: !0,
        immediate: !0,
        handler: function (t, e) {
          (null == t ? void 0 : t.id) !== (null == e ? void 0 : e.id) &&
            (this.resetState(),
            t.id &&
              1 != +t.comment_status &&
              (this.gdId !== t.id && (this.gdId = t.id), this.init()));
        },
      },
    },
    created: function () {},
    mounted: function () {
      this.userInit();
    },
    methods: p(l({}, T), {
      resetState: function () {
        (this.pageInit = !1),
          (this.noNetwork = !1),
          (this.firstLoading = !0),
          this.clearCommentsData(),
          this.$emit("getCommentCount", 0);
      },
      init: function () {
        return d(
          this,
          null,
          i().mark(function t() {
            var e;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = this.getParams(!0)),
                        (this.firstLoading = !0),
                        (t.next = 4),
                        this.onPageInit({
                          params: e,
                          type: this.pageType,
                          info: this.pUserinfo,
                          scb: this.successHanlde,
                          fcb: this.networkErrorHandle,
                        })
                      );
                    case 4:
                      (this.pageInit = t.sent),
                        this.pageInit &&
                          this.$emit("getCommentCount", this.commentCnt);
                    case 6:
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
      deleteComItem: function (t) {
        this.deleteItem(t), this.$forceUpdate();
      },
      updateComList: function () {
        return d(this, arguments, function () {
          var t = this,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return i().mark(function n() {
            var o;
            return i().wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if ("like" !== e.type) {
                      n.next = 4;
                      break;
                    }
                    t.updateTimeLine(e), (n.next = 9);
                    break;
                  case 4:
                    return (
                      (o = t.getParams(!0)),
                      (n.next = 7),
                      t.onPageInit({
                        params: o,
                        type: t.pageType,
                        info: t.pUserinfo,
                        scb: t.successHanlde,
                        fcb: t.networkErrorHandle,
                      })
                    );
                  case 7:
                    (t.pageInit = n.sent),
                      t.pageInit && t.$emit("getCommentCount", t.commentCnt);
                  case 9:
                    t.$forceUpdate();
                  case 10:
                  case "end":
                    return n.stop();
                }
            }, n);
          })();
        });
      },
      getParams: function (t) {
        var e = {
          id: this.gdId,
          visible: 1,
          limit: 10,
          _: Date.parse(new Date()),
          begin: "",
          content_link: 1,
        };
        return (
          t
            ? ((this.pageNum = 0), (e.begin = ""), (e.begin_news = ""))
            : (this.pageNum++,
              (e.begin = this.min_id),
              (e.begin_news = this.news_min_id || "")),
          (this.pageMaxNum = Math.max(this.pageNum, this.pageMaxNum)),
          (e.map_id = this.gdId),
          (e.comment_id = this.configInfo.commentid || ""),
          e
        );
      },
      onHandleTapList: function (t, e) {
        var n = this;
        if (this.didAgreeUserAgreement) {
          var i = this.commentsData.findIndex(function (e, n, i) {
              return e.subject_id == t.subject_id;
            }),
            o = e || {},
            r = o.eventName,
            a = o.eventData,
            s = {
              putComment: "onPutComment",
              turn: "onHandelTurn",
              putLike: "onPutLike",
              tapPerson: "onTapPerson",
              tapFollow: "onTapFollow",
              tapImage: "onTapImage",
              tapDetail: "onTapDetail",
              tapContent: "onTapContent",
              tapShowBox: "onTapShowBox",
              toggleShow: "onToggleShow",
              tapOtherSource: "onTapOtherSource",
              goSharePage: "onGoSharePage",
              tapMore: "onTapMore",
              tapDeleteItem: "onTapDeleteItem",
            };
          if (
            "tapMore" === r &&
            ("zxg" === h.platform || "mini" === h.platform)
          ) {
            var c = Object.assign({}, a);
            (a.itemData = c), (a.listData = this.commentsData);
          }
          var u = (a || {}).fakeInput;
          Object.keys(s).forEach(function (t) {
            t === r &&
              n
                .securityCheck({
                  eventName: "onTapDetail" === s[r] ? "tapDetail" : r,
                  fakeInput: u,
                  postData: n.commentsData[i] || {},
                })
                .then(function () {
                  n[s[t]](a, i, {
                    pageType: n.pageType,
                    newsCommentId: n.configInfo.commentid || "",
                    itemData: n.commentsData[i],
                  });
                });
          }),
            this.$forceUpdate();
        } else this.$emit("checkUserAgreementStatus");
      },
      loadData: function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return d(
          this,
          null,
          i().mark(function e() {
            var n;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.isLoading && !this.nomore) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (this.isLoading = !0),
                        (n = this.getParams(!1)),
                        (e.next = 6),
                        this.getList(
                          n,
                          t,
                          this.successHanlde,
                          this.networkErrorHandle
                        )
                      );
                    case 6:
                      this.pageInit = e.sent;
                    case 7:
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
      successHanlde: function (t, e) {
        var n = e.more_flag,
          i = void 0 === n ? "" : n,
          o = e.min_id,
          r = void 0 === o ? "" : o,
          a = e.news_min_id,
          s = void 0 === a ? "" : a,
          c = e.comment_cnt,
          u = void 0 === c ? 0 : c;
        t && (this.firstLoading = !1),
          (this.nomore = !i),
          (this.min_id = r),
          (this.news_min_id = s),
          (this.commentCnt = u),
          (this.noNetwork = !1),
          (this.isLoading = !1),
          this.$forceUpdate(),
          this.$emit("getCommentUpdate", { nomore: this.nomore });
      },
      networkErrorHandle: function (t) {
        (this.noNetwork = !0), (this.firstLoading = t), (this.isLoading = !1);
      },
      timeoutLoad: function () {
        return d(
          this,
          null,
          i().mark(function t() {
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (this.resetState(),
                        (t.t0 =
                          this.configInfo.id &&
                          1 != +this.configInfo.comment_status),
                        !t.t0)
                      ) {
                        t.next = 6;
                        break;
                      }
                      return (t.next = 5), this.init();
                    case 5:
                      this.$forceUpdate();
                    case 6:
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
      isLast: function (t) {
        return t === this.commentsData.length - 1;
      },
    }),
  };
Array ||
  (
    w.resolveComponent("noNetwork") +
    w.resolveComponent("ComItem") +
    w.resolveComponent("noData") +
    w.resolveComponent("loadMore")
  )();
var N = w._export_sfc(L, [
  [
    "render",
    function (t, e, n, i, o, r) {
      return w.e(
        {
          a: o.noNetwork && 0 === o.commentsData.length,
          b: w.o(function (t) {
            return r.loadData(!0);
          }, 2197),
          c:
            o.pageInit &&
            !o.firstLoading &&
            o.commentsData &&
            o.commentsData.length &&
            !n.isVIP,
        },
        o.pageInit &&
          !o.firstLoading &&
          o.commentsData &&
          o.commentsData.length &&
          !n.isVIP
          ? {
              d: w.f(o.commentsData, function (t, e, i) {
                return {
                  a: t.subject_id,
                  b: w.o(
                    function (e) {
                      return r.onHandleTapList(t, e);
                    },
                    2198,
                    t.subject_id
                  ),
                  c: "bef354c3-1-" + i,
                  d: w.p({
                    last: r.isLast(e),
                    pageType: n.pageType,
                    itemData: t,
                    itemTopHandle: r.itemTopHandle,
                    itemBottomHandle: r.itemBottomHandle,
                    showLabels: o.showLabels,
                    BUS: n.BUS,
                  }),
                };
              }),
            }
          : {},
        { e: !o.noNetwork && !o.commentsData.length },
        o.noNetwork || o.commentsData.length
          ? {}
          : {
              f: w.p({
                useBlack: !1,
                text: n.isVIP ? "解锁后可查看评论" : "别观望，加入评论",
              }),
            },
        { g: !o.firstLoading && o.commentsData.length && !o.nomore },
        o.firstLoading || !o.commentsData.length || o.nomore
          ? {}
          : {
              h: w.o(r.loadData, 2199),
              i: w.p({
                noMoreText: r.noMoreText,
                nomore: o.nomore,
                noNetwork: o.noNetwork,
              }),
            },
        { j: w.n(n.pageType) }
      );
    },
  ],
  ["__scopeId", "data-v-bef354c3"],
]);
wx.createComponent(N);
