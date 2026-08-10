require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var e = require("../../config/risk.js"),
  i = require("../riskTest/utils.js"),
  r = require("../../service/aegis/platform/not-wujie.js"),
  n = function (e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.aegisReporter.reportEvent("MONITOR-APPLY-PRESIGN-CHECK", {
      ext2: e,
      ext3: JSON.stringify(i),
    });
  },
  t = function (e, i) {
    var r = e.findIndex(function (e) {
      return e.prop === i;
    });
    return -1 === r ? null : { question: e[r], index: r };
  },
  s = function (i, r) {
    return r
      ? r
          .split("")
          .map(function (r) {
            var n = e.LETTER_MAP.indexOf(r);
            return n > -1 ? i.answers[n] : "";
          })
          .filter(Boolean)
      : [];
  };
exports.checkPresignEligible = function (e) {
  var r = e.riskString,
    l = void 0 === r ? "" : r,
    u = e.markets,
    o = void 0 === u ? "" : u,
    v = e.riskTest,
    a = e.matchConfig,
    d = e.minRiskLevel,
    f = void 0 === d ? 3 : d,
    p = e.checkMarkets,
    c = void 0 !== p && p;
  if (
    !(function (e, i) {
      if (void 0 === e || "" === e) return n("risk-level-empty"), !0;
      var r = Number(e);
      return Number.isNaN(r)
        ? (n("risk-level-invalid", { riskLevel: e }), !1)
        : r >= 1 && r <= 5
        ? !(
            r < i &&
            (n("risk-level-below-threshold", { riskLevel: r, minRiskLevel: i }),
            1)
          )
        : 6 === r || 10 === r
        ? (n("risk-level-below-threshold", { riskLevel: r, minRiskLevel: i }),
          !1)
        : (n("risk-level-invalid", { riskLevel: e }), !1);
    })(e.riskLevel, f)
  )
    return !1;
  if (c) {
    if (!o) return n("markets-empty"), !1;
    var m = o.split(",");
    if (!m.includes("1") || !m.includes("0"))
      return n("markets-incomplete", { markets: o }), !1;
  }
  if (!a) return !0;
  if (!l) return n("risk-string-empty"), !1;
  var k = l.split(":"),
    y = i.getRawQuestionList(v),
    g = t(y, a.variety.prop);
  if (!g) return n("variety-unresolved", { prop: a.variety.prop }), !1;
  var q = s(g.question, k[g.index] || "");
  if (!q.length) return n("variety-answer-empty", { index: g.index }), !1;
  if (
    q.every(function (e) {
      return a.variety.disqualifyIfOnly.includes(e);
    })
  )
    return n("variety-disqualified", { selected: q }), !1;
  var x = t(y, a.income.prop);
  if (!x) return n("income-unresolved", { prop: a.income.prop }), !1;
  var h = s(x.question, k[x.index] || "");
  return h.length
    ? !h.some(function (e) {
        return a.income.disqualifyOptions.includes(e);
      }) || (n("income-disqualified", { selected: h }), !1)
    : (n("income-answer-empty", { index: x.index }), !1);
};
