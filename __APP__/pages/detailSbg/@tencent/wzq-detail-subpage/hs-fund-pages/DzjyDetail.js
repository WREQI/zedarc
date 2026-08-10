var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, o) {
    return new Promise(function (r, n) {
      var i = function (t) {
          try {
            s(o.next(t));
          } catch (t) {
            n(t);
          }
        },
        a = function (t) {
          try {
            s(o.throw(t));
          } catch (t) {
            n(t);
          }
        },
        s = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(i, a);
        };
      s((o = o.apply(t, e)).next());
    });
  },
  o = require("../../stock-hq-data/index.js"),
  r = require("api/index.js"),
  n = require("../../../../../common/vendor.js"),
  i = require("../../stock-hq-core/config/css-token.js"),
  a = {
    components: {
      DzjyCard: function () {
        return "./components/DaZongJiaoYiComponent.js";
      },
    },
    inject: ["hqBridge"],
    emit: ["finishLoad"],
    props: {
      scode: String,
      market: String,
      stockName: String,
      type: String,
      show: Boolean,
      tab: String,
      priceFixed: { type: Number, default: 3 },
      isIndex: { default: "" },
      isFund: { default: !1 },
      isTrading: Boolean,
      isTab: { default: !1, type: Boolean },
      skin: String,
    },
    data: function () {
      return {
        unit: 1e8,
        isBroker: n.isBroker,
        firstLoaded: !0,
        showHotstock: !1,
        fundsHotPlateId: "",
        hotPlateName: "",
        flowChart: null,
        flowFiveChart: null,
        todayFundChart: null,
        todayFundFlow: {
          superFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          bigFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          normalFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          smallFlow: {
            value: 0,
            showValue: "0.0",
            bgColor: "grey",
            width: "0.5%",
          },
          summary: "",
        },
        showPie: !1,
        pieHash: "",
        showTodayFlowChart: !1,
        maxFlow: 0,
        totalflow: 0,
        todayTrendShowType: "main",
        fmuHash: "",
        showFundsMunite: !1,
        fundsminutetrendData: [],
        todayFundsTrend: { mainData: [], levelData: [] },
        showMainInflowLine: !1,
        showMainOutflowLine: !1,
        todayFundsTooltip: {
          main: {
            time: "",
            price: "",
            mainNetInflow: "",
            mainInflow: "",
            mainOutflow: "",
          },
          level: {
            time: "",
            price: "",
            superNetInflow: "",
            bigNetInflow: "",
            normalNetInflow: "",
            smallNetInflow: "",
          },
          isShow: !1,
          position: "left",
        },
        fiveDayFlowData: [],
        fiveDayMainNetIn: "",
        history: {},
        rzrqData: null,
        nbzjData: null,
        lhbData: null,
        dzjyData: null,
        tabOffsetTop: {
          fund: 0,
          lgt: Number.MAX_SAFE_INTEGER,
          margin: Number.MAX_SAFE_INTEGER,
          lhb: Number.MAX_SAFE_INTEGER,
          dzjy: Number.MAX_SAFE_INTEGER,
        },
        currentTab: "fund",
        jump: "",
        showMarginCard: !1,
        showLGTCard: !1,
        showLhbCard: !1,
        showDzjyCard: !1,
        valueDotPos: {},
        priceDotPos: {},
        superValueDotPos: {},
        borderWidth_1px: {},
        clickedTab: "",
        tabList: ["lgt", "margin", "lhb", "dzjy"],
        scrollToBottom: !1,
        font_medium: null,
        circleNumber: 0,
      };
    },
    computed: {
      formattedCode: function () {
        return o.utils.trimScode(this.scode);
      },
      themeColor: function () {
        var t = i.CSSTOKEN.DEFAULT;
        return {
          bigRed:
            (t =
              "black" === this.skin
                ? i.CSSTOKEN.BLACK || i.CSSTOKEN.DEFAULT
                : i.CSSTOKEN[n.isBroker] || i.CSSTOKEN.DEFAULT).bigRed ||
            "#E63535",
          bigGreen: t.bigGreen || "#1CAA3C",
          gray: t.gray || "#7a8499",
          lightRed: t.lightRed || "#DA6148",
          lightGreen: t.lightGreen || "#55B163",
          normalRed: t.bigRed || "#E63535",
          normalGreen: t.bigGreen || "#1CAA3C",
          lightGray1: t.lightGray1 || "#7a8499",
          borderLight: t.borderLight || "#e9ebf0",
        };
      },
    },
    created: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Promise.all([this.getHsPublicData()]);
                  case 2:
                    "wzq_light" === this.hqBridge.ENV &&
                      this.$emit("finishLoad");
                  case 3:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    mounted: function () {
      this.firstLoaded && ((this.firstLoaded = !1), this.$emit("loaded"));
    },
    destroyed: function () {
      this.destroyCircle(), this.destoryChart();
    },
    methods: {
      destroyCircle: function () {
        this.timer && clearTimeout(this.timer),
          (this.timer = null),
          (this.circleNumber = 0);
      },
      feedback: function () {
        var t =
          "https://aics.tenpay.com/aics-wzq/xiaomi/page.do?channel=14&type=chat&_=" +
          +new Date();
        window.parent && "function" == typeof window.parent.asyncGoPage
          ? window.parent.asyncGoPage(t)
          : (location.href = t),
          this.hqBridge.report("hq.funds_analysis_hs.feedback_btn_click");
      },
      getScrollInfo: function () {
        return {
          scrollTop:
            document.documentElement.scrollTop || document.body.scrollTop,
          scrollHeight:
            document.documentElement.scrollHeight || document.body.scrollHeight,
          clientHeight:
            document.documentElement.clientHeight || document.body.clientHeight,
        };
      },
      destoryChart: function () {
        try {
          this.flowChart && this.flowChart.destroy && this.flowChart.destroy(),
            (this.flowChart = null),
            this.todayFundChart &&
              this.todayFundChart.destroy &&
              this.todayFundChart.destroy(),
            (this.todayFundChart = null),
            this.flowFiveChart &&
              this.flowFiveChart.destroy &&
              this.flowFiveChart.destroy(),
            (this.flowFiveChart = null);
        } catch (t) {}
      },
      setShareInfo: function (t, e, o) {
        n.isBroker;
      },
      getHsPublicData: function () {
        var o =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "lhb,dzjy,rzrq,nbzj",
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
        return e(
          this,
          null,
          t().mark(function e() {
            var i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        r.getHsPublicData(this.hqBridge, {
                          code: ["sz", "sh"][this.type] + this.scode,
                          plate: o,
                          nbzqExchange: 12,
                          nbzjStockType: 1,
                          nbzjDetailType: "1,2",
                          nbzjPeriod: n,
                        })
                      );
                    case 2:
                      (i = t.sent) &&
                        i.dzjy &&
                        !this.isIndex &&
                        (this.dzjyData = i.dzjy);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getTextUnit: function (t) {
        isNaN(t) || ((this.unit = 1e8), Math.abs(t) < 1e9 && (this.unit = 1e4));
      },
      getColor: function (t, e) {
        var o = parseFloat(t);
        if (o || 0 === o) {
          if (0 === o) return this.themeColor.lightGray1;
          var r =
              "sanhu" === e
                ? this.themeColor.normalRed
                : this.themeColor.bigRed,
            n =
              "sanhu" === e
                ? this.themeColor.normalGreen
                : this.themeColor.bigGreen;
          return o > 0 ? r : n;
        }
      },
      handleTime: function (t) {
        var e = 60 * (+t.slice(-4, -2) - 9) + +t.slice(-2) - 30;
        return e > 120 ? e - 89 : e;
      },
      gotoTeachPage: function (t) {
        this.hqBridge.report("hq.funds_analysis_hs.go_to_teach_page", {
          id: ["sz", "sh"][this.type] + this.scode,
        });
        var e =
          "mp" === this.hqBridge.ENV
            ? "/pages/newsCon/newsDetail/main"
            : "/information/detail";
        this.hqBridge.routeTo({
          path: e,
          query: { id: "SN20220507194228790db9e0", anchorTitle: t },
        });
      },
      pageToBottom: function () {
        this.$refs.dzjyCard.getDzjyShowData();
      },
    },
  };
Array || n.resolveComponent("DzjyCard")();
var s = n._export_sfc(a, [
  [
    "render",
    function (t, e, o, r, i, a) {
      return {
        a: n.sr("dzjyCard", "d4c2a66b-0"),
        b: n.p({
          gotoTeachPage: a.gotoTeachPage,
          data: i.dzjyData,
          getColor: a.getColor,
          scrollToBottom: i.scrollToBottom,
          font_medium: i.font_medium,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-d4c2a66b"],
]);
wx.createComponent(s);
