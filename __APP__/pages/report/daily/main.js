var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (e) {
          try {
            a(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            a(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, s);
        };
      a((r = r.apply(e, t)).next());
    });
  },
  r = require("../../../common/vendor.js"),
  n = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  o = require("../@tencent/stock-crypto-modules-hq/src/config.js"),
  i = getApp().globalData,
  s = {
    components: {
      dailyReport: function () {
        return "../../reportSbg/@tencent/stock-daily-report/components/stock-daily-report/defaultWZQ.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRhaWx5LXJlcG9ydC9jb21wb25lbnRzL3N0b2NrLWRhaWx5LXJlcG9ydC9kZWZhdWx0V1pRLnZ1ZQ;
          }
        );
      },
      NavBar: function () {
        return "../../asyncCom/components/navBar/index.js";
      },
      profilePop: function () {
        return "../../newsSbg/@tencent/stock-sq/src/source/profilePop/index.js";
      },
    },
    setup: function (e) {
      var t = n.useUserProtocol(),
        o = t.didAgreeUserAgreement,
        i = t.subUserAgreementStatus,
        s = t.unsubUserAgreementStatus;
      return (
        r.provide("didAgreeUserAgreement", o),
        r.provide("onCheckUserAgreementStatus", function () {
          var e, t;
          null ==
            (t =
              null == (e = r.StockBridge.privacyAgreement)
                ? void 0
                : e.check) || t.call(e).catch(function () {});
        }),
        r.provide("stockBridge", r.StockBridge),
        {
          didAgreeUserAgreement: o,
          subUserAgreementStatus: i,
          unsubUserAgreementStatus: s,
        }
      );
    },
    data: function () {
      return {
        dailyid: null,
        from: null,
        skin: r.wx$1.getStorageSync("user/skin") || "white",
        userinfo: null,
        scrollTop: 0,
        specifiedTop: -1,
        shareTitle: null,
        reportInfo: null,
        isDataReady: !1,
        requestFailed: !1,
        profilePopParams: null,
      };
    },
    onLoad: function (e) {
      var t = this;
      i.setSkin(function (e) {
        t.skin = "black" === e ? "black" : "white";
      });
      var r = e.id,
        n = e.from,
        o = e.report_info;
      (this.dailyid = r),
        (this.from = n),
        (this.reportInfo = o),
        this.getAuth(),
        this.subUserAgreementStatus();
    },
    onUnload: function () {
      this.unsubUserAgreementStatus();
    },
    onShow: function () {
      var e;
      try {
        this.isDataReady &&
          (null == (e = this.$refs.dailyReport) || e.mpOnShow());
      } catch (e) {}
    },
    onShareTimeline: function () {
      var e = this.dailyid;
      if (e) {
        var t = null;
        return (
          "01" === e.substr(-2)
            ? (t =
                "https://st.gtimg.com/design/94a0629f7bcb7e052e1318c0067d64c3.png")
            : "02" === e.substr(-2) &&
              (t =
                "https://st.gtimg.com/design/ed85ce29ba323effb885351cb3aee747.png"),
          {
            title: this.shareTitle,
            query: "id=".concat(e, "&from=timeline"),
            imageUrl: t,
          }
        );
      }
    },
    computed: {
      pageStatus: function () {
        return this.isDataReady || this.requestFailed
          ? !this.isDataReady && this.requestFailed
            ? r.COMMON_PAGE_STATUS.ERROR
            : ""
          : r.COMMON_PAGE_STATUS.LOADING;
      },
    },
    methods: {
      getAuth: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, i, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = r.login.getLoginInfo() || {}),
                        (i = n.qluin),
                        (s = n.qlskey),
                        !i || !s)
                      ) {
                        e.next = 5;
                        break;
                      }
                      (this.userinfo = {
                        qlskey: s,
                        qluin: i,
                        qlappid: o.APPIDENUM.mpwzq,
                        appid: o.APPIDENUM.mpwzq,
                        openid: i,
                        fskey: s,
                      }),
                        (e.next = 17);
                      break;
                    case 5:
                      if ("timeline" === this.from) {
                        e.next = 16;
                        break;
                      }
                      return (e.prev = 6), (e.next = 9), this.reLogin();
                    case 9:
                      this.getAuth(), (e.next = 14);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(6));
                    case 14:
                      e.next = 17;
                      break;
                    case 16:
                      this.userinfo = {
                        qlappid: o.APPIDENUM.mpwzq,
                        appid: o.APPIDENUM.mpwzq,
                      };
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[6, 12]]
            );
          })
        );
      },
      scroll: function (e) {
        var t, r;
        try {
          var n =
            (null == (t = null == e ? void 0 : e.detail)
              ? void 0
              : t.scrollTop) || 0;
          (this.scrollTop = n),
            null == (r = this.$refs.dailyReport) || r.onScroll(n);
        } catch (e) {}
      },
      scrollInto: function (e) {
        this.specifiedTop = e;
      },
      reLogin: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (r.login.isLogin()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", r.login.login());
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
      loadSuccess: function (e) {
        if (e) {
          var t = e.agwp,
            r = e.agsp,
            n = this.dailyid;
          if (!n) return;
          "01" === n.substr(-2)
            ? (this.shareTitle = t.title)
            : "02" === n.substr(-2) && (this.shareTitle = r.title),
            (this.isDataReady = !0),
            (this.requestFailed = !1);
        }
      },
      loadFailed: function () {
        (this.isDataReady = !1), (this.requestFailed = !0);
      },
      onErrorRetry: function () {
        var e;
        (this.isDataReady = !1),
          (this.requestFailed = !1),
          null == (e = this.$refs.dailyReport) || e.loadData();
      },
      showProfilePop: function (e) {
        this.profilePopParams = e;
      },
      hideProfilePop: function () {
        this.profilePopParams = null;
      },
    },
  };
Array ||
  (
    r.resolveComponent("mp-privacy-dialog") +
    r.resolveComponent("stock-privacy-dialog") +
    r.resolveComponent("st-status") +
    r.resolveComponent("dailyReport") +
    r.resolveComponent("NavBar") +
    r.resolveComponent("profilePop")
  )();
var a = r._export_sfc(s, [
  [
    "render",
    function (e, t, n, o, i, s) {
      return r.e(
        {
          a: e.rootFontSize,
          b: !i.isDataReady,
          c: r.o(s.onErrorRetry, 328),
          d: r.p({ type: s.pageStatus }),
          e: i.dailyid && i.userinfo,
        },
        i.dailyid && i.userinfo
          ? {
              f: r.sr("dailyReport", "b2b5efc2-3"),
              g: r.o(s.scrollInto, 329),
              h: r.o(s.loadSuccess, 330),
              i: r.o(s.loadFailed, 331),
              j: r.o(s.showProfilePop, 332),
              k: r.p({
                dailyid: i.dailyid,
                "report-info": i.reportInfo,
                "p-userinfo": i.userinfo,
                "scroll-top": i.scrollTop,
                theme: i.skin,
              }),
            }
          : {},
        {
          l: i.isDataReady,
          m: i.specifiedTop,
          n: r.o(function () {
            return s.scroll && s.scroll.apply(s, arguments);
          }, 333),
          o: r.sr("_navBar", "b2b5efc2-4"),
          p: i.profilePopParams,
        },
        i.profilePopParams
          ? {
              q: r.o(s.hideProfilePop, 334),
              r: r.p({
                pageType: "dailyStock",
                userStateData: i.profilePopParams.userStateData,
                content: i.profilePopParams.content,
                defaultHeadImage: i.profilePopParams.defaultHeadImage,
                defaultNickname: i.profilePopParams.defaultNickname,
                needBottomInset: !0,
              }),
            }
          : {},
        {
          s: r.n(i.isDataReady ? "" : "loading-background"),
          t: r.n("black" == i.skin ? "skin-black black" : "skin-white"),
          v: i.skin,
        }
      );
    },
  ],
  ["__scopeId", "data-v-b2b5efc2"],
]);
(s.__runtimeHooks = 7), wx.createPage(a);
