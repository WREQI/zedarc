require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = require("../../stock-hq-data/index.js"),
  i = {
    inject: {
      hqBridge: {
        default: function () {
          return {};
        },
      },
      isAccountOpen: {
        default: function () {
          return function () {
            return !1;
          };
        },
      },
    },
    components: {
      AddFav: function () {
        return "./AddFav.js";
      },
    },
    props: ["listData", "status", "from", "type"],
    emit: ["goBuy"],
    data: function () {
      return {};
    },
    computed: {
      env: function () {
        return t.StockBridge.ENV;
      },
      isWzq: function () {
        return !1;
      },
      isMp: function () {
        return "mp" === this.env;
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
    },
    watch: {},
    created: function () {},
    mounted: function () {},
    methods: {
      dateDeal: function (e) {
        return new t.dayjs(e).format("YYYY-MM-DD");
      },
      getColor: function (t) {
        return 0 === t ? "#7a8499" : t > 0 ? "#e63535" : "#1caa3c";
      },
      getText: function (t) {
        return t > 0 ? "+".concat(t, "%") : "".concat(t, "%");
      },
      goteach: function (e) {
        0 === this.status
          ? t.StockBridge.report("hq.etfpage.newpubetf_willpublish_teach_click")
          : 1 === this.status &&
            t.StockBridge.report("hq.etfpage.newpubetf_publishing_teach_click"),
          t.StockRouter.routeTo({
            name: "newpubETFTeach",
            query: { from: this.from, type: e },
          });
      },
      goEtfBuy: function (i) {
        var o = "";
        if (
          (this.isAccountOpen()
            ? (this.$emit("goBuy"), (o = "ICf00p000t019"))
            : (o = "ICf00p000a020"),
          t.StockBridge.report("hq.etfpage.newpubetf.publishing.gobuy_click", {
            fchannel_id_fm_i: o,
          }),
          this.isAccountOpen())
        ) {
          var a = e.utils.splitSymbol(i.market + i.stock_code).market;
          this.isMp
            ? t.StockBridge.busEmit("market-navigate-to-trade", {
                channel: o,
                scode: i.subscribe_code,
                market: a,
              })
            : this.TradeFunc.navToBrokerPage({
                path: "/etf-subscribe/index",
                data: { scode: i.subscribe_code, market: a },
              });
        } else
          this.isMp
            ? t.StockBridge.busEmit("market-navigate-to-apply-index", {
                stat: o,
              })
            : this.TradeFunc.navToApplyIndex({ stat: o });
      },
      goDetail: function (i) {
        0 === this.status &&
          t.StockBridge.report("hq.etfpage.willpublish.godetail_click"),
          1 === this.status &&
            t.StockBridge.report(
              "hq.etfpage.newpubetf.publishing.godetail_click"
            ),
          2 === this.status &&
            t.StockBridge.report(
              "hq.etfpage.newpubetf.willlist.godetail_click"
            );
        var o = e.utils.splitSymbol(i.market + i.stock_code),
          a = o.market,
          r = o.scode;
        this.isWzq
          ? this.hqBridge.routeTo({
              name: "HqStock",
              params: { market: a, code: r },
            })
          : t.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: a, scode: r },
            });
      },
      getDiffDays: function (e, i) {
        return new t.dayjs(e, "YYYY_MM_DD").diff(i, "days");
      },
      dealMarket: function (t) {
        return e.utils.splitSymbol(t).market;
      },
    },
  };
Array || t.resolveComponent("AddFav")();
var o = t._export_sfc(i, [
  [
    "render",
    function (e, i, o, a, r, s) {
      return {
        a: t.f(o.listData, function (e, i, a) {
          return t.e(
            {
              a: t.t(e.stock_name || ""),
              b: t.t(e.stock_code || ""),
              c: t.f(e.tags, function (e, i, o) {
                return { a: t.t(e.name), b: e.name };
              }),
            },
            0 === o.status ? { d: t.t(s.dateDeal(e.online_begin_date)) } : {},
            1 === o.status
              ? t.e(
                  { e: s.getDiffDays(e.issue_end_date, e.current_date) >= 1 },
                  s.getDiffDays(e.issue_end_date, e.current_date) >= 1
                    ? {
                        f: t.t(s.getDiffDays(e.issue_end_date, e.current_date)),
                      }
                    : {}
                )
              : {},
            2 === o.status ? { g: t.t(s.dateDeal(e.listed_date)) } : {},
            { h: e.follow_index_name },
            e.follow_index_name
              ? t.e(
                  {
                    i: t.t(e.follow_index_name),
                    j: t.t(e.history_ratio && e.history_ratio.desc),
                    k: e.history_ratio && e.history_ratio.val,
                  },
                  e.history_ratio && e.history_ratio.val
                    ? {
                        l: t.t(s.getText(e.history_ratio.val)),
                        m: t.s(
                          "color: ".concat(s.getColor(e.history_ratio.val))
                        ),
                      }
                    : {}
                )
              : {},
            { n: e.highlight_tips },
            e.highlight_tips
              ? {
                  o: t.t(e.highlight_tips),
                  p: t.o(
                    function (t) {
                      return s.goteach(e.highlight_type);
                    },
                    2776,
                    e.stock_code
                  ),
                }
              : {},
            { q: !e.highlight_tips },
            (e.highlight_tips, {}),
            { r: t.t(e.company || "") },
            1 !== o.status
              ? {
                  s: t.sr("addFav", "2faec92e-0-" + a, { f: 1 }),
                  t: "2faec92e-0-" + a,
                  v: t.p({
                    etfStatus: o.status,
                    market: s.dealMarket(e.market + e.stock_code),
                    symbol: e.market + e.stock_code,
                    scode: e.stock_code,
                    type: "etfadd",
                    from: o.from,
                  }),
                }
              : {
                  w: t.n(s.isLite ? "btn-mini" : "blue-btn"),
                  x: t.o(
                    function (t) {
                      return s.goEtfBuy(e);
                    },
                    2777,
                    e.stock_code
                  ),
                },
            {
              y: e.stock_code,
              z: t.o(
                function (t) {
                  return s.goDetail(e);
                },
                2778,
                e.stock_code
              ),
            }
          );
        }),
        b: 0 === o.status,
        c: 1 === o.status,
        d: 2 === o.status,
        e: 1 !== o.status,
      };
    },
  ],
  ["__scopeId", "data-v-2faec92e"],
]);
wx.createComponent(o);
