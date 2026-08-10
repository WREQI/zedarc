var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, r) {
    return new Promise(function (n, s) {
      var o = function (e) {
          try {
            a(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        i = function (e) {
          try {
            a(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, i);
        };
      a((r = r.apply(e, t)).next());
    });
  },
  r = require("../utils/PluginParseUtil.js"),
  n = require("../../../stock-hq-data/index.js"),
  s = require("../../../../../../common/vendor.js"),
  o = require("../../node-modules/@tencent/st-judge-gray-user/dist/mp-weixin.js"),
  i = {
    name: "AiKlineComponent",
    components: {
      StockChartPanel: function () {
        return "../../../../../stock-widget/@tencent/stock-widget/components/StockChartPanel.js";
      },
      kLineCard: function () {
        return "../../../../../stock-widget/@tencent/stock-widget/cardKits/kLineCard.js";
      },
    },
    props: {
      theme: { required: !0, type: String },
      functionObj: { required: !0, type: Object },
      businessPluginMessage: { required: !1, default: "", type: String },
      curRequestId: { required: !1, type: String, default: "" },
    },
    computed: {
      subIntentCode: function () {
        if (null != this.businessPluginMessage) {
          var e = JSON.parse(this.businessPluginMessage);
          return e && e.subIntentCode ? e.subIntentCode : "";
        }
        return "";
      },
    },
    watch: {
      functionObj: {
        handler: function (e, t) {
          if (JSON.stringify(e) !== JSON.stringify(t)) {
            (this.symbol = this.parseStockSymbol(e)),
              (this.stockName = this.parseStockName(e));
            var r = n.utils.splitSymbol(this.symbol) || {},
              s = r.scode,
              o = r.market;
            (this.scode = s),
              (this.market = o),
              (this.mockTradeAbtUser = e.mockTradeAbtUser || !1);
          }
        },
        immediate: !0,
      },
      theme: { handler: function (e) {}, immediate: !0 },
    },
    data: function () {
      return {
        grayUserStatus: 0,
        symbol: "",
        stockName: "",
        scode: "",
        market: "",
        mockTradeAbtUser: !1,
      };
    },
    created: function () {
      return t(
        this,
        null,
        e().mark(function t() {
          var r;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), this.getOpenid();
                  case 2:
                    return (
                      (r = e.sent),
                      (e.next = 5),
                      o.judgeGrayUser(r, "0757440938")
                    );
                  case 5:
                    if (!e.sent) {
                      e.next = 9;
                      break;
                    }
                    (e.t0 = 2), (e.next = 10);
                    break;
                  case 9:
                    e.t0 = 1;
                  case 10:
                    this.grayUserStatus = e.t0;
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    methods: {
      getOpenid: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (s.StockBridge.ENV !== s.EnvTypeEnum.SHY_NATIVE) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 3), s.StockBridge.getZxgLoginInfo();
                  case 3:
                    return e.abrupt("return", e.sent.openid);
                  case 4:
                    return (e.next = 6), s.StockBridge.getLoginInfoUnion();
                  case 6:
                    return e.abrupt("return", e.sent.qluin);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
      parseStockSymbol: function (e) {
        var t = this.findTargetToolItem(e);
        if (null != t) {
          var n = r.changeStockCodeFormat(t.code);
          return (
            s.StockBridge.report("jichu.ai_search.plugin_expose", {
              widgettype: r.PluginType.KLINE,
              stockid: n,
              requestid: this.curRequestId,
            }),
            n
          );
        }
        return "";
      },
      parseStockName: function (e) {
        var t = this.findTargetToolItem(e);
        return null != t ? t.name : "";
      },
      findTargetToolItem: function (e) {
        if (e && e.fin_data && e.fin_data.datas)
          try {
            var t = e.fin_data.datas;
            if (t && t.length > 0) {
              var n = t[0];
              if (n.vals && n.vals.length > 0) {
                var s = r.findTargetStockItem(n.vals);
                if (null != s) return s;
              }
            }
            return null;
          } catch (e) {
            return null;
          }
      },
      gotoStockDetail: function () {
        s.StockBridge.busEmit("common-ai-component-keepwzqpos"),
          s.StockBridge.report("jichu.ai_search.ai_plugin_click", {
            widgettype: r.PluginType.KLINE,
            stockid: this.symbol,
            requestid: this.curRequestId,
          });
      },
      goToMockTrade: function () {
        s.StockBridge.report("base.ai_search.ai_mock_trade_plugin_click", {
          requestid: this.curRequestId,
          stockid: this.symbol,
        });
      },
      dataReady: function () {
        this.$emit("dataReady");
      },
    },
  };
Array ||
  (s.resolveComponent("kLineCard") + s.resolveComponent("StockChartPanel"))();
var a = s._export_sfc(i, [
  [
    "render",
    function (e, t, r, n, o, i) {
      return s.e(
        { a: 2 === o.grayUserStatus },
        2 === o.grayUserStatus
          ? {
              b: s.o(i.gotoStockDetail, 5886),
              c: s.p({
                skin: r.theme,
                symbol: o.symbol,
                "stock-name": o.stockName,
                "is-to-mock-trade": o.mockTradeAbtUser,
                "contex-obj": { requestId: r.curRequestId },
                source: "searchAi",
              }),
            }
          : 1 === o.grayUserStatus
          ? {
              e: s.o(i.gotoStockDetail, 5887),
              f: s.o(i.goToMockTrade, 5888),
              g: s.o(i.dataReady, 5889),
              h: s.p({
                skin: r.theme,
                symbol: o.symbol,
                scode: o.scode,
                market: o.market,
                stockName: o.stockName,
                isToMockTrade: o.mockTradeAbtUser,
                routeMockTradeParam: {
                  scene: "fromai",
                  type: "gp",
                  id: o.symbol,
                },
              }),
            }
          : {},
        { d: 1 === o.grayUserStatus }
      );
    },
  ],
  ["__scopeId", "data-v-c7bc0981"],
]);
wx.createComponent(a);
