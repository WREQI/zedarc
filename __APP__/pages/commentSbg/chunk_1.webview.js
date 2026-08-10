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
        Z([[7], [3, "a"]]);
        Z([[7], [3, "b"]]);
        Z([3, "_div prevent-scroll data-v-fcaa0aed"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "data-v-fcaa0aed"]],
                [1, "input-container"],
              ],
              [[7], [3, "k"]],
            ],
            [[7], [3, "l"]],
          ],
        ]);
        Z([
          [2, "+"],
          [1, "padding-bottom:"],
          [[7], [3, "m"]],
        ]);
        Z([3, "_div input-area data-v-fcaa0aed"]);
        Z([3, "_img header data-v-fcaa0aed"]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "r0"]]);
        Z([1, false]);
        Z([1, true]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "g"]]);
        Z([3, "input-box data-v-fcaa0aed"]);
        Z([3, "send"]);
        Z([3, "true"]);
        Z([[7], [3, "d"]]);
        Z(z[13]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([3, "color:#98A0B3;font-size:16px;line-height:22px;"]);
        Z([3, "textarea"]);
        Z(z[12]);
        Z([3, "_div emoji-container data-v-fcaa0aed"]);
        Z([[7], [3, "i"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-fcaa0aed"]],
              [1, "confirm-btn"],
            ],
            [[7], [3, "j"]],
          ],
        ]);
        Z([3, "发送"]);
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
      var c0F = _mz(
        z,
        "view",
        ["bindtouchstart", 0, "class", 1, "hidden", 1],
        [],
        e,
        s,
        gg
      );
      var hAG = _mz(
        z,
        "view",
        ["catchtap", 3, "catchtouchmove", 1, "class", 2],
        [],
        e,
        s,
        gg
      );
      _(c0F, hAG);
      var oBG = _mz(z, "view", ["class", 6, "style", 1], [], e, s, gg);
      var cCG = _n("view");
      _rz(z, cCG, "class", 8, e, s, gg);
      var lEG = _mz(z, "image", ["class", 9, "src", 1], [], e, s, gg);
      _(cCG, lEG);
      var oDG = _v();
      _(cCG, oDG);
      if (_oz(z, 11, e, s, gg)) {
        oDG.wxVkey = 1;
        var aFG = _mz(
          z,
          "textarea",
          [
            "autoHeight",
            -1,
            "adjustPosition",
            12,
            "autoFocus",
            1,
            "bindconfirm",
            2,
            "bindinput",
            3,
            "class",
            4,
            "confirmType",
            5,
            "disableDefaultPadding",
            6,
            "focus",
            7,
            "holdKeyboard",
            8,
            "maxlength",
            9,
            "placeholder",
            10,
            "placeholderStyle",
            11,
            "ref",
            12,
            "showConfirmBar",
            13,
          ],
          [],
          e,
          s,
          gg
        );
        _(oDG, aFG);
      }
      oDG.wxXCkey = 1;
      _(oBG, cCG);
      var tGG = _n("view");
      _rz(z, tGG, "class", 26, e, s, gg);
      var eHG = _mz(z, "view", ["catchtap", 27, "class", 1], [], e, s, gg);
      var bIG = _oz(z, 29, e, s, gg);
      _(eHG, bIG);
      _(tGG, eHG);
      _(oBG, tGG);
      _(c0F, oBG);
      _(r, c0F);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx22_XC_1";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        if (
          typeof outerGlobal.__webview_engine_version__ != "undefined" &&
          outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 &&
          outerGlobal.__mergeData__
        ) {
          env = outerGlobal.__mergeData__(env, dd);
        }
        try {
          main(env, {}, root, global);
          _tsd(root);
          if (
            typeof outerGlobal.__webview_engine_version__ == "undefined" ||
            outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6
          ) {
            return _ev(root);
          }
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

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "cover.",
      [1],
      "data-v-fcaa0aed{z-index:9999}\n.",
      [1],
      "cover .",
      [1],
      "prevent-scroll.",
      [1],
      "data-v-fcaa0aed,.",
      [1],
      "cover.",
      [1],
      "data-v-fcaa0aed{background-color:initial;height:100vh;left:0;position:fixed;top:0;width:100vw}\n.",
      [1],
      "cover .",
      [1],
      "input-container.",
      [1],
      "data-v-fcaa0aed{background-color:#f5f6fa;bottom:0;display:-webkit-flex;display:flex;left:0;position:relative;position:fixed;width:100vw}\n.",
      [1],
      "cover .",
      [1],
      "input-container.",
      [1],
      "data-v-fcaa0aed:after{background-color:#dcdfe6;content:\x22\x22;display:block;height:1PX;left:0;margin-top:-.006666666666666667rem;position:absolute;top:0;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0 0;transform-origin:0 0 0;width:100%;z-index:1}\n.",
      [1],
      "cover .",
      [1],
      "input-container.",
      [1],
      "wzq .",
      [1],
      "input-area.",
      [1],
      "data-v-fcaa0aed{-webkit-flex:1;flex:1}\n.",
      [1],
      "cover .",
      [1],
      "input-container.",
      [1],
      "wzq .",
      [1],
      "input-area .",
      [1],
      "input-box.",
      [1],
      "data-v-fcaa0aed{-webkit-flex:1;flex:1;height:.5866666666666667rem;max-height:2.24rem}\n.",
      [1],
      "cover .",
      [1],
      "input-container .",
      [1],
      "input-area.",
      [1],
      "data-v-fcaa0aed{background-color:#fff;border-radius:.10666666666666667rem;display:-webkit-flex;display:flex;-webkit-flex-shrink:1;flex-shrink:1;margin:.21333333333333335rem 0 .21333333333333335rem .32rem;overflow:hidden;position:relative}\n.",
      [1],
      "cover .",
      [1],
      "input-container .",
      [1],
      "input-area .",
      [1],
      "header.",
      [1],
      "data-v-fcaa0aed{-webkit-flex-shrink:0;flex-shrink:0;height:.8533333333333334rem;margin-left:.05333333333333334rem;margin-top:.05333333333333334rem;width:.8533333333333334rem}\n.",
      [1],
      "cover .",
      [1],
      "input-container .",
      [1],
      "input-area .",
      [1],
      "header.",
      [1],
      "data-v-fcaa0aed:after{border:.013333333333333334rem solid #0000001a;border-radius:.10666666666666667rem;box-sizing:border-box;content:\x22\x22;height:.8533333333333334rem;left:.05333333333333334rem;position:absolute;top:.05333333333333334rem;width:.8533333333333334rem}\n.",
      [1],
      "cover .",
      [1],
      "input-container .",
      [1],
      "input-area .",
      [1],
      "input-box.",
      [1],
      "data-v-fcaa0aed{background-color:#fff;caret-color:#e63535;color:#262e40;font-size:.4266666666666667rem;line-height:.5866666666666667rem;margin:.25333333333333335rem 0 .18666666666666668rem .26666666666666666rem;max-height:2.24rem;min-height:.5866666666666667rem}\n.",
      [1],
      "cover .",
      [1],
      "input-container .",
      [1],
      "emoji-container.",
      [1],
      "data-v-fcaa0aed{display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;width:1.3333333333333333rem}\n.",
      [1],
      "cover .",
      [1],
      "input-container .",
      [1],
      "emoji-container .",
      [1],
      "confirm-btn.",
      [1],
      "data-v-fcaa0aed{color:#e63535;font-size:.37333333333333335rem;font-weight:500;height:.56rem;line-height:.56rem;padding:.4rem .26666666666666666rem}\n.",
      [1],
      "cover .",
      [1],
      "input-container .",
      [1],
      "emoji-container .",
      [1],
      "disable.",
      [1],
      "data-v-fcaa0aed{opacity:.2}\n.",
      [1],
      "popup.",
      [1],
      "data-v-fcaa0aed{-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:slide-in-fcaa0aed;animation-name:slide-in-fcaa0aed;-webkit-animation-timing-function:ease;animation-timing-function:ease}\n.",
      [1],
      "hide.",
      [1],
      "data-v-fcaa0aed,.",
      [1],
      "popup.",
      [1],
      "data-v-fcaa0aed{-webkit-animation-duration:.25s;animation-duration:.25s}\n.",
      [1],
      "hide.",
      [1],
      "data-v-fcaa0aed{-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:slide-out-fcaa0aed;animation-name:slide-out-fcaa0aed;-webkit-animation-timing-function:ease;animation-timing-function:ease}\n@-webkit-keyframes slide-in-fcaa0aed{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}\nto{-webkit-transform:translateY(0);transform:translateY(0)}\n}@keyframes slide-in-fcaa0aed{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}\nto{-webkit-transform:translateY(0);transform:translateY(0)}\n}@-webkit-keyframes slide-out-fcaa0aed{0%{-webkit-transform:translateY(0);transform:translateY(0)}\nto{-webkit-transform:translateY(100%);transform:translateY(100%)}\n}@keyframes slide-out-fcaa0aed{0%{-webkit-transform:translateY(0);transform:translateY(0)}\nto{-webkit-transform:translateY(100%);transform:translateY(100%)}\n}",
    ],
    undefined,
    {
      path: "./pages/commentSbg/@tencent/wzq-lite-comment/components/comEdit/index.wxss",
    }
  );
}
