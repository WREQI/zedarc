var e = require("../../../../../../common/vendor.js"),
  r = require("../halfscreen-editor.js"),
  t = require("../../utils/logger.js").createLogger(),
  n = {
    props: {
      imageList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    data: function () {
      return { isLowIOS: !1 };
    },
    mounted: function () {
      e.StockBridge.ENV === e.EnvTypeEnum.MP && this.checkIOSVersion();
    },
    methods: {
      preventScroll: function () {
        return !1;
      },
      checkIOSVersion: function () {
        try {
          var r = e.wx$1.getSystemInfoSync();
          if ("ios" === r.platform) {
            var n = r.system.split(" ")[1].split(".")[0],
              i = parseInt(n, 10);
            (this.isLowIOS = i < 16),
              t.log("iOS版本检测:", i, "是否低于16:", this.isLowIOS);
          }
        } catch (e) {
          t.error("iOS版本检测失败:", e);
        }
      },
      getImageUrl: function (r) {
        return (
          t.log("获取图片 URL:", r),
          r
            ? e.StockBridge.ENV === e.EnvTypeEnum.MP && this.isLowIOS
              ? r.staticImgId || r.serverId || ""
              : r.serverId || ""
            : (t.warn("图片数据为空"), "")
        );
      },
      checkUrl: function (e) {
        var r = "string" == typeof e ? e : e.serverId || e.url || "";
        return /^(http|https):\/\/(img|img1)\.trustsql\.qq\.com\//.test(r);
      },
      getImageUrlList: function () {
        return this.imageList
          .filter(function (e) {
            return e && e.serverId;
          })
          .map(function (e) {
            return e.serverId;
          });
      },
      delPicture: function (e) {
        t.log("图片删除:", e), this.$emit("delPicture", { index: e });
      },
      onPreview: function (n) {
        var i = this.getImageUrlList();
        t.log("预览图片列表:", i),
          e.StockBridge.ENV === e.EnvTypeEnum.MP
            ? r.albumHelpMp.previewImage(this, i, n)
            : e.StockBridge.ENV === e.EnvTypeEnum.SHY_NATIVE
            ? r.albumHelpH5.previewImageSHY(this, i, n)
            : r.albumHelpH5.previewImage(this, i, n);
      },
      onBlankArea: function () {
        t.log("空白区域点击"), this.$emit("onBlankArea");
      },
    },
  },
  i = e._export_sfc(n, [
    [
      "render",
      function (r, t, n, i, o, s) {
        return {
          a: e.f(n.imageList, function (r, t, n) {
            return e.e(
              {
                a: s.getImageUrl(r),
                b: e.o(
                  function (e) {
                    return s.onPreview(t);
                  },
                  2516,
                  r.serverId || t
                ),
                c: !s.checkUrl(r),
              },
              s.checkUrl(r)
                ? {}
                : {
                    d: e.o(
                      function (e) {
                        return s.delPicture(t);
                      },
                      2517,
                      r.serverId || t
                    ),
                  },
              { e: r.serverId || t }
            );
          }),
          b: e.o(function () {
            return s.onBlankArea && s.onBlankArea.apply(s, arguments);
          }, 2518),
          c: e.o(function () {
            return s.preventScroll && s.preventScroll.apply(s, arguments);
          }, 2519),
        };
      },
    ],
    ["__scopeId", "data-v-534f60a1"],
  ]);
wx.createComponent(i);
