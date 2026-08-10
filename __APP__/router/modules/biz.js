var e = {
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
  a = {},
  t = { exports: {} },
  n = require("../pageAuth.js").__CJS__import__15__.F_BROKER_NOPEN,
  i = [
    {
      root: "pages/biz",
      pages: [
        {
          path: "pwd-change/index",
          style: {
            navigationBarTitleText: "修改密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdChange",
          busis: ["trade"],
        },
        {
          path: "pwd-change/login",
          style: {
            navigationBarTitleText: "修改密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdChangeLogin",
          busis: ["trade"],
        },
        {
          path: "pwd-change/verify",
          style: {
            navigationBarTitleText: "修改密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdChangeVerify",
          busis: ["trade"],
        },
        {
          path: "pwd-reset/index",
          style: {
            navigationBarTitleText: "重置密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdReset",
          meta: { signature: n.COMMON },
          busis: ["trade", "apply"],
        },
        {
          path: "pwd-reset/form",
          style: {
            navigationBarTitleText: "重置密码",
            enablePullDownRefresh: !1,
          },
          buildPlugin: "1",
          name: "BizPwdResetForm",
          meta: { signature: n.COMMON },
          busis: ["trade", "apply"],
        },
        {
          path: "pwd-reset/upload-idcard",
          style: {
            navigationBarTitleText: "上传身份证",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdResetUploadIdCard",
          meta: { signature: n.COMMON },
          busis: ["trade", "apply"],
        },
        {
          path: "pwd-reset/video",
          style: {
            navigationBarTitleText: "重置密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdResetVideo",
          meta: { signature: n.COMMON },
          busis: ["trade", "apply"],
        },
        {
          path: "pwd-reset/setpwd",
          style: {
            navigationBarTitleText: "重置密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdResetSetPwd",
          meta: { signature: n.COMMON },
          busis: ["trade", "apply"],
        },
        {
          path: "pwd-reset/result",
          style: {
            navigationBarTitleText: "重置密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdResetResult",
          meta: { signature: n.COMMON },
          busis: ["trade", "apply"],
        },
        {
          path: "account/unlock",
          style: { navigationBarTitleText: "", enablePullDownRefresh: !1 },
          name: "BizAccountUnlock",
          meta: { signature: n.COMMON },
          busis: ["trade", "apply"],
        },
        {
          path: "risk-update/result",
          style: {
            navigationBarTitleText: "风险测评",
            enablePullDownRefresh: !1,
          },
          name: "BizRiskUpdateResult",
          busis: ["trade"],
        },
        {
          path: "risk-update/index",
          style: {
            navigationBarTitleText: "风险测评",
            enablePullDownRefresh: !1,
          },
          name: "BizRiskUpdate",
          busis: ["trade"],
        },
        {
          path: "kzz/index",
          style: {
            navigationBarTitleText: "可转债权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKzz",
          busis: ["trade"],
        },
        {
          path: "kzz/auth",
          style: {
            navigationBarTitleText: "可转债权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKzzAuth",
          busis: ["trade"],
        },
        {
          path: "kzz/sign",
          style: {
            navigationBarTitleText: "可转债权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKzzSign",
          busis: ["trade"],
        },
        {
          path: "phone-update/index",
          style: {
            navigationBarTitleText: "更换手机号",
            enablePullDownRefresh: !1,
          },
          name: "BizPhoneUpdate",
          busis: ["trade"],
        },
        {
          path: "phone-update/result",
          style: {
            navigationBarTitleText: "更换手机号",
            enablePullDownRefresh: !1,
          },
          name: "BizPhoneUpdateResult",
          busis: ["trade"],
        },
        {
          path: "id-update/index",
          style: {
            navigationBarTitleText: "更新身份证",
            enablePullDownRefresh: !1,
          },
          name: "BizIdUpdate",
          busis: ["trade"],
        },
        {
          path: "id-update/photo",
          style: {
            navigationBarTitleText: "上传身份证",
            enablePullDownRefresh: !1,
          },
          name: "BizIdUpdatePhoto",
          busis: ["trade"],
        },
        {
          path: "id-update/form",
          style: {
            navigationBarTitleText: "更新身份证",
            enablePullDownRefresh: !1,
          },
          name: "BizIdUpdateForm",
          busis: ["trade"],
        },
        {
          path: "id-update/selfie",
          style: {
            navigationBarTitleText: "更新身份证",
            enablePullDownRefresh: !1,
          },
          name: "BizIdUpdateSelfie",
          busis: ["trade"],
        },
        {
          path: "id-update/progress",
          style: {
            navigationBarTitleText: "更新身份证",
            enablePullDownRefresh: !1,
          },
          name: "BizIdUpdateProgress",
          busis: ["trade"],
        },
        {
          path: "return-question/index",
          style: {
            navigationBarTitleText: "回访问卷",
            enablePullDownRefresh: !1,
          },
          name: "BizAuthReturnQuestion",
          busis: ["trade"],
        },
        {
          path: "kechuang/open",
          style: {
            navigationBarTitleText: "科创板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangOpen",
          busis: ["trade"],
        },
        {
          path: "kechuang/check-auth",
          style: {
            navigationBarTitleText: "科创板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangCheckAuth",
          busis: ["trade"],
        },
        {
          path: "kechuang/intro",
          style: {
            navigationBarTitleText: "科创板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangIntro",
          busis: ["trade"],
        },
        {
          path: "kechuang/sign",
          style: {
            navigationBarTitleText: "科创板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangSign",
          busis: ["trade"],
        },
        {
          path: "kechuang/test",
          style: {
            navigationBarTitleText: "科创板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangTest",
          busis: ["trade"],
        },
        {
          path: "kechuang/test-result",
          style: {
            navigationBarTitleText: "科创板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangTestResult",
          busis: ["trade"],
        },
        {
          path: "kechuang/open-result",
          style: {
            navigationBarTitleText: "科创板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangOpenResult",
          busis: ["trade"],
        },
        {
          path: "kechuang/growth-open",
          style: {
            navigationBarTitleText: "科创成长层权限",
            enablePullDownRefresh: !1,
          },
          name: "BizKeChuangGrowthOpen",
          busis: ["trade"],
        },
        {
          path: "st/index",
          style: {
            navigationBarTitleText: "沪深ST权限",
            enablePullDownRefresh: !1,
          },
          name: "BizSt",
          busis: ["trade"],
        },
        {
          path: "st/sign",
          style: {
            navigationBarTitleText: "沪深ST权限",
            enablePullDownRefresh: !1,
          },
          name: "BizStSign",
          busis: ["trade"],
        },
        {
          path: "st/result",
          style: {
            navigationBarTitleText: "沪深ST权限",
            enablePullDownRefresh: !1,
          },
          name: "BizStResult",
          busis: ["trade"],
        },
        {
          path: "gem/index",
          style: {
            navigationBarTitleText: "创业板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizGem",
          busis: ["trade"],
        },
        {
          path: "gem/auth",
          style: {
            navigationBarTitleText: "创业板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizGemAuth",
          busis: ["trade"],
        },
        {
          path: "gem/sign",
          style: {
            navigationBarTitleText: "创业板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizGemSign",
          busis: ["trade"],
        },
        {
          path: "gem/result",
          style: {
            navigationBarTitleText: "创业板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizGemResult",
          busis: ["trade"],
        },
        {
          path: "debt/index",
          style: {
            navigationBarTitleText: "逆回购权限",
            enablePullDownRefresh: !1,
          },
          name: "BizDebtIndex",
          busis: ["trade"],
        },
        {
          path: "bj/index",
          style: {
            navigationBarTitleText: "北交所权限",
            enablePullDownRefresh: !1,
          },
          name: "BizBjIndex",
          busis: ["trade"],
        },
        {
          path: "stocktransfer/index",
          style: {
            navigationBarTitleText: "股转账户权限",
            enablePullDownRefresh: !1,
          },
          name: "BizStockTransferIndex",
          busis: ["trade"],
        },
        {
          path: "stocktransfer/auth",
          style: {
            navigationBarTitleText: "退市板权限",
            enablePullDownRefresh: !1,
          },
          name: "BizStockTransferAuth",
          busis: ["trade"],
        },
        {
          path: "shareholder/bind",
          style: {
            navigationBarTitleText: "添加股东卡",
            enablePullDownRefresh: !1,
          },
          name: "BizShareHolderBind",
          busis: ["trade"],
        },
        {
          path: "shareholder/manage",
          style: {
            navigationBarTitleText: "管理股东卡",
            enablePullDownRefresh: !1,
          },
          name: "BizShareHolderManage",
          busis: ["trade"],
        },
        {
          path: "pwd/index",
          style: {
            navigationBarTitleText: "管理密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdIndex",
          busis: ["trade"],
        },
        {
          path: "pwd-change/trade",
          style: {
            navigationBarTitleText: "修改交易密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdChangeTrade",
          busis: ["trade"],
        },
        {
          path: "pwd-change/fund",
          style: {
            navigationBarTitleText: "修改资金密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdChangeFund",
          busis: ["trade"],
        },
        {
          path: "pwd-reset/fund",
          style: {
            navigationBarTitleText: "重置资金密码",
            enablePullDownRefresh: !1,
          },
          name: "BizPwdResetFund",
          busis: ["trade"],
        },
        {
          path: "profile/update",
          style: {
            navigationBarTitleText: "更新个人信息",
            enablePullDownRefresh: !1,
          },
          name: "BizProfileUpdate",
          busis: ["trade"],
        },
        {
          path: "broker-service/index",
          style: {
            navigationBarTitleText: "特色服务",
            enablePullDownRefresh: !1,
          },
          name: "BizBrokerService",
          busis: ["trade"],
        },
        {
          path: "broker-service/wake-account",
          style: {
            navigationBarTitleText: "休眠激活",
            enablePullDownRefresh: !1,
          },
          name: "BizWakeAccount",
          busis: ["trade"],
        },
        {
          path: "bankcard/add-bankcard",
          style: {
            navigationBarTitleText: "添加银行卡",
            enablePullDownRefresh: !1,
          },
          name: "BizAddBankcard",
          busis: ["trade"],
        },
        {
          path: "bankcard/delete-bankcard",
          style: {
            navigationBarTitleText: "删除银行卡",
            enablePullDownRefresh: !1,
          },
          name: "BizDeleteBankcard",
          busis: ["trade"],
        },
        {
          path: "bankcard/change-master-bankcard",
          style: {
            navigationBarTitleText: "更换主辅银行",
            enablePullDownRefresh: !1,
          },
          name: "BizChangeMasterBankcard",
          busis: ["trade"],
        },
        {
          path: "broker-service/modify-fund-limit",
          style: {
            navigationBarTitleText: "资金额度限制",
            enablePullDownRefresh: !1,
          },
          name: "BizModifyFundLimit",
          busis: ["trade"],
        },
        {
          path: "department/index",
          style: {
            navigationBarTitleText: "营业部地图",
            enablePullDownRefresh: !1,
          },
          name: "BizDepartment",
          busis: ["trade"],
        },
        {
          path: "ggt/index",
          style: {
            navigationBarTitleText: "港股通权限",
            enablePullDownRefresh: !1,
          },
          name: "BizGGTOpen",
          busis: ["trade"],
        },
        {
          path: "broker-service/open-stock",
          style: {
            navigationBarTitleText: "开通主板交易",
            enablePullDownRefresh: !1,
          },
          name: "BizOpenStock",
          busis: ["trade"],
        },
        {
          path: "broker-service/broker-tool",
          style: {
            navigationBarTitleText: "工具设置",
            enablePullDownRefresh: !1,
          },
          name: "BizBrokerTool",
          busis: ["trade"],
        },
        {
          path: "permission/index",
          style: {
            navigationBarTitleText: "查询交易权限",
            enablePullDownRefresh: !1,
          },
          name: "BizPermission",
          busis: ["trade"],
        },
      ],
    },
  ];
((e && e["BROKER-ZHONGJINCAIFU"]) ||
  "zhongjincaifu" === a.MP_BROKER ||
  (e && e["BROKER-ZHONGXINJIANTOU"]) ||
  "zhongxinjiantou" === a.MP_BROKER) &&
  i[0].pages.push({
    path: "broker-service/half-chart",
    style: { navigationBarTitleText: "行情图表", enablePullDownRefresh: !1 },
    buildPlugin: "1",
    name: "BizHalfChart",
    busis: ["trade"],
  }),
  (t.exports = i);
var l = (null == t.exports ? {} : t.exports).default || t.exports,
  s = Object.freeze(
    Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = l), (exports.__CJS__import__4__ = s);
