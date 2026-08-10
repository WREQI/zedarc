var e = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  a = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var i in t || (t = {})) c.call(t, i) && s(e, i, t[i]);
    if (o) {
      var a,
        r = n(o(t));
      try {
        for (r.s(); !(a = r.n()).done; ) {
          i = a.value;
          p.call(t, i) && s(e, i, t[i]);
        }
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }
    return e;
  },
  u = require("../../../../../../common/vendor.js"),
  l = require("../../../stock-news-core/utils/knife.js"),
  f = require("../../../stock-news-sdk/index.js"),
  y = require("../../../stock-news-core/utils/force2https.js"),
  m = function (e, t, n, i) {
    f.sdk.navigateToNewsDetail(d({ instance: e, id: t, title: n }, i));
  },
  v = function (e, t, n) {
    f.sdk.navigateToVideoDetail(d({ instance: e, id: t }, n));
  },
  w = new Map([
    [
      { type: 0, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 1, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 2, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 3, specalType: 0 },
      function (e, t, n) {
        m(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 1, specalType: 2 },
      function (e, t, n) {
        !(function (e, t, n) {
          f.sdk.navigateToMorningReport(d({ instance: e, id: t }, n));
        })(e, t.id || t.news_id, n);
      },
    ],
    [
      { type: 4, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n, i) {
          f.sdk.navigateToNewsSubject(d({ instance: e, id: t, title: n }, i));
        })(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 4, specalType: 1 },
      function (e, t) {
        !(function (e, t) {
          f.sdk.navigateToLiveCalendar({ instance: e, date: t });
        })(e, t.date);
      },
    ],
    [
      { type: 7, specalType: 0 },
      function (e, t, n) {
        v(e, t.id || t.news_id, n);
      },
    ],
    [
      { type: 8, specalType: 0 },
      function (e, t, n) {
        v(e, t.id || t.news_id, n);
      },
    ],
    [{ type: 9, specalType: 0 }, function (e, t, n) {}],
    [{ type: 9, specalType: 0 }, function (e, t, n) {}],
    [{ type: 13, specalType: 0 }, function (e, t, n) {}],
    [
      { type: 14, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n) {
          f.sdk.navigateToLiveDetail(d({ instance: e, id: t }, n));
        })(e, t.id || t.news_id, n);
      },
    ],
    [{ type: 19, specalType: 0 }, function (e, t, n) {}],
    [{ type: 21, specalType: 0 }, function (e, t, n) {}],
    [{ type: 26, specalType: 0 }, function (e, t, n) {}],
    [
      { type: 27, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n, i) {
          f.sdk.navigateToAIFinancialReport(
            d({ instance: e, id: t, title: n }, i)
          );
        })(e, t.id || t.news_id, t.title, n);
      },
    ],
  ]),
  T = u.defineComponent({
    components: {},
    props: {
      data: { type: Object, default: null },
      reportPrefix: { type: String, default: "jichu.ai_search" },
      index: { type: Number, default: 0 },
      theme: { required: !0, type: String },
    },
    setup: function (n) {
      var i = u.getCurrentInstance().proxy || u.getCurrentInstance();
      return {
        formatTime: function (e) {
          return (
            l.timeFormat(
              null == e ? void 0 : e.publish_time,
              l.timeFormatType.exact
            ) || ""
          );
        },
        thumbImg: function (e) {
          return y.forceHttpsAdvanced((null == e ? void 0 : e.image) || "");
        },
        gotoNewsDetail: function (o) {
          var c = o.news_id,
            p = o.news_type,
            s = void 0 === p ? 0 : p,
            l = o.special_type,
            f = void 0 === l ? 0 : l,
            y = o.wx_tag;
          if (c) {
            var m,
              v = ((m = d({}, o || {})), a(m, r({ id: c || "" })));
            u.StockBridge.report(
              "".concat(n.reportPrefix, ".ai_news_item_click"),
              v
            );
            var T = {};
            y && (T.wx_tag = y),
              u.StockBridge.ENV === u.EnvTypeEnum.WZQ
                ? u.StockBridge.openExtraWebview(
                    "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
                      encodeURIComponent(c)
                    )
                  )
                : u.StockBridge.ENV === u.EnvTypeEnum.WZQ_LITE
                ? u.StockBridge.openExtraWebview(
                    "https://wzq.tenpay.com/mp/lite/index.html#/information/detail?id=".concat(
                      encodeURIComponent(c)
                    )
                  )
                : (function (n, i, a, r) {
                    var o = this;
                    t(w)
                      .filter(function (t) {
                        var a = e(t, 1)[0];
                        return a.type === n && a.specalType === i;
                      })
                      .forEach(function (t) {
                        var n = e(t, 2);
                        n[0];
                        return n[1].call(o, a.instance, a.params, r);
                      });
                  })(s, f, { instance: i, params: v }, T);
          }
        },
      };
    },
  }),
  g = u._export_sfc(T, [
    [
      "render",
      function (e, t, n, i, a, r) {
        return u.e(
          { a: e.data },
          e.data
            ? u.e(
                {
                  b: u.t(e.data.news_title),
                  c: u.t(e.data.media_name),
                  d: u.t(e.formatTime(e.data)),
                  e: e.data.image,
                },
                e.data.image ? { f: e.thumbImg(e.data) } : {},
                {
                  g: u.n("skin-".concat(e.theme)),
                  h: u.o(function (t) {
                    return e.gotoNewsDetail(e.data);
                  }, 5894),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-83de1c4b"],
  ]);
wx.createComponent(g);
