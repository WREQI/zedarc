var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-base/visibilityObserver/index.js"),
  o = require("../../utils/util.js"),
  c = { sz: 0, sh: 1 },
  r = null,
  s = null,
  i = {
    props: {
      stock: { type: Object, default: function () {} },
      scode: { type: String, default: "" },
      type: { type: String, default: "" },
      name: { type: String, default: "" },
      chooseSymbol: { type: String, default: "" },
      redpockets: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    components: {
      redbag: function () {
        return "./redbag.js";
      },
    },
    data: function () {
      return { show: !1, curStock: {} };
    },
    computed: {
      stockNameClass: function () {
        return "yy-redpocket-choose yy-redpocket-choose-"
          .concat(this.curStock.scode || this.curStock.code)
          .concat(this.curStock.type || this.curStock.market);
      },
    },
    methods: {
      initStock: function () {
        this.scode && this.type && this.name && this.chooseSymbol
          ? (this.curStock = {
              scode: this.scode,
              type: this.type,
              name: this.name,
              chooseSymbol: this.chooseSymbol,
            })
          : (this.curStock = this.stock);
      },
      isAwardStock: function () {
        if (this.checkedTodayRedpacketClosed()) return !1;
        var e = this.curStock,
          t = this.formatRedpacketData();
        return o.isIndex(e.scode || e.c || e.code, e.type || e.m || e.market) &&
          t &&
          t.index
          ? !this.getRedbagClickedStatus("hq") && o.sameStock(t.index, e)
          : !(!t || !t.stock) &&
              !this.getRedbagClickedStatus("choose-stock") &&
              o.sameStock(t.stock, e);
      },
      formatRedpacketData: function () {
        var t = this,
          r = {};
        if (this.redpockets && this.redpockets.length) {
          var s = [];
          this.redpockets.forEach(function (e) {
            var i = e.stock_code.substring(0, 2),
              n = e.stock_code.substring(2),
              a = c[i];
            0 == +e.has_awarded &&
              Number.isInteger(a) &&
              (o.isIndex(n, a)
                ? ((t.stockType = "hq"),
                  t.getRedbagClickedStatus("hq") ||
                    (r = t.setAwardData(r, "index", n, a, e.timepoint)))
                : ((t.stockType = "choose-stock"),
                  t.getRedbagClickedStatus("choose-stock") ||
                    (r = t.setAwardData(r, "stock", n, a, e.timepoint))),
              s.push({
                market: a,
                code: n,
                timepoint: e.timepoint,
                notice_type: e.notice_type,
              }));
          }),
            s && s.length && e.StockBridge.setSession("bodong/awardStock", s);
        }
        return r;
      },
      checkedTodayRedpacketClosed: function () {
        if (void 0 !== e.StockBridge.store.yyRedpacketCloseToday)
          return e.StockBridge.store.yyRedpacketCloseToday;
        var t = e.dayjs(new Date()).format("YYYYMMDD"),
          o = e.StockBridge.getStorage("yy.redpacket.close_today"),
          c = o && o[t];
        return (e.StockBridge.store.yyRedpacketCloseToday = c), c;
      },
      getRedbagClickedStatus: function (t) {
        var o = e.dayjs().format("YYYYMMDD"),
          c = "";
        return (
          void 0 !== e.StockBridge.store.yyRedpacketClicked
            ? (c = e.StockBridge.store.yyRedpacketClicked)
            : ((c = e.StockBridge.getStorage("bodong_redbag_clicked")),
              (e.StockBridge.store.yyRedpacketClicked = c)),
          c && c[o] ? c[o][t] : null
        );
      },
      setAwardData: function (e, t, o, c, r) {
        return e || (e = {}), (e[t] = { code: o, market: c, timepoint: r }), e;
      },
      reportStockClickEvent: function (t) {
        var o = "yy.bodong2.selected_".concat(
          this.otherScreenBrow ? "other" : "first",
          "screenredpacket_click"
        );
        e.StockBridge.report(o, { yy_public_str1: t.name });
      },
      waveActivityEventON: function () {
        var c = this;
        e.StockBridge.busOn("market-choose.stock.clicked", function (e) {
          c.curStock.chooseSymbol === e.chooseSymbol &&
            (c.reportStockClickEvent(e),
            o.setClickedStatus(c.stockType),
            setTimeout(function () {
              c.show = !1;
            }, 300));
        }),
          this.$nextTick(function () {
            (r = new t.VisibilityObserver(
              ".yy-redpocket-choose",
              {
                once: !0,
                callback: function (t, o) {
                  t &&
                    !c.browReport &&
                    (!c.otherScreenBrow && s && clearTimeout(s),
                    e.StockBridge.report(
                      "yy.bodong2.selected_".concat(
                        c.otherScreenBrow ? "other" : "first",
                        "screenredpacket_brow"
                      ),
                      { yy_public_str1: c.curStock.name }
                    ),
                    (c.browReport = !0));
                },
                intersection: { threshold: 0 },
              },
              c
            )),
              (s = setTimeout(function () {
                c.otherScreenBrow = !0;
              }, 1e3));
          });
      },
    },
    created: function () {
      this.initStock(),
        (this.show = this.isAwardStock()),
        this.show && this.waveActivityEventON();
    },
    beforeDestroy: function () {
      var t, o;
      e.StockBridge.busOff("market-choose.stock.clicked"),
        null ==
          (o =
            null == (t = null == r ? void 0 : r.observer)
              ? void 0
              : t.disconnect) || o.call(t),
        (r = null),
        s && clearTimeout(s);
    },
  };
Array || e.resolveComponent("redbag")();
var n = e._export_sfc(i, [
  [
    "render",
    function (t, o, c, r, s, i) {
      return e.e(
        { a: s.show },
        s.show
          ? {
              b: e.sr("redbagBox", "95586d36-0"),
              c: e.n(i.stockNameClass),
              d: e.p({ animation: !0 }),
            }
          : {}
      );
    },
  ],
]);
wx.createComponent(n);
