var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../stock-markets-base/utils/share.js"),
  a = require("../../../../common/vendor.js"),
  o = function () {
    return "./components/hs-page/index.js";
  },
  n = function () {
    return "./components/hk-page/index.js";
  },
  r = function () {
    return "./components/us-page/index.js";
  },
  i = {
    inject: { hqBridge: {}, statusBarHeight: { default: 0 } },
    components: {
      PerformanceBar: function () {
        return "./components/common/PerformanceBar.js";
      },
      PerformanceBarMp: function () {
        return "./components/hs-page/PerformanceBarMp.js";
      },
      MarketTabbar: function () {
        return "./components/common/MarketTabbar.js";
      },
      HsPage: o,
      HkPage: n,
      UsPage: r,
      TeachPopBlock: function () {
        return "./components/common/TeachPopBlock.js";
      },
    },
    props: {
      accoutOpened: { type: Boolean, default: !1 },
      mpScrollTop: { type: Number, default: 0 },
    },
    data: function () {
      return {
        marketTab: 0,
        marketTabbarHeight: 0,
        categoryTabbarTop: 0,
        navigationBarHeight: 0,
        isMarketTabbarCeiling: !1,
        pageScrollTop: 0,
        timer: null,
        env: this.hqBridge.ENV,
        title: "打新日历",
        accoutOpenedStatus: !1,
        hasButton: !1,
        showLogo: !0,
        performData: null,
        subTitleHK: "",
        subTitleUS: "",
        teachBlockShow: !1,
        teachContent: "",
        teachTips: "",
        teachTitle: "",
        shareInfo: {
          date: "",
          text: "可申购",
          stock: 0,
          bond: 0,
          performData: {
            normal: "近3月主板新股",
            highlight: "平均每签获利0元",
            left: "183",
          },
        },
      };
    },
    computed: {
      currView: function () {
        return [o, n, r][this.marketTab];
      },
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    watch: {
      accoutOpened: function (t) {
        this.accoutOpenedStatus = t;
      },
      mpScrollTop: function (t) {
        this.pageScrollTop = t;
      },
    },
    created: function () {
      (this.accoutOpenedStatus = this.accoutOpened), this.init();
    },
    mounted: function () {
      var t = this;
      this.timer = setTimeout(function () {
        t.getMarketTabbarPosition(),
          "app" === t.env && t.getNavigationBarPosition();
      }, 500);
    },
    activated: function () {},
    deactivated: function () {
      this.eliminateResource();
    },
    beforeDestroy: function () {
      this.eliminateResource();
    },
    methods: {
      showTeachPop: function (t, e, a) {
        (this.teachTitle = t),
          (this.teachContent = e),
          (this.teachTips = a),
          this.popTeach();
      },
      popTeach: function () {
        this.teachBlockShow = !0;
      },
      hideTeach: function () {
        var t = this;
        (this.teachBlockShow = !1),
          setTimeout(function () {
            t.teachContent = "";
          }, 300);
      },
      getPerformData: function (t) {
        t &&
          (0 === this.marketTab
            ? (this.performData = t)
            : 1 === this.marketTab
            ? (this.subTitleHK = t)
            : 2 === this.marketTab && (this.subTitleUS = t));
      },
      handleReachBottom: function () {
        this.$refs.hspage && this.$refs.hspage.handleReachBottom();
      },
      loadFinished: function (t) {
        this.showLogo = t;
      },
      checkBtnShow: function (t) {
        this.hasButton = t;
      },
      updateCategoryTab: function (t) {
        this.showLogo = 3 !== t;
      },
      updateMarketTab: function (t) {
        (this.marketTab = t), (this.hasButton = !1), (this.showLogo = !0);
      },
      init: function () {
        var t,
          e = ((null == (t = this.$route) ? void 0 : t.query) || {}).market;
        (this.marketTab = { hs: 0, hk: 1, us: 2 }[e] || 0),
          this.hqBridge.report("hq.daxin_calendar.page_exposure");
      },
      getMarketTabbarPosition: function () {
        var t,
          e,
          a = null == (t = this.$refs.marketTabbar) ? void 0 : t.$el;
        if (a) {
          var o = (
            (null == (e = a.getBoundingClientRect) ? void 0 : e.call(a)) || {}
          ).height;
          this.marketTabbarHeight = o;
        }
      },
      getNavigationBarPosition: function () {
        var t,
          e = this.$refs.navigationBar;
        if (e) {
          var a = (
            (null == (t = e.getBoundingClientRect) ? void 0 : t.call(e)) || {}
          ).height;
          this.navigationBarHeight = a;
        }
      },
      eliminateResource: function () {
        clearTimeout(this.timer);
      },
      getCategoryTabbarPosition: function (t) {
        this.categoryTabbarTop = t;
      },
      checkShowPopup: function (t) {
        this.$emit("checkShowPopup", t);
      },
      handleShare: function (t) {
        this.$emit("handleShare", t);
      },
      openShare: function () {
        this.$emit("openShare");
      },
      initShareData: function (t) {
        var e = t || {},
          a = e.availableStock,
          o = void 0 === a ? 0 : a,
          n = e.availableBond,
          r = void 0 === n ? 0 : n,
          i = e.pendingStock,
          c = void 0 === i ? 0 : i,
          s = e.pendingBond,
          h = void 0 === s ? 0 : s,
          p = e.stockDxProfit,
          l = e.bondDxProfit,
          u = e.date,
          m = o || r || (!c && !h) ? "可申购" : "待申购",
          g = this.shareInfo.performData;
        p && o >= r
          ? (g = {
              normal: "近3月主板新股",
              highlight: "平均每签获利".concat(p.replace("+", "")),
              left: "183",
            })
          : l &&
            (g = {
              normal: "近3月新债",
              highlight: "平均每签获利".concat(l.replace("+", "")),
              left: "135",
            }),
          (this.shareInfo = {
            date: u,
            text: m,
            stock: "可申购" === m ? o : c,
            bond: "可申购" === m ? r : h,
            performData: g,
          });
      },
      formateShareImgData: function () {
        var t = this.shareInfo,
          e = t.date,
          a = t.text,
          o = t.stock,
          n = t.bond,
          r = t.performData,
          i = r.normal,
          c = r.highlight,
          s = r.left;
        return [
          {
            type: "image",
            url: "https://st.gtimg.com/design/7ae90db1aa9358b11ee3548e117651ff.png",
            width: 480,
            height: 384,
            x: 0,
            y: 0,
          },
          {
            type: "text",
            text: e,
            fontSize: 24,
            color: "#262E40",
            fontWeight: "normal",
            textAlign: "left",
            x: 196,
            y: 58.5,
          },
          {
            type: "text",
            text: "".concat(a, "新股"),
            fontSize: 24,
            color: "#7A8499",
            fontWeight: "normal",
            textAlign: "left",
            x: 70,
            y: 211.5,
          },
          {
            type: "text",
            text: "".concat(a, "新债"),
            fontSize: 24,
            color: "#7A8499",
            fontWeight: "normal",
            textAlign: "left",
            x: 290,
            y: 211.5,
          },
          {
            type: "text",
            text: "".concat(o, "只"),
            fontSize: 48,
            color: "#262E40",
            fontWeight: "bold",
            textAlign: "left",
            x: 91,
            y: 256,
          },
          {
            type: "text",
            text: "".concat(n, "只"),
            fontSize: 48,
            color: "#262E40",
            fontWeight: "bold",
            textAlign: "left",
            x: 311,
            y: 256,
          },
          {
            type: "text",
            text: i,
            fontSize: 24,
            color: "#262E40",
            fontWeight: "normal",
            textAlign: "left",
            x: 24,
            y: 117.5,
          },
          {
            type: "text",
            text: c,
            fontSize: 24,
            color: "#E63535",
            fontWeight: "bold",
            textAlign: "left",
            x: s || 183,
            y: 117.5,
          },
        ];
      },
      handleShareAppMessage: function () {
        return (
          (a = this),
          null,
          (o = t().mark(function a() {
            var o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (1 !== this.marketTab && 2 !== this.marketTab) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", {});
                    case 2:
                      return (
                        (o = this.formateShareImgData()),
                        t.abrupt(
                          "return",
                          new Promise(function (t) {
                            e.ShareUtil.renderToImage(o).then(function (e) {
                              t({
                                title:
                                  "打新机会来了！点击立即查看今日新股新债有哪些",
                                imageUrl: e,
                              });
                            });
                          })
                        )
                      );
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              this
            );
          })),
          new Promise(function (t, e) {
            var n = function (t) {
                try {
                  i(o.next(t));
                } catch (t) {
                  e(t);
                }
              },
              r = function (t) {
                try {
                  i(o.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              i = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, r);
              };
            i((o = o.apply(a, null)).next());
          })
        );
        var a, o;
      },
    },
  };
Array ||
  (
    a.resolveComponent("market-tabbar") +
    a.resolveComponent("performance-bar-mp") +
    a.resolveComponent("performance-bar") +
    a.resolveComponent("hs-page") +
    a.resolveComponent("hk-page") +
    a.resolveComponent("us-page") +
    a.resolveComponent("TeachPopBlock")
  )();
var c = a._export_sfc(i, [
  [
    "render",
    function (t, e, o, n, r, i) {
      return a.e(
        {
          a: a.sr("marketTabbar", "2ee508bb-0"),
          b: a.o(i.updateMarketTab, 1255),
          c: a.p({ marketTab: r.marketTab }),
          d: i.isMp && 0 === r.marketTab && r.performData,
        },
        i.isMp && 0 === r.marketTab && r.performData
          ? { e: a.p({ data: r.performData }) }
          : {},
        { f: i.isMp && 1 === r.marketTab && r.subTitleHK },
        i.isMp && 1 === r.marketTab && r.subTitleHK
          ? { g: a.p({ market: "hk", type: "stock", subTitle: r.subTitleHK }) }
          : {},
        { h: i.isMp && 2 === r.marketTab && r.subTitleUS },
        i.isMp && 2 === r.marketTab && r.subTitleUS
          ? { i: a.p({ market: "us", type: "stock", subTitle: r.subTitleUS }) }
          : {},
        { j: 0 === r.marketTab },
        0 === r.marketTab
          ? {
              k: a.sr("hspage", "2ee508bb-4"),
              l: a.o(i.getCategoryTabbarPosition, 1256),
              m: a.o(i.checkShowPopup, 1257),
              n: a.o(i.handleShare, 1258),
              o: a.o(i.checkBtnShow, 1259),
              p: a.o(i.loadFinished, 1260),
              q: a.o(i.updateCategoryTab, 1261),
              r: a.o(i.getPerformData, 1262),
              s: a.o(i.showTeachPop, 1263),
              t: a.o(i.initShareData, 1264),
              v: a.p({
                mpScrollTop: o.mpScrollTop,
                pageScrollTop: r.pageScrollTop,
                isMarketTabbarCeiling: r.isMarketTabbarCeiling,
                accoutOpened: r.accoutOpenedStatus,
              }),
            }
          : {},
        { w: 1 === r.marketTab },
        1 === r.marketTab
          ? {
              x: a.o(i.getCategoryTabbarPosition, 1265),
              y: a.o(i.checkShowPopup, 1266),
              z: a.o(i.handleShare, 1267),
              A: a.o(i.getPerformData, 1268),
              B: a.p({
                pageScrollTop: r.pageScrollTop,
                isMarketTabbarCeiling: r.isMarketTabbarCeiling,
                accoutOpened: r.accoutOpenedStatus,
              }),
            }
          : {},
        { C: 2 === r.marketTab },
        2 === r.marketTab
          ? {
              D: a.o(i.getCategoryTabbarPosition, 1269),
              E: a.o(i.checkShowPopup, 1270),
              F: a.o(i.handleShare, 1271),
              G: a.o(i.getPerformData, 1272),
              H: a.p({
                pageScrollTop: r.pageScrollTop,
                isMarketTabbarCeiling: r.isMarketTabbarCeiling,
                accoutOpened: r.accoutOpenedStatus,
              }),
            }
          : {},
        {
          I: a.n(i.isMp ? "content-wrapper-mp" : ""),
          J: a.n(r.hasButton ? "content-wrapper-mp-btn" : ""),
          K: !r.showLogo,
        },
        (r.showLogo, {}),
        { L: i.isMp && r.showLogo },
        i.isMp && r.showLogo
          ? { M: a.n(r.hasButton ? "logo-bottom" : "") }
          : {},
        { N: r.teachContent },
        r.teachContent
          ? {
              O: a.o(i.hideTeach, 1273),
              P: a.p({
                visible: r.teachBlockShow,
                title: r.teachTitle,
                content: r.teachContent,
                tips: r.teachTips,
              }),
            }
          : {},
        {
          Q: a.n(i.isMp ? "page-wrapper-mp" : "page-wrapper-wzq"),
          R: a.n(r.hasButton ? "has-btn" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2ee508bb"],
]);
wx.createComponent(c);
