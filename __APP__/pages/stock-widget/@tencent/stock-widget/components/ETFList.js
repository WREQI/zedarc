var e = require("../util/format.js"),
  t = require("../../../js-base64/base64.js"),
  a = require("../util/imageUrl.js"),
  r = require("../../../../../common/vendor.js"),
  l = {
    name: "ETFList",
    inject: ["helper"],
    options: { styleIsolation: "shared" },
    props: {
      params: { type: Object, default: {} },
      theme: { type: String, default: "" },
      pageType: { type: String, default: "" },
      newsId: { type: String, default: "" },
      moduleData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    components: {
      HeardbarVue: function () {
        return "./HeadBar.js";
      },
      TableList: function () {
        return "./TableList.js";
      },
    },
    data: function () {
      return {
        data: null,
        title: "",
        intor: "当日满足上榜条件的ETF，包括行业、宽基、商品等不同维度。",
        accountText: "立即开户",
        stockArr: [],
        stocks: "",
        backgroundImage: {
          white: a.etfHeadImgUrlWhite,
          black: a.etfHeadImgUrlBlack,
        },
        titleImage: {
          white: a.etfHeadTitleUrlWhite,
          black: a.etfHeadTitleUrlBlack,
        },
        redUp: !0,
        statData: "",
        channelNumber: "",
      };
    },
    computed: {
      env: function () {
        var e;
        return (null == (e = this.helper) ? void 0 : e.env) || {};
      },
    },
    mounted: function () {
      var e = this;
      this.env.__APP__ &&
        this.helper.shy.getSystemInfo(function (t) {
          e.redUp = "redup" === t.flucShowMode;
        }),
        this.getData(),
        (this.statData = this.getStatData()),
        (this.channelNumber = this.getChannelNumber());
    },
    methods: {
      gotoStockDetail: function (e) {
        this.report("ETF_module_stock_click"), this.$emit("goToStockDetail", e);
      },
      report: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", e, t);
      },
      routeToPage: function (e) {
        this.$emit("routeToPage", e);
      },
      getData: function () {
        try {
          var r = t.gBase64.decode(this.params.rankList),
            l = r.replace(/\\\"/g, '"').replace(/\\\\/g, "\\"),
            i = JSON.parse(l);
          this.data = i;
          var o = this.stockArr,
            n = [];
          this.data.map(function (t) {
            (t.thead = ["股票名称", "溢折率", "涨跌幅"]),
              (t.cloumeKeys = ["name", "yzl", "zdf"]),
              t.list.forEach(function (t) {
                var a = t.code.slice(0, 2),
                  r = t.code.slice(2);
                (t.market = a),
                  (t.scode = r),
                  (t.symbol = t.code),
                  o.push(t.code),
                  (t.iconClass = "stock-icon-".concat(a.toUpperCase())),
                  (t.yzl = "".concat(e.formatNum(t.yzl), "%")),
                  (t.zdf = "".concat(e.formatNum(t.zdf), "%"));
              }),
              "etf_overseas" === t.type &&
                (n.push("跨境"),
                (t.tableImgTitle = {
                  white: a.etfTableTitleUrlWhiteOverseas,
                  black: a.etfTableTitleUrlBlackOverseas,
                })),
              "etf_industry" === t.type &&
                (n.push("行业"),
                (t.tableImgTitle = {
                  white: a.etfTableTitleUrlWhiteIndustry,
                  black: a.etfTableTitleUrlBlackIndustry,
                })),
              "etf_scale" === t.type &&
                (n.push("宽基"),
                (t.tableImgTitle = {
                  white: a.etfTableTitleUrlWhiteScale,
                  black: a.etfTableTitleUrlBlackScale,
                })),
              "etf_commodity" === t.type &&
                (n.push("商品"),
                (t.tableImgTitle = {
                  white: a.etfTableTitleUrlWhiteCommodity,
                  panda: a.etfTableTitleUrlWhiteCommodity,
                  black: a.etfTableTitleUrlBlackCommodity,
                })),
              "etf_theme" === t.type &&
                (n.push("主题"),
                (t.tableImgTitle = {
                  white: a.etfTableTitleUrlWhiteTheme,
                  black: a.etfTableTitleUrlBlackTheme,
                }));
          }),
            (this.intor = "当日满足上榜条件的ETF，包括".concat(
              n.join("、"),
              "等不同维度。"
            )),
            (this.stockArr = o),
            (this.stocks = this.stockArr.join(","));
        } catch (e) {
          this.$emit("hideModule");
        }
      },
      getStatData: function () {
        var e = this.env,
          t = e.__APP__,
          a = e.__WZQ__,
          r = e.__MP__,
          l = e.IS_WZQ_XCX;
        return t
          ? "Ike00p000b005"
          : a
          ? "ILu00p000a034"
          : r
          ? "IW800p000b098"
          : l
          ? "Ie600p000b099"
          : "";
      },
      getChannelNumber: function () {
        var e = this.env,
          t = e.__APP__,
          a = e.__WZQ__,
          r = e.__MP__,
          l = e.IS_WZQ_XCX;
        return t
          ? "Ike00p000m009"
          : a
          ? "ILu00p000l020"
          : r
          ? "IW800p000l108"
          : l
          ? "Ie600p000l109"
          : "";
      },
    },
  };
Array ||
  (r.resolveComponent("HeardbarVue") + r.resolveComponent("TableList"))();
var i = r._export_sfc(l, [
  [
    "render",
    function (e, t, a, l, i, o) {
      return {
        a: r.o(o.routeToPage, 5659),
        b: r.p({
          statData: i.statData,
          title: i.title,
          intor: i.intor,
          userInfo: a.userInfo,
          accountText: i.accountText,
          backgroundImage: i.backgroundImage,
          theme: a.theme,
          titleImage: i.titleImage,
        }),
        c: r.f(i.data, function (e, t, l) {
          return {
            a: t,
            b: r.o(o.gotoStockDetail, 5660, t),
            c: r.o(o.report, 5661, t),
            d: "fda0e478-1-" + l,
            e: r.p({
              channelNumber: i.channelNumber,
              tableImgTitle: e.tableImgTitle,
              theme: a.theme,
              thead: e.thead,
              cloumeKeys: e.cloumeKeys,
              list: e.list,
              redUp: i.redUp,
              stocks: i.stocks,
              pageType: a.pageType,
              newsId: a.newsId,
              type: a.moduleData.type,
            }),
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-fda0e478"],
]);
wx.createComponent(i);
