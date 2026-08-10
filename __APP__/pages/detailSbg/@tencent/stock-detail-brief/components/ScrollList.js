var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../stock-hq-data/index.js"),
  n = require("../../../../../common/vendor.js"),
  i = {
    inject: ["hqBridge"],
    props: {
      isSort: { type: Boolean, default: !1 },
      isShowALL: { type: Boolean, default: !1 },
      listData: { type: Array, default: [] },
      columns: { type: Array, default: [] },
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
    },
    components: {
      NoData: function () {
        return "./NoData.js";
      },
    },
    watch: {
      showScrollGuide: {
        deep: !0,
        handler: function (t) {
          (this.showGuide = t), this.scrollGuide();
        },
      },
      isScrolling: {
        handler: function (t) {
          this.parentScrolling = t;
        },
        deep: !0,
        immediate: !0,
      },
      listData: function (t, e) {
        var n = this;
        t.length !== e.length &&
          this.intersectionObserver &&
          this.optList &&
          (this.intersectionObserver.disconnect(),
          this.$nextTick(function () {
            n.checkListItemShow();
          }));
      },
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
      };
    },
    mounted: function () {
      var t, e;
      this.$refs.captionScroll &&
        this.$refs.listScroll &&
        (null == (t = this.$refs.captionScroll) ||
          t.addEventListener("scroll", this.horizontalScroll),
        null == (e = this.$refs.listScroll) ||
          e.addEventListener("scroll", this.horizontalScroll)),
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
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
      isQDII: function () {
        return function (t) {
          return !(!t || !t.stock_type) && "QDII" === t.stock_type.slice(0, 4);
        };
      },
      isZxgXcx: function () {
        return ["mpweapp"].includes("mpweapp");
      },
    },
    methods: {
      tagColorFilter: function (t) {
        return "T+0" === this.getLabelTag(t) ? "tag-blue" : "tag-red";
      },
      getLabelTag: function (t) {
        return t && 0 !== t.length
          ? t.length > 1
            ? t.find(function (t) {
                return 12 == +t.label;
              }).name
            : t[0].name
          : "";
      },
      queryList: function (t) {
        return Array.from(document.querySelectorAll(t));
      },
      optShowRange: function () {
        return !0;
      },
      checkListItemShow: function () {
        var t,
          e = this;
        if (
          "IntersectionObserver" in window &&
          "IntersectionObserverEntry" in window &&
          "intersectionRatio" in window.IntersectionObserverEntry.prototype
        ) {
          var n =
            (null == (t = document.querySelectorAll("#app-nav")[0])
              ? void 0
              : t.clientHeight) || 50;
          (this.intersectionObserver = new IntersectionObserver(
            function (t) {
              var n = e.winHeight / 2,
                i = !1;
              t &&
                t.length > 0 &&
                t.length < e.listData.length &&
                (t.forEach(function (t) {
                  !i &&
                    t.boundingClientRect &&
                    t.boundingClientRect.y < n &&
                    (t.target &&
                      t.target.dataset &&
                      t.target.dataset.type === e.pageType &&
                      (e.listCurOffset = +t.target.dataset.index),
                    (i = !0)),
                    t.boundingClientRect &&
                      t.boundingClientRect.y >= n &&
                      (t.target &&
                        t.target.dataset &&
                        t.target.dataset.type === e.pageType &&
                        (e.listCouterNum = +t.target.dataset.index + 1),
                      !t.isIntersecting &&
                        e.listCouterNum >= 1 &&
                        (e.listCouterNum = e.listCouterNum - 1));
                }),
                t.length !== e.listData.length &&
                  (e.$emit("listOffset", e.listCurOffset),
                  e.$emit("listCount", e.listCouterNum)));
            },
            { rootMargin: "0px 0px -".concat(n, "px 0px") }
          )),
            this.queryList(".itemcounter").forEach(function (t) {
              e.intersectionObserver.observe(t);
            });
        }
      },
      scrollGuide: function () {
        return (
          (e = this),
          null,
          (n = t().mark(function e() {
            var n = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      this.$refs.captionScroll &&
                        this.$refs.listScroll &&
                        (setTimeout(function () {
                          var t = n.$refs.listScroll.scrollWidth || 0;
                          n.$refs.listScroll.scrollTo({
                            left: t,
                            behavior: "smooth",
                          });
                        }, 500),
                        setTimeout(function () {
                          n.$refs.listScroll.scrollTo({
                            left: 0,
                            behavior: "smooth",
                          });
                        }, 1e3));
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, i) {
            var o = function (t) {
                try {
                  s(n.next(t));
                } catch (t) {
                  i(t);
                }
              },
              r = function (t) {
                try {
                  s(n.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, r);
              };
            s((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      },
      colorFilter: function (t, e) {
        return e ? (+t > 0 ? "rise" : +t < 0 ? "drop" : "gray") : "";
      },
      touchStart: function () {
        this.$emit("touchHorizontalScrollList", !0);
      },
      touchEnd: function () {
        this.$emit("touchHorizontalScrollList", !1);
      },
      horizontalScroll: function (t) {
        if (t.target === this.$refs.captionScroll) {
          if (this.listScrolling) return void (this.listScrolling = !1);
          (this.captionScrolling = !0),
            (this.$refs.listScroll.scrollLeft =
              this.$refs.captionScroll.scrollLeft);
        } else if (t.target === this.$refs.listScroll) {
          if (this.captionScrolling) return void (this.captionScrolling = !1);
          (this.listScrolling = !0),
            (this.$refs.captionScroll.scrollLeft =
              this.$refs.listScroll.scrollLeft);
        }
      },
      gotoDetail: function (t) {
        if ("--" !== t.code && t.code) {
          var n = e.utils.splitSymbol(t.code),
            i = n.market,
            o = n.scode;
          "mini" === this.hqBridge.ENV &&
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
              ("bond" === this.fundType
                ? this.hqBridge.report("hq.choose_hq.bondtab.stocklist_click", {
                    stockid: t.code,
                  })
                : (this.pageType &&
                    this.isPage &&
                    this.hqBridge.report(
                      "hq.stock_fund_inner.stockdetail_click",
                      { from: this.pageType }
                    ),
                  this.pageType &&
                    !this.isPage &&
                    this.hqBridge.report(
                      "hq.stock_fund_inner.tab_stockdetail_click",
                      { from: this.pageType }
                    )),
              this.hqBridge.routeTo({
                name: "HqStock",
                params: { market: i, code: o, name: t.name },
              }));
        }
      },
      showNewTag: function (t) {
        var e = new Date(),
          n = new Date(Date.parse(t.replace(/-/g, "/")));
        return Math.ceil((e.getTime() - n.getTime()) / 864e5) < 30;
      },
      changeSort: function (t) {
        this.$emit("changeSort", t);
      },
      changeName: function (t) {
        (this.showAllName = 1 !== t),
          this.$emit("changeName", this.showAllName);
      },
      getFontSize: function (t) {
        if ("--" !== t && t) {
          if ("hqetftab" !== this.pageType) {
            return t.length <= 10
              ? "0.32rem"
              : t.length <= 13
              ? 0.32 - 0.03 * (t.length - 10) + "rem"
              : "0.28rem";
          }
          return t.length <= 7
            ? "0.43rem"
            : 8 === t.length
            ? "0.37rem"
            : 9 === t.length
            ? "0.35rem"
            : t.length >= 10
            ? "0.32rem"
            : void 0;
        }
      },
      getText: function (t, n) {
        var i = t[n.key];
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
                  ? "-".concat(e.utils.bigNumberToText(Math.abs(i), "", n.keep))
                  : "-".concat(e.utils.bigNumberToText(Math.abs(i)))
                : (i < 0 && i > -1e4) || (i < 1e4 && i >= 0)
                ? n.keep
                  ? i.toFixed(n.keep)
                  : i.toFixed(2)
                : n.keep
                ? e.utils.bigNumberToText(i, "", n.keep)
                : e.utils.bigNumberToText(i)),
            n.bigFormat)
          ) {
            var r = i.toString() || "";
            i = "-" !== r[0] && 0 != +i ? "+".concat(i) : i;
          }
          return (
            "fund_value" === n.key &&
              (i = (i = parseFloat(+i || 0)).toFixed(3)),
            i + o
          );
        }
      },
    },
    beforeDestroy: function () {
      var t, e;
      this.$refs.captionScroll &&
        this.$refs.listScroll &&
        (null == (t = this.$refs.captionScroll) ||
          t.removeEventListener("scroll", this.horizontalScroll),
        null == (e = this.$refs.listScroll) ||
          e.removeEventListener("scroll", this.horizontalScroll)),
        this.intersectionObserver && this.intersectionObserver.disconnect();
    },
  };
Array || n.resolveComponent("NoData")();
var o = n._export_sfc(i, [
  [
    "render",
    function (t, e, i, o, r, s) {
      return n.e(
        { a: i.listData && i.listData.length > 0 },
        i.listData && i.listData.length > 0
          ? n.e(
              { b: i.listData && i.listData.length > 0 },
              i.listData && i.listData.length > 0
                ? n.e(
                    { c: i.isShowALL && "inner" === i.fundType },
                    i.isShowALL && "inner" === i.fundType
                      ? {
                          d: n.t(i.listName),
                          e: n.n(r.showAllName ? "noselect" : "select"),
                          f: n.o(function (t) {
                            return s.changeName(1);
                          }, 4436),
                        }
                      : { g: n.t(i.listName) },
                    { h: i.isShowALL && "inner" === i.fundType },
                    (i.isShowALL && i.fundType, {}),
                    { i: i.isShowALL && "inner" === i.fundType },
                    i.isShowALL && "inner" === i.fundType
                      ? {
                          j: n.n(r.showAllName ? "select" : "noselect"),
                          k: n.o(function (t) {
                            return s.changeName(2);
                          }, 4437),
                        }
                      : {}
                  )
                : {},
              {
                l: n.f(i.columns, function (t, e, o) {
                  return n.e(
                    { a: i.isSort && t.sort },
                    i.isSort && t.sort
                      ? {
                          b: n.t(t.name),
                          c: n.n(
                            i.sortType === t.sort
                              ? i.sortDown
                                ? "down text-select"
                                : "up text-select"
                              : ""
                          ),
                          d: n.o(
                            function (e) {
                              return s.changeSort(t.sort);
                            },
                            4438,
                            t.key
                          ),
                        }
                      : { e: n.t(t.name) },
                    { f: t.key }
                  );
                }),
                m: "bond" === i.fundType || "hqetftab" === i.pageType,
              },
              ("bond" === i.fundType || i.pageType, {}),
              { n: n.n(i.isPage ? "page-head" : "") }
            )
          : {},
        { o: i.listData && i.listData.length > 0 },
        i.listData && i.listData.length > 0
          ? {
              p: n.f(i.listData, function (t, e, o) {
                return n.e(
                  r.showAllName
                    ? { c: n.t(t.fund_name), d: s.getFontSize(t.fund_name) }
                    : { a: n.t(t.name), b: s.getFontSize(t.name) },
                  { e: "--" !== t.name },
                  "--" !== t.name
                    ? n.e(
                        { f: "inner" === i.fundType },
                        (i.fundType, {}),
                        { g: "outer" === i.fundType },
                        (i.fundType, {}),
                        { h: "bond" === i.fundType },
                        (i.fundType, {}),
                        { i: n.t(t.code.slice(2)), j: s.isQDII(t) },
                        (s.isQDII(t), {}),
                        {
                          k:
                            "hqetftab" === i.pageType &&
                            t.labels &&
                            t.labels.length > 0,
                        },
                        "hqetftab" === i.pageType &&
                          t.labels &&
                          t.labels.length > 0
                          ? {
                              l: n.t(s.getLabelTag(t.labels)),
                              m: n.n(s.tagColorFilter(t.labels)),
                            }
                          : {},
                        { n: "bond" === i.fundType && "--" !== t.name },
                        "bond" === i.fundType && "--" !== t.name
                          ? n.e(
                              { o: t.stock_ztj === t.stock_zxj },
                              (t.stock_ztj === t.stock_zxj ||
                                s.showNewTag(t.ssrq),
                              {}),
                              { p: s.showNewTag(t.ssrq) },
                              {}
                            )
                          : {}
                      )
                    : {},
                  {
                    q: t.key || e,
                    r: e,
                    s: n.o(
                      function (e) {
                        return s.gotoDetail(t);
                      },
                      4439,
                      t.key || e
                    ),
                  }
                );
              }),
              q: !r.showAllName,
              r: i.pageType,
              s: n.f(i.listData, function (t, e, o) {
                return n.e(
                  {
                    a: n.f(i.columns, function (e, i, o) {
                      return {
                        a: n.t(s.getText(t, e) || "--"),
                        b: n.n(s.colorFilter(t[e.key], e.rate || e.color)),
                        c: e.key,
                      };
                    }),
                  },
                  ("bond" === i.fundType || i.pageType, {}),
                  {
                    b: t.key || e,
                    c: n.o(
                      function (e) {
                        return s.gotoDetail(t);
                      },
                      4440,
                      t.key || e
                    ),
                  }
                );
              }),
              t: "bond" === i.fundType || "hqetftab" === i.pageType,
              v: n.o(function () {
                return s.touchStart && s.touchStart.apply(s, arguments);
              }, 4441),
              w: n.o(function () {
                return s.touchEnd && s.touchEnd.apply(s, arguments);
              }, 4442),
              x: n.n(i.isPage ? "page-list" : ""),
              y: n.n("wzq" === s.hqBridge.ENV ? "page-list-wzq" : ""),
            }
          : {},
        { z: "black" === i.skin ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-dccf26fe"],
]);
wx.createComponent(o);
