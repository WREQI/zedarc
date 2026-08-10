var t = require("../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    props: {
      ratios: {
        type: Array,
        default: function () {
          return [];
        },
      },
      scode: { type: String, default: "" },
      stockName: { type: String, default: "" },
      hasSetSmart: { type: Boolean, default: !0 },
      styleType: { type: String, default: "" },
    },
    data: function () {
      return { isMpWzq: !1 };
    },
    computed: {
      formattedScode: function () {
        var t;
        return "(".concat(
          null == (t = this.scode)
            ? void 0
            : t.replace(/(\.N|\.OQ|\.AM|\.PS|\.OTC)/g, ""),
          ")"
        );
      },
      statusText: function () {
        return this.hasSetSmart ? "已涨到 **" : "预计财报发布";
      },
      priceRatio: function () {
        return this.ratios[0] ? "±".concat(100 * this.ratios[0], "%") : "";
      },
      zdf: function () {
        return this.ratios[2] ? "".concat(this.ratios[2], "%") : "";
      },
    },
    methods: {
      handleSetClick: function () {
        this.$emit("gotoSettingPage");
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, o, r, n, s) {
        return t.e(
          { a: "addChooseGuide" === o.styleType },
          "addChooseGuide" === o.styleType
            ? {
                b: t.t(
                  n.isMpWzq
                    ? "需授权小程序订阅消息才能使用。"
                    : "需关注公众号才能使用。"
                ),
              }
            : {
                c: t.t(
                  o.hasSetSmart
                    ? "智能识别当前股票值得关注的异动，通过微信公众号第一时间通知你"
                    : "开启后，智能识别股票异动，不改变原有的设置"
                ),
              },
          {
            d: t.t(o.hasSetSmart ? "股价上涨提醒" : "公司大事提醒"),
            e: t.t(o.stockName),
            f: t.t(s.formattedScode),
            g: t.t(s.statusText),
          }
        );
      },
    ],
    ["__scopeId", "data-v-042fa274"],
  ]);
wx.createComponent(a);
