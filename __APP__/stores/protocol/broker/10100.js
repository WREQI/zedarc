var e,
  O,
  n = require("../../../@babel/runtime/helpers/defineProperty"),
  r = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../app.js");
var s = require("../../../components/FaceCheck/utils.js"),
  i = require("../enum.js"),
  _ =
    (n((e = {}), i.ENUM_PROTOCOL_BIZ.APPLY, {
      mode: i.PROTOCOL_MODE.BROKER_CGI,
      type: i.PROTOCOL_TYPE.HTML,
    }),
    n(e, i.ENUM_PROTOCOL_BIZ.BIND, {
      mode: i.PROTOCOL_MODE.STATICS_CONFIG,
      list: [
        { name: "《客户须知》", key: "chinalions_khxz" },
        {
          name: "《上海证券交易所个人投资者行为指引》",
          key: "chinalions_shzqjysgrtzzxwzy",
        },
        {
          name: "《华林证券股份有限公司网上开户协议》",
          key: "chinalions_hlzqgfyxgswskhxy",
        },
      ].concat(
        r(
          s.needSign()
            ? [{ name: "《个人信息授权协议》", key: "chinalions_rlxxsqxy" }]
            : []
        )
      ),
    }),
    e),
  C = n(
    {},
    i.ENUM_PROTOCOL_BIZ.APPLY,
    (n((O = {}), i.ENUM_PROTOCOL_SCENE.APPLY_FACECHECK, { scenceId: "1" }),
    n(O, i.ENUM_PROTOCOL_SCENE.APPLY_CONFIRMATION, { scenceId: "2" }),
    O)
  );
(exports.protocolConfigMap = _), (exports.sceneMap = C);
