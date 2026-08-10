var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, d) {
    return new Promise(function (n, a) {
      var c = function (e) {
          try {
            s(d.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            s(d.throw(e));
          } catch (e) {
            a(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, o);
        };
      s((d = d.apply(e, t)).next());
    });
  },
  d = require("../../../../../../../common/vendor.js");
require("../../../../../js-cookie/src/js.cookie.js");
var n = require("../../../../stock-news-core/utils/request/index.js"),
  a = {
    props: [
      "market",
      "scode",
      "symbol",
      "stockInfo",
      "type",
      "stockInitailAdded",
      "hideText",
    ],
    data: function () {
      return {
        dataReady: !1,
        added: !1,
        addFavIcon:
          "https://st.gtimg.com/design/04e5a139e6327d0500ae2d3b5279e2e5.png",
        addedFavIcon:
          "https://st.gtimg.com/design/e475d2959c4adfbadc842caacb564fdc.png",
        addedFavBlackIcon:
          "https://st.gtimg.com/design/2e6a167a70c94904c17c0dbb9a27de0c.png",
      };
    },
    watch: {
      stockInitailAdded: {
        immediate: !0,
        handler: function (e) {
          isNaN(e) || ((this.added = Boolean(e)), (this.dataReady = !0));
        },
      },
    },
    computed: {
      isPlate: function () {
        return "9" === this.type;
      },
    },
    created: function () {
      this.judgeAdded();
    },
    methods: {
      checkAppLogin: function () {
        return new Promise(function (e) {
          shy.getUserInfo(function (t) {
            e(t && "none" !== t.type);
          });
        });
      },
      judgeAdded: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      this.market, this.scode;
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      AppToggleAdded: function (e) {
        var t = this;
        this.added = !this.added;
        var d = function (e) {
          (e && "fail" !== e.status) || (t.added = !t.added);
        };
        this.added
          ? shy.addStockToGroup(e, void 0, "1", d)
          : shy.removeStockFromGroup(e, d);
      },
      toggleAdded: function (d) {
        return t(
          this,
          null,
          e().mark(function t() {
            var a, c, o, s, i, r, u, p, h, f, m, g;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = this.market + this.scode),
                        (this.added = !this.added),
                        (s = {
                          timestamp: new Date().getTime(),
                          act: d ? "sa" : "sd",
                          grpid: "1",
                          code: o,
                        }),
                        (i = this.getParams()),
                        (r = i.app),
                        (u = i.openId),
                        (p = i.fsKey),
                        (h = i.check),
                        (f =
                          "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq?app="
                            .concat(r, "&appid=wx9cf8c670ebd68ce4&openid=")
                            .concat(u, "&fskey=")
                            .concat(p, "&check=")
                            .concat(h)),
                        (m = { seq: encodeURIComponent(JSON.stringify([s])) }),
                        (g = null),
                        (e.prev = 4),
                        (e.next = 7),
                        n.request(f, m, { method: "post", isShowToast: !1 })
                      );
                    case 7:
                      (g = e.sent), (e.next = 12);
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(4));
                    case 12:
                      g && 0 !== g.code && (this.added = !this.added),
                        this.$emit(
                          "actionReport",
                          "fav_".concat(d ? "add" : "remove", "_stock_click"),
                          {
                            newsid:
                              null !=
                              (c =
                                null == (a = this.stockInfo)
                                  ? void 0
                                  : a.newsId)
                                ? c
                                : "",
                            stockid: o,
                          }
                        );
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[4, 10]]
            );
          })
        );
      },
      getParams: function () {
        var e, t, n;
        return (
          d.wx$1 &&
            ((e = "wzq"),
            (t = d.wx$1.getStorageSync("_qluin")),
            (n = d.wx$1.getStorageSync("_qlskey"))),
          { app: e, openId: t, fsKey: n, check: 11 }
        );
      },
    },
  },
  c = d._export_sfc(a, [
    [
      "render",
      function (e, t, n, a, c, o) {
        return d.e(
          { a: c.dataReady },
          c.dataReady
            ? d.e(
                { b: c.added },
                c.added
                  ? d.e(
                      {
                        c: c.addedFavIcon,
                        d: c.addedFavBlackIcon,
                        e: !n.hideText,
                      },
                      (n.hideText, {}),
                      {
                        f: d.o(function (e) {
                          return o.toggleAdded(!1);
                        }, 5613),
                      }
                    )
                  : d.e(
                      { g: c.addFavIcon, h: !n.hideText },
                      n.hideText ? {} : { i: d.t(o.isPlate ? "板块" : "自选") },
                      {
                        j: d.o(function (e) {
                          return o.toggleAdded(!0);
                        }, 5614),
                      }
                    )
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-117ead09"],
  ]);
wx.createComponent(c);
