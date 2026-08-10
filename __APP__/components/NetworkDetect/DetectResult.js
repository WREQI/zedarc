var e,
  t,
  o,
  n,
  r = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var E = require("../../common/vendor.js");
require("../../service/broker.js");
var T = require("../../service/aegis/platform/not-wujie.js"),
  c = require("../../utils/navigator.js"),
  i = require("./useNetworkDetect.js"),
  a = require("./constants.js"),
  C = require("../../config/broker/11100/index.js"),
  _ =
    (r(
      (e = {}),
      a.NETWORK_DETECT_ACTION.ABROAD_IP,
      "network-detect-component__middle"
    ),
    r(e, a.NETWORK_DETECT_ACTION.UNREACHABLE, "network-detect-component__big"),
    r(e, "other", "network-detect-component__small"),
    e),
  s =
    (r((t = {}), a.NETWORK_DETECT_ACTION.ABROAD_IP, 650),
    r(t, a.NETWORK_DETECT_ACTION.UNREACHABLE, 850),
    r(t, "other", 550),
    t),
  u =
    (r(
      (o = {}),
      a.NETWORK_DETECT_ACTION.BLACK_IP,
      "https://st.gtimg.com/design/457e713bf8f2966271860e685785514a.png"
    ),
    r(
      o,
      "other",
      "https://st.gtimg.com/design/ac46c97293056c156c39767fd0d0e0bd.png"
    ),
    o),
  d =
    (r((n = {}), a.NETWORK_DETECT_ACTION.ABROAD_IP, "境外网络访问受限"),
    r(n, a.NETWORK_DETECT_ACTION.BLACK_IP, "账户访问受限"),
    r(n, "other", "网络异常"),
    n),
  l = {
    components: {
      Popup: function () {
        return "../../common/components/Popup/index.js";
      },
    },
    props: {
      closeIcon: { type: Boolean, default: !0 },
      theme: { type: String, default: a.NETWORK_DETECT_THEME.EMBEDDED },
      navbar: { type: Boolean, default: !1 },
      minHeight: { type: Number, default: 0 },
    },
    setup: function (e) {
      var t = E.getCurrentInstance().proxy,
        o = E.storeToRefs(i.useNetworkDetect()),
        n = o.uiType,
        r = o.resultData,
        l = E.ref(!0),
        p = E.computed(function () {
          return r.value.action;
        }),
        N = E.computed(function () {
          return r.value.networkType;
        }),
        O = E.computed(function () {
          return e.theme === a.NETWORK_DETECT_THEME.EMBEDDED;
        }),
        m = E.computed(function () {
          return p.value.length > 0;
        }),
        A = E.computed(function () {
          var t = p.value,
            o =
              (s[t] || s.other) > e.minHeight
                ? ""
                : "height:".concat(e.minHeight, "rpx");
          return {
            title: d[t] || d.other,
            class: O.value ? _[t] || _.other : "",
            icon: u[t] || u.other,
            actionStyle: o,
          };
        });
      function R() {
        t.$emit("cancel");
      }
      return {
        dialogShow: l,
        check: m,
        showCloseIcon: e.closeIcon,
        uiType: n,
        resultData: r,
        broker: C.brokerConfig,
        action: p,
        network: N,
        resultConfig: A,
        embeddedMode: O,
        onContact: function () {
          c.uniHref(
            "https://aics.tenpay.com/aics-wzq/xiaomi/page.do?channel=14&type=chat&_=" +
              +new Date()
          ),
            T.aegisReporter.reportEvent(
              a.NETWORK_DETECT_MONITOR_EVENT.CLICK_JUMP_CUSTOMER,
              { ext2: C.brokerConfig.base.code }
            );
        },
        onPhoneCall: function () {
          if (C.brokerConfig.base.tel) {
            var e = "".concat(C.brokerConfig.base.tel).replace(/-/g, "");
            try {
              t.$sdk.makePhoneCall(e);
            } catch (e) {}
          }
          T.aegisReporter.reportEvent(
            a.NETWORK_DETECT_MONITOR_EVENT.CLICK_PHONE_CALL,
            { ext2: C.brokerConfig.base.code }
          );
        },
        cancel: R,
        handleCancel: function () {
          R();
        },
        NETWORK_DETECT_UI_TYPE: a.NETWORK_DETECT_UI_TYPE,
        NETWORK_DETECT_THEME: a.NETWORK_DETECT_THEME,
        NETWORK_DETECT_ACTION: a.NETWORK_DETECT_ACTION,
      };
    },
    unmounted: function () {
      this.cancel();
    },
  };
Array || E.resolveComponent("popup")();
var p = E._export_sfc(l, [
  [
    "render",
    function (e, t, o, n, r, T) {
      return E.e(
        { a: n.showCloseIcon && n.embeddedMode },
        (n.showCloseIcon && n.embeddedMode, {}),
        {
          b: E.o(function () {
            return n.handleCancel && n.handleCancel.apply(n, arguments);
          }),
          c: n.resultConfig.icon,
          d: E.t(n.resultConfig.title),
          e: n.action === n.NETWORK_DETECT_ACTION.ABROAD_IP,
        },
        n.action === n.NETWORK_DETECT_ACTION.ABROAD_IP ||
          n.action === n.NETWORK_DETECT_ACTION.BLACK_IP
          ? {}
          : n.action === n.NETWORK_DETECT_ACTION.UNREACHABLE
          ? E.e({ h: "wifi" == n.network }, (n.network, {}))
          : {},
        {
          f: n.action === n.NETWORK_DETECT_ACTION.BLACK_IP,
          g: n.action === n.NETWORK_DETECT_ACTION.UNREACHABLE,
          i: n.action === n.NETWORK_DETECT_ACTION.UNREACHABLE,
        },
        (n.action, n.NETWORK_DETECT_ACTION.UNREACHABLE, {}),
        {
          j: E.t(
            n.action === n.NETWORK_DETECT_ACTION.ABROAD_IP
              ? "我不在境外，反馈给我们"
              : "仍无法访问，反馈客服"
          ),
          k: E.o(function () {
            return n.onContact && n.onContact.apply(n, arguments);
          }),
          l: E.n(n.embeddedMode ? "network-detect-component__embedded" : ""),
          m: E.n(n.resultConfig.class),
          n: E.s(n.resultConfig.actionStyle),
          o: E.p({
            show: n.check,
            center: !1,
            mask: !0,
            name: "mp-slide-up",
            position: n.embeddedMode ? "bottom" : "center",
            "mask-closable": n.showCloseIcon,
            "custom-style": "z-index: 104;",
          }),
          p: n.embeddedMode ? 1 : "",
          q: n.embeddedMode ? "" : 1,
          r: o.navbar ? 1 : "",
        }
      );
    },
  ],
]);
wx.createComponent(p);
