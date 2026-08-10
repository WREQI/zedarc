require("../../@babel/runtime/helpers/Arrayincludes");
var e = {
    UNI_SCRIPT_DEFINE: {
      "BROKER-ZHONGXINJIANTOU": !0,
      "PLUGIN-MODE": !0,
      "BROKER-CMS": !1,
      "BROKER-HUALIN": !1,
      "BROKER-ZSZQ": !1,
      "BROKER-GJZQ": !1,
      PURE_MINIAPP: !1,
      "BROKER-CNHT": !1,
      "BROKER-GUOSEN": !1,
      OEM: !1,
      MICRO: !1,
      "BROKER-ZHONGJINCAIFU": !1,
      "BROKER-GUANGFA": !1,
      "BROKER-HTSEC": !1,
      "BROKER-ZHONGXIN": !1,
      "BROKER-GUOTAIJUNAN": !1,
      "BROKER-HUATAI": !1,
      "BROKER-XINGYE": !1,
      "BROKER-CAIXIN": !1,
    },
    env: {},
  },
  t = { exports: {} },
  a = require("../pageAuth.js").__CJS__import__15__.F_BROKER_NOPEN,
  n = [
    {
      root: "pages/account",
      pages: [
        {
          path: "bind",
          style: { navigationBarTitleText: "绑定账户" },
          meta: { signature: a.COMMON },
          buildPlugin: "1",
          alias: "/tel",
          name: "AccountBind",
          busis: ["apply"],
        },
        {
          path: "find-account",
          style: { navigationBarTitleText: "找回账户" },
          meta: { signature: a.COMMON },
          buildPlugin: "1",
          name: "FindAccount",
          busis: ["apply"],
        },
        {
          path: "personal",
          style: {
            navigationBarTitleText: "账户信息",
            enablePullDownRefresh: !1,
            navigationStyle: "custom",
          },
          buildPlugin: "1",
          name: "AccountPersonal",
          busis: ["trade"],
        },
        {
          path: "setting",
          style: {
            navigationBarTitleText: "交易通知",
            enablePullDownRefresh: !1,
          },
          name: "AccountSetting",
          busis: ["trade"],
        },
        {
          path: "safesetting",
          style: {
            navigationBarTitleText: "交易设置",
            enablePullDownRefresh: !1,
          },
          buildPlugin: "1",
          name: "AccountSafeSetting",
          busis: ["trade"],
        },
        {
          path: "charge",
          style: {
            navigationBarTitleText: "收费标准",
            enablePullDownRefresh: !1,
          },
          name: "AccountCharge",
          busis: ["trade"],
        },
        {
          path: "trade-fees-embedded",
          style: {
            navigationBarTitleText: "降佣联系方式",
            enablePullDownRefresh: !1,
          },
          name: "TradeFeesEmbedded",
          busis: ["trade"],
        },
        {
          path: "bstmark",
          style: {
            navigationBarTitleText: "K线买卖点",
            enablePullDownRefresh: !1,
          },
          name: "BstMark",
          busis: ["trade"],
        },
        {
          path: "auto-add-choose",
          style: {
            navigationBarTitleText: "委托加自选",
            enablePullDownRefresh: !1,
          },
          name: "AutoAddChoose",
          busis: ["trade"],
        },
        {
          path: "about-company",
          style: {
            navigationBarTitleText: "关于券商",
            enablePullDownRefresh: !1,
          },
          name: "AboutCompany",
          busis: ["trade"],
        },
        {
          path: "about-protocol",
          style: {
            navigationBarTitleText: "隐私政策",
            enablePullDownRefresh: !1,
          },
          name: "AboutProtocol",
          busis: ["trade"],
        },
        {
          path: "switching",
          style: {
            navigationBarTitleText: "证券账户登录",
            enablePullDownRefresh: !1,
          },
          meta: { signature: a.COMMON },
          buildPlugin: "1",
          name: "AccountSwitching",
          busis: ["trade"],
        },
        {
          path: "card",
          style: {
            navigationBarTitleText: "管理银行卡",
            enablePullDownRefresh: !1,
          },
          name: "AccountCard",
          busis: ["trade"],
        },
        {
          path: "card-change",
          style: {
            navigationBarTitleText: "更换安全卡",
            enablePullDownRefresh: !1,
          },
          name: "AccountCardChange",
          busis: ["trade"],
        },
        {
          path: "card-change-check",
          style: {
            navigationBarTitleText: "更换银行卡",
            enablePullDownRefresh: !1,
          },
          name: "AccountCardChangeCheck",
          busis: ["trade"],
        },
        {
          path: "detail",
          style: {
            navigationBarTitleText: "证券账户",
            enablePullDownRefresh: !1,
          },
          name: "AccountDetail",
          buildPlugin: "1",
          busis: ["trade"],
        },
        {
          path: "business",
          style: {
            navigationBarTitleText: "业务办理",
            enablePullDownRefresh: !1,
          },
          name: "AccountBusiness",
          busis: ["trade"],
        },
        {
          path: "unbind",
          style: {
            navigationBarTitleText: "证券账户",
            enablePullDownRefresh: !1,
          },
          name: "AccountUnbind",
          busis: ["trade"],
        },
        {
          path: "silentbind",
          style: { navigationBarTitleText: "交易", enablePullDownRefresh: !1 },
          meta: { signature: a.COMMON },
          name: "AccountSilentBind",
          busis: ["trade"],
        },
        {
          path: "username",
          style: { navigationBarTitleText: " ", enablePullDownRefresh: !1 },
          meta: { signature: a.COMMON },
          name: "AccountUserName",
          busis: ["trade", "apply"],
        },
      ],
    },
  ];
((e.UNI_SCRIPT_DEFINE && e.UNI_SCRIPT_DEFINE["BROKER-GUOSEN"]) ||
  ["guojin", "guoxin"].includes(e.env.MP_BROKER)) &&
  n[0].pages.push(
    {
      path: "ts-bind-phone",
      style: { navigationBarTitleText: "绑定账户" },
      meta: { signature: a.COMMON },
      buildPlugin: "1",
      name: "AccountTsBindPhone",
      busis: ["apply"],
    },
    {
      path: "ts-bind-account",
      style: { navigationBarTitleText: "绑定账户" },
      meta: { signature: a.COMMON },
      buildPlugin: "1",
      name: "AccountTsBindAccount",
      busis: ["apply"],
    }
  ),
  (t.exports = n);
var i = (null == t.exports ? {} : t.exports).default || t.exports,
  l = Object.freeze(
    Object.defineProperty({ __proto__: null, default: i }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = i), (exports.__CJS__import__1__ = l);
