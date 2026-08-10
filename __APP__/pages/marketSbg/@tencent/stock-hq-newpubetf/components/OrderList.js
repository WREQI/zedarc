var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  c = function (e, r, o) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[r] = o);
  },
  i = function (t, i) {
    for (var l in i || (i = {})) o.call(i, l) && c(t, l, i[l]);
    if (r) {
      var a,
        u = e(r(i));
      try {
        for (u.s(); !(a = u.n()).done; ) {
          l = a.value;
          n.call(i, l) && c(t, l, i[l]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return t;
  },
  l = require("../../../../../common/vendor.js"),
  a = require("../../stock-hq-data/index.js"),
  u = {},
  f = {
    slidingContainerSelector: ".right-container",
    scrollWrapperSelector: ".right-inner-wrapper",
    damping: 0.6,
    enableScrollX: !0,
    enableScrollY: !1,
  },
  s = {
    components: {},
    inject: {
      hqBridge: {
        default: function () {
          return {};
        },
      },
    },
    props: ["orderData", "order", "zdf", "from", "type"],
    data: function () {
      return {
        scrollY: 0,
        beforeScrollX: 0,
        beforeScrollY: 0,
        scrollOptions: f,
      };
    },
    computed: {
      env: function () {
        return l.StockBridge.ENV;
      },
      isWzq: function () {
        return !1;
      },
    },
    watch: {
      orderData: {
        handler: function () {
          var e = this;
          this.$nextTick(function () {
            e.scrollOptions && (e.scrollOptions = i({}, e.scrollOptions));
          });
        },
        deep: !0,
      },
    },
    created: function () {},
    mounted: function () {
      var e = this;
      this.isWzq && window.addEventListener("scroll", this.onScrollY, !0),
        this.$nextTick(function () {
          e.scrollOptions &&
            e.$refs.rightContainer &&
            (e.scrollOptions = i({}, e.scrollOptions));
        });
    },
    onPageScroll: function (e) {
      this.scrollY = e.scrollTop;
    },
    methods: {
      numberDeal: function (e) {
        return e ? (e > 0 ? "+".concat(e, "%") : "".concat(e, "%")) : "--";
      },
      dateDeal: function (e) {
        return new l.dayjs(e).format("YYYY-MM-DD");
      },
      goDetail: function (e) {
        l.StockBridge.report("hq.etfpage.newpubetf.listed.godetail_click");
        var t = a.utils.splitSymbol(e.market + e.stock_code),
          r = t.market,
          o = t.scode;
        this.isWzq
          ? this.hqBridge.routeTo({
              name: "HqStock",
              params: { market: r, code: o },
            })
          : l.StockRouter.routeTo({
              name: "stockdetail",
              query: { market: r, scode: o },
            });
      },
      clickTitle: function (e, t) {
        l.StockBridge.report("hq.etfpage.newpubetf_listed_sort_click"),
          this.$emit("changeStatus", e, t);
      },
      getColor: function (e) {
        return 0 !== e && e ? (e > 0 ? "#e63535" : "#1caa3c") : "#7a8499";
      },
      onTouchStart: function (e) {
        var t = this;
        this.$emit("changeSwiperAble", !1),
          (this.beforeScrollX = this.$refs.rightContainer.scrollLeft),
          setTimeout(function () {
            t.$refs.rightContainer.scrollLeft !== t.beforeScrollX &&
              (l.StockBridge.report("hq.etfpage.newpubetf_listed_x_scroll"),
              (t.beforeScrollX = t.$refs.rightContainer.scrollLeft));
          }, 100);
      },
      onTouchMove: function (e) {
        this.$emit("changeSwiperAble", !1);
      },
      onTouchEnd: function (e) {
        this.$emit("changeSwiperAble", !0);
      },
      onTouchStartY: function () {
        var e = this;
        (this.beforeScrollY = this.scrollY),
          setTimeout(function () {
            e.scrollY !== e.beforeScrollY &&
              (l.StockBridge.report("hq.etfpage.newpubetf_listed_y_scroll"),
              (e.beforeScrollY = e.scrollY));
          }, 100);
      },
      onScrollY: function (e) {
        this.scrollY = e.target.scrollTop;
      },
    },
  };
"function" == typeof u && u(s);
var d = l._export_sfc(s, [
  [
    "render",
    function (e, t, r, o, n, c) {
      return {
        a: l.f(r.orderData, function (e, t, r) {
          return {
            a: l.t(e.stock_name),
            b: l.t(e.stock_code),
            c: l.f(e.tags, function (e, t, r) {
              return { a: l.t(e.name), b: e.name };
            }),
            d: e.stock_code + t,
            e: l.o(
              function (t) {
                return c.goDetail(e);
              },
              2779,
              e.stock_code + t
            ),
          };
        }),
        b: l.n("current_zdf" === r.order && 0 === r.zdf ? "active" : ""),
        c: l.o(function (e) {
          return c.clickTitle("current_zdf", 0);
        }, 2780),
        d: l.n("current_zdf" === r.order && 1 === r.zdf ? "active" : ""),
        e: l.o(function (e) {
          return c.clickTitle("current_zdf", 1);
        }, 2781),
        f: l.n("current_zdf" === r.order ? "active" : ""),
        g: l.o(function (e) {
          return c.clickTitle("current_zdf", "main");
        }, 2782),
        h: l.f(r.orderData, function (e, t, r) {
          return {
            a: l.t(c.numberDeal(e.current_zdf)),
            b: e.stock_code + t,
            c: c.getColor(+e.current_zdf),
          };
        }),
        i: l.n("ipo_zdf" === r.order && 0 === r.zdf ? "active" : ""),
        j: l.o(function (e) {
          return c.clickTitle("ipo_zdf", 0);
        }, 2783),
        k: l.n("ipo_zdf" === r.order && 1 === r.zdf ? "active" : ""),
        l: l.o(function (e) {
          return c.clickTitle("ipo_zdf", 1);
        }, 2784),
        m: l.n("ipo_zdf" === r.order ? "active" : ""),
        n: l.o(function (e) {
          return c.clickTitle("ipo_zdf", "main");
        }, 2785),
        o: l.f(r.orderData, function (e, t, r) {
          return {
            a: l.t(c.numberDeal(e.ipo_zdf)),
            b: e.stock_code + t,
            c: c.getColor(+e.ipo_zdf),
          };
        }),
        p: l.n("listed_date" === r.order && 0 === r.zdf ? "active" : ""),
        q: l.o(function (e) {
          return c.clickTitle("listed_date", 0);
        }, 2786),
        r: l.n("listed_date" === r.order && 1 === r.zdf ? "active" : ""),
        s: l.o(function (e) {
          return c.clickTitle("listed_date", 1);
        }, 2787),
        t: l.n("listed_date" === r.order ? "active" : ""),
        v: l.o(function (e) {
          return c.clickTitle("listed_date", "main");
        }, 2788),
        w: l.f(r.orderData, function (e, t, r) {
          return { a: l.t(c.dateDeal(e.listed_date)), b: e.stock_code + t };
        }),
        x: n.scrollOptions,
        y: l.o(function () {
          return c.onTouchStartY && c.onTouchStartY.apply(c, arguments);
        }, 2789),
      };
    },
  ],
  ["__scopeId", "data-v-34c49e86"],
]);
wx.createComponent(d);
