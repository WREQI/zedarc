var t = require("../../../../../common/vendor.js"),
  e = require("../utils/StockBridgeWrapper.js"),
  n = require("../../stock-hq-data/index.js"),
  i = require("./AnswerItem.js"),
  o = {
    name: "AnswerFunctionXuanGu",
    components: {
      AiStrategy: function () {
        return "../node-modules/@tencent/stock-ai-strategy/modules/Card.js";
      },
    },
    inject: { hqBridge: { default: null } },
    props: {
      theme: { required: !0, type: String },
      functionObj: { required: !0, type: Object },
      mbtiFunctionObj: { required: !1, type: Object },
      functionType: { required: !0, type: String },
      functionXuanGuTips: { required: !0, type: String, default: "" },
      position: { required: !0, type: Number },
      curRequestId: { required: !1, type: String, default: "" },
      curSessionId: { required: !1, type: String, default: "" },
      reply: { required: !1, type: String, default: "" },
      thinking: { required: !1, type: String, default: "" },
      subScene: { required: !1, type: String, default: "" },
      mockTradeAbtUser: { required: !1, type: Boolean, default: !1 },
    },
    data: function () {
      return { isMP: !0, contexObj: {} };
    },
    computed: {
      hasV1Content: function () {
        return (
          this.functionXuanGuTips &&
          this.functionObj &&
          this.functionObj.component_type &&
          "xuangu_custom_strategy" === this.functionObj.component_type &&
          this.functionObj.xuangu &&
          this.functionObj.xuangu.data &&
          this.functionObj.xuangu.data.length > 0
        );
      },
      hasV2Content: function () {
        return (
          this.functionObj &&
          this.functionObj.component_type &&
          "xuangu_strategy_v2" === this.functionObj.component_type
        );
      },
      componentVersion: function () {
        if (
          this.functionXuanGuTips &&
          this.functionObj &&
          this.functionObj.component_type
        ) {
          if ("xuangu_strategy_v2" === this.functionObj.component_type)
            return "v2";
          if ("xuangu_custom_strategy" === this.functionObj.component_type)
            return "v1";
        }
        return "v1";
      },
      metricArray: function () {
        return this.functionObj &&
          this.functionObj.component_data &&
          this.functionObj.component_data.selection_reason &&
          this.functionObj.component_data.selection_reason.metric
          ? this.functionObj.component_data.selection_reason.metric
          : [];
      },
      hasTextAnswer: function () {
        return this.reply || this.thinking;
      },
      isMbtiNewUserXuanGu: function () {
        return "stocklist-mbti" === this.functionType;
      },
      xuanGuComponentType: function () {
        return "stocklist-mbti" === this.functionType ? "v2" : "v1";
      },
      mbtiJieDuTips: function () {
        return this.mbtiFunctionObj && this.mbtiFunctionObj.info
          ? this.mbtiFunctionObj.info
          : "";
      },
      mbtiJieDuSearchResultTips: function () {
        return this.mbtiFunctionObj && this.mbtiFunctionObj.tips
          ? this.mbtiFunctionObj.tips
          : "以下为部分筛选结果及关键指标:";
      },
      mbtiImageUrl: function () {
        return this.mbtiFunctionObj && this.mbtiFunctionObj.value
          ? "https://st.gtimg.com/image/ai/mbti/".concat(
              this.mbtiFunctionObj.value.toLowerCase(),
              ".png"
            )
          : "";
      },
      xuanGuComponentTitle: function () {
        return this.mbtiFunctionObj && this.mbtiFunctionObj.value
          ? "适合".concat(this.mbtiFunctionObj.value.toUpperCase(), "的股票")
          : "";
      },
    },
    watch: {
      functionObj: {
        handler: function (t) {
          var e = this;
          setTimeout(function () {
            e.$emit("function-item-finish");
          }, 30);
        },
        immediate: !0,
      },
    },
    created: function () {
      var n = this;
      (this.contexObj.requestId = this.curRequestId),
        (this.contexObj.sessionId = this.curSessionId),
        (this.contexObj.subScene = this.subScene),
        this.isMbtiNewUserXuanGu &&
          this.mbtiFunctionObj.value &&
          ((this.contexObj.mbti_strategy = i.getMbti(
            this.mbtiFunctionObj.value.toUpperCase()
          )),
          e.StockBridge.setStorage(
            "mbti_strategy",
            this.contexObj.mbti_strategy
          )),
        e.StockBridge.ENV === t.EnvTypeEnum.SHY_NATIVE
          ? shy.onPageVisible(function () {
              n.$refs.aiStrategy.refresh();
            })
          : t.wx$1.onAppRoute(function () {
              n.$refs.aiStrategy.refresh();
            });
    },
    beforeDestroy: function () {},
    methods: {
      getMetricContentInfo: function (t, e, n) {
        return n && n.length > 1
          ? "".concat(t + 1, ".").concat(e)
          : n && 1 === n.length
          ? e
          : "";
      },
      onVisibilitychange: function () {},
      onEntryClick: function (n) {
        if (
          (e.StockBridge.report("jichu.ai_search.xuangu_plugin_click_more", {
            requestid: this.curRequestId,
            session: this.curSessionId,
          }),
          e.StockBridge.ENV === t.EnvTypeEnum.SHY_NATIVE)
        ) {
          var i = encodeURIComponent(
            JSON.stringify({
              p_key: "com.tencent.shy.ai_strategy",
              p_url: "index?filter="
                .concat(n, "&requestId=")
                .concat(this.curRequestId, "&sessionId=")
                .concat(this.curSessionId),
              p_title: "智能选股",
            })
          );
          e.StockBridge.routeTo({ url: "qqstock://SHY?info=".concat(i) });
        } else
          e.StockBridge.routeTo({
            url: "/pages/searchAi/strategy?filter="
              .concat(n, "&requestId=")
              .concat(this.curRequestId, "&sessionId=")
              .concat(this.curSessionId),
          });
      },
      onStockClick: function (i) {
        var o, s;
        if (i && i.code && i.name) {
          (o = i.code),
            (s = i.name),
            this.isMbtiNewUserXuanGu
              ? e.StockBridge.report(
                  "base.ai_search.xuangu_plugin_stock_item_click",
                  {
                    requestid: this.curRequestId,
                    session: this.curSessionId,
                    stockid: o,
                    subScene: this.subScene,
                    mbti_strategy: this.contexObj.mbti_strategy,
                  }
                )
              : e.StockBridge.report(
                  "jichu.ai_search.xuangu_plugin_click_sotck",
                  {
                    requestid: this.curRequestId,
                    session: this.curSessionId,
                    stockid: o,
                    subScene: this.subScene,
                  }
                );
          var u = n.utils.splitSymbol(o).scode,
            r = n.utils.splitSymbol(o).market;
          if (e.StockBridge.ENV === t.EnvTypeEnum.SHY_NATIVE) {
            var c = encodeURIComponent(JSON.stringify({ code: o, name: s }));
            e.StockBridge.routeTo({
              url: "qqstock://StockDetail?info=".concat(c),
            });
          } else
            e.StockBridge.routeTo({
              url: "/pages/quote/quote?scode=".concat(u, "&market=").concat(r),
            });
        }
      },
      onStarStock: function () {
        setTimeout(function () {
          e.StockBridge.busEmit("market-choose-list-refresh");
        }, 3e3);
      },
    },
  };
Array || t.resolveComponent("AiStrategy")();
var s = t._export_sfc(o, [
  [
    "render",
    function (e, n, i, o, s, u) {
      return t.e(
        { a: i.functionXuanGuTips && !u.isMbtiNewUserXuanGu },
        i.functionXuanGuTips && !u.isMbtiNewUserXuanGu
          ? { b: t.t(i.functionXuanGuTips) }
          : {},
        { c: u.isMbtiNewUserXuanGu },
        u.isMbtiNewUserXuanGu
          ? t.e(
              { d: u.mbtiImageUrl },
              u.mbtiImageUrl ? { e: u.mbtiImageUrl, f: e.type } : {}
            )
          : {},
        {
          g:
            u.metricArray && u.metricArray.length > 0 && !u.isMbtiNewUserXuanGu,
        },
        u.metricArray && u.metricArray.length > 0 && !u.isMbtiNewUserXuanGu
          ? {
              h: t.f(u.metricArray, function (e, n, i) {
                return {
                  a: t.t(u.getMetricContentInfo(n, e, u.metricArray)),
                  b: n,
                };
              }),
            }
          : {},
        { i: u.isMbtiNewUserXuanGu },
        u.isMbtiNewUserXuanGu ? { j: t.t(u.mbtiJieDuTips) } : {},
        { k: u.hasV2Content && !u.isMbtiNewUserXuanGu },
        (u.hasV2Content && u.isMbtiNewUserXuanGu, {}),
        { l: u.hasV2Content && u.isMbtiNewUserXuanGu },
        u.hasV2Content && u.isMbtiNewUserXuanGu
          ? { m: t.t(u.mbtiJieDuSearchResultTips) }
          : {},
        { n: u.hasV1Content },
        u.hasV1Content
          ? {
              o: t.sr("aiStrategy", "93e8a226-0"),
              p: t.o(u.onEntryClick, 5008),
              q: t.o(u.onStockClick, 5009),
              r: t.o(u.onStarStock, 5010),
              s: t.p({
                data: i.functionObj.xuangu.data[0],
                context: s.contexObj,
                version: "v1",
              }),
            }
          : u.hasV2Content
          ? {
              v: t.sr("aiStrategy", "93e8a226-1"),
              w: t.o(u.onEntryClick, 5011),
              x: t.o(u.onStockClick, 5012),
              y: t.o(u.onStarStock, 5013),
              z: t.p({
                data: i.functionObj.component_data,
                context: s.contexObj,
                version: "v2",
                type: u.xuanGuComponentType,
                title: u.xuanGuComponentTitle,
                mocktrade: i.mockTradeAbtUser,
              }),
            }
          : {},
        { t: u.hasV2Content, A: t.n("skin-".concat(i.theme)), B: i.theme }
      );
    },
  ],
  ["__scopeId", "data-v-93e8a226"],
]);
wx.createComponent(s);
