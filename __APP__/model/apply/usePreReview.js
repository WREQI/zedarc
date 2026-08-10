var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../@babel/runtime/helpers/defineProperty"),
  u = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var i = require("../../common/vendor.js"),
  a = require("../../adapter/router.js"),
  p = require("../../cgi/apply.js"),
  o = require("./useApplyStep.js"),
  l = require("./useApplyInfo.js"),
  s = [
    {
      key: "idcard",
      title: "身份证",
      routeName: "ApplyIdCard",
      steps: ["2", "3", "4"],
    },
    {
      key: "profile",
      title: "个人信息",
      routeName: "ApplyProfile",
      steps: ["9"],
    },
    { key: "video", title: "意愿视频", routeName: "ApplyVideo", steps: ["5"] },
  ],
  c = i.ref([]),
  f = i.ref(!1),
  v = i.ref({});
function d(e, r) {
  v.value = u(u({}, v.value), {}, n({}, e, r));
}
var y = { 2: "正面", 3: "背面" };
function m(e) {
  return (e || "")
    .split("|")
    .map(function (e) {
      return e.trim();
    })
    .filter(Boolean);
}
var h = i.computed(function () {
    var e = new Set(
        c.value
          .filter(function (e) {
            return ["2", "3"].includes(String(e.step)) && m(e.tips).length > 0;
          })
          .map(function (e) {
            return String(e.step);
          })
      ),
      r = [];
    return e.has("2") && r.push("front"), e.has("3") && r.push("back"), r;
  }),
  S = i.computed(function () {
    var e = { front: [], back: [] };
    return (
      c.value.forEach(function (r) {
        var n,
          u,
          i = String(r.step);
        "2" === i && (n = e.front).push.apply(n, t(m(r.tips))),
          "3" === i && (u = e.back).push.apply(u, t(m(r.tips)));
      }),
      e
    );
  }),
  g = i.ref({ front: !1, back: !1 });
function b(e) {
  g.value[e] || (g.value = u(u({}, g.value), {}, n({}, e, !0)));
}
var A = i.computed(function () {
    return {
      front: S.value.front.length > 0 && !g.value.front,
      back: S.value.back.length > 0 && !g.value.back,
    };
  }),
  k = i.computed(function () {
    return s
      .map(function (e) {
        var r = [];
        return (
          c.value.forEach(function (n) {
            if (e.steps.includes(String(n.step))) {
              var u = m(n.tips);
              "idcard" === e.key
                ? r.push.apply(
                    r,
                    t(
                      u.map(function (e) {
                        return (function (e, r) {
                          var t = y[String(e)];
                          return t
                            ? r.startsWith("正面") || r.startsWith("背面")
                              ? r
                              : "".concat(t).concat(r)
                            : r;
                        })(n.step, e);
                      })
                    )
                  )
                : r.push.apply(r, t(u));
            }
          }),
          r.push.apply(r, t(v.value[e.key] || [])),
          { key: e.key, title: e.title, routeName: e.routeName, tips: r }
        );
      })
      .filter(function (e) {
        return e.tips.length > 0;
      });
  }),
  w = i.computed(function () {
    return k.value.reduce(function (e, r) {
      return e + r.tips.length;
    }, 0);
  }),
  P = i.computed(function () {
    return w.value > 0;
  }),
  R = i.ref(!1),
  q = i.computed(function () {
    return R.value ? new Set(["mail_address"]) : null;
  }),
  x = i.computed(function () {
    return o.useApplyStep().isPreReviewAbt.value && R.value;
  }),
  N = function () {
    return k.value.map(function (e) {
      return e.routeName;
    });
  };
function j(e) {
  var r = o.useApplyStep().stepList,
    n = l.useApplyInfo().lastRemainSteps,
    u = r.value || [],
    i = N(),
    a = (function (e, r) {
      var t = o.useApplyStep().getStepInfo,
        n = (Array.isArray(e) ? e : String(e || "").split(","))
          .map(function (e) {
            return e.trim();
          })
          .filter(Boolean);
      return n.length
        ? r.filter(function (e) {
            var r;
            return (
              (null == (r = t(e).step) ? void 0 : r.split(",")) || []
            ).some(function (e) {
              return n.includes(e);
            });
          })
        : [];
    })(void 0 !== e ? e : n.value, u),
    p = new Set([].concat(t(i), t(a)));
  return u.filter(function (e) {
    return p.has(e);
  });
}
function I(e) {
  var r,
    t = o.useApplyStep().navigatePrevStep,
    n = j(e),
    u = (null == (r = a.route()) ? void 0 : r.name) || "",
    i = n.indexOf(u);
  if (i <= 0)
    return (
      (R.value = !1), void t({ targetStep: "ApplyPreReview", type: "replace" })
    );
  t({ targetStep: n[i - 1], type: "replace" });
}
function M(e) {
  var r,
    t,
    n = o.useApplyStep(),
    u = n.navigateNextStep,
    i = n.stepList,
    p = j(e),
    l = (null == (r = a.route()) ? void 0 : r.name) || "",
    s = i.value || [],
    c = p.indexOf(l);
  if (-1 !== c) t = p[c + 1];
  else if ("ApplyPreReview" === l) t = p[0];
  else if (s.includes(l)) {
    var f = s.indexOf(l);
    t = p.find(function (e) {
      return s.indexOf(e) > f;
    });
  } else t = p[0];
  u({ targetStep: t || "ApplySubmit" });
}
exports.usePreReview = function () {
  return {
    reviewInfo: c,
    hasFetched: f,
    groups: k,
    totalCount: w,
    hasPreReviewTips: P,
    fetchPreReview:
      ((t = r(
        e().mark(function r() {
          var t;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), p.applyCgi.queryPreReview();
                case 2:
                  return (
                    (t = e.sent),
                    e.abrupt(
                      "return",
                      ((c.value = (null == t ? void 0 : t.review_info) || []),
                      (f.value = !0),
                      (g.value = { front: !1, back: !1 }),
                      c.value)
                    )
                  );
                case 4:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return t.apply(this, arguments);
      }),
    getErrorRouteNames: N,
    isModifyMode: R,
    shouldHideProgressBar: x,
    goNextModifyStep: M,
    goPrevModifyStep: I,
    getModifyStepCandidates: j,
    setLocalPreReviewTips: d,
    idcardPhotoSides: h,
    idcardRawTipsBySide: S,
    idcardSidePreReviewFail: A,
    markIdcardSideReuploaded: b,
    profileModifyFieldKeys: q,
  };
  var t;
};
