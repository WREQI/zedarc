var e = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = Object.defineProperty,
  t = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  s = function (e, n, t) {
    return n in e
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  l = require("../common/vendor.js"),
  c = require("../utils/broker/usePluginInfo.js"),
  p = {
    components: {
      ZhaoShang: function () {
        return "./zhaoshang/password.js";
      },
      HuaLin: function () {
        return "./hualin/password.js";
      },
    },
    setup: function () {
      var r,
        p = this,
        f = l.ref(!1);
      l.onMounted(function () {
        return (
          (e = p),
          null,
          (r = n().mark(function e() {
            return n().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), l.getPcIsDisabledTrade();
                  case 2:
                    f.value = e.sent;
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })),
          new Promise(function (n, t) {
            var i = function (e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  t(e);
                }
              },
              o = function (e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              a = function (e) {
                return e.done
                  ? n(e.value)
                  : Promise.resolve(e.value).then(i, o);
              };
            a((r = r.apply(e, null)).next());
          })
        );
        var e, r;
      });
      var v,
        h = l.useBrokerInfo(),
        b = h.hasBind,
        d = h.highestPriorityDealer,
        g = void 0 === d ? {} : d,
        y = h.isBrokerPluginEnable,
        P = h.getBrokerMaintain,
        m = l.computed(function () {
          return y(g.value.code) && !f.value && b.value;
        }),
        w = c.usePluginInfo(g),
        j = l.ref(
          null == (r = P({ bulletinType: l.BULLETIN_TYPE.TRADE }))
            ? void 0
            : r.isMaintain
        );
      return (
        l.watch(
          function () {
            return g.value;
          },
          function () {
            var e;
            j.value =
              null == (e = P({ bulletinType: l.BULLETIN_TYPE.TRADE }))
                ? void 0
                : e.isMaintain;
          }
        ),
        (v = (function (n, r) {
          for (var t in r || (r = {})) a.call(r, t) && s(n, t, r[t]);
          if (o) {
            var i,
              l = e(o(r));
            try {
              for (l.s(); !(i = l.n()).done; ) {
                t = i.value;
                u.call(r, t) && s(n, t, r[t]);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
          }
          return n;
        })({}, w)),
        t(v, i({ isSupportBrokerPlugin: m, isMaintain: j }))
      );
    },
  };
Array || (l.resolveComponent("zhao-shang") + l.resolveComponent("hua-lin"))();
var f = l._export_sfc(p, [
  [
    "render",
    function (e, n, r, t, i, o) {
      return l.e(
        { a: t.isSupportBrokerPlugin && !t.isMaintain },
        t.isSupportBrokerPlugin && !t.isMaintain
          ? l.e(
              { b: e.isZhaoShang },
              (e.isZhaoShang, {}),
              { c: e.isHuaLin },
              (e.isHuaLin, {})
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(f);
