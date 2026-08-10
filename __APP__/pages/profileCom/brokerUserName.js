var e = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  t = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  u = function (e, n, t) {
    return n in e
      ? r(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  l = require("../../common/vendor.js"),
  s = require("../../utils/broker/usePluginInfo.js"),
  p = {
    setup: function (r, p) {
      var c,
        f,
        b,
        d = p.emit,
        m =
          (null ==
          (f = null == (c = getApp().globalData.detect) ? void 0 : c.env)
            ? void 0
            : f.IS_PCWEIXIN) || !1,
        g = l.useBrokerInfo(),
        h = g.highestPriorityDealer,
        v = void 0 === h ? {} : h,
        y = g.getBrokerMaintain,
        P = g.hasBind,
        S = g.isBrokerPluginEnable,
        N = s.usePluginInfo(v);
      return (
        (b = (function (r, n) {
          for (var t in n || (n = {})) a.call(n, t) && u(r, t, n[t]);
          if (i) {
            var l,
              s = e(i(n));
            try {
              for (s.s(); !(l = s.n()).done; ) {
                t = l.value;
                o.call(n, t) && u(r, t, n[t]);
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
          }
          return r;
        })(
          {
            isMaintain: y({ bulletinType: l.BULLETIN_TYPE.TRADE }).isMaintain,
            isSupportBrokerPlugin: l.computed(function () {
              return S(v.value.code) && !m && P.value;
            }),
          },
          N
        )),
        n(
          b,
          t({
            handleSetUserName: function (e) {
              var r = e;
              r.userName && d("setUserName", r.userName);
            },
          })
        )
      );
    },
  },
  c = l._export_sfc(p, [
    [
      "render",
      function (e, r, n, t, i, a) {
        return l.e(
          { a: t.isSupportBrokerPlugin && !t.isMaintain },
          t.isSupportBrokerPlugin && !t.isMaintain
            ? l.e(
                { b: e.isZhaoShang },
                e.isZhaoShang
                  ? {
                      c: l.o(function () {
                        return (
                          t.handleSetUserName &&
                          t.handleSetUserName.apply(t, arguments)
                        );
                      }, 1562),
                    }
                  : e.isHuaLin
                  ? {
                      e: l.o(function () {
                        return (
                          t.handleSetUserName &&
                          t.handleSetUserName.apply(t, arguments)
                        );
                      }, 1563),
                    }
                  : {},
                { d: e.isHuaLin }
              )
            : {}
        );
      },
    ],
  ]);
wx.createComponent(c);
