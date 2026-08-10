var O,
  e,
  P = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var _ = require("../enum.js"),
  E =
    (P((O = {}), _.ENUM_PROTOCOL_BIZ.APPLY, {
      mode: _.PROTOCOL_MODE.BROKER_CGI,
      type: _.PROTOCOL_TYPE.HTML,
    }),
    P(O, _.ENUM_PROTOCOL_BIZ.BIND, {
      mode: _.PROTOCOL_MODE.BROKER_CGI,
      type: _.PROTOCOL_TYPE.HTML,
    }),
    P(O, _.ENUM_PROTOCOL_BIZ.CONDITION, { mode: _.PROTOCOL_MODE.BROKER_CGI }),
    O),
  R = P(
    {},
    _.ENUM_PROTOCOL_BIZ.APPLY,
    (P((e = {}), _.ENUM_PROTOCOL_SCENE.APPLY_PROFILE, { scenceId: "1" }),
    P(e, _.ENUM_PROTOCOL_SCENE.APPLY_RISK_RESULT, { scenceId: "2" }),
    P(e, _.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION, { scenceId: "2" }),
    e)
  );
(exports.protocolConfigMap = E), (exports.sceneMap = R);
