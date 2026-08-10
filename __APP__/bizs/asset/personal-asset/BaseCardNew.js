require("../../../app.js");
var o = require("../../../common/vendor.js"),
  e = require("../../../stores/user/useUserinfo.js");
require("../../../service/broker.js");
var r = require("../../../config/enum.js"),
  n = require("./PluginBridge.js"),
  c = require("../../../config/broker/11100/index.js"),
  t = {
    props: {
      isCurrentBroker: { type: Boolean, default: !1 },
      hideFundAccount: { type: Boolean, default: !1 },
      showMore: { type: Boolean, default: !1 },
      showBrokerBg: { type: Boolean, default: !1 },
    },
    emits: ["click"],
    setup: function (t, u) {
      var s = u.emit,
        a = o.getCurrentInstance().proxy,
        i = c.brokerConfig.base.code,
        d = "container-".concat(i),
        l = "broker-logo-".concat(i),
        k = t.showBrokerBg
          ? "container-bg-".concat(i, " container-shadow")
          : "",
        C = c.brokerConfig.base.name || "",
        M = e.useUserinfoStore(),
        b = o.storeToRefs(M),
        f = b.userinfo,
        g = b.accountMode,
        h = o.computed(function () {
          var o,
            e = (null == (o = M.userinfo) ? void 0 : o.fundaccount) || "";
          return t.hideFundAccount && e
            ? ""
                .concat(e.substring(0, 1), "**")
                .concat(e.substring(e.length - 3))
            : e;
        }),
        p = o.computed(function () {
          return !1;
        });
      return (
        o.onMounted(function () {
          f.value.rzrq_account;
        }),
        {
          E_ACCOUNT_MODE: r.E_ACCOUNT_MODE,
          showAccountMode: p,
          accountMode: g,
          clickCard: function () {
            s("click");
          },
          brokerName: C,
          accountName: c.brokerConfig.bind.accountCalled || "资金账号",
          accountNum: h,
          brokerContainerBgClass: d,
          brokerShowbgClass: k,
          brokerLogoClass: l,
          clickMoreHandle: function () {
            n.bridge.clickMore(), a.$stat.click("trade.asset.more_click");
          },
        }
      );
    },
  },
  u = o._export_sfc(t, [
    [
      "render",
      function (e, r, n, c, t, u) {
        return o.e(
          { a: n.showMore },
          n.showMore
            ? {
                b: o.o(function () {
                  return (
                    c.clickMoreHandle && c.clickMoreHandle.apply(c, arguments)
                  );
                }),
              }
            : {},
          {
            c: o.n(c.brokerLogoClass),
            d: o.t(c.brokerName),
            e: c.showAccountMode,
          },
          c.showAccountMode
            ? {
                f: o.t(
                  c.accountMode === c.E_ACCOUNT_MODE.MARGIN
                    ? "信用账户"
                    : "普通账户"
                ),
              }
            : {},
          { g: c.showAccountMode && c.accountMode === c.E_ACCOUNT_MODE.MARGIN },
          (c.showAccountMode && (c.accountMode, c.E_ACCOUNT_MODE.MARGIN), {}),
          { h: n.showMore && n.isCurrentBroker },
          n.showMore && n.isCurrentBroker
            ? {}
            : { i: o.t(c.accountName), j: o.t(c.accountNum) },
          { k: n.isCurrentBroker && !n.showMore },
          (n.isCurrentBroker && n.showMore, {}),
          {
            l: o.n(c.brokerContainerBgClass),
            m: o.n(c.brokerShowbgClass),
            n: o.o(function () {
              return c.clickCard && c.clickCard.apply(c, arguments);
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-6468cbeb"],
  ]);
wx.createComponent(u);
