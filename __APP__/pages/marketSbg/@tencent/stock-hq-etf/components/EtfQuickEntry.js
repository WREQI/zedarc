var e = require("../../../../../common/vendor.js"),
  t = require("../config/index.js"),
  i = {
    inject: ["IS_ZXG", "isLite", "hqBridge"],
    props: { theme: { type: String, default: "light" } },
    data: function () {
      return {
        ShellTypeEnum: e.ShellTypeEnum,
        entryList: t.QUICK_ENTRY,
        isLite: !1,
        isZxgSecondLevelPage: !1,
      };
    },
    created: function () {},
    methods: {
      handleClick: function (t) {
        return (
          e.StockBridge.report(
            "hq.etf.etf_quick_entry_".concat(t.id, "_click")
          ),
          t.useOpenWebview
            ? void e.StockBridge.openExtraWebview(t.path, "openWebview")
            : "hot" === t.id
            ? void e.StockBridge.locationTo(
                "https://wzq.tenpay.com/mp/v2/index.html#/hot?tab=2",
                "openWebview"
              )
            : t.pathLiteMp
            ? void e.StockBridge.routeTo({ url: t.pathLiteMp })
            : void (
                t.externalUrl &&
                e.StockBridge.openExtraWebview(t.externalUrl, {})
              )
        );
      },
      formateExternalUrl: function (e) {
        return e.indexOf("?") > 0
          ? "".concat(e, "&lite=1")
          : "".concat(e, "?lite=1");
      },
    },
  },
  n = e._export_sfc(i, [
    [
      "render",
      function (t, i, n, o, r, c) {
        return {
          a: e.f(r.entryList, function (t, i, o) {
            return e.e(
              {
                a: r.isLite
                  ? t.iconLite
                  : "light" === n.theme
                  ? t.icon
                  : t.iconBlack,
                b: t.badgeIcon,
              },
              t.badgeIcon ? { c: t.badgeIcon } : {},
              {
                d: e.n("global" === t.id ? "global" : ""),
                e: e.t(t.title),
                f: t.id,
                g: e.o(
                  function (e) {
                    return c.handleClick(t);
                  },
                  3543,
                  t.id
                ),
              }
            );
          }),
          b: e.n(r.isLite ? "lite" : ""),
        };
      },
    ],
    ["__scopeId", "data-v-54236af0"],
  ]);
wx.createComponent(n);
