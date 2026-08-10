exports.forceHttpsAdvanced = function (t) {
  if (!t || "string" != typeof t) return "";
  try {
    return t.startsWith("//")
      ? "https:".concat(t)
      : /^https:\/\//i.test(t)
      ? t
      : t.replace(/^http:\/\//i, "https://");
  } catch (t) {
    return "";
  }
};
