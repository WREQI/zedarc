var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  t = function (e, o, r) {
    return o in e
      ? n(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[o] = r);
  },
  a = require("../../common/vendor.js"),
  u = require("../../utils/broker/usePluginInfo.js"),
  l = {
    props: { dealerCode: { type: String, default: "" } },
    setup: function (n) {
      var l = a.useBrokerInfo() || {},
        s = l.highestPriorityDealer,
        p = l.dealerList,
        g = a.computed(function () {
          var e;
          if (
            n.dealerCode &&
            (null == (e = null == p ? void 0 : p.value) ? void 0 : e.length) > 0
          ) {
            var o = p.value.find(function (e) {
              return e.code === n.dealerCode;
            });
            if (o) return o;
          }
          return (null == s ? void 0 : s.value) || {};
        });
      return (function (n, a) {
        for (var u in a || (a = {})) r.call(a, u) && t(n, u, a[u]);
        if (o) {
          var l,
            s = e(o(a));
          try {
            for (s.s(); !(l = s.n()).done; ) {
              u = l.value;
              i.call(a, u) && t(n, u, a[u]);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
        }
        return n;
      })({}, u.usePluginInfo(g));
    },
  };
Array ||
  (
    a.resolveComponent("mp-privacy-dialog") +
    a.resolveComponent("zhao-shang") +
    a.resolveComponent("hua-lin") +
    a.resolveComponent("guo-xin") +
    a.resolveComponent("guo-jin") +
    a.resolveComponent("guang-fa") +
    a.resolveComponent("zhong-jin-cai-fu") +
    a.resolveComponent("zhong-xin-jian-tou")
  )();
var s = a._export_sfc(l, [
  [
    "render",
    function (e, n, o, r, i, t) {
      return a.e(
        { a: e.rootFontSize, b: e.isZhaoShang },
        (e.isZhaoShang, {}),
        { c: e.isHuaLin },
        (e.isHuaLin, {}),
        { d: e.isGuoXin },
        (e.isGuoXin, {}),
        { e: e.isGuoJin },
        (e.isGuoJin, {}),
        { f: e.isGuangFa },
        (e.isGuangFa, {}),
        { g: e.isZhongJinCaiFu },
        (e.isZhongJinCaiFu, {}),
        { h: e.isZhongXinJianTou },
        (e.isZhongXinJianTou, {})
      );
    },
  ],
]);
exports.MiniProgramPage = s;
