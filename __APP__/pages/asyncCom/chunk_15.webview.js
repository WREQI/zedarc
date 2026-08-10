$gwx1_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_7 || [];
    function gz$gwx1_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "yy-redpocket-choose"]], [1, "r"]],
            [[7], [3, "c"]],
          ],
        ]);
        Z([3, "95586d36-0"]);
        Z([[7], [3, "d"]]);
        Z([3, "redbagBox"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_1;
    }
    function gz$gwx1_XC_7_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [
                [5],
                [
                  [5],
                  [[5], [[5], [1, "_div"]], [1, "yy-activity-wave-redbag"]],
                  [1, "data-v-4a95cd23"],
                ],
                [
                  [2, "&&"],
                  [[7], [3, "a"]],
                  [1, "yy-activity-wave-animation"],
                ],
              ],
              [
                [2, "&&"],
                [[7], [3, "b"]],
                [1, "lite"],
              ],
            ],
            [
              [2, "&&"],
              [[7], [3, "c"]],
              [1, "mina"],
            ],
          ],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_7_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_7 = true;
    var x = [
      "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml",
      "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_7_1();
      var o4C = _v();
      _(r, o4C);
      if (_oz(z, 0, e, s, gg)) {
        o4C.wxVkey = 1;
        var f5C = _mz(
          z,
          "redbag",
          ["bind:__l", 1, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(o4C, f5C);
      }
      o4C.wxXCkey = 1;
      o4C.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_7_2();
      var h7C = _n("view");
      _rz(z, h7C, "class", 0, e, s, gg);
      _(r, h7C);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml"
  ] = [
    $gwx1_XC_7,
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml"
  ] = $gwx1_XC_7(
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml"
  ] = [
    $gwx1_XC_7,
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml"
  ] = $gwx1_XC_7(
    "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxss"
  ] = setCssToHead([], undefined, {
    path: "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/index.wxss",
  });
  __wxAppCode__[
    "pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "yy-activity-wave-redbag.",
      [1],
      "data-v-4a95cd23{background-image:url(https://st.gtimg.com/design/8106d372b778d22f7f400d2e3bf43b9d.png);background-size:100% 100%;display:inline-block;height:.4266666666666667rem;position:relative;top:.06666666666666667rem;width:.3466666666666667rem}\n.",
      [1],
      "yy-activity-wave-redbag.",
      [1],
      "lite.",
      [1],
      "data-v-4a95cd23{background-image:url(https://st.gtimg.com/design/00260086bf638a83d399f80a80f1f22a.png);width:.4266666666666667rem}\n.",
      [1],
      "yy-activity-wave-redbag.",
      [1],
      "mina.",
      [1],
      "data-v-4a95cd23{margin-left:.10666666666666667rem}\n.",
      [1],
      "yy-activity-wave-animation.",
      [1],
      "data-v-4a95cd23{-webkit-animation:yy-activity-wave-breath-4a95cd23 .6s linear 1s 3;animation:yy-activity-wave-breath-4a95cd23 .6s linear 1s 3}\n@-webkit-keyframes yy-activity-wave-breath-4a95cd23{0%{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.1);transform:scale(1.1)}\nto{-webkit-transform:scale(1);transform:scale(1)}\n}@keyframes yy-activity-wave-breath-4a95cd23{0%{-webkit-transform:scale(1);transform:scale(1)}\n50%{-webkit-transform:scale(1.1);transform:scale(1.1)}\nto{-webkit-transform:scale(1);transform:scale(1)}\n}",
    ],
    undefined,
    {
      path: "./pages/asyncCom/@tencent/st-wave-redbag/components/redbag-activity/redbag.wxss",
    }
  );
}
