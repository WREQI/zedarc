var e = require("../../../api/detailindex.js"),
  t = require("../../../utils/common.js"),
  o = require("../../../../../../../common/vendor.js"),
  n = {
    name: "HsBondDetailList",
    inject: ["hqBridge"],
    components: {
      DoubleColumnItem: function () {
        return "../DoubleColumnItem.js";
      },
      MoreSingleColumnItem: function () {
        return "../MoreSingleColumnItem.js";
      },
      PurchaseButton: function () {
        return "../PurchaseButton.js";
      },
      TopHeader: function () {
        return "../Header.js";
      },
      TeachPopBlock: function () {
        return "../../common/TeachPopBlock.js";
      },
    },
    data: function () {
      return {
        dataSource: [],
        space: 90,
        info: { name: "--", symbol: "--", code: "--" },
        model: {},
        env: this.hqBridge.ENV,
        isDataReady: !1,
        teachBlockShow: !1,
        teachContent: "",
        teachTips: "",
        teachTitle: "",
      };
    },
    props: {
      stockmodel: { type: Object, default: function () {} },
      isPurchase: { type: Boolean, require: !1 },
      userInfo: { type: Object, default: function () {} },
    },
    computed: {
      updateInfo: function () {
        var e,
          t,
          o,
          n,
          i,
          s,
          a = decodeURIComponent(
            null == (e = this.stockmodel) ? void 0 : e.name
          );
        return {
          name: this.convertString(a),
          symbol: this.filterSymbol(
            null == (t = this.stockmodel) ? void 0 : t.symbol
          ),
          code: null == (o = this.stockmodel) ? void 0 : o.symbol,
          sgrq: this.convertString(
            null == (n = this.model.purchase_info) ? void 0 : n.sgrq
          ),
          zqgbrq: this.convertString(
            null == (i = this.model.purchase_info) ? void 0 : i.zqhgbr
          ),
          ssrq: this.convertString(
            null == (s = this.model.purchase_info) ? void 0 : s.ssrq
          ),
          buttontitle: "去看详情",
        };
      },
      showPurchaseInfoRow3: function () {
        return "wzq" === this.env || "app" === this.env || "mp" === this.env;
      },
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.loadData(),
        this.hqBridge.report("hq.daxin_calendar.hstab.bond_exposure");
    },
    methods: {
      showTeachPop: function (e) {
        (this.teachTitle = ""
          .concat(this.updateInfo.name, "(")
          .concat(this.updateInfo.symbol, ")")),
          (this.teachContent = [
            {
              title: "顶格中签率",
              context:
                "顶格中签率指在可转债顶格申购数量10000张时的中签率，顶格中签率=中签率x1000",
            },
            {
              title: "参考上市价",
              context:
                "基于可转债转股价值、评级等数据，通过算法模型计算得出参考上市价，上市前每日更新数据。",
            },
          ]),
          (this.teachTips =
            "风险说明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。"),
          this.popTeach(),
          this.hqBridge.report(
            "hq.daxin_calendar.hstab.bond_detail_".concat(
              e.toLowerCase(),
              "_tip_click"
            )
          );
      },
      popTeach: function () {
        this.teachBlockShow = !0;
      },
      hideTeach: function () {
        var e = this;
        (this.teachBlockShow = !1),
          setTimeout(function () {
            e.teachContent = "";
          }, 300);
      },
      loadData: function () {
        var t = this,
          o = { symbol: this.stockmodel.symbol, app: "wzq" };
        e.getHSNewConvertibleBondDetail(this.hqBridge, o).then(function (e) {
          (t.isDataReady = !0),
            (t.model = e.data),
            (t.dataSource = []),
            t.addUnderlyingStockDataSourceList(),
            t.addPurchaseInfoDataSourceList();
        });
      },
      filterSymbol: function (e) {
        var t = e.substring(0, 2);
        return "sh" === t || "sz" === t || "nq" === t ? e.slice(2) : "--";
      },
      convertString: function (e) {
        return null === e || "" === e || "--" === e || void 0 === e ? "--" : e;
      },
      isShowSingleMoreColumn: function (e) {
        return e === (this.showPurchaseInfoRow3 ? 9 : 8);
      },
      isShowTwoColumn: function (e) {
        return e <= (this.showPurchaseInfoRow3 ? 8 : 7);
      },
      isShowSeparator: function (e, t) {
        return e === t;
      },
      addUnderlyingStockDataSourceList: function () {
        var e = {
            leftcolum: {
              name: "正股名称",
              value: this.model.underlying_stock.name,
              code: this.model.underlying_stock.underlying_code,
              isclick: !0,
              space: this.space - 20,
            },
            rightcolum: {
              name: "正股股价",
              value: this.numFormatter(
                this.model.underlying_stock.price,
                2,
                ""
              ),
              space: this.space,
            },
          },
          t = {
            leftcolum: {
              name: "转股价",
              value: this.numFormatter(this.model.underlying_stock.zgj, 2, ""),
              space: this.space - 20,
            },
            rightcolum: {
              name: "溢价率",
              value: this.numFormatter(this.model.underlying_stock.yjl, 2, "%"),
              space: this.space,
            },
          },
          o = {
            leftcolum: {
              name: "转股价值",
              value: this.model.underlying_stock.zgjz,
              space: this.space - 20,
            },
            rightcolum: {
              name: "债券评级",
              value: this.model.underlying_stock.zqpj,
              space: this.space,
            },
          },
          n = {
            leftcolum: {
              name: "到期日",
              value: this.model.underlying_stock.dqr,
              space: this.space - 20,
            },
            rightcolum: {
              name: "到期赎回价",
              value: this.numFormatter(
                this.model.underlying_stock.dqshj,
                2,
                ""
              ),
              space: this.space,
            },
          },
          i = {
            leftcolum: {
              name: "回售价",
              value: this.numFormatter(this.model.underlying_stock.hsj, 2, ""),
              space: this.space - 20,
            },
            rightcolum: {
              name: "赎回价",
              value: this.numFormatter(this.model.underlying_stock.shj, 2, ""),
              space: this.space,
            },
          };
        this.dataSource.push(e, t, o, n, i);
      },
      addPurchaseInfoDataSourceList: function () {
        var e,
          o = {
            leftcolum: {
              name: "申购代码",
              value: this.model.purchase_info.sgdm,
              space: this.space - 20,
            },
            rightcolum: {
              name: "配售代码",
              value: this.model.purchase_info.psdm,
              space: this.space,
            },
          },
          n = {
            leftcolum: {
              name: "发行价格",
              value: this.numFormatter(this.model.purchase_info.fxjg, 2, "元"),
              space: this.space - 20,
            },
            rightcolum: {
              name: "发行规模",
              value: this.numFormatter(this.model.purchase_info.fxgm, 2, "亿"),
              space: this.space,
            },
          },
          i = {
            leftcolum: {
              name: "中签率",
              value: this.percentFormatter(this.model.purchase_info.zql, 4),
              space: this.space - 20,
            },
            rightcolum: {
              name: "申购数量上限",
              value: this.numFormatter(this.model.purchase_info.sgsx, 0, "张"),
              space: this.space,
            },
          },
          s = this.model.purchase_info.zql;
        (s = parseFloat(s)), isNaN(s) || (s *= 1e3);
        var a = {
            leftcolum: {
              name: "顶格中签率",
              value: t.formatNum(s, 2, "%", !1, !0),
              space: this.space - 20,
              isShowTip: !0,
              tipType: "dgzql",
            },
            rightcolum: {
              name: "参考上市价",
              value: this.numFormatter(
                this.model.purchase_info.predict_price,
                3,
                ""
              ),
              space: this.space,
              isShowTip: !0,
              isShowBubble: !0,
              tipType: "predictPrice",
            },
          },
          c = {
            name: "中签号",
            value: this.convertString(this.model.purchase_info.zqh),
            space: this.space,
          };
        this.dataSource.push(o, n, i);
        var r = this.showPurchaseInfoRow3 ? [a, c] : [c];
        (e = this.dataSource).push.apply(e, r);
      },
      numFormatter: function (e, t, o) {
        var n = "";
        return (
          isNaN(e) || "" === e || "--" === e
            ? (n = "--")
            : ((n = parseFloat(e).toFixed(t)), (n = "".concat(n).concat(o))),
          n
        );
      },
      percentFormatter: function (e, t) {
        var o = "";
        return (
          isNaN(e) || "" === e || "--" === e
            ? (o = "--")
            : ((o = parseFloat(e).toFixed(t)), (o = "".concat(o, "%"))),
          o
        );
      },
    },
  };
Array ||
  (
    o.resolveComponent("TopHeader") +
    o.resolveComponent("DoubleColumnItem") +
    o.resolveComponent("MoreSingleColumnItem") +
    o.resolveComponent("PurchaseButton") +
    o.resolveComponent("TeachPopBlock")
  )();
var i = o._export_sfc(n, [
  [
    "render",
    function (e, t, n, i, s, a) {
      return o.e(
        {
          a: o.p({ info: a.updateInfo, type: "bond" }),
          b: o.f(s.dataSource, function (e, t, n) {
            return o.e(
              { a: a.isShowTwoColumn(t) },
              a.isShowTwoColumn(t)
                ? {
                    b: o.o(
                      function (e) {
                        return a.showTeachPop();
                      },
                      2510,
                      t
                    ),
                    c: "c0e3b133-1-" + n,
                    d: o.p({ item: e }),
                  }
                : {},
              { e: a.isShowSingleMoreColumn(t) },
              a.isShowSingleMoreColumn(t)
                ? { f: "c0e3b133-2-" + n, g: o.p({ item: e }) }
                : {},
              { h: a.isShowSeparator(t, 4) },
              (a.isShowSeparator(t, 4), {}),
              { i: t }
            );
          }),
          c: o.n(a.isMp ? "ul-wrapper-mp" : ""),
          d: a.isMp,
        },
        (a.isMp, {}),
        { e: s.isDataReady && n.isPurchase && "mini" !== s.env },
        s.isDataReady && n.isPurchase && "mini" !== s.env
          ? { f: o.p({ type: "1", userInfo: n.userInfo, model: a.updateInfo }) }
          : {},
        { g: s.teachContent },
        s.teachContent
          ? {
              h: o.o(a.hideTeach, 2511),
              i: o.p({
                visible: s.teachBlockShow,
                title: s.teachTitle,
                content: s.teachContent,
                tips: s.teachTips,
              }),
            }
          : {},
        {
          j: o.n(a.isMp ? "hs-bond-detail-list-mp" : ""),
          k: o.n(n.isPurchase ? "mp-min-height" : "no-btn"),
        }
      );
    },
  ],
  ["__scopeId", "data-v-c0e3b133"],
]);
wx.createComponent(i);
