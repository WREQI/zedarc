var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, t) {
    return new Promise(function (n, o) {
      var a = function (e) {
          try {
            s(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            s(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(a, i);
        };
      s((t = t.apply(e, r)).next());
    });
  },
  t = require("../../common/vendor.js"),
  n = {
    components: {
      Index: function () {
        return "./@tencent/stock-search-ai/pages/Index.js";
      },
    },
    provide: function () {
      return { hqBridge: new t.HQBridge(this) };
    },
    data: function () {
      return {
        query: null,
        isLoaded: !1,
        shareItem: null,
        skin: t.wx$1.getStorageSync("user/skin") || "white",
      };
    },
    onLoad: function (n) {
      return r(
        this,
        null,
        e().mark(function r() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    "officialaccount" === n.searchfrom &&
                      this.reportPushExplore(n),
                      (this.query = n),
                      (this.isLoaded = !0),
                      t.StockBridge.setStorage("lite/search-ai-new-user", {
                        isNewUser: !1,
                        time: Date.now(),
                      });
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            r,
            this
          );
        })
      );
    },
    onShareAppMessage: function () {
      return r(
        this,
        null,
        e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", {
                    title: "投资问元宝，分析更专业",
                    path: "/pages/searchAi/main?searchfrom=sharewechat",
                    imageUrl:
                      "https://st.gtimg.com/design/5619536bbc41e2aee0485f2f9bc3aa1c.png",
                  });
                case 1:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      );
    },
    methods: {
      reportPushExplore: function (e) {
        try {
          var r = (e || {}).traceId,
            n = {
              action: "openFromOffiaccount",
              channel: "17",
              trace_id: void 0 === r ? "" : r,
            };
          t.StockBridge.request(
            "https://wzq.tenpay.com/wzq/svr/openapi/aics/ai_helper_report",
            "POST",
            n,
            { dataType: "json", header: { "Content-Type": "application/json" } }
          );
        } catch (e) {}
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("Index")
  )();
var o = t._export_sfc(n, [
  [
    "render",
    function (e, r, n, o, a, i) {
      return t.e(
        { a: e.rootFontSize, b: t.p({ "no-auto": !0 }), c: a.isLoaded },
        a.isLoaded ? { d: t.p({ query: a.query, theme: a.skin }) } : {},
        { e: a.skin }
      );
    },
  ],
  ["__scopeId", "data-v-bab72700"],
]);
(n.__runtimeHooks = 2), wx.createPage(o);
