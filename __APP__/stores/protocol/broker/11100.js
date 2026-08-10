var e,
  n = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../@babel/runtime/helpers/Objectentries"),
  require("../../../app.js");
var t = require("../enum.js"),
  o = require("../../../config/bank.js"),
  i = [
    {
      name: "《客户合同书》",
      key: "zhongxinjiantou_khhts",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK],
      submitReport: {
        category: "B0083",
        version: "ZXJT20260512094013",
        rule: 0,
      },
    },
    {
      name: "《人脸识别身份认证规则》",
      key: "zhongxinjiantou_rlsbsfrzgz",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK],
      submitReport: {
        category: "B0092",
        version: "ZXJT20230106131630",
        rule: 0,
      },
    },
    {
      name: "查看详情",
      key: "zhongxinjiantou_yjqrwj",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_COMMISSION_CONFIRM],
      submitReport: {
        category: "B0086",
        version: "ZXJT20260603154904",
        rule: 0,
      },
    },
    {
      name: "《北京数字认证股份有限公司电子认证服务协议》",
      key: "zhongxinjiantou_bjszrzgfyxgsdzrzfwxy",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_SUBMIT_FIRST],
    },
    {
      name: "《电子签名告知条款》",
      key: "zhongxinjiantou_dzqmgztk",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_SUBMIT_FIRST],
      submitReport: {
        category: "B0097",
        version: "ZXJT20240322083909",
        rule: 0,
      },
    },
    {
      name: "《中信建投证券股份有限公司主板投资风险揭示书》",
      key: "zhongxinjiantou_regist_apply_main_risk",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_SUBMIT_FIRST],
      submitReport: { category: "397", version: "ZXJT20240322083909", rule: 0 },
    },
    {
      name: "《客户风险承受能力评估结果告知函》",
      key: "zhongxinjiantou_customer_risk_notification",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_SUBMIT_FIRST],
      submitReport: {
        category: "B0028",
        version: "ZXJT20260202112845",
        rule: 0,
      },
    },
    {
      name: "查看详情",
      key: "zhongxinjiantou_bjsz",
      scenes: [t.ENUM_PROTOCOL_SCENE.APPLY_SUBMIT_SECOND],
    },
    {
      submitReport: {
        category: "B0029",
        version: "ZXJT20260202112845",
        rule: 1,
      },
    },
    {
      submitReport: {
        category: "B0030",
        version: "ZXJT20260202112845",
        rule: 2,
      },
    },
    {
      submitReport: {
        category: "B0038",
        rule: 3,
        versionByBank: {
          icbc: "ZXJT20260526101722",
          abc: "ZXJT20240823105052",
          ccb: "ZXJT20260526101722",
          comm: "ZXJT20240823105052",
          cmb: "ZXJT20240814144138",
          boc: "ZXJT20240823105052",
          spdb: "ZXJT20260526101722",
          cib: "ZXJT20240823105052",
          hxb: "ZXJT20260526101722",
          citic: "ZXJT20240814144138",
          pab: "ZXJT20240823105052",
          gdb: "ZXJT20240823105052",
          ceb: "ZXJT20260526101722",
          cmbc: "ZXJT20240823105052",
          bosh: "ZXJT20240823105052",
          psbc: "ZXJT20260526101722",
          nbcb: "ZXJT20240823105052",
          bjbank: "ZXJT20260526101722",
          bob: "ZXJT20260526101722",
          njcb: "ZXJT20240823105052",
          boj: "ZXJT20240823105052",
          tjb: "ZXJT20240823105052",
          bog: "ZXJT20260526101722",
        },
      },
    },
  ];
function s(e, n) {
  var t,
    i = n.invest_agreement_type,
    s = n.bank_code;
  switch (e.rule) {
    case 0:
      return e.version ? "".concat(e.category, "-").concat(e.version) : null;
    case 1:
      return String(i) === String(0) && e.version
        ? "".concat(e.category, "-").concat(e.version)
        : null;
    case 2:
      return String(i) === String(1) && e.version
        ? "".concat(e.category, "-").concat(e.version)
        : null;
    case 3:
      var c =
        null == (t = e.versionByBank)
          ? void 0
          : t[
              (function (e) {
                if (!e) return "";
                var n = Object.entries(o.BANKS).find(function (n) {
                  var t = r(n, 2),
                    o = t[0],
                    i = t[1];
                  return o === o.toUpperCase() && i.code === e;
                });
                return n ? o.normalizeBankAbbr(n[0]) : "";
              })(s)
            ];
      return c ? "".concat(e.category, "-").concat(c) : null;
    default:
      return null;
  }
}
var c =
  (n((e = {}), t.ENUM_PROTOCOL_BIZ.APPLY, {
    mode: t.PROTOCOL_MODE.STATICS_CONFIG,
    list: i
      .filter(function (e) {
        return !!e.name && !!e.key;
      })
      .map(function (e) {
        return { name: e.name, key: e.key, scenes: e.scenes };
      }),
  }),
  n(e, t.ENUM_PROTOCOL_BIZ.BIND, {
    mode: t.PROTOCOL_MODE.STATICS_CONFIG,
    list: [
      { name: "《中信建投免责声明》", key: "zhongxinjiantou_bh_mzsm" },
      { name: "《中信建投隐私政策》", key: "zhongxinjiantou_bh_yszc" },
    ],
  }),
  e);
(exports.buildApplySubmitProtocolVer = function (e) {
  return i
    .map(function (n) {
      return n.submitReport ? s(n.submitReport, e) : null;
    })
    .filter(function (e) {
      return !!e;
    })
    .join("|");
}),
  (exports.protocolConfigMap = c),
  (exports.sceneMap = {});
