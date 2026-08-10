var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  r = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  l = Object.prototype.propertyIsEnumerable,
  o = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  s = function (e, n) {
    for (var r in n || (n = {})) a.call(n, r) && o(e, r, n[r]);
    if (u) {
      var i,
        s = t(u(n));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          r = i.value;
          l.call(n, r) && o(e, r, n[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  c = function (e, t) {
    return r(e, i(t));
  },
  p = function (e, t, n) {
    return new Promise(function (r, i) {
      var u = function (e) {
          try {
            l(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        a = function (e) {
          try {
            l(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        l = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(u, a);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../../../../common/vendor.js"),
  d = require("../utils/api.js"),
  f = require("../../../stock-news-base/service/news/gray.js"),
  v = require("../../../stock-news-core/utils/knife.js"),
  _ = {
    name: "PublicAccountViews",
    components: {
      PublicAccountViewsPopup: function () {
        return "./PublicAccountViewsPopup.js";
      },
    },
    props: {
      propsObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
      avatars: {
        type: Array,
        default: function () {
          return [];
        },
      },
      viewList: {
        type: Array,
        default: function () {
          return [
            {
              quote:
                '"我们必须认识到，AI和算力革命是未来十年科技领域最大的确定性趋势。"',
              avatar:
                "https://st.gtimg.com/design/12624bc8ba63f6956b62afc8f407d846.png",
              accountName: "宏泽资本",
              articleTitle: "AI与算力深度回调后的再思考：短期...",
              time: "20分钟前",
            },
            {
              quote:
                '"可以基本确认的是，围绕AI模型与算力供给的结构性变革，将在未来十年持续重塑全球科技版图。"',
              avatar:
                "https://st.gtimg.com/design/12624bc8ba63f6956b62afc8f407d846.png",
              accountName: "金融科普官",
              articleTitle: "从AI与算力回调看机会：短期视角",
              time: "1小时前",
            },
            {
              quote:
                '"我们有理由相信，AI技术突破与算力体系扩张，将构成未来十年科技发展最核心、确定的主线。"',
              avatar:
                "https://st.gtimg.com/design/12624bc8ba63f6956b62afc8f407d846.png",
              accountName: "智投财经",
              articleTitle: "AI与算力周期调整后的冷静观察：短期",
              time: "1小时前",
            },
          ];
        },
      },
      gzh_info: {
        type: Array,
        default: function () {
          return [];
        },
      },
      noMarginTB: { type: Boolean, default: !1 },
    },
    setup: function (n, r) {
      var i = this,
        u = r.emit,
        a = "https://st.gtimg.com/design/38494e53f7ae39b0ed991f0663b345af.png",
        l = m.inject("hqBridge", null),
        o = m.ref(!1),
        _ = m.ref([]),
        b = m.ref([]);
      m.watch(o, function (e) {});
      var g = m.computed(function () {
          return n.propsObj && n.propsObj.gzh_info
            ? n.propsObj.gzh_info.length
            : 0;
        }),
        y = function (e, t) {
          return (
            e.find(function (e) {
              return e.news_id === t;
            }) || {}
          );
        };
      return (
        m.onMounted(function () {
          return p(
            i,
            null,
            e().mark(function r() {
              var i, o, m, g, h, w;
              return e().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (!n.propsObj || !n.propsObj.gzh_info) {
                          r.next = 24;
                          break;
                        }
                        return (
                          (i = n.propsObj.gzh_info
                            .map(function (e) {
                              return e.article_id;
                            })
                            .join(",")),
                          (r.prev = 2),
                          (r.next = 5),
                          f.isNewsGrayUser("queryNewsSummaryList")
                        );
                      case 5:
                        if (!r.sent) {
                          r.next = 11;
                          break;
                        }
                        return (
                          (r.next = 8),
                          (function (t) {
                            return p(
                              this,
                              null,
                              e().mark(function n() {
                                return e().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return e.abrupt(
                                          "return",
                                          f.newsRequest(
                                            "/zxg/news/news_detail/query_news_summary_list",
                                            t
                                          )
                                        );
                                      case 1:
                                      case "end":
                                        return e.stop();
                                    }
                                }, n);
                              })
                            );
                          })({ news_ids: i })
                        );
                      case 8:
                        (o = r.sent), (r.next = 16);
                        break;
                      case 11:
                        return (
                          (r.t0 = function (e) {
                            var t, n, r;
                            if (!e) return e;
                            var i = null != (t = e.retcode) ? t : e.code,
                              u = "0" === String(i) || 0 === i,
                              a = Array.isArray(e.news_summary_list)
                                ? e.news_summary_list
                                : [],
                              l = s({}, e),
                              o = a.map(function (e) {
                                var t,
                                  n,
                                  r,
                                  i,
                                  u,
                                  a,
                                  l,
                                  o,
                                  p,
                                  m,
                                  d,
                                  f,
                                  v,
                                  _,
                                  b,
                                  g,
                                  y,
                                  h;
                                return c(s({}, e), {
                                  news_id: String(
                                    null !=
                                      (n =
                                        null !=
                                        (t = null == e ? void 0 : e.news_id)
                                          ? t
                                          : null == e
                                          ? void 0
                                          : e.id)
                                      ? n
                                      : ""
                                  ),
                                  title: String(
                                    null !=
                                      (i =
                                        null !=
                                        (r = null == e ? void 0 : e.title)
                                          ? r
                                          : null == e
                                          ? void 0
                                          : e.news_title)
                                      ? i
                                      : ""
                                  ),
                                  type: Number(
                                    null !=
                                      (a =
                                        null !=
                                        (u = null == e ? void 0 : e.type)
                                          ? u
                                          : null == e
                                          ? void 0
                                          : e.news_type)
                                      ? a
                                      : 0
                                  ),
                                  cont_type: Number(
                                    null !=
                                      (l = null == e ? void 0 : e.cont_type)
                                      ? l
                                      : 0
                                  ),
                                  summary: String(
                                    null != (o = null == e ? void 0 : e.summary)
                                      ? o
                                      : ""
                                  ),
                                  publish_time: Number(
                                    null !=
                                      (p = null == e ? void 0 : e.publish_time)
                                      ? p
                                      : 0
                                  ),
                                  thumb_image: String(
                                    null !=
                                      (m = null == e ? void 0 : e.thumb_image)
                                      ? m
                                      : ""
                                  ),
                                  media_name: String(
                                    null !=
                                      (f =
                                        null !=
                                        (d = null == e ? void 0 : e.media_name)
                                          ? d
                                          : null == e
                                          ? void 0
                                          : e.source)
                                      ? f
                                      : ""
                                  ),
                                  media_id: Number(
                                    null !=
                                      (v = null == e ? void 0 : e.media_id)
                                      ? v
                                      : 0
                                  ),
                                  media_avatar: String(
                                    null !=
                                      (_ = null == e ? void 0 : e.media_avatar)
                                      ? _
                                      : ""
                                  ),
                                  special_type: Number(
                                    null !=
                                      (b = null == e ? void 0 : e.special_type)
                                      ? b
                                      : 0
                                  ),
                                  articletype: String(
                                    null !=
                                      (g = null == e ? void 0 : e.articletype)
                                      ? g
                                      : ""
                                  ),
                                  charge_type: Number(
                                    null !=
                                      (y = null == e ? void 0 : e.charge_type)
                                      ? y
                                      : 0
                                  ),
                                  cont_images: Array.isArray(
                                    null == e ? void 0 : e.cont_images
                                  )
                                    ? e.cont_images
                                    : (null == e ? void 0 : e.hq_image_list)
                                    ? String(e.hq_image_list)
                                        .split(",")
                                        .filter(Boolean)
                                    : [],
                                  status: Number(
                                    null != (h = null == e ? void 0 : e.status)
                                      ? h
                                      : 0
                                  ),
                                });
                              });
                            return c(s({}, l), {
                              code: u ? 0 : Number(null != i ? i : -1),
                              msg: String(
                                null != (r = null != (n = e.msg) ? n : e.retmsg)
                                  ? r
                                  : ""
                              ),
                              news_summary_list: o,
                            });
                          }),
                          (r.next = 14),
                          d.getSnpGwNewsSummaryList(l, i)
                        );
                      case 14:
                        (r.t1 = r.sent), (o = (0, r.t0)(r.t1));
                      case 16:
                        if (
                          0 === o.code &&
                          o.news_summary_list &&
                          o.news_summary_list.length > 0
                        ) {
                          m = t(n.propsObj.gzh_info);
                          try {
                            for (m.s(); !(g = m.n()).done; )
                              (h = g.value),
                                (w = y(o.news_summary_list, h.article_id)),
                                _.value.push({
                                  quote: h.core_chunk,
                                  accountName: h.name,
                                  avatar:
                                    (null == w ? void 0 : w.media_avatar) || a,
                                  articleTitle:
                                    (null == w ? void 0 : w.title) || "",
                                  time: (null == w ? void 0 : w.publish_time)
                                    ? v.timeFormat(
                                        w.publish_time,
                                        v.timeFormatType.relative
                                      )
                                    : "",
                                  publish_time:
                                    (null == w ? void 0 : w.publish_time) || 0,
                                  article_id: h.article_id,
                                }),
                                b.value.push(
                                  (null == w ? void 0 : w.media_avatar) || a
                                );
                          } catch (e) {
                            m.e(e);
                          } finally {
                            m.f();
                          }
                          _.value.sort(function (e, t) {
                            return t.publish_time - e.publish_time;
                          }),
                            (b.value = b.value.slice(0, 3));
                        }
                        r.next = 21;
                        break;
                      case 19:
                        (r.prev = 19), (r.t2 = r.catch(2));
                      case 21:
                        return (r.prev = 21), u("dataReady"), r.finish(21);
                      case 24:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                null,
                [[2, 19, 21, 24]]
              );
            })
          );
        }),
        m.watch(
          function () {
            return n.gzh_info;
          },
          function (e) {},
          { deep: !0, immediate: !0 }
        ),
        {
          showPopup: o,
          displayAvatars: b,
          gzhCount: g,
          popupList: _,
          handleClick: function () {
            (o.value = !0),
              m.StockBridge.busEmit("open-public-account-popup", {
                viewList: _.value,
                viewCount: g.value,
              });
          },
        }
      );
    },
  };
Array || m.resolveComponent("PublicAccountViewsPopup")();
var b = m._export_sfc(_, [
  [
    "render",
    function (e, t, n, r, i, u) {
      return m.e(
        {
          a: m.f(r.displayAvatars, function (e, t, n) {
            return { a: e, b: t, c: t > 0 ? "-12px" : "0" };
          }),
          b: m.t(r.gzhCount),
        },
        {},
        {
          e: m.n(n.noMarginTB ? "noMarginTB" : ""),
          f: m.o(function () {
            return r.handleClick && r.handleClick.apply(r, arguments);
          }, 5898),
        }
      );
    },
  ],
  ["__scopeId", "data-v-188967cb"],
]);
wx.createComponent(b);
