require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  c = function (t, r) {
    for (var n in r || (r = {})) i.call(r, n) && u(t, n, r[n]);
    if (o) {
      var c,
        s = e(o(r));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          n = c.value;
          a.call(r, n) && u(t, n, r[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return t;
  },
  s = function (e, t) {
    return r(e, n(t));
  },
  l = require("../../../../../../common/vendor.js"),
  m = require("../../utils/visibleObserver.js"),
  d = require("../../node-modules/@tencent/stock-news-router/index.js"),
  f = {
    components: {
      fastNewsItemFooter: function () {
        return "./fast-newsitem-footer.js";
      },
    },
    props: {
      reportPrefix: { type: String, default: "" },
      reportParams: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemIndex: { type: Number, default: 0 },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      timeStr: { type: String, default: "" },
      abtConfig: { type: Object, default: null },
      sourceFrom: { type: String, default: "" },
    },
    setup: function (e) {
      var t = l.getCurrentInstance().proxy || l.getCurrentInstance(),
        r = l.inject("stockBridge"),
        n = l.computed(function () {
          return e.itemIndex < 3 && e.itemIndex >= 0;
        }),
        o = l.computed(function () {
          var t;
          return (null == (t = e.itemData) ? void 0 : t.title) || "";
        }),
        i = l.computed(function () {
          var t;
          return (null == (t = e.itemData) ? void 0 : t.summary) || "";
        }),
        a = l.computed(function () {
          return 0 === e.itemIndex
            ? "first"
            : 1 === e.itemIndex
            ? "second"
            : 2 === e.itemIndex
            ? "third"
            : "";
        }),
        u = l.computed(function () {
          var t,
            r,
            n,
            o = s(c({}, e.reportParams), {
              newsid: e.itemData.news_id || e.itemData.id,
              positionid: e.itemIndex,
            });
          if (e.abtConfig)
            try {
              var i =
                  ((null == (t = e.abtConfig) ? void 0 : t.data) &&
                    (null == (n = null == (r = e.abtConfig) ? void 0 : r.data)
                      ? void 0
                      : n[0])) ||
                  {},
                a = i.report_info;
              i.Version && a && (o = s(c({}, o), { report_info: a }));
            } catch (e) {}
          return o;
        }),
        f = null;
      l.onUnmounted(function () {
        null == f || f.destroyObserver(), (f = null);
      }),
        l.onMounted(function () {
          f = m.visibleObserver(
            "#fast-news-item-".concat(e.itemData.news_id || e.itemData.id),
            t,
            function (t, n) {
              t && r.report("".concat(e.reportPrefix, ".item_brow"), u.value);
            }
          );
        });
      var p = l.ref(null);
      l.watch(
        function () {
          return e.abtConfig;
        },
        function (e, t) {
          var r;
          if (e)
            try {
              var n = (
                ((null == e ? void 0 : e.data) &&
                  (null == (r = null == e ? void 0 : e.data)
                    ? void 0
                    : r[0])) ||
                {}
              ).Version;
              n && ["separate", "joint"].includes(n) && (p.value = n);
            } catch (e) {}
        },
        { immediate: !0, deep: !0 }
      );
      var v = l.computed(function () {
        var t = i.value || "";
        return (
          o.value && (t = "【".concat(o.value, "】").concat(i.value)),
          (function (e, t, r) {
            try {
              var n = document.createElement("canvas").getContext("2d");
              n.font = "400 32px sans-serif";
              for (var o = e.split(""), i = [], a = "", u = 0; u < o.length; ) {
                var c = o[u],
                  s = 0 === i.length && r ? 622 : 654;
                n.measureText(a).width + n.measureText(c).width < s
                  ? (a += c)
                  : (i.push(a), (a = c)),
                  (u += 1);
              }
              if ((i.push(a), i.length > 4)) {
                for (
                  var l = n.measureText("...").width,
                    m = i[3],
                    d = "",
                    f = 0,
                    p = 0;
                  p < m.length;
                  p++
                ) {
                  var v = m[p],
                    b = n.measureText(v).width;
                  if (!(f + b + l < 654)) {
                    d += "...";
                    break;
                  }
                  (d += v), (f += b);
                }
                i.splice(3, 1, d);
              }
              return i.slice(0, 4);
            } catch (e) {}
          })(t, 0, e.itemIndex <= 2)
        );
      });
      return {
        canShowIndex: n,
        title: o,
        summary: i,
        indexColor: a,
        gotoNewsDetail: function () {
          r.report("".concat(e.reportPrefix, ".item_click"), u.value);
          var n = e.itemData,
            o = n.news_type,
            i = n.special_type,
            a = e.sourceFrom ? { sourceFrom: e.sourceFrom } : {};
          d.router(o, i, { instance: t, params: e.itemData }, a);
        },
        getCommonParams: u,
        abtVersion: p,
        jointTitle: v,
      };
    },
  };
Array || l.resolveComponent("fastNewsItemFooter")();
var p = l._export_sfc(f, [
  [
    "render",
    function (e, t, r, n, o, i) {
      return l.e(
        { a: n.jointTitle },
        n.jointTitle
          ? {
              b: l.f(n.jointTitle, function (e, t, o) {
                return l.e(
                  { a: n.canShowIndex && 0 === t },
                  n.canShowIndex && 0 === t
                    ? { b: l.t(r.itemIndex + 1), c: l.n(n.indexColor) }
                    : {},
                  { d: l.t(e), e: t }
                );
              }),
            }
          : {},
        {
          c: l.n(n.abtVersion && "joint" === n.abtVersion ? "joint" : ""),
          d: l.p({
            "report-prefix": r.reportPrefix,
            "report-params": n.getCommonParams,
            "item-data": r.itemData,
            "time-str": r.timeStr,
          }),
          e: "fast-news-item-".concat(r.itemData.news_id || r.itemData.id),
          f: l.o(function () {
            return n.gotoNewsDetail && n.gotoNewsDetail.apply(n, arguments);
          }, 3290),
        }
      );
    },
  ],
  ["__scopeId", "data-v-7696a62b"],
]);
wx.createComponent(p);
