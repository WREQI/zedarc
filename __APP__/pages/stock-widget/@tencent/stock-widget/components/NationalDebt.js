var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../api/index.js"),
  n = require("../../stock-base/visibilityObserver/index.js"),
  o = require("../../../../../common/vendor.js"),
  i = {
    inject: {
      helper: {
        default: function () {
          return {};
        },
      },
      xcxUserAccountInfo: { default: !1 },
    },
    options: { styleIsolation: "shared" },
    props: {
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showNationDebtHeader: { type: Boolean, default: !1 },
      showNationDebtExpandBtn: { type: Boolean, default: !1 },
      hasBorder: { type: Boolean, default: !1 },
      openAccountText: { type: String, default: "立即开户" },
      reportPageName: { type: String, default: "" },
      statData: { type: String, default: "" },
    },
    components: {
      Tabs: function () {
        return "./Tab/Tabbar.js";
      },
      Tab: function () {
        return "./Tab/Tab.js";
      },
    },
    data: function () {
      return {
        stockData: {},
        TOPTABS: ["深市", "沪市"],
        mTabSelectIndex: 0,
        mIsExpanded: !1,
        mIsCanShowOpenAccountBtn: !0,
        subtitleText: "15:30前买入通用回购，闲置资金赚收益，本息到期自动到账。",
        visibilityObj: null,
      };
    },
    computed: {
      shSzData: function () {
        var t;
        return (
          (null == (t = this.stockData) ? void 0 : t.data) || { sh: [], sz: [] }
        );
      },
      showListNum: function () {
        return this.mIsExpanded
          ? 0 === this.mTabSelectIndex
            ? this.shSzData.sz.length
            : this.shSzData.sh.length
          : 0 === this.mTabSelectIndex
          ? this.shSzData.sz.length > 5
            ? 5
            : this.shSzData.sz.length
          : this.shSzData.sh.length > 5
          ? 5
          : this.shSzData.sh.length;
      },
      listData: function () {
        return this.shSzData.sz.length && this.shSzData.sh.length
          ? 0 === this.mTabSelectIndex
            ? this.shSzData.sz.slice(0, this.showListNum)
            : this.shSzData.sh.slice(0, this.showListNum)
          : [];
      },
      moreText: function () {
        return this.mIsExpanded ? "收起全部" : "展开全部";
      },
      arrowOrientCss: function () {
        return this.mIsExpanded ? "arrow-up" : "arrow-down";
      },
      env: function () {
        var t;
        return (null == (t = this.helper) ? void 0 : t.env) || {};
      },
      shy: function () {
        var t;
        return null == (t = this.helper) ? void 0 : t.shy;
      },
      isHasOpenAccount: function () {
        return !1 === this.mIsCanShowOpenAccountBtn;
      },
    },
    created: function () {
      this.getDebtData(), this.handleIsAccountOpen();
    },
    beforeDestroy: function () {
      this.cleanVisibilityObj();
    },
    mounted: function () {},
    methods: {
      cleanVisibilityObj: function () {
        var t, e, n;
        this.visibilityObj &&
          (null ==
            (n =
              null ==
              (e = null == (t = this.visibilityObj) ? void 0 : t.observer)
                ? void 0
                : e.disconnect) || n.call(e),
          (this.visibilityObj = null));
      },
      addVisibilityObj: function () {
        var t = this;
        this.cleanVisibilityObj(),
          (this.visibilityObj = new n.VisibilityObserver(
            ".national-debt",
            {
              once: !0,
              callback: function (e, n) {
                e && t.report("nationaldebt_module_show");
              },
              intersection: { threshold: 0 },
            },
            this
          ));
      },
      getDebtData: function () {
        return (
          (n = this),
          null,
          (o = t().mark(function n() {
            var o,
              i = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        e.StockAPiService.queryNationalDebt(this.helper)
                      );
                    case 2:
                      (o = t.sent).data &&
                        ((this.stockData = o.data),
                        this.$nextTick(function () {
                          i.addVisibilityObj();
                        }));
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  s(o.next(t));
                } catch (t) {
                  e(t);
                }
              },
              a = function (t) {
                try {
                  s(o.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, a);
              };
            s((o = o.apply(n, null)).next());
          })
        );
        var n, o;
      },
      onLearnMore: function () {
        this.routeTo();
      },
      onOpenAccountClick: function () {
        this.$emit("onClickAccount"),
          this.report("nationaldebt_openaccount_click");
        var t = this.env,
          e = t.__APP__,
          n = t.__WZQ__;
        if (t.__MP__) {
          var o = "/pages/asset/index?stat_data=".concat(this.statData);
          this.routeToPage({
            url: "/pages/broker/transfer?url=".concat(
              encodeURIComponent(o),
              "&linkscene=h5"
            ),
          });
        } else
          e
            ? this.gotoOpenAccountAPPPage()
            : n && this.gotoOpenAccountWzqPage();
      },
      gotoOpenAccountAPPPage: function () {
        var t = this,
          e = this.helper.shy;
        e.getUserInfo(function (n) {
          if (n && "none" !== n.type) {
            var o = "qqstock://GotoTradeTab?info=".concat(
              encodeURIComponent(
                JSON.stringify({ report_channel: "", index: 0 })
              )
            );
            e.navigateTo({ url: o });
          } else
            e.login(function (e) {
              "success" === e.status &&
                setTimeout(function () {
                  t.handleIsAccountOpen();
                }, 2e3);
            });
        });
      },
      gotoOpenAccountWzqPage: function () {
        var t = this,
          e = "AssetIndex";
        this.isHasOpenAccount ||
          ((e = "ApplyIndex"),
          this.$toast("您还没有开通股票账户，请先开通后再申购")),
          setTimeout(function () {
            t.routeTo({ name: e, query: { stat_data: t.statData } });
          }, 1e3);
      },
      handleIsAccountOpen: function () {
        var t = this,
          e = this.env,
          n = e.__APP__,
          o = e.__MP__,
          i = e.isBroker,
          a = this.helper.shy;
        n
          ? a.getUserInfo(function (e) {
              e && "none" !== e.type
                ? t.requestBrokerListData(e)
                : (t.mIsCanShowOpenAccountBtn = !0);
            })
          : o || i
          ? (this.mIsCanShowOpenAccountBtn = !this.xcxUserAccountInfo)
          : this.userInfo &&
            this.userInfo.userstate &&
            ("0" === this.userInfo.userstate ||
              "3" === this.userInfo.userstate) &&
            (this.mIsCanShowOpenAccountBtn = !1);
      },
      onFooterClick: function () {
        this.report(
          "nationaldebt_".concat(this.mIsExpanded ? "fold" : "unfold", "_click")
        ),
          (this.mIsExpanded = !this.mIsExpanded);
      },
      onItemTradeClick: function (t) {
        var e = this.env,
          n = e.__APP__,
          o = e.__WZQ__,
          i = e.__MP__,
          a = this.listData[t],
          s = {};
        if (
          ((s.code = a.gpdm),
          (s.market = a.sc),
          this.report("nationaldebt_trade_click"),
          this.$emit("onClickTrade", s),
          i)
        ) {
          var r = 0;
          "sh" === s.market && (r = 1);
          var c = "/pages/trade/debt?market="
            .concat(r, "&code=")
            .concat(s.code, "&stat_data=")
            .concat(this.statData);
          this.routeToPage({
            url: "/pages/broker/transfer?url=".concat(
              encodeURIComponent(c),
              "&linkscene=h5"
            ),
          });
        } else n ? this.gotoTradeAPPPage(s) : o && this.gotoTradeWzqPage(s);
      },
      gotoTradeAPPPage: function (t) {
        var e = this,
          n = this.helper.shy;
        n.getUserInfo(function (o) {
          if (o && "none" !== o.type) {
            if (!e.isHasOpenAccount) return void e.gotoOpenAccountAPPPage();
            var i = 0;
            "sh" === t.market && (i = 1);
            var a = {
                p_url: "/mp/v2/index.html#/trade/debt?code="
                  .concat(t.code, "&market=")
                  .concat(i),
                p_title: "通用回购",
              },
              s = "qqstock://TradeHSBrowser?info=".concat(
                encodeURIComponent(JSON.stringify(a))
              );
            n.navigateTo({ url: s });
          } else
            n.login(function (t) {
              "success" === t.status && e.handleIsAccountOpen();
            });
        });
      },
      gotoTradeWzqPage: function (t) {
        var e = this;
        this.isHasOpenAccount
          ? setTimeout(function () {
              var n = 0;
              "sh" === t.market && (n = 1),
                e.routeTo({
                  name: "TradeDebt",
                  params: { market: n, code: t.code },
                });
            }, 1e3)
          : this.gotoOpenAccountWzqPage();
      },
      onListItemClick: function (t) {
        var e = this.listData[t],
          n = {};
        (n.code = e.sc + e.gpdm),
          (n.name = e.zqjc),
          this.report("nationaldebt_stock_click"),
          this.$emit("goToStockDetail", n);
      },
      isIncomeMost: function (t) {
        var e = this.listData[t],
          n = this.stockData.bestOnGivenDay;
        return (
          (null == e ? void 0 : e.sc) === (null == n ? void 0 : n.sc) &&
          (null == e ? void 0 : e.gpdm) === (null == n ? void 0 : n.gpdm)
        );
      },
      switchTab: function (t) {
        this.mTabSelectIndex !== t &&
          (this.report(
            "nationaldebt_".concat(0 === t ? "ss" : "hs", "tab_click")
          ),
          this.updateType(t));
      },
      updateType: function (t) {
        this.mTabSelectIndex = t;
      },
      gapNumOfDate: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = new Date(),
          n = parseInt(t.slice(0, 4), 10),
          o = parseInt(t.slice(4, 6), 10) - 1,
          i = parseInt(t.slice(6, 8), 10),
          a = new Date(n, o, i);
        return Math.ceil((a - e) / 864e5);
      },
      gapUseDateNum: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return ""
          .concat(t.slice(0, 4), "-")
          .concat(t.slice(4, 6), "-")
          .concat(t.slice(6, 8));
      },
      requestBrokerListData: function () {
        var t = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.StockAPiService.getBrokerList(n, this.helper)
          .then(function (e) {
            t.resultHandle(e);
          })
          .catch(function (e) {
            t.resultHandle(e);
          });
      },
      resultHandle: function (t) {
        for (
          var e = !1, n = t.has_bind, o = void 0 === n ? [] : n, i = 0;
          i < o.length;
          i++
        ) {
          var a = o[i];
          if (1 === parseInt(a.is_default, 10)) {
            e = !0;
            break;
          }
        }
        e && (this.mIsCanShowOpenAccountBtn = !1);
      },
      routeTo: function (t) {
        this.$emit("gotoDetail", t);
      },
      report: function (t) {
        this.$emit("report", t);
      },
      routeToPage: function (t) {
        this.$emit("routeToPage", t);
      },
    },
  };
Array ||
  (
    o.resolveComponent("template") +
    o.resolveComponent("tab") +
    o.resolveComponent("tabs")
  )();
var a = o._export_sfc(i, [
  [
    "render",
    function (t, e, n, i, a, s) {
      return o.e(
        { a: n.showNationDebtHeader },
        n.showNationDebtHeader
          ? { b: o.t(a.subtitleText), c: o.o(s.onLearnMore, 5647) }
          : {},
        {
          d: o.f(a.TOPTABS, function (t, e, n) {
            return {
              a: o.t(t),
              b: "hq_top_tab_".concat(e),
              c: "7d6e7a49-1-" + n + ",7d6e7a49-0",
              d: o.p({ name: e }),
            };
          }),
          e: o.o(s.switchTab, 5648),
          f: o.p({
            index: a.mTabSelectIndex,
            indicator: !0,
            stat: "markettab",
          }),
          g: o.f(s.listData, function (t, e, n) {
            return o.e(
              { a: o.t(t.term), b: s.isIncomeMost(e) },
              (s.isIncomeMost(e), {}),
              {
                c: o.t(t.gpdm),
                d: o.t(t.zxj),
                e: o.t(t.yield),
                f: o.t(t.lockDays),
                g: o.t(s.gapUseDateNum(t.availableDay)),
                h: o.o(function (t) {
                  return s.onItemTradeClick(e);
                }, 5649),
                i: o.o(function (t) {
                  return s.onListItemClick(e);
                }, 5650),
              }
            );
          }),
          h: n.showNationDebtExpandBtn,
        },
        n.showNationDebtExpandBtn
          ? {
              i: o.t(s.moreText),
              j: o.n(s.arrowOrientCss),
              k: o.o(function (t) {
                return s.onFooterClick();
              }, 5651),
            }
          : {},
        { l: a.mIsCanShowOpenAccountBtn },
        a.mIsCanShowOpenAccountBtn
          ? {
              m: o.t(n.openAccountText),
              n: o.o(function (t) {
                return s.onOpenAccountClick();
              }, 5652),
            }
          : {},
        {
          o: o.n(n.showNationDebtHeader ? "header-bg" : ""),
          p: o.n(n.hasBorder ? "small-style" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-7d6e7a49"],
]);
wx.createComponent(a);
