var t = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var i = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  s = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  h = function (t, e, i) {
    return e in t
      ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  p = function (t, e, i) {
    return new Promise(function (s, o) {
      var r = function (t) {
          try {
            c(i.next(t));
          } catch (t) {
            o(t);
          }
        },
        n = function (t) {
          try {
            c(i.throw(t));
          } catch (t) {
            o(t);
          }
        },
        c = function (t) {
          return t.done ? s(t.value) : Promise.resolve(t.value).then(r, n);
        };
      c((i = i.apply(t, e)).next());
    });
  },
  u = require("../../../../../../common/vendor.js"),
  f = require("../../../stock-crypto-modules-config/dist/index.js"),
  d = require("../../../stock-hq-data/index.js"),
  g = require("../../api/temp.js");
function k() {
  var t,
    e,
    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    o = [];
  for (var p in i) p && o.push("".concat(p, "=").concat(i[p]));
  return (
    o.push("key=".concat(f.dist.SIGN_KEY.wzq_analyse)),
    (t = (function (t, e) {
      for (var i in e || (e = {})) l.call(e, i) && h(t, i, e[i]);
      if (c) {
        var o,
          r = s(c(e));
        try {
          for (r.s(); !(o = r.n()).done; ) {
            i = o.value;
            a.call(e, i) && h(t, i, e[i]);
          }
        } catch (t) {
          r.e(t);
        } finally {
          r.f();
        }
      }
      return t;
    })({}, i)),
    (e = { sign: u.md5Module(o.join("&")).toLowerCase() }),
    r(t, n(e))
  );
}
var w = {},
  b = {
    amplitude: "--",
    brief: "",
    change_percent: "--",
    liutong_cap: "--",
    main_net_inflow: "--",
    market_cap: "--",
    pe_ttm: "--",
    price: "--",
    price_change: "--",
    quantity_ratio: "--",
    stock_code: "--",
    stock_name: "--",
    stock_type: "--",
    tags: "",
    turnover_amount: "--",
    turnover_money: "--",
    turnover_ratio: "--",
  },
  m = {
    id: "stocktab",
    slidingContainerSelector: ".stock-cats",
    scrollWrapperSelector: ".stock-tab-container",
    damping: 0.6,
    enableScrollX: !0,
    enableScrollY: !1,
    allowReload: !1,
  },
  v = {
    id: "stocklist",
    slidingContainerSelector: ".list-overflow-wrapper",
    scrollWrapperSelector: ".list-overflow",
    damping: 0.6,
    enableScrollX: !0,
    enableScrollY: !1,
    allowReload: !0,
  },
  y = {
    props: ["plateId", "skin", "market", "isShowXiaobaoAI", "mpscrollTop"],
    components: {
      ListItem: function () {
        return "./StockItem.js";
      },
      SearchAiBar: function () {
        return "../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
    },
    data: function () {
      return {
        isBroker: u.isBroker,
        lastPosition: void 0,
        offset: 0,
        stockList: [],
        listLimit: 50,
        listOrder: ["change_percent", "down"],
        activeFilter: -1,
        showStockBrief: !1,
        folded: {},
        showBtn: {},
        divHeights: {},
        listTH: {
          price: ["最新价", "list-price", "zxj"],
          change_percent: ["涨跌幅", "list-150", "zdf"],
          main_net_inflow: ["主力净流入", "list-200", "zljlr"],
          price_change: ["涨跌额", "list-150", "zde"],
          turnover_ratio: ["换手率", "list-180", "hsl"],
          quantity_ratio: ["量比", "list-180", "lb"],
          amplitude: ["振幅", "list-180", "zf"],
          turnover_amount: ["成交量(手)", "list-180", "cjl"],
          turnover_money: ["成交额", "list-180", "cje"],
          pe_ttm: ["市盈TTM", "list-180", "syttm"],
          liutong_cap: ["流通市值", "list-180", "ltsz"],
          market_cap: ["总市值", "list-180", "zsz"],
        },
        showMore: !1,
        showMoreFields: !1,
        statIndex: 200,
        filters: [],
        popup: {
          selected: { 11: -1, 12: -1 },
          show: !1,
          height: 0,
          top: 0,
          left: 0,
          flip: !1,
          ready: !1,
        },
        activeFilterIndex: 0,
        listMinHeight: 0,
        listTotal: 0,
        faterActiveFilter: -1,
        showAiEntry: !1,
        scrollOptions: v,
        scrollOptionsTabs: null,
        foldHeights: [],
        showAiParams: null,
        showAiDialog: !1,
        loadFilter: !0,
        foldTexts: {},
      };
    },
    inject: ["hqBridge"],
    watch: {
      showStockBrief: function (t) {
        var e = this;
        t &&
          this.$nextTick(function () {
            e.stockList.forEach(function (t) {
              e.checkBriefHeight(t.stock_code, !0);
            });
          });
      },
      mpscrollTop: function () {
        this.handleScroll();
      },
      showAiEntry: function (t) {},
    },
    mounted: function () {
      return p(
        this,
        null,
        i().mark(function t() {
          return i().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), this.getStockList();
                  case 2:
                    this.judgeTime();
                  case 3:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      isClassic: function () {
        return "wzq" === this.hqBridge.ENV || ["mpweapp"].includes("mpweapp");
      },
      isH5: function () {
        return "wzq" === this.hqBridge.ENV || "mini" === this.hqBridge.ENV;
      },
      isMini: function () {
        return "mini" === this.hqBridge.ENV;
      },
      showFilter: function () {
        return this.filters && this.filters.length > 0;
      },
      symbol: function () {
        return d.utils.getSymbol(this.market, this.plateId);
      },
      reportInfo: function () {
        return { stockid: this.symbol };
      },
    },
    beforeDestroy: function () {
      this.clearRefresh();
    },
    methods: {
      foldClass: function (t) {
        var e, i;
        return t && "--" !== t && (null == (e = this.showBtn) ? void 0 : e[t])
          ? (null == (i = this.folded) ? void 0 : i[t])
            ? "unfolded"
            : "folded"
          : "";
      },
      briefHeight: function (t) {
        return t && "--" !== t && this.divHeights[t]
          ? this.divHeights[t]
          : "0px";
      },
      briefClass: function (t) {
        return t && "--" !== t ? (this.divHeights[t] ? "" : "item-desc") : "";
      },
      getFoldTexts: function (t) {
        return this.foldTexts[t];
      },
      autoShowMoreFields: function () {
        var t = this;
        this.showMoreFields ||
          (this.isMp
            ? (this.showMoreFields = !0)
            : (this.showMoreTimer && clearTimeout(this.showMoreTimer),
              (this.showMoreTimer = setTimeout(function () {
                t.handleScrollX(), (t.showMoreTimer = null);
              }, 3e3))));
      },
      handleScrollX: function (t) {
        var e = this;
        this.isClassic &&
          !this.showMoreFields &&
          window.requestAnimationFrame(function () {
            e.showMoreFields = !0;
          });
      },
      preventTouch: function (t) {
        t.stopPropagation(), t.preventDefault();
      },
      showTeachTips: function () {
        u.StockRouter.routeTo({
          name: "informationDetail",
          query: {
            id: "SN20220629170316804d2480",
            articleStyle: "fullTeach",
            anchorTitle: "成份股指标",
          },
        });
      },
      getCurSubItem: function (t) {
        var e = this.popup.selected[t.type];
        return t.sub.find(function (t) {
          return +t.type == +e;
        });
      },
      showSubFilterName: function (t) {
        return this.getCurSubItem(t).name;
      },
      showSubFilterCnt: function (t) {
        return this.getCurSubItem(t).cnt;
      },
      closeMask: function () {
        return p(
          this,
          null,
          i().mark(function t() {
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (this.popup.show = !1), (this.popup.ready = !1);
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      showPopup: function () {
        var t = this;
        (this.popup.show = !0),
          (this.popup.ready = !1),
          this.$nextTick(function () {
            var e = 0,
              i = 0,
              s = 0,
              o = 0,
              r = 0,
              n = 0,
              c = 1;
            t.isMp
              ? ((n = u.wx$1.getSystemInfoSync().windowHeight),
                (c = u.wx$1.getSystemInfoSync().pixelRatio),
                u.wx$1
                  .createSelectorQuery()
                  .in(t)
                  .select("#stocktab")
                  .boundingClientRect()
                  .select("#popup")
                  .boundingClientRect()
                  .select(".filterblock".concat(t.activeFilterIndex))
                  .boundingClientRect()
                  .exec(function (l) {
                    (e = l && l[0] && l[0].top),
                      (i = l && l[0] && l[0].height),
                      (r = l && l[1] && l[1].width),
                      (t.popup.height = l && l[1] && l[1].height),
                      (s = l && l[2] && l[2].left),
                      (o = l && l[2] && l[2].width),
                      (t.popup.top = e + i + 2 * c),
                      e + i + t.popup.height < n - 20 * c
                        ? ((t.popup.flip = !1), (t.popup.top = e + i + 2 * c))
                        : ((t.popup.flip = !0),
                          (t.popup.top = e - t.popup.height)),
                      (t.popup.left = s - (r - 25 - o / 2)),
                      setTimeout(function () {
                        t.popup.ready = !0;
                      }, 30);
                  }))
              : ((e =
                  t.$refs.stocktab &&
                  t.$refs.stocktab.getBoundingClientRect() &&
                  t.$refs.stocktab.getBoundingClientRect().top),
                (i =
                  t.$refs.stocktab &&
                  t.$refs.stocktab.getBoundingClientRect() &&
                  t.$refs.stocktab.getBoundingClientRect().height),
                (s =
                  t.$refs["filterblock".concat(t.activeFilterIndex)] &&
                  t.$refs["filterblock".concat(t.activeFilterIndex)][0] &&
                  t.$refs[
                    "filterblock".concat(t.activeFilterIndex)
                  ][0].getBoundingClientRect().left),
                (o =
                  t.$refs["filterblock".concat(t.activeFilterIndex)] &&
                  t.$refs["filterblock".concat(t.activeFilterIndex)][0] &&
                  t.$refs[
                    "filterblock".concat(t.activeFilterIndex)
                  ][0].getBoundingClientRect().width),
                (r =
                  t.$refs.popup &&
                  t.$refs.popup.getBoundingClientRect() &&
                  t.$refs.popup.getBoundingClientRect().width),
                (t.popup.top = e + i + 2 * window.devicePixelRatio),
                (t.popup.height = t.$refs.popup && t.$refs.popup.offsetHeight),
                (n = window.innerHeight),
                (c = window.devicePixelRatio),
                e + i + t.popup.height < n - 20 * c
                  ? ((t.popup.flip = !1), (t.popup.top = e + i + 2 * c))
                  : ((t.popup.flip = !0), (t.popup.top = e - t.popup.height)),
                (t.popup.left = s - (r - 25 - o / 2)),
                (t.popup.ready = !0));
          });
      },
      switchIndex: function (t) {
        return p(
          this,
          null,
          i().mark(function e() {
            var s;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (s = 0),
                        this.isMp ||
                          (s =
                            this.$refs.stocktab &&
                            this.$refs.stocktab.scrollLeft),
                        (this.popup.selected = { 11: -1, 12: -1 }),
                        "all" === t
                          ? ((this.popup.selected[this.faterActiveFilter] =
                              "all"),
                            (this.activeFilter = -1))
                          : ((this.popup.selected[this.faterActiveFilter] =
                              t.type),
                            (this.activeFilter = t.type)),
                        (this.popup.show = !1),
                        this.hqBridge.report(
                          "hq.plate.detail.stockfilter.click",
                          { type: this.activeFilter, stockid: this.symbol }
                        ),
                        this.resetList(),
                        !this.isMp && (this.$refs.stocktab.scrollLeft = s),
                        this.refreshTabsScrollManager();
                    case 2:
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
      refreshTabsScrollManager: function () {
        var t = this,
          e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.scrollOptionsTabs = null),
          setTimeout(function () {
            t.scrollOptionsTabs = e
              ? Object.assign({}, m, { allowReload: !0 })
              : m;
          }, 300);
      },
      handleScroll: function () {
        var t = this;
        this.timer && clearTimeout(this.timer),
          (this.timer = setTimeout(function () {
            t.handleScrollEnd(), t.autoShowMoreFields();
          }, 200));
      },
      handleScrollEnd: function () {
        var t = this,
          e = u.wx$1.createSelectorQuery().in(this);
        e.select(".list-container")
          .boundingClientRect(function (i) {
            if (i) {
              var s = Math.abs(i.top);
              t.lastPosition !== s &&
                ((t.lastPosition = s),
                e
                  .selectAll(".list-item")
                  .boundingClientRect(function (e) {
                    e &&
                      0 !== e.length &&
                      ((t.offset = e.findIndex(function (t) {
                        return t.top > 0;
                      })),
                      t.offset > 0 && t.getStockList());
                  })
                  .exec());
            }
          })
          .exec();
      },
      clearRefresh: function () {
        this.showMoreTimer && clearTimeout(this.showMoreTimer),
          this.interval && clearInterval(this.interval),
          (this.interval = null),
          this.isWzq && window.removeEventListener("scroll", this.handleScroll);
      },
      setPolling: function () {
        this.clearRefresh(), this.judgeTime();
      },
      judgeTime: function () {
        var t = this;
        this.isWzq && window.addEventListener("scroll", this.handleScroll);
        var e = new Date().toTimeString().slice(0, 5).replace(":", "");
        d.utils.isHSPlate("p") &&
          g.isHSTradeTime(e) &&
          (this.interval = setInterval(function () {
            t.getStockList();
          }, 5e3));
      },
      getStockList: function () {
        return p(
          this,
          null,
          i().mark(function t() {
            var s,
              o,
              r,
              n,
              c,
              l,
              a,
              h,
              p,
              f,
              d,
              w,
              m,
              v,
              y,
              x,
              S,
              _,
              F,
              B = this;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (s = "down" === this.listOrder[1] ? 1 : 2),
                        (o = new Date().getTime()),
                        (r = {
                          limit: this.listLimit,
                          need_brief: 1,
                          oem_source: g.SOURCEENUM[u.isBroker] || "",
                          offset: this.offset,
                          openid:
                            (this.isWzq &&
                              this.hqBridge.getCookie("wzq_qluin")) ||
                            "",
                          plate_code: this.plateId,
                          skey: this.isWzq
                            ? this.hqBridge.getCookie("wzq_qlskey") || ""
                            : u.StockBridge.getStorage("_qlskey") || "",
                          sort_field: this.listOrder[0],
                          sort_type: s,
                          source: "wzq",
                          stocks_type: 3,
                          time: o,
                          user_type: 5,
                        }),
                        (this.lastTime = o),
                        -1 !== (n = this.activeFilter) &&
                          (r = Object.assign({ filter_field: n }, r)),
                        k(r),
                        (t.next = 7),
                        g.getPlateListData(r, this.hqBridge)
                      );
                    case 7:
                      if (
                        ((c = t.sent),
                        r.time !== this.lastTime || !c || 0 != +c.retcode)
                      ) {
                        t.next = 25;
                        break;
                      }
                      if (
                        ((l = this.filters.length),
                        (this.filters = c.stocks.filter),
                        this.filters.length !== l &&
                          this.refreshTabsScrollManager(!0),
                        this.isClassic
                          ? ((h = c.stocks.stocks_list),
                            (p = c.stocks),
                            (f = p.total),
                            (d = p.offset),
                            -1 === this.activeFilter && (this.listTotal = f),
                            (w =
                              0 === this.stockList.length
                                ? new Array(f < 200 ? f : 200).fill(b)
                                : this.stockList),
                            (a = w).splice.apply(
                              a,
                              [this.offset, h.length].concat(e(h))
                            ),
                            f > 200 &&
                              this.offset > 100 &&
                              this.offset + 100 > w.length &&
                              (0,
                              (m =
                                this.offset + 100 > f
                                  ? f - w.length
                                  : this.offset + 100 - w.length),
                              (v = new Array(m).fill(b)),
                              (w = w.concat(v))),
                            (this.stockList = w),
                            this.statIndex >= 600 && d >= this.statIndex
                              ? (this.hqBridge.report(
                                  "hq.plate_detail.cfgscroll_600_more"
                                ),
                                (this.statIndex = 0))
                              : 0 !== this.statIndex &&
                                d >= this.statIndex &&
                                d < this.statIndex + 200 &&
                                (this.hqBridge.report(
                                  "hq.plate_detail.cfgscroll_".concat(
                                    this.statIndex
                                  )
                                ),
                                (this.statIndex = this.statIndex + 200)))
                          : (-1 === this.activeFilter &&
                              (this.isMini || this.isMp) &&
                              ((y = c.stocks.total), (this.listTotal = y)),
                            (this.stockList = c.stocks.stocks_list)),
                        this.showStockBrief &&
                          this.$nextTick(function () {
                            B.stockList.forEach(function (t) {
                              B.checkBriefHeight(t.stock_code);
                            });
                          }),
                        this.$emit("loaded"),
                        (this.showMore = !0),
                        this.autoShowMoreFields(),
                        !(
                          (x = this.stockList.findIndex(function (t) {
                            return "--" === t.stock_code;
                          })) > 0
                        ))
                      ) {
                        t.next = 25;
                        break;
                      }
                      (S = (this.offset - x) / 50 + 1),
                        (_ = this.offset),
                        (this.offset = x),
                        (F = 0);
                    case 17:
                      if (!(F < S)) {
                        t.next = 24;
                        break;
                      }
                      return (t.next = 20), this.getStockList();
                    case 20:
                      this.offset += 50;
                    case 21:
                      F++, (t.next = 17);
                      break;
                    case 24:
                      this.offset = _;
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      resetList: function () {
        return p(
          this,
          null,
          i().mark(function t() {
            var e, s;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.isMp ||
                          ((e =
                            this.$refs.stocktab &&
                            this.$refs.stocktab.getBoundingClientRect().top),
                          (s =
                            document.documentElement.clientHeight ||
                            document.body.clientHeight),
                          (this.listMinHeight = s - e - 49)),
                        (this.stockList = []),
                        (this.showMore = !1),
                        (t.next = 5),
                        this.getStockList()
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      filterStocks: function (t, e) {
        return p(
          this,
          null,
          i().mark(function s() {
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (
                        ((this.activeFilterIndex = e || 0),
                        11 != +t && 12 != +t)
                      ) {
                        i.next = 2;
                        break;
                      }
                      return i.abrupt(
                        "return",
                        ((this.faterActiveFilter = t), void this.showPopup())
                      );
                    case 2:
                      +this.activeFilter == +t
                        ? (this.activeFilter = -1)
                        : ((this.activeFilter = t),
                          (this.popup.selected = { 11: -1, 12: -1 }),
                          this.hqBridge.report(
                            "hq.plate.detail.stockfilter.click",
                            { type: this.activeFilter, stockid: this.symbol }
                          )),
                        this.resetList();
                    case 3:
                    case "end":
                      return i.stop();
                  }
              },
              s,
              this
            );
          })
        );
      },
      changeOrder: function (t) {
        this.listOrder[0] === t
          ? (this.listOrder = [t, "down" === this.listOrder[1] ? "up" : "down"])
          : (this.listOrder = [t, "down"]),
          this.getStockList(),
          this.hqBridge.report("hq.plate_detail.order_click", { ordertype: t });
      },
      toggleStocksBrief: function () {
        (this.showStockBrief = !this.showStockBrief),
          this.hqBridge.report(
            "hq.plate.detail.brief." + (this.showStockBrief ? "show" : "hide"),
            { stockid: this.symbol }
          ),
          this.getStockList();
      },
      checkBriefHeight: function (e, i) {
        var s = this;
        "--" !== e &&
          u.wx$1
            .createSelectorQuery()
            .in(this)
            .select(".stockbrief".concat(e))
            .boundingClientRect()
            .select(".stockbrief2".concat(e))
            .boundingClientRect()
            .select(".allbrief".concat(e))
            .boundingClientRect()
            .select(".stockbrief-hide-".concat(e))
            .boundingClientRect()
            .exec(function (o) {
              o[0] &&
                o[1] &&
                s.showStockBrief &&
                (!s.divHeights[e] ||
                  "0rpx" === s.divHeights[e] ||
                  s.folded[e] ||
                  i) &&
                ((s.divHeights = Object.assign(
                  {},
                  s.divHeights,
                  t({}, e, "".concat(o[0].height, "px"))
                )),
                s.folded[e] ||
                  s.foldHeights[e] ||
                  (s.foldHeights = Object.assign(
                    {},
                    s.foldHeights,
                    t({}, e, "".concat(o[0].height, "px"))
                  )),
                s.folded[e]
                  ? (s.divHeights = Object.assign(
                      {},
                      s.divHeights,
                      t({}, e, "".concat(o[3].height, "px"))
                    ))
                  : (s.divHeights = Object.assign(
                      {},
                      s.divHeights,
                      t({}, e, s.foldHeights[e])
                    )),
                o[2].height > o[0].height + 10 || null != s.folded[e]
                  ? ((s.showBtn[e] = !0),
                    (s.folded[e] = null != s.folded[e] && s.folded[e]),
                    (s.foldTexts[e] =
                      e && "--" !== e ? (s.folded[e] ? "收起" : "展开") : ""))
                  : (s.showBtn[e] = !1));
            });
      },
      changeFolded: function (t) {
        var e = this;
        (this.folded[t] = !this.folded[t]),
          this.$nextTick(function () {
            e.checkBriefHeight(t, !0),
              e.$nextTick(function () {
                e.$emit("loaded");
              }),
              (e.foldTexts[t] =
                t && "--" !== t ? (e.folded[t] ? "收起" : "展开") : "");
          }),
          this.folded[t] &&
            this.hqBridge.report("hq.plate.detail.showstockbrief.click");
      },
      onShowAiDialog: function (t) {
        (this.showAiParams = t), this.isMp && (this.showAiDialog = !0);
      },
      onShowAiEntry: function () {},
      onCloseAiDialog: function () {
        this.showAiDialog = !1;
      },
      isBeforeHeightLoaded: function (t) {
        if (0 === t) return !0;
        for (var e = 0; e < t; e++)
          if (
            "--" === this.stockList[e].stock_code ||
            !this.divHeights[this.stockList[e].stock_code] ||
            "0px" === this.divHeights[this.stockList[e].stock_code]
          )
            return !1;
        return !0;
      },
    },
  };
Array ||
  (
    u.resolveComponent("SearchAiBar") +
    u.resolveComponent("ListItem") +
    u.resolveComponent("half-screen-ai-entry")
  )(),
  "function" == typeof w && w(y);
var x = u._export_sfc(y, [
  [
    "render",
    function (t, e, i, s, o, r) {
      return u.e(
        {
          a: u.o(r.onShowAiDialog, 1784),
          b: u.o(function (t) {
            return (o.showAiEntry = !0);
          }, 1785),
          c: u.o(function (t) {
            return (o.showAiEntry = !1);
          }, 1786),
          d: u.p({
            "report-prefix": "jichu.ai_xiaobao",
            "report-info": r.reportInfo,
            scene: "plate_cfg",
            "content-id": r.symbol,
          }),
          e: o.showAiEntry,
          f:
            (r.isH5 || r.isMp) &&
            o.popup.show &&
            o.filters[o.activeFilterIndex].sub &&
            o.filters[o.activeFilterIndex].sub.length > 0,
        },
        (r.isH5 || r.isMp) &&
          o.popup.show &&
          o.filters[o.activeFilterIndex].sub &&
          o.filters[o.activeFilterIndex].sub.length > 0
          ? u.e(
              {
                g:
                  (r.isH5 || r.isMp) &&
                  o.popup.show &&
                  o.filters[o.activeFilterIndex].sub &&
                  o.filters[o.activeFilterIndex].sub.length > 0,
              },
              (r.isH5 || r.isMp) &&
                o.popup.show &&
                o.filters[o.activeFilterIndex].sub &&
                o.filters[o.activeFilterIndex].sub.length > 0
                ? u.e(
                    { h: "black" === i.skin },
                    "black" === i.skin
                      ? { i: !o.popup.flip }
                      : { j: !o.popup.flip },
                    {
                      k: u.t(o.listTotal),
                      l: u.o(function (t) {
                        return r.switchIndex("all");
                      }, 1787),
                      m:
                        "all" === o.popup.selected[o.faterActiveFilter]
                          ? 1
                          : "",
                      n: u.f(
                        o.filters[o.activeFilterIndex].sub,
                        function (t, e, i) {
                          return {
                            a: u.t(t.name),
                            b: u.t(t.cnt),
                            c:
                              o.popup.selected[o.faterActiveFilter] === t.type
                                ? 1
                                : "",
                            d: e,
                            e: u.o(
                              function (e) {
                                return r.switchIndex(t);
                              },
                              1788,
                              e
                            ),
                          };
                        }
                      ),
                      o: "black" === i.skin,
                    },
                    "black" === i.skin
                      ? { p: o.popup.flip }
                      : { q: o.popup.flip },
                    {
                      r: "black" === i.skin ? 1 : "",
                      s: o.popup.top + "px",
                      t: o.popup.left + "px",
                      v: o.popup.ready ? 1 : 0,
                      w: u.o(function () {}, 1789),
                      x: u.o(function () {}, 1790),
                      y: u.o(function () {
                        return r.closeMask && r.closeMask.apply(r, arguments);
                      }, 1791),
                    }
                  )
                : {}
            )
          : {},
        { z: o.loadFilter },
        o.loadFilter
          ? {
              A: u.f(o.filters, function (t, e, i) {
                return u.e(
                  { a: u.t(t.name), b: !(t.sub && t.sub.length > 0) },
                  t.sub && t.sub.length > 0
                    ? (r.isH5 || r.isMp) && "all" === o.popup.selected[t.type]
                      ? { e: u.t(o.listTotal) }
                      : (r.isH5 || r.isMp) && -1 !== o.popup.selected[t.type]
                      ? {
                          g: u.t(r.showSubFilterName(t)),
                          h: u.t(r.showSubFilterCnt(t)),
                        }
                      : {}
                    : { c: u.t(t.cnt) },
                  {
                    d: (r.isH5 || r.isMp) && "all" === o.popup.selected[t.type],
                    f: (r.isH5 || r.isMp) && -1 !== o.popup.selected[t.type],
                    i:
                      (r.isH5 || r.isMp) &&
                      t.sub &&
                      t.sub.length > 0 &&
                      (o.activeFilter == t.type ||
                        (-1 !== o.activeFilter &&
                          o.activeFilter === o.popup.selected[t.type]) ||
                        (-1 === o.activeFilter &&
                          "all" === o.popup.selected[t.type])),
                  },
                  (((r.isH5 || r.isMp) &&
                    t.sub &&
                    t.sub.length > 0 &&
                    (o.activeFilter == t.type ||
                      (-1 !== o.activeFilter &&
                        o.activeFilter === o.popup.selected[t.type]) ||
                      (-1 === o.activeFilter &&
                        "all" === o.popup.selected[t.type]))) ||
                    ((r.isH5 || r.isMp) && t.sub && t.sub.length),
                  {}),
                  {
                    j: (r.isH5 || r.isMp) && t.sub && t.sub.length,
                    k: u.n("filterblock".concat(e)),
                    l: u.n(
                      o.activeFilter == t.type ||
                        (-1 !== o.activeFilter &&
                          o.activeFilter === o.popup.selected[t.type]) ||
                        (-1 === o.activeFilter &&
                          "all" === o.popup.selected[t.type])
                        ? "active"
                        : ""
                    ),
                    m: e,
                    n: "filterblock".concat(e),
                    o: "filterblock".concat(e),
                    p: u.o(
                      function (i) {
                        return r.filterStocks(t.type, e);
                      },
                      1792,
                      e
                    ),
                  }
                );
              }),
              B: u.o(function (t) {
                return r.showTeachTips();
              }, 1793),
              C: u.s(r.showFilter ? "" : "display:none;"),
              D: o.scrollOptionsTabs,
            }
          : {},
        { E: o.stockList.length },
        o.stockList.length
          ? u.e(
              { F: o.stockList && o.stockList.length > 0 },
              o.stockList && o.stockList.length > 0
                ? u.e({ G: o.showStockBrief }, (o.showStockBrief, {}), {
                    H: u.t(
                      i.plateId && i.plateId.match(/^03/)
                        ? "显示标签"
                        : "显示简介"
                    ),
                    I: u.o(function () {
                      return (
                        r.toggleStocksBrief &&
                        r.toggleStocksBrief.apply(r, arguments)
                      );
                    }, 1794),
                    J: u.f(o.stockList, function (t, e, s) {
                      return u.e(
                        {
                          a: u.sr("listitem", "55a92b31-1-" + s, { f: 1 }),
                          b: e,
                          c: "55a92b31-1-" + s,
                          d: u.p({
                            item: t,
                            skin: i.skin,
                            type: "freeze",
                            showStockBrief: o.showStockBrief,
                            symbol: r.symbol,
                          }),
                        },
                        o.showStockBrief
                          ? {
                              e: u.f(t.tags, function (t, e, i) {
                                return {
                                  a: u.t(t),
                                  b: "tag" + e,
                                  c: u.n(
                                    -1 == t.indexOf("龙头") ? "white-tag" : ""
                                  ),
                                };
                              }),
                              f: u.t(t.brief),
                              g: u.t(r.getFoldTexts(t.stock_code)),
                              h: "black" === i.skin ? 1 : "",
                              i: u.o(
                                function (e) {
                                  return r.changeFolded(t.stock_code);
                                },
                                1795,
                                e
                              ),
                              j: u.n("allbrief" + t.stock_code),
                              k: u.n(
                                e === o.stockList.length - 1 ? "no-after" : ""
                              ),
                              l: "stockbrief" + t.stock_code,
                              m: "dsc" + e,
                              n: u.n("stockbrief" + t.stock_code),
                              o: u.n(r.foldClass(t.stock_code)),
                            }
                          : {},
                        o.showStockBrief
                          ? {
                              p: u.f(t.tags, function (t, e, i) {
                                return {
                                  a: u.t(t),
                                  b: "tag" + e,
                                  c: u.n(
                                    -1 == t.indexOf("龙头") ? "white-tag" : ""
                                  ),
                                };
                              }),
                              q: u.t(t.brief),
                              r: u.t(
                                (null == t ? void 0 : t.stock_code) &&
                                  "--" !== (null == t ? void 0 : t.stock_code)
                                  ? o.folded[t.stock_code]
                                    ? "收起"
                                    : "展开"
                                  : ""
                              ),
                              s: "black" === i.skin ? 1 : "",
                              t: u.n(
                                e === o.stockList.length - 1 ? "no-after" : ""
                              ),
                              v: "stockbrief-hide-" + t.stock_code,
                              w: "dsc-hide" + e,
                              x: u.n("stockbrief-hide-" + t.stock_code),
                            }
                          : {},
                        { y: e }
                      );
                    }),
                    K: o.showStockBrief,
                    L: o.showStockBrief,
                  })
                : {},
              { M: o.stockList && o.stockList.length > 0 },
              o.stockList && o.stockList.length > 0
                ? {
                    N: u.f(o.listTH, function (t, e, i) {
                      return {
                        a: u.t(t[0]),
                        b: e,
                        c: u.n(t[1]),
                        d: u.n(
                          o.listOrder[0] === e
                            ? "up" === o.listOrder[1]
                              ? "orderup"
                              : "orderdown"
                            : ""
                        ),
                        e: u.o(
                          function (t) {
                            return r.changeOrder(e);
                          },
                          1796,
                          e
                        ),
                      };
                    }),
                    O: u.n(r.isMp ? "order-mp" : ""),
                    P: u.f(o.stockList, function (t, e, s) {
                      return u.e(
                        {
                          a: !o.showStockBrief || r.isBeforeHeightLoaded(e),
                          b: e,
                          c: "55a92b31-2-" + s,
                          d: u.p({
                            item: t,
                            symbol: r.symbol,
                            skin: i.skin,
                            type: "overflow",
                            showMoreFields: o.showMoreFields,
                            showStockBrief: o.showStockBrief,
                          }),
                        },
                        o.showStockBrief
                          ? {
                              e: "stockbrief2" + t.stock_code,
                              f: u.s({ height: r.briefHeight(t.stock_code) }),
                              g: "dsc" + e,
                              h: u.n("stockbrief2" + t.stock_code),
                              i: u.n(r.briefClass(t.stock_code)),
                              j: u.n(r.isMp ? "mp-desc" : ""),
                            }
                          : {},
                        { k: e }
                      );
                    }),
                    Q: o.showStockBrief,
                    R: o.scrollOptions,
                  }
                : {}
            )
          : {},
        { S: o.showMore && !r.isClassic },
        (o.showMore && r.isClassic, {}),
        { T: o.showMore && r.isClassic },
        o.showMore && r.isClassic
          ? {
              U: u.o(function (t) {
                return r.showTeachTips();
              }, 1797),
            }
          : {},
        { V: o.showMore && r.isClassic },
        (o.showMore && r.isClassic, {}),
        { W: o.listMinHeight + "px", X: "GUANGFA" === o.isBroker },
        (o.isBroker, {}),
        { Y: o.showAiDialog && o.showAiParams },
        o.showAiDialog && o.showAiParams
          ? {
              Z: u.o(r.onCloseAiDialog, 1798),
              aa: u.p({
                "sse-serve-type": "newsSummaryServerHttp",
                theme: i.skin,
                "show-ai-dialog": o.showAiDialog,
                "ai-dialog-question": o.showAiParams.title,
                "ai-question-query": o.showAiParams.prompt,
                "server-obj": o.showAiParams,
                "source-from": o.showAiParams.scene || "xiaobao",
                "stock-code": r.symbol,
                "need-preset-question": !0,
              }),
            }
          : {},
        { ab: "black" === i.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-55a92b31"],
]);
wx.createComponent(x);
