var e = require("./settingPage.js"),
  t = require("../../../../common/vendor.js"),
  n = {
    components: {
      preSettingRemind: function () {
        return "./components/preSettingRemind.js";
      },
    },
    mixins: [e.remindSetting],
    inject: { hqBridge: { default: {} }, stockBridge: { default: {} } },
    props: {
      market: { type: String, default: "0" },
      scode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      title: { type: String, default: "一键升级智能提醒" },
      symbol: { type: String, default: "" },
      theme: { type: String, default: "" },
    },
    computed: {
      btnText: function () {
        return "立即升级";
      },
    },
    mounted: function () {
      this.hqBridge.report("hq.remindsetting.upgrade_brow", {
        stockid: this.symbol,
      });
    },
    methods: {
      handleSave: function () {
        this.$emit("upgradeSmart"),
          this.hqBridge.report("hq.remindsetting.upgrade_click", {
            stockid: this.symbol,
          });
      },
      closePop: function () {
        this.$emit("close"),
          this.hqBridge.report("hq.remindsetting.upgrade_close", {
            stockid: this.symbol,
          });
      },
    },
  };
Array || t.resolveComponent("preSettingRemind")();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, n, o, r, i, s) {
      return {
        a: t.o(function () {
          return s.closePop && s.closePop.apply(s, arguments);
        }, 2267),
        b: t.t(o.title),
        c: t.o(function () {
          return s.closePop && s.closePop.apply(s, arguments);
        }, 2268),
        d: t.p({
          ratios: e.preplaceData,
          scode: o.scode,
          "stock-name": o.stockName,
          "has-set-smart": !1,
        }),
        e: t.t(s.btnText),
        f: t.n(o.theme),
        g: t.o(function () {
          return s.handleSave && s.handleSave.apply(s, arguments);
        }, 2269),
        h: t.o(function () {}, 2270),
      };
    },
  ],
  ["__scopeId", "data-v-fb5fb477"],
]);
wx.createComponent(o);
