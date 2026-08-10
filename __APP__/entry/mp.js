require("../app.js");
var e = require("../common/vendor.js"),
  s = require("./platform/mp-plugin.js");
e.wx$1.loadFontFace({
  global: !0,
  family: "stockFont",
  source: 'url("https://st.gtimg.com/files/20230529_445soe17c95.ttf")',
  desc: { style: "normal" },
  scopes: ["webview", "native"],
});
var o = s.MpPluginHost.instance();
o.onLaunch(), (e.index.$host = o);
