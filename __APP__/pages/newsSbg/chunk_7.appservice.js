$gwx21_XC_19 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_19 || [];
    function gz$gwx21_XC_19_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div mod-newsComList-list data-v-cb43bb3d"]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([3, "data-v-cb43bb3d"]);
        Z([
          [2, "!"],
          [[7], [3, "a"]],
        ]);
        Z([3, "cb43bb3d-0"]);
        Z([[7], [3, "c"]]);
        Z([3, "item"]);
        Z([[7], [3, "d"]]);
        Z([3, "e"]);
        Z([[6], [[7], [3, "item"]], [3, "d"]]);
        Z(z[1]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z(z[3]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z(z[10]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z(z[3]);
        Z([3, "cb43bb3d-2"]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "g"]]);
        Z(z[1]);
        Z([[7], [3, "h"]]);
        Z(z[3]);
        Z([3, "cb43bb3d-3"]);
        Z([[7], [3, "i"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_19_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_19 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_19 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_19_1();
      var oX3 = _n("view");
      _rz(z, oX3, "class", 0, e, s, gg);
      var e23 = _mz(
        z,
        "no-network",
        [
          "bind:__l",
          1,
          "bindclickReload",
          1,
          "class",
          2,
          "data-c-h",
          3,
          "uI",
          4,
        ],
        [],
        e,
        s,
        gg
      );
      _(oX3, e23);
      var lY3 = _v();
      _(oX3, lY3);
      if (_oz(z, 6, e, s, gg)) {
        lY3.wxVkey = 1;
        var b33 = _v();
        _(lY3, b33);
        var o43 = function (o63, x53, f73, gg) {
          var h93 = _v();
          _(f73, h93);
          if (_oz(z, 10, o63, x53, gg)) {
            h93.wxVkey = 1;
            var o03 = _mz(
              z,
              "com-item",
              [
                "bind:__l",
                11,
                "bindonHandleTapItem",
                1,
                "bindshowProfilePop",
                2,
                "class",
                3,
                "uI",
                4,
                "uP",
                5,
              ],
              [],
              o63,
              x53,
              gg
            );
            _(h93, o03);
          }
          h93.wxXCkey = 1;
          h93.wxXCkey = 3;
          return f73;
        };
        b33.wxXCkey = 4;
        _2z(z, 8, o43, e, s, gg, b33, "item", "index", "e");
      }
      var aZ3 = _v();
      _(oX3, aZ3);
      if (_oz(z, 17, e, s, gg)) {
        aZ3.wxVkey = 1;
        var cA4 = _mz(
          z,
          "no-data",
          ["bind:__l", 18, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(aZ3, cA4);
      }
      var t13 = _v();
      _(oX3, t13);
      if (_oz(z, 22, e, s, gg)) {
        t13.wxVkey = 1;
        var oB4 = _mz(
          z,
          "load-more",
          ["bind:__l", 23, "binddoLoadmore", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(t13, oB4);
      }
      lY3.wxXCkey = 1;
      lY3.wxXCkey = 3;
      aZ3.wxXCkey = 1;
      aZ3.wxXCkey = 3;
      t13.wxXCkey = 1;
      t13.wxXCkey = 3;
      _(r, oX3);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_19";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa
);
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_19();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml"
  ] = [
    $gwx21_XC_19,
    "./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml"
  ] = $gwx21_XC_19(
    "./pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.wxml"
  );
__wxRoute = "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js";
define(
  "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
    var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      n = Object.defineProperty,
      i = Object.defineProperties,
      o = Object.getOwnPropertyDescriptors,
      r = Object.getOwnPropertySymbols,
      s = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      c = function (e, t, i) {
        return t in e
          ? n(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      },
      u = function (e, n) {
        for (var i in n || (n = {})) s.call(n, i) && c(e, i, n[i]);
        if (r) {
          var o,
            u = t(r(n));
          try {
            for (u.s(); !(o = u.n()).done; ) {
              i = o.value;
              a.call(n, i) && c(e, i, n[i]);
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
        }
        return e;
      },
      m = function (e, t) {
        return i(e, o(t));
      },
      p = function (e, t, n) {
        return new Promise(function (i, o) {
          var r = function (e) {
              try {
                a(n.next(e));
              } catch (e) {
                o(e);
              }
            },
            s = function (e) {
              try {
                a(n.throw(e));
              } catch (e) {
                o(e);
              }
            },
            a = function (e) {
              return e.done ? i(e.value) : Promise.resolve(e.value).then(r, s);
            };
          a((n = n.apply(e, t)).next());
        });
      },
      f = require("../../../../stock-community-base/utils/knife.js"),
      h = require("../../utils/mixins/securityCheck/index.js"),
      d = require("../../../../stock-community-base/utils/mixins/exposureReport.js"),
      l = require("../../../../../../../common/vendor.js"),
      g = require("store.js"),
      w = require("../../../../stock-community-base/utils/privacyCheck.js"),
      b = f.sdk.getUserInfo,
      I = {
        name: "NewsComList",
        options: { styleIsolation: "shared" },
        mixins: [h.securityCheck, d.exposureReport],
        components: {
          ComItem: function () {
            return "../ComItem/index.js";
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
        inject: {
          didAgreeUserAgreement: {
            default: function () {
              return {};
            },
          },
          onCheckUserAgreementStatus: { default: function () {} },
        },
        props: {
          pageType: { type: String, default: "news" },
          pUserinfo: {
            type: Object,
            default: function () {
              return {};
            },
          },
          newsId: { type: String, default: "" },
          newsInfo: {
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
        },
        provide: function () {
          return { newsCommentId: this.newsCommentId };
        },
        data: function () {
          return {
            pageInit: !1,
            platform: f.platform,
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
            dUserInfo: null,
          };
        },
        computed: m(u({}, g.statesMap), {
          itemTopHandle: function () {
            return (
              { wzq: ["more"], zxg: ["more"], mini: ["more"], web: [] }[
                f.platform
              ] || []
            );
          },
          itemBottomHandle: function () {
            return (
              {
                web: [],
                wzq: ["turn", "comment", "like"],
                mini: ["comment", "like"],
                zxg: ["turn", "comment", "like"],
              }[f.platform] || []
            );
          },
          noMoreText: function () {
            return (
              {
                web: "评论服务由腾讯自选股提供",
                wzq: "评论服务由腾讯自选股提供",
                mini: "评论服务由腾讯自选股提供",
                zxg: "已经到底了，触底反弹否极泰来",
              }[f.platform] || ""
            );
          },
          newsCommentId: function () {
            return this.newsInfo.commentid || "";
          },
        }),
        watch: {
          newsInfo: {
            deep: !0,
            immediate: !0,
            handler: function (e) {
              this.resetState(), e.id && 1 != +e.comment_status && this.init();
            },
          },
        },
        created: function () {
          this.dUserInfo = this.pUserinfo;
        },
        mounted: function () {
          this.userInit();
        },
        activated: function () {
          "news" === this.pageType &&
            "function" == typeof this.initBatchObserver &&
            this.initBatchObserver();
        },
        deactivated: function () {
          this.cleanupExposure();
        },
        beforeDestroy: function () {
          this.cleanupExposure();
        },
        methods: m(
          u(
            {
              cleanupExposure: function () {
                "news" === this.pageType &&
                  "function" == typeof this.removeAllExposureData &&
                  this.removeAllExposureData();
              },
            },
            g.mutations
          ),
          {
            showProfilePop: function (e) {
              this.$emit("showProfilePop", e);
            },
            resetState: function () {
              (this.pageInit = !1),
                (this.noNetwork = !1),
                (this.firstLoading = !0),
                this.clearCommentsData(),
                this.$emit("getCommentCount", 0);
            },
            init: function () {
              return p(
                this,
                null,
                e().mark(function t() {
                  var n;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = this.getParams(!0)),
                              (this.firstLoading = !0),
                              (e.t0 = this.dUserInfo && this.dUserInfo.openid),
                              e.t0)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 6), b();
                          case 6:
                            this.dUserInfo = e.sent;
                          case 7:
                            return (
                              (e.next = 9),
                              this.onPageInit({
                                params: n,
                                type: this.pageType,
                                info: this.dUserInfo,
                                scb: this.successHanlde,
                                fcb: this.networkErrorHandle,
                              })
                            );
                          case 9:
                            (this.pageInit = e.sent),
                              this.pageInit &&
                                this.$emit("getCommentCount", this.commentCnt);
                          case 11:
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
            deleteComItem: function (e) {
              this.deleteItem(e), this.$forceUpdate();
            },
            updateComList: function () {
              return p(this, arguments, function () {
                var t = this,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return e().mark(function i() {
                  var o;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ("like" !== n.type) {
                            e.next = 4;
                            break;
                          }
                          t.updateTimeLine(n), (e.next = 9);
                          break;
                        case 4:
                          return (
                            (o = t.getParams(!0)),
                            (e.next = 7),
                            t.onPageInit({
                              params: o,
                              type: t.pageType,
                              info: t.dUserInfo,
                              scb: t.successHanlde,
                              fcb: t.networkErrorHandle,
                            })
                          );
                        case 7:
                          (t.pageInit = e.sent),
                            t.pageInit &&
                              t.$emit("getCommentCount", t.commentCnt);
                        case 9:
                          t.$forceUpdate();
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, i);
                })();
              });
            },
            getParams: function (e) {
              var t = {
                id: this.newsId,
                visible: 1,
                limit: 10,
                _: Date.parse(new Date()),
                begin: "",
                content_link: 1,
              };
              return (
                e
                  ? ((this.pageNum = 0), (t.begin = ""), (t.begin_news = ""))
                  : (this.pageNum++,
                    (t.begin = this.min_id),
                    (t.begin_news = this.news_min_id || "")),
                (this.pageMaxNum = Math.max(this.pageNum, this.pageMaxNum)),
                (t.map_id = "news_".concat(this.newsId)),
                (t.comment_id = this.newsInfo.commentid || ""),
                t
              );
            },
            onHandleTapList: function (t, n) {
              return p(
                this,
                null,
                e().mark(function i() {
                  var o,
                    r,
                    s,
                    a,
                    c,
                    u,
                    m,
                    p = this;
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!w.isH5Native) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 3), w.sqPrivacyCheck();
                          case 3:
                            if (e.sent) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                            e.next = 9;
                            break;
                          case 7:
                            if (
                              this.didAgreeUserAgreement.value ||
                              !this.onCheckUserAgreementStatus
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              void this.onCheckUserAgreementStatus()
                            );
                          case 9:
                            (o = this.commentsData.findIndex(function (
                              e,
                              n,
                              i
                            ) {
                              return e.subject_id == t.subject_id;
                            })),
                              (s = (r = n || {}).eventName),
                              (a = r.eventData),
                              (c = {
                                putComment: "onPutComment",
                                turn: "onHandelTurn",
                                putLike: "onPutLike",
                                tapPerson: "onTapPerson",
                                tapImage: "onTapImage",
                                tapDetail: "onTapDetail",
                                tapContent: "onTapContent",
                                toggleShow: "onToggleShow",
                                tapMore: "onTapMore",
                                tapIllegal: "onTapIllegal",
                                tapDeleteItem: "onTapDeleteItem",
                              }),
                              "tapMore" !== s ||
                                ("zxg" !== f.platform &&
                                  "mini" !== f.platform) ||
                                ((u = Object.assign({}, a)),
                                (a.itemData = u),
                                (a.listData = this.commentsData)),
                              (m = (a || {}).fakeInput),
                              Object.keys(c).forEach(function (e) {
                                e === s &&
                                  p
                                    .securityCheck({
                                      eventName:
                                        "onTapDetail" === c[s]
                                          ? "tapDetail"
                                          : s,
                                      fakeInput: m,
                                      postData: p.commentsData[o] || {},
                                    })
                                    .then(function () {
                                      p[c[e]](a, o, {
                                        pageType: p.pageType,
                                        newsCommentId:
                                          p.newsInfo.commentid || "",
                                        itemData: p.commentsData[o],
                                      });
                                    });
                              }),
                              this.$forceUpdate();
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    i,
                    this
                  );
                })
              );
            },
            loadData: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return p(
                this,
                null,
                e().mark(function n() {
                  var i;
                  return e().wrap(
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
                              (i = this.getParams(!1)),
                              (e.next = 6),
                              this.getList(
                                i,
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
                    n,
                    this
                  );
                })
              );
            },
            successHanlde: function (e, t) {
              var n = this,
                i = t.more_flag,
                o = void 0 === i ? "" : i,
                r = t.min_id,
                s = void 0 === r ? "" : r,
                a = t.news_min_id,
                c = void 0 === a ? "" : a,
                u = t.comment_cnt,
                m = void 0 === u ? 0 : u;
              e && (this.firstLoading = !1),
                this.$nextTick(function () {
                  n.reinitBatchObserver();
                }),
                (this.nomore = !o),
                (this.min_id = s),
                (this.news_min_id = c),
                (this.commentCnt = m),
                (this.noNetwork = !1),
                (this.isLoading = !1),
                this.$forceUpdate(),
                this.$emit("getCommentUpdate", { nomore: this.nomore });
            },
            networkErrorHandle: function (e) {
              (this.noNetwork = !0),
                (this.firstLoading = e),
                (this.isLoading = !1);
            },
            timeoutLoad: function () {
              return p(
                this,
                null,
                e().mark(function t() {
                  return e().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (this.resetState(),
                              (e.t0 =
                                this.newsInfo.id &&
                                1 != +this.newsInfo.comment_status),
                              !e.t0)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 5), this.init();
                          case 5:
                            this.$forceUpdate();
                          case 6:
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
            isLast: function (e) {
              return e === this.commentsData.length - 1;
            },
          }
        ),
      };
    Array ||
      (
        l.resolveComponent("noNetwork") +
        l.resolveComponent("ComItem") +
        l.resolveComponent("noData") +
        l.resolveComponent("loadMore")
      )();
    var k = l._export_sfc(I, [
      [
        "render",
        function (e, t, n, i, o, r) {
          return l.e(
            {
              a: o.noNetwork && 0 === o.commentsData.length,
              b: l.o(function (e) {
                return r.loadData(!0);
              }, 1687),
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
                  d: l.f(o.commentsData, function (e, t, i) {
                    return {
                      a: l.o(
                        function (t) {
                          return r.onHandleTapList(e, t);
                        },
                        1688,
                        e.subject_id
                      ),
                      b: l.o(r.showProfilePop, 1689, e.subject_id),
                      c: "cb43bb3d-1-" + i,
                      d: l.p({
                        last: r.isLast(t),
                        pageType: n.pageType,
                        itemData: e,
                        itemTopHandle: r.itemTopHandle,
                        itemBottomHandle: r.itemBottomHandle,
                        showLabels: o.showLabels,
                        BUS: n.BUS,
                      }),
                      e: e.subject_id,
                      f: e.subject_id,
                    };
                  }),
                }
              : {},
            { e: !o.noNetwork && !o.commentsData.length },
            o.noNetwork || o.commentsData.length
              ? {}
              : {
                  f: l.p({
                    useBlack: !0,
                    text: n.isVIP ? "解锁后可查看评论" : "别观望，加入评论",
                  }),
                },
            { g: !o.firstLoading && o.commentsData.length },
            !o.firstLoading && o.commentsData.length
              ? {
                  h: l.o(r.loadData, 1690),
                  i: l.p({
                    noMoreText: r.noMoreText,
                    nomore: o.nomore,
                    noNetwork: o.noNetwork,
                  }),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-cb43bb3d"],
    ]);
    wx.createComponent(k);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js",
  }
);
require("pages/newsSbg/@tencent/stock-sq/src/source/NewsComList/index.js");
