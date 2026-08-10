var e,
  O,
  _ = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var P = require("../enum.js"),
  r =
    (_((e = {}), P.ENUM_PROTOCOL_BIZ.APPLY, {
      mode: P.PROTOCOL_MODE.BROKER_CGI,
      previewType: P.PREVIEW_TYPE.BACKEND,
    }),
    _(e, P.ENUM_PROTOCOL_BIZ.BIND, {
      mode: P.PROTOCOL_MODE.STATICS_CONFIG,
      list: [
        { name: "《用户协议》", key: "zhongjincaifu_yhxy" },
        {
          name: "《中国中金财富证券有限公司隐私政策》",
          key: "zhongjincaifu_yxgsyszc",
        },
        {
          name: "《证券投资基金风险提示及免责声明与权益须知》",
          key: "zhongjincaifu_gyzqscycjydfxjss",
        },
      ],
    }),
    e),
  E = _(
    {},
    P.ENUM_PROTOCOL_BIZ.APPLY,
    (_((O = {}), P.ENUM_PROTOCOL_SCENE.APPLY_BINDMOBILE, { scenceId: "2" }),
    _(O, P.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION, { scenceId: "1" }),
    O)
  );
(exports.protocolConfigMap = r), (exports.sceneMap = E);
