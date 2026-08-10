var t = require("../../../../../common/vendor.js"),
  e = require("../../stock-hq-data/index.js"),
  o = require("../AttentionPoint.js"),
  a = {
    components: {
      MarketIcon: function () {
        return "../../stock-markets-base/components/MarketIcon.js";
      },
    },
    props: { cardType: String, listData: Array, plateId: String },
    data: function () {
      return {
        captionData: {
          stock: ["股票名称", "最新价", "涨跌幅"],
          fund: ["基金名称", "规模", "近5日涨跌幅"],
        },
        showOpenTab: !1,
        adInfo: {},
        tipLocation: "",
      };
    },
    created: function () {
      this.getAdData();
    },
    computed: {
      curCaption: function () {
        return (
          this.captionData[this.cardType] &&
          this.captionData[this.cardType].slice(1)
        );
      },
      curCaptionName: function () {
        return (
          this.captionData[this.cardType] && this.captionData[this.cardType][0]
        );
      },
      valueFilter: function () {
        return function (t) {
          var e = +t;
          return e > 0
            ? "+".concat(e.toFixed(2), "%")
            : "".concat(e.toFixed(2), "%");
        };
      },
      bigNumFilter: function () {
        return function (t) {
          return (t = parseFloat(+t || 0)) < 1e4
            ? t.toFixed(2)
            : e.utils.bigNumberToText(t);
        };
      },
      colorFilter: function () {
        return function (t) {
          return +t > 0 ? "rise" : +t < 0 ? "drop" : "gray";
        };
      },
      getMarket: function () {
        return function (t) {
          var o = t && t.split("."),
            a = "".concat(o[1].toLowerCase()).concat(o[0]);
          return e.utils.splitSymbol(a).market;
        };
      },
      getCode: function () {
        return function (t) {
          var o = t && t.split("."),
            a = "".concat(o[1].toLowerCase()).concat(o[0]);
          return e.utils.splitSymbol(a).scode;
        };
      },
      listDataThree: function () {
        return this.listData && this.listData.length > 3
          ? this.listData.slice(0, 3)
          : this.listData;
      },
    },
    methods: {
      tagColorFilter: function (t) {
        return "T+0" === this.getLabelTag(t) ? "tag-blue" : "tag-red";
      },
      getLabelTag: function (t) {
        return t && 0 !== t.length
          ? (t.length > 1 &&
              t.find(function (t) {
                return "规模大增" === t;
              })) ||
              t[0]
          : "";
      },
      getAdData: function () {
        var e = this;
        o.getAdInfo().then(function (o) {
          if (o && 0 == +o.retcode) {
            e.showOpenTab = !0;
            var a = (o.adinfo || []).filter(function (t) {
              return "bankuai_hotstock" === t.ad_type;
            });
            e.adInfo = a && a[0];
            var n = e.adInfo && e.adInfo.abt_params && e.adInfo.abt_params.gpjj;
            "" !== n && (e.tipLocation = "jj" === n ? "fund" : "stock"),
              t.StockBridge.report(
                "hq.plate_detail.account_tip_show_".concat(e.tipLocation),
                {
                  report_info: e.adInfo && e.adInfo.report_info,
                  stockid: e.plateId,
                }
              );
          }
        });
      },
      delTips: function () {
        (this.showOpenTab = !1),
          t.StockBridge.report(
            "hq.plate_detail.close_account_tip_".concat(this.tipLocation),
            { report_info: this.adInfo && this.adInfo.report_info }
          ),
          o.closeAd({ adid: this.adInfo.adid || "" });
      },
      openAccount: function () {
        (location.href = this.adInfo.link || ""),
          t.StockBridge.report(
            "hq.plate_detail.goto_open_account_".concat(this.tipLocation),
            { report_info: this.adInfo && this.adInfo.report_info }
          );
      },
      gotoDetail: function (o) {
        var a = o && o.split("."),
          n = "".concat(a[1].toLowerCase()).concat(a[0]),
          r = e.utils.splitSymbol(n),
          c = r.market,
          i = r.scode,
          s = { name: "mp" === t.StockBridge.ENV ? "stockdetail" : "HqStock" };
        "mp" === t.StockBridge.ENV
          ? (s.query = { market: c, scode: i })
          : (s.params = { market: c, code: i }),
          t.StockRouter.routeTo(s);
      },
    },
  };
Array || t.resolveComponent("market-icon")();
var n = t._export_sfc(a, [
  [
    "render",
    function (e, o, a, n, r, c) {
      return t.e(
        { a: c.listDataThree && c.listDataThree.length > 0 },
        c.listDataThree && c.listDataThree.length > 0
          ? t.e(
              {
                b: t.t(c.curCaptionName),
                c: t.f(c.curCaption, function (e, o, a) {
                  return { a: t.t(e), b: o };
                }),
                d: t.f(c.listDataThree, function (e, o, n) {
                  return t.e(
                    {
                      a: t.t(e.stock_name),
                      b: "45d5033c-0-" + n,
                      c: t.p({
                        market: c.getMarket(e.stock_code),
                        scode: c.getCode(e.stock_code),
                      }),
                      d: t.t(c.getCode(e.stock_code)),
                      e: "fund" === a.cardType && e.tags && e.tags.length > 0,
                    },
                    "fund" === a.cardType && e.tags && e.tags.length > 0
                      ? {
                          f: t.t(c.getLabelTag(e.tags)),
                          g: t.n(c.tagColorFilter(e.tags)),
                        }
                      : {},
                    "stock" === a.cardType
                      ? { h: t.t((+e.price).toFixed(2)) }
                      : {},
                    "stock" === a.cardType
                      ? {
                          i: t.t(c.valueFilter(e.stock_zdf)),
                          j: t.n(c.colorFilter(e.stock_zdf)),
                        }
                      : {},
                    "fund" === a.cardType
                      ? { k: t.t(c.bigNumFilter(e.fund_size)) }
                      : {},
                    "fund" === a.cardType
                      ? {
                          l: t.t(c.valueFilter(e.zdf_5d)),
                          m: t.n(c.colorFilter(e.zdf_5d)),
                        }
                      : {},
                    {
                      n: "stock" === a.cardType && e.tags && e.tags.length > 0,
                    },
                    "stock" === a.cardType && e.tags && e.tags.length > 0
                      ? {
                          o: t.f(e.tags.slice(0, 5), function (e, o, a) {
                            return { a: t.t(e), b: "tag" + o };
                          }),
                        }
                      : {},
                    {
                      p:
                        "stock" === a.cardType &&
                        o !== c.listDataThree.length - 1,
                    },
                    ("stock" === a.cardType && c.listDataThree.length, {}),
                    {
                      q: o,
                      r: t.o(
                        function (t) {
                          return c.gotoDetail(e.stock_code);
                        },
                        3204,
                        o
                      ),
                    }
                  );
                }),
                e: "stock" === a.cardType,
                f: "stock" === a.cardType,
                g: "fund" === a.cardType,
                h: "fund" === a.cardType,
                i:
                  r.showOpenTab &&
                  r.adInfo &&
                  r.adInfo.text &&
                  r.tipLocation === a.cardType,
              },
              r.showOpenTab &&
                r.adInfo &&
                r.adInfo.text &&
                r.tipLocation === a.cardType
                ? {
                    j: t.t(r.adInfo.text || ""),
                    k: t.t(r.adInfo.btn_text || ""),
                    l: t.o(function () {
                      return c.openAccount && c.openAccount.apply(c, arguments);
                    }, 3205),
                    m: t.o(function (t) {
                      return c.delTips();
                    }, 3206),
                    n: t.n("stock" === a.cardType ? "account-mar" : ""),
                  }
                : {}
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-45d5033c"],
]);
wx.createComponent(n);
