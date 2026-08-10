require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../utils/trade.js"),
  e = require("../../../../../../../common/vendor.js"),
  a = {
    name: "StockItem",
    inheritAttrs: !1,
    inject: ["hqBridge"],
    components: {
      StockItemTitle: function () {
        return "./PurchaseStockItemTitle.js";
      },
      StockItemCell: function () {
        return "./PurchaseStockItemCell.js";
      },
      StockItemCard: function () {
        return "./PurchaseStockItemCard.js";
      },
      TitleBlock: function () {
        return "../TitleBlock.js";
      },
    },
    data: function () {
      return { items: null, innerAttachBottom: !1, env: this.hqBridge.ENV };
    },
    props: {
      yijiandaxin: { type: Boolean, default: !1 },
      itemData: { type: Object, default: function () {} },
      attachBottom: { type: Boolean, default: !1 },
      market: { type: String, default: "" },
      userInfo: { type: Object, default: function () {} },
      type: { type: String, default: "stock" },
    },
    computed: {
      initialData: function () {
        return "app" === this.env && "us" === this.market
          ? this.itemData.initialData
          : [];
      },
    },
    watch: {
      innerAttachBottom: function (t) {
        this.$emit("update:attachBottom", t);
      },
    },
    mounted: function () {
      this.$emit("loaded");
    },
    methods: {
      showTeachPop: function (t, e, a) {
        this.$emit("showTeachPop", t, e, a);
      },
      gotoQqpsTeachPage: function () {
        "wzq" === this.env &&
          this.hqBridge.routeTo({
            path: "/information/detail",
            query: { id: "SN20221124155337833c2440" },
          }),
          "app" === this.env &&
            this.hqBridge.routeTo({
              url: "qqstock://stockhybrid/com.tencent.shy.news_zixuangu/index?id=SN20221124155337833c2440",
            }),
          "mp" === this.env &&
            this.hqBridge.routeTo({
              path: "/pages/newsCon/newsDetail/main",
              query: { id: "SN20221124155337833c2440" },
            }),
          this.hqBridge.report(
            "hq.daxin_calendar.hstab.bond_jjfx_qqps_tip_click"
          );
      },
      gotoTradeTab: function (e) {
        var a = this;
        if (
          (e.stopPropagation(),
          "bond" === this.itemData.data[0].type
            ? this.hqBridge.report("hq.xingurili.hs_tab_yijiandaxin_bond")
            : this.hqBridge.report("hq.xingurili.hs_tab_yijiandaxin_stock"),
          "wzq" !== this.hqBridge.ENV)
        ) {
          var i = this.userInfo.userstate;
          i !== t.USERSTATE.HASACCOUNT && i !== t.USERSTATE.HASBUNDLE
            ? (this.hqBridge.report("hq.xingurili.hs_apply_click", {
                fchannel_id_fm_i: "Imz11p00ry017",
              }),
              this.$toast("您还没有开通股票账户，请先开通后再申购"),
              setTimeout(function () {
                a.hqBridge.routeTo({
                  path: "/wj_trade/apply/index",
                  query: { purchase_type: 2, stat_data: "Imz11p00ry017" },
                });
              }, 1e3))
            : this.hqBridge.routeTo({
                path: "/wj_trade/newstock/index",
                query: { purchase_type: 2, stat_data: "Imz11p00ry017" },
              });
        } else this.hqBridge.busEmit("wzq-yijiandaxin");
      },
      cellDataFormat: function (t) {
        for (
          var a = e.cloneDeep(this.itemData.data[t]), i = 0;
          i < this.itemData.dataConfig.length;
          i++
        ) {
          var n = this.itemData.dataConfig[i];
          if (n instanceof Array) {
            for (var o = 0; o < n.length; o++)
              a["list".concat(i)]
                ? a["list".concat(i)].push(this.itemData.data[t][n[o]])
                : (a["list".concat(i)] = [this.itemData.data[t][n[o]]]);
            a["list".concat(i)].push("curr-price");
          } else a["list".concat(i)] = this.itemData.data[t][n];
        }
        return a;
      },
      calcBtnPos: function (t, e) {
        if (this.$refs.qkPurchase) {
          var a = this.$refs.qkPurchase.offsetTop,
            i = this.$refs.qkPurchase.clientHeight,
            n = t;
          this.innerAttachBottom = a + i - n > e;
        }
      },
    },
  };
Array ||
  (
    e.resolveComponent("title-block") +
    e.resolveComponent("StockItemCard") +
    e.resolveComponent("StockItemTitle") +
    e.resolveComponent("StockItemCell")
  )();
var i = e._export_sfc(a, [
  [
    "render",
    function (t, a, i, n, o, r) {
      return e.e(
        { a: i.itemData },
        i.itemData
          ? e.e(
              { b: i.itemData.itemTitle },
              i.itemData.itemTitle
                ? e.e(
                    {
                      c:
                        ["wzq", "app", "mp"].includes(o.env) &&
                        "jjfx" === i.itemData.key &&
                        "bond" === i.type,
                    },
                    ["wzq", "app", "mp"].includes(o.env) &&
                      "jjfx" === i.itemData.key &&
                      "bond" === i.type
                      ? {
                          d: e.o(function () {
                            return (
                              r.gotoQqpsTeachPage &&
                              r.gotoQqpsTeachPage.apply(r, arguments)
                            );
                          }, 3044),
                        }
                      : {},
                    {
                      e: e.n("js-stock-item-title-".concat(i.itemData.key)),
                      f: e.p({ name: i.itemData.itemTitle }),
                    }
                  )
                : {},
              { g: i.itemData.yijiandaxin },
              i.itemData.yijiandaxin
                ? {
                    h: e.f(i.itemData.data, function (t, a, n) {
                      return e.e(
                        {
                          a: t.listName,
                          b: e.o(r.showTeachPop, 3045, t.listName),
                          c: "e18c9d77-1-" + n,
                          d: e.p({
                            data: r.cellDataFormat(a),
                            titleConfig: i.itemData.titleConfig,
                            tipConfig: i.itemData.tipConfig,
                            type: i.type,
                            pos: a,
                            reportName: i.itemData.reportName,
                          }),
                          e: a !== i.itemData.data.length - 1,
                        },
                        (i.itemData.data.length, {}),
                        { f: a }
                      );
                    }),
                    i: e.n("card-container-".concat(o.env)),
                    j: e.n("card-wrapper-".concat(o.env)),
                  }
                : e.e(
                    { k: i.itemData.titleName && i.itemData.titleConfig },
                    i.itemData.titleName && i.itemData.titleConfig
                      ? {
                          l: e.o(r.showTeachPop, 3046),
                          m: e.p({
                            titleName: i.itemData.titleName,
                            data: i.itemData.titleConfig,
                            tipConfig: i.itemData.tipConfig,
                            cellId: i.itemData.key,
                            market: i.market,
                            type: i.type,
                          }),
                        }
                      : {},
                    { n: i.itemData.dataConfig },
                    i.itemData.dataConfig
                      ? {
                          o: e.f(i.itemData.data, function (t, a, n) {
                            return e.e(
                              {
                                a: a,
                                b: "e18c9d77-3-" + n,
                                c: e.p({
                                  data: r.cellDataFormat(a),
                                  initialData: r.initialData[a],
                                  cellId: i.itemData.key,
                                  market: i.market,
                                  type: i.type,
                                  reportName: i.itemData.reportName,
                                }),
                                d:
                                  a !== i.itemData.data.length - 1 &&
                                  "bond" === i.type &&
                                  "jjfx" === i.itemData.key,
                              },
                              (a !== i.itemData.data.length - 1 &&
                                "bond" === i.type &&
                                i.itemData.key,
                              {}),
                              { e: a }
                            );
                          }),
                        }
                      : {}
                  ),
              { p: e.n("stock-item-".concat(o.env)) }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-e18c9d77"],
]);
wx.createComponent(i);
