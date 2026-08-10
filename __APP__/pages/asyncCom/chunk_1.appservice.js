$gwx1_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_1 || [];
    function gz$gwx1_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "b"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_1 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_1_1();
      var oR = _v();
      _(r, oR);
      if (_oz(z, 0, e, s, gg)) {
        oR.wxVkey = 1;
      }
      oR.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml"
  ] = [
    $gwx1_XC_1,
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml"
  ] = $gwx1_XC_1(
    "./pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js";
define(
  "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js",
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
    var t = require("../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = function (t, e, o) {
        return new Promise(function (i, r) {
          var n = function (t) {
              try {
                s(o.next(t));
              } catch (t) {
                r(t);
              }
            },
            l = function (t) {
              try {
                s(o.throw(t));
              } catch (t) {
                r(t);
              }
            },
            s = function (t) {
              return t.done ? i(t.value) : Promise.resolve(t.value).then(n, l);
            };
          s((o = o.apply(t, e)).next());
        });
      },
      o = require("../../../../../../../../common/vendor.js"),
      i = getApp().globalData,
      r = "growth-user.behavior.union",
      n = {
        inject: { hqBridge: {} },
        props: {
          premote: {
            type: Object,
            default: function () {
              return {};
            },
          },
          parentNum: { type: Number, default: 1 },
        },
        data: function () {
          return {
            rect: {},
            arrowStyle: {},
            bubbleStyle: {},
            wrapperStyle: { opacity: 0 },
            showFlag: !0,
            showCount: 0,
            advConfig: {},
            text: "",
          };
        },
        watch: {
          premote: {
            immediate: !0,
            deep: !0,
            handler: function (t) {
              var e = this;
              if (t && t.bubbleConfig && t.ad_list && t.ad_list.length > 0)
                if (
                  ((this.advConfig = t.ad_list[0]),
                  this.hqBridge && t.bubbleConfig.show_condition)
                ) {
                  var o = t.bubbleConfig.show_condition;
                  this.hqBridge.busOn(
                    "mp-bubble-show-".concat(o),
                    function (t) {
                      e.showCount ||
                        e.calBubblePosition(null == t ? void 0 : t.main_text);
                    }
                  );
                } else this.calBubblePosition();
            },
          },
        },
        beforeDestroy: function () {
          var t,
            e,
            i =
              null == (e = null == (t = this.premote) ? void 0 : t.bubbleConfig)
                ? void 0
                : e.show_condition;
          this.hqBridge.busOff("mp-bubble-show-".concat(i)),
            this.addChooseFlag && o.StockBridge.busOff(r, this.handleClick);
        },
        created: function () {},
        methods: {
          getText: function () {
            var t,
              e,
              o,
              i =
                null ==
                (e = null == (t = this.premote) ? void 0 : t.bubbleConfig)
                  ? void 0
                  : e.main_text;
            return (
              i ||
                (i = null == (o = this.premote.texts) ? void 0 : o.main_text),
              i
            );
          },
          getWindowWidth: function () {
            var t;
            return (
              o.index.getSystemInfo({
                success: function (e) {
                  t = e.windowWidth;
                },
              }),
              t
            );
          },
          closeBubble: function () {
            var t = this.getParent();
            if (((this.showFlag = !1), t)) {
              var e =
                (t.deliveryFormatStatName &&
                  t.deliveryFormatStatName(this.premote, "close")) ||
                "";
              t.deliveryReportMta && t.deliveryReportMta(t, this.premote, e),
                t.reportQianjiGo &&
                  t.reportQianjiGo(t, this.advConfig.dp_ctx, "close");
            }
          },
          getNodeWidth: function (o) {
            return e(
              this,
              null,
              t().mark(function e() {
                return t().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          new Promise(function (t) {
                            o.boundingClientRect(function (e) {
                              t(e);
                            }).exec();
                          })
                        );
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, e);
              })
            );
          },
          getParent: function () {
            var t;
            return 2 === this.parentNum
              ? null == (t = this.$parent)
                ? void 0
                : t.$parent
              : this.$parent;
          },
          calBubblePosition: function (n) {
            var l,
              s,
              u = this;
            try {
              var a = n || this.getText();
              (this.text = a),
                (null ==
                (s = null == (l = this.premote) ? void 0 : l.bubbleConfig)
                  ? void 0
                  : s.textBreakline) &&
                  (a > 26
                    ? (this.text = ""
                        .concat(a.slice(0, 13), "<br>")
                        .concat(a.slice(13, 26), "<br>")
                        .concat(a.slice(26)))
                    : a > 13 &&
                      (this.text = ""
                        .concat(a.slice(0, 13), "<br>")
                        .concat(a.slice(13)))),
                setTimeout(function () {
                  return e(
                    u,
                    null,
                    t().mark(function e() {
                      var n,
                        l,
                        s,
                        u,
                        a,
                        p,
                        b,
                        h,
                        c,
                        d,
                        f,
                        g,
                        m,
                        v,
                        x,
                        w,
                        y,
                        C,
                        _,
                        S,
                        B,
                        k,
                        R,
                        F,
                        N,
                        P,
                        W,
                        Q,
                        O,
                        $,
                        E,
                        L,
                        j,
                        M,
                        q,
                        T,
                        A,
                        G,
                        I,
                        U,
                        D,
                        Z,
                        z,
                        H,
                        J,
                        K,
                        V,
                        X,
                        Y,
                        tt,
                        et,
                        ot,
                        it,
                        rt,
                        nt,
                        lt,
                        st,
                        ut,
                        at = this;
                      return t().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (this.arrowStyle.top) {
                                  t.next = 45;
                                  break;
                                }
                                if (
                                  ((I = this.getParent()),
                                  (U = {}),
                                  (D = { top: 0 }),
                                  !(null ==
                                  (l =
                                    null == (n = this.premote)
                                      ? void 0
                                      : n.bubbleConfig)
                                    ? void 0
                                    : l.is_scroll_view))
                                ) {
                                  t.next = 11;
                                  break;
                                }
                                if (
                                  (U = o.wx$1
                                    .createSelectorQuery()
                                    .in(I)
                                    .select(".scroll-wrapper"))
                                ) {
                                  t.next = 5;
                                  break;
                                }
                                return t.abrupt("return");
                              case 5:
                                return (t.next = 7), this.getNodeWidth(U);
                              case 7:
                                if (((t.t0 = t.sent), t.t0)) {
                                  t.next = 10;
                                  break;
                                }
                                t.t0 = D;
                              case 10:
                                D = t.t0;
                              case 11:
                                if (
                                  (Z =
                                    null ==
                                    (u =
                                      null == (s = this.premote)
                                        ? void 0
                                        : s.bubbleConfig)
                                      ? void 0
                                      : u.bubble_id)
                                ) {
                                  t.next = 14;
                                  break;
                                }
                                return t.abrupt("return");
                              case 14:
                                if (
                                  (null ==
                                  (p =
                                    null == (a = this.premote)
                                      ? void 0
                                      : a.bubbleConfig)
                                    ? void 0
                                    : p.is_ref) &&
                                  (null ==
                                  (h =
                                    null == (b = this.premote)
                                      ? void 0
                                      : b.bubbleConfig)
                                    ? void 0
                                    : h.com_ref)
                                )
                                  try {
                                    I =
                                      I.$refs[
                                        null ==
                                        (d =
                                          null == (c = this.premote)
                                            ? void 0
                                            : c.bubbleConfig)
                                          ? void 0
                                          : d.com_ref
                                      ];
                                  } catch (t) {
                                    (I = null),
                                      i.mpReporter.reportEvent(
                                        "MPWZQ-BUBBELALL-REF-ERROR",
                                        { ext1: t }
                                      );
                                  }
                                if (I) {
                                  t.next = 17;
                                  break;
                                }
                                return t.abrupt("return");
                              case 17:
                                if (
                                  (z = o.wx$1
                                    .createSelectorQuery()
                                    .in(I)
                                    .select(Z))
                                ) {
                                  t.next = 20;
                                  break;
                                }
                                return t.abrupt("return");
                              case 20:
                                return (t.next = 22), this.getNodeWidth(z);
                              case 22:
                                if ((H = t.sent)) {
                                  t.next = 25;
                                  break;
                                }
                                return t.abrupt("return");
                              case 25:
                                return (
                                  (J = H.width),
                                  (K = H.height),
                                  (V = H.top),
                                  (X = H.left),
                                  (Y = this.getWindowWidth()),
                                  (tt = 750 / Y),
                                  (et = o.wx$1
                                    .createSelectorQuery()
                                    .in(this)
                                    .select(".bubble")),
                                  (t.next = 34),
                                  this.getNodeWidth(et)
                                );
                              case 34:
                                if ((ot = t.sent)) {
                                  t.next = 37;
                                  break;
                                }
                                return t.abrupt("return");
                              case 37:
                                return (
                                  (it = o.wx$1
                                    .createSelectorQuery()
                                    .in(this)
                                    .select(".arrow")),
                                  (t.next = 40),
                                  this.getNodeWidth(it)
                                );
                              case 40:
                                if ((rt = t.sent)) {
                                  t.next = 43;
                                  break;
                                }
                                return t.abrupt("return");
                              case 43:
                                (nt = (
                                  null ==
                                  (g =
                                    null == (f = this.premote)
                                      ? void 0
                                      : f.bubbleConfig)
                                    ? void 0
                                    : g.is_fixed
                                )
                                  ? "fixed"
                                  : "absolute"),
                                  "mid" ===
                                    (null ==
                                    (v =
                                      null == (m = this.premote)
                                        ? void 0
                                        : m.bubbleConfig)
                                      ? void 0
                                      : v.colum_pos) &&
                                  "top" ===
                                    (null ==
                                    (w =
                                      null == (x = this.premote)
                                        ? void 0
                                        : x.bubbleConfig)
                                      ? void 0
                                      : w.arrow_pos)
                                    ? ((this.arrowStyle = {
                                        top:
                                          V -
                                          rt.height -
                                          D.top -
                                          12 / tt +
                                          "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        position: nt,
                                        height: 14 / tt + "px",
                                      }),
                                      (lt = X - ot.width / 2 + J / 2),
                                      (this.bubbleStyle = {
                                        top:
                                          V -
                                          rt.height -
                                          ot.height -
                                          D.top -
                                          12 / tt +
                                          "px",
                                        left: "".concat(
                                          lt - 15 > 0 ? lt : 15,
                                          "px"
                                        ),
                                        position: nt,
                                      }))
                                    : "left" ===
                                        (null ==
                                        (C =
                                          null == (y = this.premote)
                                            ? void 0
                                            : y.bubbleConfig)
                                          ? void 0
                                          : C.colum_pos) &&
                                      "top" ===
                                        (null ==
                                        (S =
                                          null == (_ = this.premote)
                                            ? void 0
                                            : _.bubbleConfig)
                                          ? void 0
                                          : S.arrow_pos)
                                    ? ((this.arrowStyle = {
                                        top:
                                          V -
                                          rt.height -
                                          D.top -
                                          12 / tt +
                                          "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        position: nt,
                                        height: 14 / tt + "px",
                                      }),
                                      (this.bubbleStyle = {
                                        top:
                                          V -
                                          rt.height -
                                          ot.height -
                                          D.top -
                                          12 / tt +
                                          "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        position: nt,
                                      }))
                                    : "right" ===
                                        (null ==
                                        (k =
                                          null == (B = this.premote)
                                            ? void 0
                                            : B.bubbleConfig)
                                          ? void 0
                                          : k.colum_pos) &&
                                      "top" ===
                                        (null ==
                                        (F =
                                          null == (R = this.premote)
                                            ? void 0
                                            : R.bubbleConfig)
                                          ? void 0
                                          : F.arrow_pos)
                                    ? ((this.arrowStyle = {
                                        top:
                                          V -
                                          rt.height -
                                          D.top -
                                          12 / tt +
                                          "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        position: nt,
                                        height: 14 / tt + "px",
                                      }),
                                      (this.bubbleStyle = {
                                        top:
                                          V -
                                          rt.height -
                                          ot.height -
                                          D.top -
                                          12 / tt +
                                          "px",
                                        right:
                                          Y - (X + J / 2 + rt.width / 2) + "px",
                                        position: nt,
                                      }))
                                    : "mid" ===
                                        (null ==
                                        (P =
                                          null == (N = this.premote)
                                            ? void 0
                                            : N.bubbleConfig)
                                          ? void 0
                                          : P.colum_pos) &&
                                      "bottom" ===
                                        (null ==
                                        (Q =
                                          null == (W = this.premote)
                                            ? void 0
                                            : W.bubbleConfig)
                                          ? void 0
                                          : Q.arrow_pos)
                                    ? ((this.arrowStyle = {
                                        top: V + K - D.top + 12 / tt + "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        transform: "rotate(180deg)",
                                        position: nt,
                                      }),
                                      (this.bubbleStyle = {
                                        top:
                                          V +
                                          K +
                                          rt.height -
                                          D.top +
                                          12 / tt +
                                          "px",
                                        left: X - ot.width / 2 + J / 2 + "px",
                                        position: nt,
                                      }))
                                    : "left" ===
                                        (null ==
                                        ($ =
                                          null == (O = this.premote)
                                            ? void 0
                                            : O.bubbleConfig)
                                          ? void 0
                                          : $.colum_pos) &&
                                      "bottom" ===
                                        (null ==
                                        (L =
                                          null == (E = this.premote)
                                            ? void 0
                                            : E.bubbleConfig)
                                          ? void 0
                                          : L.arrow_pos)
                                    ? ((this.arrowStyle = {
                                        top: V + K - D.top + 12 / tt + "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        transform: "rotate(180deg)",
                                        position: nt,
                                      }),
                                      (this.bubbleStyle = {
                                        top:
                                          V +
                                          K +
                                          rt.height -
                                          D.top +
                                          12 / tt +
                                          "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        position: nt,
                                      }))
                                    : "right" ===
                                        (null ==
                                        (M =
                                          null == (j = this.premote)
                                            ? void 0
                                            : j.bubbleConfig)
                                          ? void 0
                                          : M.colum_pos) &&
                                      "bottom" ===
                                        (null ==
                                        (T =
                                          null == (q = this.premote)
                                            ? void 0
                                            : q.bubbleConfig)
                                          ? void 0
                                          : T.arrow_pos) &&
                                      ((this.arrowStyle = {
                                        top: V + K - D.top + 12 / tt + "px",
                                        left: X - (rt.width - J) / 2 + "px",
                                        transform: "rotate(180deg)",
                                        position: nt,
                                      }),
                                      (this.bubbleStyle = {
                                        top:
                                          V +
                                          K +
                                          rt.height -
                                          D.top +
                                          12 / tt +
                                          "px",
                                        right:
                                          Y - (X + J / 2 + rt.width / 2) + "px",
                                        position: nt,
                                      }));
                              case 45:
                                (this.wrapperStyle = { opacity: 1 }),
                                  (this.showFlag = this.getText()),
                                  this.showFlag &&
                                    ((st = this.getParent()),
                                    (this.showCount = 1),
                                    st &&
                                      ((ut =
                                        (st.deliveryFormatStatName &&
                                          st.deliveryFormatStatName(
                                            this.premote,
                                            "brow"
                                          )) ||
                                        ""),
                                      st.deliveryReportMta &&
                                        st.deliveryReportMta(
                                          st,
                                          this.premote,
                                          ut
                                        ),
                                      st.reportQianjiGo &&
                                        st.reportQianjiGo(
                                          st,
                                          this.advConfig.dp_ctx,
                                          "show"
                                        )),
                                    setTimeout(function () {
                                      at.showFlag = !1;
                                    }, 3e3),
                                    this.$emit("showBubble"),
                                    ".unadd-wrapper" ===
                                      (null ==
                                      (G =
                                        null == (A = this.premote)
                                          ? void 0
                                          : A.bubbleConfig)
                                        ? void 0
                                        : G.bubble_id) &&
                                      ((this.addChooseFlag = !0),
                                      o.StockBridge.busOn(
                                        r,
                                        this.handleClick
                                      )));
                              case 46:
                              case "end":
                                return t.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                }, 1e3);
            } catch (a) {
              i.mpReporter.reportEvent(
                "MPWZQ-BUBBELALL-CALBUBBLEPOSITION-ERROR",
                { ext1: a }
              );
            }
          },
          handleClick: function () {
            var t,
              e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = i.event;
            "custom_add_stock" === r &&
              (null ==
                (e = null == (t = o.StockBridge) ? void 0 : t.deliverySdk) ||
                e.deliveryMtaAndRport(this.premote, "click"));
          },
        },
      },
      l = o._export_sfc(n, [
        [
          "render",
          function (t, e, i, r, n, l) {
            return o.e(
              {
                a: n.text,
                b:
                  i.premote &&
                  i.premote.bubbleConfig &&
                  i.premote.bubbleConfig.can_close,
              },
              i.premote &&
                i.premote.bubbleConfig &&
                i.premote.bubbleConfig.can_close
                ? {
                    c: o.o(function () {
                      return l.closeBubble && l.closeBubble.apply(l, arguments);
                    }, 1274),
                  }
                : {},
              {
                d: o.s(n.bubbleStyle),
                e: o.s(n.arrowStyle),
                f: n.showFlag,
                g: o.s(n.wrapperStyle),
              }
            );
          },
        ],
      ]);
    wx.createComponent(l);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js",
  }
);
require("pages/asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js");
