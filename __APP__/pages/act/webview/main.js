var e = require("../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, r) {
    for (var n in r || (r = {})) o.call(r, n) && c(e, n, r[n]);
    if (i) {
      var a,
        l = t(i(r));
      try {
        for (l.s(); !(a = l.n()).done; ) {
          n = a.value;
          s.call(r, n) && c(e, n, r[n]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  h = require("../../../common/vendor.js"),
  u = require("../@tencent/st-canvas-image/OffscreenCanvas.js"),
  d = {
    1: "https://wzq.tenpay.com/mp/v2/index.html#/daily/invest?stat_data=oth87p00qb412",
    2: "https://mp.weixin.qq.com/s/1PRgj9f1vspib1U3AoLLlw",
    3: "https://zqact.tenpay.com/activity/page/activityForward/#/?key=fitXcxQrcode&stat=osz92p00ry016",
  },
  p = {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    data: function () {
      return { url: "", shareInfo: {}, truthWebviewLink: "", shareTitle: "" };
    },
    onLoad: function (e) {
      var t = e.type,
        r = void 0 === t ? 1 : t,
        n = e.url,
        a = e.act_actid,
        i = e.act_id,
        o = e.act_tid,
        s = e.stat_data,
        c = e.hx_sku_id,
        l = e.tx_cps_id,
        u = e.shareTitle;
      if (((this.shareTitle = decodeURIComponent(u || "")), n)) {
        var p = "",
          f = decodeURIComponent(n);
        a &&
          i &&
          o &&
          (p = ""
            .concat(f.includes("?") ? "&" : "?", "act_actid=")
            .concat(a, "&act_id=")
            .concat(i, "&act_tid=")
            .concat(o, "&stat_data=")
            .concat(s)),
          c &&
            l &&
            (p
              ? (p += "&hx_sku_id=".concat(c, "&tx_cps_id=").concat(l))
              : (p = ""
                  .concat(f.includes("?") ? "&" : "?", "hx_sku_id=")
                  .concat(c, "&tx_cps_id=")
                  .concat(l)));
        var v = "__mina_container__=main";
        p
          ? (p += "&".concat(v))
          : (p = "".concat(f.includes("?") ? "&" : "?").concat(v)),
          (this.url = f + p);
      } else this.url = d[+r];
      this.url.indexOf("welwareCenterNew") >= 0 &&
        !h.prefetchActCgi.guessPromise &&
        h.prefetchActCgi.prefetch(),
        this.url.indexOf("__showNav__=0") >= 0 &&
          setTimeout(function () {
            getApp().globalData.Event.emit("base.navbar.hide", !0);
          }, 2e3);
    },
    onShareAppMessage: function () {
      return (
        (t = this),
        null,
        (r = e().mark(function () {
          var t, r, i, o, s, c, d, p, f, v, m;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!this.url) {
                      e.next = 16;
                      break;
                    }
                    if (
                      ((null == (t = this.shareInfo) ? void 0 : t.link) ||
                        h.mpReporter.reportEvent("MONITOR-SHARE-INFO-EMPTY", {
                          ext3: this.url,
                        }),
                      (e.prev = 2),
                      (f = l({}, this.shareInfo)),
                      "drawImg" !==
                        (null == (r = this.shareInfo) ? void 0 : r.type) ||
                        !(null ==
                        (o = null == (i = this.shareInfo) ? void 0 : i.drawArr)
                          ? void 0
                          : o.length))
                    ) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 7), u.OffscreenCanvasImage.draw(f.drawArr);
                  case 7:
                    (v = e.sent),
                      (this.shareInfo =
                        ((d = l({}, f)),
                        (p = {
                          imgUrl:
                            (null == v ? void 0 : v.tempFilePath) ||
                            this.shareInfo.imgUrl,
                        }),
                        n(d, a(p))));
                  case 9:
                    e.next = 14;
                    break;
                  case 11:
                    (e.prev = 11),
                      (e.t0 = e.catch(2)),
                      h.mpReporter.reportEvent("MONITOR-SHARE-DRAW-ERROR", {
                        ext3: JSON.stringify(e.t0),
                      });
                  case 14:
                    return (
                      (m = /^(pages|independentpack)\//.test(
                        this.shareInfo.link
                      )
                        ? this.shareInfo.link
                        : "pages/act/webview/main?url=".concat(
                            encodeURIComponent(this.shareInfo.link || this.url)
                          )),
                      e.abrupt("return", {
                        title: this.shareTitle || this.shareInfo.title,
                        description: this.shareInfo.desc,
                        path: m,
                        imageUrl: this.shareInfo.imgUrl,
                        truthWebviewLink:
                          (null == (s = this.shareInfo)
                            ? void 0
                            : s.locationHref) ||
                          this.truthWebviewLink ||
                          "",
                        f_rdm_rurl:
                          (null == (c = this.shareInfo)
                            ? void 0
                            : c.f_rdm_rurl) || "",
                      })
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            i,
            this,
            [[2, 11]]
          );
        })),
        new Promise(function (e, n) {
          var a = function (e) {
              try {
                o(r.next(e));
              } catch (e) {
                n(e);
              }
            },
            i = function (e) {
              try {
                o(r.throw(e));
              } catch (e) {
                n(e);
              }
            },
            o = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(a, i);
            };
          o((r = r.apply(t, null)).next());
        })
      );
      var t, r;
    },
    methods: {
      handleLoad: function (e) {
        var t;
        (this.truthWebviewLink = decodeURIComponent(
          decodeURIComponent(
            (null == (t = null == e ? void 0 : e.detail) ? void 0 : t.src) || ""
          )
        )),
          h.Request.reportMTAData({
            eventName: "base.global.act_webview_main_brow",
            tmp_rurl: this.truthWebviewLink,
          });
      },
      handleMessage: function (e) {
        var t = e.detail.data,
          r = void 0 === t ? [] : t;
        r && r.length && (this.shareInfo = r[r.length - 1] || {});
      },
    },
  };
Array ||
  (
    h.resolveComponent("mp-privacy-dialog") + h.resolveComponent("zxg-webview")
  )();
var f = h._export_sfc(p, [
  [
    "render",
    function (e, t, r, n, a, i) {
      return h.e(
        { a: e.rootFontSize, b: a.url },
        a.url
          ? {
              c: h.o(i.handleMessage, 370),
              d: h.o(i.handleLoad, 371),
              e: h.p({ src: a.url }),
            }
          : {}
      );
    },
  ],
]);
(p.__runtimeHooks = 2), wx.createPage(f);
