var e = require("../pages/information/mp.js"),
  t = require("../../../../../common/vendor.js"),
  o = {
    name: "HKStocksList",
    components: {
      yaowenItem: function () {
        return "./yaoWen/yaowenItem.js";
      },
      Supporter: function () {
        return "./Supporter.js";
      },
    },
    inject: { stockBridge: { default: {} } },
    props: [
      "listId",
      "hkstockList",
      "dataReady",
      "isCurrSlide",
      "refreshHkstockList",
      "mpScrollHeight",
    ],
    data: function () {
      return {
        loadAll: !1,
        pullupText: "",
        enterTime: 0,
        mpRefreshTriggered: !1,
      };
    },
    computed: {
      disableReachBtm: function () {
        return !this.isCurrSlide || !this.dataReady;
      },
      isMP: function () {
        return "mp" === this.stockBridge.ENV;
      },
    },
    methods: {
      onMpScroll: function (e) {
        this.$emit("onMpScroll", e);
      },
      onShow: function () {
        (this.enterTime = Date.now()),
          this.stockBridge.report(e.INDEX_GANGGU_BROW);
      },
      onHide: function () {
        this.stockBridge.report(e.INDEX_GANGGU_STAY_TIME, {
          ftime: Date.now() - this.enterTime,
        });
      },
      onMpReachBottom: function () {
        this.onPullingUp();
      },
      onPullingDown: function () {
        var e = this;
        (this.mpRefreshTriggered = !0),
          this.refreshHkstockList &&
            this.refreshHkstockList()
              .then(function (t) {
                (e.loadAll = !t.hasNext), (e.mpRefreshTriggered = !1);
              })
              .catch(function () {
                e.mpRefreshTriggered = !1;
              });
      },
      onPullingUp: function () {
        var e = this;
        return this.loadAll
          ? Promise.resolve(!0)
          : this.refreshHkstockList &&
              this.refreshHkstockList(!1).then(function (t) {
                e.loadAll = !t.hasNext;
              });
      },
      open: function (e) {
        this.$emit("open", { columnId: "hkstock", item: e });
      },
    },
  };
Array ||
  (
    t.resolveComponent("yaowen-item") +
    t.resolveComponent("Supporter") +
    t.resolveComponent("st-reach-bottom") +
    t.resolveComponent("st-pull-refresh")
  )();
var n = t._export_sfc(o, [
  [
    "render",
    function (e, o, n, r, i, s) {
      return t.e(
        { a: !s.isMP },
        s.isMP
          ? t.e(
              { i: s.isMP },
              s.isMP
                ? t.e(
                    {
                      j: t.f(n.hkstockList, function (e, o, n) {
                        return {
                          a: o + "_" + e.id,
                          b: t.o(
                            function (t) {
                              return s.open(e, o + 1);
                            },
                            2625,
                            o + "_" + e.id
                          ),
                          c: "71e74819-4-" + n,
                          d: t.p({ news: e, "show-seperator": !0 }),
                        };
                      }),
                      k: n.hkstockList.length,
                    },
                    n.hkstockList.length
                      ? { l: t.p({ "load-all": i.loadAll }) }
                      : {},
                    {
                      m: "".concat(n.mpScrollHeight, "px"),
                      n: i.mpRefreshTriggered,
                      o: t.o(function (e) {
                        return s.onPullingDown();
                      }, 2626),
                      p: t.o(function () {
                        return s.onMpScroll && s.onMpScroll.apply(s, arguments);
                      }, 2627),
                      q: t.o(function () {
                        return (
                          s.onMpReachBottom &&
                          s.onMpReachBottom.apply(s, arguments)
                        );
                      }, 2628),
                    }
                  )
                : {}
            )
          : t.e(
              {
                b: t.f(n.hkstockList, function (e, o, n) {
                  return {
                    a: o + "_" + e.id,
                    b: t.o(
                      function (t) {
                        return s.open(e, o + 1);
                      },
                      2623,
                      o + "_" + e.id
                    ),
                    c: "71e74819-2-" + n + ",71e74819-1",
                    d: t.p({ news: e, "show-seperator": !0 }),
                  };
                }),
                c: n.hkstockList.length,
              },
              n.hkstockList.length ? { d: t.p({ "load-all": i.loadAll }) } : {},
              {
                e: t.sr("reachBottom", "71e74819-1,71e74819-0"),
                f: t.p({
                  "on-reach-bottom": s.onPullingUp,
                  "finished-text": i.pullupText,
                  disabled: s.disableReachBtm,
                }),
                g: t.sr("flashScroll", "71e74819-0"),
                h: t.o(s.onPullingDown, 2624),
              }
            )
      );
    },
  ],
]);
wx.createComponent(n);
