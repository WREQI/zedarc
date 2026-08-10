var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  c = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, r) {
    for (var n in r || (r = {})) a.call(r, n) && c(e, n, r[n]);
    if (o) {
      var s,
        u = t(o(r));
      try {
        for (u.s(); !(s = u.n()).done; ) {
          n = s.value;
          i.call(r, n) && c(e, n, r[n]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  l = function (e, t, r) {
    return new Promise(function (n, s) {
      var o = function (e) {
          try {
            i(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          try {
            i(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        i = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, a);
        };
      i((r = r.apply(e, t)).next());
    });
  },
  h = require("../../../../common/vendor.js"),
  d = require("../stock-news-core/utils/request/index.js"),
  p = require("../stock-news-sdk/index.js"),
  f = require("../stock-news-base/service/news/gray.js"),
  g = require("../stock-news-base/service/news/apis/queryMultiStockNewsList.js");
function w(e) {
  var t = new Date(),
    r = t.getTime() - e,
    n = new Date(e);
  return r < 6e4 && r > 0
    ? "刚刚"
    : r < 36e5 && r > 0
    ? "".concat(Math.floor(r / 6e4), "分钟前")
    : r < 72e5 && r > 0
    ? "1小时前"
    : new Date(e).toDateString() === t.toDateString()
    ? new Date(e).toTimeString().substr(0, 5)
    : ""
        .concat(
          n.getMonth() + 1 < 10
            ? "0".concat(n.getMonth() + 1)
            : n.getMonth() + 1,
          "月"
        )
        .concat(n.getDate(), "日");
}
var m = {
  components: {
    RefreshWrapper: function () {
      return "./component/RefreshWrapper.js";
    },
    ChooseListView: function () {
      return "./component/ChooseListView.js";
    },
  },
  data: function () {
    return { hasMore: 0, chooseList: [], dataReady: !1, nextPageCursor: "" };
  },
  inject: { zxgApi: { default: null } },
  created: function () {
    (this.params = { type: 2, page: 1, n: 20 }),
      this.loadNewsList(!0),
      p.sdk.setNavigationBarTitle({ title: "自选新闻" });
  },
  methods: {
    mpOnShow: function () {
      var e;
      null == (e = this.$refs.chooseListView) || e.mpOnShow();
    },
    mpOnHide: function () {
      var e;
      null == (e = this.$refs.chooseListView) || e.mpOnHide();
    },
    loadNewsList: function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return l(
        this,
        null,
        e().mark(function r() {
          var o, a, i, c, l, w, m, v;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((e.prev = 0),
                      p.sdk.loadingBar("show"),
                      (i = t ? 1 : this.params.page + 1),
                      (l = this.groupId) && 0 !== l.length)
                    ) {
                      e.next = 12;
                      break;
                    }
                    return (
                      (e.next = 7),
                      null == (o = this.zxgApi)
                        ? void 0
                        : o.getChooseGroupList()
                    );
                  case 7:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 10;
                      break;
                    }
                    e.t0 = {};
                  case 10:
                    (w = e.t0.groupInfos) &&
                      w.length &&
                      ((l = w[0].id),
                      w &&
                        (w = w.filter(function (e) {
                          return 1 == +e.type && "全部" === e.name;
                        })),
                      w.length > 0 && (l = w[0].id)),
                      (this.groupId = l);
                  case 12:
                    return (
                      t && (this.nextPageCursor = ""),
                      (e.next = 15),
                      f.isNewsGrayUser("queryMultiStockNewsList")
                    );
                  case 15:
                    if (!e.sent) {
                      e.next = 24;
                      break;
                    }
                    return (
                      (e.next = 18),
                      g.queryMultiStockNewsList({
                        type: 2,
                        limit: this.params.n,
                        last_page_cursor: t ? "" : this.nextPageCursor,
                        group_id: String(l || 1),
                        scene: "group",
                      })
                    );
                  case 18:
                    if ((m = e.sent) && 0 === m.code) {
                      e.next = 21;
                      break;
                    }
                    return e.abrupt("return");
                  case 21:
                    (c = m), (e.next = 28);
                    break;
                  case 24:
                    return (
                      (e.next = 26),
                      (function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = {};
                        h.wx$1 &&
                          (t = {
                            app: "wzq",
                            check: 11,
                            appid: "wx9cf8c670ebd68ce4",
                            openId: h.wx$1.getStorageSync("_qluin"),
                            fsKey: h.wx$1.getStorageSync("_qlskey"),
                          });
                        var r = u(u({}, t), e);
                        return d.request(
                          "https://proxy.finance.qq.com/cgi/cgi-bin/news/info/search",
                          r,
                          { method: "get" }
                        );
                      })(
                        ((a = u({}, this.params)),
                        n(a, s({ page: i, grpId: l || 1 })))
                      )
                    );
                  case 26:
                    (v = e.sent), (c = g.adaptQueryMultiStockNewsListResp(v));
                  case 28:
                    this.processNewsData(c, t),
                      (this.params.page = i),
                      (this.nextPageCursor =
                        (null == c ? void 0 : c.next_page_cursor) || ""),
                      (e.next = 33);
                    break;
                  case 31:
                    (e.prev = 31), (e.t1 = e.catch(0));
                  case 33:
                    return (
                      (e.prev = 33),
                      p.sdk.loadingBar("hide"),
                      (this.dataReady = !0),
                      this.$emit("dataReady", this.chooseList),
                      e.finish(33)
                    );
                  case 36:
                  case "end":
                    return e.stop();
                }
            },
            r,
            this,
            [[0, 31, 33, 36]]
          );
        })
      );
    },
    processNewsData: function (e, t) {
      var r,
        n,
        s = this.getReadRecord(),
        o = null != (r = null == e ? void 0 : e.news_list) ? r : [],
        a = (null != (n = null == e ? void 0 : e.stock_infos) ? n : []).reduce(
          function (e, t) {
            return (e[t.stock_code] = t), e;
          },
          {}
        ),
        i = o.map(function (e) {
          var t,
            r,
            n,
            o,
            i,
            c = null != (t = e.news_id) ? t : "",
            u = {
              id: c,
              type: e.news_type,
              title: e.title,
              source: e.src,
              time: e.time
                ? w(new Date(e.time.replace(/-/g, "/")).getTime())
                : "",
              stock: {},
              read: s.indexOf(c) >= 0,
              importance: e.importance,
            };
          if (e.symbols && e.symbols.length > 0) {
            var l = null != (r = e.symbols[0]) ? r : "";
            u.stock = {
              symbol: l,
              name:
                null != (o = null == (n = a[l]) ? void 0 : n.stock_name)
                  ? o
                  : "",
              logo: null == (i = a[l]) ? void 0 : i.logo,
            };
          }
          return u;
        });
      (this.chooseList = t ? i : this.chooseList.concat(i)),
        (this.hasMore = +e.has_next);
    },
    getReadRecord: function () {
      var e = p.sdk.getStorageSync("information_read_record") || "[]";
      return JSON.parse(e);
    },
    readRecordChange: function (e) {
      var t = e.id || e.news_id;
      if (t) {
        var r = this.getReadRecord();
        r.indexOf(t) < 0 && r.push(t),
          r.length > 500 && (r = r.slice(-500)),
          p.sdk.setStorageSync("information_read_record", JSON.stringify(r));
      }
    },
    onRefresh: function () {
      return l(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), this.loadNewsList(!0);
                  case 2:
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
    onEndReached: function () {
      return l(
        this,
        null,
        e().mark(function t() {
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = this.hasMore), !e.t0)) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 4), this.loadNewsList();
                  case 4:
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
    handleDataReport: function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      this.$emit("dataReport", { eventName: e, dataObject: t });
    },
  },
};
Array ||
  (
    h.resolveComponent("choose-list-view") +
    h.resolveComponent("refresh-wrapper")
  )();
var v = h._export_sfc(m, [
  [
    "render",
    function (e, t, r, n, s, o) {
      return {
        a: h.sr("chooseListView", "4983acbb-1,4983acbb-0"),
        b: h.o(o.handleDataReport, 945),
        c: h.p({
          chooseList: s.chooseList,
          dataReady: s.dataReady,
          hasMore: s.hasMore,
        }),
        d: h.p({
          onRefresh: o.onRefresh,
          onEndReached: o.onEndReached,
          disableLoadMore: !s.hasMore,
        }),
      };
    },
  ],
]);
wx.createComponent(v);
