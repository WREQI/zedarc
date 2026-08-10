var e,
  t,
  n = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  o = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable,
  f = function (e, t, n) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var n in t || (t = {})) c.call(t, n) && f(e, n, t[n]);
    if (u) {
      var r,
        a = i(u(t));
      try {
        for (a.s(); !(r = a.n()).done; ) {
          n = r.value;
          m.call(t, n) && f(e, n, t[n]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  d = function (e, t, n) {
    return new Promise(function (r, i) {
      var a = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(a, o);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  p = require("../../utils/service/index.js"),
  h = require("../../../../stock-community-base/utils/commentFilter.js"),
  v = require("../../../../stock-community-base/utils/knife.js"),
  k = require("../../utils/mixins/store.js"),
  b = require("../../../../stock-community-base/utils/constant.js"),
  g = v.sdk,
  w = g.getUserInfo,
  y = g.reportAnalytics,
  x = {},
  _ = { userinfo: {}, page: 0 };
Object.keys(_).forEach(function (e) {
  x[e] = function () {
    return _[e];
  };
});
var D = o(
  l({}, k.store),
  s({
    clearCommentsData: function () {
      this.commentsData.length = 0;
    },
    deleteItem: function (e) {
      for (var t = 0; t < this.commentsData.length; t++) {
        var n = this.commentsData[t];
        n.id && n.id === e && this.commentsData.splice(t, 1);
      }
    },
    userInit: function () {
      "{}" === JSON.stringify(_.userinfo) &&
        w().then(function (e) {
          _.userinfo = e;
        });
    },
    onPageInit: function (n) {
      return d(this, arguments, function (n) {
        var i = this,
          a = n.params,
          o = n.type,
          s = n.info,
          u = void 0 === s ? {} : s,
          c = n.scb,
          m = n.fcb;
        return r().mark(function n() {
          return r().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (
                    ((e = o),
                    (t = u),
                    (n.t0 = "{}" === JSON.stringify(_.userinfo)),
                    !n.t0)
                  ) {
                    n.next = 7;
                    break;
                  }
                  return (n.next = 6), w();
                case 6:
                  _.userinfo = n.sent;
                case 7:
                  return (
                    (_.userinfo = t), n.abrupt("return", i.getList(a, !0, c, m))
                  );
                case 9:
                case "end":
                  return n.stop();
              }
          }, n);
        })();
      });
    },
    updateTimeLine: function (e) {
      var t = this,
        r = e.comment_id,
        i = void 0 === r ? "" : r,
        a = e.like_num,
        o = void 0 === a ? "" : a,
        s = e.like_id,
        u = void 0 === s ? "" : s,
        c = n(this.commentsData);
      (this.commentsData.length = 0),
        c.forEach(function (e) {
          var n = l({}, e);
          e.id === i && ((n.like_num = o), (n.likeNum = o), (n.like_id = u)),
            t.commentsData.push(n);
        });
    },
    getList: function (t, n, i, a) {
      return d(
        this,
        null,
        r().mark(function o() {
          var s = this;
          return r().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return o.abrupt(
                    "return",
                    new Promise(function (o, u) {
                      p.getNewsCommentList(t, _.userinfo)
                        .then(function () {
                          for (
                            var e = arguments.length, t = new Array(e), a = 0;
                            a < e;
                            a++
                          )
                            t[a] = arguments[a];
                          return d(s, [].concat(t), function () {
                            var e = this,
                              t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                            return r().mark(function a() {
                              var s, u, c;
                              return r().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        (s = t.data || {}),
                                        (r.next = 3),
                                        h.CommentFilter(s, !0, !1, _.userinfo)
                                      );
                                    case 3:
                                      (u = r.sent),
                                        (c = u.commentsData) &&
                                          c.length &&
                                          (n
                                            ? (e.commentsData = c)
                                            : c.map(function (t) {
                                                e.commentsData.push(t);
                                              })),
                                        i && i(n, s),
                                        o(!0);
                                    case 6:
                                    case "end":
                                      return r.stop();
                                  }
                              }, a);
                            })();
                          });
                        })
                        .catch(function (t) {
                          n && (s.commentsData.length = 0), a && a(n);
                          var r = ""
                            .concat(b.prefix[e], "_")
                            .concat(b.modules[e], ".getdata.error");
                          y({ eventName: r }), u(t);
                        });
                    })
                  );
                case 1:
                case "end":
                  return o.stop();
              }
          }, o);
        })
      );
    },
    replaceList: function (e) {
      return d(
        this,
        null,
        r().mark(function t() {
          var n = this;
          return r().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return t.abrupt(
                    "return",
                    new Promise(function (t, i) {
                      p.getNewsCommentList(e, _.userinfo)
                        .then(function () {
                          for (
                            var e = arguments.length, i = new Array(e), a = 0;
                            a < e;
                            a++
                          )
                            i[a] = arguments[a];
                          return d(n, [].concat(i), function () {
                            var e = this,
                              n =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                            return r().mark(function i() {
                              var a, o, s;
                              return r().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        (a = n.data || {}),
                                        (r.next = 3),
                                        h.CommentFilter(a, !0, !1, _.userinfo)
                                      );
                                    case 3:
                                      (o = r.sent),
                                        (s = o.commentsData) &&
                                          s.length &&
                                          s.map(function (t) {
                                            var n = e.commentsData.findIndex(
                                              function (e, n, r) {
                                                return e.id == t.id;
                                              }
                                            );
                                            n >= 0 &&
                                              e.$set(e.commentsData, n, t);
                                          }),
                                        t(!0);
                                    case 6:
                                    case "end":
                                      return r.stop();
                                  }
                              }, i);
                            })();
                          });
                        })
                        .catch(function (e) {
                          i(e);
                        });
                    })
                  );
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    },
    onPutLike: function (n, i) {
      return d(
        this,
        null,
        r().mark(function n() {
          var a, o, s, u, c, m, f, d, h;
          return r().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (((n.t0 = "{}" === JSON.stringify(_.userinfo)), !n.t0)) {
                      n.next = 5;
                      break;
                    }
                    return (n.next = 4), w(!0);
                  case 4:
                    _.userinfo = n.sent;
                  case 5:
                    (c = this.commentsData[i]).like_id
                      ? ((c.like_id = ""), (c.like_num -= 1))
                      : ((c.like_id = c.id), (c.like_num += 1)),
                      (m = { attitude: c.like_id ? -1 : 0, publish_id: c.id }),
                      p
                        .putRssLike(
                          -1 !== ["wzq", "mini"].indexOf(v.platform)
                            ? l(
                                {
                                  nickname:
                                    null !=
                                    (o = null == t ? void 0 : t.nickname)
                                      ? o
                                      : null == (a = _.userinfo)
                                      ? void 0
                                      : a.nickname,
                                  avatar_url:
                                    null !=
                                    (u = null == t ? void 0 : t.headimgurl)
                                      ? u
                                      : null == (s = _.userinfo)
                                      ? void 0
                                      : s.headimgurl,
                                },
                                m
                              )
                            : m,
                          _.userinfo,
                          !1
                        )
                        .then(function () {})
                        .catch(function (e) {}),
                      (f = c.like_id ? "like" : "unlike"),
                      (d = ""
                        .concat(b.prefix[e], "_")
                        .concat(b.modules[e], "_duantie_dianzan_")
                        .concat(f)),
                      (h = {
                        postid: (null == c ? void 0 : c.id) || "",
                        newsid: (null == c ? void 0 : c.news_id) || "",
                      }),
                      this.$emit("commentReport", { eventName: d, data: h }),
                      y({ eventName: d, dataObject: h });
                  case 11:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this
          );
        })
      );
    },
  })
);
(exports.mutations = D), (exports.statesMap = x);
