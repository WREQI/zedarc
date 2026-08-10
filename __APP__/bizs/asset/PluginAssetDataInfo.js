var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  o = require("../../model/trade/userUserName.js");
require("../../service/broker.js");
var t = require("../../config/broker/11100/index.js"),
  s = {
    behaviors: ["wx://component-export"],
    sharedComponents: !0,
    export: function () {
      return {};
    },
    components: {
      PluginAssetComponentWrap: function () {
        return "./PluginAssetComponentWrap.js";
      },
      PersonalAssetInfo: function () {
        return "./personal-asset/PersonalAssetCard.js";
      },
    },
    props: {
      isCurrentBroker: { type: Boolean, default: !1 },
      showMore: { type: Boolean, default: !1 },
      showBrokerBg: { type: Boolean, default: !1 },
      defaultTheme: { type: String, default: "" },
      from: { type: String, default: "" },
    },
    setup: function (s, a) {
      var u = a.emit;
      u("pluginSetup", { dealerCode: t.brokerConfig.base.code });
      var i = n.getCurrentInstance().proxy,
        l = n.ref(null),
        f = o.useUserName().userName;
      return (
        n.watch(
          function () {
            return f.value;
          },
          function () {
            r(
              e().mark(function r() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        f.value &&
                          u("setUserName", {
                            dealerCode: t.brokerConfig.base.code,
                            userName: f.value,
                          });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            )();
          },
          { immediate: !0 }
        ),
        n.onPageShow(function () {
          var e;
          null == (e = i.$refs.personalAssetRef) || e.pageShow();
        }),
        n.onPageHide(function () {
          var e;
          null == (e = i.$refs.personalAssetRef) || e.pageHide();
        }),
        n.onMounted(function () {
          var e;
          (null == l ? void 0 : l.value) &&
            (null == (e = l.value) || e.reportPage());
        }),
        {
          pluginAssetComWrapRef: l,
          handleFirstRequestFinish: function () {
            u("firstRequestFinish", { dealerCode: t.brokerConfig.base.code });
          },
          handleAssetInfo: function (e) {
            var r;
            null == (r = i.$refs.personalAssetRef) || r.cardClick(e);
          },
          handleBtnClick: function (e) {
            u("btnClick", e);
          },
        }
      );
    },
    created: function () {
      var e = this;
      this.$nextTick(function () {
        var r;
        null == (r = e.$refs.personalAssetRef) || r.handleShow();
      });
    },
  };
Array ||
  (
    n.resolveComponent("PersonalAssetInfo") +
    n.resolveComponent("plugin-asset-component-wrap")
  )();
var a = n._export_sfc(s, [
  [
    "render",
    function (e, r, o, t, s, a) {
      return {
        a: n.sr("personalAssetRef", "ff6b5a22-1,ff6b5a22-0"),
        b: n.o(t.handleBtnClick),
        c: n.o(t.handleFirstRequestFinish),
        d: n.p({
          "is-current-broker": o.isCurrentBroker,
          "show-more": o.showMore,
          "show-broker-bg": o.showBrokerBg,
          from: o.from,
        }),
        e: n.sr("pluginAssetComWrapRef", "ff6b5a22-0"),
        f: n.p({ "default-theme": o.defaultTheme }),
      };
    },
  ],
]);
wx.createComponent(a);
