var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  n = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  c = function (t, c) {
    for (var u in c || (c = {})) n.call(c, u) && a(t, u, c[u]);
    if (r) {
      var i,
        l = e(r(c));
      try {
        for (l.s(); !(i = l.n()).done; ) {
          u = i.value;
          o.call(c, u) && a(t, u, c[u]);
        }
      } catch (e) {
        l.e(e);
      } finally {
        l.f();
      }
    }
    return t;
  },
  u = require("../../../../../../common/vendor.js"),
  i = require("../../../stock-hq-data/index.js"),
  l = require("../../utils/common.js"),
  s = u.defineComponent({
    name: "EtfRollingBar",
    props: {
      topic: { type: Object, required: !0 },
      scene: { type: String, default: "list" },
    },
    setup: function (e) {
      var t = u.ref(0),
        r = u.computed(function () {
          return Array.isArray(e.topic.etf) ? e.topic.etf : [];
        }),
        n = u.computed(function () {
          return r.value.length > 1;
        }),
        o = null;
      function a() {
        o && (clearInterval(o), (o = null));
      }
      u.watch(
        function () {
          return n.value;
        },
        function () {
          a(),
            n.value &&
              (o = setInterval(function () {
                var e = r.value.length;
                t.value = (t.value + 1) % e;
              }, 8e3));
        },
        { immediate: !0 }
      ),
        u.watch(
          function () {
            return r.value.length;
          },
          function (e) {
            t.value >= e && (t.value = 0);
          }
        ),
        u.onBeforeUnmount(a);
      var s = u.computed(function () {
          return r.value[t.value] || null;
        }),
        m = u.computed(function () {
          var e,
            t = null == (e = s.value) ? void 0 : e.price_ratio,
            r = Number(t);
          return Number.isNaN(r)
            ? ""
            : "".concat(r > 0 ? "+" : "").concat(r.toFixed(2), "%");
        }),
        p = u.computed(function () {
          var e = s.value;
          return l.setZdpClass(e && e.price_ratio);
        });
      return {
        etfs: r,
        currentIndex: t,
        currentItem: s,
        currentRatioText: m,
        currentRatioClass: p,
        isCarousel: n,
        handleClick: function (t) {
          var r = t && t.symbol ? String(t.symbol) : "";
          if (r) {
            var n = "search" === e.scene,
              o = {
                busi: "hq",
                eventName: n
                  ? "hot_topic_search_etf_click"
                  : "hotspot_card_related_etf_tag_click",
              };
            n &&
              (o.params = {
                code: (e.topic && e.topic.symbol) || "",
                name: (e.topic && e.topic.name) || "",
                stock_code: r,
                stock_name: t.name || "",
                from: "hot_topic_search",
              }),
              u.StockBridge.mtaReport(o);
            var a = i.utils.splitSymbol(r) || {},
              l = a.market,
              s = a.scode;
            l &&
              s &&
              u.StockRouter.routeTo({
                name: "stockdetail",
                query: c(
                  { market: l, scode: s },
                  "mpweapp" === u.ShellTypeEnum.SHY ? { lite: "1" } : {}
                ),
              });
          }
        },
      };
    },
  }),
  m = u._export_sfc(s, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return u.e(
          { a: e.etfs.length > 0 },
          e.etfs.length > 0
            ? u.e(
                { b: e.currentItem },
                e.currentItem
                  ? {
                      c: u.t(e.currentItem.name),
                      d: u.t(e.currentRatioText),
                      e: u.n(e.currentRatioClass),
                      f: e.currentIndex,
                      g: u.n({ "roll-row--anim": e.isCarousel }),
                      h: u.o(function (t) {
                        return e.handleClick(e.currentItem);
                      }, 3512),
                    }
                  : {},
                { i: u.n({ "etf-rolling-bar--carousel": e.isCarousel }) }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-6956d25e"],
  ]);
wx.createComponent(m);
