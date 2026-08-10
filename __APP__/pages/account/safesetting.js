var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/components/Dialog/index.js"),
  r = require("../../model/account/usePersonal.js"),
  n = require("../../utils/getPlatform.js");
require("../../service/broker.js");
var i = require("../../common/vendor.js"),
  s = require("../../stores/user/useUserinfo.js"),
  c = require("../../config/enum.js"),
  a = require("../../stores/app/useMode.js"),
  d = require("../../adapter/router.js");
require("../../utils/index.js");
var u = require("../../service/aegis/platform/not-wujie.js"),
  l = require("../../service/aegis/utils.js"),
  h = require("../../model/account/accountMonitorEvents.js"),
  p = require("../../components/Password/theme/biometrics/BiometricsSettingFromSetting.js"),
  m = require("../../components/Password/theme/biometrics/utils.js"),
  g = require("../../mixin/platforms/index.js"),
  f = require("../../config/broker/11100/index.js"),
  C = ["4小时", "15分钟", "8小时"],
  T = ["每两小时一次", "每小时一次", "每次都输入"],
  k = {
    name: "AccountSafeSetting",
    mixins: [g.pluginMixins],
    components: {
      StCellGroup: function () {
        return "../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../common/components/Cell/index.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      ActionSheet: function () {
        return "../../common/components/ActionSheet/index.js";
      },
    },
    setup: function () {
      var e = r.usePersonal(),
        t = e.getUserSetting,
        o = e.setUserSetting,
        n = s.useUserinfoStore(),
        c = i.storeToRefs(n).userinfo,
        u = n.forceGetUserInfo,
        l = n.updateUserInfoValue,
        h = n.accountMode,
        m = i.storeToRefs(a.useModeStore()).simpleMode,
        g = i.computed(function () {
          return m.value ? "#e63535" : "#3077ec";
        }),
        f = new p.BiometricsSettingFromSetting(),
        C = f.isBiometricsGrayFinal,
        T = f.isBiometricsOpen,
        k = f.isBiometricsInit,
        b = f.bioText,
        w = f.showBioProtocol;
      return {
        getUserSetting: t,
        setUserSetting: o,
        userinfo: c,
        forceGetUserInfo: u,
        updateUserInfoValue: l,
        accountMode: h,
        simpleMode: m,
        goPositionSetting: function () {
          var e;
          null == (e = d.router()) || e.push({ name: "TradeStockSetPosition" });
        },
        switchColor: g,
        isBiometricsGrayFinal: C,
        isBiometricsOpen: T,
        isBiometricsInit: k,
        bioText: b,
        handleBioSetting: function () {
          f.doBioSetting();
        },
        toBioProtocol: function () {
          f.doBioSettingByProtocol();
        },
        biometricsSettingFromSetting: f,
        hideBioProtocol: function () {
          f.hideBioProtocol();
        },
        showBioProtocol: w,
      };
    },
    data: function () {
      return {
        pwdCheckType: "",
        assetCheckType: "",
        buildh5ver: "",
        buildh5verClickCount: 0,
        showPwdCheck: !1,
        showAssetCheck: !1,
        isTrademodeGray: !1,
        embeddedTrade: !1,
        embeddedTradeMode: "",
      };
    },
    computed: {
      linesPwdCheckTypeText: function () {
        return T[this.pwdCheckType];
      },
      linesAssetCheckTypeText: function () {
        return C[this.assetCheckType];
      },
      showTradeModeSwitch: function () {
        return (
          (!n.getPlatform().isZxg ||
            !this.userinfo.rzrq_account ||
            this.accountMode !== c.E_ACCOUNT_MODE.MARGIN) &&
          this.isTrademodeGray
        );
      },
    },
    onShow: function () {
      this.init(), (this.buildh5ver = "202607271629");
    },
    methods: {
      init: function () {
        var r = this;
        return t(
          e().mark(function t() {
            var i, s, c, a, d, u, p, g;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = n.getPlatform()),
                        (s = i.isInMainXcx),
                        i.isMpPlugin,
                        (c = i.isOEM),
                        (e.prev = 1),
                        (e.next = 4),
                        r.getUserSetting()
                      );
                    case 4:
                      (a = e.sent), (e.next = 10);
                      break;
                    case 7:
                      return (
                        (e.prev = 7),
                        (e.t0 = e.catch(1)),
                        e.abrupt(
                          "return",
                          void l.reportMonitorEvent(
                            h.ACCOUNT_MONITOR.SAFESETTING_GET_FAIL,
                            {
                              ext3: ""
                                .concat(
                                  (null == e.t0 ? void 0 : e.t0.retcode) ||
                                    "unknown",
                                  "|"
                                )
                                .concat(
                                  (null == e.t0 ? void 0 : e.t0.retmsg) || ""
                                ),
                            }
                          )
                        )
                      );
                    case 10:
                      return (
                        (u = (d = a).is_trademode_gray),
                        (p = d.trademode),
                        (g = d.order_mode),
                        (r.isTrademodeGray = "1" === u && !s && !c),
                        (r.embeddedTrade = "1" === p),
                        (r.embeddedTradeMode = g),
                        (e.next = 16),
                        r.biometricsSettingFromSetting.initBiometricsBaseInfo(
                          m.getBiometricFlags(a)
                        )
                      );
                    case 16:
                      return (
                        r.sendEnableConfigSuccess(),
                        (e.prev = 17),
                        (e.next = 20),
                        r.forceGetUserInfo()
                      );
                    case 20:
                      r.sendEnableConfigSuccess(), (e.next = 26);
                      break;
                    case 23:
                      (e.prev = 23),
                        (e.t1 = e.catch(17)),
                        o.Dialog({
                          message: e.t1.retmsg,
                          onConfirm: function () {
                            r.init();
                          },
                        });
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [
                [1, 7],
                [17, 23],
              ]
            );
          })
        )();
      },
      sendEnableConfigSuccess: function () {
        (this.pwdCheckType = this.userinfo.pwdchecktype || "2"),
          (this.assetCheckType = this.userinfo.assetverification || "1");
      },
      showBuildVersion: function () {
        this.buildh5verClickCount = this.buildh5verClickCount + 1;
      },
      updateSetting: function (e) {
        return this.setUserSetting(e).catch(function (e) {
          throw (
            (l.reportMonitorEvent(h.ACCOUNT_MONITOR.SAFESETTING_UPDATE_FAIL, {
              ext3: ""
                .concat((null == e ? void 0 : e.retcode) || "unknown", "|")
                .concat((null == e ? void 0 : e.retmsg) || ""),
            }),
            o.Dialog({ message: e.retmsg }),
            e)
          );
        });
      },
      onChangePwdCheckType: function (e) {
        var t = this;
        this.pwdCheckType !== e &&
          (this.updateSetting({ pwdchecktype: e }).then(function () {
            (t.pwdCheckType = e),
              t.updateUserInfoValue({ key: "pwdchecktype", value: e });
          }),
          (this.showPwdCheck = !1));
      },
      onChangeAssetCheckType: function (e) {
        var t = this;
        this.assetCheckType !== e &&
          (this.updateSetting({ assetverification: e }).then(function () {
            (t.assetCheckType = e),
              t.updateUserInfoValue({ key: "assetverification", value: e });
          }),
          (this.showAssetCheck = !1));
      },
      handleEmbeddedTrade: function (e) {
        var t = this;
        n.getPlatform();
        var o = e.detail.value;
        this.updateSetting({ trademode: o ? 1 : 0 }).then(function () {
          var e, r, n, i;
          t.embeddedTrade = o;
          try {
            requireMiniProgram &&
              (null ==
                (r =
                  null == (e = requireMiniProgram())
                    ? void 0
                    : e.main2Plugin()) ||
                r.updateBrokerUserSetting({
                  brokercode: f.brokerConfig.base.code,
                  isTradeEmbedded: o,
                  embeddedTradeMode:
                    "1" === t.embeddedTradeMode
                      ? c.TRADE_MODE.QUICKTRADE
                      : c.TRADE_MODE.STANDARD,
                }));
          } catch (e) {
            null ==
              (i = null == (n = u.aegisReporter) ? void 0 : n.reportEvent) ||
              i.call(n, "updateBrokerUserSetting-by-setting", {
                ext4: JSON.stringify(e),
              });
          }
          t.updateUserInfoValue({ key: "trademode", value: o ? "1" : "0" }),
            t.updateUserInfoValue({ key: "is_trademode_gray", value: "1" });
        });
      },
      handleEmbeddedTradeIntro: function () {
        o.Dialog({ selector: "#embedded-trade-dialog" });
      },
    },
  };
Array ||
  (
    i.resolveComponent("st-cell") +
    i.resolveComponent("st-cell-group") +
    i.resolveComponent("action-sheet") +
    i.resolveComponent("MpDialog") +
    i.resolveComponent("GlobalWrap")
  )(),
  Math;
var b = i._export_sfc(k, [
  [
    "render",
    function (e, t, o, r, n, s) {
      return i.e(
        {
          a: e.rootFontSize,
          b: i.o(function (e) {
            return (n.showPwdCheck = !0);
          }),
          c: i.p({
            title: "交易验密频率",
            value: s.linesPwdCheckTypeText,
            border: !1,
            "arrow-direction": "right",
          }),
          d: i.o(function (e) {
            return (n.showAssetCheck = !0);
          }),
          e: i.p({
            title: "访问验密频率",
            value: s.linesAssetCheckTypeText,
            border: !1,
            "arrow-direction": "right",
          }),
          f: r.isBiometricsGrayFinal,
        },
        r.isBiometricsGrayFinal
          ? {
              g: i.t(r.bioText),
              h: !r.isBiometricsInit,
              i: r.isBiometricsOpen ? "" : 1,
              j: r.isBiometricsOpen,
              k: r.switchColor,
              l: i.o(function () {
                return (
                  r.handleBioSetting && r.handleBioSetting.apply(r, arguments)
                );
              }),
            }
          : {},
        { m: r.isBiometricsGrayFinal },
        r.isBiometricsGrayFinal
          ? {
              n: i.t(r.bioText),
              o: i.t(r.bioText),
              p: i.o(function () {
                return r.toBioProtocol && r.toBioProtocol.apply(r, arguments);
              }),
            }
          : {},
        {
          q: i.p({ "border-top": !1, "border-bottom": !1 }),
          r: i.o(r.goPositionSetting),
          s: i.p({
            title: "设置下单常用仓位",
            border: !1,
            "arrow-direction": "right",
          }),
          t: i.p({ "border-top": !1, "border-bottom": !1 }),
          v: s.showTradeModeSwitch,
        },
        s.showTradeModeSwitch
          ? {
              w: i.o(function () {
                return (
                  s.handleEmbeddedTradeIntro &&
                  s.handleEmbeddedTradeIntro.apply(s, arguments)
                );
              }),
              x: n.embeddedTrade ? "" : 1,
              y: n.embeddedTrade,
              z: r.switchColor,
              A: i.o(function () {
                return (
                  s.handleEmbeddedTrade &&
                  s.handleEmbeddedTrade.apply(s, arguments)
                );
              }),
              B: i.p({ "border-top": !1, "border-bottom": !1 }),
            }
          : {},
        { C: n.buildh5verClickCount >= 3 },
        n.buildh5verClickCount >= 3 ? { D: i.t(n.buildh5ver) } : {},
        {
          E: i.o(function () {
            return s.showBuildVersion && s.showBuildVersion.apply(s, arguments);
          }),
          F: i.t(n.pwdCheckType),
          G: "2" === n.pwdCheckType,
        },
        (n.pwdCheckType, {}),
        {
          H: i.o(function (e) {
            return s.onChangePwdCheckType("2");
          }),
          I: "1" === n.pwdCheckType,
        },
        (n.pwdCheckType, {}),
        {
          J: i.o(function (e) {
            return s.onChangePwdCheckType("1");
          }),
          K: "0" === n.pwdCheckType,
        },
        (n.pwdCheckType, {}),
        {
          L: i.o(function (e) {
            return s.onChangePwdCheckType("0");
          }),
          M: i.o(function (e) {
            return (n.showPwdCheck = e);
          }),
          N: i.p({
            value: n.showPwdCheck,
            title: "设置交易验密频率",
            "picker-style": !0,
            "close-button": !0,
          }),
          O: "1" === n.assetCheckType,
        },
        (n.assetCheckType, {}),
        {
          P: i.o(function (e) {
            return s.onChangeAssetCheckType("1");
          }),
          Q: "0" === n.assetCheckType,
        },
        (n.assetCheckType, {}),
        {
          R: i.o(function (e) {
            return s.onChangeAssetCheckType("0");
          }),
          S: "2" === n.assetCheckType,
        },
        (n.assetCheckType, {}),
        {
          T: i.o(function (e) {
            return s.onChangeAssetCheckType("2");
          }),
          U: i.o(function (e) {
            return (n.showAssetCheck = e);
          }),
          V: i.p({
            value: n.showAssetCheck,
            title: "设置访问验密频率",
            "picker-style": !0,
            "close-button": !0,
          }),
          W: i.p({ id: "mp-dialog" }),
          X: i.p({ id: "embedded-trade-dialog" }),
          Y: i.sr("#global-wrap", "62671e04-0"),
          Z: i.p({
            id: "global-wrap",
            filePath: "/account/safesetting",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(b);
