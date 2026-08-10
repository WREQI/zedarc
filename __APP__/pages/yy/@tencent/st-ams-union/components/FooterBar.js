var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = require("../../../../../@babel/runtime/helpers/typeof"),
  n = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  u = function (t, e, r) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (t[e] = r);
  },
  c = require("../Index.js"),
  a = require("../../../../../common/vendor.js"),
  l = {
    name: "FooterBar",
    components: {
      Agreement: function () {
        return "./Agreement.js";
      },
      ButtonText: function () {
        return "./ButtonText.js";
      },
    },
    props: {
      footerButton: {
        type: Object,
        default: null,
        validator: function (t) {
          return null === t || "object" == e(t);
        },
      },
      sectionOrder: { type: String, default: "1" },
      showRule: { type: Boolean, default: !0 },
      broker: { type: [String, Number], default: "" },
      apiStatus: {
        type: [String, Number],
        default: null,
        validator: function (t) {
          return null === t || "string" == typeof t || "number" == typeof t;
        },
      },
      ruleChecked: { type: Boolean, default: !0 },
    },
    data: function () {
      return {
        DECORATION_ANIMATION_URL:
          "https://st.gtimg.com/design/bea148804ba9dc8526e5b32b8a9925aa.gif",
      };
    },
    computed: {
      normalizedFooterButton: function () {
        var t = this.footerButton;
        return t
          ? t.left
            ? t
            : t.btns && Array.isArray(t.btns) && t.btns.length > 0
            ? this.convertBtnsToLeftRight(t)
            : t
          : null;
      },
      isLeftRightMode: function () {
        var t;
        return !!(null == (t = this.normalizedFooterButton) ? void 0 : t.left);
      },
      primaryActionText: function () {
        var t, e;
        return (
          (null ==
          (e = null == (t = this.normalizedFooterButton) ? void 0 : t.left)
            ? void 0
            : e.text) || ""
        );
      },
      secondaryActionText: function () {
        var t,
          e = null == (t = this.normalizedFooterButton) ? void 0 : t.right;
        return e && e.text ? this.getButtonText(e.text, this.apiStatus) : "";
      },
      mainActionLabel: function () {
        return this.footerButton
          ? this.getMainButtonText(this.footerButton)
          : "";
      },
      agreementType: function () {
        return String(this.broker) === c.BROKER_ID.ZHONGJIN
          ? "zhongjin"
          : "activity";
      },
      showAgreement: function () {
        return !(String(this.broker) !== c.BROKER_ID.ZHONGJIN) || this.showRule;
      },
      agreementChecked: function () {
        return String(this.broker) === c.BROKER_ID.ZHONGJIN
          ? null
          : this.ruleChecked;
      },
    },
    methods: {
      convertBtnsToLeftRight: function (t) {
        var e = Math.max(0, parseInt(this.sectionOrder, 10) - 1),
          n = t.btns[e] || t.btns[0];
        return {
          left: { text: n.text, clickEvent: n.clickEvent, _source: "btns" },
          right: {
            text: this.getMainButtonText(t),
            clickEvent: t.clickEvent,
            _source: "btns",
          },
        };
      },
      getMainButtonText: function (t) {
        if (!(null == t ? void 0 : t.text)) return "";
        var n = t.text;
        return Array.isArray(n)
          ? n[Math.max(0, parseInt(this.sectionOrder, 10) - 1)] || n[0] || ""
          : "object" == e(n) && null !== n
          ? n[this.broker] || ""
          : n;
      },
      isSubscribeAction: function (t, e, n) {
        if ("single" === e || (!n.left && !n.btns))
          return "directApply" !== n.clickEvent;
        if (!t) return !1;
        if ("btns" === t._source && "right" === e)
          return "directApply" !== n.clickEvent;
        if ("btns" === t._source && "left" === e) return !1;
        if ("btns" !== t._source) {
          var r = t.clickEvent;
          return !r || "applyClick" === r || "subscribe" === r;
        }
        return !1;
      },
      handleLeftClick: function () {
        var t = this.normalizedFooterButton.left,
          e = this.isSubscribeAction(t, "left", this.footerButton);
        this.$emit("button-click", {
          type: e ? "subscribe" : "action",
          config: t,
        });
      },
      handleRightClick: function () {
        var t = this.normalizedFooterButton.right,
          e = this.isSubscribeAction(t, "right", this.footerButton);
        this.$emit("button-click", {
          type: e ? "subscribe" : "action",
          config: t,
        });
      },
      handleSubscribe: function () {
        var e = this.isSubscribeAction(null, "single", this.footerButton),
          n = (function (e, n) {
            for (var c in n || (n = {})) o.call(n, c) && u(e, c, n[c]);
            if (r) {
              var a,
                l = t(r(n));
              try {
                for (l.s(); !(a = l.n()).done; ) {
                  c = a.value;
                  i.call(n, c) && u(e, c, n[c]);
                }
              } catch (t) {
                l.e(t);
              } finally {
                l.f();
              }
            }
            return e;
          })(
            {
              text: this.getMainButtonText(this.footerButton),
              clickEvent: this.footerButton.clickEvent,
            },
            this.footerButton
          );
        this.$emit("button-click", {
          type: e ? "subscribe" : "action",
          config: n,
        });
      },
      handleAgreementChange: function (t) {
        var e = "boolean" == typeof t ? t : t.checked;
        this.$emit("rule-change", e);
      },
      getButtonText: function (t, n) {
        if (!t) return "";
        if ("string" == typeof t) return t;
        if ("object" == e(t) && null !== t) {
          if (null != n && "" !== n) {
            var r = String(n);
            if (Object.prototype.hasOwnProperty.call(t, r)) {
              var o = t[r];
              return "string" == typeof o ? o : "";
            }
          }
          return this.getFirstObjectValue(t) || "";
        }
        return "";
      },
      getFirstObjectValue: function (t) {
        if (!t || "object" != e(t)) return "";
        var n = Object.keys(t);
        if (0 === n.length) return "";
        var r = t[n[0]];
        return "object" == e(r) && null !== r
          ? this.getFirstObjectValue(r)
          : String(r);
      },
    },
  };
Array || (a.resolveComponent("ButtonText") + a.resolveComponent("Agreement"))();
var s = a._export_sfc(l, [
  [
    "render",
    function (t, e, n, r, o, i) {
      return a.e(
        { a: n.footerButton },
        n.footerButton
          ? a.e(
              { b: i.isLeftRightMode },
              i.isLeftRightMode
                ? {
                    c: a.p({ text: i.primaryActionText }),
                    d: a.o(function () {
                      return (
                        i.handleLeftClick &&
                        i.handleLeftClick.apply(i, arguments)
                      );
                    }, 3320),
                    e: a.p({ text: i.secondaryActionText }),
                    f: a.o(function () {
                      return (
                        i.handleRightClick &&
                        i.handleRightClick.apply(i, arguments)
                      );
                    }, 3321),
                  }
                : {
                    g: a.t(i.mainActionLabel),
                    h: a.o(function () {
                      return (
                        i.handleSubscribe &&
                        i.handleSubscribe.apply(i, arguments)
                      );
                    }, 3322),
                  },
              { i: o.DECORATION_ANIMATION_URL, j: i.showAgreement },
              i.showAgreement
                ? {
                    k: "agreement-"
                      .concat(n.broker, "-")
                      .concat(i.agreementType),
                    l: a.o(i.handleAgreementChange, 3323),
                    m: a.p({
                      type: i.agreementType,
                      broker: n.broker,
                      checked: i.agreementChecked,
                    }),
                  }
                : {},
              { n: n.footerButton.tip && "zhongjin" !== i.agreementType },
              n.footerButton.tip && "zhongjin" !== i.agreementType
                ? { o: a.t(n.footerButton.tip) }
                : {},
              { p: n.footerButton.tip ? 1 : "", q: i.isLeftRightMode ? 1 : "" }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-1cd72fa7"],
]);
wx.createComponent(s);
