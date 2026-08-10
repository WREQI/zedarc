var t = require("../../../../../../common/vendor.js"),
  e = require("../../../stock-news-router/index.js"),
  i = require("../../../stock-news-core/utils/knife.js"),
  n = require("../../api/CheckIntersectionObserver.js"),
  r = require("../../../stock-news-core/utils/force2https.js"),
  o = t.defineComponent({
    components: {},
    props: {
      reportPrefix: { type: String, default: "" },
      item: {
        type: Object,
        default: function () {
          return {};
        },
      },
      last: { type: Boolean, default: !1 },
      itemIndex: { type: Number, default: 0 },
      watchlistId: { type: String, default: "" },
    },
    setup: function (o, c) {
      c.emit;
      var u = t.getCurrentInstance().proxy || t.getCurrentInstance(),
        a = t.inject("stockBridge"),
        s = t.ref(!1),
        m = t.ref(null),
        d = function () {
          l();
          var e = t.ref(null);
          (e.value = ".part-up"),
            n.checkIntersectionObserver(
              u,
              e.value,
              function (t) {
                if (!s.value) {
                  var e = {
                    newsid: o.item.id,
                    watchlist_id: o.watchlistId,
                    positionid: o.itemIndex,
                  };
                  a.report("".concat(o.reportPrefix, ".item_brow"), e),
                    t && (s.value = !0);
                }
              },
              0
            );
        },
        l = function () {
          try {
            n.checkIntersectionObserver(u, "");
          } catch (t) {}
        };
      return (
        t.watch(
          function () {
            return o.item;
          },
          function (t, e) {
            (null == t ? void 0 : t.id) !== (null == e ? void 0 : e.id) &&
              (s.value = !1);
          },
          { deep: !0, immediate: !0 }
        ),
        t.onActivated(function () {
          t.nextTick$1(function () {
            d();
          });
        }),
        t.onDeactivated(function () {
          l();
        }),
        t.onMounted(function () {
          t.nextTick$1(function () {
            d();
          });
        }),
        t.onUnmounted(function () {
          l();
        }),
        {
          thumbImg: function (t) {
            return 4 === (null == t ? void 0 : t.img_display_mode) &&
              (null == t ? void 0 : t.ext_image_list)
              ? r.forceHttpsAdvanced(
                  (null == t ? void 0 : t.ext_image_list) || ""
                )
              : r.forceHttpsAdvanced((null == t ? void 0 : t.thumb_img) || "");
          },
          formatTime: function (t) {
            return (
              i.timeFormat(
                null == t ? void 0 : t.publish_time,
                i.timeFormatType.exact
              ) || ""
            );
          },
          gotoNewsDetail: function (t) {
            var i = t.news_type,
              n = t.special_type,
              r = t.wx_tag,
              c = t.id,
              s = {};
            r && (s.wx_tag = r);
            var m = {
              newsid: c,
              watchlist_id: o.watchlistId,
              positionid: o.itemIndex,
            };
            a.report("".concat(o.reportPrefix, ".item_click"), m),
              e.router(i, n, { instance: u, params: t }, s);
          },
          newsItemRef: m,
        }
      );
    },
  }),
  c = t._export_sfc(o, [
    [
      "render",
      function (e, i, n, r, o, c) {
        return t.e(
          { a: t.t(e.item.title), b: e.item.wx_tag },
          e.item.wx_tag ? { c: t.t(e.item.wx_tag) } : {},
          {
            d: t.t(e.item.source),
            e: t.t(e.formatTime(e.item)),
            f: e.thumbImg(e.item),
          },
          e.thumbImg(e.item) ? { g: e.thumbImg(e.item) } : {},
          {
            h: t.n(e.last && "last"),
            i: t.o(function (t) {
              return e.gotoNewsDetail(e.item);
            }, 2536),
          }
        );
      },
    ],
    ["__scopeId", "data-v-c8254de2"],
  ]);
wx.createComponent(c);
