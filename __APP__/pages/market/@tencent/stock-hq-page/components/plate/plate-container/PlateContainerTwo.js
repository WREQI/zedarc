var t = require("../../../../../../../common/vendor.js"),
  e = require("../../../../stock-hq-data/index.js"),
  o = { 200: "industry", 201: "concept", 202: "area" },
  a = ["zdf", "speed", "volratio", "exchange"],
  c = {
    components: {
      PlateBlockOne: function () {
        return "../../common/plate/PlateBlockOne.js";
      },
      PlateBlockTwo: function () {
        return "../../common/plate/PlateBlockTwo.js";
      },
      PlateTitle: function () {
        return "../../common/stock-card/TitleBlock.js";
      },
      Tabbar: function () {
        return "../../tabs/mp.js";
      },
    },
    props: { plate: { type: Object, default: function () {} } },
    data: function () {
      return {
        tabs: ["涨幅榜", "5分钟涨速榜", "量比", "换手"],
        labels: ["今日", "5日", "20日", "60日", "52周", "年初至今"],
        currTab: 0,
        selectedLabel: 0,
        stocks: null,
        type: "",
      };
    },
    computed: {
      tabConfig: function () {
        return this.tabs.map(function (t) {
          return { name: t };
        });
      },
    },
    watch: {
      plate: {
        handler: function () {
          this.filterStocks();
        },
        immediate: !0,
        deep: !0,
      },
    },
    created: function () {
      this.filterStocks();
    },
    methods: {
      chunk: t.chunk,
      gotoList: function () {
        var e,
          a = this;
        (e =
          0 === this.currTab
            ? {
                0: "zdf",
                1: "zdf_d5",
                2: "zdf_d20",
                3: "zdf_d60",
                4: "zdf_w52",
                5: "zdf_y",
              }[this.selectedLabel] || ""
            : ["zdf", "speed", "lb", "hsl"][this.currTab]),
          setTimeout(function () {
            if (t.StockBridge.ENV === t.EnvTypeEnum.MP) {
              var o = "https://wzq.tenpay.com/mp/v2/index.html#/plateall/"
                .concat(a.plate.plateId, "?currVal=")
                .concat(e);
              t.wx$1.navigateTo({
                url: "/pages/additional/webview/index?url=".concat(
                  encodeURIComponent(o)
                ),
              });
            } else a.$router.push({ path: "/plateall/".concat(a.plate.plateId), query: { currVal: e } });
          }, 10),
          t.StockBridge.report(
            "hq.choose_hq.plate.goto_hot_".concat(
              o[this.plate.plateId],
              "_detail"
            )
          );
      },
      switchTab: function (e) {
        this.currTab !== e &&
          ((this.currTab = e),
          this.filterStocks(),
          t.StockBridge.report(
            "hq.choose_hq.plate.hot_"
              .concat(o[this.plate.plateId], "_switch_")
              .concat(a[e], "_tab")
          ));
      },
      switchLabel: function (e) {
        this.selectedLabel !== e &&
          ((this.selectedLabel = e),
          this.filterStocks(),
          t.StockBridge.report(
            "hq.choose_hq.plate.hot_".concat(
              o[this.plate.plateId],
              "_switch_zdf_label"
            ),
            {
              yy_public_str1: [
                "today",
                "five_days",
                "twenty_days",
                "sixty_days",
                "fiftytwo_weeks",
                "year",
              ][e],
            }
          ));
      },
      filterStocks: function () {
        var t = this.plate.data;
        if (t) {
          0 === this.currTab
            ? (this.stocks =
                t[
                  [
                    "zdfToday",
                    "zdfFiveDay",
                    "zdfTwentyDay",
                    "zdfSixtyDay",
                    "zdfFiftyTwoWeek",
                    "zdfYear",
                  ][this.selectedLabel]
                ])
            : ((this.stocks = t[a[this.currTab]]),
              (this.type = a[this.currTab]));
        } else this.stocks = [];
      },
      gotoDetail: function (a, c, i) {
        var r = this;
        setTimeout(function () {
          var n = a.code,
            l = a.name;
          if (t.StockBridge.ENV === t.EnvTypeEnum.MP) {
            var s = e.utils.splitSymbol(n),
              d = s.market,
              p = s.scode;
            t.StockBridge.routeTo({
              url: "/pages/quote/quote?scode=".concat(p, "&market=").concat(d),
            });
          } else r.$router.push({ path: "/plate/".concat(i, "/detail"), query: { plateId: n, detailTitle: "".concat(l, "(").concat(n, ")") } });
          t.StockBridge.report(
            "hq.choose_hq.plate.hot_".concat(
              o[r.plate.plateId],
              "_module_click"
            ),
            { position: c, stockid: n }
          );
        }, 10);
      },
    },
  };
Array ||
  (
    t.resolveComponent("plate-title") +
    t.resolveComponent("Tabbar") +
    t.resolveComponent("plate-block-one") +
    t.resolveComponent("plate-block-two")
  )();
var i = t._export_sfc(c, [
  [
    "render",
    function (e, o, a, c, i, r) {
      return t.e(
        {
          a: t.o(r.gotoList, 4577),
          b: t.p({
            "title-options": {
              name: a.plate.name,
              isShowArrow: !0,
              isShowDivider: !0,
            },
            "plate-id": a.plate.plateId,
          }),
          c: t.o(r.switchTab, 4578),
          d: t.p({
            "cur-index": i.currTab,
            "tab-config": r.tabConfig,
            "show-more": !1,
          }),
          e: 0 === i.currTab,
        },
        0 === i.currTab
          ? {
              f: t.f(i.labels, function (e, o, a) {
                return {
                  a: t.t(e),
                  b: o,
                  c: i.selectedLabel === o ? 1 : "",
                  d: t.o(
                    function (t) {
                      return r.switchLabel(o);
                    },
                    4579,
                    o
                  ),
                };
              }),
            }
          : {},
        {
          g: t.f(r.chunk(i.stocks, 3), function (e, o, c) {
            return t.e(
              0 === i.currTab
                ? {
                    a: t.f(e, function (e, n, l) {
                      return {
                        a: e.code,
                        b: t.o(r.gotoDetail, 4580, e.code),
                        c: "16347bb0-2-" + c + "-" + l,
                        d: t.p({
                          position: 3 * o + n + 1,
                          data: e,
                          "plate-id": a.plate.plateId,
                          "is-simple-ver": 0 !== i.selectedLabel,
                        }),
                      };
                    }),
                  }
                : {
                    b: t.f(e, function (e, n, l) {
                      return {
                        a: e.code,
                        b: t.o(r.gotoDetail, 4581, e.code),
                        c: "16347bb0-3-" + c + "-" + l,
                        d: t.p({
                          position: 3 * o + n + 1,
                          data: e,
                          type: i.type,
                          "plate-id": a.plate.plateId,
                        }),
                      };
                    }),
                  },
              { c: o }
            );
          }),
          h: 0 === i.currTab,
        }
      );
    },
  ],
  ["__scopeId", "data-v-16347bb0"],
]);
wx.createComponent(i);
