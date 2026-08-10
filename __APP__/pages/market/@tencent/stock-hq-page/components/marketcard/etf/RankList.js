var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../stock-hq-data/index.js"),
  o = require("../../../../../../../common/vendor.js"),
  n = {
    components: {
      TitleBlock: function () {
        return "../../common/stock-card/TitleBlock.js";
      },
      CardBlock: function () {
        return "../../common/stock-card/CardBlock.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        titleOptions: {
          name: "ETF排行榜",
          text: "",
          isShowTip: !0,
          isShowArrow: !0,
          isShowDivider: !0,
        },
      };
    },
    computed: {
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
    },
    mounted: function () {
      return (
        (e = this),
        null,
        (o = t().mark(function e() {
          var o;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (null ==
                    (o =
                      null == document
                        ? void 0
                        : document.querySelectorAll(".opinion-container"))
                      ? void 0
                      : o.length) > 0 ||
                      (this.hqBridge.busEmit("etf-zj-qj-hq-entry-show"),
                      this.hqBridge.report(
                        "hq.hqindex.hstab_hot_etf_detail_brow"
                      ));
                  case 1:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })),
        new Promise(function (t, n) {
          var r = function (t) {
              try {
                c(o.next(t));
              } catch (t) {
                n(t);
              }
            },
            i = function (t) {
              try {
                c(o.throw(t));
              } catch (t) {
                n(t);
              }
            },
            c = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(r, i);
            };
          c((o = o.apply(e, null)).next());
        })
      );
      var e, o;
    },
    methods: {
      tipClick: function () {
        o.StockBridge.openExtraWebview(
          "https://wzq.tenpay.com/mp/v2/index.html#/information/courseDetail?id=TN20221108093232846a4d00&cid=VD20221107183509823899c6"
        );
      },
      gotoDetail: function (t, o) {
        var n = e.utils.splitSymbol(t.code),
          r = n.market,
          i = n.scode;
        this.hqBridge.routeTo({
          url: "/pages/quote/quote?market=".concat(r, "&scode=").concat(i),
        }),
          this.hqBridge.report("hq.choose_hq.hstab.hotetf_detail_click", {
            position: o,
            stockid: t.code,
          });
      },
      gotoList: function () {
        this.$emit("gotoEtfTab"),
          this.hqBridge.report("hq.hotetf.hot_etf_detail_click");
      },
    },
  };
Array ||
  (o.resolveComponent("title-block") + o.resolveComponent("card-block"))();
var r = o._export_sfc(n, [
  [
    "render",
    function (t, e, n, r, i, c) {
      return {
        a: o.o(c.tipClick, 4958),
        b: o.o(c.gotoList, 4959),
        c: o.p({ "title-options": i.titleOptions }),
        d: o.f(n.data, function (t, e, n) {
          return o.e(
            { a: t.labels && t.labels.length },
            t.labels && t.labels.length
              ? {
                  b: o.f(t.labels, function (t, e, n) {
                    return {
                      a: o.t(t.name),
                      b: t.typ,
                      c: o.n(12 === t.typ ? "red-label" : "blue-label"),
                    };
                  }),
                }
              : { c: o.t(t.scale) },
            {
              d: t.code,
              e: o.o(c.gotoDetail, 4960, t.code),
              f: "5b35fbb9-1-" + n,
              g: o.p({ data: t, position: e + 1 }),
            }
          );
        }),
      };
    },
  ],
  ["__scopeId", "data-v-5b35fbb9"],
]);
wx.createComponent(r);
