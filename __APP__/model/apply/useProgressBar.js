var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../cgi/activity.js"),
  i = require("../../service/broker.js"),
  a = require("../../service/stat/mp-weixin.js"),
  o = require("../../config/activity/actTemps.js"),
  l = require("../../common/vendor.js"),
  s = require("../../stores/actconfig/useActconfig.js"),
  u = require("../../utils/getPlatform.js"),
  p = require("../../config/broker/11100/index.js"),
  c = p.brokerConfig.apply.progressBar || {
    applyTips: [],
    auditTips: [],
    benefitTips: {},
  },
  f = u.getPlatform().isQuickApp,
  d = { broker: "", channel: "" },
  v = l.reactive({
    applyTips: c.applyTips,
    auditTips: c.auditTips,
    benefitTips: c.benefitTips,
  }),
  g = l.ref([]),
  b = [],
  h = [];
(exports.showNewProgressBar = function () {
  var e, t, r;
  return (
    !u.getPlatform().isEmbeddedMiniProgram &&
    !f &&
    "h5" !==
      (null ==
      (r =
        null ==
        (t =
          null == (e = null == global ? void 0 : global.getVm)
            ? void 0
            : e.call(global))
          ? void 0
          : t.globalData)
        ? void 0
        : r.from)
  );
}),
  (exports.useProgressBar = function () {
    var u,
      c = function () {
        var e,
          t,
          r = l.storeToRefs(s.useActConfigStore()).actTempID,
          n = r.value && o.actTemplates[r.value];
        return !(
          !n ||
          l.isEmpty(n) ||
          ((null == (e = n.applyTips) ? void 0 : e.length) &&
            (v.applyTips = n.applyTips),
          (null == (t = n.auditTips) ? void 0 : t.length) &&
            (v.auditTips = n.auditTips),
          n.benefitTips && (v.benefitTips = n.benefitTips),
          0)
        );
      };
    return {
      updateConfig:
        ((u = r(
          t().mark(function e(r, i) {
            var a, o, l, s, u, p, f, g, b, h, T, m, y, k, x, _, q, A;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((a = i.channelI),
                        (o = void 0 === a ? "" : a),
                        (l = i.channelO),
                        (b = [o, void 0 === l ? "" : l].filter(function (e) {
                          return e;
                        })),
                        (h = b.join(".")),
                        (m = (T = d).broker),
                        (y = T.channel),
                        !c())
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      if (!m || !y || r !== m || h !== y) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      return (
                        (e.prev = 6),
                        (e.next = 9),
                        n.ActAPI.fetchTenpayAd({
                          typename: ["dealer_openaccount_tips"],
                          stat: b,
                          dealercode: String(r),
                        })
                      );
                    case 9:
                      (k = e.sent), (e.next = 14);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(6));
                    case 14:
                      (d = { broker: r, channel: h }),
                        (x =
                          null ==
                          (p =
                            null ==
                            (u =
                              null == (s = null == k ? void 0 : k.data)
                                ? void 0
                                : s[0])
                              ? void 0
                              : u.adinfos)
                            ? void 0
                            : p[0]),
                        (_ = (null == x ? void 0 : x.apply_tips) || []),
                        (q =
                          (null ==
                          (g =
                            null == (f = null == x ? void 0 : x.audit_tips)
                              ? void 0
                              : f[0])
                            ? void 0
                            : g.turn_tips) || []),
                        (A = (null == x ? void 0 : x.benefit_tips) || []),
                        (null == x ? void 0 : x.toolid) &&
                          (v.toolid = x.toolid),
                        _.length > 0 && (v.applyTips = _),
                        q.length > 0 && (v.auditTips = q),
                        A.length > 0 && (v.benefitTips = A[0]);
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[6, 12]]
            );
          })
        )),
        function (e, t) {
          return u.apply(this, arguments);
        }),
      getToolId: function () {
        return v.toolid || "";
      },
      setProgressInfo: function (e) {
        (g.value = e),
          (b = g.value
            .filter(function (e) {
              return e.stage;
            })
            .map(function (e) {
              return e.name;
            })).forEach(function (e, t) {
            h[t] = g.value.findIndex(function (t) {
              return t.name === e;
            });
          });
      },
      getShowProgressConfig: function (t) {
        return l.computed(function () {
          var r;
          if (!g.value.length) return { hide: !0 };
          if (["ApplyProgress", "ApplyRecover"].includes(t))
            return { benefitConfig: v.benefitTips, descConfig: v.auditTips };
          var n = 0,
            i = b.length,
            a = g.value.findIndex(function (e) {
              return e.name === t;
            }),
            o = h[0] || 0;
          if (
            (h.some(function (e, t) {
              return e > a || ((o = t), !1);
            }),
            o === i - 1)
          )
            n = Math.ceil((o / i) * 100);
          else {
            var l = o + 1,
              s = o / h.length + (a - h[o]) / (h[l] - h[o]) / i;
            n = Math.ceil(100 * s);
          }
          var u = null == (r = v.applyTips[o]) ? void 0 : r.turn_tips;
          return (
            "ApplyAdvisory" === t &&
              (u =
                null == u
                  ? void 0
                  : u.map(function (t) {
                      return e(
                        e({}, t),
                        {},
                        {
                          text: "开户资料已提交，请等待接听回访电话".concat(
                            p.brokerConfig.base.tel
                          ),
                        }
                      );
                    })),
            {
              titles: [
                { text: "资料填写" },
                { text: "身份认证" },
                { text: "提交申请" },
              ],
              doneIdx: o,
              benefitConfig: v.benefitTips,
              descConfig: u,
              progress: n,
            }
          );
        });
      },
      toActPage: function () {
        var e = a.stat.getChannel(),
          t = e.fchannel_id_o,
          r = e.fchannel_id_fm_i;
        a.stat.click("trade.apply.act.progressbar_toact_click");
        var n = i.tenpayDomain();
        setTimeout(function () {
          location.href = "https://"
            .concat(n, "/activity/page/tradeTransferAct/#/home?stat_data=")
            .concat(t, ".")
            .concat(r, "&broker=")
            .concat(p.brokerConfig.base.code);
        }, 200);
      },
    };
  });
