$gwx11_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx11_XC_3 || [];
    function gz$gwx11_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-e0605b51"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "data-v-e0605b51"]], [1, "container"]],
            [[7], [3, "h"]],
          ],
        ]);
        Z([[7], [3, "i"]]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "e0605b51-0"]);
        Z([[7], [3, "b"]]);
        Z(z[4]);
        Z(z[0]);
        Z([3, "e0605b51-1"]);
        Z(z[7]);
        Z([[7], [3, "g"]]);
        Z(z[4]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "d"]]);
        Z([3, "r data-v-e0605b51"]);
        Z([3, "e0605b51-2"]);
        Z(z[12]);
        Z([3, "newSubject"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx11_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx11_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx11_XC_3 = true;
    var x = ["./pages/newsCon/topic/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx11_XC_3_1();
      var c3AB = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, c3AB);
      var o4AB = _mz(z, "view", ["class", 2, "data-st-theme", 1], [], e, s, gg);
      var t7AB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(o4AB, t7AB);
      var l5AB = _v();
      _(o4AB, l5AB);
      if (_oz(z, 7, e, s, gg)) {
        l5AB.wxVkey = 1;
        var e8AB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 8, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(l5AB, e8AB);
      }
      var a6AB = _v();
      _(o4AB, a6AB);
      if (_oz(z, 12, e, s, gg)) {
        a6AB.wxVkey = 1;
        var b9AB = _mz(
          z,
          "new-subject",
          [
            "bind:__l",
            13,
            "binddataReport",
            1,
            "bindloadedData",
            2,
            "bindtapDetail",
            3,
            "class",
            4,
            "uI",
            5,
            "uP",
            6,
            "uR",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        _(a6AB, b9AB);
      }
      l5AB.wxXCkey = 1;
      l5AB.wxXCkey = 3;
      a6AB.wxXCkey = 1;
      a6AB.wxXCkey = 3;
      _(r, o4AB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx11_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx11_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/newsCon/topic/main.wxml"] = [
    $gwx11_XC_3,
    "./pages/newsCon/topic/main.wxml",
  ];
else
  __wxAppCode__["pages/newsCon/topic/main.wxml"] = $gwx11_XC_3(
    "./pages/newsCon/topic/main.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/newsCon/topic/main.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "container.",
      [1],
      "data-v-e0605b51{background-color:var(--fill-background)}\n.",
      [1],
      "data-v-e0605b51 .",
      [1],
      "viewport-module-container .",
      [1],
      "img-wrap wx-image{width:100%!important}\n.",
      [1],
      "data-v-e0605b51 .",
      [1],
      "slide-header .",
      [1],
      "tabbar{border-bottom:.02666666666666667rem solid var(--border-seprator);top:0;width:100%}\n.",
      [1],
      "data-v-e0605b51 .",
      [1],
      "slide-header .",
      [1],
      "cont{-webkit-flex:none;flex:none}\n.",
      [1],
      "data-v-e0605b51 .",
      [1],
      "slide-header .",
      [1],
      "tabbar-row{-webkit-align-items:flex-start;align-items:flex-start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0 .4rem}\n.",
      [1],
      "data-v-e0605b51 .",
      [1],
      "slide-header .",
      [1],
      "tab{-webkit-align-items:center;align-items:center;color:#353535;display:-webkit-flex;display:flex;-webkit-flex:none;flex:none;font-size:.4rem;margin-right:.8533333333333334rem;padding:.06666666666666667rem 0 .21333333333333335rem}\n.",
      [1],
      "data-v-e0605b51 .",
      [1],
      "slide-header .",
      [1],
      "tab.",
      [1],
      "selected{color:var(--color-heavygray);font-weight:600;position:relative}\n.",
      [1],
      "data-v-e0605b51 .",
      [1],
      "slide-header .",
      [1],
      "tab.",
      [1],
      "selected:after{background-color:#3077ec;border-radius:.05333333333333334rem;bottom:.05333333333333334rem;box-sizing:border-box;content:\x22\x22;height:.08rem;left:50%;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%);width:.32rem}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/newsCon/topic/main.wxss:1:122)",
    { path: "./pages/newsCon/topic/main.wxss" }
  );
}
