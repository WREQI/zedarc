require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var n = require("../../common/vendor.js"),
  r = require("../../stores/user/useUserinfo.js"),
  o = require("../../config/enum.js"),
  u = require("../../utils/getPlatform.js");
(exports.hasConditionEntry = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return "1" === e.is_condorder_gray;
}),
  (exports.useConditionEntry = function () {
    var i,
      t = u.getPlatform().isOEM,
      a = r.useUserinfoStore(),
      s = null == (i = n.getCurrentInstance()) ? void 0 : i.proxy,
      l = n.computed(function () {
        var e;
        return (
          "1" === (null == (e = a.userinfo) ? void 0 : e.is_condorder_gray) &&
          !t
        );
      }),
      d = n.computed(function () {
        var e;
        return (
          l.value &&
          "1" ===
            (null == (e = a.userinfo) ? void 0 : e.is_fixed_invest_cond_gray)
        );
      }),
      c = n.computed(function () {
        var e;
        return (
          l.value &&
          "1" === (null == (e = a.userinfo) ? void 0 : e.is_grid_cond_gray)
        );
      }),
      v = n.computed(function () {
        var e;
        return (
          l.value &&
          "1" === (null == (e = a.userinfo) ? void 0 : e.is_zyzs_cond_gray)
        );
      }),
      f = n.computed(function () {
        var e;
        return (
          v.value &&
          "1" ===
            (null == (e = a.userinfo) ? void 0 : e.is_zy_pullback_cond_gray)
        );
      }),
      _ = n.computed(function () {
        var e;
        return (
          l.value &&
          "1" === (null == (e = a.userinfo) ? void 0 : e.is_zhangting_cond_gray)
        );
      }),
      m = n.computed(function () {
        var e;
        return (
          l.value &&
          "1" === (null == (e = a.userinfo) ? void 0 : e.is_kaiban_cond_gray)
        );
      }),
      p = n.computed(function () {
        return !n.isEmpty(a.userinfo);
      }),
      y = n.computed(function () {
        return d.value || c.value || v.value || _.value || m.value;
      }),
      E = n.computed(function () {
        var e = 0;
        return (
          [d.value, l.value, c.value, v.value].forEach(function (n) {
            n && (e += 1);
          }),
          e
        );
      }),
      g = n.ref(!1);
    function S() {
      var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = n.orderType,
        u = n.citem,
        i = void 0 === u ? {} : u;
      g.value && (g.value = !1);
      var t = r ? o.INDEPENDENT_PAGE_CONFIG[r] : r;
      t && (null == s || s.$router.push({ name: t, query: e({}, i || {}) }));
    }
    var h = n.ref({});
    return {
      ASSET_TAB_MAX_SHOW: 20,
      isConditionEntry: l,
      isInvestCondUser: d,
      isUserInfoReady: p,
      isGridCondUser: c,
      isTPSLCondUser: v,
      isPullbackCondUser: f,
      isLimitUpCondUser: _,
      isOpeningSellCondUser: m,
      shouldShowStrategy: y,
      isShowCondStrategy: g,
      clickCreateCond: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (h.value = n.isEmpty(e)
          ? {}
          : { name: e.name, code: e.code, market: e.market }),
          y.value
            ? (g.value = !0)
            : S({ orderType: o.ORDER_TYPES.PRICE, citem: e });
      },
      createCondByType: S,
      checkBeforeJump: function (e) {
        var r,
          u,
          i,
          t,
          a,
          s =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { assetData: [] },
          l = e === o.COND_TAB_VALUE.tpslCond ? o.ORDER_TYPES.TPSL : e,
          d = [o.ORDER_TYPES.TPSL];
        if (
          l &&
          d.includes(l) &&
          ((null == s ? void 0 : s.stockInfo) ||
            (null == s ? void 0 : s.searchResStock))
        ) {
          var c =
            (null == (r = s.searchResStock) ? void 0 : r.code) ||
            (null == (i = null == (u = s.stockInfo) ? void 0 : u.info)
              ? void 0
              : i.secu_code) ||
            (null == (a = null == (t = s.stockInfo) ? void 0 : t.secu_info)
              ? void 0
              : a.secu_code);
          if (
            (null == s ? void 0 : s.assetData) &&
            Array.isArray(s.assetData)
          ) {
            var v = s.assetData.find(function (e) {
              return e.code === c;
            });
            if (!v || "0" === v.hold_num)
              return (
                n.index.showToast({
                  title: "目前未持仓该标的无法使用".concat(
                    o.ORDER_TYPES_TEXT[l]
                  ),
                  icon: "none",
                  duration: 3e3,
                }),
                !0
              );
          }
        }
        return !1;
      },
      condNum: E,
      conditionItem: h,
    };
  });
