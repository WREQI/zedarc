var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes"),
  require("../../@babel/runtime/helpers/Objectvalues");
var r = require("../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../@babel/runtime/helpers/objectSpread2"),
  u = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var o = require("../../common/vendor.js"),
  a = require("../../config/enum.js");
require("../../service/broker.js");
var s = require("../../cgi/biz/permission.js"),
  E = require("../../service/aegis/platform/not-wujie.js"),
  i = require("../../stores/user/useUserinfo.js"),
  l = require("../../stores/user/marketEntry.js"),
  T = require("./permission/types.js"),
  c = require("./permission/constants.js"),
  _ = require("../../config/broker/11100/index.js");
exports.usePermission = function () {
  var A,
    N = o.storeToRefs(i.useUserinfoStore()).userinfo,
    v = o.ref([]),
    S = o.ref([]),
    d = o.ref([]),
    R = o.ref([]),
    O = o.ref([]),
    p = o.ref([]),
    P = o.ref([]),
    f = o.ref(c.PAGE_STATUS.loading),
    k = o.ref("");
  function M(e) {
    var t;
    return ((t = {}),
    u(t, T.OPEN_STATUS.OPENED, "已开通"),
    u(t, T.OPEN_STATUS.PARTIAL, "部分开通"),
    u(t, T.OPEN_STATUS.NOT_OPENED, "未开通"),
    t)[e];
  }
  function h(e) {
    var t = _.brokerConfig.dictionary.Enties,
      r = void 0 === t ? {} : t;
    return (
      !(e === c.RIGHT_NAME.bj.name && !l.isBjMarketEntry(N.value)) &&
      !(e === c.RIGHT_NAME.nq.name && !l.isNqMarketEntry(N.value)) &&
      !(e === c.RIGHT_NAME.ggt.name && !l.isGgtMarketEntry(N.value)) &&
      r[e] &&
      !r[e].hidden
    );
  }
  function m(e, t) {
    if (!e.length || !t) return {};
    var r = [],
      n = !0,
      u = !0,
      o = T.OPEN_STATUS.PARTIAL;
    return (
      e.forEach(function (e) {
        var o, s;
        "1" !== e["".concat(t, "_status")] && (n = !1),
          "1" === e["".concat(t, "_status")] && (u = !1),
          r.push({
            text: ""
              .concat(
                ((o = e.market || ""),
                (s = e.stockholder_code || ""),
                [a.MARKET.SA, a.MARKET.HA, a.MARKET.HK].includes(o)
                  ? s.startsWith("0")
                    ? c.MARKET_NAME[a.MARKET.SA]
                    : c.MARKET_NAME[a.MARKET.HA]
                  : c.MARKET_NAME[o] || ""),
                " "
              )
              .concat(e.stockholder_code),
            status:
              "1" === e["".concat(t, "_status")]
                ? T.OPEN_STATUS.OPENED
                : T.OPEN_STATUS.NOT_OPENED,
          });
      }),
      n ? (o = T.OPEN_STATUS.OPENED) : u && (o = T.OPEN_STATUS.NOT_OPENED),
      { detail: r, status: o, status_text: M(o) }
    );
  }
  function y() {
    var e;
    h(c.RIGHT_NAME.gem.name) &&
      0 !== (null == (e = v.value) ? void 0 : e.length) &&
      P.value.push(
        n(
          n({ key: c.RIGHT_NAME.gem.key }, m(v.value, c.RIGHT_NAME.gem.key)),
          {},
          { title: c.RIGHT_NAME.gem.title, openRoute: c.RIGHT_NAME.gem.route }
        )
      ),
      (function () {
        var e = [].concat(r(S.value), r(v.value));
        h(c.RIGHT_NAME.kzz.name) &&
          0 !== e.length &&
          P.value.push(
            n(
              n({ key: c.RIGHT_NAME.kzz.key }, m(e, c.RIGHT_NAME.kzz.key)),
              {},
              {
                title: c.RIGHT_NAME.kzz.title,
                openRoute: c.RIGHT_NAME.kzz.route,
              }
            )
          );
      })(),
      h(c.RIGHT_NAME.kc.name) &&
        0 !== S.value.length &&
        P.value.push(
          n(
            n({ key: c.RIGHT_NAME.kc.key }, m(S.value, c.RIGHT_NAME.kc.key)),
            {},
            { title: c.RIGHT_NAME.kc.title, openRoute: c.RIGHT_NAME.kc.route }
          )
        ),
      h(c.RIGHT_NAME.kcGrow.name) &&
        0 !== S.value.length &&
        P.value.push(
          n(
            n(
              { key: c.RIGHT_NAME.kcGrow.key },
              m(S.value, c.RIGHT_NAME.kcGrow.key)
            ),
            {},
            {
              title: c.RIGHT_NAME.kcGrow.title,
              openRoute: c.RIGHT_NAME.kcGrow.route,
            }
          )
        ),
      (function () {
        var e = [].concat(r(S.value), r(v.value));
        h(c.RIGHT_NAME.repo.name) &&
          0 !== e.length &&
          P.value.push(
            n(
              n({ key: c.RIGHT_NAME.repo.key }, m(e, c.RIGHT_NAME.repo.key)),
              {},
              {
                title: c.RIGHT_NAME.repo.title,
                openRoute: c.RIGHT_NAME.repo.route,
              }
            )
          );
      })(),
      (function () {
        var e = [].concat(r(S.value), r(v.value));
        h(c.RIGHT_NAME.st.name) &&
          0 !== e.length &&
          P.value.push(
            n(
              n({ key: c.RIGHT_NAME.st.key }, m(e, c.RIGHT_NAME.st.key)),
              {},
              { title: c.RIGHT_NAME.st.title, openRoute: c.RIGHT_NAME.st.route }
            )
          );
      })(),
      h(c.RIGHT_NAME.bj.name) &&
        (0 === O.value.length &&
          O.value.push({
            bj_status: "0",
            market: a.MARKET.BJ,
            stockholder_code: "",
          }),
        P.value.push(
          n(
            n({ key: c.RIGHT_NAME.bj.key }, m(O.value, c.RIGHT_NAME.bj.key)),
            {},
            { title: c.RIGHT_NAME.bj.title, openRoute: c.RIGHT_NAME.bj.route }
          )
        )),
      (function () {
        var e, t, r, u;
        h(c.RIGHT_NAME.ggt.name) &&
          ((R.value.length > 1 || d.value.length > 1) &&
            E.aegisReporter.reportEvent("MONITOR-MULTI-GGT-HOLDER", {
              ext4: "sh:".concat(R.value.length, ";sz:").concat(d.value.length),
            }),
          0 === R.value.length &&
            R.value.push({
              ggt_status: "0",
              market: a.MARKET.HK,
              stockholder_code:
                (null == (t = null == (e = S.value) ? void 0 : e[0])
                  ? void 0
                  : t.stockholder_code) || "",
            }),
          0 === d.value.length &&
            d.value.push({
              ggt_status: "0",
              market: a.MARKET.HK,
              stockholder_code:
                (null == (u = null == (r = v.value) ? void 0 : r[0])
                  ? void 0
                  : u.stockholder_code) || "",
            }),
          P.value.push(
            n(
              n(
                { key: c.RIGHT_NAME.ggt.key },
                m([R.value[0], d.value[0]], c.RIGHT_NAME.ggt.key)
              ),
              {},
              {
                title: c.RIGHT_NAME.ggt.title,
                openRoute: c.RIGHT_NAME.ggt.route,
              }
            )
          ));
      })(),
      h(c.RIGHT_NAME.nq.name) &&
        (0 === p.value.length &&
          p.value.push({
            gz_status: "0",
            market: a.MARKET.NQ,
            stockholder_code: "",
          }),
        P.value.push(
          n(
            n({ key: c.RIGHT_NAME.nq.key }, m(p.value, c.RIGHT_NAME.nq.key)),
            {},
            { title: c.RIGHT_NAME.nq.title, openRoute: c.RIGHT_NAME.nq.route }
          )
        ));
  }
  var g = {
      sh: function () {
        return S.value[0];
      },
      sz: function () {
        return v.value[0];
      },
      hgt: function () {
        return R.value[0];
      },
      sgt: function () {
        return d.value[0];
      },
      bj: function () {
        return O.value[0] || p.value[0];
      },
    },
    I = {
      bj: function () {
        return O.value[0];
      },
      nq: function () {
        return p.value[0];
      },
    };
  function G(e, t) {
    var r = t || {};
    if (e.funcKey && e.statusField && h(e.funcKey)) {
      var n = String(r[e.statusField] || "");
      return n === T.OPEN_STATUS.OPENED
        ? T.OPEN_STATUS.OPENED
        : n === T.OPEN_STATUS.PARTIAL
        ? T.OPEN_STATUS.PARTIAL
        : T.OPEN_STATUS.NOT_OPENED;
    }
    return t && t.stockholder_code
      ? T.OPEN_STATUS.OPENED
      : T.OPEN_STATUS.NOT_OPENED;
  }
  var H = o.computed(function () {
      var e = {};
      return (
        Object.values(T.CardType).forEach(function (t) {
          var r = c.CARD_PERMISSIONS[t].map(function (e) {
            var r = (function (e, t) {
              var r;
              return "bj" === e && t && I[t]
                ? I[t]()
                : null == (r = g[e])
                ? void 0
                : r.call(g);
            })(t, e.key);
            return { key: e.key, title: e.title, status: G(e, r) };
          });
          e[t] = r.sort(function (e, t) {
            return e.status === T.OPEN_STATUS.OPENED &&
              t.status !== T.OPEN_STATUS.OPENED
              ? -1
              : e.status !== T.OPEN_STATUS.OPENED &&
                t.status === T.OPEN_STATUS.OPENED
              ? 1
              : 0;
          });
        }),
        e
      );
    }),
    U = o.computed(function () {
      if (f.value === c.PAGE_STATUS.loading) return [];
      var e = [],
        t = S.value[0];
      e.push({
        cardType: T.CardType.SH,
        market: a.MARKET.HA,
        stockholderCode: (null == t ? void 0 : t.stockholder_code) || "",
        holderName: "",
        openRoute: (null == t ? void 0 : t.stockholder_code)
          ? void 0
          : c.CARD_OPEN_ROUTE_MAP.sh,
      });
      var r = v.value[0];
      if (
        (e.push({
          cardType: T.CardType.SZ,
          market: a.MARKET.SA,
          stockholderCode: (null == r ? void 0 : r.stockholder_code) || "",
          holderName: "",
          openRoute: (null == r ? void 0 : r.stockholder_code)
            ? void 0
            : c.CARD_OPEN_ROUTE_MAP.sz,
        }),
        h("ggt"))
      ) {
        var n = R.value.find(function (e) {
          return "1" === e.ggt_status;
        });
        e.push({
          cardType: T.CardType.HGT,
          market: a.MARKET.HK,
          stockholderCode: (null == n ? void 0 : n.stockholder_code) || "",
          holderName: "",
          openRoute: n ? void 0 : c.CARD_OPEN_ROUTE_MAP.hgt,
        });
      }
      if (h("ggt")) {
        var u = d.value.find(function (e) {
          return "1" === e.ggt_status;
        });
        e.push({
          cardType: T.CardType.SGT,
          market: a.MARKET.HK,
          stockholderCode: (null == u ? void 0 : u.stockholder_code) || "",
          holderName: "",
          openRoute: u ? void 0 : c.CARD_OPEN_ROUTE_MAP.sgt,
        });
      }
      if (h(c.RIGHT_NAME.bj.name) || h(c.RIGHT_NAME.nq.name)) {
        var o = O.value.some(function (e) {
            return "1" === e.bj_status;
          }),
          s = p.value.some(function (e) {
            return "1" === e.gz_status;
          }),
          E = O.value.find(function (e) {
            return "1" === e.bj_status;
          }),
          i = p.value.find(function (e) {
            return "1" === e.gz_status;
          });
        e.push({
          cardType: T.CardType.BJ,
          market: a.MARKET.BJ,
          stockholderCode:
            ((o || s) &&
              ((null == E ? void 0 : E.stockholder_code) ||
                (null == i ? void 0 : i.stockholder_code))) ||
            "",
          holderName: "",
          openRoute: o || s ? void 0 : c.CARD_OPEN_ROUTE_MAP.bj,
        });
      }
      return e;
    });
  function K(e) {
    return e === a.MARKET.SA
      ? v.value.length > 0
      : e === a.MARKET.HA
      ? S.value.length > 0
      : e === a.MARKET.BJ
      ? O.value.length > 0
      : e === a.MARKET.NQ
      ? p.value.length > 0
      : e === a.MARKET.HK && (R.value.length > 0 || d.value.length > 0);
  }
  function D(e) {
    return e === a.MARKET.SA
      ? v.value
      : e === a.MARKET.HA
      ? S.value
      : e === a.MARKET.BJ
      ? O.value
      : e === a.MARKET.NQ
      ? p.value
      : e === T.CardType.HGT
      ? R.value
      : e === T.CardType.SGT
      ? d.value
      : e === a.MARKET.HK
      ? [].concat(r(R.value), r(d.value))
      : [];
  }
  function b(e) {
    if (e === a.MARKET.SA) return v.value[0];
    if (e === a.MARKET.HA) return S.value[0];
    if (e === a.MARKET.BJ) return O.value[0];
    if (e === a.MARKET.NQ) return p.value[0];
    if (e === T.CardType.HGT) return R.value[0];
    if (e === T.CardType.SGT) return d.value[0];
    if (e === a.MARKET.HK) {
      var t = R.value.find(function (e) {
          return "1" === e.ggt_status;
        }),
        r = d.value.find(function (e) {
          return "1" === e.ggt_status;
        });
      return t || r || R.value[0] || d.value[0];
    }
  }
  function C(e, t) {
    if (!e || !t) return T.OPEN_STATUS.NOT_OPENED;
    var r = e[t];
    return r ? String(r) : T.OPEN_STATUS.NOT_OPENED;
  }
  function q(e) {
    var t = e.lightRule;
    switch (t.type) {
      case "always":
        return T.OPEN_STATUS.OPENED;
      case "shareholderCard":
        return (t.markets || []).some(function (e) {
          return K(e);
        })
          ? T.OPEN_STATUS.OPENED
          : T.OPEN_STATUS.NOT_OPENED;
      case "statusField":
        return "repo" !== e.key || h(c.RIGHT_NAME.repo.name)
          ? (t.statusFields || []).some(function (e) {
              var t = e.market,
                r = e.field;
              return C(b(t), r) === T.OPEN_STATUS.OPENED;
            })
            ? T.OPEN_STATUS.OPENED
            : T.OPEN_STATUS.NOT_OPENED
          : (t.statusFields || []).some(function (e) {
              return K(e.market);
            })
          ? T.OPEN_STATUS.OPENED
          : T.OPEN_STATUS.NOT_OPENED;
      case "kcGrow":
        return C(b(a.MARKET.HA), "kc_grow_status") === T.OPEN_STATUS.OPENED
          ? T.OPEN_STATUS.OPENED
          : T.OPEN_STATUS.NOT_OPENED;
      default:
        return T.OPEN_STATUS.NOT_OPENED;
    }
  }
  function j(e, t) {
    if (!e.includes(t)) {
      var r = e.indexOf(c.PERMISSION_KEY.ALL);
      -1 !== r ? e.splice(r, 0, t) : e.push(t);
    }
  }
  var z = o.computed(function () {
      return (function () {
        var e,
          t = r(
            (null == (e = _.brokerConfig.trade)
              ? void 0
              : e.permissionPanelKeys) || c.DEFAULT_PERMISSION_PANEL_KEYS
          );
        return (
          h(c.RIGHT_NAME.bj.name) && j(t, c.PERMISSION_KEY.BJ),
          h(c.RIGHT_NAME.nq.name) && j(t, c.PERMISSION_KEY.NQ),
          t
        );
      })()
        .map(function (e) {
          return c.PERMISSION_PANEL_META[e];
        })
        .filter(Boolean)
        .map(function (e) {
          var t =
            "main_board" === (null == e ? void 0 : e.key)
              ? (function () {
                  var e = K(a.MARKET.HA),
                    t = K(a.MARKET.SA);
                  return e && !t
                    ? "沪市主板"
                    : !e && t
                    ? "深市主板"
                    : "沪深主板";
                })()
              : null == e
              ? void 0
              : e.title;
          return {
            key: null == e ? void 0 : e.key,
            title: t,
            icon: null == e ? void 0 : e.icon,
            status: q(e),
          };
        });
    }),
    L = o.computed(function () {
      var e = b(a.MARKET.HA);
      return {
        keChuangOpened: C(e, "ke_chuang_status") === T.OPEN_STATUS.OPENED,
        kcGrowOpened: C(e, "kc_grow_status") === T.OPEN_STATUS.OPENED,
      };
    }),
    w = o.computed(function () {
      return p.value.some(function (e) {
        return !!e.stockholder_code;
      });
    });
  function Y(e) {
    var t,
      r,
      n =
        (null ==
        (r = null == (t = _.brokerConfig.dictionary) ? void 0 : t.Enties)
          ? void 0
          : r.shareholder) || {},
      u = !n.hidden && n.routeName ? n.routeName : "";
    return e === a.MARKET.SA || e === a.MARKET.HA
      ? u
      : e === a.MARKET.BJ || e === a.MARKET.NQ
      ? c.CARD_OPEN_ROUTE_MAP[T.CardType.BJ] || ""
      : e === T.CardType.HGT
      ? c.CARD_OPEN_ROUTE_MAP[T.CardType.HGT] || ""
      : (e === T.CardType.SGT && c.CARD_OPEN_ROUTE_MAP[T.CardType.SGT]) || "";
  }
  function B(e, t, r) {
    var n,
      u = null != r ? r : b(e.market),
      o = !!(null == u ? void 0 : u.stockholder_code);
    if (t.noOpenRequired)
      return o
        ? { status: T.OPEN_STATUS.OPENED, actionType: "trade", openRoute: "" }
        : {
            status: T.OPEN_STATUS.NOT_OPENED,
            actionType: "open",
            openRoute: Y(e.market),
          };
    if (e.funcKey && !h(e.funcKey))
      return "repo" === t.key
        ? o
          ? { status: T.OPEN_STATUS.OPENED, actionType: "trade", openRoute: "" }
          : {
              status: T.OPEN_STATUS.NOT_OPENED,
              actionType: "open",
              openRoute: Y(e.market),
            }
        : {
            status: T.OPEN_STATUS.NOT_OPENED,
            actionType: "open",
            openRoute: "",
          };
    if (e.statusField) {
      if (C(u, e.statusField) === T.OPEN_STATUS.OPENED)
        return {
          status: T.OPEN_STATUS.OPENED,
          actionType: "trade",
          openRoute: "",
        };
      if ("nq" === t.key) {
        var a =
            (null == (n = _.brokerConfig.dictionary) ? void 0 : n.Enties) || {},
          s =
            a.stocktransferAuth && !a.stocktransferAuth.hidden
              ? a.stocktransferAuth.routeName
              : "",
          E =
            a.stocktransfer && !a.stocktransfer.hidden
              ? a.stocktransfer.routeName
              : "";
        return o
          ? {
              status: T.OPEN_STATUS.NOT_OPENED,
              actionType: "open",
              openRoute: s,
            }
          : {
              status: T.OPEN_STATUS.NOT_OPENED,
              actionType: "open",
              openRoute: E,
            };
      }
      return o
        ? {
            status: T.OPEN_STATUS.NOT_OPENED,
            actionType: "open",
            openRoute: e.openRoute || "",
          }
        : {
            status: T.OPEN_STATUS.NOT_OPENED,
            actionType: "open",
            openRoute: Y(e.market) || e.openRoute || "",
          };
    }
    return o
      ? { status: T.OPEN_STATUS.OPENED, actionType: "trade", openRoute: "" }
      : {
          status: T.OPEN_STATUS.NOT_OPENED,
          actionType: "open",
          openRoute: Y(e.market),
        };
  }
  function Z(e) {
    return (
      !!e.noOpenRequired ||
      "repo" === e.key ||
      e.markets.some(function (e) {
        return !e.funcKey || h(e.funcKey);
      })
    );
  }
  var x,
    F = o.computed(function () {
      return f.value === c.PAGE_STATUS.loading
        ? []
        : c.QUERY_PERMISSION_CONFIGS.filter(Z).map(function (e) {
            var t,
              r = e.markets.flatMap(function (t) {
                var r = D(t.market);
                if (0 === r.length) {
                  var n = B(t, e, void 0),
                    u = n.status,
                    o = n.actionType,
                    a = n.openRoute;
                  return [
                    {
                      label: t.label,
                      stockholderCode: "",
                      status: u,
                      actionType: o,
                      openRoute: a,
                    },
                  ];
                }
                return r.map(function (r) {
                  var n = B(t, e, r),
                    u = n.status,
                    o = n.actionType,
                    a = n.openRoute;
                  return {
                    label: t.label,
                    stockholderCode: r.stockholder_code || "",
                    status: u,
                    actionType: o,
                    openRoute: a,
                  };
                });
              }),
              n = r.every(function (e) {
                return e.status === T.OPEN_STATUS.OPENED;
              }),
              u = r.every(function (e) {
                return e.status === T.OPEN_STATUS.NOT_OPENED;
              });
            return (
              (t = n
                ? T.OPEN_STATUS.OPENED
                : u
                ? T.OPEN_STATUS.NOT_OPENED
                : T.OPEN_STATUS.PARTIAL),
              {
                key: e.key,
                title: e.title,
                icon: e.icon,
                status: t,
                statusText: M(t),
                markets: r,
              }
            );
          });
    }),
    J =
      (u((A = {}), c.PERMISSION_KEY.SH_KZZ, "kzz"),
      u(A, c.PERMISSION_KEY.SZ_KZZ, "kzz"),
      u(A, c.PERMISSION_KEY.SH_ST, "st"),
      u(A, c.PERMISSION_KEY.SZ_ST, "st"),
      u(A, c.PERMISSION_KEY.HGT, "ggt"),
      u(A, c.PERMISSION_KEY.SGT, "ggt"),
      u(A, c.PERMISSION_KEY.SH_REITS, "main_board"),
      u(A, c.PERMISSION_KEY.SZ_REITS, "main_board"),
      u(A, c.PERMISSION_KEY.SZ_KZZ_DELISTING, "kzz"),
      A);
  function Q(e, t) {
    var r = (function (e) {
      var t = J[e] || e;
      return c.QUERY_PERMISSION_CONFIGS.find(function (e) {
        return e.key === t;
      });
    })(e);
    if (!r) return !1;
    var n = (function (e, t) {
      if (t) {
        var r = e.markets.find(function (e) {
          return e.market === t;
        });
        return r ? [r] : [];
      }
      return e.markets;
    })(r, t);
    return (
      0 !== n.length &&
      n.every(function (e) {
        var t = D(e.market);
        return 0 === t.length
          ? B(e, r, void 0).status === T.OPEN_STATUS.OPENED
          : t.every(function (t) {
              return B(e, r, t).status === T.OPEN_STATUS.OPENED;
            });
      })
    );
  }
  return {
    pageStatus: f,
    permissionList: P,
    initPermissionData:
      ((x = t(
        e().mark(function t() {
          var r, n, u, o, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      f.value !== c.PAGE_STATUS.ready &&
                        (f.value = c.PAGE_STATUS.loading),
                      (e.next = 4),
                      s.permissionCgi.queryAccountPermission({ action: "1" })
                    );
                  case 4:
                    (i = e.sent),
                      (k.value = ""),
                      (v.value = []),
                      (S.value = []),
                      (d.value = []),
                      (R.value = []),
                      (O.value = []),
                      (p.value = []),
                      (P.value = []),
                      (null == (r = null == i ? void 0 : i.account_list)
                        ? void 0
                        : r.length) > 0 &&
                        (i.account_list.forEach(function (e) {
                          var t, r, n;
                          switch (null == e ? void 0 : e.market) {
                            case a.MARKET.SA:
                              (null ==
                              (t = null == e ? void 0 : e.stockholder_code)
                                ? void 0
                                : t.startsWith("0")) &&
                                (v.value.push(e),
                                "1" === e.ggt_status && d.value.push(e));
                              break;
                            case a.MARKET.HA:
                              (null ==
                              (r = null == e ? void 0 : e.stockholder_code)
                                ? void 0
                                : r.startsWith("A")) &&
                                (S.value.push(e),
                                "1" === e.ggt_status && R.value.push(e));
                              break;
                            case a.MARKET.NQ:
                              p.value.push(e);
                              break;
                            case a.MARKET.BJ:
                              O.value.push(e);
                              break;
                            case a.MARKET.HK:
                              (
                                null ==
                                (n = null == e ? void 0 : e.stockholder_code)
                                  ? void 0
                                  : n.startsWith("0")
                              )
                                ? d.value.push(e)
                                : R.value.push(e);
                          }
                        }),
                        y()),
                      (f.value = c.PAGE_STATUS.ready),
                      (e.next = 11);
                    break;
                  case 8:
                    (e.prev = 8),
                      (e.t0 = e.catch(0)),
                      (null == e.t0 ? void 0 : e.t0.retmsg) &&
                        (k.value = e.t0.retmsg),
                      (f.value = c.PAGE_STATUS.error),
                      null ==
                        (o =
                          null ==
                          (u = null == (n = E.aegisReporter) ? void 0 : n.sdk)
                            ? void 0
                            : u.error) || o.call(u, e.t0);
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 8]]
          );
        })
      )),
      function () {
        return x.apply(this, arguments);
      }),
    OPEN_STATUS: T.OPEN_STATUS,
    PAGE_STATUS: c.PAGE_STATUS,
    errorTips: k,
    shareholderCardList: U,
    shareholderCardPermissionsMap: H,
    iconPermissionList: z,
    kcGrowStatus: L,
    hasNqHolder: w,
    queryPermissionList: F,
    isPermissionOpened: Q,
    filterUnopenedLinkage: function (e) {
      return e.filter(function (e) {
        return !Q(e.permissionKey, e.market);
      });
    },
  };
};
