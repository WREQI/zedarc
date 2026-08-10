var t = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (t, e, n) {
    return new Promise(function (i, r) {
      var o = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        },
        c = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(o, s);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  i = require("../../../../../../common/vendor.js"),
  r = require("../../../stock-news-sdk/index.js"),
  o = require("../../Index.js"),
  s = require("../../../stock-news-core/utils/report.js"),
  c = require("../../utils/checkSupportBroker.js"),
  a = require("../../../stock-news-core/utils/force2https.js"),
  u = require("../../../stock-news-core/utils/market.js"),
  h = {
    sz: 0,
    sh: 1,
    hk: 2,
    us: 3,
    pt: "p",
    bj: "bj",
    nq: "nq",
    zhai: "zhai",
    fu: "fu",
    ft: "ft",
  },
  l = [
    ["1", "000001"],
    ["0", "399001"],
    ["0", "399006"],
    ["0", "399005"],
    ["1", "000300"],
    ["0", "399905"],
    ["2", "HSI"],
    ["2", "HSCEI"],
    ["2", "HSCCI"],
    ["2", "HSTECH"],
    ["3", "DJI"],
    ["3", "INX"],
    ["3", "IXIC"],
    ["3", "NDX"],
  ],
  f = function (t, e) {
    var n = i.join([e, t], "");
    return (
      i.indexOf(
        l.map(function (t) {
          return i.join(t, "");
        }),
        n
      ) >= 0 ||
      i.indexOf(
        [
          ["2", "CES300"],
          ["2", "CES100"],
        ].map(function (t) {
          return i.join(t, "");
        }),
        n
      ) >= 0
    );
  },
  d = { IS_WZQ_XCX: !1 },
  p = d.IS_WZQ_XCX,
  k = d.IS_LITE_MODE,
  m = r.sdk,
  _ = m.navigateToTrade,
  v = m.navigateToStockDetail,
  S = m.navigateToRelatedEtf,
  w = {
    name: "StockList",
    components: {},
    inject: {
      context: { value: "context" },
      live_news_id: { value: "live_news_id" },
      useBroker: { default: null },
      TradeFunc: { default: null },
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
    },
    props: {
      live: { type: Object, default: function () {} },
      qtData: { type: Object, default: function () {} },
      slist: { type: Object, default: function () {} },
      innerFundList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      item: { type: Object, default: function () {} },
      itemPosition: { type: Number, default: 0 },
      reportInfo: { type: Object, default: function () {} },
      userinfo: { type: Object, default: function () {} },
      addFavChannel: {
        type: String,
        default: function () {
          return "";
        },
      },
      type: {
        type: String,
        default: function () {
          return "";
        },
      },
    },
    data: function () {
      return { isMP: !0, isLightMode: p || k, supportBroker: !1 };
    },
    computed: {
      isSelfStock: function () {
        var t = this.item,
          e = t.stock_code,
          n = t.stock_market,
          i = "".concat(n).concat(e.split(".")[0]);
        return 1 == +this.slist[i];
      },
      reportParam: function () {
        var t = this.item,
          e = t.stock_code,
          n = t.stock_market;
        return {
          newsid: this.live_news_id,
          fchannel_id_fm_i: this.addFavChannel,
          foperation_purpose: "zixuan",
          stocklist: ["".concat(n).concat(e)].join(","),
          positionlist: [this.itemPosition].join(","),
          hasaddlist: [this.isSelfStock ? 1 : 0].join(","),
        };
      },
      checkIndex: function () {
        var t = this.item,
          e = t.stock_code,
          n = t.stock_market;
        return f(e, h[n]);
      },
      checkPt: function () {
        return "pt" === this.item.stock_market;
      },
      checkBj: function () {
        return "bj" === this.item.stock_market;
      },
      checkTrade: function () {
        return (function (t, e) {
          var n = t.stock_code,
            i = t.stock_market;
          return (
            !!f(n, h[i]) ||
            ("pt" === i
              ? e.indexOf("".concat(i).concat(n)) >= 0
              : -1 !== ["sh", "sz"].indexOf(i) &&
                !"".concat(n).startsWith("399"))
          );
        })(this.item, this.innerFundList);
      },
      showTrade: function () {
        return !(this.isMP && this.checkBj) && this.canShowTrade;
      },
      didOpenAccount: function () {
        if (!this.userinfo) return !1;
        var t = this.userinfo.userstate;
        return t === o.USERSTATE.HASACCOUNT || t === o.USERSTATE.HASBUNDLE;
      },
      canShowTrade: function () {
        return (
          !(!this.isMP && !this.isLightMode) ||
          !(!this.live || this.live.account_wzq_link) ||
          this.didOpenAccount ||
          this.supportBroker
        );
      },
    },
    watch: {
      live: {
        immediate: !0,
        handler: function () {
          this.updateBrokerState();
        },
      },
    },
    mounted: function () {
      this.reportInfo.brow &&
        this.reportInfo.brow &&
        this.reportAnalytics(this.reportInfo.brow, this.reportParam);
    },
    methods: {
      updateBrokerState: function () {
        return n(
          this,
          null,
          e().mark(function t() {
            var n;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.live || !this.live.account_wzq_link) {
                        t.next = 5;
                        break;
                      }
                      return (
                        (n = this.live.account_wzq_link),
                        (t.next = 4),
                        c.checkSupportBroker(n, this.useBroker, this.TradeFunc)
                      );
                    case 4:
                      this.supportBroker = t.sent;
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
      getStockIcon: function (t) {
        return a.forceHttpsAdvanced(u.getMarketIcon(t) || "");
      },
      reportAnalytics: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        s.report(t, e, this.context);
      },
      descTagList: function (t) {
        return t.desc.slice(0, 2);
      },
      qtDataKey: function (t) {
        var e = t.stock_code,
          n = t.stock_market;
        return "us" === n
          ? "t_".concat(n).concat(e.split(".")[0])
          : "hk" === n
          ? "r_".concat(n).concat(e)
          : "".concat(n).concat(e);
      },
      qtValue: function (t) {
        if (!this.qtData) return null;
        var e = t.stock_market,
          n = this.qtDataKey(t),
          i = this.qtData[n];
        if (i) {
          if ("us" === e) return parseFloat(i[54]);
          if ("sh" === e || "sz" === e || "bj" === e) return parseFloat(i[62]);
          if ("pt" === e) return parseFloat(i[50]);
          if ("hk" === e) return parseFloat(i[61]);
        }
        return null;
      },
      stockType: function (t) {
        if (!this.qtData) return null;
        var e = t.stock_market,
          n = this.qtDataKey(t),
          i = this.qtData[n];
        if (i) {
          if ("us" === e) return parseFloat(i[56]);
          if ("sh" === e || "sz" === e || "bj" === e) return parseFloat(i[61]);
          if ("pt" === e) return parseFloat(i[58]);
          if ("hk" === e) return parseFloat(i[63]);
        }
        return null;
      },
      manageSelfStock: function (t, i, r) {
        return n(
          this,
          null,
          e().mark(function n() {
            var o, s, c, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (null == (o = this.didAgreeUserAgreement)
                          ? void 0
                          : o.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 2:
                      this.$emit("manageSelfStock", {
                        item: t,
                        action: r,
                        index: i,
                      }),
                        (s = t.stock_code),
                        (c = t.stock_market),
                        (a = {
                          newsid: this.live_news_id,
                          fchannel_id_fm_i: this.addFavChannel,
                          foperation_purpose: "zixuan",
                          stocklist: ["".concat(c).concat(s)].join(","),
                          positionlist: [i].join(","),
                          hasaddlist: [2 === r ? 1 : 0].join(","),
                        }),
                        2 === r
                          ? this.reportInfo &&
                            this.reportInfo.addFav &&
                            this.reportAnalytics(this.reportInfo.addFav, a)
                          : 4 === r &&
                            this.reportInfo &&
                            this.reportInfo.cancelFav &&
                            this.reportAnalytics(this.reportInfo.cancelFav, a);
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
      jumpStockDatail: function (t) {
        var e = t.stock_code,
          n = t.stock_market,
          i = t.stock_name;
        v({ stockCode: e, stockMarket: h[n], stockName: i, instance: this }),
          this.reportInfo &&
            this.reportInfo.tapDetail &&
            this.reportAnalytics(this.reportInfo.tapDetail, { stockid: e });
      },
      tradeStock: function (e) {
        var n,
          r,
          o = e.stock_code,
          s = e.stock_market,
          c = e.stock_name;
        if (this.checkIndex || this.checkPt)
          S({
            symbol: "".concat(s).concat(o),
            stockType: this.stockType(e),
            stockName: c,
            instance: this,
          });
        else if (this.didOpenAccount)
          this.reportInfo &&
            this.reportInfo.trade &&
            this.reportAnalytics(this.reportInfo.trade),
            _({ stockMarket: h[s], stockCode: o, instance: this });
        else if (
          (this.reportAnalytics("news.live-detail.relateQuotesOpenAccount", {
            stat_data: "Iji90p007s026",
          }),
          this.isMP && i.wx$1)
        )
          i.wx$1.switchTab({ url: "/pages/index/trade" });
        else {
          var a = "";
          if (this.supportBroker && this.live && this.live.account_wzq_link) {
            var u = this.live.account_wzq_link.match(/broker=(\d+)/);
            if (u) a = t(u, 2)[1];
          }
          a
            ? (null == (n = this.TradeFunc) ? void 0 : n.navToApplyStep) &&
              (null == (r = this.TradeFunc) ||
                r.navToApplyStep({ broker: a, stat: "Iji90p007s026" }))
            : this.$router.push({
                path: "/apply/index?stat_data=Iji90p007s026",
              });
        }
      },
    },
  },
  I = i._export_sfc(w, [
    [
      "render",
      function (t, e, n, r, o, s) {
        return i.e(
          {
            a: "url(".concat(s.getStockIcon(n.item.stock_market), ")"),
            b: i.t(n.item.stock_name),
            c: i.o(function (t) {
              return s.jumpStockDatail(n.item);
            }, 5496),
            d: n.item.desc && n.item.desc.length > 0,
          },
          n.item.desc && n.item.desc.length > 0
            ? {
                e: i.f(s.descTagList(n.item), function (t, e, n) {
                  return { a: i.t(t.name), b: e };
                }),
              }
            : s.qtValue(n.item)
            ? i.e(
                { g: s.qtValue(n.item) > 0 },
                s.qtValue(n.item) > 0
                  ? { h: i.t("+" + s.qtValue(n.item) + "%") }
                  : s.qtValue(n.item) < 0
                  ? { j: i.t(s.qtValue(n.item) + "%") }
                  : { k: i.t(s.qtValue(n.item) + "%") },
                { i: s.qtValue(n.item) < 0 }
              )
            : {},
          { f: s.qtValue(n.item), l: i.n(n.type), m: s.isSelfStock },
          s.isSelfStock
            ? {
                n: i.o(function (t) {
                  return s.manageSelfStock(n.item, n.itemPosition, 4);
                }, 5497),
              }
            : {
                o: i.t(o.isLightMode ? "+自选" : "加自选"),
                p: i.o(function (t) {
                  return s.manageSelfStock(n.item, n.itemPosition, 2);
                }, 5498),
              },
          { q: n.item && s.checkPt && s.showTrade },
          n.item && s.checkPt && s.showTrade
            ? {
                r: i.o(function (t) {
                  return s.tradeStock(n.item);
                }, 5499),
              }
            : n.item && s.checkIndex && s.showTrade
            ? {
                t: i.o(function (t) {
                  return s.tradeStock(n.item);
                }, 5500),
              }
            : s.checkTrade && s.showTrade
            ? {
                w: i.o(function (t) {
                  return s.tradeStock(n.item);
                }, 5501),
              }
            : {},
          {
            s: n.item && s.checkIndex && s.showTrade,
            v: s.checkTrade && s.showTrade,
            x: i.n(o.isLightMode ? "light-mode" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-a50ce647"],
  ]);
wx.createComponent(I);
