var t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  l = function (t, o, i) {
    return o in t
      ? e(t, o, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[o] = i);
  },
  a = function (e, o) {
    for (var i in o || (o = {})) n.call(o, i) && l(e, i, o[i]);
    if (r) {
      var a,
        c = t(r(o));
      try {
        for (c.s(); !(a = c.n()).done; ) {
          i = a.value;
          s.call(o, i) && l(e, i, o[i]);
        }
      } catch (t) {
        c.e(t);
      } finally {
        c.f();
      }
    }
    return e;
  },
  c = function (t, e) {
    return o(t, i(e));
  },
  d = require("./YaoWenList.js"),
  u = require("../../../../../../common/vendor.js"),
  h = {
    props: {
      lhlkData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      index: { type: Number },
    },
    computed: {
      lhlk: function () {
        var t = [],
          e = this.lhlkData,
          o = e.lh,
          i = void 0 === o ? {} : o,
          r = e.lk,
          n = void 0 === r ? {} : r,
          s = {},
          l = {};
        try {
          (s = i.idlist[0].newslist[0].relate[0] || {}),
            (l = n.idlist[0].newslist[0].relate[0] || {});
        } catch (t) {
          (s = {}), (l = {});
        }
        return (
          t.push(
            c(a({ id: i.id, intro: i.intro }, s), {
              flow_id: i.flow_id,
              recall_type: i.recall_type,
            })
          ),
          t.push(
            c(a({ id: n.id, intro: n.intro }, l), {
              flow_id: n.flow_id,
              recall_type: n.recall_type,
            })
          ),
          t
        );
      },
    },
    data: function () {
      return {
        GOOD_BG: "https://st.gtimg.com/image/news/today_opportunity.png",
        BAD_BG: "https://st.gtimg.com/image/news/today_risk.png",
      };
    },
    created: function () {
      this.handleTouchmoveThrottleFunc = d.throttle(300, this.handleTouchmove);
    },
    activated: function () {
      window.addEventListener("scroll", this.handleTouchmoveThrottleFunc);
    },
    deactivated: function () {
      window.removeEventListener("scroll", this.handleTouchmoveThrottleFunc);
    },
    beforeDestroy: function () {},
    methods: {
      handleTouchmove: function () {
        this.sendExposure();
      },
      sendExposure: function () {
        var t = this.$refs.GoodAndBadNews,
          e = t && t[0];
        this.goodBadExposured ||
          (d.checkHeightInWindow(e, 0, 0.5) &&
            (this.stockBridge.report("news.index.risk_exposure", {
              newsid: this.lhlk[0] && this.lhlk[0].id,
            }),
            this.stockBridge.report("news.index.opportunity_exposure", {
              newsid: this.lhlk[1] && this.lhlk[1].id,
            }),
            (this.goodBadExposured = !0),
            this.$emit(
              "onExposure",
              this.lhlk,
              this.index,
              this.lhlkData.type
            )));
      },
      getStockPriceClassName: function (t) {
        var e = +t.substring(0, t.length - 1);
        return e > 0 ? "up" : 0 === e ? "" : e < 0 ? "down" : void 0;
      },
      goToDetail: function (t, e) {
        0 === e
          ? (this.stockBridge.report("news.index.today_opportunity_click", {
              newsid: t.id,
            }),
            this.$router.push("/information/good?id=".concat(t.id, "&type=lh")))
          : 1 === e &&
            (this.stockBridge.report("news.index.today_risk_click", {
              newsid: t.id,
            }),
            this.$router.push("/information/bad?id=".concat(t.id, "&type=lk"))),
          this.$emit("onItemClick", t, this.index, this.lhlkData.type);
      },
    },
  },
  p = u._export_sfc(h, [
    [
      "render",
      function (t, e, o, i, r, n) {
        return {
          a: u.f(n.lhlk, function (t, e, o) {
            return u.e(
              { a: 0 === e },
              0 === e ? { b: r.GOOD_BG } : {},
              { c: 1 === e },
              1 === e ? { d: r.BAD_BG } : {},
              { e: u.t(t.intro), f: t.relatePlate },
              t.relatePlate
                ? {
                    g: u.t(t.relatePlate),
                    h: u.t(t.platePCR),
                    i: u.n(n.getStockPriceClassName(t.platePCR)),
                  }
                : {},
              { j: t.relateStock },
              t.relateStock
                ? {
                    k: u.t(t.relateStock),
                    l: u.t(t.stockPCR),
                    m: u.n(n.getStockPriceClassName(t.stockPCR)),
                  }
                : {},
              { n: void 0 !== t.plateStocksNum },
              void 0 !== t.plateStocksNum ? { o: u.t(t.plateStocksNum) } : {},
              {
                p: u.n(1 === e ? "bad-item" : ""),
                q: e,
                r: u.o(
                  function (o) {
                    return n.goToDetail(t, e);
                  },
                  5342,
                  e
                ),
              }
            );
          }),
        };
      },
    ],
    ["__scopeId", "data-v-b094ecf4"],
  ]);
wx.createComponent(p);
