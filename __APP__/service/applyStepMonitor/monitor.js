var t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("../../adapter/router.js"),
  e = require("../aegis/utils.js"),
  n = require("../stat/mp-weixin.js"),
  u = require("../../stores/apply/useCommonData.js"),
  i = require("./constants.js"),
  a = {
    biz_stat_data: "",
    biz_clickid_vid: "",
    biz_clickid_qz: "",
    biz_channel: "",
  },
  o = null;
function _(t) {
  try {
    t();
  } catch (t) {}
}
function c(t) {
  setTimeout(function () {
    _(t);
  }, 0);
}
function s(t, r) {
  for (var e = 0; e < r.length; e++) {
    var n = t[r[e]];
    if (null != n && "" !== n) return String(n);
  }
  return "";
}
function l(t, r) {
  var e,
    u,
    i,
    a,
    o = s(t, ["__gdt_vid__"]) || s(r, ["__gdt_vid__"]),
    _ = s(t, ["__qz_gdt__"]) || s(r, ["__qz_gdt__"]),
    c = s(t, ["__source__"]) || s(r, ["__source__"]),
    l = "",
    f = "";
  try {
    l =
      (null == (u = (e = n.stat).getChannelByUrl) ? void 0 : u.call(e)) ||
      (null == (a = (i = n.stat).getStorageChannelStr) ? void 0 : a.call(i)) ||
      "";
  } catch (t) {
    l = "";
  }
  return (
    l || (l = s(t, ["stat_data", "stat"]) || s(r, ["stat_data", "stat"])),
    c ? (f = c) : (o || _) && (f = "ams"),
    { biz_stat_data: l, biz_clickid_vid: o, biz_clickid_qz: _, biz_channel: f }
  );
}
function f() {
  return o
    ? t({}, o)
    : (function (t, r) {
        try {
          return t();
        } catch (t) {
          return r;
        }
      })(function () {
        var t;
        return l(
          u.useCommonData().applyArgs || {},
          (null == (t = r.route()) ? void 0 : t.query) || {}
        );
      }, t({}, a));
}
(exports.recordStepAdvance = function (r) {
  c(function () {
    !(function (r) {
      if (r.route) {
        var n = (function (r, e) {
          return t({ curr_route_name: r.route }, e);
        })(r, f());
        e.reportEventSafely(i.AEGIS_EVENT_STEP_ADVANCE, n);
      }
    })(r);
  });
}),
  (exports.recordStepView = function (n) {
    c(function () {
      _(function () {
        !(function () {
          var t,
            e = u.useCommonData().applyArgs || {},
            n = (null == (t = r.route()) ? void 0 : t.query) || {};
          o = l(e, n);
        })(),
          (function (r) {
            if (r.route) {
              var n = (function (r, e) {
                return t({ curr_route_name: r.route }, e);
              })(r, f());
              e.reportEventSafely(i.AEGIS_EVENT_STEP_VIEW, n);
            }
          })(n);
      });
    });
  }),
  (exports.reset = function () {
    _(function () {
      o = null;
    });
  });
