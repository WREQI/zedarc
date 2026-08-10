require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var e = require("../../config/enum.js"),
  r = require("../../common/vendor.js"),
  t = {
    props: {
      name: { type: String, default: "" },
      typeText: { type: String, default: "" },
      market: { type: String, default: "" },
      code: { type: String, default: "" },
      showArrow: { type: Boolean, default: !0 },
      hidefund: { type: Boolean, default: !1 },
      basePriceTag: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["click", "nameClick"],
    setup: function (t, n) {
      var a = n.emit,
        i = r.getCurrentInstance().proxy,
        c = r.computed(function () {
          return ![
            "AssetIndex",
            "ConditionList",
            "TradeStock",
            "ConditionDetail",
          ].includes(i.$route.name);
        });
      return { emit: a, MARKET: e.MARKET, confirmType: c };
    },
  };
Array || r.resolveComponent("MarketLabel")(), Math;
var n = r._export_sfc(t, [
  [
    "render",
    function (e, t, n, a, i, c) {
      return r.e(
        { a: !n.hidefund },
        n.hidefund
          ? {
              j: r.o(function (e) {
                return a.emit("nameClick");
              }),
            }
          : r.e(
              {
                b: r.t(n.name),
                c: r.n(n.name.length > 12 ? "cond-detail-name--small" : ""),
                d: r.o(function (e) {
                  return a.emit("nameClick");
                }),
                e: !a.confirmType,
              },
              a.confirmType
                ? {}
                : {
                    f: r.t(n.code),
                    g: r.t(
                      a.MARKET[n.market]
                        ? ".".concat(a.MARKET[n.market]).toUpperCase()
                        : ""
                    ),
                  },
              {
                h: r.t(n.typeText),
                i: r.n(a.confirmType ? "confirm-type" : ""),
              }
            ),
        { k: n.showArrow },
        (n.showArrow, {}),
        { l: !n.hidefund },
        n.hidefund
          ? (n.hidefund && n.basePriceTag.dqj, {})
          : r.e(
              { m: !a.confirmType },
              a.confirmType
                ? { v: r.p({ market: n.market }), w: r.t(n.code) }
                : r.e(
                    {
                      n:
                        n.basePriceTag &&
                        (null != n.basePriceTag.dqj || n.basePriceTag.zdf),
                    },
                    n.basePriceTag &&
                      (null != n.basePriceTag.dqj || n.basePriceTag.zdf)
                      ? r.e(
                          { o: null != n.basePriceTag.dqj },
                          null != n.basePriceTag.dqj
                            ? {
                                p: r.t(n.basePriceTag.dqj),
                                q: r.n(n.basePriceTag.class),
                              }
                            : {},
                          { r: n.basePriceTag.zdf },
                          n.basePriceTag.zdf
                            ? {
                                s: r.t(
                                  n.basePriceTag.zdf
                                    ? "".concat(n.basePriceTag.zdf, "%")
                                    : ""
                                ),
                                t: r.n(n.basePriceTag.class),
                              }
                            : {}
                        )
                      : {}
                  )
            ),
        {
          x: n.hidefund && null != n.basePriceTag.dqj,
          y: r.o(function (e) {
            return a.emit("click");
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-708e8934"],
]);
wx.createComponent(n);
