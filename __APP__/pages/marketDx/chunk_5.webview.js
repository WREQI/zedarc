$gwx45_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx45_XC_5 || [];
    function gz$gwx45_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "i"]]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "g"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "cont"]],
              [1, "data-v-fa75ed0a"],
            ],
            [[7], [3, "f"]],
          ],
        ]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "tab"]],
              [1, "data-v-fa75ed0a"],
            ],
            [[7], [3, "c"]],
          ],
        ]);
        Z([[7], [3, "b"]]);
        Z([3, "_div notify data-v-fa75ed0a"]);
        Z([[7], [3, "e"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "tab"]],
              [1, "data-v-fa75ed0a"],
            ],
            [[7], [3, "d"]],
          ],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1;
    }
    function gz$gwx45_XC_5_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2)
        return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2;
      __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div tabbar data-v-0a4670a6"]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([3, "_div tabbar-scroll-wrapper data-v-0a4670a6"]);
        Z([[7], [3, "a"]]);
        Z([3, "_span data-v-0a4670a6"]);
        Z([3, "_div tabbar-row data-v-0a4670a6"]);
        Z([[7], [3, "b"]]);
        Z([3, "tabbarRow"]);
        Z([[7], [3, "c"]]);
        Z([3, "_div tabbar-indicator data-v-0a4670a6"]);
        Z([[7], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2);
      return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx45_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx45_XC_5 = true;
    var x = [
      "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml",
      "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx45_XC_5_1();
      var x50 = _mz(
        z,
        "view",
        [
          "bindtouchend",
          0,
          "bindtouchmove",
          1,
          "bindtouchstart",
          1,
          "class",
          2,
        ],
        [],
        e,
        s,
        gg
      );
      var o60 = _v();
      _(x50, o60);
      if (_oz(z, 4, e, s, gg)) {
        o60.wxVkey = 1;
        var f70 = _n("view");
        _rz(z, f70, "class", 5, e, s, gg);
        var c80 = _v();
        _(f70, c80);
        if (_oz(z, 6, e, s, gg)) {
          c80.wxVkey = 1;
          var h90 = _n("view");
          _rz(z, h90, "class", 7, e, s, gg);
          _(c80, h90);
        }
        var o00 = _n("slot");
        _(f70, o00);
        c80.wxXCkey = 1;
        _(o60, f70);
      } else {
        o60.wxVkey = 2;
        var cAAB = _mz(z, "view", ["bindtap", 8, "class", 1], [], e, s, gg);
        var oBAB = _n("slot");
        _(cAAB, oBAB);
        _(o60, cAAB);
      }
      o60.wxXCkey = 1;
      _(r, x50);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx45_XC_5_2();
      var aDAB = _n("view");
      _rz(z, aDAB, "class", 0, e, s, gg);
      var tEAB = _mz(
        z,
        "view",
        ["bindtouchmove", 1, "catchtouchstart", 1, "class", 2],
        [],
        e,
        s,
        gg
      );
      var eFAB = _v();
      _(tEAB, eFAB);
      if (_oz(z, 4, e, s, gg)) {
        eFAB.wxVkey = 1;
        var oHAB = _n("label");
        _rz(z, oHAB, "class", 5, e, s, gg);
        _(eFAB, oHAB);
      }
      var xIAB = _mz(
        z,
        "view",
        ["class", 6, "data-typeid", 1, "id", 2],
        [],
        e,
        s,
        gg
      );
      var oJAB = _n("slot");
      _(xIAB, oJAB);
      _(tEAB, xIAB);
      var bGAB = _v();
      _(tEAB, bGAB);
      if (_oz(z, 9, e, s, gg)) {
        bGAB.wxVkey = 1;
        var fKAB = _mz(z, "view", ["class", 10, "style", 1], [], e, s, gg);
        _(bGAB, fKAB);
      }
      eFAB.wxXCkey = 1;
      bGAB.wxXCkey = 1;
      _(aDAB, tEAB);
      _(r, aDAB);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx45_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx45_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml"
  ] = [
    $gwx45_XC_5,
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml"
  ] = $gwx45_XC_5(
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml"
  ] = [
    $gwx45_XC_5,
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml"
  ] = $gwx45_XC_5(
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "cont-title.",
      [1],
      "data-v-fa75ed0a{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex:none;flex:none}\n.",
      [1],
      "cont-title .",
      [1],
      "tab.",
      [1],
      "data-v-fa75ed0a{color:var(--color-midgray-1);font-size:.4rem}\n.",
      [1],
      "cont-title .",
      [1],
      "tab.",
      [1],
      "selectedwzq.",
      [1],
      "data-v-fa75ed0a{color:var(--color-blue);font-size:.56rem;font-weight:600}\n.",
      [1],
      "cont-title .",
      [1],
      "tab.",
      [1],
      "selectedmp.",
      [1],
      "data-v-fa75ed0a{color:var(--color-red);font-size:.56rem;font-weight:600}\n.",
      [1],
      "cont-content .",
      [1],
      "tab.",
      [1],
      "data-v-fa75ed0a{-webkit-align-items:center;align-items:center;color:var(--color-midgray-1);display:-webkit-flex;display:flex;font-size:.4rem;height:.96rem;-webkit-justify-content:center;justify-content:center}\n.",
      [1],
      "cont-content .",
      [1],
      "tab.",
      [1],
      "selectedwzq.",
      [1],
      "data-v-fa75ed0a{color:var(--color-heavygray);font-weight:600;position:relative}\n.",
      [1],
      "cont-content .",
      [1],
      "tab.",
      [1],
      "selectedwzq.",
      [1],
      "data-v-fa75ed0a:after{background-color:var(--color-blue);border-radius:.04rem;bottom:.05333333333333334rem;content:\x22\x22;height:.08rem;left:50%;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%);width:.32rem}\n.",
      [1],
      "cont-content .",
      [1],
      "tab.",
      [1],
      "selectedmp.",
      [1],
      "data-v-fa75ed0a{color:var(--color-heavygray);font-weight:600;position:relative}\n.",
      [1],
      "cont-content .",
      [1],
      "tab.",
      [1],
      "selectedmp.",
      [1],
      "data-v-fa75ed0a:after{background-color:var(--color-red);border-radius:.04rem;bottom:.05333333333333334rem;content:\x22\x22;height:.08rem;left:50%;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%);width:.32rem}\n.",
      [1],
      "cont.",
      [1],
      "data-v-fa75ed0a,.",
      [1],
      "tab.",
      [1],
      "data-v-fa75ed0a{-webkit-flex:1;flex:1;-webkit-flex-shrink:0;flex-shrink:0;position:relative}\n.",
      [1],
      "cont .",
      [1],
      "notify.",
      [1],
      "data-v-fa75ed0a,.",
      [1],
      "tab .",
      [1],
      "notify.",
      [1],
      "data-v-fa75ed0a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAAAXNSR0IArs4c6QAABXVJREFUWAnVWV1IVFsUXufMOKOjznRNDSyJoAKhh8p+QJGevBD3QlYW3YLotcJKRW+hUL34INgl6yEigqKIeynoPsTt6VJB04/aUxRFP5SlWP6MP5Mzzpk5rW/P2Yczv2kJzSxYrn32Xnuf+c7a62dvFZoj6br+C0/5jflX5nLmMoMLWM43TfGCAwb3sbzJ7FUUJcJyfogBbWX+nznE/DNpiF/eypybDpmSbhBjvEA1i07mKjyTpunBnh4lcO8eaW/fUnh4mCKfP5M+PS2G5/OPkpdHakkJ2RYtIufGjZS7aRPZly6Vr+jnRiNb74bssMqUwBiQjRW7mA9jQmRkRJ+8cEGZvn2bdL8fXT+FHOvWkbuhgXIqKuT7O7jRzgB12QGZFBiDWsBj/zDX6qGQPnXxouK/epX0QABzMoJcO3aQp6lJJ5sNGP5m/sMKLgGYAcrLihWw0mhLixJ6+jQjwMT/CEdlJRV1dupKYSFwdDCwNqkTA8zYfv/xYG3o1SsaPXKEIp8+Sd2MlAC38OxZabl66XNq3K+FT9UKS2UBKPz2mb4+Gu/qkgb6i40joqUJjDsQ/Q7Dp7D9Mt1SACXpy/XrFHr+HI/Iq4fQMIFxGyGdECgy1afw+1LRxJkzcqiZjaTa8cSNrSyqsAU5+kmzSkVTunbtEvlk8tw50l68MPvRcNbUkGvbNpo4dYrC/f0kdWOULA++9nYqPHhQ5Kix1laicNgcdR89Kvp9x47FRGJ3YyPZystpjPspGDT10Zjp7SXt3TvkuVJ+rJIWa8Ag8lS6kJ6zfDnlVlfTgpMniRwOTDHJVlYmxtSCaGUldTmhE4VCiaxz2olEKJc/iCUnkeJ2k6uuTqzlWLPGXB/vc23fTmpRUQIoqRS4e1c26+xsLdR+NagoOPmmtJacAWlftowK9++nydOnrd1J22P89a3WsCoFvV7K37mTENnk9ndyW1FV0tkijvXrKfjggZjiWLWKFAaHOako+OgRFezdi+FKWOx3ZjvKpNlWFP5r1yh/926K+aJYbo4U5IgGAM61a82ZAKMNDhJKNie3JQE8KHj/vuxKkOGhIdlXBmC1eMJCs6Up+NibN+Q5fpwUlyvttJyVK8kex7bFi6NzGBTA5axeTVxBiD6AmenpIf7QYp7i8Yh+AIv4fBR69izl+1CzGiSAIUSKglb2fktySiAfg7KVlpK7qSmtevGlS1Ry5UoMu1tazDnYWioXu/AzlddDkQtQM48fEydbcnJtCP/CVhTbEr6ZiljfIB1REecpUaUbnbMS2suXNHn+PLkPHKDAnTsp5wzv2yeChFUhMoVjVpSkzwiLjIyITlgsMjpK2sePws8iY2PCvwJp/AsT1eLi6KJEgyYwixnl4Del//JlEdU8bW305SbOgIkUQlqwhPJ4jfCHD6S9fy/8LIyt9vq1AAU9AMTW5DREOkfQ4MOH8dNjnnG8MWgAPibi83edp/hlvhMnSM3Pp4I9e+Sic5awGvzMuWGDACMXCPJ2tHPeytu8WURNfXxcDiWVOLMZ1CsStHz6HolkPNHdTR4k2STk2rJFfO34IfhQeGBAdGOL5XPyJ/Y1gJGEOpDTEdmXLKHJW7dkd0qJg6hB//4wMCyEWg2LWr6YfAF5kMeSEKoHCWzmyZNohWG3E9qS4FsanzJyVqxIG+ahjwOocbrGccSr8BcRYWaQt0E2E6KvUcH8ydG0Ez6W9YTTtAEK9yDdAJT1wJAmxBVB1Dy43BH3F1kNDKBwNWDce+Bq4EYUH9eIspFt0lVfT57mZgkKlzntVgxZByzu+g01VAdAsbViaq2MBvZDF6Yy3FvNmOFt5ClcOnXLQJHs92a0xfgHo1pGeQLuY571PyW+AsY5wM2z7emiAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-size:contain;border-radius:.21333333333333335rem .21333333333333335rem .21333333333333335rem 0;color:#fff;font-size:.13333333333333333rem;height:.3466666666666667rem;line-height:.3466666666666667rem;position:absolute;right:-.72rem;text-align:center;top:.21333333333333335rem;width:.6666666666666666rem}\n",
    ],
    undefined,
    {
      path: "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxss",
    }
  );
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxss"
  ] = setCssToHead(
    [
      ".",
      [1],
      "tabbar-scroll-wrapper.",
      [1],
      "data-v-0a4670a6{-webkit-overflow-scrolling:touch;height:100%;overflow:scroll}\n.",
      [1],
      "tabbar-row.",
      [1],
      "data-v-0a4670a6,.",
      [1],
      "tabbar-scroll-wrapper.",
      [1],
      "data-v-0a4670a6{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;width:100%}\n.",
      [1],
      "tabbar-row.",
      [1],
      "data-v-0a4670a6{-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;justify-content:space-between}\n.",
      [1],
      "tabbar-indicator.",
      [1],
      "data-v-0a4670a6{height:.04rem;position:relative}\n.",
      [1],
      "data-v-0a4670a6 .",
      [1],
      "tab,.",
      [1],
      "tabbar-indicator.",
      [1],
      "data-v-0a4670a6{transition:all .2s cubic-bezier(.445,.05,.55,.95)}\n",
    ],
    undefined,
    {
      path: "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxss",
    }
  );
}
