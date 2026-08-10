var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js");
require("../../../service/broker.js");
var t = require("../../../service/connect/index.js"),
  i = require("../../../config/enum.js"),
  s = require("../../../utils/getPlatform.js"),
  o = require("../../../stores/user/useUserinfo.js"),
  c = require("../../../service/stat/mp-weixin.js"),
  u = require("../../../config/broker/11100/index.js");
exports.useAccountModeSwitch = function () {
  var a,
    l,
    d = null == (a = n.getCurrentInstance()) ? void 0 : a.proxy,
    v = o.useUserinfoStore(),
    x = n.storeToRefs(v).accountMode,
    f = v.setAccountMode,
    h = s.getPlatform(),
    g = h.isZxg,
    p = h.isWeixin,
    m = n.ref(!1);
  return {
    accountSwitcherVisible: m,
    handleToggleAccount: function () {
      m.value = !m.value;
    },
    changeAccountMode:
      ((l = r(
        e().mark(function r(s) {
          var o, a, l, v;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (s === x.value) {
                      e.next = 17;
                      break;
                    }
                    return (
                      (e.prev = 1),
                      c.stat.click(
                        "trade.asset-index.account_switch_".concat(s)
                      ),
                      t.disconnect(),
                      n.index.showLoading({ title: "切换中" }),
                      (e.next = 7),
                      f({ mode: s })
                    );
                  case 7:
                    if (!g) {
                      e.next = 11;
                      break;
                    }
                    d.$router.push({
                      name:
                        s === i.E_ACCOUNT_MODE.MARGIN
                          ? "MarginAssetIndex"
                          : "AssetIndex",
                    }),
                      (e.next = 12);
                    break;
                  case 11:
                    p &&
                      (v =
                        null ==
                        (l =
                          null ==
                          (a =
                            null == (o = u.brokerConfig.hall)
                              ? void 0
                              : o.third)
                            ? void 0
                            : a.entry)
                          ? void 0
                          : l.MarginAssetIndex) &&
                      (location.href = v);
                  case 12:
                    e.next = 17;
                    break;
                  case 14:
                    (e.prev = 14),
                      (e.t0 = e.catch(1)),
                      n.index.showToast({
                        title: null == e.t0 ? void 0 : e.t0.retmsg,
                        icon: "none",
                      });
                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[1, 14]]
          );
        })
      )),
      function (e) {
        return l.apply(this, arguments);
      }),
  };
};
