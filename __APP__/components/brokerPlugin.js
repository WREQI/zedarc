var n = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  o = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  t = Object.prototype.propertyIsEnumerable,
  u = function (n, o, r) {
    return o in n
      ? e(n, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (n[o] = r);
  },
  s = require("../common/vendor.js"),
  g = require("../utils/broker/usePluginInfo.js"),
  l = {
    components: {
      SystemError: function () {
        return "../pages/broker/system/components/error.js";
      },
      ZhaoShang: function () {
        return "../pages/broker/components/zhaoshang/index.js";
      },
      HuaLin: function () {
        return "../pages/broker/components/hualin/index.js";
      },
      GuoXin: function () {
        return "../pages/broker/components/guoxin/index.js";
      },
      GuoJin: function () {
        return "../pages/broker/components/guojin/index.js";
      },
      ZhongJinCaiFu: function () {
        return "../pages/broker/components/zhongjincaifu/index.js";
      },
      GuangFa: function () {
        return "../pages/broker/components/guangfa/index.js";
      },
      ZhongXinJianTou: function () {
        return "../pages/broker/components/zhongxinjiantou/index.js";
      },
    },
    setup: function (e, l) {
      var c,
        p = l.emit,
        h = s.useBrokerInfo(),
        f = h.highestPriorityDealer,
        m = h.getBrokerMaintain,
        d = g.usePluginInfo(f),
        y = s.ref(!1);
      return (
        s.watch(
          function () {
            return f.value;
          },
          function () {
            var n;
            (y.value = !!(null == (n = m()) ? void 0 : n.isMaintain)),
              y.value || s.usePluginSafebox().processZl(f.value.code);
          },
          { immediate: !0 }
        ),
        s.wx$1.hideShareMenu({ menus: ["shareAppMessage", "shareTimeline"] }),
        (c = (function (e, o) {
          for (var r in o || (o = {})) a.call(o, r) && u(e, r, o[r]);
          if (i) {
            var s,
              g = n(i(o));
            try {
              for (g.s(); !(s = g.n()).done; ) {
                r = s.value;
                t.call(o, r) && u(e, r, o[r]);
              }
            } catch (n) {
              g.e(n);
            } finally {
              g.f();
            }
          }
          return e;
        })({}, d)),
        o(
          c,
          r({
            isMaintain: y,
            highestPriorityDealer: f,
            onPluginReady: function () {
              p("ready");
            },
          })
        )
      );
    },
  };
Array ||
  (
    s.resolveComponent("system-error") +
    s.resolveComponent("zhao-shang") +
    s.resolveComponent("hua-lin") +
    s.resolveComponent("guo-xin") +
    s.resolveComponent("guo-jin") +
    s.resolveComponent("zhong-jin-cai-fu") +
    s.resolveComponent("guang-fa") +
    s.resolveComponent("zhong-xin-jian-tou")
  )();
var c = s._export_sfc(l, [
  [
    "render",
    function (n, e, o, r, i, a) {
      return s.e(
        { a: r.isMaintain },
        r.isMaintain
          ? {
              b: s.o(r.onPluginReady, 2175),
              c: s.p({
                reason: "maintain",
                broker: r.highestPriorityDealer.code,
              }),
            }
          : s.e(
              { d: n.isZhaoShang },
              n.isZhaoShang ? { e: s.o(r.onPluginReady, 2176) } : {},
              { f: n.isHuaLin },
              n.isHuaLin ? { g: s.o(r.onPluginReady, 2177) } : {},
              { h: n.isGuoXin },
              n.isGuoXin ? { i: s.o(r.onPluginReady, 2178) } : {},
              { j: n.isGuoJin },
              n.isGuoJin ? { k: s.o(r.onPluginReady, 2179) } : {},
              { l: n.isZhongJinCaiFu },
              n.isZhongJinCaiFu ? { m: s.o(r.onPluginReady, 2180) } : {},
              { n: n.isGuangFa },
              n.isGuangFa ? { o: s.o(r.onPluginReady, 2181) } : {},
              { p: n.isZhongXinJianTou },
              n.isZhongXinJianTou ? { q: s.o(r.onPluginReady, 2182) } : {}
            )
      );
    },
  ],
  ["__scopeId", "data-v-558860b5"],
]);
wx.createComponent(c);
