require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var e = require("../../../common/vendor.js"),
  r = require("../../../service/broker.js"),
  n = require("../../../service/aegis/platform/not-wujie.js"),
  t = require("../../../utils/index.js"),
  i = require("../../../utils/getPlatform.js"),
  o = require("../../../config/broker/11100/index.js");
exports.useDeferredRender = function (a) {
  var d = a.assetV2Control,
    u = a.isConditionEntry,
    l = i.getPlatform(),
    c = l.isMpPlugin,
    s = l.bizPlatform,
    f = e.ref(!1);
  e.provide("canRenderDelayAssetInfo", f);
  var m = { isQuoteLoad: !1, isTradeLoad: !1, $iframe: null },
    p = !1,
    v = null;
  function E() {
    v && (clearTimeout(v), (v = null));
  }
  function R() {
    !d.value ||
      m.isQuoteLoad ||
      i.isInXcx() ||
      (c
        ? (function () {
            try {
              requireMiniProgram()
                .main2Plugin()
                .tradeToPreloadQuote({
                  dealerCode: o.brokerConfig.base.code,
                  payload: { isConditionEntry: u.value },
                }),
                (m.isQuoteLoad = !0);
            } catch (e) {
              n.aegisReporter.reportEvent("ASSET-PRELOAD-QUOTE-PLUGIN-ERROR", {
                ext3: e,
              });
            }
          })()
        : "h5-weixin" === s &&
          (function () {
            var e = "";
            try {
              var i = document.createElement("iframe");
              (m.$iframe = i),
                (i.style.visibility = "hidden"),
                (i.style.display = "none");
              var o = r.tenpayDomain();
              (e = "https://"
                .concat(o)
                .concat(t.getStaticPath(!0))
                .replace("index.html", "prefetch.quote.html")),
                (i.onload = function () {
                  m.isQuoteLoad = !0;
                }),
                (i.onerror = function (r) {
                  n.aegisReporter.reportEvent(
                    "ASSET-PRELOAD-QUOTE-H5-IFRAME-ERROR",
                    { ext3: r, ext4: e }
                  );
                }),
                (i.src = e),
                document.body.appendChild(i);
            } catch (r) {
              n.aegisReporter.reportEvent("ASSET-PRELOAD-QUOTE-H5-ERROR", {
                ext3: r,
                ext4: e,
              });
            }
          })());
  }
  return (
    e.onBeforeUnmount(function () {
      var e, r;
      E(),
        m.$iframe &&
          (null ==
            (r =
              null == (e = null == document ? void 0 : document.body)
                ? void 0
                : e.removeChild) || r.call(e, m.$iframe),
          (m.$iframe = null));
    }),
    {
      canRenderDelayAssetInfo: f,
      scheduleDelayRenderOnce: function () {
        if (!p) {
          if (((p = !0), c))
            return (
              E(),
              void (v = setTimeout(function () {
                (f.value = !0), R(), E();
              }, 2e3))
            );
          (f.value = !0),
            R(),
            (function () {
              try {
                if (
                  !["h5-weixin", "zxg"].includes(s) ||
                  !d.value ||
                  m.isTradeLoad ||
                  i.isInXcx()
                )
                  return;
                var e = ((null == window
                  ? void 0
                  : window.__tradePreloadLinks) || {})["pages-trade-embedded"];
                e &&
                  (e.forEach(function (e) {
                    var r = document.createElement("link");
                    (r.href = "".concat(__dynamic_base__, "/").concat(e)),
                      (r.rel = "preload"),
                      (r.as = e.match(/\.(css)$/) ? "style" : "script"),
                      document.head.appendChild(r);
                  }),
                  (m.isTradeLoad = !0));
              } catch (e) {
                n.aegisReporter.reportEvent("ASSET-PRELOAD-TRADE-H5-ERROR", {
                  ext3: e,
                });
              }
            })();
        }
      },
    }
  );
};
