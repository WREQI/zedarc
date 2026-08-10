require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../stores/user/useUserinfo.js");
require("../../../service/broker.js");
var o = require("../../../utils/index.js"),
  s = require("../../../config/broker/11100/index.js"),
  n = {
    name: "CardInfo",
    setup: function () {
      var n = r.useUserinfoStore(),
        a = e.storeToRefs(n).userinfo,
        c = n.forceGetUserInfo,
        d = n.removeUserInfo,
        t = e.ref("-----------"),
        u = e.ref(!0),
        i = e.ref("-----------"),
        h = e.ref(!0),
        f = s.brokerConfig.bind.accountCalled || "资金账号";
      function l() {
        var e = [],
          r = [];
        a.value.shareholdercards.forEach(function (o) {
          "1" === o.market && o.code && r.push(o.code),
            "0" === o.market && o.code && e.push(o.code);
        }),
          r.length > 0
            ? ((t.value = r.join("\n\r")), (u.value = !0))
            : (t.value = "未开通"),
          e.length > 0
            ? ((i.value = e.join("\n\r")), (h.value = !0))
            : (i.value = "未开通");
      }
      return (
        e.onMounted(function () {
          a.value.shareholdercards
            ? l()
            : c().then(function () {
                l();
              });
        }),
        {
          shareholdercards_h: t,
          shareholdercards_s: i,
          is_shareholdercards_h_opened: u,
          is_shareholdercards_s_opened: h,
          userinfo: a,
          setCliboard: function () {
            var r = a.value.fundaccount,
              s = "".concat(f);
            r &&
              s &&
              o.setClipboardData({
                data: r,
                success: function () {
                  e.index.showToast({
                    title: "".concat(s, "复制成功"),
                    icon: "none",
                  });
                },
              });
          },
          forceGetUserInfo: c,
          removeUserInfo: d,
          accountName: f,
        }
      );
    },
  },
  a = e._export_sfc(n, [
    [
      "render",
      function (r, o, s, n, a, c) {
        return e.e(
          {
            a: e.t(n.accountName),
            b: e.t(n.userinfo.fundaccount),
            c: e.o(function () {
              return n.setCliboard && n.setCliboard.apply(n, arguments);
            }),
            d: e.t(n.shareholdercards_h),
            e: !n.is_shareholdercards_h_opened,
          },
          (n.is_shareholdercards_h_opened, {}),
          { f: e.t(n.shareholdercards_s), g: !n.is_shareholdercards_s_opened },
          (n.is_shareholdercards_s_opened, {})
        );
      },
    ],
  ]);
wx.createComponent(a);
