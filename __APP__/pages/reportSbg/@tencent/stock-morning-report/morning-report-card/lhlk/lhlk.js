var e,
  t,
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  m = require("../../morning-report-card.js"),
  h = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  p = require("../../../../../../common/vendor.js"),
  f = require("../../utils/mpBrow.js"),
  g = "morningreport-institution",
  b = {
    name: "MorningReportLhlk",
    directives: { "observe-visibility": h.ObserveVisibility },
    components: {
      cardHeader: function () {
        return "../card-header.js";
      },
      lhlkItem: function () {
        return "./lhlk-item.js";
      },
      basketGuideModal: function () {
        return "../../../../../stockBasket/@tencent/wzq-lite-basket/components/basketGuideModal.js";
      },
      ImageLinkItem: function () {
        return "../component/ImageLinkItem.js";
      },
    },
    inject: { env: { default: {} } },
    props: ["wzqConfig", "newsData", "newsId", "gdList", "isOnShow"],
    data: function () {
      var e = this;
      return {
        contentArr: [],
        institution: [],
        lhlkObserveConf: {
          callback: function (t, n) {
            return e.visibilityChanged(t, n);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
        guideVisible: !1,
        imgLinkItem: null,
      };
    },
    watch: {
      newsData: {
        immediate: !0,
        handler: function (e) {
          if (e) {
            var t = e.briefContent.find(function (e) {
              return "利好利空前瞻" === e.groupName;
            });
            if (t)
              try {
                var n = t.secondaryDir[0].contentArr;
                if (n) {
                  n.length > 0 &&
                    "image" === n[n.length - 1].type &&
                    (this.imgLinkItem = n.pop());
                  for (var i = [], r = [], o = 0; o < n.length; ) {
                    var s = 1,
                      a = null,
                      c = n[o + s];
                    c &&
                      c.content &&
                      c.content.length &&
                      /^类型/.test(c.content[0].text) &&
                      ((a = c), (s += 1)),
                      r.push({ summary: n[o], type: a, content: n[o + s] });
                    var u = this.brokerageName(n[o + s]);
                    i.push({ name: u, type: "" }), (o = o + s + 1);
                  }
                  i.length > 0 && this.loadInstitutionData(i),
                    (this.contentArr = r);
                }
              } catch (e) {}
          }
        },
      },
    },
    created: function () {
      return d(
        this,
        null,
        i().mark(function e() {
          var t;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), p.StockBridge.getStorage(g);
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
      this.mpObserveVisibility(".lhlk-wrapper", this.visibilityChanged);
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility();
    },
    methods:
      ((e = (function (e, t) {
        for (var i in t || (t = {})) c.call(t, i) && l(e, i, t[i]);
        if (a) {
          var r,
            o = n(a(t));
          try {
            for (o.s(); !(r = o.n()).done; ) {
              i = r.value;
              u.call(t, i) && l(e, i, t[i]);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
        return e;
      })({}, f.mutations)),
      (t = {
        visibilityChanged: function (e) {
          e &&
            p.StockBridge.report("news.detail.lhlk_visited", {
              newsid: this.newsId,
            });
        },
        loadInstitutionData: function (e) {
          return d(
            this,
            null,
            i().mark(function t() {
              var n, r, o;
              return i().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0), (t.next = 3), m.getInstitutionData(e)
                        );
                      case 3:
                        (n = t.sent),
                          (r = n.data) &&
                            (o = r.institution) &&
                            ((this.institution = o),
                            p.StockBridge.setStorage(g, o)),
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
          this.$emit("goToNews", e);
        },
        brokerageName: function (e) {
          try {
            return m.itemContent(e).split("：")[0];
          } catch (e) {}
          return "";
        },
        onHeaderToggleClick: function (e, t) {
          this.guideVisible = t;
        },
        onGdGuideConfirm: function () {
          this.guideVisible = !1;
        },
      }),
      o(e, s(t))),
  };
Array ||
  (
    p.resolveComponent("cardHeader") +
    p.resolveComponent("lhlk-item") +
    p.resolveComponent("image-link-item") +
    p.resolveComponent("basketGuideModal")
  )();
var v = p._export_sfc(b, [
  [
    "render",
    function (e, t, n, i, r, o) {
      return p.e(
        { a: r.contentArr && r.contentArr.length },
        r.contentArr && r.contentArr.length
          ? { b: p.p({ title: "热点机会前瞻" }) }
          : {},
        { c: r.contentArr && r.contentArr.length },
        r.contentArr && r.contentArr.length
          ? {
              d: p.f(r.contentArr, function (e, t, i) {
                return p.e(
                  {
                    a: t,
                    b: p.o(o.gotoNewsDetail, 4179, t),
                    c: p.o(o.onHeaderToggleClick, 4180, t),
                    d: "0623c3eb-1-" + i,
                    e: p.p({
                      item: e.summary,
                      type: e.type,
                      brokerage: e.content,
                      "gd-list": n.gdList,
                      "wzq-config": n.wzqConfig,
                      "news-data": n.newsData,
                      institution: r.institution,
                      "is-on-show": n.isOnShow,
                      positionid: t / 3,
                    }),
                    f: t + 1 < r.contentArr.length,
                  },
                  t + 1 < r.contentArr.length ? { g: t + 1 } : {},
                  { h: t }
                );
              }),
            }
          : {},
        { e: r.imgLinkItem },
        r.imgLinkItem
          ? {
              f: p.p({
                item: r.imgLinkItem,
                "news-id": n.newsId,
                "module-name": "rdjh",
              }),
            }
          : {},
        {
          g: p.o(o.onGdGuideConfirm, 4181),
          h: p.o(o.onGdGuideConfirm, 4182),
          i: p.p({
            "report-prefix": "news.detail.lhlk.gd",
            visible: r.guideVisible,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-0623c3eb"],
]);
wx.createComponent(v);
