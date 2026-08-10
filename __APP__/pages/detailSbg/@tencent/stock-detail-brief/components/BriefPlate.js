var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../api/index.js"),
  a = require("../../../../../common/vendor.js"),
  o = {
    props: {
      symbol: String,
      isPlateBoard: Boolean,
      fromPage: String,
      isTrading: Boolean,
      skin: String,
      preData: Object,
    },
    data: function () {
      return {
        folded: !0,
        stockTips: "展开",
        introShow: !0,
        plateData: {},
        blockItem: { 行业: "plate", 概念: "concept", 地域: "area" },
        briefPlateInterval: null,
        ismpTrading: !1,
        firstLoaded: !1,
        loaded: !1,
        loadHeight: !1,
        popupStartY: 0,
        popupCanClick: !0,
      };
    },
    created: function () {
      var t = this;
      this.preData
        ? ((this.loaded = !0),
          (this.plateData = this.preData),
          this.$emit("loaded"),
          setTimeout(function () {
            t.loadHeight = !0;
          }, 10))
        : (this.getData(), this.judgeTime());
    },
    beforeDestroy: function () {
      this.clearRefresh();
    },
    computed: {
      rateFilter: function () {
        return function (t) {
          return "".concat(+t > 0 ? "+" : "").concat((+t).toFixed(2), "%");
        };
      },
      isMp: function () {
        return "mp" === a.StockBridge.ENV;
      },
      isWzq: function () {
        return "wzq" === a.StockBridge.ENV;
      },
    },
    watch: {
      isTrading: function (t) {
        (this.ismpTrading = t),
          this.ismpTrading && this.judgeTime(),
          !this.ismpTrading && this.clearRefresh();
      },
    },
    methods: {
      clearRefresh: function () {
        this.briefPlateInterval && clearInterval(this.briefPlateInterval);
      },
      judgeTime: function () {
        var t = this;
        this.isTrading &&
          (this.briefPlateInterval = setInterval(function () {
            t.getData();
          }, 5e3));
      },
      stopTouch: function (t) {
        this.folded && this.isPlateBoard && t.preventDefault();
      },
      popupTouchStart: function (t) {
        this.isPlateBoard &&
          ((this.popupStartY = t.touches[0].pageY), (this.popupCanClick = !0));
      },
      popupTouchMove: function (t) {
        if (this.isPlateBoard) {
          t.stopPropagation(), (this.popupCanClick = !1);
          var e = this.$refs.popupScroll;
          e.offsetHeight >= e.scrollHeight
            ? t.preventDefault()
            : 0 === e.scrollTop
            ? t.touches[0].pageY > this.popupStartY && t.preventDefault()
            : e.offsetHeight + e.scrollTop >= e.scrollHeight &&
              t.touches[0].pageY < this.popupStartY &&
              t.preventDefault();
        }
      },
      changeData: function (t) {
        this.plateData = t;
      },
      getData: function () {
        return (
          (o = this),
          null,
          (i = t().mark(function o() {
            var i,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        e.getPlateListData(a.StockBridge, this.symbol)
                      );
                    case 2:
                      (i = t.sent) &&
                        0 == +i.code &&
                        (this.plateData = i.data || []),
                        (this.loaded = !0),
                        this.$emit("loaded"),
                        setTimeout(function () {
                          r.loadHeight = !0;
                        }, 10),
                        this.firstLoaded || (this.firstLoaded = !0);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this
            );
          })),
          new Promise(function (t, e) {
            var a = function (t) {
                try {
                  n(i.next(t));
                } catch (t) {
                  e(t);
                }
              },
              r = function (t) {
                try {
                  n(i.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              n = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(a, r);
              };
            n((i = i.apply(o, null)).next());
          })
        );
        var o, i;
      },
      closeBoard: function () {
        this.$emit("closePlateBoard");
      },
      showBoardTeachTips: function () {
        a.StockBridge.report("hq.stock_detail.plate_board_i_click"),
          this.$emit("jumpOtherPage"),
          a.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN20220629170316804d2480",
              articleStyle: "fullTeach",
              anchorTitle: "所属板块",
            },
          });
      },
      showTeachTips: function (t, e) {
        a.StockBridge.report("hq.stock_detail.brief_".concat(e, "_i_click")),
          a.StockRouter.routeTo({
            name: "informationDetail",
            query: {
              id: "SN20220727070218845f5161",
              articleStyle: "fullTeach",
              anchorTitle: t,
              time: new Date().getTime(),
            },
          });
      },
      toggleStock: function () {
        this.folded
          ? this.isPlateBoard
            ? a.StockBridge.report(
                "hq.stock_detail.plate_board_click_concept_show_all"
              )
            : a.StockBridge.report(
                "hq.stock_detail.brief_tab.click_concept_show_all"
              )
          : this.isPlateBoard
          ? a.StockBridge.report(
              "hq.stock_detail.plate_board_click_concept_collapse"
            )
          : a.StockBridge.report(
              "hq.stock_detail.brief_tab.click_concept_collapse"
            ),
          (this.folded = !this.folded),
          (this.stockTips = this.folded ? "展开" : "收起");
      },
      getPlateLevel: function (t) {
        switch (t) {
          case 1:
          case "1":
            return "申万一级";
          case 2:
          case "2":
            return "申万二级";
          default:
            return "";
        }
      },
      goPlate: function (t, e) {
        var o = this.plateData[e][t],
          i = o.id,
          r = o.name,
          n = o.level,
          c = e;
        "plate" === c
          ? ((c = 200),
            !this.isPlateBoard &&
              a.StockBridge.report("hq.stock_detail.belong_plate"))
          : "concept" === c
          ? ((c = 201),
            !this.isPlateBoard &&
              a.StockBridge.report("hq.stock_detail.belong_concept"))
          : "area" === c &&
            ((c = 202),
            !this.isPlateBoard &&
              a.StockBridge.report("hq.stock_detail.belong_area")),
          1 == +n &&
            !this.isPlateBoard &&
            a.StockBridge.report(
              "hq.stock_detail.brief_primary_industry_click",
              { stockid: this.market_type + this.scode }
            ),
          this.isPlateBoard &&
            a.StockBridge.report("hq.stock_detail.plate_board_block_click", {
              stockid: "pt".concat(i),
            }),
          "wzq" === a.StockBridge.ENV &&
            a.StockBridge.routeTo({
              path: "/plate/".concat(c, "/detail"),
              query: { plateId: "pt".concat(i), title: r },
            }),
          "mini" === a.StockBridge.ENV &&
            a.StockBridge.routeTo({
              path: "/detail/plate",
              query: { type: "p", plateId: i },
            }),
          "mp" === a.StockBridge.ENV &&
            (this.$emit("jumpOtherPage"),
            a.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: "p", scode: i },
            }));
      },
    },
  },
  i = a._export_sfc(o, [
    [
      "render",
      function (t, e, o, i, r, n) {
        return a.e(
          { a: r.loaded },
          r.loaded
            ? a.e(
                { b: !o.isPlateBoard },
                o.isPlateBoard
                  ? {}
                  : {
                      c: a.o(function (t) {
                        return n.showTeachTips("二、所属板块", "plate");
                      }, 3216),
                    },
                {
                  d: a.f(r.blockItem, function (t, e, i) {
                    return a.e(
                      { a: r.plateData[t] && r.plateData[t].length > 0 },
                      r.plateData[t] && r.plateData[t].length > 0
                        ? a.e(
                            { b: "concept" === t && r.plateData[t].length > 6 },
                            "concept" === t && r.plateData[t].length > 6
                              ? {
                                  c: a.t(r.stockTips),
                                  d: a.n(!r.folded && "unfold"),
                                  e: a.o(
                                    function () {
                                      return (
                                        n.toggleStock &&
                                        n.toggleStock.apply(n, arguments)
                                      );
                                    },
                                    3217,
                                    e
                                  ),
                                }
                              : {},
                            {
                              f: a.t(e),
                              g: a.n(o.isPlateBoard ? "board-title" : ""),
                              h: a.f(r.plateData[t], function (e, o, i) {
                                return a.e(
                                  { a: e.tag },
                                  e.tag ? { b: a.t(e.tag) } : {},
                                  {
                                    c: a.t(e.name),
                                    d: a.n(
                                      e.name && e.name.length > 7
                                        ? "stock-item-name-overflow"
                                        : ""
                                    ),
                                    e: "plate" === t && e.level,
                                  },
                                  "plate" === t && e.level
                                    ? { f: a.t(n.getPlateLevel(e.level)) }
                                    : {},
                                  {
                                    g: a.t(n.rateFilter(e.zdf)),
                                    h: a.n(
                                      e.zdf > 0
                                        ? "red"
                                        : e.zdf < 0
                                        ? "green"
                                        : "gray"
                                    ),
                                    i: a.s(
                                      r.folded && o > 5 && "visibility:hidden"
                                    ),
                                    j: a.o(
                                      function (e) {
                                        return (
                                          r.popupCanClick && n.goPlate(o, t)
                                        );
                                      },
                                      3218,
                                      o
                                    ),
                                    k: o,
                                  }
                                );
                              }),
                              i: a.n(
                                n.isMp && "black" !== o.skin
                                  ? "stock-item-mp-white"
                                  : ""
                              ),
                              j: a.n(
                                r.folded && "concept" === t
                                  ? "folded"
                                  : "unfolded"
                              ),
                              k: a.s(
                                r.plateData[t].length < 5 && "height:auto"
                              ),
                              l: r.introShow,
                              m: "area" === t && "brief" !== o.fromPage,
                            },
                            "area" === t && "brief" !== o.fromPage
                              ? {
                                  n: a.n(
                                    n.isMp ? "bottom-seat-mp" : "bottom-seat"
                                  ),
                                }
                              : {}
                          )
                        : r.firstLoaded
                        ? {
                            o: a.t(e),
                            p: a.n(o.isPlateBoard ? "board-title" : ""),
                          }
                        : {},
                      { q: e }
                    );
                  }),
                  e: r.firstLoaded,
                  f: a.n("brief" === o.fromPage ? "" : "list-container"),
                  g: a.o(function () {
                    return (
                      n.popupTouchStart && n.popupTouchStart.apply(n, arguments)
                    );
                  }, 3219),
                  h: a.o(function () {
                    return n.stopTouch && n.stopTouch.apply(n, arguments);
                  }, 3220),
                  i: a.n(o.isPlateBoard ? "board-bottom" : ""),
                  j: "black" === o.skin ? 1 : "",
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f0c78ee4"],
  ]);
wx.createComponent(i);
