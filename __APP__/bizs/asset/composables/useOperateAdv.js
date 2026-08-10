var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var a = require("../../../common/vendor.js"),
  n = require("../../../cgi/operateAdv.js"),
  i = require("../../../stores/app/useMode.js"),
  s = require("../../../service/aegis/platform/not-wujie.js"),
  u = require("../../../service/navigateMp.js"),
  l = require("../../../config/mpConfig.js"),
  o = require("../../../utils/getPlatform.js");
require("../../../service/sdk/lib/api.js");
var c = require("../../../service/sdk/platform/mp-weixin.js"),
  p = require("../../../adapter/router.js"),
  v = require("./useBehaviorTradeTags.js"),
  d = { exciteData: null, bandAssistList: [] },
  f = o.getPlatform(),
  h = f.isZxg,
  g = f.bizPlatform;
function x() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  if (!e) return {};
  var r = {};
  return (
    e.split("&").forEach(function (e) {
      var t = e.split("=");
      2 === t.length && (r[t[0]] = t[1]);
    }),
    r
  );
}
exports.useOperateAdv = function () {
  var o,
    f,
    m = a.ref({}),
    b = a.ref(null),
    y = a.ref([]),
    _ = a.ref(!1),
    k = new Map(),
    q = a.computed(function () {
      return (function () {
        var e = a.storeToRefs(i.useModeStore()).simpleMode;
        return h
          ? "app"
          : "mp-weixin" === g
          ? e.value
            ? "xcx"
            : "zxg_xcx"
          : e.value
          ? "h5"
          : "wzq_h5";
      })();
    });
  return {
    advMap: m,
    exciteData: b,
    bandAssistList: y,
    advPlatform: q,
    isLoading: _,
    fetchAll:
      ((f = t(
        r().mark(function e(a, i) {
          var s, u, l, o;
          return r().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((s = i || q.value),
                    (u = "".concat(a.join("|"), "|").concat(s)),
                    !(l = k.get(u)))
                  ) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return", l);
                case 3:
                  return (
                    (o = t(
                      r().mark(function e() {
                        var i, l, o, f, g, x, q, T, w;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (_.value = !0),
                                    (e.prev = 1),
                                    (e.next = 4),
                                    v.getBehaviorTradeTagsParam(
                                      h || null == (i = p.route())
                                        ? void 0
                                        : i.query,
                                      c.sdk
                                    )
                                  );
                                case 4:
                                  return (
                                    (o = e.sent),
                                    (e.next = 7),
                                    (function () {
                                      var e = t(
                                        r().mark(function e(t) {
                                          var a;
                                          return r().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    if (
                                                      t &&
                                                      v.hasBehaviorTradeTagsChanged(
                                                        t
                                                      )
                                                    ) {
                                                      e.next = 2;
                                                      break;
                                                    }
                                                    return e.abrupt("return");
                                                  case 2:
                                                    if (
                                                      0 ===
                                                      (a =
                                                        v.buildBehaviorLabelRecords(
                                                          t
                                                        )).length
                                                    ) {
                                                      e.next = 12;
                                                      break;
                                                    }
                                                    return (
                                                      (e.prev = 4),
                                                      (e.next = 7),
                                                      n.operateAdvCgi.saveBehaviorLabels(
                                                        a
                                                      )
                                                    );
                                                  case 7:
                                                    v.cacheBehaviorTradeTags(t),
                                                      (e.next = 12);
                                                    break;
                                                  case 10:
                                                    (e.prev = 10),
                                                      (e.t0 = e.catch(4));
                                                  case 12:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e,
                                            null,
                                            [[4, 10]]
                                          );
                                        })
                                      );
                                      return function (r) {
                                        return e.apply(this, arguments);
                                      };
                                    })()(o)
                                  );
                                case 7:
                                  return (
                                    (e.next = 9),
                                    n.operateAdvCgi.fetchOperateAdv({
                                      action: "1",
                                      dely_id: a.join("|"),
                                      platform: s,
                                    })
                                  );
                                case 9:
                                  if (!(f = e.sent)) {
                                    e.next = 16;
                                    break;
                                  }
                                  return (
                                    (x = (
                                      null == (l = f.dely_list)
                                        ? void 0
                                        : l.length
                                    )
                                      ? f.dely_list
                                      : [f]),
                                    (q = {}),
                                    x.forEach(function (e) {
                                      e.dely_id && (q[e.dely_id] = e);
                                    }),
                                    (m.value = q),
                                    (T = (function (e) {
                                      var r,
                                        t = e.excite_grow;
                                      return t
                                        ? {
                                            items:
                                              null !== (r = t.excite_info) &&
                                              void 0 !== r
                                                ? r
                                                : [],
                                            isFinishFirstProfit:
                                              t.is_finish_first_profit,
                                          }
                                        : null;
                                    })(f)),
                                    (w =
                                      null !== (g = f.band_assistant_list) &&
                                      void 0 !== g
                                        ? g
                                        : []),
                                    e.abrupt(
                                      "return",
                                      ((b.value = T),
                                      (y.value = w),
                                      { exciteData: T, bandAssistList: w })
                                    )
                                  );
                                case 16:
                                  return e.abrupt("return", d);
                                case 19:
                                  return (
                                    (e.prev = 19),
                                    (e.t0 = e.catch(1)),
                                    e.abrupt("return", d)
                                  );
                                case 22:
                                  return (
                                    (e.prev = 22),
                                    (_.value = !1),
                                    k.delete(u),
                                    e.finish(22)
                                  );
                                case 25:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[1, 19, 22, 25]]
                        );
                      })
                    )()),
                    e.abrupt("return", (k.set(u, o), o))
                  );
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (e, r) {
        return f.apply(this, arguments);
      }),
    setFromExternal: function (e) {
      var r = {};
      e.forEach(function (e) {
        e.dely_id && (r[e.dely_id] = e);
      }),
        (m.value = r);
    },
    getByDelyId: function (e) {
      var r;
      return null !== (r = m.value[e]) && void 0 !== r ? r : null;
    },
    closeAdv:
      ((o = t(
        r().mark(function t(a, i, s) {
          var u;
          return r().wrap(
            function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (r.prev = 0),
                      (r.next = 3),
                      n.operateAdvCgi.fetchOperateAdv({
                        action: "2",
                        dely_id: a,
                        matl_id: i,
                        platform: s || q.value,
                      })
                    );
                  case 3:
                    r.next = 7;
                    break;
                  case 5:
                    (r.prev = 5), (r.t0 = r.catch(0));
                  case 7:
                    delete (u = e({}, m.value))[a], (m.value = u);
                  case 9:
                  case "end":
                    return r.stop();
                }
            },
            t,
            null,
            [[0, 5]]
          );
        })
      )),
      function (e, r, t) {
        return o.apply(this, arguments);
      }),
    navigate: function (r, t) {
      if (r) {
        var a = t || {},
          n = a.channel,
          i = void 0 === n ? "" : n,
          o = a.delay;
        setTimeout(
          function () {
            var t;
            if (/^https/.test(r)) c.sdk.openUrlWithExtraWebview({ url: r });
            else if (/^ROUTENAME/.test(r)) {
              var a = r.split("|");
              a.length >= 2 &&
                (null == (t = p.router()) ||
                  t.push({
                    name: a[1],
                    query: e(e({}, i ? { stat: i } : {}), x(a[2])),
                  }));
            } else if ("mp-weixin" === g && /^\/?pages\//.test(r)) {
              var n = r.startsWith("/") ? r : "/".concat(r);
              u.navigateTo({ url: n, linkType: l.linkTypeMap.plugin2MainMp });
            } else if (h && /^com.tencent.shy/.test(r)) {
              var o = r.split("|") || [];
              o.length >= 2 &&
                c.sdk.redirect("SHY", {
                  p_key: o[0],
                  p_url: o[1],
                  p_showNav: o[2] || !1,
                });
            } else if (h && /^APPSDK/.test(r)) {
              var v = r.split("|") || [];
              v.length >= 2 && c.sdk.redirect(v[1], x(v[2]));
            } else
              s.aegisReporter.reportEvent("MONITOR-ASSET-INDEX-PATH-FAIL", {
                ext3: r,
              });
          },
          void 0 === o ? 300 : o
        );
      }
    },
  };
};
