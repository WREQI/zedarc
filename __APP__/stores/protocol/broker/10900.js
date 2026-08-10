var e,
  O,
  _ = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var P = require("../enum.js"),
  C =
    (_((e = {}), P.ENUM_PROTOCOL_BIZ.APPLY, {
      mode: P.PROTOCOL_MODE.BROKER_CGI,
      type: P.PROTOCOL_TYPE.PDF,
    }),
    _(e, P.ENUM_PROTOCOL_BIZ.BIND, {
      mode: P.PROTOCOL_MODE.STATICS_CONFIG,
      list: [
        { name: "《客户须知》", key: "guosen_khxz" },
        { name: "《国信证券H5交易特别提示》", key: "guosen_jytbts" },
        { name: "《用户信息授权函》", key: "guosen_yhxxsqh" },
      ],
    }),
    e),
  r = _(
    {},
    P.ENUM_PROTOCOL_BIZ.APPLY,
    (_((O = {}), P.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK, { scenceId: "1" }),
    _(O, P.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION, { scenceId: "2" }),
    O)
  );
(exports.protocolConfigMap = C), (exports.sceneMap = r);
