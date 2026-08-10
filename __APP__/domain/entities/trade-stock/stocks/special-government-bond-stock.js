var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  t = require("../../../../@babel/runtime/helpers/assertThisInitialized"),
  i = require("../../../../@babel/runtime/helpers/inherits"),
  n = require("../../../../@babel/runtime/helpers/createSuper"),
  u = require("../../../../@babel/runtime/helpers/typeof");
require("../../../../app.js");
var a = Object.defineProperty,
  s = function (e, r, t) {
    return (
      (function (e, r, t) {
        r in e
          ? a(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      })(e, "symbol" != u(r) ? r + "" : r, t),
      t
    );
  },
  l = (function (u) {
    i(l, u);
    var a = n(l);
    function l() {
      var r;
      return (
        e(this, l),
        (r = a.apply(this, arguments)),
        s(t(r), "quantityUnit", "张"),
        s(t(r), "stockTypeName", "债券"),
        s(t(r), "sellTipsText", ""),
        r
      );
    }
    return (
      r(l, [
        {
          key: "AmountMinLimitRetMsg",
          get: function () {
            return "根据交易所规则，国债匹配成交的最小申报单位为1000张，交易数量需为1000及其整倍数";
          },
        },
        {
          key: "isSpecialGovernmentBonds",
          get: function () {
            return !0;
          },
        },
        {
          key: "getLimitChg",
          value: function () {
            return { UP: 1 / 0, DOWN: -1 / 0 };
          },
        },
      ]),
      l
    );
  })(require("./a-stock.js").IStock);
exports.SpecialGovernmentBondStock = l;
