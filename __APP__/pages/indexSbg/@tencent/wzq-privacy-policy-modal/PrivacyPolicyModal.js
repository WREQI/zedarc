var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  o = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  c = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  a = function (t, e) {
    for (var n in e || (e = {})) i.call(e, n) && c(t, n, e[n]);
    if (r) {
      var a,
        u = o(r(e));
      try {
        for (u.s(); !(a = u.n()).done; ) {
          n = a.value;
          s.call(e, n) && c(t, n, e[n]);
        }
      } catch (t) {
        u.e(t);
      } finally {
        u.f();
      }
    }
    return t;
  },
  u = function (t, e, o) {
    return new Promise(function (n, r) {
      var i = function (t) {
          try {
            c(o.next(t));
          } catch (t) {
            r(t);
          }
        },
        s = function (t) {
          try {
            c(o.throw(t));
          } catch (t) {
            r(t);
          }
        },
        c = function (t) {
          return t.done ? n(t.value) : Promise.resolve(t.value).then(i, s);
        };
      c((o = o.apply(t, e)).next());
    });
  },
  l = require("../../../../common/vendor.js"),
  h = require("service/policyService.js"),
  p = "__agreement_scene__",
  d = l.getPrivacyRuntime(),
  m = [
    {
      id: "1",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=41",
      text: "腾讯微证券小程序隐私政策",
    },
    {
      id: "2",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=43",
      text: "腾讯微证券小程序儿童隐私保护声明",
    },
    {
      id: "3",
      link: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=44",
      text: "腾讯微证券小程序第三方信息共享清单",
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
  f = {
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
      app: { type: String, default: "" },
      scene: { type: String, default: "" },
      rejectRedirectUrl: { type: String, default: "" },
      popPersonalInfoAuth: { type: Boolean, default: !1 },
      updateAnnouncement: { type: Boolean, default: !1 },
    },
    data: function () {
      var t = d.platform;
      return {
        platform: t,
        isInit: "init" === this.protocolStatus,
        initDesc: [
          "为了提供相关功能服务，保障你的个人权益，腾讯".concat(
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
        protocols: m,
        isMp: d.isMiniProgram,
        hasRefreshedProtocolStatus: !1,
      };
    },
    computed: {
      isUpdateAnnouncementMode: function () {
        return l.ENABLE_UPDATE_ANNOUNCEMENT_POPUP;
      },
      rootClass: function () {
        var t = ["privacy-policy-modal", "privacy-policy-modal--lite"];
        return (
          this.isUpdateAnnouncementMode &&
            t.push("privacy-policy-modal--update"),
          this.isSingleGroupAgreement &&
            t.push("privacy-policy-modal--single-auth"),
          t.join(" ")
        );
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
      isCommunityH5Agreement: function () {
        return "ZXGH5_CommunityAgreementOnly" === this.scene;
      },
      desc: function () {
        return this.isCommunityH5Agreement
          ? ["社区中发帖、评论等服务由腾讯自选股社区提供,请先阅读并同意"]
          : this.isInit
          ? this.initDesc
          : this.otherDesc;
      },
      title: function () {
        return this.isUpdateAnnouncementMode ? "隐私协议更新公告" : "温馨提示";
      },
      updateProtocols: function () {
        return this.getStoreProtocolList("updateAnnouncementProtocols");
      },
      updateAnnounceDate: function () {
        if (!this.updateProtocols.length) return "";
        var t = e(this.updateProtocols).sort(function (t, e) {
          return Number(e.publish_time) - Number(t.publish_time);
        })[0];
        return this.formatUpdateDate(t.publish_time);
      },
      updateDesc: function () {
        var t = this;
        return this.updateProtocols.length
          ? "结合实际情况，"
              .concat(
                l.UPDATE_ANNOUNCEMENT_PLATFORM_NAME[l.StockBridge.SHELL] ||
                  this.platform,
                "拟更新"
              )
              .concat(
                this.updateProtocols
                  .map(function (e) {
                    return "《".concat(t.formatProtocolTitle(e), "》");
                  })
                  .join(""),
                "协议文本，现公示如下。根据相关法规，本公告自"
              )
              .concat(
                this.updateAnnounceDate,
                "起，将持续展示30日，请您详细查阅知悉并确认是否同意下述相关协议内容的变更。"
              )
          : "";
      },
      canShow: function () {
        return (
          !(this.updateAnnouncement && !this.isUpdateAnnouncementMode) &&
          (this.isUpdateAnnouncementMode
            ? this.value
            : this.hasRefreshedProtocolStatus
            ? !(this.onlyPersonalInfoAuth && !this.popPersonalInfoAuth) &&
              this.value
            : this.value)
        );
      },
    },
    watch: {
      value: function (t) {
        var e,
          o,
          n = this;
        t &&
          ((this.hasRefreshedProtocolStatus = !1),
          null ==
            (o =
              null == (e = this.$refs.agreementCheckList) ? void 0 : e.reset) ||
            o.call(e),
          this.refreshProtocolStatus(),
          this.updateAnnouncement &&
            !this.isUpdateAnnouncementMode &&
            this.$nextTick(function () {
              n.$emit("input", !1);
            }));
      },
      canShow: function () {
        this.notifyHostIfHidden();
      },
      scene: function () {
        this.value && (this.hasRefreshedProtocolStatus = !1),
          this.refreshProtocolStatus();
      },
    },
    beforeDestroy: function () {
      l.StockBridge.store.unsubscribeProtocolStatus(
        this.handleProtocolStatusChange
      );
    },
    mounted: function () {
      var t = this;
      l.StockBridge.store.protocolStatus &&
        this.handleProtocolStatusChange(l.StockBridge.store.protocolStatus),
        l.StockBridge.store.subscribeProtocolStatus(
          this.handleProtocolStatusChange
        ),
        this.value &&
          ((this.hasRefreshedProtocolStatus = !1),
          this.refreshProtocolStatus(),
          this.updateAnnouncement &&
            !this.isUpdateAnnouncementMode &&
            this.$nextTick(function () {
              t.$emit("input", !1);
            }));
    },
    methods: {
      getStoreProtocolList: function (t) {
        var e,
          o = null == (e = l.StockBridge.store) ? void 0 : e[t],
          n = Array.isArray(o) ? o : null == o ? void 0 : o.value;
        return Array.isArray(n) ? n : [];
      },
      getUnsignedProtocols: function () {
        var t = this;
        return this.getStoreProtocolList("noSignProtocolList")
          .filter(function (t) {
            return "1" !== String(t.status);
          })
          .filter(function (e) {
            var o = e[p] || "";
            return t.scene ? !o || o === t.scene : !o;
          });
      },
      hasBaseGroupProtocols: function () {
        return this.getUnsignedProtocols().some(function (t) {
          return !t[p];
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
      getProtocolKey: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return t.id || t.url || t.link || this.getProtocolTitle(t);
      },
      formatProtocolTitle: function (t) {
        return this.getProtocolTitle(t).replace(/^《|》$/g, "");
      },
      formatUpdateDate: function (t) {
        var e = new Date(1e3 * Number(t)),
          o = function (t) {
            return String(t).padStart(2, "0");
          };
        return ""
          .concat(e.getFullYear(), "年")
          .concat(o(e.getMonth() + 1), "月")
          .concat(o(e.getDate()), "日");
      },
      openProtocolLink: function (t) {
        if (t)
          if ("mp" === l.StockBridge.ENV) {
            var e = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(t)
            );
            l.wx$1.navigateTo({ url: e });
          } else l.StockBridge.locationTo(t);
      },
      goUpdateProtocol: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.openProtocolLink(t.url || t.link || "");
      },
      isPersonalInfoProtocol: function (t) {
        var e = this.getProtocolTitle(t);
        return e.includes("个人信息") && e.includes("授权书");
      },
      getAgreementRequestParams: function () {
        return this.scene ? { scene: this.scene } : {};
      },
      getAgreementRequestApp: function () {
        var t = l.StockBridge.store.protocolApp;
        return this.app || (null == t ? void 0 : t.value) || t || "";
      },
      getAgreementStatusOptions: function () {
        var t = this.getAgreementRequestApp();
        return a(a({}, this.getAgreementRequestParams()), t ? { app: t } : {});
      },
      refreshProtocolStatus: function () {
        var t,
          e,
          o = this;
        return Promise.resolve(
          null == (e = (t = l.StockBridge.store).getProtocolStatus)
            ? void 0
            : e.call(t, this.getAgreementStatusOptions())
        ).then(function () {
          (o.hasRefreshedProtocolStatus = !0),
            o.closeIfNothingToSign(),
            o.notifyHostIfHidden();
        });
      },
      closeIfNothingToSign: function () {
        this.hasRefreshedProtocolStatus &&
          this.value &&
          !this.getUnsignedProtocols().length &&
          (l.StockBridge.store.publishProtocolStatus(
            "agree",
            this.scene,
            this.getAgreementRequestApp()
          ),
          this.$emit("input", !1));
      },
      notifyHostIfHidden: function () {
        this.hasRefreshedProtocolStatus &&
          this.value &&
          !this.canShow &&
          this.$emit("input", !1);
      },
      handleProtocolStatusChange: function (t) {
        this.isInit = "init" === t;
      },
      updateUserAgreementStatus: function (e) {
        return u(
          this,
          null,
          t().mark(function o() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = this.getStoreProtocolList("noSignProtocolList")),
                        (t.prev = 1),
                        (t.next = 4),
                        h.updateUserAgreementStatusByProtocols(
                          { channel: d.channel, action: e, protocols: n },
                          this.getAgreementRequestApp()
                        )
                      );
                    case 4:
                      t.next = 8;
                      break;
                    case 6:
                      (t.prev = 6), (t.t0 = t.catch(1));
                    case 8:
                      l.StockBridge.store.getProtocolStatus(
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
      onConfirm: function () {
        return u(
          this,
          null,
          t().mark(function e() {
            var o, n, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isUpdateAnnouncementMode) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", void this.onUpdateConfirm());
                    case 2:
                      if (
                        null ==
                        (n =
                          null == (o = this.$refs.agreementCheckList)
                            ? void 0
                            : o.validate)
                          ? void 0
                          : n.call(o)
                      ) {
                        t.next = 4;
                        break;
                      }
                      return t.abrupt("return");
                    case 4:
                      (r = this.getAgreementRequestApp()),
                        l.StockBridge.store.publishProtocolStatus(
                          "agree",
                          this.scene,
                          r
                        ),
                        this.scene &&
                          this.hasBaseGroupProtocols() &&
                          l.StockBridge.store.publishProtocolStatus(
                            "agree",
                            "",
                            r
                          ),
                        this.$emit("input", !1),
                        this.report("agree"),
                        this.updateUserAgreementStatus("agree");
                    case 6:
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
      onCancel: function () {
        return u(
          this,
          null,
          t().mark(function e() {
            var o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isUpdateAnnouncementMode) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", void this.onUpdateCancel());
                    case 2:
                      if (
                        ((o = this.getAgreementRequestApp()),
                        l.StockBridge.store.publishProtocolStatus(
                          "reject",
                          this.scene,
                          o
                        ),
                        this.scene &&
                          this.hasBaseGroupProtocols() &&
                          l.StockBridge.store.publishProtocolStatus(
                            "reject",
                            "",
                            o
                          ),
                        this.report("refuse"),
                        !this.isCommunityH5Agreement)
                      ) {
                        t.next = 10;
                        break;
                      }
                      this.$emit("input", !1), (t.next = 14);
                      break;
                    case 10:
                      return (
                        (t.next = 12), this.updateUserAgreementStatus("refuse1")
                      );
                    case 12:
                      this.$emit("input", !1),
                        l.redirectAfterPrivacyReject(this.rejectRedirectUrl) ||
                          this.scene ||
                          ("mp" === l.StockBridge.ENV
                            ? l.wx$1.showToast({
                                title: "您已进入浏览模式",
                                icon: "none",
                                duration: 3e3,
                              })
                            : this.$toast("您已进入浏览模式"));
                    case 14:
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
      onUpdateConfirm: function () {
        return u(
          this,
          null,
          t().mark(function e() {
            var o, n, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = this.updateProtocols),
                        this.$emit("input", !1),
                        null == (n = (o = l.StockBridge).busEmit) ||
                          n.call(
                            o,
                            l.UPDATE_ANNOUNCEMENT_BANNER_CLOSE_EVENT,
                            {}
                          ),
                        this.report("update_agree"),
                        (t.prev = 2),
                        (t.next = 5),
                        h.updateUserAgreementStatusByProtocols(
                          { channel: d.channel, action: "agree", protocols: r },
                          this.getAgreementRequestApp()
                        )
                      );
                    case 5:
                      t.next = 9;
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(2));
                    case 9:
                      l.StockBridge.store.getProtocolStatus(
                        this.getAgreementStatusOptions()
                      );
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 7]]
            );
          })
        );
      },
      onUpdateCancel: function () {
        return u(
          this,
          null,
          t().mark(function e() {
            var o, n, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (r = this.updateProtocols),
                        l.StockBridge.store.publishProtocolStatus(
                          "reject",
                          "",
                          this.getAgreementRequestApp()
                        ),
                        null == (n = (o = l.StockBridge).busEmit) ||
                          n.call(
                            o,
                            l.UPDATE_ANNOUNCEMENT_BANNER_CLOSE_EVENT,
                            {}
                          ),
                        this.report("update_refuse_click"),
                        (t.prev = 2),
                        (t.next = 5),
                        h.updateUserAgreementStatusByProtocols(
                          {
                            channel: d.channel,
                            action: "refuse1",
                            protocols: r,
                          },
                          this.getAgreementRequestApp()
                        )
                      );
                    case 5:
                      t.next = 9;
                      break;
                    case 7:
                      (t.prev = 7), (t.t0 = t.catch(2));
                    case 9:
                      this.$emit("input", !1),
                        l.redirectAfterPrivacyReject(this.rejectRedirectUrl) ||
                          ("mp" !== l.StockBridge.ENV &&
                            this.$toast("您已进入浏览模式"));
                    case 10:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[2, 7]]
            );
          })
        );
      },
      goProtocol: function (t) {
        var e = m[t];
        this.openProtocolLink(e.link);
      },
      report: function (t) {
        l.StockBridge.report("base.personal.".concat(t));
      },
    },
  };
Array ||
  (
    l.resolveComponent("PrivacyAgreementCheckList") +
    l.resolveComponent("layer-modal")
  )();
var g = l._export_sfc(f, [
  [
    "render",
    function (t, e, o, n, r, i) {
      return l.e(
        { a: !i.isUpdateAnnouncementMode },
        i.isUpdateAnnouncementMode
          ? {
              d: l.t(i.updateDesc),
              e: l.f(i.updateProtocols, function (t, e, o) {
                return {
                  a: l.t(i.formatProtocolTitle(t)),
                  b: i.getProtocolKey(t),
                  c: l.o(
                    function (e) {
                      return i.goUpdateProtocol(t);
                    },
                    420,
                    i.getProtocolKey(t)
                  ),
                };
              }),
              f: l.t(i.updateAnnounceDate),
            }
          : {
              b: l.sr("agreementCheckList", "2246b16c-1,2246b16c-0"),
              c: l.p({
                desc: i.desc,
                protocols: r.protocols,
                scene: o.scene,
                "show-notice": !i.isCommunityH5Agreement,
                theme: "lite",
              }),
            },
        {
          g: l.o(i.onConfirm, 421),
          h: l.o(i.onCancel, 422),
          i: l.o(i.onCancel, 423),
          j: l.p({
            title: i.title,
            "cancel-button-text": "不同意",
            "confirm-button-text": "同意并继续",
            visible: i.canShow,
            "has-bottom-bar": o.hasBottomBar,
            "is-agree-privacy-authorization": !0,
            "root-class": i.rootClass,
            "show-close-btn": !0,
            theme: "lite",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2246b16c"],
]);
wx.createComponent(g);
