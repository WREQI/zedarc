require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../@babel/runtime/helpers/slicedToArray");
require("../../app.js");
var r = require("../apply/profile/utils/index.js"),
  l = require("./broker/11100.js"),
  s = require("../../config/risk.js");
function o(e, r) {
  for (
    var l, s, o = e.disabled, t = void 0 === o ? [] : o, u = new Set(), a = 0;
    a < t.length;
    a++
  ) {
    var d = (null == (l = t[a]) ? void 0 : l.split(":")) || [],
      v = n(d, 2),
      f = v[0],
      c = v[1];
    (null == (s = null == r ? void 0 : r[+f - 1]) ? void 0 : s.indexOf(c)) >
      -1 && u.add(f);
  }
  return i(u);
}
var t = function (i) {
  var n = i.sex || "",
    l = i.age || "",
    s = i.cred_id || "";
  return (
    s &&
      ((void 0 !== i.age && "" !== i.age) || (l = r.ageUtil.getAge(s)),
      (void 0 !== i.sex && "" !== i.sex) || (n = r.sexUtil.getSex(s))),
    e(e({}, i), {}, { age: l, sex: n })
  );
};
(exports.disabledOptions = function (e, r) {
  var o,
    u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    a = e.conflicts,
    d = [],
    v = [],
    f = new Set();
  if (!a) return { disabledList: d, conflictTips: v };
  var c = t(u);
  return (
    null == e ||
      e.answers.forEach(function (e, i) {
        var o,
          t,
          u,
          p,
          b,
          h,
          g = a[s.LETTER_MAP[i]];
        if (g)
          for (var k = 0; k < g.length; k++) {
            var T = g[k];
            if ("job" === (null == T ? void 0 : T.key)) {
              if (null == c ? void 0 : c.job) {
                var j = !1;
                if (
                  (((null == (o = null == T ? void 0 : T.disabled)
                    ? void 0
                    : o.includes(c.job)) ||
                    ((null == (t = null == T ? void 0 : T.unDisabled)
                      ? void 0
                      : t.includes) &&
                      !T.unDisabled.includes(c.job))) &&
                    (j = !0),
                  j)
                ) {
                  d.push(i), T.tips && v.push(T.tips);
                  break;
                }
              }
            } else if ("edu" === (null == T ? void 0 : T.key)) {
              if (null == c ? void 0 : c.edu) {
                var x = !1;
                if (
                  (((null == (u = null == T ? void 0 : T.disabled)
                    ? void 0
                    : u.includes(c.edu)) ||
                    ((null == (p = null == T ? void 0 : T.unDisabled)
                      ? void 0
                      : p.includes) &&
                      !T.unDisabled.includes(c.edu))) &&
                    (x = !0),
                  x)
                ) {
                  d.push(i), T.tips && v.push(T.tips);
                  break;
                }
              }
            } else if (
              "customFn" === (null == T ? void 0 : T.key) &&
              T.customFn
            ) {
              if (T.customFn(c)) {
                d.push(i), T.tips && v.push(T.tips);
                break;
              }
            } else if ("riskOption" === (null == T ? void 0 : T.key)) {
              for (
                var m = T.disabled, w = void 0 === m ? [] : m, y = !1, q = 0;
                q < w.length;
                q++
              ) {
                var E = null == (b = w[q]) ? void 0 : b.split(":"),
                  S = n(E, 2),
                  A = S[0],
                  C = S[1];
                if (
                  (null == (h = null == r ? void 0 : r[A - 1])
                    ? void 0
                    : h.indexOf(C)) > -1
                ) {
                  if ((d.push(i), (y = !0), !l.riskTest.showConflictsTips))
                    break;
                  f.add(A);
                }
              }
              if (y) {
                T.tips && v.push(T.tips);
                break;
              }
            }
          }
      }),
    l.riskTest.showConflictsTips &&
      f.size > 0 &&
      v.push(
        "根据第".concat(
          null == (o = i(f)) ? void 0 : o.join("/"),
          "题的选择，已屏蔽矛盾选项，如需调整可重新选择。"
        )
      ),
    { disabledList: i(new Set(d)), conflictTips: i(new Set(v)) }
  );
}),
  (exports.getSelectedShowTips = function (e, i) {
    var n = {};
    if (!e) return n;
    var r = e.showTips;
    return r && (null == i ? void 0 : i.length)
      ? (i.forEach(function (e) {
          var i = r[s.LETTER_MAP[e]];
          i && (n[e] = i);
        }),
        n)
      : n;
  }),
  (exports.getVarietiesText = function (e) {
    var i = e.split(""),
      n = l.riskTest.varieties,
      r = [];
    if (1 === i.length) {
      for (var s = +i[0]; s < n.length; s++) r.push(n[s]);
      return r.reverse().join("；");
    }
    return (r = i.map(function (e) {
      return n[e];
    })).join("，");
  }),
  (exports.getWeakConflictTips = function (e, n, r) {
    var l,
      u = e.weakConflicts,
      a = {};
    if (!u || !(null == e ? void 0 : e.answers)) return a;
    var d = t(r);
    return (
      null == (l = e.answers) ||
        l.forEach(function (e, r) {
          var l,
            t = u[s.LETTER_MAP[r]];
          if (t)
            for (var v = 0; v < t.length; v++) {
              var f = t[v],
                c = !1;
              if (f && f.tips && f.key) {
                var p = f.tips;
                if ("questionConflict" === f.key) {
                  var b = o(f, n) || [];
                  (c = Boolean(b.length)) &&
                    (p = p.replace(
                      "/question-number-placeholder/",
                      b.join("/")
                    ));
                } else
                  "job" === f.key && d.job
                    ? (c =
                        (null == (l = f.disabled)
                          ? void 0
                          : l.includes(d.job || "")) || !1)
                    : "customFn" === f.key && f.customFn && (c = f.customFn(d));
                c && (a[r] = [].concat(i(a[r] || []), [p]));
              }
            }
        }),
      a
    );
  }),
  (exports.transformInvestInfoValue = t);
