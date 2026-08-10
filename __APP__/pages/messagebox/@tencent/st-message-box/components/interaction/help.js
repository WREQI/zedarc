var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  i = function (e, r) {
    for (var n in r || (r = {})) u.call(r, n) && a(e, n, r[n]);
    if (o) {
      var s,
        i = t(o(r));
      try {
        for (i.s(); !(s = i.n()).done; ) {
          n = s.value;
          c.call(r, n) && a(e, n, r[n]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  p = function (e, t, r) {
    return new Promise(function (n, s) {
      var o = function (e) {
          try {
            c(r.next(e));
          } catch (e) {
            s(e);
          }
        },
        u = function (e) {
          try {
            c(r.throw(e));
          } catch (e) {
            s(e);
          }
        },
        c = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, u);
        };
      c((r = r.apply(e, t)).next());
    });
  },
  l = require("../../../../../../common/vendor.js"),
  f = require("../../../stock-news-core/utils/request/index.js"),
  g = require("../../../stock-news-core/utils/tools.js"),
  m = {
    COMMENT: "forum_comment",
    LIKE: "forum_like",
    FOLLOW: "forum_followuser",
    AT: "forum_at",
    HOTISSUESHARE: "hotissue_share",
  };
function x() {
  return h(!0);
}
function h() {
  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return l.wx$1
    ? {
        appid: "wx9cf8c670ebd68ce4",
        openid: l.wx$1.getStorageSync("_qluin"),
        fskey: l.wx$1.getStorageSync("_qlskey"),
        access_token: l.wx$1.getStorageSync("_qlskey"),
        qluin: l.wx$1.getStorageSync("_qluin"),
        qlskey: l.wx$1.getStorageSync("_qlskey"),
        qlappid: "wx9cf8c670ebd68ce4",
        check: e ? 12 : 11,
        app: "wzqxcx",
      }
    : {};
}
function v(t) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
  return p(
    this,
    null,
    e().mark(function s() {
      var o;
      return e().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (o = i(
                  i({ sender: t, lastmessageid: r, limit: n }, x()),
                  g.md5()
                )),
                e.abrupt(
                  "return",
                  f.request(
                    "https://wzq.tenpay.com/group/newstockgroup/rssService/getMsgBox",
                    o,
                    { method: "get" }
                  )
                )
              );
            case 2:
            case "end":
              return e.stop();
          }
      }, s);
    })
  );
}
var d = {
  COMMENT: "yy.message_box_interaction_comment",
  LIKE: "yy.message_box_interaction_like",
  FOLLOW: "yy.message_box_interaction_follow",
  AT: "yy.message_box_interaction_at",
};
(exports.IteractionItemType = m),
  (exports.PageType = d),
  (exports.getPageType = function (e) {
    switch (e) {
      case 0:
      default:
        return d.COMMENT;
      case 1:
        return d.LIKE;
      case 2:
        return d.FOLLOW;
      case 3:
        return d.AT;
    }
  }),
  (exports.requestMessageBoxListAt = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
    return p(
      this,
      null,
      e().mark(function n() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", v(m.AT, t, r));
              case 1:
              case "end":
                return e.stop();
            }
        }, n);
      })
    );
  }),
  (exports.requestMessageBoxListComment = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
    return p(
      this,
      null,
      e().mark(function n() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", v(m.COMMENT, t, r));
              case 1:
              case "end":
                return e.stop();
            }
        }, n);
      })
    );
  }),
  (exports.requestMessageBoxListFollow = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
    return p(
      this,
      null,
      e().mark(function n() {
        var s;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (s = i(i({ from: "msgbox", p: t, limit: r }, x()), g.md5())),
                  e.abrupt(
                    "return",
                    f.request(
                      "https://wzq.tenpay.com/group/newstockgroup/rssService/getStockFans",
                      s,
                      { method: "get" }
                    )
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, n);
      })
    );
  }),
  (exports.requestMessageBoxListLike = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
    return p(
      this,
      null,
      e().mark(function n() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt("return", v(m.LIKE, t, r));
              case 1:
              case "end":
                return e.stop();
            }
        }, n);
      })
    );
  }),
  (exports.requestMessageBoxListmix = function (t) {
    return p(
      this,
      null,
      e().mark(function r() {
        var o, u;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (u = i(i(i({ from: "msgbox" }, t), x()), g.md5())),
                  (o = n(u, s({ source: "zxg_xcx", REQ_VERSION: "3" }))),
                  e.abrupt(
                    "return",
                    f.request(
                      "https://wzq.tenpay.com/svr/user/user_service/user_interaction_message",
                      o,
                      { method: "get" }
                    )
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  }),
  (exports.requestMessageUnreadNum = function (t) {
    return p(
      this,
      null,
      e().mark(function r() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (n = i(i({ sender: t }, h()), g.md5())),
                  e.abrupt(
                    "return",
                    f.request(
                      "https://wzq.tenpay.com/cgi/cgi-bin/messagebox/messageBoxList",
                      n,
                      { method: "get" }
                    )
                  )
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, r);
      })
    );
  });
