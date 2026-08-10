Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.LanguageChooser =
    exports.KEYS_MAP =
    exports.KEYS =
    exports.ALL_LANGUAGE =
      void 0),
  (exports.langTransform = a),
  (exports.languageChooser = void 0);
var e = require("../@babel/runtime/helpers/classCallCheck"),
  A = require("../@babel/runtime/helpers/createClass"),
  E = {
    FRAME_VERIFICATION: "FRAME_VERIFICATION",
    FRAME_BACK: "FRAME_BACK",
    FRAME_SIMPLE: "FRAME_SIMPLE",
    FRAME_STANDARD: "FRAME_STANDARD",
    FRAME_OK: "FRAME_OK",
    ARIA_VERIFICATION_SIMPLE: "ARIA_VERIFICATION_SIMPLE",
    ARIA_VERIFICATION_STANDARD: "ARIA_VERIFICATION_STANDARD",
    ARIA_CLOSE: "ARIA_CLOSE",
    ARIA_STANDARD: "ARIA_STANDARD",
    ARIA_SIMPLE: "ARIA_SIMPLE",
    ARIA_FEEDBACK: "ARIA_FEEDBACK",
    ARIA_REFRESH: "ARIA_REFRESH",
    NOTE_IMG_LOAD_FAILED: "NOTE_IMG_LOAD_FAILED",
    NOTE_VERIFY_SUCCESS: "NOTE_VERIFY_SUCCESS",
    NOTE_VERIFY_TIMEOUT: "NOTE_VERIFY_TIMEOUT",
    NOTE_VERIFY_FAILED: "NOTE_VERIFY_FAILED",
    NOTE_VERIFY_ERROR: "NOTE_VERIFY_ERROR",
    NOTE_VERIFY_FAILED_MAX: "NOTE_VERIFY_FAILED_MAX",
    NOTE_VERIFY_DEFAULT: "NOTE_VERIFY_DEFAULT",
    NOTE_APPID_REGION_WRONG: "NOTE_APPID_REGION_WRONG",
  };
exports.KEYS_MAP = E;
var _ = [
  E.FRAME_VERIFICATION,
  E.FRAME_BACK,
  E.FRAME_SIMPLE,
  E.FRAME_STANDARD,
  E.FRAME_OK,
  E.ARIA_VERIFICATION_SIMPLE,
  E.ARIA_VERIFICATION_STANDARD,
  E.ARIA_CLOSE,
  E.ARIA_STANDARD,
  E.ARIA_SIMPLE,
  E.ARIA_FEEDBACK,
  E.ARIA_REFRESH,
  E.NOTE_IMG_LOAD_FAILED,
  E.NOTE_VERIFY_SUCCESS,
  E.NOTE_VERIFY_TIMEOUT,
  E.NOTE_VERIFY_FAILED,
  E.NOTE_VERIFY_ERROR,
  E.NOTE_VERIFY_FAILED_MAX,
  E.NOTE_VERIFY_DEFAULT,
  E.NOTE_APPID_REGION_WRONG,
];
exports.KEYS = _;
var I = [
    "安全验证",
    "返回",
    "我不会",
    "常规验证",
    "确定",
    "无障碍验证",
    "常规验证",
    "关闭验证",
    "切换为常规验证方式",
    "我不会，换一种验证方式",
    "问题反馈",
    "刷新验证",
    "图片加载失败，请点击刷新",
    "验证成功！",
    "网络超时，请重试",
    "验证错误，请重试",
    "您的操作过于频繁，请稍后再试",
    "这题有点难呢，已为您更换题目",
    "网络恍惚了一下(+)，再试一次吧",
    "appid所属地域与实际使用地域不符，请联系验证码团队处理",
  ],
  t = {
    zh: I,
    "zh-cn": I,
    "zh-tw": [
      "安全驗證",
      "返回",
      "無障礙方式",
      "常規驗證",
      "確定",
      "無障礙驗證",
      "常規驗證",
      "關閉驗證",
      "切換為常規驗證方式",
      "我不會，換一種驗證方式",
      "反映意見",
      "刷新驗證",
      "圖片載入失敗，請點擊重新整理",
      "驗證成功！",
      "網絡逾時，請重試",
      "驗證錯誤，請重試",
      "您的操作過於頻繁，請稍後再試",
      "這題有點難，已為你更換題目",
      "網路中斷了一下(+)，再試一次吧",
      "appid所屬地域與實際使用地域不符，請聯系驗證碼團隊處理",
    ],
    en: [
      "Verification",
      "Back",
      "Simple mode",
      "Standard mode",
      "OK",
      "Simple mode",
      "Standard mode",
      "Quit verification",
      "Switch to Standard mode",
      "Too difficult? Switch to Simple mode",
      "Feedback",
      "Try a new captcha",
      "Image loading failed. Click to refresh",
      "Verification passed",
      "Network timed out. Please try again.",
      "Verification failed. Try again.",
      "Operation too often. Please retry later.",
      "Too hard? Try a new one",
      "Network error (+). Please try again.",
      "The AppID does not match the actual location. Please contact the Captcha team.",
    ],
  };
function a() {
  var e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zh-cn",
    A = e.toLowerCase().replace(/_/, "-");
  return t[A] ? A : A.split("-")[0] || A;
}
exports.ALL_LANGUAGE = t;
var R = (function () {
  function E(A, _) {
    e(this, E),
      (this.keys = A),
      (this.content = _),
      (this.currentLanguage = "zh-cn"),
      (this.curLanguagePack = {});
  }
  return (
    A(E, [
      {
        key: "init",
        value: function (e) {
          var A = a(e);
          this.currentLanguage = A;
          for (var E = this.content[A], _ = 0; _ < this.keys.length; _++)
            this.curLanguagePack[this.keys[_]] = E[_];
        },
      },
      {
        key: "getWord",
        value: function (e) {
          var A = this.curLanguagePack[e];
          if (!A)
            for (var E = 0; E < this.keys.length; E++)
              if (this.keys[E] === e) {
                A = this.content.en[E];
                break;
              }
          return Array.isArray(A) ? A[Math.floor(Math.random() * A.length)] : A;
        },
      },
    ]),
    E
  );
})();
exports.LanguageChooser = R;
var r = new R(_, t);
exports.languageChooser = r;
