$gwx1_XC_25 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_25 || [];
    function gz$gwx1_XC_25_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "data-v-bea87391"]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "site-popup"]], [1, "data-v-bea87391"]],
            [[7], [3, "f"]],
          ],
        ]);
        Z([3, "__l"]);
        Z(z[0]);
        Z([3, "bea87391-0"]);
        Z([3, "site-popup-item data-v-bea87391"]);
        Z([3, "st-popup st-popup_mask st-modal data-v-bea87391"]);
        Z([3, "modal_1"]);
        Z([3, "z-index:100"]);
        Z([3, "st-popup-container st-popup-center data-v-bea87391"]);
        Z([3, "st-popup-content data-v-bea87391"]);
        Z([3, "st-modal-main data-v-bea87391"]);
        Z([3, "_span st-modal-close data-v-bea87391"]);
        Z([3, "display:none"]);
        Z([3, "_i st-close data-v-bea87391"]);
        Z([3, "st-modal-confirm data-v-bea87391"]);
        Z([3, "st-modal-content data-v-bea87391"]);
        Z([3, "color:rgb(103, 109, 121)"]);
        Z([3, "popup-protocol data-v-bea87391"]);
        Z([3, "popup-protocol__hd data-v-bea87391"]);
        Z([3, "欢迎使用腾讯微证券服务，请先阅读并同意以下协议："]);
        Z([3, "popup-protocol__bd data-v-bea87391"]);
        Z([[7], [3, "b"]]);
        Z([3, "item"]);
        Z([[7], [3, "c"]]);
        Z([3, "b"]);
        Z([[6], [[7], [3, "item"]], [3, "d"]]);
        Z([3, "popup-protocol__item data-v-bea87391"]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z([a, [3, "《"], [[6], [[7], [3, "item"]], [3, "a"]], [3, "》"]]);
        Z([3, "st-modal-btns data-v-bea87391"]);
        Z([[7], [3, "d"]]);
        Z([
          3,
          "st-modal-btn border-top-1px border-right-1px st-button st-button-default data-v-bea87391",
        ]);
        Z([3, "button"]);
        Z([3, "_span st-button__text data-v-bea87391"]);
        Z([3, "取消"]);
        Z([[7], [3, "e"]]);
        Z([
          3,
          "st-modal-btn border-top-1px st-button st-button-default st-modal-btn_highlight data-v-bea87391",
        ]);
        Z(z[34]);
        Z(z[35]);
        Z([3, "已阅读并同意"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_25_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_25 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_25 = true;
    var x = ["./pages/asyncCom/components/privpopup.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_25_1();
      var bAV = _mz(
        z,
        "page-meta",
        ["class", 0, "rootFontSize", 1],
        [],
        e,
        s,
        gg
      );
      _(r, bAV);
      var oBV = _n("view");
      _rz(z, oBV, "class", 2, e, s, gg);
      var xCV = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oBV, xCV);
      var oDV = _n("view");
      _rz(z, oDV, "class", 6, e, s, gg);
      var fEV = _mz(z, "view", ["class", 7, "id", 1, "style", 2], [], e, s, gg);
      var cFV = _n("view");
      _rz(z, cFV, "class", 10, e, s, gg);
      var hGV = _n("view");
      _rz(z, hGV, "class", 11, e, s, gg);
      var oHV = _n("view");
      _rz(z, oHV, "class", 12, e, s, gg);
      var cIV = _mz(z, "label", ["class", 13, "style", 1], [], e, s, gg);
      var oJV = _n("view");
      _rz(z, oJV, "class", 15, e, s, gg);
      _(cIV, oJV);
      _(oHV, cIV);
      var lKV = _n("view");
      _rz(z, lKV, "class", 16, e, s, gg);
      var aLV = _mz(z, "view", ["class", 17, "style", 1], [], e, s, gg);
      var tMV = _n("view");
      _rz(z, tMV, "class", 19, e, s, gg);
      var eNV = _n("view");
      _rz(z, eNV, "class", 20, e, s, gg);
      var bOV = _oz(z, 21, e, s, gg);
      _(eNV, bOV);
      _(tMV, eNV);
      var oPV = _n("view");
      _rz(z, oPV, "class", 22, e, s, gg);
      var xQV = _v();
      _(oPV, xQV);
      if (_oz(z, 23, e, s, gg)) {
        xQV.wxVkey = 1;
        var oRV = _v();
        _(xQV, oRV);
        var fSV = function (hUV, cTV, oVV, gg) {
          var oXV = _mz(
            z,
            "view",
            ["bindtap", 27, "class", 1, "data-url", 2],
            [],
            hUV,
            cTV,
            gg
          );
          var lYV = _oz(z, 30, hUV, cTV, gg);
          _(oXV, lYV);
          _(oVV, oXV);
          return oVV;
        };
        oRV.wxXCkey = 2;
        _2z(z, 25, fSV, e, s, gg, oRV, "item", "index", "b");
      }
      xQV.wxXCkey = 1;
      _(tMV, oPV);
      _(aLV, tMV);
      _(lKV, aLV);
      var aZV = _n("view");
      _rz(z, aZV, "class", 31, e, s, gg);
      var t1V = _mz(
        z,
        "label",
        ["bindtap", 32, "class", 1, "role", 2],
        [],
        e,
        s,
        gg
      );
      var e2V = _n("label");
      _rz(z, e2V, "class", 35, e, s, gg);
      var b3V = _oz(z, 36, e, s, gg);
      _(e2V, b3V);
      _(t1V, e2V);
      _(aZV, t1V);
      var o4V = _mz(
        z,
        "label",
        ["bindtap", 37, "class", 1, "role", 2],
        [],
        e,
        s,
        gg
      );
      var x5V = _n("label");
      _rz(z, x5V, "class", 40, e, s, gg);
      var o6V = _oz(z, 41, e, s, gg);
      _(x5V, o6V);
      _(o4V, x5V);
      _(aZV, o4V);
      _(lKV, aZV);
      _(oHV, lKV);
      _(hGV, oHV);
      _(cFV, hGV);
      _(fEV, cFV);
      _(oDV, fEV);
      _(oBV, oDV);
      _(r, oBV);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_25";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_25();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/asyncCom/components/privpopup.wxml"] = [
    $gwx1_XC_25,
    "./pages/asyncCom/components/privpopup.wxml",
  ];
else
  __wxAppCode__["pages/asyncCom/components/privpopup.wxml"] = $gwx1_XC_25(
    "./pages/asyncCom/components/privpopup.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/asyncCom/components/privpopup.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "site-popup.",
      [1],
      "data-v-bea87391{-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.5);display:none;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:center;justify-content:center;left:0;position:fixed;width:100%;z-index:100}\n.",
      [1],
      "site-popup.",
      [1],
      "show.",
      [1],
      "data-v-bea87391{display:-webkit-flex!important;display:flex!important}\nwx-image.",
      [1],
      "data-v-bea87391{height:9.88rem;width:7.24rem}\n.",
      [1],
      "site-popup-item.",
      [1],
      "data-v-bea87391{position:relative}\n.",
      [1],
      "close.",
      [1],
      "data-v-bea87391{background-image:url(https://st.gtimg.com/design/4b6cd1d1dd68516672517081ccacdff3.png);background-size:100% 100%;display:block;height:.5333333333333333rem;position:absolute;right:0;top:-.6666666666666666rem;width:.5333333333333333rem}\n.",
      [1],
      "st-button.",
      [1],
      "data-v-bea87391{-webkit-appearance:none;background-color:#fff;border:.013333333333333334rem solid rgba(0,0,0,.1);border-radius:.06666666666666667rem;box-sizing:border-box;color:#353535;display:block;font-size:.48rem;height:1.2rem;line-height:1.2rem;outline:0;padding:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;word-break:break-word}\n.",
      [1],
      "st-modal .",
      [1],
      "st-popup-center .",
      [1],
      "st-popup-content.",
      [1],
      "data-v-bea87391{width:100%}\n.",
      [1],
      "st-modal-main.",
      [1],
      "data-v-bea87391{background-color:#fff;border-radius:.04rem;margin:auto;overflow:hidden;padding:0;text-align:center;width:80%}\n.",
      [1],
      "st-modal-content.",
      [1],
      "data-v-bea87391{-webkit-overflow-scrolling:touch;color:#0a1428;font-size:.4266666666666667rem;line-height:1.38;margin:.64rem 0;max-height:6.746666666666667rem;overflow:scroll;padding:0 .64rem;text-align:left}\n.",
      [1],
      "popup-protocol .",
      [1],
      "popup-protocol__hd.",
      [1],
      "data-v-bea87391{color:#0a1428;font-size:.4266666666666667rem;line-height:.64rem}\n.",
      [1],
      "st-modal-btns.",
      [1],
      "data-v-bea87391{font-size:0;overflow:hidden;width:100%}\n.",
      [1],
      "st-modal-btns .",
      [1],
      "st-button.",
      [1],
      "data-v-bea87391:after{content:none}\n.",
      [1],
      "st-modal-btn.",
      [1],
      "data-v-bea87391{background-clip:padding-box;border:none;box-sizing:border-box;color:#0a1428;font-size:.48rem;margin:0;text-align:center;text-decoration:none;width:100%}\n.",
      [1],
      "st-modal-btn.",
      [1],
      "data-v-bea87391:before{border-color:#edeff3!important}\n.",
      [1],
      "st-modal-btn_highlight .",
      [1],
      "st-button__text.",
      [1],
      "data-v-bea87391{color:#007aff!important}\n.",
      [1],
      "st-modal-btn_disabled.",
      [1],
      "data-v-bea87391{color:#999}\n.",
      [1],
      "st-modal-fade-enter-active.",
      [1],
      "data-v-bea87391{-webkit-animation:modal-fadein .4s;animation:modal-fadein .4s}\n.",
      [1],
      "st-modal-confirm .",
      [1],
      "st-modal-btns .",
      [1],
      "st-modal-btn.",
      [1],
      "data-v-bea87391{float:left;width:50%}\n.",
      [1],
      "clear-fix.",
      [1],
      "data-v-bea87391:after{clear:both;content:\x22\x22;display:table}\n.",
      [1],
      "border-bottom-1px.",
      [1],
      "data-v-bea87391,.",
      [1],
      "border-left-1px.",
      [1],
      "data-v-bea87391,.",
      [1],
      "border-right-1px.",
      [1],
      "data-v-bea87391,.",
      [1],
      "border-top-1px.",
      [1],
      "data-v-bea87391{position:relative}\n.",
      [1],
      "border-bottom-1px.",
      [1],
      "data-v-bea87391:after,.",
      [1],
      "border-bottom-1px.",
      [1],
      "data-v-bea87391:before,.",
      [1],
      "border-left-1px.",
      [1],
      "data-v-bea87391:after,.",
      [1],
      "border-left-1px.",
      [1],
      "data-v-bea87391:before,.",
      [1],
      "border-right-1px.",
      [1],
      "data-v-bea87391:after,.",
      [1],
      "border-right-1px.",
      [1],
      "data-v-bea87391:before,.",
      [1],
      "border-top-1px.",
      [1],
      "data-v-bea87391:after,.",
      [1],
      "border-top-1px.",
      [1],
      "data-v-bea87391:before{content:\x22\x22;display:block;position:absolute;-webkit-transform-origin:0 0;transform-origin:0 0}\n.",
      [1],
      "border-top-1px.",
      [1],
      "data-v-bea87391:before{border-top:.013333333333333334rem solid #e5e5e5;left:0;top:0;-webkit-transform-origin:0 top;transform-origin:0 top;width:100%}\n.",
      [1],
      "border-right-1px.",
      [1],
      "data-v-bea87391{border-radius:0;border-right:.013333333333333334rem solid #e5e5e5;box-sizing:border-box;height:100%;-webkit-transform-origin:right 0;transform-origin:right 0}\n.",
      [1],
      "border-bottom-1px.",
      [1],
      "data-v-bea87391:after{border-bottom:.013333333333333334rem solid #e5e5e5;bottom:0;left:0;-webkit-transform-origin:0 bottom;transform-origin:0 bottom;width:100%}\n.",
      [1],
      "border-left-1px.",
      [1],
      "data-v-bea87391:before{border-left:.013333333333333334rem solid #e5e5e5;height:100%;left:0;top:0;-webkit-transform-origin:left 0;transform-origin:left 0}\n.",
      [1],
      "popup-protocol__item.",
      [1],
      "data-v-bea87391{color:#007aff}\n",
    ],
    "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/asyncCom/components/privpopup.wxss:1:370)",
    { path: "./pages/asyncCom/components/privpopup.wxss" }
  );
}
