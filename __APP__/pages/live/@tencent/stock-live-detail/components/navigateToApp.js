var t = require("../utils/mapi.js"),
  n = require("../../../../../common/vendor.js"),
  e = {
    props: ["wxurl"],
    methods: {
      setLocationHref: function (t) {
        location && (location.href = t);
      },
      navigateToApp: function () {
        this.$emit("navigate");
        var n = this,
          e = null == navigator ? void 0 : navigator.userAgent,
          o = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
          i =
            "qqstock://stockhybrid/com.tencent.shy.update_tip/index?jumpUrl=".concat(
              o ? encodeURIComponent(n.wxurl) : n.wxurl,
              "&version=8.0.0"
            );
        o
          ? t.mapiExports.check(function (e, o) {
              e
                ? n.relateNews ||
                  ("number" == typeof e && e < 246) ||
                  ("string" == typeof e &&
                    (e[0] < 5 ||
                      (5 == e[0] && e[1] < 3) ||
                      (5 == e[0] && 3 == e[1] && e[2] < 5)))
                  ? n.setLocationHref("tencentstockapp282://")
                  : o(i)
                : t.mapiExports.install(function (t, n) {});
            }, i)
          : t.mapiExports.check(function (n, e) {
              n ? e() : t.mapiExports.install(function (t, n) {});
            }, i);
      },
    },
  },
  o = n._export_sfc(e, [
    [
      "render",
      function (t, e, o, i, r, a) {
        return {
          a: n.o(function () {
            return a.navigateToApp && a.navigateToApp.apply(a, arguments);
          }, 4592),
        };
      },
    ],
    ["__scopeId", "data-v-defd8fb3"],
  ]);
wx.createComponent(o);
