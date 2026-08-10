require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../common/vendor.js"),
  t = {
    name: "PrivacyAgreementCheckList",
    props: {
      desc: {
        type: Array,
        default: function () {
          return [];
        },
      },
      protocols: {
        type: Array,
        default: function () {
          return [];
        },
      },
      scene: { type: String, default: "" },
      showNotice: { type: Boolean, default: !0 },
      theme: { type: String, default: "" },
    },
    data: function () {
      return {
        mainAgreementChecked: !1,
        personalInfoAgreementChecked: !1,
        showAgreementBubble: !1,
        agreementBubbleTarget: "",
        agreementBubbleTimer: null,
      };
    },
    computed: {
      isClassic: function () {
        return (
          "lite" !== this.theme &&
          ("classic" === this.theme ||
            ["stock", "mpweapp"].includes(e.StockBridge.SHELL))
        );
      },
      isLite: function () {
        return !this.isClassic;
      },
      unsignedProtocols: function () {
        var e = this;
        return this.getStoreProtocolList("noSignProtocolList")
          .filter(function (t) {
            return e.isUnsignedProtocol(t);
          })
          .filter(function (t) {
            return e.isInCurrentScene(t);
          });
      },
      mainProtocols: function () {
        var e = this;
        return this.unsignedProtocols.filter(function (t) {
          return !e.isPersonalInfoProtocol(t);
        });
      },
      personalInfoProtocols: function () {
        var e = this;
        return this.unsignedProtocols.filter(function (t) {
          return e.isPersonalInfoProtocol(t);
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
      singleGroupProtocols: function () {
        return this.onlyPersonalInfoAuth
          ? this.personalInfoProtocols
          : this.mainProtocols;
      },
    },
    beforeDestroy: function () {
      this.clearAgreementBubbleTimer();
    },
    methods: {
      toggleMainAgreement: function () {
        this.mainAgreementChecked = !this.mainAgreementChecked;
      },
      togglePersonalInfoAgreement: function () {
        this.personalInfoAgreementChecked = !this.personalInfoAgreementChecked;
      },
      validate: function () {
        if (this.isSingleGroupAgreement) return !0;
        var e = this.mainProtocols.length > 0,
          t = this.personalInfoProtocols.length > 0,
          n = !e || this.mainAgreementChecked,
          o = !t || this.personalInfoAgreementChecked;
        return !(!n || !o) || (this.showBubble(n ? "personal" : "main"), !1);
      },
      reset: function () {
        (this.mainAgreementChecked = !1),
          (this.personalInfoAgreementChecked = !1),
          (this.showAgreementBubble = !1),
          (this.agreementBubbleTarget = ""),
          this.clearAgreementBubbleTimer();
      },
      showBubble: function (e) {
        var t = this;
        (this.agreementBubbleTarget = e),
          (this.showAgreementBubble = !0),
          this.clearAgreementBubbleTimer(),
          (this.agreementBubbleTimer = setTimeout(function () {
            (t.showAgreementBubble = !1),
              (t.agreementBubbleTarget = ""),
              (t.agreementBubbleTimer = null);
          }, 2e3));
      },
      hideAgreementBubble: function () {
        (this.showAgreementBubble = !1),
          (this.agreementBubbleTarget = ""),
          this.clearAgreementBubbleTimer();
      },
      clearAgreementBubbleTimer: function () {
        this.agreementBubbleTimer &&
          (clearTimeout(this.agreementBubbleTimer),
          (this.agreementBubbleTimer = null));
      },
      getStoreProtocolList: function (t) {
        var n;
        try {
          var o = null == (n = e.StockBridge.store) ? void 0 : n[t],
            r = Array.isArray(o) ? o : null == o ? void 0 : o.value;
          return Array.isArray(r) ? r : [];
        } catch (o) {
          return [];
        }
      },
      isInCurrentScene: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.__agreement_scene__ || "";
        return this.scene ? !t || t === this.scene : !t;
      },
      getProtocolTitle: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          e.title ||
          e.name ||
          e.agreement_name ||
          e.agreement_title ||
          e.text ||
          ""
        );
      },
      formatProtocolTitle: function (e) {
        return this.getProtocolTitle(e).replace(/^《|》$/g, "");
      },
      getProtocolKey: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.id || e.url || e.link || this.getProtocolTitle(e);
      },
      isUnsignedProtocol: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return "1" !== String(e.status);
      },
      isPersonalInfoProtocol: function (e) {
        var t = this.getProtocolTitle(e);
        return t.includes("个人信息") && t.includes("授权书");
      },
      goProtocol: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.url || t.link || "";
        if (n)
          if ("mp" === e.StockBridge.ENV) {
            var o = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(n)
            );
            e.wx$1.navigateTo({ url: o });
          } else e.StockBridge.locationTo(n);
      },
    },
  },
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, o, r, i, l) {
        return e.e(
          { a: l.isSingleGroupAgreement },
          l.isSingleGroupAgreement
            ? e.e(
                {
                  b: e.f(o.desc, function (t, n, o) {
                    return { a: e.t(t), b: n };
                  }),
                  c: e.f(l.singleGroupProtocols, function (t, n, o) {
                    return {
                      a: e.t(l.formatProtocolTitle(t)),
                      b: l.getProtocolKey(t),
                      c: e.o(
                        function (e) {
                          return l.goProtocol(t);
                        },
                        2223,
                        l.getProtocolKey(t)
                      ),
                    };
                  }),
                  d: o.showNotice && !l.onlyPersonalInfoAuth,
                },
                (o.showNotice && l.onlyPersonalInfoAuth, {})
              )
            : e.e(
                {
                  e: e.f(o.desc, function (t, n, o) {
                    return { a: e.t(t), b: n };
                  }),
                  f: l.mainProtocols.length > 0,
                },
                l.mainProtocols.length > 0
                  ? e.e(
                      {
                        g:
                          i.showAgreementBubble &&
                          "main" === i.agreementBubbleTarget,
                      },
                      i.showAgreementBubble &&
                        "main" === i.agreementBubbleTarget
                        ? {
                            h: e.o(function () {
                              return (
                                l.hideAgreementBubble &&
                                l.hideAgreementBubble.apply(l, arguments)
                              );
                            }, 2224),
                            i: e.o(function () {
                              return (
                                l.hideAgreementBubble &&
                                l.hideAgreementBubble.apply(l, arguments)
                              );
                            }, 2225),
                          }
                        : {},
                      {
                        j: e.n({
                          "privacy-agreement-content__checkbox--checked":
                            i.mainAgreementChecked,
                        }),
                        k: e.f(l.mainProtocols, function (t, n, o) {
                          return {
                            a: e.t(l.formatProtocolTitle(t)),
                            b: l.getProtocolKey(t),
                            c: e.o(
                              function (e) {
                                return l.goProtocol(t);
                              },
                              2226,
                              l.getProtocolKey(t)
                            ),
                          };
                        }),
                        l: e.o(function () {
                          return (
                            l.toggleMainAgreement &&
                            l.toggleMainAgreement.apply(l, arguments)
                          );
                        }, 2227),
                      }
                    )
                  : {},
                { m: l.personalInfoProtocols.length > 0 },
                l.personalInfoProtocols.length > 0
                  ? e.e(
                      {
                        n:
                          i.showAgreementBubble &&
                          "personal" === i.agreementBubbleTarget,
                      },
                      i.showAgreementBubble &&
                        "personal" === i.agreementBubbleTarget
                        ? {
                            o: e.o(function () {
                              return (
                                l.hideAgreementBubble &&
                                l.hideAgreementBubble.apply(l, arguments)
                              );
                            }, 2228),
                            p: e.o(function () {
                              return (
                                l.hideAgreementBubble &&
                                l.hideAgreementBubble.apply(l, arguments)
                              );
                            }, 2229),
                          }
                        : {},
                      {
                        q: e.n({
                          "privacy-agreement-content__checkbox--checked":
                            i.personalInfoAgreementChecked,
                        }),
                        r: e.f(l.personalInfoProtocols, function (t, n, o) {
                          return {
                            a: e.t(l.formatProtocolTitle(t)),
                            b: l.getProtocolKey(t),
                            c: e.o(
                              function (e) {
                                return l.goProtocol(t);
                              },
                              2230,
                              l.getProtocolKey(t)
                            ),
                          };
                        }),
                        s: e.o(function () {
                          return (
                            l.togglePersonalInfoAgreement &&
                            l.togglePersonalInfoAgreement.apply(l, arguments)
                          );
                        }, 2231),
                      }
                    )
                  : {},
                { t: o.showNotice },
                (o.showNotice, {})
              ),
          {
            v: e.n({
              "privacy-agreement-content--classic": l.isClassic,
              "privacy-agreement-content--lite": l.isLite,
              "privacy-agreement-content--single-auth":
                l.isSingleGroupAgreement,
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-3ff8c86f"],
  ]);
wx.createComponent(n);
