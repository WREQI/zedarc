$gwx22_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx22_XC_1 || [];
    function gz$gwx22_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx22_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx22_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx22_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "o"]]);
        Z([3, "_div cover data-v-fcaa0aed"]);
        Z([
          [2, "!"],
          [[7], [3, "n"]],
        ]);
        Z([[7], [3, "r0"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx22_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx22_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx22_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx22_XC_1 = true;
    var x = [
      "./pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx22_XC_1_1();
      var a4D = _mz(
        z,
        "view",
        ["bindtouchstart", 0, "class", 1, "hidden", 1],
        [],
        e,
        s,
        gg
      );
      var t5D = _v();
      _(a4D, t5D);
      if (_oz(z, 3, e, s, gg)) {
        t5D.wxVkey = 1;
      }
      t5D.wxXCkey = 1;
      _(r, a4D);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx22_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx22_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.wxml"
  ] = [
    $gwx22_XC_1,
    "./pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.wxml"
  ] = $gwx22_XC_1(
    "./pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.wxml"
  );
__wxRoute =
  "pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.js";
define(
  "pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.js",
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
    var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../../../../../common/vendor.js"),
      n = require("../../../stock-community-ui/utils/service/index.js"),
      o = require("../../../stock-community-base/utils/knife.js"),
      i = o.sdk.showToast,
      r = {
        name: "commentFloatEditor",
        props: {
          comEditData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          headimageurl: {
            type: String,
            default:
              "https://st.gtimg.com/design/374f66b04aedd22bd7ac8225ec3a14c2.png",
          },
        },
        watch: {
          comEditData: {
            deep: !0,
            immediate: !0,
            handler: function (t, e) {
              (this.showComEdit = !0), (this.focus = !0);
            },
          },
        },
        data: function () {
          return {
            focus: !0,
            showComEdit: !0,
            editStatus: "edit",
            keyboardHeight: 0,
            keyboardDuration: "0.3s",
            inputBottom: 0,
            disable: !0,
            animation: "",
            replyText: "",
            mpKeyboardChange: { type: Function, default: function () {} },
          };
        },
        created: function () {
          var t = this;
          (this.mpKeyboardChange = function (e) {
            var n = e.height,
              o = e.duration;
            t.keyboardHeight !== n &&
              ((t.keyboardHeight = n),
              (t.keyboardDuration = o),
              0 === n
                ? ((t.animation = "hide"), t.hideEdit())
                : n > 0 &&
                  setTimeout(function () {
                    (t.inputBottom = n), (t.animation = "popup");
                  }, 1e3 * o));
          }),
            e.wx$1.onKeyboardHeightChange(this.mpKeyboardChange);
        },
        beforeDestroy: function () {
          e.wx$1.offKeyboardHeightChange(this.mpKeyboardChange);
        },
        computed: {
          showEdit: function () {
            return this.editStatus;
          },
          placeholder: function () {
            var t;
            return "回复 ".concat(
              decodeURIComponent(
                (null == (t = this.comEditData) ? void 0 : t.touser) || ""
              ),
              "："
            );
          },
          platformClass: function () {
            return o.platform;
          },
        },
        methods: {
          preventTouch: function (t) {
            t.preventDefault && t.preventDefault(),
              t.stopPropagation && t.stopPropagation();
          },
          onInput: function (t) {
            var e, n, o, i;
            try {
              (this.disable =
                0 ===
                (null == (n = null == (e = t.detail) ? void 0 : e.value)
                  ? void 0
                  : n.length)),
                (this.replyText =
                  (null == (o = t.detail) ? void 0 : o.value) ||
                  (null == (i = null == t ? void 0 : t.target)
                    ? void 0
                    : i.value));
            } catch (t) {}
          },
          onConfirm: function (e) {
            return (
              (o = this),
              null,
              (r = t().mark(function () {
                var e, o, r, a, u, c, d, s, p, h, l, m, f, v, y, b, g;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!this.disable) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          return (
                            (e = this.comEditData),
                            (o = e.toOpenid),
                            (r = e.touser),
                            (a = e.content),
                            (u = e.id),
                            (c = e.rootid),
                            (d = e.type2),
                            (s = e.symbol),
                            (p = e.topicId),
                            (h = {
                              stock_id: "",
                              content:
                                "reply" === d
                                  ? ""
                                      .concat(this.replyText, "<1,")
                                      .concat(o, ":")
                                      .concat(r, "> ")
                                      .concat(a)
                                  : "".concat(this.replyText),
                              parent_id: u,
                              root_id: d && "reply" === d ? c : u,
                              attitude: 0,
                            }),
                            s ? (h.stock_id = s) : p && (h.topics = p),
                            (h.to_user = o || ""),
                            (t.prev = 4),
                            (t.next = 7),
                            n.getPreSendInfo({ parent_id: u })
                          );
                        case 7:
                          if (
                            ((l = t.sent), (m = l.data), (f = m.send_token))
                          ) {
                            t.next = 12;
                            break;
                          }
                          return t.abrupt("return");
                        case 12:
                          return (
                            (h.send_token = f), (t.next = 15), n.putComment(h)
                          );
                        case 15:
                          if (
                            ((v = t.sent),
                            (y = v.code),
                            (b = v.data),
                            -56001 != +y)
                          ) {
                            t.next = 20;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void i(
                              b ||
                                "您发布的内容包含敏感信息，待后台审核通过后再展示，请您耐心等待～"
                            )
                          );
                        case 20:
                          if (-56003 != +y) {
                            t.next = 22;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            void i(b || "亲，帖子正在审核中，请稍稍等一下哦~")
                          );
                        case 22:
                          (g = v.data),
                            this.loadNewComment(h, g),
                            (t.next = 28);
                          break;
                        case 26:
                          (t.prev = 26), (t.t0 = t.catch(4));
                        case 28:
                        case "end":
                          return t.stop();
                      }
                  },
                  u,
                  this,
                  [[4, 26]]
                );
              })),
              new Promise(function (t, e) {
                var n = function (t) {
                    try {
                      a(r.next(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  i = function (t) {
                    try {
                      a(r.throw(t));
                    } catch (t) {
                      e(t);
                    }
                  },
                  a = function (e) {
                    return e.done
                      ? t(e.value)
                      : Promise.resolve(e.value).then(n, i);
                  };
                a((r = r.apply(o, null)).next());
              })
            );
            var o, r;
          },
          loadNewComment: function (t, e) {
            this.$emit("newComment", t, e), this.hideEdit();
          },
          hideEdit: function () {
            (this.focus = !1),
              (this.showComEdit = !1),
              this.$emit("hideComEdit");
          },
        },
      },
      a = e._export_sfc(r, [
        [
          "render",
          function (t, n, o, i, r, a) {
            return {
              a: e.o(function () {
                return a.hideEdit && a.hideEdit.apply(a, arguments);
              }, 2035),
              b: e.o(function () {
                return a.preventTouch && a.preventTouch.apply(a, arguments);
              }, 2036),
              c: o.headimageurl,
              d: r.focus,
              e: a.placeholder,
              f: -1,
              g: e.o(function () {
                return a.onInput && a.onInput.apply(a, arguments);
              }, 2037),
              h: e.o(function () {
                return a.onConfirm && a.onConfirm.apply(a, arguments);
              }, 2038),
              i: e.o(function () {
                return a.onConfirm && a.onConfirm.apply(a, arguments);
              }, 2039),
              j: e.n(r.disable ? "disable" : ""),
              k: e.n(r.animation),
              l: e.n(a.platformClass),
              m: r.inputBottom + "px",
              n: r.showComEdit,
              o: e.o(function () {
                return a.preventTouch && a.preventTouch.apply(a, arguments);
              }, 2040),
            };
          },
        ],
        ["__scopeId", "data-v-fcaa0aed"],
      ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.js",
  }
);
require("pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.js");
