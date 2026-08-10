require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../@babel/runtime/helpers/Objectvalues");
var e = function (e) {
  return /[\u4e00-\u9fa5]/gm.test(e);
};
(exports.checkHasChineseStr = e),
  (exports.getChineseStrLength = function (r) {
    for (var t = 0, n = 0; n < r.length; n++) e(r[n]) ? (t += 2) : (t += 1);
    return t;
  }),
  (exports.hasRepeatStr = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = e.str,
      t = void 0 === r ? "" : r,
      n = e.length,
      u = void 0 === n ? 1 : n,
      i = e.isContinuous,
      s = void 0 !== i && i,
      o = !1;
    if (t && u >= 1) {
      var a = t.split("");
      if (s) {
        for (var l = 1, c = 1, f = 0; f < a.length; f++)
          void 0 !== a[f + 1] &&
            (a[f] === a[f + 1] ? ((l += 1), (c = Math.max(c, l))) : (l = 1));
        o = c >= u;
      } else {
        var v = a.reduce(function (e, r) {
          return e[r] ? (e[r] += 1) : (e[r] = 1), e;
        }, {});
        o = Object.values(v).some(function (e) {
          return +e >= u;
        });
      }
    }
    return o;
  }),
  (exports.isAddressStr = function (e) {
    return /[^a-zA-Z0-9\-\u4e00-\u9fa5]/gm.test(e);
  }),
  (exports.isChineseName = function (e) {
    return !/[^·\u4e00-\u9fa5]/gm.test(e);
  }),
  (exports.judgeStrInclude = function (e, r) {
    for (var t = !1, n = 0; n < r.length; n++)
      if (null == e ? void 0 : e.includes(r[n])) {
        t = !0;
        break;
      }
    return t;
  });
