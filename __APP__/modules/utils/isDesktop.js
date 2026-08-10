var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.IS_DESKTOP = void 0);
var r = e(require("../../index")).default.getSystemInfo().osPlatform;
exports.IS_DESKTOP = "mac" === r || "windows" === r;
