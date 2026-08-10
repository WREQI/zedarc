var t = require("../../../../../common/vendor.js");
(exports.AI_ALL_BUTTON_CLICK_KEY = "ai-financialreport-all-button-click"),
  (exports.AI_FINANCIAL_REPORT_H5_URL =
    "https://gu.qq.com/resources/shy/ai/financial-report/index.html#/index"),
  (exports.AI_FINANCIAL_REPORT_LIST_H5_URL =
    "https://gu.qq.com/resources/shy/ai/financial-report/index.html#/list"),
  (exports.AI_FINANCIAL_REPORT_SEARCH_H5_URL =
    "https://gu.qq.com/resources/shy/ai/financial-report/index.html#/search"),
  (exports.AI_SEARCH_BUTTON_CLICK_KEY =
    "ai-financialreport-search-button-click"),
  (exports.currentDeviceIsiOS = function () {
    return t.wx$1.getSystemInfoSync().system.indexOf("iOS") >= 0;
  }),
  (exports.forcastFlagImg = function (t) {
    return -1 === t
      ? "https://st.gtimg.com/design/89cd3a6db30d28ecbff96d2f33830ba4.png"
      : 1 === t
      ? "https://st.gtimg.com/design/4f59989c11cf2458f995f3019edf28c3.png"
      : 0 === t
      ? "https://st.gtimg.com/design/6515371a1b5b7444fc5d386747ef950a.png"
      : "";
  }),
  (exports.forcastText = function (t) {
    return -1 === t
      ? "不及预期"
      : 1 === t
      ? "超出预期"
      : 0 === t
      ? "符合预期"
      : "";
  }),
  (exports.formatTime = function (t) {
    var e = new Date(),
      r = new Date(1e3 * t),
      n = new Date();
    return (
      n.setTime(n.getTime() - 864e5),
      r.toDateString() === e.toDateString()
        ? (function (t) {
            return t.toTimeString().slice(0, 5).replace(/\.\d+/, "");
          })(r)
        : r.toDateString() === n.toDateString()
        ? "昨天"
        : r.getFullYear() === e.getFullYear()
        ? (function (t) {
            var e = t.getMonth() + 1,
              r = t.getDate();
            return ""
              .concat(e.toString().padStart(2, "0"), "-")
              .concat(r.toString().padStart(2, "0"));
          })(r)
        : (function (t) {
            var e = t.getFullYear(),
              r = t.getMonth() + 1,
              n = t.getDate();
            return ""
              .concat(e, "-")
              .concat(r.toString().padStart(2, "0"), "-")
              .concat(n.toString().padStart(2, "0"));
          })(r)
    );
  }),
  (exports.formatZdfPercent = function (t) {
    if (t && t.length > 0) {
      var e = parseFloat(t).toFixed(2);
      return isNaN(e) ? t : e > 0 ? "+".concat(e, "%") : "".concat(e, "%");
    }
    return t || "";
  }),
  (exports.isLessThaniOS14 = function () {
    var e = !1,
      r = t.wx$1.getSystemInfoSync();
    if ("ios" === r.platform) {
      var n = r.system.split(" ")[1].split(".")[0];
      e = parseInt(n, 10) <= 14;
    }
    return e;
  }),
  (exports.textColorByValue = function (t) {
    if (t && t.length > 0) {
      var e = parseFloat(t);
      if (e > 0) return "#E63535";
      if (e < 0) return "#1caa3c";
    }
    return "#262E40";
  }),
  (exports.valueWithoutDecimal = function (t) {
    if (t && t.length > 0) {
      var e = parseFloat(t).toFixed(0);
      if (e.length >= 5) return e;
    }
    return t || "";
  });
