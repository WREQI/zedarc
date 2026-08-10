var t = require("../../../../../../common/vendor.js"),
  a = {
    props: ["type", "data"],
    computed: {
      listData: function () {
        return this.data.list_data;
      },
      isWzq: function () {
        return "wzq" === t.StockBridge.ENV;
      },
    },
    methods: {
      calM: function (t) {
        var a = [];
        return (
          t > 1e8
            ? ((a[0] = (t / 1e8).toFixed(2)), (a[1] = "亿股"))
            : t > 1e4
            ? ((a[0] = (t / 1e4).toFixed(2)), (a[1] = "万股"))
            : ((a[0] = t), (a[1] = "股")),
          a
        );
      },
      formatData: function (t, a) {
        if (0 == +a) return t.replace(/(\d{4})(\d{2})(\d{2})/i, "$1-$2-$3");
        if (1 === a) {
          var e = this.calM(t);
          return e[0] + e[1];
        }
        return "".concat(t, "%");
      },
    },
  },
  e = t._export_sfc(a, [
    [
      "render",
      function (a, e, i, r, n, s) {
        return t.e(
          { a: s.listData && s.listData.list && s.listData.list.length > 0 },
          s.listData && s.listData.list && s.listData.list.length > 0
            ? {
                b: t.f(s.listData.title, function (a, e, i) {
                  return {
                    a: t.t(a),
                    b: e,
                    c:
                      "c" == s.listData.style[e]
                        ? "center"
                        : "r" == s.listData.style[e]
                        ? "right"
                        : "left",
                  };
                }),
                c: t.f(s.listData.list, function (a, e, i) {
                  return {
                    a: t.f(a, function (a, e, i) {
                      return {
                        a: t.t(s.formatData(a, e)),
                        b: e,
                        c:
                          "c" == s.listData.style[e]
                            ? "center"
                            : "r" == s.listData.style[e]
                            ? "right"
                            : "left",
                      };
                    }),
                    b: e,
                  };
                }),
                d: t.n(s.isWzq ? "" : "special"),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-c8064431"],
  ]);
wx.createComponent(e);
