var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  a = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = function (e, t, a) {
    return new Promise(function (r, n) {
      var i = function (e) {
          try {
            o(a.next(e));
          } catch (e) {
            n(e);
          }
        },
        s = function (e) {
          try {
            o(a.throw(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, s);
        };
      o((a = a.apply(e, t)).next());
    });
  },
  n = require("../../../../../../common/vendor.js"),
  i = require("help.js"),
  s = require("../../utils/interaction-help.js"),
  o = "混合消息.解析",
  u = function (e, n) {
    return r(
      exports,
      null,
      t().mark(function r() {
        var s, u, _, h, v, y, x, I, T, b, g, k, w, D, j, M;
        return t().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  f(o, "解析前数据data:", e),
                  f(o, "登录态userInfo:", n),
                  c(e),
                  f(o, "decode后的数据结果:", e),
                  (t.next = 3),
                  l(e.comment_data_json, n)
                );
              case 3:
                return (s = t.sent), (t.next = 6), l(e.like_data_json, n);
              case 6:
                return (
                  (u = t.sent),
                  (_ = m(e.notice_data_json)),
                  (t.next = 10),
                  l(e.at_data_json, n)
                );
              case 10:
                (h = t.sent),
                  (v = e.hotissue_data),
                  (y = []),
                  (x = a(e.page_items));
                try {
                  for (x.s(); !(I = x.n()).done; )
                    (T = I.value),
                      (b = T.msg_type),
                      (g = T.msg_id),
                      "fans_notice" === b
                        ? (k = d(g, _)) &&
                          ((k.itemType = i.IteractionItemType.FOLLOW),
                          y.push(k))
                        : "forum_comment" === b
                        ? (w = p(g, s)) &&
                          ((w.itemType = i.IteractionItemType.COMMENT),
                          y.push(w))
                        : "forum_like" === b
                        ? (D = p(g, u)) &&
                          ((D.itemType = i.IteractionItemType.LIKE), y.push(D))
                        : "forum_at" === b
                        ? (j = p(g, h)) &&
                          ((j.itemType = i.IteractionItemType.AT), y.push(j))
                        : "hotissue_share" === b &&
                          (M = p(g, v)) &&
                          ((M.itemType = i.IteractionItemType.HOTISSUESHARE),
                          y.push(M));
                } catch (e) {
                  x.e(e);
                } finally {
                  x.f();
                }
                return t.abrupt("return", (f(o, "结果result:", y), y));
              case 16:
              case "end":
                return t.stop();
            }
        }, r);
      })
    );
  },
  c = function (e) {
    try {
      (e.comment_data_json = _(e.comment_data)),
        (e.like_data_json = _(e.like_data)),
        (e.notice_data_json = _(e.notice_data)),
        (e.at_data_json = _(e.at_data));
    } catch (e) {
      f(o, "parseEncodeData 异常:", e);
    }
  },
  l = function (e, a) {
    return r(
      exports,
      null,
      t().mark(function r() {
        var n, i;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (((t.prev = 0), !e || !e.data)) {
                    t.next = 7;
                    break;
                  }
                  return (
                    (t.next = 4), s.msgCommentFilterHelp(e.data, !0, !1, a)
                  );
                case 4:
                  return (
                    (n = t.sent),
                    (i = n.commentsData),
                    t.abrupt("return", (f(o, "parseData:", i), i))
                  );
                case 7:
                  t.next = 12;
                  break;
                case 9:
                  (t.prev = 9),
                    (t.t0 = t.catch(0)),
                    f(o, "parseData 异常:", t.t0);
                case 12:
                  return t.abrupt("return", null);
                case 13:
                case "end":
                  return t.stop();
              }
          },
          r,
          null,
          [[0, 9]]
        );
      })
    );
  },
  m = function (e) {
    try {
      return e.data.data;
    } catch (e) {
      f("混合消息", "parseFollowData 异常:", e);
    }
    return null;
  },
  p = function (e, t) {
    var r,
      n = a(t);
    try {
      for (n.s(); !(r = n.n()).done; ) {
        var i = r.value;
        if (i.origin_msg_id === e || i.msg_id === e) return i;
      }
    } catch (e) {
      n.e(e);
    } finally {
      n.f();
    }
    return null;
  },
  d = function (e, t) {
    var r,
      n = a(t);
    try {
      for (n.s(); !(r = n.n()).done; ) {
        var i = r.value;
        if (i.user_id === e) return i;
      }
    } catch (e) {
      n.e(e);
    } finally {
      n.f();
    }
    return null;
  },
  _ = function (e) {
    var t = {};
    try {
      t = JSON.parse(e);
    } catch (e) {
      f("混合消息", "decode:", e);
    }
    return t;
  },
  f = function () {},
  h = {
    components: {
      BottomTips: function () {
        return "./bottom-tips.js";
      },
      blankTips: function () {
        return "./blank-tips.js";
      },
      item: function () {
        return "./item.js";
      },
      followItem: function () {
        return "./follow-item.js";
      },
    },
    setup: function (a, o) {
      var c = this,
        l = o.emit,
        m = n.ref(!1),
        p = {
          page: 0,
          page_size: 10,
          like_lastid: "",
          at_lastid: "",
          hotissue_lastid: "",
          comment_lastid: "",
          notice_time: "",
        },
        d = {
          page: 0,
          page_size: 10,
          like_lastid: "",
          at_lastid: "",
          hotissue_lastid: "",
          comment_lastid: "",
          notice_time: "",
        },
        _ = n.ref(!0),
        f = n.ref([]),
        h = {};
      r(
        c,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), s.getUserInfoData();
                case 2:
                  h = e.sent;
                case 3:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      ),
        n.onMounted(function () {
          y();
        });
      var v = !1,
        y = function () {
          return r(
            c,
            null,
            t().mark(function e() {
              var a;
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          i.requestMessageBoxListmix(d)
                        );
                      case 3:
                        if (!(a = e.sent) || 0 !== a.retcode) {
                          e.next = 18;
                          break;
                        }
                        return (e.next = 7), u(a, h);
                      case 7:
                        (f.value = e.sent),
                          (p.comment_lastid = a.comment_lastid || ""),
                          (p.at_lastid = a.at_lastid || ""),
                          (p.like_lastid = a.like_lastid || ""),
                          (p.hotissue_lastid = a.hotissue_lastid || ""),
                          (p.notice_time = a.notice_time || ""),
                          (_.value = a.has_more),
                          (m.value = !0),
                          l("refreshSuccess", { data: a, hasMore: _.value }),
                          (e.next = 19);
                        break;
                      case 18:
                        l("refreshFail");
                      case 19:
                        e.next = 24;
                        break;
                      case 21:
                        (e.prev = 21), (e.t0 = e.catch(0)), l("refreshFail");
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 21]]
              );
            })
          );
        };
      return {
        isDataReady: m,
        listData: f,
        refresh: y,
        loadMore: function () {
          return r(
            c,
            null,
            t().mark(function a() {
              var r, n;
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (v || !_.value) {
                          t.next = 20;
                          break;
                        }
                        return (
                          (p.page = Math.ceil(f.value.length / p.page_size)),
                          (t.prev = 2),
                          (v = !0),
                          (t.next = 6),
                          i.requestMessageBoxListmix(p)
                        );
                      case 6:
                        if (!(r = t.sent) || 0 !== r.retcode) {
                          t.next = 12;
                          break;
                        }
                        return (t.next = 10), u(r, h);
                      case 10:
                        (n = t.sent),
                          (f.value = [].concat(e(f.value), e(n))),
                          r.comment_lastid &&
                            (p.comment_lastid = r.comment_lastid),
                          r.at_lastid && (p.at_lastid = r.at_lastid),
                          r.like_lastid && (p.like_lastid = r.like_lastid),
                          r.hotissue_lastid &&
                            (p.hotissue_lastid = r.hotissue_lastid),
                          r.notice_time && (p.notice_time = r.notice_time),
                          (_.value = r.has_more),
                          l("loadMoreSuccess", { data: r, hasMore: _.value });
                      case 12:
                        t.next = 17;
                        break;
                      case 14:
                        (t.prev = 14), (t.t0 = t.catch(2)), l("loadMoreFail");
                      case 17:
                        return (t.prev = 17), (v = !1), t.finish(17);
                      case 20:
                      case "end":
                        return t.stop();
                    }
                },
                a,
                null,
                [[2, 14, 17, 20]]
              );
            })
          );
        },
        reportWithParams: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.from_user,
            a = void 0 === t ? "" : t,
            r = e.itemType,
            n = void 0 === r ? i.IteractionItemType.COMMENT : r;
          return { from_user: a, itemType: n };
        },
      };
    },
    computed: {
      PageType: function () {
        return i.PageType;
      },
      IteractionItemType: function () {
        return i.IteractionItemType;
      },
    },
  };
Array ||
  (
    n.resolveComponent("followItem") +
    n.resolveComponent("item") +
    n.resolveComponent("blank-tips") +
    n.resolveComponent("bottom-tips")
  )();
var v = n._export_sfc(h, [
  [
    "render",
    function (e, t, a, r, i, s) {
      return n.e(
        { a: r.listData && r.listData.length > 0 },
        r.listData && r.listData.length > 0
          ? {
              b: n.f(r.listData, function (e, t, a) {
                return n.e(
                  { a: e.itemType === s.IteractionItemType.FOLLOW },
                  e.itemType === s.IteractionItemType.FOLLOW
                    ? {
                        b: "e45d571d-0-" + a,
                        c: n.p({
                          "report-with-params": r.reportWithParams(e),
                          "report-prefix": "yy.message_box_interaction",
                          "item-index": t,
                          "item-data": e,
                        }),
                      }
                    : {
                        d: "e45d571d-1-" + a,
                        e: n.p({
                          "report-prefix": "yy.message_box_interaction",
                          "report-with-params": r.reportWithParams(e),
                          "item-index": t,
                          "item-data": e,
                          "item-type": e.itemType,
                        }),
                      },
                  { f: t }
                );
              }),
            }
          : (r.listData && r.listData.length, {}),
        { c: r.listData && 0 === r.listData.length, d: r.isDataReady },
        (r.isDataReady, {})
      );
    },
  ],
  ["__scopeId", "data-v-e45d571d"],
]);
wx.createComponent(v);
