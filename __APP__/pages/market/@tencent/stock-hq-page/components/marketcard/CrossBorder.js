var t = require("../../../../../../common/vendor.js"),
  e = require("../../../stock-hq-data/index.js"),
  o = require("../../../stock-hq-core/utils/storage/local.js");
require("../../../../js-cookie/src/js.cookie.js");
var i = require("../../util/setColor.js"),
  r = require("../../../../hqPage_plugin_gen_assets.js"),
  n = {
    name: "CrossBorder",
    inject: ["hqBridge"],
    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      title: { type: String, default: "" },
      plateId: { type: String, default: "" },
      stat: { type: String, default: "" },
      etfType: { type: String, default: "" },
      jumpCurTab: { type: Number, default: 0 },
      isShowTip: { type: Boolean, default: !1 },
      isShowGuide: { type: Boolean, default: !1 },
      market: { type: String, default: "" },
      isAccountOpen: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isAccountGuideShow: !1, localKey: "", timer: null };
    },
    computed: {
      isPc: function () {
        var t, e;
        return (
          ("mp" === this.hqBridge.ENV &&
            (null ==
            (e =
              null == (t = null == getApp ? void 0 : getApp().globalData.detect)
                ? void 0
                : t.env)
              ? void 0
              : e.IS_PCWEIXIN)) ||
          !1
        );
      },
      isH5OrWzq: function () {
        return "oem" !== this.hqBridge.ENV;
      },
      isWzq: function () {
        return "wzq" === this.hqBridge.ENV;
      },
      marketText: function () {
        var t = this.market;
        return "HK" === t ? "港股" : "US" === t ? "美股" : "";
      },
      guideDesc: function () {
        var t = this.market;
        return "HK" === t
          ? "通过ETF买港股，无印花税且T+0交易"
          : "US" === t
          ? "用A股账户通过ETF买美股，T+0交易"
          : "";
      },
    },
    created: function () {
      (this.localKey = "hq.".concat(
        this.market.toLowerCase(),
        "tab.cross-border-etf-account-guide-show"
      )),
        (this.isAccountGuideShow = !o.sls.getItem(this.localKey)),
        this.hqBridge.report(
          "hq.choose_hq.".concat(
            this.market.toLowerCase(),
            "tab.cross-border-etf_expose"
          )
        ),
        this.isAccountGuideShow &&
          !this.isAccountOpen &&
          this.hqBridge.report(
            "hq.choose_hq.".concat(
              this.market.toLowerCase(),
              "tab.apply_btn_brow"
            ),
            { fchannel_id_fm_i: "If400p000a020" }
          );
    },
    beforeDestroy: function () {
      clearTimeout(this.timer);
    },
    mounted: function () {
      var t = this;
      this.timer = setTimeout(function () {
        t.showYYPop(), clearTimeout(t.timer);
      }, 500);
    },
    methods: {
      setFontColor: i.setFontColor,
      showTip: function () {
        this.hqBridge.report(
          "hq.choose_hq.".concat(
            this.market.toLowerCase(),
            "tab.cross-border-etf-tip_click"
          )
        ),
          this.$emit("show-tip");
      },
      chunk: t.chunk,
      getFontSize: function (t) {
        return t.length <= 7 ? "0.37rem" : "0.32rem";
      },
      gotoDetail: function (o) {
        this.hqBridge.report(
          "hq.choose_hq.".concat(
            this.market.toLowerCase(),
            "tab.cross-border-etf-detail_click"
          ),
          { stockid: o.code }
        );
        var i = e.utils.splitSymbol(o.code),
          r = i.market,
          n = i.scode;
        this.isWzq
          ? this.hqBridge.routeTo({
              path: "/hq/stock/".concat(r, "/").concat(n),
              query: {
                detailTitle: "".concat(o.name, "(").concat(o.code, ")"),
                type: 0,
                stockid: e.utils.getSymbol(r, n),
              },
            })
          : t.StockRouter.routeTo({
              name: "stockdetail",
              query: {
                market: r,
                scode: n,
                detailTitle: "".concat(o.name, "(").concat(o.code, ")"),
                type: 0,
              },
            });
      },
      gotoEtfTab: function () {
        this.hqBridge.report(
          "hq.choose_hq.".concat(
            this.market.toLowerCase(),
            "tab.cross-border-etf-more_click"
          )
        ),
          this.$emit("gotoEtfTab");
      },
      gotoGlobalInvest: function () {
        this.hqBridge.report(
          "hq.choose_hq.".concat(
            this.market.toLowerCase(),
            "tab.cross-border-etf-title_click"
          )
        ),
          t.StockRouter.routeTo({ name: "investglobal" });
      },
      goOpenAccount: function () {
        var t = "If400p000a020";
        this.hqBridge.report(
          "hq.choose_hq.".concat(
            this.market.toLowerCase(),
            "tab.apply-account_click"
          ),
          { fchannel_id_fm_i: t }
        );
        var e = { stat_data: t };
        this.isWzq
          ? this.$router.push({ path: "/apply/index", query: e })
          : this.hqBridge.busEmit("navigateToApplyIndex", { stat: t });
      },
      closeAccountGuide: function () {
        (this.isAccountGuideShow = !1),
          o.sls.setItem(this.localKey, !0),
          this.hqBridge.report(
            "hq.choose_hq.".concat(
              this.market.toLowerCase(),
              "tab.close-account-guide_click"
            )
          );
      },
      showYYPop: function () {
        var e = this,
          i = "hq.".concat(
            this.market.toLowerCase(),
            "tab.cross-border-etf-pop-show"
          );
        if (!o.sls.getItem(i)) {
          var r = t.dayjs("2023-04-06"),
            n = t.dayjs();
          if (!(r.diff(n, "day") <= 0)) {
            var c = this.$YYpop({
              attach: ".".concat(
                this.market.toLowerCase(),
                "-cross-border-title"
              ),
              placement: "bottom-end",
              content: "用A股账户通过ETF买".concat(
                this.marketText,
                "，T+0交易"
              ),
              icon: function () {
                return "";
              },
              close_pic: 1,
              property: "func_introduce",
              onCloseBtnClick: function (t) {
                t.e.stopPropagation();
              },
              onVisibleChange: function (t) {
                t && o.sls.setItem(i, !0);
              },
              modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
            });
            this.timer = setTimeout(function () {
              c.emitPopVisible(!1), clearTimeout(e.timer);
            }, 5e3);
          }
        }
      },
      formatNumber: function (t) {
        return t >= 1e8
          ? "".concat((t / 1e8).toFixed(2), "亿")
          : t >= 1e4
          ? "".concat((t / 1e4).toFixed(2), "万")
          : t;
      },
    },
  },
  c = t._export_sfc(n, [
    [
      "render",
      function (e, o, i, n, c, s) {
        return t.e(
          { a: t.t(i.title), b: i.isShowTip },
          i.isShowTip
            ? {
                c: t.o(function (t) {
                  return s.showTip();
                }, 4940),
              }
            : {},
          {
            d: t.n("".concat(i.market.toLowerCase(), "-cross-border-title")),
            e: i.isShowGuide,
          },
          i.isShowGuide ? { f: t.t(s.guideDesc) } : {},
          { g: s.isPc },
          s.isPc ? {} : { h: r._imports_0 },
          {
            i: i.stat,
            j: t.o(function () {
              return (
                s.gotoGlobalInvest && s.gotoGlobalInvest.apply(s, arguments)
              );
            }, 4941),
            k: t.f(s.chunk(i.data, 3), function (e, o, i) {
              return {
                a: t.f(e, function (e, o, i) {
                  return t.e(
                    { a: t.t(e.name), b: s.getFontSize(e.name), c: e.zdf },
                    e.zdf
                      ? { d: t.t(e.zdf), e: t.n(s.setFontColor(e.zdf)) }
                      : {},
                    { f: e.labels && e.labels.length },
                    e.labels && e.labels.length
                      ? {
                          g: t.f(
                            e.labels
                              .map(function (t) {
                                return t;
                              })
                              .sort(function (t) {
                                return 12 === t.label ? -1 : 0;
                              }),
                            function (e, o, i) {
                              return {
                                a: t.t(e.name),
                                b: e.label,
                                c: t.n(
                                  12 === e.label ? "color-rise" : "color-blue"
                                ),
                              };
                            }
                          ),
                        }
                      : { h: t.t(s.formatNumber(e.gm)) },
                    {
                      i: e.code,
                      j: t.o(
                        function (t) {
                          return s.gotoDetail(e);
                        },
                        4942,
                        e.code
                      ),
                    }
                  );
                }),
                b: o,
              };
            }),
            l: t.n(s.isH5OrWzq ? "h5-or-wzq-feature-stock" : ""),
            m: c.isAccountGuideShow && !i.isAccountOpen,
          },
          c.isAccountGuideShow && !i.isAccountOpen
            ? {
                n: t.t(s.marketText),
                o: t.o(function () {
                  return s.goOpenAccount && s.goOpenAccount.apply(s, arguments);
                }, 4943),
                p: t.o(function () {
                  return (
                    s.closeAccountGuide &&
                    s.closeAccountGuide.apply(s, arguments)
                  );
                }, 4944),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-eabb0381"],
  ]);
wx.createComponent(c);
