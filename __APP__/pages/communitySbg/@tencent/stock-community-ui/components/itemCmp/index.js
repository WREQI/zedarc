var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../stock-community-base/utils/knife.js"),
  e = require("../../../../../../common/vendor.js"),
  i = {
    name: "ItemCmp",
    components: {},
    inject: { TradeFunc: { default: null } },
    props: {
      disabled: { type: Boolean, default: !1 },
      iContent: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return {
        IsMINAPP: n.IsMINAPP,
        isLiteMode: n.IS_LITE_MODE,
        isBindBroker: !0,
      };
    },
    computed: {
      hyperIcon: function () {
        var t,
          n,
          e,
          i =
            "https://mat1.gtimg.com/finance/images/stock/p/community/comItem/CMP/hyperIcon-active.svg";
        return (
          (null ==
          (e =
            null == (n = null == (t = this.iContent) ? void 0 : t.link)
              ? void 0
              : n.data)
            ? void 0
            : e.hyperIcon) && (i = this.iContent.link.data.hyperIcon),
          i
        );
      },
      setGrey: function () {
        var t,
          e,
          i = (
            (null == (e = null == (t = this.iContent) ? void 0 : t.link)
              ? void 0
              : e.data) || {}
          ).hyperH5Url,
          r = ["策略金股", "脱水研报"].find(function (t) {
            return decodeURIComponent(i).includes(t);
          });
        return ("zxg" !== n.platform && r) || this.disabled;
      },
      isSupportHyper: function () {
        if (
          this.iContent &&
          "CMP" === this.iContent.type &&
          this.iContent.text &&
          this.iContent.text.startsWith("@")
        )
          return !0;
        if (
          this.iContent &&
          this.iContent.link &&
          this.iContent.link.type &&
          "user" === this.iContent.link.type
        )
          return !0;
        if (this.iContent.link && this.iContent.link.type) {
          var t = (this.iContent.link.data || {}).linkTradeAccount;
          if (t) {
            if (this.isBindBroker) return !1;
            if ("zxg" === n.platform) return !!t.app;
            if ("wzq" === n.platform)
              return !!(this.isLiteMode ? t.mini_h5 : t.wzq);
            if ("mini" === n.platform) return !!t.zxg_mini;
          }
        }
        return (
          this.iContent.link &&
          this.iContent.link.type &&
          !this.IsMINAPP &&
          !this.isLiteMode
        );
      },
    },
    watch: {
      iContent: {
        handler: function (t) {
          t &&
            t.link &&
            (t.link.data || {}).linkTradeAccount &&
            this.fetchBrokerIsBind();
        },
        immediate: !0,
      },
    },
    methods: {
      tapHyper: function (t) {
        this.setGrey || this.$emit("tapHyper", t);
      },
      fetchBrokerIsBind: function () {
        return (
          (n = this),
          null,
          (e = t().mark(function n() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = this.TradeFunc), !t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), this.TradeFunc.fetchBrokerInfo();
                    case 4:
                      this.isBindBroker = this.TradeFunc.isBind();
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (t, i) {
            var r = function (t) {
                try {
                  s(e.next(t));
                } catch (t) {
                  i(t);
                }
              },
              o = function (t) {
                try {
                  s(e.throw(t));
                } catch (t) {
                  i(t);
                }
              },
              s = function (n) {
                return n.done
                  ? t(n.value)
                  : Promise.resolve(n.value).then(r, o);
              };
            s((e = e.apply(n, null)).next());
          })
        );
        var n, e;
      },
    },
  },
  r = e._export_sfc(i, [
    [
      "render",
      function (t, n, i, r, o, s) {
        return e.e(
          { a: s.isSupportHyper },
          s.isSupportHyper
            ? {
                b: e.t(i.iContent.text),
                c: e.n(s.setGrey ? "disabled" : ""),
                d: e.n(
                  i.iContent.link && i.iContent.link.type
                    ? i.iContent.link.type
                    : ""
                ),
                e: e.n(i.iContent.iconHide ? "" : "hasIcon"),
                f: e.o(function (t) {
                  return s.tapHyper(i.iContent);
                }, 5748),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-316778cc"],
  ]);
wx.createComponent(r);
