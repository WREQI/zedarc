require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("constants.js"),
  i = require("../../stock-hq-data/index.js"),
  e = require("../../../../../common/vendor.js"),
  s = {
    props: [
      "skin",
      "fq",
      "mainIndicator",
      "indicator",
      "scode",
      "market",
      "stockType",
      "index",
      "activeButtons",
      "enableDraw",
    ],
    data: function () {
      return {
        fqName: t.FQ_NAMES,
        fqsID: t.FQ,
        text: t.INDICATOR_TEXT,
        indicators: t.INDICATOR,
        mainIndicators: ["ma", "ema", "boll", "sar", "ene"],
      };
    },
    computed: {
      isBlack: function () {
        return ["black", "dark"].includes(this.skin);
      },
      showFQS: function () {
        return !(
          i.utils.isIndex(this.stockType) ||
          i.utils.isHSPlate(this.market) ||
          i.utils.isDebt(this.stockType) ||
          i.utils.isNationalDebt(this.stockType) ||
          i.utils.isTransferableDebt(this.stockType) ||
          i.utils.isFutures(this.market) ||
          i.utils.isNQMarket(this.market) ||
          i.utils.isForex(this.market) ||
          i.utils.isSPMarket(this.market)
        );
      },
      showDraw: function () {
        return this.index > 1 && this.index < 6;
      },
      showChip: function () {
        return (
          this.showDraw &&
          i.utils.isHSMarket(this.market) &&
          ["GP-A", "GP-A-CYB"].includes(this.stockType)
        );
      },
      showAreaSelect: function () {
        return this.index > 1;
      },
    },
    created: function () {
      i.utils.isHKMarket(this.market) &&
        i.utils.isIndex(this.stockType) &&
        ((this.text = this.text.slice(1)),
        (this.indicators = this.indicators.slice(1))),
        i.utils.isUSMarket(this.market) &&
          ((this.fqsID = this.fqsID.slice(0, 2)),
          (this.fqName = this.fqName.slice(0, 2)));
    },
    methods: {
      switchFq: function (t) {
        this.$emit("clickFq", t);
      },
      switchIndicator: function (t, i) {
        this.$emit("switchIndicator", t, i);
      },
      handleClick: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        this.$emit("funcEvent", { action: t });
      },
    },
  },
  n = e._export_sfc(s, [
    [
      "render",
      function (t, i, s, n, r, a) {
        return e.e(
          { a: a.showDraw && s.enableDraw },
          a.showDraw && s.enableDraw
            ? {
                b: e.n(s.activeButtons.showDraw ? "curr" : ""),
                c: e.o(function (t) {
                  return a.handleClick("showDraw");
                }, 3668),
              }
            : {},
          { d: a.showChip },
          a.showChip
            ? {
                e: e.n(s.activeButtons.showChip ? "curr" : ""),
                f: e.o(function (t) {
                  return a.handleClick("showChip");
                }, 3669),
              }
            : {},
          { g: a.showAreaSelect },
          a.showAreaSelect
            ? {
                h: s.activeButtons.showAreaSelect ? 1 : "",
                i: e.o(function (t) {
                  return a.handleClick("showAreaSelect");
                }, 3670),
              }
            : {},
          { j: a.showFQS },
          a.showFQS
            ? {
                k: e.f(r.fqsID, function (t, i, n) {
                  return {
                    a: e.t(r.fqName[i]),
                    b: t,
                    c: t === s.fq ? 1 : "",
                    d: e.o(
                      function (i) {
                        return a.switchFq(t);
                      },
                      3671,
                      t
                    ),
                  };
                }),
              }
            : {},
          { l: a.showFQS },
          (a.showFQS, {}),
          {
            m: e.f(r.mainIndicators, function (t, i, n) {
              return {
                a: e.t(t.toUpperCase()),
                b: t,
                c: t === s.mainIndicator ? 1 : "",
                d: e.o(
                  function (i) {
                    return a.switchIndicator(0, t);
                  },
                  3672,
                  t
                ),
              };
            }),
            n: e.f(r.indicators, function (t, i, n) {
              return e.e(
                { a: "rally" === t },
                "rally" === t ? {} : { b: e.t(r.text[i]) },
                {
                  c: t,
                  d: t === s.indicator ? 1 : "",
                  e: e.o(
                    function (i) {
                      return a.switchIndicator(1, t);
                    },
                    3673,
                    t
                  ),
                }
              );
            }),
            o: a.isBlack ? 1 : "",
          }
        );
      },
    ],
    ["__scopeId", "data-v-09b75a3d"],
  ]);
wx.createComponent(n);
