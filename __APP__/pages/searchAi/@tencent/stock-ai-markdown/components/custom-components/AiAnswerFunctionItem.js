require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = function (t, e, n) {
    return e in t
      ? a(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  },
  u = function (t, a) {
    for (var n in a || (a = {})) s.call(a, n) && c(t, n, a[n]);
    if (r) {
      var i,
        u = e(r(a));
      try {
        for (u.s(); !(i = u.n()).done; ) {
          n = i.value;
          o.call(a, n) && c(t, n, a[n]);
        }
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    return t;
  },
  l = function (t, e) {
    return n(t, i(e));
  },
  h = function (t, e, a) {
    return new Promise(function (n, i) {
      var r = function (t) {
          try {
            o(a.next(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          try {
            o(a.throw(t));
          } catch (t) {
            i(t);
          }
        },
        o = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(r, s);
        };
      o((a = a.apply(t, e)).next());
    });
  },
  p = require("../../../../../../common/vendor.js"),
  d = require("../../../stock-hq-data/index.js"),
  m = require("../utils/api.js"),
  f = require("../../../stock-news-core/utils/knife.js"),
  g = require("../utils/PluginParseUtil.js"),
  y = require("../../node-modules/@tencent/st-judge-gray-user/dist/mp-weixin.js"),
  k = "institutional_perspective",
  j = "profit_forecast",
  b = {
    name: "AiAnswerFunctionItem",
    components: {
      AnswerItemJgRate: function () {
        return "./plugin/AnswerItemJgRate.js";
      },
      AnswerItemPerformanceTrends: function () {
        return "./plugin/AnswerItemPerformanceTrends.js";
      },
      AnswerItemProfitForcast: function () {
        return "./plugin/AnswerItemProfitForcast.js";
      },
      jgpjCard: function () {
        return "../../../../../stock-widget/@tencent/stock-widget/cardKits/jgpjCard.js";
      },
      yjqsCard: function () {
        return "../../../../../stock-widget/@tencent/stock-widget/cardKits/yjqsCard.js";
      },
      ylycCard: function () {
        return "../../../../../stock-widget/@tencent/stock-widget/cardKits/ylycCard.js";
      },
    },
    inject: { hqBridge: { default: null } },
    props: {
      theme: { required: !0, type: String },
      functionObj: { required: !0, type: Object },
      position: { required: !0, type: String },
      curRequestId: { required: !1, type: String, default: "" },
    },
    data: function () {
      return {
        grayUserStatus: 0,
        shouldShowYjqs: !1,
        jgList: [],
        jgListAll: [],
        jgchartData: [],
        pjNum: 0,
        hyTrendData: null,
        profitForcastData: null,
        isMP: !0,
        isWaiApp: "mpweapp" === p.ShellTypeEnum.MPWAI,
      };
    },
    computed: {
      showJgpjType: function () {
        return this.yiTuType === k;
      },
      showYlycType: function () {
        return this.yiTuType === j;
      },
      jgShowNum: function () {
        return this.isHS ? 3 : 2;
      },
      yiTuType: function () {
        return null != this.functionObj && this.functionObj.component_type
          ? this.functionObj.component_type
          : "";
      },
      pluginType: function () {
        if (this.yiTuType === k) {
          if (this.showJgRate) return g.PluginType.JGPI;
          if (this.hyTrendData) return g.PluginType.YJQS;
        } else if (this.yiTuType === j) {
          if (this.profitForcastData) return g.PluginType.YLYC;
          if (this.hyTrendData) return g.PluginType.YJQS;
        }
        return "";
      },
      symbol: function () {
        return null != this.functionObj
          ? this.parseStockSymbol(this.functionObj)
          : "";
      },
      showStockCode: function () {
        return null != this.functionObj
          ? this.parseShowStockCode(this.functionObj)
          : "";
      },
      stockName: function () {
        return null != this.functionObj
          ? this.pareseStockName(this.functionObj)
          : "";
      },
      scode: function () {
        return d.utils.splitSymbol(this.symbol).scode;
      },
      market: function () {
        return d.utils.splitSymbol(this.symbol).market;
      },
      isHS: function () {
        return d.utils.isHSMarket(this.market);
      },
      showJgRate: function () {
        return this.jgList && this.jgList.length;
      },
      hasContent: function () {
        return this.showJgRate || this.hyTrendData || this.profitForcastData;
      },
      pluginTypeStr: function () {
        return this.yiTuType == k
          ? this.showJgRate
            ? "机构评级"
            : "业绩趋势"
          : this.yiTuType == j
          ? this.profitForcastData
            ? "盈利预测"
            : "业绩趋势"
          : "";
      },
      canShowYjqsViewMore: function () {
        return !!this.hyTrendData && (!!this.isMP || this.isHS);
      },
      canShowViewDetail: function () {
        return this.yiTuType == k
          ? !!this.showJgRate || this.canShowYjqsViewMore
          : this.yiTuType == j &&
              (!!this.profitForcastData || this.canShowYjqsViewMore);
      },
    },
    watch: {
      symbol: {
        handler: function (t, e) {
          var a = this;
          2 !== this.grayUserStatus
            ? this.getData().then(function (t) {
                a.showJgRate
                  ? p.StockBridge.report("jichu.ai_search.plugin_expose", {
                      widgettype: g.PluginType.JGPI,
                      stockid: a.symbol,
                      requestid: a.curRequestId,
                    })
                  : a.hyTrendData
                  ? p.StockBridge.report("jichu.ai_search.plugin_expose", {
                      widgettype: g.PluginType.YJQS,
                      stockid: a.symbol,
                      requestid: a.curRequestId,
                    })
                  : a.profitForcastData &&
                    p.StockBridge.report("jichu.ai_search.plugin_expose", {
                      widgettype: g.PluginType.YLYC,
                      stockid: a.symbol,
                      requestid: a.curRequestId,
                    }),
                  a.$emit("dataReady"),
                  setTimeout(function () {
                    a.$emit("function-item-finish", a.pluginType);
                  }, 30);
              })
            : setTimeout(function () {
                a.$emit("function-item-finish", a.pluginType);
              }, 30);
        },
        immediate: !0,
      },
    },
    created: function () {
      return h(
        this,
        null,
        t().mark(function e() {
          var a;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), this.getOpenid();
                  case 2:
                    return (
                      (a = t.sent),
                      (t.next = 5),
                      y.judgeGrayUser(a, "0757440938")
                    );
                  case 5:
                    if (!t.sent) {
                      t.next = 9;
                      break;
                    }
                    (t.t0 = 2), (t.next = 10);
                    break;
                  case 9:
                    t.t0 = 1;
                  case 10:
                    this.grayUserStatus = t.t0;
                  case 11:
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
    methods: {
      getOpenid: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (p.StockBridge.ENV !== p.EnvTypeEnum.SHY_NATIVE) {
                      t.next = 4;
                      break;
                    }
                    return (t.next = 3), p.StockBridge.getZxgLoginInfo();
                  case 3:
                    return t.abrupt("return", t.sent.openid);
                  case 4:
                    return (t.next = 6), p.StockBridge.getLoginInfoUnion();
                  case 6:
                    return t.abrupt("return", t.sent.qluin);
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, e);
          })
        );
      },
      findTargetToolItem: function (t) {
        if (t && t.fin_data && t.fin_data.datas)
          try {
            var e = t.fin_data.datas;
            if (e && e.length > 0) {
              var a = e[0];
              if (a.vals && a.vals.length > 0) {
                var n = g.findTargetStockItem(a.vals);
                if (null != n) return n;
              }
            }
            return null;
          } catch (t) {
            return null;
          }
      },
      parseStockSymbol: function (t) {
        var e = this.findTargetToolItem(t);
        return null != e ? g.changeStockCodeFormat(e.code) : "";
      },
      handleFirstData: function (t) {
        this.shouldShowYjqs = !t;
      },
      parseShowStockCode: function (t) {
        var e = this.findTargetToolItem(t);
        if (null != e) {
          var a = e.code,
            n = a.indexOf(".");
          return null != a && -1 != n ? e.code.substr(0, n) : "";
        }
        return "";
      },
      pareseStockName: function (t) {
        var e = this.findTargetToolItem(t);
        return null != e ? e.name : "";
      },
      performanceCanvasClick: function () {
        this.viewDetailClick();
      },
      ylycCanvasClick: function () {
        this.viewDetailClick();
      },
      viewDetailClick: function () {
        p.StockBridge.report("jichu.ai_search.ai_plugin_click", {
          widgettype: this.pluginType,
          stockid: this.symbol,
          requestid: this.curRequestId,
        }),
          this.yiTuType == k
            ? this.showJgRate
              ? this.jumpToJgpiDetail()
              : this.hyTrendData && this.jumpToYjqsDetail()
            : this.yiTuType == j &&
              (this.profitForcastData
                ? this.jumpToYlycDetail()
                : this.hyTrendData && this.jumpToYjqsDetail());
      },
      jumpToJgpiDetail: function () {
        if (
          (p.wx$1.hideKeyboard(),
          p.StockBridge.report("jichu.ai_search.institution_click"),
          this.isMP)
        )
          p.StockBridge.routeTo({
            url: "/pages/searchAi/jgpjDetail?symbol=".concat(this.symbol),
          });
        else if (p.StockBridge.ENV === p.EnvTypeEnum.SHY_NATIVE) {
          var t = encodeURIComponent(
            JSON.stringify({
              p_key: "com.tencent.shy.search_ai",
              p_url: "jgrate?symbol=".concat(this.symbol),
              p_title: "机构评级",
            })
          );
          p.StockBridge.routeTo({ url: "qqstock://SHY?info=".concat(t) });
        } else {
          var e =
            "https://wzq.tenpay.com/mp/lite/index.html#/quote/jgpjDetail?symbol=".concat(
              this.symbol
            );
          p.StockBridge.openExtraWebview(e);
        }
      },
      jumpToYjqsDetail: function () {
        if ((p.wx$1.hideKeyboard(), this.canShowViewDetail))
          if (this.isMP)
            this.isWaiApp
              ? p.StockBridge.toast("暂不支持")
              : p.StockBridge.routeTo({
                  url: "/pages/quote/quote?scode="
                    .concat(this.scode, "&market=")
                    .concat(
                      this.market,
                      "&tab=finance&tabCurrentModule=performanceTrends"
                    ),
                });
          else if (p.StockBridge.ENV === p.EnvTypeEnum.SHY_NATIVE) {
            if (!this.canShowViewDetail) return;
            var t = encodeURIComponent(
              JSON.stringify({
                code: this.symbol,
                name: this.stockName,
                selectedTabTitle: "财务",
              })
            );
            p.StockBridge.routeTo({
              url: "qqstock://StockDetail?info=".concat(t),
            });
          } else {
            var e =
              "https://wzq.tenpay.com/mp/lite/index.html#/quote/detail?scode="
                .concat(this.scode, "&market=")
                .concat(
                  this.market,
                  "&tab=finance&tabCurrentModule=performanceTrends"
                );
            p.StockBridge.openExtraWebview(e);
          }
      },
      jumpToYlycDetail: function () {
        if ((p.wx$1.hideKeyboard(), this.isMP))
          this.isWaiApp
            ? p.StockBridge.toast("暂不支持")
            : p.StockBridge.routeTo({
                url: "/pages/quote/quote?scode="
                  .concat(this.scode, "&market=")
                  .concat(
                    this.market,
                    "&tab=finance&tabCurrentModule=profitForcast"
                  ),
              });
        else if (p.StockBridge.ENV === p.EnvTypeEnum.SHY_NATIVE) {
          if (!this.canShowViewDetail) return;
          var t = encodeURIComponent(
            JSON.stringify({
              code: this.symbol,
              name: this.stockName,
              selectedTabTitle: this.isHS ? "分析" : "财务",
              selectedSubTabTitle: this.isHS ? "盈利预测" : "",
            })
          );
          p.StockBridge.routeTo({
            url: "qqstock://StockDetail?info=".concat(t),
          });
        } else {
          var e =
            "https://wzq.tenpay.com/mp/lite/index.html#/quote/detail?scode="
              .concat(this.scode, "&market=")
              .concat(
                this.market,
                "&tab=finance&tabCurrentModule=profitForcast"
              );
          p.StockBridge.openExtraWebview(e);
        }
      },
      getData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (this.yiTuType != k) {
                        t.next = 9;
                        break;
                      }
                      return (t.next = 3), this.getJgRateData();
                    case 3:
                      if (((t.t0 = this.showJgRate), t.t0)) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 7), this.getPerformanceTrendsData();
                    case 7:
                      t.next = 17;
                      break;
                    case 9:
                      if (((t.t1 = this.yiTuType == j), !t.t1)) {
                        t.next = 17;
                        break;
                      }
                      return (t.next = 13), this.getProfitForcastData();
                    case 13:
                      if (((t.t2 = this.profitForcastData), t.t2)) {
                        t.next = 17;
                        break;
                      }
                      return (t.next = 17), this.getPerformanceTrendsData();
                    case 17:
                      this.$emit("dataReady");
                    case 18:
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
      getJgRateData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var a,
              n,
              i,
              r,
              s,
              o,
              c,
              h,
              g,
              y,
              k,
              j,
              b,
              w,
              v,
              T,
              D,
              S,
              q,
              x,
              C,
              R,
              O,
              I,
              N,
              P,
              A,
              F,
              _,
              B = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((t.prev = 0),
                        "mp" === this.hqBridge.ENV
                          ? ((n = "wzqxcx"),
                            (n = "zxg_xcx"),
                            (r =
                              p.wx$1.getDeviceInfo() ||
                              p.wx$1.getSystemInfoSync()),
                            (s = r.platform),
                            (i = "ios" === s ? 5 : 6))
                          : ((n = "zxg_h5"), (i = 6)),
                        (o = {
                          stockCode: this.symbol,
                          scenes: i,
                          xcxname: n,
                          come_from: "3",
                          t: new Date().getTime(),
                          app: n,
                        }),
                        !this.isHS)
                      ) {
                        t.next = 21;
                        break;
                      }
                      return (
                        (t.next = 6),
                        m.getDepthData(
                          this.hqBridge,
                          l(u({}, o), {
                            subReq: "investRate",
                            "investRate.new_format": 1,
                          })
                        )
                      );
                    case 6:
                      (c = t.sent),
                        (h = c.data.subOrgRspData.investRate.data),
                        (g = h.pjtj),
                        (y = void 0 === g ? {} : g),
                        (k = h.jgpj),
                        (j = void 0 === k ? {} : k),
                        (this.jgListAll = (j.info || []).map(function (t) {
                          return (
                            t.ybInfo &&
                              ((t.ybInfo.title =
                                t.ybInfo.title &&
                                t.ybInfo.title.replace(
                                  "【".concat(t.jgjc, "】"),
                                  ""
                                )),
                              t.ybInfo.time &&
                                (t.ybInfo.time = f.timeFormat(
                                  Date.parse(t.ybInfo.time.replace(/-/g, "/")) /
                                    1e3,
                                  1
                                ))),
                            t
                          );
                        })),
                        (this.jgList = this.jgListAll.slice(0, this.jgShowNum)),
                        ((b = [])[0] = y.mc || { name: "卖出", num: 0 }),
                        (b[1] = y.jc || { name: "减持", num: 0 }),
                        (b[2] = y.zx || { name: "中性", num: 0 }),
                        (b[3] = y.zc || { name: "增持", num: 0 }),
                        (b[4] = y.mr || { name: "买入", num: 0 }),
                        (this.jgchartData = [].concat(b)),
                        (w = 0),
                        b.forEach(function (t) {
                          w += t.num || 0;
                        }),
                        (this.pjNum = w),
                        (v = [
                          "#1CAA3C",
                          "#79CD8C",
                          "#7A8499",
                          "#F5A2A2",
                          "#E63535",
                        ]),
                        (this.jgchartData = this.jgchartData.map(function (
                          t,
                          e
                        ) {
                          return l(u({}, t), {
                            width: parseInt((t.num / B.pjNum) * 100, 10),
                            color: v[e],
                          });
                        })),
                        (this.jgchartData = this.jgchartData.filter(function (
                          t
                        ) {
                          return +t.num > 0;
                        })),
                        (this.jgInline = this.jgchartData.length <= 2),
                        (t.next = 36);
                      break;
                    case 21:
                      return (
                        (D = d.utils.splitSymbol(this.symbol)),
                        (S = D.market),
                        d.utils.isHKMarket(S)
                          ? (T = {
                              subReq: "hkJiankuang,investRateGetReport",
                              "hkJiankuang.code": this.symbol,
                              "hkJiankuang._appver": 9.7,
                            })
                          : d.utils.isUSMarket(S) &&
                            (T = {
                              subReq: "usBrief,investRateGetReport",
                              "usBrief.symbol": this.symbol,
                              "usBrief._appver": 9.7,
                            }),
                        (t.next = 25),
                        m.getDepthData(
                          this.hqBridge,
                          l(u(u({}, o), T), {
                            "investRateGetReport.symbol": this.symbol,
                            "investRateGetReport.n": 100,
                            "investRateGetReport.new_format": 1,
                          })
                        )
                      );
                    case 25:
                      (q = t.sent),
                        (x = q.data || {}),
                        (C = x.subOrgRspData),
                        (O = (R = void 0 === C ? {} : C).hkJiankuang),
                        (I = R.usBrief),
                        (N = R.investRateGetReport),
                        O
                          ? ((A = O.data.tzpj),
                            (P = A.jgpj[A.jgpj.length - 1].zjc))
                          : I &&
                            ((F = I.data.pjyl),
                            (P = F.jgpj[F.jgpj.length - 1].zjc)),
                        (this.pjNum = +P.jgs),
                        (this.jgListAll = (
                          (null == (a = null == N ? void 0 : N.data)
                            ? void 0
                            : a.data) || []
                        ).map(function (t) {
                          if (t.title) {
                            var e = t.title.split("】");
                            !t.jgjc &&
                              e.length > 1 &&
                              (t.jgjc = e[0].replaceAll("【", "")),
                              (t.title = t.title.replace(
                                "【".concat(t.jgjc, "】"),
                                ""
                              ));
                          }
                          return (
                            t.time &&
                              (t.time = f.timeFormat(
                                Date.parse(t.time.replace(/-/g, "/")) / 1e3,
                                1
                              )),
                            t
                          );
                        })),
                        (this.jgList = this.jgListAll.slice(0, this.jgShowNum)),
                        (this.jgchartData = [
                          { name: "卖出+减持", num: +P.sell },
                          { name: "持有", num: +P.hold },
                          { name: "增持+买入", num: +P.buy },
                        ]),
                        (_ = ["#1CAA3C", "#7A8499", "#E63535"]),
                        (this.jgchartData = this.jgchartData.map(function (
                          t,
                          e
                        ) {
                          return l(u({}, t), {
                            width: parseInt((t.num / B.pjNum) * 100, 10),
                            color: _[e],
                          });
                        })),
                        (this.jgchartData = this.jgchartData.filter(function (
                          t
                        ) {
                          return +t.num > 0;
                        })),
                        (this.jgInline =
                          1 === this.jgchartData.length ||
                          (2 === this.jgchartData.length && P.hold > 0));
                    case 36:
                      t.next = 40;
                      break;
                    case 38:
                      (t.prev = 38), (t.t0 = t.catch(0));
                    case 40:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 38]]
            );
          })
        );
      },
      getPerformanceTrendsData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = d.utils.isHSMarket(this.market)), !t.t0)) {
                        t.next = 4;
                        break;
                      }
                      return (t.next = 4), this.getHSPTData();
                    case 4:
                      if (((t.t1 = d.utils.isHKMarket(this.market)), !t.t1)) {
                        t.next = 8;
                        break;
                      }
                      return (t.next = 8), this.getHKPTData();
                    case 8:
                      if (((t.t2 = d.utils.isUSMarket(this.market)), !t.t2)) {
                        t.next = 12;
                        break;
                      }
                      return (t.next = 12), this.getUSPTData();
                    case 12:
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
      getHSPTData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var a, n, i, r, s, o, c, u;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        m.getFinanceBasic(this.hqBridge, this.symbol)
                      );
                    case 2:
                      return (
                        (a = t.sent),
                        (t.next = 5),
                        m.getFinanceMain(this.hqBridge, this.symbol)
                      );
                    case 5:
                      (n = t.sent),
                        0 == +a.code &&
                          0 == +n.code &&
                          ((i = a.data.lrb || {}),
                          (r = i.NPParentCompanyOwners),
                          (s = i.NPFromParentCompanyOwners),
                          (o = i.OperatingRevenue),
                          (c = {
                            yysr: o,
                            jlr: s || r,
                            eps: n.data.data.ylnl.EPS,
                          }),
                          (u = { latest: a.data.latest }),
                          Object.keys(c).map(function (t) {
                            if (["yysr", "jlr", "eps"].includes(t)) {
                              var e = {};
                              Object.keys(c[t]).map(function (a) {
                                var n = c[t][a];
                                if (Array.isArray(n)) {
                                  var i = n.filter(function (t) {
                                    return +t.value && !isNaN(t.value);
                                  });
                                  i.length && (e[a] = i);
                                }
                              }),
                                Object.keys(e).length && (u[t] = e);
                            }
                          }),
                          Object.keys(u).length && (this.hyTrendData = u));
                    case 7:
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
      getHKPTData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var a, n, i, r, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        m.getFinanceData(this.hqBridge, {
                          stockCode: this.symbol,
                          subReq: ["hkcwbbYjqs"],
                          "hkcwbbYjqs.symbol": this.symbol,
                        })
                      );
                    case 2:
                      0 == +(a = t.sent).code &&
                        a.data &&
                        ((n = a.data.subOrgRspData || {}),
                        (i = n.hkcwbbYjqs),
                        0 == +(r = void 0 === i ? {} : i).code &&
                          r.data &&
                          Object.keys(r.data).length &&
                          ((s = { latest: r.data.latest }),
                          Object.keys(r.data).map(function (t) {
                            if (["yysr", "jlr", "eps"].includes(t)) {
                              var e = {};
                              Object.keys(r.data[t]).map(function (a) {
                                var n = r.data[t][a];
                                if (Array.isArray(n)) {
                                  var i = n.filter(function (t) {
                                    return +t.value && !isNaN(t.value);
                                  });
                                  i.length && (e[a] = i);
                                }
                              }),
                                Object.keys(e).length && (s[t] = e);
                            }
                          }),
                          Object.keys(s).length && (this.hyTrendData = s)));
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
      getUSPTData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var a, n, i, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        m.getFinanceData(this.hqBridge, {
                          stockCode: this.symbol,
                          subReq: ["finDetailYjqs"],
                          "finDetailYjqs.symbol": this.scode,
                        })
                      );
                    case 2:
                      0 == +(a = t.sent).code &&
                        a.data &&
                        ((n = a.data.subOrgRspData.finDetailYjqs),
                        0 == +(i = void 0 === n ? {} : n).code &&
                          i.data &&
                          Object.keys(i.data).length &&
                          ((r = { latest: i.data.latest }),
                          Object.keys(i.data).map(function (t) {
                            if (["yysr", "jlr", "eps"].includes(t)) {
                              var e = {};
                              Object.keys(i.data[t]).map(function (a) {
                                var n = i.data[t][a];
                                if (Array.isArray(n)) {
                                  var r = n.filter(function (t) {
                                    return +t.value && !isNaN(t.value);
                                  });
                                  r.length && (e[a] = r);
                                }
                              }),
                                Object.keys(e).length && (r[t] = e);
                            }
                          }),
                          Object.keys(r).length && (this.hyTrendData = r)));
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
      getProfitForcastData: function () {
        return h(
          this,
          null,
          t().mark(function e() {
            var a, n, i, r, s, o, c, u;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isHS) {
                        t.next = 7;
                        break;
                      }
                      return (
                        (t.next = 3),
                        m.getFinanceData(this.hqBridge, {
                          stockCode: this.symbol,
                          subReq: ["zgGeneral"],
                          "zgGeneral.modules": "opinion",
                          "zgGeneral.source": "wzq",
                        })
                      );
                    case 3:
                      0 == (c = t.sent).code &&
                      c.data &&
                      c.data.subOrgRspData &&
                      c.data.subOrgRspData.zgGeneral &&
                      c.data.subOrgRspData.zgGeneral.data &&
                      c.data.subOrgRspData.zgGeneral.data.opinion
                        ? 0 ==
                          (null ==
                          (o =
                            null ==
                            (s =
                              null ==
                              (r =
                                null ==
                                (i =
                                  null ==
                                  (n =
                                    null == (a = null == c ? void 0 : c.data)
                                      ? void 0
                                      : a.subOrgRspData)
                                    ? void 0
                                    : n.zgGeneral)
                                  ? void 0
                                  : i.data)
                                ? void 0
                                : r.opinion)
                              ? void 0
                              : s.profit_forcast)
                            ? void 0
                            : o.show_module)
                          ? (this.profitForcastData = null)
                          : (this.profitForcastData =
                              c.data.subOrgRspData.zgGeneral.data.opinion)
                        : (this.profitForcastData = null),
                        (t.next = 11);
                      break;
                    case 7:
                      return (
                        (t.next = 9), this.getHKUSProfitForcaseData(this.symbol)
                      );
                    case 9:
                      0 == (u = t.sent).code &&
                        u.data &&
                        (u.data.EPS || u.data.NET || u.data.Sales) &&
                        (this.profitForcastData = u.data);
                    case 11:
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
      getHKUSProfitForcaseData: function (e) {
        return h(
          this,
          null,
          t().mark(function a() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n =
                          "https://proxy.finance.qq.com/ifzqgtimg/appstock/app/hkStockinfo/ylyc?symbol=".concat(
                            e
                          )),
                        (t.prev = 1),
                        (t.next = 4),
                        p.StockBridge.request(n, "GET")
                      );
                    case 4:
                      return t.abrupt("return", t.sent);
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(1));
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              null,
              [[1, 7]]
            );
          })
        );
      },
    },
  };
Array ||
  (
    p.resolveComponent("jgpjCard") +
    p.resolveComponent("ylycCard") +
    p.resolveComponent("yjqsCard") +
    p.resolveComponent("answer-item-jg-rate") +
    p.resolveComponent("answer-item-performance-trends") +
    p.resolveComponent("answer-item-profit-forcast")
  )();
var w = p._export_sfc(b, [
  [
    "render",
    function (t, e, a, n, i, r) {
      return p.e(
        { a: 2 === i.grayUserStatus && r.stockName && r.stockName.length > 0 },
        2 === i.grayUserStatus && r.stockName && r.stockName.length > 0
          ? p.e(
              { b: r.showJgpjType },
              r.showJgpjType
                ? {
                    c: p.o(r.handleFirstData, 5e3),
                    d: p.p({
                      symbol: r.symbol,
                      "stock-name": r.stockName,
                      position: a.position,
                      skin: a.theme,
                      "contex-obj": {
                        requestid: a.curRequestId,
                        stockid: r.symbol,
                      },
                      source: "searchAi",
                    }),
                  }
                : {},
              { e: r.showYlycType },
              r.showYlycType
                ? {
                    f: p.o(r.handleFirstData, 5001),
                    g: p.p({
                      symbol: r.symbol,
                      "stock-name": r.stockName,
                      position: a.position,
                      skin: a.theme,
                      "contex-obj": {
                        requestid: a.curRequestId,
                        stockid: r.symbol,
                      },
                      source: "searchAi",
                    }),
                  }
                : {},
              { h: i.shouldShowYjqs },
              i.shouldShowYjqs
                ? {
                    i: p.p({
                      symbol: r.symbol,
                      "stock-name": r.stockName,
                      position: a.position,
                      skin: a.theme,
                      "contex-obj": {
                        requestid: a.curRequestId,
                        stockid: r.symbol,
                      },
                      source: "searchAi",
                    }),
                  }
                : {}
            )
          : 1 === i.grayUserStatus &&
            r.stockName &&
            r.stockName.length > 0 &&
            r.hasContent
          ? p.e(
              { k: r.hasContent },
              r.hasContent
                ? {
                    l: p.t(r.stockName),
                    m: p.t(r.showStockCode),
                    n: p.t(r.pluginTypeStr),
                    o: p.o(function () {
                      return (
                        r.viewDetailClick &&
                        r.viewDetailClick.apply(r, arguments)
                      );
                    }, 5002),
                  }
                : {},
              { p: r.showJgpjType },
              r.showJgpjType
                ? p.e(
                    { q: r.showJgRate },
                    r.showJgRate
                      ? {
                          r: p.p({
                            theme: a.theme,
                            "is-h-s": r.isHS,
                            "jg-list": i.jgList,
                            "jgchart-data": i.jgchartData,
                            "pj-num": i.pjNum,
                            symbol: r.symbol,
                            "cur-request-id": a.curRequestId,
                          }),
                        }
                      : i.hyTrendData
                      ? {
                          t: p.o(r.performanceCanvasClick, 5003),
                          v: p.p({
                            data: i.hyTrendData,
                            skin: a.theme,
                            market: r.market,
                            position: a.position,
                          }),
                        }
                      : {},
                    { s: i.hyTrendData }
                  )
                : r.showYlycType
                ? p.e(
                    { x: i.profitForcastData },
                    i.profitForcastData
                      ? {
                          y: p.o(r.ylycCanvasClick, 5004),
                          z: p.p({
                            scode: r.scode,
                            market: r.market,
                            skin: a.theme,
                            data: i.profitForcastData,
                            position: a.position,
                          }),
                        }
                      : i.hyTrendData
                      ? {
                          B: p.o(r.performanceCanvasClick, 5005),
                          C: p.p({
                            data: i.hyTrendData,
                            skin: a.theme,
                            market: r.market,
                            position: a.position,
                          }),
                        }
                      : {},
                    { A: i.hyTrendData }
                  )
                : {},
              { w: r.showYlycType, D: r.canShowViewDetail },
              r.canShowViewDetail
                ? {
                    E: p.o(function () {
                      return (
                        r.viewDetailClick &&
                        r.viewDetailClick.apply(r, arguments)
                      );
                    }, 5006),
                    F: p.o(function () {
                      return (
                        r.viewDetailClick &&
                        r.viewDetailClick.apply(r, arguments)
                      );
                    }, 5007),
                  }
                : {},
              { G: p.n("skin-".concat(a.theme)), H: a.theme }
            )
          : {},
        {
          j:
            1 === i.grayUserStatus &&
            r.stockName &&
            r.stockName.length > 0 &&
            r.hasContent,
        }
      );
    },
  ],
  ["__scopeId", "data-v-c6078028"],
]);
wx.createComponent(w);
