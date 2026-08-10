var O,
  _,
  e = require("../../../@babel/runtime/helpers/defineProperty"),
  C = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../app.js");
var E = require("../../../components/FaceCheck/utils.js"),
  I = require("../enum.js"),
  P =
    (e((O = {}), I.ENUM_PROTOCOL_BIZ.APPLY, {
      mode: I.PROTOCOL_MODE.BROKER_CGI,
      type: I.PROTOCOL_TYPE.PDF,
    }),
    e(O, I.ENUM_PROTOCOL_BIZ.BIND, {
      mode: I.PROTOCOL_MODE.STATICS_CONFIG,
      list: [
        { name: "《客户须知》", key: "cmschina_khxz" },
        { name: "《风险警示书》", key: "cmschina_fxjss" },
        {
          name: "《上海证券交易所个人投资者行为指引》",
          key: "cmschina_shzqjysgrtzzxwzy",
        },
        { name: "《客户声明》", key: "cmschina_khsm" },
      ].concat(
        C(
          E.needSign()
            ? [{ name: "《个人信息授权协议》", key: "cmschina_rlxxsqxy" }]
            : []
        )
      ),
    }),
    e(O, I.ENUM_PROTOCOL_BIZ.TRADE_CONFIRMATION, {}),
    e(O, I.ENUM_PROTOCOL_BIZ.TRADE_REGISTER, {}),
    e(O, I.ENUM_PROTOCOL_BIZ.BIZ_NEWSTOCK_PURCHASE, {}),
    e(O, I.ENUM_PROTOCOL_BIZ.BIZ_NEWSTOCK_BOOKING, {}),
    e(O, I.ENUM_PROTOCOL_BIZ.BIZ_KZZ_OPEN, {}),
    e(O, I.ENUM_PROTOCOL_BIZ.BIZ_ST_OPEN, {}),
    e(O, I.ENUM_PROTOCOL_BIZ.BIZ_KCB_OPEN, {}),
    e(O, I.ENUM_PROTOCOL_BIZ.BIZ_CONDITIONAL_ORDER, {}),
    O),
  N = e(
    {},
    I.ENUM_PROTOCOL_BIZ.APPLY,
    (e((_ = {}), I.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK, { scenceId: "1" }),
    e(_, I.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION, { scenceId: "2" }),
    _)
  );
(exports.protocolConfigMap = P), (exports.sceneMap = N);
