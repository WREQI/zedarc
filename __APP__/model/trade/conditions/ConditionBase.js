var e = require("../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../@babel/runtime/helpers/createClass"),
  i = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var n = Object.defineProperty,
  s = function (e, t, s) {
    return (
      (function (e, t, i) {
        t in e
          ? n(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != i(t) ? t + "" : t, s),
      s
    );
  },
  o = require("../../../domain/entities/utils.js"),
  r = require("../../../common/vendor.js"),
  c = (function (i, n) {
    function o() {
      e(this, o),
        s(this, "price", "0"),
        s(this, "amount", "0"),
        s(this, "isSupportStock", !1),
        s(this, "isUpdate", !1),
        s(this, "condId", ""),
        s(this, "market", ""),
        s(this, "code", ""),
        s(this, "name", ""),
        s(this, "isRecreate", !1);
    }
    return (
      t(o, [
        {
          key: i,
          get: function () {
            return r.__CJS__export_mul__(this.price, this.amount);
          },
        },
        {
          key: n,
          get: function () {
            return !(!this.code || !this.market);
          },
        },
        {
          key: "reset",
          value: function () {
            (this.price = "0"), (this.amount = "0"), (this.isSupportStock = !1);
          },
        },
        {
          key: "setBaseInfo",
          value: function (e) {
            (this.market = e.market),
              (this.code = e.code),
              (this.condId = e.condId || ""),
              (this.name = e.name || ""),
              (this.isRecreate = !!e.isRecreate),
              (this.isUpdate = !!e.condId && !this.isRecreate);
          },
        },
        {
          key: "setCondId",
          value: function (e) {
            this.condId = e;
          },
        },
        {
          key: "changeStock",
          value: function (e) {
            this.setBaseInfo(e), this.reset();
          },
        },
        {
          key: "setPrice",
          value: function (e) {
            this.price = e;
          },
        },
        {
          key: "setAmount",
          value: function (e) {
            this.amount = e;
          },
        },
        {
          key: "setIsSupportStock",
          value: function (e) {
            this.isSupportStock = e;
          },
        },
      ]),
      o
    );
  })(
    o.isMp ? "_totalMoney" : "totalMoney",
    o.isMp ? "_isStockSet" : "isStockSet"
  ),
  u = o.isMp
    ? new Proxy(c, {
        construct: function () {
          var e = Reflect.construct.apply(Reflect, arguments);
          return (
            ["totalMoney", "isStockSet"].forEach(function (t) {
              Object.defineProperty(e, t, {
                get: function () {
                  return this["_".concat(t)];
                },
                enumerable: !0,
              });
            }),
            e
          );
        },
      })
    : c;
exports.ConditionBase = u;
