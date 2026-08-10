var e = require("../@babel/runtime/helpers/interopRequireDefault").default,
  r = e(require("../utils/recorderSpeechRecognizer.js")),
  t = e(require("../utils/speechRecognizer.js"));
module.exports = {
  getRecordSpeechRecognizer: function () {
    return new r.default();
  },
  getSpeechRecognizer: function () {
    return new t.default();
  },
};
