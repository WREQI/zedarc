var t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  o = function (t, a, n) {
    return a in t
      ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[a] = n);
  },
  i = require("../../../../common/vendor.js"),
  l = require("../stock-hq-core/config/css-token.js"),
  s = require("../stock-crypto-modules-config/dist/index.js"),
  c = require("../stock-hq-core/config/const.js"),
  u = {
    wzq: { zappid: "wzq", signkey: s.dist.SIGN_KEY.wzq_snp },
    zxg_h5: { zappid: "zxg_h5", signkey: s.dist.SIGN_KEY.zxgh5 },
  },
  d = {
    components: {
      FundFlow: function () {
        return "./components/FundFlow.js";
      },
      HoldScaleTrend: function () {
        return "./components/HoldScaleTrend.js";
      },
      MarginCard: function () {
        return "./components/MarginCard.js";
      },
      FooterTeachBar: function () {
        return "./components/FooterTeachBar.js";
      },
      Empty: function () {
        return "./components/NoData.js";
      },
    },
    props: ["symbol", "skin"],
    data: function () {
      return { fundData: {}, showGuide: !1, pixelRatio: 1 };
    },
    computed: {
      isMP: function () {
        return i.StockBridge.ENV === i.EnvTypeEnum.MP;
      },
      isLite: function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      },
      isDark: function () {
        return ["black", "dark"].includes(this.skin);
      },
      funFlowData: function () {
        return this.fundData.cwjsg || {};
      },
      holdScaleData: function () {
        return this.fundData.jjfe || {};
      },
      marginData: function () {
        return this.fundData.rzrq || {};
      },
      themeColor: function () {
        var t = l.CSSTOKEN[i.isBroker] || l.CSSTOKEN.DEFAULT;
        return {
          bigRed: t.bigRed || "#E63535",
          bigGreen: t.bigGreen || "#1CAA3C",
          normalRed: t.bigRed || "#E63535",
          normalGreen: t.bigGreen || "#1CAA3C",
        };
      },
      isEmpty: function () {
        return !(
          (this.funFlowData.data && this.funFlowData.data.length > 0) ||
          (this.holdScaleData && this.holdScaleData.data > 0) ||
          (this.marginData && this.marginData.data > 0)
        );
      },
    },
    mounted: function () {
      i.StockBridge.report("hq.detail.etffund.exposure"),
        this.getDataFundData();
    },
    methods: {
      dealTimeLabel: function (t) {
        if (t.length < 6) return t;
        var e = new i.dayjs().format("YYYY"),
          a = new i.dayjs(t);
        return a.format("YYYY") !== e ? a.format("YYYY-MM") : a.format("MM-DD");
      },
      judgeSHowGuide: function () {
        i.StockBridge.getStorage("shoEtfGuide") || (this.showGuide = !0);
      },
      getDataFundData: function () {
        var t = this;
        (function (t) {
          var e = {
            code: t,
            app: c.SOURCEENUM[i.isBroker] || c.SOURCEENUM.DEFAULT,
            plate: "jjfe,cwjsg,rzrq",
          };
          return i.StockBridge.request(
            "https://proxy.finance.qq.com/cgi/cgi-bin/fundflow/hspublic",
            "post",
            e
          )
            .then(function (t) {
              return t.data || {};
            })
            .catch(function (t) {
              return t;
            });
        })(this.symbol)
          .then(function (e) {
            t.fundData = e;
          })
          .catch(function (t) {})
          .finally(function () {
            t.$nextTick(function () {
              t.$emit("loaded");
            });
          });
      },
      getColor: function (t, e) {
        var a = parseFloat(t);
        if (a || 0 === a) {
          if (0 === a) return this.themeColor.gray;
          var n =
              "sanhu" === e
                ? this.themeColor.normalRed
                : this.themeColor.bigRed,
            r =
              "sanhu" === e
                ? this.themeColor.normalGreen
                : this.themeColor.bigGreen;
          return a > 0 ? n : r;
        }
      },
    },
  };
Array ||
  (
    i.resolveComponent("FundFlow") +
    i.resolveComponent("HoldScaleTrend") +
    i.resolveComponent("MarginCard") +
    i.resolveComponent("Empty") +
    i.resolveComponent("FooterTeachBar")
  )();
var f = i._export_sfc(d, [
  [
    "render",
    function (t, e, a, n, r, o) {
      return i.e(
        { a: o.funFlowData.data && o.funFlowData.data.length > 0 },
        o.funFlowData.data && o.funFlowData.data.length > 0
          ? {
              b: i.p({
                skin: a.skin,
                flowData: o.funFlowData,
                pixelRatio: r.pixelRatio,
                dealTimeLabel: o.dealTimeLabel,
              }),
            }
          : {},
        { c: o.holdScaleData.data && o.holdScaleData.data.length > 0 },
        o.holdScaleData.data && o.holdScaleData.data.length > 0
          ? {
              d: i.p({
                skin: a.skin,
                holdData: o.holdScaleData,
                pixelRatio: r.pixelRatio,
                dealTimeLabel: o.dealTimeLabel,
              }),
            }
          : {},
        { e: !o.isLite && o.marginData.data && o.marginData.data.length > 0 },
        !o.isLite && o.marginData.data && o.marginData.data.length > 0
          ? {
              f: i.sr("marginCard", "3af30ab6-2"),
              g: i.p({
                getColor: o.getColor,
                data: o.marginData,
                showPlateRadio: !0,
                skin: a.skin,
              }),
            }
          : {},
        { h: o.isEmpty },
        (o.isEmpty, {}),
        { i: i.p({ skin: a.skin }), j: o.isLite ? 1 : "", k: o.isDark ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-3af30ab6"],
]);
wx.createComponent(f);
var h = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1saXRlLWV0Zi1mdW5kL0Z1bmRFVEYudnVl =
  h),
  (exports.getEtfFundTeach = function (e) {
    var l = (function (e, i) {
      for (var l in i || (i = {})) n.call(i, l) && o(e, l, i[l]);
      if (a) {
        var s,
          c = t(a(i));
        try {
          for (c.s(); !(s = c.n()).done; ) {
            l = s.value;
            r.call(i, l) && o(e, l, i[l]);
          }
        } catch (t) {
          c.e(t);
        } finally {
          c.f();
        }
      }
      return e;
    })(
      { type: e },
      (function (t) {
        if (u[t]) {
          var e = u[t].zappid,
            a = u[t].signkey,
            n = Math.floor(Math.random() * Math.floor(1e4)),
            r = e + a + n,
            o = i.md5Module(r);
          return {
            zappid: e,
            sign: o,
            nonce: n,
            queryStr: "zappid="
              .concat(e, "&sign=")
              .concat(o, "&nonce=")
              .concat(n),
          };
        }
      })("zxg_h5")
    );
    return i.StockBridge.request(
      "https://snp.tenpay.com/cgi/cgi-bin/snp/investorClass/getHqClass",
      "GET",
      l
    ).catch(function (t) {
      throw t;
    });
  });
