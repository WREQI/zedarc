require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../model/account/usePersonal.js"),
  o = require("../../components/Password/index.js"),
  a = require("../../common/components/Dialog/index.js"),
  i = require("../../model/common/useBack.js"),
  s = require("../../utils/getPlatform.js"),
  c = require("../../common/vendor.js"),
  u = require("../../stores/user/useUserinfo.js"),
  l = require("../../service/login/mp.js"),
  d = require("../../service/aegis/utils.js"),
  p = require("../../model/account/accountMonitorEvents.js"),
  m = {
    name: "AccountSwitching",
    components: {
      Dialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
    },
    mixins: [require("../../mixin/platforms/index.js").pluginMixins],
    behaviors: ["wx://component-export"],
    export: function () {
      return {};
    },
    setup: function () {
      var m = c.getCurrentInstance().proxy,
        f = t.usePersonal().bind,
        v = u.useUserinfoStore(),
        g = c.storeToRefs(v).userinfo,
        h = v.forceGetUserInfo,
        w = v.accountMode,
        x = c.ref(!1),
        b = c.ref();
      function P() {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = n(
          e().mark(function r() {
            var n, t, o, i, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        f({
                          action: 3,
                          credential_name: "",
                          credential_id: "",
                          mode: w.value,
                        })
                      );
                    case 3:
                      if (
                        ((n = e.sent),
                        (t = n.account_list),
                        (o = void 0 === t ? [] : t),
                        0 === n.retcode)
                      ) {
                        e.next = 9;
                        break;
                      }
                      throw n;
                    case 9:
                      if (
                        ((i = ["1"]),
                        0 !==
                          (s = o.filter(function (e) {
                            return i.includes(e.hasbind) && e.fundacct;
                          })).length)
                      ) {
                        e.next = 13;
                        break;
                      }
                      throw { retcode: "ENOACCT", retmsg: "未查询到资金账户" };
                    case 13:
                      (b.value = s[0].fundacct), k(), (e.next = 21);
                      break;
                    case 16:
                      if (
                        ((e.prev = 16),
                        (e.t0 = e.catch(0)),
                        d.reportMonitorEvent(p.ACCOUNT_MONITOR.LIST_QRY_FAIL, {
                          ext3: ""
                            .concat(
                              (null == e.t0 ? void 0 : e.t0.retcode) ||
                                "unknown",
                              "|"
                            )
                            .concat(
                              (null == e.t0 ? void 0 : e.t0.retmsg) || ""
                            ),
                        }),
                        "ENOACCT" !== e.t0.retcode)
                      ) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void m.$router.replace({ name: "AccountBind" })
                      );
                    case 20:
                      a.Dialog({
                        message: e.t0.retmsg || "系统错误 请稍后再试",
                        onConfirm: function () {
                          "ENOACCT" === e.t0.retcode
                            ? window &&
                              "miniprogram" === window.__wxjs_environment
                              ? window.wx.miniProgram.reLaunch({
                                  url: "/pages/index/trade",
                                })
                              : m.$router.replace({ name: "ApplyIndex" })
                            : m.$router.back();
                        },
                      });
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 16]]
            );
          })
        )).apply(this, arguments);
      }
      function k() {
        var t,
          u = s.getPlatform().isMpPlugin;
        o.Password({
          theme: u ? o.THEME.EMBEDDED : o.THEME.FUND,
          noSubmit: !0,
          hideOnFinish: !1,
          onSuccess:
            ((t = n(
              e().mark(function t(o) {
                var s, v;
                return e().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (s = {
                              account: b.value,
                              password: o.encodePwd,
                              xid_session: "",
                              scene: 1,
                              mode: w.value,
                            }),
                            (t.next = 4),
                            f(s)
                          );
                        case 4:
                          h().then(
                            n(
                              e().mark(function n() {
                                var t, o, a, s, d, p, f, v, g, h, w;
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((p = m.$route.query),
                                          (f = p.toPath),
                                          "1" !==
                                            (void 0 === (v = p.sucBack)
                                              ? "0"
                                              : v) || !u)
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (
                                          (e.next = 4),
                                          null ==
                                          (a =
                                            null ==
                                            (o =
                                              null == (t = requireMiniProgram())
                                                ? void 0
                                                : t.main2Plugin)
                                              ? void 0
                                              : o.call(t))
                                            ? void 0
                                            : a.updateBrokerInfo()
                                        );
                                      case 4:
                                        return e.abrupt(
                                          "return",
                                          void m.$router.back()
                                        );
                                      case 5:
                                        f
                                          ? ((g = decodeURIComponent(
                                              decodeURIComponent(f)
                                            )),
                                            (h =
                                              c.dist.urltools.param.parse(g) ||
                                              {}),
                                            (w = g.split("?")[0]),
                                            u &&
                                              "/pages/index/trade" === w &&
                                              (w = "/pages/asset/index"),
                                            m.$router.replace({
                                              path: w,
                                              query: r(
                                                r({}, h),
                                                {},
                                                { isRelaunch: "1" }
                                              ),
                                            }))
                                          : (0, i.usePersonal().toAsset)({
                                              type: "replace",
                                              query: { isRelaunch: "1" },
                                            }),
                                          u &&
                                            (null ==
                                              (d = (s = l.login)
                                                .clearReloginRetryTimes) ||
                                              d.call(s));
                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                }, n);
                              })
                            )
                          ),
                            (t.next = 12);
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t.catch(0)),
                            d.reportMonitorEvent(
                              p.ACCOUNT_MONITOR.SWITCH_FAIL,
                              {
                                ext3: ""
                                  .concat(
                                    (null == t.t0 ? void 0 : t.t0.retcode) ||
                                      "unknown",
                                    "|"
                                  )
                                  .concat(
                                    (null == t.t0 ? void 0 : t.t0.retmsg) || ""
                                  ),
                              }
                            ),
                            (v =
                              51091406 == +t.t0.retcode
                                ? "密码输入错误，还有"
                                    .concat(
                                      t.t0.rest_num || "有限",
                                      "次机会，若有疑问请咨询"
                                    )
                                    .concat(g.value.dealername || "", "客服")
                                    .concat(
                                      g.value.dealertel
                                        ? ":".concat(g.value.dealertel)
                                        : "。"
                                    )
                                : t.t0.retmsg),
                            a.Dialog({ message: v });
                        case 12:
                          return (t.prev = 12), (x.value = !1), t.finish(12);
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 7, 12, 15]]
                );
              })
            )),
            function (e) {
              return t.apply(this, arguments);
            }),
          onPwdReset: function () {
            x.value = !0;
          },
        });
      }
      return (
        c.onBeforeMount(
          n(
            e().mark(function r() {
              var n, t;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = s.getPlatform()),
                        (t = n.isMpPlugin),
                        (e.t0 = t),
                        !e.t0)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 5), m.$login.logout();
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          )
        ),
        c.onMounted(P),
        {
          isPwdHide: x,
          bind: f,
          userinfo: g,
          forceGetUserInfo: h,
          accountMode: w,
          switchAccount: P,
          submitWithPwd: k,
        }
      );
    },
    onShow: function () {
      this.isPwdHide && this.submitWithPwd();
    },
  };
Array || (c.resolveComponent("Dialog") + c.resolveComponent("GlobalWrap"))(),
  Math;
var f = c._export_sfc(m, [
  [
    "render",
    function (e, r, n, t, o, a) {
      return {
        a: e.rootFontSize,
        b: c.p({ id: "mp-dialog" }),
        c: c.sr("#global-wrap", "56608987-0"),
        d: c.p({
          id: "global-wrap",
          filePath: "/account/switching",
          defaultTheme: "",
        }),
      };
    },
  ],
  ["__scopeId", "data-v-56608987"],
]);
wx.createPage(f);
