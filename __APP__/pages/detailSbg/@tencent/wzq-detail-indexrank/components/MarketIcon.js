var t = require("../../stock-hq-data/index.js"),
  e = require("../api/temp.js"),
  s = require("../../../../../common/vendor.js"),
  o = {
    props: ["iconType", "stockType", "stockCode"],
    data: function () {
      return { showImg: !0 };
    },
    computed: {
      iconStyle: function () {
        return this.getIconType(this.iconType, this.stockType);
      },
      imgsrc: function () {
        var t = this.getIconType(this.iconType, this.stockType),
          e = t && t.slice(8);
        return e
          ? "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
              e,
              ".svg"
            )
          : ((this.showImg = !1), "");
      },
    },
    methods: {
      getIconType: function (s, o) {
        if (s) {
          var i = e.getMarketPYName(s) || "";
          if (!i)
            try {
              +s > 600 ? (i = "us") : +s > 300 && (i = "hk"),
                ("uk" !== s && "jj" !== s && "nq" !== s) || (i = s),
                "ft" === s && (i = "hqzhi");
            } catch (t) {}
          var c = o;
          if (
            (t.utils.isKeChuangStock(c)
              ? (i = "ke")
              : t.utils.isChuangYeStock(c)
              ? (i = "chuang")
              : t.utils.isFund(c) && "jj" !== s
              ? (i = "cnjj")
              : t.utils.isFund(c) && "jj" === s && (i = "cwjj"),
            "sh" === i)
          ) {
            var n = this.stockCode;
            n && /^68/.test(n) && (i = "ke");
          }
          if ("sz" === i) {
            var r = this.stockCode;
            r && /^30/.test(r) && (i = "chuang");
          }
          return (this.imgtype = i), "hq-icon-".concat(i);
        }
      },
    },
  },
  i = s._export_sfc(o, [
    [
      "render",
      function (t, e, o, i, c, n) {
        return s.e(
          { a: c.showImg },
          c.showImg ? { b: n.imgsrc, c: s.n(n.iconStyle) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-09a34809"],
  ]);
wx.createComponent(i);
