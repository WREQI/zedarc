require("../../app.js");
var e = require("../../common/vendor.js");
require("../../service/broker.js");
var o = require("../../cgi/signProtocol.js"),
  r = require("../../utils/market.js");
require("../../service/sdk/lib/api.js");
var t = require("../../service/sdk/platform/mp-weixin.js"),
  i = require("../../stores/user/useUserinfo.js"),
  n = require("../../config/broker/11100/index.js"),
  s = {
    name: "RegisterRiskPopup",
    components: {
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      VProtocol: function () {
        return "../../bizs/protocol/rich-text-protocol/index.js";
      },
      LoadingProvider: function () {
        return "../../bizs/protocol/loading-provider/index.js";
      },
    },
    options: { styleIsolation: "shared" },
    props: {
      stockCls: { type: String, default: "" },
      type: { type: String, default: "stock" },
    },
    emits: ["confirm", "skip"],
    setup: function (s, a) {
      var c = a.emit,
        u = e.getCurrentInstance().proxy,
        l = e.computed(function () {
          var e;
          return (
            "0" === (null == (e = f.value) ? void 0 : e.popiporisk) &&
            ("stock" !== s.type || m.value)
          );
        }),
        d = e.ref(n.brokerConfig.trade.register.active),
        p = i.useUserinfoStore(),
        f = e.storeToRefs(p).userinfo,
        m = e.computed(function () {
          return s.stockCls === r.MARKET_CLASS.A;
        }),
        g = e.computed(function () {
          return n.brokerConfig.trade.register.isModalShowDetail;
        }),
        v = e.computed(function () {
          return n.brokerConfig.trade.register.modalHeader;
        }),
        k = e.computed(function () {
          return (
            n.brokerConfig.trade.register.modalText ||
            "沪深交易所已全面实施注册制，请您确认并知晓注册制相关规则内容"
          );
        }),
        b = e.computed(function () {
          return n.brokerConfig.trade.register.protocol || [];
        }),
        C = e.debounce(function () {
          o.signProtocol
            .signRegisterRisk()
            .then(function () {
              p.forceGetUserInfo();
            })
            .catch(function (e) {})
            .finally(function () {}),
            c("confirm");
        }, 200),
        y = e.watchEffect(function () {
          (d.value && (e.isEmpty(f.value) || l.value)) ||
            e.nextTick$1(function () {
              c("skip"), y();
            });
        });
      return {
        modalText: k,
        modalHeader: v,
        protocolList: b,
        visible: l,
        isCfgOpen: d,
        isModalShowDetail: g,
        onConfirm: C,
        gotoProtocol: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = e.url,
            r = void 0 === o ? "" : o,
            i = e.key,
            n = void 0 === i ? "" : i;
          r
            ? t.sdk.openUrlWithExtraWebview({ url: r })
            : n && u.$router.push({ name: "VProtocol", query: { key: n } });
        },
      };
    },
  };
Array ||
  (
    e.resolveComponent("VProtocol") +
    e.resolveComponent("LoadingProvider") +
    e.resolveComponent("mp-dialog")
  )();
var a = e._export_sfc(s, [
  [
    "render",
    function (o, r, t, i, n, s) {
      return e.e(
        { a: i.isCfgOpen },
        i.isCfgOpen
          ? e.e(
              { b: i.modalHeader },
              i.modalHeader ? { c: e.t(i.modalHeader) } : {},
              {
                d: e.t(i.modalText),
                e: i.isModalShowDetail ? 1 : "",
                f: !i.isModalShowDetail,
              },
              i.isModalShowDetail
                ? {
                    h: e.f(i.protocolList, function (o, r, t) {
                      return e.e(
                        { a: o.key },
                        o.key
                          ? {
                              b: "a0d4eb63-2-" + t + ",a0d4eb63-1",
                              c: e.p({ "protocol-key": o.key }),
                            }
                          : {},
                        { d: r }
                      );
                    }),
                  }
                : {
                    g: e.f(i.protocolList, function (o, r, t) {
                      return e.e(
                        { a: o.name },
                        o.name
                          ? {
                              b: e.t(o.name),
                              c: e.o(function (e) {
                                return i.gotoProtocol(o);
                              }, r),
                            }
                          : {},
                        { d: r }
                      );
                    }),
                  },
              { i: e.o(i.onConfirm), j: e.p({ visible: i.visible }) }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a0d4eb63"],
]);
wx.createComponent(a);
