var e = require("../../../../../common/vendor.js"),
  t = [34, 0, 33, 33],
  n = [27, 20, 26, 27],
  i = {
    props: {
      hgData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      listOverShowhg: { type: Boolean, default: !1 },
      showTip: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isWindows: !1 };
    },
    computed: {
      linePercent: function () {
        var e;
        return (null == (e = this.hgData) ? void 0 : e[0].MARKET) ? n : t;
      },
    },
    methods: {
      openDetail: function () {
        this.$emit("openDetail");
      },
      showTeachTips: function () {
        this.$emit("showTeachTips");
      },
    },
  },
  r = e._export_sfc(i, [
    [
      "render",
      function (t, n, i, r, o, a) {
        return e.e(
          { a: i.hgData && i.hgData.length > 0 },
          i.hgData && i.hgData.length > 0
            ? e.e(
                { b: i.showTip },
                i.showTip
                  ? {
                      c: e.o(function () {
                        return (
                          a.showTeachTips && a.showTeachTips.apply(a, arguments)
                        );
                      }, 3212),
                    }
                  : {},
                {
                  d: e.o(function () {
                    return a.openDetail && a.openDetail.apply(a, arguments);
                  }, 3213),
                  e: a.linePercent[0] + "%",
                  f: a.linePercent[1],
                },
                a.linePercent[1] ? { g: a.linePercent[1] + "%" } : {},
                {
                  h: a.linePercent[2] + "%",
                  i: a.linePercent[3] + "%",
                  j: e.f(i.hgData, function (t, n, r) {
                    return e.e(
                      { a: n < 3 || i.listOverShowhg },
                      n < 3 || i.listOverShowhg
                        ? e.e(
                            {
                              b: e.t(t.REP_DATE),
                              c: a.linePercent[0] + "%",
                              d: a.linePercent[1],
                            },
                            a.linePercent[1]
                              ? { e: e.t(t.MARKET), f: a.linePercent[1] + "%" }
                              : {},
                            {
                              g: e.t(t.FUND),
                              h: a.linePercent[2] + "%",
                              i: e.t(t.REDEEN_AVG_PRICE),
                              j: a.linePercent[3] + "%",
                            }
                          )
                        : {},
                      { k: n }
                    );
                  }),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-acd98b98"],
  ]);
wx.createComponent(r);
