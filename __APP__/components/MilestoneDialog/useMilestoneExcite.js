require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../app.js");
var a = require("../../common/vendor.js"),
  u = require("../../cgi/growExcite.js"),
  s = require("./constants.js"),
  o = require("../../bizs/asset/composables/useOperateAdv.js"),
  c = require("../../service/stat/mp-weixin.js"),
  l = require("../../config/key.js"),
  f = require("../../service/aegis/platform/not-wujie.js"),
  p = require("./calculateFirstProfit.js"),
  d = require("./permission/constants.js"),
  v = require("./permission/assemblePermissionStep.js"),
  m = require("../../model/biz/usePermission.js"),
  x = require("../../stores/user/useUserinfo.js"),
  _ = require("../../utils/getPlatform.js").getPlatform().isZxg,
  h = [
    s.ExciteType.OPEN_ACCOUNT,
    s.ExciteType.FIRST_DEPOSIT,
    s.ExciteType.FIRST_BUY,
    s.ExciteType.FIRST_PROFIT,
  ];
function E() {
  try {
    var e = a.index.getStorageSync(l.MILESTONE_SHOWN_EXCITES);
    return new Set(e ? JSON.parse(e) : []);
  } catch (e) {
    return new Set();
  }
}
function b(e) {
  if (0 !== e.length)
    try {
      var r,
        t = E(),
        u = i(e);
      try {
        for (u.s(); !(r = u.n()).done; ) {
          var s = r.value;
          t.add(s);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
      a.index.setStorageSync(l.MILESTONE_SHOWN_EXCITES, JSON.stringify(n(t)));
    } catch (e) {}
}
exports.useMilestoneExcite = function (n) {
  var l,
    g = n.allowTypes,
    I = n.disabled,
    k = n.operateAdvMap,
    y = m.usePermission(),
    T = x.useUserinfoStore(),
    S = a.computed(function () {
      return y.kcGrowStatus.value.keChuangOpened;
    }),
    O = a.computed(function () {
      return y.hasNqHolder.value;
    }),
    w = a.computed(function () {
      var e;
      return "1" === (null == (e = T.userinfo) ? void 0 : e.is_grow_excite);
    }),
    P = o.useOperateAdv(),
    C = a.computed(function () {
      return !(null == I ? void 0 : I.value) && !j.value;
    }),
    F = a.ref([]),
    N = a.ref([]),
    q = a.computed(function () {
      return N.value.length > 0 ? N.value[0] : null;
    }),
    R = a.ref(!1),
    j = a.ref(!1),
    A = null,
    L = a.computed(function () {
      return null !== q.value;
    }),
    U = a.computed(function () {
      var e;
      return null !== (e = null == k ? void 0 : k.value) && void 0 !== e
        ? e
        : P.advMap.value;
    });
  function D() {
    var e = E(),
      r = function (e, r) {
        return Number(r.order) - Number(e.order);
      },
      t = F.value.filter(function (r) {
        return (function (e, r) {
          if (d.isPermissionUnlockExciteId(e.excite_id)) return !1;
          if (!h.includes(e.excite_id)) return !1;
          if ("1" !== e.show_flag) return !1;
          var t = g.value;
          return !(
            (t.length > 0 && !t.includes(e.excite_id)) ||
            r.has(e.excite_id)
          );
        })(r, e);
      });
    return {
      soloItems: t
        .filter(function (e) {
          return s.SOLO_EXCITE_TYPES.has(e.excite_id);
        })
        .sort(r),
      carouselItems: t
        .filter(function (e) {
          return s.CAROUSEL_EXCITE_TYPES.has(e.excite_id);
        })
        .sort(r),
      permissionItems: F.value.filter(function (r) {
        return (function (e, r) {
          return (
            !!d.isPermissionUnlockExciteId(e.excite_id) &&
            !!d.getConfigByExciteId(e.excite_id) &&
            "1" === e.show_flag &&
            !r.has(e.excite_id)
          );
        })(r, e);
      }),
      shownSet: e,
    };
  }
  function M(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return e.reduce(function (e, r) {
      return Math.max(
        e,
        (function (e) {
          var r, t;
          if (d.isPermissionUnlockExciteId(e.excite_id))
            return d.resolvePermissionOrder(e.excite_id, e.order);
          if (null != e.order && "" !== String(e.order).trim()) {
            var n = Number(e.order);
            if (!Number.isNaN(n)) return n;
          }
          return null !==
            (r =
              null == (t = s.EXCITE_CONFIG[e.excite_id])
                ? void 0
                : t.defaultOrder) && void 0 !== r
            ? r
            : 0;
        })(r)
      );
    }, r);
  }
  function X(e, r) {
    return G.apply(this, arguments);
  }
  function G() {
    return (G = t(
      r().mark(function n(a, o) {
        return r().wrap(function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (F.value = a.items || []),
                  (n.next = 3),
                  (function () {
                    var n = t(
                      r().mark(function t(n, i) {
                        var a, o, c, l, d, v, m, x, _, h, E, b, I, k, y, T;
                        return r().wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  if (((m = g.value), w.value)) {
                                    r.next = 3;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 3:
                                  if (
                                    !(m.length > 0) ||
                                    m.includes(s.ExciteType.FIRST_PROFIT)
                                  ) {
                                    r.next = 5;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 5:
                                  if (i && 0 !== i.length) {
                                    r.next = 7;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 7:
                                  if ("0" === String(n.isFinishFirstProfit)) {
                                    r.next = 9;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 9:
                                  if (
                                    ((x = D()),
                                    (_ = x.soloItems),
                                    (h = x.carouselItems),
                                    (E = x.permissionItems),
                                    !x.shownSet.has(s.ExciteType.FIRST_PROFIT))
                                  ) {
                                    r.next = 12;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 12:
                                  if (
                                    (function (e, r, t, n) {
                                      var i = M(t, e);
                                      return i > M(r) && i >= M(n);
                                    })(
                                      null !==
                                        (a =
                                          null ==
                                          (c =
                                            s.EXCITE_CONFIG[
                                              s.ExciteType.FIRST_PROFIT
                                            ])
                                            ? void 0
                                            : c.defaultOrder) && void 0 !== a
                                        ? a
                                        : 0,
                                      _,
                                      h,
                                      E
                                    )
                                  ) {
                                    r.next = 14;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 14:
                                  if (
                                    ((b = i.map(function (r) {
                                      return e({}, r);
                                    })),
                                    (I = p.calculateFirstProfit(b)))
                                  ) {
                                    r.next = 17;
                                    break;
                                  }
                                  return r.abrupt("return");
                                case 17:
                                  return (
                                    (k = String(
                                      null !==
                                        (o =
                                          null ==
                                          (l =
                                            s.EXCITE_CONFIG[
                                              s.ExciteType.FIRST_PROFIT
                                            ])
                                            ? void 0
                                            : l.defaultOrder) && void 0 !== o
                                        ? o
                                        : 0
                                    )),
                                    (r.prev = 18),
                                    (r.next = 21),
                                    u.growExciteAPI.confirmExciteFinish(
                                      s.ExciteType.FIRST_PROFIT,
                                      {
                                        first_profit_stock_code: I.stockCode,
                                        first_profit_stock_name: I.stockName,
                                        first_profit_stock_cls: I.stockCls,
                                        first_profit_trade_market:
                                          I.tradeMarket,
                                        first_profit_earn_value: I.earnAmount,
                                        first_profit_earn_value_day:
                                          I.earnAmountDay,
                                        first_profit_time: I.firstProfitTime,
                                      }
                                    )
                                  );
                                case 21:
                                  if (((r.t0 = r.sent), r.t0)) {
                                    r.next = 24;
                                    break;
                                  }
                                  r.t0 = {};
                                case 24:
                                  (y = r.t0),
                                    (T = y.excite_order),
                                    (k = null != T ? T : k),
                                    (r.next = 32);
                                  break;
                                case 29:
                                  return (
                                    (r.prev = 29),
                                    (r.t1 = r.catch(18)),
                                    r.abrupt(
                                      "return",
                                      void (
                                        null ==
                                          (v =
                                            null == (d = f.aegisReporter)
                                              ? void 0
                                              : d.reportEvent) ||
                                        v.call(
                                          d,
                                          "confirmExciteFinish_failed",
                                          { ext4: JSON.stringify(r.t1) }
                                        )
                                      )
                                    )
                                  );
                                case 32:
                                  F.value.push({
                                    excite_id: s.ExciteType.FIRST_PROFIT,
                                    description: "首次盈利",
                                    order: k,
                                    show_flag: "1",
                                    stock_name: I.stockName,
                                    stock_code: I.stockCode,
                                    stock_cls: I.stockCls,
                                    market: I.tradeMarket,
                                    earn_value: I.earnAmount,
                                    earn_value_day: I.earnAmountDay,
                                    time: I.firstProfitTime,
                                  });
                                case 33:
                                case "end":
                                  return r.stop();
                              }
                          },
                          t,
                          null,
                          [[18, 29]]
                        );
                      })
                    );
                    return function (e, r) {
                      return n.apply(this, arguments);
                    };
                  })()(a, o)
                );
              case 3:
                return (
                  (n.next = 5),
                  t(
                    r().mark(function e() {
                      var t, n, a, u, s, o, c, l, p, d, m;
                      return r().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (a = []),
                                  (u = D()),
                                  (s = u.soloItems),
                                  (o = u.carouselItems),
                                  (c = u.permissionItems),
                                  (l = i(s));
                                try {
                                  for (l.s(); !(p = l.n()).done; )
                                    (d = p.value),
                                      a.push({
                                        mode: "solo",
                                        items: [d],
                                        priority: Number(d.order),
                                      });
                                } catch (e) {
                                  l.e(e);
                                } finally {
                                  l.f();
                                }
                                if (
                                  (o.length > 0 &&
                                    a.push({
                                      mode: "carousel",
                                      items: o,
                                      priority: Number(o[0].order),
                                    }),
                                  !(function (e, r, t) {
                                    if (0 === t.length) return !1;
                                    var n = M(t);
                                    return n > M(e) && n > M(r);
                                  })(s, o, c))
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.prev = 5),
                                  (e.next = 8),
                                  y.initPermissionData()
                                );
                              case 8:
                                return (
                                  (e.next = 10),
                                  v.assemblePermissionStep(
                                    c,
                                    y.filterUnopenedLinkage
                                  )
                                );
                              case 10:
                                (m = e.sent) &&
                                  m.permissionCards.length > 0 &&
                                  a.push({
                                    mode: "permission",
                                    items: c,
                                    priority: m.priority,
                                    permissionCards: m.permissionCards,
                                  }),
                                  (e.next = 17);
                                break;
                              case 14:
                                (e.prev = 14),
                                  (e.t0 = e.catch(5)),
                                  null ==
                                    (n =
                                      null == (t = f.aegisReporter)
                                        ? void 0
                                        : t.reportEvent) ||
                                    n.call(
                                      t,
                                      "permission_step_assemble_failed",
                                      { ext4: JSON.stringify(e.t0) }
                                    );
                              case 17:
                                a.sort(function (e, r) {
                                  return r.priority - e.priority;
                                }),
                                  (N.value = a);
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[5, 14]]
                      );
                    })
                  )()
                );
              case 5:
              case "end":
                return n.stop();
            }
        }, n);
      })
    )).apply(this, arguments);
  }
  function J(e, r) {
    var t,
      n = "trade.milestone.excite_".concat(e);
    null == (t = c.stat) || t.click(n, void 0, void 0, { excite_id: r });
  }
  function H(e) {
    return Y.apply(this, arguments);
  }
  function Y() {
    return (Y = t(
      r().mark(function e(t) {
        var n, i;
        return r().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (0 === t.length) {
                    e.next = 9;
                    break;
                  }
                  return (
                    (e.prev = 1),
                    (e.next = 4),
                    u.growExciteAPI.confirmExciteShow(t)
                  );
                case 4:
                  e.next = 9;
                  break;
                case 6:
                  (e.prev = 6),
                    (e.t0 = e.catch(1)),
                    null ==
                      (i =
                        null == (n = f.aegisReporter)
                          ? void 0
                          : n.reportEvent) ||
                      i.call(n, "confirmExciteInfo_failed", {
                        ext4: JSON.stringify(e.t0),
                      });
                case 9:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[1, 6]]
        );
      })
    )).apply(this, arguments);
  }
  return (
    a.onUnmounted(function () {
      (N.value = []), (R.value = !1), A && (clearTimeout(A), (A = null));
    }),
    {
      exciteList: F,
      currentStep: q,
      hasExciteShowing: L,
      isClosing: R,
      isLoading: j,
      canTriggerExcite: C,
      advMap: U,
      navigate: P.navigate,
      fetchExciteInfo:
        ((l = t(
          r().mark(function e() {
            var n,
              i,
              a,
              o,
              c,
              l,
              p,
              d,
              v,
              m,
              x,
              _,
              h,
              E = arguments;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = E.length > 0 && void 0 !== E[0] ? E[0] : {}),
                        (o = n.useExternalData),
                        (c = void 0 !== o && o),
                        (l = n.exciteData),
                        (p = void 0 === l ? null : l),
                        (d = n.positionData),
                        (null == I ? void 0 : I.value) || j.value)
                      ) {
                        e.next = 33;
                        break;
                      }
                      if (!c) {
                        e.next = 12;
                        break;
                      }
                      if (!p) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 7), X(p, d);
                    case 7:
                      (e.t0 = void e.sent), (e.next = 11);
                      break;
                    case 10:
                      e.t0 = ((F.value = []), void (N.value = []));
                    case 11:
                      return e.abrupt("return", e.t0);
                    case 12:
                      return (
                        (j.value = !0),
                        (e.prev = 13),
                        (m = g.value.length > 0 ? g.value : void 0),
                        (e.next = 17),
                        u.growExciteAPI.queryExciteInfo(m)
                      );
                    case 17:
                      if (
                        ((x = e.sent),
                        (_ = {
                          items:
                            null !== (v = (h = x).excite_info) && void 0 !== v
                              ? v
                              : [],
                          isFinishFirstProfit: h.is_finish_first_profit,
                        }),
                        (e.t1 = _.items.length > 0),
                        !e.t1)
                      ) {
                        e.next = 23;
                        break;
                      }
                      return (
                        (e.next = 23),
                        t(
                          r().mark(function e() {
                            var t;
                            return r().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (!k) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 2:
                                    if (
                                      ((t =
                                        g.value.length > 0
                                          ? g.value
                                              .map(function (e) {
                                                var r;
                                                return null ==
                                                  (r = s.EXCITE_CONFIG[e])
                                                  ? void 0
                                                  : r.delyId;
                                              })
                                              .filter(function (e) {
                                                return !!e;
                                              })
                                          : s.ALL_EXCITE_DELY_IDS),
                                      (e.t0 = 0 !== t.length),
                                      !e.t0)
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (e.next = 7), P.fetchAll(t);
                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )()
                      );
                    case 23:
                      return (e.next = 25), X(_, d);
                    case 25:
                      e.next = 30;
                      break;
                    case 27:
                      (e.prev = 27),
                        (e.t2 = e.catch(13)),
                        null ==
                          (a =
                            null == (i = f.aegisReporter)
                              ? void 0
                              : i.reportEvent) ||
                          a.call(i, "fetchExciteInfo_failed", {
                            ext4: JSON.stringify(e.t2),
                          });
                    case 30:
                      return (e.prev = 30), (j.value = !1), e.finish(30);
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[13, 27, 30, 33]]
            );
          })
        )),
        function () {
          return l.apply(this, arguments);
        }),
      handleExposed: function () {
        var e = q.value;
        if (e) {
          var r,
            t = [],
            n = i(e.items);
          try {
            for (n.s(); !(r = n.n()).done; ) {
              var a = r.value;
              J("brow", a.excite_id), t.push(a.excite_id);
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
          _ || (b(t), H(t));
        }
      },
      handleClose: function (e) {
        if (!R.value) {
          var r = q.value;
          if (r) {
            var t,
              n = [],
              a = i(r.items);
            try {
              for (a.s(); !(t = a.n()).done; ) {
                var u = t.value;
                J("close", u.excite_id), n.push(u.excite_id);
              }
            } catch (e) {
              a.e(e);
            } finally {
              a.f();
            }
            _ && (b(n), H(n)),
              (R.value = !0),
              A && (clearTimeout(A), (A = null)),
              (A = setTimeout(function () {
                (N.value = []), (R.value = !1), null == e || e();
              }, 167));
          }
        }
      },
      isKeChuangOpened: S,
      hasNqHolder: O,
    }
  );
};
