require("../@babel/runtime/helpers/Arrayincludes");
var e = require("../common/vendor.js"),
  n = (e.config || e.__CJS__import__0__$2).BISTAT,
  o = void 0 === n ? {} : n,
  t = {
    sharedComponents: !0,
    props: {
      src: { type: String, default: "" },
      isMpPlugin: { type: Boolean, default: !1 },
      addParams: { type: Boolean, default: !0 },
    },
    setup: function (n, t) {
      var r = t.emit;
      e.onMounted(function () {
        var n = getCurrentPages();
        (null == n ? void 0 : n.length) > 9 &&
          e.mpReporter.log("webview_load_page_max");
      });
      var l = e.computed(function () {
        var t,
          r,
          l,
          a,
          i,
          d,
          c,
          s = n.src;
        try {
          if (!n.src) return "";
          var u =
            (null ==
            (l =
              null ==
              (r = null == (t = e.wx$1) ? void 0 : t.getEnterOptionsSync)
                ? void 0
                : r.call(t))
              ? void 0
              : l.scene) ||
            (null ==
            (d =
              null ==
              (i = null == (a = e.wx$1) ? void 0 : a.getLaunchOptionsSync)
                ? void 0
                : i.call(a))
              ? void 0
              : d.scene) ||
            "";
          if (
            ([1265, 1266].includes(+u) &&
              (null == s ? void 0 : s.startsWith("https%3")) &&
              (s = decodeURIComponent(s)),
            !n.isMpPlugin && n.addParams)
          ) {
            var p = s.split("#/");
            if (
              ((s = ""
                .concat(s)
                .concat(
                  (2 === p.length ? p[1] : p[0]).includes("?") ? "&" : "?",
                  "xcx_scene="
                )
                .concat(u)).includes("srcshell=") || (s += "&srcshell=h5"),
              s.includes("srcsite=") || (s += "&srcsite=zxgxcx_h5"),
              s.includes("wzq/aics-cloud/xiaomi/page.do"))
            ) {
              var v = e.getPlatformInfo(),
                _ = v.mpVersion,
                g = v.sdkVersion,
                f = v.phoneModel;
              s += "&mp_version="
                .concat(encodeURIComponent(_), "&sdk_version=")
                .concat(encodeURIComponent(g), "&phone_model=")
                .concat(encodeURIComponent(f));
            }
            if (!/stat=|stat_data=/.test(s)) {
              var m =
                  (null == (c = e.StockBridge.store) ? void 0 : c.channelId) ||
                  {},
                h = (null == m ? void 0 : m[o.BI_STAT_O]) || "";
              h && (s += "&stat_data=".concat(h));
            }
          }
        } catch (u) {}
        return s;
      });
      return {
        url: l,
        handleError: function (o) {
          var t, a;
          if ((r("error", o), !n.isMpPlugin))
            try {
              var i = (e.getCurrentRoute() || {}).path,
                d =
                  "pages/index/trade" === (void 0 === i ? "" : i)
                    ? "trade_page_webview_load_failed"
                    : "webview_load_failed";
              e.mpReporter.log(d, {
                ext3: JSON.stringify((null == o ? void 0 : o.detail) || {}),
              }),
                "web-view load failed due to not in domain list" ===
                  (null == (t = null == o ? void 0 : o.detail)
                    ? void 0
                    : t.errMsg) &&
                  (e.mpReporter.log("WEBVIWE_URL_NOT_IN_DOMAIN_LIST", {
                    ext3: JSON.stringify((null == o ? void 0 : o.detail) || {}),
                  }),
                  e.wx$1.redirectTo({
                    url: "/pages/forbidden/webview?url="
                      .concat(encodeURIComponent(l.value), "&errUrl=")
                      .concat(
                        encodeURIComponent(
                          (null == (a = null == o ? void 0 : o.detail)
                            ? void 0
                            : a.url) || ""
                        )
                      ),
                  }));
            } catch (e) {}
        },
        handleMessage: function (e) {
          r("message", e);
        },
        handleLoad: function (e) {
          r("load", e);
        },
      };
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (n, o, t, r, l, a) {
        return e.e(
          { a: t.src && r.url },
          t.src && r.url
            ? {
                b: r.url,
                c: e.o(function () {
                  return r.handleError && r.handleError.apply(r, arguments);
                }, 631),
                d: e.o(function () {
                  return r.handleMessage && r.handleMessage.apply(r, arguments);
                }, 632),
                e: e.o(function () {
                  return r.handleLoad && r.handleLoad.apply(r, arguments);
                }, 633),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(r);
