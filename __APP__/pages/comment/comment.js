var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../common/vendor.js"),
  n = getApp().globalData,
  a = {
    components: {
      zxgWebview: function () {
        return "../../components/webView.js";
      },
      ThirteenAnniversaryTask: function () {
        return "../searchAi/@tencent/st-act-ai-activity-plugins/task/index.js".then(
          function (t) {
            return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC1haS1hY3Rpdml0eS1wbHVnaW5zL3Rhc2svaW5kZXgudnVl;
          }
        );
      },
    },
    data: function () {
      return {
        url: "",
        time: 0,
        resUrl: "",
        subjectId: "",
        skin: e.wx$1.getStorageSync("user/skin") || "white",
        shareInfo: {},
      };
    },
    onLoad: function (t) {
      getApp().globalData.Event.on("newSubject", this, this.newSubject);
      var e = t.name,
        a = t.symbol,
        o = t.market,
        i = t.topicId,
        r = t.topicid,
        s = t.topic,
        c = t.hasTask,
        l = t.tid,
        u = t.used_flag,
        h = t.invite_code;
      i = null != i ? i : r;
      var d = this;
      n.setSkin(function (t) {
        d.skin = "black" === t ? "black" : "white";
      });
      var p = "https://wzq.tenpay.com/mp/v2/index.html#/comment/comment";
      a
        ? (this.url =
            p +
            "?from=miniapp&symbol="
              .concat(a, "&market=")
              .concat(o)
              .concat(
                e ? "&name=".concat(encodeURIComponent(e)) : "",
                "&passive_task_activated="
              )
              .concat(c, "&"))
        : i &&
          (this.url =
            p +
            "?from=miniapp&topicId="
              .concat(i, "&topic=")
              .concat(s, "&passive_task_activated=")
              .concat(c, "&")),
        l &&
          (this.url = ""
            .concat(this.url, "tid=")
            .concat(l, "&used_flag=")
            .concat(u, "&invite_code=")
            .concat(h, "&"));
      var m = this.getLatestQuotePage() || {};
      m.scode &&
        m.market &&
        (this.url = ""
          .concat(this.url, "latestScode=")
          .concat(m.scode, "&latestMarket=")
          .concat(m.market, "&"));
    },
    onShow: function () {
      this.isShow = !0;
      var t = this;
      n.setSkin(function (e) {
        t.skin = "black" === e ? "black" : "white";
      }),
        (this.time += 1),
        (this.resUrl = ""
          .concat(this.url, "time=")
          .concat(this.time)
          .concat(this.subjectId ? "&subject=".concat(this.subjectId) : ""));
    },
    onHide: function () {
      this.subjectId = "";
    },
    onUnload: function () {
      getApp().globalData.Event.remove("newSubject", this),
        "agree" !== getApp().globalData.protocolStatus &&
          e.StockBridge.store.getProtocolStatus();
    },
    onShareAppMessage: function () {
      return (
        (e = this),
        null,
        (n = t().mark(function e() {
          var n;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      !this.resUrl ||
                      !this.shareInfo.link ||
                      "act" !== this.shareInfo.share_source
                    ) {
                      t.next = 3;
                      break;
                    }
                    return (
                      (n = /^pages\//.test(this.shareInfo.link)
                        ? this.shareInfo.link
                        : "pages/act/webview/main?url=".concat(
                            encodeURIComponent(this.shareInfo.link)
                          )),
                      t.abrupt("return", {
                        title: this.shareInfo.title,
                        path: n,
                        imageUrl: this.shareInfo.imgUrl,
                      })
                    );
                  case 3:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })),
        new Promise(function (t, a) {
          var o = function (t) {
              try {
                r(n.next(t));
              } catch (t) {
                a(t);
              }
            },
            i = function (t) {
              try {
                r(n.throw(t));
              } catch (t) {
                a(t);
              }
            },
            r = function (e) {
              return e.done ? t(e.value) : Promise.resolve(e.value).then(o, i);
            };
          r((n = n.apply(e, null)).next());
        })
      );
      var e, n;
    },
    methods: {
      handleMessage: function (t) {
        var e = t.detail.data,
          n = void 0 === e ? [] : e;
        n && n.length && (this.shareInfo = n[n.length - 1] || {});
      },
      newSubject: function (t) {
        this.subjectId = t.comment_id;
      },
      getLatestQuotePage: function () {
        var t = getCurrentPages() || [];
        if (!(t.length < 2)) {
          var e = t[t.length - 2] || {};
          if ("pages/quote/quote" !== (null == e ? void 0 : e.route))
            return null;
          var n = (null == e ? void 0 : e.options) || {},
            a = (null == n ? void 0 : n.scode) || "",
            o = (null == n ? void 0 : n.market) || "";
          return !a || a.length <= 0 || !o || o.length <= 0
            ? null
            : { scode: a, market: o };
        }
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("zxg-webview") +
    e.resolveComponent("ThirteenAnniversaryTask")
  )();
var o = e._export_sfc(a, [
  [
    "render",
    function (t, n, a, o, i, r) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.o(r.handleMessage, 339),
        d: e.p({ src: i.resUrl }),
        e: e.p({ mode: "guide" }),
        f: e.n("black" == i.skin ? "skin-black" : "skin-white"),
      };
    },
  ],
]);
(a.__runtimeHooks = 2), wx.createPage(o);
