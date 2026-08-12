var e = require("../../@babel/runtime/helpers/regeneratorRuntime");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/typeof"),
  o = function (e, t, o) {
    return new Promise(function (i, n) {
      var r = function (e) {
          try {
            s(o.next(e));
          } catch (e) {
            n(e);
          }
        },
        a = function (e) {
          try {
            s(o.throw(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(r, a);
        };
      s((o = o.apply(e, t)).next());
    });
  },
  i = require("../../common/vendor.js"),
  n = require("../../utils/hqWSHelper.js"),
  r = require("../../api/zxgApi.js"),
  a = require("../../components/OpenPopup/utils.js"),
  s = require("../../module/delivery/deliveryMixin.js"),
  c = require("../../mixins/subpkg_reload.js"),
  l = require("./const.js"),
  u = require("../../utils/task.js"),
  h = { mockTrade: "0", index: "0" },
  d = {
    data: function () {
      return {
        noPopAgain: i.wx$1.getStorageSync(a.OPEN_ACCOUT_NOT_POPUP_AGAIN) || !1,
        openpopupVisible: !1,
      };
    },
    methods: {
      toggleNoPopAgain: function (e) {
        this.noPopAgain = e;
      },
      showOpenPopup: function () {
        this.openpopupVisible = !0;
      },
      closeOpenPopup: function () {
        this.openpopupVisible = !1;
      },
    },
  };
try {
  i.wx$1.getSystemInfoSync().platform;
} catch (e) {}
var p = i.userinfo || i.__CJS__import__0__,
  v = (function () {
    var app, fallback;
    try {
      app = typeof getApp === "function" && getApp();
    } catch (e) {}
    fallback =
      (typeof global !== "undefined" && global.__SAFE_GLOBAL_DATA__) || {};
    return (app && app.globalData) || fallback;
  })(),
  m = i.useBrokerInfo(),
  g = "portfolio_chart_hide";
function y() {
  var e, o;
  try {
    var n = i.StockBridge.store;
    return (
      (null == (e = null == n ? void 0 : n.getCachedProtocolStatus)
        ? void 0
        : e.call(n, "", "")) ||
      ((o = null == n ? void 0 : n.protocolStatus) &&
      "object" == t(o) &&
      "value" in o
        ? o.value
        : o) ||
      ""
    );
  } catch (e) {
    return "";
  }
}
var f = null,
  b = null,
  S = null,
  w = {
    components: {
      PortfolioSyncModal: function () {
        return "../../components/PortfolioSyncModal.js";
      },
      PrivacyAndChoosePolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/ClassicPrivacyAndChoosePolicyModal.js";
      },
      PrivacyPolicyBar: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyBar.js";
      },
      Placeholder: function () {
        return "../information/components/placeHolder.js";
      },
      TopBar: function () {
        return "./topbar/index.js";
      },
      portfolio: function () {
        return "../indexSbg/@tencent/wzq-union-portfolio/Index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS11bmlvbi1wb3J0Zm9saW8vSW5kZXgudnVl;
          }
        );
      },
      MarqueeWzqxcx: function () {
        return "../asyncCom/@tencent/stock-base-marquee/Index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWJhc2UtbWFycXVlZS9JbmRleC52dWU;
          }
        );
      },
      MarqueeDialogAdv: function () {
        return "../asyncCom/@tencent/stock-base-marquee/components/dialogAdv.js";
      },
      GlobalCurtainAdv: function () {
        return "../asyncCom/@tencent/st-act-premotes/src/components/delivery/GlobalCurtainAdv/wzqmp.js";
      },
      NewStockCurtain: function () {
        return "../asyncCom/@tencent/st-act-premotes/src/components/delivery/NewStock/index.js";
      },
      BubbleWzqxcx: function () {
        return "../asyncCom/@tencent/st-act-premotes/src/components/Bubble/mpwzq/index.js";
      },
      TabBarPlaceHolder: function () {
        return "../asyncCom/components/tabBarPlaceHolder.js";
      },
      BottomBanner: function () {
        return "../asyncCom/@tencent/st-act-premotes/src/components/delivery/GlobalBottomBanner/index.js";
      },
      PortraitApplyGuideCard: function () {
        return "../indexSbg/@tencent/st-portrait-apply-card/index.js";
      },
      BrokerAssetHoldStock: function () {
        return "../../components/brokerAssetHoldStock.js";
      },
      PreloadPlugin: function () {
        return "../broker/preloadplugin2.js";
      },
      BrokerPassword: function () {
        return "../../components/brokerPassword.js";
      },
      task: function () {
        return "../asyncCom/@tencent/st-act-task/components/task/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC10YXNrL2NvbXBvbmVudHMvdGFzay9pbmRleC52dWU;
          }
        );
      },
      FollowGuide: function () {
        return "../asyncCom/components/followGuideType.js";
      },
      PrivacyBrowseOnly: function () {
        return "./components/PrivacyBrowseOnly.js";
      },
    },
    mixins: [
      d,
      {
        data: function () {
          return { pageHide: !1 };
        },
        onShow: function () {
          this.pageHide = !1;
        },
        onHide: function () {
          this.pageHide = !0;
        },
      },
      s.deliveryMixin,
      c.SubpkgReloadMixin,
    ],
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        stockBridge: i.StockBridge,
        hqWSHelper: n.hqWSHelper,
        tradeFunc: i.sdkBridge,
        isSubscribed: this.subscribeStatus,
      };
    },
    data: function () {
      var e,
        t,
        o = new i.HQBridge(),
        n = i.wx$1.getSystemInfoSync(),
        r = /(linux)/i.test(n.platform),
        a =
          (null ==
          (t = null == (e = v.detect) ? void 0 : e.env)
            ? void 0
            : t.IS_PCWEIXIN) || !1,
        s = y(),
        c = i.getAccountChatSubscribed();
      return {
        hqBridge: o,
        isLinux: r,
        isSubscribed: c,
        subscribeStatus: { value: c },
        preload: i.preload,
        isPC: a,
        skin: i.wx$1.getStorageSync("user/skin") || "white",
        options: null,
        protocolStatus: s,
        protocolStatusFlag: !1,
        isPrivacyPolicyModalShow: !1,
        isChoosePrivacyModalShow: !1,
        firstLoad: !0,
        dataReady: !1,
        showPosition: !1,
        currentTabId: "1",
        isLoadPlugin: !1,
        policyType: "privacy",
        showPrivacyPolicyBar: !1,
        redpockets: [],
        showLazyComponents: !1,
        isInitiativeTask: !1,
        isShow: !1,
        hideTitle: "init",
        hideLoading: !1,
        titleHeight: a ? 42 : 44,
        showSyncModal: !1,
        openSource: "",
        barHeight: 0,
        isMiniChartHideSetting: i.wx$1.getStorageSync(g) || "0",
        isGrayUser: void 0,
        subpkgName: "agree" === s ? "pages/indexSbg/" : "",
        showFollowGuide: !1,
      };
    },
    computed: {
      isProtocolStatusResolved: function () {
        return (
          "agree" === this.protocolStatus ||
          (this.protocolStatusFlag &&
            ["reject", "init"].includes(this.protocolStatus))
        );
      },
      isProtocolAgreed: function () {
        return "agree" === this.protocolStatus;
      },
      isBindUser: function () {
        return m.hasBind.value;
      },
      isMiniChartHide: function () {
        if (void 0 !== this.isGrayUser)
          return !this.isGrayUser || "1" === this.isMiniChartHideSetting;
      },
      canPreloadPlugin: function () {
        var e,
          t,
          o = m.highestPriorityDealer,
          n = m.hasBind,
          r = m.getBrokerMaintain,
          a = o.value.userstateFront;
        return n.value
          ? !(null == (e = r({ bulletinType: i.BULLETIN_TYPE.TRADE }))
              ? void 0
              : e.isMaintain)
          : !!(a & i.USERSTATE_PID.VERIFYING || a & i.USERSTATE_PID.FAILED) &&
              !(null == (t = r({ bulletinType: i.BULLETIN_TYPE.APPLY }))
                ? void 0
                : t.isMaintain);
      },
    },
    onTabItemTap: function () {
      i.Request.reportMTAData({ eventName: "xcx_index_click" });
    },
    created: function () {
      return o(
        this,
        null,
        e().mark(function t() {
          var n,
            r = this;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      i.StockBridge.store.subscribeProtocolStatus(
                        this.handleProtocolStatusChange
                      ),
                      this.refreshProtocolStatus(),
                      i.StockBridge.busOn(
                        "common-updateData",
                        this.onUpdateData
                      ),
                      i.StockBridge.busOn(
                        "common-showSyncModal",
                        this.handleShowSyncModal
                      ),
                      i.StockBridge.busOn(
                        "common-switchBigTitle",
                        this.handleSwitchBigTitle
                      ),
                      v.init(function () {
                        return o(
                          r,
                          null,
                          e().mark(function t() {
                            return e().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      this.checkMiniChartSetting(),
                                        this.judgeGrayUser();
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              t,
                              this
                            );
                          })
                        );
                      }),
                      (t.next = 3),
                      i.getPcIsDisabledTrade(!1)
                    );
                  case 3:
                    if (t.sent) {
                      t.next = 6;
                      break;
                    }
                    (n = i.wx$1.getStorageSync("choose-position")),
                      (this.showPosition = n || m.isAssetShow.value),
                      "boolean" != typeof n &&
                        i.wx$1.setStorageSync(
                          "choose-position",
                          this.showPosition
                        ),
                      i.index.$on("onBrokerUpdate", function () {
                        var e = m.isAssetShow.value;
                        r.showPosition !== e &&
                          ((r.showPosition = e),
                          i.wx$1.setStorageSync("choose-position", e));
                      });
                  case 6:
                    i.StockBridge.busOn(
                      "market-AUTO_POPUP_PROTOCOL_MODAL",
                      this.onPopupProtocolModal
                    ),
                      i.index.$on(
                        "CHOOSE_PRIVACY_POLICY_BAR",
                        this.handlePrivacyNotify
                      ),
                      i.StockBridge.busOn(
                        "growth-yy.activity.adv.event",
                        this.yyActivityAdvEventCallback
                      );
                  case 7:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    onLoad: function (e) {
      (this.options = e || {}), this.isTransferToWebview(this.options);
      var t,
        o = this.options,
        n = o.tab,
        r = o.refresh,
        a = o.lctfrom;
      (i.StockBridge.store.lctfrom = a),
        r && p.get(!0),
        n &&
          (i.wx$1.switchTab({ url: "/pages/index/market" }),
          (t = n),
          h["index"] && (h.index = "".concat(t))),
        i.StockBridge.busOn("market-pageResize", this.handleRotateEvent);
    },
    onShow: function () {
      return o(
        this,
        null,
        e().mark(function t() {
          var o,
            n,
            r,
            a = this;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (this.isShow = !0),
                      this.syncProtocolStatusFromCache(),
                      this.onIndexShow(),
                      i.login.isLogin()
                        ? this.initRedbagData()
                        : i.login
                            .login()
                            .then(function () {
                              a.initRedbagData();
                            })
                            .catch(function () {}),
                      "agree" === this.protocolStatus &&
                        this.protocolStatusFlag &&
                        ((r =
                          null ==
                          (n =
                            null == (o = l.SEAR_STAT_MAP) ? void 0 : o.choose)
                            ? void 0
                            : n.exposure),
                        this.hqBridge.report(r)),
                      (e.next = 3),
                      i.querySubscribedByuserinfo()
                    );
                  case 3:
                    (this.isSubscribed = i.getAccountChatSubscribed()),
                      (this.subscribeStatus.value = this.isSubscribed);
                  case 5:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    onHide: function () {
      (this.isShow = !1), this.onChooseHide(), clearTimeout(f), clearTimeout(S);
    },
    onUnload: function () {
      i.StockBridge.busOff("common-updateData", this.onUpdateData),
        i.StockBridge.busOff("common-showSyncModal", this.handleShowSyncModal),
        i.StockBridge.busOff(
          "common-switchBigTitle",
          this.handleSwitchBigTitle
        ),
        i.StockBridge.busOff(
          "market-AUTO_POPUP_PROTOCOL_MODAL",
          this.onPopupProtocolModal
        ),
        i.StockBridge.busOff(
          "growth-yy.activity.adv.event",
          this.yyActivityAdvEventCallback
        ),
        i.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        ),
        i.index.$off("CHOOSE_PRIVACY_POLICY_BAR", this.handlePrivacyNotify),
        clearTimeout(S);
    },
    onShareAppMessage: function (e) {
      var t, o, n, r, a;
      try {
        if (
          "button" === e.from &&
          "defineShare" ===
            (null == (o = null == (t = e.target) ? void 0 : t.dataset)
              ? void 0
              : o.type)
        ) {
          var s = (this.$refs.portfolio || {}).handleShareStock;
          if ("function" == typeof s)
            return (
              null == (n = this.hqBridge) ||
                n.report("choose.share", { stockid: e.target.dataset.symbol }),
              s(null == (r = e.target) ? void 0 : r.dataset)
            );
        }
      } catch (e) {}
      if (
        "button" === e.from &&
        "dxsharebtn" ===
          (null == (a = null == e ? void 0 : e.target) ? void 0 : a.id)
      ) {
        var c = encodeURIComponent(
          "https://wzq.tenpay.com/mp/v2/index.html#/hangqingxinzhai?market=hs&type=stock&stat_data=FMwzqW050010001"
        );
        return (
          (l.path = "/pages/additional/webview/index?url=".concat(
            c,
            "&stat_data=FMwzqW050010001"
          )),
          (l.title = "你的好友推荐你一批新股新债，赶紧收藏这份打新秘籍"),
          (l.imageUrl =
            "https://st.gtimg.com/design/9a019dba2cd7be9ab24f2bc9bfc13d67.png"),
          i.Request.reportMTAData({ eventName: "xcx.dx_share_friends" }),
          l
        );
      }
      var l = {
        title: "你能用微信盯盘啦",
        path: "/pages/index/index?stat_data=".concat(
          1e3 == +this.currentTabId ? "Ocj00p000h093" : "Ocj00p000h028"
        ),
      };
      return (
        "button" !== e.from &&
          (i.Request.reportData({
            sop: "yy.chooseshare.mainpage_share_button_click",
            page: "mainPage",
          }),
          i.Request.reportMTAData({
            eventName: "yy.chooseshare.mainpage_share_button_click",
            page: "mainPage",
          })),
        l
      );
    },
    onResize: function (e) {
      if (this.isPC || this.isLinux) this.handlePCResize();
      else {
        var t = (e || {}).deviceOrientation;
        this.handleResizeDeviceOrientation(t);
      }
    },
    methods: {
      onCheckUserSubscribe: function (e) {
        (this.isSubscribed = i.getAccountChatSubscribed()),
          (this.subscribeStatus.value = this.isSubscribed);
        try {
          if (!this.isSubscribed) {
            i.wx$1.navigateTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(
                  ""
                    .concat(
                      "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat="
                    )
                    .concat("I2w00p000q027")
                )
              ),
            });
          }
        } catch (e) {
        } finally {
          e && e(this.isSubscribed);
        }
      },
      closeFollowGuide: function () {
        this.showFollowGuide = !1;
      },
      isTransferToWebview: function (e) {
        var t = e.additionaltype,
          o = e.additionalurl;
        "openwebview" === t &&
          o &&
          (i.Request.reportMTAData({
            eventName: "yy.index_transfer_webview.index_brow",
          }),
          i.wx$1.navigateTo({
            url: "/pages/additional/webview/index?additionaltype="
              .concat(t, "&url=")
              .concat(o),
          }));
      },
      onIndexShow: function () {
        var e = this;
        (this.skin = i.wx$1.getStorageSync("user/skin") || "white"),
          (this.isMiniChartHideSetting = i.wx$1.getStorageSync(g) || "0"),
          this.onChooseShow();
        try {
          v.setSkin && v.setSkin(function (t) {
            e.skin = "black" === t ? "black" : "white";
          });
        } catch (e) {}
        this.$nextTick(function () {
          a.isShowOpenAnimation();
        });
      },
      handleWindowResize: function () {
        try {
          var e = (this.$refs.portfolio || {}).mpSetSwiperHeight;
          "function" == typeof e && e();
        } catch (e) {}
      },
      handleActivated: function (e) {
        try {
          var t = (this.$refs.portfolio || {}).handleActivated;
          "function" == typeof t && t();
        } catch (e) {}
      },
      onChooseShow: function () {
        var e = this;
        this.firstLoad
          ? (this.firstLoad = !1)
          : (i.StockBridge.busOn("common-updateData", this.onUpdateData),
            i.StockBridge.busOn(
              "common-showSyncModal",
              this.handleShowSyncModal
            ),
            i.StockBridge.busOn(
              "common-switchBigTitle",
              this.handleSwitchBigTitle
            ),
            v.init(function () {
              e.checkMiniChartSetting(), e.handleActivated("no firstLoad");
            }));
        var t = this.options,
          o = t.wxrcmd,
          n = t.id,
          r = t.zxtype;
        o &&
          (f = setTimeout(function () {
            v.navigateTo({
              url: "/pages/newsCon/newsDetail/main?id="
                .concat(n, "&zxtype=")
                .concat(r),
              fail: function (e) {},
            }),
              clearTimeout(f);
          }, 1500));
      },
      onChooseHide: function () {
        try {
          var e = (this.$refs.portfolio || {}).beforeRouteLeave;
          "function" == typeof e && e();
        } catch (e) {}
        i.StockBridge.busOff("common-updateData", this.onUpdateData),
          i.StockBridge.busOff(
            "common-showSyncModal",
            this.handleShowSyncModal
          ),
          i.StockBridge.busOff(
            "common-switchBigTitle",
            this.handleSwitchBigTitle
          );
      },
      onUpdateData: function () {
        var e = this;
        if (
          (this.dataReady || (this.dataReady = !0),
          !this.showLazyComponents || !this.isLoadPlugin)
        )
          var t = setTimeout(function () {
              (e.showLazyComponents = !0),
                (e.isLoadPlugin = !0),
                (e.isInitiativeTask = u.isInitiativeTask(e.options)),
                clearTimeout(t);
            }, 1e3),
            o = setTimeout(function () {
              require.async("../quote/placeholder"),
                require.async("../noaccount/placeholder"),
                require.async("../broker/placeholder"),
                clearTimeout(o);
            }, 1500),
            i = setTimeout(function () {
              require.async("../market/placeholder"),
                require.async("../additional/placeholder"),
                require.async("../information/placeholder"),
                clearTimeout(i);
            }, 2e3);
      },
      onSwitchTab: function (e) {
        this.currentTabId = e;
      },
      reportQianjiGo: i.reportQianjiGo,
      onSetSwiperHeight: function (e) {
        this.swiperHeight = "".concat(e, "px");
      },
      onRefreshTabStatusForTrade: function (e) {
        var t = this,
          o = e.currentTabId;
        (this.currentTabId = o),
          "position" === o &&
            this.$nextTick(function () {
              var e = setTimeout(function () {
                (t.isLoadPlugin = !0), clearTimeout(e);
              }, 0);
            });
      },
      onChooseRefresh: function () {
        this.hqBridge.busEmit("toggleAdded"),
          i.StockBridge.busEmit("common-toggleAdded"),
          this.onChooseShow();
      },
      initRedbagData: function () {
        return o(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
      handlePCResize: function () {
        var e;
        try {
          e = this.$refs.portfolio || {};
        } catch (e) {}
        if (e) {
          var t = i.wx$1.createSelectorQuery();
          t.selectViewport().boundingClientRect(),
            t.exec(function (t) {
              if (t && t[0]) {
                var o = t[0].height,
                  i = (e || {}).mpSetSwiperHeight;
                "function" == typeof i && i(o);
              }
            });
        }
      },
      yyActivityAdvEventCallback: function () {
        var e = this,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          o = t.path,
          i = t.data,
          n = void 0 === i ? {} : i,
          r = n.type,
          a = void 0 === r ? "" : r;
        "pages/index/index" === o &&
          b !== a &&
          setTimeout(function () {
            var t, o;
            (b = a),
              null ==
                (o =
                  null == (t = e.$refs.portfolio)
                    ? void 0
                    : t.mpSetSwiperHeight) || o.call(t);
          }, 200);
      },
      handlePrivacyNotify: function (e) {
        var t = e.showBar,
          o = e.refresh;
        this.handleShowPolicyBar(t), o && this.onChooseRefresh();
      },
      handleShowErrorModal: function (e) {
        var t = this;
        1 == +e.msgType &&
          i.wx$1.showModal({
            title: "分组个数超出限制",
            content: "您的自建分组超出上限（50），请移除 ".concat(
              e.needRemoveGroupNum,
              " 个分组重试"
            ),
            confirmText: "我知道了",
            confirmColor: "#E63535",
            showCancel: !1,
            success: function (e) {
              e.confirm &&
                (t.handleShowPolicyBar(!0),
                t.hqBridge.report("choose.policy.error_modal_confirm"));
            },
          });
      },
      handleShowPolicyBar: function (e) {
        this.showPrivacyPolicyBar = e;
      },
      handlePolicyBarClick: function () {
        var e,
          t,
          o = this;
        (this.openSource = "tips"),
          (this.policyType = "choose"),
          (this.isPrivacyPolicyModalShow = !0),
          this.hqBridge.report(
            null == (t = null == (e = l.SEAR_STAT_MAP) ? void 0 : e.choose)
              ? void 0
              : t.policyModal
          ),
          setTimeout(function () {
            o.handleShowPolicyBar(!1);
          }, 10);
      },
      onPopupProtocolModal: function () {
        this.isPrivacyPolicyModalShow = !0;
      },
      handleShowSyncModal: function () {
        this.showSyncModal = !0;
      },
      onUpdatePolicyType: function (e) {
        this.policyType = e;
      },
      syncProtocolStatusFromCache: function () {
        var e = y();
        return e && (this.protocolStatus = e), e;
      },
      refreshProtocolStatus: function () {
        return o(
          this,
          null,
          e().mark(function t() {
            var o, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        null ==
                        (n =
                          null == (o = i.StockBridge.store)
                            ? void 0
                            : o.getProtocolStatus)
                          ? void 0
                          : n.call(o, { silent: !0 })
                      );
                    case 3:
                      e.next = 7;
                      break;
                    case 5:
                      (e.prev = 5), (e.t0 = e.catch(0));
                    case 7:
                      return (
                        (e.prev = 7),
                        "agree" === this.syncProtocolStatusFromCache()
                          ? this.activatePortfolioSubpkg()
                          : (this.destroyLoadFailChecker(),
                            (this.subpkgName = "")),
                        (this.protocolStatusFlag = !0),
                        e.finish(7)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 5, 7, 10]]
            );
          })
        );
      },
      activatePortfolioSubpkg: function () {
        var e = this,
          t = v;
        t.subpkgloadInfo || (t.subpkgloadInfo = {}),
          (this.subpkgName = "pages/indexSbg/"),
          (this.subpkgReady = !0),
          this.destroyLoadFailChecker(),
          this.$nextTick(function () {
            e.subpkgMounted || e.createLoadFailChecker(!1);
          });
      },
      handleProtocolStatusChange: function (t) {
        return o(
          this,
          null,
          e().mark(function o() {
            var i, n, a, s, c, u, h, d, p, v, m, g;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ("agree" === t
                          ? this.activatePortfolioSubpkg()
                          : (this.destroyLoadFailChecker(),
                            (this.subpkgName = "")),
                        (this.protocolStatus = t),
                        (this.protocolStatusFlag = !0),
                        "agree" !== t)
                      ) {
                        e.next = 16;
                        break;
                      }
                      if (
                        ((h = getCurrentPages()),
                        (d = h[h.length - 1] || {}),
                        (p =
                          null ==
                          (n =
                            null == (i = l.SEAR_STAT_MAP) ? void 0 : i.choose)
                            ? void 0
                            : n.exposure),
                        this.hqBridge.report(p),
                        !d.route || "pages/index/index" === d.route)
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (
                        (e.prev = 4), (e.next = 7), r.zxgApi.getSyncStatus()
                      );
                    case 7:
                      (v = e.sent),
                        (m = v.show_grant),
                        (g = v.show_tips),
                        m
                          ? ((this.policyType = "choose"),
                            (this.isPrivacyPolicyModalShow = !0),
                            (null ==
                            (s =
                              null == (a = l.SEAR_STAT_MAP) ? void 0 : a.choose)
                              ? void 0
                              : s.policyModal) &&
                              this.hqBridge.report(
                                null ==
                                  (u =
                                    null == (c = l.SEAR_STAT_MAP)
                                      ? void 0
                                      : c.choose)
                                  ? void 0
                                  : u.policyModal
                              ))
                          : (this.handleShowPolicyBar(!!g),
                            (this.isPrivacyPolicyModalShow = !1)),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(4)),
                        (this.isPrivacyPolicyModalShow = !1);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this,
              [[4, 13]]
            );
          })
        );
      },
      showPrivacyPolicyModal: function () {
        return o(
          this,
          null,
          e().mark(function t() {
            var o, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("agree" === this.syncProtocolStatusFromCache()) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        null ==
                        (n =
                          null == (o = i.StockBridge.store)
                            ? void 0
                            : o.getProtocolStatus)
                          ? void 0
                          : n.call(o, { silent: !0 })
                      );
                    case 4:
                      if ("agree" !== this.syncProtocolStatusFromCache()) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      e.next = 10;
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 10:
                      (this.policyType = "privacy"),
                        (this.isPrivacyPolicyModalShow = !0);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 8]]
            );
          })
        );
      },
      handleSwitchBigTitle: function (e) {
        this.hideTitle = e;
      },
      setTHeight: function (e) {
        this.titleHeight = e;
      },
      setHeight: function (e) {
        this.barHeight = e;
      },
      checkMiniChartSetting: function () {
        return o(
          this,
          null,
          e().mark(function t() {
            var o, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = { subIndex: "GLOBAL", settingKeys: g }),
                        (e.prev = 1),
                        (e.next = 4),
                        r.zxgApi.userSettingsBatchGet(o)
                      );
                    case 4:
                      (n = e.sent) &&
                        0 === n.code &&
                        n.settings &&
                        void 0 !== n.settings[g] &&
                        ((this.isMiniChartHideSetting = n.settings[g]),
                        i.wx$1.setStorageSync(g, this.isMiniChartHideSetting)),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(1));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[1, 8]]
            );
          })
        );
      },
      judgeGrayUser: function () {
        return o(
          this,
          null,
          e().mark(function t() {
            var o, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (o = i.wx$1.getStorageSync("_qluin")),
                        (e.next = 4),
                        i.judgeGrayUser(o, "9852682523")
                      );
                    case 4:
                      (n = e.sent), (this.isGrayUser = n), (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(0)), (this.isGrayUser = !1);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 8]]
            );
          })
        );
      },
      handleRotateEvent: function (e) {
        i.wx$1.setPageOrientation({ orientation: "portrait" }),
          setTimeout(function () {
            i.wx$1.setPageOrientation({ orientation: "auto" });
          }, 3e3),
          this.handleResizeDeviceOrientation(e);
      },
      handleResizeDeviceOrientation: function (e) {
        var t = this;
        if (e) {
          var o,
            i = this.deviceOrientation;
          try {
            o = this.$refs.portfolio || {};
          } catch (e) {}
          if (
            (i !== e &&
              ((this.deviceOrientation = e),
              "portrait" === e &&
                (S = setTimeout(function () {
                  try {
                    var e = (t.$refs.topbar || {}).getSafeArea;
                    "function" == typeof e && e();
                  } catch (e) {}
                  var i = (o || {}).mpSetSwiperHeight;
                  "function" == typeof i && i(), clearTimeout(S);
                }, 180))),
            "landscape" === e)
          ) {
            var n = (o || {}).goLandscape;
            "function" == typeof n && n();
          }
        }
      },
      onPortfolioPackageReady: function () {
        (this.hideLoading = !0), this.onPageSubpkgMounted();
      },
    },
  };
Array ||
  (
    i.resolveComponent("mp-privacy-dialog") +
    i.resolveComponent("stock-privacy-dialog") +
    i.resolveComponent("TopBar") +
    i.resolveComponent("MarqueeDialogAdv") +
    i.resolveComponent("MarqueeWzqxcx") +
    i.resolveComponent("PortraitApplyGuideCard") +
    i.resolveComponent("broker-asset-hold-stock") +
    i.resolveComponent("portfolio") +
    i.resolveComponent("PrivacyBrowseOnly") +
    i.resolveComponent("st-status") +
    i.resolveComponent("task") +
    i.resolveComponent("preload-plugin") +
    i.resolveComponent("broker-password") +
    i.resolveComponent("GlobalCurtainAdv") +
    i.resolveComponent("NewStockCurtain") +
    i.resolveComponent("BottomBanner") +
    i.resolveComponent("TabBarPlaceHolder") +
    i.resolveComponent("BubbleWzqxcx") +
    i.resolveComponent("Placeholder") +
    i.resolveComponent("PrivacyAndChoosePolicyModal") +
    i.resolveComponent("PrivacyPolicyBar") +
    i.resolveComponent("PortfolioSyncModal") +
    i.resolveComponent("FollowGuide")
  )();
var P = i._export_sfc(w, [
  [
    "render",
    function (e, t, o, n, r, a) {
      return i.e(
        {
          a: e.rootFontSize,
          b: i.sr("topbar", "93b72b54-2"),
          c: i.o(a.setHeight, 6),
          d: i.o(a.setTHeight, 7),
          e: i.p({
            from: "choose",
            "hide-title": r.hideTitle,
            "premote-mixin": e.premoteMixin,
            "is-show": r.isShow,
          }),
          f: r.showLazyComponents && e.premoteMixin && e.premoteMixin.Marquee,
        },
        r.showLazyComponents && e.premoteMixin && e.premoteMixin.Marquee
          ? {
              g: i.w(
                function (t, o, n) {
                  return i.e(
                    e.premoteMixin && e.premoteMixin.MarqueeDialogAdv
                      ? {
                          a: "93b72b54-4-" + n + ",93b72b54-3",
                          b: i.p({
                            premote: e.premoteMixin.MarqueeDialogAdv,
                            "is-show": t.isDialogShow,
                          }),
                        }
                      : {},
                    { c: n, d: o }
                  );
                },
                { name: "d", path: "g", vueId: "93b72b54-3" }
              ),
              h: e.premoteMixin && e.premoteMixin.MarqueeDialogAdv,
              i: i.p({ premote: e.premoteMixin.Marquee }),
            }
          : {},
        { j: a.isProtocolAgreed },
        a.isProtocolAgreed
          ? i.e(
              { k: e.subpkgReady },
              e.subpkgReady
                ? i.e(
                    {
                      l: i.w(
                        function (t, o, n) {
                          t.tab, t.isCurrent, t.len;
                          var r,
                            a,
                            s,
                            c,
                            l = t.slideIndex;
                          return i.e(
                            {
                              a:
                                e.premoteMixin &&
                                e.premoteMixin.DataDistribute &&
                                0 === l,
                            },
                            e.premoteMixin &&
                              e.premoteMixin.DataDistribute &&
                              0 === l
                              ? {
                                  b: "93b72b54-6-" + n + ",93b72b54-5",
                                  c: i.p({
                                    config:
                                      null ==
                                      (s =
                                        null ==
                                        (a =
                                          null ==
                                          (r =
                                            e.premoteMixin.DataDistribute
                                              .chooseindex_defaultadd_bigcard)
                                            ? void 0
                                            : r.premote)
                                          ? void 0
                                          : a.component_param)
                                        ? void 0
                                        : s.component_content,
                                    premote:
                                      null ==
                                      (c =
                                        e.premoteMixin.DataDistribute
                                          .chooseindex_defaultadd_bigcard)
                                        ? void 0
                                        : c.premote,
                                  }),
                                }
                              : {},
                            { d: n, e: o }
                          );
                        },
                        {
                          name: "yy-portrait-guideapply-card",
                          path: "l",
                          vueId: "93b72b54-5",
                        }
                      ),
                      m: r.showPosition && r.isLoadPlugin,
                    },
                    r.showPosition && r.isLoadPlugin
                      ? {
                          n: i.p({
                            "current-tab-id": r.currentTabId,
                            "swiper-height": e.swiperHeight,
                            skin: r.skin,
                          }),
                        }
                      : {},
                    {
                      o: i.sr("portfolio", "93b72b54-5"),
                      p: i.o(a.showPrivacyPolicyModal, 8),
                      q: i.o(a.onRefreshTabStatusForTrade, 9),
                      r: i.o(a.onSwitchTab, 10),
                      s: i.o(a.onSetSwiperHeight, 11),
                      t: i.o(a.reportQianjiGo, 12),
                      v: i.o(a.onPortfolioPackageReady, 13),
                      w: i.o(a.onCheckUserSubscribe, 14),
                      x: i.p({
                        "protocol-status": r.protocolStatus,
                        "show-position": r.showPosition,
                        "title-height": r.titleHeight,
                        "show-privacy-policy-bar": r.showPrivacyPolicyBar,
                        premote:
                          e.premoteMixin && e.premoteMixin.ChooseBasketRedpoint,
                        redpockets: r.redpockets,
                        preload: r.preload,
                        skin: r.skin,
                        "bar-height": r.barHeight,
                        "is-mini-chart-hide": a.isMiniChartHide,
                      }),
                    }
                  )
                : {}
            )
          : a.isProtocolStatusResolved
          ? { z: i.o(a.showPrivacyPolicyModal, 15) }
          : {},
        {
          y: a.isProtocolStatusResolved,
          A:
            !r.hideLoading &&
            (!a.isProtocolStatusResolved ||
              (a.isProtocolAgreed && !e.subpkgReady)),
        },
        r.hideLoading ||
          (a.isProtocolStatusResolved && (!a.isProtocolAgreed || e.subpkgReady))
          ? {}
          : { B: i.o(e.reloadSubpkg, 16), C: i.p({ type: e.subpkgStatus }) },
        { D: r.showLazyComponents && r.isInitiativeTask },
        (r.showLazyComponents && r.isInitiativeTask, {}),
        { E: (!e.isPc || r.showPosition) && r.isLoadPlugin },
        (e.isPc && !r.showPosition) || !r.isLoadPlugin
          ? {}
          : i.e(
              { F: a.canPreloadPlugin },
              (a.canPreloadPlugin, {}),
              { G: r.showPosition },
              (r.showPosition, {})
            ),
        {
          H:
            r.showLazyComponents &&
            e.premoteMixin &&
            e.premoteMixin.GlobalCurtainAdv,
        },
        r.showLazyComponents &&
          e.premoteMixin &&
          e.premoteMixin.GlobalCurtainAdv
          ? { I: i.p({ premote: e.premoteMixin.GlobalCurtainAdv }) }
          : {},
        {
          J: r.showLazyComponents && e.premoteMixin && e.premoteMixin.NewStock,
        },
        r.showLazyComponents && e.premoteMixin && e.premoteMixin.NewStock
          ? { K: i.p({ premote: e.premoteMixin.NewStock }) }
          : {},
        {
          L:
            r.showLazyComponents &&
            e.premoteMixin &&
            e.premoteMixin.GlobalBottomBanner,
        },
        r.showLazyComponents &&
          e.premoteMixin &&
          e.premoteMixin.GlobalBottomBanner
          ? { M: i.p({ premote: e.premoteMixin.GlobalBottomBanner }) }
          : {},
        {
          N: i.sr("vTabbar", "93b72b54-16"),
          O:
            r.showLazyComponents &&
            e.premoteMixin &&
            e.premoteMixin.BubbleMpwzqAll,
        },
        r.showLazyComponents && e.premoteMixin && e.premoteMixin.BubbleMpwzqAll
          ? { P: i.p({ premote: e.premoteMixin.BubbleMpwzqAll }) }
          : {},
        {
          Q: i.o(function (e) {
            return (r.isPrivacyPolicyModalShow = e);
          }, 17),
          R: i.o(a.onUpdatePolicyType, 18),
          S: i.o(a.onChooseRefresh, 19),
          T: i.o(a.handleShowErrorModal, 20),
          U: i.p({
            value: r.isPrivacyPolicyModalShow,
            "policy-type": r.policyType,
            source: r.openSource,
          }),
          V: r.showPrivacyPolicyBar,
        },
        r.showPrivacyPolicyBar ? { W: i.o(a.handlePolicyBarClick, 21) } : {},
        {
          X: i.o(function (e) {
            return (r.showSyncModal = e);
          }, 22),
          Y: i.p({ value: r.showSyncModal }),
          Z: i.o(a.closeFollowGuide, 23),
          aa: i.p({ show: r.showFollowGuide, stat: "I2w00p000q027", type: 1 }),
          ab: r.skin,
          ac: "black" === r.skin ? "dark" : "light",
          ad: i.n("skin-" + r.skin),
          ae: i.n({ showPrivacyPolicyBar: r.showPrivacyPolicyBar }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-93b72b54"],
]);
(w.__runtimeHooks = 2), wx.createPage(P);
