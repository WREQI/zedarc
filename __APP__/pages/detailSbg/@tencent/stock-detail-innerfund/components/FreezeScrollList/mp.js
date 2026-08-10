var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../stock-hq-data/index.js"),
  n = require("../../../../../../common/vendor.js"),
  i = {},
  o = {
    slidingContainerSelector: ".list-scroll",
    scrollWrapperSelector: ".list-inner-wrapper",
    damping: 0.6,
    enableScrollX: !0,
    enableScrollY: !1,
  },
  r = {
    components: {
      NoData: function () {
        return "../NoData.js";
      },
      MarketIcon: function () {
        return "../../../stock-markets-base/components/MarketIcon.js";
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
        showGuide: !1,
        intersectionObserver: null,
        listCouterNum: 0,
        listCurOffset: 0,
        winHeight: 0,
        scrollLeft: 0,
        parentScrolling: !1,
        rankNum: 10,
        scrollOptions: o,
      };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
      isQDII: function () {
        return function (e) {
          return !(!e || !e.stock_type) && "QDII" === e.stock_type.slice(0, 4);
        };
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
      this.optList && this.checkListItemShow();
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
      touchStart: function () {
        this.$emit("touchHorizontalScrollList", !0);
      },
      touchEnd: function () {
        this.$emit("touchHorizontalScrollList", !1);
      },
      gotoDetail: function (e, i) {
        if ("--" !== e.code && e.code) {
          var o = t.utils.splitSymbol(e.code),
            r = o.market,
            a = o.scode;
          if ((this.$emit("clickStockDetail", e.code, i), this.isLctApp))
            this.hqBridge.openMiniApp("wx4ffb369b6881ee5e", {
              pagePath: "/pages/quote/quote",
              extraData: { market: r, scode: a },
            });
          else {
            if (
              ("mini" === this.hqBridge.ENV &&
                "outer" !== this.fundType &&
                this.hqBridge.routeTo({
                  path: "/detail",
                  query: { type: r, scode: a },
                }),
              "mp" === this.hqBridge.ENV &&
                "outer" !== this.fundType &&
                this.hqBridge.routeTo({
                  url: "/pages/quote/quote?market="
                    .concat(r, "&scode=")
                    .concat(a),
                }),
              this.hqBridge.ENV === n.EnvTypeEnum.MP &&
                "outer" === this.fundType)
            ) {
              var s = t.utils.isHSMarket(this.stockPageMarket),
                l =
                  "https://www.txfund.com/h5/v6/pages/product/detail/index?fund_code="
                    .concat(a, "&spid=1800007030&lctfrom=tx_stock&stat_data=")
                    .concat(s ? "Odr77p009c001" : "Obf95p009c001");
              this.hqBridge.openExtraWebview(l);
            }
            if (
              (this.hqBridge.ENV !== n.EnvTypeEnum.WZQ ||
                "outer" === this.fundType ||
                this.parentScrolling ||
                this.hqBridge.routeTo({
                  name: "HqStock",
                  params: { market: r, code: a, name: e.name },
                }),
              this.hqBridge.ENV === n.EnvTypeEnum.WZQ &&
                "outer" === this.fundType)
            ) {
              if (this.hqBridge.IS_ZXG_XCX_ALLH5) return;
              var c = t.utils.isHSMarket(this.stockPageMarket);
              setTimeout(function () {
                location &&
                  (location.href =
                    "https://www.txfund.com/h5/v6/pages/product/detail/index?fund_code="
                      .concat(a, "&spid=1800007030&lctfrom=tx_stock&stat_data=")
                      .concat(c ? "Odr77p009c001" : "Obf95p009c001"));
              }, 500);
            }
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
              ? this.isMp
                ? "14px"
                : "0.37rem"
              : e.length <= 13
              ? this.isMp
                ? 14 - 2 * (e.length - 10) + "px"
                : 0.37 - 0.03 * (e.length - 10) + "rem"
              : this.isMp
              ? "10px"
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
      getText: function (e, n) {
        var i = e[n.key];
        if ("--" !== i) {
          var o = "--" === i ? "" : n.unit;
          if (n.rate || n.rateFormat) i = +i > 0 ? "+".concat(i) : i;
          else if (
            n.big &&
            ((i = parseFloat(+i || 0)),
            n.thousand && (i *= 1e4),
            (i =
              i <= -1e4
                ? n.keep
                  ? "-".concat(t.utils.bigNumberToText(Math.abs(i), "", n.keep))
                  : "-".concat(t.utils.bigNumberToText(Math.abs(i)))
                : (i < 0 && i > -1e4) || (i < 1e4 && i >= 0)
                ? n.keep
                  ? i.toFixed(n.keep)
                  : i.toFixed(2)
                : n.keep
                ? t.utils.bigNumberToText(i, "", n.keep)
                : t.utils.bigNumberToText(i)),
            n.bigFormat)
          ) {
            var r = i.toString() || "";
            i = "-" !== r[0] && 0 != +i ? "+".concat(i) : i;
          }
          return (
            "fund_value" === n.key &&
              (i = (i = parseFloat(+i || 0)).toFixed(4)),
            i + o
          );
        }
      },
    },
  };
Array || (n.resolveComponent("market-icon") + n.resolveComponent("NoData"))(),
  "function" == typeof i && i(r);
var a = n._export_sfc(r, [
  [
    "render",
    function (e, t, i, o, r, a) {
      return n.e(
        { a: i.listData && i.listData.length > 0 },
        i.listData && i.listData.length > 0
          ? n.e(
              { b: i.isShowALL && "inner" === i.fundType },
              i.isShowALL && "inner" === i.fundType
                ? {
                    c: n.t(i.listName),
                    d: n.n(r.showAllName ? "noselect" : "select"),
                    e: n.o(function (e) {
                      return a.changeName(1);
                    }, 2899),
                  }
                : { f: n.t(i.listName) },
              { g: i.isShowALL && "inner" === i.fundType },
              (i.isShowALL && i.fundType, {}),
              { h: i.isShowALL && "inner" === i.fundType },
              i.isShowALL && "inner" === i.fundType
                ? {
                    i: n.n(r.showAllName ? "select" : "noselect"),
                    j: n.o(function (e) {
                      return a.changeName(2);
                    }, 2900),
                  }
                : {},
              {
                k: n.f(i.listData, function (e, t, o) {
                  return n.e(
                    { a: t < r.rankNum || !i.rankFold },
                    t < r.rankNum || !i.rankFold
                      ? n.e(
                          { b: t < r.rankNum || !i.rankFold },
                          t < r.rankNum || !i.rankFold
                            ? n.e(
                                { c: !r.showAllName },
                                r.showAllName
                                  ? {
                                      f: n.t(e.fund_name),
                                      g: a.getFontSize(e.fund_name),
                                    }
                                  : {
                                      d: n.t(e.name),
                                      e: a.getFontSize(e.name),
                                    },
                                { h: "--" !== e.name },
                                "--" !== e.name
                                  ? n.e(
                                      {
                                        i: "outer" === i.fundType,
                                        j: "450d0dce-0-" + o,
                                        k: n.p({
                                          market: "cwjj",
                                          scode: e.code,
                                        }),
                                        l: "inner" === i.fundType,
                                        m: "450d0dce-1-" + o,
                                        n: n.p({
                                          market: "cnjj",
                                          scode: e.code,
                                        }),
                                        o: "bond" === i.fundType,
                                        p: "450d0dce-2-" + o,
                                        q: n.p({
                                          market: "zhai",
                                          scode: e.code,
                                        }),
                                        r: n.t(e.code.slice(2)),
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
                                            t: n.t(a.getLabelTag(e.labels)),
                                            v: n.n(
                                              a.isMp
                                                ? "stock-tag-mp"
                                                : "stock-tag"
                                            ),
                                            w: n.n(
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
                                        ? n.e(
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
                            A: n.o(
                              function (n) {
                                return a.gotoDetail(e, t);
                              },
                              2901,
                              e.key || t
                            ),
                          }
                        )
                      : {},
                    { B: e.key || t }
                  );
                }),
                l: n.n(
                  "stockdetail" === i.pageType && "outer" === i.fundType
                    ? "content-item-outer"
                    : ""
                ),
                m: n.f(i.columns, function (e, t, o) {
                  return n.e(
                    { a: i.isSort && e.sort },
                    i.isSort && e.sort
                      ? {
                          b: n.t(e.name),
                          c: n.n(
                            i.sortType === e.sort
                              ? i.sortDown
                                ? "down text-select"
                                : "up text-select"
                              : ""
                          ),
                          d: n.o(
                            function (t) {
                              return a.changeSort(e.sort);
                            },
                            2902,
                            e.key
                          ),
                        }
                      : { e: n.t(e.name) },
                    { f: e.key, g: n.n(e.big ? "column-big" : "") }
                  );
                }),
                n: n.f(i.listData, function (e, t, o) {
                  return n.e(
                    { a: t < r.rankNum || !i.rankFold },
                    t < r.rankNum || !i.rankFold
                      ? {
                          b: n.f(i.columns, function (t, i, o) {
                            return {
                              a: n.t(a.getText(e, t) || "--"),
                              b: t.key,
                              c: n.n(
                                a.colorFilter(e[t.key], t.rate || t.color)
                              ),
                              d: n.n(t.big ? "column-big" : ""),
                            };
                          }),
                        }
                      : {},
                    {
                      c: e.key || t,
                      d: n.o(
                        function (n) {
                          return a.gotoDetail(e, t);
                        },
                        2903,
                        e.key || t
                      ),
                    }
                  );
                }),
                o: n.n(
                  "hqetftab" !== i.pageType && "bond" !== i.fundType
                    ? "small-size"
                    : ""
                ),
                p: n.n(
                  "stockdetail" === i.pageType && "outer" === i.fundType
                    ? "content-item-outer"
                    : ""
                ),
                q: r.scrollOptions,
                r: n.n(
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
  ["__scopeId", "data-v-450d0dce"],
]);
wx.createComponent(a);
