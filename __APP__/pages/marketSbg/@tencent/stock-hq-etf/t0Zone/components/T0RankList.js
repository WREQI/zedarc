var e = require("../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../@babel/runtime/helpers/Objectentries"),
  require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  h = function (e, t, i) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  u = function (e, t) {
    for (var i in t || (t = {})) c.call(t, i) && h(e, i, t[i]);
    if (l) {
      var n,
        a = r(l(t));
      try {
        for (a.s(); !(n = a.n()).done; ) {
          i = n.value;
          d.call(t, i) && h(e, i, t[i]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  p = function (e, t) {
    return o(e, s(t));
  },
  f = function (e, t, i) {
    return new Promise(function (n, r) {
      var a = function (e) {
          try {
            s(i.next(e));
          } catch (e) {
            r(e);
          }
        },
        o = function (e) {
          try {
            s(i.throw(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, o);
        };
      s((i = i.apply(e, t)).next());
    });
  },
  g = require("../../../../../../common/vendor.js"),
  m = require("../../../stock-hq-data/index.js"),
  y = require("../../api/index.js"),
  v = require("../../utils/common.js"),
  b = {
    name: "T0RankList",
    components: {
      Tabbar: function () {
        return "../../components/Tabbar.js";
      },
      EtfRankTop: function () {
        return "../../components/EtfRankTop.js";
      },
      TeachPop: function () {
        return "../../components/TeachPop.js";
      },
      WzqInfoModal: function () {
        return "../../node-modules/@tencent/st-wzqinfo-modal/src/WzqInfoModal.js";
      },
    },
    inject: ["hqBridge"],
    provide: { isLite: ["mpwzq", "wzqlight"].includes("mpweapp") },
    props: {
      isApp: { type: Boolean, default: !1 },
      defaultCategory: { type: String, default: "etf_all" },
      defaultIndexFilter: { type: Boolean, default: !0 },
      isHsTrading: { type: Boolean, default: !1 },
      channelId: { type: String, default: "" },
      isChannelIdReady: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        rankConfig: [
          { name: "全部", key: "etf_all", boardType: "etf_all" },
          { name: "全球股市", key: "etf_overseas", boardType: "etf_overseas" },
          { name: "商品", key: "etf_commodity", boardType: "etf_commodity" },
          {
            name: "稳健理财",
            key: "etf_bond_money",
            boardType: "etf_all",
            fundTypeFilter: "bond,money",
          },
        ],
        rankIndex: 0,
        categoryData: {
          etf_all: [],
          etf_overseas: [],
          etf_commodity: [],
          etf_bond_money: [],
        },
        indexFilter: !0,
        loadingKeys: {},
        offset: 0,
        count: 5,
        sortType: "priceRatio",
        sortDirect: "down",
        teachPopVisible: !1,
        currentSkin: v.skin(),
        isSelfStockMp: !0,
        showTipModal: !1,
        tipModalConfig: {
          title: "指数过滤",
          content: [
            {
              type: "text",
              text: "市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选“指数过滤”后，榜单内跟踪相同指数的ETF仅展示一只。",
            },
          ],
          cancelBtn: "我知道了",
        },
        swiperHeight: null,
        swiperOptions: { autoHeight: !0, observeParents: !0, observer: !0 },
        isMp: ["mpwzq", "mpweapp"].includes("mpweapp"),
        heightUpdateTimer: null,
        activeSlideResizeObserver: null,
        isPageVisible: !0,
        pollTimer: null,
      };
    },
    computed: {
      tabConfig: function () {
        return this.rankConfig.map(function (e) {
          return { name: e.name, key: e.key };
        });
      },
      swiperStyle: function () {
        return this.swiperHeight
          ? { height: "".concat(this.swiperHeight, "px") }
          : {};
      },
      shareIcon: function () {
        var e = v.skin();
        return "black" === e || "dark" === e
          ? "https://st.gtimg.com/design/5c8d3517ec1225898294d85de0281be8.png"
          : "https://st.gtimg.com/pcm/mpuve6mp_e98eeaa4c7bcddd599a48d145517cfa5.svg";
      },
    },
    created: function () {
      var e = this,
        t = this.rankConfig.findIndex(function (t) {
          return t.key === e.defaultCategory;
        });
      t >= 0 && (this.rankIndex = t),
        (this.indexFilter = this.defaultIndexFilter),
        this.loadAllCategories();
    },
    mounted: function () {
      this.updateSwiperHeight(), this.startPoll();
      try {
        g.StockBridge.mtaReport({
          busi: "hq",
          eventName: "t_leaderboard_list_brow",
          exposure: { selector: ".t0-rank", context: this },
        });
      } catch (e) {}
      this.isMp ||
        document.addEventListener(
          "visibilitychange",
          this.handleVisibilityChange
        );
    },
    activated: function () {
      var e;
      this.isPageVisible = !0;
      var t = null == (e = this.rankConfig[this.rankIndex]) ? void 0 : e.key;
      t && this.getRankData(t, !0), this.startPoll();
    },
    deactivated: function () {
      this.stopPoll();
    },
    beforeDestroy: function () {
      this.clearHeightObserver(),
        this.stopPoll(),
        this.isMp ||
          document.removeEventListener(
            "visibilitychange",
            this.handleVisibilityChange
          );
    },
    methods: {
      startPoll: function () {
        var e = this;
        this.stopPoll(),
          (this.pollTimer = setInterval(function () {
            var t;
            if (e.isPageVisible && e.isHsTrading) {
              var i = null == (t = e.rankConfig[e.rankIndex]) ? void 0 : t.key;
              i && e.getRankData(i, !0);
            }
          }, 5e3));
      },
      stopPoll: function () {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      },
      handleVisibilityChange: function () {
        var e;
        if (((this.isPageVisible = !document.hidden), this.isPageVisible)) {
          var t =
            null == (e = this.rankConfig[this.rankIndex]) ? void 0 : e.key;
          t && this.getRankData(t, !0), this.startPoll();
        } else this.stopPoll();
      },
      loadAllCategories: function () {
        return f(
          this,
          null,
          n().mark(function e() {
            var t = this;
            return n().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Promise.all(
                          this.rankConfig.map(function (e) {
                            return t.getRankData(e.key, !0);
                          })
                        )
                      );
                    case 2:
                      this.$nextTick(function () {
                        t.updateSwiperHeight();
                      });
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getRankData: function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return f(
          this,
          null,
          n().mark(function a() {
            var o,
              s,
              l,
              c,
              d,
              h,
              f,
              g = this;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (this.loadingKeys[e]) {
                        n.next = 21;
                        break;
                      }
                      return (
                        (this.loadingKeys = p(
                          u({}, this.loadingKeys),
                          i({}, e, !0)
                        )),
                        (n.prev = 2),
                        (o = this.rankConfig.find(function (t) {
                          return t.key === e;
                        }) ||
                          this.rankConfig[this.rankIndex] || {
                            boardType: "etf_all",
                          }),
                        (s = o.boardType || o.key || "etf_all"),
                        this.indexFilter &&
                          (s = "".concat(s, "_group_by_index")),
                        (l = "etf_t0=1"),
                        o.fundTypeFilter &&
                          (l = "etf_t0=1&in_fund_type=".concat(
                            o.fundTypeFilter
                          )),
                        (c = {
                          board_type: s,
                          sort_type: this.sortType,
                          direct: this.sortDirect,
                          count: this.count,
                          offset: r ? 0 : this.offset,
                          selector: l,
                          label: "11,22,21,20,12,23",
                          fund_type: "inner",
                          app: "wzq" === this.hqBridge.ENV ? "wzq" : "wzqxcx",
                        }),
                        (n.next = 11),
                        y.api.getETFListData(this.hqBridge, c)
                      );
                    case 11:
                      (d = n.sent) && 0 == +d.code && d.data
                        ? ((h = (d.data.rank_list || []).map(function (e) {
                            return p(u({}, e), {
                              codeformat: g.getCode(e.code),
                              zdfclass: v.getRatioClass(e.zdf),
                              zdfformat: g.formatRate(e.zdf),
                              yjlclass: v.getRatioClass(e.yjl),
                              yjlformat: g.formatRate(e.yjl),
                            });
                          })),
                          r
                            ? (this.categoryData = p(
                                u({}, this.categoryData),
                                i({}, e, h)
                              ))
                            : ((f = this.categoryData[e] || []),
                              (this.categoryData = p(
                                u({}, this.categoryData),
                                i({}, e, [].concat(t(f), t(h)))
                              ))))
                        : r &&
                          !this.categoryData[e] &&
                          (this.categoryData = p(
                            u({}, this.categoryData),
                            i({}, e, [])
                          )),
                        (n.next = 18);
                      break;
                    case 15:
                      (n.prev = 15),
                        (n.t0 = n.catch(2)),
                        r &&
                          !this.categoryData[e] &&
                          (this.categoryData = p(
                            u({}, this.categoryData),
                            i({}, e, [])
                          ));
                    case 18:
                      return (
                        (n.prev = 18),
                        (this.loadingKeys = p(
                          u({}, this.loadingKeys),
                          i({}, e, !1)
                        )),
                        n.finish(18)
                      );
                    case 21:
                    case "end":
                      return n.stop();
                  }
              },
              a,
              this,
              [[2, 15, 18, 21]]
            );
          })
        );
      },
      getCode: function (e) {
        return e && "--" !== e ? (m.utils.splitSymbol(e) || {}).scode : "";
      },
      formatRate: function (e) {
        if (null == e || "" === e || "--" === e) return "--";
        var t = parseFloat(e);
        return Number.isNaN(t)
          ? "--"
          : "".concat(t > 0 ? "+" : "").concat(e, "%");
      },
      handleTabClick: function (e) {
        if (e !== this.rankIndex) {
          (this.rankIndex = e), this.slideToIndex(e);
          try {
            g.StockBridge.mtaReport({
              busi: "hq",
              eventName: "t_leaderboard_header_click",
            });
          } catch (e) {}
        }
      },
      handleSwiperChange: function (e) {
        var t,
          i = this,
          n = null == (t = null == e ? void 0 : e.detail) ? void 0 : t.current;
        void 0 !== n &&
          n !== this.rankIndex &&
          ((this.rankIndex = n),
          this.$nextTick(function () {
            i.updateSwiperHeight();
          }));
      },
      slideToIndex: function (e) {
        var t,
          i,
          n,
          r = this,
          a =
            null ==
            (i =
              null == (t = this.$refs.swiperRoot)
                ? void 0
                : t.getSwiperInstance)
              ? void 0
              : i.call(t);
        null == (n = null == a ? void 0 : a.slideTo) || n.call(a, e, 200, !1),
          this.$nextTick(function () {
            r.updateSwiperHeight();
          });
      },
      updateSwiperHeight: function () {
        var e = this;
        this.isMp
          ? this.updateMpSwiperHeight()
          : "undefined" != typeof window &&
            (null !== this.heightUpdateTimer &&
              window.cancelAnimationFrame(this.heightUpdateTimer),
            (this.heightUpdateTimer = window.requestAnimationFrame(function () {
              (e.heightUpdateTimer = null),
                e.syncSwiperHeight(),
                e.observeActiveSlideHeight();
            })));
      },
      syncSwiperHeight: function () {
        var e,
          t,
          i,
          n,
          r,
          a = null == (e = this.$refs.swiperRoot) ? void 0 : e.$el;
        if (a) {
          var o = Array.from(a.querySelectorAll("swiper-slide"))[
              this.rankIndex
            ],
            s = null == o ? void 0 : o.querySelector(".t0-rank__slide"),
            l =
              (null == s ? void 0 : s.scrollHeight) ||
              (null == o ? void 0 : o.scrollHeight) ||
              0;
          l > 0 && this.swiperHeight !== l && (this.swiperHeight = l);
          var c =
            null ==
            (i =
              null == (t = this.$refs.swiperRoot)
                ? void 0
                : t.getSwiperInstance)
              ? void 0
              : i.call(t);
          null == (n = null == c ? void 0 : c.updateAutoHeight) || n.call(c, 0),
            null == (r = null == c ? void 0 : c.updateSize) || r.call(c);
        }
      },
      updateMpSwiperHeight: function () {
        var e = this;
        this.$nextTick(function () {
          if (void 0 !== g.wx$1 && g.wx$1.createSelectorQuery) {
            var t = ".t0-rank__slide--".concat(e.rankIndex);
            g.wx$1
              .createSelectorQuery()
              .in(e)
              .select(t)
              .boundingClientRect(function (t) {
                var i = Number(null == t ? void 0 : t.height) || 0;
                i > 0 && e.swiperHeight !== i && (e.swiperHeight = i);
              })
              .exec();
          }
        });
      },
      observeActiveSlideHeight: function () {
        var e,
          t = this;
        if (
          (this.clearHeightObserver(),
          !this.isMp && "undefined" != typeof ResizeObserver)
        ) {
          var i = null == (e = this.$refs.swiperRoot) ? void 0 : e.$el;
          if (i) {
            var n = Array.from(i.querySelectorAll("swiper-slide"))[
                this.rankIndex
              ],
              r = null == n ? void 0 : n.querySelector(".t0-rank__slide");
            r &&
              ((this.activeSlideResizeObserver = new ResizeObserver(
                function () {
                  t.syncSwiperHeight();
                }
              )),
              this.activeSlideResizeObserver.observe(r));
          }
        }
      },
      clearHeightObserver: function () {
        var e;
        null !== this.heightUpdateTimer &&
          "undefined" != typeof window &&
          (window.cancelAnimationFrame(this.heightUpdateTimer),
          (this.heightUpdateTimer = null)),
          null == (e = this.activeSlideResizeObserver) || e.disconnect(),
          (this.activeSlideResizeObserver = null);
      },
      handleTeachPop: function () {
        this.isSelfStockMp
          ? (this.showTipModal = !0)
          : (this.teachPopVisible = !0);
      },
      onToggleIndexFilter: function (e) {
        (this.indexFilter = e), this.loadAllCategories();
      },
      onStockClick: function (e) {
        try {
          g.StockBridge.mtaReport({
            busi: "hq",
            eventName: "t_leaderboard_list_click",
          });
        } catch (e) {}
      },
      jump: function () {
        var t;
        try {
          g.StockBridge.mtaReport({
            busi: "hq",
            eventName: "t_rank_list_triangle_jump_click",
          });
        } catch (e) {}
        var i = {
            curTab:
              null == (t = this.rankConfig[this.rankIndex]) ? void 0 : t.key,
            indexFilter: this.indexFilter ? 1 : void 0,
          },
          n = ["mpwzq", "wzqlight"].includes("mpweapp"),
          r = Object.entries(i)
            .filter(function (t) {
              var i = e(t, 2)[1];
              return null != i && "" !== i;
            })
            .map(function (t) {
              var i = e(t, 2),
                n = i[0],
                r = i[1];
              return "".concat(n, "=").concat(encodeURIComponent(r));
            })
            .join("&"),
          a = r ? "#/etf-trade-rank?".concat(r) : "#/etf-trade-rank";
        return (
          n && (a = "".concat(a, "&lite=1")),
          void g.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html?".concat(a)
          )
        );
      },
    },
  };
Array ||
  (
    g.resolveComponent("Tabbar") +
    g.resolveComponent("etf-rank-top") +
    g.resolveComponent("teach-pop") +
    g.resolveComponent("WzqInfoModal")
  )();
var k = g._export_sfc(b, [
  [
    "render",
    function (e, t, i, n, r, a) {
      return g.e(
        {
          a: a.shareIcon,
          b: g.o(function () {
            return a.jump && a.jump.apply(a, arguments);
          }, 3167),
          c: g.o(a.handleTabClick, 3168),
          d: g.p({
            "rank-config": a.tabConfig,
            "rank-index": r.rankIndex,
            "align-left": !r.isMp,
          }),
          e: g.f(r.rankConfig, function (e, t, i) {
            return {
              a: g.o(a.onToggleIndexFilter, 3169, e.key),
              b: g.o(a.handleTeachPop, 3170, e.key),
              c: g.o(a.onStockClick, 3171, e.key),
              d: "8e49b063-1-" + i,
              e: g.p({
                "rank-list": r.categoryData[e.key] || [],
                "index-filter": r.indexFilter,
                "show-tag": !0,
                "show-rank-num": !1,
                "middle-label": "涨跌幅",
                "middle-field": "zdfformat",
                "middle-color-field": "zdfclass",
                "right-label": "溢折率",
                "right-field": "yjlformat",
                "right-color-field": "yjlclass",
                "right-width": "30%",
                variant: "t0-rank",
              }),
              f: g.n("t0-rank__slide--".concat(t)),
              g: e.key,
            };
          }),
          f: r.rankIndex,
          g: r.swiperOptions,
          h: g.s(a.swiperStyle),
          i: g.o(function () {
            return (
              a.handleSwiperChange && a.handleSwiperChange.apply(a, arguments)
            );
          }, 3172),
          j: g.o(function (e) {
            return (r.teachPopVisible = !1);
          }, 3173),
          k: g.p({ "show-pop": r.teachPopVisible }),
          l: r.showTipModal && r.isSelfStockMp,
        },
        r.showTipModal && r.isSelfStockMp
          ? {
              m: g.o(function (e) {
                return (r.showTipModal = !1);
              }, 3174),
              n: g.p({ skin: r.currentSkin, config: r.tipModalConfig }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8e49b063"],
]);
wx.createComponent(k);
