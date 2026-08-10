var o = require("../utils/utils.js"),
  t = require("../../../../../../common/vendor.js"),
  e = {
    props: {
      showPopup: { type: Boolean, default: !1 },
      showRankSection: { type: Boolean, default: !1 },
      hotstockList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      abtTypeConfig: { type: Object, default: function () {} },
    },
    inject: ["stockBridge"],
    data: function () {
      return { title: "热点股榜单", showTip: !1 };
    },
    methods: {
      getNumColor: o.getNumColor,
      closePopup: function () {
        this.$emit("close", !1);
      },
      handleClickOutside: function () {
        this.showTip && (this.showTip = !1);
      },
      goStockDetail: function (o) {
        this.$emit("goStockDetail", o, "hot_stock_sheet");
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (o, e, n, i, s, a) {
        return t.e(
          {
            a: t.n(n.showPopup ? "modal-overlay" : "mask-hidden"),
            b: t.o(function () {
              return a.closePopup && a.closePopup.apply(a, arguments);
            }, 4449),
            c: n.abtTypeConfig,
          },
          n.abtTypeConfig
            ? t.e(
                {
                  d: t.t(n.abtTypeConfig.rankTitle),
                  e: n.abtTypeConfig.updateTime,
                },
                n.abtTypeConfig.updateTime
                  ? { f: t.t(n.abtTypeConfig.updateTime) }
                  : {},
                {
                  g: t.o(function () {
                    return a.closePopup && a.closePopup.apply(a, arguments);
                  }, 4450),
                  h: n.showRankSection,
                },
                n.showRankSection
                  ? t.e(
                      {
                        i: t.t(n.abtTypeConfig.popvalueTitle),
                        j: t.t(n.abtTypeConfig.infoTitle),
                        k: t.o(function (o) {
                          return (s.showTip = !0);
                        }, 4451),
                        l: s.showTip,
                      },
                      s.showTip
                        ? {
                            m: t.t(n.abtTypeConfig.titleDesc),
                            n: t.o(function () {
                              return (
                                a.handleClickOutside &&
                                a.handleClickOutside.apply(a, arguments)
                              );
                            }, 4452),
                          }
                        : {}
                    )
                  : {},
                {
                  o: t.f(n.hotstockList, function (o, e, i) {
                    return t.e(
                      {
                        a: t.t(e + 1),
                        b: t.t(o.name),
                        c: t.t(
                          ""
                            .concat((o.symbol && o.symbol.slice(2)) || "", ".")
                            .concat(
                              (o.symbol &&
                                o.symbol.slice(0, 2).toUpperCase()) ||
                                ""
                            )
                        ),
                      },
                      n.showRankSection ? { d: t.t(o.pop_value) } : {},
                      n.showRankSection
                        ? {
                            e: t.t(o.stock_info),
                            f: a.getNumColor(o.stock_info),
                          }
                        : {},
                      n.showRankSection
                        ? {}
                        : { g: t.t(o.zdf), h: a.getNumColor(o.zdf) },
                      {
                        i: t.o(
                          function (t) {
                            return a.goStockDetail(o);
                          },
                          4453,
                          e
                        ),
                        j: e,
                      }
                    );
                  }),
                  p: n.showRankSection,
                  q: n.showRankSection,
                  r: !n.showRankSection,
                  s: n.showRankSection ? 1 : "",
                  t: n.showRankSection ? 1 : "",
                  v: t.o(function () {
                    return (
                      a.handleClickOutside &&
                      a.handleClickOutside.apply(a, arguments)
                    );
                  }, 4454),
                }
              )
            : {},
          { w: n.showPopup ? 1 : "", x: n.showRankSection ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-0db526ed"],
  ]);
wx.createComponent(n);
