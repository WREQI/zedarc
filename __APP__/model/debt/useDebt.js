var e = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/defineProperty"),
  a = require("../../cgi/debt.js"),
  o = require("../../cgi/trade.js"),
  c = require("../../common/components/Dialog/index.js"),
  u = require("../../common/vendor.js"),
  i = require("../../service/connect/index.js"),
  s = require("../../config/cgi.js"),
  l = require("../../config/enum.js"),
  _ = require("../../components/Password/index.js"),
  d = require("../trade/debtConfig.js"),
  p = require("../common/useServerTime.js"),
  v = require("../../service/aegis/platform/not-wujie.js"),
  f = require("../../service/auth/auth.js"),
  m = require("../../service/auth/auth.type.js"),
  h = require("../../service/connect/maps.js"),
  E = { DOT: "...", BREAK: "-" },
  T = { ALLDEBT: 0, HISTORY: 1, 0: "ALLDEBT", 1: "HISTORY" },
  x = !0,
  A = !1;
(exports.PLACEHOLDER = E),
  (exports.TAB_TYPE = T),
  (exports.useDebt = function () {
    var g,
      R,
      S,
      b,
      k,
      C,
      D = u.ref(0),
      y = u.ref(0),
      q = u.ref([]),
      O = u.ref([]),
      j = null == (R = u.getCurrentInstance()) ? void 0 : R.proxy,
      w = u.reactive({ holdIncome: E.DOT, canTrade: E.DOT, holdVal: E.DOT }),
      I = u.ref([]),
      N = u.ref((n((g = {}), l.MARKET.SA, ""), n(g, l.MARKET.HA, ""), g)),
      P = u.ref(""),
      B = u.ref(""),
      H = u.ref({}),
      K = u.computed(function () {
        return O.value.concat(q.value);
      });
    function M(e, r, t, n) {
      var a,
        o =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1e5,
        c = u.__CJS__export_div__(
          u.__CJS__export_div__(
            u.__CJS__export_mul__(u.__CJS__export_mul__(+e, +r), +o),
            365
          ),
          100
        ),
        i = (null == (a = d.debtConfig[t]) ? void 0 : a.rate) || 0,
        s = u.__CJS__export_div__(u.__CJS__export_mul__(o, i), 1e4);
      return u.__CJS__export_reduce__(c, s);
    }
    return {
      fundsInfo: w,
      alldebt: I,
      orderList: K,
      revoking: H,
      debtPermission: N,
      szShareHolderCode: P,
      shShareHolderCode: B,
      queryFundsInfo:
        ((C = t(
          r().mark(function e() {
            var t;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        a.debtApi.fetchRepoTradeQry({ type: "1" })
                      );
                    case 3:
                      (t = e.sent),
                        (w.holdIncome = t.hold_income),
                        (w.canTrade = t.can_trade),
                        (w.holdVal = Math.floor(
                          parseFloat(t.hold_val || "0")
                        ).toString()),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        c.Dialog({ message: e.t0.retmsg });
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )),
        function () {
          return C.apply(this, arguments);
        }),
      queryHistoryRecord:
        ((k = t(
          r().mark(function e() {
            var t, n;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (-1 !== D.value) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", Promise.resolve([]));
                    case 2:
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        a.debtApi.fetchRepoTradeQry({
                          type: "0",
                          page_size: 40,
                          page_num: D.value,
                          undue_num: 0 === D.value ? "" : y.value,
                        })
                      );
                    case 5:
                      if (
                        (((t = e.sent).list = (t.list || []).map(function (e) {
                          return (
                            (e._jsid = ""
                              .concat(
                                (e.trade_time || "").replace(/(\s+|:|-)/g, "")
                              )
                              .concat(e.contract_no, "T1")),
                            e
                          );
                        })),
                        (n = 0 === D.value ? t.list : q.value.concat(t.list)),
                        t.list.length < 40)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((q.value = n),
                        (D.value += 1),
                        (y.value = +t.undue_num),
                        t.list)
                      );
                    case 10:
                      (q.value = n),
                        (D.value = -1),
                        (y.value = 0),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(2)),
                        c.Dialog({ message: e.t0.retmsg });
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 13]]
            );
          })
        )),
        function () {
          return k.apply(this, arguments);
        }),
      queryRepoPermission:
        ((b = t(
          r().mark(function e() {
            var t, o, u, i, s, _, d, p;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        a.debtApi.qryRepoPermission()
                      );
                    case 3:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 6;
                        break;
                      }
                      e.t0 = {};
                    case 6:
                      (i = e.t0),
                        (s = i.sz_repo_status),
                        (_ = i.sh_repo_status),
                        (d = i.shareholdercards),
                        (p = void 0 === d ? [] : d),
                        (N.value =
                          (n((u = {}), l.MARKET.SA, "1" === s),
                          n(u, l.MARKET.HA, "1" === _),
                          u)),
                        (P.value =
                          (null ==
                          (t = p.find(function (e) {
                            return e.market === l.MARKET.SA;
                          }))
                            ? void 0
                            : t.code) || ""),
                        (B.value =
                          (null ==
                          (o = p.find(function (e) {
                            return e.market === l.MARKET.HA;
                          }))
                            ? void 0
                            : o.code) || ""),
                        (e.next = 17);
                      break;
                    case 14:
                      (e.prev = 14),
                        (e.t1 = e.catch(0)),
                        c.Dialog({ message: e.t1.retmsg });
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 14]]
            );
          })
        )),
        function () {
          return b.apply(this, arguments);
        }),
      connect: function () {
        var e,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        i.connector({
          source: i.SOURCE.AJAX,
          scheme:
            r === T.HISTORY
              ? [h.SCHEME.DEBT_INDEX_RECORDS]
              : [h.SCHEME.DEBT_INDEX_HQ],
          beforeRequest: n({}, s.API_TRADE_QUERY, function (e) {
            e.istiming = x ? 0 : 1;
          }),
          data:
            ((e = {}),
            n(e, s.API_REPOINFO, function (e) {
              try {
                (I.value = e.stock),
                  I.value.map(function (e) {
                    (e.repo_array = JSON.parse(e.repo_array)),
                      e.repo_array.map(function (r) {
                        r.expected_income = M(
                          e.earn_days,
                          r.income_rate,
                          r.code,
                          r.market
                        );
                      });
                  });
              } catch (e) {
                throw new Error("specialfy a none-existed view status");
              }
            }),
            n(e, s.API_TRADE_QUERY, function (e) {
              var r = {};
              (e.list = (e.list || []).map(function (e) {
                var t = ""
                  .concat(
                    (e.trade_time || "").replace(/(\s+|:|-)/g, "").slice(0, -6)
                  )
                  .concat(e.contract_no, "T0");
                return (
                  (r[t] = !0),
                  (e._jsid = t),
                  (e._isToday = !0),
                  (e.order_rate = "".concat(+e.trade_rate || e.order_price)),
                  H.value[t] && (e.trade_state = l.TRADE_BASE_STATE.REVOKING),
                  e
                );
              })),
                A &&
                  O.value.forEach(function (t) {
                    r[t._jsid] || e.list.push(t);
                  }),
                (O.value = e.list),
                (x = !1),
                (A = !0);
            }),
            e),
        });
      },
      onRevoke:
        ((S = t(
          r().mark(function a(u) {
            var i, s, d, h, E, T, x, A;
            return r().wrap(
              function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      if (((a.prev = 0), !H.value[u._jsid])) {
                        a.next = 3;
                        break;
                      }
                      return a.abrupt("return");
                    case 3:
                      return (
                        (H.value = e(e({}, H.value), {}, n({}, u._jsid, !0))),
                        (h = u.market),
                        (a.next = 7),
                        p.useServerTime().getServerTime()
                      );
                    case 7:
                      return (
                        (E = a.sent),
                        (T = E.marketState),
                        (x = T[h]),
                        (a.next = 12),
                        (function (e) {
                          return new Promise(function (r) {
                            try {
                              if (e === l.MARKET_STATE.OPEN_AUCTION_NOT_CANCEL)
                                return void c.Dialog({
                                  message:
                                    "根据沪深交易所规则，9:20-9:25盘前集合竞价期间不可撤单",
                                  showCancelButton: !0,
                                  cancelButtonText: "继续撤单",
                                  confirmButtonText: "我知道了",
                                  onConfirm: function () {
                                    r(!1);
                                  },
                                  onCancel: function () {
                                    r(!0);
                                  },
                                });
                              r(!0);
                            } catch (e) {
                              r(!0);
                            }
                          });
                        })(x)
                      );
                    case 12:
                      if (a.sent) {
                        a.next = 14;
                        break;
                      }
                      return a.abrupt("return");
                    case 14:
                      return (
                        (A = (function () {
                          var e = t(
                            r().mark(function e() {
                              var t,
                                n = arguments;
                              return r().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            n.length > 0 && void 0 !== n[0]
                                              ? n[0]
                                              : ""),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          o.tradeCgi.cancel({
                                            token: t,
                                            id: u.id,
                                            no: u.contract_no,
                                            time: u.trade_time,
                                            market: u.market,
                                          })
                                        );
                                      case 4:
                                        O.value
                                          .concat(q.value)
                                          .map(function (e) {
                                            return (
                                              e.trade_time === u.trade_time &&
                                                e.contract_no ===
                                                  u.contract_no &&
                                                (x ===
                                                l.MARKET_STATE
                                                  .OPEN_AUCTION_NOT_CANCEL
                                                  ? (e.trade_state =
                                                      l.TRADE_BASE_STATE.REVOKING)
                                                  : (e.trade_state =
                                                      l.TRADE_BASE_STATE.REVOKED)),
                                              u
                                            );
                                          }),
                                          (e.next = 10);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(1)),
                                          c.Dialog({ message: e.t0.retmsg });
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[1, 7]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (a.next = 17),
                        o.tradeCgi.shouldCheckPassword()
                      );
                    case 17:
                      if ("1" !== a.sent.needcheck) {
                        a.next = 23;
                        break;
                      }
                      f.Auth({
                        biometricsScene: m.BiometricsScene.DEBT_TRADE_CANCEL,
                        context: j,
                        theme: _.THEME.TRADE,
                        isTrade: !0,
                        showErrorWithNotice: !1,
                        onSuccess: (function () {
                          var e = t(
                            r().mark(function e(t) {
                              var n;
                              return r().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (n = t.encodePwd), (e.next = 3), A(n)
                                      );
                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (r) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      }),
                        (a.next = 25);
                      break;
                    case 23:
                      return (a.next = 25), A();
                    case 25:
                      a.next = 30;
                      break;
                    case 27:
                      (a.prev = 27),
                        (a.t0 = a.catch(0)),
                        null ==
                          (d =
                            null ==
                            (s = null == (i = v.aegisReporter) ? void 0 : i.sdk)
                              ? void 0
                              : s.error) ||
                          d.call(s, {
                            msg: "Debt cancel order error",
                            ext2: JSON.stringify(a.t0),
                            trace: "trace",
                          });
                    case 30:
                      return (
                        (a.prev = 30),
                        (H.value = e(e({}, H.value), {}, n({}, u._jsid, !1))),
                        a.finish(30)
                      );
                    case 33:
                    case "end":
                      return a.stop();
                  }
              },
              a,
              null,
              [[0, 27, 30, 33]]
            );
          })
        )),
        function (e) {
          return S.apply(this, arguments);
        }),
      getExpectedIncome: M,
    };
  });
