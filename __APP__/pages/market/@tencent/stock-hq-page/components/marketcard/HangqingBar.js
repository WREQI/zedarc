var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (i, a) {
      var o = function (t) {
          try {
            r(n.next(t));
          } catch (t) {
            a(t);
          }
        },
        s = function (t) {
          try {
            r(n.throw(t));
          } catch (t) {
            a(t);
          }
        },
        r = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(o, s);
        };
      r((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../stock-hq-core/utils/storage/local.js");
require("../../../../js-cookie/src/js.cookie.js");
var i = require("./index.js"),
  a = require("../../Index.js"),
  o = require("../../../../../../common/vendor.js"),
  s = {
    components: {},
    inject: ["hqBridge", "isAccountOpen"],
    props: {
      market: { type: String, default: "" },
      isShowBottomSpliter: { type: Boolean, default: !1 },
      userInfo: { type: Object, default: function () {} },
      isShowDaxinCalendarBubble: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        dataReady: !1,
        hkShengouData: null,
        hkShangshiData: null,
        usSubTitle: null,
        newHsStockNum: 0,
        newHsBondNum: 0,
        hsZqNum: 0,
        hsStockZqData: null,
        hsBondZqData: null,
        isBubbleValid: !1,
        pop: null,
        timer: null,
      };
    },
    computed: {
      isShowNewEntry: function () {
        return this.newHsStockNum || this.newHsBondNum || this.hsZqNum;
      },
      daxinmiaoshu: function () {
        if ("HS" === this.market)
          return this.isShowNewEntry ? "" : "今日无新股新债可申购";
        if ("HK" === this.market) {
          if (this.hkShengouData && this.hkShangshiData) {
            var t = this.hkShengouData.length,
              e = this.hkShangshiData.length;
            if (t > 0 && e > 0)
              return "今日".concat(t, "只申购，").concat(e, "只上市");
            if (t > 0 && 0 === e) return "今日".concat(t, "只申购");
            if (0 === t && e > 0) return "今日".concat(e, "只上市");
          }
          return "无新股发行或上市";
        }
        return "US" === this.market
          ? this.usSubTitle
            ? this.usSubTitle
            : "一周内无股票上市"
          : "";
      },
      isH5OrWzq: function () {
        return "oem" !== this.hqBridge.ENV;
      },
      isShowBubble: function () {
        return this.isShowDaxinCalendarBubble && this.isBubbleValid;
      },
    },
    watch: {
      isShowDaxinCalendarBubble: function () {
        this.isBubbleValid && this.showYijiandaxinBubble();
      },
    },
    created: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          var i,
            a = this;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ("HS" !== this.market) {
                      t.next = 7;
                      break;
                    }
                    return (
                      (i = n.sls.getItem("hq-hs-new-cache")) &&
                        ((this.newHsStockNum = i.stock),
                        (this.newHsBondNum = i.bond),
                        (this.hsZqNum = i.zq),
                        (this.dataReady = !0)),
                      (t.next = 5),
                      Promise.all([
                        this.getHSNewStock(),
                        this.getHSNewBond(),
                      ]).then(function () {
                        var t =
                            a.hsStockZqData && a.hsStockZqData.length
                              ? a.hsStockZqData.length
                              : 0,
                          e =
                            a.hsBondZqData && a.hsBondZqData.length
                              ? a.hsBondZqData.length
                              : 0;
                        (a.hsZqNum = t + e),
                          n.sls.setItem("hq-hs-new-cache", {
                            stock: a.newHsStockNum,
                            bond: a.newHsBondNum,
                            zq: a.hsZqNum,
                          });
                      })
                    );
                  case 5:
                    t.next = 16;
                    break;
                  case 7:
                    if ("HK" !== this.market) {
                      t.next = 12;
                      break;
                    }
                    return (t.next = 10), this.getHKNewStock();
                  case 10:
                    t.next = 16;
                    break;
                  case 12:
                    if (((t.t0 = "US" === this.market), !t.t0)) {
                      t.next = 16;
                      break;
                    }
                    return (t.next = 16), this.getUSNewStock();
                  case 16:
                    (this.dataReady = !0),
                      this.$nextTick(function () {
                        a.$emit("daxinCalendarShow");
                      }),
                      this.checkBubble();
                  case 17:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    beforeDestroy: function () {
      clearTimeout(this.timer);
    },
    methods: {
      navigateTo: a.navigateTo,
      yijiandaxin: function () {
        this.hqBridge.report("hq.choose_hq.click_hs_yijiandaxin"),
          "wzq" !== this.hqBridge.ENV
            ? this.hqBridge.busEmit("navigateToTrade")
            : this.hqBridge.busEmit("wzq-yijiandaxin", { market: this.market });
      },
      gotoHangqingXinzhai: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "stock",
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("mini" !== this.hqBridge.ENV)
          return (
            this.hqBridge.report(
              "hq.choose_hq.click_xingurili_".concat(this.market.toLowerCase())
            ),
            void o.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/hangqingxinzhai?type="
                .concat(t, "&scroll_pos=")
                .concat(e, "&market=")
                .concat(
                  this.market &&
                    this.market.toLowerCase &&
                    this.market.toLowerCase(),
                  "&timestamp="
                )
                .concat(Date.now())
            )
          );
        this.navigateTo(this.hqBridge, "/hsIpoDetail", null, 10),
          this.hqBridge.report("hq.choose_hq.daxin_calendar_click");
      },
      getHSNewStock: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, a, o, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), i.queryHSNewStock(this.hqBridge);
                    case 2:
                      (o = t.sent),
                        (s = null == (n = o.data) ? void 0 : n.sgrq),
                        (this.newHsStockNum = s.length || 0),
                        (this.hsStockZqData =
                          null == (a = o.data) ? void 0 : a.zqh);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getHSNewBond: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, a, o, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), i.queryHSNewBond(this.hqBridge);
                    case 2:
                      (o = t.sent),
                        (s = null == (n = o.data) ? void 0 : n.jrsg),
                        (this.newHsBondNum = s.length || 0),
                        (this.hsBondZqData =
                          null == (a = o.data) ? void 0 : a.jrgbzq);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getHKNewStock: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, i, o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), a.HqAPI.getHKNewStock(this.hqBridge);
                    case 2:
                      (o = t.sent),
                        (this.hkShengouData =
                          null == (n = null == o ? void 0 : o.data)
                            ? void 0
                            : n.sgrq),
                        (this.hkShangshiData =
                          null == (i = null == o ? void 0 : o.data)
                            ? void 0
                            : i.ssrq);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getUSNewStock: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), a.HqAPI.getUSNewStock(this.hqBridge);
                    case 2:
                      (i = t.sent),
                        (this.usSubTitle =
                          null == (n = null == i ? void 0 : i.data)
                            ? void 0
                            : n.data);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      checkBubble: function () {
        var t = n.sls.getItem("hq.yijiandaxin-bubble-show"),
          e = o.dayjs("2023-05-02"),
          i = o.dayjs();
        e.diff(i, "day") > 0 && !t && (this.isBubbleValid = !0);
      },
      showYijiandaxinBubble: function () {
        var t = this;
        (this.pop = this.$YYpop({
          attach: ".bubble-guide",
          placement: "top",
          icon: function () {
            return "";
          },
          content: "支持一键打新股和新债",
          close_pic: 1,
          onCloseBtnClick: function (t) {
            t.e.stopPropagation();
          },
          onVisibleChange: function (t) {
            t && n.sls.setItem("hq.yijiandaxin-bubble-show", !0);
          },
          modifiers: [{ name: "offset", options: { offset: [-73, 14] } }],
        })),
          (this.timer = setTimeout(function () {
            t.pop.emitPopVisible(!1);
          }, 6e3));
      },
    },
  },
  r = o._export_sfc(s, [
    [
      "render",
      function (t, e, n, i, a, s) {
        return o.e(
          { a: a.dataReady },
          a.dataReady
            ? o.e(
                { b: !s.isShowNewEntry },
                s.isShowNewEntry
                  ? {
                      e: o.t(a.newHsStockNum),
                      f: o.t(a.newHsBondNum),
                      g: o.o(function (t) {
                        return s.gotoHangqingXinzhai("bond", "jrsg");
                      }, 4952),
                      h: o.t(a.hsZqNum),
                      i: o.o(function (t) {
                        return s.gotoHangqingXinzhai("", "zqh");
                      }, 4953),
                      j: o.n(s.isH5OrWzq ? "h5-or-wzq-wrapper" : ""),
                      k: o.o(function (t) {
                        return s.gotoHangqingXinzhai("", "sgrq");
                      }, 4954),
                      l: o.o(function (t) {
                        return s.yijiandaxin();
                      }, 4955),
                      m: o.o(function (t) {
                        return s.gotoHangqingXinzhai();
                      }, 4956),
                    }
                  : {
                      c: o.t(s.daxinmiaoshu),
                      d: o.o(function (t) {
                        return s.gotoHangqingXinzhai();
                      }, 4951),
                    },
                { n: n.isShowBottomSpliter ? 1 : "" }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b6bb83bc"],
  ]);
wx.createComponent(r);
