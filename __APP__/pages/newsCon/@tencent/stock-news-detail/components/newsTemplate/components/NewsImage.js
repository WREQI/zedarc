require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../../../../../common/vendor.js"),
  i = require("../../../../stock-base/visibilityObserver/index.js"),
  t = require("../../../../stock-news-core/utils/tools.js"),
  a = require("../../../../stock-news-core/utils/report.js"),
  l = require("../../../../stock-news-core/utils/shy/index.js"),
  r = require("../../../../stock-news-core/utils/apiMapping.js"),
  o = n.defineComponent({
    name: "NewsImage",
    components: {
      BaseImage: function () {
        return "./BaseImage.js";
      },
    },
    props: {
      theme: { type: String, default: "blue" },
      item: { type: Object, required: !0 },
      newsId: { type: String, default: "" },
      isMP: { type: Boolean, default: !1 },
      isWZQ: { type: Boolean, default: !1 },
      isAPP: { type: Boolean, default: !1 },
      accountOpenFlag: { type: Boolean, default: !1 },
      isFullTeach: { type: Boolean, default: !1 },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            $toast: function () {},
          };
        },
      },
      imageFailList: {
        type: Object,
        default: function () {
          return {};
        },
      },
      premoteMixin: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    inject: {
      stockBridge: { value: "stockBridge", default: {} },
      tradeFunc: {
        type: Object,
        default: function () {
          return {};
        },
      },
      mainPathReporter: { default: null },
    },
    emits: ["loadImage", "loadImageError", "addObserver"],
    setup: function (o, c) {
      var d = c.emit,
        s = n.getCurrentInstance(),
        u = (null == s ? void 0 : s.proxy) || s,
        m = n.ref(!1),
        p = n.ref(null),
        f = n.ref(null),
        v = n.ref(null),
        g = n.computed(function () {
          var e = o.item.url;
          if (o.isMP) return t.formatImage(e);
          if (o.newsId && e)
            try {
              var n = e.replace(/^(http|https):/, document.location.protocol);
              return new URL(n).search
                ? "".concat(n, "&newsId=").concat(o.newsId)
                : "".concat(n, "?newsId=").concat(o.newsId);
            } catch (n) {
              return e;
            }
          return e;
        }),
        h = n.computed(function () {
          var e, n, i;
          return (
            null !=
              (i =
                null == (n = o.imageFailList)
                  ? void 0
                  : n[null == (e = o.item) ? void 0 : e.url]) && i
          );
        }),
        w = n.computed(function () {
          var e = o.item.width;
          if (null == e) return null;
          var n = Number(e);
          return Number.isNaN(n) || n <= 0 ? null : n;
        }),
        k = function (e) {
          return e && e.includes("/mp/v2/index.html#/apply/index");
        },
        I = n.computed(function () {
          var e =
            "qqstock://shy?info=%7B%22p_key%22%3A%22com.tencent.shy.level2%22%2C%22p_url%22%3A%22index%3Fmarket%3Dhs%26stat_data%3DIy200p000k026%22%7D" ===
            o.item.link;
          return (
            e &&
              n.nextTick$1(function () {
                b();
              }),
            e
          );
        }),
        L = n.computed(function () {
          var e,
            i = o.item.link,
            t =
              i &&
              k(i) &&
              o.accountOpenFlag &&
              !(null == (e = o.premoteMixin)
                ? void 0
                : e.information_detail_apply_bar_pos);
          return (
            t &&
              n.nextTick$1(function () {
                _();
              }),
            t
          );
        }),
        y = n.computed(function () {
          var e = o.item.link,
            i = e && !k(e);
          return (
            i &&
              n.nextTick$1(function () {
                x();
              }),
            i
          );
        }),
        _ = function () {
          p.value ||
            (p.value = new i.VisibilityObserver(
              ".news-image-openaccount",
              {
                callback: function (e) {
                  return A(e);
                },
                once: !0,
                intersection: { threshold: 0.5 },
              },
              u
            ));
        },
        b = function () {
          f.value ||
            (f.value = new i.VisibilityObserver(
              ".news-image-lv2",
              {
                callback: function (e) {
                  return P(e);
                },
                once: !0,
                intersection: { threshold: 0.5 },
              },
              u
            ));
        },
        x = function () {
          v.value ||
            (v.value = new i.VisibilityObserver(
              ".news-image-link",
              {
                callback: function (e) {
                  return F(e);
                },
                once: !0,
                intersection: { threshold: 0.5 },
              },
              u
            ));
        },
        A = function (e) {
          if (e) {
            var n =
              (o.isFullTeach ? "fullteach" : "news_article") +
              "_image_link_visited";
            a.report("news.newsdetail.".concat(n), { newsid: o.newsId });
          }
        },
        P = function (e) {
          if (e && o.isAPP) {
            a.report("news.newsdetail.lv2_image_link_visited", {
              newsid: o.newsId,
            });
          }
        },
        F = function (e) {
          if (e) {
            var n =
              (o.isFullTeach ? "fullteach" : "news_article") +
              "_image_non_apply_link_visited";
            a.report("news.newsdetail.".concat(n), { newsid: o.newsId });
          }
        };
      return (
        n.onBeforeUnmount(function () {
          var e, n, i, t, a, l, r, o, c;
          null ==
            (i =
              null == (n = null == (e = p.value) ? void 0 : e.observer)
                ? void 0
                : n.disconnect) || i.call(n),
            (p.value = null),
            null ==
              (l =
                null == (a = null == (t = f.value) ? void 0 : t.observer)
                  ? void 0
                  : a.disconnect) || l.call(a),
            (f.value = null),
            null ==
              (c =
                null == (o = null == (r = v.value) ? void 0 : r.observer)
                  ? void 0
                  : o.disconnect) || c.call(o),
            (v.value = null);
        }),
        {
          localImageFailed: m,
          linkIconUrl:
            "https://st.gtimg.com/design/7df3aa7b31343cf59234eecd007eada9.5x.png",
          formattedImageUrl: g,
          imageLoadFailed: h,
          itemWidth: w,
          showLv2ImageLink: I,
          showOpenAccountImageLink: L,
          showImageLink: y,
          handleLoadImage: function (e) {
            (m.value = !1), d("loadImage", e, o.item);
          },
          handleLoadImageError: function (e) {
            (m.value = !0), d("loadImageError", e, o.item);
          },
          handleImageClick: function (e) {
            var i;
            e.stopPropagation();
            var t = (null != (i = o.item) ? i : {}).url;
            t &&
              (o.isWZQ || o.isMP) &&
              void 0 !== n.wx$1 &&
              n.wx$1.previewImage &&
              n.wx$1.previewImage({ current: t, urls: [t] });
          },
          handleLv2LinkClick: function () {
            var e,
              n = (null != (e = o.item) ? e : {}).link;
            n &&
              o.isAPP &&
              (a.report("news.newsdetail.lv2_image_link_click", {}),
              l.shy.navigateTo({ url: n }));
          },
          handleOpenAccountClick: function () {
            var i,
              t = (null != (i = o.item) ? i : {}).link;
            if (t) {
              var c = t,
                d =
                  (o.isFullTeach ? "fullteach" : "news_article") +
                  "_image_link_click";
              if ((k(c), (c = r.apiManager.getRealApiUrl(c)), o.isWZQ)) {
                o.wzqConfig.stat.click(
                  "news.detail.".concat(d),
                  void 0,
                  void 0,
                  { newsid: o.newsId }
                );
                try {
                  var s = c.split("#")[1].split("?"),
                    u = e(s, 2),
                    m = u[0],
                    p = u[1];
                  if (m) {
                    var f = {};
                    p.split("&").forEach(function (n) {
                      var i = n.split("="),
                        t = e(i, 2),
                        a = t[0],
                        l = t[1];
                      f[a] = l;
                    }),
                      o.wzqConfig.Helper.navigateTo(m, f);
                  }
                } catch (e) {
                  location.href = c;
                }
              } else if (o.isMP) {
                var v = "Ivx48p007s015";
                a.report("news.detail.".concat(d), {
                  newsid: o.newsId,
                  fchannel_id_fm_i: v,
                });
                var g = o.tradeFunc;
                if (g && g.navToApplyIndex)
                  return void g.navToApplyIndex({ stat: v });
                void 0 !== n.wx$1 &&
                  n.wx$1.switchTab &&
                  n.wx$1.switchTab({ url: "/pages/index/trade" });
              } else l.shy.navigateTo({ url: c });
            }
          },
          handleImageLinkClick: function () {
            var e,
              i = (null != (e = o.item) ? e : {}).link;
            if (i)
              if (
                (function (e) {
                  return (
                    e &&
                    e.includes(
                      "https://www.p5w.net/special/202503/tzjj/vote_item.html"
                    )
                  );
                })(i)
              ) {
                t.envUtil.copyToPasteboard(
                  i,
                  "已复制投票链接，在浏览器内粘贴链接，即可开始投票！",
                  n.StockBridge
                );
              } else {
                var a =
                  (o.isFullTeach ? "fullteach" : "news_article") +
                  "_image_non_apply_link_click";
                o.isWZQ &&
                  (o.wzqConfig.stat.click(
                    "news.detail.".concat(a),
                    void 0,
                    void 0,
                    { newsid: o.newsId }
                  ),
                  (location.href = r.apiManager.getRealApiUrl(i)));
              }
          },
        }
      );
    },
  });
Array || n.resolveComponent("BaseImage")();
var c = n._export_sfc(o, [
  [
    "render",
    function (e, i, t, a, l, r) {
      return n.e(
        { a: e.showLv2ImageLink && !e.imageLoadFailed },
        e.showLv2ImageLink && !e.imageLoadFailed
          ? n.e(
              { b: e.item.link && e.isAPP },
              e.item.link && e.isAPP
                ? {
                    c: n.o(e.handleLoadImage, 5456),
                    d: n.o(e.handleLoadImageError, 5457),
                    e: n.p({
                      src: e.formattedImageUrl,
                      width: e.itemWidth,
                      "border-radius": !0,
                    }),
                  }
                : {},
              { f: e.item.link && e.isAPP && e.item.desc },
              e.item.link && e.isAPP && e.item.desc ? { g: e.linkIconUrl } : {},
              { h: e.item.link && e.isAPP && e.item.desc },
              e.item.link && e.isAPP && e.item.desc ? { i: e.item.desc } : {},
              {
                j: n.o(function () {
                  return (
                    e.handleLv2LinkClick &&
                    e.handleLv2LinkClick.apply(e, arguments)
                  );
                }, 5458),
              }
            )
          : e.showOpenAccountImageLink && !e.imageLoadFailed
          ? n.e(
              {
                l: n.o(e.handleLoadImage, 5459),
                m: n.o(e.handleLoadImageError, 5460),
                n: n.p({
                  src: e.formattedImageUrl,
                  width: e.itemWidth,
                  "border-radius": !0,
                }),
                o: e.item.desc,
              },
              e.item.desc ? { p: e.linkIconUrl } : {},
              { q: e.item.desc },
              e.item.desc ? { r: e.item.desc } : {},
              {
                s: n.o(function () {
                  return (
                    e.handleOpenAccountClick &&
                    e.handleOpenAccountClick.apply(e, arguments)
                  );
                }, 5461),
              }
            )
          : e.showImageLink && !e.imageLoadFailed
          ? n.e(
              {
                v: n.o(e.handleLoadImage, 5462),
                w: n.o(e.handleLoadImageError, 5463),
                x: n.p({ src: e.formattedImageUrl, width: e.itemWidth }),
                y: e.linkIconUrl,
                z: e.item.desc,
              },
              e.item.desc ? { A: e.item.desc } : {},
              {
                B: n.o(function () {
                  return (
                    e.handleImageLinkClick &&
                    e.handleImageLinkClick.apply(e, arguments)
                  );
                }, 5464),
              }
            )
          : e.item.link || e.imageLoadFailed
          ? {}
          : n.e(
              {
                D: n.o(e.handleLoadImage, 5465),
                E: n.o(e.handleLoadImageError, 5466),
                F: n.p({
                  "border-radius": !0,
                  src: e.formattedImageUrl,
                  width: e.itemWidth,
                  preview: !0,
                }),
                G: e.item.desc,
              },
              e.item.desc ? { H: e.item.desc } : {},
              {
                I: n.o(function () {
                  return (
                    e.handleImageClick && e.handleImageClick.apply(e, arguments)
                  );
                }, 5467),
              }
            ),
        {
          k: e.showOpenAccountImageLink && !e.imageLoadFailed,
          t: e.showImageLink && !e.imageLoadFailed,
          C: !e.item.link && !e.imageLoadFailed,
          J: !e.localImageFailed,
          K: n.n(e.theme),
        }
      );
    },
  ],
  ["__scopeId", "data-v-57837672"],
]);
wx.createComponent(c);
