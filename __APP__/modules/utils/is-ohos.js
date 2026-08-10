var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.IS_OHOS = void 0);
var r = e(require("../../index")).default.getSystemInfo().osPlatform;
exports.IS_OHOS = "ohos" === r;
