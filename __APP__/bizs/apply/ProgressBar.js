require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("../../model/apply/useProgressBar.js"),
  r = require("../../model/apply/useApply.js"),
  s = require("../../model/apply/usePreReview.js"),
  o = require("../../service/stat/mp-weixin.js"),
  n = require("../../stores/app/useMode.js"),
  i = require("../../utils/getPlatform.js");
require("../../service/broker.js");
var u = require("../../config/broker/11100/index.js"),
  a = i.getPlatform().isMpPlugin,
  c = t.useProgressBar(),
  d = c.getShowProgressConfig,
  g = c.toActPage,
  l = {
    name: "ProgressBar",
    props: {
      stepName: { required: !0, type: String },
      statusPage: { type: Boolean, default: !1 },
      titles: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function (t) {
      var i,
        c,
        l = n.useModeStore(),
        p = e.storeToRefs(l).simpleMode,
        f = r.useApply().isRecoverMode,
        P = s.usePreReview().shouldHideProgressBar,
        m = d(t.stepName);
      null == (c = null == (i = m.value) ? void 0 : i.descConfig) ||
        c.forEach(function (e) {
          e.act_click && o.stat.click("trade.apply.act.progressbar_toact_brow");
        });
      var v = e.computed(function () {
          return (
            !(P.value && !t.statusPage) &&
            !m.value.hide &&
            (!f.value || t.statusPage)
          );
        }),
        b = e.computed(function () {
          return 0 === m.value.doneIdx;
        }),
        h = e.computed(function () {
          return t.statusPage ? t.titles : m.value.titles || [];
        }),
        _ = e.computed(function () {
          return t.statusPage
            ? 12 +
                (80 *
                  h.value.filter(function (e) {
                    return e.done;
                  }).length) /
                  h.value.length
            : m.value.progress || 0;
        }),
        x = u.brokerConfig.base.name;
      return {
        progressConfig: m,
        hide: e.computed(function () {
          return m.value.hide;
        }),
        doneIdx: e.computed(function () {
          return m.value.doneIdx || 0;
        }),
        descConfig: e.computed(function () {
          return m.value.descConfig || [];
        }),
        benefitConfig: e.computed(function () {
          return m.value.benefitConfig || [];
        }),
        isMpPlugin: a,
        isRecoverMode: f,
        stepTitle: h,
        showProgress: v,
        shortMode: b,
        toActPage: g,
        simpleMode: p,
        innerProgress: _,
        brokerName: x,
      };
    },
  },
  p = e._export_sfc(l, [
    [
      "render",
      function (t, r, s, o, n, i) {
        return e.e(
          { a: o.showProgress },
          o.showProgress
            ? e.e(
                {
                  b: e.t(o.brokerName),
                  c: e.f(o.descConfig, function (t, r, s) {
                    return e.e(
                      {
                        a: t.w_icon,
                        b: t.b_icon,
                        c: e.t(t.text),
                        d: t.act_click,
                      },
                      t.act_click
                        ? {
                            e: e.t(t.act_click),
                            f: e.o(function () {
                              return (
                                o.toActPage && o.toActPage.apply(o, arguments)
                              );
                            }, r),
                          }
                        : {},
                      { g: r }
                    );
                  }),
                  d: e.f(o.stepTitle, function (t, r, n) {
                    return e.e(
                      s.statusPage
                        ? { c: t.done ? 1 : "", d: t.active ? 1 : "" }
                        : {
                            a: o.doneIdx > r ? 1 : "",
                            b: o.doneIdx === r ? 1 : "",
                          },
                      {
                        e: e.t(t.text),
                        f:
                          (r > o.doneIdx && !s.statusPage) ||
                          (s.statusPage && !t.done && !t.active)
                            ? 1
                            : "",
                        g: t.desc,
                      },
                      t.desc
                        ? { h: e.t(t.desc), i: t.descHighlight ? 1 : "" }
                        : {},
                      {
                        j: s.statusPage || 0 !== r ? "" : 1,
                        k:
                          s.statusPage && 0 === r
                            ? -12.5 * o.stepTitle.length + "%"
                            : "",
                        l: r,
                      }
                    );
                  }),
                  e: !s.statusPage,
                  f: o.isMpPlugin ? 1 : "",
                  g: s.statusPage ? 1 : "",
                  h: o.benefitConfig.w_icon,
                  i: o.benefitConfig.b_icon,
                  j: e.t(o.benefitConfig.text),
                  k: s.statusPage,
                },
                (s.statusPage, {}),
                {
                  l: "".concat(o.innerProgress, "%"),
                  m: o.shortMode ? 1 : "",
                  n: e.n(o.simpleMode ? "progress-container__simple-mode" : ""),
                  o: s.statusPage ? 1 : "",
                  p: o.simpleMode ? 1 : "",
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1f370fed"],
  ]);
wx.createComponent(p);
