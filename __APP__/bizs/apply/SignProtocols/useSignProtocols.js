var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  o = require("../../../stores/protocol/useProtocolMul.js"),
  s = require("../../../stores/protocol/enum.js");
exports.useSignProtocols = function (l, u) {
  var a = r.reactive(
      n(
        {
          bizType: s.ENUM_PROTOCOL_BIZ.APPLY,
          mergingList: [],
          tilingList: [],
          isInitFail: !1,
        },
        r.cloneDeep(u) || {}
      )
    ),
    c = r.ref(!1);
  return {
    protocolConfigObj: a,
    isProtocolListInit: c,
    genMergingList: function () {
      var n,
        g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        p = g.dynamicList,
        L = void 0 === p ? [] : p,
        m = g.options,
        d = void 0 === m ? {} : m;
      u.newMode
        ? ((n = t(
            e().mark(function t(n) {
              var l, g, p, L, m, d, v, P, b, O, f, h, y;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (n.options,
                          (l = n.dynamicList),
                          (g = void 0 === l ? [] : l),
                          (m = o.useProtocolMulStore()),
                          (d = m.filterProtocolListByScene),
                          (v = m.fetchProtocolListByBiz),
                          (P = m.getProtocolConfig),
                          !c.value)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        if (
                          ((b = u.tilingConfig),
                          (O = u.mergingConfig),
                          (e.prev = 5),
                          (b && !r.isEmpty(b)) || (O && !r.isEmpty(O)))
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return");
                      case 8:
                        return (
                          r.index.showLoading({
                            title: "协议获取中",
                            noAutoHide: !0,
                          }),
                          (e.next = 11),
                          v({ biz: s.ENUM_PROTOCOL_BIZ.APPLY, forceUpdate: !0 })
                        );
                      case 11:
                        (h = e.sent),
                          r.index.hideLoading(),
                          b &&
                            !r.isEmpty(b) &&
                            (a.tilingList =
                              d({
                                list: h,
                                biz: s.ENUM_PROTOCOL_BIZ.APPLY,
                                scenes: b.sceneType || [],
                              }) || []),
                          O &&
                            !r.isEmpty(O) &&
                            (a.mergingList =
                              d({
                                list: h,
                                biz: s.ENUM_PROTOCOL_BIZ.APPLY,
                                scenes: O.sceneType || [],
                              }) || []),
                          (y =
                            (null == (p = P({ biz: s.ENUM_PROTOCOL_BIZ.APPLY }))
                              ? void 0
                              : p.mode) === s.PROTOCOL_MODE.BROKER_CGI),
                          g.length > 0 &&
                            !y &&
                            (null ==
                              (L =
                                a.mergingList.length > 0
                                  ? a.mergingList
                                  : a.tilingList) ||
                              (f = L).unshift.apply(f, i(g))),
                          (e.next = 20);
                        break;
                      case 17:
                        (e.prev = 17),
                          (e.t0 = e.catch(5)),
                          r.index.hideLoading(),
                          (a.isInitFail = !0);
                      case 20:
                        return (e.prev = 20), (c.value = !0), e.finish(20);
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[5, 17, 20, 23]]
              );
            })
          )),
          function (e) {
            return n.apply(this, arguments);
          })({ options: d, dynamicList: L })
        : (function () {
            var e,
              t,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
            c.value ||
              (a.signText &&
                a.computedList &&
                r.isFunction(a.computedList) &&
                (a.mergingList = i(a.computedList(l.value))),
              n.length > 0 &&
                (null ==
                  (t =
                    a.mergingList.length > 0 ? a.mergingList : a.tilingList) ||
                  (e = t).unshift.apply(e, i(n))),
              (c.value = !0));
          })(L);
    },
  };
};
