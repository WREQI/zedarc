var e = require("../../../../../../common/vendor.js"),
  t = require("../../../stock-news-core/utils/knife.js"),
  n = require("../../node-modules/@tencent/stock-news-router/index.js"),
  i = require("../../../stock-base/visibilityObserver/index.js"),
  o = require("../../../stock-news-core/utils/force2https.js"),
  r = e.defineComponent({
    components: {},
    props: {
      item: { type: Object, default: function () {} },
      reportPrefix: { type: String, default: "" },
      index: { type: Number, default: 0 },
      isLast: { type: Boolean, default: !1 },
    },
    setup: function (r, s) {
      s.emit;
      var c = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        l = e.inject("stockBridge"),
        u = null,
        a = !1;
      return (
        e.onMounted(function () {
          var e, t;
          null ==
            (t =
              null == (e = null == u ? void 0 : u.observer)
                ? void 0
                : e.disconnect) || t.call(e),
            (u = null),
            (u = new i.VisibilityObserver(
              "#wx-newsitem-top-".concat(r.index),
              {
                once: !0,
                callback: function (e, t) {
                  if (!a && e) {
                    a = !0;
                    var n = {
                      newsid: r.item.news_id || r.item.id,
                      positionid: r.index,
                    };
                    l.report(
                      "".concat(r.reportPrefix, ".relate_news_item_brow"),
                      n
                    );
                  }
                },
                intersection: { threshold: 0 },
              },
              { context: c }
            ));
        }),
        e.onUnmounted(function () {
          var e, t;
          try {
            null ==
              (t =
                null == (e = null == u ? void 0 : u.observer)
                  ? void 0
                  : e.disconnect) || t.call(e),
              (u = null);
          } catch (e) {}
        }),
        {
          formatTime: function (e) {
            return (
              t.timeFormat(
                null == e ? void 0 : e.publish_time,
                t.timeFormatType.exact
              ) || ""
            );
          },
          thumbImg: function (e) {
            return 4 === (null == e ? void 0 : e.img_display_mode) &&
              (null == e ? void 0 : e.ext_image_list)
              ? o.forceHttpsAdvanced(
                  (null == e ? void 0 : e.ext_image_list) || ""
                )
              : o.forceHttpsAdvanced((null == e ? void 0 : e.thumb_img) || "");
          },
          gotoNewsDetail: function (e, t) {
            var i = e.news_id || e.id,
              o = e.news_type,
              s = e.special_type,
              u = e.wx_tag,
              a = {};
            u && (a.wx_tag = u);
            var d = { newsid: i, positionid: t };
            n.router(o, s, { instance: c, params: e }, a),
              l.report("".concat(r.reportPrefix, ".relate_news_item_click"), d);
          },
        }
      );
    },
  }),
  s = e._export_sfc(r, [
    [
      "render",
      function (t, n, i, o, r, s) {
        return e.e(
          { a: e.t(t.item.title), b: t.item.wx_tag },
          t.item.wx_tag ? { c: e.t(t.item.wx_tag) } : {},
          {
            d: e.t(t.item.source),
            e: e.t(t.formatTime(t.item)),
            f: t.thumbImg(t.item),
            g: "wx-newsitem-top-".concat(t.index),
            h: e.n(t.isLast ? "last" : ""),
            i: e.o(function (e) {
              return t.gotoNewsDetail(t.item, t.index);
            }, 4726),
          }
        );
      },
    ],
    ["__scopeId", "data-v-263c173d"],
  ]);
wx.createComponent(s);
