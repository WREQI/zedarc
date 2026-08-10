var t = require("../../../../markdown-it/lib/index.js"),
  a = require("../../../../../../common/vendor.js"),
  e = new t.MarkdownIt({ html: !1, linkify: !1, typographer: !0, breaks: !0 }),
  i = {
    name: "SentimentPanel",
    components: {
      AiCardCAiGzhInfo: function () {
        return "./PublicAccountViews.js";
      },
    },
    data: function () {
      return { noMarginTB: !0, isMp: a.StockBridge.ENV === a.EnvTypeEnum.MP };
    },
    props: {
      data: {
        type: Array,
        default: function () {
          return [
            {
              type: "看多",
              title: "111产业革命方兴未艾，国产替代是核心",
              content:
                "AI与半导体是未来5-10年的核心赛道，国内政策扶持力度大，国产算力芯片、AI服务器及大模型应用正迎来从0到1的突破，相关龙头公司业绩有望持续超预期，当前调整是长期布局的窗口期。",
            },
            {
              type: "看空",
              title: "估值高企交易拥挤，警惕业绩证伪",
              content:
                "多数科技股市盈率处于历史高位，但业绩增速难以匹配。消费电子需求疲软，半导体库存去化仍需时间。AI概念炒作过热，很多公司并无实质业务支撑，年报季可能面临业绩不及预期的风险。",
            },
          ];
        },
      },
    },
    computed: {
      bullishData: function () {
        return this.data.find(function (t) {
          return "积极" === t.type || "看多" === t.type;
        });
      },
      bearishData: function () {
        return this.data.find(function (t) {
          return "看空" === t.type;
        });
      },
      parsedBullishContent: function () {
        var t;
        return (null == (t = this.bullishData) ? void 0 : t.content)
          ? this.parseMarkdown(this.bullishData.content)
          : "";
      },
      parsedBearishContent: function () {
        var t;
        return (null == (t = this.bearishData) ? void 0 : t.content)
          ? this.parseMarkdown(this.bearishData.content)
          : "";
      },
      parsedBullishWithTitle: function () {
        return this.bullishData
          ? '<span style="color:#262E40;font-weight:500;">'.concat(
              this.bullishData.title,
              "：</span>"
            ) + this.parsedBullishContent
          : "";
      },
      parsedBearishWithTitle: function () {
        return this.bearishData
          ? '<span style="color:#262E40;font-weight:500;">'.concat(
              this.bearishData.title,
              "：</span>"
            ) + this.parsedBearishContent
          : "";
      },
    },
    methods: {
      parseMarkdown: function (t) {
        return t
          ? e
              .render(t)
              .replace(/^<p>|<\/p>\n?$/g, "")
              .replace(/<a[^>]*>([^<]*)<\/a>/gi, "$1")
              .replace(/<img[^>]*\/?>/gi, "")
              .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
              .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
              .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
              .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
              .replace(/javascript:/gi, "")
          : "";
      },
    },
    mounted: function () {},
  };
Array || a.resolveComponent("ai-card-c-ai-gzh-info")();
var n = a._export_sfc(i, [
  [
    "render",
    function (t, e, i, n, r, s) {
      return a.e(
        { a: s.bullishData },
        s.bullishData
          ? a.e(
              { b: !r.isMp },
              r.isMp
                ? { e: s.parsedBullishWithTitle }
                : { c: a.t(s.bullishData.title), d: s.parsedBullishContent },
              {
                f:
                  s.bullishData &&
                  s.bullishData.gzh_info &&
                  s.bullishData.gzh_info.length > 0,
              },
              s.bullishData &&
                s.bullishData.gzh_info &&
                s.bullishData.gzh_info.length > 0
                ? {
                    g: a.p({
                      "props-obj": s.bullishData,
                      noMarginTB: r.noMarginTB,
                    }),
                  }
                : {}
            )
          : {},
        { h: s.bearishData },
        s.bearishData
          ? a.e(
              { i: !r.isMp },
              r.isMp
                ? { l: s.parsedBearishWithTitle }
                : { j: a.t(s.bearishData.title), k: s.parsedBearishContent },
              {
                m:
                  s.bearishData &&
                  s.bearishData.gzh_info &&
                  s.bearishData.gzh_info.length > 0,
              },
              s.bearishData &&
                s.bearishData.gzh_info &&
                s.bearishData.gzh_info.length > 0
                ? {
                    n: a.p({
                      "props-obj": s.bearishData,
                      noMarginTB: r.noMarginTB,
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-002859f3"],
]);
wx.createComponent(n);
