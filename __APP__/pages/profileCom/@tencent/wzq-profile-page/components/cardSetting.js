var t = require("../../../../../common/vendor.js"),
  n = require("../hooks/useCardSetting.js"),
  e = {
    props: {
      hasBind: { type: Boolean, default: !1 },
      highestPriorityDealer: {
        type: Object,
        default: function () {
          return {};
        },
      },
      cardSupportVersion: { type: Boolean, default: !1 },
    },
    setup: function (e) {
      var o = (function (e) {
          var o = n.useCardSetting(),
            c = o.checkAccountCardAddState,
            r = o.openAccountCard,
            a = o.accountCardState,
            d = o.opening;
          return {
            checkAccountCardAddState: c,
            openAccountCard: r,
            buttonConfig: t.computed(function () {
              return e.cardSupportVersion
                ? a.value === n.AccoundCardState.open
                  ? { text: "已开启", canAdd: !1 }
                  : d.value
                  ? { text: "开启中", canAdd: !1 }
                  : { text: "立即开启", canAdd: !0 }
                : { text: "当前微信版本不支持", canAdd: !1 };
            }),
            opening: d,
          };
        })(e),
        c = o.openAccountCard,
        r = o.checkAccountCardAddState,
        a = o.buttonConfig,
        d = o.opening,
        u = t.ref(!0),
        i = t.computed(function () {
          var t;
          return e.hasBind
            ? "bg-".concat(
                (null == (t = e.highestPriorityDealer) ? void 0 : t.code) ||
                  "default"
              )
            : "bg-default";
        });
      return (
        t.onBeforeMount(function () {
          r(), (u.value = !1);
        }),
        {
          firstUpdate: u,
          checkAccountCardAddState: r,
          openAccountCard: c,
          buttonConfig: a,
          brokerBg: i,
          opening: d,
        }
      );
    },
    onPageShow: function () {
      this.firstUpdate || this.checkAccountCardAddState();
    },
  },
  o = t._export_sfc(e, [
    [
      "render",
      function (n, e, o, c, r, a) {
        return {
          a: t.n(c.brokerBg),
          b: t.t(c.buttonConfig.text),
          c: t.n(c.buttonConfig.canAdd ? "" : "disabled"),
          d: t.n(c.opening ? "opening" : ""),
          e: !c.buttonConfig.canAdd,
          f: t.o(function () {
            return c.openAccountCard && c.openAccountCard.apply(c, arguments);
          }, 684),
        };
      },
    ],
    ["__scopeId", "data-v-a41bb250"],
  ]);
wx.createComponent(o);
