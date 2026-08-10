var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (r, u) {
      var c = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            u(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            u(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(c, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  n = require("./service/index.js"),
  r = require("../../../stock-community-base/utils/commentFilter.js"),
  u = require("../../../stock-news-core/utils/loginHelper.js");
exports.updateCommentList = function () {
  for (var c = arguments.length, s = new Array(c), a = 0; a < c; a++)
    s[a] = arguments[a];
  return t(exports, [].concat(s), function () {
    var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e().mark(function a() {
      var i, o;
      return e().wrap(
        function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if (((a.prev = 0), s.id === c)) {
                  a.next = 3;
                  break;
                }
                return a.abrupt("return", !1);
              case 3:
                return (
                  (i = u.getLoginParamsObject()),
                  (a.next = 6),
                  (function (u) {
                    return t(exports, [u], function (t) {
                      var u = t.itemId,
                        c = t.newsCommentId,
                        s = t.userinfo;
                      return e().mark(function t() {
                        var a, i, o, m, l;
                        return e().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    n.getCommentDetail({
                                      subjectId: u,
                                      newsCommentId: c,
                                    })
                                  );
                                case 3:
                                  return (
                                    (a = e.sent),
                                    (e.next = 6),
                                    r.CommentFilter(a.data, !1, !1, s)
                                  );
                                case 6:
                                  return (
                                    (i = e.sent.commentsData[0]),
                                    (e.next = 9),
                                    n.commentListPlatContent({
                                      subjectId: u,
                                      first: !0,
                                      begin: "",
                                    })
                                  );
                                case 9:
                                  return (
                                    (o = e.sent),
                                    (e.next = 12),
                                    r.CommentFilter(o.data)
                                  );
                                case 12:
                                  return (
                                    (m = e.sent.commentsData),
                                    (l = Object.assign({}, i)),
                                    e.abrupt(
                                      "return",
                                      (l.commentsTail ||
                                        (l.commentsTail = { cnt: "0" }),
                                      (l.commentsTail.cnt = m.length),
                                      (l.commentsTail.list = m.filter(function (
                                        e
                                      ) {
                                        return (
                                          -1 === [1, 2].indexOf(e.check_label)
                                        );
                                      })),
                                      l)
                                    )
                                  );
                                case 17:
                                  return (
                                    (e.prev = 17),
                                    (e.t0 = e.catch(0)),
                                    e.abrupt("return", null)
                                  );
                                case 20:
                                case "end":
                                  return e.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 17]]
                        );
                      })();
                    });
                  })({ itemId: c, newsCommentId: "", userinfo: i })
                );
              case 6:
                return (
                  (o = a.sent),
                  a.abrupt(
                    "return",
                    !!o &&
                      (Object.assign(s, {
                        retweet_count: o.retweet_count || "",
                        like_num: o.like_num || "",
                        like_id: o.like_id || "",
                        commentsTail: o.commentsTail || [],
                      }),
                      !0)
                  )
                );
              case 10:
                return (
                  (a.prev = 10), (a.t0 = a.catch(0)), a.abrupt("return", !1)
                );
              case 13:
              case "end":
                return a.stop();
            }
        },
        a,
        null,
        [[0, 10]]
      );
    })();
  });
};
