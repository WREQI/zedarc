require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var a = require("../../adapter/router.js"),
  i = require("../../config/mpConfig.js"),
  u = require("../../pages.js");
require("../../service/broker.js");
var l = require("../../service/navigateMp.js");
require("../../service/sdk/lib/api.js");
var p = require("../../service/sdk/platform/mp-weixin.js"),
  o = require("../../utils/getPlatform.js"),
  s = require("../../common/vendor.js"),
  c = require("./contants.js"),
  v = require("./useApplyInfo.js"),
  f = require("../../service/aegis/platform/not-wujie.js"),
  d = require("../../service/applyStepMonitor/monitor.js"),
  g = require("../../service/abt/mp-weixin.js"),
  h = require("../../service/stat/mp-weixin.js"),
  m = require("../../stores/apply/useChannel.js"),
  y = require("../../utils/index.js"),
  x = require("../../service/mpIntercept.js"),
  b = require("../../config/broker/11100/index.js"),
  A = o.getPlatform(),
  P = A.bizPlatform,
  k = A.isZxg,
  q = A.isQuickApp,
  S = A.isMpPlugin,
  w = A.isZxgXcx,
  j = b.brokerConfig.abt || {},
  I = j.flexibleApplyTips,
  T = void 0 === I ? {} : I,
  C = j.preReviewAbt,
  R = s.ref(!1),
  M = s.ref(""),
  E = s.ref(!1),
  _ = s.ref(!1),
  L = [];
function O(e) {
  L.push(e);
}
var F = v.useApplyInfo(),
  N = F.applyInfo,
  B = F.isRecoverMode;
v.setStepChangeListener(U);
var D = s.ref([]),
  Y = [],
  Q = s.cloneDeep(b.brokerConfig.dictionary.APPLY_STEP),
  z = function (e) {
    return n({ name: e }, Q[e] || {});
  };
function G(e) {
  var r = null != e ? e : a.route().name;
  M.value = r;
}
function U() {
  return V.apply(this, arguments);
}
function V() {
  return (V = t(
    r().mark(function e() {
      var t,
        n,
        a,
        i,
        u,
        l,
        p,
        o = arguments;
      return r().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((t = o.length > 0 && void 0 !== o[0] ? o[0] : {}),
                  (e.prev = 1),
                  (n = t.steps),
                  (a = t.excludes),
                  B.value,
                  n && !Array.isArray(n) && (n = n.split(",")),
                  a && !Array.isArray(a) && (a = a.split(",")),
                  !(B.value && a && a.length > 0))
                ) {
                  e.next = 5;
                  break;
                }
                throw new Error("驳回模式不能排除步骤，以后端返回为准");
              case 5:
                return !a && Y.length > 0 && (a = Y), (e.next = 8), Z();
              case 8:
                if (
                  ((i = e.sent),
                  L.forEach(function (e) {
                    e(i);
                  }),
                  (u = i.map(function (e) {
                    return e.name;
                  })),
                  !B.value && !(null == n ? void 0 : n.length))
                ) {
                  e.next = 14;
                  break;
                }
                return (
                  (l = u.filter(function (e) {
                    var r,
                      t =
                        (null == (r = z(e).step) ? void 0 : r.split(",")) || [];
                    if (0 === t.length) return !1;
                    for (var a = 0; a < t.length; a++) {
                      var i = t[a];
                      if (null == n ? void 0 : n.includes(i)) return !0;
                    }
                    return !1;
                  })),
                  e.abrupt(
                    "return",
                    (l.unshift(B.value ? "ApplyRecover" : "ApplyIndex"),
                    l.push("ApplyProgress"),
                    (D.value = l),
                    l)
                  )
                );
              case 14:
                if (!(null == a ? void 0 : a.length)) {
                  e.next = 17;
                  break;
                }
                return (
                  (p = u.filter(function (e) {
                    return !(null == a ? void 0 : a.includes(e));
                  })),
                  e.abrupt("return", ((p[0] = "ApplyIndex"), (D.value = p), p))
                );
              case 17:
                return e.abrupt("return", ((D.value = u), u));
              case 20:
                (e.prev = 20),
                  (e.t0 = e.catch(1)),
                  f.aegisReporter.reportEvent(
                    "MONITOR-APPLY-UPDATE-STEP-LIST-FAIL"
                  );
              case 23:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[1, 20]]
      );
    })
  )).apply(this, arguments);
}
var W = !1,
  X = !1;
function Z() {
  return J.apply(this, arguments);
}
function J() {
  return (J = t(
    r().mark(function t() {
      var n, a, i, u, l, p;
      return r().wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (
                  (n = b.brokerConfig.apply.queue),
                  (a = "applyMode"),
                  (i = m.useChannelStore()),
                  (r.prev = 3),
                  (r.next = 6),
                  i.fetchChannelInfo()
                );
              case 6:
                i.isPayProjectChannel, (r.next = 11);
                break;
              case 9:
                (r.prev = 9), (r.t0 = r.catch(3));
              case 11:
                if (
                  (B.value
                    ? (a = "recoverMode")
                    : i.isPayProjectChannel &&
                      ((a = "abtMode"), (R.value = !0)),
                  !w)
                ) {
                  r.next = 20;
                  break;
                }
                return (r.next = 14), g.ABT.getABT(T);
              case 14:
                if (((r.t1 = r.sent), r.t1)) {
                  r.next = 17;
                  break;
                }
                r.t1 = {};
              case 17:
                (u = r.t1),
                  1 == +u.allpass && (E.value = !0),
                  W ||
                    (h.stat.click("trade.apply.action_flexible_brow"),
                    (W = !0));
              case 20:
                if (
                  ((_.value = !1),
                  !(null == C ? void 0 : C.id) || "h5-weixin" !== P || B.value)
                ) {
                  r.next = 29;
                  break;
                }
                return (r.next = 23), g.ABT.getABT(C);
              case 23:
                if (((r.t2 = r.sent), r.t2)) {
                  r.next = 26;
                  break;
                }
                r.t2 = {};
              case 26:
                (l = r.t2),
                  1 == +l.pre_review && (_.value = !0),
                  X ||
                    (h.stat.click("trade.applyrisktest.pre_audit_brow"),
                    (X = !0));
              case 29:
                return (
                  (p = n[a].common),
                  r.abrupt(
                    "return",
                    (["h5-weixin", "mp-weixin"].includes(P) && (p = n[a].wzq),
                    _.value &&
                      (p = (function (r) {
                        var t = r.findIndex(function (e) {
                          return "ApplyRiskTest" === e.name;
                        });
                        if (-1 === t) return r;
                        var n = e(r);
                        return (
                          n.splice(t + 1, 0, { name: "ApplyPreReview" }), n
                        );
                      })(p)),
                    p)
                  )
                );
              case 31:
              case "end":
                return r.stop();
            }
        },
        t,
        null,
        [[3, 9]]
      );
    })
  )).apply(this, arguments);
}
function $() {
  _.value &&
    ((_.value = !1),
    D.value.includes("ApplyPreReview") &&
      (D.value = D.value.filter(function (e) {
        return "ApplyPreReview" !== e;
      })));
}
function H() {
  Y = [];
}
function K(e) {
  return ee.apply(this, arguments);
}
function ee() {
  return (ee = t(
    r().mark(function e(t) {
      return r().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (!B.value) {
                e.next = 4;
                break;
              }
              (e.t0 = D.value), (e.next = 8);
              break;
            case 4:
              return (
                t.forEach(function (e) {
                  Y.includes(e) || Y.push(e);
                }),
                (e.next = 7),
                U()
              );
            case 7:
              e.t0 = e.sent;
            case 8:
              return e.abrupt("return", e.t0);
            case 9:
            case "end":
              return e.stop();
          }
      }, e);
    })
  )).apply(this, arguments);
}
var re = function (e) {
  return D.value.includes(e);
};
function te(e) {
  if (!e) return "";
  var r = "string" == typeof e ? e.split(",") : e;
  return (
    D.value.find(function (e) {
      var t;
      return ((null == (t = z(e).step) ? void 0 : t.split(",")) || []).some(
        function (e) {
          return r.includes(e);
        }
      );
    }) || ""
  );
}
var ne = s.computed(function () {
    var e,
      r = D.value.indexOf(M.value);
    (-1 === r || (B.value && 1 !== r)) && (r = 0);
    var t = D.value[r + 1];
    return { name: t, title: null == (e = z(t)) ? void 0 : e.title };
  }),
  ae = s.computed(function () {
    var e,
      r = D.value.indexOf(M.value);
    if (r < 1 || B.value) return {};
    var t = D.value[Math.max(0, r - 1)];
    return { name: t, title: null == (e = z(t)) ? void 0 : e.title };
  }),
  ie = s.computed(function () {
    return 1 === D.value.indexOf(M.value);
  });
exports.useApplyStep = function () {
  x.resetGetCurrentPages();
  var e = a.route(),
    r = z(null == e ? void 0 : e.name),
    t = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = M.value;
      try {
        var t = e.data,
          i = void 0 === t ? {} : t,
          u = e.targetStep,
          l = void 0 === u ? ne.value.name : u,
          o = e.type,
          s = void 0 === o ? "push" : o;
        if (
          (S && c.ApplyReplacePath.indexOf(M.value) > -1 && (s = "replace"),
          "ApplyProgress" === l &&
            (k || q) &&
            p.sdk.transmitParam({ refresh: "1" }),
          S && "ApplyProgress" === l)
        )
          return void setTimeout(function () {
            i.query
              ? (i.query.isRelaunch = "1")
              : (i.query = { isRelaunch: "1" }),
              a.router()[s](n({ name: l }, i)),
              d.recordStepAdvance({ route: r });
          }, 50);
        a.router()[s](n({ name: l }, i));
      } catch (e) {
        return void f.aegisReporter.reportEvent("MONITOR-APPLY-NEXT-STEP-FAIL");
      }
      d.recordStepAdvance({ route: r });
    },
    o = s.debounce(t, 1e3, { leading: !0, trailing: !1 });
  return {
    resetApplyStep: H,
    exitPreReviewFlow: $,
    addExcludeStep: K,
    navigateNextStep: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e.ignoreDebounce ? t(e) : o(e);
    },
    navigatePrevStep: s.debounce(
      function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        try {
          var t = e.type,
            p = void 0 === t ? "push" : t,
            o = e.data,
            s = void 0 === o ? {} : o,
            c = e.targetStep,
            v = c || ae.value.name;
          if (!v) return;
          if (!c && "ApplyFacecheck" === v) {
            var d = N.value.face_live;
            if ("1" === d && !r) {
              var g = D.value.indexOf("ApplyFacecheck");
              v = D.value[Math.max(0, g - 1)];
            }
          }
          if ("mp-weixin" !== P)
            return void getVm().$router[p](n({ name: v }, s));
          if ("ApplyIndex" === v) {
            var h = "/pages/apply/index";
            return void (S
              ? l.redirectTo({ url: h, linkType: i.linkTypeMap.plugin2MainMp })
              : l.navigateBackMiniProgram({ extraData: { path: h } }));
          }
          var m = u.__CJS__export_default__(),
            x = m.routes,
            A =
              x.find(function (e) {
                return e.name === v;
              }) || {};
          if (A.path) {
            var k = y.getIsMpPluginComponent()
                ? "pages/"
                    .concat(b.brokerConfig.base.fullName, "/")
                    .concat(A.path.replace("pages/", ""))
                : A.path,
              q = getCurrentPages(),
              w = q.findIndex(function (e) {
                return !(!e || !e.route) && e.route.indexOf(k) > -1;
              });
            w >= 0
              ? a.router().back({ delta: q.length - w - 1 })
              : a.router().replace(n({ name: v }, s));
          } else a.router().replace(n({ name: v }, s));
        } catch (e) {
          f.aegisReporter.reportEvent("MONITOR-APPLY-PREV-STEP-FAIL");
        }
      },
      1e3,
      { leading: !0, trailing: !1 }
    ),
    stepList: D,
    setCurStep: G,
    isFirstStep: ie,
    curStep: M,
    curStepInfo: r,
    curStepConf: (function () {
      var e = r.config || "";
      return b.brokerConfig.apply.stepConfig[e] || {};
    })(),
    nextStepInfo: ne,
    prevStepInfo: ae,
    useTelAndIdFirstMode: R,
    abtApplyFlexible: E,
    isPreReviewAbt: _,
    getWholeApplyQueue: Z,
    getStepInfo: z,
    isInStepList: re,
    getFirstMatchedStep: te,
    updateStepList: U,
    addWholeQueueUpdatedListener: O,
  };
};
