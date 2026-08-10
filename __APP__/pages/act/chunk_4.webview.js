$gwx34_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_4 || [];
    function gz$gwx34_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div container"]);
        Z([3, "__l"]);
        Z([3, "4ee0bfe6-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "4ee0bfe6-1"]);
        Z(z[4]);
        Z([[7], [3, "c"]]);
        Z([3, "_div error-status"]);
        Z([[7], [3, "e"]]);
        Z(z[2]);
        Z([[7], [3, "d"]]);
        Z([3, "4ee0bfe6-2"]);
        Z(z[10]);
        Z([[7], [3, "f"]]);
        Z([3, "_div list"]);
        Z([3, "item"]);
        Z([[7], [3, "g"]]);
        Z([3, "i"]);
        Z([[6], [[7], [3, "item"]], [3, "j"]]);
        Z([3, "_div calendar-item"]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "_div"]], [1, "content"]],
            [
              [2, "&&"],
              [[6], [[7], [3, "item"]], [3, "h"]],
              [1, "last"],
            ],
          ],
        ]);
        Z([3, "_div left"]);
        Z([3, "_div title"]);
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "_span"]], [1, "title-color"]],
            [[6], [[7], [3, "item"]], [3, "a"]],
          ],
        ]);
        Z([3, "_span title-val"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "b"]]]);
        Z([3, "_div subtitle"]);
        Z([[6], [[7], [3, "item"]], [3, "c"]]);
        Z([3, "_div subtitle-img"]);
        Z([3, "imgSrc"]);
        Z([[6], [[7], [3, "item"]], [3, "d"]]);
        Z([3, ""]);
        Z([3, "_img head-img"]);
        Z([[6], [[7], [3, "imgSrc"]], [3, "a"]]);
        Z([3, "_span subtitle-num"]);
        Z([a, [[6], [[7], [3, "item"]], [3, "e"]], [3, "人已订阅"]]);
        Z([3, "_div right"]);
        Z([[6], [[7], [3, "item"]], [3, "f"]]);
        Z([3, "_span status-ok"]);
        Z([3, "已订阅"]);
        Z([[6], [[7], [3, "item"]], [3, "g"]]);
        Z([3, "_span status-no"]);
        Z([3, "订阅"]);
        Z(z[33]);
        Z([3, "_img right-img"]);
        Z([
          3,
          "https://st.gtimg.com/design/2842315083080933d73642cbfff2e5b2.png",
        ]);
        Z([[7], [3, "j"]]);
        Z(z[2]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "i"]]);
        Z([3, "4ee0bfe6-3"]);
        Z(z[48]);
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_4 = true;
    var x = ["./pages/act/investcalendar/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_4_1();
      var fOE = _n("page-meta");
      _rz(z, fOE, "rootFontSize", 0, e, s, gg);
      _(r, fOE);
      var cPE = _n("view");
      _rz(z, cPE, "class", 1, e, s, gg);
      var oTE = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(cPE, oTE);
      var hQE = _v();
      _(cPE, hQE);
      if (_oz(z, 4, e, s, gg)) {
        hQE.wxVkey = 1;
        var lUE = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(hQE, lUE);
      }
      var oRE = _v();
      _(cPE, oRE);
      if (_oz(z, 8, e, s, gg)) {
        oRE.wxVkey = 1;
        var aVE = _n("view");
        _rz(z, aVE, "class", 9, e, s, gg);
        var tWE = _v();
        _(aVE, tWE);
        if (_oz(z, 10, e, s, gg)) {
          tWE.wxVkey = 1;
          var eXE = _mz(
            z,
            "st-status",
            ["bind:__l", 11, "bindhandleError", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(tWE, eXE);
        }
        tWE.wxXCkey = 1;
        tWE.wxXCkey = 3;
        _(oRE, aVE);
      } else if (_oz(z, 15, e, s, gg)) {
        oRE.wxVkey = 2;
        var bYE = _n("view");
        _rz(z, bYE, "class", 16, e, s, gg);
        var oZE = _v();
        _(bYE, oZE);
        var x1E = function (f3E, o2E, c4E, gg) {
          var o6E = _mz(
            z,
            "view",
            ["bindtap", 20, "class", 1],
            [],
            f3E,
            o2E,
            gg
          );
          var c7E = _n("view");
          _rz(z, c7E, "class", 22, f3E, o2E, gg);
          var o8E = _n("view");
          _rz(z, o8E, "class", 23, f3E, o2E, gg);
          var l9E = _n("view");
          _rz(z, l9E, "class", 24, f3E, o2E, gg);
          var a0E = _n("label");
          _rz(z, a0E, "class", 25, f3E, o2E, gg);
          _(l9E, a0E);
          var tAF = _n("label");
          _rz(z, tAF, "class", 26, f3E, o2E, gg);
          var eBF = _oz(z, 27, f3E, o2E, gg);
          _(tAF, eBF);
          _(l9E, tAF);
          _(o8E, l9E);
          var bCF = _n("view");
          _rz(z, bCF, "class", 28, f3E, o2E, gg);
          var oDF = _v();
          _(bCF, oDF);
          if (_oz(z, 29, f3E, o2E, gg)) {
            oDF.wxVkey = 1;
            var xEF = _n("view");
            _rz(z, xEF, "class", 30, f3E, o2E, gg);
            var oFF = _v();
            _(xEF, oFF);
            var fGF = function (hIF, cHF, oJF, gg) {
              var oLF = _mz(
                z,
                "image",
                ["alt", 33, "class", 1, "src", 2],
                [],
                hIF,
                cHF,
                gg
              );
              _(oJF, oLF);
              return oJF;
            };
            oFF.wxXCkey = 2;
            _2z(z, 32, fGF, f3E, o2E, gg, oFF, "imgSrc", "index", "");
            _(oDF, xEF);
          }
          var lMF = _n("label");
          _rz(z, lMF, "class", 36, f3E, o2E, gg);
          var aNF = _oz(z, 37, f3E, o2E, gg);
          _(lMF, aNF);
          _(bCF, lMF);
          oDF.wxXCkey = 1;
          _(o8E, bCF);
          _(c7E, o8E);
          var tOF = _n("view");
          _rz(z, tOF, "class", 38, f3E, o2E, gg);
          var ePF = _v();
          _(tOF, ePF);
          if (_oz(z, 39, f3E, o2E, gg)) {
            ePF.wxVkey = 1;
            var bQF = _n("label");
            _rz(z, bQF, "class", 40, f3E, o2E, gg);
            var oRF = _oz(z, 41, f3E, o2E, gg);
            _(bQF, oRF);
            _(ePF, bQF);
          } else {
            ePF.wxVkey = 2;
            var xSF = _mz(
              z,
              "label",
              ["catchtap", 42, "class", 1],
              [],
              f3E,
              o2E,
              gg
            );
            var oTF = _oz(z, 44, f3E, o2E, gg);
            _(xSF, oTF);
            _(ePF, xSF);
          }
          var fUF = _mz(
            z,
            "image",
            ["alt", 45, "class", 1, "src", 2],
            [],
            f3E,
            o2E,
            gg
          );
          _(tOF, fUF);
          ePF.wxXCkey = 1;
          _(c7E, tOF);
          _(o6E, c7E);
          _(c4E, o6E);
          return c4E;
        };
        oZE.wxXCkey = 2;
        _2z(z, 18, x1E, e, s, gg, oZE, "item", "index", "i");
        _(oRE, bYE);
      }
      var cSE = _v();
      _(cPE, cSE);
      if (_oz(z, 48, e, s, gg)) {
        cSE.wxVkey = 1;
        var cVF = _mz(
          z,
          "subscribe-guide",
          ["bind:__l", 49, "bindclose", 1, "bindsetting", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(cSE, cVF);
      }
      hQE.wxXCkey = 1;
      hQE.wxXCkey = 3;
      oRE.wxXCkey = 1;
      oRE.wxXCkey = 3;
      cSE.wxXCkey = 1;
      cSE.wxXCkey = 3;
      _(r, cPE);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      outerGlobal.__wxml_comp_version__ = 0.02;
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/investcalendar/main.wxml"] = [
    $gwx34_XC_4,
    "./pages/act/investcalendar/main.wxml",
  ];
else
  __wxAppCode__["pages/act/investcalendar/main.wxml"] = $gwx34_XC_4(
    "./pages/act/investcalendar/main.wxml"
  );

var noCss =
  typeof __vd_version_info__ !== "undefined" &&
  __vd_version_info__.noCss === true;
if (!noCss) {
  __wxAppCode__["pages/act/investcalendar/main.wxss"] = setCssToHead(
    [
      ".",
      [1],
      "container{background:#f5f6fa;height:auto;padding:.32rem .32rem 2.24rem}\n.",
      [1],
      "container .",
      [1],
      "error-status{padding-top:3.3333333333333335rem}\n.",
      [1],
      "container .",
      [1],
      "list{background:#fff;border-radius:.21333333333333335rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item{padding:0 .32rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content{-webkit-align-items:center;align-items:center;border-bottom:.013333333333333334rem solid #e9ebf0;display:-webkit-flex;display:flex;padding:.5333333333333333rem 0}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content.",
      [1],
      "last{border-bottom:none}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left{-webkit-flex:1;flex:1}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "title{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-bottom:.16rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "title .",
      [1],
      "title-color{border-radius:.13333333333333333rem;display:inline-block;height:.16rem;margin-right:.21333333333333335rem;width:.16rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "title .",
      [1],
      "title-color.",
      [1],
      "COLOR_RED{background:#e63535}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "title .",
      [1],
      "title-color.",
      [1],
      "COLOR_BLUE{background:#3077ec}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "title .",
      [1],
      "title-color.",
      [1],
      "COLOR_ORANGE{background:#ff891e}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "title .",
      [1],
      "title-color.",
      [1],
      "COLOR_GREEN{background:#1caa3c}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "title .",
      [1],
      "title-val{color:#262e40;font-size:.4266666666666667rem;font-style:normal;font-weight:500}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "subtitle{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-left:.37333333333333335rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "subtitle .",
      [1],
      "subtitle-img{display:inline-block;margin-left:.10666666666666667rem;margin-right:.16rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "subtitle .",
      [1],
      "subtitle-img .",
      [1],
      "head-img{border:.013333333333333334rem solid #fff;border-radius:.10666666666666667rem;height:.4266666666666667rem;margin-left:-.10666666666666667rem;width:.4266666666666667rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "left .",
      [1],
      "subtitle .",
      [1],
      "subtitle-num{color:#98a0b3;font-size:.32rem;font-style:normal;font-weight:400;line-height:.4533333333333333rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "right{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "right .",
      [1],
      "status-ok{color:#98a0b3;font-size:.37333333333333335rem;padding:0 .10666666666666667rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "right .",
      [1],
      "status-no{-webkit-align-items:center;align-items:center;background:#e63535;border-radius:.10666666666666667rem;color:#fff;display:-webkit-flex;display:flex;font-size:.37333333333333335rem;font-weight:600;-webkit-justify-content:center;justify-content:center;padding:.16rem .32rem}\n.",
      [1],
      "container .",
      [1],
      "list .",
      [1],
      "calendar-item .",
      [1],
      "content .",
      [1],
      "right .",
      [1],
      "right-img{display:inline-block;height:.4266666666666667rem;margin-left:.4266666666666667rem;width:.4266666666666667rem}\n",
    ],
    undefined,
    { path: "./pages/act/investcalendar/main.wxss" }
  );
}
