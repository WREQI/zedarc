var e,
  t,
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  m = function (e, t, r) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  l = require("../../../../vue-observe-visibility/dist/vue-observe-visibility.esm.js"),
  u = require("../../morning-report-card.js"),
  b = require("../../../../../../common/vendor.js"),
  d = require("../../utils/mpBrow.js"),
  g = {
    name: "MorningReportHwsc",
    directives: { "observe-visibility": l.ObserveVisibility },
    components: {
      cardHeader: function () {
        return "../card-header.js";
      },
      Quote: function () {
        return "./hwsc-quote.js";
      },
      ImageLinkItem: function () {
        return "../component/ImageLinkItem.js";
      },
    },
    props: ["wzqConfig", "newsData", "newsId"],
    data: function () {
      var e = this;
      return {
        brokerageName: "",
        brokerageContent: "",
        brokerageItem: null,
        hwscObserveConf: {
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
          if (e) {
            var t = e.briefContent.find(function (e) {
              return "海外市场" === e.groupName;
            });
            if (t)
              try {
                var r = t.secondaryDir[0].contentArr;
                r.length > 0 &&
                  "image" === r[r.length - 1].type &&
                  (this.imgLinkItem = r.pop()),
                  (this.brokerageItem = null == r ? void 0 : r[0]);
                var i = u.itemContent(this.brokerageItem).split("：");
                i &&
                  i.length &&
                  ((this.brokerageName = i.length > 1 ? i[0] : ""),
                  (this.brokerageContent = i.length > 1 ? i[1] : i[0]));
              } catch (e) {}
          }
        },
      },
    },
    mounted: function () {
      this.mpObserveVisibility(".hwsc-wrapper", this.visibilityChanged);
    },
    beforeDestroy: function () {
      this.mpDisobserveVisibility();
    },
    methods:
      ((e = (function (e, t) {
        for (var i in t || (t = {})) a.call(t, i) && m(e, i, t[i]);
        if (s) {
          var n,
            o = r(s(t));
          try {
            for (o.s(); !(n = o.n()).done; ) {
              i = n.value;
              c.call(t, i) && m(e, i, t[i]);
            }
          } catch (e) {
            o.e(e);
          } finally {
            o.f();
          }
        }
        return e;
      })({}, d.mutations)),
      (t = {
        visibilityChanged: function (e) {
          e &&
            b.StockBridge.report("news.detail.hwsc_visited", {
              newsid: this.newsId,
            });
        },
        gotoNewsDetail: function (e) {
          b.StockBridge.report("news.detail.hwsc_click", {
            newsid: this.newsId,
          }),
            this.$emit("goToNews", e);
        },
      }),
      n(e, o(t))),
  };
Array ||
  (
    b.resolveComponent("cardHeader") +
    b.resolveComponent("Quote") +
    b.resolveComponent("image-link-item")
  )();
var p = b._export_sfc(g, [
  [
    "render",
    function (e, t, r, i, n, o) {
      return b.e(
        { a: b.p({ title: "全球资产总览" }), b: n.brokerageName },
        n.brokerageName ? { c: b.t(n.brokerageName) } : {},
        {
          d: b.t(n.brokerageContent),
          e: b.o(function (e) {
            return o.gotoNewsDetail(n.brokerageItem);
          }, 4198),
          f: b.o(function (t) {
            return e.$emit("wzqKeepPos");
          }, 4199),
          g: b.p({ "wzq-config": r.wzqConfig, "news-id": r.newsId }),
          h: n.imgLinkItem,
        },
        n.imgLinkItem
          ? {
              i: b.p({
                item: n.imgLinkItem,
                "news-id": r.newsId,
                "module-name": "qqzc",
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-ca3f82b3"],
]);
wx.createComponent(p);
