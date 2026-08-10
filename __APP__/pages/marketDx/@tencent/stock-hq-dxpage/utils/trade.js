var e,
  r,
  T = require("../../../../../@babel/runtime/helpers/defineProperty"),
  O = require("../../../../../@babel/runtime/helpers/createClass"),
  E = require("../../../../../@babel/runtime/helpers/classCallCheck"),
  t = new ((function () {
    return O(function e(r) {
      for (var T in (E(this, e), r))
        if (r.hasOwnProperty(T)) {
          if (((this[T] = r[T]), this[r[T]]))
            throw Error("duplite key and values, ensure they are uniq");
          Object.defineProperty(this, r[T], { enumerable: !1, value: T });
        }
    });
  })())({
    STOCK: "0",
    DEBT: "1",
    BOND: "2",
    NEWSTOCK: "3",
    DEPOSITE: "4",
    ALLOT: "5",
    DUOTIANQI: "6",
  });
(t.NAME =
  (T((e = {}), t.STOCK, "股票"),
  T(e, t.DEBT, "国债逆回购"),
  T(e, t.BOND, "可转债"),
  T(e, t.ALLOT, "配股"),
  T(e, t.NEWSTOCK, "新股"),
  T(e, t.DEPOSITE, "托管"),
  T(e, t.DUOTIANQI, "券商理财"),
  e)),
  (t.UNIT =
    (T((r = {}), t.STOCK, "股"),
    T(r, t.DEBT, "元"),
    T(r, t.BOND, "张"),
    T(r, t.ALLOT, "股"),
    T(r, t.NEWSTOCK, "股"),
    T(r, t.DEPOSITE, ""),
    T(r, t.DUOTIANQI, "元"),
    r)),
  t.STOCK,
  t.DEBT,
  t.BOND,
  t.ALLOTMENT,
  t.NEWSTOXK,
  t.DUOTIANQI,
  (exports.USERSTATE = {
    HASACCOUNT: "0",
    NOACCOUNT: "1",
    VERIFYING: "2",
    HASBUNDLE: "3",
    FAILED: "4",
  });
