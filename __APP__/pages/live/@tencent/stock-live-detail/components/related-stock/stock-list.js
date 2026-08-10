var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "StockList",
    components: {
      relatedStockItem: function () {
        return "./relatedStockItem.js";
      },
    },
    inject: { context: { value: "context" } },
    props: {
      live: { type: Object, default: function () {} },
      quotes: {
        type: Array,
        default: function () {
          return [];
        },
      },
      qtData: { type: Object, default: function () {} },
      slist: { type: Object, default: function () {} },
      innerFundList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      userinfo: { type: Object, default: function () {} },
      isSharePage: { type: Boolean, default: !1 },
    },
    data: function () {
      var e, n;
      if (t.wx$1) {
        var i = t.wx$1.getSystemInfoSync();
        (e = i.windowWidth), (n = i.windowHeight);
      } else window && ((e = window.innerWidth), (n = window.innerHeight));
      return {
        width: e,
        height: n,
        maxHeight: n - e / 1.78 - (57 * e) / 375,
        minHeight: 0.25 * n - 57,
        animation: "involution",
        sortedQuotes: function () {
          return [];
        },
        isMP: !0,
        isWZQMP: !1,
      };
    },
    computed: {
      sharePageClass: function () {
        return this.isSharePage ? "sharePage" : "";
      },
      reportChannel: function () {
        return this.isWZQMP ? "IBU00p000l136" : "Is600p000m012";
      },
    },
    watch: {
      quotes: {
        immediate: !0,
        handler: function (t) {
          this.sortedQuotes = t;
        },
      },
    },
    mounted: function () {
      this.reportStockListBrow();
    },
    methods: {
      reportStockListBrow: function () {
        var t = this,
          e = [],
          n = [],
          i = [];
        this.sortedQuotes.map(function (o, a) {
          var r = o.stock_code,
            s = o.stock_market,
            c = "".concat(s).concat(r.split(".")[0]);
          n.push("".concat(s).concat(r)),
            e.push(t.slist[c] ? "1" : "0"),
            i.push(a);
        }),
          this.reportAnalytics("news.live-detail.relatedQuotes.list.brow", {
            fchannel_id_fm_i: this.reportChannel,
            foperation_purpose: "zixuan",
            stocklist: n.join(","),
            positionlist: i.join(","),
            hasaddlist: e.join(","),
          });
      },
      reportAnalytics: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", t, e);
      },
      preventEvent: function (t) {
        t && t.stopPropagation();
      },
      onHideRelatedStock: function () {
        var t = this;
        (this.animation = "fade-out"),
          setTimeout(function () {
            t.$emit("onHideRelatedStock");
          }, 300);
      },
      manageSelfStock: function (t) {
        this.$emit("manageSelfStock", t);
      },
    },
  };
Array || t.resolveComponent("relatedStockItem")();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, i, o, a, r) {
      return {
        a: t.o(function () {
          return (
            r.onHideRelatedStock && r.onHideRelatedStock.apply(r, arguments)
          );
        }, 5194),
        b: t.o(function () {
          return r.preventEvent && r.preventEvent.apply(r, arguments);
        }, 5195),
        c: t.f(a.sortedQuotes, function (e, n, o) {
          return {
            a: t.o(r.manageSelfStock, 5196, n),
            b: "cfe1fb12-0-" + o,
            c: t.p({
              live: i.live,
              "qt-data": i.qtData,
              slist: i.slist,
              "inner-fund-list": i.innerFundList,
              item: e,
              "item-position": n,
              userinfo: i.userinfo,
              "report-info": {
                tapDetail: "news.live-detail.relateQuotesGotoStockDetail",
                addFav: "news.live-detail.fav_stock_click_add",
                cancelFav: "news.live-detail.fav_stock_click_cancel",
                trade: "news.live-detail.relateQuotesTradeStock",
              },
              "add-fav-channel": r.reportChannel,
            }),
            d: n,
          };
        }),
        d: "".concat(a.maxHeight, "px"),
        e: "".concat(a.minHeight, "px"),
        f: t.o(function () {
          return r.preventEvent && r.preventEvent.apply(r, arguments);
        }, 5197),
        g: t.n(a.animation),
        h: t.n(r.sharePageClass),
      };
    },
  ],
  ["__scopeId", "data-v-cfe1fb12"],
]);
wx.createComponent(n);
