var e = { exports: {} };
e.exports = [
  {
    root: "pages/transfer",
    pages: [
      {
        path: "fund",
        style: {
          navigationBarTitleText: "出金入金",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "TransferFund",
        busis: ["trade"],
      },
      {
        path: "result",
        style: {
          navigationBarTitleText: "转账结果",
          enablePullDownRefresh: !1,
        },
        name: "TransferResult",
        busis: ["trade"],
      },
      {
        path: "rule",
        style: {
          navigationBarTitleText: "到账说明",
          enablePullDownRefresh: !1,
        },
        name: "TransferOutRule",
        busis: ["trade"],
      },
      {
        path: "history",
        style: {
          navigationBarTitleText: "资金明细",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "TransferHistory",
        busis: ["trade"],
      },
      {
        path: "deduction",
        style: {
          navigationBarTitleText: "统计手续费",
          enablePullDownRefresh: !1,
        },
        name: "TransferDeduction",
        busis: ["trade"],
      },
      {
        path: "detail",
        style: {
          navigationBarTitleText: "资金详情",
          enablePullDownRefresh: !1,
        },
        name: "TransferRecordsDetails",
        busis: ["trade"],
      },
      {
        path: "checkresult",
        style: {
          navigationBarTitleText: "激活资金安全卡",
          enablePullDownRefresh: !1,
        },
        name: "CheckResult",
        busis: ["trade"],
      },
      {
        path: "checkpwd",
        style: {
          navigationBarTitleText: "激活资金安全卡",
          enablePullDownRefresh: !1,
        },
        name: "CheckPwd",
        busis: ["trade"],
      },
      {
        path: "changecard",
        style: {
          navigationBarTitleText: "证券开户",
          enablePullDownRefresh: !1,
        },
        name: "ChangeCard",
        busis: ["trade"],
      },
      {
        path: "changecardzxg",
        style: {
          navigationBarTitleText: "证券开户",
          enablePullDownRefresh: !1,
        },
        name: "ChangeCardZxg",
        busis: ["trade"],
      },
      {
        path: "help",
        style: {
          navigationBarTitleText: "转账帮助",
          enablePullDownRefresh: !1,
        },
        name: "TransferHelp",
        busis: ["trade"],
      },
      {
        path: "fund/records",
        style: {
          navigationBarTitleText: "出入金记录",
          enablePullDownRefresh: !1,
        },
        buildPlugin: "1",
        name: "TransferFundRecords",
        busis: ["trade"],
      },
      {
        path: "fund/recordsdetail",
        style: { navigationBarTitleText: " ", enablePullDownRefresh: !1 },
        buildPlugin: "1",
        name: "TransferFundRecordsDetail",
        busis: ["trade"],
      },
    ],
  },
];
var a = (null == e.exports ? {} : e.exports).default || e.exports,
  t = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = a), (exports.__CJS__import__12__ = t);
