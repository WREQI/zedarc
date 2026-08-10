var e,
  t,
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = Object.defineProperty,
  o = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  d = function (e, t, r) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = function (e, t, r) {
    return new Promise(function (n, i) {
      var o = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            i(e);
          }
        },
        c = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, c);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  m = require("../../morning-report-card.js"),
  p = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  f = require("../../../../../../common/vendor.js"),
  h = require("../../utils/mpBrow.js"),
  g = require("../../../stock-news-core/utils/force2https.js"),
  v = "morningreport-scdc-institution",
  b = {
    name: "MorningReportScdc",
    directives: { "observe-visibility": p.ObserveVisibility },
    components: {
      cardHeader: function () {
        return "../card-header.js";
      },
      ImageLinkItem: function () {
        return "../component/ImageLinkItem.js";
      },
    },
    props: ["wzqConfig", "newsData", "newsId"],
    data: function () {
      var e = this;
      return {
        contentArr: [],
        brokerageHeader:
          "https://st.gtimg.com/design/e3a52b77b6922b50be71bd71f0082bbb.png",
        institution: [],
        scdcObserveConf: {
          callback: function (t, r) {
            return e.visibilityChanged(t, r);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
        imgLinkItem: null,
      };
    },
    watch: {
      newsData: {
        immediate: !0,
        handler: function (e) {
          var t = this;
          if (e) {
            var r = e.briefContent.find(function (e) {
              return "机构观点" === e.groupName;
            });
            if (r)
              try {
                var n = r.secondaryDir[0].contentArr;
                if (n) {
                  n.length > 0 &&
                    "image" === n[n.length - 1].type &&
                    (this.imgLinkItem = n.pop());
                  var i = [];
                  n.forEach(function (e) {
                    var r = t.brokerageName(e);
                    i.push({ name: r, type: "" });
                  }),
                    i.length > 0 && this.loadInstitutionData(i);
                }
                this.contentArr = n;
              } catch (e) {}
          }
        },
      },
    },
    created: function () {
      return l(
        this,
        null,
        n().mark(function e() {
          var t;
          return n().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), f.StockBridge.getStorage(v);
                  case 2:
                    (t = e.sent) && (this.institution = t);
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    mounted: function () {
      this.mpObserveVisibility(".scdc-wrapper", this.visibilityChanged);
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility();
    },
    methods:
      ((e = (function (e, t) {
        for (var n in t || (t = {})) a.call(t, n) && d(e, n, t[n]);
        if (s) {
          var i,
            o = r(s(t));
          try {
            for (o.s(); !(i = o.n()).done; ) {
              n = i.value;
              u.call(t, n) && d(e, n, t[n]);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
        return e;
      })({}, h.mutations)),
      (t = {
        forceHttpsAdvanced: g.forceHttpsAdvanced,
        visibilityChanged: function (e) {
          e &&
            f.StockBridge.report("news.detail.scdc_visited", {
              newsid: this.newsId,
            });
        },
        loadInstitutionData: function (e) {
          return l(
            this,
            null,
            n().mark(function t() {
              var r, i, o;
              return n().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0), (t.next = 3), m.getInstitutionData(e)
                        );
                      case 3:
                        (r = t.sent),
                          (i = r.data) &&
                            (o = i.institution) &&
                            ((this.institution = o),
                            f.StockBridge.setStorage(v, o)),
                          (t.next = 10);
                        break;
                      case 8:
                        (t.prev = 8), (t.t0 = t.catch(0));
                      case 10:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 8]]
              );
            })
          );
        },
        gotoNewsDetail: function (e) {
          var t = m.getContentId(e);
          t.startsWith("SN")
            ? f.StockBridge.report("news.detail.scdc_click", {
                newsid: this.newsId,
              })
            : t.startsWith("LV")
            ? f.StockBridge.report("news.detail.scdc_lv_click", {
                newsid: this.newsId,
              })
            : t.startsWith("TN") &&
              f.StockBridge.report("news.detail.scdc_tn_click", {
                newsid: this.newsId,
              }),
            this.$emit("goToNews", e);
        },
        brokerageName: function (e) {
          try {
            var t = m.itemContent(e);
            return t.match(/、(.*)：/)[1] || "";
          } catch (e) {}
          return "";
        },
        brokerageContent: function (e) {
          try {
            return m.itemContent(e).split("：")[1];
          } catch (e) {}
          return "";
        },
        isLive: function (e) {
          try {
            var t;
            return (
              e.content.forEach(function (e) {
                e.clickParams && e.clickParams.id && (t = e.clickParams.id);
              }),
              t && t.startsWith("LV")
            );
          } catch (e) {}
          return !1;
        },
      }),
      o(e, c(t))),
  };
Array ||
  (f.resolveComponent("cardHeader") + f.resolveComponent("image-link-item"))();
var w = f._export_sfc(b, [
  [
    "render",
    function (e, t, r, n, i, o) {
      return f.e(
        { a: i.contentArr && i.contentArr.length },
        i.contentArr && i.contentArr.length
          ? { b: f.p({ title: "机构研判后市" }) }
          : {},
        { c: i.contentArr && i.contentArr.length },
        i.contentArr && i.contentArr.length
          ? {
              d: f.f(i.contentArr, function (e, t, r) {
                return f.e(
                  {
                    a: "url(".concat(
                      o.forceHttpsAdvanced(
                        i.institution[o.brokerageName(e)] || ""
                      ),
                      ")"
                    ),
                    b: f.t(o.brokerageName(e)),
                    c: f.t(o.brokerageContent(e)),
                    d: o.isLive(e),
                  },
                  (o.isLive(e), {}),
                  {
                    e: f.o(
                      function (t) {
                        return o.gotoNewsDetail(e);
                      },
                      4173,
                      t
                    ),
                    f: t,
                  }
                );
              }),
            }
          : {},
        { e: i.imgLinkItem },
        i.imgLinkItem
          ? {
              f: f.p({
                item: i.imgLinkItem,
                "news-id": r.newsId,
                "module-name": "jgyp",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-79a31a1e"],
]);
wx.createComponent(w);
