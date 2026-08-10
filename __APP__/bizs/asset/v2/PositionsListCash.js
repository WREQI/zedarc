require("../../../app.js");
var e = require("../../../model/index/useHideFund.js"),
  t = require("../../../components/ValueColor/utils.js"),
  n = require("../../../stores/app/useMode.js"),
  i = require("../../../common/vendor.js"),
  s = {
    options: { styleIsolation: "shared" },
    components: {
      ListHeader: function () {
        return "../ListHeader.js";
      },
    },
    props: {
      fundsinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      last: { type: Boolean, default: !1 },
    },
    setup: function () {
      var s = i.getCurrentInstance().proxy,
        d = e.useHideFund().hidefund,
        o = n.useModeStore();
      return {
        hidefund: d,
        fields: [
          { text: "现金" },
          { text: "总金额", align: "right" },
          { text: "当日可取", align: "right" },
          { text: "活期利率", align: "right" },
          { text: "仓位", align: "right" },
        ],
        simpleMode: i.storeToRefs(o).simpleMode,
        isAssetIndex: i.inject("isAssetIndex"),
        onScrollStat: i.debounce(function () {
          s.$stat.click("trade.asset.cash_scroll");
        }, 1e3),
        adaptFontSize: t.adaptFontSize,
      };
    },
  };
Array || i.resolveComponent("ListHeader")();
var d = i._export_sfc(s, [
  [
    "render",
    function (e, t, n, s, d, o) {
      return i.e(
        {
          a: i.p({ fields: s.fields, "header-marker": !0, border: !1 }),
          b: !s.hidefund,
        },
        (s.hidefund, {}),
        { c: !s.hidefund },
        s.hidefund
          ? {}
          : {
              d: i.t(
                e.$filters.money.formatNoUnit(
                  e.$filters.defaults(n.fundsinfo.can_trade, "--"),
                  !1,
                  2
                )
              ),
              e: i.n(s.adaptFontSize(n.fundsinfo.can_trade, 99999, "28")),
              f: i.n(s.adaptFontSize(n.fundsinfo.can_trade, 999999, "24")),
            },
        { g: !s.hidefund },
        s.hidefund
          ? {}
          : {
              h: i.t(
                e.$filters.money.formatNoUnit(
                  e.$filters.defaults(n.fundsinfo.can_draw, "--"),
                  !1,
                  2
                )
              ),
              i: i.n(s.adaptFontSize(n.fundsinfo.can_draw, 9999, "28")),
              j: i.n(s.adaptFontSize(n.fundsinfo.can_draw, 99999, "24")),
              k: i.n(s.adaptFontSize(n.fundsinfo.can_draw, 999999, "20")),
            },
        { l: !s.hidefund },
        s.hidefund
          ? {}
          : {
              m: i.t(
                n.fundsinfo.rate
                  ? "".concat(
                      e.$filters.format.toText(n.fundsinfo.rate, 2),
                      "%"
                    )
                  : "--"
              ),
            },
        { n: !s.hidefund },
        s.hidefund
          ? {}
          : {
              o: i.t(
                n.fundsinfo.feCashPosition
                  ? e.$filters.postfix(
                      e.$filters.defaults(n.fundsinfo.feCashPosition, "--"),
                      "%"
                    )
                  : "--"
              ),
            },
        {
          p: i.o(function () {
            return s.onScrollStat && s.onScrollStat.apply(s, arguments);
          }),
          q: s.isAssetIndex,
        },
        (s.isAssetIndex, {}),
        { r: n.last ? 1 : "", s: s.simpleMode && !n.last ? 1 : "" }
      );
    },
  ],
]);
wx.createComponent(d);
