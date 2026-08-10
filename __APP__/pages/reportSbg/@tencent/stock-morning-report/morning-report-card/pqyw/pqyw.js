var e,
  t,
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = require("../../../../../../common/vendor.js"),
  d = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  p = require("../../utils/mpBrow.js"),
  v = {
    name: "MorningReportPqyw",
    directives: { "observe-visibility": d.ObserveVisibility },
    components: {
      cardHeader: function () {
        return "../card-header.js";
      },
      RenderTemplate: function () {
        return "./pqyw-item.js";
      },
      moreButton: function () {
        return "../component/moreButton.js";
      },
      ImageLinkItem: function () {
        return "../component/ImageLinkItem.js";
      },
    },
    inject: { env: { default: {} }, interceptNavigate: { default: null } },
    props: ["wzqConfig", "newsData", "newsId"],
    data: function () {
      var e = this;
      return {
        contentArr: [],
        pqywObserveConf: {
          callback: function (t, n) {
            return e.visibilityChanged(t, n);
          },
          once: !0,
          intersection: { threshold: 0.5 },
        },
        IS_CCM_XCX: !1,
        imgLinkItem: null,
        pqywSecondObserver: null,
      };
    },
    computed: {
      hasMoreYaowen: function () {
        return !this.IS_CCM_XCX;
      },
    },
    watch: {
      contentArr: {
        handler: function (e) {
          var t = this;
          e &&
            e.length >= 2 &&
            !this.pqywSecondObserver &&
            this.$nextTick(function () {
              return t.observePqywSecondFullyVisible();
            });
        },
      },
      newsData: {
        immediate: !0,
        handler: function (e) {
          if (e) {
            var t = e.briefContent.find(function (e) {
              return "盘前要闻" === e.groupName;
            });
            if (t)
              try {
                var n = t.secondaryDir[0].contentArr;
                n.length > 0 &&
                  "image" === n[n.length - 1].type &&
                  (this.imgLinkItem = n.pop());
                for (var r = [], i = 0, o = n.length; i < o; ) {
                  var s = 1,
                    c = null,
                    a = null,
                    l = n[i + s];
                  l &&
                    l.content &&
                    l.content.length &&
                    /^类型/.test(l.content[0].text) &&
                    ((c = l), (s += 1)),
                    (l = n[i + s]) &&
                      l.content &&
                      l.content.length &&
                      /^情绪影响/.test(l.content[0].text) &&
                      ((a = l), (s += 1)),
                    r.push({
                      summary: n[i],
                      type: c,
                      tag: a,
                      content: n[i + s],
                    }),
                    (i = i + s + 1);
                }
                this.contentArr = r;
              } catch (e) {}
          }
        },
      },
    },
    mounted: function () {
      this.mpObserveVisibility(".pqyw-wrapper", this.visibilityChanged);
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility(), this.disconnectPqywSecondObserver();
    },
    beforeUnmount: function () {
      this.mpDisobserveVisibility(), this.disconnectPqywSecondObserver();
    },
    methods:
      ((e = (function (e, t) {
        for (var r in t || (t = {})) c.call(t, r) && l(e, r, t[r]);
        if (s) {
          var i,
            o = n(s(t));
          try {
            for (o.s(); !(i = o.n()).done; ) {
              r = i.value;
              a.call(t, r) && l(e, r, t[r]);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
        return e;
      })({}, p.mutations)),
      (t = {
        visibilityChanged: function (e) {
          e &&
            u.StockBridge.report("news.detail.pqyw_visited", {
              newsid: this.newsId,
            });
        },
        observePqywSecondFullyVisible: function () {
          var e = this;
          if (this.contentArr && !(this.contentArr.length < 2)) {
            this.disconnectPqywSecondObserver();
            for (var t = [], n = 0; n <= 20; n += 1) t.push(n / 20);
            var r = !1;
            try {
              var i = u.wx$1
                .createIntersectionObserver(this, { thresholds: t })
                .relativeToViewport();
              i.observe(".pqyw-item--second", function (t) {
                var n = (function (e) {
                  if (!e || !e.boundingClientRect) return !1;
                  var t = e.boundingClientRect,
                    n = t.height || 0,
                    r = 0,
                    i = 0;
                  if (
                    (e.rootBounds
                      ? ((r = e.rootBounds.top), (i = e.rootBounds.height))
                      : e.relativeRect &&
                        ((r = e.relativeRect.top),
                        (i = e.relativeRect.bottom - e.relativeRect.top)),
                    n <= 0 || i <= 0)
                  )
                    return !1;
                  var o = t.top - r,
                    s = t.bottom - r;
                  return n <= i
                    ? o >= -0.5 && s <= i + 0.5
                    : (e.intersectionRatio || 0) > 0 && o <= i / 2;
                })(t);
                n && !r && e.$emit("pqywSecondArticleFullyVisible"), (r = n);
              }),
                (this.pqywSecondObserver = {
                  disconnect: function () {
                    return i.disconnect();
                  },
                });
            } catch (e) {}
          }
        },
        disconnectPqywSecondObserver: function () {
          var e, t;
          try {
            null ==
              (t =
                null == (e = this.pqywSecondObserver)
                  ? void 0
                  : e.disconnect) || t.call(e);
          } catch (e) {}
          this.pqywSecondObserver = null;
        },
        navigateToMoreNews: function () {
          var e = this;
          (this.interceptNavigate &&
            this.interceptNavigate(function () {
              return e.doNavigateToMoreNews();
            })) ||
            this.doNavigateToMoreNews();
        },
        doNavigateToMoreNews: function () {
          this.wzqKeepPos(),
            u.StockBridge.report("news.detail.pqyw_more_click", {
              newsid: this.newsId,
            }),
            u.wx$1.switchTab({ url: "/pages/index/information/main" });
        },
        wzqKeepPos: function () {
          this.$emit("wzqKeepPos");
        },
      }),
      i(e, o(t))),
  };
Array ||
  (
    u.resolveComponent("cardHeader") +
    u.resolveComponent("RenderTemplate") +
    u.resolveComponent("more-button") +
    u.resolveComponent("image-link-item")
  )();
var m = u._export_sfc(v, [
  [
    "render",
    function (e, t, n, r, i, o) {
      return u.e(
        { a: i.contentArr && i.contentArr.length },
        i.contentArr && i.contentArr.length
          ? { b: u.p({ title: "重磅要闻速览" }) }
          : {},
        { c: i.contentArr && i.contentArr.length },
        i.contentArr && i.contentArr.length
          ? u.e(
              {
                d: u.f(i.contentArr, function (e, t, r) {
                  return {
                    a: u.o(o.wzqKeepPos, 4174, t),
                    b: "8865f217-1-" + r,
                    c: u.p({
                      "news-id": n.newsId,
                      "snp-summary": e.summary,
                      "type-item": e.type,
                      "tag-item": e.tag,
                      "snp-content": e.content,
                      "wzq-config": n.wzqConfig,
                      "news-data": n.newsData,
                    }),
                    d: t,
                    e: u.n({ "pqyw-item--second": 1 === t }),
                  };
                }),
                e: o.hasMoreYaowen,
              },
              o.hasMoreYaowen
                ? {
                    f: u.o(o.navigateToMoreNews, 4175),
                    g: u.p({ "more-text": "更多要闻" }),
                  }
                : {}
            )
          : {},
        { h: i.imgLinkItem },
        i.imgLinkItem
          ? {
              i: u.p({
                item: i.imgLinkItem,
                "news-id": n.newsId,
                "module-name": "zbyw",
              }),
            }
          : {},
        { j: u.n(o.hasMoreYaowen ? "" : "no-yaowen") }
      );
    },
  ],
  ["__scopeId", "data-v-8865f217"],
]);
wx.createComponent(m);
