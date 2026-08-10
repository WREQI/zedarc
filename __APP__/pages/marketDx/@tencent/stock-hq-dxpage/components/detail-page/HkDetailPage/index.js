var t = require("../../../../../../../common/vendor.js"),
  e = {
    name: "hsXinZhaiDetailhk",
    inject: ["hqBridge"],
    components: {},
    data: function () {
      return { dataSource: [] };
    },
    props: { model: { type: Object, default: function () {} } },
    computed: {
      stockName: function () {
        return this.convertstring(this.model.gpmc);
      },
      stockCode: function () {
        return this.convertstring(this.model.gpdm);
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
            name: "招股日期",
            value: this.convertstring(this.model.sgrq),
          },
          e = { name: "上市日期", value: this.convertstring(this.model.ssrq) },
          r = {
            name: "招股价",
            value: this.formatstring(this.model.zgj, "港元").replace(/\n/g, ""),
          },
          i = {
            name: "招股总数",
            value: this.formatstring(this.model.zgzs, "万股"),
          },
          s = {
            name: "募基金额",
            value: this.formatstring(this.model.mjje, "港元"),
          },
          n = {
            name: "公开发行",
            value: this.formatstring(this.model.gkfx, "万股"),
          },
          a = {
            name: "每手股数",
            value: this.formatstring(this.model.msgs, "股"),
          },
          o = {
            name: "配售数量",
            value: this.formatstring(this.model.pssl, "万股"),
          },
          m = {
            name: "入场费",
            value: this.formatstring(this.model.rcf, "港元"),
          },
          h = {
            name: "1手中签率",
            value: this.convertstring(this.model.yszql),
          },
          u = {
            name: "股票面值",
            value: this.formatstring(this.model.gpmz, "港元"),
          },
          c = { name: "所属行业", value: this.convertstring(this.model.hy) };
        this.dataSource.push(t, e, r, i, s, n, a, o, m, h, u, c);
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
      function (e, r, i, s, n, a) {
        return t.e(
          {
            a: t.f(n.dataSource, function (e, r, i) {
              return t.e(
                { a: a.isShowSeparator(r, 0) },
                a.isShowSeparator(r, 0)
                  ? { b: t.t(a.stockName), c: t.t(a.stockCode) }
                  : {},
                { d: a.isShowSeparator(r, 0) },
                (a.isShowSeparator(r, 0), {}),
                { e: t.t(e.name), f: t.t(e.value), g: r }
              );
            }),
            b: n.dataSource.length,
            c: a.isMp,
          },
          (a.isMp, {}),
          { d: t.n(a.isMp ? "hkdetaillist-mp" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-2f5ba570"],
  ]);
wx.createComponent(r);
