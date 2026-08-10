var O,
  e,
  _ = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var P = require("../enum.js"),
  C =
    (_((O = {}), P.ENUM_PROTOCOL_BIZ.APPLY, {
      mode: P.PROTOCOL_MODE.BROKER_CGI,
      type: P.PROTOCOL_TYPE.PDF,
    }),
    _(O, P.ENUM_PROTOCOL_BIZ.BIND, {
      mode: P.PROTOCOL_MODE.STATICS_CONFIG,
      list: [
        { name: "《客户须知》", key: "gjzq_khsm" },
        { name: "《国金证券免责声明》", key: "gjzq_gjzqmzsm" },
        { name: "《国金证券隐私政策》", key: "gjzq_ysxys" },
      ],
    }),
    O),
  E = _(
    {},
    P.ENUM_PROTOCOL_BIZ.APPLY,
    (_((e = {}), P.ENUM_PROTOCOL_SCENE.APPLY_BINDMOBILE, { scenceId: "1" }),
    _(e, P.ENUM_PROTOCOL_SCENE.APPLY_UNIONPAY_BANKCARD, { scenceId: "2" }),
    _(e, P.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION, { scenceId: "3" }),
    e)
  );
(exports.protocolConfigMap = C), (exports.sceneMap = E);
