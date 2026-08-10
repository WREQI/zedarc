require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  n = require("../../permission/constants.js"),
  t = require("../../permission/navigate.js"),
  i = require("../../../../service/stat/mp-weixin.js");
require("../../../../service/sdk/lib/api.js");
var o = require("../../../../service/sdk/platform/mp-weixin.js"),
  r = 0.9,
  a = 1 - r,
  c = e.defineComponent({
    name: "PermissionUnlockTemplate",
    components: {
      ExciteCelebrateShell: function () {
        return "../../shared/ExciteCelebrateShell.js";
      },
      PermissionUnlockCard: function () {
        return "./PermissionUnlockCard.js";
      },
    },
    props: {
      cards: { type: Array, required: !0 },
      isClosing: { type: Boolean, default: !1 },
      isKeChuangOpened: { type: Boolean, default: !1 },
      hasNqHolder: { type: Boolean, default: !1 },
    },
    emits: ["close"],
    setup: function (c, l) {
      var u = l.emit,
        s = e.getCurrentInstance(),
        p = e.ref(0),
        d = t.usePermissionExciteNavigate({
          isKeChuangOpened: e.computed(function () {
            return c.isKeChuangOpened;
          }),
          hasNqHolder: e.computed(function () {
            return c.hasNqHolder;
          }),
        }),
        f = d.goTrade,
        m = d.goOpen,
        h = d.goIndex,
        v = d.isZxg,
        g = e.ref(!1),
        _ = e.ref(0),
        C = e.reactive([]),
        y = null,
        k = 0,
        x = !1,
        S = new Set();
      function b(e, n) {
        var t,
          o = c.cards[p.value] || c.cards[0];
        i.stat.mtaReport({
          busi: "trade",
          eventName: e,
          params: {
            permission_key:
              n ||
              (null == (t = null == o ? void 0 : o.config)
                ? void 0
                : t.permissionKey) ||
              "",
          },
        });
      }
      var w = e.computed(function () {
          return c.cards.length <= 1;
        }),
        q = e.computed(function () {
          return c.cards.some(function (e) {
            return "linkage" === e.type;
          });
        }),
        T = e.computed(function () {
          return c.cards[p.value] || c.cards[0];
        }),
        A = e.computed(function () {
          if (!T.value) return "";
          var e =
            "linkage" === T.value.type
              ? "您还可以开通{permissionName}权限"
              : T.value.config.titleTemplate;
          return n.formatTitle(e, T.value.config.permissionName);
        }),
        j = e.computed(function () {
          return (
            (T.value &&
              "linkage" !== T.value.type &&
              T.value.config.subtitle) ||
            ""
          );
        }),
        E = e.computed(function () {
          var e = A.value.length;
          return e > 14
            ? "permission-unlock-template__title--sm"
            : e > 12
            ? "permission-unlock-template__title--md"
            : "";
        }),
        I = e.computed(function () {
          var e;
          return "main" === (null == (e = T.value) ? void 0 : e.type)
            ? "去交易"
            : "去开通";
        }),
        K = null;
      return (
        e.onMounted(function () {
          w.value ||
            ((C.length = 0),
            c.cards.forEach(function (e, n) {
              C.push(n === p.value ? 1 : r);
            }),
            e.nextTick$1(function () {
              e.index
                .createSelectorQuery()
                .in(s)
                .select(".permission-unlock-template__card-inner")
                .boundingClientRect(function (e) {
                  var n = e;
                  n &&
                    n.width &&
                    n.width > 0 &&
                    (_.value = n.width / (C[0] || 1));
                })
                .exec();
            }),
            (K = setTimeout(function () {
              (g.value = !0), (K = null);
            }, 1500)));
        }),
        e.onBeforeUnmount(function () {
          null !== K && (clearTimeout(K), (K = null));
        }),
        {
          isSingle: w,
          hasLinkage: q,
          currentCard: T,
          currentSwiperIndex: p,
          autoplayEnabled: g,
          cardScales: C,
          titleText: A,
          titleFontClass: E,
          subtitleText: j,
          actionText: I,
          isZxg: v,
          handleSwiperChange: function (e) {
            y = e.detail.current;
          },
          handleSwiperTransition: function (e) {
            if (_.value && !(c.cards.length <= 1)) {
              var n = e.detail.dx,
                t = Math.abs(n),
                i = c.cards.length,
                o = p.value;
              1 === ++k && (x = t > 0.5 * _.value);
              var l = Math.min(t / _.value, 1);
              x && (l = 1 - l);
              var u,
                s = 1 - l * a,
                d = r + l * a;
              (u = null !== y ? y : n > 0 ? (o + 1) % i : (o - 1 + i) % i),
                c.cards.forEach(function (e, n) {
                  C[n] = n === o ? s : n === u ? d : r;
                });
            }
          },
          handleSwiperAnimationFinish: function (e) {
            var n = e.detail.current;
            (k = 0),
              (x = !1),
              (p.value = n),
              (y = null),
              c.cards.forEach(function (e, t) {
                C[t] = t === n ? 1 : r;
              }),
              (function (e) {
                if (e && "linkage" === e.type) {
                  var n = e.config.configKey;
                  n &&
                    !S.has(n) &&
                    (S.add(n),
                    b("permission_alert_popup_brow", e.config.permissionKey));
                }
              })(c.cards[n]);
          },
          handleClose: function () {
            b("permission_unlock_close_btn_click"), u("close");
          },
          handleAction: function () {
            try {
              "main" === T.value.type
                ? (b("auth_incentive_popup_trade_btn_click"), f(T.value.config))
                : (b("linked_auth_remind_popup_open_click"), m(T.value.config));
            } finally {
              u("close");
            }
          },
          onIndexClick: function () {
            var e;
            (null == (e = T.value) ? void 0 : e.quote) &&
              (b("permission_activation_incentive_popup_today_click"),
              u("close"),
              h(T.value.config));
          },
          handleZXGAppSwipeActionChange: function (n) {
            var t;
            null == (t = o.sdk) || t.handleJSTouchEventFirst(n).catch(e.noop);
          },
        }
      );
    },
  });
Array ||
  (
    e.resolveComponent("PermissionUnlockCard") +
    e.resolveComponent("ExciteCelebrateShell")
  )();
var l = e._export_sfc(c, [
  [
    "render",
    function (n, t, i, o, r, a) {
      return e.e(
        {
          a: e.t(n.titleText),
          b: e.n(n.titleFontClass),
          c: e.t(n.subtitleText),
          d: n.isSingle,
        },
        n.isSingle
          ? {
              e: e.o(n.onIndexClick),
              f: e.p({
                config: n.currentCard.config,
                quote: n.currentCard.quote,
                type: n.currentCard.type,
              }),
            }
          : e.e(
              {
                g: e.f(n.cards, function (t, i, o) {
                  return {
                    a: e.o(
                      n.onIndexClick,
                      "".concat(t.config.configKey, "_").concat(i)
                    ),
                    b: "b8ead36b-2-" + o + ",b8ead36b-0",
                    c: e.p({ config: t.config, quote: t.quote, type: t.type }),
                    d: "scale(".concat(n.cardScales[i], ")"),
                    e: "".concat(t.config.configKey, "_").concat(i),
                  };
                }),
                h: n.autoplayEnabled,
                i: n.currentSwiperIndex,
                j: e.o(function () {
                  return (
                    n.handleSwiperChange &&
                    n.handleSwiperChange.apply(n, arguments)
                  );
                }),
                k: e.o(function (e) {
                  return n.handleZXGAppSwipeActionChange(!0);
                }),
                l: e.o(function (e) {
                  return n.handleZXGAppSwipeActionChange(!1);
                }),
                m: e.o(function () {
                  return (
                    n.handleSwiperTransition &&
                    n.handleSwiperTransition.apply(n, arguments)
                  );
                }),
                n: e.o(function () {
                  return (
                    n.handleSwiperAnimationFinish &&
                    n.handleSwiperAnimationFinish.apply(n, arguments)
                  );
                }),
                o: n.cards.length > 1,
              },
              n.cards.length > 1
                ? {
                    p: e.f(n.cards, function (e, t, i) {
                      return {
                        a: "dot_".concat(e.config.configKey, "_").concat(t),
                        b: t === n.currentSwiperIndex ? 1 : "",
                      };
                    }),
                  }
                : {}
            ),
        {
          q: e.t(n.actionText),
          r: e.o(function () {
            return n.handleAction && n.handleAction.apply(n, arguments);
          }),
          s: e.o(function () {
            return n.handleClose && n.handleClose.apply(n, arguments);
          }),
          t: e.p({ "is-closing": n.isClosing }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-b8ead36b"],
]);
wx.createComponent(l);
