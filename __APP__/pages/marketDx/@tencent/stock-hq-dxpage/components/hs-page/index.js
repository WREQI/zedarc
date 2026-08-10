require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  a = function (t, e, a) {
    return new Promise(function (o, i) {
      var n = function (t) {
          try {
            c(a.next(t));
          } catch (t) {
            i(t);
          }
        },
        r = function (t) {
          try {
            c(a.throw(t));
          } catch (t) {
            i(t);
          }
        },
        c = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(n, r);
        };
      c((a = a.apply(t, e)).next());
    });
  },
  o = require("../../utils/HangqingDataFormat.js"),
  i = require("../../utils/common.js"),
  n = require("../../../../../../common/vendor.js");
function r(t, e) {
  var a,
    n = o.formatHSStockData(t),
    r = o.formatHSBondData(e),
    c = (function (t, e) {
      var a,
        o,
        n,
        r =
          null ==
          (o = null == (a = null == t ? void 0 : t.data) ? void 0 : a.summary)
            ? void 0
            : o.avgProfit,
        c = null == (n = null == e ? void 0 : e.data) ? void 0 : n.pjmqhlje,
        s = "--",
        u = "--";
      return (
        i.isNumber(parseFloat(r))
          ? ((s = r), (r = i.addSign(parseInt(r, 10))))
          : (r = "--"),
        i.isNumber(parseFloat(c))
          ? ((u = c), (c = i.addSign(parseInt(c, 10))))
          : (c = "--"),
        {
          profit: { stock: "".concat(r, "元"), bond: "".concat(c, "元") },
          shareData: {
            stockDxProfit: "".concat(s, "元"),
            bondDxProfit: "".concat(u, "元"),
          },
        }
      );
    })(t, e);
  return {
    profit: c.profit,
    shareData: c.shareData,
    pendingSubscription: { stock: n.jjfx, bond: r.jjfx },
    availableSubscription: { stock: n.sgrq, bond: r.sgrq },
    pendingGoPublic: {
      todayAnnouncement: { stock: n.zqh, bond: r.zqh },
      notGoPublic: { stock: n.sgok, bond: r.sgok },
    },
    date: null == (a = null == t ? void 0 : t.data) ? void 0 : a.date,
  };
}
var c = {
  inject: {
    hqBridge: {},
    statusBarHeight: { default: 0 },
    isAccountOpen: { default: !1 },
    isSupportBooking: { default: function () {} },
  },
  components: {
    CategoryTabbar: function () {
      return "../common/CategoryTabbar.js";
    },
    PendingSubscription: function () {
      return "./pending-subscription/index.js";
    },
    AvailableSubscription: function () {
      return "./AvailableSubscription.js";
    },
    PendingGoPublic: function () {
      return "./PendingGoPublic.js";
    },
    AlreadyGoPublic: function () {
      return "./already-go-public/index.js";
    },
    DaxinButton: function () {
      return "./DaxinButton.js";
    },
    NoDataCard: function () {
      return "../common/NoDataCard.js";
    },
  },
  props: {
    marketTab: { type: Number, default: 0 },
    pageScrollTop: { type: Number, default: 0 },
    isMarketTabbarCeiling: { type: Boolean, default: !1 },
    accoutOpened: { type: Boolean, default: !1 },
    mpScrollTop: { type: Number, default: 0 },
  },
  data: function () {
    return {
      categoryTab: 1,
      formattedData: null,
      buttonType: "",
      isActivated: !1,
      categorySwitchState: [!1, !1, !1, !1],
      tabScrollReported: [!1, !1],
      tabList: [
        "pending_subscription",
        "available_subscription",
        "pending_go_public",
        "already_go_public",
      ],
      isCheckedBubble: !1,
      errMsg: "",
      showBodongType: "",
      env: this.hqBridge.ENV,
      bubbleContent: "支持一键打新股和新债",
      isAppBubbleShow: !1,
      isShowNavbar: !1,
      buttonText: "",
      isOpen: !1,
      tabCeiling: !1,
      isTabShow: !1,
    };
  },
  computed: {
    currData: function () {
      var t;
      return 3 === this.categoryTab
        ? {}
        : null == (t = this.formattedData)
        ? void 0
        : t[
            ["pendingSubscription", "availableSubscription", "pendingGoPublic"][
              this.categoryTab
            ]
          ];
    },
    isMp: function () {
      return "mp" === this.hqBridge.ENV;
    },
  },
  watch: {
    categoryTab: {
      handler: function (t) {
        this.categorySwitchState = this.categorySwitchState.map(function (
          e,
          a
        ) {
          return a === t;
        });
      },
      deep: !0,
    },
    currData: function () {
      this.getButtonText();
    },
    pageScrollTop: function (t) {
      [0, 1].includes(this.categoryTab) &&
        this.isActivated &&
        !this.tabScrollReported[this.categoryTab] &&
        0 !== t &&
        ((this.tabScrollReported[this.categoryTab] = !0),
        this.hqBridge.report(
          "hq.daxin_calendar_hstab.".concat(
            this.tabList[this.categoryTab],
            "_tab_scroll"
          )
        ));
    },
    mpScrollTop: function (t) {
      t > 104 ? (this.tabCeiling = !0) : t < 92 && (this.tabCeiling = !1);
    },
  },
  created: function () {
    o.setEnv("wzq"), this.getData(), (this.isActivated = !0);
  },
  activated: function () {
    this.isActivated = !0;
  },
  deactivated: function () {
    (this.isActivated = !1), (this.categorySwitchState = [!1, !1, !1, !1]);
  },
  methods: {
    showTeachPop: function (t, e, a) {
      this.$emit("showTeachPop", t, e, a);
    },
    handleReachBottom: function () {
      this.$refs.alreadyGoPublic &&
        this.$refs.alreadyGoPublic.handleReachBottom();
    },
    loadFinished: function (t) {
      this.$emit("loadFinished", t);
    },
    updateCategoryTab: function (t) {
      (this.categoryTab = t), this.$emit("updateCategoryTab", t);
    },
    getData: function () {
      return a(
        this,
        null,
        t().mark(function a() {
          var o,
            i = this;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (t.next = 3),
                      Promise.all([this.getHSNewStock(), this.getHSNewBond()])
                    );
                  case 3:
                    (o = t.sent),
                      (this.formattedData = r.apply(void 0, e(o))),
                      this.$emit(
                        "getPerformData",
                        this.formattedData && this.formattedData.profit
                      ),
                      this.checkShowBodongType(),
                      this.handleShare(),
                      this.$nextTick(function () {
                        i.getPosition(),
                          i.modifyCategoryTab(),
                          i.updateShareData();
                      }),
                      (this.errMsg = ""),
                      (t.next = 10);
                    break;
                  case 7:
                    (t.prev = 7),
                      (t.t0 = t.catch(0)),
                      (this.errMsg = "系统繁忙，请稍后重试");
                  case 10:
                  case "end":
                    return t.stop();
                }
            },
            a,
            this,
            [[0, 7]]
          );
        })
      );
    },
    getHSNewStock: function () {
      return a(
        this,
        null,
        t().mark(function e() {
          var a;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (a = { market: "hs", detail: 1, sgrq: 1, period: 90 }),
                      (t.next = 4),
                      o.getHSNewStock(this.hqBridge, a)
                    );
                  case 4:
                    return t.abrupt("return", t.sent);
                  case 7:
                    throw (
                      ((t.prev = 7),
                      (t.t0 = t.catch(0)),
                      { retcode: "request-fail", retmsg: "沪深新股请求失败" })
                    );
                  case 10:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this,
            [[0, 7]]
          );
        })
      );
    },
    getHSNewBond: function () {
      return a(
        this,
        null,
        t().mark(function e() {
          var a;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.prev = 0),
                      (a = { market: "hs", period: 90 }),
                      (t.next = 4),
                      o.getHSNewBond(this.hqBridge, a)
                    );
                  case 4:
                    return t.abrupt("return", t.sent);
                  case 7:
                    throw (
                      ((t.prev = 7),
                      (t.t0 = t.catch(0)),
                      { retcode: "request-fail", retmsg: "沪深新债请求失败" })
                    );
                  case 10:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this,
            [[0, 7]]
          );
        })
      );
    },
    handleShare: function () {
      var t = this.formattedData.shareData,
        e = t.stockDxProfit,
        a = t.bondDxProfit;
      if ("wzq" === this.env)
        this.$emit("handleShare", { stockDxProfit: e, bondDxProfit: a });
      else {
        var o = this.handleProfit({ stockDxProfit: e, bondDxProfit: a });
        this.hqBridge.busEmit("init-share", o);
      }
    },
    handleProfit: function (t) {
      var e = t.stockDxProfit,
        a = t.bondDxProfit,
        o = parseFloat(e),
        n = parseFloat(a);
      return i.isNumber(o) && o > 0 ? e : i.isNumber(n) && n > 0 ? a : "--";
    },
    buttonClick: function () {
      var t =
          "apply" === this.buttonType
            ? this.buttonType
            : "".concat(this.buttonType, "daxin"),
        e = "IXr00p000a020";
      this.isMp &&
        (("bookingdaxin" !== t && "yijiandaxin_click" !== t) ||
          (e = "IyM00p000t018"),
        "apply" === t && (e = "IyM00p000b122")),
        this.hqBridge.report(
          "hq.daxin_calendar_hstab."
            .concat(this.tabList[this.categoryTab], "_tab_")
            .concat(t, "_click"),
          { fchannel_id_fm_i: e }
        ),
        this.hqBridge.busEmit("daxinCalendarYijiandaxin", this.buttonType);
    },
    getPosition: function () {
      var t,
        e,
        a = null == (t = this.$refs.categoryTabbar) ? void 0 : t.$el;
      if (a) {
        var o = (
          (null == (e = a.getBoundingClientRect) ? void 0 : e.call(a)) || {}
        ).top;
        o && this.$emit("getPosition", o);
      }
    },
    modifyCategoryTab: function () {
      this.isTabShow = !0;
      var t = this.formattedData || {},
        e = t.pendingSubscription,
        a = void 0 === e ? {} : e,
        o = t.availableSubscription,
        i = void 0 === o ? {} : o,
        n = a.stock || a.bond,
        r = i.stock || i.bond;
      (n || r) && (r || (this.categoryTab = 0));
    },
    checkShowBodongType: function () {
      if ("app" !== this.env) {
        var t = this.formattedData.availableSubscription || {},
          e = t.stock,
          a = t.bond;
        (this.showBodongType = e || a ? "has_sgrq" : "none_sgrq"),
          this.$emit("checkShowPopup", this.showBodongType);
      }
    },
    handleAppBubble: function () {
      var t = this;
      this.isCheckedBubble = !0;
      var e = "quote.market.hs.1key_buy_new_bubble_loadmore_key",
        a = !1;
      shy.getGlobalStorageAsync(e, function (o) {
        a = o.data;
        var i = n.dayjs("2023-07-11"),
          r = n.dayjs();
        i.diff(r, "day") > 0 &&
          !a &&
          ((t.isAppBubbleShow = !0), shy.setGlobalStorageAsync(e, "true"));
      });
    },
    getButtonText: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return a(
        this,
        null,
        t().mark(function a() {
          var o, i, n, r, c, s, u, d, h, l, b, p;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((o = !1),
                      (i = !0),
                      [0, 1].includes(this.categoryTab) &&
                        ((n = this.currData || {}),
                        (r = n.stock),
                        (c = n.bond),
                        (o = !r && !c)),
                      2 === this.categoryTab &&
                        ((s = this.currData),
                        (u = s.todayAnnouncement),
                        (d = void 0 === u ? {} : u),
                        (h = s.notGoPublic),
                        (l = void 0 === h ? {} : h),
                        (o = !(d.stock || d.bond || l.stock || l.bond))),
                      !o)
                    ) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      ((this.buttonText = ""),
                      void this.$emit("checkBtnShow", this.buttonText))
                    );
                  case 5:
                    if (
                      (("wzq" !== this.env && "mp" !== this.env) ||
                        (this.isOpen = this.isAccountOpen),
                      (t.t0 = "app" === this.env),
                      !t.t0)
                    ) {
                      t.next = 14;
                      break;
                    }
                    return (t.next = 10), this.isAccountOpen(e);
                  case 10:
                    return (
                      (this.isOpen = t.sent),
                      (t.next = 13),
                      this.isSupportBooking()
                    );
                  case 13:
                    i = t.sent;
                  case 14:
                    if (
                      ("mp" === this.env && (this.isOpen = this.accoutOpened),
                      !this.isOpen)
                    ) {
                      t.next = 18;
                      break;
                    }
                    return (
                      (b = ["预约打新", "一键打新", "", ""]),
                      (p = ["booking", "yijian", "", ""]),
                      t.abrupt(
                        "return",
                        ((this.buttonType = p[this.categoryTab]),
                        (this.buttonText = b[this.categoryTab]),
                        0 !== this.categoryTab || i || (this.buttonText = ""),
                        void this.$emit("checkBtnShow", this.buttonText))
                      )
                    );
                  case 18:
                    (this.buttonType = "apply"),
                      (this.buttonText = "极速开户，享打新收益"),
                      this.$emit("checkBtnShow", this.buttonText);
                  case 19:
                  case "end":
                    return t.stop();
                }
            },
            a,
            this
          );
        })
      );
    },
    updateShareData: function () {
      var t,
        e,
        a,
        o,
        i = this.formattedData || {},
        n = i.pendingSubscription,
        r = void 0 === n ? {} : n,
        c = i.availableSubscription,
        s = void 0 === c ? {} : c,
        u = i.profit,
        d = void 0 === u ? {} : u,
        h = i.date,
        l = r.stock,
        b = void 0 === l ? {} : l,
        p = r.bond,
        g = void 0 === p ? {} : p,
        f = s.stock,
        v = void 0 === f ? {} : f,
        y = s.bond,
        T = void 0 === y ? {} : y,
        m = d.stock,
        S = d.bond;
      this.$emit("updateShareData", {
        date: h,
        availableStock:
          (null == (t = null == v ? void 0 : v.data) ? void 0 : t.length) || 0,
        availableBond:
          (null == (e = null == T ? void 0 : T.data) ? void 0 : e.length) || 0,
        pendingStock:
          (null == (a = null == b ? void 0 : b.data) ? void 0 : a.length) || 0,
        pendingBond:
          (null == (o = null == g ? void 0 : g.data) ? void 0 : o.length) || 0,
        stockDxProfit: m,
        bondDxProfit: S,
      });
    },
  },
};
Array ||
  (
    n.resolveComponent("category-tabbar") +
    n.resolveComponent("PendingSubscription") +
    n.resolveComponent("AvailableSubscription") +
    n.resolveComponent("PendingGoPublic") +
    n.resolveComponent("AlreadyGoPublic") +
    n.resolveComponent("daxin-button") +
    n.resolveComponent("no-data-card")
  )();
var s = n._export_sfc(c, [
  [
    "render",
    function (t, e, a, o, i, r) {
      return n.e(
        { a: i.formattedData },
        i.formattedData
          ? n.e(
              { b: i.tabCeiling },
              (i.tabCeiling, {}),
              { c: i.isTabShow },
              i.isTabShow
                ? {
                    d: n.sr("categoryTabbar", "d6dd6af5-0"),
                    e: n.n(r.isMp ? "cate-tab-mp" : ""),
                    f: n.n(i.tabCeiling ? "cate-tab-mp-fix" : ""),
                    g: n.o(r.updateCategoryTab, 2153),
                    h: n.p({ categoryTab: i.categoryTab }),
                  }
                : {},
              {
                i: n.n(
                  2 === i.categoryTab || 3 === i.categoryTab
                    ? "fake-line-top"
                    : ""
                ),
                j: 0 === i.categoryTab,
              },
              0 === i.categoryTab
                ? {
                    k: n.o(r.showTeachPop, 2154),
                    l: n.p({
                      data: r.currData,
                      accoutOpened: a.accoutOpened,
                      pageScrollTop: a.pageScrollTop,
                      categorySwitchState: i.categorySwitchState,
                      isMarketTabbarCeiling: a.isMarketTabbarCeiling,
                      hasButton: i.buttonText,
                    }),
                  }
                : {},
              { m: 1 === i.categoryTab },
              1 === i.categoryTab
                ? {
                    n: n.o(r.showTeachPop, 2155),
                    o: n.p({
                      data: r.currData,
                      accoutOpened: a.accoutOpened,
                      pageScrollTop: a.pageScrollTop,
                      categorySwitchState: i.categorySwitchState,
                      isMarketTabbarCeiling: a.isMarketTabbarCeiling,
                      hasButton: i.buttonText,
                    }),
                  }
                : {},
              { p: 2 === i.categoryTab },
              2 === i.categoryTab
                ? {
                    q: n.o(r.showTeachPop, 2156),
                    r: n.p({
                      data: r.currData,
                      accoutOpened: a.accoutOpened,
                      pageScrollTop: a.pageScrollTop,
                      categorySwitchState: i.categorySwitchState,
                      isMarketTabbarCeiling: a.isMarketTabbarCeiling,
                      hasButton: i.buttonText,
                    }),
                  }
                : {},
              { s: 3 === i.categoryTab },
              3 === i.categoryTab
                ? {
                    t: n.sr("alreadyGoPublic", "d6dd6af5-4"),
                    v: n.o(r.loadFinished, 2157),
                    w: n.p({
                      data: r.currData,
                      accoutOpened: a.accoutOpened,
                      pageScrollTop: a.pageScrollTop,
                      categorySwitchState: i.categorySwitchState,
                      isMarketTabbarCeiling: a.isMarketTabbarCeiling,
                      hasButton: i.buttonText,
                    }),
                  }
                : {},
              {
                x: n.n(
                  i.buttonText ? "category-content-with-placeholder-space" : ""
                ),
                y: i.buttonText,
              },
              i.buttonText
                ? {
                    z: n.o(r.buttonClick, 2158),
                    A: n.p({
                      categoryTab: i.categoryTab,
                      buttonText: i.buttonText,
                    }),
                  }
                : {},
              {
                B: n.n(
                  i.isShowNavbar ? "daxin-button-wrapper-with-navbar" : ""
                ),
              }
            )
          : {},
        { C: i.errMsg },
        i.errMsg ? { D: n.o(r.getData, 2159), E: n.p({ text: i.errMsg }) } : {},
        { F: n.n(r.isMp ? "content-container-mp" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-d6dd6af5"],
]);
wx.createComponent(s);
