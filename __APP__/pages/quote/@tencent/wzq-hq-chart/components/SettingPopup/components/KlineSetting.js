var e = require("../../../../../../../common/vendor.js"),
  t = require("../../../../stock-hq-data/index.js"),
  n = require("enum.js"),
  i = e.defineComponent({
    name: "KlineSetting",
    components: {
      SwitchCom: function () {
        return "./Switch.js";
      },
    },
    props: {
      market: String | Number,
      isSupportChip: Boolean,
      isAccountOpen: Boolean,
      canShowAiVolatile: { type: Boolean, default: !1 },
      canShowSupportPressureSignal: { type: Boolean, default: !1 },
      klineSetData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    emits: ["input", "change"],
    setup: function (i, c) {
      var a = c.emit,
        o = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        r = e.ref(n.FqTypes),
        s = e.ref(n.YkStyle),
        u = e.ref(n.AdvanceFunction),
        p = e.ref({ isChecked: !1 }),
        l = e.ref({ isChecked: !1 });
      return (
        e.onMounted(function () {
          t.utils.isUSMarket(i.market) &&
            (r.value = r.value.filter(function (e) {
              return 2 !== e.value;
            }));
        }),
        {
          aiVolatile: p,
          supportPressureSignal: l,
          fqTypes: r,
          ykTypes: s,
          switchTypes: u,
          changefq: function (e) {
            a("change", { type: "fq", value: e });
          },
          changeSwitchSet: function (e) {
            "aiVolatile" === e &&
              ((p.value.isChecked = !p.value.isChecked),
              o.timer && clearTimeout(o.timer),
              (o.timer = setTimeout(function () {
                p.value.isChecked = !1;
              }, 800))),
              "supportPressureSignal" === e &&
                ((l.value.isChecked = !l.value.isChecked),
                o.spsTimer && clearTimeout(o.spsTimer),
                (o.spsTimer = setTimeout(function () {
                  l.value.isChecked = !1;
                }, 800))),
              a("change", { type: e });
          },
          changeYkStyle: function (e) {
            a("change", { type: "kStyle", value: e });
          },
          jumpIndicatorSetting: function () {
            a("jumpIndicatorSetting");
          },
        }
      );
    },
  });
Array || e.resolveComponent("SwitchCom")();
var c = e._export_sfc(i, [
  [
    "render",
    function (t, n, i, c, a, o) {
      return e.e(
        { a: t.isSupportChip },
        t.isSupportChip
          ? {
              b: t.klineSetData.cmfbChecked
                ? t.switchTypes[0].iconActive
                : t.switchTypes[0].iconDefault,
              c: e.t(t.switchTypes[0].text),
              d: e.n(t.klineSetData.cmfbChecked && "gt-active"),
              e: e.o(function (e) {
                return t.changeSwitchSet("cmfb");
              }, 6081),
            }
          : {},
        {
          f: t.klineSetData.trendLineChecked
            ? t.switchTypes[1].iconActive
            : t.switchTypes[1].iconDefault,
          g: e.t(t.switchTypes[1].text),
          h: e.n(t.klineSetData.trendLineChecked && "gt-active"),
          i: e.o(function (e) {
            return t.changeSwitchSet("tline");
          }, 6082),
          j: t.klineSetData.supportPresureChecked
            ? t.switchTypes[2].iconActive
            : t.switchTypes[2].iconDefault,
          k: e.t(t.switchTypes[2].text),
          l: e.n(t.klineSetData.supportPresureChecked && "gt-active"),
          m: e.o(function (e) {
            return t.changeSwitchSet("zypos");
          }, 6083),
          n: t.isAccountOpen,
        },
        t.isAccountOpen
          ? {
              o: t.klineSetData.magicNineChecked
                ? t.switchTypes[3].iconActive
                : t.switchTypes[3].iconDefault,
              p: e.t(t.switchTypes[3].text),
              q: e.n(t.klineSetData.magicNineChecked && "gt-active"),
              r: e.o(function (e) {
                return t.changeSwitchSet("magicNine");
              }, 6084),
            }
          : {},
        { s: t.isAccountOpen && t.klineSetData.suportTradeLine },
        t.isAccountOpen && t.klineSetData.suportTradeLine
          ? {
              t: t.klineSetData.tradeLineChecked
                ? t.switchTypes[4].iconActive
                : t.switchTypes[4].iconDefault,
              v: e.t(t.switchTypes[4].text),
              w: e.n(t.klineSetData.tradeLineChecked && "gt-active"),
              x: e.o(function (e) {
                return t.changeSwitchSet("trandeLine");
              }, 6085),
            }
          : {},
        { y: t.canShowAiVolatile },
        t.canShowAiVolatile
          ? {
              z: t.aiVolatile.isChecked
                ? t.switchTypes[5].iconActive
                : t.switchTypes[5].iconDefault,
              A: e.t(t.switchTypes[5].text),
              B: e.n(t.aiVolatile.isChecked && "gt-active"),
              C: e.o(function (e) {
                return t.changeSwitchSet("aiVolatile");
              }, 6086),
            }
          : {},
        { D: t.canShowSupportPressureSignal },
        t.canShowSupportPressureSignal
          ? {
              E: t.supportPressureSignal.isChecked
                ? t.switchTypes[6].iconActive
                : t.switchTypes[6].iconDefault,
              F: e.t(t.switchTypes[6].text),
              G: e.n(t.supportPressureSignal.isChecked && "gt-active"),
              H: e.o(function (e) {
                return t.changeSwitchSet("supportPressureSignal");
              }, 6087),
            }
          : {},
        {
          I: e.f(t.fqTypes, function (n, i, c) {
            return {
              a: e.t(n.text),
              b: n.value,
              c: e.n(t.klineSetData.miFq === n.value && "active"),
              d: e.o(
                function (e) {
                  return t.changefq(n.value);
                },
                6088,
                n.value
              ),
            };
          }),
          J: e.f(t.ykTypes, function (n, i, c) {
            return {
              a:
                t.klineSetData.ykStyle === n.value
                  ? n.iconActive
                  : n.iconDefault,
              b: e.t(n.text),
              c: n.text,
              d: e.n(t.klineSetData.ykStyle === n.value && "active"),
              e: e.o(
                function (e) {
                  return t.changeYkStyle(n.value);
                },
                6089,
                n.text
              ),
            };
          }),
          K: e.o(function (e) {
            return t.changeSwitchSet("gap");
          }, 6090),
          L: e.p({ value: t.klineSetData.gapChecked }),
          M: e.o(function () {
            return (
              t.jumpIndicatorSetting &&
              t.jumpIndicatorSetting.apply(t, arguments)
            );
          }, 6091),
        }
      );
    },
  ],
  ["__scopeId", "data-v-281cc308"],
]);
wx.createComponent(c);
