var e = require("../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../util/const.js"),
  a = require("../../../../../common/vendor.js"),
  o = {
    inject: ["helper"],
    options: { styleIsolation: "shared" },
    components: {
      AddFav: function () {
        return "./addFav.js";
      },
      ETFBar: function () {
        return "./ETFBar.js";
      },
    },
    props: {
      moduleData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      enableJump: { type: Boolean, default: !0 },
      showBottomDetail: { type: Boolean, default: !0 },
      showAddFav: { type: Boolean, default: !1 },
      stockInitailAdded: { type: Boolean, default: !1 },
      noneMargin: { type: Boolean, default: !1 },
      canShowModuleWrapper: { type: Boolean, default: !0 },
      accountOpenFlag: { type: Boolean, default: !1 },
      pageType: { type: String, default: "" },
      newsId: { type: String, default: "" },
      skin: { type: String, default: "white" },
    },
    data: function () {
      return {
        plateId: "01801183-1",
        theme: "light",
        market: "",
        scode: "",
        showEtfBar: !0,
      };
    },
    computed: {
      isPlate: function () {
        return this.moduleData && this.moduleData.type === t.PLATE_TABLE;
      },
      isKlineChart: function () {
        return this.moduleData && this.moduleData.type === t.KLINE_CHART;
      },
      isMinsChart: function () {
        return this.moduleData && this.moduleData.type === t.MINS_CHART;
      },
    },
    created: function () {
      this.init();
    },
    methods: {
      init: function () {
        var a = this.moduleData,
          o = a.type,
          n = a.params;
        if (n && "{}" !== JSON.stringify(n)) {
          if (
            (o === t.MINS_CHART || o === t.KLINE_CHART) &&
            ((this.market = t.WZQ_MARKETS[n.market] || n.market),
            (this.scode = n.scode),
            "p" === n.market || "pt" === n.market)
          ) {
            var i = this.getPlateInfo(n.scode),
              r = i.stockCode,
              s = i.plateMarket;
            (this.market = s), (this.scode = r);
          }
          if (o === t.PLATE_TABLE) {
            var l = n.plateId,
              p = l,
              u = 0;
            if (l.includes("-")) {
              var d = l.split("-"),
                m = e(d, 2);
              (p = m[0]), (u = m[1]);
            }
            (this.transPlateId = p), (this.plateSortType = u);
            var c = this.getPlateInfo(p),
              h = c.stockCode,
              f = c.plateMarket;
            (this.market = f), (this.scode = h);
          }
        }
      },
      getPlateInfo: function (e) {
        var t = e.replace("pt", ""),
          a = "200",
          o = "pt",
          n = "hs";
        return (
          e.startsWith("ph") &&
            ((a = "400"), (o = "ph"), (n = "hk"), (t = t.replace("ph", ""))),
          e.startsWith("pu") &&
            ((a = "601"), (o = "pu"), (n = "us"), (t = t.replace("pu", ""))),
          { stockCode: t, appPlate: a, plateMarket: o, market: n }
        );
      },
      goModule: function () {
        this.enableJump && this.$emit("gotoDetail");
      },
      imageClick: function (e, t) {
        if (!this.enableJump) {
          t.stopPropagation();
          var a = this.helper || {},
            o = a.env,
            n = a.shy,
            i = a.wx,
            r = o || {},
            s = r.__WZQ__,
            l = r.__MP__,
            p = r.__APP__,
            u = r.isBroker;
          p &&
            (e.indexOf("preview=false") > 0 ||
              n.previewImage([e], 0, function () {})),
            (s || u || l) &&
              i &&
              i.previewImage &&
              i.previewImage({ current: e, urls: [e] });
        }
      },
      etfEmpty: function () {
        this.showEtfBar = !1;
      },
      dataReport: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("dataReport", e, t);
      },
    },
  };
Array || (a.resolveComponent("ETFBar") + a.resolveComponent("AddFav"))();
var n = a._export_sfc(o, [
  [
    "render",
    function (e, t, o, n, i, r) {
      return a.e(
        { a: o.canShowModuleWrapper },
        o.canShowModuleWrapper
          ? a.e(
              { b: o.moduleData.isDynamic },
              o.moduleData.isDynamic
                ? {}
                : {
                    c: o.moduleData.imgWhite,
                    d: a.o(function (e) {
                      return r.imageClick(o.moduleData.imgWhite, e);
                    }, 5634),
                    e: o.moduleData.imgBlack,
                    f: a.o(function (e) {
                      return r.imageClick(o.moduleData.imgBlack, e);
                    }, 5635),
                  },
              {
                g:
                  (r.isKlineChart || r.isMinsChart || r.isPlate) &&
                  i.showEtfBar,
              },
              (r.isKlineChart || r.isMinsChart || r.isPlate) && i.showEtfBar
                ? {
                    h: a.o(r.etfEmpty, 5636),
                    i: a.o(r.dataReport, 5637),
                    j: a.p({
                      accountOpenFlag: o.accountOpenFlag,
                      params: o.moduleData.params,
                      type: o.moduleData.type,
                      pageType: o.pageType,
                      newsId: o.newsId,
                      skin: o.skin,
                    }),
                  }
                : (o.enableJump && o.showBottomDetail, {}),
              {
                k: o.enableJump && o.showBottomDetail,
                l: o.enableJump && !o.showBottomDetail,
              },
              (o.enableJump && o.showBottomDetail, {}),
              { m: o.showAddFav && o.enableJump },
              o.showAddFav && o.enableJump
                ? {
                    n: a.o(r.dataReport, 5638),
                    o: a.p({
                      market: i.market,
                      scode: i.scode,
                      type: o.moduleData.type,
                      stockInitailAdded: o.stockInitailAdded,
                      position: "top",
                      pageType: o.pageType,
                      newsId: o.newsId,
                    }),
                    p: a.n(
                      r.isPlate && !o.moduleData.isDynamic ? "fit-top" : ""
                    ),
                  }
                : {},
              {
                q: a.n(o.enableJump ? "module-box" : "mModule-box"),
                r: a.n(o.noneMargin ? "none-margin" : ""),
                s: a.o(function (e) {
                  return r.goModule();
                }, 5639),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-c4529cf3"],
]);
wx.createComponent(n);
