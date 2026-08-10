require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = function (e, r, t) {
    return r in e
      ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t);
  },
  c = function (e, r) {
    for (var n in r || (r = {})) i.call(r, n) && s(e, n, r[n]);
    if (a) {
      var c,
        l = t(a(r));
      try {
        for (l.s(); !(c = l.n()).done; ) {
          n = c.value;
          o.call(r, n) && s(e, n, r[n]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return e;
  },
  l = require("../../../common/vendor.js"),
  u = require("../@tencent/stock-markets-base/utils/share.js"),
  p = getApp().globalData,
  h = {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    data: function () {
      return { url: "", frompage: "", shareInfo: {} };
    },
    onShareAppMessage: function () {
      return (
        (t = this),
        null,
        (n = e().mark(function () {
          var t, n, a, i, o, s, c, p, h, f, d, g, m, v, b, w, x;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (null == (t = l.Request) ||
                        t.reportMTAData({
                          eventName: "xcx_share_webview_friends",
                        }),
                      (c = this.url),
                      (-1 ===
                        (p =
                          (null == (n = this.shareInfo) ? void 0 : n.link) ||
                          "").indexOf("/hangqingxinzhai") &&
                        -1 === p.indexOf("activity") &&
                        -1 === p.indexOf("searchAi")) ||
                        (c = p),
                      c.includes("vip.sfconnect.cn"))
                    )
                      try {
                        (h = c.split("#").pop()),
                          (f = h.split("?")),
                          (d = r(f, 2)),
                          (g = d[0]),
                          (m = d[1]),
                          (c = "pages/newsCon/tsyb/index?path="
                            .concat(g.replace(/^\//, ""), "&")
                            .concat(m));
                      } catch (e) {}
                    return (
                      (v = {
                        path: /^pages\//.test(c)
                          ? c
                          : "pages/additional/webview/index?url=".concat(
                              encodeURIComponent(c)
                            ),
                      }),
                      (null == (a = this.shareInfo) ? void 0 : a.title) &&
                        (v.title = this.shareInfo.title),
                      (null == (i = this.shareInfo) ? void 0 : i.imgUrl) &&
                        (v.imageUrl = this.shareInfo.imgUrl),
                      (e.next = 8),
                      null ==
                      (s =
                        null == (o = getApp().globalData.detect)
                          ? void 0
                          : o.env)
                        ? void 0
                        : s.IS_PCWEIXIN
                    );
                  case 8:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 11;
                      break;
                    }
                    e.t0 = !1;
                  case 11:
                    if (
                      ((b = e.t0),
                      !(
                        c.indexOf("longhubang") > -1 && this.shareInfo.shareData
                      ) || b)
                    ) {
                      e.next = 18;
                      break;
                    }
                    return (
                      (w = this.shareInfo.shareData),
                      (e.next = 16),
                      u.ShareUtil.renderToImage(w)
                    );
                  case 16:
                    (x = e.sent), (v.imageUrl = x);
                  case 18:
                    return e.abrupt("return", v);
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            a,
            this
          );
        })),
        new Promise(function (e, r) {
          var a = function (e) {
              try {
                o(n.next(e));
              } catch (e) {
                r(e);
              }
            },
            i = function (e) {
              try {
                o(n.throw(e));
              } catch (e) {
                r(e);
              }
            },
            o = function (r) {
              return r.done ? e(r.value) : Promise.resolve(r.value).then(a, i);
            };
          o((n = n.apply(t, null)).next());
        })
      );
      var t, n;
    },
    onLoad: function (e) {
      if (
        ((this.url = decodeURIComponent(e.url)),
        (this.frompage = e.frompage),
        p.setSkin(),
        /https:\/\/(wzq|zqact|zqact01|zqact02|zqact03|zqact04|zqact05).\w+(.com|.cn){1,}\/mp\/v2\/index.html#\/hangqingxinzhai/.test(
          this.url
        ))
      ) {
        p.wx.request({
          url: "".concat(p.CGI_PREFIX, "exposure_report.fcgi"),
          data: c({}, { channel: 4, report_id: "hangqingxinzhai" }),
          method: "GET",
          success: function (e) {},
        });
      }
      if (
        (p.mpReporter.reportEvent("WEBVIWE_LOADING_H5", {
          ext1: this.frompage
            ? "".concat(this.url, "?frompage=").concat(this.frompage)
            : this.url,
        }),
        l.wx$1.getStorageSync("independent/webviewerror"))
      ) {
        var r = l.wx$1.getStorageSync("independent/webviewerror").fullUrl,
          t = void 0 === r ? "" : r;
        p.mpReporter.reportEvent("INDEPENDENT_WEBVIEW_ERROR", { ext1: t }),
          l.wx$1.removeStorageSync("independent/webviewerror");
      }
      1 == +e.hideShareMenu &&
        l.wx$1.hideShareMenu({ menus: ["shareAppMessage", "shareTimeline"] });
    },
    methods: {
      handleMessage: function (e) {
        var r = e.detail.data,
          t = void 0 === r ? [] : r;
        t && t.length && (this.shareInfo = t[t.length - 1]);
      },
    },
  };
Array ||
  (
    l.resolveComponent("mp-privacy-dialog") + l.resolveComponent("zxg-webview")
  )();
var f = l._export_sfc(h, [
  [
    "render",
    function (e, r, t, n, a, i) {
      return {
        a: e.rootFontSize,
        b: l.o(i.handleMessage, 363),
        c: l.p({ src: a.frompage ? a.url + "?frompage=" + a.frompage : a.url }),
      };
    },
  ],
]);
(h.__runtimeHooks = 2), wx.createPage(f);
