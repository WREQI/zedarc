var e = require("../../../../../common/vendor.js"),
  t = {
    props: {
      streamInfo: {
        type: Array,
        default: function () {
          return [{ name: "中文" }, { name: "英文" }];
        },
      },
      live: {
        type: Object,
        default: function () {
          return {};
        },
      },
      selectedSourceIndex: { type: Number, default: 0 },
      isLightMode: { type: Boolean, default: !1 },
      reportPrefix: { type: String, default: "news.live" },
    },
    setup: function (t, r) {
      var i,
        n,
        o = r.emit;
      return (
        t.reportPrefix &&
          e.StockBridge.report(
            "".concat(t.reportPrefix, ".detail_multi_source_brow"),
            {
              newsid:
                null != (n = null == (i = t.live) ? void 0 : i.live_news_id)
                  ? n
                  : "",
            }
          ),
        {
          changeSource: function (r) {
            var i, n, l;
            if (
              Array.isArray(null == (i = t.live) ? void 0 : i.stream_info) &&
              r >= 0 &&
              r < t.live.stream_info.length
            ) {
              if (!(t.live.stream_info[r] || {}).name) return;
              t.reportPrefix &&
                e.StockBridge.report(
                  "".concat(t.reportPrefix, ".detail_multi_source_click"),
                  {
                    source: r,
                    newsid:
                      null !=
                      (l = null == (n = t.live) ? void 0 : n.live_news_id)
                        ? l
                        : "",
                  }
                ),
                o("changeSource", r);
            }
          },
        }
      );
    },
  },
  r = e._export_sfc(t, [
    [
      "render",
      function (t, r, i, n, o, l) {
        return e.e(
          {
            a:
              i.live &&
              i.live.live_status > 20 &&
              i.live.stream_type &&
              1 === i.live.stream_type &&
              i.live.stream_info &&
              i.live.stream_info.length > 1,
          },
          i.live &&
            i.live.live_status > 20 &&
            i.live.stream_type &&
            1 === i.live.stream_type &&
            i.live.stream_info &&
            i.live.stream_info.length > 1
            ? {
                b: e.f(i.live.stream_info, function (t, r, o) {
                  return {
                    a: e.t(t.name),
                    b: "".concat(t.name, "-index$"),
                    c: e.n(i.selectedSourceIndex === r ? "selected" : ""),
                    d: e.o(
                      function (e) {
                        return n.changeSource(r);
                      },
                      4614,
                      "".concat(t.name, "-index$")
                    ),
                  };
                }),
                c: e.n(i.isLightMode ? "light" : ""),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-f4f1d4ef"],
  ]);
wx.createComponent(r);
