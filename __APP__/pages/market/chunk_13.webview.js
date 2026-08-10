$gwx5_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_5 || [];
    function gz$gwx5_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-9e55cfc4"]);
        Z([[7], [3, "a"]]);
        Z([3, "_div etf-hs-index-page data-v-9e55cfc4"]);
        Z([[7], [3, "l"]]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "9e55cfc4-0"]);
        Z([[7], [3, "b"]]);
        Z(z[4]);
        Z(z[0]);
        Z([3, "9e55cfc4-1"]);
        Z(z[7]);
        Z([[7], [3, "c"]]);
        Z([3, "_div nav-bar data-v-9e55cfc4"]);
        Z([3, "navBar"]);
        Z([
          [2, "+"],
          [
            [2, "+"],
            [
              [2, "+"],
              [1, "padding-top:"],
              [[7], [3, "h"]],
            ],
            [1, ";"],
          ],
          [
            [2, "+"],
            [1, "background-color:"],
            [[7], [3, "i"]],
          ],
        ]);
        Z([[7], [3, "d"]]);
        Z([3, "_div btn data-v-9e55cfc4"]);
        Z([[7], [3, "f"]]);
        Z(z[17]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [[5], [[5], [1, "_div"]], [1, "data-v-9e55cfc4"]],
                [1, "right-arrow"],
              ],
              [1, "left"],
            ],
            [[7], [3, "e"]],
          ],
        ]);
        Z([3, "_span title data-v-9e55cfc4"]);
        Z([
          [2, "+"],
          [1, "opacity:"],
          [[7], [3, "g"]],
        ]);
        Z([3, "选行业"]);
        Z(z[17]);
        Z([[7], [3, "k"]]);
        Z(z[4]);
        Z([3, "r data-v-9e55cfc4"]);
        Z([3, "9e55cfc4-2"]);
        Z(z[25]);
        Z([3, "discoverDetailPage"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_5 = true;
    var x = ["./pages/market/pages/HotEtf.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_5_1();
      var xMKB = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, xMKB);
      var oNKB = _mz(z, "view", ["class", 2, "data-st-theme", 1], [], e, s, gg);
      var oRKB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oNKB, oRKB);
      var fOKB = _v();
      _(oNKB, fOKB);
      if (_oz(z, 7, e, s, gg)) {
        fOKB.wxVkey = 1;
        var cSKB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 8, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(fOKB, cSKB);
      }
      var cPKB = _v();
      _(oNKB, cPKB);
      if (_oz(z, 12, e, s, gg)) {
        cPKB.wxVkey = 1;
        var oTKB = _mz(
          z,
          "view",
          ["class", 13, "id", 1, "style", 2],
          [],
          e,
          s,
          gg
        );
        var lUKB = _v();
        _(oTKB, lUKB);
        if (_oz(z, 16, e, s, gg)) {
          lUKB.wxVkey = 1;
          var aVKB = _n("view");
          _rz(z, aVKB, "class", 17, e, s, gg);
          _(lUKB, aVKB);
        } else {
          lUKB.wxVkey = 2;
          var tWKB = _mz(z, "view", ["catchtap", 18, "class", 1], [], e, s, gg);
          var eXKB = _n("view");
          _rz(z, eXKB, "class", 20, e, s, gg);
          _(tWKB, eXKB);
          _(lUKB, tWKB);
        }
        var bYKB = _mz(z, "label", ["class", 21, "style", 1], [], e, s, gg);
        var oZKB = _oz(z, 23, e, s, gg);
        _(bYKB, oZKB);
        _(oTKB, bYKB);
        var x1KB = _n("view");
        _rz(z, x1KB, "class", 24, e, s, gg);
        _(oTKB, x1KB);
        lUKB.wxXCkey = 1;
        _(cPKB, oTKB);
      }
      var hQKB = _v();
      _(oNKB, hQKB);
      if (_oz(z, 25, e, s, gg)) {
        hQKB.wxVkey = 1;
        var o2KB = _mz(
          z,
          "discover-detail-page",
          ["bind:__l", 26, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(hQKB, o2KB);
      }
      fOKB.wxXCkey = 1;
      fOKB.wxXCkey = 3;
      cPKB.wxXCkey = 1;
      hQKB.wxXCkey = 1;
      hQKB.wxXCkey = 3;
      _(r, oNKB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/HotEtf.wxml"] = [
    $gwx5_XC_5,
    "./pages/market/pages/HotEtf.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/HotEtf.wxml"] = $gwx5_XC_5(
    "./pages/market/pages/HotEtf.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/market/pages/HotEtf.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "nav-bar.",
      [1],
      "data-v-9e55cfc4{-webkit-justify-content:space-between;justify-content:space-between;left:0;position:fixed;top:0;width:100vw;z-index:100}\n.",
      [1],
      "nav-bar .",
      [1],
      "btn.",
      [1],
      "data-v-9e55cfc4,.",
      [1],
      "nav-bar.",
      [1],
      "data-v-9e55cfc4{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:1.1733333333333333rem}\n.",
      [1],
      "nav-bar .",
      [1],
      "btn.",
      [1],
      "data-v-9e55cfc4{-webkit-justify-content:center;justify-content:center;width:1.1733333333333333rem}\n.",
      [1],
      "nav-bar .",
      [1],
      "btn .",
      [1],
      "back-icon.",
      [1],
      "data-v-9e55cfc4{height:.64rem;width:.64rem}\n.",
      [1],
      "nav-bar .",
      [1],
      "right-arrow.",
      [1],
      "data-v-9e55cfc4{background-color:#12161f;height:.4533333333333333rem;-webkit-mask-image:url(https://st.gtimg.com/design/cd41628924039703991105993f46fb55.svg);mask-image:url(https://st.gtimg.com/design/cd41628924039703991105993f46fb55.svg);-webkit-mask-size:100% 100%;mask-size:100% 100%;width:.4533333333333333rem}\n.",
      [1],
      "nav-bar .",
      [1],
      "right-arrow.",
      [1],
      "left.",
      [1],
      "data-v-9e55cfc4{-webkit-transform:rotate(180deg);transform:rotate(180deg)}\n.",
      [1],
      "nav-bar .",
      [1],
      "right-arrow.",
      [1],
      "black.",
      [1],
      "data-v-9e55cfc4,.",
      [1],
      "nav-bar .",
      [1],
      "right-arrow.",
      [1],
      "dark.",
      [1],
      "data-v-9e55cfc4{background-color:#fff}\n.",
      [1],
      "nav-bar .",
      [1],
      "home.",
      [1],
      "data-v-9e55cfc4{-webkit-justify-content:flex-end;justify-content:flex-end}\n.",
      [1],
      "nav-bar .",
      [1],
      "home .",
      [1],
      "home-icon.",
      [1],
      "data-v-9e55cfc4{height:.8533333333333334rem;width:.8533333333333334rem}\n.",
      [1],
      "nav-bar .",
      [1],
      "title.",
      [1],
      "data-v-9e55cfc4{-webkit-box-orient:vertical;line-clamp:1;-webkit-line-clamp:1;color:var(--color-heavygray);display:-webkit-box;font-size:.4533333333333333rem;font-weight:600;max-width:4.266666666666667rem;overflow:hidden;text-overflow:ellipsis;word-break:break-all}\n",
    ],
    undefined,
    { path: "./pages/market/pages/HotEtf.wxss" }
  );
}
