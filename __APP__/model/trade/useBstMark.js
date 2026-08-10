require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../@babel/runtime/helpers/defineProperty"),
  n = require("../../@babel/runtime/helpers/objectSpread2"),
  a = require("../../common/vendor.js"),
  s = require("../../cgi/stockbst.js"),
  u = require("../../cgi/account.js");
require("../../service/broker.js");
var i = require("../../service/stat/mp-weixin.js"),
  c = require("../../utils/getPlatform.js");
require("../../service/sdk/lib/api.js"),
  require("../../service/sdk/platform/mp-weixin.js"),
  require("../../utils/index.js");
var o = require("../../service/cookie/mp-weixin.js"),
  b = require("../../config/key.js"),
  _ = require("../../config/broker/11100/index.js"),
  p = new o.AdapterCookie(),
  T = { GET_BST_SETTING: "GET_BST_SETTING", GET_BST_MARK: "GET_BST_MARK" },
  d = "MINUTE",
  S = "DAY",
  f = "FIVEDAY";
exports.useBstMark = function () {
  var o,
    l,
    x,
    v = a.ref(!1),
    k = a.ref(!1),
    g = a.ref(!1),
    E = _.brokerConfig.trade.bst,
    h = void 0 === E ? {} : E,
    m = a.computed(function () {
      var e,
        t,
        r = c.getPlatform(),
        n = r.isZxg,
        s = r.bizPlatformVer;
      return (
        !(!n || !a.lt(s, "9.1")) ||
        (null ==
        (t =
          null == (e = _.brokerConfig.dictionary.Enties) ? void 0 : e.bstmark)
          ? void 0
          : t.hidden)
      );
    });
  function B(e, t, s, u) {
    var i = u,
      c = a.index.getStorageSync(P(b.BST_TRADE_RECORD_CACHE)) || {},
      o = "".concat(t, "_").concat(s);
    c[e] &&
      c[e][o] &&
      c[e][o].data &&
      c[e][o].data.length > 0 &&
      ((c[e][o].updateTime = Date.now()), (i = !0));
    var _ = c[e] || {},
      p = i ? [{ bst_exist: "1" }] : [];
    _[o] = { updateTime: Date.now(), data: p };
    var T = {};
    Object.keys(_).forEach(function (e) {
      var t = _[e];
      Date.now() - t.updateTime <= 864e5 && (T[e] = t);
    }),
      a.index.setStorageSync(
        P(b.BST_TRADE_RECORD_CACHE),
        n(n({}, c), {}, r({}, e, T))
      );
  }
  function Y(e, t, r) {
    return C.apply(this, arguments);
  }
  function C() {
    return (C = t(
      e().mark(function t(r, n, u) {
        var i, c, o, _, p, T, d, S, f;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((i = "".concat(n, "_").concat(u)),
                  !(c =
                    (a.index.getStorageSync(P(b.BST_TRADE_RECORD_CACHE)) || {})[
                      r
                    ] || {})[i])
                ) {
                  e.next = 7;
                  break;
                }
                if (
                  ((o = c[i]),
                  (_ = o.data),
                  (p = void 0 === _ ? [] : _),
                  (T = o.updateTime),
                  !(p.length > 0))
                ) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return", p);
              case 5:
                if (!T || !a.dayjs().isSame(T, "day")) {
                  e.next = 7;
                  break;
                }
                return e.abrupt("return", p);
              case 7:
                return (
                  (e.next = 9),
                  w({
                    stock_code: n,
                    market: u,
                    qry_item: s.BST_QRY_TYPE.HAS_BST,
                  })
                );
              case 9:
                if ((d = e.sent)) {
                  e.next = 12;
                  break;
                }
                return e.abrupt("return", []);
              case 12:
                return (
                  (S = d.bst_exist),
                  (f = "1" === S ? [{ bst_exist: "1" }] : []),
                  e.abrupt("return", (B(r, n, u, "1" === S), f))
                );
              case 14:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )).apply(this, arguments);
  }
  function y() {
    return R.apply(this, arguments);
  }
  function R() {
    return (R = t(
      e().mark(function t() {
        var r,
          n,
          u,
          i,
          c,
          o,
          p = arguments;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((r = p.length > 0 && void 0 !== p[0] ? p[0] : {}),
                    (n = r.ignoreCahce),
                    (u = void 0 !== n && n),
                    !m.value)
                  ) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 4:
                  if (
                    ((i = (a.index.getStorageSync(P(b.BST_SWITCH_CACHE)) || {})[
                      _.brokerConfig.base.code
                    ]),
                    !(!u && i && Date.now() - i.update_time <= 6e4))
                  ) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    ((v.value = "1" === i.status), v.value)
                  );
                case 7:
                  return (e.prev = 7), (e.next = 10), s.bstCgi.getStatus();
                case 10:
                  return (
                    (c = e.sent),
                    (o = c.bst_status),
                    e.abrupt(
                      "return",
                      ((v.value = "1" === o),
                      D(_.brokerConfig.base.code, o),
                      v.value)
                    )
                  );
                case 15:
                  return (
                    (e.prev = 15), (e.t0 = e.catch(7)), e.abrupt("return", !1)
                  );
                case 18:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[7, 15]]
        );
      })
    )).apply(this, arguments);
  }
  function w(e) {
    return A.apply(this, arguments);
  }
  function A() {
    return (A = t(
      e().mark(function t(r) {
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), s.bstCgi.getBstMark(r);
                case 3:
                  return e.abrupt("return", e.sent);
                case 6:
                  return (e.prev = 6), (e.t0 = e.catch(0)), e.abrupt("return");
                case 9:
                case "end":
                  return e.stop();
              }
          },
          t,
          null,
          [[0, 6]]
        );
      })
    )).apply(this, arguments);
  }
  function P(e) {
    var t = p.get(b.SESSION_UIN);
    return t ? "".concat(e, "/").concat(t) : e;
  }
  function D(e, t) {
    var s = a.index.getStorageSync(P(b.BST_SWITCH_CACHE)) || {};
    a.index.setStorageSync(
      P(b.BST_SWITCH_CACHE),
      n(n({}, s), {}, r({}, e, { update_time: Date.now(), status: t }))
    );
  }
  function q(e, t, n) {
    var s = n[e],
      u = {};
    Object.keys(s).forEach(function (e) {
      var t = s[e];
      Date.now() - t.update_time <= 864e5 && (u[e] = t);
    }),
      a.index.setStorageSync(t, r({}, e, u));
  }
  function H(e, t) {
    var r = a.index.getStorageSync(t);
    r[e] && ((r[e] = {}), q(e, t, r));
  }
  return {
    bstHiddenConfig: m,
    bstOpen: v,
    bstSubmiting: k,
    showBstMarkDialog: g,
    getBstStatus:
      ((x = t(
        e().mark(function t(r) {
          var n;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (m.value) {
                      e.next = 11;
                      break;
                    }
                    return (e.prev = 1), (e.next = 4), s.bstCgi.getStatus();
                  case 4:
                    (n = e.sent),
                      (v.value = "1" === n.bst_status),
                      D(_.brokerConfig.base.code, n.bst_status),
                      (e.next = 11);
                    break;
                  case 8:
                    (e.prev = 8),
                      (e.t0 = e.catch(1)),
                      r &&
                        a.index.showToast({
                          title: e.t0.retmsg || "服务器繁忙,请稍后再试",
                          icon: "none",
                        });
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[1, 8]]
          );
        })
      )),
      function (e) {
        return x.apply(this, arguments);
      }),
    bstStatusSubmit:
      ((l = t(
        e().mark(function t() {
          var r,
            n = arguments;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = n.length > 0 && void 0 !== n[0] ? n[0] : "account"),
                      (k.value = !0),
                      (e.prev = 2),
                      (e.next = 5),
                      u.accountCgi.setUserSetting({
                        bstsetting: v.value ? "0" : "1",
                      })
                    );
                  case 5:
                    (v.value = !v.value),
                      v.value
                        ? (a.index.showToast({
                            title: "已开启，可前往成交股票详情页查看",
                            icon: "none",
                          }),
                          i.stat.click("trade.".concat(r, ".bst.open")))
                        : (a.index.showToast({ title: "已关闭", icon: "none" }),
                          i.stat.click("trade.account.bst.close"),
                          (g.value = !1)),
                      (e.next = 12);
                    break;
                  case 9:
                    (e.prev = 9),
                      (e.t0 = e.catch(2)),
                      a.index.showToast({
                        title: e.t0.retmsg || "服务器繁忙,请稍后再试",
                        icon: "none",
                      });
                  case 12:
                    return (e.prev = 12), (k.value = !1), e.finish(12);
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[2, 9, 12, 15]]
          );
        })
      )),
      function () {
        return l.apply(this, arguments);
      }),
    handleTradeBstMark:
      ((o = t(
        e().mark(function u(i) {
          var c, o, _, p;
          return e().wrap(function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  if (
                    ((o = (c = i || {}).action),
                    (_ = c.payload),
                    (p = void 0 === _ ? {} : _),
                    !o || !T[o])
                  ) {
                    u.next = 11;
                    break;
                  }
                  (u.t0 = o),
                    (u.next =
                      u.t0 === T.GET_BST_MARK
                        ? 5
                        : u.t0 === T.GET_BST_SETTING
                        ? 8
                        : 11);
                  break;
                case 5:
                  return (
                    (u.next = 7),
                    (function () {
                      var u = t(
                        e().mark(function t(u) {
                          var i,
                            c,
                            o,
                            _,
                            p,
                            T,
                            l,
                            x,
                            v,
                            k,
                            g,
                            E,
                            m,
                            C,
                            R,
                            A,
                            D,
                            O,
                            I,
                            j,
                            Q,
                            G,
                            M,
                            N,
                            U,
                            z,
                            K;
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((i = u.code),
                                    (c = u.market),
                                    (o = u.brokercode),
                                    (_ = u.size),
                                    (p = void 0 === _ ? 320 : _),
                                    (T = u.end),
                                    (l = u.type),
                                    (v = ""),
                                    (k =
                                      (x = void 0 === l ? S : l) === S
                                        ? b.BST_DAY_TYPE_CACHE
                                        : b.BST_MINTUE_TYPE_CACHE),
                                    (g = h.type),
                                    (E = void 0 === g ? [] : g),
                                    x !== S)
                                  ) {
                                    e.next = 9;
                                    break;
                                  }
                                  if (E.includes(S)) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return", []);
                                case 6:
                                  (v = s.BST_QRY_TYPE.HISTORY_BST),
                                    (e.next = 20);
                                  break;
                                case 9:
                                  if (x !== d) {
                                    e.next = 15;
                                    break;
                                  }
                                  if (E.includes(d)) {
                                    e.next = 12;
                                    break;
                                  }
                                  return e.abrupt("return", []);
                                case 12:
                                  (v = s.BST_QRY_TYPE.HISTORY_BST_SPEC),
                                    (e.next = 20);
                                  break;
                                case 15:
                                  if (x === f) {
                                    e.next = 17;
                                    break;
                                  }
                                  return e.abrupt("return", []);
                                case 17:
                                  if (E.includes(f)) {
                                    e.next = 19;
                                    break;
                                  }
                                  return e.abrupt("return", []);
                                case 19:
                                  v = s.BST_QRY_TYPE.HISTORY_BST_SPEC;
                                case 20:
                                  return (e.next = 22), y();
                                case 22:
                                  if (e.sent) {
                                    e.next = 32;
                                    break;
                                  }
                                  if ((H(o, P(k)), x !== S)) {
                                    e.next = 30;
                                    break;
                                  }
                                  return (e.next = 27), Y(o, i, c);
                                case 27:
                                  (e.t0 = e.sent), (e.next = 31);
                                  break;
                                case 30:
                                  e.t0 = [];
                                case 31:
                                  return e.abrupt("return", e.t0);
                                case 32:
                                  return (
                                    (m = a.index.getStorageSync(P(k)) || {})[
                                      o
                                    ] || (m[o] = {}),
                                    (C = m[o]["".concat(i, "_").concat(c)]),
                                    x === d
                                      ? (v = s.BST_QRY_TYPE.TODAY_BST_SPEC)
                                      : T ||
                                        (C &&
                                          Date.now() - C.update_time <= 288e5 &&
                                          (v =
                                            x === S
                                              ? s.BST_QRY_TYPE.QRY_TODAY_BST
                                              : s.BST_QRY_TYPE.TODAY_BST_SPEC)),
                                    (R = {
                                      size: p,
                                      end_date: T,
                                      stock_code: i,
                                      market: c,
                                      qry_item: v,
                                    }),
                                    (e.next = 39),
                                    w(R)
                                  );
                                case 39:
                                  if ((A = e.sent)) {
                                    e.next = 42;
                                    break;
                                  }
                                  return e.abrupt("return", []);
                                case 42:
                                  if (
                                    ((D = A.history_bst),
                                    (O = void 0 === D ? [] : D),
                                    (I = A.history_bst_spec),
                                    (j = void 0 === I ? [] : I),
                                    (Q = A.today_bst),
                                    (G = void 0 === Q ? [] : Q),
                                    (M = A.today_bst_spec),
                                    (N = void 0 === M ? [] : M),
                                    "0" !== A.bst_status ||
                                      (H(o, P(k)), x !== S))
                                  ) {
                                    e.next = 47;
                                    break;
                                  }
                                  return (e.next = 46), Y(o, i, c);
                                case 46:
                                  return e.abrupt("return", e.sent);
                                case 47:
                                  if (x !== d) {
                                    e.next = 49;
                                    break;
                                  }
                                  return e.abrupt(
                                    "return",
                                    (N.length > 0 && B(o, i, c, !0), N)
                                  );
                                case 49:
                                  if (
                                    v !== s.BST_QRY_TYPE.QRY_TODAY_BST &&
                                    v !== s.BST_QRY_TYPE.TODAY_BST_SPEC
                                  ) {
                                    e.next = 60;
                                    break;
                                  }
                                  if (
                                    ((U = x === S ? G : N),
                                    !((z = C.lists.concat(U)).length > 0))
                                  ) {
                                    e.next = 55;
                                    break;
                                  }
                                  B(o, i, c, !0), (e.next = 59);
                                  break;
                                case 55:
                                  if (x !== S) {
                                    e.next = 59;
                                    break;
                                  }
                                  return (e.next = 58), Y(o, i, c);
                                case 58:
                                  return e.abrupt("return", e.sent);
                                case 59:
                                  return e.abrupt("return", z);
                                case 60:
                                  if (
                                    ((K =
                                      v === s.BST_QRY_TYPE.HISTORY_BST ? O : j),
                                    T ||
                                      ((m[o] = n(
                                        n({}, m[o]),
                                        {},
                                        r({}, "".concat(i, "_").concat(c), {
                                          update_time: Date.now(),
                                          code_market: ""
                                            .concat(i, "_")
                                            .concat(c),
                                          lists: K,
                                        })
                                      )),
                                      q(o, P(k), m),
                                      v === s.BST_QRY_TYPE.HISTORY_BST &&
                                        (K = K.concat(G))),
                                    v === s.BST_QRY_TYPE.HISTORY_BST_SPEC &&
                                      ((K = K.concat(N)),
                                      T &&
                                        (K = K.filter(function (e) {
                                          return e.d === "".concat(T);
                                        }))),
                                    !(K.length > 0))
                                  ) {
                                    e.next = 64;
                                    break;
                                  }
                                  B(o, i, c, !0), (e.next = 68);
                                  break;
                                case 64:
                                  if (x !== S) {
                                    e.next = 68;
                                    break;
                                  }
                                  return (e.next = 67), Y(o, i, c);
                                case 67:
                                  return e.abrupt("return", e.sent);
                                case 68:
                                  return e.abrupt("return", K);
                                case 69:
                                case "end":
                                  return e.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return u.apply(this, arguments);
                      };
                    })()(p)
                  );
                case 7:
                  return u.abrupt("return", u.sent);
                case 8:
                  return (u.next = 10), y(p);
                case 10:
                  return u.abrupt("return", u.sent);
                case 11:
                case "end":
                  return u.stop();
              }
          }, u);
        })
      )),
      function (e) {
        return o.apply(this, arguments);
      }),
  };
};
