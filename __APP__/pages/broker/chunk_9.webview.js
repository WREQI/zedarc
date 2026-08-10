$gwx35_XC_9 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx35_XC_9 || [];
    function gz$gwx35_XC_9_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1)
        return __WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1;
      __WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-61345e54"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "container"]],
              [1, "data-v-61345e54"],
            ],
            [[7], [3, "h"]],
          ],
        ]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "61345e54-0"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "d"]]);
        Z(z[3]);
        Z([[7], [3, "c"]]);
        Z(z[0]);
        Z([3, "61345e54-1"]);
        Z(z[7]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z(z[3]);
        Z(z[0]);
        Z([3, "61345e54-2"]);
        Z(z[14]);
        Z([3, "_img logo data-v-61345e54"]);
        Z([3, "_span text data-v-61345e54"]);
        Z([3, "点击下方按钮前往券商服务"]);
        Z([[7], [3, "g"]]);
        Z([3, "btn data-v-61345e54"]);
        Z([3, "前往券商服务"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1);
      return __WXML_GLOBAL__.ops_cached.$gwx35_XC_9_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx35_XC_9 = z;
    __WXML_GLOBAL__.ops_init.$gwx35_XC_9 = true;
    var x = ["./pages/broker/transfer.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx35_XC_9_1();
      var o2C = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, o2C);
      var x3C = _n("view");
      _rz(z, x3C, "class", 2, e, s, gg);
      var f5C = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(x3C, f5C);
      var o4C = _v();
      _(x3C, o4C);
      if (_oz(z, 6, e, s, gg)) {
        o4C.wxVkey = 1;
        var c6C = _v();
        _(o4C, c6C);
        if (_oz(z, 7, e, s, gg)) {
          c6C.wxVkey = 1;
          var h7C = _mz(
            z,
            "web-view-component",
            ["bind:__l", 8, "bindmessage", 1, "class", 2, "uI", 3, "uP", 4],
            [],
            e,
            s,
            gg
          );
          _(c6C, h7C);
        }
        c6C.wxXCkey = 1;
        c6C.wxXCkey = 3;
      } else if (_oz(z, 13, e, s, gg)) {
        o4C.wxVkey = 2;
        var o8C = _v();
        _(o4C, o8C);
        if (_oz(z, 14, e, s, gg)) {
          o8C.wxVkey = 1;
          var c9C = _mz(
            z,
            "st-status",
            ["bind:__l", 15, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(o8C, c9C);
        }
        o8C.wxXCkey = 1;
        o8C.wxXCkey = 3;
      } else {
        o4C.wxVkey = 3;
        var o0C = _n("image");
        _rz(z, o0C, "class", 19, e, s, gg);
        _(o4C, o0C);
        var lAD = _n("label");
        _rz(z, lAD, "class", 20, e, s, gg);
        var aBD = _oz(z, 21, e, s, gg);
        _(lAD, aBD);
        _(o4C, lAD);
        var tCD = _mz(z, "button", ["bindtap", 22, "class", 1], [], e, s, gg);
        var eDD = _oz(z, 24, e, s, gg);
        _(tCD, eDD);
        _(o4C, tCD);
      }
      o4C.wxXCkey = 1;
      o4C.wxXCkey = 3;
      o4C.wxXCkey = 3;
      _(r, x3C);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx35_XC_9";
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
if (__vd_version_info__.delayedGwx || false) $gwx35_XC_9();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/broker/transfer.wxml"] = [
    $gwx35_XC_9,
    "./pages/broker/transfer.wxml",
  ];
else
  __wxAppCode__["pages/broker/transfer.wxml"] = $gwx35_XC_9(
    "./pages/broker/transfer.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/broker/transfer.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "container.",
      [1],
      "data-v-61345e54{-webkit-align-items:center;align-items:center;background:#fff;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;text-align:center}\n.",
      [1],
      "logo.",
      [1],
      "data-v-61345e54{content:url(https://st.gtimg.com/design/b58f7cc7963d1b149f6c873094b1f429.png);height:1.6rem;object-fit:contain;width:1.6rem}\n.",
      [1],
      "text.",
      [1],
      "data-v-61345e54{color:#7a8499;font-size:.37333333333333335rem;line-height:.37333333333333335rem;margin-top:.4266666666666667rem}\n.",
      [1],
      "btn.",
      [1],
      "data-v-61345e54{background:#3077ec;color:#fff;font-size:.4266666666666667rem;font-weight:600;line-height:.6133333333333333rem;margin-top:.7333333333333333rem;padding:.29333333333333333rem .4266666666666667rem}\n.",
      [1],
      "container.",
      [1],
      "skin-black.",
      [1],
      "data-v-61345e54{background:#000}\n.",
      [1],
      "container.",
      [1],
      "skin-black .",
      [1],
      "logo.",
      [1],
      "data-v-61345e54{content:url(https://st.gtimg.com/design/f89f33e8bdf8be41beb9ece0637a8ad6.png)}\n.",
      [1],
      "container.",
      [1],
      "skin-black .",
      [1],
      "text.",
      [1],
      "data-v-61345e54{color:#69738c}\n",
    ],
    undefined,
    { path: "./pages/broker/transfer.wxss" }
  );
}
