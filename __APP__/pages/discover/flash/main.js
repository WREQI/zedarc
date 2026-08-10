var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/typeof"),
  a = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  s = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  h = function (e, t) {
    for (var n in t || (t = {})) o.call(t, n) && u(e, n, t[n]);
    if (s) {
      var r,
        i = a(s(t));
      try {
        for (i.s(); !(r = i.n()).done; ) {
          n = r.value;
          c.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  l = function (e, t, n) {
    return u(e, "symbol" != r(t) ? t + "" : t, n);
  },
  f = function (e, t, n) {
    return new Promise(function (r, a) {
      var i = function (e) {
          try {
            o(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          try {
            o(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
        };
      o((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../common/vendor.js"),
  v = require("../@tencent/stock-news-core/utils/knife.js"),
  p = require("../@tencent/stock-base/bridge/mpwzq.js"),
  m = (function () {
    function r() {
      t(this, r),
        l(this, "canvas", null),
        l(this, "canvasWidth", 444),
        l(this, "canvasHeight", 355.2),
        l(this, "shareContentWidth", 340),
        l(this, "shareLineLimit", 4),
        l(this, "dpr", 1);
    }
    return (
      n(r, [
        {
          key: "getSummary",
          value: function (e) {
            var t = this;
            return (e.content.data || [])
              .filter(function (e) {
                return "text" === e.type;
              })
              .reduce(function (e, n) {
                return e.length < 60 ? e + t.replaceHTML(n.desc) : e;
              }, "");
          },
        },
        {
          key: "replaceHTML",
          value: function (e) {
            var t = e.replace(/<(?:.|\s)*?>/g, "");
            return t.length > 60 && (t = t.substr(0, 60)), t;
          },
        },
        {
          key: "getFormattedTime",
          value: function (e) {
            return "".concat(v.timeFormat(e, v.timeFormatType.exact));
          },
        },
        {
          key: "getCanvasInstance",
          value: function () {
            return this.canvas;
          },
        },
        {
          key: "formatContent",
          value: function (e, t, n) {
            var r = this.getCanvasInstance().getContext("2d");
            r.font = "400 27.75px sans-serif";
            for (var a = e.split(""), i = [], s = "", o = 0; o < a.length; ) {
              var c = a[o];
              r.measureText(s).width + r.measureText(c).width < t
                ? (s += c)
                : (i.push(s), (s = c)),
                (o += 1);
            }
            if ((i.push(s), i.length > n)) {
              for (
                var u = r.measureText("...").width,
                  h = i[n - 1],
                  l = "",
                  f = 0,
                  d = 0;
                d < h.length;
                d++
              ) {
                var v = h[d],
                  p = r.measureText(v).width;
                if (!(f + p + u < t)) {
                  l += "...";
                  break;
                }
                (l += v), (f += p);
              }
              i.splice(n - 1, 1, l);
            }
            return i;
          },
        },
        {
          key: "canvasToTempFilePath",
          value: function () {
            var e = this,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            return new Promise(function (n, r) {
              d.wx$1.canvasToTempFilePath({
                canvas: e.canvas,
                width: e.canvasWidth,
                height: e.canvasHeight,
                destWidth: e.canvasWidth,
                destHeight: e.canvasHeight,
                fileType: t.fileType || "png",
                quality: t.quality || 1,
                success: n,
                fail: r,
              });
            });
          },
        },
        {
          key: "drawBackground",
          value: function () {
            var e = this,
              t = this.getCanvasInstance(),
              n = t.getContext("2d");
            return new Promise(function (r, a) {
              n.save();
              var i = t.createImage();
              (i.onload = function () {
                n.drawImage(i, 0, 0, e.canvasWidth, e.canvasHeight),
                  n.restore(),
                  r();
              }),
                (i.onerror = function () {
                  a();
                }),
                (i.src =
                  "https://st.gtimg.com/design/0e72acfb9b93d8d1236cd82c1ee935b8.png");
            });
          },
        },
        {
          key: "drawSrouceAndTime",
          value: function (e) {
            var t = this.getCanvasInstance().getContext("2d");
            t.save(),
              (t.textBaseline = "top"),
              (t.font = "normal 18.5px stockFont"),
              (t.textAlign = "left"),
              (t.fillStyle = "#262E4099");
            var n = e.source,
              r = e.publish_time,
              a = "".concat(n, " ").concat(this.getFormattedTime(r));
            t.fillText(a, 29.6, 305.25), t.restore();
          },
        },
        {
          key: "drawShareContent",
          value: function (e, t) {
            var n,
              r = this.getCanvasInstance().getContext("2d"),
              a = e.summary,
              i = e.title;
            n =
              a && a.length > 0
                ? "导语 | ".concat(a)
                : t
                ? i
                : this.getSummary(e);
            var s = this.formatContent(
              n,
              this.shareContentWidth,
              this.shareLineLimit
            );
            r.save(),
              (r.textBaseline = "top"),
              (r.font = "normal 27.75px stockFont"),
              (r.textAlign = "left"),
              (r.fillStyle = "#262E40");
            var o = 102.205;
            s.length < 4 && (o += (41.62 * (4 - s.length)) / 2);
            for (var c = 0; c < s.length && c < this.shareLineLimit; c++) {
              var u = s[c];
              r.fillText(u, 51.8, o), (o += 41.62);
            }
            r.restore();
          },
        },
        {
          key: "rendercontent",
          value: function (t, n) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return f(
              this,
              null,
              e().mark(function a() {
                var i = this;
                return e().wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return a.abrupt(
                            "return",
                            ((this.canvas = d.toRaw(n)),
                            new Promise(function (n, a) {
                              return f(
                                i,
                                null,
                                e().mark(function i() {
                                  var s, o, c, u;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.prev = 0),
                                              (s =
                                                d.wx$1.getWindowInfo() || {}),
                                              (o = s.pixelRatio),
                                              (c = void 0 === o ? "" : o),
                                              (this.dpr = c),
                                              (this.canvas.width =
                                                this.canvasWidth),
                                              (this.canvas.height =
                                                this.canvasHeight),
                                              (e.next = 7),
                                              this.drawBackground()
                                            );
                                          case 7:
                                            return (
                                              this.drawSrouceAndTime(t),
                                              this.drawShareContent(t, r),
                                              (e.next = 11),
                                              this.canvasToTempFilePath()
                                            );
                                          case 11:
                                            return (
                                              (u = e.sent),
                                              (e.next = 14),
                                              this.canvasToTempFilePath()
                                            );
                                          case 14:
                                            (u = e.sent),
                                              n(u.tempFilePath),
                                              (e.next = 21);
                                            break;
                                          case 18:
                                            (e.prev = 18),
                                              (e.t0 = e.catch(0)),
                                              a(e.t0);
                                          case 21:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    i,
                                    this,
                                    [[0, 18]]
                                  );
                                })
                              );
                            }))
                          );
                        case 1:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
          },
        },
      ]),
      r
    );
  })();
function g(t) {
  return f(
    this,
    null,
    e().mark(function n() {
      var r, a, i, s;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((e.prev = 0), (e.t0 = d.login.isLogin()), e.t0)) {
                  e.next = 5;
                  break;
                }
                return (e.next = 5), d.login.reLoginPromise();
              case 5:
                e.next = 9;
                break;
              case 7:
                (e.prev = 7), (e.t1 = e.catch(0));
              case 9:
                return (
                  (r =
                    (d.wx$1.getDeviceInfo && d.wx$1.getDeviceInfo()) ||
                    d.wx$1.getSystemInfoSync()),
                  (a = r.platform),
                  (s = h(
                    {
                      channel: 0,
                      type: "query",
                      module_ids: t,
                      scenes:
                        (i = void 0 === a ? "" : a) && "ios" === i ? 5 : 6,
                    },
                    {
                      appid: "wx4ffb369b6881ee5e",
                      openid: d.wx$1.getStorageSync("_qluin"),
                      fskey: d.wx$1.getStorageSync("_qlskey"),
                      access_token: d.wx$1.getStorageSync("_qlskey"),
                      check: 11,
                      app: "wzqxcx",
                    }
                  )),
                  e.abrupt(
                    "return",
                    p.StockBridge.request(
                      "https://wzq.tenpay.com/cgi-bin/abt_info.fcgi",
                      "POST",
                      s
                    )
                  )
                );
              case 11:
              case "end":
                return e.stop();
            }
        },
        n,
        null,
        [[0, 7]]
      );
    })
  );
}
var b = "news-discover-flash-share",
  w = {
    components: {
      fastNews: function () {
        return "../@tencent/wzq-lite-discovery/components/fast-news/mp/fast-news.js";
      },
    },
    provide: function () {
      return { stockBridge: this.stockBridge, shareEventName: b };
    },
    data: function () {
      return {
        stockBridge: d.StockBridge,
        shareItem: null,
        shareWidget: null,
        abtConfig: null,
        didFinishAbt: !1,
      };
    },
    onLoad: function () {
      var e = this;
      this.stockBridge.setTitle("市场快讯"),
        d.StockBridge.busOn(b, this.bottomShare),
        this.loadAbt(),
        setTimeout(function () {
          e.didFinishAbt = !0;
        }, 1e3);
    },
    mounted: function () {
      var e = this;
      d.wx$1
        .createSelectorQuery()
        .in(this)
        .select("#myCanvas")
        .fields({ node: !0, size: !0, rect: !0 })
        .exec(function (t) {
          var n = ((t && t[0]) || {}).node;
          e.shareWidget = n;
        });
    },
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {
      (this.shareWidget = null), d.StockBridge.busOff(b, this.bottomShare);
    },
    onShareAppMessage: function (t) {
      return f(
        this,
        null,
        e().mark(function n() {
          var r, a, i, s, o;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e) {
                        return setTimeout(e, 0);
                      })
                    );
                  case 2:
                    if ("button" !== t.from) {
                      e.next = 14;
                      break;
                    }
                    return (
                      (r = new m()),
                      (e.prev = 4),
                      (e.next = 7),
                      r.rendercontent(
                        h({}, this.shareItem),
                        this.shareWidget,
                        !0
                      )
                    );
                  case 7:
                    return (
                      (a = e.sent),
                      (i = this.shareItem),
                      (s = i.news_id),
                      (o = i.title),
                      e.abrupt("return", {
                        title: o,
                        imageUrl: a,
                        path: "/pages/newsCon/newsDetail/main?id=".concat(
                          s,
                          "&stat_data=OEZ00p000h125"
                        ),
                        mtaParams: { newsid: s },
                      })
                    );
                  case 12:
                    (e.prev = 12), (e.t0 = e.catch(4));
                  case 14:
                    return e.abrupt("return", {
                      path: "pages/discover/flash/main?&stat_data=O9v00p000h124",
                    });
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            n,
            this,
            [[4, 12]]
          );
        })
      );
    },
    methods: {
      bottomShare: function (e) {
        var t = e.item;
        this.shareItem = t;
      },
      loadAbt: function () {
        return f(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0), (e.next = 3), g("ui_layer_1735024984554")
                      );
                    case 3:
                      (n = e.sent),
                        (this.abtConfig = n),
                        (this.didFinishAbt = !0),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        (this.didFinishAbt = !0);
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 7]]
            );
          })
        );
      },
    },
  };
Array ||
  (
    d.resolveComponent("mp-privacy-dialog") +
    d.resolveComponent("stock-privacy-dialog") +
    d.resolveComponent("fastNews")
  )();
var x = d._export_sfc(w, [
  [
    "render",
    function (e, t, n, r, a, i) {
      return d.e(
        { a: e.rootFontSize, b: d.p({ "no-auto": !0 }), c: a.didFinishAbt },
        a.didFinishAbt ? { d: d.p({ "abt-config": a.abtConfig }) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-fdd1bf04"],
]);
(w.__runtimeHooks = 2), wx.createPage(x);
