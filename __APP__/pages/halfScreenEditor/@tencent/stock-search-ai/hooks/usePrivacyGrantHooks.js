require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, r) {
    return new Promise(function (t, a) {
      var u = function (e) {
          try {
            o(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            o(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(u, i);
        };
      o((r = r.apply(e, n)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  t = require("../utils/StockBridgeWrapper.js"),
  a = "stock-search-ai-history-privacy-cache";
exports.usePrivacyGrantHooks = function () {
  var u = this,
    i = function () {
      return r.StockBridge.ENV === r.EnvTypeEnum.SHY_NATIVE ? 1 : 16;
    },
    o = function () {
      return r.StockBridge.ENV === r.EnvTypeEnum.SHY_NATIVE ? "" : "zxg_xcx";
    },
    c = function () {
      var e;
      return r.StockBridge.ENV === r.EnvTypeEnum.MP ||
        "mpweapp" === r.ShellTypeEnum.SHY
        ? "wzq.tenpay.com"
        : "undefined" != typeof window &&
          window.location &&
          (null == (e = window.location.host)
            ? void 0
            : e.includes("tenpay.com"))
        ? window.location.host
        : "wzq.tenpay.com";
    },
    s = function () {
      return (
        "mpweapp" === r.ShellTypeEnum.ACT ||
        "mpweapp" === r.ShellTypeEnum.ACTYXZT
      );
    },
    l = function (a) {
      return n(
        u,
        null,
        e().mark(function n() {
          var u, s, l;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (u = i()),
                      (s = "https://"
                        .concat(
                          c(),
                          "/svr/user/user_service/get_user_agreement?channel="
                        )
                        .concat(u, "&scene=")
                        .concat(a)),
                      (e.prev = 1),
                      (e.next = 4),
                      t.StockBridge.request(
                        s,
                        "GET",
                        {},
                        { header: { "x-app": o() } }
                      )
                    );
                  case 4:
                    return (
                      (l = e.sent),
                      e.abrupt(
                        "return",
                        l &&
                          0 === l.retcode &&
                          l.all_agreements_list &&
                          l.all_agreements_list.length > 0
                          ? l.all_agreements_list
                          : (r.StockBridge.aegisReportEvent(
                              "[stock-search-ai] privacyFetchNone",
                              { ext4: JSON.stringify(l || {}) }
                            ),
                            null)
                      )
                    );
                  case 8:
                    return (
                      (e.prev = 8),
                      (e.t0 = e.catch(1)),
                      e.abrupt(
                        "return",
                        (r.StockBridge.aegisReportEvent(
                          "[stock-search-ai] privacyFetchFailed",
                          { ext4: JSON.stringify(e.t0 || {}) }
                        ),
                        null)
                      )
                    );
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[1, 8]]
          );
        })
      );
    },
    p = function (e, n) {
      var r =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      if (!e || 0 === e.length) return null;
      if (1 === e.length) return e[0];
      var t = e.filter(function (e) {
        var r, t, a, u, i;
        return "wenai" === n
          ? ((null == (r = null == e ? void 0 : e.id)
              ? void 0
              : r.startsWith("wenai_tencent")) ||
              (null == (t = null == e ? void 0 : e.id)
                ? void 0
                : t.startsWith("wenai_tenpay")) ||
              (null == (a = null == e ? void 0 : e.id)
                ? void 0
                : a.startsWith("wenai_tanpay"))) &&
              !(null == (u = null == e ? void 0 : e.id)
                ? void 0
                : u.includes("history"))
          : null == (i = null == e ? void 0 : e.id)
          ? void 0
          : i.startsWith(n);
      });
      return r
        ? e.find(function (e) {
            var n;
            return null == (n = null == e ? void 0 : e.id)
              ? void 0
              : n.includes(r);
          })
        : t.length > 0
        ? t.filter(function (e) {
            var n;
            return !(null == (n = null == e ? void 0 : e.id)
              ? void 0
              : n.includes("history"));
          })[0]
        : e.filter(function (e) {
            var n;
            return !(null == (n = null == e ? void 0 : e.id)
              ? void 0
              : n.includes("history"));
          })[0];
    },
    d = function (r) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return n(
        u,
        null,
        e().mark(function n() {
          var a;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), l(r);
                case 2:
                  return (a = e.sent), e.abrupt("return", p(a, r, t));
                case 4:
                case "end":
                  return e.stop();
              }
          }, n);
        })
      );
    },
    v = function (a, s) {
      return n(
        u,
        null,
        e().mark(function n() {
          var u, l, p;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (u = i()),
                      (l = "https://".concat(
                        c(),
                        "/svr/user/user_service/update_agreement"
                      )),
                      (e.prev = 1),
                      (p = {
                        channel: u,
                        action: "agree",
                        agreement_ids: a,
                        scene: s,
                        page: "search_ai",
                      }),
                      (e.next = 5),
                      t.StockBridge.request(l, "POST", p, {
                        header: {
                          "Content-Type": "application/json",
                          "x-app": o(),
                        },
                      })
                    );
                  case 5:
                    e.next = 10;
                    break;
                  case 7:
                    return (
                      (e.prev = 7),
                      (e.t0 = e.catch(1)),
                      e.abrupt(
                        "return",
                        (r.StockBridge.aegisReportEvent(
                          "[stock-search-ai] grantPrivacyFailed",
                          { ext4: JSON.stringify(e.t0 || {}) }
                        ),
                        {})
                      )
                    );
                  case 10:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[1, 7]]
          );
        })
      );
    },
    f = function (r) {
      return n(
        u,
        null,
        e().mark(function n() {
          var t;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = s() ? "wenai" : "wenyuanbao"),
                    e.abrupt("return", v([r], t))
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, n);
        })
      );
    };
  return {
    getTargetProtocal: d,
    grantUsePrivacy: f,
    entryUsePrivacyGrant: function () {
      return n(
        u,
        null,
        e().mark(function n() {
          var r, t, a, u, i, o, c, l, p, v, f, y, h;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (((r = !0), (t = ""), (a = {}), (u = !1), !s())) {
                    e.next = 8;
                    break;
                  }
                  return (e.next = 4), d("wenai");
                case 4:
                  (i = e.sent) &&
                    ((c = (o = i || {}).not_consented_user_need_popup),
                    (l = o.consented_user_need_popup),
                    (p = o.status),
                    (v = o.consented_any_version),
                    (a = i),
                    (r =
                      (!0 === c && 0 == +p && !1 === v) ||
                      (!0 === l && 0 == +p && !0 === v)),
                    (t = !0 === v ? "old_user" : "new_user"),
                    (u = 1 == +(null == i ? void 0 : i.status))),
                    (e.next = 12);
                  break;
                case 8:
                  return (e.next = 10), d("wenyuanbao");
                case 10:
                  (f = e.sent) &&
                    ((a = f),
                    0 == +f.status
                      ? ((y =
                          !0 === f.not_consented_user_need_popup &&
                          !1 === f.consented_any_version),
                        (h =
                          !0 === f.consented_user_need_popup &&
                          !0 === f.consented_any_version),
                        (r = y || h))
                      : ((t = "new_user"),
                        (r = !1),
                        (u = 1 == +(null == f ? void 0 : f.status))));
                case 12:
                  return e.abrupt(
                    "return",
                    (a.id ||
                      (a.id = s()
                        ? "wenai_tanpay@20251111"
                        : "wenyuanbao@20251111"),
                    {
                      needPopPrivacyDialog: r,
                      privacyType: t,
                      privacyResult: a,
                      hasPermission: u && !r,
                    })
                  );
                case 13:
                case "end":
                  return e.stop();
              }
          }, n);
        })
      );
    },
    entryHistoryPrivacyGrant: function () {
      return n(
        u,
        null,
        e().mark(function n() {
          var t, u, i, o, c, d, v, f, y, h, w, g, _;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0), (e.next = 3), r.StockBridge.getStorage(a)
                    );
                  case 3:
                    if (!(t = e.sent) || t.needPop) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return", t);
                  case 6:
                    e.next = 10;
                    break;
                  case 8:
                    (e.prev = 8), (e.t0 = e.catch(0));
                  case 10:
                    return (
                      (u = s() ? "wenai" : "wenyuanbao"), (e.next = 13), l(u)
                    );
                  case 13:
                    if (
                      ((i = e.sent),
                      (o = p(i, u)),
                      (c = s() ? "wenai_tanpay_history" : "wenyuanbao_history"),
                      (d = p(i, u, c)),
                      (v = o && 1 == +o.status),
                      (y = (f = function (e) {
                        return e ? e.split("@")[1] : "";
                      })(null == o ? void 0 : o.id)),
                      (h = f(null == d ? void 0 : d.id)),
                      !(v && y && h && y === h))
                    ) {
                      e.next = 24;
                      break;
                    }
                    return (
                      (w = { needPop: !1, mainProtocol: o }),
                      e.abrupt("return", (r.StockBridge.setStorage(a, w), w))
                    );
                  case 24:
                    return (
                      (g = !1),
                      d && 1 != +d.status && (g = !0),
                      (_ = { needPop: g, historyProtocol: d, mainProtocol: o }),
                      e.abrupt("return", (r.StockBridge.setStorage(a, _), _))
                    );
                  case 28:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[0, 8]]
          );
        })
      );
    },
    grantHistoryPrivacy: function (t, i) {
      return n(
        u,
        null,
        e().mark(function n() {
          var u, o, c, l, p;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (t) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  return (
                    (u = s() ? "wenai" : "wenyuanbao"),
                    (e.next = 5),
                    v([t.id], u)
                  );
                case 5:
                  if (
                    (r.StockBridge.setStorage(a, null),
                    (c = (o = function (e) {
                      return e ? e.split("@")[1] : "";
                    })(t.id)),
                    (l = o(null == i ? void 0 : i.id)),
                    !(i && c && l && c === l))
                  ) {
                    e.next = 11;
                    break;
                  }
                  return (
                    (p = s() ? "wenai" : "wenyuanbao"),
                    (e.next = 11),
                    v([i.id], p)
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          }, n);
        })
      );
    },
    grantWenAIUsePrivacy: function (r) {
      return n(
        u,
        null,
        e().mark(function n() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", f(r));
                case 1:
                case "end":
                  return e.stop();
              }
          }, n);
        })
      );
    },
  };
};
