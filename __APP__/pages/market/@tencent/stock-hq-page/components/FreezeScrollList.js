var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../common/vendor.js"),
  n = require("../../stock-hq-data/index.js"),
  i = {
    slidingContainerSelector: ".list-scroll",
    scrollWrapperSelector: ".list-inner-wrapper",
    damping: 0.6,
    enableScrollX: !0,
    enableScrollY: !1,
  },
  o = {
    components: {
      NoData: function () {
        return "./NoData.js";
      },
      MarketIcon: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/MarketIcon.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      isSort: { type: Boolean, default: !1 },
      isShowALL: { type: Boolean, default: !1 },
      listData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      columns: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isPage: { type: Boolean, default: !1 },
      sortType: { type: String, default: "" },
      sortDown: { type: Boolean, default: !0 },
      fundType: { type: String, default: "" },
      pageType: { type: String, default: "" },
      iconLeft: { type: Boolean, default: !0 },
      listName: { type: String, default: "基金名称" },
      showScrollGuide: { type: Boolean, default: !1 },
      optList: { type: Boolean, default: !1 },
      skin: { type: String, default: "" },
      isScrolling: { type: Boolean, default: !1 },
      stockPageMarket: { type: String, default: "" },
      lct: { type: Boolean, default: !1 },
      isLctApp: { type: Boolean, default: !1 },
      rankFold: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        showAllName: !1,
        captionScrolling: !1,
        listScrolling: !1,
        scrollReport: !0,
        showGuide: !1,
        intersectionObserver: null,
        listCouterNum: 0,
        listCurOffset: 0,
        winHeight: 0,
        scrollLeft: 0,
        parentScrolling: !1,
        rankNum: 10,
        scrollOptions: i,
        itemHeight: 0,
      };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    watch: {
      showScrollGuide: {
        deep: !0,
        handler: function (e) {
          (this.showGuide = e), this.scrollGuide();
        },
      },
      isScrolling: {
        handler: function (e) {
          this.parentScrolling = e;
        },
        deep: !0,
        immediate: !0,
      },
      listData: function (e, t) {
        var n = this;
        e.length !== t.length &&
          this.intersectionObserver &&
          this.optList &&
          (this.intersectionObserver.disconnect(),
          this.$nextTick(function () {
            n.checkListItemShow();
          }));
      },
    },
    mounted: function () {
      var e,
        n = this;
      this.$refs.listScroll &&
        (null == (e = this.$refs.listScroll) ||
          e.addEventListener("scroll", this.horizontalScroll)),
        this.optList && this.checkListItemShow(),
        this.isMp &&
          t.wx$1
            .createSelectorQuery()
            .in(this)
            .select(".content-item")
            .boundingClientRect(function (e) {
              n.itemHeight = (null == e ? void 0 : e.height) || 48;
            })
            .exec();
    },
    created: function () {
      "mp" !== this.hqBridge.ENV &&
        (this.winHeight = window.innerHeight || 667);
    },
    activated: function () {
      this.optList && this.checkListItemShow();
    },
    deactivated: function () {
      this.intersectionObserver &&
        (this.intersectionObserver.disconnect(),
        (this.listCurOffset = 0),
        (this.listCouterNum = 0));
    },
    beforeDestroy: function () {
      var e;
      this.$refs.listScroll &&
        (null == (e = this.$refs.listScroll) ||
          e.removeEventListener("scroll", this.horizontalScroll)),
        this.intersectionObserver && this.intersectionObserver.disconnect();
    },
    methods: {
      tagColorFilter: function (e) {
        return "T+0" === this.getLabelTag(e) ? "tag-blue" : "tag-red";
      },
      getLabelTag: function (e) {
        if (!e || 0 === e.length) return "";
        if (e.length > 1) {
          var t = e.find(function (e) {
            return 12 == +e.label;
          });
          return t ? t.name : e[0].name ? e[0].name : "";
        }
        return e[0].name ? e[0].name : "";
      },
      queryList: function (e) {
        return Array.from(document.querySelectorAll(e));
      },
      checkListItemShow: function () {
        var e,
          t = this;
        if (
          "IntersectionObserver" in window &&
          "IntersectionObserverEntry" in window &&
          "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
          var n =
            (null == (e = document.querySelectorAll("#app-nav")[0])
              ? void 0
              : e.clientHeight) || 50;
          (this.intersectionObserver = new IntersectionObserver(
            function (e) {
              var n = t.winHeight / 2,
                i = !1;
              e &&
                e.length > 0 &&
                e.length < t.listData.length &&
                (e.forEach(function (e) {
                  !i &&
                    e.boundingClientRect &&
                    e.boundingClientRect.y < n &&
                    (e.target &&
                      e.target.dataset &&
                      e.target.dataset.type === t.pageType &&
                      (t.listCurOffset = +e.target.dataset.index),
                    (i = !0)),
                    e.boundingClientRect &&
                      e.boundingClientRect.y >= n &&
                      (e.target &&
                        e.target.dataset &&
                        e.target.dataset.type === t.pageType &&
                        (t.listCouterNum = +e.target.dataset.index + 1),
                      !e.isIntersecting &&
                        t.listCouterNum >= 1 &&
                        (t.listCouterNum = t.listCouterNum - 1));
                }),
                e.length !== t.listData.length &&
                  (t.$emit("listOffset", t.listCurOffset),
                  t.$emit("listCount", t.listCouterNum)));
            },
            { rootMargin: "0px 0px -".concat(n, "px 0px") }
          )),
            this.queryList(".itemcounter").forEach(function (e) {
              t.intersectionObserver.observe(e);
            });
        }
      },
      scrollGuide: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this.$refs.listScroll &&
                        (setTimeout(function () {
                          var e = n.$refs.listScroll.scrollWidth || 0;
                          n.$refs.listScroll.scrollTo({
                            left: e,
                            behavior: "smooth",
                          });
                        }, 500),
                        setTimeout(function () {
                          n.$refs.listScroll.scrollTo({
                            left: 0,
                            behavior: "smooth",
                          });
                        }, 1e3),
                        setTimeout(function () {
                          n.$emit("endScrollGuide");
                        }, 2e3));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (e, i) {
            var o = function (e) {
                try {
                  a(n.next(e));
                } catch (e) {
                  i(e);
                }
              },
              r = function (e) {
                try {
                  a(n.throw(e));
                } catch (e) {
                  i(e);
                }
              },
              a = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(o, r);
              };
            a((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      colorFilter: function (e, t) {
        return t
          ? +e > 0
            ? this.lct
              ? "rise-lct"
              : "rise"
            : +e < 0
            ? this.lct
              ? "drop-lct"
              : "drop"
            : this.lct
            ? "gray-lct"
            : "gray"
          : "";
      },
      touchmove: function (e) {
        for (var t = this, n = e.target; n; ) {
          if (n.tagName && "swiper-container" === n.tagName.toLowerCase()) {
            var i = n.swiper;
            i &&
              i.allowTouchMove &&
              ((i.allowTouchMove = !1),
              this.disabledParentSwipers || (this.disabledParentSwipers = []),
              this.disabledParentSwipers.push(i));
          }
          n = null == n ? void 0 : n.parentElement;
        }
        clearTimeout(this.swiperTimer),
          (this.swiperTimer = setTimeout(function () {
            t.enableParentSwipers();
          }, 500));
      },
      enableParentSwipers: function () {
        this.disabledParentSwipers &&
          this.disabledParentSwipers.length > 0 &&
          (this.disabledParentSwipers.forEach(function (e) {
            e && (e.allowTouchMove = !0);
          }),
          (this.disabledParentSwipers = []));
      },
      horizontalScroll: function () {
        this.scrollReport &&
          "bond" === this.fundType &&
          (this.hqBridge.report("hq.choose_hq.bondtab.stocklist_scroll"),
          (this.scrollReport = !1));
      },
      gotoDetail: function (e) {
        if ("--" !== e.code && e.code) {
          var t = n.utils.splitSymbol(e.code),
            i = t.market,
            o = t.scode;
          if ((this.$emit("clickStockDetail", e.code), this.isLctApp))
            this.hqBridge.openMiniApp("wx4ffb369b6881ee5e", {
              pagePath: "/pages/quote/quote",
              extraData: { market: i, scode: o },
            });
          else if (
            ("mini" === this.hqBridge.ENV &&
              "outer" !== this.fundType &&
              this.hqBridge.routeTo({
                path: "/detail",
                query: { type: i, scode: o },
              }),
            "mp" === this.hqBridge.ENV &&
              "outer" !== this.fundType &&
              this.hqBridge.routeTo({
                url: "/pages/quote/quote?market="
                  .concat(i, "&scode=")
                  .concat(o),
              }),
            "wzq" !== this.hqBridge.ENV ||
              "outer" === this.fundType ||
              this.parentScrolling ||
              this.hqBridge.routeTo({
                name: "HqStock",
                params: { market: i, code: o, name: e.name },
              }),
            "wzq" === this.hqBridge.ENV && "outer" === this.fundType)
          ) {
            if (this.hqBridge.IS_ZXG_XCX_ALLH5) return;
            var r = n.utils.isHSMarket(this.stockPageMarket);
            setTimeout(function () {
              location &&
                (location.href =
                  "https://www.txfund.com/h5/v6/pages/product/detail/index?fund_code="
                    .concat(o, "&spid=1800007030&lctfrom=tx_stock&stat_data=")
                    .concat(r ? "Odr77p009c001" : "Obf95p009c001"));
            }, 500);
          }
        }
      },
      showNewTag: function (e) {
        var t = new Date(),
          n = new Date(Date.parse(e.replace(/-/g, "/")));
        return Math.ceil((t.getTime() - n.getTime()) / 864e5) < 30;
      },
      changeSort: function (e) {
        this.$emit("changeSort", e);
      },
      changeName: function (e) {
        (this.showAllName = 1 !== e),
          this.$emit("changeName", this.showAllName);
      },
      getFontSize: function (e) {
        if ("--" !== e && e)
          return "hqetftab" !== this.pageType
            ? e.length <= 10
              ? "0.37rem"
              : e.length <= 13
              ? 0.37 - 0.03 * (e.length - 10) + "rem"
              : "0.27rem"
            : e.length <= 7
            ? "0.43rem"
            : 8 === e.length
            ? "0.37rem"
            : 9 === e.length
            ? "0.35rem"
            : e.length >= 10
            ? "0.32rem"
            : void 0;
      },
      getText: function (e, t) {
        var i = e[t.key];
        if ("--" !== i) {
          var o = "--" === i ? "" : t.unit;
          if (t.rate || t.rateFormat) i = +i > 0 ? "+".concat(i) : i;
          else if (
            t.big &&
            ((i = parseFloat(+i || 0)),
            t.thousand && (i *= 1e4),
            (i =
              i <= -1e4
                ? t.keep
                  ? "-".concat(n.utils.bigNumberToText(Math.abs(i), "", t.keep))
                  : "-".concat(n.utils.bigNumberToText(Math.abs(i)))
                : (i < 0 && i > -1e4) || (i < 1e4 && i >= 0)
                ? t.keep
                  ? i.toFixed(t.keep)
                  : i.toFixed(2)
                : t.keep
                ? n.utils.bigNumberToText(i, "", t.keep)
                : n.utils.bigNumberToText(i)),
            t.bigFormat)
          ) {
            var r = i.toString() || "";
            i = "-" !== r[0] && 0 != +i ? "+".concat(i) : i;
          }
          return (
            "fund_value" === t.key &&
              (i = (i = parseFloat(+i || 0)).toFixed(3)),
            i + o
          );
        }
      },
    },
  };
Array || (t.resolveComponent("market-icon") + t.resolveComponent("NoData"))(),
  (function (e) {
    e.wxsCallMethods || (e.wxsCallMethods = []),
      e.wxsCallMethods.push("horizontalScroll");
  })(o);
var r = t._export_sfc(o, [
  [
    "render",
    function (e, n, i, o, r, a) {
      return t.e(
        { a: i.listData && i.listData.length > 0 },
        i.listData && i.listData.length > 0
          ? t.e(
              { b: i.isShowALL && "inner" === i.fundType },
              i.isShowALL && "inner" === i.fundType
                ? {
                    c: t.t(i.listName),
                    d: t.n(r.showAllName ? "noselect" : "select"),
                    e: t.o(function (e) {
                      return a.changeName(1);
                    }, 4968),
                  }
                : { f: t.t(i.listName) },
              { g: i.isShowALL && "inner" === i.fundType },
              (i.isShowALL && i.fundType, {}),
              { h: i.isShowALL && "inner" === i.fundType },
              i.isShowALL && "inner" === i.fundType
                ? {
                    i: t.n(r.showAllName ? "select" : "noselect"),
                    j: t.o(function (e) {
                      return a.changeName(2);
                    }, 4969),
                  }
                : {},
              {
                k: t.f(i.listData, function (e, n, o) {
                  return t.e(
                    { a: n < r.rankNum || !i.rankFold },
                    n < r.rankNum || !i.rankFold
                      ? t.e(
                          { b: n < r.rankNum || !i.rankFold },
                          n < r.rankNum || !i.rankFold
                            ? t.e(
                                { c: !r.showAllName },
                                r.showAllName
                                  ? {
                                      f: t.t(e.fund_name),
                                      g: a.getFontSize(e.fund_name),
                                    }
                                  : {
                                      d: t.t(e.name),
                                      e: a.getFontSize(e.name),
                                    },
                                { h: "--" !== e.name },
                                "--" !== e.name
                                  ? t.e(
                                      {
                                        i: "outer" === i.fundType,
                                        j: "80839cb4-0-" + o,
                                        k: t.p({
                                          market: "cwjj",
                                          scode: e.code,
                                        }),
                                        l: "inner" === i.fundType,
                                        m: "80839cb4-1-" + o,
                                        n: t.p({
                                          market: "cnjj",
                                          scode: e.code,
                                        }),
                                        o: "bond" === i.fundType,
                                        p: "80839cb4-2-" + o,
                                        q: t.p({
                                          market: "zhai",
                                          scode: e.code,
                                        }),
                                        r: t.t(e.code.slice(2)),
                                        s:
                                          "bond" !== i.fundType &&
                                          "--" !== e.name &&
                                          e.labels &&
                                          e.labels.length > 0 &&
                                          a.getLabelTag(e.labels),
                                      },
                                      "bond" !== i.fundType &&
                                        "--" !== e.name &&
                                        e.labels &&
                                        e.labels.length > 0 &&
                                        a.getLabelTag(e.labels)
                                        ? {
                                            t: t.t(a.getLabelTag(e.labels)),
                                            v: t.n(
                                              a.isMp
                                                ? "stock-tag-mp"
                                                : "stock-tag"
                                            ),
                                            w: t.n(
                                              a.isMp
                                                ? ""
                                                : a.tagColorFilter(e.labels)
                                            ),
                                          }
                                        : {},
                                      {
                                        x:
                                          "bond" === i.fundType &&
                                          "--" !== e.name,
                                      },
                                      "bond" === i.fundType && "--" !== e.name
                                        ? t.e(
                                            { y: e.stock_ztj === e.stock_zxj },
                                            (e.stock_ztj === e.stock_zxj ||
                                              a.showNewTag(e.ssrq),
                                            {}),
                                            { z: a.showNewTag(e.ssrq) },
                                            {}
                                          )
                                        : {}
                                    )
                                  : {}
                              )
                            : {},
                          {
                            A: t.n(
                              "stockdetail" === i.pageType &&
                                "outer" === i.fundType
                                ? "content-item-outer"
                                : ""
                            ),
                            B: t.o(
                              function (t) {
                                return a.gotoDetail(e);
                              },
                              4970,
                              e.key || n
                            ),
                          }
                        )
                      : {},
                    { C: e.key || n }
                  );
                }),
                l: t.f(i.columns, function (e, n, o) {
                  return t.e(
                    { a: i.isSort && e.sort },
                    i.isSort && e.sort
                      ? {
                          b: t.t(e.name),
                          c: t.n(
                            i.sortType === e.sort
                              ? i.sortDown
                                ? "down text-select"
                                : "up text-select"
                              : ""
                          ),
                          d: t.o(
                            function (t) {
                              return a.changeSort(e.sort);
                            },
                            4971,
                            e.key
                          ),
                        }
                      : { e: t.t(e.name) },
                    {
                      f: e.key,
                      g: t.n(e.big ? "column-big" : ""),
                      h: t.n(e.wide ? "column-wide" : ""),
                    }
                  );
                }),
                m: t.n(
                  "stockdetail" === i.pageType
                    ? "inner" === i.fundType
                      ? "detail-tab-column"
                      : "detail-outer-column"
                    : ""
                ),
                n: t.f(i.listData, function (e, n, o) {
                  return t.e(
                    { a: n < r.rankNum || !i.rankFold },
                    n < r.rankNum || !i.rankFold
                      ? t.e(
                          { b: n < r.rankNum || !i.rankFold },
                          n < r.rankNum || !i.rankFold
                            ? {
                                c: t.f(i.columns, function (n, i, o) {
                                  return {
                                    a: t.t(a.getText(e, n) || "--"),
                                    b: n.key,
                                    c: t.n(
                                      a.colorFilter(e[n.key], n.rate || n.color)
                                    ),
                                    d: t.n(n.big ? "column-big" : ""),
                                    e: t.n(n.wide ? "column-wide" : ""),
                                  };
                                }),
                                d: t.n(
                                  "stockdetail" === i.pageType
                                    ? "inner" === i.fundType
                                      ? "detail-tab-column"
                                      : "detail-outer-column"
                                    : ""
                                ),
                              }
                            : {},
                          {
                            e: t.n(
                              "hqetftab" !== i.pageType && "bond" !== i.fundType
                                ? "small-size"
                                : ""
                            ),
                            f: t.n(
                              "stockdetail" === i.pageType &&
                                "outer" === i.fundType
                                ? "content-item-outer"
                                : ""
                            ),
                            g: t.o(
                              function (t) {
                                return a.gotoDetail(e);
                              },
                              4972,
                              e.key || n
                            ),
                          }
                        )
                      : {},
                    { h: e.key || n }
                  );
                }),
                o: r.scrollOptions,
                p: t.n(
                  "stockdetail" === i.pageType
                    ? "inner" === i.fundType
                      ? "detail-tab-scroll"
                      : "detail-outer-scroll"
                    : ""
                ),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-80839cb4"],
]);
wx.createComponent(r);
