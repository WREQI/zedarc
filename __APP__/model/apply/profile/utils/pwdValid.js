var n,
  e = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../@babel/runtime/helpers/defineProperty");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = {
    noId: function (n, e) {
      var r = e.credid;
      return -1 === (void 0 === r ? "" : r).indexOf(n);
    },
    noTel: function (n, e) {
      var r = e.tel;
      return -1 === (void 0 === r ? "" : r).indexOf(n);
    },
    noTripleRepeat: function (n) {
      return n
        .split("")
        .reduce(function (n, e) {
          return (n[e] = (n[e] || 0) + 1) && n;
        }, [])
        .every(function (e) {
          return e < Math.ceil(n.length / 2);
        });
    },
    noThreeDiffNum: function (n) {
      return new Set(n).size > 3;
    },
    noContinuous: function (n) {
      return (
        !n.split("").every(function (n, e, r) {
          return r[r.length - 1] - n == 5 - e;
        }) &&
        !n.split("").every(function (n, e, r) {
          return n - r[r.length - 1] == 5 - e;
        })
      );
    },
    noTwiceRepeatContinuous: function (n) {
      return !n.split("").some(function (e, r) {
        return (
          r > 2 &&
          1 === Math.abs(e - n[r - 3]) &&
          e === n[r - 2] &&
          1 === Math.abs(e - n[r - 1])
        );
      });
    },
    nonFourConsecutiveNum: function (n) {
      return i(n, 4);
    },
    nonTwiceThreeConsecutiveNum: function (n) {
      var e = n.slice(0, 3),
        r = n.slice(3, 6),
        t = ["012", "123", "234", "345", "456", "567", "678", "789"],
        i = ["987", "876", "765", "654", "543", "432", "321", "210"];
      return !(
        (t.includes(e) || i.includes(e)) &&
        (t.includes(r) || i.includes(r))
      );
    },
    nonZeroFirst: function (n) {
      return o(n, 0);
    },
  },
  i = function (n, e) {
    for (var r = 0; r < n.length - e + 1; r++) {
      var t = n.slice(r, r + e),
        i = "0123456789".includes(t),
        o = "9876543210".includes(t);
      if (i || o) return !1;
    }
    return !0;
  },
  o = function (n) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      r = String(e);
    return (
      1 !== (null == r ? void 0 : r.length) ||
      !(null == n ? void 0 : n.startsWith(r))
    );
  },
  u = [
    t.noId,
    t.noTel,
    t.noTripleRepeat,
    t.noThreeDiffNum,
    t.noContinuous,
    t.noTwiceRepeatContinuous,
  ],
  c =
    (r((n = {}), t.noId, "请不要使用身份证号码的部分内容作为密码，请重新设置"),
    r(n, t.noTel, "请不要使用手机号的部分内容作为密码，请重新设置"),
    r(n, t.noTripleRepeat, "同一数字不能出现3次及以上，请重新设置"),
    r(n, t.noThreeDiffNum, "密码至少4个不同数字，请重新设置"),
    r(n, t.noContinuous, "不能设置连续递增或连续递减的数字，请重新设置"),
    r(n, t.noTwiceRepeatContinuous, "不能连续重复2位相邻数字，请重新设置"),
    r(n, t.nonFourConsecutiveNum, "请勿使用连续四位数字作为密码，如：121234"),
    r(
      n,
      t.nonTwiceThreeConsecutiveNum,
      "请勿设置连续三位数字作为密码，如：123123"
    ),
    r(n, t.nonZeroFirst, "首位数字不能为0，请重新设置"),
    n),
  l = {
    RULE: t,
    checkWeakPwd: function () {
      var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if ("string" == typeof n && 6 !== n.length)
        throw { reason: "密码长度不正确" };
      [].concat(u, e(r)).forEach(function (e) {
        if (!e(n, t)) throw { reason: c[e] };
      });
    },
  };
exports.PwdValid = l;
