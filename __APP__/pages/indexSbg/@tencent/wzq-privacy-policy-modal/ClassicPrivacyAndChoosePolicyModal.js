var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  o,
  r = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  a = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  l = function (t, e) {
    for (var o in e || (e = {})) s.call(e, o) && a(t, o, e[o]);
    if (i) {
      var n,
        l = r(i(e));
      try {
        for (l.s(); !(n = l.n()).done; ) {
          o = n.value;
          c.call(e, o) && a(t, o, e[o]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return t;
  },
  u = function (t, e, o) {
    return new Promise(function (r, n) {
      var i = function (t) {
          try {
            c(o.next(t));
          } catch (t) {
            n(t);
          }
        },
        s = function (t) {
          try {
            c(o.throw(t));
          } catch (t) {
            n(t);
          }
        },
        c = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(i, s);
        };
      c((o = o.apply(t, e)).next());
    });
  },
  p = require("../../../../common/vendor.js"),
  h = require("service/policyService.js"),
  m = [
    {
      id: "1",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=7",
      text: "腾讯自选股小程序隐私政策",
    },
    {
      id: "2",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=8",
      text: "腾讯自选股小程序儿童隐私保护声明",
    },
    {
      id: "3",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=9",
      text: "腾讯自选股小程序第三方信息共享清单",
    },
    {
      id: "4",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=55",
      text: "腾讯自选股微信版｜微证券隐私政策",
    },
    {
      id: "5",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=56",
      text: "腾讯自选股微信版｜微证券用户服务协议",
    },
    {
      id: "6",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=57",
      text: "腾讯自选股微信版｜微证券儿童隐私保护声明",
    },
  ],
  g = {
    components: {
      LayerModal: function () {
        return "./components/layerModal.js";
      },
      PrivacyAgreementCheckList: function () {
        return "./components/PrivacyAgreementCheckList.js";
      },
    },
    props: {
      hasBottomBar: { type: Boolean, default: !0 },
      value: { type: Boolean, default: !1 },
      policyType: { type: String, default: "privacy" },
      scene: { type: String, default: "" },
      app: { type: String, default: "" },
      source: { type: String, default: "" },
    },
    data: function () {
      var t =
        "mp" === p.StockBridge.ENV ? "自选股小程序" : "自选股微信版 丨微证券";
      return {
        platform: t,
        isInit: "init" === p.StockBridge.store.protocolStatus,
        initDesc: [
          "为了给你提供相关功能服务，保障你的个人权益，腾讯".concat(
            t,
            "请你确认是否同意"
          ),
        ],
        otherDesc: [
          "为了提供相关功能服务，保障你的个人权益，腾讯".concat(
            t,
            "请你确认是否同意"
          ),
        ],
        checked: !1,
        chooseTitle: "一键同步自选股",
        protocols: m,
        isMp: "mp" === p.StockBridge.ENV,
        syncDesc: "整合微信版/APP/小程序的自选股，集中查看",
      };
    },
    computed: {
      rootClass: function () {
        if ("privacy" === this.policyType) {
          var t = ["privacy-policy-modal", "privacy-policy-modal--classic"];
          return (
            this.isSingleGroupAgreement &&
              t.push("privacy-policy-modal--single-auth"),
            t.join(" ")
          );
        }
        return "mp" === p.StockBridge.ENV ? "choose" : "choose safe-bottom";
      },
      mainProtocols: function () {
        var t = this;
        return this.getUnsignedProtocols().filter(function (e) {
          return !t.isPersonalInfoProtocol(e);
        });
      },
      personalInfoProtocols: function () {
        var t = this;
        return this.getUnsignedProtocols().filter(function (e) {
          return t.isPersonalInfoProtocol(e);
        });
      },
      onlyPersonalInfoAuth: function () {
        return (
          0 === this.mainProtocols.length &&
          1 === this.personalInfoProtocols.length
        );
      },
      onlyMainAgreement: function () {
        return (
          this.mainProtocols.length > 0 &&
          0 === this.personalInfoProtocols.length
        );
      },
      isSingleGroupAgreement: function () {
        return this.onlyPersonalInfoAuth || this.onlyMainAgreement;
      },
      privacyDescs: function () {
        return this.isInit ? this.initDesc : this.otherDesc;
      },
      title: function () {
        return "privacy" === this.policyType ? "温馨提示" : this.chooseTitle;
      },
      cancelText: function () {
        return "privacy" === this.policyType ? "不同意" : "稍后再说";
      },
      confirmText: function () {
        return this.policyType, "同意并继续";
      },
    },
    watch: {
      value: function (t) {
        var e, o;
        t &&
          "privacy" === this.policyType &&
          (null ==
            (o =
              null == (e = this.$refs.agreementCheckList) ? void 0 : e.reset) ||
            o.call(e),
          this.refreshProtocolStatus());
      },
      scene: function () {
        this.refreshProtocolStatus();
      },
    },
    beforeDestroy: function () {
      p.StockBridge.store.unsubscribeProtocolStatus(
        this.handleProtocolStatusChange
      );
    },
    mounted: function () {
      p.StockBridge.store.protocolStatus &&
        this.handleProtocolStatusChange(p.StockBridge.store.protocolStatus),
        p.StockBridge.store.subscribeProtocolStatus(
          this.handleProtocolStatusChange
        ),
        this.value &&
          "privacy" === this.policyType &&
          this.refreshProtocolStatus();
    },
    methods: {
      getStoreProtocolList: function (t) {
        var e,
          o = null == (e = p.StockBridge.store) ? void 0 : e[t],
          r = Array.isArray(o) ? o : null == o ? void 0 : o.value;
        return Array.isArray(r) ? r : [];
      },
      getUnsignedProtocols: function () {
        var t = this;
        return this.getStoreProtocolList("noSignProtocolList")
          .filter(function (t) {
            return "1" !== String(t.status);
          })
          .filter(function (e) {
            var o = e.__agreement_scene__ || "";
            return t.scene ? !o || o === t.scene : !o;
          });
      },
      getProtocolTitle: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          t.title ||
          t.name ||
          t.agreement_name ||
          t.agreement_title ||
          t.text ||
          ""
        );
      },
      isPersonalInfoProtocol: function (t) {
        var e = this.getProtocolTitle(t);
        return e.includes("个人信息") && e.includes("授权书");
      },
      getAgreementRequestParams: function () {
        return this.scene ? { scene: this.scene } : {};
      },
      getAgreementRequestApp: function () {
        var t = p.StockBridge.store.protocolApp;
        return this.app || (null == t ? void 0 : t.value) || t || "";
      },
      getAgreementStatusOptions: function () {
        var t = this.getAgreementRequestApp();
        return l(l({}, this.getAgreementRequestParams()), t ? { app: t } : {});
      },
      refreshProtocolStatus: function () {
        var t, e;
        "privacy" === this.policyType &&
          (null == (e = (t = p.StockBridge.store).getProtocolStatus) ||
            e.call(t, this.getAgreementStatusOptions()));
      },
      handleProtocolStatusChange: function (t) {
        this.isInit = "init" === t;
      },
      updateUserAgreementStatus: function (e) {
        return u(
          this,
          null,
          t().mark(function o() {
            var r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = this.getStoreProtocolList("noSignProtocolList")),
                        (t.prev = 1),
                        (t.next = 4),
                        h.updateUserAgreementStatusByProtocols(
                          {
                            channel: p.channelMap.mpweapp,
                            action: e,
                            protocols: r,
                          },
                          this.getAgreementRequestApp()
                        )
                      );
                    case 4:
                      t.next = 8;
                      break;
                    case 6:
                      (t.prev = 6), (t.t0 = t.catch(1));
                    case 8:
                      p.StockBridge.store.getProtocolStatus(
                        this.getAgreementStatusOptions()
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              o,
              this,
              [[1, 6]]
            );
          })
        );
      },
      onConfirm:
        ("500",
        (e = function () {
          var t, e;
          if ("privacy" === this.policyType) {
            if (
              !(null ==
              (e =
                null == (t = this.$refs.agreementCheckList)
                  ? void 0
                  : t.validate)
                ? void 0
                : e.call(t))
            )
              return;
            this.onPrivacyConfirm();
          } else this.onChooseConfirm();
        }),
        (o = {}.atBegin),
        (function (t, e, o) {
          var r,
            n = o || {},
            i = n.noTrailing,
            s = void 0 !== i && i,
            c = n.noLeading,
            a = void 0 !== c && c,
            l = n.debounceMode,
            u = void 0 === l ? void 0 : l,
            p = !1,
            h = 0;
          function m() {
            r && clearTimeout(r);
          }
          function g() {
            for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++)
              n[i] = arguments[i];
            var c = this,
              l = Date.now() - h;
            function g() {
              (h = Date.now()), e.apply(c, n);
            }
            function d() {
              r = void 0;
            }
            p ||
              (a || !u || r || g(),
              m(),
              void 0 === u && l > t
                ? a
                  ? ((h = Date.now()), s || (r = setTimeout(u ? d : g, t)))
                  : g()
                : !0 !== s &&
                  (r = setTimeout(u ? d : g, void 0 === u ? t - l : t)));
          }
          return (
            (g.cancel = function (t) {
              var e = (t || {}).upcomingOnly,
                o = void 0 !== e && e;
              m(), (p = !o);
            }),
            g
          );
        })("500", e, { debounceMode: !1 !== (void 0 !== o && o) })),
      onCancel: function () {
        "privacy" === this.policyType
          ? this.onPrivacyCancel()
          : this.onChooseCancel();
      },
      signChooseSync: function (t) {
        var e = this,
          o = { status: t };
        if (
          (this.source && (o.from = this.source),
          "mp" === p.StockBridge.ENV && p.wx$1 && p.wx$1.getLaunchOptionsSync)
        ) {
          var r = p.wx$1.getLaunchOptionsSync();
          o.scene = r ? r.scene : "";
        }
        h.setSyncStatus(o)
          .then(function (t) {
            0 == +t.code
              ? t.data.mergeMsg
                ? e.$emit("showErrorModal", t.data.mergeMsg)
                : e.$emit("refreshList")
              : "mp" === p.StockBridge.ENV &&
                p.wx$1.showToast({
                  title: "系统繁忙，请稍后再试",
                  icon: "none",
                  duration: 1e3,
                });
          })
          .catch(function (t) {
            "mp" === p.StockBridge.ENV
              ? p.wx$1.showToast({
                  title: "系统繁忙，请稍后再试",
                  icon: "none",
                  duration: 1e3,
                })
              : e.$toast.capsule("系统繁忙，请稍后再试");
          });
      },
      onChooseConfirm: function () {
        p.StockBridge.store.publishProtocolStatus(
          "agree",
          "",
          this.getAgreementRequestApp()
        ),
          this.$emit("input", !1),
          this.$emit("chooseConfirm"),
          this.signChooseSync("1"),
          this.report("choose_agree");
      },
      onChooseCancel: function () {
        this.$emit("input", !1),
          this.$emit("cancel"),
          this.report("choose_refuse"),
          this.signChooseSync("0");
      },
      onPrivacyConfirm: function () {
        return u(
          this,
          null,
          t().mark(function e() {
            var o, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.report("agree"),
                        (o = this.getAgreementRequestApp()),
                        p.StockBridge.store.publishProtocolStatus(
                          "agree",
                          this.scene,
                          o
                        ),
                        this.scene &&
                          p.StockBridge.store.publishProtocolStatus(
                            "agree",
                            "",
                            o
                          ),
                        (t.next = 6),
                        this.updateUserAgreementStatus("agree")
                      );
                    case 6:
                      return (t.prev = 6), (t.next = 9), h.getSyncStatus();
                    case 9:
                      (r = t.sent),
                        r.show_grant
                          ? this.$emit("updatePolicyType", "choose")
                          : this.$emit("input", !1),
                        (t.next = 17);
                      break;
                    case 14:
                      (t.prev = 14),
                        (t.t0 = t.catch(6)),
                        this.$emit("input", !1);
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[6, 14]]
            );
          })
        );
      },
      onPrivacyCancel: function () {
        p.StockBridge.store.publishProtocolStatus(
          "reject",
          this.scene,
          this.getAgreementRequestApp()
        ),
          this.$emit("input", !1),
          this.report("refuse"),
          this.updateUserAgreementStatus("refuse1"),
          "mp" === p.StockBridge.ENV
            ? p.wx$1.showToast({
                title: "您已进入浏览模式",
                icon: "none",
                duration: 3e3,
              })
            : this.$toast("您已进入浏览模式");
      },
      goProtocol: function (t) {
        var e = m[t].link;
        this.jumpToH5Page(e);
      },
      handleMoreInfo: function () {
        this.report("privacy_more_info");
        var t = "https://gu.qq.com/resource/pravicyChoose/".concat(
          "mp" === p.StockBridge.ENV ? "mp" : "h5",
          ".html"
        );
        this.jumpToH5Page(t);
      },
      jumpToH5Page: function (t) {
        if ("mp" === p.StockBridge.ENV) {
          var e = "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(t)
          );
          p.wx$1.navigateTo({ url: e });
        } else p.StockBridge.openExtraWebview(t);
      },
      report: function (t) {
        p.StockBridge.report("base.personal.".concat(t));
      },
    },
  };
Array ||
  (
    p.resolveComponent("PrivacyAgreementCheckList") +
    p.resolveComponent("layer-modal")
  )();
var d = p._export_sfc(g, [
  [
    "render",
    function (t, e, o, r, n, i) {
      return p.e(
        { a: "privacy" === o.policyType },
        "privacy" === o.policyType
          ? {
              b: p.sr("agreementCheckList", "136ab40c-1,136ab40c-0"),
              c: p.p({
                desc: i.privacyDescs,
                protocols: n.protocols,
                scene: o.scene,
              }),
            }
          : {},
        { d: "choose" === o.policyType },
        "choose" === o.policyType
          ? {
              e: p.t(n.syncDesc),
              f: p.o(function () {
                return i.handleMoreInfo && i.handleMoreInfo.apply(i, arguments);
              }, 1361),
            }
          : {},
        {
          g: p.o(i.onConfirm, 1362),
          h: p.o(i.onCancel, 1363),
          i: p.o(i.onCancel, 1364),
          j: p.p({
            title: i.title,
            "cancel-button-text": i.cancelText,
            "confirm-button-text": i.confirmText,
            visible: o.value,
            "has-bottom-bar": o.hasBottomBar,
            "is-agree-privacy-authorization": !0,
            "root-class": i.rootClass,
            "show-close-btn": "privacy" === o.policyType,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-136ab40c"],
]);
wx.createComponent(d);
