var t = require("../../../../../../common/vendor.js"),
  e = {
    inject: ["hqBridge"],
    props: ["staticConfigList", "desc", "market", "type"],
    data: function () {
      return { env: this.hqBridge.ENV };
    },
    methods: {
      statisticName: function (t) {
        return "sssl" === t
          ? "上市数量"
          : "pfsl" === t
          ? "首日破发数"
          : "pfl" === t
          ? "首日破发率"
          : "dqzdsy" === t
          ? "单签最大收益"
          : "dqzdks" === t
          ? "单签最大亏损"
          : "dzhljsy" === t
          ? "单账户累计收益"
          : "total" === t
          ? "共计上市"
          : "avgMaxLimit" === t
          ? "平均连板天数"
          : "avgProfit" === t
          ? "平均每签获利"
          : "pofaNum" === t || "pofa" === t
          ? "首日破发数"
          : "avgFirstZdf" === t
          ? "平均首日涨幅"
          : void 0;
      },
      formatValue: function (t, e) {
        var o = t.value;
        if (!o || "--" === o) return "--";
        if (!(o = o[e]) || "--" === o) {
          if ("pofaNum" !== e) return "--";
          o = 0;
        }
        return "pfsl" === e
          ? "".concat(o, "只")
          : "avgMaxLimit" === e
          ? "".concat(o, "天")
          : "total" === e || "pofaNum" === e || "pofa" === e
          ? "".concat(o, "只")
          : "avgFirstZdf" === e
          ? "".concat(o, "%")
          : "sssl" === e || "sssl" === e
          ? "".concat(o, "只")
          : "pfl" === e
          ? "".concat(parseFloat(o).toFixed(2), "%")
          : "dqzdsy" === e || "dqzdks" === e || "dzhljsy" === e
          ? "".concat(parseFloat(o).toFixed(2), "元")
          : o;
      },
      itemTextColor: function (t, e) {
        if (
          "avgProfit" !== e &&
          "avgFirstZdf" !== e &&
          "dqzdsy" !== e &&
          "dqzdks" !== e &&
          "dzhljsy" !== e
        )
          return "color-equal";
        var o = t.value;
        return o && "" !== o && "--" !== o
          ? (o = o[e]) && "" !== o && "--" !== o
            ? "0.00" === (o = "".concat(o)) || "0" === o
              ? "color-equal"
              : o.startsWith("-")
              ? "color-fall"
              : "color-rise"
            : "color-equal"
          : "color-equal";
      },
      showTips: function (t) {
        this.$emit("showTips", t);
      },
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (e, o, n, i, a, c) {
        return t.e(
          {
            a: t.f(n.staticConfigList, function (e, o, i) {
              return t.e(
                { a: e.title },
                e.title
                  ? {
                      b: t.t(e.title),
                      c: t.o(
                        function (t) {
                          return c.showTips(e.key);
                        },
                        3886,
                        o
                      ),
                      d: t.n("mini" === a.env ? "h5-title" : ""),
                    }
                  : {},
                {
                  e: t.f(e.config, function (o, n, i) {
                    return {
                      a: t.t(c.statisticName(o)),
                      b: t.t(c.formatValue(e, o)),
                      c: t.n("".concat(c.itemTextColor(e, o))),
                      d: "config" + n,
                    };
                  }),
                  f: o !== n.staticConfigList.length - 1,
                },
                (n.staticConfigList.length, {}),
                { g: o }
              );
            }),
            b: t.n("top-title-".concat(a.env)),
            c: t.n("wzq" === a.env ? "wzq-item" : ""),
            d: t.n("oem" === a.env ? "oem-item-container" : ""),
            e: t.n("list-container-".concat(n.market)),
            f: t.n("list-container-".concat(n.type)),
            g: n.desc,
          },
          n.desc
            ? { h: t.t(n.desc), i: t.n("bottom-desc-".concat(a.env)) }
            : {},
          { j: t.n("".concat(a.env, "-header")) }
        );
      },
    ],
    ["__scopeId", "data-v-1784287e"],
  ]);
wx.createComponent(o);
