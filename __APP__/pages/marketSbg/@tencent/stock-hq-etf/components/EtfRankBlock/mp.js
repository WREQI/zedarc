var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (t, e, r) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  h = function (t, e, n) {
    return new Promise(function (r, i) {
      var a = function (t) {
          try {
            s(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        o = function (t) {
          try {
            s(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(a, o);
        };
      s((n = n.apply(t, e)).next());
    });
  },
  p = require("../../api/index.js"),
  l = require("../../../stock-hq-data/index.js"),
  u = require("../../../../../../common/vendor.js"),
  d = {
    inject: ["hqBridge", "IS_ZXG"],
    options: { styleIsolation: "shared" },
    components: {
      EtfRankTop: function () {
        return "../EtfRankTop.js";
      },
      Tabbar: function () {
        return "../Tabbar.js";
      },
    },
    props: { isEtfPageShow: { type: Boolean, default: !1 } },
    data: function () {
      return {
        rankConfig: [
          { name: "全部", key: "etf_all" },
          { name: "宽基指数", key: "etf_scale" },
          { name: "行业主题", key: "etf_industry_theme" },
          { name: "跨境投资", key: "etf_overseas" },
        ],
        rankList: [],
        rankIndex: 0,
        rankSwiperOption: {
          followFinger: !0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !1,
          notNextTick: !0,
          grabCursor: !0,
          setWrapperSize: !0,
          mousewheelControl: !0,
          observeParents: !0,
          loop: !1,
          slidesPerView: 1,
          touchAngle: 30,
          resistanceRatio: 0,
        },
        currSwiperHeight: 208,
        rankloadding: !0,
        sortDirect: "down",
        sortType: "priceRatio",
        isSwitchByClick: !1,
        isReportScroll: !1,
        isEtfBlockShow: !1,
        indexFilter: !1,
      };
    },
    created: function () {
      (this.indexFilter = this.hqBridge.getStorage("etf_rank_index_filter")),
        this.getRankData(!0, !0);
    },
    computed: {
      isPro: function () {
        return "wzq" === this.hqBridge.ENV || !0;
      },
    },
    watch: {
      isEtfPageShow: function (t) {
        this.isEtfBlockShow = t;
      },
    },
    methods: {
      openTeachPop: function () {
        this.$emit("onShowTeachPop");
      },
      toggleIndexFilter: function () {
        (this.indexFilter = !this.indexFilter),
          this.hqBridge.setStorage("etf_rank_index_filter", this.indexFilter),
          this.getRankData(!0);
      },
      getRankData: function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return h(
          this,
          null,
          t().mark(function h() {
            var u,
              d,
              f,
              k,
              g = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (d =
                          (null == (u = this.rankConfig[this.rankIndex])
                            ? void 0
                            : u.key) || "etf_all"),
                        this.indexFilter &&
                          (d = "".concat(d, "_group_by_index")),
                        (f = {
                          board_type: d,
                          sort_type: this.sortType,
                          fund_type: "inner",
                          direct: this.sortDirect,
                          count: 5,
                          offset: 0,
                          label: "11,22,21,20,12,23",
                          app: "wzq" === this.hqBridge.ENV ? "wzq" : "wzqxcx",
                        }),
                        (t.next = 6),
                        p.api.getETFListData(this.hqBridge, f)
                      );
                    case 6:
                      (k = t.sent),
                        (this.rankloadding = !1),
                        k && 0 == +k.code && k.data
                          ? ((this.rankList = k.data.rank_list || []),
                            (this.rankList = this.rankList.map(function (t) {
                              return (
                                (n = (function (t, n) {
                                  for (var r in n || (n = {}))
                                    o.call(n, r) && c(t, r, n[r]);
                                  if (a) {
                                    var i,
                                      h = e(a(n));
                                    try {
                                      for (h.s(); !(i = h.n()).done; ) {
                                        r = i.value;
                                        s.call(n, r) && c(t, r, n[r]);
                                      }
                                    } catch (t) {
                                      h.e(t);
                                    } finally {
                                      h.f();
                                    }
                                  }
                                  return t;
                                })({}, t)),
                                (h = {
                                  codeformat: g.getRankCode(t.code),
                                  zdfclass: g.getZdpClass(t.zdf),
                                  zdfformat: g.getRankInfo(t.zdf),
                                }),
                                r(n, i(h))
                              );
                              var n, h;
                            })))
                          : (this.rankList = []),
                        this.$nextTick(function () {
                          n && g.setSwiperHeight(g.rankIndex);
                        }),
                        l &&
                          this.rankList &&
                          this.rankList.length > 0 &&
                          (this.hqBridge.report("hq.etfpage.rank_block_show"),
                          this.hqBridge.report(
                            "hq.etfpage.".concat(
                              this.rankConfig[this.rankIndex].key,
                              "_rank_tab_show"
                            )
                          )),
                        (t.next = 13);
                      break;
                    case 10:
                      (t.prev = 10),
                        (t.t0 = t.catch(0)),
                        (this.rankloadding = !1),
                        (this.rankList = []),
                        this.$nextTick(function () {
                          n && g.setSwiperHeight(g.rankIndex);
                        });
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              h,
              this,
              [[0, 10]]
            );
          })
        );
      },
      getRankCode: function (t) {
        return t && "--" !== t ? (l.utils.splitSymbol(t) || {}).scode : "";
      },
      getZdpClass: function (t) {
        return t > 0 ? "rise" : t < 0 ? "drop" : "equal";
      },
      getRankInfo: function (t) {
        return t && "--" !== t
          ? +t > 0
            ? "+".concat(t, "%")
            : "".concat(t, "%")
          : "--";
      },
      setSwiperHeight: function (e) {
        var n = this;
        this.$nextTick(function () {
          return h(
            n,
            null,
            t().mark(function n() {
              var r, i, a;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          this.hqBridge.getEleInfo(".ranktop-wrapper", this)
                        );
                      case 2:
                        (r = t.sent),
                          (i = r.height),
                          (a = void 0 === i ? 208 : i),
                          e === this.rankIndex && (this.currSwiperHeight = a);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                },
                n,
                this
              );
            })
          );
        });
      },
      gotoETFRankPage: function () {
        var t,
          e = "".concat(
            (null == (t = this.rankConfig[this.rankIndex]) ? void 0 : t.key) ||
              "etf_all"
          ),
          n = this.indexFilter ? "1" : "";
        u.StockBridge.openExtraWebview(
          "https://wzq.tenpay.com/mp/v2/index.html#/etf-all-rank?curTab="
            .concat(e, "&indexFilter=")
            .concat(n)
        ),
          this.hqBridge.report("hq.etfpage.goto_etfrank_page");
      },
      rankSwitchTab: function (t) {
        (this.isSwitchByClick = !0), (this.rankIndex = t);
      },
      rankSwiperChange: function (t) {
        var e = (null == t ? void 0 : t.detail) || {},
          n = e.current;
        ("touch" === e.source || this.isSwitchByClick) &&
          ((this.rankIndex = n || 0),
          (this.isSwitchByClick = !1),
          (this.rankloadding = !0),
          this.getRankData(!0, !0),
          this.hqBridge.report(
            "hq.etfpage.".concat(
              this.rankConfig[this.rankIndex].key,
              "_rank_tab_click"
            )
          ),
          (this.isReportScroll = !1));
      },
      stockClickReport: function (t) {
        this.hqBridge.report("hq.etfpage.etfList_stock_click", { stockid: t });
      },
      handleZXGAppSwipeActionChange: function (t) {
        if (this.IS_ZXG)
          try {
            this.$sdk.handleJSTouchEventFirst(t).catch(function () {});
          } catch (t) {}
      },
    },
  };
Array || (u.resolveComponent("Tabbar") + u.resolveComponent("etf-rank-top"))();
var f = u._export_sfc(d, [
  [
    "render",
    function (t, e, n, r, i, a) {
      return {
        a: u.n(a.isPro ? "list-title-wrapper-pro" : ""),
        b: u.o(function (t) {
          return a.gotoETFRankPage();
        }, 3561),
        c: u.o(a.rankSwitchTab, 3562),
        d: u.p({ "rank-index": i.rankIndex, "rank-config": i.rankConfig }),
        e: u.f(i.rankConfig, function (t, e, n) {
          return u.e(
            i.rankloadding
              ? {}
              : {
                  a: u.sr("etfrank", "76e4929c-1-" + n, { f: 1 }),
                  b: e,
                  c: u.n("list".concat(e, "-wrapper")),
                  d: u.o(a.stockClickReport, 3563, e),
                  e: u.o(a.toggleIndexFilter, 3564, e),
                  f: u.o(
                    function (t) {
                      return a.openTeachPop();
                    },
                    3565,
                    e
                  ),
                  g: "76e4929c-1-" + n,
                  h: u.p({
                    "rank-list": i.rankList,
                    "is-etf-page-show": i.isEtfBlockShow,
                    "show-tag": !0,
                    "index-filter": i.indexFilter,
                    "current-tab": t.key,
                    "is-item-activated": e === i.rankIndex,
                  }),
                },
            { i: ["list".concat(e, "-wrapper")], j: e }
          );
        }),
        f: !i.rankloadding,
        g: i.rankIndex,
        h: "".concat(i.currSwiperHeight, "px"),
        i: u.o(function () {
          return a.rankSwiperChange && a.rankSwiperChange.apply(a, arguments);
        }, 3566),
        j: u.o(function (t) {
          return a.handleZXGAppSwipeActionChange(!0);
        }, 3567),
        k: u.o(function (t) {
          return a.handleZXGAppSwipeActionChange(!1);
        }, 3568),
        l: u.n(a.isPro ? "list-wrapper-pro" : ""),
      };
    },
  ],
  ["__scopeId", "data-v-76e4929c"],
]);
wx.createComponent(f);
