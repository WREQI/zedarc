var t = require("../utils/mapi.js"),
  e = require("../../../../../common/vendor.js"),
  n = {
    props: ["wxurl", "title", "titleText", "showBrand", "shareDesc", "version"],
    data: function () {
      return { installed: !1, isWx: !0, show: !0, buttonText: "打开" };
    },
    watch: {},
    beforeCreate: function () {},
    created: function () {
      this.isWx || this.init();
    },
    mouted: function () {},
    methods: {
      onButtonClick: function (t) {
        this.installed ? this.openApp(t) : this.install(),
          shy.reportAnalytics({
            eventName: "news.live-share.download_tap",
            dataObject: {},
          });
      },
      init: function () {
        var e = this;
        e.checkInstall(),
          e.title &&
            t.mapiExports.share({
              title: e.title,
              desc: e.shareDesc || "",
              img: "https://wzq.tenpay.com/resources/images/zxg_logo.png",
            });
      },
      checkInstall: function () {
        var e = this;
        t.mapiExports.check(function (t) {
          t && (e.installed = !0);
        });
      },
      install: function () {
        var e = this;
        t.mapiExports.install(function (t) {
          t && ((e.buttonText = "安装完毕"), e.checkInstall()),
            (e.buttonText = "下载中");
        });
      },
      setLocationHref: function (t) {
        location && (location.href = t);
      },
      openApp: function (e) {
        var n = this,
          o = null == navigator ? void 0 : navigator.userAgent,
          i = o.indexOf("Android") > -1 || o.indexOf("Adr") > -1,
          s = e || n.wxurl,
          c = i ? encodeURIComponent(s) : s,
          r = n.version ? n.version : "8.0.0";
        if (
          ((s =
            "qqstock://stockhybrid/com.tencent.shy.update_proxy/index?jumpUrl="
              .concat(c, "&version=")
              .concat(r)),
          location && "gu.qq.com" !== location.hostname)
        ) {
          var a = location.href.match(/[?&]fchannel_id_fm=([^&#]+)/),
            l = a ? a[1] : "";
          this.setLocationHref(
            "https://gu.qq.com/resource/jump/m.htm?immediate=0&number="
              .concat(l, "&url=")
              .concat(encodeURIComponent(s))
          );
        } else
          i
            ? t.mapiExports.check(function (t, e) {
                t &&
                  (n.relateNews ||
                  ("number" == typeof t && t < 246) ||
                  ("string" == typeof t &&
                    (t[0] < 5 ||
                      (5 == t[0] && t[1] < 3) ||
                      (5 == t[0] && 3 == t[1] && t[2] < 5)))
                    ? n.setLocationHref("tencentstockapp282://")
                    : e(s));
              }, s)
            : t.mapiExports.check(function (t, e) {
                t && e();
              }, s);
      },
    },
  },
  o = e._export_sfc(n, [
    [
      "render",
      function (t, n, o, i, s, c) {
        return e.e(
          { a: s.show && !s.isWx },
          s.show && !s.isWx
            ? e.e({ b: o.showBrand }, (o.showBrand, {}), {
                c: e.t(o.titleText || "做更好的财经信息平台"),
                d: e.t(s.buttonText || "打开"),
                e: e.o(function (t) {
                  return c.onButtonClick();
                }, 4604),
              })
            : {}
        );
      },
    ],
  ]);
wx.createComponent(o);
