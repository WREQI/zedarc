var e = require("../../../../../common/vendor.js"),
  t = {
    props: ["skin", "symbol", "isTrading", "preData"],
    components: {
      BriefPlate: function () {
        return "../../../../detailSbg/@tencent/stock-detail-brief/components/BriefPlate.js";
      },
    },
    data: function () {
      return { isLoaded: !1, plateTop: 0 };
    },
    created: function () {
      var t = this;
      this.$nextTick(function () {
        if ("mp" === e.StockBridge.ENV)
          e.wx$1
            .createSelectorQuery()
            .in(t.$parent)
            .select("#plateEntry")
            .boundingClientRect(function (e) {
              var o = e.top,
                a = e.height;
              t.plateTop = o + 1.5 * a;
            })
            .exec();
        else {
          var o = t.$parent.$refs.plateEntry.getBoundingClientRect(),
            a = o.top,
            n = o.height;
          t.plateTop = a + 2 * n - 3;
        }
      });
    },
    methods: {
      close: function () {
        e.StockBridge.report("hq.stock_detail.plate_board_close_click", {
          stockid: this.symbol,
        }),
          this.$emit("close");
      },
      touchBoard: function () {
        this.$emit("touchBoard");
      },
      loaded: function () {
        this.isLoaded = !0;
      },
      changeData: function (e) {
        this.$refs.plateboard && this.$refs.plateboard.changeData(e);
      },
      showBoardTeachTips: function () {
        e.StockBridge.report("hq.stock_detail.plate_board_i_click"),
          e.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN20220629170316804d2480",
              articleStyle: "fullTeach",
              anchorTitle: "所属板块",
            },
          });
      },
    },
  };
Array || e.resolveComponent("BriefPlate")();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, a, n, r, i) {
      return e.e(
        { a: r.plateTop },
        r.plateTop
          ? {
              b: "".concat(r.plateTop, "px"),
              c: e.o(function (e) {
                return i.showBoardTeachTips();
              }, 2745),
              d: e.o(function () {}, 2746),
              e: e.sr("plateboard", "5bfbbbb7-0"),
              f: e.o(i.loaded, 2747),
              g: e.p({
                skin: a.skin,
                symbol: a.symbol,
                preData: a.preData,
                isPlateBoard: !0,
                isTrading: a.isTrading,
              }),
              h: e.o(function () {}, 2748),
              i: e.o(function () {
                return i.touchBoard && i.touchBoard.apply(i, arguments);
              }, 2749),
              j: "".concat(r.plateTop, "px"),
              k: "black" === a.skin ? 1 : "",
              l: r.isLoaded ? "flex" : "none",
              m: e.o(function (e) {
                return i.close();
              }, 2750),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5bfbbbb7"],
]);
wx.createComponent(o);
