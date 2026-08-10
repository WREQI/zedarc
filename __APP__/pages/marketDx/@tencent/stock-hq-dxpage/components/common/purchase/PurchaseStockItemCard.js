require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../throttle-debounce/esm/index.js"),
  e = require("../../../utils/common.js"),
  a = require("../../../utils/route.js"),
  i = require("../../../../../../../common/vendor.js"),
  o = {
    name: "StockItemCard",
    inject: ["hqBridge"],
    components: {
      MarketIcon: function () {
        return "../MarketIcon.js";
      },
    },
    props: {
      data: { type: Object, default: function () {} },
      titleConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      tipConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      type: { type: String, default: "stock" },
      pos: { type: Number, default: 0 },
      reportName: { type: String, default: "" },
    },
    data: function () {
      return { tipTimeout: null, env: this.hqBridge.ENV };
    },
    methods: {
      alertRedClass: function (t) {
        var e = this.data.alertInfo || {};
        return e[t] && e[t].alert ? "alert-red" : "";
      },
      isShowTip: function (t) {
        return this.tipConfig[t] && 0 === this.pos;
      },
      goToStockDetail: t.debounce(300, function (t) {
        t.stopPropagation(),
          this.data.toToDetail
            ? a.gotoQuoteDetail(this.hqBridge, this.data, !1)
            : a.gotoHangqingxinzhaiDetail(this.hqBridge, this.data),
          ("wzq" !== this.env && "app" !== this.env && "mp" !== this.env) ||
            this.hqBridge.report(
              "hq.daxin_calendar_hstab.".concat(this.reportName, "_click")
            );
      }),
      gotoHangqingxinzhaiDetail: function () {
        "app" === this.env
          ? a.gotoQuoteDetail(this.hqBridge, this.data, !1)
          : a.gotoHangqingxinzhaiDetail(this.hqBridge, this.data);
      },
      showTip: function (t) {
        if (this.isShowTip(t)) {
          var e = ""
            .concat(this.data.listName, "(")
            .concat(this.data.listCode, ")");
          this.$emit(
            "showTeachPop",
            e,
            [
              {
                title: "参考上市价",
                context:
                  "基于可转债转股价值、评级等数据，通过算法模型计算得出参考上市价，上市前每日更新数据。",
              },
              {
                title: "参考收益率",
                context:
                  "参考收益率=(参考上市价-发行价)/发行价×100%，参考上市价基于可转债转股价值、评级等数据基于数学模型计算， 在上市前每日更新。",
              },
            ],
            "风险说明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。"
          ),
            1 === t &&
              this.hqBridge.report(
                "hq.daxin_calendar.hstab.bond_jrsg_predict_price_tip_click"
              ),
            2 === t &&
              this.hqBridge.report(
                "hq.daxin_calendar.hstab.bond_jrsg_predict_profit_rate_tip_click"
              );
        }
      },
      showStockTip: function (t, e) {
        var a = this.data.alertInfo || {},
          i = ""
            .concat(this.data.listName, "(")
            .concat(this.data.listCode, ")"),
          o = [
            { title: "发行价", context: a.price && a.price.alertText },
            { title: "发行市盈率", context: a.syl && a.syl.alertText },
          ];
        this.$emit(
          "showTeachPop",
          i,
          o,
          "风险说明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。"
        ),
          this.hqBridge.report(
            "hq.daxin_calendar.hstab.ksg_"
              .concat(t && t.toLowerCase(), "_")
              .concat(a[t] && a[t].alert ? "red" : "gray", "_i_click")
          );
      },
      setColorClass: function (t, a) {
        return a ? e.setColor(t) : "";
      },
    },
  };
Array || i.resolveComponent("market-icon")();
var n = i._export_sfc(o, [
  [
    "render",
    function (t, e, a, o, n, r) {
      return i.e(
        {
          a: i.t(a.data.listName),
          b: i.p({ iconType: a.data.listTag, stockType: a.data.gp_type }),
          c: i.t(a.data.listCode),
          d: i.n("stock-code-".concat(n.env)),
          e: i.n("stock-name-wrapper-".concat(n.env)),
          f: "stock" === a.type && ["wzq", "app", "mp"].includes(n.env),
        },
        "stock" === a.type && ["wzq", "app", "mp"].includes(n.env)
          ? i.e(
              {
                g: i.t(a.data.price || "--"),
                h: "alert-red" === r.alertRedClass("price"),
              },
              (r.alertRedClass("price"), {}),
              {
                i: i.n(r.alertRedClass("price")),
                j: i.o(function (t) {
                  return r.showStockTip("price", "发行价");
                }, 4100),
                k: i.t(a.data.syl || "--"),
                l: "alert-red" === r.alertRedClass("syl"),
              },
              (r.alertRedClass("syl"), {}),
              {
                m: i.n(r.alertRedClass("syl")),
                n: i.o(function (t) {
                  return r.showStockTip("syl", "发行市盈率");
                }, 4101),
                o: i.t(a.data.sgsx || "--"),
                p: a.data.sgsx,
              },
              (a.data.sgsx, {}),
              {
                q: i.t(
                  a.data.pt_info && a.data.pt_info.syl
                    ? a.data.pt_info.syl
                    : "--"
                ),
                r: i.t(a.data.volume || "--"),
                s: a.data.volume,
              },
              (a.data.volume, {}),
              {
                t: i.t(
                  a.data.pt_info && a.data.pt_info.name
                    ? a.data.pt_info.name
                    : "--"
                ),
                v: i.n("detail-wrapper-stock-".concat(n.env)),
              }
            )
          : i.e(
              {
                w: i.t(a.data.list0 || "--"),
                x: i.t(a.titleConfig[0]),
                y: i.n("detail-desc-".concat(n.env)),
                z: i.t(a.data.list1 || "--"),
                A: i.t(a.titleConfig[1]),
                B: i.n("detail-desc-".concat(n.env)),
                C: r.isShowTip(1),
              },
              (r.isShowTip(1), {}),
              {
                D: i.o(function (t) {
                  return r.showTip(1);
                }, 4102),
                E: i.t(a.data.list2),
                F: i.n(
                  "detail-num-"
                    .concat(n.env, "-")
                    .concat(a.type, "-right-column")
                ),
                G: i.n(r.setColorClass(a.data.list2, a.data.colorList[2])),
                H: i.t(a.titleConfig[2]),
                I: i.n("detail-desc-".concat(n.env)),
                J: r.isShowTip(2),
              },
              (r.isShowTip(2), {}),
              {
                K: i.o(function (t) {
                  return r.showTip(2);
                }, 4103),
              }
            ),
        {
          L: i.n("card-item-wrapper-".concat(n.env)),
          M: i.n("card-item-wrapper-".concat(n.env, "-").concat(a.type)),
          N: i.o(function () {
            return r.goToStockDetail && r.goToStockDetail.apply(r, arguments);
          }, 4104),
        }
      );
    },
  ],
  ["__scopeId", "data-v-f3636e9a"],
]);
wx.createComponent(n);
