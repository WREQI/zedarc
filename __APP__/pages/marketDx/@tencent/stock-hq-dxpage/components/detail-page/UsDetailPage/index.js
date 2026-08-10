var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "usDetailList",
    inject: ["hqBridge"],
    components: {},
    data: function () {
      return { dataSource: [] };
    },
    props: { model: { type: Object, default: function () {} } },
    computed: {
      stockName: function () {
        return this.convertstring(this.model.Name);
      },
      stockCode: function () {
        return this.convertstring(this.model.StockCode);
      },
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.addDataSourceList();
    },
    methods: {
      isShowSeparator: function (t, e) {
        return t === e;
      },
      addDataSourceList: function () {
        this.dataSource = [];
        var t = {
            name: "发行价",
            value: this.convertstring("".concat(this.model.OfferPrice)).replace(
              /\n/g,
              ""
            ),
          },
          e = {
            name: "发行量(股)",
            value: this.formatstring(this.model.SizeSharesOffer, " 百万"),
          },
          r = {
            name: "发行状态",
            value: this.convertstring(this.model.Status),
          },
          n = {
            name: "募集方式",
            value: this.convertstring(this.model.OfferMethod),
          },
          o = {
            name: "上市交易所",
            value: this.convertstring(this.model.ExchangeCountry, "港元"),
          },
          i = {
            name: "融资用途",
            value: this.convertstring(this.model.UseOfProceeds),
          },
          s = {
            name: "承销商",
            value: this.convertstring(this.model.Underwriter),
          },
          a = {
            name: "业务描述",
            value: this.convertstring(this.model.BusinessDescLong),
          };
        this.dataSource.push(t, e, r, n, o, i, s, a);
      },
      convertstring: function (t) {
        return "" === t || "--" === t || void 0 === t ? "--" : t;
      },
      formatstring: function (t, e) {
        return "" === t || "--" === t || void 0 === t ? "--" : t + e;
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, n, o, i, s) {
        return t.e(
          {
            a: t.f(i.dataSource, function (e, r, n) {
              return t.e(
                { a: s.isShowSeparator(r, 0) },
                s.isShowSeparator(r, 0)
                  ? { b: t.t(s.stockName), c: t.t(s.stockCode) }
                  : {},
                { d: s.isShowSeparator(r, 0) },
                (s.isShowSeparator(r, 0), {}),
                { e: t.t(e.name), f: t.t(e.value), g: r }
              );
            }),
            b: i.dataSource.length,
            c: s.isMp,
          },
          (s.isMp, {}),
          { d: t.n(s.isMp ? "usdetaillist-mp" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-ba9a12eb"],
  ]);
wx.createComponent(r);
