var o = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var i = require("../../../common/vendor.js"),
  r = require("../../../common/components/Dialog/index.js"),
  l = require("../../../stores/protocol/useProtocolMul.js"),
  c = require("../../../stores/protocol/enum.js"),
  s = {
    name: "SignProtocol",
    components: {
      ProtocolBarWrap: function () {
        return "./component/ProtocolBarWrap.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
    },
    props: {
      protocolConfig: {
        type: Object,
        default: function () {
          return {
            useWrapStyle: !1,
            hideCheckBox: !0,
            signText: "",
            allProtocolName: "",
            signTextAppendix: "",
            tilingList: [],
            mergingList: [],
            buttonType: "back",
          };
        },
      },
      isProtocolCheck: { type: Boolean, default: !1 },
    },
    setup: function (s, a) {
      var p,
        u,
        g = a.emit,
        f = l.useProtocolMulStore(),
        h = f.filterProtocolListByScene,
        m = f.fetchProtocolListByBiz,
        C = f.toPreviewProtocol,
        d = i.ref(!1),
        b = i.computed(function () {
          return s.protocolConfig.isInitFail;
        }),
        P = i.computed(function () {
          return Boolean(
            s.protocolConfig.tilingList &&
              s.protocolConfig.tilingList.length > 0
          );
        }),
        L = i.computed(function () {
          return Boolean(
            s.protocolConfig.mergingList &&
              s.protocolConfig.mergingList.length > 0
          );
        }),
        x = i.ref([]),
        y = i.computed(function () {
          return L.value ? s.protocolConfig.mergingList : x.value || [];
        });
      function v() {
        d.value = !0;
      }
      return (
        i.onMounted(function () {}),
        {
          isInitFail: b,
          isProtocolsDialogVisible: d,
          hasMergingList: L,
          hasTilingList: P,
          mergingProtocols: y,
          toProtocol4InitFail:
            ((u = n(
              t().mark(function o() {
                var n, l, c, a, p, u, g;
                return t().wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (
                            (n = s.protocolConfig),
                            (l = n.bizType),
                            (c = void 0 === l ? "" : l),
                            (a = n.tilingConfig),
                            (p = n.mergingConfig),
                            (o.prev = 1),
                            (o.next = 4),
                            m({ biz: c, forceUpdate: !0 })
                          );
                        case 4:
                          return (
                            (u = o.sent),
                            (g = []),
                            a &&
                              !i.isEmpty(a) &&
                              g.push.apply(g, e(a.sceneType || [])),
                            p &&
                              !i.isEmpty(p) &&
                              g.push.apply(g, e(p.sceneType || [])),
                            (o.next = 10),
                            h({ list: u, biz: c, scenes: g })
                          );
                        case 10:
                          if (((o.t0 = o.sent), o.t0)) {
                            o.next = 13;
                            break;
                          }
                          o.t0 = [];
                        case 13:
                          (x.value = o.t0), v(), (o.next = 20);
                          break;
                        case 17:
                          (o.prev = 17),
                            (o.t1 = o.catch(1)),
                            r.Dialog({
                              message: o.t1.retmsg || "网络繁忙 请稍后再试",
                            });
                        case 20:
                        case "end":
                          return o.stop();
                      }
                  },
                  o,
                  null,
                  [[1, 17]]
                );
              })
            )),
            function () {
              return u.apply(this, arguments);
            }),
          toProtocol:
            ((p = n(
              t().mark(function e(n) {
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            C(
                              o(
                                o({}, n),
                                {},
                                { buttonType: s.protocolConfig.buttonType }
                              ),
                              c.ENUM_PROTOCOL_BIZ.APPLY
                            )
                          );
                        case 3:
                          t.next = 8;
                          break;
                        case 5:
                          (t.prev = 5),
                            (t.t0 = t.catch(0)),
                            r.Dialog({
                              message:
                                (null == t.t0 ? void 0 : t.t0.retmsg) ||
                                "协议加载失败，请稍后重试",
                            });
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                );
              })
            )),
            function (o) {
              return p.apply(this, arguments);
            }),
          showProtocolList: v,
          handleChange: function () {
            g("check", !s.isProtocolCheck);
          },
        }
      );
    },
  };
Array ||
  (i.resolveComponent("ProtocolBarWrap") + i.resolveComponent("mp-dialog"))();
var a = i._export_sfc(s, [
  [
    "render",
    function (o, t, e, n, r, l) {
      return i.e(
        {
          a: i.t(e.protocolConfig.signText),
          b: i.o(function () {
            return n.handleChange && n.handleChange.apply(n, arguments);
          }),
          c: n.isInitFail,
        },
        n.isInitFail
          ? {
              d: i.t(e.protocolConfig.placeholderName),
              e: i.o(function () {
                return (
                  n.toProtocol4InitFail &&
                  n.toProtocol4InitFail.apply(n, arguments)
                );
              }),
            }
          : i.e(
              { f: n.hasTilingList || n.hasMergingList },
              n.hasTilingList || n.hasMergingList
                ? i.e(
                    { g: n.hasTilingList },
                    n.hasTilingList
                      ? {
                          h: i.f(
                            e.protocolConfig.tilingList,
                            function (o, t, r) {
                              return i.e(
                                {
                                  a: i.t(o.name),
                                  b: i.o(function (t) {
                                    return n.toProtocol(o);
                                  }, t),
                                  c:
                                    t !==
                                    e.protocolConfig.tilingList.length - 1,
                                },
                                (t !== e.protocolConfig.tilingList.length - 1 ||
                                  n.hasMergingList,
                                {}),
                                { d: t }
                              );
                            }
                          ),
                          i: n.hasMergingList,
                        }
                      : {},
                    { j: n.hasMergingList },
                    n.hasMergingList
                      ? {
                          k: i.t(
                            e.protocolConfig.allProtocolName || "全部文件"
                          ),
                          l: i.o(function () {
                            return (
                              n.showProtocolList &&
                              n.showProtocolList.apply(n, arguments)
                            );
                          }),
                        }
                      : {}
                  )
                : {}
            ),
        { m: e.protocolConfig.signTextAppendix },
        e.protocolConfig.signTextAppendix
          ? {
              n: i.t(e.protocolConfig.signTextAppendix),
              o: i.o(function () {
                return n.handleChange && n.handleChange.apply(n, arguments);
              }),
            }
          : {},
        {
          p: i.o(n.handleChange),
          q: i.p({
            "is-check": e.isProtocolCheck,
            "hide-checkbox": e.protocolConfig.hideCheckBox,
            "use-wrap-style": e.protocolConfig.useWrapStyle,
          }),
          r: i.f(n.mergingProtocols, function (o, t, e) {
            return {
              a: i.t(o.name),
              b: t,
              c: i.o(function (t) {
                return n.toProtocol(o);
              }, t),
            };
          }),
          s: i.o(function (t) {
            return o.$emit("check", !0);
          }),
          t: i.o(function (o) {
            return (n.isProtocolsDialogVisible = !1);
          }),
          v: i.p({
            visible: n.isProtocolsDialogVisible,
            title: "协议列表",
            "show-cancel-button": !0,
            "cancel-button-text": "返回",
            "confirm-button-text": "已阅读并同意",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d3497869"],
]);
wx.createComponent(a);
