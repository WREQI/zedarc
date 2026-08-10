$gwx21_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx21_XC_1 || [];
    function gz$gwx21_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx21_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx21_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx21_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div common-bar data-v-ffa6d5e3"]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "c"]]);
        Z([3, "data-v-ffa6d5e3"]);
        Z([3, "ffa6d5e3-0"]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "q"]]);
        Z([[7], [3, "A"]]);
        Z([[7], [3, "C"]]);
        Z(z[2]);
        Z([[7], [3, "B"]]);
        Z(z[6]);
        Z([3, "ffa6d5e3-1"]);
        Z(z[13]);
      })(__WXML_GLOBAL__.ops_cached.$gwx21_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx21_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx21_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx21_XC_1 = true;
    var x = [
      "./pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx21_XC_1_1();
      var xQ = _n("view");
      _rz(z, xQ, "class", 0, e, s, gg);
      var oR = _v();
      _(xQ, oR);
      if (_oz(z, 1, e, s, gg)) {
        oR.wxVkey = 1;
        var cW = _mz(
          z,
          "ai-bar",
          [
            "bind:__l",
            2,
            "bindonClickAiDialog",
            1,
            "bindonHideAiEntry",
            2,
            "bindonShowAiEntry",
            3,
            "class",
            4,
            "uI",
            5,
            "uP",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(oR, cW);
      }
      var fS = _v();
      _(xQ, fS);
      if (_oz(z, 9, e, s, gg)) {
        fS.wxVkey = 1;
      }
      var cT = _v();
      _(xQ, cT);
      if (_oz(z, 10, e, s, gg)) {
        cT.wxVkey = 1;
      }
      var hU = _v();
      _(xQ, hU);
      if (_oz(z, 11, e, s, gg)) {
        hU.wxVkey = 1;
      }
      var oV = _v();
      _(xQ, oV);
      if (_oz(z, 12, e, s, gg)) {
        oV.wxVkey = 1;
        var oX = _v();
        _(oV, oX);
        if (_oz(z, 13, e, s, gg)) {
          oX.wxVkey = 1;
          var lY = _mz(
            z,
            "half-screen-ai-entry",
            [
              "bind:__l",
              14,
              "bindonSubscribeTipsClose",
              1,
              "class",
              2,
              "uI",
              3,
              "uP",
              4,
            ],
            [],
            e,
            s,
            gg
          );
          _(oX, lY);
        }
        oX.wxXCkey = 1;
        oX.wxXCkey = 3;
      }
      oR.wxXCkey = 1;
      oR.wxXCkey = 3;
      fS.wxXCkey = 1;
      cT.wxXCkey = 1;
      hU.wxXCkey = 1;
      oV.wxXCkey = 1;
      oV.wxXCkey = 3;
      _(r, xQ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx21_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx21_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.wxml"
  ] = [
    $gwx21_XC_1,
    "./pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.wxml"
  ] = $gwx21_XC_1(
    "./pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.wxml"
  );
__wxRoute =
  "pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.js";
define(
  "pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.js",
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
    var e = require("../../../../../../common/vendor.js"),
      n = {
        components: {
          AiBar: function () {
            return "../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js";
          },
          HalfScreenAiEntry: function () {
            return "../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
          },
        },
        emits: ["onShowAiDialog", "onEdit", "onGoComment", "onClickShare"],
        mixins: [
          require("../../../stock-community-ui/utils/mixins/securityCheck/index.js")
            .securityCheck,
        ],
        props: {
          contentId: { type: String, default: "" },
          aiScene: { type: String, default: "" },
          aiReportPrefix: { type: String, default: "" },
          aiTheme: { type: String, default: "" },
          aiReportInfo: {
            type: Object,
            default: function () {
              return {};
            },
          },
          showComment: { type: String, default: "" },
          forbidComment: { type: Boolean, default: !1 },
          commentNum: { type: Number, default: 0 },
          showShare: { type: String, default: "default" },
          forwardNum: { type: Number, default: 0 },
        },
        setup: function (n, o) {
          var t = o.emit,
            i = e.getCurrentInstance().proxy || e.getCurrentInstance(),
            r = e.inject("stockBridge"),
            a = e.inject("didAgreeUserAgreement", { value: !0 }),
            u = e.inject("onCheckUserAgreementStatus", function () {}),
            m = e.ref(!1),
            c = e.computed(function () {
              return !n.forbidComment && m.value;
            }),
            s = e.ref(!1),
            l = e.ref(null),
            f = e.computed(function () {
              return n.forbidComment || !n.commentNum
                ? "评论"
                : "".concat(n.commentNum);
            }),
            d = e.computed(function () {
              return "edit" === n.showComment || 0 === n.commentNum;
            }),
            h = function () {
              if ((null == a ? void 0 : a.value) || "function" != typeof u)
                if (n.forbidComment) {
                  r.toast("暂不开放评论", "none");
                } else
                  i.securityCheck({ eventName: "putSubject" }).then(
                    function () {
                      t("onEdit");
                    }
                  );
              else u();
            },
            p = e.ref(""),
            C = 0,
            w = null;
          return {
            showAiEntry: c,
            onShowAiDialog: function (e) {
              (s.value = !0), (l.value = e);
            },
            onCloseAiDialog: function () {
              (s.value = !1), (l.value = null);
            },
            onShowAiEntry: function () {
              m.value = !0;
            },
            onHideAiEntry: function () {
              m.value = !1;
            },
            showAiDialog: s,
            aiQuestionObj: l,
            stockBridge: r,
            didAgreeUserAgreement: a,
            commentText: f,
            showEditButton: d,
            onClickReplyBar: function () {
              h();
            },
            onClickComment: function () {
              d.value ? h() : t("onGoComment");
            },
            onClickShare: function () {
              t("onClickShare");
            },
            startShareAnim: function (n, o) {
              (C = n > 0 ? n : 6),
                (w = o),
                (p.value = ""),
                e.nextTick$1(function () {
                  p.value = "breath-anim";
                });
            },
            animClass: p,
            onAnimationIteration: function () {
              0 === (C -= 1) && ((p.value = ""), w && w());
            },
            showProfilePop: function (e) {
              t("showProfilePop", e);
            },
          };
        },
      };
    Array ||
      (
        e.resolveComponent("AiBar") + e.resolveComponent("half-screen-ai-entry")
      )();
    var o = e._export_sfc(n, [
      [
        "render",
        function (n, o, t, i, r, a) {
          return e.e(
            { a: t.aiScene && t.contentId },
            t.aiScene && t.contentId
              ? {
                  b: e.o(i.onShowAiDialog, 2140),
                  c: e.o(i.onShowAiEntry, 2141),
                  d: e.o(i.onHideAiEntry, 2142),
                  e: e.p({
                    "report-prefix": t.aiReportPrefix,
                    "report-info": t.aiReportInfo,
                    scene: t.aiScene,
                    "content-id": t.contentId,
                  }),
                }
              : {},
            { f: i.showAiEntry, g: t.showComment && !i.showAiEntry },
            t.showComment && !i.showAiEntry
              ? e.e({ h: t.forbidComment }, (t.forbidComment, {}), {
                  i: e.t(t.forbidComment ? "暂不开放评论" : "谈谈我的想法"),
                  j: e.o(function () {
                    return (
                      i.onClickReplyBar && i.onClickReplyBar.apply(i, arguments)
                    );
                  }, 2143),
                })
              : {},
            { k: t.showComment },
            t.showComment
              ? e.e(
                  { l: t.forbidComment },
                  (t.forbidComment || i.showEditButton, {}),
                  {
                    m: i.showEditButton,
                    n: e.t(i.commentText),
                    o: e.n(t.forbidComment ? "forbid" : ""),
                    p: e.o(function () {
                      return (
                        i.onClickComment && i.onClickComment.apply(i, arguments)
                      );
                    }, 2144),
                  }
                )
              : {},
            { q: t.showShare && i.didAgreeUserAgreement },
            t.showShare && i.didAgreeUserAgreement
              ? e.e(
                  { r: "default" === t.showShare },
                  ("default" === t.showShare ||
                    "wx" === t.showShare ||
                    t.showShare,
                  {}),
                  {
                    s: "wx" === t.showShare,
                    t: "pyq" === t.showShare,
                    v: e.n(i.animClass),
                    w: e.o(function () {
                      return (
                        i.onAnimationIteration &&
                        i.onAnimationIteration.apply(i, arguments)
                      );
                    }, 2145),
                    x: t.forwardNum >= 99,
                  },
                  t.forwardNum >= 99
                    ? {}
                    : { y: e.t(t.forwardNum ? t.forwardNum : "分享") },
                  {
                    z: e.o(function () {
                      return (
                        i.onClickShare && i.onClickShare.apply(i, arguments)
                      );
                    }, 2146),
                  }
                )
              : {},
            { A: i.showAiDialog && i.aiQuestionObj },
            i.showAiDialog && i.aiQuestionObj
              ? {
                  B: e.o(i.onCloseAiDialog, 2147),
                  C: e.p({
                    "sse-serve-type": "newsSummaryServerHttp",
                    theme: t.aiTheme,
                    "show-ai-dialog": i.showAiDialog,
                    "ai-dialog-question": i.aiQuestionObj.title || "",
                    "ai-question-query": i.aiQuestionObj.prompt || "",
                    "server-obj": i.aiQuestionObj,
                    "source-from": i.aiQuestionObj.scene || t.aiScene,
                    "need-preset-question": !0,
                  }),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-ffa6d5e3"],
    ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.js",
  }
);
require("pages/newsSbg/@tencent/stock-common-bar/component/commonbar-pro/index.js");
