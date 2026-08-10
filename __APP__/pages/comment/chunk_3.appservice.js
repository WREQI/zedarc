$gwx24_XC_3 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx24_XC_3 || [];
    function gz$gwx24_XC_3_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx24_XC_3_1)
        return __WXML_GLOBAL__.ops_cached.$gwx24_XC_3_1;
      __WXML_GLOBAL__.ops_cached.$gwx24_XC_3_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "edit data-v-8fd16bfa"]);
        Z([[7], [3, "C"]]);
        Z([3, "__l"]);
        Z([3, "data-v-8fd16bfa"]);
        Z([3, "8fd16bfa-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "8fd16bfa-1"]);
        Z(z[5]);
        Z([[7], [3, "r0"]]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "n"]]);
        Z([3, "edit_preview data-v-8fd16bfa"]);
        Z([3, "item"]);
        Z([[7], [3, "o"]]);
        Z([3, "j"]);
        Z([[6], [[7], [3, "item"]], [3, "f"]]);
        Z(z[3]);
        Z([[6], [[7], [3, "item"]], [3, "g"]]);
        Z([[6], [[7], [3, "item"]], [3, "h"]]);
        Z([3, "aspectFill"]);
        Z([[6], [[7], [3, "item"]], [3, "e"]]);
        Z([[6], [[7], [3, "item"]], [3, "a"]]);
        Z([[7], [3, "p"]]);
        Z([[7], [3, "y"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx24_XC_3_1);
      return __WXML_GLOBAL__.ops_cached.$gwx24_XC_3_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx24_XC_3 = z;
    __WXML_GLOBAL__.ops_init.$gwx24_XC_3 = true;
    var x = ["./pages/comment/edit/edit.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx24_XC_3_1();
      var aPD = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var xUD = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(aPD, xUD);
      var tQD = _v();
      _(aPD, tQD);
      if (_oz(z, 5, e, s, gg)) {
        tQD.wxVkey = 1;
        var oVD = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(tQD, oVD);
      }
      var eRD = _v();
      _(aPD, eRD);
      if (_oz(z, 10, e, s, gg)) {
        eRD.wxVkey = 1;
      }
      var bSD = _v();
      _(aPD, bSD);
      if (_oz(z, 11, e, s, gg)) {
        bSD.wxVkey = 1;
        var fWD = _v();
        _(bSD, fWD);
        if (_oz(z, 12, e, s, gg)) {
          fWD.wxVkey = 1;
          var cXD = _n("view");
          _rz(z, cXD, "class", 13, e, s, gg);
          var oZD = _v();
          _(cXD, oZD);
          var c1D = function (l3D, o2D, a4D, gg) {
            var e6D = _mz(
              z,
              "image",
              [
                "catchtap",
                17,
                "class",
                1,
                "data-idx",
                2,
                "data-src",
                3,
                "mode",
                4,
                "src",
                5,
              ],
              [],
              l3D,
              o2D,
              gg
            );
            var b7D = _v();
            _(e6D, b7D);
            if (_oz(z, 23, l3D, o2D, gg)) {
              b7D.wxVkey = 1;
            }
            b7D.wxXCkey = 1;
            _(a4D, e6D);
            return a4D;
          };
          oZD.wxXCkey = 2;
          _2z(z, 15, c1D, e, s, gg, oZD, "item", "index", "j");
          var hYD = _v();
          _(cXD, hYD);
          if (_oz(z, 24, e, s, gg)) {
            hYD.wxVkey = 1;
          }
          hYD.wxXCkey = 1;
          _(fWD, cXD);
        }
        fWD.wxXCkey = 1;
      }
      var oTD = _v();
      _(aPD, oTD);
      if (_oz(z, 25, e, s, gg)) {
        oTD.wxVkey = 1;
      }
      tQD.wxXCkey = 1;
      tQD.wxXCkey = 3;
      eRD.wxXCkey = 1;
      bSD.wxXCkey = 1;
      oTD.wxXCkey = 1;
      _(r, aPD);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx24_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx24_XC_3();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/comment/edit/edit.wxml"] = [
    $gwx24_XC_3,
    "./pages/comment/edit/edit.wxml",
  ];
else
  __wxAppCode__["pages/comment/edit/edit.wxml"] = $gwx24_XC_3(
    "./pages/comment/edit/edit.wxml"
  );
__wxRoute = "pages/comment/edit/edit";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/comment/edit/edit.js";
define(
  "pages/comment/edit/edit.js",
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
    var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../@babel/runtime/helpers/toConsumableArray"),
      n = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      i = Object.defineProperty,
      o = Object.defineProperties,
      r = Object.getOwnPropertyDescriptors,
      a = Object.getOwnPropertySymbols,
      s = Object.prototype.hasOwnProperty,
      c = Object.prototype.propertyIsEnumerable,
      u = function (e, t, n) {
        return t in e
          ? i(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      l = function (e, t) {
        for (var i in t || (t = {})) s.call(t, i) && u(e, i, t[i]);
        if (a) {
          var o,
            r = n(a(t));
          try {
            for (r.s(); !(o = r.n()).done; ) {
              i = o.value;
              c.call(t, i) && u(e, i, t[i]);
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
        }
        return e;
      },
      p = function (e, t) {
        return o(e, r(t));
      },
      d = function (e, t, n) {
        return new Promise(function (i, o) {
          var r = function (e) {
              try {
                s(n.next(e));
              } catch (e) {
                o(e);
              }
            },
            a = function (e) {
              try {
                s(n.throw(e));
              } catch (e) {
                o(e);
              }
            },
            s = function (e) {
              return e.done ? i(e.value) : Promise.resolve(e.value).then(r, a);
            };
          s((n = n.apply(e, t)).next());
        });
      },
      h = require("../../../common/vendor.js"),
      m = require("../@tencent/stock-halfscreen-editor/utils/sceneHelper.js"),
      f = { exports: {} },
      g = [
        "微笑",
        "撇嘴",
        "色",
        "发呆",
        "得意",
        "流泪",
        "害羞",
        "闭嘴",
        "睡",
        "大哭",
        "尴尬",
        "发怒",
        "调皮",
        "呲牙",
        "惊讶",
        "难过",
        "酷",
        "冷汗",
        "抓狂",
        "吐",
        "偷笑",
        "愉快",
        "白眼",
        "傲慢",
        "饥饿",
        "困",
        "惊恐",
        "流汗",
        "憨笑",
        "悠闲",
        "奋斗",
        "咒骂",
        "疑问",
        "嘘",
        "晕",
        "疯了",
        "衰",
        "骷髅",
        "敲打",
        "再见",
        "擦汗",
        "抠鼻",
        "鼓掌",
        "糗大了",
        "坏笑",
        "左哼哼",
        "右哼哼",
        "哈欠",
        "鄙视",
        "委屈",
        "快哭了",
        "阴险",
        "亲亲",
        "吓",
        "可怜",
        "菜刀",
        "西瓜",
        "啤酒",
        "篮球",
        "乒乓",
        "咖啡",
        "饭",
        "猪头",
        "玫瑰",
        "凋谢",
        "嘴唇",
        "爱心",
        "心碎",
        "蛋糕",
        "闪电",
        "炸弹",
        "刀",
        "足球",
        "瓢虫",
        "便便",
        "月亮",
        "太阳",
        "礼物",
        "拥抱",
        "强",
        "弱",
        "握手",
        "胜利",
        "抱拳",
        "勾引",
        "拳头",
        "差劲",
        "爱你",
        "NO",
        "OK",
        "爱情",
        "飞吻",
        "跳跳",
        "发抖",
        "怄火",
        "转圈",
        "磕头",
        "回头",
        "跳绳",
        "投降",
      ];
    function v(e) {
      return +e < 10 ? "0".concat(e) : e;
    }
    function y(e) {
      var n = [],
        i = [],
        o = /(\u001c\<\d{1},[^\>\u001c]+\>\u001c)/,
        r = /(\x1e\[\S+\s\S+\]\x1e)|(\x1e\[\S+[\s|\S]*\S+\]\x1e)/,
        a = e.split(
          /(\x1c\<\d{1},[^(\>\x1c)]+\>\x1c)|(\x1e\[\S+\s\S+\]\x1e)|(\x1e\[\S+[\s|\S]*\S+\]\x1e)/
        ),
        s = 0;
      return (
        a.forEach(function (e) {
          if (e)
            if (e.match(o)) {
              var a = e.match(o)[0],
                c = a.substr(2, a.length - 4),
                u = c.split(":")[0].split(","),
                l = u[0],
                p = u[1],
                d = c.split(":")[1];
              1 == l
                ? ++s < 2 && n.push({ text: d, type: "at" })
                : 4 == l && n.push({ type: "topic", text: d, topicid: p });
            } else if (e.match(r)) {
              var h = e.match(r)[0],
                m = h.substr(2, h.length - 4),
                f = m.split(" "),
                v = f[0],
                y = f[1];
              f.length > 2 && (y = m.substr(m.indexOf(" ")));
              var _ = { text: y, symbol: v, type: "stock" };
              i.push(v), s < 2 && n.push(_);
            } else if (s < 2) {
              var w = e.split(/\r\n|\n|\r/),
                x = { text: "", type: "plain-br" },
                b = { text: " ", type: "plain-br" };
              w.forEach(function (e, i) {
                "" === e
                  ? n.push(b)
                  : (n.push.apply(
                      n,
                      t(
                        (function (e) {
                          var t = [],
                            n = /\[\S{1,3}\]/;
                          return (
                            e.split(/(\[\S{1,3}\])/).forEach(function (e) {
                              try {
                                var i = e.match(n)[0].substr(1, e.length - 2),
                                  o = (function (e) {
                                    var t = g.indexOf(e);
                                    if (t < 0) return !1;
                                    var n = Math.floor(t / 20);
                                    return { page: n, id: t - 20 * n };
                                  })(i);
                                if (!o) throw "not emoji";
                                var r = {
                                  type: "emoji",
                                  emojiName: i,
                                  emojiPage: o.page,
                                  emojiId: o.id,
                                  content: "emoji".concat(i),
                                };
                                t.push(r);
                              } catch (n) {
                                e && t.push({ text: e, type: "plain" });
                              }
                            }),
                            t
                          );
                        })(e)
                      )
                    ),
                    i < w.length - 1 && n.push(x));
              });
            }
        }),
        { content: n, stocks: i }
      );
    }
    f.exports = function (e, t) {
      var n = e.rss_list || e.content || e.comment,
        i = [],
        o = e.subject_dict || null;
      Array.isArray(n) ? (i = n) : i.push(n);
      var r = [];
      return (
        n &&
          i.forEach(function (t, n) {
            if (!e.rss_list || "" == t.comment_id || t.topicAd) {
              var i = "" == t.comment_id ? t.subject_id : t.root_id,
                a = "" == t.comment_id ? t.subject_id : t.comment_id,
                s = !1;
              try {
                var c = h.wx$1.getStorageSync("illegalReport");
                c && c[a] && (s = !0);
              } catch (e) {}
              var u = "" != t.comment_id,
                l = (function (e) {
                  if (!e) return "";
                  if ("刚刚" === e) return { formatTime: e };
                  var t = e,
                    n = e.split("T").length,
                    i = n > 1 ? e.split("T")[0] : e,
                    o = n > 1 ? e.split("T")[1].split("+")[0] : "",
                    r = (e = "".concat(i, " ").concat(o));
                  try {
                    e = Date.parse(e.replace(/-/g, "/"));
                    var a = new Date(e) || new Date(t),
                      s = a.getFullYear(),
                      c = new Date(),
                      u = c.getTime(),
                      l = c.getFullYear(),
                      p = (new Date().setHours(0, 0, 0, 0), new Date(e)),
                      d = v(p.getMinutes()),
                      h = v(p.getHours()),
                      m = parseInt(u) - parseInt(a.getTime());
                    r =
                      m > 0 && m <= 6e4
                        ? "刚刚"
                        : m > 6e4 && m <= 36e5
                        ? Math.floor(parseInt(m / 6e4)) + "分钟前"
                        : m > 36e5 && m <= 864e5
                        ? Math.floor(parseInt(m) / 36e5) + "小时前"
                        : s == l
                        ? ""
                            .concat(i.substr(i.indexOf("-") + 1), " ")
                            .concat(h, ":")
                            .concat(d)
                        : "".concat(i, " ").concat(h, ":").concat(d);
                  } catch (e) {}
                  return { formatTime: r, time: "".concat(i, " ").concat(o) };
                })(t.created_at),
                p = o && o[i] ? o[i] : { content: t.content };
              if (null != p.content) {
                var d =
                  "" == p.content ? { content: [], stocks: [] } : y(p.content);
                (p.content_array = d.content), (p.stocks = d.stocks);
                var m = o ? p.type : t.type,
                  f = o ? p.news_id : t.news_id;
                if (3 == m && f) {
                  var g = f.split("_")[1] || null;
                  p.resourceType = g;
                }
                var _ = Object.assign({}, t, {
                  search_id: i,
                  id: a,
                  isIllegalReport: s,
                  isReply: u,
                  image_list: t.image_list || p.image_list,
                  detailInfo: p,
                  time: l.time,
                  formatTime: l.formatTime,
                  litype: p.type || t.publishType,
                });
                (function (e) {
                  if (e && 0 !== e.length) {
                    var t = (1 === e.length &&
                      (function (e) {
                        if (e && e.origin_prop) {
                          var t = e.origin_prop.split(",");
                          if (2 === t.length) {
                            var n = +t[0],
                              i = +t[1],
                              o = 0,
                              r = 0;
                            return (
                              n === i
                                ? ((o = 360), (r = 360))
                                : n > i
                                ? n / i <= 3
                                  ? ((o = 360), (r = i / (n / 360)))
                                  : ((o = n / (i / 120)), (r = 120))
                                : i / n <= 3
                                ? ((o = n / (i / 360)), (r = 360))
                                : ((o = 120), (r = i / (n / 120))),
                              {
                                width: Math.round(o),
                                height: Math.round(r),
                                mode: "scaleToFill",
                              }
                            );
                          }
                        }
                      })(e[0])) || {
                      width: 224,
                      height: 224,
                      mode: "aspectFill",
                    };
                    e.forEach(function (e) {
                      e &&
                        ((e.width = "".concat(t.width, "rpx")),
                        (e.height = "".concat(t.height, "rpx")),
                        (e.mode = t.mode));
                    });
                  }
                })(_.image_list),
                  r.push(_);
              }
            }
          }),
        t(Object.assign({}, e, { commentsData: r }))
      );
    };
    var _ = (null == f.exports ? {} : f.exports).default || f.exports;
    function w(e, t) {
      var n = e.statusCode,
        i = e.data;
      return 200 == n
        ? 0 == i.code
          ? (i.data.response && delete i.data.response, t(i.data))
          : h.__CJS__export_default__.reject(i.msg)
        : h.__CJS__export_default__.reject(e.errMsg);
    }
    var x = "shequ.editor";
    function b() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return m.sceneHelper.getSceneParamsScene(e);
    }
    var I = function (e) {
        h.StockBridge.report("".concat(x, ".page_brow"), b(e));
      },
      k = function (e) {
        h.StockBridge.report("".concat(x, ".at_click"), b(e));
      },
      T = function (e) {
        h.StockBridge.report("".concat(x, ".at_input"), b(e));
      },
      S = !1,
      q = {
        setup: function (e, t) {
          var n,
            i = t.emit,
            o = null == (n = h.getCurrentInstance()) ? void 0 : n.proxy,
            r = m.useContentManager(o, e, { emit: i });
          r.setCursorMethods(
            function () {
              var e = o.cursor >= 0 ? o.cursor : 0,
                t = (o.displayText || "").length;
              return e > t ? t : e;
            },
            function (e) {
              var t = (o.displayText || "").length,
                n = e > t ? t : e;
              o.cursor = n;
            }
          );
          var a = m.useFriendsSelect(o, e, { emit: i }, function (e, t) {
            var n;
            o.isAtInputTriggered && (n = r.removeAtBeforeCursor().newCursorPos),
              r.insertAt(e, t, n),
              (o.isAtInputTriggered = !1);
          });
          return l(l({}, a), r);
        },
        data: function () {
          return {
            infoList: "",
            previewImages: [],
            uploadTask: [],
            serverImages: [],
            imagesInfo: [],
            showEmojiFlag: !1,
            placeholder: "",
            keyBoardShowEmoji: !0,
            autoFocus: !0,
            focusflag: !0,
            indicatorDots: !0,
            isIphoneX: !1,
            hasInput: !1,
            emojiArr: [
              {
                pid: 0,
                list: [
                  "微笑",
                  "撇嘴",
                  "色",
                  "发呆",
                  "得意",
                  "流泪",
                  "害羞",
                  "闭嘴",
                  "睡",
                  "大哭",
                  "尴尬",
                  "发怒",
                  "调皮",
                  "呲牙",
                  "惊讶",
                  "难过",
                  "酷",
                  "冷汗",
                  "抓狂",
                  "吐",
                  "del",
                ],
              },
              {
                pid: 1,
                list: [
                  "偷笑",
                  "愉快",
                  "白眼",
                  "傲慢",
                  "饥饿",
                  "困",
                  "惊恐",
                  "流汗",
                  "憨笑",
                  "悠闲",
                  "奋斗",
                  "咒骂",
                  "疑问",
                  "嘘",
                  "晕",
                  "疯了",
                  "衰",
                  "骷髅",
                  "敲打",
                  "再见",
                  "del",
                ],
              },
              {
                pid: 2,
                list: [
                  "擦汗",
                  "抠鼻",
                  "鼓掌",
                  "糗大了",
                  "坏笑",
                  "左哼哼",
                  "右哼哼",
                  "哈欠",
                  "鄙视",
                  "委屈",
                  "快哭了",
                  "阴险",
                  "亲亲",
                  "吓",
                  "可怜",
                  "菜刀",
                  "西瓜",
                  "啤酒",
                  "篮球",
                  "乒乓",
                  "del",
                ],
              },
              {
                pid: 3,
                list: [
                  "咖啡",
                  "饭",
                  "猪头",
                  "玫瑰",
                  "凋谢",
                  "嘴唇",
                  "爱心",
                  "心碎",
                  "蛋糕",
                  "闪电",
                  "炸弹",
                  "刀",
                  "足球",
                  "瓢虫",
                  "便便",
                  "月亮",
                  "太阳",
                  "礼物",
                  "拥抱",
                  "强",
                  "del",
                ],
              },
              {
                pid: 4,
                list: [
                  "弱",
                  "握手",
                  "胜利",
                  "抱拳",
                  "勾引",
                  "拳头",
                  "差劲",
                  "爱你",
                  "NO",
                  "OK",
                  "爱情",
                  "飞吻",
                  "跳跳",
                  "发抖",
                  "怄火",
                  "转圈",
                  "磕头",
                  "回头",
                  "跳绳",
                  "投降",
                  "del",
                ],
              },
            ],
            cameraOn: !1,
            showCameraModal: !1,
            mapId: null,
            skin: h.wx$1.getStorageSync("user/skin") || "white",
            query: {},
            isAtInputTriggered: !1,
            cursor: 0,
          };
        },
        onLoad: function (e) {
          var t = this,
            n = getApp().globalData,
            i = e.id,
            o = void 0 === i ? null : i,
            r = e.name,
            a = void 0 === r ? null : r,
            s = e.symbol,
            c = void 0 === s ? null : s,
            u = e.type,
            l = void 0 === u ? "" : u,
            p = e.type2,
            d = void 0 === p ? "" : p,
            m = e.news_type,
            f = void 0 === m ? "" : m,
            g = e.touser,
            v = void 0 === g ? null : g,
            y = e.rootid,
            _ = void 0 === y ? null : y,
            w = e.content,
            x = void 0 === w ? "" : w,
            b = e.topicId,
            k = void 0 === b ? null : b,
            T = e.topic,
            S = void 0 === T ? null : T,
            q = e.subContent,
            j = void 0 === q ? null : q,
            E = e.map_id,
            C = void 0 === E ? null : E,
            O = e.placeholder,
            M = void 0 === O ? null : O,
            A = e.toOpenid ? decodeURIComponent(e.toOpenid) : null,
            N = n.SystemInfo,
            U = !1;
          try {
            /iphone\sx/i.test(N.model) && (U = !0);
          } catch (e) {}
          var $ = {
            id: o,
            rootid: _,
            symbol: c,
            name: a,
            toOpenid: A,
            touser: v,
            type: l,
            type2: d,
            news_type: f,
            content: x,
            placeholder: M,
            isIphoneX: U,
            topic: S,
            topicId: k,
            subContent: j,
            mapId: C,
            query: e,
          };
          Object.keys($).forEach(function (e) {
            t[e] = $[e];
          }),
            n.setSkin(),
            this.handleTextarea({
              symbol: this.symbol,
              name: this.name,
              topicId: this.topicId,
              topic: this.topic,
              touser: this.touser,
            }),
            h.wx$1.hideShareMenu({
              menus: ["shareAppMessage", "shareTimeline"],
            }),
            I(this.query);
        },
        onUnload: function () {
          this.$options.data && Object.assign(this.$data, this.$options.data());
        },
        onReady: function () {},
        onShow: function () {
          this.focusflag = !0;
        },
        onHide: function () {},
        computed: {
          submitButtonColor: function () {
            return this.displayText ||
              this.previewImages.length ||
              this.hasInput
              ? ""
              : "grey";
          },
          opCount: function () {
            return this.displayText || this.previewImages.length;
          },
        },
        methods: {
          handleTextarea: function (e) {
            var t = e.symbol,
              n = e.name,
              i = e.topicId,
              o = e.topic,
              r = e.touser;
            "detail" !== this.type && t && n
              ? this.insertStock(t, n)
              : "detail" !== this.type && i && o
              ? this.insertTopic(i, o)
              : r && (this.placeholder = "回复".concat(this.touser, ":"));
          },
          bindfocus: function (e) {
            this.showEmojiFlag = !1;
          },
          bindblur: function (e) {
            var t =
                null != this.displayText ? this.displayText : e.detail.value,
              n = (e.detail && e.detail.cursor) || t.length;
            this.cursor = n;
          },
          bindinpute: function (e) {
            var t = (e = e.mp || e).detail.value,
              n = (e.detail && e.detail.cursor) || this.cursor;
            if (m.atUserHelper.isAtSymbolInput(e, this.displayText)) {
              (this.isAtInputTriggered = !0),
                (this.displayText = t),
                (this.cursor = n),
                (this.focusflag = !1);
              var i = m.sceneHelper.getSceneParamsScene(this.query);
              return this.onClickAt(i), void T(i);
            }
            (this.hasInput = "" != t),
              (this.cursor = n),
              (this.displayText = t);
          },
          showEmoji: function () {
            var e = !this.showEmojiFlag;
            (this.showEmojiFlag = e),
              h.Request.reportMTAData({ eventName: "xcx_postdetail_emoji" });
          },
          pickAt: function () {
            (this.isAtInputTriggered = !1), (this.focusflag = !1);
            var e = m.sceneHelper.getSceneParamsScene(this.query);
            this.onClickAt(e), k(e);
          },
          tapEmoji: function (e) {
            var n = this,
              i = [];
            this.emojiArr.forEach(function (e) {
              i.push.apply(i, t(e.list));
            }),
              setTimeout(function () {
                var t = e.target.dataset.name,
                  o = n.displayText,
                  r = o.length,
                  a = n.cursor || r;
                if ("del" == t) {
                  var s = o.match(/\[\S{1,3}\]$/),
                    c = s && s[0];
                  if (c) {
                    var u = c.substr(1, c.length - 2),
                      l = u.length;
                    o =
                      i.indexOf(u) >= 0
                        ? o.substr(0, r - l - 2)
                        : o.substr(0, r - 1);
                  } else o = o.substr(0, r - 1);
                } else (o = o.substr(0, n.cursor) + "[".concat(t, "]") + o.substr(n.cursor)), (a += t.length + 2);
                (n.displayText = o), (n.cursor = a);
              }, 5);
          },
          bindconfirm: function (e) {},
          previewImage: function (e) {
            var t = e.target.dataset.src;
            h.wx$1.previewImage({ current: t, urls: this.previewImages });
          },
          chooseImage: function () {
            var e = this;
            h.Request.reportMTAData({ eventName: "xcx_postdetail_pic" }),
              (this.showEmojiFlag = !1);
            var t = this;
            9 !== t.previewImages.length
              ? h.__CJS__export_default__.wx
                  .chooseImage({
                    count: 9 - t.previewImages.length,
                    sizeType: ["original", "compressed"],
                    sourceType: ["album", "camera"],
                  })
                  .then(function (n) {
                    var i = n.tempFilePaths,
                      o = t.previewImages.length,
                      r = t.previewImages.concat(i);
                    (e.previewImages = r),
                      (e.lastImagesLen = o),
                      (e.focusflag = !0);
                    var a = t.serverImages,
                      s = t.uploadTask;
                    (s.length = r.length),
                      (a.length = r.length),
                      h.Request.auth().then(function (e) {
                        var n = e.qluin,
                          r = e.qlskey;
                        i.map(function (e, i) {
                          var c = o + i;
                          (s[c] = h.wx$1.uploadFile({
                            url: "https://group.finance.qq.com/newstockgroup/commentPlat/putImagePlat",
                            filePath: e,
                            name: "image_1",
                            formData: {
                              target: "pf",
                              qluin: n,
                              qlskey: r,
                              check: 12,
                              app: "wzq",
                            },
                            success: function (e) {
                              var n = JSON.parse(e.data || "{}");
                              (a[c] = n.data.image_1), (t.serverImages = a);
                            },
                          })),
                            h.toRaw(s[c]).onProgressUpdate(function (e) {
                              s[c] && (s[c].progress = e.progress),
                                (t.uploadTask = s);
                            });
                        });
                      });
                    var c = t.imagesInfo;
                    i.forEach(function (t, n) {
                      h.__CJS__export_default__.wx
                        .getImageInfo({ src: t })
                        .then(function (t) {
                          (c[o + n] = { width: t.width, height: t.height }),
                            (e.imagesInfo = c);
                        });
                    });
                  })
                  .catch(function (t) {
                    e.focusflag = !0;
                  })
              : h.wx$1.showToast({
                  title: "最多只能上传9张图片",
                  icon: "none",
                  duration: 2e3,
                });
          },
          delImage: function (e, t) {
            var n = this,
              i = e ? e.currentTarget.dataset.idx : t,
              o = this.uploadTask,
              r = this.previewImages,
              a = this.serverImages,
              s = this.imagesInfo,
              c = this.lastImagesLen;
            o.splice(i, 1), r.splice(i, 1), a.splice(i, 1), s.splice(i, 1);
            var u = {
              uploadTask: o,
              previewImages: r,
              serverImages: a,
              imagesInfo: s,
              lastImagesLen: i < c ? c - 1 : c,
            };
            Object.keys(u).forEach(function (e) {
              n[e] = u[e];
            });
          },
          submitComment: function (t) {
            return d(
              this,
              null,
              e().mark(function n() {
                var i, o, r, a;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), this.getNetworkStatus();
                        case 2:
                          if (
                            ((i = e.sent),
                            "none" !== (o = i.networkType) && "unknown" !== o)
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            void h.wx$1.showToast({
                              title: "网络不可用，请检查网络设置",
                              icon: "error",
                              duration: 2e3,
                            })
                          );
                        case 6:
                          (r = this),
                            (this.focusflag = !1),
                            (a = t.currentTarget.dataset.op) && !S
                              ? ((S = !0),
                                setTimeout(function () {
                                  S = !1;
                                }, 1e4),
                                setTimeout(function () {
                                  r.submit();
                                }, 200))
                              : a ||
                                h.StockBridge.aegisReportEvent(
                                  "MONITOR-COMMENT-EDIT-SUBMITCOMMENT",
                                  { ext4: "submitComment-op", ext5: a }
                                );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
          getNetworkStatus: function () {
            return new Promise(function (e, t) {
              try {
                h.wx$1.getNetworkType({
                  success: function (n) {
                    var i = n.networkType;
                    "none" !== i || "unknown" !== i ? e(n) : t({});
                  },
                  fail: function () {
                    t({});
                  },
                });
              } catch (e) {
                t({});
              }
            });
          },
          submitDeviceInfo: function () {
            return d(
              this,
              null,
              e().mark(function t() {
                var n, i, o, r, a, s, c;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), this.getNetworkStatus()
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            (i = n.networkType),
                            (o = h.getPlatformInfo()),
                            (r = o.mpVersion),
                            (a =
                              (h.wx$1.getDeviceInfo &&
                                h.wx$1.getDeviceInfo()) ||
                              h.wx$1.getSystemInfoSync()),
                            (s = a.platform),
                            (c = {
                              op_system: void 0 === s ? "" : s,
                              app_version: r,
                              net_type: i,
                            }),
                            e.abrupt(
                              "return",
                              Buffer.from(JSON.stringify(c)).toString("base64")
                            )
                          );
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(0));
                        case 16:
                          return e.abrupt("return", "");
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 14]]
                );
              })
            );
          },
          postComment: function (e, t) {
            var n = this;
            return h.Request.auth().then(function (t) {
              return h.Request.getWxUserInfo().then(function (i) {
                if (i) {
                  var o = e.replyText,
                    r = e.symbol,
                    a = e.id,
                    s = e.rootid,
                    c = e.type,
                    u = e.type2,
                    d = e.news_type,
                    f = e.image_list,
                    g = e.imagesInfo,
                    v = e.topic,
                    y = e.topicId,
                    _ = e.subContent,
                    x = e.mapId,
                    b = e.device_ext,
                    I = e.atUserLinks,
                    k = void 0 === I ? [] : I,
                    T = {};
                  if ("detail" === c) {
                    var S = {};
                    f &&
                      f.forEach(function (e, t) {
                        e || (f.splice(t, 1), g.splice(t, 1));
                      }),
                      f &&
                        f.forEach(function (e, t) {
                          (S["image_".concat(t + 1)] = e),
                            (S["image_".concat(t + 1, "_prop")] = ""
                              .concat(g[t].width, ",")
                              .concat(g[t].height));
                        }),
                      (T = p(l({}, S), {
                        content: o,
                        parent_id: a,
                        root_id: u && "reply" === u ? s : a,
                        attitude: 0,
                        nickname: i.nickName,
                        avatar_url: i.avatarUrl,
                        qluin: t.qluin,
                        qlskey: t.qlskey,
                      }));
                  } else if ("news" === c || "aiFinancialReport" === c) {
                    var q = {};
                    f &&
                      f.forEach(function (e, t) {
                        e || (f.splice(t, 1), g.splice(t, 1));
                      }),
                      f &&
                        f.forEach(function (e, t) {
                          (q["image_".concat(t + 1)] = e),
                            (q["image_".concat(t + 1, "_prop")] = ""
                              .concat(g[t].width, ",")
                              .concat(g[t].height));
                        }),
                      (T = p(l({}, q), {
                        content: o,
                        attitude: 0,
                        nickname: i.nickName,
                        avatar_url: i.avatarUrl,
                        qluin: t.qluin,
                        openid: t.qluin,
                        qlskey: t.qlskey,
                        fskey: t.qlskey,
                        news_id: a,
                        map_id: "news_".concat(a),
                        news_type: "aiFinancialReport" === c ? 27 : 1,
                        sub_content: _,
                        qlappid: "wx4eff699c2e813ab6",
                        appid: "wx9cf8c670ebd68ce4",
                        type: f && f.length ? 4 : 1,
                      }));
                  } else if ("video" === c) {
                    var j =
                        "qqstock://stockhybrid/com.tencent.shy.update_proxy/index?version=8.4.0&isHippy=true&p_key=".concat(
                          "videoRelated",
                          "&p_showNav=true&news_id=",
                          a
                        ),
                      E =
                        "https://gu.qq.com/resources/shy/news/live/index.html#/videodetail?video_id="
                          .concat(a, "&type=")
                          .concat(d, "&wxurl=")
                          .concat(j),
                      C = "/pages/newsCon/video/videoDetail?id="
                        .concat(a, "&wxurl=")
                        .concat(j),
                      O = {};
                    f &&
                      f.forEach(function (e, t) {
                        e || (f.splice(t, 1), g.splice(t, 1));
                      }),
                      f &&
                        f.forEach(function (e, t) {
                          (O["image_".concat(t + 1)] = e),
                            (O["image_".concat(t + 1, "_prop")] = ""
                              .concat(g[t].width, ",")
                              .concat(g[t].height));
                        }),
                      ((T = p(l({}, O), {
                        content: "".concat(o, "【视频】").concat(_, ""),
                        attitude: 0,
                        nickname: i.nickName,
                        avatar_url: i.avatarUrl,
                        qluin: t.qluin,
                        openid: t.qluin,
                        qlskey: t.qlskey,
                        news_id: a,
                        map_id: "news_".concat(a),
                        appid: "wx9cf8c670ebd68ce4",
                        type: f && f.length ? 4 : 1,
                        news_type: d,
                        topics: "",
                        post_scene: "",
                      })).link = JSON.stringify([
                        {
                          title: "【视频】".concat(_),
                          data: {
                            hyperHybirdUrl: j,
                            hyperH5Url: E,
                            wxMiniUrl: C,
                          },
                          type: "hyper",
                        },
                      ]));
                  } else {
                    var M = {};
                    f &&
                      f.forEach(function (e, t) {
                        e || (f.splice(t, 1), g.splice(t, 1));
                      }),
                      f &&
                        f.forEach(function (e, t) {
                          (M["image_".concat(t + 1)] = e),
                            (M["image_".concat(t + 1, "_prop")] = ""
                              .concat(g[t].width, ",")
                              .concat(g[t].height));
                        });
                    var A = {
                      content: o,
                      attitude: 0,
                      avatar_url: i.avatarUrl,
                      nickname: i.nickName,
                      type: f && f.length ? 4 : 1,
                      qluin: t.qluin,
                      qlskey: t.qlskey,
                    };
                    x && (A.map_id = x), (T = Object.assign({}, A, M));
                  }
                  if (
                    (r
                      ? (T.stock_id = r)
                      : v && y && ((T.topics = y), (T.stock_id = "")),
                    (T.send_token = e.send_token || ""),
                    "detail" === n.type)
                  ) {
                    var N = m.atUserHelper.mergeAtUserLinks(k, T.link);
                    N && (T.link = N);
                  } else {
                    var U = m.sceneHelper.getSceneParams(n.query);
                    T = l(l({}, T), U);
                  }
                  T = p(l({}, T), {
                    device_ext: b,
                    check: 12,
                    app: "plus",
                    openid: t.qluin,
                  });
                  var $ =
                    "https://wzq.tenpay.com/group/newstockgroup/comment/".concat(
                      "detail" === c ? "putComment" : "putSubject"
                    );
                  return h.__CJS__export_default__.wx
                    .request({
                      url: $,
                      method: "POST",
                      data: T,
                      header: {
                        "content-type": "application/x-www-form-urlencoded",
                      },
                    })
                    .filter(w)
                    .then(function (e) {
                      return e;
                    })
                    .catch(function (e) {
                      var t =
                        ("[object String]" ===
                          Object.prototype.toString.call(e) &&
                          e) ||
                        "帖子发表失败";
                      h.wx$1.showToast({
                        title: t,
                        icon: t.length <= 7 ? "error" : "none",
                        duration: 2e3,
                      });
                    });
                }
              });
            });
          },
          handleText: function () {
            var e = "detail" === this.type;
            return this.getSubmitContent(e);
          },
          submit: function () {
            return d(
              this,
              null,
              e().mark(function t() {
                var n,
                  i,
                  o,
                  r,
                  a,
                  s,
                  c,
                  u,
                  p,
                  d,
                  m,
                  f,
                  g,
                  v,
                  y,
                  w,
                  x,
                  b,
                  I = this;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = this),
                            (i = getApp().globalData.Event),
                            n.serverImages,
                            (o = n.imagesInfo),
                            n.uploadTask,
                            (r = this.checkUploadStatus()),
                            (e.next = 8),
                            n.submitDeviceInfo()
                          );
                        case 8:
                          if (((a = e.sent), r)) {
                            e.next = 11;
                            break;
                          }
                          return e.abrupt("return");
                        case 11:
                          (s = this.handleText()),
                            (c = s.processedText),
                            (u = s.atUserLinks),
                            (p = n.type),
                            (d = n.type2),
                            (m = n.news_type),
                            (f = n.touser),
                            (g = n.toOpenid),
                            (v =
                              "reply" == d
                                ? ""
                                    .concat(c, "<1,")
                                    .concat(g, ":")
                                    .concat(f, "> ")
                                    .concat(n.content)
                                : "".concat(c)),
                            (y = []),
                            n.previewImages.forEach(function (e, t) {
                              y.push({
                                origin: e,
                                filesize: "",
                                origin_prop: "",
                              });
                            }),
                            (w = {
                              comment: [
                                {
                                  content: v,
                                  image_list: y,
                                  created_at: "刚刚",
                                  publishType: y.length ? 4 : 1,
                                },
                              ],
                            }),
                            (x = new h.__CJS__export_default__()).resolve(w),
                            (b = Date.now().toString().substring(7)),
                            x
                              .then()
                              .filter(_)
                              .then(function (e) {
                                e &&
                                  h.Request.getWxUserInfo().then(function (t) {
                                    if (t) {
                                      var n = e.commentsData[0];
                                      (n.fake_id = b),
                                        (n.like_num = 0),
                                        (n.comment_cnt = 0),
                                        (n.user_image = t.avatarUrl),
                                        (n.user_name = t.nickName),
                                        (n.type = p),
                                        (n.type2 = d),
                                        (n.from_user =
                                          h.wx$1.getStorageSync(
                                            "userinfo"
                                          ).openid);
                                      var o =
                                        "detail" == p
                                          ? "newComment"
                                          : "newSubject";
                                      i.emit(o, { post: n }),
                                        h.StockBridge.busEmit(
                                          "community-".concat(o),
                                          { post: n }
                                        );
                                    } else h.StockBridge.aegisReportEvent("MONITOR-COMMENT-EDIT-SUBMITCOMMENT", { ext4: "submit getWxUserInfo is null" });
                                  });
                              }),
                            setTimeout(
                              function () {
                                var e = n.serverImages,
                                  t = !0;
                                if (
                                  (e.forEach(function (e, n) {
                                    null != e || (t = !1);
                                  }),
                                  t)
                                ) {
                                  var r = function () {
                                      var e =
                                          arguments.length > 0 &&
                                          void 0 !== arguments[0]
                                            ? arguments[0]
                                            : "",
                                        t = {
                                          send_token: e,
                                          replyText: v,
                                          image_list: n.serverImages,
                                          imagesInfo: o,
                                          id: n.id,
                                          rootid: n.rootid || n.id,
                                          symbol: n.symbol,
                                          type: p,
                                          type2: d,
                                          news_type: m,
                                          topicId: n.topicId,
                                          topic: n.topic,
                                          subContent: n.subContent,
                                          device_ext: a,
                                          atUserLinks: u,
                                        };
                                      n.mapId && (t.mapId = n.mapId),
                                        I.postComment(t, p).then(function (e) {
                                          var t =
                                              "detail" == p
                                                ? "xcx_postdetail_send"
                                                : "reply" == d
                                                ? "xcx_postdetail_replay_send"
                                                : "xcx_post_send",
                                            o = {};
                                          "stockbasket" === p &&
                                            (o.watchlist_id = n.mapId),
                                            "discoveryevent" === p &&
                                              (o.discoveryevent_id = n.mapId),
                                            h.Request.reportMTAData(
                                              l({ eventName: t }, o)
                                            );
                                          var r =
                                              "detail" == p
                                                ? "newComment"
                                                : "newSubject",
                                            a = {
                                              parent_id: n.id,
                                              root_id: n.rootid,
                                              comment_id: e,
                                              fake_id: b,
                                              type: p,
                                              type2: d,
                                            };
                                          i.emit(r, a),
                                            h.StockBridge.busEmit(
                                              "community-".concat(r),
                                              a
                                            ),
                                            e &&
                                              (h.wx$1.showToast({
                                                title: "帖子发表成功",
                                                icon: "success",
                                                duration: 2e3,
                                              }),
                                              setTimeout(function () {
                                                h.wx$1.navigateBack({
                                                  delta: 1,
                                                });
                                                var e =
                                                  I.getOpenerEventChannel();
                                                e &&
                                                  e.emit &&
                                                  e.emit("navigateBack", {
                                                    page: "info_detail",
                                                  });
                                              }, 2e3));
                                        });
                                    },
                                    s = "";
                                  "detail" === p &&
                                    ((s = n.rootid || n.id),
                                    "reply" === d && (s = n.id)),
                                    h.wx$1.showLoading(),
                                    h.Request.getPreSendInfo({ parent_id: s })
                                      .then(function (e) {
                                        h.wx$1.hideLoading();
                                        var t = "";
                                        if (e && e.send_token) {
                                          if (
                                            !(
                                              "[object Undefined]" ===
                                                Object.prototype.toString.call(
                                                  e.could_remark
                                                ) ||
                                              (e.could_remark &&
                                                1 == +e.could_remark)
                                            )
                                          )
                                            return (
                                              h.wx$1.showToast({
                                                title:
                                                  e.could_remark_msg ||
                                                  "因对方设置，该贴暂不支持评论",
                                                icon: "none",
                                                duration: 2e3,
                                              }),
                                              void setTimeout(function () {
                                                h.wx$1.navigateBack({
                                                  delta: 1,
                                                });
                                              }, 2e3)
                                            );
                                          t = e.send_token;
                                        }
                                        r(t);
                                      })
                                      .catch(function (e) {
                                        h.wx$1.hideLoading(),
                                          h.StockBridge.aegisReportEvent(
                                            "MONITOR-COMMENT-EDIT-SUBMITCOMMENT",
                                            {
                                              ext4: "getPreSendInfo Request Fail",
                                              ext5:
                                                e && e.errMsg ? e.errMsg : "",
                                            }
                                          ),
                                          e &&
                                          e.errMsg &&
                                          e.errMsg.includes("request:fail")
                                            ? h.wx$1.showToast({
                                                title:
                                                  "网络不可用，请检查网络设置",
                                                icon: "error",
                                                duration: 2e3,
                                              })
                                            : h.wx$1.showToast({
                                                title: "帖子发表失败",
                                                icon: "error",
                                                duration: 2e3,
                                              });
                                      });
                                } else
                                  h.__CJS__export_default__.wx.showModal({
                                    title: "",
                                    content: "还有图片未上传成功，请稍后再试",
                                    showCancel: !1,
                                  });
                              },
                              n.serverImages.length ? 1e3 : 0
                            );
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
          strToHexCharCode: function (e) {
            if ("" === e || !e) return "";
            var t = [];
            t.push("0x");
            for (var n = 0; n < e.length; n++)
              t.push(e.charCodeAt(n).toString(16));
            return t.join("");
          },
          checkUploadStatus: function () {
            var e = this,
              t = this.uploadTask,
              n = !0,
              i = [];
            if (
              (t.forEach(function (e, t) {
                e
                  ? h.toRaw(e).onProgressUpdate(function (e) {
                      e && e.progress, 100 != process && ((n = !1), i.push(t));
                    })
                  : (n = !1);
              }),
              n)
            )
              return !0;
            h.wx$1.showModal({
              title: "提示",
              content: "还有图片未上传成功，确定要放弃该图片,发表评论？",
              success: function (t) {
                return t.confirm
                  ? (i.forEach(function (t) {
                      e.delImage(null, t);
                    }),
                    !0)
                  : !t.cancel && void 0;
              },
            });
          },
        },
      };
    Array ||
      (
        h.resolveComponent("mp-privacy-dialog") +
        h.resolveComponent("stock-privacy-dialog")
      )();
    var j = h._export_sfc(q, [
      [
        "render",
        function (e, t, n, i, o, r) {
          return h.e(
            {
              a: e.rootFontSize,
              b: h.p({ "no-auto": !0 }),
              c: e.placeholder,
              d: e.displayText,
              e: e.cursor,
              f: e.autoFocus,
              g: e.focusflag,
              h: h.o(function () {
                return e.bindfocus && e.bindfocus.apply(e, arguments);
              }, 346),
              i: h.o(function () {
                return e.bindblur && e.bindblur.apply(e, arguments);
              }, 347),
              j: h.o(function () {
                return e.bindinpute && e.bindinpute.apply(e, arguments);
              }, 348),
              k: h.o(function () {
                return e.bindconfirm && e.bindconfirm.apply(e, arguments);
              }, 349),
              l: e.keyBoardShowEmoji,
              m: e.previewImages.length,
            },
            e.previewImages.length
              ? h.e(
                  { n: e.previewImages.length },
                  e.previewImages.length
                    ? h.e(
                        {
                          o: h.f(e.previewImages, function (t, n, i) {
                            return h.e(
                              { a: t },
                              t
                                ? {
                                    b: h.o(
                                      function () {
                                        return (
                                          e.delImage &&
                                          e.delImage.apply(e, arguments)
                                        );
                                      },
                                      350,
                                      n
                                    ),
                                    c: n,
                                    d: t,
                                  }
                                : {},
                              {
                                e: t,
                                f: h.o(
                                  function () {
                                    return (
                                      e.previewImage &&
                                      e.previewImage.apply(e, arguments)
                                    );
                                  },
                                  351,
                                  n
                                ),
                                g: n,
                                h: t,
                                i: e.uploadTask[n] && e.uploadTask[n].progress,
                                j: n,
                              }
                            );
                          }),
                          p: e.previewImages.length < 9,
                        },
                        e.previewImages.length < 9
                          ? {
                              q: h.o(function () {
                                return (
                                  e.chooseImage &&
                                  e.chooseImage.apply(e, arguments)
                                );
                              }, 352),
                            }
                          : {}
                      )
                    : {}
                )
              : {},
            {
              r: h.o(function () {
                return e.chooseImage && e.chooseImage.apply(e, arguments);
              }, 353),
              s: h.o(function () {
                return e.showEmoji && e.showEmoji.apply(e, arguments);
              }, 354),
              t: h.o(function () {
                return e.pickAt && e.pickAt.apply(e, arguments);
              }, 355),
              v: h.n(e.submitButtonColor),
              w: e.opCount,
              x: h.o(function () {
                return e.submitComment && e.submitComment.apply(e, arguments);
              }, 356),
              y: e.showEmojiFlag,
            },
            e.showEmojiFlag
              ? {
                  z: h.f(e.emojiArr, function (t, n, i) {
                    return {
                      a: h.f(t.list, function (t, n, i) {
                        return {
                          a: h.o(
                            function () {
                              return (
                                e.tapEmoji && e.tapEmoji.apply(e, arguments)
                              );
                            },
                            357,
                            n
                          ),
                          b: t,
                          c: n,
                        };
                      }),
                      b: h.n("panel" + n),
                      c: n,
                    };
                  }),
                  A: e.indicatorDots,
                  B: h.n(e.isIphoneX ? "iphoneX" : ""),
                }
              : {},
            { C: e.skin }
          );
        },
      ],
      ["__scopeId", "data-v-8fd16bfa"],
    ]);
    wx.createPage(j);
  },
  { isPage: true, isComponent: true, currentFile: "pages/comment/edit/edit.js" }
);
require("pages/comment/edit/edit.js");
