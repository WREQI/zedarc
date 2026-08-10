var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "AiGuDanComponent",
    props: {
      data: { type: Array, required: !0 },
      contexObj: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { processedData: [], requestId: "", sessionId: "" };
    },
    created: function () {
      var e = this,
        n = this.contexObj,
        o = n.requestId,
        i = void 0 === o ? "" : o,
        s = n.sessionId,
        a = void 0 === s ? "" : s;
      (this.requestId = i),
        (this.sessionId = a),
        this.data.map(function (t) {
          var n = e.processData(t);
          n && e.processedData.push(n);
        }),
        null != this.processedData &&
          this.processedData.length > 0 &&
          this.processedData.forEach(function (n) {
            t.StockBridge.report("base.ai_search.xuangu_gudan_brow", {
              requestid: e.requestId,
              session: e.sessionId,
              watchlist_id: null == n ? void 0 : n.gdId,
            });
          });
    },
    methods: {
      handleClick: function (e) {
        t.StockBridge.report("base.ai_search.xuangu_gudan_click", {
          requestid: this.requestId,
          session: this.sessionId,
          watchlist_id: null == e ? void 0 : e.gdId,
        }),
          t.StockRouter.routeTo({
            name: "stockBasket_detail",
            query: { gdId: e.gdId },
          });
      },
      processData: function (t) {
        var e,
          n,
          o,
          i,
          s,
          a,
          d = null == (e = null == t ? void 0 : t.info) ? void 0 : e.name;
        if (d) {
          var r = null == (n = null == t ? void 0 : t.info) ? void 0 : n.desc,
            u = null == (o = null == t ? void 0 : t.ranking) ? void 0 : o.total,
            c =
              null == (i = null == t ? void 0 : t.ranking)
                ? void 0
                : i.accChangePct1M;
          return {
            title: d,
            stockCount: u,
            dailyChange:
              null == (s = null == t ? void 0 : t.ranking)
                ? void 0
                : s.avgChangePct,
            threeMonthChange: c,
            description: r,
            gdId: null == (a = null == t ? void 0 : t.info) ? void 0 : a.id,
          };
        }
      },
      genPlus: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e = String(t);
        return e.startsWith("-") || e.startsWith("+")
          ? "".concat(e, "%")
          : "+".concat(e, "%");
      },
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (e, n, o, i, s, a) {
        return {
          a: t.f(s.processedData, function (e, n, o) {
            return {
              a: t.t(e.title),
              b: t.t(e.stockCount),
              c: t.t(a.genPlus(e.dailyChange || "")),
              d: t.n(e.dailyChange >= 0 ? "up" : "down"),
              e: t.t(a.genPlus(e.threeMonthChange || "")),
              f: t.n(e.threeMonthChange >= 0 ? "up" : "down"),
              g: t.t(e.description),
              h: t.o(
                function (t) {
                  return a.handleClick(e);
                },
                5890,
                n
              ),
              i: n,
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-f9f8cfbf"],
  ]);
wx.createComponent(n);
