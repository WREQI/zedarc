var t = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../stock-community-base/utils/knife.js"),
  e = require("../../../../../../../common/vendor.js"),
  i = {
    name: "itemCmp",
    components: {},
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
        if (this.iContent.link && this.iContent.link.type) {
          var t = (this.iContent.link.data || {}).linkTradeAccount;
          if (!t) return !0;
          if (this.isBindBroker) return !1;
          if ("zxg" === n.platform) return !!t.app;
          if (this.IsMINAPP) return !!t.zxg_mini;
          if ("wzq" === n.platform)
            return !!(this.isLiteMode ? t.mini_h5 : t.wzq);
        }
        return (
          !!(
            this.iContent &&
            "CMP" === this.iContent.type &&
            this.iContent.text &&
            this.iContent.text.startsWith("@")
          ) ||
          !!(
            this.iContent &&
            this.iContent.link &&
            this.iContent.link.type &&
            "user" === this.iContent.link.type
          )
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
          (e = this),
          null,
          (i = t().mark(function e() {
            var i = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ("zxg" !== n.platform) {
                        t.next = 4;
                        break;
                      }
                      shy.invoke("isOpenAccount", {}, function (t) {
                        var n = t.isOpen;
                        "[object Boolean]" === Object.prototype.toString.call(n)
                          ? (i.isBindBroker = n)
                          : (i.isBindBroker = "true" === n);
                      }),
                        (t.next = 7);
                      break;
                    case 4:
                      return (t.next = 6), TradeFunc.fetchBrokerInfo();
                    case 6:
                      this.isBindBroker = TradeFunc.isBind();
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, n) {
            var r = function (t) {
                try {
                  s(i.next(t));
                } catch (t) {
                  n(t);
                }
              },
              o = function (t) {
                try {
                  s(i.throw(t));
                } catch (t) {
                  n(t);
                }
              },
              s = function (n) {
                return n.done
                  ? t(n.value)
                  : Promise.resolve(n.value).then(r, o);
              };
            s((i = i.apply(e, null)).next());
          })
        );
        var e, i;
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
                c: e.n(s.setGrey && !i.iContent.iconHide ? "disabled" : ""),
                d: e.n(
                  i.iContent.link && i.iContent.link.type
                    ? i.iContent.link.type
                    : ""
                ),
                e: e.n(i.iContent.iconHide ? "" : "hasIcon"),
                f: e.o(function (t) {
                  return s.tapHyper(i.iContent);
                }, 4162),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-7c900e3e"],
  ]);
wx.createComponent(r);
