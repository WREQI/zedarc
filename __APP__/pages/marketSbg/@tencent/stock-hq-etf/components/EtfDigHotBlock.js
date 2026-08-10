require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  e = require("../../stock-base/visibilityObserver/index.js"),
  i = require("../../stock-hq-data/index.js"),
  o = require("../utils/route.js"),
  s = require("../utils/common.js"),
  n = [
    "hq.etf-page.hotspot_module_first_section_click",
    "hq.etf-page.hotspot_module_second_section_click",
    "hq.etf-page.hotspot_module_third_section_click",
  ],
  c = {
    name: "EtfDigHotBlock",
    inject: { hqBridge: { from: "hqBridge" } },
    props: {
      theme: { type: String, default: "light" },
      hotPointList: { type: Array, default: null },
    },
    data: function () {
      return {
        isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
        visibilityObj: null,
        activeIndex: 0,
        hasExposed: !1,
        hasReportedHotInfo: !1,
      };
    },
    computed: {
      titleImg: function () {
        return "dark" === this.theme
          ? "https://st.gtimg.com/design/52d59982845c929efc07a593c29d5ef8.png"
          : "https://st.gtimg.com/design/22bb811d271c2dc130d7814c8b7243bb.png";
      },
      themeList: function () {
        return this.hotPointList ? this.hotPointList.slice(0, 3) : [];
      },
      status: function () {
        return null === this.hotPointList
          ? "loading"
          : Array.isArray(this.hotPointList) && 0 !== this.hotPointList.length
          ? "success"
          : "empty";
      },
      visible: function () {
        return "empty" !== this.status;
      },
      activeTheme: function () {
        return this.themeList[this.activeIndex] || null;
      },
      activeHotDesc: function () {
        var t;
        return (null == (t = this.activeTheme) ? void 0 : t.point) || "";
      },
      activeEtf: function () {
        var t,
          e = null == (t = this.activeTheme) ? void 0 : t.etf;
        return Array.isArray(e) && e.length > 0 ? e[0] : null;
      },
    },
    mounted: function () {
      this.observeBrow();
    },
    watch: {
      themeList: function () {
        (this.activeIndex < 0 || this.activeIndex >= this.themeList.length) &&
          (this.activeIndex = 0),
          "success" === this.status && this.tryReportHotInfoBrow();
      },
    },
    beforeDestroy: function () {
      var t, e, i;
      null ==
        (i =
          null == (e = null == (t = this.visibilityObj) ? void 0 : t.observer)
            ? void 0
            : e.disconnect) || i.call(e),
        (this.visibilityObj = null);
    },
    methods: {
      observeBrow: function () {
        var i = this;
        this.$nextTick(function () {
          i.visible &&
            (i.visibilityObj = new e.VisibilityObserver(
              ".dig-hot-block-wrapper",
              {
                once: !0,
                callback: function (e) {
                  e &&
                    ((i.hasExposed = !0),
                    t.StockBridge.report("hq.etf-page.hotspot_module_brow", {
                      column_id: "etf_dig_hot_spot_topic",
                    }),
                    i.tryReportHotInfoBrow());
                },
                intersection: { threshold: 0 },
              },
              { context: i }
            ));
        });
      },
      tryReportHotInfoBrow: function () {
        var e, i;
        if (
          !this.hasReportedHotInfo &&
          this.hasExposed &&
          "success" === this.status
        ) {
          var o = (null == (e = this.activeTheme) ? void 0 : e.symbol) || "";
          if (o) {
            (this.hasReportedHotInfo = !0),
              t.StockBridge.report(
                "hq.etf-page.hotspot_module_hotspot_info_brow",
                {
                  column_id: "etf_dig_hot_spot_topic",
                  item_type: "plateid",
                  plateid: o,
                }
              );
            var s = (null == (i = this.activeEtf) ? void 0 : i.symbol) || "";
            t.StockBridge.report(
              "hq.etf-page.hotspot_module_related_etf_brow",
              {
                column_id: "etf_dig_hot_spot_topic",
                item_type: "plateid",
                plateid: o,
                attribute_type: "stockid",
                stockid: s,
              }
            );
          }
        }
      },
      formatPct: function (t) {
        if (null == t || "" === t) return "--";
        var e = Number(t);
        if (Number.isNaN(e)) return "--";
        var i = e.toFixed(2);
        return e > 0 ? "+".concat(i, "%") : "".concat(i, "%");
      },
      setZdpClass: s.setZdpClass,
      handleMoreClick: function () {
        t.StockBridge.report("hq.etf-page.hotspot_module_more_btn_click", {
          column_id: "etf_dig_hot_spot_topic",
        }),
          this.gotoHotTopic();
      },
      handleRankClick: function (e, i) {
        var o = (null == e ? void 0 : e.symbol) || "";
        n[i] &&
          t.StockBridge.report(n[i], {
            column_id: "etf_dig_hot_spot_topic",
            item_type: "plateid",
            plateid: o,
          }),
          this.activeIndex !== i && (this.activeIndex = i),
          o &&
            t.StockBridge.report(
              "hq.etf-page.hotspot_module_hotspot_info_brow",
              {
                column_id: "etf_dig_hot_spot_topic",
                item_type: "plateid",
                plateid: o,
              }
            );
      },
      handleContentClick: function () {
        var e,
          i = (null == (e = this.activeTheme) ? void 0 : e.symbol) || "";
        t.StockBridge.report("hq.etf-page.hotspot_module_hotspot_click", {
          column_id: "etf_dig_hot_spot_topic",
          item_type: "plateid",
          plateid: i,
        }),
          i &&
            t.StockRouter.routeTo({
              name: "etfhotspotdetail",
              query: { code: i },
            });
      },
      handleEtfClick: function (e) {
        var s;
        if (e && e.symbol) {
          t.StockBridge.report(
            "hq.etf-page.hotspot_module_associate_etf_tag_click",
            {
              column_id: "etf_dig_hot_spot_topic",
              item_type: "plateid",
              plateid:
                (null == (s = this.activeTheme) ? void 0 : s.symbol) || "",
              attribute_type: "stockid",
              stockid: e.symbol || "",
            }
          );
          var n = (function (t) {
              if (!t) return { market: "", scode: "" };
              var e = i.utils.splitSymbol(String(t)) || {};
              return { market: e.market || "", scode: e.scode || "" };
            })(e.symbol),
            c = n.market,
            r = n.scode;
          c && r && o.navigateToQuote(this.hqBridge, c, r);
        }
      },
      gotoHotTopic: function () {
        this.$emit("goto-hot-topic");
      },
    },
  },
  r = t._export_sfc(c, [
    [
      "render",
      function (e, i, o, s, n, c) {
        return t.e(
          { a: c.visible },
          c.visible
            ? t.e(
                {
                  b: c.titleImg,
                  c: t.o(function () {
                    return (
                      c.handleMoreClick && c.handleMoreClick.apply(c, arguments)
                    );
                  }, 3550),
                  d: "success" === c.status,
                },
                "success" === c.status
                  ? t.e(
                      {
                        e: t.f(c.themeList, function (e, i, o) {
                          return t.e(
                            {
                              a: t.t(i + 1),
                              b: t.n("rank-badge--rank-".concat(i + 1)),
                              c: t.t(e.name),
                              d: t.t(c.formatPct(e.price_ratio)),
                              e: t.n(
                                i === n.activeIndex
                                  ? c.setZdpClass(e.price_ratio)
                                  : "color-inactive"
                              ),
                              f: i === n.activeIndex,
                            },
                            (n.activeIndex, {}),
                            {
                              g: e.symbol || i,
                              h: t.n(
                                i === n.activeIndex ? "theme-item--top1" : ""
                              ),
                              i: t.o(
                                function (t) {
                                  return c.handleRankClick(e, i);
                                },
                                3551,
                                e.symbol || i
                              ),
                            }
                          );
                        }),
                        f: c.activeHotDesc,
                      },
                      c.activeHotDesc
                        ? {
                            g: t.t(c.activeHotDesc),
                            h: t.o(function () {
                              return (
                                c.handleContentClick &&
                                c.handleContentClick.apply(c, arguments)
                              );
                            }, 3552),
                          }
                        : {},
                      { i: c.activeEtf },
                      c.activeEtf
                        ? {
                            j: t.t(c.activeEtf.name),
                            k: t.t(c.formatPct(c.activeEtf.price_ratio)),
                            l: t.n(c.setZdpClass(c.activeEtf.price_ratio)),
                            m: t.o(function (t) {
                              return c.handleEtfClick(c.activeEtf);
                            }, 3553),
                          }
                        : {}
                    )
                  : {},
                { n: "loading" === c.status },
                (c.status, {}),
                { o: t.n(n.isLite ? "lite" : "") }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-134b2488"],
  ]);
wx.createComponent(r);
