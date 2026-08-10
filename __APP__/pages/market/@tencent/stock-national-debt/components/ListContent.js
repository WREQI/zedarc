require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = {
    props: {
      stockData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      fromYYGG: { type: Boolean, default: !1 },
      isAccountOpen: { type: Boolean, default: !1 },
      market: { type: String, default: "" },
    },
    data: function () {
      return {
        tabs: [
          { name: "深市", market: "sz", isSelected: !0 },
          { name: "沪市", market: "sz" },
        ],
        mIsExpanded: !1,
        tips: "提示: 购买通用回购资金锁定对应期限，无法提前赎回。如选择长期通用回购(28/91/182天期)请提前安排好资金的使用。",
        list: [],
        btnShow: !1,
        btnText: "立即开户",
      };
    },
    watch: {
      stockData: {
        handler: function () {
          this.initData();
        },
        immediate: !0,
      },
    },
    created: function () {
      (this.mTabSelectIndex = 0),
        "sh" === this.market && (this.mTabSelectIndex = 1),
        this.initData(),
        (this.tabs = [
          {
            name: "深市" + (this.fromYYGG ? "(千元起)" : ""),
            market: "sz",
            isSelected: 0 === this.mTabSelectIndex,
          },
          {
            name: "沪市" + (this.fromYYGG ? "(千元起)" : ""),
            market: "sh",
            isSelected: 1 === this.mTabSelectIndex,
          },
        ]);
    },
    mounted: function () {
      var t = this;
      if (!this.isMp()) {
        var e = this.$route.query;
        "advcheck" === (null == e ? void 0 : e.tf_channel) &&
          ((this.btnText = "开户后，买一笔"),
          this.$nextTick(function () {
            setTimeout(function () {
              window.addEventListener("scroll", t.btnShowStatus, !0);
            }, 1e3);
          }));
      }
    },
    beforeDestroy: function () {
      this.isMp() ||
        window.removeEventListener("scroll", this.btnShowStatus, !0);
    },
    methods: {
      isMp: function () {
        var e;
        return ["mpwzq", "mpweapp"].includes(
          null == (e = t.StockBridge) ? void 0 : e.SHELL
        );
      },
      gapUseDateNum: function (t) {
        return ""
          .concat(t.slice(0, 4), "-")
          .concat(t.slice(4, 6), "-")
          .concat(t.slice(6, 8));
      },
      btnShowStatus: function () {
        var e, n;
        (window.scrollY > 560 && !this.mIsExpanded) ||
        (window.scrollY > 840 && this.mIsExpanded)
          ? ((this.btnShow = !0),
            null == (e = t.StockBridge) ||
              e.busEmit("market-debt-bottom-btn-show", !0))
          : ((this.btnShow = !1),
            null == (n = t.StockBridge) ||
              n.busEmit("market-debt-bottom-btn-show", !1));
      },
      initData: function () {
        var t,
          e = this,
          n = this.tabs[this.mTabSelectIndex || 0].market,
          i = (null == (t = this.stockData) ? void 0 : t.data[n]) || [],
          a = this.stockData.bestOnGivenDay;
        this.list = i.filter(function (t, n) {
          return (
            (t.isBestOnGivenDay =
              t.sc === (null == a ? void 0 : a.sc) &&
              t.gpdm === (null == a ? void 0 : a.gpdm)),
            (t.favailableDay = e.gapUseDateNum(t.availableDay)),
            e.mIsExpanded || n < 5 ? t : void 0
          );
        });
      },
      onOpenAccountClick: function () {
        this.$emit("onClickAccount");
      },
      onFooterClick: function () {
        var e;
        (this.mIsExpanded = !this.mIsExpanded),
          null == (e = t.StockBridge) ||
            e.report("hq.nationaldebtbuy.open_all_click"),
          this.initData();
      },
      onItemTradeClick: function (e) {
        var n,
          i = ""
            .concat(this.tabs[this.mTabSelectIndex].name)
            .concat(e.term, "天期");
        null == (n = t.StockBridge) ||
          n.report("hq.nationaldebtbuy.trade_btn_click"),
          this.$emit("onClickTrade", {
            code: e.sc + e.gpdm,
            market: e.sc,
            stockName: i,
          });
      },
      onListItemClick: function (t) {
        this.$emit("goToStockDetail", { code: t.sc + t.gpdm, name: t.zqjc });
      },
      switchTab: function (e) {
        var n;
        if (e.target.dataset) {
          var i = e.target.dataset.index;
          isNaN(i) ||
            ((this.mTabSelectIndex = +i),
            (this.tabs = this.tabs.map(function (t, e) {
              return (t.isSelected = +i === e), t;
            })),
            this.initData(),
            null == (n = t.StockBridge) ||
              n.report(
                "hq.nationaldebtbuy.".concat(
                  this.mTabSelectIndex ? "sh" : "sz",
                  "_tab_click"
                )
              ));
        }
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, i, a, o, c) {
        return t.e(
          {
            a: t.f(o.tabs, function (e, n, i) {
              return {
                a: t.t(e.name),
                b: n,
                c: t.n(e.isSelected ? "selected" : ""),
                d: "hq_top_tab_".concat(n),
              };
            }),
            b: t.o(function () {
              return c.switchTab && c.switchTab.apply(c, arguments);
            }, 2190),
            c: t.f(o.list, function (e, n, i) {
              return t.e(
                { a: t.t(e.term), b: e.isBestOnGivenDay },
                (e.isBestOnGivenDay, {}),
                {
                  c: t.t(e.gpdm),
                  d: t.t(e.zxj),
                  e: t.t(e.yield),
                  f: t.t(e.lockDays),
                  g: t.t(e.favailableDay || e.availableDay),
                  h: t.o(
                    function (t) {
                      return c.onItemTradeClick(e);
                    },
                    2191,
                    e.gpdm
                  ),
                  i: e.gpdm,
                  j: t.o(
                    function (t) {
                      return c.onListItemClick(e);
                    },
                    2192,
                    e.gpdm
                  ),
                }
              );
            }),
            d: o.mIsExpanded,
          },
          o.mIsExpanded ? { e: t.t(o.tips) } : {},
          {
            f: t.t(o.mIsExpanded ? "收起全部" : "展开全部"),
            g: t.n(o.mIsExpanded ? "arrow-up" : "arrow-down"),
            h: t.o(function (t) {
              return c.onFooterClick();
            }, 2193),
            i: !i.isAccountOpen,
          },
          i.isAccountOpen
            ? {}
            : {
                j: t.t(o.btnText),
                k: t.o(function (t) {
                  return c.onOpenAccountClick();
                }, 2194),
              },
          { l: !i.isAccountOpen && o.btnShow },
          !i.isAccountOpen && o.btnShow
            ? {
                m: t.t(o.btnText),
                n: t.o(function (t) {
                  return c.onOpenAccountClick();
                }, 2195),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-523d9bfe"],
  ]);
wx.createComponent(n);
