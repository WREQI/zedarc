var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  s = require("../../../model/trade/userUserName.js");
require("../../../service/broker.js");
var t = require("../../../utils/getPlatform.js"),
  i = require("../../../stores/user/useUserinfo.js");
require("../../../service/sdk/lib/api.js");
var o = require("../../../service/sdk/platform/mp-weixin.js"),
  u = require("../../../config/broker/11100/index.js"),
  a = {
    sharedComponents: !0,
    setup: function (a, c) {
      var l,
        m,
        d = c.emit,
        f = t.getPlatform().isInIframe,
        v = s.useUserName().userName;
      n.onMounted(function () {
        o.sdk.notifyBusinessLoaded();
      }),
        n.watch(
          function () {
            return v.value;
          },
          function () {
            r(
              e().mark(function r() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        v.value &&
                          (f
                            ? window.parent.postMessage(
                                { event: "personalUserinfo", data: v.value },
                                "*"
                              )
                            : d("setUserName", {
                                dealerCode: u.brokerConfig.base.code,
                                userName: v.value,
                              }));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })
            )();
          },
          { immediate: !0 }
        );
      var p = i.useUserinfoStore();
      return (
        null ==
          (m =
            null == (l = null == p ? void 0 : p.getUserInfo)
              ? void 0
              : l.call(p)) || m.then(function () {}),
        {}
      );
    },
  },
  c = n._export_sfc(a, [
    [
      "render",
      function (e, r, n, s, t, i) {
        return {};
      },
    ],
  ]);
wx.createComponent(c);
