var e,
  t,
  n = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  i = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  o = Object.defineProperty,
  s = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable,
  d = function (e, t, n) {
    return t in e
      ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  p = function (e, t) {
    for (var n in t || (t = {})) u.call(t, n) && d(e, n, t[n]);
    if (c) {
      var i,
        o = r(c(t));
      try {
        for (o.s(); !(i = o.n()).done; ) {
          n = i.value;
          m.call(t, n) && d(e, n, t[n]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return s(e, a(t));
  },
  f = function (e, t, n) {
    return new Promise(function (i, r) {
      var o = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            r(e);
          }
        },
        s = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            r(e);
          }
        },
        a = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(o, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  h = require("../../../stock-community-base/utils/knife.js"),
  _ = require("../../../stock-community-base/utils/commentFilter.js"),
  g = require("../../../stock-community-ui/utils/mixins/store.js"),
  v = require("../../../stock-community-ui/utils/service/index.js"),
  k = require("../../../../../../common/vendor.js"),
  w = require("../../../stock-community-base/utils/constant.js"),
  y = require("../../../stock-community-ui/utils/mixins/securityCheck/index.js"),
  b = h.sdk,
  x = b.getUserInfo,
  I = b.showModal,
  C = {},
  D = { userinfo: {}, page: 0 };
Object.keys(D).forEach(function (e) {
  C[e] = function () {
    return D[e];
  };
});
var U = l(p({}, g.store), {
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
      "{}" === JSON.stringify(D.userinfo) &&
        x().then(function (e) {
          D.userinfo = e;
        });
    },
    onPageInit: function (n) {
      return f(this, arguments, function (n) {
        var r = this,
          o = n.params,
          s = n.type,
          a = n.info,
          c = void 0 === a ? {} : a,
          u = n.scb,
          m = n.fcb;
        return i().mark(function n() {
          return i().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (
                      ((e = s),
                      (t = c) && "{}" !== JSON.stringify(t) && t.openid)
                    ) {
                      n.next = 9;
                      break;
                    }
                    return (n.prev = 1), (n.next = 4), x();
                  case 4:
                    (t = n.sent), (n.next = 9);
                    break;
                  case 7:
                    (n.prev = 7), (n.t0 = n.catch(1));
                  case 9:
                    return n.abrupt(
                      "return",
                      ((D.userinfo = t), r.getList(o, !0, u, m))
                    );
                  case 10:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[1, 7]]
          );
        })();
      });
    },
    updateTimeLine: function () {
      var e = this.getParams(!0);
      this.onPageInit({
        params: e,
        type: this.pageType,
        info: t,
        scb: this.successHanlde,
        fcb: this.networkErrorHandle,
      });
    },
    doGetCommentList: function (e, t, n) {
      return f(
        this,
        null,
        i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  throw new Error("need customize");
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
    getList: function (t, n, r, o) {
      return f(
        this,
        null,
        i().mark(function s() {
          var a = this;
          return i().wrap(function (s) {
            for (;;)
              switch ((s.prev = s.next)) {
                case 0:
                  return s.abrupt(
                    "return",
                    new Promise(function (s, c) {
                      a.doGetCommentList(t, a.pageType, D.userinfo)
                        .then(function () {
                          for (
                            var e = arguments.length, c = new Array(e), u = 0;
                            u < e;
                            u++
                          )
                            c[u] = arguments[u];
                          return f(a, [].concat(c), function () {
                            var e = this,
                              a =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                            return i().mark(function c() {
                              var u, m, d;
                              return i().wrap(function (i) {
                                for (;;)
                                  switch ((i.prev = i.next)) {
                                    case 0:
                                      if (0 === a.code) {
                                        i.next = 3;
                                        break;
                                      }
                                      return i.abrupt("return", void o());
                                    case 3:
                                      return (
                                        (u = a.data || {}),
                                        "commentDetail" === e.pageType &&
                                          (u = (function (e, t) {
                                            if (!e) return {};
                                            var n = [],
                                              i = {},
                                              r = {};
                                            return (
                                              e.comment &&
                                                e.comment.length > 0 &&
                                                e.comment.forEach(function (e) {
                                                  var o = (function (e, t) {
                                                    return {
                                                      user_id: e.from_user,
                                                      user_name:
                                                        e.from_user_name,
                                                      user_image:
                                                        e.from_user_image,
                                                      created_at: e.created_at,
                                                      user_type:
                                                        e.from_user_type,
                                                      vip_type: e.from_vip_type,
                                                      comment_id: e.comment_id,
                                                      subject_id: e.comment_id,
                                                      root_id: t,
                                                      like_num: e.like_num,
                                                      like_id: e.like_id,
                                                      retweet_count: 0,
                                                      hot_label: "",
                                                      is_yb_answer:
                                                        e.is_yb_answer,
                                                    };
                                                  })(e, t);
                                                  n.push(o);
                                                  var s,
                                                    a = {
                                                      stock_prop: "",
                                                      stock_id: "",
                                                      image: "",
                                                      image_list: (s = e)
                                                        .image_list,
                                                      attitude: "0",
                                                      user_id: s.from_user,
                                                      title: "",
                                                      subject_id: s.comment_id,
                                                      content: s.content,
                                                      source: "wzq",
                                                      topic_id: "",
                                                      news_type: "",
                                                      type: "",
                                                      status: s.status,
                                                      map_id: "",
                                                      content_link: "",
                                                      is_root: 0,
                                                      link: "",
                                                      latest_reply: "",
                                                      created_at: s.created_at,
                                                      sub_content: "",
                                                      news_id: "",
                                                      link_summary: "",
                                                      stock_price: "",
                                                      fund_prop: "",
                                                      image_prop: "",
                                                      special_type: 0,
                                                      user_name:
                                                        s.from_user_name,
                                                      user_image:
                                                        s.from_user_image,
                                                      user_type:
                                                        s.from_user_type,
                                                      vip_type: s.from_vip_type,
                                                      user_desc: null,
                                                      user_medal: null,
                                                      user_tags: [],
                                                      view_num: 50,
                                                      stock_ids: [],
                                                      owner: s.owner,
                                                      topic_name: "",
                                                      stock_name: "",
                                                      is_yb_answer:
                                                        s.is_yb_answer,
                                                    },
                                                    c = e.comment_id;
                                                  i["".concat(c)] = a;
                                                  var u = e.tails.length,
                                                    m = [];
                                                  e.tails &&
                                                    e.tails.length > 0 &&
                                                    e.tails.forEach(function (
                                                      t
                                                    ) {
                                                      var n = (function (
                                                        e,
                                                        t,
                                                        n
                                                      ) {
                                                        return {
                                                          content: e.content,
                                                          user_id: e.from_user,
                                                          root_id: t,
                                                          comment_id:
                                                            e.comment_id,
                                                          image_list:
                                                            e.image_list,
                                                          to_user: e.to_user,
                                                          owner: e.owner,
                                                          user_name:
                                                            e.from_user_name,
                                                          user_headimgurl:
                                                            e.from_user_image,
                                                          created_at:
                                                            e.created_at,
                                                          user_type:
                                                            e.from_user_type,
                                                          user_desc: "",
                                                          user_medal: null,
                                                          vip_type:
                                                            e.from_vip_type,
                                                          to_user_name:
                                                            e.to_user_name,
                                                          to_user_headimgurl:
                                                            e.to_user_headimgurl,
                                                          to_user_type:
                                                            e.to_user_type,
                                                          to_user_desc: "",
                                                          to_user_medal: null,
                                                          to_vip_type:
                                                            e.to_vip_type,
                                                          tails_timeline_mark:
                                                            n,
                                                          is_yb_answer:
                                                            e.is_yb_answer,
                                                        };
                                                      })(
                                                        t,
                                                        c,
                                                        e.tails_timeline_mark
                                                      );
                                                      m.push(n);
                                                    }),
                                                    (r["".concat(c)] = {
                                                      cnt: u,
                                                      list: m,
                                                    });
                                                }),
                                              {
                                                rss_list: n,
                                                subject_dict: i,
                                                subject_comment_dict: r,
                                                more_flag: e.more_flag,
                                                comment_cnt: e.comment_cnt,
                                                all_order: e.all_order,
                                                order: e.order,
                                                tl_mark: e.tl_mark,
                                                yb_disclaimer: e.yb_disclaimer,
                                              }
                                            );
                                          })(
                                            u,
                                            t.subjectid || t.subject_id || ""
                                          )),
                                        (i.next = 7),
                                        _.CommentFilter(u, !0, !1, D.userinfo)
                                      );
                                    case 7:
                                      (m = i.sent),
                                        (d = m.commentsData),
                                        n && (e.commentsData.length = 0),
                                        d &&
                                          d.length &&
                                          d.map(function (t) {
                                            e.commentsData.push(t);
                                          }),
                                        (u.min_id = u.begin),
                                        r && r(n, u),
                                        s(!0);
                                    case 10:
                                    case "end":
                                      return i.stop();
                                  }
                              }, c);
                            })();
                          });
                        })
                        .catch(function (t) {
                          n && (a.commentsData.length = 0), o && o(n);
                          var i = ""
                            .concat(w.prefix[e], "_")
                            .concat(w.modules[e], ".getdata.error");
                          k.StockBridge.report(i), c(t);
                        });
                    })
                  );
                case 1:
                case "end":
                  return s.stop();
              }
          }, s);
        })
      );
    },
    onPutLike: function (n, r) {
      return f(
        this,
        null,
        i().mark(function n() {
          var o, s, a;
          return i().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (((n.t0 = "{}" === JSON.stringify(D.userinfo)), !n.t0)) {
                      n.next = 5;
                      break;
                    }
                    return (n.next = 4), x(!0);
                  case 4:
                    D.userinfo = n.sent;
                  case 5:
                    (o = this.commentsData[r]).like_id
                      ? ((o.like_id = ""), (o.like_num -= 1))
                      : ((o.like_id = o.id), (o.like_num += 1)),
                      (s = { attitude: o.like_id ? -1 : 0, publish_id: o.id }),
                      v.putRssLike(
                        -1 !== ["wzq", "mini"].indexOf(h.platform)
                          ? p(
                              {
                                nickname: t.nickname,
                                avatar_url: t.headimgurl,
                              },
                              s
                            )
                          : s,
                        D.userinfo,
                        !1
                      ),
                      w.prefix[e] &&
                        w.modules[e] &&
                        ((a = ""
                          .concat(w.prefix[e], "_")
                          .concat(w.modules[e], "_duantie_dianzan_")
                          .concat(o.like_id ? "like" : "unlike")),
                        this.$emit("commentReport", a),
                        k.StockBridge.report(a, {
                          postid: o.id || "",
                          newsid: o.news_id || this.newsId || "",
                        }));
                  case 9:
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
    onTapFollow: function (e, n) {
      return f(
        this,
        null,
        i().mark(function e() {
          var r, o, s, a;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = D.userinfo.openid), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 4), x(!0);
                  case 4:
                    D.userinfo = e.sent;
                  case 5:
                    (r = this.commentsData[n]),
                      (o = r.isFollow
                        ? "已取消关注"
                        : "关注成功，可在「股友圈」看Ta的动态~"),
                      (r.isFollow = !r.isFollow),
                      (s = {
                        g_openid: D.userinfo.openid,
                        to_openid: r.user_id,
                      }),
                      v.putFollow(
                        "wzq" === h.platform
                          ? p(
                              {
                                app: "wzq",
                                check: 12,
                                nickname: null == t ? void 0 : t.nickname,
                                avatar_url:
                                  (null == t ? void 0 : t.headimgurl) ||
                                  w.headimgurl,
                              },
                              s
                            )
                          : s,
                        D.userinfo,
                        r.isFollow,
                        !1
                      ),
                      (a = ""
                        .concat(w.prefix[this.pageType], ".")
                        .concat(w.moduleName, ".guanzhu_tap")),
                      this.$emit("commentReport", a),
                      this.$emit("onTapFollow", { text: o, itemData: r }),
                      k.StockBridge.report(a);
                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    onPutComment: function (t) {
      return f(
        this,
        null,
        i().mark(function n() {
          var r, o, s, a, c, u;
          return i().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (r = {}),
                      (o = "turn" === t.showType),
                      (s = t.id),
                      (n.prev = 2),
                      (n.next = 5),
                      v.getSendCommentTokenPlat({ parent_id: s })
                    );
                  case 5:
                    if (
                      ((a = n.sent),
                      (c = null == a ? void 0 : a.code),
                      "-204" !== String(c))
                    ) {
                      n.next = 9;
                      break;
                    }
                    return n.abrupt(
                      "return",
                      void I({
                        title: "提示",
                        content: "此用户设置了评论禁止回复",
                        confirmText: "我知道了",
                      })
                    );
                  case 9:
                    n.next = 13;
                    break;
                  case 11:
                    (n.prev = 11), (n.t0 = n.catch(2));
                  case 13:
                    (r = {
                      type: "detail",
                      belong: encodeURIComponent(t.belong || "stock"),
                      symbol: encodeURIComponent(t.stock_id || ""),
                      id: encodeURIComponent(t.id || ""),
                      name: encodeURIComponent(t.user_name || ""),
                      touser: encodeURIComponent(t.user_name || ""),
                      toOpenid: encodeURIComponent(t.user_id || ""),
                      topicId: encodeURIComponent(t.topic_id || ""),
                      topic: encodeURIComponent(t.topics || t.topic_id || ""),
                      rootid: encodeURIComponent(t.id || ""),
                      post_scene: "detailcomment",
                      forwardContent: o ? this.detailData.content : "",
                    }),
                      (this.comEditData = r),
                      this.UpdateUserImageUrl(),
                      (u = ""
                        .concat(w.prefix[e], "_")
                        .concat(w.modules[e], "_duantie_putcomment")),
                      "mini" !== h.platform && this.$emit("onPutComment", r),
                      k.StockBridge.report(u, {
                        postid: t.id || "",
                        newsid: t.news_id || this.newsId || "",
                      });
                  case 16:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this,
            [[2, 11]]
          );
        })
      );
    },
    onPutReply: function (t) {
      return f(
        this,
        null,
        i().mark(function n() {
          var r, o, s, a, c, u, m, d, p;
          return i().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (r = {}),
                      (o = t.comment_id),
                      (s = t.content),
                      (a = t.root_id),
                      (n.prev = 2),
                      (n.next = 5),
                      v.getSendCommentTokenPlat({ parent_id: o })
                    );
                  case 5:
                    if (
                      ((c = n.sent),
                      (u = null == c ? void 0 : c.code),
                      "-204" !== String(u))
                    ) {
                      n.next = 9;
                      break;
                    }
                    return n.abrupt(
                      "return",
                      void I({
                        title: "提示",
                        content: "此用户设置了评论禁止回复",
                        confirmText: "我知道了",
                      })
                    );
                  case 9:
                    n.next = 13;
                    break;
                  case 11:
                    (n.prev = 11), (n.t0 = n.catch(2));
                  case 13:
                    (m = this.getRealReplyContent(s)),
                      (d = ""),
                      t.image_list &&
                        t.image_list.length > 0 &&
                        (d = encodeURIComponent(t.image_list[0].origin || "")),
                      (r = {
                        id: o,
                        type: "detail",
                        type2: "reply",
                        symbol: encodeURIComponent(this.stock_id || ""),
                        name: encodeURIComponent(this.stock_name || ""),
                        touser: t.user_name || t.from_user_name || "",
                        toOpenid: t.user_id || t.from_user || "",
                        rootid: encodeURIComponent(a || ""),
                        topicId: encodeURIComponent(this.topicId || ""),
                        content: m.replace(/\r|\n/g, ""),
                        source: encodeURIComponent(this.belong || "stock"),
                        showbtn: "wzq" === h.platform ? 1 : 0,
                        post_scene: "detailreply",
                        parent_info: d,
                      }),
                      (this.comEditData = r),
                      this.UpdateUserImageUrl(),
                      (p = ""
                        .concat(w.prefix[e], ".")
                        .concat(w.modules[e], ".duantie_putreply")),
                      this.$emit("onPutReply", p),
                      k.StockBridge.report(p, { postid: o || "" });
                  case 18:
                  case "end":
                    return n.stop();
                }
            },
            n,
            this,
            [[2, 11]]
          );
        })
      );
    },
    getRealReplyContent: function (e) {
      if (!e) return "";
      var t = e.split(/\x1c\<1,\S+:[\s|\S]*\>\x1c/);
      return n(t, 1)[0] || "";
    },
    UpdateUserImageUrl: function () {
      return f(
        this,
        null,
        i().mark(function e() {
          var t,
            n,
            r,
            o,
            s,
            a = this;
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (this.headimageurl) {
                      e.next = 12;
                      break;
                    }
                    return (e.prev = 1), (e.next = 4), v.getBindList();
                  case 4:
                    (r = e.sent),
                      (o = r.data),
                      (s =
                        null ==
                        (n =
                          null == (t = null == o ? void 0 : o.AccountList)
                            ? void 0
                            : t[0])
                          ? void 0
                          : n.HeadImage) && (this.headimageurl = s),
                      (e.next = 12);
                    break;
                  case 10:
                    (e.prev = 10), (e.t0 = e.catch(1));
                  case 12:
                    this.$nextTick(function () {
                      var e,
                        t = "showLiteComEdit";
                      a.pageType &&
                        a.pageType.length > 0 &&
                        (t = "".concat(a.pageType, "-showLiteComEdit")),
                        null == (e = a.hqBridge) ||
                          e.busEmit(t, {
                            comEditData: a.comEditData,
                            headimageurl: a.headimageurl,
                          }),
                        k.StockBridge.busEmit(t, {
                          comEditData: a.comEditData,
                          headimageurl: a.headimageurl,
                        });
                    });
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this,
            [[1, 10]]
          );
        })
      );
    },
    onNewComment: function (e, t) {
      var n,
        i = this;
      null == (n = this.hqBridge) || n.busEmit("onNewComment", e, t),
        this.$nextTick(function () {
          var e;
          null == (e = i.hqBridge) || e.busEmit("watchHeightChange");
        });
    },
    onHideComEdit: function () {
      var e = this;
      (this.showComEdit = !1),
        this.$nextTick(function () {
          var t;
          null == (t = e.hqBridge) || t.busEmit("watchHeightChange");
        });
    },
    onDelete: function (t) {
      var n,
        i = this,
        r =
          null != (n = null == t ? void 0 : t.id)
            ? n
            : null == t
            ? void 0
            : t.comment_id;
      if (r) {
        var o = ""
          .concat(w.prefix[e], ".")
          .concat(w.modules[e], ".delete_comment");
        k.StockBridge.report(o, {
          postid:
            (null == t ? void 0 : t.id) ||
            (null == t ? void 0 : t.comment_id) ||
            "",
          newsid: (null == t ? void 0 : t.news_id) || this.newsId || "",
        }),
          I({ content: "确定删除留言吗？" })
            .then(function () {
              v.deleteRssSubject(r).then(function (e) {
                var n;
                i.deleteItem(r),
                  null == (n = i.hqBridge) || n.busEmit("onReplyDelete", t, r);
              });
            })
            .catch(function (e) {});
      }
    },
  }),
  T = h.sdk.getUserInfo,
  L = {
    name: "StockMpNewsComList",
    components: {
      ComList: function () {
        return "../../components/comList/index.js";
      },
      LoadMore: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/loadMore/index.js";
      },
    },
    mixins: [y.securityCheck],
    inject: { hqBridge: { default: {} } },
    provide: function () {
      return {
        newsCommentId: this.newsCommentId,
        platformType: this.platformType(),
        userinfo: this.dUserInfo,
      };
    },
    props: {
      pageType: { type: String, default: "" },
      eventId: { type: String, default: "" },
      pUserinfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      eventInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
      didAgreeUserAgreement: { type: Boolean, default: !0 },
    },
    data: function () {
      return {
        pageInit: !1,
        platform: h.platform,
        nomore: !1,
        noNetwork: !1,
        isLoading: !1,
        pageNum: 0,
        min_id: "",
        event_min_id: "",
        commentCnt: 0,
        commentsData: [],
        dUserInfo: {},
      };
    },
    computed: l(p({}, C), {
      newsCommentId: function () {
        return this.eventInfo.commentid || "";
      },
    }),
    created: function () {
      this.dUserInfo = this.pUserinfo;
    },
    mounted: function () {
      this.userInit(), this.init();
    },
    methods: l(p({}, U), {
      init: function () {
        return f(
          this,
          null,
          i().mark(function e() {
            var t;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t = this.getParams(!0)),
                        this.dUserInfo && this.dUserInfo.openid)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (e.prev = 2), (e.next = 5), T();
                    case 5:
                      (this.dUserInfo = e.sent), (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(2));
                    case 10:
                      return (
                        (e.next = 12),
                        this.onPageInit({
                          params: t,
                          type: this.pageType,
                          info: this.dUserInfo,
                          scb: this.successHanlde,
                          fcb: this.networkErrorHandle,
                        })
                      );
                    case 12:
                      (this.pageInit = e.sent),
                        this.pageInit &&
                          this.$emit("getCommentCount", this.commentCnt);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 8]]
            );
          })
        );
      },
      onMpShow: function () {
        this.updateComList();
      },
      updateComList: function () {
        this.isLoading || this.updateTimeLine();
      },
      getParams: function (e) {
        var t = {
          id: this.eventId,
          visible: 1,
          limit: 10,
          begin: "",
          content_link: 1,
        };
        return (
          e
            ? ((this.pageNum = 0), (t.begin = ""), (t.begin_news = ""))
            : (this.pageNum++,
              (t.begin = this.min_id),
              (t.begin_news = this.event_min_id || "")),
          (this.pageMaxNum = Math.max(this.pageNum, this.pageMaxNum)),
          (t.map_id = "".concat(this.eventId)),
          (t.comment_id = this.eventInfo.commentid || ""),
          t
        );
      },
      doGetCommentList: function (e, t, n) {
        return f(
          this,
          null,
          i().mark(function t() {
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (this.isLoading = !0), (t.next = 3), v.getMapRssList(e)
                      );
                    case 3:
                      return t.abrupt("return", t.sent);
                    case 4:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      onHandleTapList: function (e, t) {
        var n = this;
        if (this.didAgreeUserAgreement) {
          var i = this.commentsData.findIndex(function (t, n, i) {
              return t.subject_id === e.subject_id;
            }),
            r = t || {},
            o = r.eventName,
            s = r.eventData,
            a = {
              putComment: "onPutComment",
              putLike: "onPutLike",
              tapPerson: "onTapPerson",
              tapDetail: "onTapDetail",
              tapContent: "onTapContent",
              putPeply: "onPutReply",
              tapDelete: "onDelete",
              tapImage: "onTapImage",
            };
          if (
            "tapMore" === o &&
            ("zxg" === h.platform || "mini" === h.platform)
          ) {
            var c = Object.assign({}, s);
            (s.itemData = c), (s.listData = this.commentsData);
          }
          var u = (s || {}).fakeInput;
          o &&
            a[o] &&
            this.securityCheck({
              eventName: "onTapDetail" === a[o] ? "tapDetail" : o,
              fakeInput: u,
              postData: this.commentsData[i] || {},
            }).then(function () {
              var e = n[a[o]];
              e &&
                e(s, i, {
                  pageType: n.pageType,
                  newsCommentId: n.eventInfo.commentid || "",
                  itemData: n.commentsData[i],
                });
            }),
            this.$forceUpdate();
        } else this.$emit("checkUserAgreementStatus");
      },
      loadData: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return f(
          this,
          null,
          i().mark(function t() {
            var n;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!this.isLoading && !this.nomore) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (n = this.getParams(e)),
                        (t.next = 5),
                        this.getList(
                          n,
                          e,
                          this.successHanlde,
                          this.networkErrorHandle
                        )
                      );
                    case 5:
                      this.pageInit = t.sent;
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      successHanlde: function (e, t) {
        var n = t.more_flag,
          i = void 0 === n ? "" : n,
          r = t.min_id,
          o = void 0 === r ? "" : r,
          s = t.event_min_id,
          a = void 0 === s ? "" : s,
          c = t.comment_cnt,
          u = void 0 === c ? 0 : c;
        (this.nomore = !i),
          (this.min_id = o),
          (this.event_min_id = a),
          (this.commentCnt = u),
          (this.noNetwork = !1),
          (this.isLoading = !1),
          this.$forceUpdate();
      },
      networkErrorHandle: function (e) {
        (this.noNetwork = !0), (this.isLoading = !1);
      },
      isLast: function (e) {
        return e === this.commentsData.length - 1;
      },
      showProfilePop: function (e) {
        this.$emit("showProfilePop", e);
      },
    }),
  };
Array || (k.resolveComponent("ComList") + k.resolveComponent("LoadMore"))();
var P = k._export_sfc(L, [
  [
    "render",
    function (e, t, n, i, r, o) {
      return k.e(
        {
          a: k.o(function (e) {
            return o.loadData(!0);
          }, 4093),
          b: k.o(o.onHandleTapList, 4094),
          c: k.p({
            "page-type": n.pageType,
            "comments-data": r.commentsData,
            "no-network": r.noNetwork,
            "item-bottom-handle": ["comment", "like", "delete"],
          }),
          d: r.commentsData && r.commentsData.length > 0,
        },
        r.commentsData && r.commentsData.length > 0
          ? { e: k.p({ "no-more": r.nomore, "with-tencent-flag": !1 }) }
          : {}
      );
    },
  ],
]);
wx.createComponent(P);
