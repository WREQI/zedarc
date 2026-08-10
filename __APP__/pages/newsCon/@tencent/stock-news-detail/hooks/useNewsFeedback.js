var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, r) {
    for (var u in r || (r = {})) o.call(r, u) && i(e, u, r[u]);
    if (n) {
      var c,
        s = t(n(r));
      try {
        for (s.s(); !(c = s.n()).done; ) {
          u = c.value;
          a.call(r, u) && i(e, u, r[u]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  c = require("../../../../../common/vendor.js"),
  s = require("../../stock-news-core/utils/request/index.js"),
  l = require("../../stock-news-core/utils/loginHelper.js"),
  d = require("../../stock-news-core/utils/tools.js"),
  v = {
    SUMMARY: { action: 1, scoreField: "summary_score" },
    AI_READING: { action: 2, scoreField: "analysis_score" },
  },
  f = "https://snp.tenpay.com/cgi/cgi-bin/snp/feedback/queryNewsRecord",
  p = "https://snp.tenpay.com/cgi/cgi-bin/snp/feedback/newsFeedback",
  m = function (e, t) {
    return c.StockBridge.ENV !== c.EnvTypeEnum.MP
      ? t
      : u(u({}, t), l.getLoginParamsMp(e));
  };
exports.useNewsFeedback = function (t, r) {
  var n = this,
    o = v[r],
    a = c.ref(-1),
    i = c.computed(function () {
      return 1 === a.value;
    }),
    l = c.computed(function () {
      return 0 === a.value;
    }),
    h = function () {
      var e;
      return null == (e = t.newsData) ? void 0 : e.id;
    },
    b = function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return (function (e) {
        var t = e.detail,
          r = m(
            p,
            u(
              {
                action: e.action,
                news_id: e.newsId,
                score: e.score,
                detail: void 0 === t ? "" : t,
              },
              d.md5WithTimestampWithPlatform()
            )
          );
        return s.request(p, r, { method: "get", isShowToast: !1 });
      })({ newsId: h(), action: o.action, score: e, detail: t });
    },
    w = function (e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      a.value = e;
      try {
        b(e, t);
      } catch (e) {}
    };
  return {
    feedBackStatus: a,
    isLiked: i,
    isDisLiked: l,
    fetchFeedBackStatus: function () {
      return (
        (t = n),
        null,
        (r = e().mark(function t() {
          var r, n;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (e.next = 3),
                      (function (e) {
                        var t = m(
                          f,
                          u({ news_id: e }, d.md5WithTimestampWithPlatform())
                        );
                        return s.request(f, t, {
                          method: "get",
                          isShowToast: !1,
                        });
                      })(h())
                    );
                  case 3:
                    (n = e.sent),
                      (a.value =
                        null == (r = null == n ? void 0 : n.data)
                          ? void 0
                          : r[o.scoreField]),
                      (e.next = 9);
                    break;
                  case 7:
                    (e.prev = 7), (e.t0 = e.catch(0));
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[0, 7]]
          );
        })),
        new Promise(function (e, n) {
          var o = function (e) {
              try {
                i(r.next(e));
              } catch (e) {
                n(e);
              }
            },
            a = function (e) {
              try {
                i(r.throw(e));
              } catch (e) {
                n(e);
              }
            },
            i = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(o, a);
            };
          i((r = r.apply(t, null)).next());
        })
      );
      var t, r;
    },
    modifyFeedBackToServerHandler: w,
    toggleLike: function () {
      1 === a.value ? (a.value = -1) : (a.value = 1), w(a.value, "");
    },
    toggleDislike: function () {
      0 === a.value ? (a.value = -1) : (a.value = 0), w(a.value, "");
    },
    setFeedBackStatus: function (e) {
      a.value = e;
    },
  };
};
