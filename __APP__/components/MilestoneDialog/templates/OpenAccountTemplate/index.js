var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var r = require("../../../../common/vendor.js"),
  n = require("../../constants.js"),
  a = require("../../../../service/request/interceptors/handleSensitiveData.js"),
  i = r.defineComponent({
    name: "OpenAccountTemplate",
    components: {
      ExciteCelebrateShell: function () {
        return "../../shared/ExciteCelebrateShell.js";
      },
      ShareholderCard: function () {
        return "./ShareholderCard.js";
      },
    },
    props: {
      data: { type: Object, required: !0 },
      isClosing: { type: Boolean, default: !1 },
    },
    emits: ["close"],
    setup: function (i, u) {
      var o = u.emit,
        c = n.EXCITE_CONFIG[n.ExciteType.OPEN_ACCOUNT],
        s = r.computed(function () {
          return c.title;
        }),
        d = r.computed(function () {
          return c.subtitle;
        }),
        l = r.computed(function () {
          var e;
          return (
            (null == (e = a.handleDecodeFields(i.data, ["user_name_gm"]))
              ? void 0
              : e.user_name) || "***"
          );
        }),
        f = r.computed(function () {
          var e = i.data.time || "";
          if (!e) return "";
          var t = 1e3 * +e;
          return r.dayjs(t).format("MM月DD日");
        }),
        p = r.computed(function () {
          if (!i.data.time) return !1;
          var e = r.dayjs(),
            t = i.data.time ? r.dayjs(1e3 * +i.data.time) : "";
          return e.isBefore(t);
        }),
        v = r.computed(function () {
          var e,
            t,
            r = [];
          return (
            (null == (e = i.data) ? void 0 : e.sh_shareholder_card) &&
              r.push({
                type: "sh",
                account: i.data.sh_shareholder_card.split("|")[0],
                title: "沪市股东卡",
              }),
            (null == (t = i.data) ? void 0 : t.sz_shareholder_card) &&
              r.push({
                type: "sz",
                account: i.data.sz_shareholder_card.split("|")[0],
                title: "深市股东卡",
              }),
            r
          );
        }),
        m = r.computed(function () {
          return 2 === v.value.length;
        }),
        h = r.ref(0),
        b = r.ref(["hidden", "hidden"]),
        x = null,
        C = new Set(),
        _ = !1,
        S = function (e) {
          return new Promise(function (t) {
            var r = setTimeout(function () {
              C.delete(r), t();
            }, e);
            C.add(r);
          });
        },
        y = function () {
          (_ = !0),
            x && (clearInterval(x), (x = null)),
            C.forEach(function (e) {
              return clearTimeout(e);
            }),
            C.clear();
        },
        g = (function () {
          var r = t(
            e().mark(function r() {
              var n;
              return e().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (n = 1 === v.value.length),
                        (_ = !1),
                        (r.next = 4),
                        S(833)
                      );
                    case 4:
                      if (((r.t0 = _), r.t0)) {
                        r.next = 26;
                        break;
                      }
                      return (r.next = 8), S(567);
                    case 8:
                      if (((r.t1 = _), r.t1)) {
                        r.next = 26;
                        break;
                      }
                      return (b.value[0] = "entering"), (r.next = 13), S(267);
                    case 13:
                      if (((r.t2 = _), r.t2)) {
                        r.next = 26;
                        break;
                      }
                      if (((b.value[0] = "visible"), (r.t3 = n), r.t3)) {
                        r.next = 26;
                        break;
                      }
                      return (r.next = 20), S(100);
                    case 20:
                      if (((r.t4 = _), r.t4)) {
                        r.next = 26;
                        break;
                      }
                      return (
                        (b.value[1] = "entering-rotate"), (r.next = 25), S(400)
                      );
                    case 25:
                      _ ||
                        ((b.value[1] = "visible"),
                        m.value &&
                          (x = setInterval(
                            t(
                              e().mark(function t() {
                                var r, n;
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (r = h.value),
                                          (n = 0 === r ? 1 : 0),
                                          (b.value[r] = "hidden"),
                                          (h.value = n),
                                          (e.next = 5),
                                          S(100)
                                        );
                                      case 5:
                                        if (((e.t0 = _), e.t0)) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          (b.value[r] = "entering-rotate"),
                                          (e.next = 10),
                                          S(400)
                                        );
                                      case 10:
                                        _ || (b.value[r] = "visible");
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                }, t);
                              })
                            ),
                            2e3
                          )));
                    case 26:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
          return function () {
            return r.apply(this, arguments);
          };
        })();
      return (
        r.onMounted(function () {
          g();
        }),
        r.onUnmounted(function () {
          y();
        }),
        {
          title: s,
          subtitle: d,
          userName: l,
          formattedDate: f,
          cards: v,
          activeIndex: h,
          getCardAnimationState: function (e) {
            return b.value[e] || "hidden";
          },
          handleClose: function () {
            y(), o("close");
          },
          IMAGES: n.IMAGES,
          showNewbieGuide: p,
        }
      );
    },
  });
Array ||
  (
    r.resolveComponent("ShareholderCard") +
    r.resolveComponent("ExciteCelebrateShell")
  )();
var u = r._export_sfc(i, [
  [
    "render",
    function (e, t, n, a, i, u) {
      return r.e(
        { a: r.t(e.title), b: e.showNewbieGuide },
        e.showNewbieGuide
          ? r.e(
              { c: r.t(e.subtitle), d: e.formattedDate },
              e.formattedDate ? { e: r.t(e.formattedDate) } : {}
            )
          : {},
        {
          f: e.IMAGES.cardStackBack,
          g: r.f(e.cards, function (t, n, a) {
            return {
              a: t.type,
              b: "f21d977b-1-" + a + ",f21d977b-0",
              c: r.p({
                type: t.type,
                account: t.account,
                "user-name": e.userName,
                "is-front": n === e.activeIndex,
                "animation-state": e.getCardAnimationState(n),
              }),
            };
          }),
          h: e.cards[e.activeIndex],
        },
        e.cards[e.activeIndex] ? { i: r.t(e.cards[e.activeIndex].title) } : {},
        {
          j: "url(".concat(e.IMAGES.cardStackFront, ")"),
          k: r.o(function () {
            return e.handleClose && e.handleClose.apply(e, arguments);
          }),
          l: r.o(e.handleClose),
          m: r.p({ "is-closing": e.isClosing, "background-closable": !0 }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-f21d977b"],
]);
wx.createComponent(u);
