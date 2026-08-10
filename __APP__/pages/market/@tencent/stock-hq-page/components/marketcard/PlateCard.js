var t = require("../../../../../../common/vendor.js"),
  e = require("../../../stock-hq-data/index.js"),
  i = require("../../util/setColor.js"),
  o = /2\d{2}/,
  r = /(4|6)\d{2}/,
  h = {
    name: "Plateall",
    inject: ["hqBridge"],
    props: {
      data: Array,
      title: String,
      plateId: String,
      showList: Boolean,
      stat: String,
      etfType: String,
      jumpCurTab: Number,
      isShowTip: { type: Boolean, default: !1 },
      isShowGuide: { type: Boolean, default: !1 },
      market: { type: String, default: "" },
    },
    computed: {
      isWindows: function () {
        return (
          "undefined" != typeof navigator &&
          /WindowsWechat/i.test(navigator.userAgent)
        );
      },
      isH5OrWzq: function () {
        return "oem" !== this.hqBridge.ENV;
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
    },
    methods: {
      setFontColor: i.setFontColor,
      showTip: function () {
        this.$emit("show-tip");
      },
      chunk: t.chunk,
      gotoList: function () {
        var e = this;
        if ("hs_etf" === this.plateId)
          return (
            "popular" === this.etfType
              ? this.gotoPopularEtfList()
              : "index" === this.etfType
              ? this.gotoNumberEtfList()
              : "topic" === this.etfType
              ? this.gotoTopicEtfList()
              : this.isWzq
              ? this.$emit("switchToETF")
              : this.gotoHotEtfList(),
            void (
              this.etfType &&
              this.hqBridge.report(
                "hq.hotetf.".concat(this.etfType, "_etf_detail_click")
              )
            )
          );
        setTimeout(function () {
          "oem" === e.hqBridge.ENV
            ? e.hqBridge.routeTo({ path: "/wj_hq/plateall/".concat(e.plateId) })
            : "mini" === e.hqBridge.ENV
            ? e.hqBridge.routeTo({
                path: "/plate/".concat(e.plateId),
                query: { pmarket: e.market },
              })
            : ("wzq" !== e.hqBridge.ENV && "dafeng" !== e.hqBridge.ENV) ||
              e.hqBridge.routeTo({ path: "/plateall/".concat(e.plateId) });
        }, 10),
          t.StockBridge.openExtraWebview(
            "https://wzq.tenpay.com/mp/v2/index.html#/plateall/".concat(
              this.plateId
            )
          ),
          this.report(!1);
      },
      gotoHotEtfList: function () {
        "oem" === this.hqBridge.ENV || "wzq" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: t.isBroker ? "/wj_hq/plate/hotETF" : "/plate/hotETF",
            })
          : "mini" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({ path: "/hotETF" }),
          this.report(!1);
      },
      gotoPopularEtfList: function () {
        "oem" === this.hqBridge.ENV || "wzq" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: t.isBroker ? "/wj_hq/plate/etf" : "/plate/etf",
            })
          : "mini" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({ path: "/etf/popular-rank" }),
          this.report(!1);
      },
      gotoNumberEtfList: function () {
        "oem" === this.hqBridge.ENV || "wzq" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: t.isBroker
                ? "/wj_hq/plate/etf/index-rank"
                : "/chy/ETFRecommend/IndexRankList",
            })
          : "mini" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({ path: "/etf/index-rank" }),
          this.report(!1);
      },
      gotoTopicEtfList: function () {
        "oem" === this.hqBridge.ENV || "wzq" === this.hqBridge.ENV
          ? this.hqBridge.routeTo({
              path: t.isBroker
                ? "/wj_hq/plate/etf/theme-rank"
                : "/chy/ETFRecommend/ThemeRankList",
              query: { curTab: this.jumpCurTab },
            })
          : "mini" === this.hqBridge.ENV &&
            this.hqBridge.routeTo({
              path: "/etf/theme-rank",
              query: { curTab: this.jumpCurTab },
            }),
          this.report(!1);
      },
      getFontSize: function (t) {
        return t.length <= 7
          ? "0.37rem"
          : t.length <= 12
          ? 0.37 - 0.03 * (t.length - 7) + "rem"
          : "0.22rem";
      },
      gotoFund: function (t) {
        var e = this,
          i = { sz: "0", sh: "1" };
        setTimeout(function () {
          "wzq" === e.hqBridge.ENV
            ? e.hqBridge.routeTo({
                name: "HqStock",
                params: {
                  market: i[t.code.slice(0, 2)],
                  code: t.code.slice(2),
                },
              })
            : "oem" === e.hqBridge.ENV
            ? e.hqBridge.routeTo({
                path: "/detail",
                query: {
                  market: i[t.code.slice(0, 2)],
                  scode: t.code.slice(2),
                },
              })
            : "mini" === e.hqBridge.ENV &&
              e.hqBridge.routeTo({
                path: "/detail",
                query: { type: i[t.code.slice(0, 2)], scode: t.code.slice(2) },
              });
        }),
          this.report(!0);
      },
      gotoDetail: function (i) {
        var h = this;
        if ("hs_etf" !== this.plateId)
          setTimeout(function () {
            var s = e.utils.splitSymbol(i.code),
              n = s.market,
              a = s.scode;
            o.test(h.plateId)
              ? t.StockRouter.routeTo({
                  name: "stockdetail",
                  query: { market: n, scode: a },
                })
              : r.test(h.plateId) &&
                t.StockRouter.routeTo({
                  name: "plate-list",
                  query: { plate: h.plateId, code: i.code, name: i.name },
                });
          }, 10),
            this.report(!0);
        else if ((this.gotoFund(i), this.stat))
          this.hqBridge.report("hq.choose_hq.hstab.hotetf_detail_click", {
            stockid: e.utils.getSymbol(this.market, i.code.slice(2)),
          });
        else {
          this.hqBridge.report(
            "hq.hotetf.".concat(
              {
                人气最高ETF: "popular",
                热门指数ETF: "index",
                热门行业主题ETF: "topic",
              }[this.title],
              "_etf_enter_click"
            )
          );
        }
      },
      report: function (t) {
        this.hqBridge.report(
          "hq.hs.hot_"
            .concat(
              {
                热门行业板块: "industry",
                热门概念板块: "concept",
                热门地域板块: "area",
                热门ETF: "etf",
                ETF板块: "etf_plate",
              }[this.title],
              "_"
            )
            .concat(t ? "" : "more_", "click")
        );
      },
    },
  },
  s = t._export_sfc(h, [
    [
      "render",
      function (e, i, o, r, h, s) {
        return t.e(
          { a: o.showList },
          o.showList
            ? t.e(
                { b: t.t(o.title), c: o.isShowTip },
                o.isShowTip
                  ? {
                      d: t.o(function (t) {
                        return s.showTip();
                      }, 4937),
                    }
                  : {},
                { e: o.isShowGuide && s.isWzq },
                (o.isShowGuide && s.isWzq, {}),
                { f: s.isWindows },
                (s.isWindows, {}),
                {
                  g: o.stat,
                  h: t.o(function (t) {
                    return s.gotoList();
                  }, 4938),
                }
              )
            : { i: t.t(o.title) },
          {
            j: t.f(s.chunk(o.data, 3), function (e, i, r) {
              return {
                a: t.f(e, function (e, i, r) {
                  return t.e(
                    { a: t.t(e.name), b: s.getFontSize(e.name), c: e.zdf },
                    e.zdf
                      ? { d: t.t(e.zdf), e: t.n(s.setFontColor(e.zdf)) }
                      : {},
                    "hs_etf" === o.plateId
                      ? {
                          f: t.t(e.zxj),
                          g: t.n(s.isH5OrWzq ? "h5-or-wzq-price" : ""),
                        }
                      : {
                          h: t.t(e.fn),
                          i: t.t(e.fzjcj),
                          j: t.t(e.fzdf),
                          k: t.n(s.setFontColor(e.fzjcj && e.fzdf)),
                          l: t.n(s.isH5OrWzq ? "h5-or-wzq-feature-stock" : ""),
                        },
                    {
                      m: e.code,
                      n: t.o(
                        function (t) {
                          return s.gotoDetail(e);
                        },
                        4939,
                        e.code
                      ),
                    }
                  );
                }),
                b: i,
              };
            }),
            k: "hs_etf" === o.plateId,
          }
        );
      },
    ],
    ["__scopeId", "data-v-8a595aab"],
  ]);
wx.createComponent(s);
