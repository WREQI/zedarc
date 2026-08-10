require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  t = require("../../constants.js"),
  i = require("../../../../service/stat/mp-weixin.js");
require("../../../../service/sdk/lib/api.js");
var n = require("../../../../service/sdk/platform/mp-weixin.js"),
  r = 0.9,
  a = 1 - r,
  c = e.defineComponent({
    name: "CarouselTemplate",
    components: {
      ExciteCelebrateShell: function () {
        return "../../shared/ExciteCelebrateShell.js";
      },
      DepositCard: function () {
        return "./DepositCard.js";
      },
      FirstBuyCard: function () {
        return "./FirstBuyCard.js";
      },
      FirstProfitCard: function () {
        return "./FirstProfitCard.js";
      },
    },
    props: {
      items: { type: Array, required: !0 },
      isClosing: { type: Boolean, default: !1 },
      operateAdvMap: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["close", "adv-click"],
    setup: function (c, l) {
      var u = l.emit,
        o = e.getCurrentInstance(),
        d = e.ref(0),
        s = e.computed(function () {
          return c.items.length <= 1;
        }),
        p = e.ref(!1),
        v = e.ref(0),
        f = e.reactive([]),
        m = null,
        h = 0,
        x = !1,
        _ = e.computed(function () {
          var e,
            i = c.items[d.value];
          return i
            ? i.excite_id === t.ExciteType.FIRST_BUY
              ? ["1", "5", "z", "g", "s"].includes(i.stock_cls || "") ||
                !i.stock_name
                ? "恭喜您拥有第一只标的！"
                : "恭喜您成为".concat(i.stock_name, "股东")
              : (null == (e = t.EXCITE_CONFIG[i.excite_id])
                  ? void 0
                  : e.title) || ""
            : "";
        }),
        T = e.computed(function () {
          var e,
            i = c.items[d.value];
          return (
            (i &&
              (null == (e = t.EXCITE_CONFIG[i.excite_id])
                ? void 0
                : e.subtitle)) ||
            ""
          );
        }),
        S = e.computed(function () {
          var e,
            i,
            n = c.items[d.value];
          if (!n) return null;
          var r =
            null == (i = t.EXCITE_CONFIG[n.excite_id]) ? void 0 : i.delyId;
          return r && null !== (e = c.operateAdvMap[r]) && void 0 !== e
            ? e
            : null;
        }),
        C = e.reactive(new Set()),
        I = e.computed(function () {
          var e,
            i,
            n = c.items[d.value];
          return n &&
            null !==
              (e =
                null == (i = t.EXCITE_CONFIG[n.excite_id])
                  ? void 0
                  : i.advStat) &&
            void 0 !== e
            ? e
            : null;
        });
      return (
        e.watch(
          function () {
            return { advData: S.value, advStat: I.value };
          },
          function (e) {
            var t,
              n = e.advData,
              r = e.advStat;
            if (
              (null == n ? void 0 : n.copy_writer) &&
              (null == r ? void 0 : r.browId)
            ) {
              var a = c.items[d.value];
              a &&
                !C.has(a.excite_id) &&
                (null == (t = i.stat) || t.click(r.browId), C.add(a.excite_id));
            }
          },
          { immediate: !0 }
        ),
        e.onMounted(function () {
          (f.length = 0),
            c.items.forEach(function (e, t) {
              f.push(t === d.value ? 1 : r);
            }),
            e.nextTick$1(function () {
              e.index
                .createSelectorQuery()
                .in(o)
                .select(".carousel-excite__card-inner")
                .boundingClientRect(function (e) {
                  var t = e;
                  t &&
                    t.width &&
                    t.width > 0 &&
                    (v.value = t.width / (f[0] || 1));
                })
                .exec();
            }),
            s.value ||
              setTimeout(function () {
                p.value = !0;
              }, 1500);
        }),
        {
          currentSwiperIndex: d,
          isSingle: s,
          autoplayEnabled: p,
          cardScales: f,
          currentTitle: _,
          currentSubtitle: T,
          currentAdvData: S,
          handleSwiperChange: function (e) {
            m = e.detail.current;
          },
          handleSwiperTransition: function (e) {
            if (v.value && !(c.items.length <= 1)) {
              var t = e.detail.dx,
                i = Math.abs(t),
                n = c.items.length,
                l = d.value;
              1 === ++h && (x = i > 0.5 * v.value);
              var u = Math.min(i / v.value, 1);
              x && (u = 1 - u);
              var o,
                s = 1 - u * a,
                p = r + u * a;
              (o = null !== m ? m : t > 0 ? (l + 1) % n : (l - 1 + n) % n),
                c.items.forEach(function (e, t) {
                  f[t] = t === l ? s : t === o ? p : r;
                });
            }
          },
          handleSwiperAnimationFinish: function (e) {
            var t = e.detail.current;
            (h = 0),
              (x = !1),
              (d.value = t),
              (m = null),
              c.items.forEach(function (e, i) {
                f[i] = i === t ? 1 : r;
              });
          },
          handleClose: function () {
            u("close");
          },
          handleAdvClick: function () {
            var e, t;
            S.value &&
              (null == (e = I.value) ? void 0 : e.clickId) &&
              (null == (t = i.stat) || t.click(I.value.clickId),
              u("adv-click", S.value));
          },
          handleZXGAppSwipeActionChange: function (t) {
            var i;
            null == (i = n.sdk) || i.handleJSTouchEventFirst(t).catch(e.noop);
          },
          ExciteType: t.ExciteType,
        }
      );
    },
  });
Array ||
  (
    e.resolveComponent("DepositCard") +
    e.resolveComponent("FirstBuyCard") +
    e.resolveComponent("FirstProfitCard") +
    e.resolveComponent("ExciteCelebrateShell")
  )();
var l = e._export_sfc(c, [
  [
    "render",
    function (t, i, n, r, a, c) {
      return e.e(
        { a: e.t(t.currentTitle), b: e.t(t.currentSubtitle), c: t.isSingle },
        t.isSingle
          ? e.e(
              { d: t.items[0].excite_id === t.ExciteType.FIRST_DEPOSIT },
              t.items[0].excite_id === t.ExciteType.FIRST_DEPOSIT
                ? { e: e.p({ item: t.items[0] }) }
                : t.items[0].excite_id === t.ExciteType.FIRST_BUY
                ? { g: e.p({ item: t.items[0] }) }
                : t.items[0].excite_id === t.ExciteType.FIRST_PROFIT
                ? { i: e.p({ item: t.items[0] }) }
                : {},
              {
                f: t.items[0].excite_id === t.ExciteType.FIRST_BUY,
                h: t.items[0].excite_id === t.ExciteType.FIRST_PROFIT,
              }
            )
          : {
              j: e.f(t.items, function (i, n, r) {
                return e.e(
                  { a: i.excite_id === t.ExciteType.FIRST_DEPOSIT },
                  i.excite_id === t.ExciteType.FIRST_DEPOSIT
                    ? {
                        b: "f1c8eb3e-4-" + r + ",f1c8eb3e-0",
                        c: e.p({ item: i }),
                      }
                    : i.excite_id === t.ExciteType.FIRST_BUY
                    ? {
                        e: "f1c8eb3e-5-" + r + ",f1c8eb3e-0",
                        f: e.p({ item: i }),
                      }
                    : i.excite_id === t.ExciteType.FIRST_PROFIT
                    ? {
                        h: "f1c8eb3e-6-" + r + ",f1c8eb3e-0",
                        i: e.p({ item: i }),
                      }
                    : {},
                  {
                    d: i.excite_id === t.ExciteType.FIRST_BUY,
                    g: i.excite_id === t.ExciteType.FIRST_PROFIT,
                    j: "scale(".concat(t.cardScales[n], ")"),
                    k: i.excite_id,
                  }
                );
              }),
              k: t.autoplayEnabled,
              l: t.currentSwiperIndex,
              m: e.o(function () {
                return (
                  t.handleSwiperChange &&
                  t.handleSwiperChange.apply(t, arguments)
                );
              }),
              n: e.o(function (e) {
                return t.handleZXGAppSwipeActionChange(!0);
              }),
              o: e.o(function (e) {
                return t.handleZXGAppSwipeActionChange(!1);
              }),
              p: e.o(function () {
                return (
                  t.handleSwiperTransition &&
                  t.handleSwiperTransition.apply(t, arguments)
                );
              }),
              q: e.o(function () {
                return (
                  t.handleSwiperAnimationFinish &&
                  t.handleSwiperAnimationFinish.apply(t, arguments)
                );
              }),
              r: e.f(t.items, function (e, i, n) {
                return {
                  a: e.excite_id,
                  b: i === t.currentSwiperIndex ? 1 : "",
                };
              }),
            },
        {
          s: e.o(function () {
            return t.handleClose && t.handleClose.apply(t, arguments);
          }),
          t: e.t((t.currentAdvData && t.currentAdvData.copy_writer) || " "),
          v: t.currentAdvData && t.currentAdvData.copy_writer ? 1 : "",
          w: e.o(function () {
            return t.handleAdvClick && t.handleAdvClick.apply(t, arguments);
          }),
          x: e.o(t.handleClose),
          y: e.p({ "is-closing": t.isClosing, "background-closable": !0 }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-f1c8eb3e"],
]);
wx.createComponent(l);
