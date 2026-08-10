var e = require("../util/format.js"),
  t = require("../../../js-base64/base64.js"),
  o = require("../../../../../common/vendor.js"),
  r = {
    name: "ETFChange",
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
    },
    components: {
      TableList: function () {
        return "./TableList.js";
      },
    },
    data: function () {
      return {
        title: "该ETF前10大重仓股名单",
        list: [],
        stockArr: [],
        stocks: "",
        redUp: !0,
        statData: "",
        channelNumber: "",
        cloumeKeys: ["name", "ratio", "rate"],
        thead: ["名称代码", "净值占比", "涨跌幅"],
        colorCloume: ["ratio"],
      };
    },
    computed: {
      env: function () {
        var e;
        return (null == (e = this.helper) ? void 0 : e.env) || {};
      },
    },
    created: function () {
      var e = this;
      this.env.__APP__ &&
        this.helper.shy.getSystemInfo(function (t) {
          e.redUp = "redup" === t.flucShowMode;
        }),
        this.getData();
    },
    methods: {
      gotoStockDetail: function (e) {
        this.report("ETFChange_module_stock_click"),
          this.$emit("goToStockDetail", e);
      },
      report: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", e, t);
      },
      getData: function () {
        this.params.type && "LOF" === this.params.type
          ? (this.title = "该LOF前10大重仓股名单")
          : (this.title = "该ETF前10大重仓股名单");
        try {
          var o = t.gBase64.decode(this.params.rankList),
            r = o.replace(/\\\"/g, '"').replace(/\\\\/g, "\\"),
            a = JSON.parse(r),
            s = this.stockArr;
          a.map(function (t) {
            var o = t.jump_code.slice(0, 2),
              r = t.jump_code.slice(2);
            (t.market = o),
              (t.scode = r),
              (t.symbol = t.jump_code),
              (t.code = t.jump_code),
              s.push(t.jump_code),
              (t.iconClass = "stock-icon-".concat(o.toUpperCase())),
              (t.ratio = "".concat(t.ratio, "%")),
              (t.rate = "".concat(e.formatNum(t.rate), "%"));
          }),
            (this.list = a),
            (this.stockArr = s),
            (this.stocks = this.stockArr.join(","));
        } catch (e) {
          this.$emit("hideModule");
        }
      },
    },
  };
Array || o.resolveComponent("TableList")();
var a = o._export_sfc(r, [
  [
    "render",
    function (e, t, r, a, s, i) {
      return {
        a: o.o(i.gotoStockDetail, 5662),
        b: o.o(i.report, 5663),
        c: o.p({
          channelNumber: s.channelNumber,
          theme: r.theme,
          thead: s.thead,
          cloumeKeys: s.cloumeKeys,
          colorCloume: s.colorCloume,
          list: s.list,
          redUp: s.redUp,
          stocks: s.stocks,
          pageType: r.pageType,
          newsId: r.newsId,
          type: r.moduleData.type,
          tableTitle: s.title,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-50207e4c"],
]);
wx.createComponent(a);
