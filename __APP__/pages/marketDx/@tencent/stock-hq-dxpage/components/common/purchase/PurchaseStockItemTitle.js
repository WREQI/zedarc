var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "StockItemTitle",
    inject: ["hqBridge"],
    props: {
      data: { type: Array, default: null },
      titleName: { type: String, default: null },
      cellId: { type: String, default: "" },
      market: { type: String, default: "" },
      type: { type: String, default: "stock" },
      tipConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return { hackTimeout: null, env: this.hqBridge.ENV };
    },
    deactivated: function () {
      clearTimeout(this.hackTimeout);
    },
    methods: {
      getTipShowstate: function (t) {
        return this.tipConfig[t];
      },
      showTip: function (t) {
        if (this.getTipShowstate(t)) {
          var e =
              ("jrgbzq" === this.cellId && 2 === t && this.tipConfig[t]) ||
              ("jjfx" === this.cellId && 2 === t && this.tipConfig[t]) ||
              ("wss" === this.cellId && 1 === t && this.tipConfig[t]),
            i = "jrgbzq" === this.cellId && 3 === t && this.tipConfig[t],
            a = "",
            n = "";
          e &&
            ((a = "参考上市价"),
            (n = [
              {
                title: "",
                context:
                  "基于可转债转股价值、评级等数据，通过算法模型计算得出参考上市价，上市前每日更新数据。",
              },
            ]),
            this.hqBridge.report(
              "hq.daxin_calendar.hstab.bond_".concat(
                this.cellId,
                "_predict_price_tip_click"
              )
            )),
            i &&
              ((a = "顶格中签率"),
              (n = [
                {
                  title: "",
                  context:
                    "顶格中签率指在可转债顶格申购数量10000张时的中签率，顶格中签率=中签率x1000",
                },
              ]),
              this.hqBridge.report(
                "hq.daxin_calendar.hstab.bond_".concat(
                  this.cellId,
                  "_dgzql_tip_click"
                )
              )),
            this.$emit(
              "showTeachPop",
              a,
              n,
              "风险说明：本页面信息基于证券公开市场信息汇总或者证券投资品种历史数据产生，仅供投资者参考，不构成投资分析、预测或者建议。证券的过往业绩不预示未来表现。市场有风险，投资需谨慎。"
            );
        }
      },
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, a, n, o, r) {
        return t.e(
          {
            a: t.t(a.titleName),
            b: t.n("".concat(o.env, "-list-text")),
            c: t.t(a.data[0]),
            d: r.getTipShowstate(1),
          },
          (r.getTipShowstate(1), {}),
          {
            e: t.n("".concat(o.env, "-list-text")),
            f: t.o(function (t) {
              return r.showTip(1);
            }, 4095),
            g: t.n("us" === a.market ? "us-list-col1" : ""),
            h: t.n("参考上市价" === a.data[0] ? "ckssj-list-col" : ""),
            i: !Array.isArray(a.data[1]),
          },
          Array.isArray(a.data[1])
            ? {
                o: t.t(a.data[1][0]),
                p: t.n("top-".concat(o.env)),
                q: t.t(a.data[1][1]),
                r: t.n("bottom-".concat(o.env)),
                s: t.n("us" === a.market ? "us-list-col2" : ""),
              }
            : t.e(
                { j: t.t(a.data[1]), k: r.getTipShowstate(2) },
                (r.getTipShowstate(2), {}),
                {
                  l: t.n("".concat(o.env, "-list-text")),
                  m: t.o(function (t) {
                    return r.showTip(2);
                  }, 4096),
                  n: t.n("us" === a.market ? "us-list-col2" : ""),
                }
              ),
          { t: !Array.isArray(a.data[2]) },
          Array.isArray(a.data[2])
            ? {
                A: t.t(a.data[2][0]),
                B: t.n("top-".concat(o.env)),
                C: t.t(a.data[2][1]),
                D: t.n("bottom-".concat(o.env)),
                E: t.n("us" === a.market ? "us-list-col3" : ""),
              }
            : t.e(
                { v: t.t(a.data[2]), w: r.getTipShowstate(3) },
                (r.getTipShowstate(3), {}),
                {
                  x: t.n("".concat(o.env, "-list-text")),
                  y: t.o(function (t) {
                    return r.showTip(3);
                  }, 4097),
                  z: t.n("us" === a.market ? "us-list-col3" : ""),
                }
              ),
          { F: t.n("stock-item-title-container-".concat(o.env)) }
        );
      },
    ],
    ["__scopeId", "data-v-0f5fe7a8"],
  ]);
wx.createComponent(i);
