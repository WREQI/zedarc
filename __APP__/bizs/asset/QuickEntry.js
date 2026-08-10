var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js"), require("../../service/broker.js");
var t = require("../../common/vendor.js"),
  n = require("../../stores/app/useMode.js"),
  i = require("../../stores/red-point/useEntryTips.js"),
  o = require("../../model/index/useEntryChannel.js"),
  r = require("../../model/report/usePrivatizationReport.js"),
  a = require("../../stores/user/useUserinfo.js"),
  u = require("../../utils/getPlatform.js"),
  l = require("../../model/product/useDuotianqi.js"),
  c = require("../../service/aegis/platform/not-wujie.js"),
  s = require("../../config/broker/11100/index.js"),
  d = {
    components: {
      EntryAdv: function () {
        return "./EntryIconAdv.js";
      },
    },
    emits: ["click", "brokerConfigEntryChange"],
    props: {
      loading: Boolean,
      showEtfRaceRed: Boolean,
      redPoints: {
        type: Array,
        default: function () {
          return [];
        },
      },
      hasNewstock: Boolean,
    },
    setup: function (r, d) {
      var v = d.emit,
        p = t.storeToRefs(n.useModeStore()).simpleMode,
        f = a.useUserinfoStore(),
        h = t.storeToRefs(f).userinfo,
        m = f.getUserInfo,
        y = o.useEntryChannel().getEntryChannelId,
        g = i.useEntryTips().isHasBubbleTipByRouteName,
        b = l.useDuotianqi().getEntryName,
        C = t.inject("isConditionEntry"),
        E = u.getPlatform().isOEM,
        q = s.brokerConfig.dictionary.Enties,
        T = t.computed(function () {
          var e, t;
          return (
            "1" ===
            (null == (t = null == (e = h.value) ? void 0 : e.balanceinfo)
              ? void 0
              : t.show_balance)
          );
        }),
        _ = t.computed(function () {
          var e, t;
          return (
            "1" ===
            (null == (t = null == (e = h.value) ? void 0 : e.balanceinfo)
              ? void 0
              : t.show_special)
          );
        }),
        R = t.computed(function () {
          var e, t;
          return (
            "1" ===
            (null == (t = null == (e = h.value) ? void 0 : e.balanceinfo)
              ? void 0
              : t.show_special_red)
          );
        }),
        k = t.computed(function () {
          var e, t;
          return (
            (null == (t = null == (e = h.value) ? void 0 : e.activityinfo)
              ? void 0
              : t.activity_id) || ""
          );
        }),
        j = t.computed(function () {
          var e, t;
          return (
            (null == (t = null == (e = h.value) ? void 0 : e.activityinfo)
              ? void 0
              : t.activity_acct) || ""
          );
        }),
        N = t.computed(function () {
          var e, t;
          return (
            (null == (t = null == (e = h.value) ? void 0 : e.activityinfo)
              ? void 0
              : t.activity_type) || ""
          );
        });
      function I() {
        return b({ activityId: k.value, activityType: N.value });
      }
      var x = function (e) {
          return e > 8 ? 5 : 6 === e ? 3 : 5 === e ? 5 : 4;
        },
        w = function (e) {
          var t = x(e.length);
          7 === e.length && e.push(q.waiting), v("brokerConfigEntryChange", e);
          for (var n = [], i = 1; i <= Math.ceil(e.length / t); i++) {
            n[i - 1] = [];
            for (var o = e.slice((i - 1) * t, i * t), r = 0; r < o.length; r++)
              n[i - 1].push(o[r]);
          }
          return n;
        },
        A = t.computed(function () {
          return E
            ? (function () {
                var t = s.brokerConfig.trade.index.entry.map(function (e) {
                  return q[e];
                });
                if (_.value || k.value) {
                  var n = s.brokerConfig.trade.index.balanceEntry,
                    i = I();
                  if (n && n.length)
                    t = n.map(function (t) {
                      return "duotianqi" === t
                        ? e(
                            e({}, q.duotianqi),
                            k.value ? { name: i, type: "jxbActivity" } : {}
                          )
                        : q[t];
                    });
                  else if (
                    t.findIndex(function (e) {
                      return "AssetAll" === (null == e ? void 0 : e.routeName);
                    }) >= 0
                  ) {
                    var o = 8 === t.length ? 1 : 0;
                    t.splice(
                      6,
                      o,
                      e(
                        e({}, q.duotianqi),
                        k.value ? { name: i, type: "jxbActivity" } : {}
                      )
                    );
                  } else
                    t.push(
                      e(
                        e({}, q.duotianqi),
                        k.value ? { name: i, type: "jxbActivity" } : {}
                      )
                    );
                }
                return w(t);
              })()
            : (function () {
                var t,
                  n,
                  i,
                  o,
                  r,
                  a,
                  u,
                  l,
                  c,
                  d,
                  v,
                  p,
                  f,
                  m,
                  y = ["quickTrade", "fund", "transactions", "transfers"];
                1e4 === s.brokerConfig.base.code &&
                  (y = y.filter(function (e) {
                    var t;
                    return q[e] && !(null == (t = q[e]) ? void 0 : t.hidden);
                  }));
                var g = !1;
                y.length < 7 &&
                  q.analysis &&
                  !(null == (t = q.analysis) ? void 0 : t.hidden) &&
                  ((null ==
                  (i = null == (n = s.brokerConfig.trade) ? void 0 : n.index)
                    ? void 0
                    : i.analysisRelease) ||
                    "1" === h.value.income_ver2024) &&
                  y.push("analysis"),
                  y.length < 7 &&
                    q.duotianqi &&
                    !(null == (o = q.duotianqi) ? void 0 : o.hidden) &&
                    (_.value || k.value) &&
                    (y.push("duotianqi"), (g = !0)),
                  y.length < 7 &&
                    (q.aiSelect &&
                      !(null == (r = q.aiSelect) ? void 0 : r.hidden) &&
                      y.push("aiSelect"),
                    q.tgvip &&
                      !(null == (a = q.tgvip) ? void 0 : a.hidden) &&
                      y.push("tgvip"),
                    q.shortTerm &&
                      !(null == (u = q.shortTerm) ? void 0 : u.hidden) &&
                      "1" ===
                        (null == (l = h.value) ? void 0 : l.tools_entrance) &&
                      y.push("shortTerm")),
                  y.length < 7 &&
                    q.etfRace &&
                    !(null == (c = q.etfRace) ? void 0 : c.hidden) &&
                    y.push("etfRace"),
                  y.length < 7 &&
                    q.ipo &&
                    !(null == (d = q.ipo) ? void 0 : d.hidden) &&
                    y.push("ipo"),
                  y.length < 7 &&
                    q.debt &&
                    !(null == (v = q.debt) ? void 0 : v.hidden) &&
                    y.push("debt"),
                  y.length < 7 &&
                    q.jxb &&
                    !(null == (p = q.jxb) ? void 0 : p.hidden) &&
                    T.value &&
                    y.push("jxb"),
                  y.length < 7 &&
                    q.bstmark &&
                    !(null == (f = q.bstmark) ? void 0 : f.hidden) &&
                    y.push("bstmark"),
                  y.length < 7 &&
                    q.condition &&
                    !(null == (m = q.condition) ? void 0 : m.hidden) &&
                    C.value &&
                    y.push("condition"),
                  y.length < 7 && y.push("account"),
                  y.length < 7 && y.push("setting"),
                  y.push("all");
                var b = y.map(function (e) {
                  return q[e];
                });
                return (
                  g &&
                    (b = b.map(function (t) {
                      return "ProductDuoTianQi" === t.routeName
                        ? e(
                            e({}, t),
                            k.value ? { name: I(), type: "jxbActivity" } : {}
                          )
                        : t;
                    })),
                  w(b)
                );
              })();
        }),
        M = t.ref(s.brokerConfig.base.code || ""),
        S = t.computed(function () {
          var e = 8;
          E &&
            7 ===
              (e = s.brokerConfig.trade.index.entry.map(function (e) {
                return q[e];
              }).length) &&
            (e = 8);
          for (var t = x(e), n = [], i = Math.ceil(e / t), o = 0; o < i; o++) {
            var r = Math.min(t, e - o * t);
            n.push(r);
          }
          return n;
        }),
        B = t.ref(!0),
        P = null,
        U = "";
      return (
        t.watch(h, function (e, n) {
          var i = t.isEmpty(n),
            o = t.isEmpty(e);
          (U = "old_".concat(i ? 0 : 1, "_new_").concat(o ? 0 : 1)),
            i && !o && (P && (clearTimeout(P), (P = null)), (B.value = !1));
        }),
        t.onMounted(function () {
          t.isEmpty(h.value)
            ? ((P = setTimeout(function () {
                if (B.value) {
                  B.value = !1;
                  var e = t.isEmpty(h.value);
                  c.aegisReporter.reportEvent(
                    "MONITOR-QUICKENTRY-USERINFO-TIMEOUT",
                    { ext4: e ? "empty" : "full", ext5: U || "no_trigger" }
                  );
                }
              }, 5e3)),
              m().catch(function (e) {
                P && (clearTimeout(P), (P = null)),
                  (B.value = !1),
                  c.aegisReporter.reportEvent(
                    "MONITOR-QUICKENTRY-USERINFO-FAIL"
                  );
              }))
            : (B.value = !1);
        }),
        t.onUnmounted(function () {
          P && (clearTimeout(P), (P = null));
        }),
        {
          brokerCode: M,
          entries: A,
          userinfo: h,
          simpleMode: p,
          getEntryChannelId: y,
          isHasBubbleTipByRouteName: g,
          specialBalance: _,
          specialBalanceRed: R,
          activityId: k,
          activityAcct: j,
          activityType: N,
          placeholderLayout: S,
          isShowPlaceholder: B,
        }
      );
    },
    methods: {
      onClick: function (t) {
        var n;
        if (t.routeName) {
          var i = {},
            a = this.getEntryChannelId(o.EntryTypeEnum.ASSET, t.routeName);
          a && (i = e(e({}, i), {}, { fchannel_id_fm_i: a })),
            this.$stat.click(
              "trade.asset.".concat(t.routeName.toLowerCase()),
              void 0,
              void 0,
              i
            ),
            null == (n = r.usePrivatizationReport()) ||
              n.reportClick("trade.asset.".concat(t.routeName.toLowerCase())),
            this.$emit("click", t);
        }
      },
      getIconClass: function (e) {
        var n, i;
        if (this.simpleMode) return ["icon-".concat(e.icon, "__simple-mode")];
        var o =
            (null == (i = null == (n = this.userinfo) ? void 0 : n.activityinfo)
              ? void 0
              : i.activity_red_tag) || "",
          r =
            (this.activityId && "2" === this.activityAcct && "1" === o) ||
            (this.specialBalance && this.specialBalanceRed),
          a = "";
        return (
          t.get(
            s.brokerConfig,
            "trade.index.duotianqiIsUseComplianceStyle",
            !1
          ) && (a = "duotianqi-compliance-style"),
          [
            "icon-".concat(e.icon),
            "icon-".concat(e.icon, "-").concat(this.brokerCode),
            "ProductDuoTianQi" === e.routeName && r
              ? "activity_tencent" === this.activityId
                ? "duotianqi-redpoint-tencent ".concat(a)
                : "duotianqi-redpoint ".concat(a)
              : "",
            "etfRace" === e.routeName && this.showEtfRaceRed
              ? "hot-redpoint"
              : "",
          ]
        );
      },
    },
  };
Array || t.resolveComponent("entry-Adv")();
var v = t._export_sfc(d, [
  [
    "render",
    function (e, n, i, o, r, a) {
      return t.e(
        { a: o.isShowPlaceholder },
        o.isShowPlaceholder
          ? {
              b: t.f(o.placeholderLayout, function (e, n, i) {
                return {
                  a: t.f(e, function (e, t, i) {
                    return { a: "".concat(n, "-").concat(e) };
                  }),
                  b: n,
                };
              }),
            }
          : {
              c: t.f(o.entries, function (e, n, r) {
                return {
                  a: t.f(e, function (e, n, u) {
                    return {
                      a: t.n(a.getIconClass(e)),
                      b: "9fb869e8-0-" + r + "-" + u,
                      c: t.p({ "route-name": e.routeName }),
                      d: t.n(
                        o.isHasBubbleTipByRouteName(e.routeName)
                          ? "rp-type"
                          : ""
                      ),
                      e: t.t(e.name),
                      f: n,
                      g: t.n("entry-item-".concat(e.routeName)),
                      h: t.n(
                        i.redPoints.includes(e.routeName) ? "redpoint" : ""
                      ),
                      i: t.o(function (t) {
                        return a.onClick(e);
                      }, n),
                    };
                  }),
                  b: n,
                };
              }),
            },
        { d: t.n(o.simpleMode ? "container__simple-mode" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-9fb869e8"],
]);
wx.createComponent(v);
