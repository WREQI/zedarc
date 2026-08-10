var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  i = require("../../common/vendor.js"),
  u = require("../../api/zxgApi.js"),
  c = {
    components: {
      Index: function () {
        return "./@tencent/stock-choose-news/Index.js";
      },
      PrivacyPolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyPolicyModal.js";
      },
    },
    provide: function () {
      return {
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
        hqBridge: this.hqBridge,
        zxgApi: u.zxgApi,
      };
    },
    data: function () {
      return {
        showLoading: !1,
        requestFailed: !1,
        isDataReady: !1,
        isSharePage: !1,
        showPrivacyPolicy: !1,
        didAgreeUserAgreement: i.reactive({ value: !0 }),
        hqBridge: new i.HQBridge(),
      };
    },
    onLoad: function (e) {
      var t = this;
      this.handleDataReport({ eventName: "news.choose_news_page_brow" }),
        (this.isSharePage = 1 == +e.__share_flag__ || 1 == +e.__menu_flag__),
        this.subUserAgreementStatus(),
        setTimeout(function () {
          t.isDataReady || (t.showLoading = !0);
        }, 300);
    },
    onUnload: function () {
      this.unsubUserAgreementStatus();
    },
    onShow: function () {
      var e;
      null == (e = this.$refs.detail) || e.mpOnShow();
    },
    onHide: function () {
      var e;
      null == (e = this.$refs.detail) || e.mpOnHide();
    },
    onPullDownRefresh: function () {
      return (
        (e = this),
        null,
        (r = t().mark(function e() {
          var r;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      null == (r = this.$refs.detail) ? void 0 : r.onRefresh()
                    );
                  case 3:
                    i.wx$1.stopPullDownRefresh(), (e.next = 9);
                    break;
                  case 6:
                    (e.prev = 6),
                      (e.t0 = e.catch(0)),
                      i.wx$1.stopPullDownRefresh();
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[0, 6]]
          );
        })),
        new Promise(function (t, n) {
          var a = function (e) {
              try {
                s(r.next(e));
              } catch (e) {
                n(e);
              }
            },
            o = function (e) {
              try {
                s(r.throw(e));
              } catch (e) {
                n(e);
              }
            },
            s = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(a, o);
            };
          s((r = r.apply(e, null)).next());
        })
      );
      var e, r;
    },
    onReachBottom: function () {
      var e;
      this.isDataReady && (null == (e = this.$refs.detail) || e.onEndReached());
    },
    computed: {
      pageStatus: function () {
        return this.isDataReady || this.requestFailed
          ? !this.isDataReady && this.requestFailed
            ? i.COMMON_PAGE_STATUS.ERROR
            : ""
          : i.COMMON_PAGE_STATUS.LOADING;
      },
    },
    methods: {
      onErrorRetry: function () {
        var e;
        (this.requestFailed = !1),
          null == (e = this.$refs.detail) || e.loadNewsList(!0);
      },
      checkUserAgreementStatus: function () {
        var e = !0;
        try {
          var t = i.StockBridge.store.protocolStatus;
          "string" == typeof t && (e = "agree" === t);
        } catch (e) {}
        return (this.didAgreeUserAgreement.value = e), e;
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          i.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
      unsubUserAgreementStatus: function () {
        i.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      onCheckUserAgreementStatus: function () {
        this.didAgreeUserAgreement.vlaue || (this.showPrivacyPolicy = !0);
      },
      handleDataReport: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = t.eventName,
          u = t.dataObject,
          c = void 0 === u ? {} : u;
        i.Request.reportMTAData(
          (function (t, r) {
            for (var i in r || (r = {})) a.call(r, i) && s(t, i, r[i]);
            if (n) {
              var u,
                c = e(n(r));
              try {
                for (c.s(); !(u = c.n()).done; ) {
                  i = u.value;
                  o.call(r, i) && s(t, i, r[i]);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            }
            return t;
          })({ eventName: r }, c)
        );
      },
      handleDataReady: function (e) {
        e
          ? ((this.showLoading = !1),
            (this.requestFailed = !1),
            (this.isDataReady = !0))
          : (this.requestFailed = !0);
      },
    },
  };
Array ||
  (
    i.resolveComponent("mp-privacy-dialog") +
    i.resolveComponent("stock-privacy-dialog") +
    i.resolveComponent("st-status") +
    i.resolveComponent("Index") +
    i.resolveComponent("PrivacyPolicyModal")
  )();
var l = i._export_sfc(c, [
  [
    "render",
    function (e, t, r, n, a, o) {
      return i.e(
        { a: e.rootFontSize, b: a.showLoading },
        a.showLoading
          ? { c: i.o(o.onErrorRetry, 335), d: i.p({ type: o.pageStatus }) }
          : {},
        {
          e: i.sr("detail", "27406909-3"),
          f: a.isDataReady,
          g: i.o(o.handleDataReady, 336),
          h: i.o(o.handleDataReport, 337),
          i: i.o(function (e) {
            return (a.showPrivacyPolicy = e);
          }, 338),
          j: i.p({ value: a.showPrivacyPolicy }),
          k: i.n(a.isSharePage ? "sharePage" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-27406909"],
]);
wx.createPage(l);
