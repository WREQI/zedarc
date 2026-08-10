var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  o = require("../Index.js"),
  n = require("../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  r = "https://gu.qq.com/resource/jump/m.htm?number=5002000650&immediate=0",
  i = ["ohos"],
  a = {
    components: {
      downloadActionSheet: function () {
        return "./downloadActionSheet.js";
      },
    },
    props: {
      userInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isSimpleMode: { type: Boolean, default: !0 },
    },
    setup: function () {
      var e,
        r,
        i = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        a = (
          (null == (e = t.StockBridge) ? void 0 : e.ENV) !== t.EnvTypeEnum.MP
            ? n.detect().env
            : { IS_LCT_XCX: !1 }
        ).IS_LCT_XCX,
        s = !1;
      if ((null == (r = t.StockBridge) ? void 0 : r.ENV) === t.EnvTypeEnum.MP)
        try {
          var c = t.wx$1.getLaunchOptionsSync();
          s = 1168 === (null == c ? void 0 : c.scene);
        } catch (e) {}
      var d = o.useAddObserver({
          selector: ".download-guide-wrapper",
          ctx: i,
          eventName: "base.new_profile.app_download_brow",
        }),
        l = d.addObserver,
        u = d.removeObserver;
      return (
        t.onMounted(function () {
          l();
        }),
        t.onBeforeUnmount(function () {
          u();
        }),
        { IS_LCT_XCX: a, isFromExternalApp: s }
      );
    },
    data: function () {
      return {
        showDownloadSheet: !1,
        hasDlShowReport: !1,
        visibilityObj: null,
        platform: "",
        isPc: !1,
      };
    },
    computed: {
      zhidingImageUrlPlatform: function () {
        var e, o, n, r;
        return "stock" === (null == (e = t.StockBridge) ? void 0 : e.SHELL) ||
          "mpweapp" === (null == (o = t.StockBridge) ? void 0 : o.SHELL)
          ? "https://st.gtimg.com/design/01a8316deb164158468f7da9cb306d85.png"
          : "mpwzq" === (null == (n = t.StockBridge) ? void 0 : n.SHELL) ||
            "wzqlight" === (null == (r = t.StockBridge) ? void 0 : r.SHELL)
          ? "https://st.gtimg.com/design/19c91f3e6b57702fc93f653e763947a9.png"
          : "";
      },
      showDownload: function () {
        return !(
          i.includes(this.platform) ||
          this.isPc ||
          this.IS_LCT_XCX ||
          this.isFromExternalApp
        );
      },
    },
    created: function () {
      (this.platform = t.StockBridge.getPlatform().system),
        (this.isPc = t.StockBridge.getPlatform().isPc);
    },
    methods: {
      openApp: function () {
        return (
          (o = this),
          null,
          (n = e().mark(function o() {
            var n,
              i,
              a,
              s = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (null == (n = t.StockBridge) ||
                          n.report("base.new_profile.app_download_click"),
                        (null == (i = t.StockBridge) ? void 0 : i.ENV) ===
                          t.EnvTypeEnum.MP)
                      )
                        t.wx$1.setClipboardData({
                          data: r,
                          success: function () {
                            t.wx$1.hideToast(), (s.showDownloadSheet = !0);
                          },
                          fail: function (e) {
                            t.StockBridge.toast("复制失败", "none");
                          },
                        });
                      else
                        try {
                          (a = document.createElement("textarea")),
                            document.body.appendChild(a),
                            (a.value = r),
                            a.select(),
                            document.execCommand("copy"),
                            document.body.removeChild(a),
                            (this.showDownloadSheet = !0);
                        } catch (e) {
                          t.StockBridge.toast("复制失败", "none");
                        } finally {
                          try {
                            a && a.parentNode && a.parentNode.removeChild(a);
                          } catch (e) {}
                        }
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })),
          new Promise(function (e, t) {
            var r = function (e) {
                try {
                  a(n.next(e));
                } catch (e) {
                  t(e);
                }
              },
              i = function (e) {
                try {
                  a(n.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              a = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, i);
              };
            a((n = n.apply(o, null)).next());
          })
        );
        var o, n;
      },
    },
  };
Array || t.resolveComponent("downloadActionSheet")();
var s = t._export_sfc(a, [
  [
    "render",
    function (e, o, n, r, i, a) {
      return t.e(
        {
          a:
            n.userInfo &&
            "0" == n.userInfo.subscribe &&
            a.zhidingImageUrlPlatform,
        },
        n.userInfo && "0" == n.userInfo.subscribe && a.zhidingImageUrlPlatform
          ? { b: a.zhidingImageUrlPlatform }
          : a.showDownload
          ? {
              d: n.isSimpleMode ? 1 : "",
              e: t.o(function () {
                return a.openApp && a.openApp.apply(a, arguments);
              }, 2373),
            }
          : {},
        { c: a.showDownload, f: i.showDownloadSheet },
        i.showDownloadSheet
          ? {
              g: t.o(function (e) {
                return (i.showDownloadSheet = !1);
              }, 2374),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-8bf2f7a1"],
]);
wx.createComponent(s);
