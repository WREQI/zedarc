require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  o = require("../../model/apply/useApply.js"),
  a = require("../../config/enum.js"),
  u = require("../../model/apply/useApplyActivities.js");
require("../../service/broker.js");
var i = require("../../mixin/platforms/index.js"),
  p = require("../../config/broker/11100/index.js"),
  s = {
    mixins: [i.pluginMixins],
    components: {
      BrokerLogo: function () {
        return "../../components/BrokerLogo/BrokerLogo.js";
      },
    },
    setup: function () {
      var i = a.USERSTATE,
        s = i.NOACCOUNT,
        c = i.HASACCOUNT,
        l = i.HASBUNDLE,
        f = i.VERIFYING,
        y = i.FAILED,
        v = t.getCurrentInstance().proxy,
        m = o.useApply(),
        b = m.applyInfo,
        d = m.isRecoverMode,
        g = m.isFirstOpenAccount,
        q = m.getFirstMatchedStep,
        A = m.navigateNextStep,
        k = u.useApplyActivities().onApplyProcessEnter,
        x = (function () {
          var t = n(
            e().mark(function n() {
              var t, o, a, u;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((o = b.value),
                        (a = o.userstate),
                        (u = o.fundaccount),
                        ![c, l].includes(a))
                      ) {
                        e.next = 5;
                        break;
                      }
                      v.$router.replace({
                        name: "AccountBind",
                        query: r(
                          { accounts: u, tip: "您已开户 绑户后即可进行交易" },
                          v.$route.query
                        ),
                      }),
                        (e.next = 18);
                      break;
                    case 5:
                      if (a === f) {
                        e.next = 17;
                        break;
                      }
                      if (
                        a === y &&
                        "apply" !==
                          (null == (t = v.$route.query) ? void 0 : t.to)
                      ) {
                        e.next = 14;
                        break;
                      }
                      if (((e.t0 = a === s), !e.t0)) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 11), k().catch(function (e) {});
                    case 11:
                      setTimeout(function () {
                        var e = (function () {
                            var e, r;
                            if (
                              "1" !==
                              (null ==
                              (r =
                                null == (e = null == v ? void 0 : v.$route)
                                  ? void 0
                                  : e.query)
                                ? void 0
                                : r._apply_checkpoint_)
                            )
                              return "";
                            if (d.value || g.value) return "";
                            var n = b.value.remain_steps;
                            return q(n);
                          })(),
                          r = {
                            data: { query: v.$route.query },
                            type: "replace",
                          };
                        e && (r.targetStep = e), A(r);
                      }, 500),
                        (e.next = 15);
                      break;
                    case 14:
                      v.$router.replace({
                        name: "ApplyRecover",
                        query: v.$route.query,
                      });
                    case 15:
                      e.next = 18;
                      break;
                    case 17:
                      v.$router.replace({
                        name: "ApplyProgress",
                        query: v.$route.query,
                      });
                    case 18:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })();
      return (
        t.provide("onPageInit", x), { onPageInit: x, broker: p.brokerConfig }
      );
    },
    beforeUnmount: function () {
      t.index.hideToast();
    },
  };
Array ||
  (
    t.resolveComponent("BrokerLogo") +
    t.resolveComponent("ApplyWrap") +
    t.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/BrokerLogo/BrokerLogo.js";
      } +
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var c = t._export_sfc(s, [
  [
    "render",
    function (e, r, n, o, a, u) {
      return {
        a: e.rootFontSize,
        b: t.p({ colorful: !0 }),
        c: t.t(o.broker.base.name),
        d: t.sr("#global-wrap", "65e4e03e-0"),
        e: t.p({
          id: "global-wrap",
          filePath: "/apply/guide",
          defaultTheme: "",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-65e4e03e"],
]);
wx.createPage(c);
