var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  o = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  c = function (e, t, o) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  u = require("../../common/vendor.js"),
  l = require("@tencent/wzq-lite-basket/api/StockBasketAPI.js"),
  h = new u.HQBridge(),
  d = new l.StockBasketAPI(h);
getApp().globalData;
var p = { user_doing: "Ocj00p000h094", strategy: "Ocj00p000h095" },
  g = {
    components: {
      basketOverview: function () {
        return "./@tencent/wzq-lite-basket/components/basketOverview.js";
      },
      PrivacyPolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
      basketGuideModal: function () {
        return "./@tencent/wzq-lite-basket/components/basketGuideModal.js";
      },
    },
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
      };
    },
    data: function () {
      return {
        hqBridge: h,
        currentItem: {},
        basketList: [],
        listType: null,
        isDataReady: !1,
        showLoading: !1,
        requestFailed: !1,
        nomore: !0,
        safeBottom: 0,
        safeTabBar: 0,
        showPrivacyPolicy: !1,
        didAgreeUserAgreement: u.reactive({ value: !0 }),
        firstRequest: !0,
        reportPrefix: "hq.basketlist",
        title: "",
        guideVisible: !1,
        isHstabShow: !1,
      };
    },
    computed: {
      pageStatus: function () {
        return this.isDataReady || this.requestFailed
          ? !this.isDataReady && this.requestFailed
            ? u.COMMON_PAGE_STATUS.ERROR
            : ""
          : u.COMMON_PAGE_STATUS.LOADING;
      },
    },
    created: function () {},
    beforeDestroy: function () {},
    onLoad: function (e) {
      var t, i;
      try {
        var o =
            null == (i = null == (t = getApp()) ? void 0 : t.globalData)
              ? void 0
              : i.device,
          r = null == o ? void 0 : o.safeArea,
          s = o.screenHeight > r.bottom,
          a = e.__share_flag__;
        (this.isSharePage = 1 == +a),
          (this.safeBottom = s ? 34 : 0),
          (this.safeTabBar = this.isSharePage ? (50 * o.screenWidth) / 375 : 0);
      } catch (e) {}
      this.unsubUserAgreementStatus(), this.initData(e);
    },
    onUnload: function () {
      this.unsubUserAgreementStatus(), this.beforeRouteLeave();
    },
    onShow: function () {
      var e = this;
      (this.isHstabShow = !0),
        this.subUserAgreementStatus(),
        setTimeout(function () {
          e.isDataReady || (e.showLoading = !0);
        }, 500),
        this.firstRequest ? (this.firstRequest = !1) : this.loadList();
    },
    onHide: function () {
      (this.isHstabShow = !1), this.beforeRouteLeave();
    },
    onShareAppMessage: function () {
      var e = p[this.listType];
      return {
        path: "pages/stockBasket/square?".concat(
          "listType="
            .concat(this.listType, "&title=")
            .concat(encodeURIComponent(this.title)),
          "&stat_data=",
          e
        ),
        mtaParams: { category_id: this.listType || "" },
      };
    },
    methods: {
      onHeaderToggleClick: function (e, t) {
        this.guideVisible = t;
      },
      onGuideConfirm: function () {
        this.guideVisible = !1;
      },
      onConfirmModal: function () {},
      checkUserAgreementStatus: function () {
        var e = !0;
        try {
          var t = u.StockBridge.store.protocolStatus;
          "string" == typeof t && (e = "agree" === t);
        } catch (e) {}
        return (this.didAgreeUserAgreement.value = e), e;
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          u.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
      unsubUserAgreementStatus: function () {
        u.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      handleProtocolStatusChange: function () {
        this.checkUserAgreementStatus();
      },
      onCheckUserAgreementStatus: function () {
        this.didAgreeUserAgreement.vlaue || (this.showPrivacyPolicy = !0);
      },
      onErrorRetry: function () {
        this.loadList();
      },
      initData: function (e) {
        var t = e.title,
          i = e.listType;
        (this.title = t),
          t &&
            u.wx$1.setNavigationBarTitle({
              title: decodeURIComponent(decodeURIComponent(t)),
            }),
          i && ((this.listType = i), this.loadList());
      },
      beforeRouteLeave: function () {
        this.gdLoopTimer && clearTimeout(this.gdLoopTimer);
      },
      loadList: function () {
        return (
          (i = this),
          null,
          (u = e().mark(function i() {
            var u,
              l,
              h,
              p,
              g = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        d.getBasketDiscover({ list_type: this.listType })
                      );
                    case 3:
                      (u = e.sent),
                        (l = u.data)
                          ? ((this.isDataReady = !0),
                            (this.showLoading = !1),
                            (h = l.list),
                            (p = void 0 === h ? [] : h),
                            (this.basketList = p.map(function (e) {
                              return (
                                (i = (function (e, i) {
                                  for (var o in i || (i = {}))
                                    a.call(i, o) && c(e, o, i[o]);
                                  if (s) {
                                    var r,
                                      u = t(s(i));
                                    try {
                                      for (u.s(); !(r = u.n()).done; ) {
                                        o = r.value;
                                        n.call(i, o) && c(e, o, i[o]);
                                      }
                                    } catch (e) {
                                      u.e(e);
                                    } finally {
                                      u.f();
                                    }
                                  }
                                  return e;
                                })({}, e)),
                                (u = { column: { id: g.listType } }),
                                o(i, r(u))
                              );
                              var i, u;
                            })),
                            this.loadGdLoopData())
                          : ((this.requestFailed = !0),
                            (this.showLoading = !0)),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        (this.requestFailed = !0),
                        (this.showLoading = !0);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this,
              [[0, 8]]
            );
          })),
          new Promise(function (e, t) {
            var o = function (e) {
                try {
                  s(u.next(e));
                } catch (e) {
                  t(e);
                }
              },
              r = function (e) {
                try {
                  s(u.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(o, r);
              };
            s((u = u.apply(i, null)).next());
          })
        );
        var i, u;
      },
      loadGdLoopData: function () {
        var e = this;
        this.gdLoopTimer && clearTimeout(this.gdLoopTimer),
          (this.gdLoopTimer = setTimeout(function () {
            e.loadList();
          }, 15e3));
      },
    },
  };
Array ||
  (
    u.resolveComponent("mp-privacy-dialog") +
    u.resolveComponent("stock-privacy-dialog") +
    u.resolveComponent("basket-overview") +
    u.resolveComponent("st-status") +
    u.resolveComponent("template") +
    u.resolveComponent("PrivacyPolicyModal") +
    u.resolveComponent("basketGuideModal")
  )();
var f = u._export_sfc(g, [
  [
    "render",
    function (e, t, i, o, r, s) {
      return u.e(
        { a: e.rootFontSize, b: r.isDataReady },
        r.isDataReady
          ? u.e(
              {
                c: u.f(r.basketList, function (e, t, i) {
                  return {
                    a: u.o(s.onHeaderToggleClick, 41, t),
                    b: "1c7dec2b-2-" + i,
                    c: u.p({
                      "is-hstab-show": r.isHstabShow,
                      "report-prefix": r.reportPrefix,
                      "basket-data": e,
                      "is-show-footer": !0,
                      "is-big-radius": !0,
                      "is-bg-white": !0,
                    }),
                    d: t,
                  };
                }),
                d: r.basketList && r.basketList.length > 0 && r.nomore,
              },
              r.basketList && r.basketList.length > 0 && r.nomore
                ? { e: "".concat(r.safeBottom + r.safeTabBar, "px") }
                : {}
            )
          : r.showLoading
          ? { g: u.o(s.onErrorRetry, 42), h: u.p({ type: s.pageStatus }) }
          : {},
        {
          f: r.showLoading,
          i: u.o(function (e) {
            return (r.showPrivacyPolicy = e);
          }, 43),
          j: u.p({ value: r.showPrivacyPolicy }),
          k: u.o(s.onGuideConfirm, 44),
          l: u.o(s.onGuideConfirm, 45),
          m: u.p({ visible: r.guideVisible, "report-prefix": r.reportPrefix }),
        }
      );
    },
  ],
]);
(g.__runtimeHooks = 2), wx.createPage(f);
