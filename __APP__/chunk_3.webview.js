$gwx_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];
    function gz$gwx_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "false"]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "modal-container"]],
              [1, "data-v-8ed7e908"],
            ],
            [[7], [3, "p"]],
          ],
        ]);
        Z([
          [2, "!"],
          [[7], [3, "o"]],
        ]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "content-container"]],
              [1, "data-v-8ed7e908"],
            ],
            [[7], [3, "n"]],
          ],
        ]);
        Z([3, "_div title data-v-8ed7e908"]);
        Z([a, [[7], [3, "a"]]]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "c"]]);
        Z([3, "_div close-button data-v-8ed7e908"]);
        Z([3, "modal-content data-v-8ed7e908"]);
        Z([[6], [[7], [3, "$slots"]], [3, "d"]]);
        Z([3, "modal-content-text data-v-8ed7e908"]);
        Z([a, [[7], [3, "d"]]]);
        Z([[7], [3, "e"]]);
        Z([3, "_div modal-buttons data-v-8ed7e908"]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "h"]]);
        Z([3, "_div modal-button data-v-8ed7e908"]);
        Z([a, [[7], [3, "g"]]]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "k"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "data-v-8ed7e908"]], [1, "modal-button"]],
            [1, "active"],
          ],
        ]);
        Z([3, "agree-btn"]);
        Z([3, "agreePrivacyAuthorization"]);
        Z([a, [[7], [3, "j"]]]);
        Z([[7], [3, "m"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-8ed7e908"]],
              [1, "modal-button"],
            ],
            [1, "active"],
          ],
        ]);
        Z(z[22]);
        Z([a, [[7], [3, "l"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
    var x = ["./components/LayerModal/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_11_1();
      var eXE = _mz(
        z,
        "view",
        ["catchtouchmove", 0, "class", 1, "hidden", 1],
        [],
        e,
        s,
        gg
      );
      var bYE = _n("view");
      _rz(z, bYE, "class", 3, e, s, gg);
      var o2E = _n("view");
      _rz(z, o2E, "class", 4, e, s, gg);
      var f3E = _oz(z, 5, e, s, gg);
      _(o2E, f3E);
      _(bYE, o2E);
      var oZE = _v();
      _(bYE, oZE);
      if (_oz(z, 6, e, s, gg)) {
        oZE.wxVkey = 1;
        var c4E = _mz(z, "view", ["catchtap", 7, "class", 1], [], e, s, gg);
        _(oZE, c4E);
      }
      var h5E = _n("view");
      _rz(z, h5E, "class", 9, e, s, gg);
      var o6E = _v();
      _(h5E, o6E);
      if (_oz(z, 10, e, s, gg)) {
        o6E.wxVkey = 1;
        var c7E = _n("slot");
        _(o6E, c7E);
      } else {
        o6E.wxVkey = 2;
        var o8E = _n("view");
        _rz(z, o8E, "class", 11, e, s, gg);
        var l9E = _oz(z, 12, e, s, gg);
        _(o8E, l9E);
        _(o6E, o8E);
      }
      o6E.wxXCkey = 1;
      _(bYE, h5E);
      var x1E = _v();
      _(bYE, x1E);
      if (_oz(z, 13, e, s, gg)) {
        x1E.wxVkey = 1;
        var a0E = _n("view");
        _rz(z, a0E, "class", 14, e, s, gg);
        var tAF = _v();
        _(a0E, tAF);
        if (_oz(z, 15, e, s, gg)) {
          tAF.wxVkey = 1;
          var bCF = _mz(z, "view", ["catchtap", 16, "class", 1], [], e, s, gg);
          var oDF = _oz(z, 18, e, s, gg);
          _(bCF, oDF);
          _(tAF, bCF);
        }
        var eBF = _v();
        _(a0E, eBF);
        if (_oz(z, 19, e, s, gg)) {
          eBF.wxVkey = 1;
          var xEF = _mz(
            z,
            "button",
            ["catchtap", 20, "class", 1, "id", 2, "openType", 3],
            [],
            e,
            s,
            gg
          );
          var oFF = _oz(z, 24, e, s, gg);
          _(xEF, oFF);
          _(eBF, xEF);
        } else {
          eBF.wxVkey = 2;
          var fGF = _mz(
            z,
            "view",
            ["catchtap", 25, "class", 1, "id", 2],
            [],
            e,
            s,
            gg
          );
          var cHF = _oz(z, 28, e, s, gg);
          _(fGF, cHF);
          _(eBF, fGF);
        }
        tAF.wxXCkey = 1;
        eBF.wxXCkey = 1;
        _(x1E, a0E);
      }
      oZE.wxXCkey = 1;
      x1E.wxXCkey = 1;
      _(eXE, bYE);
      _(r, eXE);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["components/LayerModal/index.wxml"] = [
    $gwx_XC_11,
    "./components/LayerModal/index.wxml",
  ];
else
  __wxAppCode__["components/LayerModal/index.wxml"] = $gwx_XC_11(
    "./components/LayerModal/index.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["components/LayerModal/index.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "modal-container.",
      [1],
      "data-v-8ed7e908{background-color:var(--fill-mask);bottom:0;color:#262e40;height:100%;left:0;position:fixed;width:100%;z-index:500}\n.",
      [1],
      "content-container.",
      [1],
      "data-v-8ed7e908{background-color:var(--fill-content-layer);border-top-left-radius:.21333333333333335rem;border-top-right-radius:.21333333333333335rem;bottom:0;color:#262e40;padding-bottom:.6666666666666666rem;position:absolute;width:100%}\n.",
      [1],
      "skin-black .",
      [1],
      "content-container.",
      [1],
      "data-v-8ed7e908{background-color:#171d28;color:#f0f1f5}\n.",
      [1],
      "content-container .",
      [1],
      "title.",
      [1],
      "data-v-8ed7e908{color:var(--color-heavygray);font-family:PingFangSC-Semibold;font-size:.48rem;font-weight:700;height:1.52rem;line-height:1.52rem;position:relative;text-align:center}\n.",
      [1],
      "content-container .",
      [1],
      "close-button.",
      [1],
      "data-v-8ed7e908{background-image:url(https://st.gtimg.com/design/a6d00cd9b7bf647bebda9875bd5b1301.png);background-position:50%;background-repeat:no-repeat;background-size:.26666666666666666rem .26666666666666666rem;height:.5866666666666667rem;position:absolute;right:.24rem;top:.4533333333333333rem;width:.5866666666666667rem}\n.",
      [1],
      "content-container .",
      [1],
      "modal-content-text.",
      [1],
      "data-v-8ed7e908{color:var(--color-heavygray);font-size:.37333333333333335rem;line-height:.6133333333333333rem;max-height:3.066666666666667rem;overflow-y:scroll;padding:.16rem .4rem .32rem;text-align:justify}\n.",
      [1],
      "skin-black .",
      [1],
      "content-container .",
      [1],
      "modal-content-text.",
      [1],
      "data-v-8ed7e908{color:#a7b0c4}\n.",
      [1],
      "content-container .",
      [1],
      "modal-buttons.",
      [1],
      "data-v-8ed7e908{display:-webkit-flex;display:flex;font-size:.4266666666666667rem;margin-bottom:.21333333333333335rem;padding:0 .4rem}\n.",
      [1],
      "content-container .",
      [1],
      "modal-buttons .",
      [1],
      "modal-button.",
      [1],
      "data-v-8ed7e908{border:.02666666666666667rem solid var(--color-blue);border-radius:.10666666666666667rem;box-sizing:border-box;color:var(--color-blue);font-size:.4266666666666667rem;font-weight:500;height:1.1733333333333333rem;line-height:1.1733333333333333rem;margin-right:.4rem;text-align:center;width:4.44rem}\n.",
      [1],
      "content-container .",
      [1],
      "modal-buttons .",
      [1],
      "modal-button.",
      [1],
      "data-v-8ed7e908:last-child{background-color:var(--color-blue);color:#fff;margin-right:0;opacity:.5}\n.",
      [1],
      "content-container .",
      [1],
      "modal-buttons .",
      [1],
      "modal-button:last-child.active.data-v-8ed7e908{opacity:1}\n.",
      [1],
      "account .",
      [1],
      "title.",
      [1],
      "data-v-8ed7e908{font-size:.4533333333333333rem;font-weight:500;height:1.4933333333333334rem;line-height:1.4933333333333334rem}\n",
    ],
    undefined,
    { path: "./components/LayerModal/index.wxss" }
  );
}
