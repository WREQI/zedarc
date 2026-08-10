require("../../app.js");
var e = require("../../common/vendor.js"),
  o = require("../../filters/money.js"),
  n = require("../../utils/getPlatform.js"),
  t = require("../../config/key.js"),
  r = {
    code: "code",
    cssType: "css_type",
    incomeRate: "income_rate",
    lockDays: "lock_days",
    market: "market",
    bondName: "name",
    unitPrice: "unit_price",
    maxDays: "max_days",
  },
  s = e.defineStore("govBondsInfo", function () {
    var s = e.reactive({
        code: "",
        cssType: "",
        incomeRate: "",
        lockDays: "",
        bondName: "",
        unitPrice: "",
        market: "",
        maxDays: "",
      }),
      c = e.computed(function () {
        return Boolean(s.cssType);
      }),
      a = e.computed(function () {
        return Boolean(s.cssType && "1" === s.cssType);
      }),
      i = e.computed(function () {
        return Boolean(s.cssType && "2" === s.cssType);
      }),
      u = e.ref(!1);
    function m(c) {
      try {
        var a = n.getPlatform(),
          i = a.isMiniProgram,
          m = a.isSimpleMode;
        if (i || m) return;
        var d = e.index.getStorageSync(t.ASSET_GOV_ADV_INFO),
          y = c || d;
        if (!y) return;
        Object.keys(s).forEach(function (e) {
          var n = y[r[e]];
          "incomeRate" === e &&
            (n =
              "1" === y.css_type
                ? "".concat(o.formatNoUnit(n, !1, 1), "<span>%</span>")
                : "年化".concat(o.formatNoUnit(n, !1, 2), "%")),
            (s[e] = n);
        }),
          (u.value = !0),
          e.index.setStorageSync(t.ASSET_GOV_ADV_INFO, y);
      } catch (e) {}
    }
    return (
      n.getPlatform().isZxg && m(),
      {
        isLoaded: u,
        isShowGovBondsAdv: c,
        isNumberIconType: a,
        isRedPointType: i,
        govBondsInfo: s,
        setGovBondsInfo: m,
      }
    );
  });
exports.useGovBondsStore = s;
