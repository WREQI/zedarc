var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  o = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  i = function (t, o, n) {
    return o in t
      ? e(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[o] = n);
  },
  l = require("../../../api/detailindex.js"),
  r = require("../../../utils/common.js"),
  h = require("../../../../stock-hq-data/index.js"),
  d = require("../../../../../../../common/vendor.js"),
  u = {
    name: "HsStockDetailList",
    inject: { hqBridge: {}, isZxgMiniApp: { default: !1 } },
    components: {
      PurchaseButton: function () {
        return "../PurchaseButton.js";
      },
      TopHeader: function () {
        return "../Header.js";
      },
      MoreSingleColumnItem: function () {
        return "../MoreSingleColumnItem.js";
      },
      Tabs: function () {
        return "../../common/Tab/Tabbar.js";
      },
      Tab: function () {
        return "../../common/Tab/Tab.js";
      },
      f2: function () {
        return "../../../utils/f2-fit/f2.js";
      },
      TeachPopBlock: function () {
        return "../../common/TeachPopBlock.js";
      },
    },
    props: ["stockdata", "isPurchase", "userInfo", "theme"],
    data: function () {
      return {
        info: { name: "--", symbol: "--", code: "--", buttontitle: "去看详情" },
        env: this.hqBridge.ENV,
        basicData: [
          { desc: "申购代码", key: "sgdm" },
          { desc: "发行价", key: "price" },
          { desc: "发行市盈率", key: "syl" },
          { desc: "发行市净率", key: "pbr" },
          { desc: "行业市盈率", key: "pt_info_syl" },
          { desc: "行业市净率", key: "pt_info_pbr" },
          { desc: "净利润增长率", key: "NetProfitGrowRate" },
          { desc: "所属行业", key: "pt_info_name" },
          { desc: "营业收入", key: "OperatingRevenue" },
          { desc: "净利润", key: "NetProfit" },
          { desc: "净资产收益率", key: "ROEWeighted" },
          { desc: "毛利率", key: "GrossIncomeRatio" },
        ],
        issueData: [
          { desc: "发行总量", key: "volume", unit: "万股" },
          { desc: "申购数量上限", key: "sgsx", unit: "万股" },
          { desc: "网上发行量", key: "online_volume", unit: "万股" },
          { desc: "申购资金上限", key: "money_up_limit", unit: "万" },
          { desc: "中签率", key: "wszql" },
        ],
        showAllGsjj: !1,
        showAllJjfw: !1,
        stockmodel: {},
        updateInfo: {},
        winWidth: 375,
        showGsjjExtendBtn: !1,
        showJjfwExtendBtn: !1,
        hydbCurTabs: [
          { type: "mgsy", name: "每股收益" },
          { type: "yysr", name: "营业收入" },
          { type: "jlr", name: "净利润" },
          { type: "mgjzc", name: "每股净资产" },
          { type: "jzcsyl", name: "净资产收益率" },
        ],
        hydbChartData: [],
        showHydb: !1,
        hydhHash: "",
        companyHyName: "",
        hydbCurTabIndex: 0,
        reportedScroll: !1,
        teachBlockShow: !1,
        teachContent: "",
        teachTips: "",
        teachTitle: "",
      };
    },
    computed: {
      showTip: function () {
        return function (t) {
          return (
            "price" === t ||
            "syl" === t ||
            "NetProfitGrowRate" === t ||
            "NetProfit" === t
          );
        };
      },
      showZhaoGuInstruction: function () {
        return (
          "wzq" === this.hqBridge.ENV ||
          "app" === this.hqBridge.ENV ||
          "mp" === this.hqBridge.ENV
        );
      },
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.getDetailData(), this.getHyData(), this.$nextTick(function () {});
    },
    mounted: function () {
      this.$nextTick(function () {});
    },
    destroyed: function () {},
    methods: {
      handleScroll: function () {
        this.hqBridge.report("hq.dx_newstock_detail.page_scroll");
      },
      getDetailData: function () {
        var t = this,
          e = { symbol: this.stockdata.symbol };
        l.getHSNewStockDetail(this.hqBridge, e).then(function (e) {
          if (e && 0 == +e.code) {
            t.stockmodel = e.data;
            var o = e.data.pt_info || {},
              n = o.name,
              a = o.syl,
              s = o.pbr;
            n &&
              ((t.stockmodel.pt_info_name = n),
              (t.stockmodel.pt_info_syl = a),
              (t.stockmodel.pt_info_pbr = s)),
              (t.updateInfo = {
                name: t.convertString(t.stockdata.name),
                symbol: t.filterSymbol(t.stockdata.symbol),
                code: t.stockdata.symbol,
                sgrq: t.convertString(t.stockdata.sgrq),
                zqgbrq: t.convertString(t.stockdata.zqh),
                ssrq: t.convertString(t.stockdata.ssrq),
                buttontitle: "去看详情",
              });
            var c = t.stockmodel.jjfw || "",
              i = t.stockmodel.gsjj || "",
              l = t.winWidth / 14;
            (t.showGsjjExtendBtn = i.length / l > 3.9),
              (t.showJjfwExtendBtn = c.length / l > 3.9);
          }
        });
      },
      getHyData: function () {
        var t = this,
          e = this.hydbCurTabs[this.hydbCurTabIndex].type || "mgsy",
          o = { code: this.stockdata.symbol, type: e, ipo: 1 };
        l.getStockHyDetail(this.hqBridge, o).then(function (o) {
          if (o && 0 == +o.code && o.data) {
            var n =
              "mgsy" === e || "mgjzc" === e ? "元" : "jzcsyl" === e ? "%" : "";
            t.companyHyName = o.data.hyname || "";
            var a = [
              {
                action: "     行业均值",
                value: o.data.hy[e] ? o.data.hy[e] : 0,
                showvalue: o.data.hy["f_".concat(e)]
                  ? "".concat(o.data.hy["f_".concat(e)]).concat(n)
                  : "--",
                isfu: +o.data.hy[e] < 0,
              },
              {
                action: "     ".concat(t.stockdata.name),
                value: o.data.stock[e] ? o.data.stock[e] : 0,
                showvalue: o.data.stock["f_".concat(e)]
                  ? "".concat(o.data.stock["f_".concat(e)]).concat(n)
                  : "--",
                isfu: +o.data.stock[e] < 0,
              },
            ];
            o.data.hylist.map(function (o, s) {
              (s < 3 || o.stockcode === t.scode) &&
                a.push({
                  action: "0".concat(s + 1, " ").concat(o.stockName),
                  value: o[e] ? o[e] : 0,
                  showvalue: o["f_".concat(e)]
                    ? "".concat(o["f_".concat(e)]).concat(n)
                    : "--",
                  isfu: +o[e] < 0,
                });
            }),
              a &&
                a.length > 0 &&
                ((t.hydbChartData = a),
                (t.showHydb = !0),
                (t.hydhHash = Math.random()));
          }
        });
      },
      onSelectHyTab: function (t) {
        (this.hydbCurTabIndex = this.hydbCurTabs.findIndex(function (e) {
          return e.name === t;
        })),
          this.getHyData(),
          this.hqBridge.report(
            "hq.dx_newstock_detail.hytab_".concat(
              this.hydbCurTabs[this.hydbCurTabIndex] &&
                this.hydbCurTabs[this.hydbCurTabIndex].type,
              "_click"
            )
          );
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
      showStockTip: function (t) {
        var e = this.stockmodel.alertInfo || {};
        !e ||
          e.length <= 0 ||
          ((this.teachTitle = ""
            .concat(this.updateInfo.name, "(")
            .concat(this.updateInfo.symbol, ")")),
          (this.teachContent = [
            { title: "发行价", context: e.price && e.price.alertText },
            { title: "发行市盈率", context: e.syl && e.syl.alertText },
            {
              title: "净利润增长率",
              context: e.NetProfitGrowRate && e.NetProfitGrowRate.alertText,
            },
            { title: "净利润", context: e.NetProfit && e.NetProfit.alertText },
          ]),
          (this.teachTips =
            "风险说明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。"),
          this.popTeach(),
          this.hqBridge.report(
            "hq.dx_newstock_detail."
              .concat(t && t.toLowerCase(), "_")
              .concat(e[t] && e[t].alert ? "red" : "gray", "_i_click")
          ));
      },
      checkPlateDetail: function (t) {
        var e, o, n, a;
        if ("pt_info_name" === t) {
          var s =
              (null == (o = null == (e = this.stockmodel) ? void 0 : e.pt_info)
                ? void 0
                : o.code) || "",
            c =
              (null == (a = null == (n = this.stockmodel) ? void 0 : n.pt_info)
                ? void 0
                : a.name) || "";
          if (s) {
            var i = h.utils.splitSymbol(s),
              l = i.market,
              d = i.scode;
            if (this.isZxgMiniApp) r.goToMiniAppQuote(l, d);
            else {
              if ("wzq" === this.hqBridge.ENV)
                this.hqBridge.routeTo({
                  path: "/plate/200/detail",
                  query: { plateId: s },
                });
              else if ("mini" === this.hqBridge.ENV)
                this.hqBridge.routeTo({
                  path: "/detail/plate",
                  query: { plateId: s },
                });
              else if ("oem" === this.hqBridge.ENV)
                this.hqBridge.routeTo({
                  path: "/detail",
                  query: { market: l, scode: d },
                });
              else if ("app" === this.hqBridge.ENV)
                this.hqBridge.routeTo({
                  url: "qqstock://detailstock/".concat(s, "/").concat(c),
                });
              else {
                if ("mp" !== this.hqBridge.ENV) return;
                this.hqBridge.routeTo({
                  url: "/pages/quote/quote?market=p&scode=".concat(d),
                });
              }
              this.hqBridge.report("hq.dx_newstock_detail.goto_plate_detail");
            }
          }
        }
      },
      pushToZhaoGuInstruction: function () {
        var t = this.stockdata.notice;
        t &&
          ("wzq" === this.hqBridge.ENV
            ? this.$router.push({
                path: "/information/detail",
                query: { id: t },
              })
            : "app" === this.hqBridge.ENV
            ? this.hqBridge.routeTo({
                url: "qqstock://stockhybrid/com.tencent.shy.news_zixuangu/index?id=".concat(
                  t
                ),
              })
            : "mp" === this.hqBridge.ENV &&
              this.hqBridge.routeTo({
                path: "/pages/newsCon/newsDetail/main",
                query: { id: t },
              }),
          this.hqBridge.report("hq.dx_newstock_detail.check_zgs_page"));
      },
      checkAllGsjj: function () {
        this.showGsjjExtendBtn &&
          ((this.showAllGsjj = !this.showAllGsjj),
          this.hqBridge.report(
            "hq.dx_newstock_detail.gsjj_".concat(
              this.showAllGsjj ? "unfold" : "fold",
              "_click"
            )
          ));
      },
      checkAllJjfw: function () {
        this.showJjfwExtendBtn &&
          ((this.showAllJjfw = !this.showAllJjfw),
          this.hqBridge.report(
            "hq.dx_newstock_detail.jyfw_".concat(
              this.showAllJjfw ? "unfold" : "fold",
              "_click"
            )
          ));
      },
      alertRedClass: function (t) {
        var e = this.stockmodel.alertInfo || {};
        return e[t] && e[t].alert ? "alert-red" : "";
      },
      filterSymbol: function (t) {
        var e = t.substring(0, 2);
        return "sh" === e || "sz" === e || "nq" === e ? t.slice(2) : "--";
      },
      convertString: function (t, e) {
        return void 0 === t || 0 === t.length || "" === t || "--" === t
          ? "--"
          : "".concat(t).concat(e || "");
      },
      drawHydbChart: function (e, l) {
        var r = this,
          h = this.hydbChartData,
          d = [];
        h = h.map(function (t) {
          return (
            d.push(Math.abs(t.value)),
            {
              action: t.action,
              value: Math.abs(t.value),
              showvalue: t.showvalue,
              isfu: t.isfu,
            }
          );
        });
        var u,
          p = Math.max.apply(Math, d),
          f = new e.Chart(
            ((u = (function (e, o) {
              for (var n in o || (o = {})) s.call(o, n) && i(e, n, o[n]);
              if (a) {
                var l,
                  r = t(a(o));
                try {
                  for (r.s(); !(l = r.n()).done; ) {
                    n = l.value;
                    c.call(o, n) && i(e, n, o[n]);
                  }
                } catch (t) {
                  r.e(t);
                } finally {
                  r.f();
                }
              }
              return e;
            })({}, l)),
            o(u, n({ padding: [10, 55, -5, 100] })))
          );
        f.axis("action", {
          grid: null,
          labelOffset: 100,
          label: {
            fill: "blue" === this.theme ? "#262E40" : "#fff",
            fillOpacity: 1,
            fontSize: 14,
            textAlign: "start",
            textBaseline: "middle",
            fontFamily: "stockFont",
          },
        }),
          f.axis("value", !1),
          f
            .source(h.reverse(), { value: { max: p + (5 * p) / 100 } })
            .coord({ transposed: !0 }),
          f.legend(!1),
          f.tooltip(!1),
          f
            .interval()
            .position("action*value")
            .size(12)
            .color("isfu", function (t) {
              return t ? "#1CAA3C" : "#E63535";
            }),
          h.map(function (t) {
            f.guide().text({
              position: [t.action, "max"],
              content: "".concat(t.showvalue),
              style: {
                textAlign: "right",
                fill: "blue" === r.theme ? "#262E40" : "#fff",
                fontSize: 14,
                fontFamily: "stockFont",
              },
              offsetX: 55,
            });
          }),
          f.render();
      },
    },
  };
Array ||
  (
    d.resolveComponent("TopHeader") +
    d.resolveComponent("MoreSingleColumnItem") +
    d.resolveComponent("Tab") +
    d.resolveComponent("Tabs") +
    d.resolveComponent("f2") +
    d.resolveComponent("PurchaseButton") +
    d.resolveComponent("TeachPopBlock")
  )();
var p = d._export_sfc(u, [
  [
    "render",
    function (t, e, o, n, a, s) {
      return d.e(
        {
          a: d.p({ info: a.updateInfo }),
          b: d.n(s.isMp ? "separator-container-mp" : ""),
          c: o.stockdata.notice && s.showZhaoGuInstruction,
        },
        o.stockdata.notice && s.showZhaoGuInstruction
          ? {
              d: d.n("block-title-right-".concat(a.env)),
              e: d.o(function () {
                return (
                  s.pushToZhaoGuInstruction &&
                  s.pushToZhaoGuInstruction.apply(s, arguments)
                );
              }, 2497),
            }
          : {},
        {
          f: d.f(a.basicData, function (t, e, o) {
            return d.e(
              {
                a: d.t(t.desc),
                b: d.t(a.stockmodel[t.key] || "--"),
                c: a.stockmodel[t.key] && "--" !== a.stockmodel[t.key],
              },
              a.stockmodel[t.key] && "--" !== a.stockmodel[t.key]
                ? { d: d.t(t.unit || "") }
                : {},
              { e: s.showTip(t.key) },
              s.showTip(t.key)
                ? d.e(
                    { f: "alert-red" === s.alertRedClass(t.key) },
                    "alert-red" === s.alertRedClass(t.key)
                      ? {
                          g: d.o(
                            function (e) {
                              return s.showStockTip(t.key, t.desc);
                            },
                            2498,
                            t.key
                          ),
                        }
                      : {
                          h: d.o(
                            function (e) {
                              return s.showStockTip(t.key, t.desc);
                            },
                            2499,
                            t.key
                          ),
                        }
                  )
                : {},
              {
                i: d.n("pt_info_name" === t.key ? "num-link" : ""),
                j: d.n(s.alertRedClass(t.key)),
                k: d.o(
                  function (e) {
                    return s.checkPlateDetail(t.key);
                  },
                  2500,
                  t.key
                ),
                l: d.n(e % 2 == 0 ? "item-left" : "item-right"),
                m: t.key,
              }
            );
          }),
          g: d.n("info-row-item-".concat(a.env)),
          h: d.n(s.isMp ? "info-block-mp" : ""),
          i: d.n(s.isMp ? "separator-container-mp" : ""),
          j: d.f(a.issueData, function (t, e, o) {
            return d.e(
              {
                a: d.t(t.desc),
                b: d.t("" !== t.key ? a.stockmodel[t.key] || "--" : ""),
                c: a.stockmodel[t.key] && "--" !== a.stockmodel[t.key],
              },
              a.stockmodel[t.key] && "--" !== a.stockmodel[t.key]
                ? { d: d.t(t.unit || "") }
                : {},
              { e: d.n(e % 2 == 0 ? "item-left" : "item-right"), f: t.key }
            );
          }),
          k: d.n("info-row-item-".concat(a.env)),
          l: !a.stockmodel.last || "--" === a.stockmodel.last,
        },
        a.stockmodel.last && "--" !== a.stockmodel.last
          ? { n: d.p({ item: { name: "中签号", value: a.stockmodel.last } }) }
          : { m: d.n("info-row-item-".concat(a.env)) },
        {
          o: d.n(s.isMp ? "info-block-mp" : ""),
          p: d.n(s.isMp ? "separator-container-mp" : ""),
          q: a.stockmodel.gsjj,
        },
        a.stockmodel.gsjj
          ? d.e(
              {
                r: d.t(a.stockmodel.gsjj),
                s: a.showGsjjExtendBtn && !a.showAllGsjj,
              },
              a.showGsjjExtendBtn && !a.showAllGsjj
                ? d.e({ t: !a.showAllGsjj }, (a.showAllGsjj, {}), {
                    v: d.t(a.showAllGsjj ? "收起" : "展开"),
                    w: d.o(function () {
                      return (
                        s.checkAllGsjj && s.checkAllGsjj.apply(s, arguments)
                      );
                    }, 2501),
                  })
                : {},
              {
                x: d.n(a.showAllGsjj ? "unfold-content" : "fold-content"),
                y: d.o(function () {
                  return s.checkAllGsjj && s.checkAllGsjj.apply(s, arguments);
                }, 2502),
                z: a.showAllGsjj,
              },
              a.showAllGsjj
                ? {
                    A: d.t(a.showAllGsjj ? "收起" : "展开"),
                    B: d.o(function () {
                      return (
                        s.checkAllGsjj && s.checkAllGsjj.apply(s, arguments)
                      );
                    }, 2503),
                  }
                : {},
              { C: d.n(s.isMp ? "info-block-mp" : "") }
            )
          : {},
        { D: a.stockmodel.gsjj },
        a.stockmodel.gsjj
          ? { E: d.n(s.isMp ? "separator-container-mp" : "") }
          : {},
        { F: a.stockmodel.jjfw },
        a.stockmodel.jjfw
          ? d.e(
              {
                G: d.t(a.stockmodel.jjfw),
                H: a.showJjfwExtendBtn && !a.showAllJjfw,
              },
              a.showJjfwExtendBtn && !a.showAllJjfw
                ? d.e({ I: !a.showAllJjfw }, (a.showAllJjfw, {}), {
                    J: d.t(a.showAllJjfw ? "收起" : "展开"),
                    K: d.o(function () {
                      return (
                        s.checkAllJjfw && s.checkAllJjfw.apply(s, arguments)
                      );
                    }, 2504),
                  })
                : {},
              {
                L: d.n(a.showAllJjfw ? "unfold-content" : "fold-content"),
                M: d.o(function () {
                  return s.checkAllJjfw && s.checkAllJjfw.apply(s, arguments);
                }, 2505),
                N: a.showAllJjfw,
              },
              a.showAllJjfw
                ? d.e({ O: !a.showAllJjfw }, (a.showAllJjfw, {}), {
                    P: d.t(a.showAllJjfw ? "收起" : "展开"),
                    Q: d.o(function () {
                      return (
                        s.checkAllJjfw && s.checkAllJjfw.apply(s, arguments)
                      );
                    }, 2506),
                  })
                : {},
              { R: d.n(s.isMp ? "info-block-mp" : "") }
            )
          : {},
        { S: a.stockmodel.jjfw },
        a.stockmodel.jjfw
          ? { T: d.n(s.isMp ? "separator-container-mp" : "") }
          : {},
        {
          U:
            a.stockmodel.comparable_company &&
            a.stockmodel.comparable_company.length > 0 &&
            a.companyHyName,
        },
        a.stockmodel.comparable_company &&
          a.stockmodel.comparable_company.length > 0 &&
          a.companyHyName
          ? d.e(
              {
                V: d.t(a.companyHyName),
                W: d.n("block-title-right-".concat(a.env)),
                X: s.isMp,
              },
              s.isMp
                ? {
                    Y: d.f(a.hydbCurTabs, function (t, e, o) {
                      return d.e(
                        { a: d.t(t.name), b: a.hydbCurTabIndex === e },
                        (a.hydbCurTabIndex, {}),
                        {
                          c: d.n(a.hydbCurTabIndex === e ? "active" : ""),
                          d: d.o(
                            function (e) {
                              return s.onSelectHyTab(t.name);
                            },
                            2507,
                            t.key
                          ),
                          e: t.key,
                        }
                      );
                    }),
                  }
                : {},
              { Z: !s.isMp },
              s.isMp
                ? {}
                : {
                    aa: d.f(a.hydbCurTabs, function (t, e, o) {
                      return {
                        a: d.t(t.name),
                        b: t.key,
                        c: "hytab-".concat(e),
                        d: "db6c157a-3-" + o + ",db6c157a-2",
                        e: d.p({ name: t.name, id: "hytab-".concat(e) }),
                      };
                    }),
                    ab: d.o(s.onSelectHyTab, 2508),
                    ac: d.p({
                      indicator: !1,
                      index: a.hydbCurTabs[a.hydbCurTabIndex].name,
                      isScroll: !0,
                    }),
                  },
              { ad: !s.isMp },
              (s.isMp, {}),
              { ae: a.showHydb },
              a.showHydb
                ? {
                    af: d.sr("hydbChart", "db6c157a-4"),
                    ag: d.p({
                      chartId: "hydbChart",
                      cClass: "hydbChartClass",
                      cStyle: "width: 642rpx; height: 345rpx",
                      onInit: s.drawHydbChart,
                      refreshHash: a.hydhHash,
                    }),
                  }
                : {},
              { ah: d.n(s.isMp ? "info-block-mp" : "") }
            )
          : {},
        {
          ai:
            a.stockmodel.comparable_company &&
            a.stockmodel.comparable_company.length > 0 &&
            a.companyHyName,
        },
        a.stockmodel.comparable_company &&
          a.stockmodel.comparable_company.length > 0 &&
          a.companyHyName
          ? { aj: d.n(s.isMp ? "separator-container-mp" : "") }
          : {},
        {
          ak:
            a.stockmodel.capitalInvestInfo &&
            a.stockmodel.capitalInvestInfo.length > 0,
        },
        a.stockmodel.capitalInvestInfo &&
          a.stockmodel.capitalInvestInfo.length > 0
          ? {
              al: d.n("mj-title-".concat(a.env)),
              am: d.n("mj-title-".concat(a.env)),
              an: d.f(a.stockmodel.capitalInvestInfo, function (t, e, o) {
                return { a: d.t(t.InvestProject), b: d.t(t.PlannedSum), c: e };
              }),
              ao: d.n(s.isMp ? "info-block-mp" : ""),
            }
          : {},
        { ap: s.isMp },
        (s.isMp, {}),
        { aq: o.isPurchase && "mini" !== a.env },
        o.isPurchase && "mini" !== a.env
          ? { ar: d.p({ type: "0", userInfo: o.userInfo, model: t.model }) }
          : {},
        { as: a.teachContent },
        a.teachContent
          ? {
              at: d.o(s.hideTeach, 2509),
              av: d.p({
                visible: a.teachBlockShow,
                title: a.teachTitle,
                content: a.teachContent,
                tips: a.teachTips,
              }),
            }
          : {},
        {
          aw: d.n("containter-detail-".concat(a.env)),
          ax: d.n(o.isPurchase ? "" : "no-btn"),
        }
      );
    },
  ],
  ["__scopeId", "data-v-db6c157a"],
]);
wx.createComponent(p);
