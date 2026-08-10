$gwx44_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx44_XC_1 || [];
    function gz$gwx44_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "j"]]);
        Z([3, "_div message-custom-entry-item data-v-9be4f5ff"]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([3, "data-v-9be4f5ff"]);
        Z([3, "9be4f5ff-0"]);
        Z(z[2]);
        Z([[7], [3, "f"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_1;
    }
    function gz$gwx44_XC_1_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_1_2)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_2;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_1_2);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_2;
    }
    function gz$gwx44_XC_1_3() {
      if (__WXML_GLOBAL__.ops_cached.$gwx44_XC_1_3)
        return __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_3;
      __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_3 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div message-custom-wrapper data-v-02fc5416"]);
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([3, "data-v-02fc5416"]);
        Z([3, "02fc5416-0"]);
        Z([3, "item"]);
        Z([[7], [3, "b"]]);
        Z([3, "d"]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z(z[2]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z(z[3]);
        Z([[6], [[7], [3, "item"]], [3, "b"]]);
        Z(z[8]);
      })(__WXML_GLOBAL__.ops_cached.$gwx44_XC_1_3);
      return __WXML_GLOBAL__.ops_cached.$gwx44_XC_1_3;
    }
    __WXML_GLOBAL__.ops_set.$gwx44_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx44_XC_1 = true;
    var x = [
      "./pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.wxml",
      "./pages/messagebox/@tencent/st-message-box/components/redPointNum/index.wxml",
      "./pages/messagebox/@tencent/st-message-box/pages/custom/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_1_1();
      var c1D = _mz(z, "view", ["bindtap", 0, "class", 1], [], e, s, gg);
      var o2D = _v();
      _(c1D, o2D);
      if (_oz(z, 2, e, s, gg)) {
        o2D.wxVkey = 1;
        var a4D = _mz(
          z,
          "red-point-num",
          ["bind:__l", 3, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(o2D, a4D);
      }
      var l3D = _v();
      _(c1D, l3D);
      if (_oz(z, 7, e, s, gg)) {
        l3D.wxVkey = 1;
      }
      o2D.wxXCkey = 1;
      o2D.wxXCkey = 3;
      l3D.wxXCkey = 1;
      _(r, c1D);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_1_2();
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    d_[x[2]] = {};
    var m2 = function (e, s, r, gg) {
      var z = gz$gwx44_XC_1_3();
      var b7D = _n("view");
      _rz(z, b7D, "class", 0, e, s, gg);
      var o8D = _v();
      _(b7D, o8D);
      if (_oz(z, 1, e, s, gg)) {
        o8D.wxVkey = 1;
        var x9D = _mz(
          z,
          "message-empty",
          ["bind:__l", 2, "class", 1, "uI", 2],
          [],
          e,
          s,
          gg
        );
        _(o8D, x9D);
      } else {
        o8D.wxVkey = 2;
        var o0D = _v();
        _(o8D, o0D);
        var fAE = function (hCE, cBE, oDE, gg) {
          var oFE = _v();
          _(oDE, oFE);
          if (_oz(z, 8, hCE, cBE, gg)) {
            oFE.wxVkey = 1;
            var lGE = _mz(
              z,
              "custom-entry-item",
              [
                "bind:__l",
                9,
                "bindclickCustomEntry",
                1,
                "class",
                2,
                "uI",
                3,
                "uP",
                4,
              ],
              [],
              hCE,
              cBE,
              gg
            );
            _(oFE, lGE);
          }
          oFE.wxXCkey = 1;
          oFE.wxXCkey = 3;
          return oDE;
        };
        o0D.wxXCkey = 4;
        _2z(z, 6, fAE, e, s, gg, o0D, "item", "index", "d");
      }
      o8D.wxXCkey = 1;
      o8D.wxXCkey = 3;
      o8D.wxXCkey = 3;
      _(r, b7D);
      return r;
    };
    e_[x[2]] = { f: m2, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx44_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx44_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.wxml"
  ] = [
    $gwx44_XC_1,
    "./pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.wxml",
  ];
else
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.wxml"
  ] = $gwx44_XC_1(
    "./pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/components/redPointNum/index.wxml"
  ] = [
    $gwx44_XC_1,
    "./pages/messagebox/@tencent/st-message-box/components/redPointNum/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/components/redPointNum/index.wxml"
  ] = $gwx44_XC_1(
    "./pages/messagebox/@tencent/st-message-box/components/redPointNum/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/pages/custom/index.wxml"
  ] = [
    $gwx44_XC_1,
    "./pages/messagebox/@tencent/st-message-box/pages/custom/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/messagebox/@tencent/st-message-box/pages/custom/index.wxml"
  ] = $gwx44_XC_1(
    "./pages/messagebox/@tencent/st-message-box/pages/custom/index.wxml"
  );
__wxRoute =
  "pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.js";
define(
  "pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.js",
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
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../../common/vendor.js"),
      t = {
        components: {
          redPointNum: function () {
            return "../redPointNum/index.js";
          },
        },
        props: {
          entryData: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        setup: function (t, n) {
          var r = n.emit;
          return {
            clickCustomEntry: function (e) {
              r("clickCustomEntry", e);
            },
            isSimpleMode: e.computed(function () {
              return ["mpwzq", "wzqlight"].includes("mpweapp");
            }),
          };
        },
      };
    Array || e.resolveComponent("redPointNum")();
    var n = e._export_sfc(t, [
      [
        "render",
        function (t, n, r, a, o, m) {
          return e.e(
            {
              a: e.p({
                showType: r.entryData.show_type,
                unreadNum: r.entryData.unread_num,
              }),
              b: a.isSimpleMode
                ? r.entryData.iconSelected
                : r.entryData.iconSelectedPro,
              c: e.n("message-custom-item-icon" + r.entryData.msg_box_type),
              d: e.n("message-custom-item-icon-con" + r.entryData.msg_box_type),
              e: e.t(r.entryData.title),
              f: r.entryData.showTime,
            },
            r.entryData.showTime ? { g: e.t(r.entryData.time) } : {},
            {
              h: e.t(r.entryData.summary),
              i: e.n(
                "暂无消息" === r.entryData.summary
                  ? "message-custom-item-right-bot-nomsg"
                  : "message-custom-item-right-bot-hasmsg"
              ),
              j: e.o(function (e) {
                return a.clickCustomEntry(r.entryData);
              }, 2335),
            }
          );
        },
      ],
      ["__scopeId", "data-v-9be4f5ff"],
    ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.js",
  }
);
require("pages/messagebox/@tencent/st-message-box/components/custom/customEntryItem.js");
__wxRoute =
  "pages/messagebox/@tencent/st-message-box/components/redPointNum/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/messagebox/@tencent/st-message-box/components/redPointNum/index.js";
define(
  "pages/messagebox/@tencent/st-message-box/components/redPointNum/index.js",
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
      r = {
        props: {
          showType: { type: String, default: "" },
          unreadNum: { type: Number, default: 0 },
        },
      },
      u = e._export_sfc(r, [
        [
          "render",
          function (r, u, d, n, o, t) {
            return e.e(
              { a: "red_dot" === d.showType && d.unreadNum > 0 },
              "red_dot" === d.showType && d.unreadNum > 0
                ? {}
                : "num" === d.showType && d.unreadNum > 0
                ? { c: e.t(d.unreadNum > 99 ? "99+" : d.unreadNum) }
                : {},
              { b: "num" === d.showType && d.unreadNum > 0 }
            );
          },
        ],
        ["__scopeId", "data-v-8e2de1d7"],
      ]);
    wx.createComponent(u);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/messagebox/@tencent/st-message-box/components/redPointNum/index.js",
  }
);
require("pages/messagebox/@tencent/st-message-box/components/redPointNum/index.js");
__wxRoute = "pages/messagebox/@tencent/st-message-box/pages/custom/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/messagebox/@tencent/st-message-box/pages/custom/index.js";
define(
  "pages/messagebox/@tencent/st-message-box/pages/custom/index.js",
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
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../../common/vendor.js"),
      n = require("../../hooks/useHome.js"),
      r = require("../../hooks/useScroll.js"),
      o = require("../../utils/dealData.js"),
      s = "75",
      u = {
        components: {
          customEntryItem: function () {
            return "../../components/custom/customEntryItem.js";
          },
          messageEmpty: function () {
            return "../../components/empty/index.js";
          },
        },
        setup: function () {
          var u = t.inject("stockBridge"),
            c = t.inject("skin"),
            a = n.useHome(),
            i = a.customEntryList,
            m = a.clearOneCountStatus,
            p = a.getDealerInfo,
            l = a.bindBroker,
            d = a.bindBrokerList,
            _ = r.useScroll().setCustomHover,
            y = t.computed(function () {
              return ["mpwzq", "wzqlight"].includes("mpweapp");
            });
          return (
            _(!1),
            i.value.forEach(function (e) {
              e.unread_num > 0 &&
                u.report("yy.message_box.".concat(e.sub_type, "_red_brow"), {
                  msg_num: e.unread_num,
                });
            }),
            {
              customEntryList: i,
              clickCustomEntry: function (n) {
                return (
                  (r = this),
                  null,
                  (c = e().mark(function r() {
                    return e().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              u.report(
                                "yy.message_box.".concat(
                                  n.sub_type,
                                  "_entry_click"
                                )
                              ),
                              n.unread_num > 0 &&
                                u.report(
                                  "yy.message_box.".concat(
                                    n.sub_type,
                                    "_red_click"
                                  ),
                                  { msg_num: n.unread_num }
                                ),
                              (e.next = 4),
                              p()
                            );
                          case 4:
                            m({
                              msg_box_type: n.msg_box_type,
                              sub_type: n.sub_type,
                              dealer_code: l.value,
                              dealer_codes: d.value,
                            }),
                              setTimeout(function () {
                                if (
                                  ("mp" === t.StockBridge.ENV ||
                                    t._default().env,
                                  "customer" === n.sub_type)
                                ) {
                                  var e = "",
                                    r = s;
                                  ["stock", "wzqlight"].includes("mpweapp")
                                    ? (e =
                                        "https://wzq.tenpay.com/wzq/aics-cloud/xiaomi/page.do?channel=".concat(
                                          r,
                                          "&entry=wzq_search&tochat=1"
                                        ))
                                    : "mp" === u.ENV &&
                                      (e =
                                        "https://wzq.tenpay.com/wzq/aics-cloud/xiaomi/page.do?channel=".concat(
                                          r,
                                          "&entry=zxg_applet&tochat=1"
                                        )),
                                    u.openExtraWebview(e);
                                } else [o.BACK_END_MESSAGE_ID.feedback, o.BACK_END_MESSAGE_ID.platformNotify].includes(n.sub_type) && t.StockRouter.routeTo({ name: n.routename });
                              }, 200);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, r);
                  })),
                  new Promise(function (e, t) {
                    var n = function (e) {
                        try {
                          s(c.next(e));
                        } catch (e) {
                          t(e);
                        }
                      },
                      o = function (e) {
                        try {
                          s(c.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      },
                      s = function (t) {
                        return t.done
                          ? e(t.value)
                          : Promise.resolve(t.value).then(n, o);
                      };
                    s((c = c.apply(r, null)).next());
                  })
                );
                var r, c;
              },
              setCustomHover: _,
              isSimpleMode: y,
              skin: c,
            }
          );
        },
      };
    Array ||
      (
        t.resolveComponent("messageEmpty") +
        t.resolveComponent("customEntryItem")
      )();
    var c = t._export_sfc(u, [
      [
        "render",
        function (e, n, r, o, s, u) {
          return t.e(
            { a: 0 === o.customEntryList.length },
            0 === o.customEntryList.length
              ? {}
              : t.e(
                  {
                    b: t.f(o.customEntryList, function (e, n, r) {
                      return {
                        a: t.o(
                          function (t) {
                            return o.clickCustomEntry(e);
                          },
                          1254,
                          n
                        ),
                        b: "02fc5416-1-" + r,
                        c: t.p({ "entry-data": e }),
                        d: n,
                      };
                    }),
                    c: o.isSimpleMode,
                  },
                  (o.isSimpleMode || o.isSimpleMode || o.skin, {}),
                  { d: !o.isSimpleMode && "dark" === o.skin }
                )
          );
        },
      ],
      ["__scopeId", "data-v-02fc5416"],
    ]);
    wx.createComponent(c);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/messagebox/@tencent/st-message-box/pages/custom/index.js",
  }
);
require("pages/messagebox/@tencent/st-message-box/pages/custom/index.js");
