var e = require("../utils/common.js"),
  t = require("../utils/route.js"),
  i = require("../../stock-hq-data/index.js"),
  n = require("../../stock-base/visibilityObserver/index.js"),
  r = require("../../../../../common/vendor.js"),
  l = {
    components: {
      NoData: function () {
        return "../common/NoData.js";
      },
    },
    inject: ["hqBridge", "isLite"],
    props: {
      rankList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isEtfPageShow: { type: Boolean, default: !1 },
      showTag: { type: Boolean, default: !1 },
      indexFilter: { type: Boolean, default: !1 },
      currentTab: { type: String, default: "etf_all" },
      isItemActivated: { type: Boolean, default: !1 },
      middleLabel: { type: String, default: "最新价" },
      middleField: { type: String, default: "zxj" },
      middleColorField: { type: String, default: "" },
      rightLabel: { type: String, default: "涨幅" },
      rightField: { type: String, default: "zdfformat" },
      rightColorField: { type: String, default: "zdfclass" },
      showRankNum: { type: Boolean, default: !0 },
      variant: { type: String, default: "" },
      rightWidth: { type: String, default: "" },
    },
    data: function () {
      return {
        clickIndex: -1,
        indexFilterCheck: !1,
        infoText:
          "市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选“指数过滤”后，榜单内跟踪相同指数的ETF仅展示一只。",
        VISIBILITY_OBJ: null,
      };
    },
    watch: {
      isEtfPageShow: function () {
        this.clickIndex = -1;
      },
      isItemActivated: {
        handler: function (e) {
          e ? this.initObserver() : this.closeObserver();
        },
        immediate: !0,
      },
    },
    computed: {
      isWZQ: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      variantClass: function () {
        return this.variant ? "etf-rank-top--".concat(this.variant) : "";
      },
      rankRightStyle: function () {
        return this.rightWidth ? { width: this.rightWidth } : null;
      },
    },
    created: function () {
      this.indexFilterCheck = this.indexFilter;
    },
    beforeDestroy: function () {
      this.closeObserver();
    },
    methods: {
      transMarketIcon: e.transMarketIcon,
      initObserver: function () {
        var e = this;
        this.$nextTick(function () {
          e.VISIBILITY_OBJ && e.closeObserver(),
            (e.VISIBILITY_OBJ = new n.VisibilityObserver(
              "#etf-rank-list-activated",
              {
                once: !0,
                callback: function (t) {
                  t &&
                    e.hqBridge.report("hq.etfpage.etf_index_filter_show", {
                      page: "etfPage",
                      tab: e.currentTab,
                    });
                },
                intersection: { threshold: 0 },
              },
              e
            ));
        });
      },
      closeObserver: function () {
        var e, t, i;
        null ==
          (i =
            null ==
            (t = null == (e = this.VISIBILITY_OBJ) ? void 0 : e.observer)
              ? void 0
              : t.disconnect) || i.call(t),
          (this.VISIBILITY_OBJ = null);
      },
      navigateToQuoteDetail: function (e, n) {
        var r = this;
        if (e && "--" !== e) {
          this.$emit("onStockClick", e), (this.clickIndex = n);
          var l = i.utils.splitSymbol(e) || {},
            a = l.market,
            o = l.scode;
          (this.timer = setTimeout(function () {
            t.navigateToQuote(r.hqBridge, a, o), clearTimeout(r.timer);
          }, 300)),
            (this.clickTimer = setTimeout(function () {
              (r.clickIndex = -1), clearTimeout(r.clickTimer);
            }, 1e3)),
            this.hqBridge.report("hq.etfpage.goto_quote_page");
        }
      },
      toggleIndexFilter: function () {
        (this.indexFilterCheck = !this.indexFilterCheck),
          this.$emit("toggleIndexFilter", this.indexFilterCheck),
          this.hqBridge.report("hq.etfpage.etf_index_filter_click", {
            page: "etfPage",
            tab: this.currentTab,
          });
      },
      openInfo: function () {
        "mp" === this.hqBridge.ENV || "wzq_light" === this.hqBridge.ENV
          ? this.$emit("onShowTeachPop")
          : this.$modal.alert({
              title: "指数过滤",
              confirmBtn: "我知道了",
              content:
                '<div class="st-modal-bond">\n                    <div class="content">'.concat(
                  this.infoText,
                  "</div>\n                  </div>"
                ),
            }),
          this.hqBridge.report("hq.etfpage.etf_index_filter_info_click", {
            page: "etfPage",
            tab: this.currentTab,
          });
      },
    },
  };
Array || r.resolveComponent("NoData")();
var a = r._export_sfc(l, [
  [
    "render",
    function (e, t, i, n, l, a) {
      return r.e(
        { a: i.rankList && i.rankList.length > 0 },
        i.rankList && i.rankList.length > 0
          ? r.e(
              { b: !l.indexFilterCheck },
              l.indexFilterCheck
                ? l.indexFilterCheck && a.isWZQ
                  ? {
                      e: r.o(function () {
                        return (
                          a.toggleIndexFilter &&
                          a.toggleIndexFilter.apply(a, arguments)
                        );
                      }, 4024),
                    }
                  : l.indexFilterCheck
                  ? {
                      g: r.o(function () {
                        return (
                          a.toggleIndexFilter &&
                          a.toggleIndexFilter.apply(a, arguments)
                        );
                      }, 4025),
                    }
                  : {}
                : {
                    c: r.o(function () {
                      return (
                        a.toggleIndexFilter &&
                        a.toggleIndexFilter.apply(a, arguments)
                      );
                    }, 4023),
                  },
              {
                d: l.indexFilterCheck && a.isWZQ,
                f: l.indexFilterCheck,
                h: r.o(function () {
                  return (
                    a.toggleIndexFilter &&
                    a.toggleIndexFilter.apply(a, arguments)
                  );
                }, 4026),
                i: r.o(function () {
                  return a.openInfo && a.openInfo.apply(a, arguments);
                }, 4027),
                j: "etf-rank-list" + (i.isItemActivated ? "-activated" : ""),
                k: r.t(i.middleLabel),
                l: r.t(i.rightLabel),
                m: r.s(a.rankRightStyle),
                n: r.n(a.isWZQ ? "padding-hw" : ""),
                o: r.f(i.rankList, function (e, t, n) {
                  return r.e(
                    i.showRankNum
                      ? { a: r.t(t + 1), b: r.n("left-".concat(t)) }
                      : {},
                    {
                      c: r.t(e.name),
                      d: a.transMarketIcon("cnjj", "", e.code),
                      e: r.t(e.codeformat),
                      f:
                        i.showTag &&
                        e.labels &&
                        e.labels[0] &&
                        e.labels[0].name,
                    },
                    i.showTag && e.labels && e.labels[0] && e.labels[0].name
                      ? { g: r.t(e.labels[0].name) }
                      : {},
                    {
                      h: r.t(e[i.middleField]),
                      i: r.n(e[i.middleColorField]),
                      j: r.t(e[i.rightField]),
                      k: r.n(e[i.rightColorField]),
                      l: r.n(l.clickIndex === t ? "click-item" : ""),
                      m: r.o(
                        function (i) {
                          return a.navigateToQuoteDetail(e.code, t);
                        },
                        4028,
                        t
                      ),
                      n: t,
                    }
                  );
                }),
                p: i.showRankNum,
                q: r.s(a.rankRightStyle),
                r: r.n(a.isWZQ ? "padding-bw" : ""),
              }
            )
          : {},
        { s: r.n({ lite: a.isLite }), t: r.n(a.variantClass) }
      );
    },
  ],
  ["__scopeId", "data-v-9d8b5886"],
]);
wx.createComponent(a);
