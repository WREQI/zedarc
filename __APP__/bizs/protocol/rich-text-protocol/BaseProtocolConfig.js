var t = require("../../../@babel/runtime/helpers/classCallCheck"),
  e = require("../../../@babel/runtime/helpers/createClass"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var r,
  i = Object.defineProperty,
  o = function (t, e, r) {
    return (
      (function (t, e, n) {
        e in t
          ? i(t, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (t[e] = n);
      })(t, "symbol" != n(e) ? e + "" : e, r),
      r
    );
  },
  s = require("../../../model/riskTest/index.js");
require("../../../service/broker.js");
var a = require("../../../config/enum.js");
require("../../../service/request/index.js");
var u = require("../../../stores/user/useUserinfo.js"),
  c = require("../../../model/riskTest/broker/11100.js"),
  f = require("../../../common/vendor.js"),
  h = require("../../../config/broker/11100/index.js"),
  m = {
    default: { moreProtocol: !1, buttonsTrade: !1, buttonsNormal: !0 },
    trade: { moreProtocol: !0, buttonsTrade: !0, buttonsNormal: !1 },
    kechuang: { moreProtocol: !1, buttonsTrade: !1, buttonsNormal: !0 },
    apply: { moreProtocol: !0, buttonsTrade: !1, buttonsNormal: !0 },
    gem: { moreProtocol: !1, buttonsTrade: !1, buttonsNormal: !1 },
    kzz: { moreProtocol: !1, buttonsTrade: !1, buttonsNormal: !1 },
    st: { moreProtocol: !1, buttonsTrade: !1, buttonsNormal: !1 },
    duotianqi: { moreProtocol: !1, buttonsTrade: !1, buttonsNormal: !0 },
  };
exports.BaseProtocolConfig = (function () {
  function n(e) {
    var i = e.biz,
      s = e.matchInfo;
    t(this, n),
      o(this, "matchInfo"),
      o(
        this,
        "userinfo",
        (null == (r = u.useUserinfoStore()) ? void 0 : r.userinfo) || {}
      ),
      o(this, "biz"),
      (this.biz = i || ""),
      (this.matchInfo = s || {});
  }
  return (
    e(n, [
      {
        key: "varieties",
        get: function () {
          return c.riskTest.varieties || [];
        },
      },
      {
        key: "config",
        get: function () {
          return m[this.biz] || m.default;
        },
      },
      {
        key: "uname",
        get: function () {
          return (
            this.matchInfo.credentialname ||
            this.userinfo.credentialname ||
            "未知"
          );
        },
      },
      {
        key: "uid",
        get: function () {
          return (
            this.matchInfo.credentialid || this.userinfo.credentialid || "未知"
          );
        },
      },
      {
        key: "ufundaccount",
        get: function () {
          return (
            this.matchInfo.fundaccount || this.userinfo.fundaccount || "未知"
          );
        },
      },
      {
        key: "riskLevel",
        get: function () {
          var t =
              this.matchInfo.riskLevel ||
              this.matchInfo.risk_level ||
              this.userinfo.risk_level,
            e = f.get(h.brokerConfig.common, "RISK.".concat(t));
          return (e && e.text) || "未知";
        },
      },
      {
        key: "investTerm",
        get: function () {
          var t =
            this.matchInfo.investTerm ||
            (+this.matchInfo.invest_time || 1) - 1 ||
            (+this.userinfo.invest_time || 1) - 1;
          return (
            f.get(h.brokerConfig.common, "INVEST_TERM.USER.".concat(t)) ||
            "未知"
          );
        },
      },
      {
        key: "investRange",
        get: function () {
          if (this.matchInfo.investRange || this.matchInfo.invest_range) {
            var t = this.matchInfo.investRange || this.matchInfo.invest_range;
            return (
              Array.isArray(t) || (t = [t]), s.getVarietiesText(t.join(""))
            );
          }
          var e = (this.investType || "1").split("").map(function (t) {
            return String(+t - 1);
          });
          return s.getVarietiesText(e.join(""));
        },
      },
      {
        key: "priskLevel",
        get: function () {
          var t =
            this.matchInfo.riskLevelStock || this.matchInfo.stock_risk_level;
          return (
            f.get(h.brokerConfig.common, "PRODUCT_RISK.".concat(t)) ||
            a.RISK_STOCK[t] ||
            "未知"
          );
        },
      },
      {
        key: "pinvestTerm",
        get: function () {
          var t,
            e =
              null !== (t = this.matchInfo.investTermStock) && void 0 !== t
                ? t
                : this.matchInfo.stock_invest_term;
          return (
            f.get(h.brokerConfig.common, "INVEST_TERM.PRODUCT.".concat(e)) ||
            "未知"
          );
        },
      },
      {
        key: "pinvestRange",
        get: function () {
          var t = this,
            e =
              this.matchInfo.investRangeStock ||
              this.matchInfo.stock_invest_range ||
              "";
          return (
            Array.isArray(e) || (e = [e]),
            e
              .map(function (e) {
                return t.varieties[e] || a.RANGE[e] || "未知";
              })
              .join(",") || "未知"
          );
        },
      },
      {
        key: "flagRisk",
        get: function () {
          var t;
          return null !== (t = this.matchInfo.flagRisk) && void 0 !== t
            ? t
            : "1" !== String(this.matchInfo.risk_flag);
        },
      },
      {
        key: "flagTerm",
        get: function () {
          var t;
          return null !== (t = this.matchInfo.flagTerm) && void 0 !== t
            ? t
            : "1" !== String(this.matchInfo.term_flag);
        },
      },
      {
        key: "flagInRange",
        get: function () {
          var t;
          return null !== (t = this.matchInfo.flagInRange) && void 0 !== t
            ? t
            : "1" !== String(this.matchInfo.inrange_flag);
        },
      },
      {
        key: "flagTotal",
        get: function () {
          var t;
          return null !== (t = this.matchInfo.flagTotal) && void 0 !== t
            ? t
            : "1" !== String(this.matchInfo.total_flag);
        },
      },
      {
        key: "dealerBranchName",
        get: function () {
          return (
            this.matchInfo.dealerbranchname ||
            this.userinfo.dealerbranchname ||
            ""
          );
        },
      },
      {
        key: "investType",
        get: function () {
          return this.matchInfo.invest_type || this.userinfo.invest_type || "";
        },
      },
      {
        key: "pname",
        get: function () {
          return this.matchInfo.pname || "";
        },
      },
      {
        key: "tel",
        get: function () {
          return this.matchInfo.tel || this.userinfo.mobilephone || "";
        },
      },
      {
        key: "allMatchText",
        get: function () {
          return this.matchInfo.match_business || "无";
        },
      },
      {
        key: "allUnMatchText",
        get: function () {
          return this.matchInfo.nomatch_business || "无";
        },
      },
      {
        key: "unMatchRiskLevelText",
        get: function () {
          return this.matchInfo.level_nomatch_business || "无";
        },
      },
      {
        key: "unMatchInvestTermText",
        get: function () {
          return this.matchInfo.range_nomatch_business || "无";
        },
      },
      {
        key: "unMatchInvestRangeText",
        get: function () {
          return this.matchInfo.term_nomatch_business || "无";
        },
      },
      {
        key: "commissionTable",
        get: function () {
          return this.matchInfo.commissionTable || "";
        },
      },
    ]),
    n
  );
})();
