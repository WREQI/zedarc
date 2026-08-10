var e = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var r = require("../../../common/vendor.js"),
  n = require("../../../service/stat/mp-weixin.js"),
  a = require("../../../model/biz/permission/types.js");
require("../../../model/biz/permission/constants.js");
var t = require("../../../config/key.js"),
  c = [
    a.CardType.SH,
    a.CardType.SZ,
    a.CardType.HGT,
    a.CardType.SGT,
    a.CardType.BJ,
  ],
  i = r.defineComponent({
    name: "ShareholderCardStack",
    components: {
      ShareholderCard: function () {
        return "./ShareholderCard.js";
      },
    },
    props: {
      cardList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      permissionsMap: {
        type: Object,
        default: function () {
          return {};
        },
      },
      expanded: { type: Boolean, default: !1 },
      hideInfo: { type: Boolean, default: !1 },
    },
    options: { styleIsolation: "shared" },
    emits: ["expand", "collapse", "open"],
    setup: function (a, i) {
      var o = i.emit,
        u = (function () {
          try {
            var e = r.index.getStorageSync(t.CARD_ORDER_STORAGE_KEY);
            if (e) {
              var n = JSON.parse(e);
              if (
                Array.isArray(n) &&
                n.length === c.length &&
                c.every(function (e) {
                  return n.includes(e);
                })
              )
                return n;
            }
          } catch (e) {}
          return null;
        })(),
        d = !!u,
        l = r.ref(u || [].concat(c)),
        s = r.computed(function () {
          var r = new Set(
              a.cardList.map(function (e) {
                return e.cardType;
              })
            ),
            n = l.value.filter(function (e) {
              return r.has(e);
            });
          return (
            a.cardList.forEach(function (e) {
              n.includes(e.cardType) || n.push(e.cardType);
            }),
            d
              ? n
              : (function (r, n) {
                  var a = new Set(
                    n
                      .filter(function (e) {
                        return !!e.stockholderCode;
                      })
                      .map(function (e) {
                        return e.cardType;
                      })
                  );
                  return e(r).sort(function (e, r) {
                    var n = a.has(e) ? 1 : 0;
                    return (a.has(r) ? 1 : 0) - n;
                  });
                })(n, a.cardList)
          );
        }),
        f = r.ref(null),
        p = r.ref(!1),
        v = r.ref(null),
        y = r.computed(function () {
          return s.value[0];
        }),
        h = r.computed(function () {
          return { "--card-count": a.cardList.length };
        }),
        m = function (e) {
          return a.cardList[e].cardType === y.value;
        },
        _ = function () {
          v.value && (clearTimeout(v.value), (v.value = null));
        },
        T = function () {
          _(),
            (v.value = setTimeout(function () {
              (p.value = !1), (v.value = null);
            }, 300));
        };
      r.onBeforeUnmount(function () {
        _();
      }),
        r.watch(
          function () {
            return a.expanded;
          },
          function (e) {
            e || (f.value = null);
          }
        );
      var C = function (e, r) {
          n.stat.click(e, void 0, void 0, r);
        },
        S = r.ref(!1);
      r.watch(
        function () {
          return s.value;
        },
        function (e) {
          e &&
            e.length > 0 &&
            (S.value ||
              0 === a.cardList.length ||
              ((S.value = !0),
              a.cardList.forEach(function (e, r) {
                C(
                  "trade.account.shareholder_card_".concat(e.cardType, "_brow")
                );
              })));
        },
        { immediate: !0 }
      );
      var g = function (n) {
        var a = y.value;
        if (a !== n) {
          C("trade.account.card_switch_click", {
            from_market: a,
            to_market: n,
          });
          var c = l.value.indexOf(a),
            i = l.value.indexOf(n);
          if (-1 !== c && -1 !== i) {
            var o,
              u = e(l.value);
            (o = [u[i], u[c]]),
              (u[c] = o[0]),
              (u[i] = o[1]),
              (l.value = u),
              (function (e) {
                try {
                  r.index.setStorageSync(
                    t.CARD_ORDER_STORAGE_KEY,
                    JSON.stringify(e)
                  );
                } catch (e) {}
              })(u);
          }
          f.value = null;
        }
      };
      return {
        flippedIndex: f,
        containerStyle: h,
        getPermissions: function (e) {
          return a.permissionsMap[e] || [];
        },
        getCardStyle: function (e) {
          var r = a.cardList.length,
            n = a.cardList[e],
            t = s.value.indexOf(n.cardType);
          return { zIndex: r - t, "--card-offset": r - 1 - t };
        },
        isTopCard: m,
        isBottomCard: function (e) {
          var r = a.cardList[e],
            n = s.value;
          return n[n.length - 1] === r.cardType;
        },
        handleCardClick: function (e) {
          if (!p.value) {
            var r = a.cardList[e];
            if (!a.expanded)
              return (p.value = !0), g(r.cardType), T(), void o("expand");
            m(e)
              ? ((p.value = !0),
                f.value === e
                  ? ((f.value = null),
                    C("trade.account.card_flip_click", {
                      card_type: r.cardType,
                      direction: "back_to_front",
                    }))
                  : ((f.value = e),
                    C("trade.account.card_flip_click", {
                      card_type: r.cardType,
                      direction: "front_to_back",
                    })),
                T())
              : ((p.value = !0), g(r.cardType), T());
          }
        },
        handleCardOpen: function (e, r) {
          C("trade.account.card_open_click", { card_type: r }), o("open", e, r);
        },
      };
    },
  });
Array || r.resolveComponent("ShareholderCard")();
var o = r._export_sfc(i, [
  [
    "render",
    function (e, n, a, t, c, i) {
      return {
        a: r.f(e.cardList, function (n, a, t) {
          return {
            a: r.o(function (r) {
              return e.handleCardClick(a);
            }, n.cardType),
            b: r.o(e.handleCardOpen, n.cardType),
            c: "f1d07982-0-" + t,
            d: r.p({
              card: n,
              permissions: e.getPermissions(n.cardType),
              "is-flipped": e.flippedIndex === a,
              "show-shadow": !e.isBottomCard(a),
              "hide-info": e.hideInfo,
            }),
            e: n.cardType,
            f: r.s(e.getCardStyle(a)),
          };
        }),
        b: r.s(e.containerStyle),
      };
    },
  ],
  ["__scopeId", "data-v-f1d07982"],
]);
wx.createComponent(o);
